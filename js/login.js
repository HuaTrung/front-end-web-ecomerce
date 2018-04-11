// Initialize Firebase
// var config = {
//     apiKey: "AIzaSyBzJ-NENUmaqecDlvx4U2d_lYAwtO4CQrM",
//     authDomain: "web-quickstart-2a584.firebaseapp.com",
//     databaseURL: "https://web-quickstart-2a584.firebaseio.com",
//     projectId: "web-quickstart-2a584",
//     storageBucket: "web-quickstart-2a584.appspot.com",
//     messagingSenderId: "202216679161"
//   };
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
  firebase.auth().languageCode = 'vn'
  firebase.auth().useDeviceLanguage();
  googleAuth.setCustomParameters({
    'login_hint': 'user@example.com'
  });
  const facebookAuth = new firebase.auth.FacebookAuthProvider();
  facebookAuth.setCustomParameters({
    'display': 'popup'
  });
  
  const storage = firebase.storage();
  const storageRef = storage.ref(); 

  var btnTest = document.querySelector("#btnTest")
  var btnLoginGoogle = document.querySelector("#btnLoginGoogle")
  var btnLoginFacebook = document.querySelector("#btnLoginFacebook")
  if (btnTest){
    btnTest.addEventListener("click", ()=>{
        // auth.signInWithRedirect(googleAuth);
        // auth.getRedirectResult().then(result => {
        //   if (result.credential)
        //     var token = result.credential.accessToken
        // }).catch(err=>console.log("redirect signin error: " + err))
        const textToSave = "test firebase";
        console.log("I am goin' to save " + textToSave + " to Firestore!")
        firestore.collection("ChiTietSanPham").where("idThuongHieu","==", "123").get().then(listData=>{
            listData.forEach(element=>{
                console.log(element.data())
            })
        }).catch(err=>console.log("error: "+err))
        // const textToSave = "abababababb";
        // console.log("I am goin' to save " + textToSave + " to Firestore!")
        // // we can use fiestore.collection("sample").doc("sandwichData").set({}) instead of using docRef
        // firestore.doc("sample/sandwichData").set({
        //   hotDogStatus: textToSave
        // }).then(() => {
        //   console.log("Status saved");
        // }).catch(err => {
        //   console.log("Got an error: ", err);
        // })
      })
  }
if (btnLoginGoogle){
    btnLoginGoogle.addEventListener("click", ()=>{
        auth.signInWithPopup(googleAuth).then(result=>{
            var token = result.credential.accessToken
            console.log("nothing " + result.user)
            console.log("token "+token)
        }).catch(err=>console.log("Error Google Login: "+err)) 
      }) 
}

if (btnLoginFacebook){
    btnLoginFacebook.addEventListener("click", ()=>{
        auth.signInWithPopup(facebookAuth).then(result=>{
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        console.log("nothing "+result.user)
          }).catch(err=>console.log("facebook login error: " + err))
    })
}