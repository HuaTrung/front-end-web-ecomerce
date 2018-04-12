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
   var temp = {}

    var load_product = function() {
        firestore.collection("SanPham").doc(id_product).get().then((data)=>{
            if(data.exists){
                temp = data.data();
                $("#mota-sp").html(data.data().MoTa)                  
                $("#product-price").html(data.data().GiaBan)    
                $("#product-name").html(data.data().Ten)     
                $("#product-image").attr("src",data.data().HinhAnh)           
            }
        })
    }

    load_product();
    var newVal = 1;
    var check = false;
    $('.value-plus').on('click', function () {
        var divUpd = $(this).parent().find('.value'); 
        newVal = parseInt(divUpd.text(), 10) + 1;
        divUpd.text(newVal);
    });

    $('.value-minus').on('click', function () {
        var divUpd = $(this).parent().find('.value'); 
        newVal = parseInt(divUpd.text(), 10) - 1;
        if (newVal >= 1) divUpd.text(newVal);
    });
    
    $("#add-cart").on("click",function(){     
        var i  = sessionStorage.getItem(id_product);
      //  console.log(temp.Ten);
        var item = {}
        if (i === null) {
            var name = temp.Ten;
            item = {
                id: id_product,
                name:temp.Ten,
                price: parseInt(temp.GiaBan),
                quality:newVal, 
                urlImage:temp.HinhAnh  
            }   
            alert ("Đã thêm sản phầm này vào giỏ hàng")
        } else {
            var cartValue = sessionStorage.getItem(id_product);
            item = JSON.parse( cartValue );
           // console.log(cartObj)
           item.quality += newVal; 
            alert ("Số lượng sản phẩm này trong giỏ hàng tăng thêm: "+newVal)
        }
        var jsonStr = JSON.stringify( item );
        sessionStorage.setItem( id_product, jsonStr );    
        console.log(sessionStorage.getItem( id_product ))     
    });

}

getGet()