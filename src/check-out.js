$(document).ready(function(){

    var data_array = []

    var loadDataFromSession2Table = function () {
        // console.log(sessionStorage);
        Object.keys(sessionStorage).map(function(c,i,a){
            var cartValue = sessionStorage.getItem(c);
             var item = JSON.parse( cartValue );
             if (item !== true)
                $('#myTable').append("<tr><td>"+ item.name +"</td><td>"+item.price+"</td><td>"+ item.quality +"</td><td>"+item.price*item.quality+"</td></tr>");
           data_array.push(item);
            // // do whatever
            // console.log(c)
            // console.log(i)
            // console.log(a)
            // console.log("===============================================")
          });

          console.log(data_array);
    }
    loadDataFromSession2Table ();
});