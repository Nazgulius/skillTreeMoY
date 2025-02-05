/*  author Chalykh Maksim 
  # data 25.01.2025 
  # email: chalyh.maksim.88@mail.ru */

import './css/style.css';

import './js/app';


// Проверяем, какая страница загружена и загружаем соответствующий js с данными  
window.onload = () => {  
  const page = window.location.pathname.split('/').pop();  
  if (page === 'mameWiz.html') {  
    import('./js/listSkills.js').then(module => {  
      displaySkills(module.default); // Загружаем и отображаем навыки  
    });  
  } else if (page === 'mageSage.html') {  
    import('./js/skills2.js').then(module => {  
      displaySkills(module.default); // Загружаем и отображаем навыки  
    });  
  }  
};