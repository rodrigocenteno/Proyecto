$(document).ready(function(){

  /*la liga*/
  $(".laliga").click(function(){
    if($(".laliga").val()==0){
      $(".laliga").height("auto");
      $(".noticiasl > div").show()
      $(".laliga").val("1");
    }
    else{$(".laliga").height("auto");
      $(".noticiasl > div").hide()
      $(".laliga").val("0")
    };    
  })
  /*premier*/
  $(".premier").click(function(){
    if($(".premier").val()==0){
    $(".premier").height("auto");
    $(".noticiasp>div").show()
    $(".premier").val("1");}
    else{$(".premier").height(95);
    $(".noticiasp>div").hide()
    $(".premier").val("0")};    
  })
  /*calcio*/
  $(".calcio").click(function(){
    if($(".calcio").val()==0){
    $(".calcio").height("auto");
    $(".noticiasc>div").show()
    $(".calcio").val("1");}
    else{$(".calcio").height(95);
    $(".noticiasc>div").hide()
    $(".calcio").val("0")};    
  })
  /*bundes*/
  $(".bundesliga").click(function(){
    if($(".bundesliga").val()==0){
    $(".bundesliga").height("auto");
    $(".noticiasb>div").show()
    $(".bundesliga").val("1");}
    else{$(".bundesliga").height(95);
    $(".noticiasb>div").hide()
    $(".bundesliga").val("0")};    
  })

  
});




