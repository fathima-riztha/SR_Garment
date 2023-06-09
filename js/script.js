let navbar = document.querySelector('.header .flex .navbar');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
   profile.classList.remove('active');
}

let profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = () =>{
   profile.classList.toggle('active');
   navbar.classList.remove('active');
}

window.onscroll = () =>{
   profile.classList.remove('active');
   navbar.classList.remove('active');
}


//img gallery animation part

var slides = document.querySelectorAll('.slide');
    var btns = document.querySelectorAll('.btn');
    let currentSlide = 1;

    // Javascript for image slider manual navigation
    var manualNav = function(manual){
      slides.forEach((slide) => {
        slide.classList.remove('active');

        btns.forEach((btn) => {
          btn.classList.remove('active');
        });
      });

      slides[manual].classList.add('active');
      btns[manual].classList.add('active');
    }

    btns.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
      });
    });

    // Javascript for image slider autoplay navigation
    var repeat = function(activeClass){
      let active = document.getElementsByClassName('active');
      let i = 1;

      var repeater = () => {
        setTimeout(function(){
          [...active].forEach((activeSlide) => {
            activeSlide.classList.remove('active');
          });

        slides[i].classList.add('active');
        btns[i].classList.add('active');
        i++;

        if(slides.length == i){
          i = 0;
        }
        if(i >= slides.length){
          return;
        }
        repeater();
      }, 3500);
      }
      repeater();
    }
    repeat();


    //body animations about page

     //common reveal options to create reveal animations
 ScrollReveal({
  //reset: true,
  distance: '60px',
  duration: 2500,
  delay: 400
});

//target elements, and specify options to create reveal animations
ScrollReveal().reveal('.ab1', { delay: 1000, origin: 'right' });
// ScrollReveal().reveal('.sec-01 .image, .info', { delay: 600, origin: 'bottom' });
ScrollReveal().reveal('.products', { delay: 1000, origin: 'right' });
// ScrollReveal().reveal('.media-icons i', { delay: 500, origin: 'bottom', interval: 200 });
ScrollReveal().reveal('.div1', { delay: 850, origin: 'left' });
// ScrollReveal().reveal('.media-info li', { delay: 500, origin: 'left', interval: 200 });


//
jQuery("#backtotop").click(function(){
	jQuery("body,html").animate({
		scrollTop:0
	},600);
});

jQuery(window).scroll(function(){
	if(jQuery(window).scrollTop() > 150)
	{
		jQuery("#backtotop").addClass("visible");
	}
	else
	{
		jQuery("#backtotop").removeClass("visible");
	}
});


