window.addEventListener('load', function() {



//hacer un pedido a la api de los ultimos productos
//cuando nos llegue el resultado, modificar el conenedor de ultimos productos para agregar los datos que llegaron
// /api/products/latest

let latest = document.getElementById('latest-products')


fetch("http://localhost:3000/api/products/latest").then(function(response){

return response.json();
}).then(function(data){
    console.log(data.data)

    for(let i=0;i>data.data.length;i++){
       
        
        

        latest.querySelector("section").innerHTML =  '<a href="/products/detail/' + data.data.id[i] + '">'

        console.log(latest.section)
    
        latest.querySelector("img").innerHTML =  '<img src="/images/products/' + data.data.image[i] + '" alt="' + data.data.name[i] + '"></img>'
        latest.querySelector("article").innerHTML =  '<h2>$<%= helpers.trunc(' + data.data.price[i] + '-' +  data.data.price[i] + '*' + data.data.discount[i] +  '/ 100) %></h2>' + '<% if(' + data.data.discount[i] + '> 0) { %>'+ '<span><%=' +  data.data.discount[i] + ' %> % OFF</span>'+ '<% } %> <p><%=' + data.data.name+  '%></p><i class="fas fa-truck"></i>'

  
    }


   
})


let offers = document.getElementById('offers-products')


fetch("http://localhost:3000/api/products/offers").then(function(response){

    return response.json();
}).then(function(data){


    for(let i=0;i>data.data.length;i++){
       
        

        offers.querySelector("section").innerHTML =  '<a href="/products/detail/' + data.data.id[i] + '">'
    
        offers.querySelector("img").innerHTML =  '<img src="/images/products/' + data.data.image[i] + '" alt="' + data.data.name[i] + '"></img>'
        offers.querySelector("article").innerHTML =  '<h2>$<%= helpers.trunc(' + data.data.price[i] + '-' +  data.data.price[i] + '*' + data.data.discount[i] +  '/ 100) %></h2>' + '<% if(' + data.data.discount[i] + '> 0) { %>'+ '<span><%=' +  data.data.discount[i] + ' %> % OFF</span>'+ '<% } %> <p><%=' + data.data.name+  '%></p><i class="fas fa-truck"></i>'

}


})

})