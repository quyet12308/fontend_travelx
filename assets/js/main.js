const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

document.addEventListener('DOMContentLoaded',  function() {

    show_all_btn = document.querySelector("#show_all_tour #show_all_btn");

    show_all_btn.addEventListener("click",()=>{
        console.log("ham hoat dong")
        function containsPage(str) {
            return str.includes("pages");
          }
          let currentURL = window.location.href;
          
          if(containsPage(currentURL)){
            window.location.href = "show_all_tour.html"
          }
          else{
            window.location.href = "pages/show_all_tour.html"
          }
          
          
            
    })
    // Scroll Top
var scrollTop = () => {
    var header = $(".header");
    header.scrollIntoView({ behavior: "smooth", block: "start" });
};

var scrollBtn = $(".scroll-top");
scrollBtn.addEventListener("click", scrollTop);
window.addEventListener("scroll", scrollBtnDisplay);

function scrollBtnDisplay() {
    if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
    ) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
}

// Active link header
var listLink = location.href;
var listItem = $$(".header__nav__container--list a");
var listLength = listItem.length;

var i = 0;
for (i; i < listLength; i++) {
    if (listItem[i].href === listLink) {
        listItem[i].className = "active";
    }
}

var links = location.href;
var items = $$(".header__menu__body--content a");
var listslength = items.length;

var j = 0;
for (j; j < listLength; j++) {
    if (items[j].href === links) {
        items[j].className = "active";
    }
}

// Header sticky
var headerSticky = $(".header__nav");
var topBar = $(".header__topbar");
window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        headerSticky.classList.add("scroll");
        topBar.classList.add("hide");
    } else {
        headerSticky.classList.remove("scroll");
        topBar.classList.remove("hide");
    }
}

// Search Button
var searchIcon = $("#search");
var input = $(".header__nav__container--search input");

searchIcon.onclick = function () {
    input.classList.toggle("active");
};

// Active link
var links = $$(".header__nav__container--list li");
var add = function () {
    $(".header__nav__container--list li.active").classList.remove("active");
    this.classList.add("active");
};
links.forEach((link) => {
    link.addEventListener("click", add);
});
// Active Search
var tabs = $$(".search__container__tab");

tabs.forEach((tab) => {
    tab.onclick = function () {
        $(".search__container__tab.active").classList.remove("active");
        this.classList.add("active");
    };
});

// Header menu modal

var box = $(".header__menu__overlay");
var boxBody = $(".header__menu__body--content");
var open = $("#menu_open");
var close = $("#menu_close");

open.onclick = function () {
    box.style.display = "block";
    boxBody.classList.add("open");
};

close.onclick = function () {
    box.style.display = "none";
    boxBody.classList.remove("open");
};

// chuyển màn
function navigateTo(url) {
    var content = document.getElementsByTagName('body');
    content.classList.add('hidden');
    
    setTimeout(function() {
      window.location.href = url;
    }, 300); // Đợi 300ms (thời gian transition) trước khi thực hiện chuyển trang
  }


// login test
let id_login = $("#login_id")
// let id_login = document.getElementById("login_id")
id_login.addEventListener("click",()=>{
    // let currentURL = window.location.origin + window.location.pathname;
    // alert(currentURL)
    // window.location.href = "./pages/login_and_register.html";
    // window.location.href = "http://127.0.0.1:5500/pages/login.html"
    console.log("login activite")
    window.location.href = "/pages/login.html"
    
    // navigateTo("http://127.0.0.1:5500/pages/login_and_register.html")
})

let id_register = $("#register_id")
id_register.addEventListener("click",()=>{
    
    window.location.href = "/pages/register.html"
    
})





})


