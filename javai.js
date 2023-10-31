// var a=20
// var b=25
// // console.log(a&b);
// // console.log(a|b)
// // console.log(a^b);
// // console.log(~b)
// // console.log(a<<2)
// // console.log(a>>2)
// var num = prompt("enter the number:")
// if(num%3==0){
//     // console.log("even")
//     document.write("even")
// }else{
//     // console.log("odd")
//     document.write("even")
// }
var img = document.getElementById("img")
let temp = prompt("enter temp")
if (temp<20){
    document.write("Its is cold")
    img.src="./cold.webp"
    
}
else if (temp>20 & temp<35){
    document.write("Its good wether")
    img.src="./nop.jpeg"
}
else if (temp>35){
    document.write("It hot today")
    img.src="./sunny.jpg"
}