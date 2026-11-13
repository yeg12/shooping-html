const Mart = [
  {name: "tomates", 
  types: "fruit", 
  price:" 3"},
  {name: "spinach",
  types: "vegatable", 
  price:"3"},
  {name: "bass", 
  types: "fih", 
  price:"5"},
  {name: "crab",
  types: "creastean", 
  price:"10"},
  {name: "lobster",
  types: "creastean",
  price:"32"},
  {name: "beet", 
  types: "vegatable",
  price:" 1"},
  {name: "apple",
  types: "fuits",
  price:"4"},
  {name: "flat fish",
  types: "fih",
  price:"7"},
  {name: "shrimp",
  types: "creastean", 
  price:"7"},
  {name: "shrak fin",
  types: "fih", price:"12"},
  {name: "oyster",
  types: "clam",
  price:" 50"},
  {name: "a5 waygu",
  types: "meet", 
  price:"100"},
  {name: "duck", 
  types: "meet", 
  price:"25"},
  {name: "brisket",
  types: "meet",
  price:"10"},
  {name: "horse",
  types: "mammal",
  price:"32"},
  {name: "chicken",
  types: "meet", 
  price:" 10"},
  {name: "potatoes",
  types: "vegatable",
  price:"1.50"},
  {name: "puffer fih",
  types: "fih",
  price:"45"},
  {name: "rabbit",
  types: "meet", 
  price:"12"},
  {name: "water", 
  types: "drink", 
  price:"1"}
]
function inject(item) {
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
        <h2 class="card-header">${item.name}</h2>
        <img src="${item.img}" alt="" />
        <p>${item.types}</p>
        <p>${item.price} dollars</p>
        <button class = "btn> add to cart </button>
      </div> `,
  );
}
Mart.forEach(inject);
// btn.addEventListener("click", function () {
//   x++;
//   rgb();
// });

// const button = document.querySelectorAll("button");
// buttons.forEach((button) => 
//   button.addEventListener("clicker", function(){
//     console.log(event.target.closet(".card").getAttribute("data.item"));
// }));
