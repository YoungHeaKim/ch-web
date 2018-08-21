// moblie일 때 nav부분
let nav = true;

$(function() {
  $('.navIcon').click(function(){
    if(nav){
      $('.navIcon').children('img').attr('src', function ( index, attr ) {
          return attr.replace('icon_nav.svg','icon_nav_on.svg');
      });
      $('.headerNav').addClass('on');
      nav = false;
    } else {
      $('.navIcon').children('img').attr('src',function ( index, attr ) {
          return attr.replace('icon_nav_on.svg','icon_nav.svg');
      });
      $('.headerNav').removeClass('on');
      nav = true;
    }
  });
});