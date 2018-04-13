$(document).ready(function () {
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
        $(".six-products .img-responsive").each(function (j) {
            //  console.log(j)
            $(this).attr("src", array_6_products[j].urlImage)
            //$(this).attr("src", "pictures\\Thitngonquocte\\ThitBoNhapKhau\\pc2.jpg")
        });

        $(".six-products .pass-data").each(function (j) {
            $(this).attr("value", array_6_products[j].id)
        });

        $(".six-products  .product-name").each(function (j) {
            //  $(this).append("<a  href='single.html?dfsdf'>"+array_8_products[j].name+"</a>")
            $(this).html(array_6_products[j].name)
        });

        $(".six-products .item_price").each(function (j) {
            $(this).append(array_6_products[j].price + "đ")
        });

        $(".data-pass-2").each(function (j) {
            $(this).attr("href", "single.html?id=" + array_6_products[j].id)
        });

        $(".show-image").each(function (j) {
            $(this).attr("href", array_6_products[j].urlImage)
            $(this).attr("target", "_blank")
        });
    }



    var load_6_Product = function () {
        var rule = 12;
        db.collection("SanPham")
            .onSnapshot(function (querySnapshot) {
                for (i = 0; i < rule; i++) {
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
                console.log("array 6 length: " + array_6_products.length)
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

    var reloadProduct = function (startIndex) {
        console.log("inside reloadProduct: start index " + startIndex + " array 6 length: " + array_6_products.length)
        $(".six-products .img-responsive").each(function (j) {
            console.log(j)
            $(this).attr("src", array_6_products[j + startIndex].urlImage)
            //$(this).attr("src", "pictures\Thitngonquocte\ThitBoNhapKhau\pc2.jpg")
        });

        $(".six-products .pass-data").each(function (j) {
            $(this).attr("value", array_6_products[j + startIndex].id)
        });

        $(".six-products  .product-name").each(function (j) {
            //  $(this).append("<a  href='single.html?dfsdf'>"+array_8_products[j].name+"</a>")
            $(this).html(array_6_products[j + startIndex].name)
        });

        $(".six-products .item_price").each(function (j) {
            $(this).html(array_6_products[j + startIndex].price + "đ")
        });

        $(".data-pass-2").each(function (j) {
            $(this).attr("href", "single.html?id=" + array_6_products[j].id)
        });

        $(".show-image").each(function (j) {
            $(this).attr("href", array_6_products[j].urlImage)
            $(this).attr("target", "_blank")
        });
    }
    // loadParentDanhMuc();

    //    $(".data-pass-2").on("click",function(){  
    //     $(this).attr("href","single.html?"+"LeXuanTien")    
    //     console.log($(this).attr("href")); 
    //    });
    $(function () {
        $('a.picture').Chocolat();
    });
    $('.pagination-inner a').on('click', function () {
        console.log("Pagination click")
        $(this).siblings().removeClass('pagination-active');
        $(this).addClass('pagination-active');
        // $('#item05').css("display","none");
        // $('#item06').css("display","none");
        // $('#item03').css("display","none");
        console.log("before #so1")
        if ($('#so1').hasClass('pagination-active')) {
            console.log("inside #so1")
            reloadProduct(0)
        }
        else if ($('#so2').hasClass('pagination-active')) {
            console.log("inside #so2")
            reloadProduct(6)
        }
    })
    $('.pagination-newer').on('click', function () {
        if ($('#so6').hasClass('pagination-active')) {
            $('#so6').removeClass('pagination-active')
            $('#so5').addClass('pagination-active');
        }
        else {
            if ($('#so5').hasClass('pagination-active')) {
                $('#so5').removeClass('pagination-active')
                $('#so4').addClass('pagination-active');
            }
            else {
                if ($('#so4').hasClass('pagination-active')) {
                    $('#so4').removeClass('pagination-active')
                    $('#so3').addClass('pagination-active');
                }
                else {
                    if ($('#so3').hasClass('pagination-active')) {
                        $('#so3').removeClass('pagination-active')
                        $('#so2').addClass('pagination-active')
                        reloadProduct(6)
                    }
                    else {
                        if ($('#so2').hasClass('pagination-active')) {
                            $('#so2').removeClass('pagination-active')
                            $('#so1').addClass('pagination-active')
                            reloadProduct(0)
                        }
                    }
                }
            }
        }
    })
    $('.pagination-older').on('click', function () {
        if ($('#so1').hasClass('pagination-active')) {
            $('#so1').removeClass('pagination-active')
            $('#so2').addClass('pagination-active')
            reloadProduct(6)
        }
        else {
            if ($('#so2').hasClass('pagination-active')) {
                $('#so2').removeClass('pagination-active')
                $('#so3').addClass('pagination-active');
            }
            else {
                if ($('#so3').hasClass('pagination-active')) {
                    $('#so3').removeClass('pagination-active')
                    $('#so4').addClass('pagination-active');
                }
                else {
                    if ($('#so4').hasClass('pagination-active')) {
                        $('#so4').removeClass('pagination-active')
                        $('#so5').addClass('pagination-active');
                    }
                    else {
                        if ($('#so5').hasClass('pagination-active')) {
                            $('#so5').removeClass('pagination-active')
                            $('#so6').addClass('pagination-active');
                        }
                    }
                }
            }
        }
    })
});

