const products = [
{
    name:"Swiss Chocolate",
    type:"ช็อกโกแลต",
    price:"฿320",
    image:"https://images.unsplash.com/photo-1587271644048-2fbb187de8d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN3aXNzJTIwY2hvY29sYXRlfGVufDB8fDB8fHww",
    detail:"ช็อกโกแลตนมแท้จากประเทศสวิตเซอร์แลนด์ รสชาติเข้มข้น หอมโกโก้ คุณภาพระดับโลก"
},
{
    name:"Victorinox Knife",
    type:"มีด",
    price:"฿1,290",
    image:"https://images.unsplash.com/photo-1722376934693-694711925008?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VmljdG9yaW5veCUyMEtuaWZlfGVufDB8fDB8fHww",
    detail:"มีดพกอเนกประสงค์จาก Victorinox แข็งแรง ทนทาน ใช้งานได้หลากหลาย"
},
{
    name:"Swiss Cheese",
    type:"ชีส",
    price:"฿480",
    image:"https://images.unsplash.com/photo-1631379578550-7038263db699?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3dpc3MlMjBjaGVlc2V8ZW58MHx8MHx8fDA%3D.com/photo-1486297678162-eb2a19b0a32d?w=900",
    detail:"ชีสแท้จากสวิตเซอร์แลนด์ รสชาติกลมกล่อม เหมาะกับไวน์และขนมปัง"
},
{
    name:"Luxury Watch Audemars Piguet",
    type:"นาฬิกา",
    price:"฿25,900",
    image:"https://dynamicmedia.audemarspiguet.com/is/image/audemarspiguet/lbv3_RO_collection?size=1920,0&wid=1920&fmt=avif-alpha&dpr=off",
    detail:"นาฬิกาหรู Swiss Made ความแม่นยำสูง ดีไซน์ระดับพรีเมียม"
},
{
    name:"Lindt Chocolate",
    type:"ช็อกโกแลต",
    price:"฿390",
    image:"https://images.unsplash.com/photo-1603835747422-34e87b374c7f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGluZHQlMjBjaG9jb2xhdGV8ZW58MHx8MHx8fDA%3D",
    detail:"ช็อกโกแลต Lindt ยอดนิยม รสชาติละมุน เหมาะเป็นของฝาก"
},
{
    name:"Swiss Army Bag",
    type:"กระเป๋า",
    price:"฿2,990",
    image:"https://images.unsplash.com/photo-1547949003-9792a18a2601?w=900",
    detail:"กระเป๋า Swiss Army แข็งแรง กันน้ำ น้ำหนักเบา"
},
{
    name:"Premium Cheese",
    type:"ชีส",
    price:"฿690",
    image:"https://images.unsplash.com/photo-1551790629-9d5c2d781d8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3dpc3MlMjBjaGVlc2V8ZW58MHx8MHx8fDA%3D",
    detail:"ชีสคุณภาพพรีเมียม ผลิตจากนมวัวแท้"
},
{
    name:"Rolex Style",
    type:"นาฬิกา",
    price:"฿59,900",
    image:"https://images.unsplash.com/photo-1730757679771-b53e798846cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3dpc3MlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
    detail:"นาฬิกาหรูสไตล์สวิส ดีไซน์เรียบหรู เหมาะทุกโอกาส"
}
];

const container = document.getElementById("products");

function showProducts(data){

container.innerHTML="";

data.forEach((item)=>{

container.innerHTML +=`

<div class="card">

<img src="${item.image}">

<div class="info">

<h3>${item.name}</h3>

<p>${item.type}</p>

<div class="price">${item.price}</div>

<div class="btn">

<button onclick="showDetail('${item.name}')">

รายละเอียด

</button>

<i class="fa-solid fa-heart heart"></i>

</div>

</div>

</div>

`;

});

favorite();
}

showProducts(products);

/* Search */

document.getElementById("search").addEventListener("keyup",(e)=>{

let text=e.target.value.toLowerCase();

let result=products.filter(item=>

item.name.toLowerCase().includes(text)||

item.type.toLowerCase().includes(text)

);

showProducts(result);

});

/* Filter */

document.querySelectorAll(".filter button").forEach(btn=>{

btn.onclick=()=>{

let type=btn.dataset.type;

if(type==="ทั้งหมด"){

showProducts(products);

}else{

let result=products.filter(item=>item.type===type);

showProducts(result);

}

}

});

/* Popup */

const popup=document.getElementById("popup");

const popupImg=document.getElementById("popupImg");

const popupName=document.getElementById("popupName");

const popupText=document.getElementById("popupText");

function showDetail(name){

let item=products.find(p=>p.name===name);

popup.style.display="flex";

popupImg.src=item.image;

popupName.innerHTML=item.name;

popupText.innerHTML=`

ประเภท : ${item.type}

<br><br>

ราคา : ${item.price}

<br><br>

${item.detail}

`;

}

document.getElementById("close").onclick=()=>{

popup.style.display="none";

}

window.onclick=(e)=>{

if(e.target==popup){

popup.style.display="none";

}

}

/* Favorite */

function favorite(){

document.querySelectorAll(".heart").forEach(item=>{

item.onclick=()=>{

item.classList.toggle("active");

}

});

}

/* Dark Mode */

const darkBtn=document.getElementById("darkBtn");

darkBtn.onclick=()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

darkBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

}else{

darkBtn.innerHTML='<i class="fa-solid fa-moon"></i>';

}

}

/* Animation */

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

setTimeout(()=>{

document.querySelectorAll(".card").forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(40px)";

card.style.transition=".5s";

observer.observe(card);

});

},200);