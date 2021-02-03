var hidebtn = document.getElementById("hidebtn");
var showbtn = document.getElementById("showbtn");
var headerbtn = document.getElementsByTagName("header");
var maincontent = document.getElementsByClassName("main-content");
var products = document.querySelectorAll("div.products");

hidebtn.addEventListener("click", clickhide);
showbtn.addEventListener("click", clickshow);

function clickhide(){
    headerbtn[0].style.transform="translateX(-200px)";
    maincontent[0].style.marginLeft="0px";
    showbtn.style.display="initial";
    showbtn.style.opacity="1";
}

function clickshow(){
    headerbtn[0].style.transform="translateX(0px)";
    maincontent[0].style.marginLeft="200px";
    showbtn.style.opacity="0"; 
}

//each product.div has +0.2 delay from the same behind
    for (var i = 0; i < products.length; ++i) {
    var item = products[i];
    var delay = i*0.2;
    products[i].style.animationDelay=delay+"s"
    console.log(products[i])
}