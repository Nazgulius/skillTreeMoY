/*  author Chalykh Maksim 
  # data 25.01.2025 
  # email: chalyh.maksim.88@mail.ru */

import './css/style.css';
import App from './js/app';


// Проверяем, какая страница загружена и загружаем соответствующий js с данными  
window.onload = () => {  
  const page = window.location.pathname.split('/').pop();  
  if (page === 'mageWiz.html') {  
    import('./js/listSkills.js').then(module => {        
      new App(module.skillsWiz).logic(); 
    });  
  } else if (page === 'mageSage.html') {  
    import('./js/listSkillsSage.js').then(module => {
      new App(module.skillsSage).logic();
    });  
  }  
};
