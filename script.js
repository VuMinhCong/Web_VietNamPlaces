/*===== Menu =====*/
const menubarBtn = document.querySelector('.header-top i')
menubarBtn.addEventListener("click", function(){
     document.querySelector('.header-top ul').classList.toggle('active')
})

/*===== Scroll reveal animation =====*/
const sr = ScrollReveal({
     origin: 'top',
     distance: '80px',
     duration: 2000,
     reset: true
})

/*Scroll home*/
sr.reveal('.header-content', {})

/*Nice places*/
sr.reveal('.nice-place-item', {delay: 300})
 
/*About*/
sr.reveal('.about-content-left', {delay: 500})
sr.reveal('.about-content-subtitle', {delay: 300})
sr.reveal('.about-content-text', {delay: 500})
sr.reveal('.bd-grid', {delay: 600, interval: 200})
sr.reveal('.service-item', {interval: 200})
 
/*Collections*/
sr.reveal('.tour-content-item-img', {delay: 500})
sr.reveal('.tour-content-item-text', {delay: 500})
 
/*Review*/
sr.reveal('.review-item', {interval: 200})

/*Sign up*/
sr.reveal('.signup-content', {interval: 200})

/*Contact*/
sr.reveal('.contact-content-item', {delay: 400})
sr.reveal('.contact-content-bottom', {delay: 400})