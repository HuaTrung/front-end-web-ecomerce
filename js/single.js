


console.log("single.js")
var para = location.search.substring(1).split("&")
var temp = para[0].split("=")
l = unescape(temp[1])
console.log("l value: " + l)
// $(document).ready(function(){
//     $("#passForm").submit(function() {
//         console.log("inside producrForm")
//         // get all the inputs into an array.
//         var $inputs = $('#passForm :input');
    
//         // not sure if you wanted this, but I thought I'd add it.
//         // get an associative array of just the values.
//         var values = {};
//         $inputs.each(function() {
//             values[this.name] = $(this).val();
//             console.log("productForm: " + values[this.name])
//         });
    
//     });
// })

// function test(){
//     console.log("inside test")
//     var para = location.search.substring(1).split("&")
//     console.log("para: " + para)
//     var temp = para[0].split("=")
//     var l = unescape(temp[1])
    
//     console.log(l)
// }
// test()

// function getParams(){
//     console.log("inside getParams")
//     var idx = document.URL.indexOf('?');
//     var params = new Array();
//     if (idx != -1) {
//     var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
//     for (var i=0; i<pairs.length; i++){
//     nameVal = pairs[i].split('=');
//     params[nameVal[0]] = nameVal[1];
//     }
//     }
//     return params;
//     }
//     params = getParams();
//     firstname = unescape(params["txtPass"]);
//     console.log("txtPass = " + firstname + "<br>");