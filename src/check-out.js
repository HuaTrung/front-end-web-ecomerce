$(document).ready(function(){
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

    var data_array = []
    var total_money = 0;
    var loadDataFromSession2Table = function () {
         console.log(sessionStorage);
        Object.keys(sessionStorage).map(function(c,i,a){
            var cartValue = sessionStorage.getItem(c);
             var item = JSON.parse( cartValue );
             if (item !== true){
                $('#mytable').append("<tr><td class='col-md-5'><img src=" + item.urlImage+" width='100' height='100' style = 'margin-right:10px; margin-bottom:10px'><span style='font-size:14px'>"+ item.name +"</span></td><td class='col-md-2'><span style='font-size:15px'>"+item.price+"</span></td><td class='col-md-2'><span style='font-size:15px'>"+ item.quality +"</span></td><td class='col-md-3'<td style='font-size:15px'>"+item.price*item.quality+"</span></td></tr> ");
                total_money += item.price*item.quality;

                var i = {}
                i.id = item.id;
                i.quality = item.quality;
                i.price = item.price;
                data_array.push(i);
            }
           
            });
            $("#total-money").append("<h2>Tổng số tiền: "+ total_money + " VNĐ</h2>")
          console.log(data_array);
    }


    $("#btn-start-order").on("click",function(){
        if (total_money !== 0){
            firestore.collection("DonHang").add({    
                CustomerName:$("#cus-name").val(),
                CustomerEmail:$("#cus-email").val(),
                CustomerAddress:$("#cus-address").val(),
                Products:data_array,
                TotalMoney:parseInt(total_money)
            }).then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
                alert("Đã thêm thành công");

                // delete session:
                sessionStorage.clear()
                location.reload();
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            
            });
        } else {
            alert("Bạn chưa có hàng");
        }
    });

    loadDataFromSession2Table ();
});
