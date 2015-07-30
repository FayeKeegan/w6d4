// (function($){
  $.Tabs = function (el) {
    this.$el = $(el);
    var contentTab = this.$el.data("content-tabs");
    this.$contentTabs = $(contentTab); //panes
    this.$activeLink = this.$el.find(".active"); //link
    this.$el.on('click','a', $.Tabs.clickTab.bind(this))
  };

  $.fn.tabs = function () {
    return this.each(function () {
      new $.Tabs(this);
    });
  };

  $.Tabs.clickTab = function(event){
    event.preventDefault();
    //find the pane corresponding to the current link
    var $prevPane = $(this.$activeLink.attr("for"));
    //add the class transitioning so it will start fading out
    $prevPane.addClass("transitioning");
    //remove BOLD from current link
    this.$activeLink.removeClass("active");

    //next link is the one we just clicked
    var $nextLink = $(event.currentTarget);
    this.$activeLink = $nextLink;
    //next pane is the pane for the link we just clicked
    var $nextPane = $(this.$activeLink.attr("for"));
    //add BOLD to the link we just clicked
    $nextLink.addClass("active");
    //NOW we wait for the previous pane (prevPane) to finish fading out
    $prevPane.one("transitionend", function(){
      //once it is fully gone (transition end), we can remove it by removing the
      //active and transitioning classes
      $prevPane.removeClass("active transitioning");
      //we give the next pane both classes so it will be ON the page, but invisible
      $nextPane.addClass("active transitioning");
      setTimeout(function(){
        //once it's on the page, (one event loop cycle later), we can remove
        //transitioning so that it will fade into opacity
        $nextPane.removeClass("transitioning");
      }, 0)
    }.bind(this));
  }
// })(jQuery);
