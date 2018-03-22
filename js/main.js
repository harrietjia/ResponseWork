$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items :1,
        loop :true,
        autoplay : true,
        autoplayTimeout : 3000,
        autoplayHoverPause :true,
    });
});

// $(document).ready(function(){
//     function makeImageResponsive(){
//         var width = $(window).width();
//         var img = $('.content img');
//         if(width <= 480){
//             img.attr('src','img/480.png');
//         }else if(width <= 800){
//             img.attr('src','img/800.png');
//         }else{
//             img.attr('src','img/1600.png');
//         }
//     }

//     $(window).on('resize load',makeImageResponsive);
// });
