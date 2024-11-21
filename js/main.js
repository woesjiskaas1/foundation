$(document).foundation();
$(function() {
    $(window).scroll(function() {
      var winTop = $(window).scrollTop();
      if (winTop >= 30) {
        $("body").addClass("sticky-shrinknav-wrapper");
      } else{
        $("body").removeClass("sticky-shrinknav-wrapper");
      }
    });
  });
  $("[data-circle-graph]").each(function() {
    var $graph = $(this),
        percent = parseInt($graph.data('percent'), 10),
        deg = 360*percent/100;
    if(percent > 50) {
      $graph.addClass('gt-50');
    }
    $graph.find('.circle-graph-progress-fill').css('transform','rotate('+ deg +'deg)');
    $graph.find('.circle-graph-percents-number').html(percent+'%');
  });
  $('[data-rating] .star').on('click', function() {
    var selectedCssClass = 'selected';
    var $this = $(this);
    $this.siblings('.' + selectedCssClass).removeClass(selectedCssClass);
    $this
      .addClass(selectedCssClass)
      .parent().addClass('is-voted');
  });
  
  