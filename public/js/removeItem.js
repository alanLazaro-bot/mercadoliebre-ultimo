window.addEventListener('load', function () {


    let delItem = document.querySelector('#delete-item') 

         delItem.addEventListener('click',function(e){
            
             e.preventDefault();

             axios({
                method: 'delete',
                url: 'http://localhost:3000/api/items',
                data: {
                    id: productId
                }
            })
            .then(res => {
                if (res.status == '201') {
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
    
    



        
        
            
    