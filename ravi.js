//element refenceses
let productCon = document.getElementById("pci");
let tesr  = document.getElementById("rak");
let feedbacke = document.getElementById("feedback");
let clearcorti = document.getElementById("clearcort");
let sort1 = document.getElementById("sort");
//default prodyucts
let products = [
     product1 ={
        id:1,
        name:"laptop",
        price: 50000,
    },
    product2 ={
        id:2,
        name:"phone",
        price: 30000,
         },
    product3 ={
        id:3,
        name:"machines",
        price: 25000,
              },
    
        product4 ={ 
        id:4,
        name:"books",
        price: 20000,
                   },
        product5 ={
        id:5,
        name:"iron",
        price: 2300,
                   },
        product6 ={
        id:6,
        name:"bottles",
        price: 20000,
                   },
        product7 ={
        id:7,
        name:"play things",
        price: 550000,
                   },
        product8 ={
        id:8,
        name:"bedsheets",
        price: 500,
                   },
        product9 ={
        id:9,
        name:"simple goods",
        price: 26000,
                   },
];
//empty cart
let cort =[];
 


products.forEach(function(modda){
let {id,name,price} = modda;

    
 //let productrow =`    <div class="producti">
  //<p>
    //   ${product.name}-Rs ${product.price}
    //</p>
    //<button onclick = "addtoCart(${product.id})">add to cart</button>
    //</div>`;
    //productCon.insertAdjacentHTML("beforeend",productrow) 
    let de =document.createElement("div");
    de.className ="producti";
        
    de.innerHTML = `<p>${name}-Rs ${price}
</P> <button onclick="addj(${id})">add to cart</button>`;
productCon.appendChild(de);

});
//add to cart
 function addj(be)
 {
  //check if the producy is allready available in the cart
     let mother = cort.some(function(kjh){
      return kjh.id === be;
    });
    if(mother)
    {
    //feedbacke.textContent = ` all ready added to the cart`;
fd("all ready added to the cart","error");
      return;
    }
 let nj = products.find(function(menti){
return menti.id === be;
});
cort.push(nj);
console.log(cort);
render();
 //malli use chestanu 
 let {id:trid,name,price}=nj;

 
  
//let cp =`    <div class="producti">
  //<p>
    //   ${name}-Rs ${price}
    //</p>
    //<button onclick="remove(${trid})">remove</button>
    //</div>`;
    //tesr.insertAdjacentHTML("beforeend",cp);
    //feedbacke.textContent = `${name} added to the cart`;
fd(`${name} added to the cart`, "success");
 }
 //render cart
 function render(){
  tesr.innerHTML = "";
  cort.forEach(function(product){
    let {id,name,price} = product;
    let cp =` <div class="producti">
  <p>
       ${name}-Rs ${price}
    </p>
    <button onclick="remove(${id})">remove</button>
    </div>`;
    tesr.insertAdjacentHTML("beforeend",cp);
  });
  let total=0;
 for(let i=0;i<cort.length;i++){
  total = total+cort[i].price;
 }
 document.getElementById("totalprice").textContent = `rs.${total}`;
 }
 function remove(mama){
  console.log(mama);
 // cort.find(function(product){
   // return product.id = mama;
  //})
  let update = cort.filter(function(product){
    return product.id !== mama;
  });
  cort = update;
  render();
 }
 let time;
 function fd(bro,type)
 {
  clearTimeout(time);
  feedbacke.style.display ="block";

      feedbacke.textContent = bro;
if(type === "success")
{
  feedbacke.style.backgroundColor = "green";
}
if(type === "error")
{
  feedbacke.style.backgroundColor = "red";
}
  time = setTimeout(function(){
feedbacke.style.display ="none";
},3000)
 }
 clearcorti.addEventListener("click" ,function(){
  console.log("cotryt");
  cort = [];
  render();
  fd("cart is cleared", "success")
 });
 sort1.addEventListener("click",function(){
  cort.sort(function(item1,item2){
  return item1.price-item2.price;
 });
 render();
});