$.Carousel = function(el) {
  this.$el = $(el);
  this.activeIdx = 0;
  // debugger;
  $(".items").children().eq(this.activeIdx).addClass("active");
  this.$el.on("click", ".slide-left", $.Carousel.slideLeft.bind(this));
  this.$el.on("click", ".slide-right", $.Carousel.slideRight.bind(this));
}

$.fn.carousel = function () {
  return this.each(function () {
    new $.Carousel(this);
  });
};

$.Carousel.slideLeft = function(event){
  event.preventDefault();
  if (this.activeIdx == 3){
    return ;
  }
  var $prevActiveImg = $(".items").children().eq(this.activeIdx);
  // $prevActiveImg.removeClass("active");
  $prevActiveImg.addClass("right");
  $prevActiveImg.one("transitionend", function(){
    $prevActiveImg.removeClass("active right");
  });

  var newActiveIdx = this.activeIdx + 1;
  this.activeIdx = newActiveIdx;

  $newActiveImg = $(".items").children().eq(this.activeIdx);
  $newActiveImg.addClass("left active");

  setTimeout(function(){
    $newActiveImg.removeClass("left")
  }, 0);
};

$.Carousel.slideRight = function(event){
  event.preventDefault();
  if (this.activeIdx === 0){
    return ;
  }
  var $prevActiveImg = $(".items").children().eq(this.activeIdx);
  $prevActiveImg.addClass("left");
  $prevActiveImg.one("transitionend", function(){
    $prevActiveImg.removeClass("active left");
  });

  var newActiveIdx = this.activeIdx - 1;
  this.activeIdx = newActiveIdx;
  // debugger
  $newActiveImg = $(".items").children().eq(this.activeIdx);
  $newActiveImg.addClass("right active");

  setTimeout(function(){
    $newActiveImg.removeClass("right")
  }, 0);
}
