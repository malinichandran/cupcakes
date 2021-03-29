

async function showHomePage(){
    const response = await axios.get('/api/cupcakes');
    let cupcakes = response.data.cupcakes
   
    for(let i in cupcakes){
     
      var cupcake = `   <li class="list-group-item d-flex justify-content-between align-items-center">
              <img src=${cupcakes[i].image}> 
                <p> <a href="/api/cupcakes/${cupcakes[i].id}"
              class="goto-cupcake"
              data-id="${cupcakes[i].id}"><b>${cupcakes[i].flavor}</b></a></p></li>
          
      
        `
        let list = $("#cupcakes-list").append(cupcake)
       }
       
       return 
}  

$("#new-cupcake-form").on("submit",async function (evt){
    evt.preventDefault();
    let flavor = $("#flavor").val();
    let size = $("#size").val();
    let rating = $("#rating").val();
    let image = $("#image").val();
    const response = await axios.post('/api/cupcakes',{
        flavor,
        size,
        rating,
        image
    });
   let nc = response.data.cupcake
    var newCupcake = `   <li class="list-group-item d-flex justify-content-between align-items-center">
    <img src=${nc.image}> 
      <p> <a href="/api/cupcakes/${nc.id}"
    class="goto-cupcake"
    data-id="${nc.id}"><b>${nc.flavor}</b></a></p></li>


`
    $("#cupcakes-list").append(newCupcake)
})
$(showHomePage);