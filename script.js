// const products ={
//     name:"Lap Top",
//     details:"good laptop for your daily works",
//     price:1800
// }





// let container =document.getElementById("container")
// container.innerHTML=`<div class="card" style="width: 18rem;">
//   <img class="card-img-top" src="..." alt="Card image cap">
//   <div class="card-body">
//     <h5 class="card-title">${products.name}</h5>
//     <p class="card-text">${products.details}</p>
//     <span>${products.price}</span>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>`

fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(json=>{
    console.log(json)


for(let productList of json){
let container =document.getElementById("container")
// console.log(productList)
container.innerHTML+=`<div class="card" style="width: 18rem;">
  <img class="card-img-top" src=${productList.image} alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${productList.title}</h5>
    <p class="card-text">${productList.description}</p>
    <span>${productList.price}</span>
   
  </div>
</div>`
}
})


