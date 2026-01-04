
    const menuCheckbox = document.getElementById('icona');
    const menu = document.querySelector('.menu');


    document.addEventListener('click', function(event) {
   
      if (menuCheckbox.checked) {
 
          if (!menu.contains(event.target) && event.target !== menuCheckbox && !event.target.closest('.hamburger')) {
              menuCheckbox.checked = false; 
          }
      }
  });