
/*=============== testimonial ===============*/
const swiperTestimonial = new Swiper('.testimonial__swiper', {
    loop: true,
    spaceBetween:32,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    dynamicBullets: true,
    },
  });

var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
    });

/*=============== ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.accordion__item')

// 1. Selecionar cada item
accordionItems.forEach((item) =>{
    const accordionHeader = item.querySelector('.accordion__header')

    // 2. Seleccionar cada click del header
    accordionHeader.addEventListener('click', () =>{
        // 7. Crear la variable
        const openItem = document.querySelector('.accordion-open')
        
        // 5. Llamar a la funcion toggle item
        toggleItem(item)

        // 8. Validar si existe la clase
        if(openItem && openItem!== item){
            toggleItem(openItem)
        }
    })
})

// 3. Crear una funcion tipo constante
const toggleItem = (item) =>{
    // 3.1 Crear la variable
    const accordionContent = item.querySelector('.accordion__content')

    // 6. Si existe otro elemento que contenga la clase accorion-open que remueva su clase
    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }else{
        // 4. Agregar el height maximo del content
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }
}
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
/*=============== Email Js ===============*/
// const contactForm =document.getElementById('contact-form'),
//         contactMessage = document.getElementById('contact-message')

// const sendEmail = (e) =>   {
//     e.preventDefault()
//     emailjs.sendEmail('service_cn6qz0e','template_3lps0jg', '#contact-form','i60XgCvTdjdBJUqGB')
//     .then(() =>{
//         contactMessage.textContent = 'Message Sent Successfully ✅'
//         setTimeout(() =>{
//             contactMessage.textContent = ''
//         }, 5000)
//         contactForm.reset()
//     }, ()=>{
//         contactMessage.textContent = 'Message not sent (service error) ❌'
//     })
// }    
// contactForm.addEventListener('submit', sendEmail)
