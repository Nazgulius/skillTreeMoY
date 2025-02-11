/*  author Chalykh Maksim 
  # data 25.01.2025 
  # email: chalyh.maksim.88@mail.ru */

import './css/style.css';
import App from './js/app';
// Mage
import { skillsMage } from './js/listSkills/Mage.js'; 
import { skillsWizard } from './js/listSkills/MageWizard.js';
import { skillsWizardHight } from './js/listSkills/MageWizardHight.js';
import { skillsSage } from './js/listSkills/MageSage.js';
import { skillsProfessort } from './js/listSkills/MageProfessor.js';
// Merchant
import { skillsMerchant } from './js/listSkills/Merchant.js'; 
import { skillsAlchemist } from './js/listSkills/MerchantAlchemist.js';
import { skillsCreator } from './js/listSkills/MerchantCreator.js';
import { skillsBlacksmith } from './js/listSkills/MerchantBlacksmith.js';
import { skillsWhitesmith } from './js/listSkills/MerchantWhitesmith.js';
// Acolyte
import { skillsAcolyte } from './js/listSkills/Acolyte.js'; 
import { skillsPriest } from './js/listSkills/AcolytePriest.js';
import { skillsMonk } from './js/listSkills/AcolyteMonk.js';
import { skillsHighPriest } from './js/listSkills/AcolyteHighPriest.js';
import { skillsChampion } from './js/listSkills/AcolyteChampion.js';
// Swordman
import { skillsSwordman } from './js/listSkills/Swordman.js'; 
import { skillsCrusader } from './js/listSkills/SwordmanCrusader.js';
import { skillsPaladin } from './js/listSkills/SwordmanPaladin.js';
import { skillsKnight } from './js/listSkills/SwordmanKnight.js';
import { skillsLordKnight } from './js/listSkills/SwordmanLordKnight.js';
// Thief
import { skillsThief } from './js/listSkills/Thief.js'; 
import { skillsAssassin } from './js/listSkills/ThiefAssassin.js';
import { skillsAssassinCross } from './js/listSkills/ThiefAssassinCross.js';
import { skillsRogue } from './js/listSkills/ThiefRogue.js';
import { skillsStalker } from './js/listSkills/ThiefStalker.js';
// Archer
import { skillsArcher } from './js/listSkills/Archer.js'; 
import { skillsHunter } from './js/listSkills/ArcherHunter.js';
import { skillsSniper } from './js/listSkills/ArcherSniper.js';
import { skillsBard } from './js/listSkills/ArcherBard.js';
import { skillsClown } from './js/listSkills/ArcherClown.js';
import { skillsDancer } from './js/listSkills/ArcherDancer.js';
import { skillsGypsy } from './js/listSkills/ArcherGypsy.js';



// Проверяем, какая страница загружена и загружаем соответствующий js с данными  
window.onload = () => {  
  const page = window.location.pathname.split('/').pop();  
  if (page === 'mageWiz.html') { 
    new App(skillsMage, skillsWizard, skillsWizardHight).logic(); 
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
  } else if (page === 'swordmanCrusader.html') { 
    new App(skillsSwordman, skillsCrusader, skillsPaladin).logic();
  } else if (page === 'swordmanKnight.html') { 
    new App(skillsSwordman, skillsKnight, skillsLordKnight).logic();
  } else if (page === 'thiefAssassin.html') { 
    new App(skillsThief, skillsAssassin, skillsAssassinCross).logic();
  } else if (page === 'thiefRogue.html') { 
    new App(skillsThief, skillsRogue, skillsStalker).logic();
  } else if (page === 'archerHunter.html') { 
    new App(skillsArcher, skillsHunter, skillsSniper).logic();
  } else if (page === 'archerBard.html') { 
    new App(skillsArcher, skillsBard, skillsClown).logic();
  } else if (page === 'archerDancer.html') { 
    new App(skillsArcher, skillsDancer, skillsGypsy).logic();
  }  
};
