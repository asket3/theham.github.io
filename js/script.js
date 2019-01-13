// tabs creating
$("ul.our-services-captions").on("click", "li:not(.active)", function () {
    $(this)
        .addClass("active")
        .siblings()
        .removeClass("active")
        .closest("div.our-services-tabs-group")
        .find("div.our-service-tab-content")
        .removeClass("active")
        .eq($(this).index())
        .addClass("active");
});  // function for tabs

$();

// buttons for displaying photos
$('#oawGraphic').click(function () {
    $(this)
        .addClass('focused')
        .siblings()
        .removeClass('focused');
    $('.allPhotos').hide();
    $('.graphicImg').show();
    $('.hidden').hide();
    $('.hidden2').hide();

});
$('#oawDesign').click(function () {
    $(this)
        .addClass('focused')
        .siblings()
        .removeClass('focused');
    $('.allPhotos').hide();
    $('.webImg').show();
    $('.hidden').hide();
    $('.hidden2').hide();


});
$('#oawLanding').click(function () {
    $(this)
        .addClass('focused')
        .siblings()
        .removeClass('focused');
    $('.allPhotos').hide();
    $('.landingImg').show();
    $('.hidden').hide();
    $('.hidden2').hide();


});
$('#oawWordpress').click(function () {
    $(this)
        .addClass('focused')
        .siblings()
        .removeClass('focused');
    $('.allPhotos').hide();
    $('.wordpressImg').show();
    $('.hidden').hide();
    $('.hidden2').hide();


});
$('#oawAll').click(function () {
    $(this)
        .addClass('focused')
        .siblings()
        .removeClass('focused');
    $('.allPhotos').show();
    $('.hidden').hide();
    $('.hidden2').hide();

});
// end of displaying photos


// $('#loadMoreAmWk').click(function () {
//     $('.hidden').css('display', 'block');
// });

//creating pseudoloading
$('#loadMoreAmWk').click(pseudoLoader);
$('#loadMoreGallOfImgs').click(pseudoLoaderScnd);

function pseudoLoader() {
    $(this).hide();
    $('.loader').css('display', 'block');
    setTimeout(function () {
        $('.loader').css('display', 'none');
        $('.hidden').removeClass('hidden');
        $('#loadMoreAmWk').show();
    }, 2500);
    if (!$('.ouw__photo-gallery img').hasClass('hidden')){
        setTimeout(function () {
            $('.loader').css('display', 'none');
            $('.hidden2').removeClass('hidden2');
            $('#loadMoreAmWk').hide();
        }, 2500);
    }
}


// loading btn for masonry section
function pseudoLoaderScnd() {
    $(this).hide();
    $('.loader').css('display', 'block');
    setTimeout(function () {
        $('.loader').css('display', 'none');
        $('#loadMoreGallOfImgs').show();
    }, 2500);
}
// end of pseudoLoading




// slider content (carousel)
$('.slider-content:not(:first)').hide();

$('.dot').click(function (event) {
    let wasActive = $('.active-dot').index();
    console.log(wasActive);
    $('.active-dot').removeClass('active-dot');
    $('.slider-content').eq(wasActive).hide();
    $('.slider-content').eq($(this).index()).fadeIn(800);
    $(this).addClass('active-dot');
});

$('.prev').click(previousSlide);
$('.next').click(nextSlide);


function previousSlide() {
    let currentIndex = $('.active-dot').index();
    $('.slider-content').eq(currentIndex).hide();
    $('.active-dot').removeClass('active-dot')
    $('.dot').eq(currentIndex - 1).addClass('active-dot');
    $('.slider-content').eq(currentIndex - 1).fadeIn(800);
}

function nextSlide() {
    let currentIndex = $('.active-dot').index();
    $('.slider-content').eq(currentIndex).hide();
    currentIndex = currentIndex === $('.dot').length - 1 ? -1 : $('.active-dot').index();
    $('.active-dot').removeClass('active-dot');
    $('.dot').eq(currentIndex + 1).addClass('active-dot');
    $('.slider-content').eq(currentIndex + 1).fadeIn(800);
}


// costumizing masonry gallery

var $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    percentPosition: true,
    columnWidth: '.grid-sizer',
    gutter: 10
});

