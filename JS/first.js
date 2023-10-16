
// 1) Математичні оператори ( +  -  *   / )
// Виведи загальну к-ть яблук та виноградую та їх різницю

// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total);
// const diff = grapes - apples ;
// console.log(diff);

// 2) Комбіновані оператори ( += )
// Заміни вираз перевизначення комбінованим оператором +=

// let students = 100;
// students = students + 50;
// students += 50;
// console.log(students);

// 3) Пріоритет операторів
// Розбери пріоритет операторів в інструкції привласнення значення змінної result 

// const result = 108 + 223 - 2 * 5;
// console.log(result);

// (спочатку множення  2 * 5 = 10  потім додавання 108+223= 331 потім віднімання 331-10 = 321  в  консолі виведеться результат 321 
 /// можна відокремити дужками і тоді буде результат який ми хотіли зробити)


//  4) Клас Math

//  Напиши скрипт який виводить у консоль заокруглені вгору/вниз і т.д. значення
//  змінної value  Використовуй методи Math.floor(), Math.ceil() та Math.round() .Перевір, що буде в консолі при значеннях 27,3 тп 27,9.

// value = 27.7
// console.log(Math.floor(value));     
// console.log(Math.ceil(value));      
// console.log(Math.round(value));


// 5) Конкатенація рядків( додавання рядків)

// const value = 20;
// const value2 = '15';
// const result = value - Number(value2);
// console.log(result)

// 6) Шаблонні рядки 

// Склади речення за допомогою шаблонних рядків А has B bots in stock, де А, В - змінні, вставленні в рядок.

// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${repairBots + defenceBots} in stock `;
// console.log(message)


// 7) Методи рядків та чейнінг 

// Напиши скрипт, який розраховує індекс маси тіла людини.Для цього необхідно розділити вагу в кг на квадрат висоти людини в метрах
// Вага та висота зберігаються у змінних weight тa height  але не як числа, а в вигляді ряків(спеціально для завдання). 
// Не чилі числа  можуть бути у вигляді 24,7 або  , тобто як роздільник дробової частини може бути кома.
// індекс маси тіла необхідно округлити до однієї цифри після коми

// let weight = '88.3';
// let height = '1.75';

// weight = Number(weight.replace(',', '.'));
// console.log( weight)
// height = Number(height)
// const bmi = Number((weight / height **2).toFixed(1));
// console.log(bmi)

// 8) Оператори порівняння та приведення типів 

// console.log('11' >= 10) ;
// console.log('MANGO' && null );

// if( 4>5){
//     console.log('name')

// } else {
//     console.log('age')
// } 


// const companyName = prompt('Яка офіційна назва JavaScript?');

// if(companyName === 'ECMAscript'){

//     alert('Правильно')
// }else{
//     alert('Не знаєте?')
// }
// console.log(companyName)



// const hours = 14;
// const minutes = 26;

// if(minutes){
//     console.log(`${hours}г. ${minutes}хв.`)
// } else{
//     console.log(`${hours}г.`)
// }


// const userInput = Number(prompt('Введіть число'));
// if (!userInput){
//     console.log('Це нуль');
// } else if (userInput >0){ 
//     console.log('Це Позитивне число')
// } else {
//     console.log('Це негативне число')
// }

// const hours = 25;
// if(hours >=17 && hours <=24){
//     console.log('Expires')
// } else if(hours< 17){
//     console.log('Pending')
// } else  {hours > 24;
//     console.log('Overdue')
// }


// const dayDedline = 2;
// if (!dayDedline){
//     console.log('Oggi')
// } else if(dayDedline === 1){
//     console.log('domani')
// } else if(dayDedline === 2){
//     console.log('dopo domani')
// } else {
//     console.log('futuro')
// }
// function fn( array, cash){
//     const obj = {};
//     for(let i = 1; i <= cash; i+=1){
//         obj[i] = 0;
//     }
//     array.forEach(bayer => {
//        const values = Object.values(obj) 
      
//        const minValue = Math.min(...values)
//        const currentCase = values.indexOf(minValue) + 1;
//        obj[currentCase] += bayer;
      
//     });
//     return obj;
// }
// console.log(fn([12,3,5,6,2,15,7] , 2));


// const LOCAL_KEY = 'feedback-form-state';
// const form = document.querySelector('.feedback-form');
// populateFeedbackForm();
// form.addEventListener('submit', onFormSubmit);
// form.addEventListener('input', throttle(onInputData, 500));

// function onFormSubmit(e) {
//   e.preventDefault();
//   const { email, message } = e.currentTarget.elements;
//   console.log({ email: email.value, message: message.value });
//   if (localStorage.getItem(LOCAL_KEY)) {
//     localStorage.removeItem(LOCAL_KEY);
//   }
//   e.currentTarget.reset();
// }

// function onInputData(e) {
//   let data = localStorage.getItem(LOCAL_KEY);
//   data = data ? JSON.parse(data) : {};
//   data[e.target.name] = e.target.value.trim();
//   localStorage.setItem(LOCAL_KEY, JSON.stringify(data));
// }

// function populateFeedbackForm() {
//   let data = localStorage.getItem(LOCAL_KEY);
//   if (!data) return;
//   data = JSON.parse(data);
//   // Object.entries(data).forEach(([name, value]) => {
//   //   form.elements[name].value = value || '';
//   // });
//   for (const key in data) {
//     form.elements[key].value = data[key] || '';
//   }
// }

              //  АСИНХРОННІСТЬ   ДАТА 


// const date = new Date();
// console.log(date.getMonth());

// const currentDate = Date.now();
// console.log('Date.now()', currentDate);

// const box = document.querySelector('.js-box');
// const timer = document.querySelector('.js-timer');
// let counter = 11;
// setTimeout(() => {
//   box.style.display = 'block'; 
//   const id = setInterval(()=> {
//     // console.log(id);
//     counter -= 1;
//  timer.textContent = counter;
 
//   if(!counter){
//     clearInterval(id);
//     box.style.display = "none";
//   }
//   }, 1000);
// }, 1000);




// Практика
// Потрібно створити два приклади годинника (Електронний та механічний)

// const arrDay = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П`ятниця', 'Субота'];

// const namesOfMonth = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];

// const selectors = {
//     day: document.querySelector('.date-day'),
//     date: document.querySelector('.date'),
//     month: document.querySelector('.date-month'),
//     year: document.querySelector('.date-year'),

//     clock: document.querySelector('.digital-clock'),

//     seconds: document.querySelector('.clock-seconds__arrow'),
//     minutes: document.querySelector('.clock-minutes__arrow'),
//     hours: document.querySelector('.clock-hours__arrow')
// };

// selectors.second.style.transform = 'rotate(120deg)';

// const timeCb = () => {
//     console.log('SetInterval')
//     const currentDate = new Date();

//     const day = currentDate.getDay();
//     const date = currentDate.getDate();
//     const month = currentDate.getMonth();
//     const year = currentDate.getFullYear();

//     const localTime = currentDate.toLocaleTimeString('uk-UA');
//     // console.log(localTime);

//     // console.log(day, date, month, year)

//     selectors.day.textContent = arrDay[day];
//     selectors.month.textContent = namesOfMonth[month];
//     selectors.date.textContent = date;
//     selectors.year.textContent = year;
//     selectors.clock.textContent = localTime;

//     const hours = currentDate.getHours();
//     const minutes = currentDate.getMinutes();
//     const seconds = currentDate.getSeconds();
//     // console.log('Seconds: ' + seconds);

//     const secondsDeg = 360 / 60 * seconds;
//     const minutesDeg = 360 / 60 * minutes;
//     const hoursDeg = 360 / 12 * hours + (360 / 12 / 60) * minutes;
//     // console.log('SecondsDeg: ' + secondsDeg)

//     selectors.seconds.style.transform = `rotate(${secondsDeg}deg)`;
//     selectors.minutes.style.transform = `rotate(${minutesDeg}deg)`;
//     selectors.hours.style.transform = `rotate(${hoursDeg}deg)`;

// }

// timeCb();

// setInterval(timeCb, 1000)




// import throttle from "lodash.throttle";

// const formEl = document.querySelector('.feedback-form');

// formEl.addEventListener("input", throttle(onInputData, 500));
// formEl.addEventListener("submit", onSubmit);

// const input = formEl.email;
// const texteria = formEl.message;
// const STORAGE_KEY = 'feedback-form-state';
// let formElements = {};
// dataLocalStorage();

// function onInputData(event) {
// // const userData = {
// //   email: input.value.trim(),
// //   message: texteria.value.trim(),
// // }

// formElements[event.target.name] = event.target.value
// localStorage.setItem('STORAGE_KEY', JSON.stringify(formElements));

// };

// function onSubmit(event) {
//   event.preventDefault();
//   const { email, message } = event.currentTarget.elements;
//  const dataForm = {
//         email: email.value,
//         message: message.value,
//     };
//   if (email.value === '' || message.value === '') {
//    alert(`Please fill in all the fields!`);
//  return formEl;
//   }
  
//   console.log(dataForm);
//   localStorage.removeItem('STORAGE_KEY');
//    formEl.reset();

// }


// function dataLocalStorage() {
//   if (JSON.parse(localStorage.getItem('STORAGE_KEY'))) {
//     input.value = JSON.parse(localStorage.getItem('STORAGE_KEY')).email;
//     texteria.value = JSON.parse(localStorage.getItem('STORAGE_KEY')).message;
//   }
// }
const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => { 
    resolve (ms)
  }, ms)
    
  })
}
const logger = time => console.log(`resolved after ${time}ms`)
delay(2000).then(a => logger(a));
delay(1000).then(b => logger(b));




// const supportPage = [
//     {
//         title: 'Save the Children',
//         url:
//           'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
        
//         img: './img/support/save_children.png" alt="save_children" width="131"',
//         img2x: './img/support/save_children@2x.png" alt="save_children" width="131"',
//         p: '01',
//       },
//       {
//         title: 'Project HOPE',
//         url: 'https://www.projecthope.org/country/ukraine/',
//         img: './img/support/project_hope.png" alt="project_hope" width="62"',
//         img2x: './img/support/project_hope@2x.png" alt="project_hope" width="62"',
//         p: '02',
//       },
//       {
//         title: 'International Medical Corps',
//         url: 'https://internationalmedicalcorps.org/country/ukraine/',
//         img: './img/support/medical_corps.png" alt="medical_corps" width="101"',
//         img2x: './img/support/medical_corps@2x.png" alt="medical_corps" width="101"',
//         p: '03',
//       },
//       {
//         title: 'RAZOM',
//         url: 'https://www.razomforukraine.org/',
//         img: './img/support/razom.png" alt="razom" width="82"',
//         img2x: './img/support/razom@2x.png" alt="razom" width="82"',
//         p: '04',
//       },
//       {
//         title: 'Action against hunger',
//         url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
//         img: './img/support/action_against_hunger.png" alt="action_against_hunger" width="55"',
//         img2x: './img/support/action_against_hunger@2x.png" alt="action_against_hunger" width="55"',
//         p: '05',
//       },
//       {
//         title: 'Serhiy Prytula Charity Foundation',
//         url: 'https://prytulafoundation.org/en',
//         img: './img/support/sergiy_prytyla.png" alt="sergiy_prytyla" width="115"',
//         img2x: './img/support/sergiy_prytyla@2x.png" alt="sergiy_prytyla" width="115"',
//         p: '06',
//       },
//       {
//         title: 'Medicins Sans Frontieres',
//         url: 'https://www.msf.org/ukraine',
//         img: './img/support/medicins_sans.png" alt="medicins_sans" width="102"',
//         img2x: './img/support/medicins_sans@2x.png" alt="medicins_sans" width="102"',
//         p: '07',
//       },
//       {
//         title: 'World vision',
//         url: 'https://www.wvi.org/emergencies/ukraine',
//         img: './img/support/world_vision.png" alt="world_vision" width="81"',
//         img2x: './img/support/world_vision@2x.png" alt="world_vision" width="81"',
//         p: '08',
//       },
//       {
//         title: 'UNITED24',
//         url: 'https://u24.gov.ua/uk',
//         img: './img/support/united24.png" alt="united24" width="114"',
//         img2x: './img/support/united24@2x.png" alt="united24" width="114"',
//         p: '09',
//       },
//   ];