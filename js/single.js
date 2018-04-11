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
    l = unescape(temp[1])
    console.log("l value: " + l)
    var temp = ""
    firestore.collection("DanhMuc").doc(l).get().then((data)=>{
        if(data.exists){
            console.log(data.data().TenSanPham)
            document.getElementById("h3_NameProduct").innerHTML = data.data().TenSanPham
        }
    })
    
    if (l === "ThitBoPhap"){
        document.getElementById("HinhMinhHoa").src = "pictures/ThitNgonQuocTe/ThitBoNhapKhau/pc1.jpg"
    }
    
    
}

getGet()