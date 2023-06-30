document.addEventListener('DOMContentLoaded', () => {
    // home-page
    const bar = document.getElementById('bar');
    const nav = document.getElementById('navbar');
    const navclose= document.getElementById('close');
    if (bar) 
    {
      bar.addEventListener('click', () => {
        nav.classList.add('active');
      });
    }
    if(close)
    {
        navclose.addEventListener('click', ()=>{
            nav.classList.remove('active');
        })
    }
    // product-page
    var main_img= document.getElementById("main");
    var side_img= document.getElementsByClassName("small-img");
    side_img[0].onclick= function(){
      main_img.src= side_img[0].src;
    }
    side_img[1].onclick= function(){
      main_img.src= side_img[1].src;
    }
    side_img[2].onclick= function(){
      main_img.src= side_img[2].src;
    }
    side_img[3].onclick= function(){
      main_img.src= side_img[3].src;
    }
  });


  