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
        // if (email.value === ""){
        //     // console.log("email empty")
        //     // alert("Please fill in Email")
        //     // return
        // }
        // if (pass.value === ""){
        //     // console.log("pass empty")
        //     // alert("Please fill in Password")
        //     // return
        // }
        // if (rPass.value === ""){
        //     // console.log("rpass empty")
        //     // alert("Please retype Password")
        //     // return
        // }
        // else{
        //     if (pass.value !== rPass.value){
        //         // alert("asdadasd")
        //         // return
        //     }
        // }
        // console.log()
        auth.createUserWithEmailAndPassword(email.value, pass.value).then(result=>{
            console.log("asdasdasd")
            alert("Đăng kí thành công!")
        }).catch(err=>{
            console.log("Sign up error: " + err.code)
            // if (err.message === "The email address is badly formatted.")
            // {
            //     alert("Email is invalid")
            // }
        })
    })
  }
  else{
      console.log("btnSignUp null")
  }
