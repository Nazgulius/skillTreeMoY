/*  author Chalykh Maksim 
  # data 25.01.2025 
  # email: chalyh.maksim.88@mail.ru */

import './css/style.css';
import App from './js/app';
import { skillsMage } from './js/listSkillsMage.js';
import { skillsWiz } from './js/listSkillsWiz.js';
import { skillsWizHight } from './js/listSkillsWizHight.js';
import { skillsSage } from './js/listSkillsSage.js';
import { skillsProfessort } from './js/listSkillsskillsProfessor.js';


// Проверяем, какая страница загружена и загружаем соответствующий js с данными  
window.onload = () => {  
  const page = window.location.pathname.split('/').pop();  
  if (page === 'mageWiz.html') { 
    new App(skillsMage, skillsWiz, skillsWizHight).logic(); 
  } else if (page === 'mageSage.html') { 
    new App(skillsMage, skillsSage, skillsProfessort).logic();
  }  
};
