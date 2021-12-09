const hamburger = document.querySelector('.fa-bars');
const closeMenu =  document.querySelector('.fa-times');
const mediaMenu = document.querySelector('.hamburger-menu');

/*
hamburger.addEventListener('click', function(){
    mediaMenu.style.display = "block";
});

closeMenu.addEventListener('click', function(){
    mediaMenu.style.display = "none";
});
*/

hamburger.addEventListener('click', function(){
    mediaMenu.className = mediaMenu.classList +  " active";
});

closeMenu.addEventListener('click', function(){
    mediaMenu.classList.remove("active");
});