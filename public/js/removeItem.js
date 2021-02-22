window.addEventListener('load', function () {


    let delItem = document.querySelector('#delete-item')
    let productId = document.querySelector('input[name=productId]'); 

         delItem.addEventListener('click',function(e){
            
             e.preventDefault();

             axios({
                method: 'delete',
                url: 'http://localhost:3000/api/items',
                data: {
                    id: productId.value
                }
            })
            .then(res => {
                if (res.status == '201') {
                    //https://developer.mozilla.org/en-US/docs/Web/API/Location
                    window.location.reload()
                } else {
                    console.log('Error');
                }
            })
            .catch(err => {
                console.log(err);
            })

         })




        })
    
    



        
        
            
    