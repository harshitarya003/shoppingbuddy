document.addEventListener('DOMContentLoaded', () => {
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
  });
  