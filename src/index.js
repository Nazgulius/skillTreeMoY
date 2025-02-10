/*  author Chalykh Maksim 
  # data 25.01.2025 
  # email: chalyh.maksim.88@mail.ru */

import './css/style.css';
import App from './js/app';
import { skillsMage } from './js/listSkillsMage.js'; // маг
import { skillsWiz } from './js/listSkillsWiz.js';
import { skillsWizHight } from './js/listSkillsWizHight.js';
import { skillsSage } from './js/listSkillsSage.js';
import { skillsProfessort } from './js/listSkillsProfessor.js';
import { skillsMerchant } from './js/listSkillsMerchant.js'; // торговец
import { skillsAlchemist } from './js/listSkillsMerchantAlchemist.js';
import { skillsCreator } from './js/listSkillsMerchantCreator.js';
import { skillsBlacksmith } from './js/listSkillsMerchantBlacksmith.js';
import { skillsWhitesmith } from './js/listSkillsMerchantWhitesmith.js';
import { skillsAcolyte } from './js/listSkills/Acolyte.js'; // аколит
import { skillsPriest } from './js/listSkills/AcolytePriest.js';
import { skillsMonk } from './js/listSkills/AcolyteMonk.js';
import { skillsHighPriest } from './js/listSkills/AcolyteHighPriest.js';
import { skillsChampion } from './js/listSkills/AcolyteChampion.js';


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
  } else if (page === 'acolytePriest.html') { 
    new App(skillsAcolyte, skillsPriest, skillsHighPriest).logic();
  } else if (page === 'acolyteMonk.html') { 
    new App(skillsAcolyte, skillsMonk, skillsChampion).logic();
  }  
};
