let date=new Date();
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDate());
// console.log(date.getHours());
// console.log(date.getSeconds());

 let diwali=new Date("12-november-2023 06:00");
//  console.log(diwali.getDate());
//  console.log(diwali.getMonth());

let total_seconds=(diwali-date)/1000
let days=total_seconds/ 60/60/24
let hours=total_seconds/3600%60
let minutes=total_seconds/60%60
let seconds=total_seconds%60
console.log(Math.round(days))
console.log(hours)
console.log(minutes)
console.log(seconds)


