/*  author Chalykh Maksim 
  # data 25.01.2025 
  # email: chalyh.maksim.88@mail.ru */

import './css/style.css';

import './js/app';


/* 
app.js -
export function displaySkills(skills) {  
  const content = document.getElementById('content');  
  content.innerHTML = `<h2>Навыки:</h2><ul>${skills.map(skill => `<li>${skill}</li>`).join('')}</ul>`;  
}

index.js -
import { displaySkills } from './app.js';  

document.getElementById('page1Btn').addEventListener('click', () => {  
  window.location.href = './html/page1.html'; // Переход на page1.html  
});  

document.getElementById('page2Btn').addEventListener('click', () => {  
  window.location.href = './html/page2.html'; // Переход на page2.html  
});  
*/

// Проверяем, какая страница загружена и загружаем соответствующий js с данными  
window.onload = () => {  
  const page = window.location.pathname.split('/').pop();  
  if (page === 'mameWiz.html') {  
    import('./js/listSkills.js').then(module => {  
      displaySkills(module.default); // Загружаем и отображаем навыки  
    });  
  } else if (page === 'mageSage.html') {  
    import('./js/skillsSage.js').then(module => {  
      displaySkills(module.default); // Загружаем и отображаем навыки  
    });  
  }  
};
