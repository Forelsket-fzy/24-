
let lastScroll = 0;

window.addEventListener('scroll', function() {
    const nav_float = document.querySelector('.nav-float');
    const currentScroll = window.scrollY;
    if (currentScroll>lastScroll && currentScroll>10) { // 滚动超过100px时显示
        nav_float.classList.add('nav-float-show');
    }   else {
        nav_float.classList.remove('nav-float-show');
}
});

window.addEventListener('scroll', function() {
    const nav_float = document.querySelector('.nav-all');
    const currentScroll = window.scrollY;
    if (currentScroll>lastScroll && currentScroll>10) { // 滚动超过100px时显示
        nav_float.classList.add('nav-all-show');
    }   else {
        nav_float.classList.remove('nav-all-show');
    }
});




