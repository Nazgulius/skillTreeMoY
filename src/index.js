/*  author Chalykh Maksim 
  # data 25.01.2025 
  # email: chalyh.maksim.88@mail.ru */

import './css/style.css';
import App from './js/app';
import { skillsMage } from './js/listSkillsMage.js';
import { skillsWiz } from './js/listSkillsWiz.js';
import { skillsWizHight } from './js/listSkillsWizHight.js';
import { skillsSage } from './js/listSkillsSage.js';
import { skillsProfessort } from './js/listSkillsProfessor.js';
import { skillsMerchant } from './js/listSkillsMerchant.js';
import { skillsAlchemist } from './js/listSkillsMerchantAlchemist.js';
import { skillsCreator } from './js/listSkillsMerchantCreator.js';
import { skillsBlacksmith } from './js/listSkillsMerchantBlacksmith.js';
import { skillsWhitesmith } from './js/listSkillsMerchantWhitesmith.js';


// Проверяем, какая страница загружена и загружаем соответствующий js с данными  
window.onload = () => {  
  const page = window.location.pathname.split('/').pop();  
  if (page === 'mageWiz.html') { 
    new App(skillsMage, skillsWiz, skillsWizHight).logic(); 
  } else if (page === 'mageSage.html') { 
    new App(skillsMage, skillsSage, skillsProfessort).logic();
  } else if (page === 'merchantAlchemist.html') { 
    new App(skillsMerchant, skillsAlchemist, skillsCreator).logic();
  } else if (page === 'merchantBlacksmith.html') { 
    new App(skillsMerchant, skillsBlacksmith, skillsWhitesmith).logic();
  }  
};
