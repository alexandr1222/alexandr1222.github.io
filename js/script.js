//  $(document).ready(function(){
//     $("#menu").on("click","a", function (event) {
//         event.preventDefault();
//         var id  = $(this).attr('href'),
//             top = $(id).offset().top;
//         $('body,html').animate({scrollTop: top}, 1300);
//     });
// });

//  Скролл к якорю

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    const menu = document.querySelector('.social-links__menu')
    menu.classList.toggle('social-links__menu_active')
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

// Закрытие модального окна

$('.modal-form__close').on('click', function(){
    $('.overlay').fadeOut('low')
    $('.social-links').fadeToggle('0.5');
});

// Получение заголовка и описания с карточки на модальное окно
// а также отображени самого модально окна

$('[data-modal=buy-tour]').each(function(i){
    $(this).on('click', function() {
        $('.modal-form__subtitle').text($('.pack_item__title').eq(i).text());
        $('.modal-form__descr').text($('.pack_item__text').eq(i).text());
        $('.overlay').fadeToggle('slow');
        $('.social-links').fadeOut('0.5');
    })
})

// Initialization WOW JS

new WOW().init();


//  Hamburger menu

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.social-links__menu'),
    menuItem = document.querySelectorAll('.social-links__menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('social-links__menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('social-links__hamburger-menu_active');
        })
    })
})



//  Menu status color

var social = $(".social-links");
  $(window).scroll(function() {
    var top = $(this).scrollTop();
    if ( top >= 100 ) {
      social.css("background", "rgba(0,0,0,0.9)");
    } else if ( top <= 100 ) {
      social.css("background", "rgba(0,0,0,0.5)");
    }
  });


  // Отправка на почту

$(document).ready(function() {

  //E-mail Ajax Send
  $("form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function() {
      alert("Thank you!");
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });

});