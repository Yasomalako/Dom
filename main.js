// console.log(st);
// document.getElementById("add").innerText = 'my dom app'
// console.log(same,same1,same2);
// console.log(same1);
// console.log(same2);
// console.log(x);
// function printInput(){
//  let datafromeuser =  prompt("name")

// document.write("<h2>"+ datafromeuser +"</h2>")
//   }
//   printInput()
//8//
// function printColer(color,number){
//  for(var i =0;i<number;i++){
//    document.write("<span>"+color+"</span>"+"</br>")
//  }
// }
// printColer(prompt("add acolor"),prompt("add anumber"))
//9//
// function textName(){
// var name = prompt("add text")
// var element = prompt("add text")

//   document.write(element + name +element )

// }
// textName()
//10//
// function printInput(){
//   var input = prompt("input type?")
//   document.write("<input type="+input+">")
// }
// printInput()

// function chengeIn(className, text) {
//   for(var i = 0; i<2;i++){
//  sometext = prompt("add a text")
//  document.getElementsByClassName('h1_x')[0].innerText = sometext 
//   }
// }
// chengeIn()
//12//
// function printSpan(){
// var para = document.getElementsByTagName("p")
// for(var i = 0;i<5;i++){
// para[i].innerHTML =  "<span>jhfjhfghhj </span>" 
// }
// }
// printSpan()
//13//

// function userDetails(){
  
//   var userdetail = {
//     firstName: prompt("add your first name"),
//     lastName: prompt("add your last name"),
//     age: prompt("add your age"),
    
//   };
  
// if(userdetail.age >= 18){
// document.write ( "<p>" +userdetail.firstName + userdetail.lastName + userdetail.age+"</p>" +"<input type=text>"+"</br>")
// }
//   }

// userDetails()
//14//
// function mooviOb(){
// var moovi = {
//   name: prompt("add the moovi name please"),
//   views: prompt("how maney views"),
//   year: prompt("add the moovie year"),
//   photo:prompt("add img"),
  
// };
// var img = document.getElementById("img1").src=moovi.photo;
// document.write("<p>" +"the name of the moovie is" +""+ moovi.name + ""+"how many views" +"" +moovi.views + ""+"</br>"+ ""+"the stablished year" + moovi.year+ ""+"</br>" + img + "" + "</p>" + "</br>")
// };
// mooviOb()
//15//
// function printWorker(){
// var worker ={
//   firstName:prompt("add your first name"),
//   lastName:prompt("add your last"),
//   email:prompt("add your E-mail"),
//   division:prompt("add your division"),
// };
// document.write("<p>"+worker.firstName+ "<p>"+worker.lastName+"</p>"+"<p>"+worker.email+"</p>"+"<p>"+worker.division+"</p>")
// }
// printWorker()
//16//
// function bildingFromeuser(){
//   var build = prompt("how meny bildings");
  
// for(var i=0;i<build;i++){
//   var bild= {
//     constractor:prompt("constructor name please"),
//     companyName:prompt("company name please"),
//     howmenyFlors:prompt("how many flors"),
//     hoemanyApartments:prompt("how many appartsment in one flor"),
//   };
//   document.write("<p>"+""+bild.companyName+"</p>"+"<p>"+bild.companyName+"</p>"+"<p>"+bild.howmenyFlors+"</p>"+"<p>"+bild.hoemanyApartments +"</p>")
// }
//17//
// }
// bildingFromeuser()
// function printStor(){
//   var stors=[0];
//   var number = prompt("add aitrator number")
//   for(var i= 0;i<number;i++){
//     var stors={
//       nameOfstor:prompt("the name of the store"),
//       storeAddres:prompt("the store addres"),
//       divisionNumber:prompt("hoe manin divisions"),
//       amuntofWorkers:prompt("how meny workers"),
//     };
//     if(stors.amuntofWorkers>10){
//       document.write("<p>"+stors.nameOfstor+"</p>"+ ""+"<p>"+stors.storeAddres+"</p>"+""+"<p>"+stors.divisionNumber+"</p>"+ ""+"<p>"+stors.amuntofWorkers+"<p>"+ ""+"</br>")
//     }
//     console.log(stors[i]);
//   }
// }
// printStor()
//19//
function printContactnum(){
    var num = prompt("how meny contact objects u need")
    for(var i= 0;i<num;i++){
    var contactNumber={
     fullName:prompt("add a full name"),
     company:prompt("add ur company"),
     telphon:prompt("add ur telphon number"),
     cellphoneNumber:prompt("add ur phone number"),
     email:prompt("add ur email"),
    };
    document.write("<ul>"+contactNumber.fullName+"</ul>"+"</br>")
}
}
printContactnum()