$(function () {
    $("button.testBtn").click(function () {
        $(".testCon").toggle('active');
    });
});

$(function () {
    $('#opener').on('click', function () {
        var panel = $('#slide-panel');
        if (panel.hasClass("visible")) {
            panel.removeClass('visible').animate({
                'bottom': '0'
            });
        } else {
            panel.addClass('visible').animate({
                'bottom': '-550px'
            });
        }

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).removeClass('active');
            $(this).addClass('active');
        }

        return false;
    });
});


$(function () {
    $('.btn-gl-top button.btn-congestion').click(function () {
        $('.heat-sensing').toggle()
    })
});

$(function () {
    $('.navbar-nav a.btn-user-target').click(function () {
        $('.wt-rs-wrap').toggle()
    })
});

$(function () {
    // tab 메뉴
  $('.emg-item a').click(function(e){
    e.preventDefault();
    $('.emg-item a, .alert-title').removeClass('active');
    $(this).add($($(this).attr('href'))).addClass('active');
  });
});

$('ul.dropdown-item-list li a').click(function () {
    if ($(this).hasClass('current')) {
        $(this).removeClass('current');
    } else {
        $('li a.current').removeClass('current');
        $(this).addClass('current');
    }
});

$('.btn-user-target').click(function () {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
    } else {
        $(this).removeClass('active');
        $(this).addClass('active');
    }
});
