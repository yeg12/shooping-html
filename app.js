function inject(item) {
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
        <h2 class="card-header">${item.name}</h2>
        <img src="${item.img}" alt="" />
        <p>filler filler filler</p>
      </div> `,
  );
}

btn.addEventListener("click", function () {
  x++;
  rgb();
});

const button = document.querySelectorAll("button");
buttons.forEach((button) => 
  button.addEventListener("clicker", function(){
    console.log(event.target.closet(".card").getAttribute("data.item"));
}));
