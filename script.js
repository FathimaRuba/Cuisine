res = fetch('https://dummyjson.com/recipes')
console.log(res);
e = ''
res.then((resolve)=>resolve.json()).then((val)=>{
    val.recipes.forEach((element,index) => {
    e += `
    <div class="card col-lg-3 col-md-5 col-sm-2 my-3 mx-auto">
    <img src="${element.image}" class="card-img-top my-2" alt="..." height="250">
        <div class="card-body">
            <h5 class="card-title text-center fw-bolder fs-4">${element.name}</h5>
            <h5 class="card-title text-center">${element.cuisine}</h5>
            <button class="btn btn-warning rounded-pill w-75 mx-auto my-2 d-flex justify-content-center text-white" data-bs-toggle="modal" data-bs-target="#myModal-${index}" >Get Recipe</button>
            <div class="d-flex justify-content-center gap-2">
            <a href="#" class="btn border border-warning rounded-pill px-3 fill" style="border: 2px solid orange;">Cooking Time: ${element.prepTimeMinutes}</a>
            <a href="#" class="btn border border-warning rounded-pill px-3 fill" style="border: 2px solid orange;"><i class="bi bi-star"></i>   ${element.rating}</a>
            </div>
        </div>
    </div>
    `
})
console.log(e);
prod.innerHTML = e
}).catch((reject)=>{console.log(reject)})
// ----------------------------------------------------------------------------------------------------

data = fetch('https://dummyjson.com/recipes')
console.log(data);
s = ''
data.then((resolve)=>resolve.json()).then((val)=>{
    val.recipes.forEach((element,index) => {
    s += `
    <div class="modal" id="myModal-${index}">
        <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content m-2"  style="background-color: lavenderblush">
                <div class="modal-header">
                    <h4 class="modal-title text-center">${element.name}</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <h6 class="modal-title">Servings: ${element.servings}</h6>
                    <p class="modal-title">${element.ingredients}</p>
                </div>
                <div>
                    <h5 class="modal-header">Instructions</h5>
                </div>
                <div>
                    <p class="modal-title m-3">${element.instructions}</p>
                </div>
            </div>
        </div>
    </div>
    `
})
console.log(s);
popup.innerHTML = s
}).catch((reject)=>{console.log(reject)})