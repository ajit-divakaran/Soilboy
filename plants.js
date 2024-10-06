// document.addEventListener('DOMContentLoaded',()=>{

function change() {
  if (filter.innerHTML == "+") {
    filter.innerHTML = "-";
  } else {
    filter.innerHTML = "+";
  }
}

function closeLogin() {
  console.log("loginout")
logsec.classList.add("hidden");
}

const main = document.querySelector("main");
const parentlist = document.querySelector("#parentlist");
const childlist = document.querySelector("#childlist");
let isMouseOverPlants = false;
let isMouseOverList = false;

const menuItems = document.getElementById("menu-items");

const loginElement = document.getElementById("logele");
const logSection = document.getElementById("logsec");
// const close = document.getElementById("close");
function showLogin() {
  logSection.classList.remove("hidden");
  //  loginElement.classList.remove("hidden")
}



window.addEventListener("resize", function () {
  console.log("im in");
  if (window.innerWidth > 700) {
    menuItems.classList.add("hidden");
    console.log("Im inside resize");
    main.classList.remove("hidden");
  }
});
function checkMouseLeave() {
  if (!isMouseOverPlants && !isMouseOverList) {
    childlist.classList.add("hidden");
    childlist.classList.remove("block");
  }
}

function pEnter() {
  isMouseOverPlants = true;
  childlist.classList.remove("hidden");
  childlist.classList.add("block");
  console.log(childlist);
  console.log("entered p");
}

function pLeave() {
  isMouseOverPlants = false;
  checkMouseLeave();
  console.log("left p");
  console.log(childlist);
}

function cEnter() {
  isMouseOverList = true;
}
function cLeave() {
  isMouseOverList = false;
  checkMouseLeave();
}

let card = [
  {
    product: "Oxalis megalorrhiza",
    price: "118.00",
    display:
      "https://images.squarespace-cdn.com/content/v1/5f6effe2de91535318dd74a3/cf8bf859-8146-409f-a5b7-f1c070288a1f/Clover-Yellow-Flowers.jpg?format=1000w",
    hov: "https://images.squarespace-cdn.com/content/v1/5f6effe2de91535318dd74a3/1720860183868-1T9O086GS6Q4FYWN5QVY/IMG_7518.jpg?format=1000w",
  },
  {
    product: "Three Leaf",
    price: "108.00",
    display:
      "https://images.squarespace-cdn.com/content/v1/5f6effe2de91535318dd74a3/1698590429170-759IELXOGY27SYHHTMTC/Clover-Plant.jpg?format=1000w",
    hov: "https://images.squarespace-cdn.com/content/v1/5f6effe2de91535318dd74a3/1698590436190-5RZB6AZHXHAUVY6OE5YB/IMG_6477.jpg?format=1000w",
  },
  {
    product: "Decarya Madagascariensis",
    price: "198.00",
    display:
      "https://images.squarespace-cdn.com/content/v1/5f6effe2de91535318dd74a3/bd623ac3-03f7-4fd6-9441-c5ebcefc75d3/decarya-cylinder-planter.jpg?format=1000w",
    hov: "https://images.squarespace-cdn.com/content/v1/5f6effe2de91535318dd74a3/1658393038818-Q9CWYBXCA9SJOE1XT5RM/IMG_8796.jpg?format=1000w",
  },
  {
    product: "Olive Tree(30-40cm)",
    price: "108.00",
    display:
      "https://images.squarespace-cdn.com/content/v1/5f6effe2de91535318dd74a3/1666254610615-OZDKM4SY8ZMM3LED1UW4/olivetree-s-a-1.jpg?format=1000w",
    hov: "https://images.squarespace-cdn.com/content/v1/5f6effe2de91535318dd74a3/1649598136778-PF0Z35LDV3290CZZ2G7G/Straight_C.jpg?format=1000w  ",
  },
  {
    product: "Hoya Kerrii",
    price: "58.00",
    display:
      "https://images.squarespace-cdn.com/content/v1/5f6effe2de91535318dd74a3/1696973750320-IROCK2YVLUSEI6GOX4KR/Hoya-Kerrii-obj02-s.jpg?format=1000w",
    hov: "https://images.squarespace-cdn.com/content/v1/5f6effe2de91535318dd74a3/1621678563299-P39DUKA7VZX0FPTF8GWW/Hoya.jpg?format=1000w",
  },
  {
    product: "Stephania Erecta",
    price: "128.00",
    display:
      "https://images.squarespace-cdn.com/content/v1/5f6effe2de91535318dd74a3/1686577641454-N3H5UODC9RIDSNNI5HTJ/Stephania-Erecta-Moon-Cream.jpg?format=1000w",
    hov: "https://images.squarespace-cdn.com/content/v1/5f6effe2de91535318dd74a3/1663898906421-R0V5SLJRFVUSZOF1U6ZE/IMG_0630.jpg?format=1000w",
  },
];
card.forEach((item) => {
  plantsgrid.innerHTML += `
<div class="w-full relative max-w-sm rounded-lg ">
  <a href="#">
      <div class=" w-100 mb-6 flex justify-center box-content" style="height:25rem">
          <img class="rounded-t-lg" id="org" src="${item.display}" alt="product image" width="80%"/>
          <img class="p-1 rounded-t-lg absolute opacity-0 transition duration-1000 ease-in-out hover:opacity-100" id="hover" src="${item.hov}" alt="product image" width="80%"/>
      </div>
  </a>
  <div class="px-5 pb-5">
      <a href="#">
          <h5 class="text-xl font-semibold tracking-tight text-gray-900">${item.product}</h5>
      </a>
      <div class="flex items-center justify-between mt-2">
          <span class="text-3xl md:text-2xl lg:text-3xl font-bold text-gray-900 "><span class="text-sm">SGD</span>${item.price}</span>
        <button class="text-white text-base smd:text-xxs smd:ml-4 xlg:text-xs xxlg:text-base bg-blue-800 hover:bg-blue-900 rounded-lg px-5 py-2 text-center" >Add to cart</button>
      </div>
  </div>
</div>

`;

{/* <a href="#" class="text-white p-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a> */}
  // function imgchange(){
  //     hover.style.opacity="1";
  //     origin.style.opacity = "0"

  // }
});

// menuItems.classList.add('hidden')
// console.log(menuItems)

console.log(main);
document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth < 700) {
    menuItems.classList.add("hidden");
  }
});

function display() {
  main.classList.toggle("hidden");
  if (menuItems.classList.contains("hidden")) {
    menuItems.classList.replace("hidden", "block");
  } else {
    menuItems.classList.replace("block", "hidden");
  }
}

const img = document.getElementById("hoverImage");
img.addEventListener("mouseover", () => {
  img.src = "image2.jpg";
});
img.addEventListener("mouseout", () => {
  img.src = "image1.jpg";
});

// })
