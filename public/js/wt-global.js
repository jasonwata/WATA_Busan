$(document).ready(function(){
  $("button.testBtn").click(function(){
    $(".testCon").toggle('active');
  });
});

$(document).ready(function(){
    $('#opener').on('click', function() {
    var panel = $('#slide-panel');
    if (panel.hasClass("visible")) {
       panel.removeClass('visible').animate({'bottom':'0'});
    } else {
        panel.addClass('visible').animate({'bottom':'-550px'});
    }
      return false;
    });
});
