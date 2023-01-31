//Navbar Close and open
let btnOpen=document.getElementById('open__nav-btn');
let links=document.getElementById('nav__iteams')
let btnClose=document.getElementById('close__nav-btn')
btnOpen.addEventListener('click',()=>{
    links.style.display="flex"
    btnOpen.style.display='none'
    btnClose.style.display='inline-block'
})
const closeNav=()=>{
    btnClose.classList.add('fa-spin')
    links.style.display="none"
    btnOpen.style.display='block'
    btnClose.style.display='none'
}
btnClose.addEventListener('click',closeNav)

//close nav menu when amenu item is clicked
if (window.innerWidth<1024){
    document.querySelectorAll('#nav__iteams li a').forEach(navItem=>{
        navItem.addEventListener('click',()=>{
            closeNav();
        })
    })
}

//change navbar style on scroll
window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('window-scorll',window.scrollY>0)
})

    // <!-- Initialize Swiper -->
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },

            breakpoints : {
                600:{
                    slidesPerView: 2
                },
                1024 :{
                    slidesPerView: 3
                }
            }
        });