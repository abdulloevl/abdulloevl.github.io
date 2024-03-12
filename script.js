// Плавная прокрутка до разделов по клику на ссылку в навигационном меню
$('a.nav-link').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){
      window.location.hash = hash;
    });
  }
});

// Изменение активного пункта меню при прокрутке страницы
$(window).on('scroll', function() {
  $('.nav-item').each(function() {
    var currLink = $(this);
    var refElement = $(currLink.find('a').attr('href'));
    if (refElement.position().top <= $(window).scrollTop() && refElement.position().top + refElement.height() > $(window).scrollTop()) {
      $('.nav-item').removeClass('active');
      currLink.addClass('active');
    } else {
      currLink.removeClass('active');
    }
  });
});

// Отправка формы контактов
$('form').on('submit', function(event) {
  event.preventDefault();
  alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
});
