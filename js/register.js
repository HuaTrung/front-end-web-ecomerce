// Initialize Firebase
var config = {
    apiKey: "AIzaSyAAGopUQDY2GE0T1f_c0dYHrlaywDLqayM",
    authDomain: "my-mart-10d9a.firebaseapp.com",
    databaseURL: "https://my-mart-10d9a.firebaseio.com",
    projectId: "my-mart-10d9a",
    storageBucket: "my-mart-10d9a.appspot.com",
    messagingSenderId: "1012373943902"
  };
  firebase.initializeApp(config);
  //=================================
  const auth = firebase.auth();
  console.log("register")
  var btnSignUp = document.querySelector("#btnSignUp")
  var email = document.querySelector("#txtEmail")
  var pass = document.querySelector("#txtPassword")
  var rPass = document.querySelector("#txtRPassword")
  if (btnSignUp) {
    console.log("btnSignUp not null")
    btnSignUp.addEventListener("click", ()=>{
        if (email.value === ""){
            console.log("text empty")
            alert("Please fill in Email")
        }
    })
  }
  else{
      console.log("btnSignUp null")
  }
