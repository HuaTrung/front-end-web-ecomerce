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

function getGet() {

    console.log("single.js")
    var para = location.search.substring(1).split("&")
    var temp = para[0].split("=")
   // console.log(temp)
    const id_product = unescape(temp[1])
    console.log("l value: " + id_product)
  //  var temp = ""

    var load_product = function() {
        firestore.collection("SanPham").doc(id_product).get().then((data)=>{
            if(data.exists){
                console.log(data.data().MoTa)
                $("#mota-sp").html(data.data().MoTa)                  
                $("#product-price").html(data.data().GiaBan)    
                $("#product-name").html(data.data().Ten)     
                $("#product-image").attr("src",data.data().HinhAnh)           
            }
        })
    }

    load_product();
}

getGet()