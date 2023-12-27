const menu = document.querySelector('#menu');
const submenu = document.querySelector('#sub-menu');


let timer;

  menu.addEventListener('mouseover', () => {
    clearTimeout(timer);
    submenu.classList.remove('active');
  });

  menu.addEventListener('mouseout', () => {
    timer = setTimeout(() => {
      submenu.classList.add('active');
    }, 200); 
  });

  submenu.addEventListener('mouseover', () => {
    clearTimeout(timer);
    submenu.classList.add('active');
  });

  submenu.addEventListener('mouseout', () => {
    timer = setTimeout(() => {
      submenu.classList.remove('active');
    }, 200);
  });