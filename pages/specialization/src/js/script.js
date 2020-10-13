$('.burger').click(function () {
    $('.burger span').toggleClass('active');
    $('.header .header__navbar').toggleClass('active');
});

$('#join').on('click', function () {
    $('.overlay, .box').fadeIn('slow');
});
$('#contact').on('click', function () {
    $('.overlay, .contact').fadeIn('slow');
});
$('.close').on('click', function () {
    $('.overlay, .box, .contact').fadeOut('slow');
});
