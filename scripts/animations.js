var hidebtn = document.getElementById("hidebtn");
var showbtn = document.getElementById("showbtn");
var logo = document.getElementById("logo");
var headerbtn = document.getElementsByTagName("header");
var maincontent = document.getElementsByClassName("main-content");
var products = document.querySelectorAll("div.products");

//if screen <500 events goes as mobile
if (window.innerWidth < 500) {
    hidebtn.addEventListener("click", clickhideMobile);
    showbtn.addEventListener("click", clickshowMobile);
} else {
    hidebtn.addEventListener("click", clickhide);
    showbtn.addEventListener("click", clickshow);
}

//desktop header
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
//mobile header
function clickshowMobile(){
    headerbtn[0].style.transform="translateX(0px)";
    headerbtn[0].style.width="100%";
    headerbtn[0].style.position="absolute";
    headerbtn[0].style.height="150%";
    showbtn.style.opacity="0";
    logo.style.width="80%";
    logo.style.margin="0 auto";
}
function clickhideMobile(){
    showbtn.style.display="initial";
    showbtn.style.opacity="1";
    headerbtn[0].style.width="200px";
    headerbtn[0].style.transform="translateX(-200px)";
    maincontent[0].style.marginLeft="0px";
    headerbtn[0].style.height="100%";
}

//products animation
//each product.div has +0.2 delay from the same behind
    for (var i = 0; i < products.length; ++i) {
    var item = products[i];
    var delay = i*0.2;
    products[i].style.animationDelay=delay+"s"
    console.log(products[i])
}