  
document.querySelector("input").addEventListener("click", function(){
    $("body").toggleClass("dark-body");
    $(".block").toggleClass("block-bg");
    $(".block").toggleClass("block-bg-dark");
    $(".facebook").toggleClass("dark-card");
    $(".twitter").toggleClass("dark-card");
    $(".instagram").toggleClass("dark-card");
    $(".youtube").toggleClass("dark-card");
    $(".overview-items").toggleClass("dark-card");
    $(".facebook").toggleClass("background-white");
    $(".twitter").toggleClass("background-white");
    $(".instagram").toggleClass("background-white");
    $(".youtube").toggleClass("background-white");
    $(".overview-items").toggleClass("background-white");
    $(".head1").toggleClass("dark-white");
  
  });