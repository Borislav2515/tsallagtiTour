let checMenuMobile = document.getElementById('check-menu-mobile');
let overflow = document.querySelector('.overflow');

checMenuMobile.onclick = function () {
    overflow.classList.toggle("display-block");
    document.body.style.overflow = 'hidden';
};

overflow.addEventListener('click', () => {
    checMenuMobile.checked = false;
    overflow.classList.toggle("display-block");
});
