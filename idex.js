

// // console.log("hello world");


//   var name1 = prompt("enter your number")
//   var name2 = prompt("enter your number")
  
//   console.log( name1 + name2);
  

// console.log("hello" , "wolrd");
// console.log("hello" + "wolrd");
// console.log("hello" + " " + "wolrd");


// console.log("2" === "2"); 
// console.log("2" === 2); 
// console.log("2" == 2); 
// console.log("23" + 2);
// console.log(+"23" + 2);
// console.log("abc" == "Abc");
// console.log("abc" == "abc");




// console.log(15 % 6);


// var username = "faisal"


// console.log( username== "faisal" || 0==1 || 0==="1");


// var userportfolio =  ""
// var defaultpotfolio = "fghhhjklmmm"


// console.log(userportfolio || defaultpotfolio  )

// console.log(userportfolio == ""  && 1==1 && 1==0 );

// var username = "adadad";
// var email = null ;
// var pass = null ;


// console.log( !username && 1==0 && 0==0);

// var a = 2



    //   updation
// console.log(++a + a++ + (a++ * --a));

// 3 3 4  3
// 9 12

// console.log(a);




    //  if and else 


// var tomato;


// if (tomato) {
//     console.log("tomato");
    
// }   
// else {

//    console.log("yougurt");
   
// }


         //  array

// var person= ["hamza","ali","faisal"]

// console.log(person[person.length -3]);

// console.log(person[2]);




    // for loop 

    // for (var b=0 ; b<5 ; ++b) {

    //      console.log(b+1)
    // }


                 // array 

    // var person= ["ali","hamza","faisal","ahsan","ahmed"];

    // console.log(person);

    // person [2] = "faisal yousuf"

                   
            //   POP 
    //  var person= ["ali","hamza","faisal","ahsan","ahmed"];

    //  console.log(person);

    // var removeelement = person.pop ()

    //   console.log(removeelement);

    //  console.log(person);



        //   PUSH 

// var person= ["ali","hamza","faisal","ahsan","ahmed"];


//      person.push ("muaaz","arsalan")


//           console.log(person);

            //   SHIFT 
// var person= ["ali","hamza","faisal","ahsan","ahmed"];

//       person.shift ()
     

//        console.log(person);



        //    UNSHIFT 
//  var person= ["ali","hamza","faisal","ahsan","ahmed"];


// person.unshift ("arsalan")


//   console.log(person);






            //   SPLICE 

    //    var person= ["ali","hamza","faisal","ahsan","ahmed"];


    //    person.splice (2,1,"golden","mubashir")


    //    console.log(person);
       


          
                // SLICE 


    
// var fruits= ["ali","hamza","faisal","ahsan","ahmed"];


//  var result = fruits.slice(0,3);

//   console.log(result);
  


        //  automatic updation 



//      var fruits= ["ali","hamza","faisal","ahsan","ahmed"];


//      var findfruits= prompt("Enter the fruit you want to find:")

// for (var i = 0; i > fruits.length; i++ ) {
//      console.log(fruits [golden]);
// }



// var tableLength = Number(prompt("Enter the length of the multiplication table:"));
//  for(var i = 1; i <= tableLength; i++) {
//    console.log(table + " X " + i + " = " + table * i); }



// var table = 2


// for (var i=1; i<10, i++){
//     console.log(table + "x" + i + "=" + table * 1);
    
// }


                   


// var findFruit = prompt("Enter the fruit you want to find:").toLowerCase()

// for(var i = 0; i < fruits.length; i++) 
//  if(fruits[i].toLowerCase() === findFruit) {
//      console.log("Found " + findFruit + " at index " + i);
//      break;
    
//  }else{
//      console.log(fruits[i]);
//  }



// var table = Number(prompt("Enter the multiplication table you want:"));

//         var tableLength = Number(prompt("Enter the length of the multiplication table:"));

//  for(var i = 1; i <= tableLength; i++) {
//    console.log(table + " X " + i + " = " + table * i);
// }





// var table = +prompt("Enter the multiplication table you want")


// var tablelength = +prompt("Enter the multiplication table you want")



// for (var i=0; i<=tablelength; i++) {
//     console.log(table + "x" + i + "=" + table*i);
    
// }


                //    NESTED LOOP 

// for (var a=1;  a <=100 ; a= a+10 ){
    
//    for(var b=a; b < a+10; b++){

//        document.writeln(b);

//    }
   
//     document.writeln("<br>");

// }
     

                    //    NESTED LOOP 

// for (var i=1; i<=5; i++ ){

//     for (var j=1 ; j<=10 ; j++){

//             console.log(`${i} : ${j}`);

//     }

// }



                      //    NESTED LOOP 


//    for ( var i=1; i<=5; i++){

//     var stars = "";

//     for  (var j=1 ; j<=i ; j++){

//      stars+= "*";
//     }
//     console.log(stars);
    
//   }




                    //    NESTED LOOP 

//   var starcount = +prompt("how much stars do you want:")
    
//    for ( var i=1; i<starcount; i++){

//     var stars = "";

//     for  (var j=1 ; j<=i ; j++){

//      stars+= "*";
//     }
//     console.log(stars);
    
//   }

                    //    NESTED LOOP 

// var firstNames = ["pineaple" , "blueberry" , "banana" , " apple" , "grapes"];
// var lastNames = ["zzz" , "burp" , "dogbrone" , "droop"];




// var fullNames = [];

// for (var i=0; i < firstNames.lenght; i++){

//     for ( var j = 0; j < lastNames.length; j++){

//         fullNames.push( firstNames[i] + lastNames[j] ); 
//     }
    
// }
       
// console.log(fullNames);   
 


// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];


// var fullNames = [];


// for (var i = 0; i < firstNames.length; i++) {

//   for (var j = 0; j < lastNames.length; j++) {
//     fullNames.push(firstNames[i] + lastNames[j]);
//   }

// }

// console.log(fullNames);








                //   index.of 


//     var text =("hello  world")

//    var textfound = text.indexOf("world");

//    console.log(textfound);







                //   index.of 


//  var text = "hello , javascript".toLowerCase();

//  var textfromuser = prompt("find the text :").toLowerCase();


//  var findtext = text.indexOf(textfromuser);

//  if (findtext === -1) {
//        alert("text not found");
        
//  }else{
//         alert("text found at index : " + findtext);
//  }



//  var extractfromuser = text.slice (findtext, findtext +5)


//  console.log(extractfromuser);
 

   


        //    replaceall 



// let text = "I like apple. Apple is tasty. apple is healthy.";


// let result = text.replaceAll("apple","banana");


// console.log(result);





        //    chartat 


// var text = ("hello world");


// var foundtext = text.charAt(3);


// console.log(foundtext);






        //    chartat 



// var text = ("hello world");


// console.log(text.charAt(text.length-1).toLowerCase());






        //    Math.round 

// var num = 9.4;


// console.log(Math.round (num));



        //    Math.round 


//  var num = 9.6;



//  console.log(Math.round (num));




          //    Math.cell 



// let num = 4.2;

// let result = Math.ceil(num);
// console.log(result);






          //    Math.floor 



// let num = 4.2;

// let result = Math.floor(num);
// console.log(result);










          //    Math.floor + math.random 

// for(var i = 0; i < 100; i++) {
//     var randomNum = Math.floor(Math.random() * 10) + 1;
//     console.log(randomNum);
// }









                //      MAHTH.RANDOM IN LOOP 


//  var ok = true 
//  while (ok) {
        
 

//  var randomNum = Math.floor(Math.random() * 10) + 1;

//  var guessnumber = +prompt("Guess a number between 1 and 10:");


 


        
//         if (guessnumber < randomNum) {
//                 alert("Too low! The number was " + randomNum);
//         }
//         else if (guessnumber > randomNum) {
//                  alert("Too high! The number was " + randomNum); 
//         }  
//         else{
//                 alert("Congratulations! You guessed the number " + randomNum);
//         }
                
        

//         var ok = confirm("do you want to play again?");

//         console.log(ok);
        
// }

     


//         var randomNum = Math.floor(Math.random() * 10) + 1;
//         var attempts = 0;
//         var maxattempts=2;
//         var guesscorrectly=false;


// while (attempts < maxattempts) {
//         var guessnumber = +prompt("Guess a number between 1 and 10:");
             

//         if (randomNum===guessnumber) {
//                 alert("Congratulations! You guessed the number"+randomNum);

//                 var guesscorrectly=true;

//                 break;

//         }
//         else if (guessnumber < randomNum){
//                    alert("too low!")
//         }else{
//                 alert("too high")
//         }


//         if (!guesscorrectly){
              
//                 alert("game is over"+randomNum);
//         }
        
     

               
// }  
//  while (confirm("Do you want to play again?"));




  
//           logic building 



//  var numbers = [1 , 2, 3, 4, 5 ,6 ,7];
//  var alphabets = ["a","b","c","d"];
//  var result = [];


//  for (var i=0; i < numbers.length; i++){
//         if (alphabets [i]) {
//                 result.push(numbers [i] , alphabets [i] )
                
               
//         }
     
        
//  } 
   
//  console.log(result);



  

//           logic building 



// var a = 10;
// var b = 19;



// a = a+b
// b = a-b

// a= a-b

// console.log(a);
// console.log(b);







  //           logic building 




//  var numbers = [0,1 , 2, 3, 4, 5 ,6 ,7];




//  for (var i=0; i < numbers.length; i++){
//         if (numbers[i]  % 2===0) {
//                console.log(numbers [i] + "" + " is even ");
               
                
               
//         }else{
//                 console.log(numbers [i] + "" + " is odd ");
                
//         }
     
        
//  } 



                //  logic building



// var numbers = [0,1 , 2, 3, 4, 5 ,6 ,7];




//  for (var i=0; i < numbers.length; i++){
//         if (numbers[i]  % 2===0) {
               
//                even.slice(numbers [i] + " is even ");

        
                
               
//         }else{
//                odd.slice(numbers [i] , " is odd ");
               
                
//         }
     

//         console.log(even);
//         console.log(odd);
        
//  } 
   



             //  logic building 




//  var numbers = [0,1 , 2, 3, 4, 5 ,6 ,7];
//  var even = []
//  var odd = []




//  for (var i=0; i < numbers.length; i++){
//         if (numbers[i]  % 2===0) {
//                even.push(numbers [i]);
               
                
               
//         }else{
//                 odd.push(numbers [i]);
                
//         }
     
        
//  } 
//  console.log(even);
//  console.log(odd);







           //    functions 


// function add(a,b) {
        
//         result = a*b
//         return result;
// }

// console.log(add (10,10));



// function clickAble(name) {
//   alert("hello " + name);
// }







        //       objects 

// var guestlist = [
//         {
//                 name: "ali aftab",
//                 age: 22,
                
//         },

//         {
//               name: "ahmed",
//                 age: 23,  
//         },

//           {
//               name: "faisal",
//                 age: 24,  
//         },

//           {
//               name: "arsalan",
//                 age: 29,  
//         },
//           {
//               name: "hamza",
//                 age: 30,  
//         },
        
        
// ]


//  function greet (name,age){
//         console.log(`hello my name is ${name}  and i am ${age} years old`);
        
//  }

//  for ( var i=0; i<guestlist.length; i++){
//         greet(guestlist[i].name, guestlist[i].age)
//  }








                // object 


//  var student = {
//         name : "Ali",
//         marks : 30,
//         result : function (){
//                 if (this.marks >= 50) {
//         return "pass";
//  } 
//  else{
//         return "fail";

        
//  }
//         }


//  };

//  console.log(student.result())












        //       examples of object 



//  var user = {
//     username: "admin",
//     password: "123456",
//     login: function (inputPass) {
//         if (inputPass === this.password) {
//             return "Login Successful";
//         } else {
//             return "Wrong Password!";
//         }
//     }
// };

// console.log(user.login("1234"));




// var bankaccount = {
//         name : "ali",
//         balance : 10000,
//         deposite : function (amount) {
//                 this.balance += amount;
//                 return "new balance" + this.balance;
                
//         },

//         withdraw : function (amount) {

//                 if (amount<=this.balance) {
//                        this.balance -= amount;

//                        return "remaining balance" + this.balance;
//                 }else{
//                         return "unsufficient balance";
//                 }
                
//         }
// };

// console.log(bankaccount.deposite(2000));
// console.log(bankaccount.withdraw(5000));








// var bankaccount = {
//      name : "ali",
//      balance : 10000,
//      depsosite : function(amount){
//        this.balance += amount
//         return "NEW BALANCE " + "" + this.balance;
//      },

//      withdrawl : function (amount){
//         if (amount<=this.balance) {
//                 this.balance -= amount
//                 return "REMAINING BALANCE" + "" + this.balance;
//         }
//          else{
//                 return "UNCUFFICIENT BALANCE";
//         }
//      }

// };

//      console.log(bankaccount.depsosite(2000));
//      console.log(bankaccount.withdrawl(5000));
     




        //      date and time examples 





// var year = prompt("enter your birth year")
// var month = prompt("enter your birth month")
// var day = prompt("enter your birth day")



// var birth = new Date( year, month - 1, day);

// var now = new Date();

// var age = now.getFullYear() - birth.getFullYear();


// var minutes = Math.floor((now - birth) / (1000 * 60));
// var day = Math.floor(( now - birth) / (1000 * 60 * 60 * 24 ))

// console.log("age", age);
// console.log("minutes", minutes);
// console.log("days", day);












// var date = new Date()

// var year = date.getTime();

// console.log(year);

                    


                //       JAVASCRIPT CODE 

//  var orignalcolor;
//  it is necessary because global varibale can use all functio if we only declare in first function it cant access in another function 

// function changecolor() {
//         var box = document.getElementById("box");
// orignalcolor = box.style.backgroundColor || "aquamarine";
// box.style.backgroundColor = "tomato"
// }

// function previouscolor() {
//        var box = document.getElementById("box");
//        box.style.backgroundColor = orignalcolor
// }








        //     eventlink example 

// function focuscolor(element) {
//         element.style.backgroundColor = "red";
//         element.style.width = "190px"
//         element.style.transition = "0.5s"
// }



// function onformsubmit(emailid,passwordid) {
//         var email = document.getElementById(emailid)
//         var password = document.getElementById(passwordid)

//         if (email.value === "faisal1@gmail.com" && password.value === "faisal12") {
//                alert("login succcesfully");
                
//         }else{
                
//                alert("login unseccesfull");
                
//         }


//         console.log(email.value);
//         console.log(password.value);

//         email.value = "";
//         password.value = "";
        
//         return false;
// }

// function onformsubmit(emailid,passwordid) {
//         var email= document.getElementById(emailid)
//         var password= document.getElementById(passwordid)


//          console.log("email" + email.value);
//         console.log("password" + password.value);


//         if (email.value === "faisal12@gmail.com" && password.value === "faisal12") {
//                 alert("login success");
                
//         }else{
//                 alert("login failed");
//         }

       

//         email.value = "";
//         password.value = "";


        
// }

// function togglePasswordVisibility (passwordid) {
//         var passwordInput = document.getElementById(passwordid);

//         if (passwordInput.type === "password") {
//                 passwordInput.type = "text";
//         }else{
//                 passwordInput.type = "password";
//         }


// }


//     event link readmore or readless program example





// function toggletext () {
//         var moretext = document.getElementById("more")
//         var btn = Event.target


//         if (moretext.style.display === "none") {
//                 moretext.style.display = "inline"
//                 btn.innerText = "readless"
//         }else{
//                 moretext.style.display = "none"
//                 btn.innerText = "readmore"
//         }
// }




//      designable function of email and password with pass  and 
//      off option and also save




// function submitfunc (txt1id , txt2id , emailid , passwordid) {
//         var txt1 = document.getElementById(txt1id)
//         var txt2 = document.getElementById(txt2id)
//         var email = document.getElementById(emailid)
//         var password = document.getElementById(passwordid)


//         console.log("firstname :" + txt1.value);
//         console.log("secondname :" + txt2.value);
//         console.log("email :" + email.value);
//         console.log("password :" + password.value);

//         // if (email.value === "faisal1@gmail.com "&& password.value === "1234") {
//         //         alert("login succesfully")
//         // }else{
//         //         alert("loginfailed")
//         // }


//         txt1.value = "";
//         txt2.value = "";
//         email.value = "";
//         password.value = "";
        
// }


// function passwordshow (icon) {
//         var passinput = document.getElementById("password")


//         if (passinput.type === "password") {
//                 passinput.type = "text"
//                  icon.src = "./watch_13170041.png";
//         }else{
//                 passinput.type = "password";
//                 icon.src = "./watch_13170041.png";
//         }
// }





//       change all p tags color at a one time example 

// function changecolor() {
//         var element = document.getElementsByTagName("p")


//         for (let i = 0; i < element.length; i++) {
//                 element[i].style.backgroundColor = "red";                
//         }
// }

// changecolor()


// function makeinvisible() {
//         var imgelement = document.getElementById("image");
//         imgelement.classList.add = ("hidden");
// }


// function makevisible() {
//       var imgelement = document.getElementById("image");
//         imgelement.classList.remove = ("hidden");   
//       imgelement.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY4y5SlwGL853bRyUZKU8EV3KLxyFKJxnkPw&s"
// }

// function makeinvisible() {
//         var imgelement = document.getElementById("image")
//         imgelement.className = ("hidden");
// }

// function makevisible() {
//           var imgelement = document.getElementById("image")
//                 imgelement.className = ("");

// }


// function makebig() {
// var element = document.getElementById("image")
//      element.classList.toggle("big");
// }


// function color1() {
//         element = document.getElementById("conatiner")
//         element.style.backgroundColor = "red"
//         ele
// }


// function color2() {
//         element = document.getElementById("conatiner")
//         element.style.backgroundColor = "blue"
// }

// function color3() {
//         element = document.getElementById("conatiner")
//         element.style.backgroundColor = "aqua"
// }