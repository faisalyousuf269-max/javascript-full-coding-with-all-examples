

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



// var todolist = document.getElementById("todo_list");

// function addTodo () {
//         var inputtodo = document.getElementById("todo_input")

//         if (inputtodo.value === "") {
//                alert("enter a value") 

//                return
//           }





// var todoitem =  ` <div class="todo_item">
//             <p> ${inputtodo.value} </p>

//             <button id="delete_todo_btn" onclick="deleteTodo(this)">Delete</button>
//             <button id="edit_todo_btn" onclick="editTodo(this)">Edit</button>
//         </div`


      


// todolist.innerHTML += todoitem;

// inputtodo.value = "";

//    }

// // is bytton ka parent todo item hai isliye wo todoitem ko remove krrha hai
//           function deleteTodo (btn) {
                

//           btn.parentElement.remove();


//         } 


//  function editTodo(btn) {
//     var todoDiv = btn.parentElement;
//     var p = todoDiv.querySelector("p");
//     var input = todoDiv.querySelector("input");

//     // IF input already exists → SAVE
//     if (input) {
//         if (input.value.trim() !== "") {
//             p.innerText = input.value;
//         }
//         p.style.display = "block";
//         input.remove();
//         btn.innerText = "Edit";
//     } 
//     // ELSE → EDIT MODE
//     else {
//         var inputField = document.createElement("input");
//         inputField.type = "text";
//         inputField.value = p.innerText;

//         todoDiv.insertBefore(inputField, p);
//         p.style.display = "none";
//         btn.innerText = "Save";
//     }
// }





// var conatiner = document.getElementById("container")

// var newpara = document.createElement("p")


// newpara.innerText = "hello world"

// console.log(newpara.innerText );




      // task one complete 

// function changeText () {
//         var para = document.getElementById("text")

//         para.style.color =  "red"
// }






          // task 2 complete  

// function toggleBox () {
//         var box1 = document.getElementById("box")
//         box1.classList.toggle ("hidden")
// }






          // task 3 complete  

// function  addTodo () {
//         var input = document.getElementById("todoInput")



//         if (input.value.trim === "") {
//                 alert("enter a todo ")
//                 return
//         }

//         var li = document.createElement("li")

//         li.innerText = input.value


//         var dlt = document.createElement("button")
//          dlt.innerText = "delete"
//          dlt.onclick = function () {
//                 li.remove();
//          }

//          li.appendChild(dlt)

//          document.getElementById("todoList").appendChild(li);

//          input.value = "";
// }

                           











                //  easy way of making dom 






// var todocontainer = document.getElementById("todo-container")



// function addTodo () {
//         var todoinput = document.getElementById("todo-input")
//        var  todotext = todoinput.value ;

//        if (todotext === "") {
//            alert("plzz enter a todo item ")
//            return
//        }


//        var todoitem = document.createElement("div")
//        todoitem.setAttribute("id" , "todo-item")


//        var todotextele = document.createElement("p")
//        todotextele.setAttribute("id" , "todo-text")
//        todotextele.innerText = todotext


//        var editbtn = document.createElement("button")
//        editbtn.setAttribute("id" , "edit-btn")
//        editbtn.innerText = "edit"
//        editbtn.setAttribute("onclick" , "editTodo(this)")

         
//        var dltbtn = document.createElement("button")
//        dltbtn.setAttribute("id" , "dlt-btn")
//        dltbtn.innerText = "delete"
//        dltbtn.setAttribute("onclick" , "dlttodo(this)")


//        todoitem.appendChild(todotextele)
//        todoitem.appendChild(editbtn)
//        todoitem.appendChild(dltbtn)


//        todocontainer.appendChild(todoitem)



//        todoinput.value = ""

// }

// function dlttodo (e) {
//         todoitem = e.parentNode;
//         todocontainer.removeChild(todoitem);
// }

// function editTodo(e) {
//          todoitem = e.parentNode;


//          var todotextele = todoitem.querySelector("#todo-text")

//            var todoinput = document.getElementById("todo-input")
//        var  todotext = todoinput.value;


//        if (todotext === "") {
//             alert("plz edit the todo")
//             return;
//        }


//        todotextele.innerText = todotext




//         todoinput.value = ""

// }

  
// var box = document.getElementById("box")


// function makered() {
//         box.style.backgroundColor = "red"
//         box.removeEventListener("mousedown", makered)
// }

//  box.addEventListener("mousedown", makered)





// var todos = []

// function addTodo() {
//     var input = document.getElementById("todoInput")
//     var text = input.value

//     if (text === "") {
//         return
//     }

//     var object = {
//         task: text
//     }

//     todos.push(object)
//     input.value = ""
//     showTodos()
// }

// function showTodos() {
//     var list = document.getElementById("todoList")
//     list.innerHTML = ""

//     for (let i = 0; i < todos.length; i++) {

//         var li = document.createElement("li")

//         var inputfeild = document.createElement("input")
//         inputfeild.value = todos[i].task
//         inputfeild.disabled = true

//         var editbtn = document.createElement("button")
//         editbtn.innerText = "Edit"

//         editbtn.onclick = function () {
//             if (inputfeild.disabled) {
//                 inputfeild.disabled = false
//                 editbtn.innerText = "Save"
//             } else {
//                 inputfeild.disabled = true
//                 todos[i].task = inputfeild.value
//                 editbtn.innerText = "Edit"
//             }
//         }

//         var dltbtn = document.createElement("button")
//         dltbtn.innerText = "Delete"

//         dltbtn.onclick = function () {
//             deletetodo(i)
//         }

//         li.appendChild(inputfeild)
//         li.appendChild(editbtn)
//         li.appendChild(dltbtn)

//         list.appendChild(li)
//     }
// }

// function deletetodo(index) {
//     todos.splice(index, 1)
//     showTodos()
// }


// const genBtn = document.getElementById("gen-pass");
// const copyBtn = document.getElementById("copy-pass");
// const lengthEl = document.getElementById("length");
// const passwordEl = document.getElementById("password");

// const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

// genBtn.addEventListener("click", () => {
//   let password = "";
//   let length = Number(lengthEl.value);

//   if (!length) {
//     alert("Enter password length");
//     return;
//   }

//   for (let i = 0; i < length; i++) {
//     password += chars[Math.floor(Math.random() * chars.length)];
//   }

//   passwordEl.value = password;
// });

// copyBtn.addEventListener("click", () => {
//   if (passwordEl.value === "") {
//     alert("No password to copy");
//     return;
//   }

//   navigator.clipboard.writeText(passwordEl.value)
//     .then(() => alert("Copied ✅"))
//     .catch(() => alert("Copy failed ❌"));
// });






  //  quiz app 



// const questions = [
//   {
//     question: "What does HTML stand for?",
//     options: [
//       "Hyper Text Markup Language",
//       "High Text Machine Language",
//       "Hyper Tool Multi Language",
//       "Home Text Markup Language"
//     ],
//     answer: "Hyper Text Markup Language"
//   },
//   {
//     question: "Which language is used for styling web pages?",
//     options: ["HTML", "CSS", "Java", "Python"],
//     answer: "CSS"
//   },
//   {
//     question: "Which language is used to make websites interactive?",
//     options: ["CSS", "C++", "JavaScript", "SQL"],
//     answer: "JavaScript"
//   }
// ];

// const questionEl = document.getElementById("question");
// const optionsEl = document.getElementById("options");
// const progressEl = document.getElementById("progress");
// const resultEl = document.getElementById("result");

// let index = 0;
// let score = 0;

// function showQuestion() {
//   let q = questions[index];
//   questionEl.innerText = q.question;
//   progressEl.innerText = `Question ${index + 1} of ${questions.length}`;

//   optionsEl.innerHTML = "";
//   q.options.forEach(option => {
//     optionsEl.innerHTML += `<button onclick="checkAnswer(this)">${option}</button>`;
//   });
// }

// function checkAnswer(btn) {
//   let correct = questions[index].answer;

//   [...optionsEl.children].forEach(button => {
//     button.disabled = true;
//     if (button.innerText === correct) button.style.background = "green";
//   });

//   if (btn.innerText === correct) {
//     score++;
//   } else {
//     btn.style.background = "red";
//   }
// }

// function nextQuestion() {
//   index++;
//   if (index < questions.length) {
//     showQuestion();
//   } else {
//     questionEl.innerText = "Quiz Finished";
//     optionsEl.innerHTML = "";
//     progressEl.innerText = "";
//     resultEl.innerText = `Your score is ${score} out of ${questions.length}`;
//   }
// }

// showQuestion();




// function generateQR(){

//     const text = document.getElementById("qrText").value.trim();
//   const qrImage = document.getElementById("qrImage");
//   const qrBox = document.getElementById("qrImageBox");
//   const downloadBtn = document.getElementById("downloadBtn");



//   if (text === "") {
//      alert("plz enter text or url")
      
//      qrBox.style.display = "none" ;

//      return

//   }


//   const url =  "https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=" + encodeURIComponent(text);

//   qrImage.src = url;
//   qrBox.style.display = "block";
//   downloadBtn.style.display = "block"

//   downloadBtn.href = url;
// }









// setinterval example 


// function counter(){
//     let count = 0;

//     return function(){
//         count++;

//         return count 
//     }
// }

// let countNum = counter()

// setInterval(function(){
//     console.log(countNum())
// }, 1000)




// digital clock example 




// function updateclock () {
//         const now = new Date ()


//         let hour = now.getHours()
//         let minutes = now.getMinutes()
//         let seconds = now.getSeconds()


//         let ampm;

//       AM / PM

        // if (hour >= 12) {
        //       ampm = "PM"  
        // } else {
        //         ampm = "AM"
        // }
 
// 24h → 12h convert

//    hour = hour % 12 ;
//    hour = hour ? hour : 12;




        // format (2 digit)

//         hour = hour.toString().padStart(2,"0")
//         minutes = minutes.toString().padStart(2,"0")
//         seconds = seconds.toString().padStart(2,"0")


//         const time = hour + ":" + minutes + ":" + seconds + "  " + ampm ;

//         document.getElementById("clock").textContent = time
// }

   // run every 1 second

//    setInterval(updateclock,1000);


      // run instantly first time

//       updateclock()








// function updateclock() {
//   const now = new Date();

//   let hour = now.getHours();
//   let minutes = now.getMinutes();
//   let seconds = now.getSeconds();

//   // format (2 digit)
//   hour = hour.toString().padStart(2, "0");
//   minutes = minutes.toString().padStart(2, "0");
//   seconds = seconds.toString().padStart(2, "0");

//   const time = hour + ":" + minutes + ":" + seconds;

//   document.getElementById("clock").textContent = time;
// }

// // run every 1 second
// setInterval(updateclock, 1000);

// // run instantly first time
// updateclock();








// Functions 

// Function Definition
// Function Statement
// Function Declaration
// Function Expression
// Named Function Expression
// Anonymous Function
// Arrow Function
// IIFE - Immediately Invoked Function Expression
// First Class Functions
// Function Parameters, Arguments
// Function Invocation
// Higher Order Functions
// Callback Functions





       // Function Definition/ Statement/ Declaration



// console.log(x());
// console.log(y());



// function x(){
//     return "Hello World from x";
// }

// Function Invocation/ Call


       // Function Expression


// let y = function(){
//     return "Hello World from y";
// }




        // Function Expression with Name


// var x = function (){
//     // console.log("INNER", xyz);
//     return "Hello World from x";
// }
// console.log(x());


     // IIFE - Immediately Invoked Function Expression



// (function (){
//     let a = 20
//     console.log("Database Connected");
// })();




        // Anonymous Function



// function x(y) {
//     y();
//     console.log("Hello World from x");
// }

// x(function () {
//         console.log("Hello World from Anonymous Function");


// })






          // Arrow Function





// console.log(x()); // Function Invocation/ Call


// var x = () => {
//   return "Hello World from Arrow Function";
// }

// function x() {
//   return "Hello World from Function Declaration";
// }

// let x = ()=> "Hello World from Arrow Function";

// console.log(x());






          // Function Definition/ Statement/ Declaration


// function sum (a, b) {
//     return a + b;
// }




          // Shortand for Arrow Function



// let sum = (a, b) => a + b;
// console.log(sum(10, 20));

// let greet = name =>`Hello ${name}`;

// console.log(greet("Fareed"));


// setTimeout(()=>{
//     console.log("Hello World from setTimeout");
// }, 2000);



        // First Class Functions / First Class Citizens




// function x(y) {
//     y()
//     return "Hello World from x";
// }

// console.log(x(function y() {
//     console.log("Hello World from y");
// }));



// const radius = [1, 2, 3, 4]

// function area(radius){
//     return Math.PI * radius * radius
// }

// function circumference(radius){
//     return 2 * Math.PI * radius
// }

// function diameter(radius){
//     return 2 * radius
// }

// const areaResults = radius.map(area)
// const circumferenceResults = radius.map(circumference)
// const diameterResults = radius.map(diameter)

// console.log(areaResults)
// console.log(circumferenceResults)
// console.log(diameterResults)






// const arearesult = radius.map(area)
// const circumferanceresult = radius.map(circumference)
// const diameterresult = radius.map(diameter)



// console.log(arearesult);
// console.log(circumferanceresult);
// console.log(diameterresult);



// MAP / FOR EACH

// const teamMembers = [
//   {
//     name: "Alex Morgan",
//     age: 18,
//     profession: "Software Engineer",
//   },
//   {
//     name: "brian chen",
//     age: 34,
//     profession: "Data Analyst",
//   },
//   {
//     name: "Elena Rostova",
//     age: 41,
//     profession: "Project Manager",
//   },
//   {
//     name: "Marcus Vance",
//     age: 15,
//     profession: "UX/UI Designer",
//   },
//   {
//     name: "Aisha Diop",
//     age: 31,
//     profession: "DevOps Engineer",
//   },
// ];


// const extractame = teamMembers.map((item , index) =>{
//      return item.name
     
// })

// console.log(extractame);


// const name = []

// teamMembers.forEach((item,index) =>{
//    name.push(item.name)
// })

// console.log(name);




//       map 


// const arr = [1, 3, 4, 6, 7]


// function callback (x){
//    console.log(x*2);
   
// }


// const doubled = arr.map(callback)

// console.log(doubled);





      // FILTER / REDUCE


// const num = [1,2,3,4,5,6,7,8,9]


// const evennum = num.filter((curr)=>{
//         return curr % 2 === 0
// })


// const oddnum = num.filter((curr)=>{
//         return curr % 2 !== 0
// })

// console.log(evennum);
// console.log(oddnum);





            // REDUCE

//  const num = [1,2,3,4,5,6,7,8,9]

// let sum = 0
// for(let i = 0; i < num.length; i++){
//     sum += num[i]
// }

// console.log(sum)

// const total = num.reduce((acc, curr)=>{
//     return acc + curr
// }, 0)

// console.log(total)







        //   map / reduce 
             

// const cart = [
//   {
//     id: 1,
//     name: "Nike Shoes",
//     price: 200,
//     quantity: 5,
//   },

//   {
//     id: 2,
//     name: "Shirts",
//     price: 100,
//     quantity: 3,
//   },

//   {
//     id: 3,
//     name: "Pants",
//     price: 150,
//     quantity: 7,
//   },
//   {
//     id: 4,
//     name: "Pants",
//     price: 175,
//     quantity: 9,
//   },
// ];

// const cart1 = [
//     {
//       id: 1,
//       name: "Nike Shoes",
//       price: 200,
//       quantity: 5,
//     },
  
//     {
//       id: 2,
//       name: "Shirts",
//       price: 100,
//       quantity: 3,
//     },
  
//     {
//       id: 3,
//       name: "Pants",
//       price: 150,
//       quantity: 7,
//     },
   
//   ];


//   const cart2 = [
//     {
//       id: 1,
//       name: "Nike Shoes",
//       price: 200,
//       quantity: 5,
//     },
  
//     {
//       id: 2,
//       name: "Shirts",
//       price: 100,
//       quantity: 3,
//     },
  
//     {
//       id: 3,
//       name: "Pants",
//       price: 150,
//       quantity: 7,
//     },
//     {
//       id: 4,
//       name: "Pants",
//       price: 175,
//       quantity: 9,
//     },
//     {
//       id: 5,
//       name: "Pants",
//       price: 275,
//       quantity: 9,
//     },
//   ];


// function addToCart(c){
//     const total = c
//     .map((item) => item.price * item.quantity)
//     .reduce((sum, subtotal) => sum + subtotal, 0);

//     return total
  
// }

// console.log(addToCart(cart))
// console.log(addToCart(cart1))
// console.log(addToCart(cart2))




               // fetch & API 



// const todoApi = "https://jsonplaceholder.typicode.com/todos/1";
// const todoApi2 = "https://jsonplaceholder.typicode.com/todos/2";
// const todoApi3 = "https://jsonplaceholder.typicode.com/todos/3";

// function fetchAPI(API) {
//   const todos = fetch(API);
    

//  return todos.then((response) => {
//       if (response.ok) {
//         return response.json();
//       }
//     }).catch((error) => {    
//           console.log(error);
//     });
    
// }

// fetchAPI(todoApi).then((data) => {
    
//     console.log(data);
// });


        // resolving promise with asyn await 


// let todoApi = "https://jsonplaceholder.typicode.com/todos/1"

// async function getTodo(API){
//     const todo = await fetch(API)

//     const todoData = await todo.json()

//     return todoData
// }
// getTodo(todoApi).then((data) => console.log(data))



           //      create our own promise 




// const p1 = new Promise((resolve, reject) => {
//     if (true) {
//         setTimeout(() => {
//             resolve("Promise Resolved")
//         }, 5000);
//     } else {
//         setTimeout(() => {
//             reject("Promise Rejected")
//         }, 5000);
//     }
// })


// async function getPromise() {
//     try {
//         console.log("Fetching Promise...")
//         const data = await p1
//         console.log(data)
//     } catch (error) {
//         console.log("Error : " + error)
//     }
// }   

// getPromise()











//     const p1 = new Promise((resolve, reject) => {
//     if (true) {
//         setTimeout(() => {
//             resolve('Promise resolved for p1');
//         }, 10000);
//     } else {
//         reject('Promise rejected for p1');
//     }
// })


// const p2 = new Promise((resolve, reject) => {
//     if (true) {
//         setTimeout(() => {
//             resolve('Promise resolved for p2');
//         }, 20000);
//     } else {
//         reject('Promise rejected for p2');
//     }
// })

// async function handlePromise() {
//     try {
//         console.log("Hello World");
//         const message = await p1;    

//         console.log(message);

//         const message2 = await p2;  
//         console.log(message2);
//     } catch (error) {
//         return "Error: " + error;
//     }
// }

// handlePromise()