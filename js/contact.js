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
  const firestore = firebase.firestore();
  const auth = firebase.auth();
  const googleAuth = new firebase.auth.GoogleAuthProvider();

  const txtName = document.querySelector("#txtName")
  const txtEmail = document.querySelector("#txtEmail")
  const txtSubject = document.querySelector("#txtSubject")
  const txtMessage = document.querySelector("#txtMessage")
  const btnSend = document.querySelector("#btnSend")
  const btnTest = document.querySelector("#btnTest")

  if(btnSend){
    console.log("inside if statement")
    btnSend.addEventListener("click", ()=>{
        console.log("before btnSend")
        firestore.collection("YKienKhachHang").doc(txtEmail.value).collection(txtSubject.value).add({
            Message: txtMessage.value,
            Name: txtName.value
        }).then(()=>alert("send successfully")).catch(err=>console.log("err: ") + err)  
        console.log("after btnSend")
    })
  }

  if(btnTest){
    btnTest.addEventListener("click", ()=>{
        console.log("inside btnSend")
        // firestore.collection("YKienKhachHang").add({
        //     test: "test"
        // })
        firestore.collection("YKienKhachHang").doc(txtEmail.value).collection(txtSubject.value).add({
            Message: txtMessage.value,
            Name: txtName.value
        }).then(()=>alert("send successfully")).catch(err=>console.log("err: ") + err)
    })
  }