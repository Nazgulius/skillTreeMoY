/*  author Chalykh Maksim 
  # data 25.01.2025 
  # email: chalyh.maksim.88@mail.ru */

import { skills } from './listSkills';

// btn reset all skills
document.querySelector(".bnt-reset").addEventListener("click", () => {
  const allDot = document.querySelectorAll(".dot");
  for (let i = 0; i < allDot.length; i++) {
    allDot[i].classList.remove("hidden");
  }
  
  skills.forEach((s) => {
    s.level = 0;
  });

  // считаем количество поинтов
  calcUsed();
  calcUsedMage();
  calcUsedWizard();
  calcUsedHWiz();
});

// проверка зависимостей скилов
// список скилов / list skills
// const skills = []; // был тут


const skillElements = document.querySelectorAll(".skill");


// обработчик события кликапо скилу
skillElements.forEach((skillElement) => {
  const skillId = skillElement.id; // Убедитесь, что у каждого sкилла есть уникальный id
  const skill = skills.find((s) => s.id === skillId);
  skill.element = skillElement; // Сохраняем ссылку на HTML элемент
  
  const dotArray = skillElement.querySelectorAll(".dot");
  const dotResetArray = skillElement.querySelectorAll(".dot-reset");

  dotArray.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      dotToggle(dot);
      skill.level = index;
      checkDependencies(skill); // Проверяем зависимости
      checkDependent(skill); // Проверяем зависимых

      // считаем количество поинтов
      calcUsed();
      calcUsedMage();
      calcUsedWizard();
      calcUsedHWiz();
    });
  });

  dotResetArray.forEach((resetBtn) => {
    resetBtn.addEventListener("click", () => {
      const skillDiv = resetBtn.closest('.skill');// Находим родительский элемент .skill 
      const skillReset = skills.find((s) => s.id === skillDiv.id);
      skillReset.level = 0;
      if (skillReset.dependent) { skillReset.dependent.forEach((sr) => {
          const sReset = skills.find((s) => s.id === sr.id);
          sReset.level = 0;
        }); 
      }
      
      dotArray.forEach((dot) => {
        dot.classList.remove("hidden");
      });
      
      checkDependent(skillReset); // Проверяем зависимых

      // считаем количество поинтов
      calcUsed();
      calcUsedMage();
      calcUsedWizard();
      calcUsedHWiz();
    });
  });
});

// Функция для проверки зависимостей
function checkDependencies(skill) {
  skill.dependencies.forEach((dep) => {
    const dependentSkill = skills.find((s) => s.id === dep.id);
    
    // Проверяем, достигнут ли минимальный уровень
    const isLevelMet = dependentSkill.level >= dep.minLevel;
    
    if (isLevelMet && dependentSkill.element) {
      // Если зависимый скил больше нужного, ...
      console.log('isLevelMet true');
    } else if (dependentSkill.element) {
      // если зависимый скил меньше нужного, то он устанавливается на нужный лвл
      dependentSkill.element.querySelectorAll('.dot').forEach((dot, index) => {
        if (dep.minLevel === index) { 
          dotToggle(dot);
          dependentSkill.level = index; // устанавливает лвл в зависимостях скиллов
        };
      });
    }
  });
}

// Функция для сброса зависимых скиллов
function checkDependent(skill) {
  if (skill.dependent) {
    skill.dependent.forEach((dep) => {
    const dependentSkill = skills.find((s) => s.id === dep.id);
    
      if (dependentSkill && dependentSkill.element) {
        dependentSkill.element.querySelectorAll('.dot').forEach((dot) => {
          dot.classList.remove("hidden");
        });
      }
    });
  }
}

function dotToggle(dotItem) {
  dotItem.classList.add("hidden");
  let dotPre = dotItem.previousElementSibling;
  while (dotPre) {
    dotPre.classList.add("hidden");
    dotPre = dotPre.previousElementSibling;
  }

  let dotNext = dotItem.nextElementSibling;
  while (dotNext) {
    dotNext.classList.remove("hidden");
    dotNext = dotNext.nextElementSibling;
  }
}

function calcUsed() {
  const total = document.querySelectorAll('.hidden');
  const stText = document.querySelector('.st-used');
  const stBalance = document.querySelector('.st-balance');  
  const panelStatistic = document.querySelector('.panel-statistic');
  const totalSkillPoint = 118;
  
  stText.textContent = total.length;
  if (total.length > 118) {
    panelStatistic.classList.add('red');
  } else {
    panelStatistic.classList.remove('red');
  }
  
  const a = totalSkillPoint - total.length;
  
  stBalance.textContent = totalSkillPoint - total.length;
}

function calcUsedMage() {
  const mage = document.querySelector('.job-mage');
  const total = mage.querySelectorAll('.hidden');
  const stText = document.querySelector('.st-used-mage');
  const stBalance = document.querySelector('.st-balance-mage');  
  const panelStatistic = document.querySelector('.panel-statistic-mage');
  const totalSkillPoint = 49;
  
  stText.textContent = total.length;
  if (total.length > 49) {
    panelStatistic.classList.add('red');
  } else {
    panelStatistic.classList.remove('red');
  }
  
  const a = totalSkillPoint - total.length;
  
  stBalance.textContent = totalSkillPoint - total.length;
}

function calcUsedWizard() {
  const mage = document.querySelector('.job-wizard');
  const total = mage.querySelectorAll('.hidden');
  const stText = document.querySelector('.st-used-wizard');
  const stBalance = document.querySelector('.st-balance-wizard');  
  const panelStatistic = document.querySelector('.panel-statistic-wizard');
  const totalSkillPoint = 49;
  
  stText.textContent = total.length;
  if (total.length > 49) {
    panelStatistic.classList.add('red');
  } else {
    panelStatistic.classList.remove('red');
  }
  
  const a = totalSkillPoint - total.length;
  
  stBalance.textContent = totalSkillPoint - total.length;
}
function calcUsedHWiz() {
  const mage = document.querySelector('.job-hwiz');
  const total = mage.querySelectorAll('.hidden');
  const stText = document.querySelector('.st-used-hwiz');
  const stBalance = document.querySelector('.st-balance-hwiz');  
  const panelStatistic = document.querySelector('.panel-statistic-hwiz');
  const totalSkillPoint = 20;
  
  stText.textContent = total.length;
  if (total.length > 20) {
    panelStatistic.classList.add('red');
  } else {
    panelStatistic.classList.remove('red');
  }
  
  const a = totalSkillPoint - total.length;
  
  stBalance.textContent = totalSkillPoint - total.length;
}

/*  author Chalykh Maksim 
  # data 25.01.2025 
  # email: chalyh.maksim.88@mail.ru */