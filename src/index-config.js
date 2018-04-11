$(document).ready(function(){

    var config = {
        apiKey: "AIzaSyAAGopUQDY2GE0T1f_c0dYHrlaywDLqayM",
        authDomain: "my-mart-10d9a.firebaseapp.com",
        databaseURL: "https://my-mart-10d9a.firebaseio.com",
        projectId: "my-mart-10d9a",
        storageBucket: "my-mart-10d9a.appspot.com",
        messagingSenderId: "1012373943902"
      };
    firebase.initializeApp(config);
    
    var db = firebase.firestore();

    var array_8_products = []

    var add_8_Products = function () {
        $(".eight-products .img-responsive").each(function(j){
            console.log(j)
            $(this).attr("src",array_8_products[j].urlImage)
            console.log($(this).attr("src"))
        });

        $(".eight-products  .product-name").each(function(j){
                $(this).append("<a  href='single.html'>"+array_8_products[j].name+"</a>")
        });

        $(".eight-products .item_price").each(function(j){
            $(this).append(array_8_products[j].price + "đ")
        });
    }
  
    
    
    var load_8_Product = function() {
        var rule = 8;
        db.collection("SanPham")
            .onSnapshot(function(querySnapshot) {
                for (i=0;i<rule;i++){
                    // 
                    var doc = querySnapshot.docs[i];
                    var object_product = {}
                    //                    
                    object_product.id = doc.id;
                    object_product.name = doc.data().Ten;
                    object_product.price = parseInt(doc.data().GiaBan);
                    object_product.urlImage = doc.data().HinhAnh;
                    //
                    array_8_products.push(object_product);                    
                }
               // console.log(array_8_products);       
               add_8_Products();   
            });
           
    }
    load_8_Product();
   // loadParentDanhMuc();
});