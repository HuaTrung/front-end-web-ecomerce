$(document).ready(function(){
    console.log("product config")
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

    var array_6_products = []

    var add_6_Products = function () {
        $(".six-products .img-responsive").each(function(j){
          //  console.log(j)
            $(this).attr("src",array_6_products[j].urlImage)
          //  console.log($(this).attr("src"))
        });

        $(".six-products .pass-data").each(function(j){
            $(this).attr("value",array_6_products[j].id) 
        });

        $(".six-products  .product-name").each(function(j){
              //  $(this).append("<a  href='single.html?dfsdf'>"+array_8_products[j].name+"</a>")
              $(this).html(array_6_products[j].name)
        });

        $(".six-products .item_price").each(function(j){
            $(this).append(array_6_products[j].price + "đ")
        });

        $(".data-pass-2").each(function(j){
            $(this).attr("href","single.html?id="+array_6_products[j].id)
        });

        $(".show-image").each(function(j){
            $(this).attr("href",array_6_products[j].urlImage)
            $(this).attr("target","_blank")
        });
    }
  
    
    
    var load_6_Product = function() {
        var rule = 12;
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
                   // object_product.DanhMuc = doc.data().DanhMuc;
                    array_6_products.push(object_product);                    
                }           
            //    $.each(array_8_products, function(i,e) {
            //          db.collection("DanhMuc").doc(e.DanhMuc).get().then(function(doc2){
            //            //  console.log(doc2.data().Ten);
            //            e.DanhMuc = doc2.data().Ten;
            //          //   console.log(e);
            //         });
            //    })
            //       console.log(array_8_products);    
                 add_6_Products();   
            });
           
    }
    load_6_Product();

   // loadParentDanhMuc();

//    $(".data-pass-2").on("click",function(){  
//     $(this).attr("href","single.html?"+"LeXuanTien")    
//     console.log($(this).attr("href")); 
//    });
});
$(function () {
    $('a.picture').Chocolat();
});
$('.pagination-inner a').on('click', function (i) {
    $(this).siblings().removeClass('pagination-active');
    $(this).addClass('pagination-active');
    // $('#item05').css("display","none");
    // $('#item06').css("display","none");
    // $('#item03').css("display","none");
    console.log(i)
})