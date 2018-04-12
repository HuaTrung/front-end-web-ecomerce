$(document).ready(function(){

    var data_array = []

    var loadDataFromSession2Table = function () {
         console.log(sessionStorage);
        Object.keys(sessionStorage).map(function(c,i,a){
            var cartValue = sessionStorage.getItem(c);
             var item = JSON.parse( cartValue );
             if (item !== true)
                $('#mytable').append("<tr><td class='col-md-5'><img src=" + item.urlImage+" width='100' height='100' style = 'margin-right:10px; margin-bottom:10px'>"+ item.name +"</td><td class='col-md-2'>"+item.price+"</td><td class='col-md-2'>"+ item.quality +"</td><td class='col-md-3'>"+item.price*item.quality+"</td></tr>");
          });

          console.log(data_array);
    }
    loadDataFromSession2Table ();
});