function funCall(){
    var myArray=[
       {Name:'Sameer', Id:1, Age:15},
       {Name:'Noman', Id:2, Age:18},
       {Name:'Ahmad', Id:3, Age:21},
       {Name:'Sufiyan', Id:4, Age:22},
       {Name:'Shuriam', Id:5, Age:17},
    ]
   var html ="<table border '1|1>'"
   setTimeout(() =>{
       html+='<thead>';
       html+='<tr>';
       html+='<td>'+'Id'+'</td>'
       html+='<td>'+'Name'+'</td>'
       html+='<td>'+'Age'+'</td>'
       html+='</tr>'
       html+='</thead>'
       for(var i =0 ; i<myArray.length; i++){
           html+='<tr>';
           html+='<td>'+myArray[i].Id+'</td>';
           html+='<td>'+myArray[i].Name+'</td>';
           html+='<td>'+myArray[i].Age+'</td>';
           html+='</tr>';
       }

       document.getElementById("table").innerHTML =html
   },500);
}
funCall()