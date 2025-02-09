/*  author Chalykh Maksim 
  # data 25.01.2025 
  # email: chalyh.maksim.88@mail.ru */

//import { skills } from './listSkills';
import { createSkill } from './createSkill';


export default class App {
  constructor(skills) {
    this._skills = skills;
    this.totalSkillPoint = 120;
    this.totalSkillPointJob = 50;
    this.totalSkillPointJovHight = 20;
  }

  logic() {
    // btn reset all skills
    document.querySelector(".bnt-reset").addEventListener("click", () => {
      console.log('ckick del');
      const allDot = document.querySelectorAll(".dot");
      for (let i = 0; i < allDot.length; i++) {
        allDot[i].classList.remove("hidden");
      }

      this._skills.forEach((s) => {
        s.level = 0;
      });

      // считаем количество поинтов
      this.calcUsed();
      this.calcUsedJobOne();
      this.calcUsedJobTwo();
      this.calcUsedJobTwoHight();
    });

    // обработчик события клика по скилу
    document.querySelectorAll(".skill").forEach((skillElement) => {
      if (!skillElement) return;
      const skillId = skillElement.id; // Убедитесь, что у каждого sкилла есть уникальный id
      const skill = this._skills.find((s) => s.id === skillId);
      skill.element = skillElement; // Сохраняем ссылку на HTML элемент

      const dotArray = skillElement.querySelectorAll(".dot");
      const dotResetArray = skillElement.querySelectorAll(".dot-reset");

      dotArray.forEach((dot, index) => {
        dot.addEventListener("click", () => {
          this.dotToggle(dot);
          skill.level = index;
          this.checkDependencies(skill); // Проверяем зависимости
          //this.checkDependent(skill); // Проверяем зависимых

          // считаем количество поинтов
          this.calcUsed();
          this.calcUsedJobOne();
          this.calcUsedJobTwo();
          this.calcUsedJobTwoHight();
        });
      });

      dotResetArray.forEach((resetBtn) => {
        resetBtn.addEventListener("click", () => {
          const skillDiv = resetBtn.closest('.skill');// Находим родительский элемент .skill 
          const skillReset = this._skills.find((s) => s.id === skillDiv.id);
          skillReset.level = 0;
          if (skillReset.dependent) {
            skillReset.dependent.forEach((sr) => {
              const sReset = this._skills.find((s) => s.id === sr.id);
              sReset.level = 0;
            });
          }

          dotArray.forEach((dot) => {
            dot.classList.remove("hidden");
          });

          this.checkDependent(skillReset); // Проверяем зависимых

          // считаем количество поинтов
          this.calcUsed();
          this.calcUsedJobOne();
          this.calcUsedJobTwo();
          this.calcUsedJobTwoHight();
        });
      });
    });
  }


  // метод для проверки зависимостей
  checkDependencies(skill) {
    skill.dependencies.forEach((dep) => {
      const dependentSkill = this._skills.find((s) => s.id === dep.id);

      // Проверяем, достигнут ли минимальный уровень
      const isLevelMet = dependentSkill.level >= dep.minLevel;

      if (isLevelMet && dependentSkill.element) {
        // Если зависимый скил больше нужного, ...
        console.log('isLevelMet true');
      } else if (dependentSkill.element) {
        // если зависимый скил меньше нужного, то он устанавливается на нужный лвл
        dependentSkill.element.querySelectorAll('.dot').forEach((dot, index) => {
          if (dep.minLevel === index) {
            this.dotToggle(dot);
            dependentSkill.level = index; // устанавливает лвл в зависимостях скиллов
          };
        });
      }
    });
  }

  // метод для сброса зависимых скиллов
  checkDependent(skill) {
    if (skill.dependent) {
      skill.dependent.forEach((dep) => {
        const dependentSkill = this._skills.find((s) => s.id === dep.id);

        if (dependentSkill && dependentSkill.element) {
          dependentSkill.element.querySelectorAll('.dot').forEach((dot) => {
            dot.classList.remove("hidden");
          });
        }
      });
    }
  }

  dotToggle(dotItem) {
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

  calcUsed() {
    const total = document.querySelectorAll('.hidden');
    const stText = document.querySelector('.st-used');
    const stBalance = document.querySelector('.st-balance');
    const panelStatistic = document.querySelector('.panel-statistic');

    stText.textContent = total.length;
    if (total.length > this.totalSkillPoint) {
      panelStatistic.classList.add('red');
    } else {
      panelStatistic.classList.remove('red');
    }


    stBalance.textContent = this.totalSkillPoint - total.length;
  }

  calcUsedJobOne() {
    const jobOne = document.querySelector('.job-one');
    const total = jobOne.querySelectorAll('.hidden');
    const stText = document.querySelector('.st-used-job-one');
    const stBalance = document.querySelector('.st-balance-job-one');
    const panelStatistic = document.querySelector('.panel-statistic-job-one');    

    stText.textContent = total.length;
    if (total.length > this.totalSkillPointJob) {
      panelStatistic.classList.add('red');
    } else {
      panelStatistic.classList.remove('red');
    }

    stBalance.textContent = this.totalSkillPointJob - total.length;
  }

  calcUsedJobTwo() {
    const jobTwo = document.querySelector('.job-two');
    const total = jobTwo.querySelectorAll('.hidden');
    const stText = document.querySelector('.st-used-job-two');
    const stBalance = document.querySelector('.st-balance-job-two');
    const panelStatistic = document.querySelector('.panel-statistic-job-two');

    stText.textContent = total.length;
    if (total.length > this.totalSkillPointJob) {
      panelStatistic.classList.add('red');
    } else {
      panelStatistic.classList.remove('red');
    }

    stBalance.textContent = this.totalSkillPointJob - total.length;
  }

  calcUsedJobTwoHight() {
    const jobTwoHight = document.querySelector('.job-two-hight');
    const total = jobTwoHight.querySelectorAll('.hidden');
    const stText = document.querySelector('.st-used-job-two-hight');
    const stBalance = document.querySelector('.st-balance-job-two-hight');
    const panelStatistic = document.querySelector('.panel-statistic-job-two-hight');

    stText.textContent = total.length;
    if (total.length > this.totalSkillPointJovHight) {
      panelStatistic.classList.add('red');
    } else {
      panelStatistic.classList.remove('red');
    }

    stBalance.textContent = this.totalSkillPointJovHight - total.length;
  }
}

// проверка и заготовка генерации скилов в html code
// const skillImg = "../img/icon_mag.png";
// document.querySelector('.job-sage').appendChild(createSkill('scrollbending', 'Scrollbending', 5, skillImg));
// document.querySelector('.job-sage').appendChild(createSkill('scrollbending', 'Scrollbending', 5, skillImg));
// document.querySelector('.job-sage').appendChild(createSkill('scrollbending', 'Scrollbending', 5, skillImg));




/*  author Chalykh Maksim 
  # data 25.01.2025 
  # email: chalyh.maksim.88@mail.ru */