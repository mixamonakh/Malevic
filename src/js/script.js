// Табы

(function($) {
    $(function() {
      
      $('ul.tabs').on('click', 'li:not(.tabs__tab_active)', function() {
        $(this)
          .addClass('tabs__tab_active').siblings().removeClass('tabs__tab_active')
          .closest('.container').find('div.tabs__content').removeClass('tabs__content_active').eq($(this).index()).addClass('tabs__content_active');
      });
      
    });
    })(jQuery);

    var acc = document.getElementsByClassName("accordion");
    var i;
    
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active_accordion");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
      });
    }