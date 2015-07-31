$.Thumbnails = function(el){
  this.$el = $(el);
  var $firstImage = $(this.$el.find(".gutter-images img").eq(0))
  this.activate($firstImage)
  this.$activeImage = $firstImage;
  this.$el.find('.gutter-images').on('click','img', this.clickImg.bind(this));
  this.$el.find('.gutter-images').on('mouseenter','img', this.setImg.bind(this));
  this.$el.find('.gutter-images').on('mouseleave','img', this.resetImg.bind(this));

};


$.fn.thumbnails = function () {
  return this.each(function () {
    new $.Thumbnails(this);
  });
};

$.Thumbnails.prototype.activate = function($img) {
  var newImgLink = $img.attr("src");
  this.$el.find(".active img").attr("src", newImgLink);
};

$.Thumbnails.prototype.clickImg = function(event) {
  this.activate($(event.currentTarget));
  this.$activeImage = $(event.currentTarget);

}


$.Thumbnails.prototype.setImg = function(event) {

  this.activate($(event.currentTarget));
}

$.Thumbnails.prototype.resetImg = function(event) {
  // set the active link back to the stored link in $activeimage
  var oldActiveLink = this.$activeImage.attr("src");
  this.$el.find(".active img").attr("src", oldActiveLink);
}
