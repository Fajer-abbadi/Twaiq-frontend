$(document).ready(function(){

   
$('.Sqaure').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });

  $('.Sqaure .slick-dots li').html('<div></div>')

  $('.custom-row').slick({
    dots: true,
    arrows: false,
    centerMode:true,
    centerPadding: '20px',
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  
  $('.custom-row.slick-dots li').html('<div></div>')

   GetTabs()
})

function changeImage(url){
  $("#timage").attr("src",url);
}

function ShowContent(el,Target){
  $('.ContentContainer').hide()
  Target.show()
  el.parent().find('button').removeClass('ActiveContentTab')
  el.addClass('ActiveContentTab')
}

function toggleContent(elemant) {

  if($(elemant).find('.hidden-content').is(':hidden')){
    $('.section5-tab .hidden-content').hide()
    $(elemant).find('.hidden-content').slideDown(300);
  }else{
    $('.section5-tab .hidden-content').hide()
  }


  
}

function toggleMenu(ele) {
   $('.SideMenu').show()
}




function GetTabs(){
  var Content = $('.HeaderTabs').html()
   if($(window).width() <= 1200){
    $('.SideMenu ul').html(Content)
    $('.SideMenu ul li').attr('onclick','ShowSideMenuTab($(this))')
    $('.HeaderTabs').remove()
   }
}

function ShowSideMenuTab(el){
  $('.SideMenu .Tabs').removeClass('VisibleTab')
  el.find('.Tabs').addClass('VisibleTab')
}



