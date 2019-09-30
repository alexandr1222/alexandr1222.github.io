 $(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1300);
    });
});

// $('[data-modal=buy-tour]').on('click', function(){
//     $('.overlay').fadeToggle('slow')
// });
$('.modal-form__close').on('click', function(){
    $('.overlay').fadeOut('low')
});

// Получение заголовка и описания с карточки на модальное окно
// а также отображени самого модально окна

$('[data-modal=buy-tour]').each(function(i){
    $(this).on('click', function() {
        $('.modal-form__subtitle').text($('.pack_item__title').eq(i).text());
        $('.modal-form__descr').text($('.pack_item__text').eq(i).text());
        $('.overlay').fadeToggle('slow');
    })
})


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

var social = $(".social-links");
  $(window).scroll(function() {
    var top = $(this).scrollTop();
    if ( top >= 100 ) {
      social.css("background", "rgba(0,0,0,0.9)");
    } else if ( top <= 100 ) {
      social.css("background", "rgba(0,0,0,0.5)");
    }
  });