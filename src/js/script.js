// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

//Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#totop');

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
}

// Click out the hambuger
window.addEventListener('click', function(e){
    if(e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});


//Darkmode Toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');
const textMode = document.querySelector('#textmode');

darkToggle.addEventListener('click', function(){
    if (darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
        textMode.innerHTML = 'Dark';

    }else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
        textMode.innerHTML = 'Light';
    }
});

//Change position toggle used mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
    darkToggle.checked = true;
  } else {
    document.documentElement.classList.remove('dark')
    darkToggle.checked = false;
  }
