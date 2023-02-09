'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-07-22T17:01:17.194Z',
    '2020-07-28T23:36:17.929Z',
    '2020-08-01T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2023-01-25T14:43:26.374Z',
    '2023-02-01T18:49:59.371Z',
    '2023-02-03T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const formattedDateMovements = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);
  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} Days Ago`;
  // else {
  //   const day = `${date.getDate()}`.padStart(2, 0);
  //   const month = `${date.getMonth() + 1}`.padStart(2, 0);
  //   const year = date.getFullYear();
  //   return `${day}/${month}/${year}`;
  // }

  return new Intl.DateTimeFormat(locale).format(date);
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(acc.movementsDates[i]);

    const displayDate = formattedDateMovements(date, acc.locale);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
       <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);

  {
    [...document.querySelectorAll('.movements__row')].forEach(function (
      row,
      i
    ) {
      if (i % 2 === 0) row.style.backgroundColor = 'lightgreen';
    });
  }
};

const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    // in each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // when timer reaches 0 seconds, stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }

    // decrease timer by 1sec
    time--;
  };
  // Set timer to 5 minutes
  let time = 30;

  // call the timer in every second
  tick();
  const timer = setInterval(tick, 1000);

  return timer;
};
///////////////////////////////////////
// Event handlers
let currentAccount, timer;

// FAKE ACCOUNT
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

// Time/Date format

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Create Current Date and Time
    const now = new Date();
    const options = {
      hour: 'numeric',
      minutes: 'numeric',
      day: 'numeric',
      weekday: 'long',
      month: 'long',
      year: 'numeric',
    };

    // const locale = navigator.language;
    // console.log(locale);
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // TIMER
    clearInterval(timer);
    timer = startLogOutTimer(timer);

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add Transfer Date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    // Timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);

      // Add Loan Date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);

      clearInterval(timer);
      timer = startLogOutTimer();
    }, 4000);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// console.log(23 === 23.0);

// // Base 10 - 0 to 9
// // Binary base 2 - 0,1

// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 === 0.3);

// // CONVERSION OF STRINGS TO NUMBERS
// console.log(Number('23'));
// console.log(+'23');

// // PARSING
// console.log(Number.parseInt('30px', 10));
// console.log(Number.parseInt('e30', 10));

// console.log(Number.parseFloat('3.4rem'));
// console.log(Number.parseInt('3.4rem'));

// //console.log(parseFloat(' 2.5rem '));

// // Check if avalue is not a number
// console.log(Number.isNaN(20));
// console.log(Number.isNaN('20x'));
// console.log(Number.isNaN(+'20x'));
// console.log(Number.isNaN(23 / 0));

// // Checking if value is a number
// console.log(Number.isFinite(20));
// console.log(Number.isFinite('20'));
// console.log(Number.isFinite(+'20x'));
// console.log(Number.isFinite(23 / 0));

// // Checking if value is an integer
// console.log(Number.isInteger(23));
// console.log(Number.isInteger(23.0));
// console.log(Number.isInteger(23 / 0));
// console.log(Number.isInteger('23'));

// // Math and Rounding
// // sqrt operator
// console.log(Math.sqrt(25));

// // Exponential operator
// console.log(25 ** (1 / 2));
// console.log(8 ** (1 / 3));

// // max operator
// // const arr = [1, 8, 90, 6, 600, 77];
// // console.log(Math.max(...arr));
// console.log(Math.max(5, 35, 90, 36, 0));

// // min operator
// console.log(Math.min(5, 35, 90, 36, 0));

// // CONSTANTS ON MATH OBJECT
// // 1. The PI function
// console.log(Math.PI * Number.parseFloat('10px') ** 2);

// // 2. The random function
// console.log(Math.trunc(Math.random() * 6) + 1);

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min) + 1) + min;
// // 0...1 -> 0... (max -min) -> min...max
// // console.log(randomInt(10, 20));

// // Rounding Integers
// console.log(Math.trunc(23.3));

// console.log(Math.round(23.3));
// console.log(Math.round(23.9));

// console.log(Math.ceil(23.3));
// console.log(Math.ceil(23.9));

// console.log(Math.floor(23.3));
// console.log(Math.floor(23.9));

// console.log(Math.trunc(-23.3));
// console.log(Math.floor(-23.3));

// // The Remainder Operator (%)
// console.log(5 % 2);
// console.log(5 / 2);

// console.log(8 % 3);
// console.log(8 / 3);

// console.log(6 % 2);
// console.log(6 / 2);

// console.log(7 % 2);
// console.log(7 / 2);

// const isEven = n => n % 2 === 0;
// console.log(isEven(8));
// console.log(isEven(23));
// console.log(isEven(514));

// labelBalance.addEventListener('click', function () {
//   [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
//     if (i % 2 === 0) row.style.backgroundColor = 'lightgreen';
//     else row.style.backgroundColor = 'gray';
//   });
// });

// // Working with 'BigInt'
// console.log(2 ** 53 - 1);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(2 ** 53 + 1);
// console.log(2 ** 53 + 2);
// console.log(2 ** 53 + 3);
// console.log(2 ** 53 + 4);

// console.log(23799674560547685475867654346568756n);
// console.log(BigInt(23799674560547685475867654346568756));
// console.log(2378996745);

// // Operations
// console.log(10000n * 10000n);
// console.log(36565267274786438385935648785834697n * 1000000n);

// const huge = 165248353896875373658547935n;
// const num = 23;
// // console.log(huge * num);
// console.log(huge * BigInt(num));

// // Exceptions
// console.log(20n > 15);
// console.log(20n === 20);
// console.log(typeof 20n);
// console.log(20n == '20');

// // Divisions
// console.log(11n / 3n);
// console.log(11 / 3);

// CREATING DATES
// 1. Creating Date using "new Date" constructor
// const now = new Date();
// console.log(now);

// // 2. Parsing a date from a date string
// console.log(new Date('Aug 02 2020 18:05:04'));
// console.log(new Date('December 24, 2015'));
// console.log(new Date(account1.movementsDates[0]));

// // 2.1. Parsing Date based on date time in hour, minutes and seconds
// console.log(new Date(2037, 10, 19, 15, 23, 5));
// console.log(new Date(2037, 10, 31));

// console.log(new Date(0));

// // conversion of day to miliseconds
// console.log(new Date(3 * 24 * 60 * 60 * 1000));

// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getMonth());

// console.log(future.getDate());
// console.log(future.getDay());

// console.log(future.getHours());
// console.log(future.getMinutes());

// console.log(future.getSeconds());
// console.log(future.toISOString());

// console.log(future.toLocaleDateString());
// console.log(future.toDateString());

// console.log(future.getTime());
// console.log(new Date(2142285780000));

// console.log(future.setFullYear(2040));
// console.log(future);

// console.log(Date.now());
// console.log(new Date(1674863116644));

// const future = new Date(2037, 10, 19, 15, 23);
// console.log(+future);
// console.log(future);

// console.log(new Date(2142285780000));
// console.log(new Date(2142285780000).toTimeString());

// const calcDaysPassed = (date1, date2) =>
//   Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

// const days1 = calcDaysPassed(new Date(2037, 5, 14), new Date(2037, 5, 24));
// console.log(days1);

// const num = 3489569.33;

// const options = {
//   style: 'currency',
//   unit: 'celsius',
//   currency: 'EUR',
// };

// console.log('US:  ', new Intl.NumberFormat('en-US', options).format(num));
// console.log(
//   ('Germany:  ', new Intl.NumberFormat('de-DE', options).format(num))
// );
// console.log('Syria:  ', new Intl.NumberFormat('ar-SY', options).format(num));
// console.log(
//   navigator.language,
//   new Intl.NumberFormat(navigator.language, options).format(num)
// );

// SET TIMEOUT
// const ingredients = ['olives', 'spinach'];

// const pizzaTimeout = setTimeout(
//   (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
//   3000,
//   ...ingredients
// );
// console.log('Waiting ...');

// if (ingredients.includes('spinach')) clearTimeout(pizzaTimeout);

// // SETINTERVAL
// setInterval(function () {
//   const now = new Date();
//   console.log(now);

//   const hour = now.getHours();
//   const min = now.getMinutes();
//   const seconds = now.getSeconds();

//   console.log(`${hour}:${min}:${seconds}`);
// }, 1000);
