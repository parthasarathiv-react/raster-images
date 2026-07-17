$(document).ready(function(){

    $('#myCarousel').carousel({
    interval: 3000,
    })

    $('.customer-logos').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 992,
            settings: {
            slidesToShow: 3
            }
        }, {
            breakpoint: 768,
            settings: {
            slidesToShow: 2
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 1
            }
        }]
    });

    $('.partner-img').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 992,
            settings: {
            slidesToShow: 2
            }
        }, {
            breakpoint: 768,
            settings: {
            slidesToShow: 1
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 1
            }
        }]
    });    

});

// Select all links with hashes
$('a[href*="#req-demo"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
// On-page links
if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
    // Only prevent default if animation is actually gonna happen
    event.preventDefault();

    var targetOffset = target.offset().top;
    

    $('html, body').animate({
        scrollTop: targetOffset - 115
    }, 1000, function() {
        // Callback after animation
        // Must change focus!
        
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
            return false;
        } else {
        $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
        $target.focus(function() { $("#name").focus(); }); // Set focus again
        
};
    });
    }
}
});

$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 300){
            $('#back2Top').fadeIn();
        } 
        else{
            $('#back2Top').fadeOut();
        }
    });
    $('#back2Top').click(function(){
        $("html, body").animate({scrollTop : 0},1000);
        return false;
    });
});


$('.smooth').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});


$(document).ready(function() {

    // Get current page URL
    var url = window.location.href;
    // remove # from URL
    url = url.substring(0, (url.indexOf("#") == -1) ? url.length : url.indexOf("#"));
    // remove parameters from URL
    url = url.substring(0, (url.indexOf("?") == -1) ? url.length : url.indexOf("?"));
    // select file name
    url = url.substr(url.lastIndexOf("/") + 1);
    // If file name not avilable
    if(url == ''){
        url = 'index.php';
    }
    // Loop all menu items
    $(".navbar-nav li, .top-container li").each(function(){

        // select href
        var href = $(this).find('a').attr('href');

        // Check filename
        if(url == href){

        // Select parent class
        var parentClass = $(this).parent('ul').attr('class');
        if(parentClass == 'list-unstyled col-lg-3'){
        // Add class
        $(this).addClass('subactive');
        $(this).parents('.navbar-nav li').addClass('active');
            }else{
            // Add class
            $(this).addClass('active');
            }
        }
    });

});

window.onscroll = function() { myFunction() };
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}


