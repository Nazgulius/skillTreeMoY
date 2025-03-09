/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 3776:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./src/css/style.css
var style = __webpack_require__(8588);
;// ./src/js/createSkill.js
/*  author Chalykh Maksim 
  # data 05.02.2025 
  # email: chalyh.maksim.88@mail.ru */

function createSkill(skillName, skillNameAll, maxLevel, skillImg) {
  const skillDiv = document.createElement('div');
  skillDiv.className = 'skill';
  skillDiv.id = skillName;
  const img = document.createElement('img');
  img.src = skillImg;
  img.alt = skillNameAll;
  img.className = 'skill-img';
  const skillBlock = document.createElement('div');
  skillBlock.className = 'skill-block';
  const skillNameBlock = document.createElement('div');
  skillNameBlock.className = 'skill-name-block';
  const nameParagraph = document.createElement('p');
  nameParagraph.className = 'skill-name';
  nameParagraph.textContent = skillNameAll;
  skillNameBlock.appendChild(nameParagraph);
  const skillProgress = document.createElement('div');
  skillProgress.className = 'skill-progress';
  const lineDiv = document.createElement('div');
  lineDiv.className = 'line';
  const dotSum = document.createElement('div');
  dotSum.className = 'dot_sum';
  dotSum.nextContent = '0';
  skillProgress.appendChild(dotSum);
  for (let i = 0; i < maxLevel; i++) {
    const dot = document.createElement('div');
    dot.className = 'dot';
    lineDiv.appendChild(dot);
  }
  skillProgress.appendChild(lineDiv);
  skillProgress.appendChild(document.createElement('div')).className = 'dot-reset';
  skillBlock.appendChild(skillNameBlock);
  skillBlock.appendChild(skillProgress);
  skillDiv.appendChild(img);
  skillDiv.appendChild(skillBlock);
  return skillDiv;
}

/*  author Chalykh Maksim 
  # data 05.02.2025 
  # email: chalyh.maksim.88@mail.ru */
;// ./src/img/no_img.png
const no_img_namespaceObject = __webpack_require__.p + "cfac5242427f616a4a02.png";
;// ./src/js/app.js
/*  author Chalykh Maksim 
  # data 25.01.2025 
  # email: chalyh.maksim.88@mail.ru */

//import { skills } from './listSkills';


class App {
  constructor(skillsJobOne, skillsJobTwo, skillsJobTwoHight) {
    this._skillsJobOne = skillsJobOne;
    this._skillsJobTwo = skillsJobTwo;
    this._skillsJobTwoHight = skillsJobTwoHight;
    this.totalSkillPoint = 120;
    this.totalSkillPointJob = 50;
    this.totalSkillPointJovHight = 20;
    this.infoRu = 'Инфо: Для просмотра описания скилла нажмите на его картинку.';
    this.infoEng = 'Info: Click on its picture to view the description of the skill.';
  }
  logic() {
    // генерации скилов в html code    
    const jobOne = document.querySelector('.job-one'); // находим блока класса
    const jobTwo = document.querySelector('.job-two'); // находим блока класса
    const jobTwoHight = document.querySelector('.job-two-hight'); // находим блока класса

    for (let i = 0; i < this._skillsJobOne.length; i++) {
      jobOne.appendChild(createSkill(this._skillsJobOne[i].id, this._skillsJobOne[i].skillName, this._skillsJobOne[i].maxLevel, this._skillsJobOne[i].img));
    }
    for (let i = 0; i < this._skillsJobTwo.length; i++) {
      jobTwo.appendChild(createSkill(this._skillsJobTwo[i].id, this._skillsJobTwo[i].skillName, this._skillsJobTwo[i].maxLevel, this._skillsJobTwo[i].img));
    }
    for (let i = 0; i < this._skillsJobTwoHight.length; i++) {
      jobTwoHight.appendChild(createSkill(this._skillsJobTwoHight[i].id, this._skillsJobTwoHight[i].skillName, this._skillsJobTwoHight[i].maxLevel, this._skillsJobTwoHight[i].img));
    }

    // ждём загрузку DOM елементов
    //document.addEventListener("DOMContentLoaded", () => {});

    // обработчик события клика по скилу
    document.querySelectorAll(".skill").forEach(skillElement => {
      if (!skillElement) return;
      const skillId = skillElement.id; // у каждого sкилла есть уникальный id
      const allSkills = [...this._skillsJobOne, ...this._skillsJobTwo, ...this._skillsJobTwoHight];
      const skill = allSkills.find(s => s.id === skillId);
      skill.element = skillElement; // Сохраняем ссылку на HTML элемент

      const dotArray = skillElement.querySelectorAll(".dot");
      const dotResetArray = skillElement.querySelectorAll(".dot-reset");
      dotArray.forEach((dot, index) => {
        dot.addEventListener("click", () => {
          this.dotToggle(dot);
          skill.level = index + 1;
          this.checkDependencies(skill); // Проверяем зависимости
          //this.checkDependent(skill); // Проверяем зависимых

          // считаем количество поинтов
          this.calcUsed();
          this.calcUsedJobOne();
          this.calcUsedJobTwo();
          this.calcUsedJobTwoHight();
          this.calcSkillDotSum();
        });
      });
      dotResetArray.forEach(resetBtn => {
        resetBtn.addEventListener("click", () => {
          const skillDiv = resetBtn.closest('.skill'); // Находим родительский элемент .skill 
          const allSkills = [...this._skillsJobOne, ...this._skillsJobTwo, ...this._skillsJobTwoHight];
          const skillReset = allSkills.find(s => s.id === skillDiv.id);

          //const skillReset = this._skills.find((s) => s.id === skillDiv.id);

          console.log("skillReset:", skillReset);
          if (skillReset) {
            // Сбрасываем уровень скилла и его зависимостей  
            this.resetSkillLevel(skillReset);
            dotArray.forEach(dot => {
              dot.classList.remove("hidden");
            });

            // Проверяем зависимости  
            this.checkDependent(skillReset);

            // Считаем количество поинтов  
            this.calcUsed();
            this.calcUsedJobOne();
            this.calcUsedJobTwo();
            this.calcUsedJobTwoHight();
            this.calcSkillDotSum();
          } else {
            console.warn("Skill not found:", skillDiv.id);
          }
        });
      });
    }); // end обработсик события по клику

    // находим все картинки и вешаем на них слушателя клика или наведения мыши
    // по клику или наведению отображаем подсказку inform из базы
    const skillImgAll = document.querySelectorAll('.skill-img');
    const allSkills2 = [...this._skillsJobOne, ...this._skillsJobTwo, ...this._skillsJobTwoHight];
    skillImgAll.forEach(eImg => {
      eImg.addEventListener('click', e => {
        // Проверяем, уже есть ли попап  
        const existingPop = document.querySelector('.ePopDiv');
        if (existingPop) {
          existingPop.remove(); // Убираем существующий попап, если есть  
        }
        const eSkill = allSkills2.find(s => s.id === eImg.parentElement.id); // находим нужный скил

        // создаём элемент и информацией
        const ePopDiv = document.createElement('div');
        ePopDiv.className = 'ePopDiv';
        ePopDiv.textContent = eSkill.inform;
        ePopDiv.style.position = 'absolute';

        // Вычисляем позицию попапа  
        const popX = e.clientX;
        const popY = e.clientY + 30;

        // Проверка границ экрана  
        const popDivWidth = 200; // Ширина попапа (max-width в CSS)  
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        // Устанавливаем позицию X  
        ePopDiv.style.left = Math.min(popX, viewportWidth - popDivWidth - 20) + 'px'; // Отступ для избежания выхода за границы экрана  
        // Устанавливаем позицию Y  
        ePopDiv.style.top = Math.min(popY, viewportHeight - ePopDiv.offsetHeight - 20) + 'px'; // Отступ для избежания выхода за границы экрана  

        eImg.parentElement.appendChild(ePopDiv); // добавляем pop к элементу скилл

        // Добавляем обработчик на клик вне попапа  
        document.addEventListener('click', function handleClickOutside(event) {
          // Проверяем, кликнули ли вне попапа  
          if (!ePopDiv.contains(event.target) && event.target !== eImg) {
            ePopDiv.remove(); // Убираем попап  
            document.removeEventListener('click', handleClickOutside); // Убираем обработчик  
          }
        });
      });
    });

    // btn reset all skills
    document.querySelector(".bnt-reset").addEventListener("click", () => {
      const allDot = document.querySelectorAll(".dot");
      for (let i = 0; i < allDot.length; i++) {
        allDot[i].classList.remove("hidden");
      }
      this._skillsJobOne.forEach(s => {
        s.level = 0;
      });
      this._skillsJobTwo.forEach(s => {
        s.level = 0;
      });
      this._skillsJobTwoHight.forEach(s => {
        s.level = 0;
      });

      // считаем количество поинтов
      this.calcUsed();
      this.calcUsedJobOne();
      this.calcUsedJobTwo();
      this.calcUsedJobTwoHight();
      this.calcSkillDotSum();
    });
    //});

    // появнение по нажатию на картинки и отображению описания скилла
    const pInfoRu = document.createElement('p');
    pInfoRu.textContent = this.infoRu;
    const pInfoEng = document.createElement('p');
    pInfoEng.textContent = this.infoEng;

    // кнопка "Home"
    const btnHome = document.createElement('button');
    btnHome.setAttribute('type', 'button');
    btnHome.classList.add('btn-home');
    btnHome.textContent = 'Home';
    btnHome.addEventListener('click', e => {
      e.preventDefault();
      window.location.href = 'https://nazgulius.github.io/skillTreeMoY/';
    });
    document.body.append(btnHome);
    document.querySelector('.job-tree').insertAdjacentElement('afterend', pInfoRu);
    document.querySelector('.job-tree').insertAdjacentElement('afterend', pInfoEng);
  } // end основной метод logic

  resetSkillLevel(skillReset) {
    skillReset.level = 0;
    console.log("skillReset:", skillReset);
    if (skillReset.dependent) {
      skillReset.dependent.forEach(sr => {
        const allSkills = [...this._skillsJobOne, ...this._skillsJobTwo, ...this._skillsJobTwoHight];
        const sReset = allSkills.find(s => s.id === sr.id);
        console.log("sReset:", sReset);
        if (sReset) {
          console.log("sReset: OK");
          this.resetSkillLevel(sReset); // Рекурсивный вызов для зависимых  
        } else {
          console.warn("Dependent skill not found:", sr.id);
        }
      });
    }
  }
  // метод для проверки зависимостей (реиспользование внутри себя)
  checkDependencies(skill) {
    if (skill.dependencies) {
      skill.dependencies.forEach(dep => {
        const allSkills = [...this._skillsJobOne, ...this._skillsJobTwo, ...this._skillsJobTwoHight];
        const dependentSkill = allSkills.find(s => s.id === dep.id);

        // Проверяем, достигнут ли минимальный уровень
        const isLevelMet = dependentSkill.level > dep.minLevel;
        if (isLevelMet && dependentSkill.element) {
          // Если зависимый скил больше нужного, ...
          console.log('isLevelMet true');
        } else if (dependentSkill.element) {
          // если зависимый скил меньше нужного, то он устанавливается на нужный лвл
          dependentSkill.element.querySelectorAll('.dot').forEach((dot, index) => {
            if (dep.minLevel === index + 1) {
              this.dotToggle(dot);
              dependentSkill.level = index + 1; // устанавливает лвл в зависимостях скиллов
            }
            ;
          });
        }
        if (Boolean(dependentSkill && dependentSkill.dependencies)) {
          this.checkDependencies(dependentSkill);
        }
      });
    }
  }

  // метод для сброса зависимых скиллов
  checkDependent(skill) {
    if (skill.dependent) {
      skill.dependent.forEach(dep => {
        const allSkills = [...this._skillsJobOne, ...this._skillsJobTwo, ...this._skillsJobTwoHight];
        const dependentSkill = allSkills.find(s => s.id === dep.id);
        if (dependentSkill && dependentSkill.element) {
          dependentSkill.element.querySelectorAll('.dot').forEach(dot => {
            dot.classList.remove("hidden");
          });
        }
        if (Boolean(dependentSkill && dependentSkill.dependent)) {
          this.checkDependent(dependentSkill);
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
    const panelStatistic = document.querySelector('.panel-statistic');
    const stText = document.querySelector('.st-used');
    const stBalance = document.querySelector('.st-balance');
    const total = document.querySelectorAll('.hidden');
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
  calcSkillDotSum() {
    const skillAll = document.querySelectorAll(".skill");
    skillAll.forEach(skill => {
      skill.id;
      const skillLvl = skill.querySelector('.dot_sum');
      const allSkills = [...this._skillsJobOne, ...this._skillsJobTwo, ...this._skillsJobTwoHight];
      const skillBase = allSkills.find(s => s.id === skill.id);
      if (skillBase) {
        skillLvl.textContent = skillBase.level;
        // skillLvl.textContent = skillBase.level === 0 ? 1 : skillBase.level + 1;
      } else {
        skillLvl.textContent = 0;
      }
    });

    // если известен скилл
    // const skillParent = document.getElementById(skill.id);    
    // const skillLvl = skillParent.querySelector('.dot_sum');
    // skillLvl.textContent = skill.level + 1;    // получаем лвл скила и вставляем его в dot_sum

    // вариант с поиском всех товек скила и подсчётом их
    // const dotTotalSkill = skillParent.querySelectorAll('.dot');
    // const dotHiddenSkill = skillParent.querySelectorAll('.hidden');    
    // skillLvl.textContent = dotTotalSkill - dotHiddenSkill;   
  }
}

/*  author Chalykh Maksim 
  # data 25.01.2025 
  # email: chalyh.maksim.88@mail.ru */
;// ./src/img/icon_mag/icon_mag_3.png
const icon_mag_3_namespaceObject = __webpack_require__.p + "79c469f915bcba2349d8.png";
;// ./src/img/icon_mag/icon_mag_2.png
const icon_mag_2_namespaceObject = __webpack_require__.p + "7a0cf6a9a1a07fbb8c93.png";
;// ./src/img/icon_mag/icon_mag_6.png
const icon_mag_6_namespaceObject = __webpack_require__.p + "0830abe1be33821d8001.png";
;// ./src/img/icon_mag/icon_mag_1.png
const icon_mag_1_namespaceObject = __webpack_require__.p + "bbabd4b4c1df8723f5d5.png";
;// ./src/img/icon_mag/icon_mag_4.png
const icon_mag_4_namespaceObject = __webpack_require__.p + "2e7ec1d057c38c43b92e.png";
;// ./src/img/icon_mag/icon_mag_14.png
const icon_mag_14_namespaceObject = __webpack_require__.p + "d0f01a41a46503750800.png";
;// ./src/img/icon_mag/icon_mag_7.png
const icon_mag_7_namespaceObject = __webpack_require__.p + "0fad20d84ed6031a7684.png";
;// ./src/img/icon_mag/icon_mag_13.png
const icon_mag_13_namespaceObject = __webpack_require__.p + "862be568835bc544dbcf.png";
;// ./src/img/icon_mag/icon_mag_15.png
const icon_mag_15_namespaceObject = __webpack_require__.p + "eb2bebbd179d21dce4e5.png";
;// ./src/img/icon_mag/icon_mag_12.png
const icon_mag_12_namespaceObject = __webpack_require__.p + "c3c2b09fe4d210832f7b.png";
;// ./src/img/icon_mag/icon_mag_8.png
const icon_mag_8_namespaceObject = __webpack_require__.p + "c0c0ea4ea9ea1e4dd534.png";
;// ./src/img/icon_mag/icon_mag_11.png
const icon_mag_11_namespaceObject = __webpack_require__.p + "6529683aadb5791743df.png";
;// ./src/img/icon_mag/icon_mag_9.png
const icon_mag_9_namespaceObject = __webpack_require__.p + "810f8d030f0ba17b2ddf.png";
;// ./src/img/icon_mag/icon_mag_5.png
const icon_mag_5_namespaceObject = __webpack_require__.p + "ea27c0ece6940074c600.png";
;// ./src/img/icon_mag/icon_mag_10.png
const icon_mag_10_namespaceObject = __webpack_require__.p + "ccdbdb5894057015b2ad.png";
;// ./src/js/listSkills/Mage.js
/*  author Chalykh Maksim 
  # data 10.02.2025 
  # email: chalyh.maksim.88@mail.ru */

 // заглушка
















// skills Mage
const skillsMage = [{
  id: "fireBolt",
  level: 0,
  dependencies: [],
  dependent: [{
    id: "fireBall"
  }, {
    id: "sightrasher"
  }, {
    id: "flameWeapon"
  }],
  element: null,
  skillName: "Fire Bolt",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Enemy
Range: 9
Requirement: None
Description: Attacks a target with arrow, made of fire inflicting 100% MATK Fire, elemental magic damage per Hit.
[Lv 1]: 1 Hit, SP Consumption: 12,
[Lv 2]: 2 Hits, SP Consumption: 14,
[Lv 3]: 3 Hits, SP Consumption: 16,
[Lv 4]: 4 Hits, SP Consumption: 18,
[Lv 5]: 5 Hits, SP Consumption: 20,
[Lv 6]: 6 Hits, SP Consumption: 22,
[Lv 7]: 7 Hits, SP Consumption: 24,
[Lv 8]: 8 Hits, SP Consumption: 26,
[Lv 9]: 9 Hits, SP Consumption: 28,
[Lv 10]: 10 Hits, SP Consumption: 30`,
  img: icon_mag_3_namespaceObject
}, {
  id: "fireBall",
  level: 0,
  dependencies: [{
    id: "fireBolt",
    minLevel: 4
  }],
  dependent: [{
    id: "fireWall"
  }, {
    id: "sightrasher"
  }],
  element: null,
  skillName: "Fire Ball",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Enemy
Range: 9
Requirement: Fire Bolt Lv: 4
Description: Unleashes a scorching fireball that explodes on impact, dealing Fire property magic damage to all enemies within its area of effect. The damage varies between the center [3x3 cells] and the edges [5x5 cells]. If theres fire present around the caster, multiple fireballs are conjured, with their number depending on the amount of natural fire in the terrain or the presence of Volcano or Fire Wall cells near the caster. Damage of the extra Fireballs is determined by the user's Base Level.
[Lv 1]: Center: MAtk 120%, Edge: MAtk 60%,
[Lv 2]: Center: MAtk 140%, Edge: MAtk 70%,
[Lv 3]: Center: MAtk 160%, Edge: MAtk 80%,
[Lv 4]: Center: MAtk 180%, Edge: MAtk 90%,
[Lv 5]: Center: MAtk 200%, Edge: MAtk 100%,
[Lv 6]: Center: MAtk 220%, Edge: MAtk 110%,
[Lv 7]: Center: MAtk 240%, Edge: MAtk 120%,
[Lv 8]: Center: MAtk 260%, Edge: MAtk 130%,
[Lv 9]: Center: MAtk 280%, Edge: MAtk 140%,
[Lv 10]: Center: MAtk 300%, Edge: MAtk 150%`,
  img: icon_mag_2_namespaceObject
}, {
  id: "fireWall",
  level: 0,
  dependencies: [{
    id: "fireBall",
    minLevel: 5
  }],
  element: null,
  skillName: "Fire Wall",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Ground
Range: 9
Requirement: Fire Ball Lv: 5
Description: Conjures a blazing wall of flames at a targeted location, dealing 50% Fire property magic damage and pushing enemies back two cells upon contact. However, targets of the [Corrupt] element cannot be pushed.
[Lv 1]: Max Fire Wall up: 1, Duration: 5 sec, Attacks per wall: 3,
[Lv 2]: Max Fire Wall up: 1, Duration: 5 sec, Attacks per wall: 4,
[Lv 3]: Max Fire Wall up: 1, Duration: 5 sec, Attacks per wall: 5,
[Lv 4]: Max Fire Wall up: 2, Duration: 10 sec, Attacks per wall: 6,
[Lv 5]: Max Fire Wall up: 2, Duration: 10 sec, Attacks per wall: 7,
[Lv 6]: Max Fire Wall up: 2, Duration: 10 sec, Attacks per wall: 8,
[Lv 7]: Max Fire Wall up: 3, Duration: 15 sec, Attacks per wall: 9,
[Lv 8]: Max Fire Wall up: 3, Duration: 15 sec, Attacks per wall: 10,
[Lv 9]: Max Fire Wall up: 3, Duration: 15 sec, Attacks per wall: 11,
[Lv 10]: Max Fire Wall up: 4, Duration: 20 sec, Attacks per wall: 12`,
  img: icon_mag_6_namespaceObject
}, {
  id: "coldBolt",
  level: 0,
  dependencies: [],
  dependent: [{
    id: "frostDiver"
  }, {
    id: "frostWeapon"
  }],
  element: null,
  skillName: "Cold Bolt",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Enemy
Range: 9
Requirement: None
Description: Summons bolts of frigid ice to strike at an enemy which inflicts 100% MATK Water elemental magic damage per Hit.
[Lv 1]: 1 Hit, 12 SP Consumption,
[Lv 2]: 2 Hits, 14 SP Consumption,
[Lv 3]: 3 Hits, 16 SP Consumption,
[Lv 4]: 4 Hits, 18 SP Consumption,
[Lv 5]: 5 Hits, 20 SP Consumption,
[Lv 6]: 6 Hits, 22 SP Consumption,
[Lv 7]: 7 Hits, 24 SP Consumption,
[Lv 8]: 8 Hits, 26 SP Consumption,
[Lv 9]: 9 Hits, 28 SP Consumption,
[Lv 10]: 10 Hits, 30 SP Consumption`,
  img: icon_mag_1_namespaceObject
}, {
  id: "frostDiver",
  level: 0,
  dependencies: [{
    id: "coldBolt",
    minLevel: 4
  }],
  dependent: [{
    id: "iceWall"
  }, {
    id: "waterBall"
  }],
  element: null,
  skillName: "Frost Diver",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Enemy
Range: 9
Requirement: Cold Bolt Lv: 4
Description: Inflicts Water Property Magic Damage with a chance to leave the target Freezing. Freezing lasts for 5 seconds. When it ends naturally, the inflicted target becomes Frozen. If the target is already Frozen, the skill will fail but still consume SP.
[Lv 1]: MAtk 110%, Chance of Freezing: 38%,
[Lv 2]: MAtk 120%, Chance of Freezing: 41%,
[Lv 3]: MAtk 130%, Chance of Freezing: 44%,
[Lv 4]: MAtk 140%, Chance of Freezing: 47%,
[Lv 5]: MAtk 150%, Chance of Freezing: 50%,
[Lv 6]: MAtk 160%, Chance of Freezing: 53%,
[Lv 7]: MAtk 170%, Chance of Freezing: 56%,
[Lv 8]: MAtk 180%, Chance of Freezing: 59%,
[Lv 9]: MAtk 190%, Chance of Freezing: 62%,
[Lv 10]: MAtk 200%, Chance of Freezing: 65%`,
  img: icon_mag_4_namespaceObject
}, {
  id: "iceWall",
  level: 0,
  dependencies: [{
    id: "frostDiver",
    minLevel: 5
  }],
  dependent: [],
  element: null,
  skillName: "Ice Wall",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Ground
Range: 9
Requirement: Frost Diver Lv: 5
Description: Conjures a solid wall of ice in a 1x5 cell area, blocking enemies but susceptible to destruction by attacks. The walls HP and number of walls that can be created increase with skill level, and the wall will vanish once its HP reaches zero.
[Lv 1]: Max Walls: 1, Duration: 5 sec, Wall HP: 400,
[Lv 2]: Max Walls: 1, Duration: 5 sec, Wall HP: 600,
[Lv 3]: Max Walls: 1, Duration: 5 sec, Wall HP: 800,
[Lv 4]: Max Walls: 2, Duration: 10 sec, Wall HP: 1000,
[Lv 5]: Max Walls: 2, Duration: 10 sec, Wall HP: 1200,
[Lv 6]: Max Walls: 2, Duration: 10 sec, Wall HP: 1400,
[Lv 7]: Max Walls: 3, Duration: 15 sec, Wall HP: 1600,
[Lv 8]: Max Walls: 3, Duration: 15 sec, Wall HP: 1800,
[Lv 9]: Max Walls: 3, Duration: 15 sec, Wall HP: 2000,
[Lv 10]: Max Walls: 4, Duration: 20 sec, Wall HP: 2200`,
  img: icon_mag_14_namespaceObject
}, {
  id: "lightningBolt",
  level: 0,
  dependencies: [],
  dependent: [{
    id: "thunderstorm"
  }, {
    id: "lightningWeapon"
  }],
  element: null,
  skillName: "Lightning Bolt",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Enemy
Range: 9
Requirement: None
Description: Drops lightning on target inflicting 100% MATK Wind elemental magic damage per Hit.
[Lv 1]: 1 Hit, SP Consumption: 12,
[Lv 2]: 2 Hits, SP Consumption: 14,
[Lv 3]: 3 Hits, SP Consumption: 16,
[Lv 4]: 4 Hits, SP Consumption: 18,
[Lv 5]: 5 Hits, SP Consumption: 20,
[Lv 6]: 6 Hits, SP Consumption: 22,
[Lv 7]: 7 Hits, SP Consumption: 24,
[Lv 8]: 8 Hits, SP Consumption: 26,
[Lv 9]: 9 Hits, SP Consumption: 28,
[Lv 10]: 10 Hits, SP Consumption: 30`,
  img: icon_mag_7_namespaceObject
}, {
  id: "thunderstorm",
  level: 0,
  dependencies: [{
    id: "lightningBolt",
    minLevel: 4
  }],
  dependent: [{
    id: "jupitelThunder"
  }],
  element: null,
  skillName: "Thunderstorm",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Ground
Range: 9
Requirement: Lightning Bolt Lv: 4
Description: Summons a lightning bolt to strike a specific location, dealing Wind elemental magic damage to all enemies within a 5x5 cells area.
[Lv 1]: MAtk 100% 2 Hits, SP Cost: 24,
[Lv 2]: MAtk 200% 2 Hits, SP Cost: 28,
[Lv 3]: MAtk 300% 4 Hits, SP Cost: 32,
[Lv 4]: MAtk 400% 4 Hits, SP Cost: 36,
[Lv 5]: MAtk 500% 6 Hits, SP Cost: 40,
[Lv 6]: MAtk 600% 6 Hits, SP Cost: 44,
[Lv 7]: MAtk 700% 8 Hits, SP Cost: 48,
[Lv 8]: MAtk 800% 8 Hits, SP Cost: 52,
[Lv 9]: MAtk 900% 10 Hits, SP Cost: 56,
[Lv 10]: MAtk 1000% 10 Hits, SP Cost: 60`,
  img: icon_mag_13_namespaceObject
}, {
  id: "earthSpike",
  level: 0,
  dependencies: [],
  dependent: [{
    id: "stoneCurse"
  }, {
    id: "seismicWeapon"
  }],
  element: null,
  skillName: "Earth Spike",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Enemy
Range: 9
Requirement: None
Description: Summons spikes from the ground beneath a single target, each dealing 100% Earth property magic damage.
[Lv 1]: 1 Hit, SP Cost: 12,
[Lv 2]: 2 Hits, SP Cost: 14,
[Lv 3]: 3 Hits, SP Cost: 16,
[Lv 4]: 4 Hits, SP Cost: 18,
[Lv 5]: 5 Hits, SP Cost: 20,
[Lv 6]: 6 Hits, SP Cost: 22,
[Lv 7]: 7 Hits, SP Cost: 24,
[Lv 8]: 8 Hits, SP Cost: 26,
[Lv 9]: 9 Hits, SP Cost: 28,
[Lv 10]: 10 Hits, SP Cost: 30`,
  img: icon_mag_15_namespaceObject
}, {
  id: "stoneCurse",
  level: 0,
  dependencies: [{
    id: "earthSpike",
    minLevel: 4
  }],
  dependent: [{
    id: "heavensDrive"
  }],
  element: null,
  skillName: "Stone Curse",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Enemy
Range: 2
Requirement: Earth Spike Lv: 4
Description: Attempts to Petrifying a single target. If used on an already petrified target, the skill will fail. Catalyst: 1x Red Gemstone.
[Lv 1]: Consumption: Per Use, Petrifying Chance: 24%,
[Lv 2]: Consumption: Per Use, Petrifying Chance: 28%,
[Lv 3]: Consumption: Per Use, Petrifying Chance: 32%,
[Lv 4]: Consumption: Per Use, Petrifying Chance: 36%,
[Lv 5]: Consumption: Per Use, Petrifying Chance: 40%,
[Lv 6]: Consumption: On Success, Petrifying Chance: 44%,
[Lv 7]: Consumption: On Success, Petrifying Chance: 48%,
[Lv 8]: Consumption: On Success, Petrifying Chance: 52%,
[Lv 9]: Consumption: On Success, Petrifying Chance: 56%,
[Lv 10]: Consumption: On Success, Petrifying Chance: 60%`,
  img: icon_mag_12_namespaceObject
}, {
  id: "soulStrike",
  level: 0,
  dependencies: [],
  dependent: [{
    id: "napalmBeat"
  }, {
    id: "safetyWall"
  }, {
    id: "soulDrain"
  }],
  element: null,
  skillName: "Soul Strike",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Enemy
Range: 9
Requirement: None
Description: Summon the Ancient Holy Spirit to deliver direct attacks, inflicting Ghost property magic damage.
[Lv 1]: 100% Magic Attack / 1 Hit, SP Cost: 12,
[Lv 2]: 200% Magic Attack / 1 Hit, SP Cost: 14,
[Lv 3]: 300% Magic Attack / 2 Hits, SP Cost: 16,
[Lv 4]: 400% Magic Attack / 2 Hits, SP Cost: 18,
[Lv 5]: 500% Magic Attack / 3 Hits, SP Cost: 20,
[Lv 6]: 600% Magic Attack / 3 Hits, SP Cost: 22,
[Lv 7]: 700% Magic Attack / 4 Hits, SP Cost: 24,
[Lv 8]: 800% Magic Attack / 4 Hits, SP Cost: 26,
[Lv 9]: 900% Magic Attack / 5 Hits, SP Cost: 28,
[Lv 10]: 1000% Magic Attack / 5 Hits, SP Cost: 30`,
  img: icon_mag_8_namespaceObject
}, {
  id: "napalmBeat",
  level: 0,
  dependencies: [{
    id: "soulStrike",
    minLevel: 4
  }],
  dependent: [{
    id: "safetyWall"
  }, {
    id: "napalmVulcan"
  }],
  element: null,
  skillName: "Napalm Beat",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Enemy
Range: 9
Requirement: Requirement: Soul Strike Lv: 4
Description: Unleashes a surge of psychokinetic energy, striking a target with Ghost property magic damage and affecting all enemies within a 5x5 cells area. This skill deals extra damage to [Undead Race] or [Corrupt Property] entities. 
[Lv 1] : MAtk 120%, Additional Damage: +10%, SP Cost: 9, 
[Lv 2] : MAtk 140%, Additional Damage: +20%, SP Cost: 9, 
[Lv 3] : MAtk 160%, Additional Damage: +30%, SP Cost: 9, 
[Lv 4] : MAtk 180%, Additional Damage: +40%, SP Cost: 12, 
[Lv 5] : MAtk 200%, Additional Damage: +50%, SP Cost: 12, 
[Lv 6] : MAtk 220%, Additional Damage: +60%, SP Cost: 12, 
[Lv 7] : MAtk 240%, Additional Damage: +70%, SP Cost: 15, 
[Lv 8] : MAtk 260%, Additional Damage: +80%, SP Cost: 15, 
[Lv 9] : MAtk 280%, Additional Damage: +90%, SP Cost: 15, 
[Lv10] : MAtk 300%, Additional Damage: +100%, SP Cost: 18`,
  img: icon_mag_11_namespaceObject
}, {
  id: "safetyWall",
  level: 0,
  dependencies: [{
    id: "napalmBeat",
    minLevel: 5
  }],
  element: null,
  skillName: "Safety Wall",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Ground
Range: 9
Requirement: Napalm Beat Lv: 5, Soul Strike Lv: 7
Description: Constructs a protective barrier at a targeted location that blocks all close-range physical damage until its durability is depleted or the skill expires. The walls durability and effectiveness are influenced by your INT, Base Level, and MaxSP. Only the initial impact is prevented beyond the total durability. A maximum of 4 Safety Walls can be active at once. Catalyst: 1x Blue Gemstone.
[Lv 1]: Durability: 300, Blocks Damage 2 times,
[Lv 2]: Durability: 600, Blocks Damage 3 times,
[Lv 3]: Durability: 900, Blocks Damage 4 times,
[Lv 4]: Durability: 1200, Blocks Damage 5 times,
[Lv 5]: Durability: 1500, Blocks Damage 6 times,
[Lv 6]: Durability: 1800, Blocks Damage 7 times,
[Lv 7]: Durability: 2100, Blocks Damage 8 times,
[Lv 8]: Durability: 2400, Blocks Damage 9 times,
[Lv 9]: Durability: 2700, Blocks Damage 10 times,
[Lv 10]: Durability: 3000, Blocks Damage 11 times`,
  img: icon_mag_9_namespaceObject
}, {
  id: "increaseSPRecovery",
  level: 0,
  dependencies: [],
  dependent: [{
    id: "indulge"
  }, {
    id: "mindBreaker"
  }, {
    id: "soulDrain"
  }],
  element: null,
  skillName: "Increase SP Recovery",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Passive
Type: Misc
Requirement: None
Description: Increases the amount of SP recovered through your natural SP regeneration. Increases SP Potions healing in 3% per Skill Level.
[Lv 1]: SP Recovery +[3 + 0.1% of MaxSP],
[Lv 2]: SP Recovery +[6 + 0.2% of MaxSP],
[Lv 3]: SP Recovery +[9 + 0.3% of MaxSP],
[Lv 4]: SP Recovery +[12 + 0.4% of MaxSP],
[Lv 5]: SP Recovery +[15 + 0.5% of MaxSP],
[Lv 6]: SP Recovery +[18 + 0.6% of MaxSP],
[Lv 7]: SP Recovery +[21 + 0.7% of MaxSP],
[Lv 8]: SP Recovery +[24 + 0.8% of MaxSP],
[Lv 9]: SP Recovery +[27 + 0.9% of MaxSP],
[Lv 10]: SP Recovery +[30 + 1% of MaxSP]`,
  img: icon_mag_5_namespaceObject
}, {
  id: "sight",
  level: 0,
  dependencies: [],
  dependent: [],
  element: null,
  skillName: "Sight",
  maxLevel: 1,
  inform: `Max Lv: 1
Skill Form: Active
Type: Magical
Target: Self
Requirement: None
Description: Summons a fireball that reveals hidden characters within a 7x7 area around the caster. This skill can only be learned at level 1; higher levels are unlocked through items.
[Lv 1]: Duration: 10 Seconds,
[Lv 2]: Duration: 20 Seconds,
[Lv 3]: Duration: 30 Seconds,
[Lv 4]: Duration: 40 Seconds,
[Lv 5]: Duration: 50 Seconds`,
  img: icon_mag_10_namespaceObject
}];

/*  author Chalykh Maksim 
  # data 10.02.2025 
  # email: chalyh.maksim.88@mail.ru */
;// ./src/img/icon_wiz/icon_wiz_12.png
const icon_wiz_12_namespaceObject = __webpack_require__.p + "7521070c09541b016db1.png";
;// ./src/img/icon_wiz/icon_wiz_3.png
const icon_wiz_3_namespaceObject = __webpack_require__.p + "bc421628ae817f0d1166.png";
;// ./src/img/icon_wiz/icon_wiz_4.png
const icon_wiz_4_namespaceObject = __webpack_require__.p + "92d344a32167de7f73aa.png";
;// ./src/img/icon_wiz/icon_wiz_5.png
const icon_wiz_5_namespaceObject = __webpack_require__.p + "97889810d999112d2bc8.png";
;// ./src/img/icon_wiz/icon_wiz_7.png
const icon_wiz_7_namespaceObject = __webpack_require__.p + "8b1a26805b575257246b.png";
;// ./src/img/icon_wiz/icon_wiz_8.png
const icon_wiz_8_namespaceObject = __webpack_require__.p + "15909b3f2c35d0860a8a.png";
;// ./src/img/icon_wiz/icon_wiz_9.png
const icon_wiz_9_namespaceObject = __webpack_require__.p + "43833de3e80116bbf7a8.png";
;// ./src/img/icon_wiz/icon_wiz_10.png
const icon_wiz_10_namespaceObject = __webpack_require__.p + "7da36c6d9b5c942761fa.png";
;// ./src/img/icon_wiz/icon_wiz_11.png
const icon_wiz_11_namespaceObject = __webpack_require__.p + "b63f6b971989a4ad7b0f.png";
;// ./src/img/icon_wiz/icon_wiz_13.png
const icon_wiz_13_namespaceObject = __webpack_require__.p + "c7e1ff2772ba77f69360.png";
;// ./src/img/icon_wiz/icon_wiz_electricalinduction.png
const icon_wiz_electricalinduction_namespaceObject = __webpack_require__.p + "4233c2fc6d913638b635.png";
;// ./src/img/icon_wiz/icon_wiz_gemmancy.png
const icon_wiz_gemmancy_namespaceObject = __webpack_require__.p + "9c75b1fcab3fc41ce1d6.png";
;// ./src/img/icon_wiz/icon_wiz_violentquake.png
const icon_wiz_violentquake_namespaceObject = __webpack_require__.p + "ada43206824b138e6813.png";
;// ./src/js/listSkills/MageWizard.js
/*  author Chalykh Maksim 
  # data 25.01.2025 
  # email: chalyh.maksim.88@mail.ru */

 // заглушка














// skills Wizard

const skillsWizard = [{
  id: "sightrasher",
  level: 0,
  dependencies: [{
    id: "fireBolt",
    minLevel: 4
  }, {
    id: "fireBall",
    minLevel: 3
  }],
  dependent: [{
    id: "meteorStorm"
  }],
  element: null,
  skillName: "Sightrasher",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Self
Requirement: Fire Bolt Lv: 4, Fire Ball Lv: 3
Description: Launches the fireball in 8 directions around the caster, dealing Fire property magic damage to all nearby enemies and pushing them 2 cells backward. After use, the fireball summoned by Sight disappears. Deals double damage to targets with any form of invisibility.
[Lv 1]: MAtk 100%,
[Lv 2]: MAtk 200%,
[Lv 3]: MAtk 300%,
[Lv 4]: MAtk 400%,
[Lv 5]: MAtk 500%`,
  img: icon_wiz_12_namespaceObject
}, {
  id: "meteorStorm",
  level: 0,
  dependencies: [{
    id: "sightrasher",
    minLevel: 3
  }],
  dependent: [{
    id: "firePillar"
  }],
  element: null,
  skillName: "Meteor Storm",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Ground
Range: 9
Requirement: Sightrasher Lv: 3
Description: Calls down a rain of meteors upon a targeted area, dealing 125% Fire elemental magic damage to enemies within a 13x13 zone, with a chance to stun them. Each meteor affects a 7x7 area. The skill level determines the hits per meteor, and the chance to cause stun.
[Lv 1]: Meteors: 2, Hits per Meteor: 2, Stun Chance: 3%,
[Lv 2]: Meteors: 3, Hits per Meteor: 3, Stun Chance: 6%,
[Lv 3]: Meteors: 3, Hits per Meteor: 3, Stun Chance: 9%,
[Lv 4]: Meteors: 4, Hits per Meteor: 4, Stun Chance: 12%,
[Lv 5]: Meteors: 4, Hits per Meteor: 4, Stun Chance: 15%,
[Lv 6]: Meteors: 5, Hits per Meteor: 5, Stun Chance: 18%,
[Lv 7]: Meteors: 5, Hits per Meteor: 5, Stun Chance: 21%,
[Lv 8]: Meteors: 6, Hits per Meteor: 6, Stun Chance: 24%,
[Lv 9]: Meteors: 6, Hits per Meteor: 6, Stun Chance: 27%,
[Lv 10]: Meteors: 7, Hits per Meteor: 7, Stun Chance: 30%`,
  img: icon_wiz_9_namespaceObject
}, {
  id: "firePillar",
  level: 0,
  dependencies: [{
    id: "meteorStorm",
    minLevel: 7
  }],
  dependent: [],
  element: null,
  skillName: "Fire Pillar",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Ground
Range: 9
Requirement: Meteor Storm Lv: 7
Description: Summons a towering pillar of flame at a designated location. The pillar erupts periodically, dealing piercing Fire property magic damage to all enemies in a 5x5 area. It will automatically disappear if not triggered within its maximum duration. A maximum of 5 pillars can be active at once. Additionally, Fire-damage abilities may trigger a Fire Pillar at the target, with the Auto-Cast chance based on the skill level. Catalyst: 1x Red Gemstone for Lvs. 6 or higher.
[Lv 1]: Hits Inflicted: 3, Auto-Cast Chance: 1%, Duration: 36 seconds,
[Lv 2]: Hits Inflicted: 4, Auto-Cast Chance: 2%, Duration: 42 seconds,
[Lv 3]: Hits Inflicted: 5, Auto-Cast Chance: 3%, Duration: 48 seconds,
[Lv 4]: Hits Inflicted: 6, Auto-Cast Chance: 4%, Duration: 54 seconds,
[Lv 5]: Hits Inflicted: 7, Auto-Cast Chance: 5%, Duration: 60 seconds,
[Lv 6]: Hits Inflicted: 8, Auto-Cast Chance: 6%, Duration: 66 seconds,
[Lv 7]: Hits Inflicted: 9, Auto-Cast Chance: 7%, Duration: 72 seconds,
[Lv 8]: Hits Inflicted: 10, Auto-Cast Chance: 8%, Duration: 78 seconds,
[Lv 9]: Hits Inflicted: 11, Auto-Cast Chance: 9%, Duration: 84 seconds,
[Lv 10]: Hits Inflicted: 12, Auto-Cast Chance: 10%, Duration: 90 seconds`,
  img: icon_wiz_3_namespaceObject
}, {
  id: "waterBall",
  level: 0,
  dependencies: [{
    id: "frostDiver",
    minLevel: 3
  }],
  dependent: [{
    id: "stormGust"
  }],
  element: null,
  skillName: "Water Ball",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Enemy
Range: 9
Requirement: Frost Diver Lv: 3
Description: Launches a Water Ball to deal Water property magic damage to all enemies within its area of effect. Damage varies between the Center 3x3 Cells and Edge 5x5 Cells. If there is water around the caster, multiple Water Balls are conjured. The number of Water Balls depends on the amount of natural water in the terrain or the presence of Deluge/Ice Wall cells nearby. Each Waterball applies stacks of Wet, reducing Freeze resistance by 1% per stack. Against players, it also adds a chance to sit down by 0.5% per stack for each cell they move. Damage of the extra Water Balls is determined by the user's Base Level.
[Lv 1]: Center: 140% MAtk, Edge: 70% MAtk,
[Lv 2]: Center: 180% MAtk, Edge: 90% MAtk,
[Lv 3]: Center: 220% MAtk, Edge: 110% MAtk,
[Lv 4]: Center: 260% MAtk, Edge: 130% MAtk,
[Lv 5]: Center: 300% MAtk, Edge: 150% MAtk`,
  img: icon_wiz_13_namespaceObject
}, {
  id: "stormGust",
  level: 0,
  dependencies: [{
    id: "waterBall",
    minLevel: 3
  }],
  dependent: [{
    id: "frostNova"
  }],
  element: null,
  skillName: "Storm Gust",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Ground
Range: 9
Requirement: Water Ball Lv: 3
Description: Summons a fierce snowstorm in an 11x11 area, dealing Water magic damage every 0.45 seconds for 4.5 seconds. Pushes enemies 2 cells back and applies Freezing. Freezing lasts 5 seconds, and when it ends naturally, the target becomes Frozen. Enemies hit three times will Frozen, and Frozen enemies take no further damage from this skill.
[Lv 1]: MAtk 120% per Hit,
[Lv 2]: MAtk 170% per Hit,
[Lv 3]: MAtk 220% per Hit,
[Lv 4]: MAtk 270% per Hit,
[Lv 5]: MAtk 320% per Hit,
[Lv 6]: MAtk 370% per Hit,
[Lv 7]: MAtk 420% per Hit,
[Lv 8]: MAtk 470% per Hit,
[Lv 9]: MAtk 520% per Hit,
[Lv 10]: MAtk 570% per Hit`,
  img: icon_wiz_11_namespaceObject
}, {
  id: "frostNova",
  level: 0,
  dependencies: [{
    id: "stormGust",
    minLevel: 7
  }],
  dependent: [],
  element: null,
  skillName: "Frost Nova",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Self
Requirement: Storm Gust Lv: 7
Description: Summons a ring of ice spikes around the user, dealing Water magic damage to nearby enemies with a chance to apply Freezing. Freezing lasts 5 seconds, and when it ends naturally, the target becomes Frozen. Higher skill levels increase the chance to Freezing and reduce cast time.
[Lv 1]: MAtk 110%,
[Lv 2]: MAtk 120%,
[Lv 3]: MAtk 130%,
[Lv 4]: MAtk 140%,
[Lv 5]: MAtk 150%,
[Lv 6]: MAtk 160%,
[Lv 7]: MAtk 170%,
[Lv 8]: MAtk 180%,
[Lv 9]: MAtk 190%,
[Lv 10]: MAtk 200%`,
  img: icon_wiz_4_namespaceObject
}, {
  id: "jupitelThunder",
  level: 0,
  dependencies: [{
    id: "thunderstorm",
    minLevel: 3
  }],
  dependent: [{
    id: "lordOfVermilion"
  }],
  element: null,
  skillName: "Jupitel Thunder",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Enemy
Range: 9
Requirement: Thunderstorm Lv:3
Description: Fires a ball of crackling lightning that inflicts 100% MATK Wind elemental magic damage and knock back the targeted enemy. The number of hits increases with the skill level.
[Lv 1]: Hits: 2, Knockback: 3,
[Lv 2]: Hits: 4, Knockback: 4,
[Lv 3]: Hits: 6, Knockback: 5,
[Lv 4]: Hits: 8, Knockback: 6,
[Lv 5]: Hits: 10, Knockback: 7`,
  img: icon_wiz_7_namespaceObject
}, {
  id: "lordOfVermilion",
  level: 0,
  dependencies: [{
    id: "jupitelThunder",
    minLevel: 3
  }],
  dependent: [{
    id: "electricalInduction"
  }],
  element: null,
  skillName: "Lord of Vermilion",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Ground
Range: 9
Requirement: Jupitel Thunder Lv: 3
Description: Calls down devastating lightning bolts from the skies to strike a chosen area, dealing Wind property magic damage every 0.45 seconds to all enemies within a [13*13] radius for 4.5 seconds. Enemies hit by this storm have a chance to be blinded. The chance of blindness is mitigated by the targets resistances.
[Lv 1]: MAtk 20% per Hit, Blind Chance:15%,
[Lv 2]: MAtk 40% per Hit, Blind Chance:20%,
[Lv 3]: MAtk 60% per Hit, Blind Chance:25%,
[Lv 4]: MAtk 80% per Hit, Blind Chance:30%,
[Lv 5]: MAtk 100% per Hit, Blind Chance:35%,
[Lv 6]: MAtk 120% per Hit, Blind Chance:40%,
[Lv 7]: MAtk 140% per Hit, Blind Chance:45%,
[Lv 8]: MAtk 160% per Hit, Blind Chance:50%,
[Lv 9]: MAtk 180% per Hit, Blind Chance:55%,
[Lv 10]: MAtk 200% per Hit, Blind Chance:60%`,
  img: icon_wiz_8_namespaceObject
}, {
  id: "electricalInduction",
  level: 0,
  dependencies: [{
    id: "lordOfVermilion",
    minLevel: 7
  }],
  dependent: [],
  element: null,
  skillName: "Electrical Induction",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Enemy
Range: 11
Requirement: Lord of Vermilion Lv: 7
Description: Unleashes a wave of electrical energy that inflicts Wind property magic damage. This skill bounces from target to target, with each jump increasing damage by 10%. If no other targets are nearby, all jumps will hit the initial target. Wind-damage abilities have a chance to trigger Electrical Induction at the target. The chance for auto-cast is half the skills level.
[Lv 1]: MAtk 10%, Jumps: 3, Auto-Cast Chance: 1%,
[Lv 2]: MAtk 10%, Jumps: 4, Auto-Cast Chance: 2%,
[Lv 3]: MAtk 10%, Jumps: 5, Auto-Cast Chance: 3%,
[Lv 4]: MAtk 10%, Jumps: 6, Auto-Cast Chance: 4%,
[Lv 5]: MAtk 10%, Jumps: 7, Auto-Cast Chance: 5%,
[Lv 6]: MAtk 10%, Jumps: 8, Auto-Cast Chance: 6%,
[Lv 7]: MAtk 10%, Jumps: 9, Auto-Cast Chance: 7%,
[Lv 8]: MAtk 10%, Jumps: 10, Auto-Cast Chance: 8%,
[Lv 9]: MAtk 10%, Jumps: 11, Auto-Cast Chance: 9%,
[Lv 10]: MAtk 10%, Jumps: 12, Auto-Cast Chance: 10%`,
  img: icon_wiz_electricalinduction_namespaceObject
}, {
  id: "heavensDrive",
  level: 0,
  dependencies: [{
    id: "stoneCurse",
    minLevel: 3
  }],
  dependent: [{
    id: "violentQuake"
  }],
  element: null,
  skillName: "Heaven's Drive ",
  maxLevel: 5,
  inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Ground
Range: 9
Requirement: Stone Curse Lv: 3
Description: Commands the earth to rise as spikes at a target location, dealing Earth Property Magic Damage to all enemies in a 5x10 area and pushing them 2 cells per hit. Can also hit hidden enemies.
[Lv 1]: MAtk 50% x 5 Hits,
[Lv 2]: MAtk 100% x 5 Hits,
[Lv 3]: MAtk 150% x 5 Hits,
[Lv 4]: MAtk 200% x 5 Hits,
[Lv 5]: MAtk 250% x 5 Hits`,
  img: icon_wiz_5_namespaceObject
}, {
  id: "violentQuake",
  level: 0,
  dependencies: [{
    id: "heavensDrive",
    minLevel: 3
  }],
  dependent: [{
    id: "quagmire"
  }],
  element: null,
  skillName: "Violent Quake",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Ground
Range: 9
Requirement: Heaven's Drive Lv: 3
Description: Causes an earthquake in the target area, with 10 rocks randomly rising during the skill's duration, dealing Earth magic damage to enemies in a 9x9 area. Each rock hit has a chance to inflict Confusion for a short time.
[Lv 1]: MATK 330%, Confusion Chance: 5%,
[Lv 2]: MATK 360%, Confusion Chance: 10%,
[Lv 3]: MATK 390%, Confusion Chance: 15%,
[Lv 4]: MATK 420%, Confusion Chance: 20%,
[Lv 5]: MATK 450%, Confusion Chance: 25%,
[Lv 6]: MATK 480%, Confusion Chance: 30%,
[Lv 7]: MATK 510%, Confusion Chance: 35%,
[Lv 8]: MATK 540%, Confusion Chance: 40%,
[Lv 9]: MATK 570%, Confusion Chance: 45%,
[Lv 10]: MATK 600%, Confusion Chance: 50%`,
  img: icon_wiz_violentquake_namespaceObject
}, {
  id: "quagmire",
  level: 0,
  dependencies: [{
    id: "violentQuake",
    minLevel: 7
  }],
  dependent: [],
  element: null,
  skillName: "Quagmire",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Ground
Range: 9
Requirement: Violent Quake Lv: 7
Description: Creates a swamp at a target location, slowing and reducing AGI and DEX of all enemies in the area. Stat reduction is capped at 50% for monsters and players. Also removes effects like Increase AGI, Sword/Spear Quicken, Wind Walker, and Adrenaline Rush. Up to three swamps can be active at once. Reductions only apply while enemies are in the Quagmire.
[Lv 1]: AGI/DEX -15%, Duration: 8 seconds,
[Lv 2]: AGI/DEX -20%, Duration: 11 seconds,
[Lv 3]: AGI/DEX -25%, Duration: 14 seconds,
[Lv 4]: AGI/DEX -30%, Duration: 17 seconds,
[Lv 5]: AGI/DEX -35%, Duration: 20 seconds,
[Lv 6]: AGI/DEX -40%, Duration: 23 seconds,
[Lv 7]: AGI/DEX -45%, Duration: 26 seconds,
[Lv 8]: AGI/DEX -50%, Duration: 29 seconds,
[Lv 9]: AGI/DEX -55%, Duration: 32 seconds,
[Lv 10]: AGI/DEX -60%, Duration: 35 seconds`,
  img: icon_wiz_10_namespaceObject
}, {
  id: "gemmancy",
  level: 0,
  dependencies: [],
  dependent: [],
  element: null,
  skillName: "Gemmancy",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Self
Requirement: None
Description: Master the art of Gemmancy, converting gemstones and gaining the ability to create rarer gemstones. The success rate is determined by your Base Level and Job Level, reaching up to 100%. The amount produced receives an additional bonus based on all attributes, with VIT being the most influential. The relevance of attributes increases exponentially as they grow. The skill level affects the efficiency of the additional production. Regardless of the skill level, the additional production varies. Gemmancy Creation Guide
[Lv 1]: No Additional Bonus,
[Lv 2]: Additional Efficiency -75%,
[Lv 3]: Additional Efficiency -50%,
[Lv 4]: Additional Efficiency -25%,
[Lv 5]: Full Efficiency`,
  img: icon_wiz_gemmancy_namespaceObject
}];

/*  author Chalykh Maksim 
  # data 25.01.2025 
  # email: chalyh.maksim.88@mail.ru */
;// ./src/img/icon_hwz/icon_hwz_2.png
const icon_hwz_2_namespaceObject = __webpack_require__.p + "4192921677a93d91f3bf.png";
;// ./src/img/icon_hwz/icon_hwz_1.png
const icon_hwz_1_namespaceObject = __webpack_require__.p + "dbc609fdb278cd1695d9.png";
;// ./src/img/icon_hwz/icon_hwz_3.png
const icon_hwz_3_namespaceObject = __webpack_require__.p + "34aca4cfed44ed8f57ec.png";
;// ./src/js/listSkills/MageWizardHight.js
/*  author Chalykh Maksim 
  # data 10.02.2025 
  # email: chalyh.maksim.88@mail.ru */

 // заглушка




// skills Wizard Hight

const skillsWizardHight = [{
  id: "mysticalAmplification",
  level: 0,
  dependencies: [],
  dependent: [],
  element: null,
  skillName: "Mystical Amplification",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Self
Requirement: None
Description: Amplifies MATK for 60 seconds.
[Lv 1]: MATK +5%,
[Lv 2]: MATK +10%,
[Lv 3]: MATK +15%,
[Lv 4]: MATK +20%,
[Lv 5]: MATK +25%,
[Lv 6]: MATK +30%,
[Lv 7]: MATK +35%,
[Lv 8]: MATK +40%,
[Lv 9]: MATK +45%,
[Lv 10]: MATK +50%`,
  img: icon_hwz_2_namespaceObject
}, {
  id: "napalmVulcan",
  level: 0,
  dependencies: [{
    id: "napalmBeat",
    minLevel: 5
  }],
  dependent: [],
  element: null,
  skillName: "Napalm Vulcan",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Enemy
Range: 9
Requirement: Napalm Beat Lv: 5
Description: Unleashes a barrage of Napalm Beat, dealing Ghost Property Magic Damage to all enemies in a 7x7 area. Has a chance to inflict Curse. Damage is based on Napalm Beat's power.
[Lv 1]: 1 Hit, Curse chance: 5%,
[Lv 2]: 2 Hits, Curse chance: 10%,
[Lv 3]: 3 Hits, Curse chance: 15%,
[Lv 4]: 4 Hits, Curse chance: 20%,
[Lv 5]: 5 Hits, Curse chance: 25%`,
  img: icon_hwz_3_namespaceObject
}, {
  id: "soulDrain",
  level: 0,
  dependencies: [{
    id: "increaseSPRecovery",
    minLevel: 5
  }, {
    id: "soulStrike",
    minLevel: 7
  }],
  dependent: [],
  element: null,
  skillName: "Soul Drain",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Passive
Type: Magical
Requirement: Increase SP Recovery Lv: 5, Soul Strike Lv: 7
Description: Increases MaxSP. Whenever you defeat an enemy with magical or physical attack, you will gain certain amount of SP depend on monster's level.
[Lv 1]: MaxSP +2%,
[Lv 2]: MaxSP +4%,
[Lv 3]: MaxSP +6%,
[Lv 4]: MaxSP +8%,
[Lv 5]: MaxSP +10%,
[Lv 6]: MaxSP +12%,
[Lv 7]: MaxSP +14%,
[Lv 8]: MaxSP +16%,
[Lv 9]: MaxSP +18%,
[Lv 10]: MaxSP +20%`,
  img: icon_hwz_1_namespaceObject
}];

/*  author Chalykh Maksim 
  # data 10.02.2025 
  # email: chalyh.maksim.88@mail.ru */
;// ./src/js/listSkills/MageSage.js
/*  author Chalykh Maksim 
  # data 25.01.2025 
  # email: chalyh.maksim.88@mail.ru */

 // заглушка

// список скилов Sage
const skillsSage = [{
  id: "advancedBook",
  level: 0,
  dependencies: [],
  dependent: [{
    id: "frostWeapon"
  }, {
    id: "lightningWeapon"
  }, {
    id: "seismicWeapon"
  }, {
    id: "flameWeapon"
  }, {
    id: "deluge"
  }, {
    id: "whirlwind"
  }, {
    id: "sandstorm"
  }, {
    id: "volcano"
  }, {
    id: "castCancel"
  }, {
    id: "magicRod"
  }, {
    id: "spellBreaker"
  }, {
    id: "freeCast"
  }],
  element: null,
  skillName: "Advanced Book",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Passive
Type: Physical
Requirement: None
Description: Increase magical attack and attack speed with Book Weapons. When [Lv 10], it increases MAtk in 6%.
[Lv 1]: MAtk +3, Attack Speed +0.5%,
[Lv 2]: MAtk +6, Attack Speed +1%,
[Lv 3]: MAtk +9, Attack Speed +1.5%,
[Lv 4]: MAtk +12, Attack Speed +2%,
[Lv 5]: MAtk +15, Attack Speed +2.5%,
[Lv 6]: MAtk +18, Attack Speed +3%,
[Lv 7]: MAtk +21, Attack Speed +3.5%,
[Lv 8]: MAtk +24, Attack Speed +4%,
[Lv 9]: MAtk +27, Attack Speed +4.5%,
[Lv 10]: MAtk +30, Attack Speed +5%`,
  img: no_img_namespaceObject
}, {
  id: "frostWeapon",
  level: 0,
  dependencies: [{
    id: "coldBolt",
    minLevel: 3
  }, {
    id: "advancedBook",
    minLevel: 3
  }],
  dependent: [{
    id: "deluge"
  }, {
    id: "scrollbending"
  }],
  element: null,
  skillName: "Frost Weapon",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Ally
Range: 9
Requirement: Cold Bolt Lv: 3, Advanced Book Lv: 3
Description: Temporarily imbues a single targets weapon with Water property, increasing both physical and magical water damage. At Lv 5, the effect expands to a 5x5 area around the target but costs double the SP and triple the catalyst. Catalyst: 1x Indigo Point.
[Lv 1]: Water Damage +2%, Duration: 75 sec,
[Lv 2]: Water Damage +3%, Duration: 140 sec,
[Lv 3]: Water Damage +4%, Duration: 225 sec,
[Lv 4]: Water Damage +5%, Duration: 300 sec,
[Lv 5]: Water Damage +5%, Duration: 300 sec`,
  img: no_img_namespaceObject
}, {
  id: "lightningWeapon",
  level: 0,
  dependencies: [{
    id: "lightningBolt",
    minLevel: 3
  }, {
    id: "advancedBook",
    minLevel: 3
  }],
  dependent: [{
    id: "whirlwind"
  }, {
    id: "scrollbending"
  }],
  element: null,
  skillName: "Lightning Weapon",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Ally
Range: 9
Requirement: Lightning Bolt Lv: 3, Advanced Book Lv: 3
Description: Temporarily imbues a single targets weapon with Wind property, increasing both physical and magical wind damage. At Lv 5, the effect expands to a 5x5 area around the target but costs double the SP and triple the catalyst. Catalyst: 1x Canary Point.
[Lv 1]: Wind Damage +2%, Duration: 75 sec,
[Lv 2]: Wind Damage +3%, Duration: 140 sec,
[Lv 3]: Wind Damage +4%, Duration: 225 sec,
[Lv 4]: Wind Damage +5%, Duration: 300 sec,
[Lv 5]: Wind Damage +5%, Duration: 300 sec`,
  img: no_img_namespaceObject
}, {
  id: "seismicWeapon",
  level: 0,
  dependencies: [{
    id: "earthSpike",
    minLevel: 3
  }, {
    id: "advancedBook",
    minLevel: 3
  }],
  dependent: [{
    id: "sandstorm"
  }, {
    id: "scrollbending"
  }],
  element: null,
  skillName: "Seismic Weapon",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Ally
Range: 9
Requirement: Earth Spike Lv: 3, Advanced Book Lv: 3
Description: Temporarily imbues a single targets weapon with Earth property, increasing both physical and magical earth damage. Each use consumes 1 Lime Green point. At [Lv 5], the effect expands to a [5*5] area around the target but costs double the SP and triple the catalyst. Catalyst: 1x Verdant Point.
[Lv 1]: Earth Damage +2%, Duration: 75 sec,
[Lv 2]: Earth Damage +3%, Duration: 140 sec,
[Lv 3]: Earth Damage +4%, Duration: 225 sec,
[Lv 4]: Earth Damage +5%, Duration: 300 sec,
[Lv 5]: Earth Damage +5%, Duration: 300 sec`,
  img: no_img_namespaceObject
}, {
  id: "flameWeapon",
  level: 0,
  dependencies: [{
    id: "fireBolt",
    minLevel: 3
  }, {
    id: "advancedBook",
    minLevel: 3
  }],
  dependent: [{
    id: "volcano"
  }, {
    id: "scrollbending"
  }],
  element: null,
  skillName: "Flame Weapon",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Ally
Range: 9
Requirement: Fire Bolt Lv: 3, Advanced Book Lv: 3
Description: Temporarily imbues a single targets weapon with Fire property, increasing both physical and magical fire damage. At Lv 5, the effect expands to a 5x5 area around the target but costs double the SP and triple the catalyst. Catalyst: 1x Scarlet Point.
[Lv 1]: Fire Damage +2%, Duration: 75 sec,
[Lv 2]: Fire Damage +3%, Duration: 140 sec,
[Lv 3]: Fire Damage +4%, Duration: 225 sec,
[Lv 4]: Fire Damage +5%, Duration: 300 sec,
[Lv 5]: Fire Damage +5%, Duration: 300 sec`,
  img: no_img_namespaceObject
}, {
  id: "deluge",
  level: 0,
  dependencies: [{
    id: "frostWeapon",
    minLevel: 2
  }],
  dependent: [{
    id: "landProtector"
  }, {
    id: "psychicWave"
  }],
  element: null,
  skillName: "Deluge",
  maxLevel: 3,
  inform: `Max Lv: 3
Skill Form: Active
Type: Magical
Target: Ground
Range: 2
Requirement: Frost Weapon Lv: 2
Description: Creates a Deluge Terrain in a 7x7 cell area, amplifying all Water property attacks and increasing the MaxHP of all allies within the area. This terrain also doubles the duration of Blinding Mist and acts as water for skills like Aqua Benedicta and Water Ball. Casting other elemental terrains while this buff is active does not incur a Catalyst cost. Every 3 seconds within the Deluge terrain: Water property entities regenerate 1% of their HP. Fire property entities take 1% of their HP as magical damage, which can be reduced by any magic damage reduction.. Catalyst: 3x Indigo Point.
[Lv 1]: Water Damage +10%, MaxHP +5%, Duration: 1 min.
[Lv 2]: Water Damage +15%, MaxHP +10%, Duration: 2 min.
[Lv 3]: Water Damage +20%, MaxHP +15%, Duration: 3 min.`,
  img: no_img_namespaceObject
}, {
  id: "whirlwind",
  level: 0,
  dependencies: [{
    id: "lightningWeapon",
    minLevel: 2
  }],
  dependent: [{
    id: "landProtector"
  }, {
    id: "psychicWave"
  }],
  element: null,
  skillName: "Whirlwind",
  maxLevel: 3,
  inform: `Max Lv: 3
Skill Form: Active
Type: Magical
Target: Ground
Range: 2
Requirement: Lightning Weapon Lv: 2
Description: Creates a Whirlwind Terrain in a 7x7 cell area, enhancing all Wind property attacks and increasing the Flee Rate of allies within the area. Additionally, this terrain extends the duration of Fire Wall by 50%. Casting other elemental terrains while this buff is active does not incur a Catalyst cost. Every 3 seconds within the Whirlwind terrain: Wind property entities regenerate 1% of their HP. Water property entities take 1% of their HP as magical damage, which can be reduced by any magic damage reduction. Catalyst: 3x Canary Point.
[Lv 1]: Wind Damage +10%, Flee +10, Duration: 1 min,
[Lv 2]: Wind Damage +15%, Flee +20, Duration: 2 min,
[Lv 3]: Wind Damage +20%, Flee +30, Duration: 3 min`,
  img: no_img_namespaceObject
}, {
  id: "sandstorm",
  level: 0,
  dependencies: [{
    id: "seismicWeapon",
    minLevel: 2
  }],
  dependent: [{
    id: "landProtector"
  }, {
    id: "psychicWave"
  }],
  element: null,
  skillName: "Sandstorm",
  maxLevel: 3,
  inform: `Max Lv: 3
Skill Form: Active
Type: Magical
Target: Ground
Range: 2
Requirement: Seismic Weapon Lv: 2
Description: Creates a Sandstorm Terrain in a 7x7 cell area, amplifying all Wind property attacks and increasing the Def of allies within the area. This terrain also prevents the use of any form of invisibility. Casting other elemental terrains while this buff is active does not incur a Catalyst cost. Every 3 seconds within the Sandstorm terrain: Earth property entities regenerate 1% of their HP. Wind property entities take 1% of their HP as magical damage, which can be reduced by any magic damage reduction. Catalyst: 3x Verdant Point.
[Lv 1]: Earth Damage +10%, Def +20, Duration: 1 min,
[Lv 2]: Earth Damage +15%, Def +30, Duration: 2 min,
[Lv 3]: Earth Damage +20%, Def +40, Duration: 3 min`,
  img: no_img_namespaceObject
}, {
  id: "volcano",
  level: 0,
  dependencies: [{
    id: "flameWeapon",
    minLevel: 2
  }],
  dependent: [{
    id: "landProtector"
  }, {
    id: "psychicWave"
  }],
  element: null,
  skillName: "Volcano",
  maxLevel: 3,
  inform: `Max Lv: 3
Skill Form: Active
Type: Magical
Target: Ground
Range: 2
Requirement: Flame Weapon Lv: 2
Description: Transforms a 7x7 area into a Volcano Terrain, enhancing all Fire property attacks and boosting the Atk/MAtk of all allies within the area. This terrain prevents the placement of Ice Wall and interacts with Fire Ball, acting as an additional source of fire. Casting other elemental terrains while this buff is active does not incur a Catalyst cost. Every 3 seconds within the Volcano terrain: Fire property entities regenerate 1% of their HP. Earth property entities take 1% of their HP as magical damage, which can be reduced by any magic damage reduction. Catalyst: 3x Scarlet Point.
[Lv 1]: Fire Damage +10%, Atk/MAtk +10, Duration: 1 min,
[Lv 2]: Fire Damage +15%, Atk/MAtk +20, Duration: 2 min,
[Lv 3]: Fire Damage +20%, Atk/MAtk +30, Duration: 3 min`,
  img: no_img_namespaceObject
}, {
  id: "castCancel",
  level: 0,
  dependencies: [{
    id: "advancedBook",
    minLevel: 2
  }],
  dependent: [{
    id: "freeCast"
  }, {
    id: "soulBurn"
  }],
  element: null,
  skillName: "Cast Cancel",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Self
Requirement: Advanced Book Lv: 2
Description: Only usable while casting a magic spell. Immediately cancels a spell, allowing the caster to take another action without any delay. The higher the skill level, the lower the SP consumption of the casting skill.
[Lv 1]: SP Consumption: 90%,
[Lv 2]: SP Consumption: 70%,
[Lv 3]: SP Consumption: 50%,
[Lv 4]: SP Consumption: 30%,
[Lv 5]: SP Consumption: 10%`,
  img: no_img_namespaceObject
}, {
  id: "dispell",
  level: 0,
  dependencies: [{
    id: "spellBreaker",
    minLevel: 3
  }],
  dependent: [{
    id: "abracadabra"
  }, {
    id: "soulBurn"
  }],
  element: null,
  skillName: "Dispell",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Enemy
Range: 9
Requirement: Spell Breaker Lv: 3
Description: Casting Dispell has a chance of canceling all magic effects that have been cast on a target. Success chance is determined by the target's magic defense. If you use level 5, it will succeed 100% regardless. Catalyst: 1x Yellow Gemstone.
[Lv 1]: Success Chance: 60%,
[Lv 2]: Success Chance: 70%,
[Lv 3]: Success Chance: 80%,
[Lv 4]: Success Chance: 90%,
[Lv 5]: Success Chance: 100%`,
  img: no_img_namespaceObject
}, {
  id: "magicRod",
  level: 0,
  dependencies: [{
    id: "advancedBook",
    minLevel: 4
  }],
  dependent: [{
    id: "spellBreaker"
  }, {
    id: "indulge"
  }, {
    id: "soulBurn"
  }, {
    id: "soulChange"
  }],
  element: null,
  skillName: "Magic Rod",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Self
Requirement: Advanced Book Lv: 4
Description: Upon being attacked with a skill, using Magic Rod in the correct moment has a chance of absorbing the SP that the enemy has used for the skill to the caster instead of damage. Countering Spell Breaker with Magic Rod will reduce the target's SP by 20% when it is successful.
[Lv 1]: Timing: 0.4 seconds, SP Absorption: 20%,
[Lv 2]: Timing: 0.6 seconds, SP Absorption: 40%,
[Lv 3]: Timing: 0.8 seconds, SP Absorption: 60%,
[Lv 4]: Timing: 1.0 second, SP Absorption: 80%,
[Lv 5]: Timing: 1.2 seconds, SP Absorption: 100%`,
  img: no_img_namespaceObject
}, {
  id: "spellBreaker",
  level: 0,
  dependencies: [{
    id: "magicRod",
    minLevel: 1
  }],
  dependent: [{
    id: "soulChange"
  }, {
    id: "dispell"
  }],
  element: null,
  skillName: "Spell Breaker",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Enemy
Range: 9
Requirement: Magic Rod Lv: 1
Description: Interrupts a magic spell cast by an enemy and receive the SP the enemy used to cast that spell, as well as reduce 2% of the enemy's HP. At skill 5 and above, half of this HP damage is absorbed by the caster. HP cannot be drained from Boss monsters and Guardians, but this skill does have 10% chance of interrupting Boss monster spells.
[Lv 1]: SP Absorption: 0%,
[Lv 2]: SP Absorption: 25%,
[Lv 3]: SP Absorption: 50%,
[Lv 4]: SP Absorption: 75%,
[Lv 5]: SP Absorption: 100%`,
  img: no_img_namespaceObject
}, {
  id: "freeCast",
  level: 0,
  dependencies: [{
    id: "castCancel",
    minLevel: 1
  }],
  dependent: [{
    id: "doubleCasting"
  }, {
    id: "spellwish"
  }],
  element: null,
  skillName: "Free Cast",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Passive
Type: Magical
Requirement: Cast Cancel Lv: 1
Description: Enables moving and attacking during the casting of magic spells.
[Lv 1]: Movement Speed: 30%, , Attack Speed: 55%,
[Lv 2]: Movement Speed: 35%, , Attack Speed: 60%,
[Lv 3]: Movement Speed: 40%, , Attack Speed: 65%,
[Lv 4]: Movement Speed: 45%, , Attack Speed: 70%,
[Lv 5]: Movement Speed: 50%, , Attack Speed: 75%,
[Lv 6]: Movement Speed: 55%, , Attack Speed: 80%,
[Lv 7]: Movement Speed: 60%, , Attack Speed: 85%,
[Lv 8]: Movement Speed: 65%, , Attack Speed: 90%,
[Lv 9]: Movement Speed: 70%, , Attack Speed: 95%,
[Lv 10]: Movement Speed: 75%, , Attack Speed: 100%`,
  img: no_img_namespaceObject
}, {
  id: "spellwish",
  level: 0,
  dependencies: [{
    id: "freeCast",
    minLevel: 4
  }],
  dependent: [],
  element: null,
  skillName: "Spellwish",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Self
Requirement: Free Cast Lv: 4
Description: Grants the ability to automatically cast a spell when performing basic attacks. Auto-cast spells consume only 2/3 of their SP cost. Fire Bolt, Fire Ball, Cold Bolt, Frost Diver, Lightning Bolt, Thunderstorm, Earth Spike, Soul Strike, and Napalm Beat can be auto-cast if learned. Auto-cast level equals Learned Level x Base Level%.
[Lv 1]: Chance of Autocast: 3%,
[Lv 2]: Chance of Autocast: 6%,
[Lv 3]: Chance of Autocast: 9%,
[Lv 4]: Chance of Autocast: 12%,
[Lv 5]: Chance of Autocast: 15%,
[Lv 6]: Chance of Autocast: 18%,
[Lv 7]: Chance of Autocast: 21%,
[Lv 8]: Chance of Autocast: 24%,
[Lv 9]: Chance of Autocast: 27%,
[Lv 10]: Chance of Autocast: 30%`,
  img: no_img_namespaceObject
}, {
  id: "scrollbending",
  level: 0,
  dependencies: [{
    id: "flameWeapon",
    minLevel: 4
  }, {
    id: "frostWeapon",
    minLevel: 4
  }, {
    id: "lightningWeapon",
    minLevel: 4
  }, {
    id: "seismicWeapon",
    minLevel: 4
  }],
  dependent: [],
  element: null,
  skillName: "Scrollbending",
  maxLevel: 5,
  inform: `Max Lv: 1 (or 5)
Skill Form: Active
Type: Misc
Target: Self
Requirement: Flame Weapon Lv: 4, Frost Weapon Lv: 4, Lightning Weapon Lv: 4, Seismic Weapon Lv: 4
Description: Uses scrollbending techniques to bind a chosen element to a 1 blank scroll. The quantity of scrolls crafted receives an additional bonus based on Base Level, Job Level, and all attributes, with LUK being the most influential. The relevance of attributes increases exponentially as they grow. The skill level affects the efficiency of the additional production. Regardless of the skill level, the additional production varies. Scrollbending Creation Guide ,
[Lv 1]: No Additional Bonus,
[Lv 2]: Additional Efficiency -75%,
[Lv 3]: Additional Efficiency -50%,
[Lv 4]: Additional Efficiency -25%,
[Lv 5]: Full Efficiency`,
  img: no_img_namespaceObject
}, {
  id: "landProtector",
  level: 0,
  dependencies: [{
    id: "volcano",
    minLevel: 2
  }, {
    id: "deluge",
    minLevel: 2
  }, {
    id: "sandstorm",
    minLevel: 2
  }, {
    id: "whirlwind",
    minLevel: 2
  }],
  dependent: [],
  element: null,
  skillName: "Land Protector",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Ground
Range: 2
Requirement: Volcano Lv: 2, Deluge Lv: 2, Sandstorm Lv: 2, Whirlwind Lv: 2
Description: Creates a protective area on the targeted location that nullifies and blocks certain ground-targeting skills. Sages can cancel each other's instances of this skill. This skill cannot be cast on cells currently affected by any floor skill or ground-targeted skill. Catalyst: 1x Yellow Gemstone.
[Lv 1]: Duration: 1 min, Effective AoE: 3x3,
[Lv 2]: Duration: 2 min, Effective AoE: 5x5,
[Lv 3]: Duration: 3 min, Effective AoE: 7x7,
[Lv 4]: Duration: 4 min, Effective AoE: 9x9,
[Lv 5]: Duration: 5 min, Effective AoE: 11x11`,
  img: no_img_namespaceObject
}, {
  id: "psychicWave",
  level: 0,
  dependencies: [{
    id: "volcano",
    minLevel: 2
  }, {
    id: "deluge",
    minLevel: 2
  }, {
    id: "sandstorm",
    minLevel: 2
  }, {
    id: "whirlwind",
    minLevel: 2
  }],
  dependent: [],
  element: null,
  skillName: "Psychic Wave",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Ground
Range: 9
Requirement: Volcano Lv: 2, Deluge Lv: 2, Sandstorm Lv: 2, Whirlwind Lv: 2
Description: Fires a wave of psychic energy at targets in an area to deal multiple hits of Neutral elemental magic. The element of this skill can be changed by applying Frost Weapon, Lightning Weapon, Seismic Weapon, or Flame Weapon. Damage additionally increases according to the skill level and caster's Base Level.
[Lv 1]: MAtk 120% x Hits,
[Lv 2]: MAtk 130% x Hits,
[Lv 3]: MAtk 140% x Hits,
[Lv 4]: MAtk 150% x Hits,
[Lv 5]: MAtk 160% x Hits`,
  img: no_img_namespaceObject
}];

/*  author Chalykh Maksim 
  # data 25.01.2025 
  # email: chalyh.maksim.88@mail.ru */
;// ./src/js/listSkills/MageProfessor.js
/*  author Chalykh Maksim 
  # data 10.02.2025 
  # email: chalyh.maksim.88@mail.ru */

 // заглушка

// список скилов Professor
const skillsProfessort = [{
  id: "abracadabra",
  level: 0,
  dependencies: [{
    id: "dispell",
    minLevel: 1
  }],
  dependent: [],
  element: null,
  skillName: "Abracadabra",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Self
Requirement: Dispell Lv: 1
Description: Unleash a touch of magic mayhem. When you use an offensive skill after casting Abracadabra, a random spell from offensive arsenal is unleashed. If you use a support skill, a random spell from your support arsenal is unleashed. Buffs targeting only yourself will activate on self-casts or self-targeted skills. While Abracadabra is active, adds 0.5 seconds to Fixed Cast Time for skills without it, applies an extra SP cost to other abilities and increases Variable Cast Time by 10%. Catalyst: 2x Yellow Gemstone.
[Lv 1]: Spells Lv: 1, Number of Spells: 1,
[Lv 2]: Spells Lv: 2, Number of Spells: 1,
[Lv 3]: Spells Lv: 3, Number of Spells: 2,
[Lv 4]: Spells Lv: 4, Number of Spells: 2,
[Lv 5]: Spells Lv: 5, Number of Spells: 3,
[Lv 6]: Spells Lv: 6, Number of Spells: 3,
[Lv 7]: Spells Lv: 7, Number of Spells: 4,
[Lv 8]: Spells Lv: 8, Number of Spells: 4,
[Lv 9]: Spells Lv: 9, Number of Spells: 5,
[Lv 10]: Spells Lv: 10, Number of Spells: 5`,
  img: no_img_namespaceObject
}, {
  id: "doubleCasting",
  level: 0,
  dependencies: [{
    id: "freeCast",
    minLevel: 5
  }],
  dependent: [],
  element: null,
  skillName: "Double Casting",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Self
Requirement: Free Cast Lv: 5
Description: Provides a chance to repeat any Elemental skill cast for 90 seconds. The skills eligible for this effect are Cold Bolt, Frost Driver, Fire Bolt, Fire Ball, Fire Wall, Lightning Bolt, Thunder Storm, Soul Strike, Napalm Beat, and Earth Spike.
[Lv 1]: Chance to Repeat: 40%,
[Lv 2]: Chance to Repeat: 50%,
[Lv 3]: Chance to Repeat: 60%,
[Lv 4]: Chance to Repeat: 70%,
[Lv 5]: Chance to Repeat: 80%`,
  img: no_img_namespaceObject
}, {
  id: "fogWall",
  level: 0,
  dependencies: [],
  dependent: [],
  element: null,
  skillName: "Fog Wall",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Ground
Range: 9
Requirement: None
Description: Creates a wall of fog in a 5x3 cell area that will cause the Blind status on players and monsters. All long ranged attacks targeted at players within the skill's range will have a greater chance of missing and have apply to monsters in normal fields, but will also apply to players in PvP zones.
[Lv 1]: Max Fog Walls 1, Duration: 14 seconds,
[Lv 2]: Max Fog Walls 2, Duration: 18 seconds,
[Lv 3]: Max Fog Walls 3, Duration: 22 seconds,
[Lv 4]: Max Fog Walls 4, Duration: 26 seconds,
[Lv 5]: Max Fog Walls 5, Duration: 30 seconds`,
  img: no_img_namespaceObject
}, {
  id: "indulge",
  level: 0,
  dependencies: [{
    id: "magicRod",
    minLevel: 1
  }, {
    id: "increaseSPRecovery",
    minLevel: 1
  }],
  dependent: [],
  element: null,
  skillName: "Indulge",
  maxLevel: 10,
  inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Self
Requirement: Increase SP Recovery Lv: 1, Magic Rod Lv: 1
Description: Consumes an amount of HP equal to 10% of MaxHP to restore an SP amount determined by the skill's level.
[Lv 1]: SP +10%,
[Lv 2]: SP +20%,
[Lv 3]: SP +30%,
[Lv 4]: SP +40%,
[Lv 5]: SP +50%`,
  img: no_img_namespaceObject
}, {
  id: "memorize",
  level: 0,
  dependencies: [],
  dependent: [],
  element: null,
  skillName: "Memorize",
  maxLevel: 1,
  inform: `Max Lv: 1
Skill Form: Active
Type: Magical
Target: Self
Requirement: None
Description: Charges for 0.5 sec to gain a stack that reduces After-cast delay, Variable cast time, and Fixed cast time by 50%. Max Stacks: 5`,
  img: no_img_namespaceObject
}, {
  id: "mindBreaker",
  level: 0,
  dependencies: [{
    id: "increaseSPRecovery",
    minLevel: 3
  }, {
    id: "soulBurn",
    minLevel: 2
  }],
  dependent: [],
  element: null,
  skillName: "Mind Breaker",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Misc
Target: Enemy
Range: 9
Requirement: Increase SP Recovery Lv: 3, Soul Burn Lv: 2
Description: Induces mental turmoil in an enemy that will reduce it's MDEF, but will also increases it's MATK. This skill's level affects the success rate.
[Lv 1]: MATK +20%, MDEF -12%,
[Lv 2]: MATK +40%, MDEF -24%,
[Lv 3]: MATK +60%, MDEF -36%,
[Lv 4]: MATK +80%, MDEF -48%,
[Lv 5]: MATK +100%, MDEF -60%`,
  img: no_img_namespaceObject
}, {
  id: "soulBurn",
  level: 0,
  dependencies: [{
    id: "castCancel",
    minLevel: 5
  }, {
    id: "magicRod",
    minLevel: 3
  }, {
    id: "dispell",
    minLevel: 3
  }],
  dependent: [{
    id: "mindBreaker"
  }],
  element: null,
  skillName: "Soul Burn",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Enemy
Range: 10
Requirement: Cast Cancel Lv: 5, Magic Rod Lv: 3, Dispell Lv: 3
Description: Casts a spell that has a chance to burn the targets SP. The amount of SP burned is based on the users maximum SP and skill level. Any excess SP burned is converted into magical neutral property damage to the targets health. Against Monsters: 100% success rate. Against Players: 70% success rate. If the spell fails, the caster receives the excess damage. In GvG/PvP maps, the cooldown of this skill is increased by 10 times.
[Lv 1]: 20% of user Max SP is Burned in Enemy current SP, Excess SP damage: x1,
[Lv 2]: 40% of user Max SP is Burned in Enemy current SP, Excess SP damage: x2,
[Lv 3]: 60% of user Max SP is Burned in Enemy current SP, Excess SP damage: x3,
[Lv 4]: 80% of user Max SP is Burned in Enemy current SP, Excess SP damage: x4,
[Lv 5]: 100% of user Max SP is Burned in Enemy current SP, Excess SP damage: x5`,
  img: no_img_namespaceObject
}, {
  id: "soulChange",
  level: 0,
  dependencies: [{
    id: "magicRod",
    minLevel: 3
  }, {
    id: "spellBreaker",
    minLevel: 2
  }],
  dependent: [],
  element: null,
  skillName: "Soul Change",
  maxLevel: 1,
  inform: `Max Lv: 1
Skill Form: Active
Type: Misc
Target: Enemy
Range: 9
Requirement: Magic Rod Lv: 3, Spell Breaker Lv: 2
Description: Exchanges caster's remaining SP with target's remaining SP. The SP that the caster receives cannot exceed the caster's MaxSP limit.`,
  img: no_img_namespaceObject
}, {
  id: "spiderWeb",
  level: 0,
  dependencies: [],
  dependent: [],
  element: null,
  skillName: "Spider Web",
  maxLevel: 1,
  inform: `Max Lv: 1
Skill Form: Active
Type: Magical
Target: Enemy
Range: 7
Requirement: None
Description: Shoots a spider web that will bind and immobilize a target and decrease it's FLEE rate by half for 8 seconds. Fire, Earth, Wind and Water elemental attacks will cause 75% more damage on Fiber Locked targets and cancel the Fiber Locked status. A maximum of 5 Spider Webs can be shot at once. Catalyst: 1x Cobweb.`,
  img: no_img_namespaceObject
}];

/*  author Chalykh Maksim 
# data 10.02.2025 
# email: chalyh.maksim.88@mail.ru */
;// ./src/js/listSkills/Merchant.js
/*  author Chalykh Maksim 
  # data 10.02.2025 
  # email: chalyh.maksim.88@mail.ru */

 // заглушка

// список скилов Merchant
const skillsMerchant = [{
  id: "axeMastery",
  level: 0,
  dependencies: [],
  dependent: [{
    id: "adrenalineRush"
  }],
  element: null,
  skillName: "Axe Mastery",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Passive
Type: Physical
Requirement: None
Description: Increase attack with One Handed or Two Handed Axes Weapons. Second Class The benefits of this skill are improved upon reaching 2nd class. When [Lv 10], it increases damage on All Size in 6%. Attack bonus granted by this skill is of the Equipment type.
[Lv 1]: One Handed Atk +2, Two Handed Atk +3, 2nd Class Additional Atk +1,
[Lv 2]: One Handed Atk +4, Two Handed Atk +6, 2nd Class Additional Atk +2,
[Lv 3]: One Handed Atk +6, Two Handed Atk +9, 2nd Class Additional Atk +3,
[Lv 4]: One Handed Atk +8, Two Handed Atk +12, 2nd Class Additional Atk +4,
[Lv 5]: One Handed Atk +10, Two Handed Atk +15, 2nd Class Additional Atk +5,
[Lv 6]: One Handed Atk +12, Two Handed Atk +18, 2nd Class Additional Atk +6,
[Lv 7]:One Handed Atk +14, Two Handed Atk +21, 2nd Class Additional Atk +7,
[Lv 8]: One Handed Atk +16, Two Handed Atk +24, 2nd Class Additional Atk +8,
[Lv 9]: One Handed Atk +18, Two Handed Atk +27, 2nd Class Additional Atk +9,
[Lv 10]: One Handed Atk +20, Two Handed Atk +30, 2nd Class Additional Atk +10`,
  img: no_img_namespaceObject
}, {
  id: "mammonite",
  level: 0,
  dependencies: [],
  dependent: [],
  element: null,
  skillName: "Mammonite",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
Range: 1
Requirement: None
Description: Harness the power of greed to deliver a devastating blow to a single target, dealing physical damage. At skill level 6 or higher has a chance to Stun. Consumes 2x Zeny Pouch at Lvs. 6 ~ 10.
[Lv 1]: Atk 150%,
[Lv 2]: Atk 200%,
[Lv 3]: Atk 250%,
[Lv 4]: Atk 300%,
[Lv 5]: Atk 350%,
[Lv 6]: Atk 400%, Stun chance 4%,
[Lv 7]: Atk 450%, Stun chance 8%,
[Lv 8]: Atk 500%, Stun chance 12%,
[Lv 9]: Atk 550%, Stun chance 16%,
[Lv 10]: Atk 600%, Stun chance 20%`,
  img: no_img_namespaceObject
}, {
  id: "pushcart",
  level: 0,
  dependencies: [],
  dependent: [{
    id: "cartRevolution"
  }, {
    id: "cartTwister"
  }, {
    id: "discount"
  }, {
    id: "overcharge"
  }, {
    id: "cartBoost"
  }],
  element: null,
  skillName: "Pushcart",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Passive
Type: Misc
Requirement: None
Description: Enables to rent a Pushcart and Increases maximum player Weight Limit. Pushcart Assembler.
[Lv 1]: Maximum player Weight +200,
[Lv 2]: Maximum player Weight +400,
[Lv 3]: Maximum player Weight +600,
[Lv 4]: Maximum player Weight +800,
[Lv 5]: Maximum player Weight +1000,
[Lv 6]: Maximum player Weight +1200,
[Lv 7]: Maximum player Weight +1400,
[Lv 8]: Maximum player Weight +1600,
[Lv 9]: Maximum player Weight +1800,
[Lv 10]: Maximum player Weight +2000`,
  img: no_img_namespaceObject
}, {
  id: "cartRevolution",
  level: 0,
  dependencies: [{
    id: "pushcart",
    minLevel: 1
  }],
  dependent: [{
    id: "cartTwister"
  }, {
    id: "cartTermination"
  }],
  element: null,
  skillName: "Cart Revolution",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
Range: 1
Requirement: Pushcart Lv: 1
Description: Slam your pushcart into a single target, dealing physical damage and Knockback them 3 cells. Cart Weight and the Number of different Items in it affect the base skill ratio, because nothing says power like a well-packed pushcart.
[Lv 1]: Atk 100% + 1% for every 200 of Cart Weight,
[Lv 2]: Atk 100% + 2% for every 200 of Cart Weight,
[Lv 3]: Atk 100% + 3% for every 200 of Cart Weight,
[Lv 4]: Atk 100% + 4% for every 200 of Cart Weight,
[Lv 5]: Atk 100% + 5% for every 200 of Cart Weight,
[Lv 6]: Atk 100% + 6% for every 200 of Cart Weight,
[Lv 7]: Atk 100% + 7% for every 200 of Cart Weight,
[Lv 8]: Atk 100% + 8% for every 200 of Cart Weight,
[Lv 9]: Atk 100% + 9% for every 200 of Cart Weight,
[Lv 10]: Atk 100% + 10% for every 200 of Cart Weight`,
  img: no_img_namespaceObject
}, {
  id: "cartTwister",
  level: 0,
  dependencies: [{
    id: "cartRevolution",
    minLevel: 5
  }],
  dependent: [{
    id: "cartTermination"
  }],
  element: null,
  skillName: "Cart Twister",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Self
Requirement: Cart Revolution Lv: 5
Description: Grab your cart and spin it like a whirlwind, dealing melee physical damage to all enemies within a 5x5 cell area around you. Cart Weight and the Number of different Items in it affect the base skill ratio. Every 30 VIT increases the SkillRatio by 1% per Base Level.
[Lv 1]: Atk 100% + 1% for every 400 of Cart Weight,
[Lv 2]: Atk 100% + 2% for every 400 of Cart Weight,
[Lv 3]: Atk 100% + 3% for every 400 of Cart Weight,
[Lv 4]: Atk 100% + 4% for every 400 of Cart Weight,
[Lv 5]: Atk 100% + 5% for every 400 of Cart Weight,
[Lv 6]: Atk 100% + 6% for every 400 of Cart Weight,
[Lv 7]: Atk 100% + 7% for every 400 of Cart Weight,
[Lv 8]: Atk 100% + 8% for every 400 of Cart Weight,
[Lv 9]: Atk 100% + 9% for every 400 of Cart Weight,
[Lv 10]: Atk 100% + 10% for every 400 of Cart Weight`,
  img: no_img_namespaceObject
}, {
  id: "discount",
  level: 0,
  dependencies: [{
    id: "pushcart",
    minLevel: 3
  }],
  dependent: [{
    id: "overcharge"
  }],
  element: null,
  skillName: "Discount",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Self
Requirement: Pushcart Lv: 3
Description: Activate this skill to receive a buff that randomly slashes the SP Cost of your abilities. The reduction varies based on the skill level, giving you a chance to save a small, medium, or large amount of SP. However, this cannot be used at the same time as Overcharge.
[Lv 1]: SP reduction: 1%, 2%, or 5%,
[Lv 2]: SP reduction: 2%, 4%, or 10%,
[Lv 3]: SP reduction: 3%, 6%, or 15%,
[Lv 4]: SP reduction: 4%, 8%, or 20%,
[Lv 5]: SP reduction: 5%, 10%, or 25%,
[Lv 6]: SP reduction: 6%, 12%, or 30%,
[Lv 7]: SP reduction: 7%, 14%, or 35%,
[Lv 8]: SP reduction: 8%, 16%, or 40%,
[Lv 9]: SP reduction: 9%, 18%, or 45%,
[Lv 10]: SP reduction: 10%, 20%, or 50%`,
  img: no_img_namespaceObject
}, {
  id: "overcharge",
  level: 0,
  dependencies: [{
    id: "discount",
    minLevel: 3
  }],
  dependent: [],
  element: null,
  skillName: "Overcharge",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Self
Requirement: Discount Lv: 3
Description: Activate this skill to unleash a buff that ramps up the SP Cost of your abilities, but in return, boosts their Status Attack. The increase in SP cost is random, and the Status Attack scales accordingly. However, this cannot be used at the same time as Discount.
[Lv 1]: SP increase cost: 1%, 2%, or 5%, Status Attack: +1, +2, or +5,
[Lv 2]: SP increase cost: 2%, 4%, or 10%, Status Attack: +2, +4, or +10,
[Lv 3]: SP increase cost: 3%, 6%, or 15%, Status Attack: +3, +6, or +15,
[Lv 4]: SP increase cost: 4%, 8%, or 20%, Status Attack: +4, +8, or +20,
[Lv 5]: SP increase cost: 5%, 10%, or 25%, Status Attack: +5, +10, or +25,
[Lv 6]: SP increase cost: 6%, 12%, or 30%, Status Attack: +6, +12, or +30,
[Lv 7]: SP increase cost: 7%, 14%, or 35%, Status Attack: +7, +14, or +35,
[Lv 8]: SP increase cost: 8%, 16%, or 40%, Status Attack: +8, +16, or +40,
[Lv 9]: SP increase cost: 9%, 18%, or 45%, Status Attack: +9, +18, or +45,
[Lv 10]: SP increase cost: 10%, 20%, or 50%, Status Attack: +10, +20, or +50,`,
  img: no_img_namespaceObject
}];
;// ./src/js/listSkills/MerchantAlchemist.js
/*  author Chalykh Maksim 
  # data 10.02.2025 
  # email: chalyh.maksim.88@mail.ru */

 // заглушка

// список скилов Alchemist
const skillsAlchemist = [{
  id: "throwingPotionsTechniques",
  level: 0,
  dependencies: [],
  dependent: [{
    id: "bioCannibalize"
  }, {
    id: "demonstration"
  }, {
    id: "marineSphereBomb"
  }],
  element: null,
  skillName: "Throwing Potions Techniques",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Passive
Type: Physical
Requirement: None
Description: Master the art of potion-throwing with this skill, enhancing both the efficiency and impact of your potion and bottle-based abilities. This technique has a chance to recover empty bottles or empty potion bottles used in your throws, while boosting the healing, damage, and duration of a variety of related skills. [Demonstration]: Adds +1% damage per Learned Level for every 10 Base Levels.
[Acid Terror]: Adds +1% damage per Learned Level for each Base Level.
[Marine Sphere Bomb]: Increases Marine Sphere Base HP by +1 per Learned Level.
[Potion Pitcher]: Increases Healing Value by 5% per Learned Level.
[Potion Spreader]: Increases Healing Value by 5% per Learned Level.
[Bio Cannibalize]: Increases Plant Status by 1.5% per Learned Level. [Deplant]: Increases chance of success by 1% per Learned Level.
[Briar Vines]: Adds 10% of user MATK to damage per Learned Level.
[Hyper Fertilize]: Increases Fertilization effect duration by 6 seconds per Learned Level.`,
  img: no_img_namespaceObject
}, {
  id: "demonstration",
  level: 0,
  dependencies: [{
    id: "throwingPotionsTechniques",
    minLevel: 3
  }],
  dependent: [{
    id: "acidDemonstration"
  }, {
    id: "acidTerror"
  }],
  element: null,
  skillName: "Demonstration",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Ground
Range: 9
Requirement: Throwing Potions Techniques Lv: 3
Description: Unleash fiery devastation with a bottle of flammable liquid, hurling it at a target location to inflict Fire property physical damage every half second to all enemies within the area. If the target is affected by [Chemical Corrosion], theres a chance to break their weapon. A maximum of 9 Demonstrations can be active at once. Mini Fire Bottle at Lv.1 ~ 5, Fire Bottle at Lv.6 ~ 10,
[Lv 1]: Atk 120%,
[Lv 2]: Atk 140%,
[Lv 3]: Atk 160%,
[Lv 4]: Atk 180%,
[Lv 5]: Atk 200%,
[Lv 6]: Atk 220%,
[Lv 7]: Atk 240%,
[Lv 8]: Atk 260%,
[Lv 9]: Atk 280%,
[Lv 10]: Atk 300%`,
  img: no_img_namespaceObject
}, {
  id: "acidTerror",
  level: 0,
  dependencies: [{
    id: "demonstration",
    minLevel: 5
  }],
  dependent: [{
    id: "acidDemonstration"
  }, {
    id: "chemicalReaction"
  }],
  element: null,
  skillName: "Acid Terror",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
Range: 9
Requirement: Demonstration Lv: 5
Description: Unleash a bottle of corrosive acid on a single target, causing severe damage and applying the Chemical Corrosion debuff with a chance that scales with the skill level. If the target is already affected by Chemical Corrosion, this skill also has a chance to break their armor. Mini Acid Bottle at Lv.1 ~ 5, Acid Bottle at Lv.6 ~ 10,
[Lv 1]: Atk 100%,
[Lv 2]: Atk 200%,
[Lv 3]: Atk 300%,
[Lv 4]: Atk 400%,
[Lv 5]: Atk 500%,
[Lv 6]: Atk 600%,
[Lv 7]: Atk 700%,
[Lv 8]: Atk 800%,
[Lv 9]: Atk 900%,
[Lv 10]: Atk 1000%`,
  img: no_img_namespaceObject
}, {
  id: "chemicalReaction",
  level: 0,
  dependencies: [{
    id: "acidTerror",
    minLevel: 5
  }],
  dependent: [{
    id: "acidDemonstration"
  }],
  element: null,
  skillName: "Chemical Reaction",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Ground
Range: 9
Requirement: Acid Terror Lv: 5
Description: Unleash explosive versatility with Chemical Reaction, altering the Bomb skills effects by tossing specialized Chemical Bottles into the mix, each providing unique and powerful results.
[Lv 1] Oil Bottle: Bombs Damage is boosted by Strength and base level.
[Lv 2] Explosive Powder: Triggers a massive fiery explosion with fire magic damage, pushing targets 4 cells away. Damage is enhanced by Strength.
[Lv 3] Smoke Powder: Burns plants and creates a dense smoke cloud, reducing physical damage taken by 20% and increasing evasion by 20%. Duration scales with Bombs level.
[Lv 4] Tear Gas: Releases potent tear gas, lowering evasion and accuracy by 40%. Entities lose 3% of their max health every 3 seconds and are forced to use /snif. Duration scales with Bombs level.
[Lv 5] Acid Bottle: Ignites a powerful explosion that spreads acid, transforming the Bombs area into an AoE Acid Terror. Replaces Bomb tiles and casts Acid Demonstration at level 5 or highest learned level.`,
  img: no_img_namespaceObject
}, {
  id: "potionResearch",
  level: 0,
  dependencies: [],
  dependent: [{
    id: "helmChemicalProtection"
  }],
  element: null,
  skillName: "Potion Research",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Passive
Type: Misc
Requirement: None
Description: Boosts the success rate for creating potions and chemicals while also enhancing the effectiveness of healing potions consumed. Your expertise in potion-making not only improves your chances of crafting success but also amplifies the benefits of the potions you use.
[Lv 1]: Rate Bonus: +1%, Potion Effectiveness: +8%,
[Lv 2]: Rate Bonus: +2%, Potion Effectiveness: +11%,
[Lv 3]: Rate Bonus: +3%, Potion Effectiveness: +14%,
[Lv 4]: Rate Bonus: +4%, Potion Effectiveness: +17%,
[Lv 5]: Rate Bonus: +5%, Potion Effectiveness: +20%,
[Lv 6]: Rate Bonus: +6%, Potion Effectiveness: +23%,
[Lv 7]: Rate Bonus: +7%, Potion Effectiveness: +26%,
[Lv 8]: Rate Bonus: +8%, Potion Effectiveness: +29%,
[Lv 9]: Rate Bonus: +9%, Potion Effectiveness: +32%,
[Lv 10]: Rate Bonus: +10%, Potion Effectiveness: +35%`,
  img: no_img_namespaceObject
}, {
  id: "helmChemicalProtection",
  level: 0,
  dependencies: [{
    id: "potionResearch",
    minLevel: 5
  }],
  dependent: [{
    id: "fullChemicalProtection"
  }, {
    id: "shieldChemicalProtection"
  }],
  element: null,
  skillName: "Helm Chemical Protection",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Ally
Range: 1
Requirement: Potion Research Lv: 5
Description: Temporarily protects the equipped headgear of a single target from damage and removal. At levels 1 to 3, the protection is removed upon death, dispel, or Chemical Corrosion without stacking. Mini Glistening Bottle at Lv.1 ~ 5, Glistening Bottle at Lv.6 ~ 10,
[Lv 1]: Duration: 60 seconds,
[Lv 2]: Duration: 120 seconds,
[Lv 3]: Duration: 180 seconds,
[Lv 4]: Duration: 360 seconds,
[Lv 5]: Duration: 720 seconds`,
  img: no_img_namespaceObject
}, {
  id: "shieldChemicalProtection",
  level: 0,
  dependencies: [{
    id: "helmChemicalProtection",
    minLevel: 1
  }],
  dependent: [{
    id: "fullChemicalProtection"
  }, {
    id: "armorChemicalProtection"
  }],
  element: null,
  skillName: "Shield Chemical Protection",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Ally
Range: 1
Requirement: Helm Chemical Protection Lv: 1
Description: Temporarily protects the equipped shield of a single target from damage and removal. At levels 1 to 3, the protection is removed upon death, dispel, or Chemical Corrosion without stacking. Mini Glistening Bottle at Lv.1 ~ 5, Glistening Bottle at Lv.6 ~ 10,
[Lv 1]: Duration: 60 seconds,
[Lv 2]: Duration: 120 seconds,
[Lv 3]: Duration: 180 seconds,
[Lv 4]: Duration: 360 seconds,
[Lv 5]: Duration: 720 seconds`,
  img: no_img_namespaceObject
}, {
  id: "armorChemicalProtection",
  level: 0,
  dependencies: [{
    id: "shieldChemicalProtection",
    minLevel: 1
  }],
  dependent: [{
    id: "fullChemicalProtection"
  }, {
    id: "weaponChemicalProtection"
  }],
  element: null,
  skillName: "Armor Chemical Protection",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Ally
Range: 1
Requirement: Shield Chemical Protection Lv: 1
Description: Temporarily protects the equipped armor of a single target from damage and removal. At levels 1 to 3, the protection is removed upon death, dispel, or Chemical Corrosion without stacking. Mini Glistening Bottle at Lv.1 ~ 5, Glistening Bottle at Lv.6 ~ 10,
[Lv 1]: Duration: 60 seconds,
[Lv 2]: Duration: 120 seconds,
[Lv 3]: Duration: 180 seconds,
[Lv 4]: Duration: 360 seconds,
[Lv 5]: Duration: 720 seconds`,
  img: no_img_namespaceObject
}, {
  id: "weaponChemicalProtection",
  level: 0,
  dependencies: [{
    id: "armorChemicalProtection",
    minLevel: 1
  }],
  dependent: [{
    id: "fullChemicalProtection"
  }],
  element: null,
  skillName: "Weapon Chemical Protection",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Ally
Range: 1
Requirement: Armor Chemical Protection Lv: 1
Description: Temporarily protects the equipped weapon of a single target from damage and removal. At levels 1 to 3, the protection is removed upon death, dispel, or Chemical Corrosion without stacking. Mini Glistening Bottle at Lv.1 ~ 5, Glistening Bottle at Lv.6 ~ 10,
[Lv 1]: Duration: 60 seconds,
[Lv 2]: Duration: 120 seconds,
[Lv 3]: Duration: 180 seconds,
[Lv 4]: Duration: 360 seconds,
[Lv 5]: Duration: 720 seconds`,
  img: no_img_namespaceObject
}, {
  id: "bioCannibalize",
  level: 0,
  dependencies: [{
    id: "throwingPotionsTechniques",
    minLevel: 3
  }],
  dependent: [{
    id: "hyperFertilize"
  }, {
    id: "briarVines"
  }, {
    id: "deplant"
  }],
  element: null,
  skillName: "Bio Cannibalize",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Misc
Target: Ground
Range: 4
Requirement: Throwing Potions Techniques Lv: 3
Description: Summons a living plant at the target location to assist the user in combat for 300 seconds. The created plant depends on skill level, with stronger plants available from levels 5~10. Plant level scales with the user's base and job level, while each plant's traits are influenced by the user's INT, DEX, and Throwing Potions Techniques skill level. Grants 40 Plant Points upon learning, increased by the user's INT. Each plant consumes Plant Points: Mandragora 8, Hydra and Flora 10, Parasite 12, and Geographer 15. Mini Plant Bottle at Lv.1 ~ 5, Plant Bottle at Lv.6 ~ 10,
[Lv 1]: Summons Little Mandragora,
[Lv 2]: Summons Little Hydra,
[Lv 3]: Summons Little Flora,
[Lv 4]: Summons Little Parasite,
[Lv 5]: Summons Little Geographer,
[Lv 6]: Summons Mandragora,
[Lv 7]: Summons Hydra,
[Lv 8]: Summons Flora,
[Lv 9]: Summons Parasite,
[Lv 10]: Summons Geographer`,
  img: no_img_namespaceObject
}, {
  id: "deplant",
  level: 0,
  dependencies: [{
    id: "bioCannibalize",
    minLevel: 5
  }],
  dependent: [{
    id: "hyperFertilize"
  }, {
    id: "briarVines"
  }],
  element: null,
  skillName: "Deplant",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Ground
Range: 2
Requirement: Bio Cannibalize Lv: 5
Description: Removes Summon Flora plants within the selected area and grants a chance to recover the potion used.
[Lv 1]: Chance: 36%, AoE 3x3,
[Lv 2]: Chance: 42%, AoE 5x5,
[Lv 3]: Chance: 48%, AoE 7x7,
[Lv 4]: Chance: 54%, AoE 9x9,
[Lv 5]: Chance: 60%, AoE 11x11`,
  img: no_img_namespaceObject
}, {
  id: "briarVines",
  level: 0,
  dependencies: [{
    id: "deplant",
    minLevel: 3
  }, {
    id: "bioCannibalize",
    minLevel: 7
  }],
  dependent: [{
    id: "hyperFertilize"
  }],
  element: null,
  skillName: "Briar Vines",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Misc
Target: Enemy
Range: 9
Requirement: Deplant Lv: 3, Bio Cannibalize Lv: 7
Description: Throws a vine bomb that immobilizes the target and deals damage over time. The target will attack the vines to break free. Summoned plants by Bio Cannibalize automatically attack the target. Fire-element attacks and skills like Acid Terror and Acid Demonstration will burn the vines, dealing Fire damage and removing effect. Up to 3 Briar Vines can be active simultaneously. Effective on boss monsters, but with half duration. Catalyst: 1x Briar Seed.
[Lv 1]: Duration: 4 seconds,
[Lv 2]: Duration: 8 seconds,
[Lv 3]: Duration: 12 seconds,
[Lv 4]: Duration: 16 seconds,
[Lv 5]: Duration: 20 seconds`,
  img: no_img_namespaceObject
}, {
  id: "pharmacy",
  level: 0,
  dependencies: [],
  dependent: [{
    id: "largeScalePharmacy"
  }],
  element: null,
  skillName: "Pharmacy",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Misc
Target: Self
Requirement: None
Description: Allows the creation of Potions and Chemical Bottles. Requires the appropriate Potion Creation Guide for each specific potion. The success rate is determined by your Base Level and Job Level, reaching up to 100%. The amount produced receives an additional bonus based on all attributes, with LUK being the most influential. The relevance of attributes increases exponentially as they grow. The skill level affects the efficiency of the additional production. Regardless of the skill level, the additional production varies. Pharmacy Creation Guide ,
[Lv 1]: No Additional Bonus,
[Lv 2]: Additional Efficiency -75%,
[Lv 3]: Additional Efficiency -50%,
[Lv 4]: Additional Efficiency -25%,
[Lv 5]: Full Efficiency`,
  img: no_img_namespaceObject
}, {
  id: "largeScalePharmacy",
  level: 0,
  dependencies: [{
    id: "pharmacy",
    minLevel: 5
  }],
  dependent: [],
  element: null,
  skillName: "Large Scale Pharmacy",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Misc
Target: Self
Requirement: Pharmacy Lv: 5
Description: Brew a large batch of potions all at once, with each potions creation rate calculated individually. Requires a Large Scale Guide and 1 Cauldron in your inventory.
[Lv 1]: Requires materials for 20 crafting attempts,
[Lv 2]: Requires materials for 40 crafting attempts,
[Lv 3]: Requires materials for 60 crafting attempts,
[Lv 4]: Requires materials for 80 crafting attempts,
[Lv 5]: Requires materials for 100 crafting attempts`,
  img: no_img_namespaceObject
}, {
  id: "marineSphereBomb",
  level: 0,
  dependencies: [{
    id: "throwingPotionsTechniques",
    minLevel: 3
  }],
  dependent: [{
    id: "potionPitcher"
  }],
  element: null,
  skillName: "Marine Sphere Bomb",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
Range: 7
Requirement: Throwing Potions Techniques Lv: 3
Description: Summons a Marine Sphere that moves toward the target and then uses Self Destruction, dealing damage based on its HP. Marine Sphere's base HP increases with skill level and is further multiplied by the caster's level. Each point of INT or VIT boosts the Marine Sphere's HP by 0.5%. The explosion deals neutral property damage. Mini Marine Sphere Bottle at Lv.1 ~ 5, Marine Sphere Bottle at Lv.6 ~ 10,
[Lv 1]: Sphere Base HP: 4 x Base Level,
[Lv 2]: Sphere Base HP: 8 x Base Level,
[Lv 3]: Sphere Base HP: 12 x Base Level,
[Lv 4]: Sphere Base HP: 16 x Base Level,
[Lv 5]: Sphere Base HP: 20 x Base Level,
[Lv 6]: Sphere Base HP: 24 x Base Level,
[Lv 7]: Sphere Base HP: 28 x Base Level,
[Lv 8]: Sphere Base HP: 32 x Base Level,
[Lv 9]: Sphere Base HP: 36 x Base Level,
[Lv 10]: Sphere Base HP: 40 x Base Level`,
  img: no_img_namespaceObject
}, {
  id: "potionPitcher",
  level: 0,
  dependencies: [{
    id: "marineSphereBomb",
    minLevel: 5
  }],
  dependent: [{
    id: "slingItem"
  }],
  element: null,
  skillName: "Potion Pitcher",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Misc
Target: Ally
Range: 9
Requirement: Marine Sphere Bomb Lv: 5
Description: Throws a potion at a single target, instantly applying a healing effect. Healing is increased by 1% per point of the caster's INT, 1% per point of the target's VIT, 5% per skill level, and 5% per level of Throwing Potions Techniques. Cast delay is halved at levels above 5.
[Lv 1]: Red Potion,
[Lv 2]: Orange Potion,
[Lv 3]: Yellow Potion,
[Lv 4]: Green Potion,
[Lv 5]: White Potion,
[Lv 6]: Condensed Red Potion,
[Lv 7]: Condensed Orange Potion,
[Lv 8]: Condensed Yellow Potion,
[Lv 9]: Condensed Green Potion,
[Lv 10]: Condensed White Potion`,
  img: no_img_namespaceObject
}, {
  id: "slingItem",
  level: 0,
  dependencies: [{
    id: "potionPitcher",
    minLevel: 5
  }],
  dependent: [{
    id: "potionSpreader"
  }],
  element: null,
  skillName: "Sling Item",
  maxLevel: 5,
  inform: `Max Lv: 1 (or 5)
Skill Form: Active
Type: Misc
Target: Ally
Range: 11
Requirement: Potion Pitcher Lv: 5
Description: Throws Fruit Bombs or Throwing Items. Status reduction and damage from fruit bombs are influenced by the user's INT. Chance to apply Status reduction decreases on targets with a higher level than the user. [Fruit Bombs]: , Apple Bomb , Coconut Bomb , Melon Bomb , Pineapple Bomb , Banana Bomb , [Throwing Items]: , Throwing Concentration Potion , Throwing Awakening Potion , Throwing Berserk Potion ,
[Lv 1]: Stats Drop Duration: 10 Seconds, Cooldown: 3 S ,
[Lv 2]: Stats Drop Duration: 20 Seconds, Cooldown: 2.5 S ,
[Lv 3]: Stats Drop Duration: 30 Seconds, Cooldown: 2 S ,
[Lv 4]: Stats Drop Duration: 40 Seconds, Cooldown: 1.5 S ,
[Lv 5]: Stats Drop Duration: 50 Seconds, Cooldown: 1 S`,
  img: no_img_namespaceObject
}];
;// ./src/js/listSkills/MerchantCreator.js
/*  author Chalykh Maksim 
  # data 10.02.2025 
  # email: chalyh.maksim.88@mail.ru */

 // заглушка

// список скилов Creator
const skillsCreator = [{
  id: "acidDemonstration",
  level: 0,
  dependencies: [{
    id: "demonstration",
    minLevel: 10
  }, {
    id: "acidTerror",
    minLevel: 10
  }, {
    id: "chemicalReaction",
    minLevel: 5
  }],
  dependent: [],
  element: null,
  skillName: "Acid Demonstration",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
Range: 9
Requirement: Demonstration Lv: 10, Acid Terror Lv: 10, Chemical Reaction Lv: 5
Description: Toss 1 Bottle Grenade and 1 Acid Bottle at a targeted enemy, unleashing a powerful ranged attack that inflicts physical damage and add a chance to applies [Chemical Corrosion] debuff that scales with skill level. Damage is influenced by the targets VIT, and if the target is already under Chemical Corrosion, there's also a chance to break their armor. Catalyst: 1x Fire Bottle and 1x Acid Bottle.
[Lv 1]: 1 Hit, Chemical Corrosion chance: 1%,
[Lv 2]: 2 Hits, Chemical Corrosion chance: 2%,
[Lv 3]: 3 Hits, Chemical Corrosion chance: 3%,
[Lv 4]: 4 Hits, Chemical Corrosion chance: 4%,
[Lv 5]: 5 Hits, Chemical Corrosion chance: 5%,
[Lv 6]: 6 Hits, Chemical Corrosion chance: 6%,
[Lv 7]: 7 Hits, Chemical Corrosion chance: 7%,
[Lv 8]: 8 Hits, Chemical Corrosion chance: 8%,
[Lv 9]: 9 Hits, Chemical Corrosion chance: 9%,
[Lv 10]: 10 Hits, Chemical Corrosion chance: 10%
New calculation: ATK% = ((1000 + (150 × Skill Lv)) × T.Vit) / 100.`,
  img: no_img_namespaceObject
}, {
  id: "fullChemicalProtection",
  level: 0,
  dependencies: [{
    id: "weaponChemicalProtection",
    minLevel: 1
  }, {
    id: "shieldChemicalProtection",
    minLevel: 1
  }, {
    id: "armorChemicalProtection",
    minLevel: 1
  }, {
    id: "helmChemicalProtection",
    minLevel: 1
  }],
  dependent: [],
  element: null,
  skillName: "Full Chemical Protection",
  maxLevel: 1,
  inform: `Max Lv: 1
Skill Form: Active
Type: Physical
Target: Ally
Range: 1
Requirement: Weapon Chemical Protection Lv: 1, Shield Chemical Protection Lv: 1, Armor Chemical Protection Lv: 1, Helm Chemical Protection Lv: 1
Description: Temporarily protects the target's equipped weapon, shield, armor, and helmet from damage and removal. Protection level and duration depend on the learned level of individual protections. Catalyst: 1x Glistening Bottle.`,
  img: no_img_namespaceObject
}, {
  id: "hyperFertilize",
  level: 0,
  dependencies: [{
    id: "bioCannibalize",
    minLevel: 10
  }, {
    id: "briarVines",
    minLevel: 5
  }, {
    id: "deplant",
    minLevel: 5
  }],
  dependent: [],
  element: null,
  skillName: "Hyper Fertilize",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Ground
Range: 2
Requirement: Bio Cannibalize Lv: 10, Briar Vines Lv: 5, Deplant Lv: 5
Description: Fertilizes the ground to grow a variety of plants that deal Poison magic damage in a 9x9 area over 5 seconds. Plants within the area, including Summoned Floras, receive the Fertilization buff, with its duration increased by 6 seconds per skill level. Caster's INT boosts the damage dealt. Plant-type monsters are immune to this skill's damage. Catalyst: 1x Fertilizer Bag.
[Lv 1]: MAtk 110% x Hits, Enhances plant basic attacks with 120% of the caster's MAtk as Poison damage.
[Lv 2]: MAtk 120% x Hits, Enhances plant basic attacks with 60% of the caster's MAtk as Poison damage.
[Lv 3]: MAtk 130% x Hits, Increases plants Max HP by 30%, DEF by 30%, and MDEF by 30%.
[Lv 4]: MAtk 140% x Hits, Increases plants Max HP by 15%, DEF by 15%, and MDEF by 15%.
[Lv 5]: MAtk 150% x Hits, Plant attacks ignore 60% of targets def and mdef.
[Lv 6]: MAtk 160% x Hits, Plant attacks ignore 30% of targets def and mdef.
[Lv 7]: MAtk 170% x Hits, Extends the duration of the plants by 50% seconds(up to maximum 600 Sec).
[Lv 8]: MAtk 180% x Hits, Extends the duration of the plants by 20% seconds(up to maximum 600 Sec).
[Lv 9]: MAtk 190% x Hits, If a plant receives fatal damage, it heals 30% of its HP.
[Lv 10]: MAtk 200%, x Hits, If a plant receives fatal damage, it heals 15% of its HP.`,
  img: no_img_namespaceObject
}, {
  id: "potionSpreader",
  level: 0,
  dependencies: [{
    id: "slingItem",
    minLevel: 5
  }],
  dependent: [],
  element: null,
  skillName: "Potion Spreader",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Misc
Target: Ground
Range: 3
Requirement: Sling Item Lv: 5
Description: Throws a potion in a 7x7 area, applying its effect instantly to all targets within. Healing is increased by 1% per point of the caster's INT, 1% per point of the target's VIT, 5% per skill level, and 5% per level of Throwing Potions Techniques.
[Lv 1]: Red Thick Potion CD: 0.4 Sec,
[Lv 2]: Red Thick Potion CD: 0.2 Sec,
[Lv 3]: Orange Thick Potion CD: 0.8 Sec,
[Lv 4]: Orange Thick Potion CD: 0.4 Sec,
[Lv 7]: Yellow Thick Potion CD: 1.2 Sec,
[Lv 8]: Yellow Thick Potion CD: 0.6 Sec,
[Lv 5]: Green Thick Potion CD: 1.6 Sec,
[Lv 6]: Green Thick Potion CD: 0.8 Sec,
[Lv 9]: White Thick Potion CD: 2 Sec,
[Lv 10]: White Thick Potion CD: 1 Sec`,
  img: no_img_namespaceObject
}];
;// ./src/js/listSkills/MerchantBlacksmith.js
/*  author Chalykh Maksim 
  # data 10.02.2025 
  # email: chalyh.maksim.88@mail.ru */

 // заглушка

// список скилов Blacksmith
const skillsBlacksmith = [{
  id: "hammerfall",
  level: 0,
  dependencies: [],
  dependent: [{
    id: "meltdown"
  }],
  element: null,
  skillName: "Hammerfall",
  maxLevel: 10,
  inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Ground
Range: 1
Requirement: None
Description: Requires Axes or Maces Class Weapon. Strikes the ground with great force, with a chance to Stun all targets in a 5x5 area.
[Lv 1]: Stun Chance 30%,
[Lv 2]: Stun Chance 40%,
[Lv 3]: Stun Chance 50%,
[Lv 4]: Stun Chance 60%,
[Lv 5]: Stun Chance 70%`,
  img: no_img_namespaceObject
}, {
  id: "metalTempering",
  level: 0,
  dependencies: [],
  dependent: [{
    id: "reforge"
  }],
  element: null,
  skillName: "Metal Tempering",
  maxLevel: 10,
  inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Self
Requirement: None
Description: Become a master of metalworking by smelting Iron Ore into Iron, crafting Steel from it, and refining Rough Elunium and Rough Oridecon into Elunium and Oridecon. The success rate is determined by your Base Level and Job Level, reaching up to 100%. The amount produced receives an additional bonus based on all attributes, with DEX being the most influential. The relevance of attributes increases exponentially as they grow. The skill level affects the efficiency of the additional production. Regardless of the skill level, the additional production varies. Metal Tempering Guide ,
[Lv 1]: No Additional Bonus,
[Lv 2]: Additional Efficiency -75%,
[Lv 3]: Additional Efficiency -50%,
[Lv 4]: Additional Efficiency -25%,
[Lv 5]: Full Efficiency`,
  img: no_img_namespaceObject
}, {
  id: "enchantedStoneCraft",
  level: 0,
  dependencies: [],
  dependent: [{
    id: "reforge"
  }],
  element: null,
  skillName: "Enchanted Stone Craft",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Self
Description: Enable to create [Elemental Stones] by using a Mini Furnace and 10 [Elemental Ores]. The success rate is determined by your Base Level and Job Level, reaching up to 100%. The amount produced receives an additional bonus based on all attributes, with LUK being the most influential. The relevance of attributes increases exponentially as they grow. The skill level affects the efficiency of the additional production. Regardless of the skill level, the additional production varies.
[Lv 1]: No Additional Bonus,
[Lv 2]: Additional Efficiency -75%,
[Lv 3]: Additional Efficiency -50%,
[Lv 4]: Additional Efficiency -25%,
[Lv 5]: Full Efficiency`,
  img: no_img_namespaceObject
}, {
  id: "reforge",
  level: 0,
  dependencies: [{
    id: "enchantedStoneCraft",
    minLevel: 1
  }, {
    id: "metalTempering",
    minLevel: 1
  }],
  dependent: [{
    id: "foundryPowerUp"
  }, {
    id: "bladeWeaponReforging"
  }, {
    id: "bluntWeaponReforging"
  }, {
    id: "pierceWeaponReforging"
  }, {
    id: "magicWeaponReforging"
  }, {
    id: "stringWeaponReforging"
  }, {
    id: "exoticWeaponReforging"
  }, {
    id: "repairWeapon"
  }, {
    id: "skinTempering"
  }],
  element: null,
  skillName: "Reforge",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Self
Requirement: Enchanted Stone Craft Lv: 1, Metal Tempering Lv: 1
Description: Allows the blacksmith to reforge weapons. Reforging lets you apply one enhancement to a weapon from a list of possible upgrades. These enhancements can either boost the weapon's stats, like increasing bonuses, or even change the weapon's behavior. Each weapon can only be reforged once.
[Lv 1]: Reforge Chance +3%,
[Lv 2]: Reforge Chance +6%,
[Lv 3]: Reforge Chance +9%,
[Lv 4]: Reforge Chance +12%,
[Lv 5]: Reforge Chance +15%`,
  img: no_img_namespaceObject
}, {
  id: "bladeWeaponReforging",
  level: 0,
  dependencies: [{
    id: "reforge",
    minLevel: 1
  }],
  dependent: [{
    id: "foundryPowerUp"
  }],
  element: null,
  skillName: "Blade Weapon Reforging",
  maxLevel: 3,
  inform: `Max Lv: 3
Skill Form: Passive
Type: Physical
Requirement: Reforge Lv: 1
Description: With an [Anvil] in your inventory, you can reforge Dagger, Axes and Swords class weapons. This process requires a forging hammer and all necessary materials. Your DEX and LUK will further influence the success rate.
[Lv 1]: Success Rate: 5%,
[Lv 2]: Success Rate: 10%,
[Lv 3]: Success Rate: 15%`,
  img: no_img_namespaceObject
}, {
  id: "bluntWeaponReforging",
  level: 0,
  dependencies: [{
    id: "reforge",
    minLevel: 1
  }],
  dependent: [{
    id: "foundryPowerUp"
  }],
  element: null,
  skillName: "Blunt Weapon Reforging",
  maxLevel: 3,
  inform: `Max Lv: 3
Skill Form: Passive
Type: Physical
Requirement: Reforge Lv: 1
Description: With an [Anvil] in your inventory, you can reforge Mace and Knuckle class weapons. This process requires a forging hammer and all necessary materials. Your DEX and LUK will further influence the success rate.
[Lv 1]: Success Rate: 5%,
[Lv 2]: Success Rate: 10%,
[Lv 3]: Success Rate: 15%`,
  img: no_img_namespaceObject
}, {
  id: "pierceWeaponReforging",
  level: 0,
  dependencies: [{
    id: "reforge",
    minLevel: 1
  }],
  dependent: [{
    id: "foundryPowerUp"
  }],
  element: null,
  skillName: "Pierce Weapon Reforging",
  maxLevel: 3,
  inform: `Max Lv: 3
Skill Form: Passive
Type: Physical
Requirement: Reforge Lv: 1
Description: With an [Anvil] in your inventory, you can reforge One and Two-Handed Spear class weapons. This process requires a forging hammer and all necessary materials. Your DEX and LUK will further influence the success rate.
[Lv 1]: Success Rate: 5%,
[Lv 2]: Success Rate: 10%,
[Lv 3]: Success Rate: 15%`,
  img: no_img_namespaceObject
}, {
  id: "magicWeaponReforging",
  level: 0,
  dependencies: [{
    id: "reforge",
    minLevel: 1
  }],
  dependent: [{
    id: "foundryPowerUp"
  }],
  element: null,
  skillName: "Magic Weapon Reforging",
  maxLevel: 3,
  inform: `Max Lv: 3
Skill Form: Passive
Type: Physical
Requirement: Reforge Lv: 1
Description: With an [Anvil] in your inventory, you can reforge One, Two Handed Staff and Book class weapons. This process requires a forging hammer and all necessary materials. Your DEX and LUK will further influence the success rate.
[Lv 1]: Success Rate: 5%,
[Lv 2]: Success Rate: 10%,
[Lv 3]: Success Rate: 15%`,
  img: no_img_namespaceObject
}, {
  id: "stringWeaponReforging",
  level: 0,
  dependencies: [{
    id: "reforge",
    minLevel: 1
  }],
  dependent: [{
    id: "foundryPowerUp"
  }],
  element: null,
  skillName: "String Weapon Reforging",
  maxLevel: 3,
  inform: `Max Lv: 3
Skill Form: Passive
Type: Physical
Requirement: Reforge Lv: 1
Description: With an [Anvil] in your inventory, you can reforge Bow, Musical Instrument and Whip class weapons. This process requires a forging hammer and all necessary materials. Your DEX and LUK will further influence the success rate.
[Lv 1]: Success Rate: 5%,
[Lv 2]: Success Rate: 10%,
[Lv 3]: Success Rate: 15%`,
  img: no_img_namespaceObject
}, {
  id: "exoticWeaponReforging",
  level: 0,
  dependencies: [{
    id: "reforge",
    minLevel: 1
  }],
  dependent: [{
    id: "foundryPowerUp"
  }],
  element: null,
  skillName: "Exotic Weapon Reforging",
  maxLevel: 3,
  inform: `Max Lv: 3
Skill Form: Passive
Type: Physical
Requirement: Reforge Lv: 1
Description: With an [Anvil] in your inventory, you can reforge Humma Shuriken, Katar and Gun class weapons. This process requires a forging hammer and all necessary materials. Your DEX and LUK will further influence the success rate.
[Lv 1]: Success Rate: 5%,
[Lv 2]: Success Rate: 10%,
[Lv 3]: Success Rate: 15%`,
  img: no_img_namespaceObject
}, {
  id: "repairWeapon",
  level: 0,
  dependencies: [{
    id: "reforge",
    minLevel: 2
  }],
  dependent: [{
    id: "foundryPowerUp"
  }],
  element: null,
  skillName: "Repair Weapon",
  maxLevel: 1,
  inform: `Max Lv: 1
Skill Form: Active
Type: Physical
Target: Ally
Range: 2
Requirement: Reforge Lv: 2
Description: With an [Anvil] in your inventory, you can restore a single targets damaged equipment, making it usable once more. This process uses 2 Steels.`,
  img: no_img_namespaceObject
}, {
  id: "skinTempering",
  level: 0,
  dependencies: [{
    id: "reforge",
    minLevel: 2
  }],
  dependent: [{
    id: "meltdown"
  }],
  element: null,
  skillName: "Skin Tempering",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Passive
Type: Physical
Requirement: Reforge Lv: 2
Description: Harden your skin with the power of the forge, enhancing your resistance to Fire and Neutral property damage.
[Lv 1]: Fire Res +4%, Neutral Res +1%,
[Lv 2]: Fire Res +8%, Neutral Res +2%,
[Lv 3]: Fire Res +12%, Neutral Res +3%,
[Lv 4]: Fire Res +16%, Neutral Res +4%,
[Lv 5]: Fire Res +20%, Neutral Res +5%`,
  img: no_img_namespaceObject
}, {
  id: "adrenalineRush",
  level: 0,
  dependencies: [{
    id: "axeMastery",
    minLevel: 3
  }],
  dependent: [{
    id: "hiltBinding"
  }, {
    id: "weaponPerfection"
  }],
  element: null,
  skillName: "Adrenaline Rush",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Self
Requirement: Axe Mastery Lv: 3
Description: Requires Axes or Maces Class Weapon. Temporarily boosts Attack speed, Critcal and Hit for all party members. This effect is also knocked off by Decrease AGI and Quagmire.
[Lv 1]: Duration: 84sec, Critcal +1, Hit +2,
[Lv 2]: Duration: 108sec, Critcal +2, Hit +4,
[Lv 3]: Duration: 132sec, Critcal +3, Hit +6,
[Lv 4]: Duration: 156sec, Critcal +4, Hit +8,
[Lv 5]: Duration: 180sec, Critcal +5, Hit +10,
[Lv 6]: Duration: 204sec, Critcal +6, Hit +12,
[Lv 7]: Duration: 228sec, Critcal +7, Hit +14,
[Lv 8]: Duration: 252sec, Critcal +8, Hit +16,
[Lv 9]: Duration: 276sec, Critcal +9, Hit +18,
[Lv 10]: Duration: 300sec, Critcal +10, Hit +20`,
  img: no_img_namespaceObject
}, {
  id: "weaponPerfection",
  level: 0,
  dependencies: [{
    id: "adrenalineRush",
    minLevel: 3
  }],
  dependent: [{
    id: "hiltBinding"
  }, {
    id: "powerThrust"
  }],
  element: null,
  skillName: "Weapon Perfection",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Self
Requirement: Adrenaline Rush Lv: 3
Description: This skill temporarily erases any size penalties from the equipped weapon for you and your party members, making your strikes more effective.
[Lv 1]: Lasts 30 seconds,
[Lv 2]: Lasts 60 seconds,
[Lv 3]: Lasts 90 seconds,
[Lv 4]: Lasts 120 seconds,
[Lv 5]: Lasts 150 seconds`,
  img: no_img_namespaceObject
}, {
  id: "powerThrust",
  level: 0,
  dependencies: [{
    id: "weaponPerfection",
    minLevel: 3
  }],
  dependent: [{
    id: "maximumPowerThrust"
  }, {
    id: "hiltBinding"
  }, {
    id: "maximizePower"
  }],
  element: null,
  skillName: "Power Thrust",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Self
Requirement: Weapon Perfection Lv: 3
Description: Unleash a surge of strength with Power Thrust. Temporarily amplify your own attack power and that of your party members.
[Lv 1]: Boosts Self Attack by 7% and Party Attack by 6%, lasting 60 seconds,
[Lv 2]: Boosts Self Attack by 9% and Party Attack by 7%, lasting 70 seconds,
[Lv 3]: Boosts Self Attack by 11% and Party Attack by 8%, lasting 80 seconds,
[Lv 4]: Boosts Self Attack by 13% and Party Attack by 9%, lasting 90 seconds,
[Lv 5]: Boosts Self Attack by 15% and Party Attack by 10%, lasting 100 seconds,
[Lv 6]: Boosts Self Attack by 17% and Party Attack by 11%, lasting 110 seconds,
[Lv 7]: Boosts Self Attack by 19% and Party Attack by 12%, lasting 120 seconds,
[Lv 8]: Boosts Self Attack by 21% and Party Attack by 13%, lasting 130 seconds,
[Lv 9]: Boosts Self Attack by 23% and Party Attack by 14%, lasting 140 seconds,
[Lv 10]: Boosts Self Attack by 25% and Party Attack by 15%, lasting 150 seconds`,
  img: no_img_namespaceObject
}, {
  id: "maximizePower",
  level: 0,
  dependencies: [{
    id: "powerThrust",
    minLevel: 5
  }],
  dependent: [],
  element: null,
  skillName: "Maximize Power",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Self
Requirement: Power Thrust Lv: 5
Description: Channel the full potential of your weapon with Maximize Power. This skill ensures your weapon delivers its maximum damage output for 240 seconds. As you harness its full might, your SP will steadily drain. Discoun and Overcharge will aways give maximum bonus.
[Lv 1]: Drains 6 SP every 2 second,
[Lv 2]: Drains 5 SP every 2 second,
[Lv 3]: Drains 4 SP every 2 second,
[Lv 4]: Drains 3 SP every 2 second,
[Lv 5]: Drains 2 SP every 2 second`,
  img: no_img_namespaceObject
}, {
  id: "hiltBinding",
  level: 0,
  dependencies: [{
    id: "adrenalineRush",
    minLevel: 7
  }, {
    id: "powerThrust",
    minLevel: 7
  }, {
    id: "weaponPerfection",
    minLevel: 3
  }],
  dependent: [{
    id: "weaponryResearch"
  }],
  element: null,
  skillName: "Hilt Binding",
  maxLevel: 1,
  inform: `Max Lv: 1
Skill Form: Passive
Type: Physical
Requirement: Adrenaline Rush Lv: 7, Power Thrust Lv: 7, Weapon Perfection Lv: 3
Description: Infuse your combat prowess. This skill prolongs the effects of Adrenaline Rush, Power Thrust, and Weapon Perfection by 20%, giving your buffs extra staying power. Plus, it enhances these abilities with a bonus +1 STR and +4 Atk.`,
  img: no_img_namespaceObject
}, {
  id: "weaponryResearch",
  level: 0,
  dependencies: [{
    id: "hiltBinding",
    minLevel: 1
  }],
  dependent: [],
  element: null,
  skillName: "Weaponry Research",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Passive
Type: Physical
Requirement: Hilt Binding Lv: 1
Description: Sharpens your understanding of weapon mechanics, boosting your Status Attack and Hit Rate with any weapon.
[Lv 1]: Status Atk +4, Hit Rate +4%,
[Lv 2]: Status Atk +8, Hit Rate +8%,
[Lv 3]: Status Atk +12, Hit Rate +12%,
[Lv 4]: Status Atk +16, Hit Rate +16%,
[Lv 5]: Status Atk +20, Hit Rate +20%`,
  img: no_img_namespaceObject
}, {
  id: "cartBoost",
  level: 0,
  dependencies: [{
    id: "pushcart",
    minLevel: 5
  }],
  dependent: [{
    id: "cartTermination"
  }],
  element: null,
  skillName: "Cart Boost",
  maxLevel: 1,
  inform: `Max Lv: 1
Skill Form: Active
Type: Physical
Target: Self
Requirement: Pushcart Lv: 5
Description: Increase Move Speed for 30 Seconds when a Pushcart is equipped.`,
  img: no_img_namespaceObject
}];
;// ./src/js/listSkills/MerchantWhitesmith.js
/*  author Chalykh Maksim 
  # data 10.02.2025 
  # email: chalyh.maksim.88@mail.ru */

 // заглушка

// список скилов Whitesmith
const skillsWhitesmith = [{
  id: "cartTermination",
  level: 0,
  dependencies: [{
    id: "cartRevolution",
    minLevel: 10
  }, {
    id: "cartBoost",
    minLevel: 1
  }, {
    id: "cartTwister",
    minLevel: 5
  }],
  dependent: [],
  element: null,
  skillName: "Cart Termination",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
Range: 2
Requirement: Cart Revolution Lv: 10, Cart Boost Lv: 1, Cart Twister Lv: 5
Description: While under the effect of Cart Boost, unleash a devastating attack by smashing your pushcart into an enemy. Has a chance to stun the target. The heavier your cart, more crushing the blow. Consumes 3x Zeny Pouch.
[Lv 1]: Stun Chance: 5%,
[Lv 2]: Stun Chance: 10%,
[Lv 3]: Stun Chance: 15%,
[Lv 4]: Stun Chance: 20%,
[Lv 5]: Stun Chance: 25%,
[Lv 6]: Stun Chance: 30%,
[Lv 7]: Stun Chance: 35%,
[Lv 8]: Stun Chance: 40%,
[Lv 9]: Stun Chance: 45%,
[Lv 10]: Stun Chance: 50%`,
  img: no_img_namespaceObject
}, {
  id: "foundryPowerUp",
  level: 0,
  dependencies: [{
    id: "reforge",
    minLevel: 5
  }, {
    id: "exoticWeaponReforging",
    minLevel: 1
  }, {
    id: "repairWeapon",
    minLevel: 1
  }, {
    id: "bladeWeaponReforging",
    minLevel: 1
  }, {
    id: "bluntWeaponReforging",
    minLevel: 1
  }, {
    id: "pierceWeaponReforging",
    minLevel: 1
  }, {
    id: "magicWeaponReforging",
    minLevel: 1
  }, {
    id: "stringWeaponReforging",
    minLevel: 1
  }],
  dependent: [],
  element: null,
  skillName: "Foundry Power-Up",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Ally
Range: 2
Requirement: Reforge Lv: 5, Exotic Weapon Reforging Lv: 1, Repair Weapon Lv: 1, Blade Weapon Reforging Lv: 1, Blunt Weapon Reforging Lv: 1, Pierce Weapon Reforging Lv: 1, Magic Weapon Reforging Lv: 1, String Weapon Reforging Lv: 1
Description: Harness the power of the anvil to temporarily enhance a party member's equipment. This boosts weapon damage and shield damage mitigation. The upgrade might even reach Perfect Upgrade status, extending its duration and amplifying the bonuses. Weapon Enhancement increases final damage, shield Enhancement improves damage mitigation. Enhancement is linked to the equipment itself, so switching items won't remove the effect. Usable only on party members. [Perfect Upgrade Chance]: 10% plus [Skill Level] and bonuses from stats and anvil, minus any equipment penalty. 2x Phracon for Lv.1 Weapons, 2x Emveretarcon for Lv.2 Weapons, 2x Oridecon for Lv.3 ~ 4 Weapons, 2x Elunium for Shields`,
  img: no_img_namespaceObject
}, {
  id: "maximumPowerThrust",
  level: 0,
  dependencies: [{
    id: "powerThrust",
    minLevel: 10
  }],
  dependent: [],
  element: null,
  skillName: "Maximum Power Thrust",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Self
Requirement: Power Thrust Lv: 10
Description: Strap Zeny Pouches onto your weapon for increases your weapons damage, enhancing its weight of impact. Also applies the Power Thrust buff to your whole party. Consumes 1x Zeny Pouch per Skill Level.
[Lv 1]: Atk +20%, Duration: 156 sec,
[Lv 2]: Atk +40%, Duration: 192 sec,
[Lv 3]: Atk +60%, Duration: 228 sec,
[Lv 4]: Atk +80%, Duration: 264 sec,
[Lv 5]: Atk +100%, Duration: 300 sec`,
  img: no_img_namespaceObject
}, {
  id: "meltdown",
  level: 0,
  dependencies: [{
    id: "skinTempering",
    minLevel: 5
  }, {
    id: "hammerfall",
    minLevel: 5
  }],
  dependent: [],
  element: null,
  skillName: "Meltdown",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Self
Requirement: Skin Tempering Lv: 5, Hammerfall Lv: 5
Description: Ignite your attacks with the power of fire, adding flat Fire damage to each strike. This fiery damage scales with your LUK and DEX and is affected only by the target's elemental weakness. Each hit carries a chance to break the enemys equipped weapon or armor. Against monsters, it reduces their physical damage or defense instead. The added fire damage applies to regular attacks, reflect damage, and most skills but excludes cart-related skills.
[Lv 1]: Chance of Break Weapon: 1%, Armor: 0.7%, Duration: 15 seconds,
[Lv 2]: Chance of Break Weapon: 2%, Armor: 1.4%, Duration: 20 seconds,
[Lv 3]: Chance of Break Weapon: 3%, Armor: 2.1%, Duration: 25 seconds,
[Lv 4]: Chance of Break Weapon: 4%, Armor: 2.8%, Duration: 30 seconds,
[Lv 5]: Chance of Break Weapon: 5%, Armor: 3.5%, Duration: 35 seconds,
[Lv 6]: Chance of Break Weapon: 6%, Armor: 4.2%, Duration: 40 seconds,
[Lv 7]: Chance of Break Weapon: 7%, Armor: 4.9%, Duration: 45 seconds,
[Lv 8]: Chance of Break Weapon: 8%, Armor: 5.6%, Duration: 50 seconds,
[Lv 9]: Chance of Break Weapon: 9%, Armor: 6.3%, Duration: 55 seconds,
[Lv 10]: Chance of Break Weapon: 10%, Armor: 7.0%, Duration: 60 seconds
`,
  img: no_img_namespaceObject
}];
;// ./src/img/icon_aco/icon_aco_1.png
const icon_aco_1_namespaceObject = __webpack_require__.p + "2c8180358ec9128f348b.png";
;// ./src/img/icon_aco/icon_aco_3.png
const icon_aco_3_namespaceObject = __webpack_require__.p + "66f993c8288360ccf064.png";
;// ./src/img/icon_aco/icon_aco_4.png
const icon_aco_4_namespaceObject = __webpack_require__.p + "a1b927bdadc0cb79d8d5.png";
;// ./src/img/icon_aco/icon_aco_5.png
const icon_aco_5_namespaceObject = __webpack_require__.p + "ad4f54f03d2ba9f15509.png";
;// ./src/img/icon_aco/icon_aco_6.png
const icon_aco_6_namespaceObject = __webpack_require__.p + "a55938cc84feb2edeb3b.png";
;// ./src/img/icon_aco/icon_aco_7.png
const icon_aco_7_namespaceObject = __webpack_require__.p + "c8235674e12235ce95e4.png";
;// ./src/img/icon_aco/icon_aco_8.png
const icon_aco_8_namespaceObject = __webpack_require__.p + "e67ed537b57c0078797a.png";
;// ./src/img/icon_aco/icon_aco_9.png
const icon_aco_9_namespaceObject = __webpack_require__.p + "00dc8d1fa322c1877302.png";
;// ./src/img/icon_aco/icon_aco_10.png
const icon_aco_10_namespaceObject = __webpack_require__.p + "b9a5697ea728740c0658.png";
;// ./src/img/icon_aco/icon_aco_11.png
const icon_aco_11_namespaceObject = __webpack_require__.p + "03a0dfd781686d2cd36f.png";
;// ./src/img/icon_aco/icon_aco_13.png
const icon_aco_13_namespaceObject = __webpack_require__.p + "35ce673243a9c803e80f.png";
;// ./src/img/icon_aco/icon_aco_14.png
const icon_aco_14_namespaceObject = __webpack_require__.p + "ae1cf8402650c04da3aa.png";
;// ./src/img/icon_aco/icon_aco_15.png
const icon_aco_15_namespaceObject = __webpack_require__.p + "7e1ca0cec75a91708753.png";
;// ./src/js/listSkills/Acolyte.js
/*  author Chalykh Maksim 
  # data 10.02.2025 
  # email: chalyh.maksim.88@mail.ru */

 // заглушка














// список скилов Acolyte
const skillsAcolyte = [{
  id: "divineProtection",
  level: 0,
  dependencies: [],
  dependent: [{
    id: "angelus"
  }, {
    id: "blessing"
  }, {
    id: "demonBane"
  }, {
    id: "kyrieEleison"
  }, {
    id: "maceMastery"
  }, {
    id: "assumptio"
  }, {
    id: "basilica"
  }, {
    id: "manaRecharge"
  }, {
    id: "ironHand"
  }],
  element: null,
  skillName: "Divine Protection",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Passive
Type: Physical
Requirement: None
Description: Passively raises Soft Defense and Soft Magic Defense against Demon and Undead race monsters. Base level affects damage reduction. When receiving damage from Demon and Undead race monsters, there is a chance to activate the Divine Protection effect for 10 seconds. This effect reduces the next damage you receive from Demon and Undead race monsters, with the reduction being equal to half of your base level in %.
[Lv 1]: Reduction: 3 + Base Level, Chance of effect: 1%,
[Lv 2]: Reduction: 6 + Base Level, Chance of effect: 2%,
[Lv 3]: Reduction: 9 + Base Level, Chance of effect: 3%,
[Lv 4]: Reduction: 12 + Base Level, Chance of effect: 4%,
[Lv 5]: Reduction: 15 + Base Level, Chance of effect: 5%,
[Lv 6]: Reduction: 18 + Base Level, Chance of effect: 6%,
[Lv 7]: Reduction: 21 + Base Level, Chance of effect: 7%,
[Lv 8]: Reduction: 24 + Base Level, Chance of effect: 8%,
[Lv 9]: Reduction: 27 + Base Level, Chance of effect: 9%,
[Lv 10]: Reduction: 30 + Base Level, Chance of effect: 10%`,
  img: icon_aco_7_namespaceObject
}, {
  id: "demonBane",
  level: 0,
  dependencies: [{
    id: "divineProtection",
    minLevel: 3
  }],
  dependent: [{
    id: "maceMastery"
  }, {
    id: "basilica"
  }, {
    id: "manaRecharge"
  }, {
    id: "ironHand"
  }],
  element: null,
  skillName: "Demon Bane",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Passive
Type: Physical
Requirement: Divine Protection Lv: 3
Description: Passively raises damage against Demon and Undead race monsters. Base level affects damage bonus. Damage increased by this skill is added after final damage is calculated. When attacking Demon and Undead race monsters, there is a chance to activate the Demon Bane effect for 10 seconds. This effect increases the damage of your next attack or skill in Demon and Undead race monsters, with the increased damage being equal to half of your base level in %.
[Lv 1]: Damage: 3 + Base Level, Chance of effect: 1%,
[Lv 2]: Damage: 6 + Base Level, Chance of effect: 2%,
[Lv 3]: Damage: 9 + Base Level, Chance of effect: 3%,
[Lv 4]: Damage: 12 + Base Level, Chance of effect: 4%,
[Lv 5]: Damage: 15 + Base Level, Chance of effect: 5%,
[Lv 6]: Damage: 18 + Base Level, Chance of effect: 6%,
[Lv 7]: Damage: 21 + Base Level, Chance of effect: 7%,
[Lv 8]: Damage: 24 + Base Level, Chance of effect: 8%,
[Lv 9]: Damage: 27 + Base Level, Chance of effect: 9%,
[Lv 10]: Damage: 30 + Base Level, Chance of effect: 10%`,
  img: icon_aco_6_namespaceObject
}, {
  id: "heal",
  level: 0,
  dependencies: [],
  dependent: [{
    id: "cure"
  }, {
    id: "increaseAgility"
  }, {
    id: "decreaseAgility"
  }, {
    id: "safetyWal"
  }, {
    id: "sanctuary"
  }, {
    id: "basilica"
  }],
  element: null,
  skillName: "Heal",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Ally
Range: 9
Requirement: None
Description: Restores HP of a single target. This skill is affected by Base Level, INT and MAtk. Versus Corrupt property targets, inflicts Holy property damage equal 75% the amount of the HP restored.
[Lv 1]: SP Cost: 13,
[Lv 2]: SP Cost: 16,
[Lv 3]: SP Cost: 19,
[Lv 4]: SP Cost: 22,
[Lv 5]: SP Cost: 25,
[Lv 6]: SP Cost: 28,
[Lv 7]: SP Cost: 31,
[Lv 8]: SP Cost: 34,
[Lv 9]: SP Cost: 37,
[Lv 10]: SP Cost: 40`,
  img: icon_aco_8_namespaceObject
}, {
  id: "cure",
  level: 0,
  dependencies: [{
    id: "heal",
    minLevel: 2
  }],
  dependent: [],
  element: null,
  skillName: "Cure",
  maxLevel: 5,
  inform: `Max Lv: 1 (or 5)
Skill Form: Active
Type: Magical
Target: Ally
Range: 9
Requirement: Heal Lv: 2
Description: Attempts to cleanse a single target from the Silence, Chaos and Blind status. If successful, grants a temporary 20% increase in resistance to the cured status. Caster INT and Base Level, target INT or LUK and Base Level increases chance of cleanse. This skill is initially learned at Level 1, with higher levels unlocked through special items.
[Lv 1]: Resistance duration: 10 seconds. Cooldown: 3 seconds,
[Lv 2]: Resistance duration: 20 seconds. Cooldown: 2.5 seconds,
[Lv 3]: Resistance duration: 30 seconds. Cooldown: 2 seconds,
[Lv 4]: Resistance duration: 40 seconds. Cooldown: 1.5 seconds,
[Lv 5]: Resistance duration: 50 seconds. Cooldown: 1 seconds`,
  img: icon_aco_4_namespaceObject
}, {
  id: "angelus",
  level: 0,
  dependencies: [{
    id: "divineProtection",
    minLevel: 3
  }],
  dependent: [{
    id: "kyrieEleison"
  }, {
    id: "assumptio"
  }],
  element: null,
  skillName: "Angelus",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Self
Requirement: Divine Protection Lv: 3
Description: Increases VIT, Soft Defense and MaxHP on the user and all party members in a 14x14 area around the user. Additionally, the bonus of VIT increases by +1 for every 14 Job Levels of the user. Duration of this ability is 240 seconds.
[Lv 1]: VIT +1, Soft Def +5%, HP +50,
[Lv 2]: VIT +2, Soft Def +10%, HP +100,
[Lv 3]: VIT +3, Soft Def +15%, HP +150,
[Lv 4]: VIT +4, Soft Def +20%, HP +200,
[Lv 5]: VIT +5, Soft Def +25%, HP +250,
[Lv 6]: VIT +6, Soft Def +30%, HP +300,
[Lv 7]: VIT +7, Soft Def +35%, HP +350,
[Lv 8]: VIT +8, Soft Def +40%, HP +400,
[Lv 9]: VIT +9, Soft Def +45%, HP +450, 
[Lv 10]: VIT +10, Soft Def +50%, HP +500`,
  img: icon_aco_1_namespaceObject
}, {
  id: "blessing",
  level: 0,
  dependencies: [{
    id: "divineProtection",
    minLevel: 5
  }],
  dependent: [],
  element: null,
  skillName: "Blessing",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Ally
Range: 9
Requirement: Divine Protection Lv: 5
Description: Temporarily increases STR, INT, DEX and reduces Variable Cast Time of the specified character. Additionally, the bonus of STR, INT, and DEX increases by +1 for every 14 job levels of the user. Also has a chance to cure a target of Curse status. When used on Undead and Demon monsters Blessing will reduce their STR, INT and DEX by 50%. When the user becomes a High Priest, Blessing becomes a 5x5 area effect around the target, but the SP cost increases by 2 for each affected target. Duration of this ability is 240 seconds.
[Lv 1]: STR, INT, DEX +1, Variable Cast Time -1%,
[Lv 2]: STR, INT, DEX +2, Variable Cast Time -2%,
[Lv 3]: STR, INT, DEX +3, Variable Cast Time -3%,
[Lv 4]: STR, INT, DEX +4, Variable Cast Time -4%,
[Lv 5]: STR, INT, DEX +5, Variable Cast Time -5%,
[Lv 6]: STR, INT, DEX +6, Variable Cast Time -6%,
[Lv 7]: STR, INT, DEX +7, Variable Cast Time -7%,
[Lv 8]: STR, INT, DEX +8, Variable Cast Time -8%,
[Lv 9]: STR, INT, DEX +9, Variable Cast Time -9%,
[Lv 10]: STR, INT, DEX +10, Variable Cast Time -10%`,
  img: icon_aco_3_namespaceObject
}, {
  id: "increaseAgility",
  level: 0,
  dependencies: [{
    id: "heal",
    minLevel: 3
  }],
  dependent: [{
    id: "decreaseAgility"
  }],
  element: null,
  skillName: "Increase Agility",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Ally
Range: 9
Requirement: Heal Lv: 3
Description: Increases targeted characters AGI, Movement and Attack Speed for the duration of skill. Additionally, the bonus of AGI increases by +1 for every 14 job levels of the user. Drains 15 HP from the caster after each cast. When used on target that affected by Decrease Agility status, this skill will release target from that. When the user becomes a High Priest, Increase agility becomes a 5x5 area effect around the target, but the SP cost increases by 2 for each affected target. Duration of this ability is 240 seconds.
[Lv 1]: AGI +1, Atk Speed: +1%,
[Lv 2]: AGI +2, Atk Speed: +2%,
[Lv 3]: AGI +3, Atk Speed: +3%,
[Lv 4]: AGI +4, Atk Speed: +4%,
[Lv 5]: AGI +5, Atk Speed: +5%,
[Lv 6]: AGI +6, Atk Speed: +6%,
[Lv 7]: AGI +7, Atk Speed: +7%,
[Lv 8]: AGI +8, Atk Speed: +8%,
[Lv 9]: AGI +9, Atk Speed: +9%,
[Lv 10]: AGI +10, Atk Speed: +10%`,
  img: icon_aco_9_namespaceObject
}, {
  id: "decreaseAgility",
  level: 0,
  dependencies: [{
    id: "increaseAgility",
    minLevel: 1
  }],
  dependent: [],
  element: null,
  skillName: "Decrease Agility",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Enemy
Range: 9
Requirement: Increase Agility Lv: 1
Description: Decreases targeted characters AGI, Movement and Attack Speed for the duration of skill. Additionally, the reduction of AGI increases by 1 for every 14 job levels of the user. When the user becomes a High Priest, Decrease Agility becomes a 3x3 area effect around the target, but the SP cost increases by 4 for each affected target.
[Lv 1]: AGI -1, Movement Speed: -1%, Duration: 15 Seconds,
[Lv 2]: AGI -2, Movement Speed: -2%, Duration: 20 Seconds,
[Lv 3]: AGI -3, Movement Speed: -3%, Duration: 25 Seconds,
[Lv 4]: AGI -4, Movement Speed: -4%, Duration: 30 Seconds,
[Lv 5]: AGI -5, Movement Speed: -5%, Duration: 35 Seconds,
[Lv 6]: AGI -6, Movement Speed: -6%, Duration: 40 Seconds,
[Lv 7]: AGI -7, Movement Speed: -7%, Duration: 45 Seconds,
[Lv 8]: AGI -8, Movement Speed: -8%, Duration: 50 Seconds,
[Lv 9]: AGI -9, Movement Speed: -9%, Duration: 55 Seconds,
[Lv 10]: AGI -10, Movement Speed: -10%, Duration: 60 Seconds`,
  img: icon_aco_5_namespaceObject
}, {
  id: "holyLight",
  level: 0,
  dependencies: [],
  dependent: [{
    id: "magnusExorcismus"
  }, {
    id: "turnUndead"
  }],
  element: null,
  skillName: "Holy Light",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Enemy
Range: 9
Requirement: None
Description: Summon holy light to counter evil. When used with Staffs or Books, it deals magical damage, has a casting time, and a spell range of 9 cells. When used with Maces or Knuckles, it becomes a physical attack, has no casting time, and becomes melee-ranged.
[Lv 1]: ATK or MATK 135%,
[Lv 2]: ATK or MATK 170%,
[Lv 3]: ATK or MATK 205%,
[Lv 4]: ATK or MATK 240%,
[Lv 5]: ATK or MATK 275%,
[Lv 6]: ATK or MATK 310%,
[Lv 7]: ATK or MATK 345%,
[Lv 8]: ATK or MATK 380%,
[Lv 9]: ATK or MATK 415%,
[Lv 10]: ATK or MATK 450%`,
  img: icon_aco_15_namespaceObject
}, {
  id: "ruwach",
  level: 0,
  dependencies: [],
  dependent: [{
    id: "teleport"
  }, {
    id: "warpPortal"
  }, {
    id: "pneuma"
  }, {
    id: "lexAeterna"
  }, {
    id: "lexDivina"
  }, {
    id: "magnusExorcismus"
  }, {
    id: "turnUndead"
  }, {
    id: "meditatio"
  }],
  element: null,
  skillName: "Ruwach",
  maxLevel: 1,
  inform: `Max Lv: 1
Skill Form: Active
Type: Magical
Target: Self
Requirement: None
Description: Uses 10 SP to summon Holy Spirit that will detect hidden characters in 5x5 cells area around the caster for 10 sec.`,
  img: icon_aco_11_namespaceObject
}, {
  id: "teleport",
  level: 0,
  dependencies: [{
    id: "ruwach",
    minLevel: 1
  }],
  dependent: [{
    id: "warpPortal"
  }],
  element: null,
  skillName: "Teleport",
  maxLevel: 2,
  inform: `Max Lv: 2
Skill Form: Active
Type: Magical
Target: Self
Requirement: Ruwach Lv: 1
Description: Teleports caster to other area. Cant be used in an area that protected by Land Protector.
[Lv 1]: Random Spot, SP Consumption: 10,
[Lv 2]: Save Point, SP Consumption: 9`,
  img: icon_aco_13_namespaceObject
}, {
  id: "warpPortal",
  level: 0,
  dependencies: [{
    id: "teleport",
    minLevel: 2
  }],
  dependent: [{
    id: "pneuma"
  }],
  element: null,
  skillName: "Warp Portal",
  maxLevel: 3,
  inform: `Max Lv: 3
Skill Form: Active
Type: Magical
Target: Ground
Range: 9
Requirement: Teleport Lv: 2
Description: Creates a Warp Portal that will transport those that enter to the portal's destination. Up to 8 players can be transported regardless of the skill level. This skill is disabled within land protector effect. Catalyst: 1x Blue Gemstone.
[Lv 1]: 1 custom position available,
[Lv 2]: 2 custom position available,
[Lv 3]: 3 custom position available`,
  img: icon_aco_14_namespaceObject
}, {
  id: "pneuma",
  level: 0,
  dependencies: [{
    id: "warpPortal",
    minLevel: 3
  }],
  dependent: [],
  element: null,
  skillName: "Pneuma",
  maxLevel: 1,
  inform: `Max Lv: 1
Skill Form: Active
Type: Magical
Target: Ground
Range: 9
Requirement: Warp Portal Lv: 3
Description: Uses 10 SP to create, barrier in 3x3 cells around targeted, cell that for 10 sec will protect, anyone inside it from long range, physical attacks.`,
  img: icon_aco_10_namespaceObject
}];

/*  author Chalykh Maksim 
  # data 10.02.2025 
  # email: chalyh.maksim.88@mail.ru */
;// ./src/img/icon_aco/icon_aco_2.png
const icon_aco_2_namespaceObject = __webpack_require__.p + "494969efbc860be07fd9.png";
;// ./src/img/icon_pri/icon_pri_1.png
const icon_pri_1_namespaceObject = __webpack_require__.p + "8ae485a0421e1000fbbe.png";
;// ./src/img/icon_pri/icon_pri_2.png
const icon_pri_2_namespaceObject = __webpack_require__.p + "6cb94075242584fb7211.png";
;// ./src/img/icon_pri/icon_pri_3.png
const icon_pri_3_namespaceObject = __webpack_require__.p + "dc1be3793326bc2fe60f.png";
;// ./src/img/icon_pri/icon_pri_4.png
const icon_pri_4_namespaceObject = __webpack_require__.p + "2316b8cabb42af6b1d99.png";
;// ./src/img/icon_pri/icon_pri_5.png
const icon_pri_5_namespaceObject = __webpack_require__.p + "71f1dd8a8c4eb3f2c366.png";
;// ./src/img/icon_pri/icon_pri_6.png
const icon_pri_6_namespaceObject = __webpack_require__.p + "271b9d7fd04fe90c7898.png";
;// ./src/img/icon_pri/icon_pri_7.png
const icon_pri_7_namespaceObject = __webpack_require__.p + "632590ea5dad51274606.png";
;// ./src/img/icon_pri/icon_pri_8.png
const icon_pri_8_namespaceObject = __webpack_require__.p + "0d771eb107cc7ed9f510.png";
;// ./src/img/icon_pri/icon_pri_9.png
const icon_pri_9_namespaceObject = __webpack_require__.p + "944721d4eb5233b00c23.png";
;// ./src/img/icon_pri/icon_pri_10.png
const icon_pri_10_namespaceObject = __webpack_require__.p + "c080b9c28554db35d698.png";
;// ./src/img/icon_pri/icon_pri_11.png
const icon_pri_11_namespaceObject = __webpack_require__.p + "bb9e9d63bb2e6885e61d.png";
;// ./src/img/icon_pri/icon_pri_12.png
const icon_pri_12_namespaceObject = __webpack_require__.p + "8fc7df8dfeb825ad6a28.png";
;// ./src/img/icon_pri/icon_pri_13.png
const icon_pri_13_namespaceObject = __webpack_require__.p + "6eda0353fe15cbb6d7e4.png";
;// ./src/img/icon_pri/icon_pri_14.png
const icon_pri_14_namespaceObject = __webpack_require__.p + "fe76fd0eeb9be9b38efa.png";
;// ./src/img/icon_pri/icon_pri_15.png
const icon_pri_15_namespaceObject = __webpack_require__.p + "f6b5c8ac6c490c10a729.png";
;// ./src/img/icon_pri/icon_pri_17.png
const icon_pri_17_namespaceObject = __webpack_require__.p + "0fa80f9c490a6d2edf6a.png";
;// ./src/img/icon_pri/icon_pri_18.png
const icon_pri_18_namespaceObject = __webpack_require__.p + "35d973d06acf135f658a.png";
;// ./src/js/listSkills/AcolytePriest.js
/*  author Chalykh Maksim 
  # data 10.02.2025 
  # email: chalyh.maksim.88@mail.ru */

 // заглушка



















// список скилов Priest
const skillsPriest = [{
  id: "aquaBenedicta",
  level: 0,
  dependencies: [],
  dependent: [{
    id: "bSSacramenti"
  }, {
    id: "magnusExorcismus"
  }],
  element: null,
  skillName: "Aqua Benedicta",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Self
Requirement: None
Description: Creates 1 Holy Water with 1 Empty Bottle while standing in water. The quantity of Holy Water crafted receives an additional bonus based on Base Level, Job Level, and all attributes, with VIT being the most influential. The relevance of attributes increases exponentially as they grow. The skill level affects the efficiency of the additional production. Regardless of the skill level, the additional production varies.
[Lv 1]: No Additional Bonus,
[Lv 2]: Additional Efficiency -75%,
[Lv 3]: Additional Efficiency -50%,
[Lv 4]: Additional Efficiency -25%,
[Lv 5]: Full Efficiency`,
  img: icon_aco_2_namespaceObject
}, {
  id: "impositioManus",
  level: 0,
  dependencies: [],
  dependent: [{
    id: "aspersio"
  }, {
    id: "bSSacramenti"
  }, {
    id: "magnusExorcismus"
  }, {
    id: "suffragium"
  }, {
    id: "assumptio"
  }, {
    id: "meditatio"
  }],
  element: null,
  skillName: "Impositio Manus",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Self
Requirement: None
Description: Blesses others by placing, your hands on their head. Increases ATK and, MATK of yourself and nearby party members, for 120 seconds.
[Lv 1]: ATK/MATK +5, ,
[Lv 2]: ATK/MATK +10,
[Lv 3]: ATK/MATK +15,
[Lv 4]: ATK/MATK +20,
[Lv 5]: ATK/MATK +25`,
  img: icon_pri_5_namespaceObject
}, {
  id: "aspersio",
  level: 0,
  dependencies: [{
    id: "aquaBenedicta",
    minLevel: 1
  }, {
    id: "impositioManus",
    minLevel: 3
  }],
  dependent: [{
    id: "bSSacramenti"
  }, {
    id: "magnusExorcismus"
  }],
  element: null,
  skillName: "Aspersio",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Ally
Range: 9
Requirement: Aqua Benedicta Lv: 1, Impositio Manus Lv: 3
Description: Temporarily imbue a single target weapon with the Holy property. Consumes 1 Holy Water per use. At Lv 5, the effect expands to a 5x5 area around the target but costs double the SP and triple the catalyst.. Catalyst: 1x Holy Water.
[Lv 1]: Physical and Magical Holy Damage +2%, Duration: 75 sec.
[Lv 2]: Physical and Magical Holy Damage +3%, Duration: 140 sec.
[Lv 3]: Physical and Magical Holy Damage +4%, Duration: 225 sec.
[Lv 4]: Physical and Magical Holy Damage +5%, Duration: 300 sec.
[Lv 5]: Physical and Magical Holy Damage +5%, Duration: 300 sec.`,
  img: icon_pri_1_namespaceObject
}, {
  id: "bSSacramenti",
  level: 0,
  dependencies: [{
    id: "gloria",
    minLevel: 3
  }, {
    id: "aspersio",
    minLevel: 5
  }],
  dependent: [],
  element: null,
  skillName: "B.S. Sacramenti",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Ground
Range: 9
Requirement: Gloria Lv: 3, Aspersio Lv: 5
Description: Blesses a targeted location to endow the armor of all players within the area of effect with the Holy property. Requires the user to have Acolyte class players horizontally adjacent to the user. Acts as Offensive Endowment when used against Undead and Demon race monsters.
[Lv 1]: Area of Effect: 3x3, Duration: 30sec,
[Lv 2]: Area of Effect: 3x3, Duration: 60sec,
[Lv 3]: Area of Effect: 5x5, Duration: 90sec,
[Lv 4]: Area of Effect: 5x5, Duration: 120sec,
[Lv 5]: Area of Effect: 7x7, Duration: 150sec`,
  img: icon_pri_2_namespaceObject
}, {
  id: "gloria",
  level: 0,
  dependencies: [{
    id: "kyrieEleison",
    minLevel: 4
  }, {
    id: "magnificat",
    minLevel: 3
  }],
  dependent: [{
    id: "bSSacramenti"
  }],
  element: null,
  skillName: "Gloria",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Self
Requirement: Kyrie Eleison Lv: 4, Magnificat Lv: 3
Description: Temporarily boosts LUK and CRIT DEF to the user and party members. The duration of this skill increases by 1 second per users Job level. If your are High Priest, increase Critical Damage in 1% per Skill Level.
[Lv 1]: LUK: +14, CRIT DEF: +1, Duration: 10sec,
[Lv 2]: LUK: +18, CRIT DEF: +2, Duration: 15sec,
[Lv 3]: LUK: +22, CRIT DEF: +3, Duration: 20sec,
[Lv 4]: LUK: +26, CRIT DEF: +4, Duration: 25sec,
[Lv 5]: LUK: +30, CRIT DEF: +5, Duration: 30sec`,
  img: icon_pri_4_namespaceObject
}, {
  id: "increaseSPRecovery",
  level: 0,
  dependencies: [],
  dependent: [{
    id: "resurrection"
  }, {
    id: "meditatio"
  }],
  element: null,
  skillName: "Increase SP Recovery",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Passive
Type: Misc
Requirement: None
Description: Increases the amount of SP recovered through your natural SP regeneration. Increases SP Potions healing in 3% per Skill Level.
[Lv 1]: SP Recovery +[3 + 0.1% of MaxSP],
[Lv 2]: SP Recovery +[6 + 0.2% of MaxSP],
[Lv 3]: SP Recovery +[9 + 0.3% of MaxSP],
[Lv 4]: SP Recovery +[12 + 0.4% of MaxSP],
[Lv 5]: SP Recovery +[15 + 0.5% of MaxSP],
[Lv 6]: SP Recovery +[18 + 0.6% of MaxSP],
[Lv 7]: SP Recovery +[21 + 0.7% of MaxSP],
[Lv 8]: SP Recovery +[24 + 0.8% of MaxSP],
[Lv 9]: SP Recovery +[27 + 0.9% of MaxSP],
[Lv 10]: SP Recovery +[30 + 1% of MaxSP]`,
  img: icon_pri_3_namespaceObject
}, {
  id: "kyrieEleison",
  level: 0,
  dependencies: [{
    id: "angelus",
    minLevel: 2
  }],
  dependent: [],
  element: null,
  skillName: "Kyrie Eleison",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Ally
Range: 9
Requirement: Angelus Lv: 2
Description: Creates a perfect barrier, around a character that will be able to, withstand a certain number of hits, , before it breaks, for 120 seconds. The barrier, strength and number of hits is affected, by the skill's level. The Holy Light skill, immediately cancels this skill.
[Lv 1]: Barrier: 12% MaxHP, Blocks 5 Hits,
[Lv 2]: Barrier: 14% MaxHP, Blocks 6 Hits,
[Lv 3]: Barrier: 16% MaxHP, Blocks 6 Hits,
[Lv 4]: Barrier: 18% MaxHP, Blocks 7 Hits,
[Lv 5]: Barrier: 20% MaxHP, Blocks 7 Hits,
[Lv 6]: Barrier: 22% MaxHP, Blocks 8 Hits,
[Lv 7]: Barrier: 24% MaxHP, Blocks 8 Hits,
[Lv 8]: Barrier: 26% MaxHP, Blocks 9 Hits,
[Lv 9]: Barrier: 28% MaxHP, Blocks 9 Hits,
[Lv 10]: Barrier: 30% MaxHP, Blocks 10 Hits`,
  img: icon_pri_6_namespaceObject
}, {
  id: "lexAeterna",
  level: 0,
  dependencies: [{
    id: "lexDivina",
    minLevel: 3
  }],
  dependent: [{
    id: "magnusExorcismus"
  }],
  element: null,
  skillName: "Lex Aeterna",
  maxLevel: 4,
  inform: `Max Lv: 4
Skill Form: Active
Type: Magical
Target: Enemy
Range: 7 ~ 10
Requirement: Lex Divina Lv: 3
Description: Decreases the resistance of the affected target, amplifying the damage it receives for a short period of time. Catalyst: 1x Holy Water.
[Lv 1]: Amplification: [1.5x], Single Target, Duration: 4 sec,
[Lv 2]: Amplification: [1.4x], AoE: 3x3, Duration: 5 sec,
[Lv 3]: Amplification: [1.3x], AoE: 5x5, Duration: 6 sec,
[Lv 4]: Amplification: [1.2x], AoE: 7x7, Duration: 7 sec`,
  img: icon_pri_7_namespaceObject
}, {
  id: "lexDivina",
  level: 0,
  dependencies: [{
    id: "ruwach",
    minLevel: 1
  }],
  dependent: [{
    id: "lexAeterna"
  }, {
    id: "magnusExorcismus"
  }, {
    id: "turnUndead"
  }, {
    id: "meditatio"
  }],
  element: null,
  skillName: "Lex Divina",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Enemy
Range: 5
Requirement: Ruwach Lv: 1
Description: Silences an enemy, temporarily disabling its use of skills, for a set duration. The duration of Lex Divina is affected by the targets resistense.
[Lv 1]: Silence Duration: 20sec,
[Lv 2]: Silence Duration: 30sec,
[Lv 3]: Silence Duration: 40sec,
[Lv 4]: Silence Duration: 50sec,
[Lv 5]: Silence Duration: 60sec`,
  img: icon_pri_8_namespaceObject
}, {
  id: "maceMastery",
  level: 0,
  dependencies: [{
    id: "demonBane",
    minLevel: 7
  }],
  dependent: [{
    id: "manaRecharge"
  }],
  element: null,
  skillName: "Mace Mastery",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Passive
Type: Physical
Requirement: Demon Bane Lv: 7
Description: Increase attack with Mace Class Weapons. When [Lv 10], it increases Critical Damage in 6%. Attack bonus granted by this skill is of the Equipment type.
[Lv 1]: Atk +3, Critcal +1,
[Lv 2]: Atk +6, Critcal +2,
[Lv 3]: Atk +9, Critcal +3,
[Lv 4]: Atk +12, Critcal +4,
[Lv 5]: Atk +15, Critcal +5,
[Lv 6]: Atk +18, Critcal +6,
[Lv 7]: Atk +21, Critcal +7,
[Lv 8]: Atk +24, Critcal +8,
[Lv 9]: Atk +27, Critcal +9,
[Lv 10]: Atk +30, Critcal +10`,
  img: icon_pri_9_namespaceObject
}, {
  id: "magnificat",
  level: 0,
  dependencies: [],
  dependent: [{
    id: "gloria"
  }],
  element: null,
  skillName: "Magnificat",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Self
Requirement: None
Description: Doubles the caster and, party's SP regen for the duration of the skill.
[Lv 1]: Duration: 30 seconds,
[Lv 2]: Duration: 45 seconds,
[Lv 3]: Duration: 60 seconds,
[Lv 4]: Duration: 75 seconds,
[Lv 5]: Duration: 90 seconds`,
  img: icon_pri_11_namespaceObject
}, {
  id: "magnusExorcismus",
  level: 0,
  dependencies: [{
    id: "holyLight",
    minLevel: 5
  }, {
    id: "lexAeterna",
    minLevel: 3
  }, {
    id: "aspersio",
    minLevel: 3
  }, {
    id: "turnUndead",
    minLevel: 3
  }],
  dependent: [],
  element: null,
  skillName: "Magnus Exorcismus",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Ground
Range: 9
Requirement: Holy Light Lv: 5, Lex Aeterna Lv: 3, Aspersio Lv: 3, Turn Undead Lv: 3
Description: Summons a purifying cross on the ground, dealing Holy property magic damage over multiple waves. Each wave deals 10 hits. Damage per hit is significantly increased against Demon and Undead races as well as Shadow and Corrupt elements. When used above level 5, it consumes 1x Holy Water.
[Lv 1]: 3 Waves, Hits x 37% MAtk,
[Lv 2]: 3 Waves, Hits x 44% MAtk,
[Lv 3]: 3 Waves, Hits x 51% MAtk,
[Lv 4]: 4 Waves, Hits x 58% MAtk,
[Lv 5]: 4 Waves, Hits x 65% MAtk,
[Lv 6]: 4 Waves, Hits x 72% MAtk,
[Lv 7]: 5 Waves, Hits x 79% MAtk,
[Lv 8]: 5 Waves, Hits x 86% MAtk,
[Lv 9]: 5 Waves, Hits x 93% MAtk,
[Lv 10]: 6 Waves, Hits x 100% MAtk`,
  img: icon_pri_10_namespaceObject
}, {
  id: "resurrection",
  level: 0,
  dependencies: [{
    id: "statusRecovery",
    minLevel: 1
  }, {
    id: "increaseSPRecovery",
    minLevel: 4
  }],
  dependent: [{
    id: "turnUndead"
  }],
  element: null,
  skillName: "Resurrection",
  maxLevel: 4,
  inform: `Max Lv: 4
Skill Form: Active
Type: Magical
Target: Ally
Range: 9
Requirement: Status Recovery Lv: 1, Increase SP Recovery Lv: 4
Description: Revives KO'ed character. Catalyst: 1x Blue Gemstone.
[Lv 1]: Revives with 10% of Max HP,
[Lv 2]: Revives with 30% of Max HP,
[Lv 3]: Revives with 50% of Max HP,
[Lv 4]: Revives with 80% of Max HP`,
  img: icon_pri_13_namespaceObject
}, {
  id: "safetyWal",
  level: 0,
  dependencies: [{
    id: "sanctuary",
    minLevel: 5
  }],
  dependent: [],
  element: null,
  skillName: "Safety Wal",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Ground
Range: 9
Requirement: Sanctuary Lv: 5
Description: Constructs a protective barrier at a targeted location that blocks all close-range physical damage until its durability is depleted or the skill expires. The walls durability and effectiveness are influenced by your INT, Base Level, and MaxSP. Only the initial impact is prevented beyond the total durability. A maximum of 4 Safety Walls can be active at once. Catalyst: 1x Blue Gemstone.
[Lv 1]: Durability: 300, Blocks Damage 2 times,
[Lv 2]: Durability: 600, Blocks Damage 3 times,
[Lv 3]: Durability: 900, Blocks Damage 4 times,
[Lv 4]: Durability: 1200, Blocks Damage 5 times,
[Lv 5]: Durability: 1500, Blocks Damage 6 times,
[Lv 6]: Durability: 1800, Blocks Damage 7 times,
[Lv 7]: Durability: 2100, Blocks Damage 8 times,
[Lv 8]: Durability: 2400, Blocks Damage 9 times,
[Lv 9]: Durability: 2700, Blocks Damage 10 times,
[Lv 10]: Durability: 3000, Blocks Damage 11 times`,
  img: icon_pri_14_namespaceObject
}, {
  id: "sanctuary",
  level: 0,
  dependencies: [{
    id: "heal",
    minLevel: 1
  }],
  dependent: [{
    id: "safetyWal"
  }, {
    id: "basilica"
  }],
  element: null,
  skillName: "Sanctuary",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Ground
Range: 9
Requirement: Heal Lv: 1
Description: Creates a soothing area on a targeted location that will restore HP of all entities within the area of effect every second. SKill level affects healing Value and Target Limit. Against Undead property and Demon race monsters, this skill will inflict Holy property damage equal to healing value and push them 2 cells backwards. Catalyst: 1x Holy Water.
[Lv 1]: Targets: 4, Healing: 100, Duration: 7 sec.
[Lv 2]: Targets: 5, Healing: 200, Duration: 9 sec.
[Lv 3]: Targets: 6, Healing: 300, Duration: 11 sec.
[Lv 4]: Targets: 7, Healing: 400, Duration: 13 sec.
[Lv 5]: Targets: 8, Healing: 500, Duration: 15 sec.
[Lv 6]: Targets: 9, Healing: 600, Duration: 17 sec.
[Lv 7]: Targets: 10, Healing: 700, Duration: 19 sec.
[Lv 8]: Targets: 11, Healing: 800, Duration: 21 sec.
[Lv 9]: Targets: 12, Healing: 900, Duration: 23 sec.
[Lv 10]: Targets: 13, Healing: 1000, Duration: 25 sec.`,
  img: icon_pri_15_namespaceObject
}, {
  id: "statusRecovery",
  level: 0,
  dependencies: [],
  dependent: [{
    id: "resurrection"
  }],
  element: null,
  skillName: "Status Recovery",
  maxLevel: 1,
  inform: `Max Lv: 1
Skill Form: Active
Type: Magical
Target: Ally
Range: 9
Requirement: None
Description: Cancels abnormal status, effects such as Stun, Frozen or Stone Curse. Inflicts Blind status on Undead monsters.`,
  img: icon_pri_12_namespaceObject
}, {
  id: "suffragium",
  level: 0,
  dependencies: [{
    id: "impositioManus",
    minLevel: 2
  }],
  dependent: [],
  element: null,
  skillName: "Suffragium",
  maxLevel: 3,
  inform: `Max Lv: 3
Skill Form: Active
Type: Magical
Target: Self
Requirement: Impositio Manus Lv: 2
Description: Offers a prayer for others by reducing the Casting Time of yourself and nearby party members for 60 seconds.
[Lv 1]: 10% reduction in variable casting,
[Lv 2]: 15% reduction in variable casting,
[Lv 3]: 20% reduction in variable casting and 0.1 second in fix cast time`,
  img: icon_pri_17_namespaceObject
}, {
  id: "turnUndead",
  level: 0,
  dependencies: [{
    id: "resurrection",
    minLevel: 1
  }, {
    id: "lexDivina",
    minLevel: 3
  }, {
    id: "holyLight",
    minLevel: 5
  }],
  dependent: [{
    id: "magnusExorcismus"
  }],
  element: null,
  skillName: "Turn Undead",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Self
Range: 5
Requirement: Resurrection Lv: 1, Lex Divina Lv: 3, Holy Light Lv: 5
Description: Cleanse the darkness with a holy incantation, reducing the Holy resistance of all enemies. Offers a chance to execute 30% or low health enemies of Undead and Demon races, and those of Shadow and Corrupt elements when dealing damage. Elite Monsters can be executed when at 20% or less HP, although the execution chance is reduced.
[Lv 1]: Holy Resistance -2%, 50% success rate, 32 SP,
[Lv 2]: Holy Resistance -4%, 50% success rate, 35 SP,
[Lv 3]: Holy Resistance -6%, 50% success rate, 38 SP,
[Lv 4]: Holy Resistance -8%, 50% success rate, 41 SP,
[Lv 5]: Holy Resistance -10%, 50% success rate, 44 SP,
[Lv 6]: Holy Resistance -12%, 50% success rate, 47 SP,
[Lv 7]: Holy Resistance -14%, 50% success rate, 50 SP,
[Lv 8]: Holy Resistance -16%, 50% success rate, 53 SP,
[Lv 9]: Holy Resistance -18%, 50% success rate, 56 SP,
[Lv 10]: Holy Resistance -20%, 50% success rate, 59 SP`,
  img: icon_pri_18_namespaceObject
}];

/*  author Chalykh Maksim 
  # data 10.02.2025 
  # email: chalyh.maksim.88@mail.ru */
;// ./src/js/listSkills/AcolyteMonk.js
/*  author Chalykh Maksim 
  # data 10.02.2025 
  # email: chalyh.maksim.88@mail.ru */

 // заглушка

// список скилов Monk
const skillsMonk = [{
  id: "absorbSpiritSphere",
  level: 0,
  dependencies: [{
    id: "callSpiritSphere",
    minLevel: 5
  }],
  dependent: [],
  element: null,
  skillName: "Absorb Spirit Sphere",
  maxLevel: 1,
  inform: `Max Lv: 1
Skill Form: Active
Type: Physical
Target: Ally
Range: 9
Requirement: Call Spirit Sphere Lv: 5
Description: Allows the user to absorb Spirit Spheres, restoring their SP. Recovers 10 SP per absorbed Spirit Sphere. When used on monsters, it may restore SP equal to 0.5 to 2 times the monster level with a success rate dependent on the user's Base Level and the targets level. Chance: [25% + 1% Every 4 Base Level of user] - [1% Every 3 Level of Target]`,
  img: no_img_namespaceObject
}, {
  id: "asuraStrike",
  level: 0,
  dependencies: [{
    id: "furiousSpirits",
    minLevel: 5
  }],
  dependent: [],
  element: null,
  skillName: "Asura Strike",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Enemy
Range: 2
Requirement: Furious Spirits Lv: 5
Description: Unleash the full force of your spiritual energy, dealing devastating damage based on the number of Spirit Spheres consumed and your current SP spends. Requires the user to be in the Furious Spirits state. Can be performed Manually, after Pacify, or as part of a Combo. After use, all forms of SP recovery (Natural, Potion, Food, Skill, etc.) are penalized for 10 seconds. The penalty decreases progressively each second. Manually: Select Asura Strike via a hotkey and click on the desired target. This will consume the current number of Spirit Spheres. Each sphere consumed will use 10% of your current SP and put the skill on a 3-second cooldown per sphere used. Pacify: Can be used on a target immobilized by Pacify at Level 5, consuming only 1 Spirit Sphere and 10% of your current SP. The cooldown is 9 seconds. Combo: Can be used during the 'Combo Finish' cooldown, avoiding casting time. Consumes only 1 Spirit Sphere and 10% of current SP. Cooldown is 3 seconds.`,
  img: no_img_namespaceObject
}, {
  id: "bodyRelocation",
  level: 0,
  dependencies: [{
    id: "throwSpiritSphere",
    minLevel: 3
  }, {
    id: "pacify",
    minLevel: 3
  }],
  dependent: [{
    id: "palmStrike"
  }],
  element: null,
  skillName: "Body Relocation",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Ground
Range: 3
Requirement: Throw Spirit Sphere Lv: 3, Pacify Lv: 3
Description: Instantly teleport to a targeted spot if there are no obstacles between the caster and the destination. After using this skill, [Asura Strike] and [Deva Retaliation] have a cooldown of 2 seconds. Each cast requires 1 Spirit Sphere. In Furious Spirits state, removes the Spirit Sphere cost. In Calm Spirits state, adds a 2 second cooldown, deals area damage 3x3 cells based on the distance between the user and the target, user weight and DEF, and pushes enemies and objects by 2 cells.
[Lv 1]: Range: 3 cells, SP Cost: 6,
[Lv 2]: Range: 5 cells, SP Cost: 8,
[Lv 3]: Range: 7 cells, SP Cost: 10,
[Lv 4]: Range: 9 cells, SP Cost: 12,
[Lv 5]: Range: 11 cells, SP Cost: 14`,
  img: no_img_namespaceObject
}, {
  id: "callSpiritSphere",
  level: 0,
  dependencies: [],
  dependent: [{
    id: "spiritSpheresCollect"
  }, {
    id: "absorbSpiritSphere"
  }, {
    id: "fallingBlossoms"
  }, {
    id: "pacify"
  }, {
    id: "spiritualCadence"
  }, {
    id: "tripleAttack"
  }],
  element: null,
  skillName: "Call Spirit Sphere",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Misc
Target: Self
Requirement: None
Description: Summons a Spirit Sphere that will orbit the user. Summoned sphere is maintained for 10 minutes. Each sphere increases Atk and DEF by 3.
[Lv 1]: Summon 1 Spirit Sphere,
[Lv 2]: Summon 2 Spirit Sphere,
[Lv 3]: Summon 3 Spirit Sphere,
[Lv 4]: Summon 4 Spirit Sphere,
[Lv 5]: Summon 5 Spirit Sphere`,
  img: no_img_namespaceObject
}, {
  id: "calmSpirits",
  level: 0,
  dependencies: [{
    id: "spiritualCadence",
    minLevel: 3
  }],
  dependent: [{
    id: "devaRetaliation"
  }],
  element: null,
  skillName: "Calm Spirits",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Self
Requirement: Spiritual Cadence Lv: 3
Description: Enter a meditative state that greatly boosting your Physical and Magical Defenses and Mitigates Damage received. This also adds effects to certain skills but comes with drawbacks such as reduces Attack, Movement Speed and Attack speed. Additionally, grants a bonus of +80 Hard Defense and +10 Critical Defense. Each cast requires 5 Spirit Sphere.
[Lv 1]: Physical Defense +8%, Critical Defense +4%, Mitigates 2% of incoming damage. Attack -10%, Movement Speed -2%, Attack Speed -2%.
[Lv 2]: Physical Defense +16%, Critical Defense +8%, Mitigates 4% of incoming damage. Attack -20%, Movement Speed -4%, Attack Speed -4%.
[Lv 3]: Physical Defense +24%, Critical Defense +12%, Mitigates 6% of incoming damage. Attack -30%, Movement Speed -6%, Attack Speed -6%.
[Lv 4]: Physical Defense +32%, Critical Defense +16%, Mitigates 8% of incoming damage. Attack -40%, Movement Speed -8%, Attack Speed -8%.
[Lv 5]: Physical Defense +40%, Critical Defense +20%, Mitigates 10% of incoming damage. Attack -50%, Movement Speed -10%, Attack Speed -10%.`,
  img: no_img_namespaceObject
}, {
  id: "chainCombo",
  level: 0,
  dependencies: [{
    id: "tripleAttack",
    minLevel: 5
  }],
  dependent: [{
    id: "comboFinish"
  }],
  element: null,
  skillName: "Chain Combo",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Self
Range: 2
Requirement: Triple Attack Lv: 5
Description: Chain Combo is a powerful melee attack that can be used after Raging Trifecta Blow, delivering a devastating follow-up strike. Attack power increases further if the user is a Champion, based on their Base Level. When wielding a Knuckle-class weapon, deals additional damage and reduces cast delay. In Furious Spirits state, Adds twice your CRIT as TRUE DAMAGE to skill hits. In Calm Spirits state, adds your Soft Defense and half of Hard Defense as Physical Damage and become 5x5 AoE.
[Lv 1]: Atk 350%, SP Cost: 7,
[Lv 2]: Atk 450%, SP Cost: 9,
[Lv 3]: Atk 500%, SP Cost: 11,
[Lv 4]: Atk 650%, SP Cost: 13,
[Lv 5]: Atk 700%, SP Cost: 15`,
  img: no_img_namespaceObject
}, {
  id: "comboFinish",
  level: 0,
  dependencies: [{
    id: "chainCombo",
    minLevel: 3
  }],
  dependent: [{
    id: "tigerFist"
  }, {
    id: "chainCrushCombo"
  }],
  element: null,
  skillName: "Combo Finish",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Self
Range: 2
Requirement: Chain Combo Lv: 3
Description: Combo Finish delivers a powerful melee strike that can be used after Chain Combo, dealing substantial damage that scales with the user's STR. Attack power increases further if the user is a Champion, based on their Base Level. When wielding a Knuckle-class weapon, deals additional damage and reduces cast delay. In Furious Spirits state, Adds twice your CRIT as TRUE DAMAGE to skill hits. In Calm Spirits state, adds your Soft Defense and half of Hard Defense as Physical Damage and become 7x7 AoE. Each cast requires 1 Spirit Sphere.
[Lv 1]: Atk 600% + STR%, SP Cost: 8,
[Lv 2]: Atk 750% + STR%, SP Cost: 8,
[Lv 3]: Atk 900% + STR%, SP Cost: 8,
[Lv 4]: Atk 1050% + STR%, SP Cost: 8,
[Lv 5]: Atk 1200% + STR%, SP Cost: 8`,
  img: no_img_namespaceObject
}, {
  id: "devaRetaliation",
  level: 0,
  dependencies: [{
    id: "calmSpirits",
    minLevel: 5
  }],
  dependent: [],
  element: null,
  skillName: "Deva Retaliation",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Enemy
Range: 2
Requirement: Calm Spirits Lv: 5
Description: Release the pain accumulated during your battles while in a state of Calm Spirit, striking enemies with the full force based on the number of Spirit Spheres consumed and your Stored Suffering. Requires the user to be in the Calm Spirits state.Can be performed Manually, after Pacify, or as part of a Combo. After use, all forms of SP recovery (Natural, Potion, Food, Skill, etc.) are penalized for 10 seconds. The penalty decreases progressively each second. Manually: Select Deva Retaliation via a hotkey and click on the desired target. This will consume the current number of Spirit Spheres. Each sphere consumed will use 10% of your current Stored Suffering and put the skill on a 3-second cooldown per sphere used. Pacify: Can be used on a target immobilized by Pacify at Level 5, consuming only 1 Spirit Sphere and 10% of your current Stored Suffering. The cooldown is 9 seconds. Combo: Can be used during the 'Combo Finish' cooldown, avoiding casting time. Consumes only 1 Spirit Sphere and 10% of current Stored Suffering. Cooldown is 3 seconds.`,
  img: no_img_namespaceObject
}, {
  id: "fallingBlossoms",
  level: 0,
  dependencies: [{
    id: "callSpiritSphere",
    minLevel: 5
  }],
  dependent: [{
    id: "furiousSpirits"
  }],
  element: null,
  skillName: "Falling Blossoms",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Self
Requirement: Call Spirit Sphere Lv: 5
Description: Passively enhances evasion and grants a chance to dodge any physical attack. Requires Furious Spirits to activate, it allows the user have a chance to nullify a ranged physical attack by instantly leaping towards the attacker.
[Lv 1]: Passive: Flee +4, Dodge 1%, Active: Nullify chance 10%, SP Cost: 14, HP Cost: 1%,
[Lv 2]: Passive: Flee +8, Dodge 2%, Active: Nullify chance 20%, SP Cost: 18, HP Cost: 2%,
[Lv 3]: Passive: Flee +12, Dodge 3%, Active: Nullify chance 30%, SP Cost: 22, HP Cost: 3%,
[Lv 4]: Passive: Flee +16, Dodge 4%, Active: Nullify chance 40%, SP Cost: 26, HP Cost: 4%,
[Lv 5]: Passive: Flee +20, Dodge 5%, Active: Nullify chance 50%, SP Cost: 30, HP Cost: 5%`,
  img: no_img_namespaceObject
}, {
  id: "furiousSpirits",
  level: 0,
  dependencies: [{
    id: "fallingBlossoms",
    minLevel: 3
  }],
  dependent: [{
    id: "asuraStrike"
  }],
  element: null,
  skillName: "Furious Spirits",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Self
Requirement: Falling Blossoms Lv: 3
Description: Enter a heightened state of rage, boosting your Attack and Critical Hit Chance while increasing Attack Speed based on lost HP. This also adds effects to certain skills but comes with drawbacks such as increased SP consumption, reduced SP regeneration, and decreased physical defense. Additionally, grants a bonus of +50 Weapon Attack and +10 Critical Chance. Each cast requires 5 Spirit Sphere.
[Lv 1]: Attack +5%, Critical Hit Chance +5%, +1% Attack Speed every 9% HP lost, SP consumption +4%, SP regeneration -10% , Physical Defense -10%,
[Lv 2]: Attack +10%, Critical Hit Chance +10%, +1% Attack Speed every 8% HP lost, SP consumption +8%, SP regeneration -20% , Physical Defense -20%, SP Consumption +18%, SP Regen -20%, Hard DEF -20%,
[Lv 3]: Attack +15%, Critical Hit Chance +15%, +1% Attack Speed every 7% HP lost, SP consumption +12%, SP regeneration -30% , Physical Defense -30%,
[Lv 4]: Attack +20%, Critical Hit Chance +20%, +1% Attack Speed every 6% HP lost, SP consumption +8%, SP regeneration -40% , Physical Defense -40%, SP Consumption +16%, SP Regen -40%, Hard DEF -40%,
[Lv 5]: Attack +25%, Critical Hit Chance +25%, +1% Attack Speed every 5% HP lost, SP consumption +20%, SP regeneration -50% , Physical Defense -50%`,
  img: no_img_namespaceObject
}, {
  id: "ironHand",
  level: 0,
  dependencies: [{
    id: "demonBane",
    minLevel: 10
  }, {
    id: "divineProtection",
    minLevel: 10
  }],
  dependent: [{
    id: "tripleAttack"
  }],
  element: null,
  skillName: "Iron Hand",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Passive
Type: Physical
Requirement: Demon Bane Lv: 10, Divine Protection Lv: 10
Description: Increase attack with Knuckle Class Weapons or Bare Handed. When [Lv 10], it increases Aspd in 6%. Attack bonus granted by this skill is of the Equipment type.
[Lv 1]: Bare Handed: Atk +6, Knuckle: Atk +3,
[Lv 2]: Bare Handed: Atk +12, Knuckle: Atk +6,
[Lv 3]: Bare Handed: Atk +18, Knuckle: Atk +9,
[Lv 4]: Bare Handed: Atk +24, Knuckle: Atk +12,
[Lv 5]: Bare Handed: Atk +30, Knuckle: Atk +15,
[Lv 6]: Bare Handed: Atk +36, Knuckle: Atk +18,
[Lv 7]: Bare Handed: Atk +42, Knuckle: Atk +21,
[Lv 8]: Bare Handed: Atk +48, Knuckle: Atk +24,
[Lv 9]: Bare Handed: Atk +54, Knuckle: Atk +27,
[Lv 10]: Bare Handed: Atk +60, Knuckle: Atk +30`,
  img: no_img_namespaceObject
}, {
  id: "occultImpaction",
  level: 0,
  dependencies: [{
    id: "pacify",
    minLevel: 1
  }],
  dependent: [{
    id: "throwSpiritSphere"
  }],
  element: null,
  skillName: "Occult Impaction",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Enemy
Range: 6
Requirement: Pacify Lv: 1
Description: Strike with a force that scales with the targets DEF. Damage is always Neutral. In Furious Spirits state, increases range to 6 cells. In Calm Spirits state, adds your Hard DEF as True Damage at the damage. Each cast requires 1 Spirit Sphere.
[Lv 1]: Atk [Target DEF/2 x 1]%, SP Consumption: 11,
[Lv 2]: Atk [Target DEF/2 x 2]%, SP Consumption: 12,
[Lv 3]: Atk [Target DEF/2 x 3]%, SP Consumption: 13,
[Lv 4]: Atk [Target DEF/2 x 4]%, SP Consumption: 14,
[Lv 5]: Atk [Target DEF/2 x 5]%, SP Consumption: 15`,
  img: no_img_namespaceObject
}, {
  id: "pacify",
  level: 0,
  dependencies: [{
    id: "callSpiritSphere",
    minLevel: 5
  }],
  dependent: [{
    id: "palmStrike"
  }, {
    id: "bodyRelocation"
  }, {
    id: "occultImpaction"
  }, {
    id: "throwSpiritSphere"
  }],
  element: null,
  skillName: "Pacify",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Self
Requirement: Call Spirit Sphere Lv: 5
Description: Temporarily halt the aggression of an enemy by capturing them in a Pacify status when they attempt a melee attack during Reaction Time. Only melee physical attacks can activate this skill, although it can be used against ranged attacks if the user is within melee range. In Furious Spirits state, damage of skills (except Asura Strike and Deva Retaliation) is increased by 4% per level learned of Pacify when used against a target captured by the Pacify skill. In Calm Spirits state, receive half of your Hard Defense and a quarter of your Soft Defense as True Defense for 0.8 seconds per level learned in Pacify.
[Lv 1]: Reaction Time 0.5s, Duration 5.4s,
[Lv 2]: Reaction Time 0.7s, Duration 5.8s,
[Lv 3]: Reaction Time 0.9s, Duration 6.2s,
[Lv 4]: Reaction Time 1.1s, Duration 6.6s,
[Lv 5]: Reaction Time 1.3s, Duration 7.0s
Note: Duration is reduced to 2 seconds on elite, miniboss, and boss monsters.`,
  img: no_img_namespaceObject
}, {
  id: "spiritualCadence",
  level: 0,
  dependencies: [{
    id: "callSpiritSphere",
    minLevel: 5
  }],
  dependent: [{
    id: "calmSpirits"
  }],
  element: null,
  skillName: "Spiritual Cadence",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Self
Requirement: Call Spirit Sphere Lv: 5
Description: Passively recovers HP and SP recovery every 10 seconds when the characte its not walking. Requires Calm Spirits to activate, forces the player into a deep meditation, greatly accelerating recovery. The player remains seated even if attacked and cannot move until the meditation is complete.
[Lv 1]: Passive: Recovers (10 +0.4% MaxHP) HP and (6 +0.4% MaxSP) SP, Active: Meditates for 2 seconds.
[Lv 2]: Passive: Recovers (20 +0.8% MaxHP) HP and (12 +0.8% MaxSP) SP, Active: Meditates for 4 seconds.
[Lv 3]: Passive: Recovers (30 +1.2% MaxHP) HP and (18 +1.2% MaxSP) SP, Active: Meditates for 6 seconds.
[Lv 4]: Passive: Recovers (40 +1.6% MaxHP) HP and (24 +1.6% MaxSP) SP, Active: Meditates for 8 seconds.
[Lv 5]: Passive: Recovers (50 +2% MaxHP) HP and (30 +2% MaxSP) SP, Active: Meditates for 10 seconds.`,
  img: no_img_namespaceObject
}, {
  id: "throwSpiritSphere",
  level: 0,
  dependencies: [{
    id: "occultImpaction",
    minLevel: 3
  }, {
    id: "pacify",
    minLevel: 2
  }],
  dependent: [{
    id: "bodyRelocation"
  }],
  element: null,
  skillName: "Throw Spirit Sphere",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Enemy
Range: 6
Requirement: Occult Impaction Lv: 3, Pacify Lv: 2
Description: Hurl spirit spheres at your enemy, dealing 200% damage per sphere. The number of hits depends on the skill level. Damage is influenced by the users Base Level. In Furious Spirits state, increases range by 6 cells. In Calm Spirits state, adds your Hard DEF as True Damage at the damage. Each cast requires 1 Spirit Sphere.
[Lv 1]: Sphere Hit 1 Time,
[Lv 2]: Sphere Hit 2 Times,
[Lv 3]: Sphere Hit 3 Times,
[Lv 4]: Sphere Hit 4 Times,
[Lv 5]: Sphere Hit 5 Times`,
  img: no_img_namespaceObject
}, {
  id: "tripleAttack",
  level: 0,
  dependencies: [{
    id: "callSpiritSphere",
    minLevel: 5
  }, {
    id: "ironHand",
    minLevel: 3
  }],
  dependent: [{
    id: "tigerFist"
  }, {
    id: "chainCrushCombo"
  }, {
    id: "chainCombo"
  }],
  element: null,
  skillName: "Triple Attack",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Self
Range: 1
Requirement: Call Spirit Sphere Lv: 5, Iron Hand Lv: 3 
Description: Triple Attack provides a chance to automatically unleash a triple strike during battle or can be manually activated. When activated manually, it costs SP. In Furious Spirits state, Adds twice your CRIT as TRUE DAMAGE to skill hits. In Calm Spirits state, adds your Soft Defense and half of Hard Defense as Physical Damage and become 3x3 AoE. Chance to automatically activate on normal attacks is 30%. Triple Attack can be used after any combo to reset the combo chain.
[Lv 1]: 120% Atk, Manual Activation SP Cost: 3,
[Lv 2]: 140% Atk, Manual Activation SP Cost: 4,
[Lv 3]: 160% Atk, Manual Activation SP Cost: 5,
[Lv 4]: 180% Atk, Manual Activation SP Cost: 6,
[Lv 5]: 200% Atk, Manual Activation SP Cost: 7,
[Lv 6]: 220% Atk, Manual Activation SP Cost: 8,
[Lv 7]: 240% Atk, Manual Activation SP Cost: 9,
[Lv 8]: 260% Atk, Manual Activation SP Cost: 10,
[Lv 9]: 280% Atk, Manual Activation SP Cost: 11,
[Lv 10]: 300% Atk, Manual Activation SP Cost: 12`,
  img: no_img_namespaceObject
}];

/*  author Chalykh Maksim 
  # data 10.02.2025 
  # email: chalyh.maksim.88@mail.ru */
;// ./src/img/icon_hpr/icon_hpr_1.png
const icon_hpr_1_namespaceObject = __webpack_require__.p + "c5e658de35d7005d0306.png";
;// ./src/img/icon_hpr/icon_hpr_2.png
const icon_hpr_2_namespaceObject = __webpack_require__.p + "4c7b44e6517e2a22970f.png";
;// ./src/img/icon_hpr/icon_hpr_3.png
const icon_hpr_3_namespaceObject = __webpack_require__.p + "ddc387ad583e22bfb942.png";
;// ./src/img/icon_hpr/icon_hpr_4.png
const icon_hpr_4_namespaceObject = __webpack_require__.p + "dde9e33727a8bd627c2b.png";
;// ./src/js/listSkills/AcolyteHighPriest.js
/*  author Chalykh Maksim 
  # data 10.02.2025 
  # email: chalyh.maksim.88@mail.ru */

 // заглушка





// список скилов HighPriest
const skillsHighPriest = [{
  id: "assumptio",
  level: 0,
  dependencies: [{
    id: "angelus",
    minLevel: 5
  }, {
    id: "impositioManus",
    minLevel: 3
  }],
  dependent: [],
  element: null,
  skillName: "Assumptio",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Ally
Range: 9
Requirement: Angelus Lv: 5, Impositio Manus Lv: 3
Description: Increases target's Defense, and recieved Healing amount for, the skill's duration. Can be used in conjunction with Kyrie Eleison.
[Lv 1]: DEF +50, Healing +2%, Duration: 20 seconds,
[Lv 2]: DEF +100, Healing +4%, Duration: 40 seconds,
[Lv 3]: DEF +150, Healing +6%, Duration: 60 seconds,
[Lv 4]: DEF +200, Healing +8%, Duration: 80 seconds,
[Lv 5]: DEF +250, Healing +10%, Duration: 100 seconds`,
  img: icon_hpr_1_namespaceObject
}, {
  id: "basilica",
  level: 0,
  dependencies: [{
    id: "demonBane",
    minLevel: 3
  }, {
    id: "divineProtection",
    minLevel: 3
  }, {
    id: "sanctuary",
    minLevel: 1
  }],
  dependent: [],
  element: null,
  skillName: "Basilica",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Self
Range: 4
Requirement: Demon Bane Lv: 3, Divine Protection Lv: 3, Sanctuary Lv: 1
Description: Creates a sacred basilica in a [5x5] area around the user, sharing the benefits of Demon Bane and Divine Protection with allies within the basilica. Allies who already possess these skills will have their effects increased by 50%. For the user, activates the effects of Demon Bane and Divine Protection every 3 seconds. Catalyst: 3x Holy Water.
[Lv 1]: SP Cost: 60, Duration: 20,
[Lv 2]: SP Cost: 70, Duration: 30,
[Lv 3]: SP Cost: 80, Duration: 40,
[Lv 4]: SP Cost: 90, Duration: 50,
[Lv 5]: SP Cost: 100, Duration: 60`,
  img: icon_hpr_2_namespaceObject
}, {
  id: "manaRecharge",
  level: 0,
  dependencies: [{
    id: "maceMastery",
    minLevel: 10
  }, {
    id: "demonBane",
    minLevel: 10
  }],
  dependent: [],
  element: null,
  skillName: "Mana Recharge",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Passive
Type: Misc
Requirement: Mace Mastery Lv: 10, Demon Bane Lv: 10
Description: Reduces the amount of SP, that is consumed when using skills.
[Lv 1]: -4% SP Consumption,
[Lv 2]: -8% SP Consumption,
[Lv 3]: -12% SP Consumption,
[Lv 4]: -16% SP Consumption,
[Lv 5]: -20% SP Consumption`,
  img: icon_hpr_4_namespaceObject
}, {
  id: "meditatio",
  level: 0,
  dependencies: [{
    id: "impositioManus",
    minLevel: 3
  }, {
    id: "increaseSPRecovery",
    minLevel: 3
  }, {
    id: "lexDivina",
    minLevel: 3
  }],
  dependent: [],
  element: null,
  skillName: "Meditatio",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Passive
Type: Magical
Requirement: Impositio Manus Lv: 3, Increase SP Recovery Lv: 3, Lex Divina Lv: 3
Description: Increases SP and, MaxSP Recovery, as well as the amount of, HP restored by Healing skills.
[Lv 1]: MaxSP +1%, SP Recovery +3%,
[Lv 2]: MaxSP +2%, SP Recovery +6%,
[Lv 3]: MaxSP +3%, SP Recovery +9%,
[Lv 4]: MaxSP +4%, SP Recovery +12%,
[Lv 5]: MaxSP +5%, SP Recovery +15%,
[Lv 6]: MaxSP +6%, SP Recovery +18%,
[Lv 7]: MaxSP +7%, SP Recovery +21%,
[Lv 8]: MaxSP +8%, SP Recovery +24%,
[Lv 9]: MaxSP +9%, SP Recovery +27%,
[Lv 10]: MaxSP +10%, SP Recovery +30%`,
  img: icon_hpr_3_namespaceObject
}];

/*  author Chalykh Maksim 
  # data 10.02.2025 
  # email: chalyh.maksim.88@mail.ru */
;// ./src/js/listSkills/AcolyteChampion.js
/*  author Chalykh Maksim 
  # data 10.02.2025 
  # email: chalyh.maksim.88@mail.ru */

 // заглушка

// список скилов Champion
const skillsChampion = [{
  id: "chainCrushCombo",
  level: 0,
  dependencies: [{
    id: "tripleAttack",
    minLevel: 8
  }, {
    id: "comboFinish",
    minLevel: 4
  }],
  dependent: [],
  element: null,
  skillName: "Chain Crush Combo",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Self
Range: 2
Requirement: Triple Attack Lv: 8, Combo Finish Lv: 4
Description: Chain Crush Combo is a devastating melee attack that can be used after Combo Finish, delivering a series of rapid crushing blows. Attack power increases further based on their Base Level. When wielding a Knuckle-class weapon, deals additional damage and reduces cast delay. In Furious Spirits state, Adds twice your CRIT as TRUE DAMAGE to skill hits. In Calm Spirits state, adds your Soft Defense and half of Hard Defense as Physical Damage and become 9x9 AoE. Each cast requires 2 Spirit Sphere.
[Lv 1]: Atk 400%, SP Cost: 16,
[Lv 2]: Atk 800%, SP Cost: 22,
[Lv 3]: Atk 1200%, SP Cost: 28,
[Lv 4]: Atk 1600%, SP Cost: 34,
[Lv 5]: Atk 2000%, SP Cost: 40`,
  img: no_img_namespaceObject
}, {
  id: "palmStrike",
  level: 0,
  dependencies: [{
    id: "pacify",
    minLevel: 4
  }, {
    id: "bodyRelocation",
    minLevel: 3
  }],
  dependent: [],
  element: null,
  skillName: "Palm Strike",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Enemy
Range: 1
Requirement: Pacify Lv: 4, Body Relocation Lv: 3
Description: Rush toward the enemy and deliver a powerful palm strike, pushing them back while dealing melee damage after a 1 second delay. Requires the user to be in Furious Spirits or Calm Spirits status. If the target collides with an obstacle or cannot be pushed, they receive additional damage. in Furious Spirits state, adds a damage multiplier based on your STR. In Calm Spirits state, adds a damage multiplier based on your VIT.
[Lv 1]: Atk 300%, 7 SP, Range and Knock Back: 1 cell,
[Lv 2]: Atk 450%, 9 SP, Range and Knock Back: 2 cells,
[Lv 3]: Atk 600%, 11 SP, Range and Knock Back: 3 cells,
[Lv 4]: Atk 750%, 13 SP, Range and Knock Back: 4 cells,
[Lv 5]: Atk 900%, 15 SP, Range and Knock Back: 5 cells`,
  img: no_img_namespaceObject
}, {
  id: "spiritSpheresCollect",
  level: 0,
  dependencies: [{
    id: "callSpiritSphere",
    minLevel: 5
  }],
  dependent: [],
  element: null,
  skillName: "Spirit Spheres Collect",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Misc
Target: Self
Requirement: Call Spirit Sphere Lv: 5
Description: Extends the limit of Spirit Spheres the user can have and increases the Atk and DEF they grant by 2. Doubles the quantity of Spirit Spheres summoned by the Summon Spirit Sphere skill.
[Lv 1]: Spirit Spheres Limit: +1, Duration: 80 sec,
[Lv 2]: Spirit Spheres Limit: +2, Duration: 120 sec,
[Lv 3]: Spirit Spheres Limit: +3, Duration: 160 sec,
[Lv 4]: Spirit Spheres Limit: +4, Duration: 200 sec,
[Lv 5]: Spirit Spheres Limit: +5, Duration: 240 sec`,
  img: no_img_namespaceObject
}, {
  id: "tigerFist",
  level: 0,
  dependencies: [{
    id: "tripleAttack",
    minLevel: 8
  }, {
    id: "comboFinish",
    minLevel: 4
  }],
  dependent: [],
  element: null,
  skillName: "Tiger Fist",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Self
Range: 2
Requirement: Triple Attack Lv: 8, Combo Finish Lv: 4
Description: Tiger Fist is a powerful area-of-effect strike that can be used after Combo Finish, delivering a devastating blow within a 5x5 area and has a high chance of immobilizing enemies. Attack power increases further based on their Base Level. When wielding a Knuckle-class weapon, deals additional damage and reduces cast delay. In Furious Spirits state, Adds twice your CRIT as TRUE DAMAGE to skill hits. In Calm Spirits state, adds your Soft Defense and half of Hard Defense as Physical Damage and become 9x9. Each cast requires 2 Spirit Sphere.
[Lv 1]: Atk 350%, SP Cost: 9,
[Lv 2]: Atk 500%, SP Cost: 13,
[Lv 3]: Atk 650%, SP Cost: 17,
[Lv 4]: Atk 800%, SP Cost: 21,
[Lv 5]: Atk 950%, SP Cost: 25`,
  img: no_img_namespaceObject
}];

/*  author Chalykh Maksim 
  # data 10.02.2025 
  # email: chalyh.maksim.88@mail.ru */
;// ./src/img/icon_swd/icon_swd_1.gif
const icon_swd_1_namespaceObject = __webpack_require__.p + "4c668292b05d5435f604.gif";
;// ./src/img/icon_swd/icon_swd_3.gif
const icon_swd_3_namespaceObject = __webpack_require__.p + "350dd5c675a746abe69b.gif";
;// ./src/img/icon_swd/icon_swd_4.gif
const icon_swd_4_namespaceObject = __webpack_require__.p + "c0985b39e0544762624a.gif";
;// ./src/img/icon_swd/icon_swd_5.gif
const icon_swd_5_namespaceObject = __webpack_require__.p + "dd224620374a552403cb.gif";
;// ./src/img/icon_swd/icon_swd_6.gif
const icon_swd_6_namespaceObject = __webpack_require__.p + "0bc7541abb09fc9139fc.gif";
;// ./src/img/icon_swd/icon_swd_7.gif
const icon_swd_7_namespaceObject = __webpack_require__.p + "757f002a9098efab7018.gif";
;// ./src/img/icon_swd/icon_swd_8.gif
const icon_swd_8_namespaceObject = __webpack_require__.p + "0bc64641027854879fa5.gif";
;// ./src/img/icon_swd/icon_swd_9.gif
const icon_swd_9_namespaceObject = __webpack_require__.p + "07185ec338a5690d8dea.gif";
;// ./src/js/listSkills/Swordman.js
/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */

 // заглушка









// список скилов Swordman
const skillsSwordman = [{
  id: "oneHandedSwordMastery",
  level: 0,
  dependencies: [],
  dependent: [{
    id: "swordQuicken"
  }, {
    id: "twoHandedSwordMastery"
  }],
  element: null,
  skillName: "One-Handed Sword Mastery",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Passive
Type: Physical
Requirement: None
Description: Increase Attack with One Handed Sword. The benefits of this skill are improved upon reaching 2nd class. When [Lv 10], it increases Attack in 6%. Attack bonus granted by this skill is of the Equipment type.
[Lv 1]: Atk +2, 2nd Class Additional Atk +1,
[Lv 2]: Atk +4, 2nd Class Additional Atk +2,
[Lv 3]: Atk +6, 2nd Class Additional Atk +3,
[Lv 4]: Atk +8, 2nd Class Additional Atk +4,
[Lv 5]: Atk +10, 2nd Class Additional Atk +5,
[Lv 6]: Atk +12, 2nd Class Additional Atk +6,
[Lv 7]: Atk +14, 2nd Class Additional Atk +7,
[Lv 8]: Atk +16, 2nd Class Additional Atk +8,
[Lv 9]: Atk +18, 2nd Class Additional Atk +9,
[Lv 10]: Atk +20, 2nd Class Additional Atk +10`,
  img: icon_swd_1_namespaceObject
}, {
  id: "oneSpearMastery",
  level: 0,
  dependencies: [],
  dependent: [{
    id: "spearQuicken"
  }, {
    id: "twoHandedSpearMastery"
  }, {
    id: "pierce"
  }],
  element: null,
  skillName: "One-Spear Mastery",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Passive
Type: Physical
Requirement: None
Description: Increase Attack with One-Handed Spear Weapons. Second Class The benefits of this skill are improved upon reaching 2nd class. When [Lv 10], it increases Hit Rate in 6%. Attack bonus granted by this skill is of the Equipment type.
[Lv 1]: Atk +2, 2nd Class Additional Atk +1,
[Lv 2]: Atk +4, 2nd Class Additional Atk +2,
[Lv 3]: Atk +6, 2nd Class Additional Atk +3,
[Lv 4]: Atk +8, 2nd Class Additional Atk +4,
[Lv 5]: Atk +10, 2nd Class Additional Atk +5,
[Lv 6]: Atk +12, 2nd Class Additional Atk +6,
[Lv 7]: Atk +14, 2nd Class Additional Atk +7,
[Lv 8]: Atk +16, 2nd Class Additional Atk +8,
[Lv 9]: Atk +18, 2nd Class Additional Atk +9,
[Lv 10]: Atk +20, 2nd Class Additional Atk +10`,
  img: icon_swd_9_namespaceObject
}, {
  id: "bash",
  level: 0,
  dependencies: [],
  dependent: [{
    id: "magnumBreak"
  }],
  element: null,
  skillName: "Bash",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
Range: 1
Requirement: None
Description: Hits an enemy with crushing force.
[Lv 1]: 130% Damage, HIT +5%,
[Lv 2]: 160% Damage, HIT +10%,
[Lv 3]: 190% Damage, HIT +15%,
[Lv 4]: 220% Damage, HIT +20%,
[Lv 5]: 250% Damage, HIT +25%,
[Lv 6]: 280% Damage, HIT +30%,
[Lv 7]: 310% Damage, HIT +35%,
[Lv 8]: 340% Damage, HIT +40%,
[Lv 9]: 370% Damage, HIT +45%,
[Lv 10]: 400% Damage, HIT +50%
Formula: ATK%: 100 + (30 x Skill Lv)`,
  img: icon_swd_4_namespaceObject
}, {
  id: "magnumBreak",
  level: 0,
  dependencies: [{
    id: "bash",
    minLevel: 5
  }],
  dependent: [],
  element: null,
  skillName: "Magnum Break",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Self
Requirement: Bash Lv: 5
Description: Drain a small amount of the casters HP to inflict Fire property damage in a 7x7 area around the user and Knock Back them 2 cells backwards. The damage varies between the center 5x5 cells and the edges 7x7 cells. For 10 seconds per skill level after Magnum Break, casters weapon will receive a 20% Fire property strength enhancement.
[Lv 1]: Atk 120%, Edge: Atk 60%, HP Cost: 30,
[Lv 2]: Atk 140%, Edge: Atk 70%, HP Cost: 29,
[Lv 3]: Atk 160%, Edge: Atk 80%, HP Cost: 28,
[Lv 4]: Atk 180%, Edge: Atk 90%, HP Cost: 27,
[Lv 5]: Atk 200%, Edge: Atk 100%, HP Cost: 26,
[Lv 6]: Atk 220%, Edge: Atk 110%, HP Cost: 25,
[Lv 7]: Atk 240%, Edge: Atk 120%, HP Cost: 24,
[Lv 8]: Atk 260%, Edge: Atk 130%, HP Cost: 23,
[Lv 9]: Atk 280%, Edge: Atk 140%, HP Cost: 22,
[Lv 10]: Atk 300%, Edge: Atk 150%, HP Cost: 21
Formula: ATK%: 100 + (20 x Skill Lv)`,
  img: icon_swd_6_namespaceObject
}, {
  id: "provoke",
  level: 0,
  dependencies: [],
  dependent: [{
    id: "endure"
  }],
  element: null,
  skillName: "Provoke",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Misc
Target: Enemy
Range: 9
Requirement: None
Description: Enrage a single target to decrease players defense based on VIT or monsters physical defense at cost of increasing its Attack Strength. Against players, only their Soft Defense is decreased. Ineffective against the Undead and Boss monster. Interrupts skill casts.
[Lv 1]: Success Rate: 55%, Enemys Atk +5%, DEF -10%,
[Lv 2]: Success Rate: 60%, Enemys Atk +8%, DEF -15%,
[Lv 3]: Success Rate: 65%, Enemys Atk +11%, DEF -20%,
[Lv 4]: Success Rate: 70%, Enemys Atk +14%, DEF -25%,
[Lv 5]: Success Rate: 75%, Enemys Atk +17%, DEF -30%,
[Lv 6]: Success Rate: 80%, Enemys Atk +20%, DEF -35%,
[Lv 7]: Success Rate: 85%, Enemys Atk +23%, DEF -40%,
[Lv 8]: Success Rate: 90%, Enemys Atk +26%, DEF -45%,
[Lv 9]: Success Rate: 95%, Enemys Atk +29%, DEF -50%,
[Lv 10]: Success Rate: 100%, Enemys Atk +32%, DEF -55%,`,
  img: icon_swd_5_namespaceObject
}, {
  id: "endure",
  level: 0,
  dependencies: [{
    id: "provoke",
    minLevel: 5
  }],
  dependent: [{
    id: "riding"
  }],
  element: null,
  skillName: "Endure",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Self
Requirement: Provoke Lv: 5
Description: Removes the attack and movement delay that typically occurs when a character receives damage, allowing the character to retaliate or escape without being slowed. Additionally, it increases both Defense and Critical Defense for the duration.
[Lv 1]: DEF +5, CRIT DEF +1, Duration: 7 seconds,
[Lv 2]: DEF +10, CRIT DEF +2, Duration: 9 seconds,
[Lv 3]: DEF +15, CRIT DEF +3, Duration: 11 seconds,
[Lv 4]: DEF +20, CRIT DEF +4, Duration: 13 seconds,
[Lv 5]: DEF +25, CRIT DEF +5, Duration: 15 seconds,
[Lv 6]: DEF +30, CRIT DEF +6, Duration: 17 seconds,
[Lv 7]: DEF +35, CRIT DEF +7, Duration: 19 seconds,
[Lv 8]: DEF +40, CRIT DEF +8, Duration: 21 seconds,
[Lv 9]: DEF +45, CRIT DEF +9, Duration: 23 seconds,
[Lv 10]: DEF +50, CRIT DEF +10, Duration: 25 seconds,`,
  img: icon_swd_7_namespaceObject
}, {
  id: "increaseHPRecovery",
  level: 0,
  dependencies: [],
  dependent: [{
    id: "movingHPRecovery"
  }],
  element: null,
  skillName: "Increase HP Recovery",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Passive
Type: Misc
Requirement: None
Description: Increases the amount of HP recovered through your natural HP regeneration. Also boosts HP Potions healing in 3% per Skill Level.
[Lv 1]: HP Recovery +[5 + 0.1% of MaxHP],
[Lv 2]: HP Recovery +[10 + 0.2% of MaxHP],
[Lv 3]: HP Recovery +[15 + 0.3% of MaxHP],
[Lv 4]: HP Recovery +[20 + 0.4% of MaxHP],
[Lv 5]: HP Recovery +[25 + 0.5% of MaxHP],
[Lv 6]: HP Recovery +[30 + 0.6% of MaxHP],
[Lv 7]: HP Recovery +[35 + 0.7% of MaxHP],
[Lv 8]: HP Recovery +[40 + 0.8% of MaxHP],
[Lv 9]: HP Recovery +[45 + 0.9% of MaxHP],
[Lv 10]: HP Recovery +[50 + 1.0% of MaxHP]`,
  img: icon_swd_3_namespaceObject
}, {
  id: "movingHPRecovery",
  level: 0,
  dependencies: [{
    id: "increaseHPRecovery",
    minLevel: 5
  }],
  dependent: [{
    id: "sacrifice"
  }],
  element: null,
  skillName: "Moving HP Recovery",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Passive
Type: Misc
Requirement: Increase HP Recovery Lv: 5
Description: Enables natural HP regeneration while moving or fighting.
[Lv 1]: Natural recovery every 24 seconds.
[Lv 2]: Natural recovery every 22 seconds.
[Lv 3]: Natural recovery every 20 seconds.
[Lv 4]: Natural recovery every 18 seconds.
[Lv 5]: Natural recovery every 16 seconds.
[Lv 6]: Natural recovery every 14 seconds.
[Lv 7]: Natural recovery every 12 seconds.
[Lv 8]: Natural recovery every 10 seconds.
[Lv 9]: Natural recovery every 8 seconds.
[Lv 10]: Natural recovery every 6 seconds.`,
  img: icon_swd_8_namespaceObject
}];

/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */
;// ./src/js/listSkills/SwordmanCrusader.js
/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */

 // заглушка

// список скилов Crusader
const skillsCrusader = [{
  id: "cavalryMastery",
  level: 0,
  dependencies: [{
    id: "riding",
    minLevel: 1
  }],
  dependent: [],
  element: null,
  skillName: "Cavalry Mastery",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Passive
Type: Physical
Requirement: Riding Lv: 1
Description: Removes the ASPD and Flee penalty while mounted. Increases Hit Rate and Flee Rate by 10% and Critical when not mounted.
[Lv 1]: -8% ASPD and Flee penalty.
[Lv 2]: -16% ASPD and Flee penalty.
[Lv 3]: -24% ASPD and Flee penalty.
[Lv 4]: -32% ASPD and Flee penalty.
[Lv 5]: -40% ASPD and Flee penalty.`,
  img: no_img_namespaceObject
}, {
  id: "defender",
  level: 0,
  dependencies: [{
    id: "guard",
    minLevel: 5
  }, {
    id: "faith",
    minLevel: 5
  }],
  dependent: [],
  element: null,
  skillName: "Defender",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Self
Requirement: Guard Lv: 5, Faith Lv: 5
Description: Requires the user to have a shield equipped. Produces an aura of protection to buffer all incoming ranged physical damage at cost of attack speed and Move Speed. Skill level affects damage reduction and Atk speed. This skill can be switched on and off.
[Lv 1]: Damage reduction from long distance: 20%, Atk Speed: 80%,
[Lv 2]: Damage reduction from long distance: 35%, Atk Speed: 85%,
[Lv 3]: Damage reduction from long distance: 50%, Atk Speed: 90%,
[Lv 4]: Damage reduction from long distance: 65%, Atk Speed: 95%,
[Lv 5]: Damage reduction from long distance: 80%, Atk Speed:100%`,
  img: no_img_namespaceObject
}, {
  id: "devotion",
  level: 0,
  dependencies: [{
    id: "heal",
    minLevel: 5
  }, {
    id: "guard",
    minLevel: 3
  }],
  dependent: [{
    id: "martyrsHeal"
  }],
  element: null,
  skillName: "Devotion",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Misc
Target: Ally
Range: 11
Requirement: Heal Lv: 5, Guard Lv: 3
Description: Links to a single target to share part of its damage. The targets level and the casters level must not differ by more than 10. The skill remains active until the player takes damage out of range or the duration expires. Every linked allies increase the maximum HP of Crusader. Crusaders cannot use this skill if already linked to another ally with Devotion. Maximum Connections: 5 Allies.
[Lv 1]: Damage redirected 55%, +100 HP and 0.4% HP for every linked allie, Duration: 30sec,
[Lv 2]: Damage redirected 65%, +200 HP and 0.8% HP for every linked allie, Duration: 45sec,
[Lv 3]: Damage redirected 75%, +300 HP and 1.2% HP for every linked allie, Duration: 60sec,
[Lv 4]: Damage redirected 85%, +400 HP and 1.6% HP for every linked allie, Duration: 75sec,
[Lv 5]: Damage redirected 95%, +500 HP and 2% HP for every linked allie, Duration: 90sec`,
  img: no_img_namespaceObject
}, {
  id: "faith",
  level: 0,
  dependencies: [],
  dependent: [{
    id: "defender"
  }, {
    id: "heal"
  }, {
    id: "holyCross"
  }, {
    id: "reflectorShield"
  }, {
    id: "shieldCharge"
  }, {
    id: "sacrifice"
  }],
  element: null,
  skillName: "Faith",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Self
Requirement: None
Description: Passively Enhances MaxHP. Activating removes all allies bound to [Devotion].
[Lv 1]: MaxHP + 200, MaxHP + 1%,
[Lv 2]: MaxHP + 400, MaxHP + 2%,
[Lv 3]: MaxHP + 600, MaxHP + 3%,
[Lv 4]: MaxHP + 800, MaxHP + 4%,
[Lv 5]: MaxHP +1000, MaxHP + 5%,
[Lv 6]: MaxHP +1200, MaxHP + 6%,
[Lv 7]: MaxHP +1400, MaxHP + 7%,
[Lv 8]: MaxHP +1600, MaxHP + 8%,
[Lv 9]: MaxHP +1800, MaxHP + 9%,
[Lv 10]: MaxHP +2000, MaxHP + 10%`,
  img: no_img_namespaceObject
}, {
  id: "grandCross",
  level: 0,
  dependencies: [{
    id: "holyCross",
    minLevel: 5
  }],
  dependent: [{
    id: "gloriaDomini"
  }],
  element: null,
  skillName: "Grand Cross",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical or Magical
Target: Self
Range: 5
Requirement: Holy Cross Lv: 5
Description: Channel a divine cross around yourself and sacrificing 10% of your HP to inflicts Holy Property Damage to all enemies in a Cross-Shaped area. When wielding One-Handed Swords, Maces, or Daggers, the attack is Magical. When wielding Two-Handed Swords, Spears, or Axes, the attack is Physical. Damage is affected by STR and INT, with INT halved for Physical Damage and STR halved for Magical Damage. These attribute bonuses scale with Base Level reaching 100% effectiveness at User Max Level. Against Undead and Demon monsters, has a 100% chance to inflict Blind. Casting cannot be interrupted.
[Lv 1]: Atk or MAtk 125% x Hits,
[Lv 2]: Atk or MAtk 150% x Hits,
[Lv 3]: Atk or MAtk 175% x Hits,
[Lv 4]: Atk or MAtk 200% x Hits,
[Lv 5]: Atk or MAtk 225% x Hits,
[Lv 6]: Atk or MAtk 250% x Hits,
[Lv 7]: Atk or MAtk 275% x Hits,
[Lv 8]: Atk or MAtk 300% x Hits,
[Lv 9]: Atk or MAtk 325% x Hits,
[Lv 10]: Atk or MAtk 350% x Hits
Details: AfterCastActDelay set as ASPD + 220; CastTime: 1100; Fixed Cast Time: 400; Cooldown: 1500.`,
  img: no_img_namespaceObject
}, {
  id: "guard",
  level: 0,
  dependencies: [],
  dependent: [{
    id: "defender"
  }, {
    id: "devotion"
  }, {
    id: "reflectorShield"
  }],
  element: null,
  skillName: "Guard",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Self
Requirement: None
Description: Requires a Shield equipped. Allows the user to block physical attacks with the equipped shield by chance in duration. The player will be forced to pause momentarily whenever this skill blocks damage. This skill can be switched on and off.
[Lv 1]: Block Chance: 5%,
[Lv 2]: Block Chance: 10%,
[Lv 3]: Block Chance: 14%,
[Lv 4]: Block Chance: 18%,
[Lv 5]: Block Chance: 21%,
[Lv 6]: Block Chance: 24%,
[Lv 7]: Block Chance: 26%,
[Lv 8]: Block Chance: 28%,
[Lv 9]: Block Chance: 29%,
[Lv 10]: Block Chance: 30%`,
  img: no_img_namespaceObject
}, {
  id: "heal",
  level: 0,
  dependencies: [{
    id: "faith",
    minLevel: 7
  }],
  dependent: [{
    id: "devotion"
  }],
  element: null,
  skillName: "Heal",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Ally
Range: 9
Requirement: Faith Lv: 7
Description: Restores HP of a single target. This skill is affected by Base Level, INT and MAtk. Versus Corrupt property targets, inflicts Holy property damage equal 75% the amount of the HP restored.
[Lv 1]: SP Cost: 13,
[Lv 2]: SP Cost: 16,
[Lv 3]: SP Cost: 19,
[Lv 4]: SP Cost: 22,
[Lv 5]: SP Cost: 25,
[Lv 6]: SP Cost: 28,
[Lv 7]: SP Cost: 31,
[Lv 8]: SP Cost: 34,
[Lv 9]: SP Cost: 37,
[Lv 10]: SP Cost: 40`,
  img: no_img_namespaceObject
}, {
  id: "holyCross",
  level: 0,
  dependencies: [{
    id: "faith",
    minLevel: 5
  }],
  dependent: [{
    id: "grandCross"
  }],
  element: null,
  skillName: "Holy Cross",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical or Magical
Target: Enemy
Range: 2
Requirement: Faith Lv: 5
Description: Strikes the target with a divine cross of light, dealing Holy Property Damage with a 30% chance to inflict Blind. When wielding One-Handed Swords, Maces, or Daggers, the attack is Magical. When wielding Two-Handed Swords, Spears, or Axes, the attack is physical. Damage is affected by STR and INT, with INT halved for Physical Damage and STR halved for Magical Damage. These attribute bonuses scale with Base Level, reaching 100% effectiveness at User Max Level.
[Lv 1]: Atk or MAtk 135%,
[Lv 2]: Atk or MAtk 170%,
[Lv 3]: Atk or MAtk 205%,
[Lv 4]: Atk or MAtk 240%,
[Lv 5]: Atk or MAtk 275%,
[Lv 6]: Atk or MAtk 310%,
[Lv 7]: Atk or MAtk 345%,
[Lv 8]: Atk or MAtk 380%,
[Lv 9]: Atk or MAtk 415%,
[Lv 10]: Atk or MAtk 450%`,
  img: no_img_namespaceObject
}, {
  id: "martyrsHeal",
  level: 0,
  dependencies: [{
    id: "devotion",
    minLevel: 1
  }],
  dependent: [{
    id: "gospel"
  }],
  element: null,
  skillName: "Martyr's Heal",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Self
Range: 9
Requirement: Devotion Lv: 1
Description: Center a divine cross on yourself, sacrificing HP and SP to heal allies around you over time. The cross moves with you and doesn't prevent the use of any attacks or skills. The healing is based on your learned Heal skill and your maximum HP. Allies under the effect of Devotion receive the healing even outside the area of effect. The user is not healed and has their movement speed reduced by 30%. This skill can be switched on and off.
[Lv 1]: Heal every 10 seconds, Drain 19 SP and 1% HP every 10 seconds,
[Lv 2]: Heal every 9 seconds, Drain 23 SP and 1% HP every 9 seconds,
[Lv 3]: Heal every 8 seconds, Drain 27 SP and 1% HP every 8 seconds,
[Lv 4]: Heal every 7 seconds, Drain 31 SP and 1% HP every 7 seconds,
[Lv 5]: Heal every 6 seconds, Drain 35 SP and 1% HP every 6 seconds,
[Lv 6]: Heal every 5 seconds, Drain 39 SP and 1% HP every 5 seconds,
[Lv 7]: Heal every 4 seconds, Drain 43 SP and 1% HP every 4 seconds,
[Lv 8]: Heal every 3 seconds, Drain 47 SP and 1% HP every 3 seconds,
[Lv 9]: Heal every 2 seconds, Drain 51 SP and 1% HP every 2 seconds,
[Lv 10]: Heal every 1 seconds, Drain 55 SP and 1% HP every 1 seconds`,
  img: no_img_namespaceObject
}, {
  id: "reflectorShield",
  level: 0,
  dependencies: [{
    id: "guard",
    minLevel: 5
  }, {
    id: "faith",
    minLevel: 5
  }],
  dependent: [],
  element: null,
  skillName: "Reflector Shield",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Self
Requirement: Guard Lv: 5, Faith Lv: 5
Description: Requires a Shield equipped. Produces an aura of retaliation to reflect a portion of the close range physical damage taken back at the attacker for five minutes. This skill is deactivated when the shield is released in duration.
[Lv 1]: Damage Reflected: 4%,
[Lv 2]: Damage Reflected: 8%,
[Lv 3]: Damage Reflected: 12%,
[Lv 4]: Damage Reflected: 16%,
[Lv 5]: Damage Reflected: 20%,
[Lv 6]: Damage Reflected: 24%,
[Lv 7]: Damage Reflected: 28%,
[Lv 8]: Damage Reflected: 32%,
[Lv 9]: Damage Reflected: 36%,
[Lv 10]: Damage Reflected: 40%`,
  img: no_img_namespaceObject
}, {
  id: "riding",
  level: 0,
  dependencies: [{
    id: "endure",
    minLevel: 1
  }],
  dependent: [{
    id: "cavalryMastery"
  }],
  element: null,
  skillName: "Riding",
  maxLevel: 1,
  inform: `Max Lv: 1
Skill Form: Passive
Type: Physical
Requirement: Endure Lv: 1
Description: Enables the user to ride a Peco Peco. Increases Weight Limit by 750 but reduces ASPD and Flee by 50% while mounted. Riding affects Weapon Size Modifiers as follows:, One-Handed Sword: Small 100%, Medium 125%, Large 100%, Two-Handed Sword: Small 100%, Medium 100%, Large 125%, Spear: Small 100%, Medium 100%, Large 125%, PecoPeco Breeder.`,
  img: no_img_namespaceObject
}, {
  id: "shieldBoomerang",
  level: 0,
  dependencies: [{
    id: "shieldCharge",
    minLevel: 3
  }],
  dependent: [{
    id: "shieldChain"
  }],
  element: null,
  skillName: "Shield Boomerang",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
Range: 6 ~ 10
Requirement: Shield Charge Lv: 3
Description: Requires a Shield equipped. Hurls the equipped shield like a boomerang at a single target to inflict Ranged Physical Damage. Damage is greatly affected by Weight, Defense and Refine Level of the equipped Shield. If used against targets with reduced Move Speed, it causes Immobilization for 0.5 seconds. Immobilized status is applied to the target even if it is immune to immobilizations.
[Lv 1]: Atk 135% + 10% of Shield Weight + Def + Refine ,
[Lv 2]: Atk 170% + 20% of Shield Weight + Def + Refine ,
[Lv 3]: Atk 205% + 30% of Shield Weight + Def + Refine ,
[Lv 4]: Atk 240% + 40% of Shield Weight + Def + Refine ,
[Lv 5]: Atk 275% + 50% of Shield Weight + Def + Refine ,
[Lv 6]: Atk 310% + 60% of Shield Weight + Def + Refine ,
[Lv 7]: Atk 345% + 70% of Shield Weight + Def + Refine ,
[Lv 8]: Atk 380% + 80% of Shield Weight + Def + Refine ,
[Lv 9]: Atk 415% + 90% of Shield Weight + Def + Refine ,
[Lv 10]: Atk 450% + 100% of Shield Weight + Def + Refine`,
  img: no_img_namespaceObject
}, {
  id: "shieldCharge",
  level: 0,
  dependencies: [{
    id: "faith",
    minLevel: 5
  }],
  dependent: [{
    id: "shieldBoomerang"
  }],
  element: null,
  skillName: "Shield Charge",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Enemy
Range: 4
Requirement: Faith Lv: 5
Description: Requires a Shield equipped. Smashes the equipped shield into a single target to inflict physical damage and push it backwards, knockback it and reducing its Move Speed by 15% for 8 seconds. If the target collides with any obstacle, there is a 12% chance per skill level of being Stunned. Slow caused by this skill works on any type of monster.
[Lv 1]: Atk 180%, Knockback: 5 cells,
[Lv 2]: Atk 260%, Knockback: 6 cells,
[Lv 3]: Atk 340%, Knockback: 7 cells,
[Lv 4]: Atk 420%, Knockback: 8 cells,
[Lv 5]: Atk 500%, Knockback: 9 cells`,
  img: no_img_namespaceObject
}, {
  id: "spearQuicken",
  level: 0,
  dependencies: [{
    id: "oneSpearMastery",
    minLevel: 5
  }],
  dependent: [],
  element: null,
  skillName: "Spear Quicken",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Self
Requirement: One-Spear Mastery Lv: 5
Description: Requires Spear Class Weapon. Temporarily boosts Attack speed, Critcal and Hit. This effect is also knocked off by Decrease AGI and Quagmire.
[Lv 1]: Duration: 84sec, Critcal +1, Hit +2,
[Lv 2]: Duration: 108sec, Critcal +2, Hit +4,
[Lv 3]: Duration: 132sec, Critcal +3, Hit +6,
[Lv 4]: Duration: 156sec, Critcal +4, Hit +8,
[Lv 5]: Duration: 180sec, Critcal +5, Hit +10,
[Lv 6]: Duration: 204sec, Critcal +6, Hit +12,
[Lv 7]: Duration: 228sec, Critcal +7, Hit +14,
[Lv 8]: Duration: 252sec, Critcal +8, Hit +16,
[Lv 9]: Duration: 276sec, Critcal +9, Hit +18,
[Lv 10]: Duration: 300sec, Critcal +10, Hit +20`,
  img: no_img_namespaceObject
}, {
  id: "swordQuicken",
  level: 0,
  dependencies: [{
    id: "oneHandedSwordMastery",
    minLevel: 5
  }],
  dependent: [],
  element: null,
  skillName: "Sword Quicken",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Self
Requirement: One-Handed Sword Mastery Lv: 5
Description: Requires Swords Class Weapon. Temporarily boosts Attack Speed, Critcal and Hit. This effect is also knocked off by Decrease AGI and Quagmire.
[Lv 1]: Duration: 84sec, Critcal +1, Hit +2,
[Lv 2]: Duration: 108sec, Critcal +2, Hit +4,
[Lv 3]: Duration: 132sec, Critcal +3, Hit +6,
[Lv 4]: Duration: 156sec, Critcal +4, Hit +8,
[Lv 5]: Duration: 180sec, Critcal +5, Hit +10,
[Lv 6]: Duration: 204sec, Critcal +6, Hit +12,
[Lv 7]: Duration: 228sec, Critcal +7, Hit +14,
[Lv 8]: Duration: 252sec, Critcal +8, Hit +16,
[Lv 9]: Duration: 276sec, Critcal +9, Hit +18,
[Lv 10]: Duration: 300sec, Critcal +10, Hit +20`,
  img: no_img_namespaceObject
}, {
  id: "twoHandedSpearMastery",
  level: 0,
  dependencies: [{
    id: "oneSpearMastery",
    minLevel: 5
  }],
  dependent: [],
  element: null,
  skillName: "Two-Handed Spear Mastery",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Passive
Type: Physical
Requirement: One-Spear Mastery Lv: 5
Description: Increase Attack with Two-Handed Spear Weapons. When [Lv 10], it increases damage on All Size in 6%. Attack bonus granted by this skill is of the Equipment type.
[Lv 1]: Atk +4,
[Lv 2]: Atk +8,
[Lv 3]: Atk +12,
[Lv 4]: Atk +16,
[Lv 5]: Atk +20,
[Lv 6]: Atk +24,
[Lv 7]: Atk +28,
[Lv 8]: Atk +32,
[Lv 9]: Atk +36,
[Lv 10]: Atk +40`,
  img: no_img_namespaceObject
}];

/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */
;// ./src/js/listSkills/SwordmanPaladin.js
/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */

 // заглушка

// список скилов Paladin
const skillsPaladin = [{
  id: "gloriaDomini",
  level: 0,
  dependencies: [{
    id: "grandCross",
    minLevel: 5
  }],
  dependent: [],
  element: null,
  skillName: "Gloria Domini",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Physical or Magical
Target: Enemy
Range: 9
Requirement: Grand Cross Lv: 5
Description: Unleashes a divine cross with immense pressure on a single target, dealing Holy Property Damage. Target have their holy resistance reduced by 20% for a few seconds. When wielding One-Handed Swords, Maces, or Daggers, the attack is Magical. When wielding Two-Handed Swords, Spears, or Axes, the attack is Physical. Damage is affected by STR and INT. For Physical, each point of STR increases Atk by 3%, with INT having half effectiveness. For Magical, each point of INT increases MAtk by 3%, with STR having half effectiveness. Against Shadow and Corrupt elements, it also drains a portion of the targets SP.
[Lv 1]: Atk or MAtk 250%,
[Lv 2]: Atk or MAtk 400%,
[Lv 3]: Atk or MAtk 550%,
[Lv 4]: Atk or MAtk 750%,
[Lv 5]: Atk or MAtk 850%
Details: AfterCastActDelay set as ASPD + 220; CastTime: 1400; Fixed Cast Time: 600.`,
  img: no_img_namespaceObject
}, {
  id: "gospel",
  level: 0,
  dependencies: [{
    id: "martyrsHeal",
    minLevel: 4
  }],
  dependent: [],
  element: null,
  skillName: "Gospel",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Misc
Target: Self
Requirement: Martyr's Heal Lv: 4
Description: Center a divine cross on yourself, granting various effects to party members within the area, depending on the skill level used. While active, a portion of your HP and SP is drained every 10 seconds. The aura moves with you and doesn't prevent the use of any skills or attacks. Allies under Devotion receive and emit the aura even outside the area of effect. Only one aura can be active at a time, and allies must be within a 10 base level difference for the effects to apply.
[Lv 1]: Thorns Aura - Grants a Thorns bonus based on the users level and increases all Thorns effects on affected targets by 20%.
[Lv 2]: Prestige Aura - Grants an All Stats bonus based on the users attributes and increases resistance to negative effects by 10%.
[Lv 3]: Protection Aura - Grants a Physical Defense bonus based on the users defense and increases the Max HP of affected targets by 10%.
[Lv 4]: Salvation Aura - Grants Property Resistance based on the users INT and increases Hard Magic Defense of affected targets by 10.
[Lv 5]: Inspiration Aura - Grants a Sacred property bonus to magical and physical damage, and increases Attack and Magic Attack by 50.`,
  img: no_img_namespaceObject
}, {
  id: "sacrifice",
  level: 0,
  dependencies: [{
    id: "faith",
    minLevel: 10
  }, {
    id: "movingHPRecovery",
    minLevel: 1
  }],
  dependent: [],
  element: null,
  skillName: "Sacrifice",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Self
Requirement: Faith Lv: 10, Moving HP Recovery Lv: 1
Description: Embrace the power of sacrifice to boost your Attack and Skill Damage. Each Basic Attack or Skill empowered by Martyrs Reckoning drains 3% of your MaxHP.
[Lv 1]: Extra Damage 1 x HP Drained,
[Lv 2]: Extra Damage 1.1 x HP Drained,
[Lv 3]: Extra Damage 1.2 x HP Drained,
[Lv 4]: Extra Damage 1.3 x HP Drained,
[Lv 5]: Extra Damage 1.4 x HP Drained
Now, HP consumption occurs only once per use of the skill.
`,
  img: no_img_namespaceObject
}, {
  id: "shieldChain",
  level: 0,
  dependencies: [{
    id: "shieldBoomerang",
    minLevel: 5
  }],
  dependent: [],
  element: null,
  skillName: "Shield Chain",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
Range: 6 ~ 10
Requirement: Shield Boomerang Lv: 5
Description: Requires a Shield equipped. Enable the chance of striking an enemy 5 times with a Shield while in battle. Damage is greatly affected by Weight, Defense, Refine Level of the equipped Shield and Shield Boomerang skill level. If used on a target that was recently immobilized (up to 3 seconds after any immobilization), deals additional True Damage based on the Weight, Defense and Refine Level . Casting Time and Range increase with the level of this skill.
[Lv 1]: Variable C.Time: 0.36 Seconds, Range: 6 cells,
[Lv 2]: Variable C.Time: 0.36 Seconds, Range: 6 cells,
[Lv 3]: Variable C.Time: 0.42 Seconds, Range: 7 cells,
[Lv 4]: Variable C.Time: 0.42 Seconds, Range: 7 cells,
[Lv 5]: Variable C.Time: 0.48 Seconds, Range: 8 cells,
[Lv 6]: Variable C.Time: 0.48 Seconds, Range: 8 cells,
[Lv 7]: Variable C.Time: 0.54 Seconds, Range: 9 cells,
[Lv 8]: Variable C.Time: 0.54 Seconds, Range: 9 cells,
[Lv 9]: Variable C.Time: 0.6 Seconds, Range: 10 cells,
[Lv 10]: Variable C.Time: 0.6 Seconds, Range: 10 cells
Details: AfterCastActDelay set as ASPD + 220; Fixed Cast Time: 600.`,
  img: no_img_namespaceObject
}];

/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */
;// ./src/js/listSkills/SwordmanKnight.js
/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */

 // заглушка

// список скилов Knight
const skillsKnight = [{
  id: "twoHandedSwordMastery",
  level: 0,
  dependencies: [{
    id: "oneHandedSwordMastery",
    minLevel: 5
  }],
  dependent: [{
    id: "parry"
  }],
  element: null,
  skillName: "Two-Handed Sword Mastery",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Passive
Type: Physical
Requirement: One-Handed Sword Mastery Lv: 5
Description: Increase Attack with Two-Handed Sword Weapons. When [Lv 10], it increases Crital Rate in +6. Attack bonus granted by this skill is of the Equipment type.
[Lv 1]: Atk +4,
[Lv 2]: Atk +8,
[Lv 3]: Atk +12,
[Lv 4]: Atk +16,
[Lv 5]: Atk +20,
[Lv 6]: Atk +24,
[Lv 7]: Atk +28,
[Lv 8]: Atk +32,
[Lv 9]: Atk +36,
[Lv 10]: Atk +40`,
  img: no_img_namespaceObject
}, {
  id: "counterAttack",
  level: 0,
  dependencies: [{
    id: "swordQuicken",
    minLevel: 5
  }],
  dependent: [{
    id: "bowlingBash"
  }, {
    id: "dashingBash"
  }, {
    id: "parry"
  }],
  element: null,
  skillName: "Counter Attack",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Self
Requirement: Sword Quicken Lv: 5
Description: Requires Swords Class Weapon. If an opponent physically attacks a player casting Auto Counter while facing it, the attack will be blocked and the caster will perform one Critical attack on them. Weapon Attack plus Weapon Weight increase the attack multiplier for this skill.
[Lv 1]: Auto Counter Duration: 0.4 sec,
[Lv 2]: Auto Counter Duration: 0.6 sec,
[Lv 3]: Auto Counter Duration: 0.8 sec,
[Lv 4]: Auto Counter Duration: 1.0 sec,
[Lv 5]: Auto Counter Duration: 1.2 sec`,
  img: no_img_namespaceObject
}, {
  id: "bowlingBash",
  level: 0,
  dependencies: [{
    id: "swordQuicken",
    minLevel: 10
  }, {
    id: "counterAttack",
    minLevel: 5
  }],
  dependent: [],
  element: null,
  skillName: "Bowling Bash",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
Range: 2
Requirement: Sword Quicken Lv: 10, Counter Attack Lv: 5
Description: Requires a Sword-class weapon. Deals physical damage to all enemies within range and pushes them backward. The number of hits depends on the weapon type and the number of targets, up to a maximum of four hits. For every level of Bash learned, the skill damage increases by 10%. Additionally, every 5 Base Levels above 50 increase the skill damage by 10%. One-Handed Sword: 2 ~ 3 targets: 2 hits, 4 ~ 5 targets: 3 hits, 6+ targets: 4 hits. Two-Handed Sword: 1 target: 2 hits, 2 ~ 3 targets: 3 hits, 4+ targets: 4 hits.
[Lv 1]: Atk 110% x Hits,
[Lv 2]: Atk 120% x Hits,
[Lv 3]: Atk 130% x Hits,
[Lv 4]: Atk 140% x Hits,
[Lv 5]: Atk 150% x Hits,
[Lv 6]: Atk 160% x Hits,
[Lv 7]: Atk 170% x Hits,
[Lv 8]: Atk 180% x Hits,
[Lv 9]: Atk 190% x Hits,
[Lv 10]: Atk 200% x Hits
Details: AfterCastActDelay set as ASPD + 220; CastTime: 200; Fixed Cast Time: 400; Cooldown: 1000.
`,
  img: no_img_namespaceObject
}, {
  id: "dashingBash",
  level: 0,
  dependencies: [{
    id: "counterAttack",
    minLevel: 5
  }],
  dependent: [],
  element: null,
  skillName: "Dashing Bash",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Enemy
Range: 6 ~ 10
Requirement: Counter Attack Lv: 5
Description: Requires Swords Class Weapon. Quickly approach and attack a distant target. Movement Speed multiplies the skill's damage, and can even double it.
[Lv 1]: Atk 200%, Range: 6,
[Lv 2]: Atk 300%, Range: 7,
[Lv 3]: Atk 400%, Range: 8,
[Lv 4]: Atk 500%, Range: 9,
[Lv 5]: Atk 600%, Range: 10
Details: AfterCastActDelay set as ASPD + 220; Fixed Cast Time: 400.`,
  img: no_img_namespaceObject
}, {
  id: "swordQuicken",
  level: 0,
  dependencies: [{
    id: "oneHandedSwordMastery",
    minLevel: 5
  }],
  dependent: [{
    id: "auraBlade"
  }, {
    id: "bowlingBash"
  }, {
    id: "counterAttack"
  }],
  element: null,
  skillName: "Sword Quicken",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Self
Requirement: One-Handed Sword Mastery Lv: 5
Description: Requires Swords Class Weapon. Temporarily boosts Attack Speed, Critcal and Hit. This effect is also knocked off by Decrease AGI and Quagmire.
[Lv 1]: Duration: 84sec, Critcal +1, Hit +2,
[Lv 2]: Duration: 108sec, Critcal +2, Hit +4,
[Lv 3]: Duration: 132sec, Critcal +3, Hit +6,
[Lv 4]: Duration: 156sec, Critcal +4, Hit +8,
[Lv 5]: Duration: 180sec, Critcal +5, Hit +10,
[Lv 6]: Duration: 204sec, Critcal +6, Hit +12,
[Lv 7]: Duration: 228sec, Critcal +7, Hit +14,
[Lv 8]: Duration: 252sec, Critcal +8, Hit +16,
[Lv 9]: Duration: 276sec, Critcal +9, Hit +18,
[Lv 10]: Duration: 300sec, Critcal +10, Hit +20`,
  img: no_img_namespaceObject
}, {
  id: "riding",
  level: 0,
  dependencies: [{
    id: "endure",
    minLevel: 1
  }],
  dependent: [{
    id: "cavalryMastery"
  }],
  element: null,
  skillName: "Riding",
  maxLevel: 1,
  inform: `Max Lv: 1
Skill Form: Passive
Type: Physical
Requirement: Endure Lv: 1
Description: Enables the user to ride a Peco Peco. Increases Weight Limit by 750 but reduces ASPD and Flee by 50% while mounted. Riding affects Weapon Size Modifiers as follows:, One-Handed Sword: Small 100%, Medium 125%, Large 100%, Two-Handed Sword: Small 100%, Medium 100%, Large 125%, Spear: Small 100%, Medium 100%, Large 125%, PecoPeco Breeder.`,
  img: no_img_namespaceObject
}, {
  id: "cavalryMastery",
  level: 0,
  dependencies: [{
    id: "riding",
    minLevel: 1
  }],
  dependent: [],
  element: null,
  skillName: "Cavalry Mastery",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Passive
Type: Physical
Requirement: Riding Lv: 1
Description: Reduces the ASPD and Flee penalty while mounted.
[Lv 1]: -8% ASPD and Flee penalty.
[Lv 2]: -16% ASPD and Flee penalty.
[Lv 3]: -24% ASPD and Flee penalty.
[Lv 4]: -32% ASPD and Flee penalty.
[Lv 5]: -40% ASPD and Flee penalty.`,
  img: no_img_namespaceObject
}, {
  id: "pierce",
  level: 0,
  dependencies: [{
    id: "oneSpearMastery",
    minLevel: 5
  }],
  dependent: [{
    id: "spearStab"
  }],
  element: null,
  skillName: "Pierce",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
Range: Weapon
Requirement: One-Spear Mastery Lv: 5
Description: Requires Spear Class Weapon. Thrusts the equipped spear into a single target to deal Ranged Physical Damage. Each successful hit with this skill grants Stabbing stacks for 60 seconds, which can accumulate up to 50 times. Stabbing stacks increases the number of hits and damage dealt. Stabbing stacks: 0 to 10 stacks result in 1 hit, 11 to 30 stacks result in 2 hits, and 31 to 50 stacks result in 3 hits. Also, every 10 stacks gain +2% Aspd.
[Lv 1]: Atk 110% x Hits,
[Lv 2]: Atk 120% x Hits,
[Lv 3]: Atk 130% x Hits,
[Lv 4]: Atk 140% x Hits,
[Lv 5]: Atk 150% x Hits,
[Lv 6]: Atk 160% x Hits,
[Lv 7]: Atk 170% x Hits,
[Lv 8]: Atk 180% x Hits,
[Lv 9]: Atk 190% x Hits,
[Lv 10]: Atk 200% x Hits
New calculation: ATK% = (20 × Skill Lv) + (Stabbing Stacks × 2).`,
  img: no_img_namespaceObject
}, {
  id: "spearBoomerang",
  level: 0,
  dependencies: [{
    id: "spearStab",
    minLevel: 3
  }],
  dependent: [{
    id: "spiralPierce"
  }],
  element: null,
  skillName: "Spear Boomerang",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
Range: 6 ~ 10
Requirement: Spear Stab Lv: 3
Description: Requires Spear Class Weapon. Throws a spear at a target like a boomerang to inflict Ranged Physical Damage. Damage is greatly affected by Weight of equipped weapon. If used against targets with reduced Move Speed, it causes Immobilization for 0.5 seconds. Immobilized status is applied to the target even if it is immune to immobilizations.
[Lv 1]: Atk 135% + 10% of Weapon Weight,
[Lv 2]: Atk 170% + 20% of Weapon Weight,
[Lv 3]: Atk 205% + 30% of Weapon Weight,
[Lv 4]: Atk 240% + 40% of Weapon Weight,
[Lv 5]: Atk 275% + 50% of Weapon Weight,
[Lv 6]: Atk 310% + 60% of Weapon Weight,
[Lv 7]: Atk 345% + 70% of Weapon Weight,
[Lv 8]: Atk 380% + 80% of Weapon Weight,
[Lv 9]: Atk 415% + 90% of Weapon Weight,
[Lv 10]: Atk 450% + 100% of Weapon Weight`,
  img: no_img_namespaceObject
}, {
  id: "spearQuicken",
  level: 0,
  dependencies: [{
    id: "oneSpearMastery",
    minLevel: 5
  }],
  dependent: [{
    id: "concentration"
  }],
  element: null,
  skillName: "Spear Quicken",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Self
Requirement: One-Spear Mastery Lv: 5
Description: Requires Spear Class Weapon. Temporarily boosts Attack speed, Critcal and Hit. This effect is also knocked off by Decrease AGI and Quagmire.
[Lv 1]: Duration: 84sec, Critcal +1, Hit +2,
[Lv 2]: Duration: 108sec, Critcal +2, Hit +4,
[Lv 3]: Duration: 132sec, Critcal +3, Hit +6,
[Lv 4]: Duration: 156sec, Critcal +4, Hit +8,
[Lv 5]: Duration: 180sec, Critcal +5, Hit +10,
[Lv 6]: Duration: 204sec, Critcal +6, Hit +12,
[Lv 7]: Duration: 228sec, Critcal +7, Hit +14,
[Lv 8]: Duration: 252sec, Critcal +8, Hit +16,
[Lv 9]: Duration: 276sec, Critcal +9, Hit +18,
[Lv 10]: Duration: 300sec, Critcal +10, Hit +20`,
  img: no_img_namespaceObject
}, {
  id: "spearStab",
  level: 0,
  dependencies: [{
    id: "pierce",
    minLevel: 5
  }],
  dependent: [{
    id: "brandishSpear"
  }, {
    id: "spearBoomerang"
  }],
  element: null,
  skillName: "Spear Stab",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Enemy
Range: 4
Requirement: Pierce Lv: 5
Description: Requires Spear Class Weapon. Thrusts the equipped spear against a single target to deal Ranged Physical Damage, knockback it and reducing its Move Speed by 15% for 8 seconds. If the target collides with any obstacle, there is a 12% chance per skill level of being Stunned. Slow caused by this skill works on any type of monster.
[Lv 1]: Atk 180%, Knockback: 5 cells,
[Lv 2]: Atk 260%, Knockback: 6 cells,
[Lv 3]: Atk 340%, Knockback: 7 cells,
[Lv 4]: Atk 420%, Knockback: 8 cells,
[Lv 5]: Atk 500%, Knockback: 9 cells`,
  img: no_img_namespaceObject
}, {
  id: "brandishSpear",
  level: 0,
  dependencies: [{
    id: "spearStab",
    minLevel: 5
  }],
  dependent: [{
    id: "jointBeat"
  }],
  element: null,
  skillName: "Brandish Spear",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
Range: 3
Requirement: Spear Stab Lv: 5
Description: Requires Spear Class Weapon. Swings the equipped spear forward to a single target to inflict Ranged Physical Damage to all enemies in front of the user. Every 30 VIT increases the SkillRatio by 1% per Base Level. The player cannot change weapons during this time.
[Lv 1]: Atk 130% + VIT and B. Level Bonus,
[Lv 2]: Atk 160% + VIT and B. Level Bonus,
[Lv 3]: Atk 190% + VIT and B. Level Bonus,
[Lv 4]: Atk 220% + VIT and B. Level Bonus,
[Lv 5]: Atk 250% + VIT and B. Level Bonus,
[Lv 6]: Atk 280% + VIT and B. Level Bonus,
[Lv 7]: Atk 310% + VIT and B. Level Bonus,
[Lv 8]: Atk 340% + VIT and B. Level Bonus,
[Lv 9]: Atk 370% + VIT and B. Level Bonus,
[Lv 10]: Atk 400% + VIT and B. Level Bonus
Details: AfterCastActDelay set as ASPD + 220; Note: Has Hit -4.`,
  img: no_img_namespaceObject
}];

/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */
;// ./src/js/listSkills/SwordmanLordKnight.js
/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */

 // заглушка

// список скилов Lord Knight
const skillsLordKnight = [{
  id: "auraBlade",
  level: 0,
  dependencies: [{
    id: "swordQuicken",
    minLevel: 5
  }],
  dependent: [],
  element: null,
  skillName: "Aura Blade",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Self
Requirement: Sword Quicken Lv: 5
Description: Requires Swords Class Weapon. Produces a special aura around the sword blade to strengthen its power temporarily. For every Job Level above 50, the user gains +25 True Damage.
[Lv 1]: True Damage +50,
[Lv 2]: True Damage +100,
[Lv 3]: True Damage +150,
[Lv 4]: True Damage +200,
[Lv 5]: True Damage +250,
[Lv 6]: True Damage +300,
[Lv 7]: True Damage +350,
[Lv 8]: True Damage +400,
[Lv 9]: True Damage +450,
[Lv 10]: True Damage +500
Now, in addition to granting true damage, the skill also increases the user’s total true damage by (5 + Skill Lv)%.
True Damage Bonus: 50 + Skill Lv + Crit (for Basic Attacks, the bonus is doubled).`,
  img: no_img_namespaceObject
}, {
  id: "Berserk",
  level: 0,
  dependencies: [],
  dependent: [],
  element: null,
  skillName: "Berserk",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Self
Requirement: None
Description: Unleashes the power of rage to greatly enhance the user temporarily, at the cost of extreme vulnerability. Increases maximum HP, movement speed, attack speed by 30%, and attack power by 100%, while keeping the Endure state active. Reduces defense, magic defense, evasion, and healing received. Disables consumables, and attack skills. Disables switch of equipments.
[Lv 1]: Max HP +60%, FLEE -95%, DEF/MDEF -95%, Received healing -90%,
[Lv 2]: Max HP +70%, FLEE -90%, DEF/MDEF -95%, Received healing -90%,
[Lv 3]: Max HP +80%, FLEE -85%, DEF/MDEF -90%, Received healing -80%,
[Lv 4]: Max HP +90%, FLEE -80%, DEF/MDEF -90%, Received healing -80%,
[Lv 5]: Max HP +100%, FLEE -75%, DEF/MDEF -85%, Received healing -70%,
[Lv 6]: Max HP +110%, FLEE -70%, DEF/MDEF -85%, Received healing -70%,
[Lv 7]: Max HP +120%, FLEE -65%, DEF/MDEF -80%, Received healing -60%,
[Lv 8]: Max HP +130%, FLEE -60%, DEF/MDEF -80%, Received healing -60%,
[Lv 9]: Max HP +140%, FLEE -55%, DEF/MDEF -75%, Received healing -50%,
[Lv 10]: Max HP +150%, FLEE -50%, DEF/MDEF -75%, Received healing -50%`,
  img: no_img_namespaceObject
}, {
  id: "concentration",
  level: 0,
  dependencies: [{
    id: "spearQuicken",
    minLevel: 5
  }],
  dependent: [],
  element: null,
  skillName: "Concentration",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Self
Requirement: Spear Quicken Lv: 5
Description: Requires Spear Class Weapon. Boosts Attack Power and Hit Rate.
[Lv 1]: Atk and Hit +2%,
[Lv 2]: Atk and Hit +4%,
[Lv 3]: Atk and Hit +6%,
[Lv 4]: Atk and Hit +8%,
[Lv 5]: Atk and Hit +10%,
[Lv 6]: Atk and Hit +12%,
[Lv 7]: Atk and Hit +14%,
[Lv 8]: Atk and Hit +16%,
[Lv 9]: Atk and Hit +18%,
[Lv 10]: Atk and Hit +20%`,
  img: no_img_namespaceObject
}, {
  id: "jointBeat",
  level: 0,
  dependencies: [{
    id: "brandishSpear",
    minLevel: 7
  }],
  dependent: [],
  element: null,
  skillName: "Joint Beat",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
Range: 3
Requirement: Brandish Spear Lv: 7
Description: Requires Spear Class Weapon. Executes precision strikes at an enemys vital points, inflicting various debilitating effects.The skills ratio is influenced by the users Vitality minus the targets Vitality. Targets with higher Vitality may exhibit increased resistance against the debilitating effects, potentially reducing the skills efficacy.
[Lv 1]: Atk 110%, Random Break,
[Lv 2]: Atk 120%, Random Break,
[Lv 3]: Atk 130%, Random Break,
[Lv 4]: Atk 140%, Random Break,
[Lv 5]: Atk 150%, Ankle Break: Halves Move Speed,
[Lv 6]: Atk 160%, Wrist Break: Decreases Aspd by 25%,
[Lv 7]: Atk 170%, Knee Break: Decreases Move Speed by 30% and Aspd by 10%,
[Lv 8]: Atk 180%, Shoulder Break: Halves soft defense,
[Lv 9]: Atk 190%, Waist Break: Decreases soft defense by 25% and attack by 25%,
[Lv 10]: Atk 200%, Neck Break: Doubles damage from this skill and inflicts Bleeding`,
  img: no_img_namespaceObject
}, {
  id: "parry",
  level: 0,
  dependencies: [{
    id: "counterAttack",
    minLevel: 5
  }, {
    id: "twoHandedSwordMastery",
    minLevel: 10
  }],
  dependent: [],
  element: null,
  skillName: "Parry",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Self
Requirement: Counter Attack Lv: 5, Two-Handed Sword Mastery Lv: 10
Description: Requires Two-Handed Sword Class Weapon. Allows the user to block physical attacks with the equipped two-handed sword by chance temporarily. In PvP maps, the activation chance is influenced by your AGI and that of your opponent. For every 10 points of difference, the chance of blocking is reduced by 3%.
[Lv 1]: Block +23%,
[Lv 2]: Block +26%,
[Lv 3]: Block +29%,
[Lv 4]: Block +32%,
[Lv 5]: Block +35%,
[Lv 6]: Block +38%,
[Lv 7]: Block +41%,
[Lv 8]: Block +44%,
[Lv 9]: Block +47%,
[Lv 10]: Block +50%
To prevent abuse, the user no longer dodges attacks; instead, they mitigate 50% of the damage received, and the mitigated damage is added as bonus damage (not exceeding the user’s maximum HP).
Details: AfterCastActDelay set as ASPD + 220.`,
  img: no_img_namespaceObject
}, {
  id: "spiralPierce",
  level: 0,
  dependencies: [{
    id: "spearBoomerang",
    minLevel: 5
  }],
  dependent: [],
  element: null,
  skillName: "Spiral Pierce",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
Range: 6 ~ 10
Requirement: Spear Boomerang Lv: 5
Description: Requires Spear Class Weapon. Throws your spear with a spiraling motion, piercing the target five times. Damage is greatly affected by the Weight of the equipped weapon and the Spear Boomerang Learned Level. If used on a target that was recently immobilized (up to 3 seconds after any immobilization), adds the weapon's Weight as True Damage at the end of each hit. Casting Time and Range increase with the level of this skill.
[Lv 1]: Variable C.Time: 0.36 Seconds, Range: 6 cells,
[Lv 2]: Variable C.Time: 0.36 Seconds, Range: 6 cells,
[Lv 3]: Variable C.Time: 0.42 Seconds, Range: 7 cells,
[Lv 4]: Variable C.Time: 0.42 Seconds, Range: 7 cells,
[Lv 5]: Variable C.Time: 0.48 Seconds, Range: 8 cells,
[Lv 6]: Variable C.Time: 0.48 Seconds, Range: 8 cells,
[Lv 7]: Variable C.Time: 0.54 Seconds, Range: 9 cells,
[Lv 8]: Variable C.Time: 0.54 Seconds, Range: 9 cells,
[Lv 9]: Variable C.Time: 0.6 Seconds, Range: 10 cells,
[Lv 10]: Variable C.Time: 0.6 Seconds, Range: 10 cells
Formula: ATK%: (100 + (((W.Weight / 10) + (20 - Spear Boomerang Lv)) x Skill Lv)) x Hits
Details: AfterCastActDelay set as ASPD + 220; Fixed Cast Time: 600.`,
  img: no_img_namespaceObject
}];

/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */
;// ./src/img/icon_thf/icon_thf_1.png
const icon_thf_1_namespaceObject = __webpack_require__.p + "82c92fcd527e60deef59.png";
;// ./src/img/icon_thf/icon_thf_2.png
const icon_thf_2_namespaceObject = __webpack_require__.p + "57a16f1e6461a1be7c66.png";
;// ./src/img/icon_thf/icon_thf_3.png
const icon_thf_3_namespaceObject = __webpack_require__.p + "8b74a4e2c72359250e5f.png";
;// ./src/img/icon_thf/icon_thf_4.png
const icon_thf_4_namespaceObject = __webpack_require__.p + "fa11dedcf541ace63a05.png";
;// ./src/img/icon_thf/icon_thf_5.png
const icon_thf_5_namespaceObject = __webpack_require__.p + "eb7e35f6c7a942fe9e4e.png";
;// ./src/img/icon_thf/icon_thf_6.png
const icon_thf_6_namespaceObject = __webpack_require__.p + "3cb6e66aa4fc8ccbb841.png";
;// ./src/img/icon_thf/icon_thf_8.png
const icon_thf_8_namespaceObject = __webpack_require__.p + "2761b538c010e49dca86.png";
;// ./src/img/icon_thf/icon_thf_7.png
const icon_thf_7_namespaceObject = __webpack_require__.p + "6091b0f965c28229a9d0.png";
;// ./src/js/listSkills/Thief.js
/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */

 // заглушка









// список скилов Thief
const skillsThief = [{
  id: "improveDodge",
  level: 0,
  dependencies: [],
  dependent: [],
  element: null,
  skillName: "Improve Dodge",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Passive
Type: Physical
Requirement: None
Description: Increases FLEE and Movement Speed.
[Lv 1]: FLEE +3, Movement Speed: +1%,
[Lv 2]: FLEE +6, Movement Speed: +2%,
[Lv 3]: FLEE +9, Movement Speed: +3%,
[Lv 4]: FLEE +12, Movement Speed: +4%,
[Lv 5]: FLEE +15, Movement Speed: +5%,
[Lv 6]: FLEE +18, Movement Speed: +6%,
[Lv 7]: FLEE +21, Movement Speed: +7%,
[Lv 8]: FLEE +24, Movement Speed: +8%,
[Lv 9]: FLEE +27, Movement Speed: +9%,
[Lv 10]: FLEE +30, Movement Speed: +10%`,
  img: icon_thf_5_namespaceObject
}, {
  id: "doubleAttack",
  level: 0,
  dependencies: [],
  dependent: [{
    id: "soulDestroyer"
  }],
  element: null,
  skillName: "Double Attack",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Passive
Type: Physical
Range: 1
Requirement: None
Description: Grants a chance to inflict two hits instead of one when attacking with Dagger class weapons. Allows the use of Double Attack with bows at the level learned of Vulture Eye and with swords at the level learned of Sword Mastery.
[Lv 1]: 7% chance,
[Lv 2]: 14% chance,
[Lv 3]: 21% chance,
[Lv 4]: 28% chance,
[Lv 5]: 35% chance,
[Lv 6]: 42% chance,
[Lv 7]: 49% chance,
[Lv 8]: 56% chance,
[Lv 9]: 63% chance,
[Lv 10]: 70% chance`,
  img: icon_thf_1_namespaceObject
}, {
  id: "envenom",
  level: 0,
  dependencies: [],
  dependent: [{
    id: "detoxify"
  }, {
    id: "soulDestroyer"
  }, {
    id: "poisonWeapon"
  }, {
    id: "poisonery"
  }],
  element: null,
  skillName: "Envenom",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Enemy
Range: 2
**Requirement:*Description: Unleash a toxic assault with Poison elemental magic damage on your target, with a chance to inflict Poison status. Each level increases chance to poison the target. Every Base Level increases Skill Ratio by 3%.
[Lv 1]: MAtk 120%, Poison Chance: 14%,
[Lv 2]: MAtk 140%, Poison Chance: 18%,
[Lv 3]: MAtk 160%, Poison Chance: 22%,
[Lv 4]: MAtk 180%, Poison Chance: 26%,
[Lv 5]: MAtk 200%, Poison Chance: 30%,
[Lv 6]: MAtk 220%, Poison Chance: 34%,
[Lv 7]: MAtk 240%, Poison Chance: 38%,
[Lv 8]: MAtk 260%, Poison Chance: 42%,
[Lv 9]: MAtk 280%, Poison Chance: 46%,
[Lv 10]: MAtk 300%, Poison Chance: 50%`,
  img: icon_thf_3_namespaceObject
}, {
  id: "detoxify",
  level: 0,
  dependencies: [{
    id: "envenom",
    minLevel: 3
  }],
  dependent: [{
    id: "poisonery"
  }],
  element: null,
  skillName: "Detoxify",
  maxLevel: 1,
  inform: `Max Lv: 1
Skill Form: Active
Type: Physical
Target: Ally
Range: 9
Requirement: Envenom Lv: 3
Description: Attempts to cleanse a single target from the Poison status. If successful, it grants a temporary boost to Poison status resistance by 20%. Caster INT and Base Level, target VIT and Base Level increases chance of cleanse. This skill is initially learned at level 1, with higher levels unlocked through special items.
[Lv 1]: Resistance duration: 10 seconds. Cooldown: 3 seconds,
[Lv 2]: Resistance duration: 20 seconds. Cooldown: 2.5 seconds,
[Lv 3]: Resistance duration: 30 seconds. Cooldown: 2 seconds,
[Lv 4]: Resistance duration: 40 seconds. Cooldown: 1.5 seconds,
[Lv 5]: Resistance duration: 50 seconds. Cooldown: 1 seconds`,
  img: icon_thf_2_namespaceObject
}, {
  id: "steal",
  level: 0,
  dependencies: [],
  dependent: [{
    id: "hiding"
  }, {
    id: "plagiarism"
  }, {
    id: "snatcher"
  }],
  element: null,
  skillName: "Steal",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
Range: 1
Requirement: None
Description: Steals an item from a specified target. If target's DEX is higher than the caster, the success rate of stealing an item is decreased. This skill can't be used on Boss monsters and Players.
[Lv 1]: 8% Base Chance,
[Lv 2]: 14% Base Chance,
[Lv 3]: 20% Base Chance,
[Lv 4]: 26% Base Chance,
[Lv 5]: 32% Base Chance,
[Lv 6]: 38% Base Chance,
[Lv 7]: 44% Base Chance,
[Lv 8]: 50% Base Chance,
[Lv 9]: 56% Base Chance,
[Lv 10]: 62% Base Chance`,
  img: icon_thf_6_namespaceObject
}, {
  id: "hiding",
  level: 0,
  dependencies: [{
    id: "steal",
    minLevel: 4
  }],
  dependent: [{
    id: "cloaking"
  }, {
    id: "stealth"
  }, {
    id: "tunnelDrive"
  }],
  element: null,
  skillName: "Hiding",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Misc
Target: Self
Range: 1
Requirement: Steal Lv: 4
Description: Burrow underground to evade enemy attacks. The hidden status can be disrupted by detection skills, and certain enemies, like Insect, Demon, and Boss Protocol monsters, can still detect you. The skill can be canceled by using it again. SP is gradually drained while hiding.
[Lv 1]: SP Drain: 1 SP every 1 seconds. After-cast delay: 1 second,
[Lv 2]: SP Drain: 1 SP every 2 seconds. After-cast delay: 0.9 seconds,
[Lv 3]: SP Drain: 1 SP every 3 seconds. After-cast delay: 0.8 seconds,
[Lv 4]: SP Drain: 1 SP every 4 seconds. After-cast delay: 0.7 seconds,
[Lv 5]: SP Drain: 1 SP every 5 seconds. After-cast delay: 0.6 seconds,
[Lv 6]: SP Drain: 1 SP every 6 seconds. After-cast delay: 0.5 seconds,
[Lv 7]: SP Drain: 1 SP every 7 seconds. After-cast delay: 0.4 seconds,
[Lv 8]: SP Drain: 1 SP every 8 seconds. After-cast delay: 0.3 seconds,
[Lv 9]: SP Drain: 1 SP every 9 seconds. After-cast delay: 0.2 seconds,
[Lv 10]: SP Drain: 1 SP every 10 second. After-cast delay: 0.1 seconds`,
  img: icon_thf_4_namespaceObject
}, {
  id: "sprinkleSand",
  level: 0,
  dependencies: [],
  dependent: [{
    id: "raid"
  }],
  element: null,
  skillName: "Sprinkle Sand",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
Range: 3
Requirement: None
Description: Kick up a cloud of sand, dealing Earth elemental damage to enemies in a [3x3] area and potentially leaving them Blind.
[Lv 1]: Atk 120%,
[Lv 2]: Atk 140%,
[Lv 3]: Atk 160%,
[Lv 4]: Atk 180%,
[Lv 5]: Atk 200%,
[Lv 6]: Atk 220%,
[Lv 7]: Atk 240%,
[Lv 8]: Atk 260%,
[Lv 9]: Atk 280%,
[Lv 10]: Atk 300%
Details: AfterCastActDelay set as ASPD; Cooldown of 1000.`,
  img: icon_thf_8_namespaceObject
}, {
  id: "throwStone",
  level: 0,
  dependencies: [],
  dependent: [{
    id: "vulturesEye"
  }],
  element: null,
  skillName: "Throw Stone",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
Range: 7
Requirement: None
Description: Flings a stone at a single target, dealing damage that ignores defense and has a chance to Stun the target. Your STR increases Skill Ratio. Stunned targets take 30% more damage.
[Lv 1]: Atk 110 + STR%, Stun chance: 13%,
[Lv 2]: Atk 120 + STR%, Stun chance: 16%,
[Lv 3]: Atk 130 + STR%, Stun chance: 19%,
[Lv 4]: Atk 140 + STR%, Stun chance: 22%,
[Lv 5]: Atk 150 + STR%, Stun chance: 25%,
[Lv 6]: Atk 160 + STR%, Stun chance: 28%,
[Lv 7]: Atk 170 + STR%, Stun chance: 31%,
[Lv 8]: Atk 180 + STR%, Stun chance: 34%,
[Lv 9]: Atk 190 + STR%, Stun chance: 37%,
[Lv 10]: Atk 200 + STR%, Stun chance: 40%`,
  img: icon_thf_7_namespaceObject
}];

/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */
;// ./src/img/icon_ass/icon_ass_1.png
const icon_ass_1_namespaceObject = __webpack_require__.p + "34d823b8bddaeeafcef6.png";
;// ./src/img/icon_ass/icon_ass_2.png
const icon_ass_2_namespaceObject = __webpack_require__.p + "c6f586ec48ea65a2a01c.png";
;// ./src/img/icon_ass/icon_ass_3.png
const icon_ass_3_namespaceObject = __webpack_require__.p + "01ce241ac4d1a622677b.png";
;// ./src/img/icon_ass/icon_ass_4.png
const icon_ass_4_namespaceObject = __webpack_require__.p + "c5228f242240cb3f5df4.png";
;// ./src/img/icon_ass/icon_ass_8.png
const icon_ass_8_namespaceObject = __webpack_require__.p + "ae1fa2c7d77f7955270d.png";
;// ./src/img/icon_ass/icon_ass_6.png
const icon_ass_6_namespaceObject = __webpack_require__.p + "bea49a054e09dd25a7e4.png";
;// ./src/img/icon_ass/icon_ass_9.png
const icon_ass_9_namespaceObject = __webpack_require__.p + "4a84b44760797638a7e9.png";
;// ./src/img/icon_ass/icon_ass_10.png
const icon_ass_10_namespaceObject = __webpack_require__.p + "b30c8da8c3e8f67a1df4.png";
;// ./src/img/icon_ass/icon_ass_11.png
const icon_ass_11_namespaceObject = __webpack_require__.p + "90594b4d7f033d962673.png";
;// ./src/img/icon_ass/icon_ass_12.png
const icon_ass_12_namespaceObject = __webpack_require__.p + "3926db509832f6e6f355.png";
;// ./src/img/icon_ass/icon_ass_13.png
const icon_ass_13_namespaceObject = __webpack_require__.p + "8bba48bc4b57d070dc13.png";
;// ./src/img/icon_ass/icon_ass_14.png
const icon_ass_14_namespaceObject = __webpack_require__.p + "23fdfc88318d562e32c0.png";
;// ./src/js/listSkills/ThiefAssassin.js
/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */

 // заглушка













// список скилов Assassin
const skillsAssassin = [{
  id: "katarMastery",
  level: 0,
  dependencies: [],
  dependent: [{
    id: "crossLethality"
  }, {
    id: "grimtooth"
  }],
  element: null,
  skillName: "Katar Mastery",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Passive
Type: Physical
Requirement: None
Description: Increase attack with Katars Weapons. When [Lv 10], it increases Attack in 6%. Also increases the Critical rate when using Katars Class Weapons. Unlike other two-handed weapons, the katar allows assassins to strike twice with each basic attack, once with the right hand and once with the left. Each hit deals 60% of the normal damage. Attack bonus granted by this skill is of the Equipment type.
[Lv 1]: Atk +4, Critical Rate +10%,
[Lv 2]: Atk +8, Critical Rate +20%,
[Lv 3]: Atk +12, Critical Rate +30%,
[Lv 4]: Atk +16, Critical Rate +40%,
[Lv 5]: Atk +20, Critical Rate +50%,
[Lv 6]: Atk +24, Critical Rate +60%,
[Lv 7]: Atk +28, Critical Rate +70%,
[Lv 8]: Atk +32, Critical Rate +80%,
[Lv 9]: Atk +36, Critical Rate +90%,
[Lv 10]: Atk +40, Critical Rate +100%`,
  img: icon_ass_4_namespaceObject
}, {
  id: "cloaking",
  level: 0,
  dependencies: [{
    id: "hiding",
    minLevel: 1
  }],
  dependent: [{
    id: "meteorAssault"
  }, {
    id: "soulDestroyer"
  }, {
    id: "grimtooth"
  }, {
    id: "throwingKnife"
  }],
  element: null,
  skillName: "Cloaking",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Self
Requirement: Hiding Lv: 1
Description: Conceals yourself, allowing movement while hidden. Movement Speed is enhanced when attached to a wall but reduced when not. Initially, the skill requires proximity to a wall. While active, SP is drained. Demon, Insect race monsters, and boss monsters can detect the user. After the effect ends, the item cannot be picked up for 3 seconds.
[Lv 1]: Off Wall:Not available, On Wall:103%, 1 SP per 0.5sec,
[Lv 2]: Off Wall: 76%, On Wall:106%, 1 SP per 1.0sec,
[Lv 3]: Off Wall: 79%, On Wall:109%, 1 SP per 2.0sec,
[Lv 4]: Off Wall: 82%, On Wall:112%, 1 SP per 3.0sec,
[Lv 5]: Off Wall: 85%, On Wall:115%, 1 SP per 4.0sec,
[Lv 6]: Off Wall: 88%, On Wall:118%, 1 SP per 5.0sec,
[Lv 7]: Off Wall: 91%, On Wall:121%, 1 SP per 6.0sec,
[Lv 8]: Off Wall: 94%, On Wall:124%, 1 SP per 7.0sec,
[Lv 9]: Off Wall: 97%, On Wall:127%, 1 SP per 8.0sec,
[Lv 10]: Off Wall:100%, On Wall:130%, 1 SP per 9.0sec`,
  img: icon_ass_1_namespaceObject
}, {
  id: "dualWieldingMastery",
  level: 0,
  dependencies: [],
  dependent: [{
    id: "crossLethality"
  }, {
    id: "meteorAssault"
  }, {
    id: "throwingKnife"
  }],
  element: null,
  skillName: "Dual Wielding Mastery",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Passive
Type: Physical
Requirement: None
Description: Increase attack with Dual Wielding Weapons. Equipping two weapons at once reduces the Attack Power of the weapons in 50%, this skill restores damage that is reduced.
[Lv 1]: Atk +4, Dual Wielding Penalty -5%,
[Lv 2]: Atk +8, Dual Wielding Penalty -10%,
[Lv 3]: Atk +12, Dual Wielding Penalty -15%,
[Lv 4]: Atk +16, Dual Wielding Penalty -20%,
[Lv 5]: Atk +20, Dual Wielding Penalty -25%,
[Lv 6]: Atk +24, Dual Wielding Penalty -30%,
[Lv 7]: Atk +28, Dual Wielding Penalty -35%,
[Lv 8]: Atk +32, Dual Wielding Penalty -40%,
[Lv 9]: Atk +36, Dual Wielding Penalty -45%,
[Lv 10]: Atk +40, Dual Wielding Penalty -50%`,
  img: icon_ass_11_namespaceObject
}, {
  id: "throwingKnife",
  level: 0,
  dependencies: [{
    id: "dualWieldingMastery",
    minLevel: 5
  }, {
    id: "cloaking",
    minLevel: 5
  }],
  dependent: [],
  element: null,
  skillName: "Throwing Knife",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
Range: 12
Requirement: Dual Wielding Mastery Lv: 5, Cloaking Lv: 5
Description: Precisely aims and throws a knife at the target, inflicting physical ranged damage. Damage increases based on the target lost HP and ignores 1% of Defense for every 1% of target's HP lost. Status effects depend on the type of Throwing Knife used.
[Lv 1]: Atk 115%,
[Lv 2]: Atk 130%,
[Lv 3]: Atk 145%,
[Lv 4]: Atk 160%,
[Lv 5]: Atk 175%,
[Lv 6]: Atk 190%,
[Lv 7]: Atk 205%,
[Lv 8]: Atk 220%,
[Lv 9]: Atk 235%,
[Lv 10]: Atk 250%`,
  img: icon_ass_12_namespaceObject
}, {
  id: "grimtooth",
  level: 0,
  dependencies: [{
    id: "cloaking",
    minLevel: 2
  }, {
    id: "katarMastery",
    minLevel: 4
  }],
  dependent: [{
    id: "sonicBlow"
  }],
  element: null,
  skillName: "Grimtooth",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
Range: 5 ~ 9
Requirement: Cloaking Lv: 2, Katar Mastery Lv: 4
Description: Strikes a single target with the equipped katar while hidden, dealing physical damage to all enemies in a 3x3 area. User AGI increases the damage. When used against normal monsters, it reduces their Move Speed by 50% for 1 second. Can be used from Cloaking, but this negates the AGI scaling, and doubles the SP cost.
[Lv 1]: Atk (120 + AGI)%, Range 5 cells,
[Lv 2]: Atk (140 + AGI)%, Range 5 cells,
[Lv 3]: Atk (160 + AGI)%, Range 6 cells,
[Lv 4]: Atk (180 + AGI)%, Range 6 cells,
[Lv 5]: Atk (200 + AGI)%, Range 7 cells,
[Lv 6]: Atk (220 + AGI)%, Range 7 cells,
[Lv 7]: Atk (240 + AGI)%, Range 8 cells,
[Lv 8]: Atk (260 + AGI)%, Range 8 cells,
[Lv 9]: Atk (280 + AGI)%, Range 9 cells,
[Lv 10]: Atk (300 + AGI)%, Range 9 cells`,
  img: icon_ass_3_namespaceObject
}, {
  id: "sonicBlow",
  level: 0,
  dependencies: [{
    id: "grimtooth",
    minLevel: 5
  }],
  dependent: [],
  element: null,
  skillName: "Sonic Blow",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
Range: 1
Requirement: Grimtooth Lv: 5
Description: Unleashes a flurry of rapid Katar strikes on the target, with a chance to inflict the Stun status.
[Lv 1]: Atk 300%, Stun Chance: 12%,
[Lv 2]: Atk 400%, Stun Chance: 14%,
[Lv 3]: Atk 500%, Stun Chance: 16%,
[Lv 4]: Atk 600%, Stun Chance: 18%,
[Lv 5]: Atk 700%, Stun Chance: 20%,
[Lv 6]: Atk 800%, Stun Chance: 22%,
[Lv 7]: Atk 900%, Stun Chance: 24%,
[Lv 8]: Atk 1000%, Stun Chance: 26%,
[Lv 9]: Atk 1100%, Stun Chance: 28%,
[Lv 10]: Atk 1200%, Stun Chance: 30%`,
  img: icon_ass_8_namespaceObject
}, {
  id: "poisonWeapon",
  level: 0,
  dependencies: [{
    id: "envenom",
    minLevel: 1
  }],
  dependent: [{
    id: "meteorAssault"
  }, {
    id: "soulDestroyer"
  }, {
    id: "poisonReact"
  }, {
    id: "poisonery"
  }, {
    id: "venomDust"
  }],
  element: null,
  skillName: "Poison Weapon",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Ally
Range: 9
Requirement: Envenom Lv: 1
Description: Temporarily imbue a single target weapon with the Poison property, giving a chance to poison enemies upon physical attack. At Lv 5, the effect expands to a 5x5 area around the target but costs double the SP and triple the catalyst. Catalyst: 1x Condensed Poison.
[Lv 1]: Poison Damage by 2%, Duration: 75 secs, Poisoning chance: 2%,
[Lv 2]: Poison Damage by 3%, Duration: 150 secs, Poisoning chance: 4%,
[Lv 3]: Poison Damage by 4%, Duration: 225 secs, Poisoning chance: 6%,
[Lv 4]: Poison Damage by 5%, Duration: 300 secs, Poisoning chance: 8%,
[Lv 5]: Poison Damage by 5%, Duration: 300 secs, Poisoning chance: 10%`,
  img: icon_ass_2_namespaceObject
}, {
  id: "poisonReact",
  level: 0,
  dependencies: [{
    id: "poisonWeapon",
    minLevel: 3
  }],
  dependent: [],
  element: null,
  skillName: "Poison React",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Self
Requirement: Poison Weapon Lv: 3
Description: Amplifies and redirects 70% of the Poison damage received as magic damage to the attacker. When attacked by other properties, casts Envenom at the learned level. Reflection and auto-casting chances are influenced by Venom Dust and Venom Splasher levels. Chance to cast Envenom is reduced to 1/3 if the target misses.
[Lv 1]: Amplifies in 130%, Chance: 6%, Duration: 20 sec,
[Lv 2]: Amplifies in 160%, Chance: 12%, Duration: 20 sec,
[Lv 3]: Amplifies in 190%, Chance: 18%, Duration: 30 sec,
[Lv 4]: Amplifies in 220%, Chance: 24%, Duration: 30 sec,
[Lv 5]: Amplifies in 250%, Chance: 30%, Duration: 40 sec,
[Lv 6]: Amplifies in 280%, Chance: 36%, Duration: 40 sec,
[Lv 7]: Amplifies in 310%, Chance: 42%, Duration: 50 sec,
[Lv 8]: Amplifies in 340%, Chance: 48%, Duration: 50 sec,
[Lv 9]: Amplifies in 370%, Chance: 54%, Duration: 60 sec,
[Lv 10]: Amplifies in 400%, Chance: 60%, Duration: 60 sec`,
  img: icon_ass_6_namespaceObject
}, {
  id: "poisonery",
  level: 0,
  dependencies: [{
    id: "envenom",
    minLevel: 10
  }, {
    id: "detoxify",
    minLevel: 1
  }, {
    id: "poisonWeapon",
    minLevel: 5
  }],
  dependent: [{
    id: "deadlyPoisonMastery"
  }],
  element: null,
  skillName: "Poisonery",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Self
Requirement: Envenom Lv: 10, Detoxify Lv: 1, Poison Weapon Lv: 5
Description: Creates Poison Bottles. The success rate is determined by your Base Level and Job Level, reaching up to 100%. The amount produced receives an additional bonus based on all attributes, with DEX being the most influential. The relevance of attributes increases exponentially as they grow. The skill level affects the efficiency of the additional production. Regardless of the skill level, the additional production varies. Poisonery Creation Guide ,
[Lv 1]: No Additional Bonus,
[Lv 2]: Additional Efficiency -75%,
[Lv 3]: Additional Efficiency -50%,
[Lv 4]: Additional Efficiency -25%,
[Lv 5]: Full Efficiency

Poison Bottle
New calculation:
For Basic Attacks: ATK% + (15 + Skill Lv × 7),
For Skills: ATK%/MATK% + (5 + Skill Lv × 7)
`,
  img: icon_ass_13_namespaceObject
}, {
  id: "venomDust",
  level: 0,
  dependencies: [{
    id: "poisonWeapon",
    minLevel: 5
  }],
  dependent: [],
  element: null,
  skillName: "Venom Dust",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Ground
Range: 9
Requirement: Poison Weapon Lv: 5
Description: Contaminates a targeted location with a toxic cloud, reducing the resistance to poisoning and poison property of all enemies within the area. The resistance drop is more severe at the center of the cloud. Increases the activation chance of Poison React by 2% per level learned. Catalyst: 1x Noxious Powder Bottle.
[Lv 1]: Poison resistance Drop: 5% ~ 1%, Durarion: 6 sec,
[Lv 2]: Poison resistance Drop: 10% ~ 2% Durarion: 12 sec,
[Lv 3]: Poison resistance Drop: 15% ~ 3%, Durarion: 18 sec,
[Lv 4]: Poison resistance Drop: 20% ~ 4%, Durarion: 24 sec,
[Lv 5]: Poison resistance Drop: 25% ~ 5%, Durarion: 30 sec,
[Lv 6]: Poison resistance Drop: 30% ~ 6%, Durarion: 36 sec,
[Lv 7]: Poison resistance Drop: 35% ~ 7%, Durarion: 42 sec,
[Lv 8]: Poison resistance Drop: 40% ~ 8%, Durarion: 48 sec,
[Lv 9]: Poison resistance Drop: 45% ~ 9%, Durarion: 54 sec,
[Lv 10]: Poison resistance Drop: 50% ~ 10%, Durarion: 60 sec`,
  img: icon_ass_9_namespaceObject
}, {
  id: "venomSplasher",
  level: 0,
  dependencies: [{
    id: "poisonReact",
    minLevel: 5
  }, {
    id: "venomDust",
    minLevel: 5
  }],
  dependent: [],
  element: null,
  skillName: "Venom Splasher",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Enemy
Range: 4
Requirement: Poison React Lv: 5, Venom Dust Lv: 5
Description: Attaches a deadly toxin to a single target, causing a venomous explosion after 90 seconds. Use V.S Anticipation to detonate Venom Splasher early. Explosion deals Magical Poison Damage to all enemies around the target. If the target is poisoned, the poison spreads to nearby enemies. Up to 5 Venom Splashers can be set on different targets. Increases Poison React activation chance by 2% per level.
[Lv 1]: MAtk 610%, Cooldown: 2 sec,
[Lv 2]: MAtk 700%, Cooldown: 4 sec,
[Lv 3]: MAtk 800%, Cooldown: 6 sec,
[Lv 4]: MAtk 900%, Cooldown: 8 sec,
[Lv 5]: MAtk 1000%, Cooldown: 10 sec,
[Lv 6]: MAtk 1100%, Cooldown: 12 sec,
[Lv 7]: MAtk 1200%, Cooldown: 14 sec,
[Lv 8]: MAtk 1300%, Cooldown: 16 sec,
[Lv 9]: MAtk 1400%, Cooldown: 18 sec,
[Lv 10]: MAtk 1500%, Cooldown: 20 sec`,
  img: icon_ass_10_namespaceObject
}, {
  id: "vSAnticipation",
  level: 0,
  dependencies: [],
  dependent: [],
  element: null,
  skillName: "V.S. Anticipation",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active 
Type: Misc 
Target: Self 
Range: 9 
Cooldown: 3.0 s
Description: Instantly detonates your Venom Splasher in a large 21x21 area and reduces its cooldown. Can be used while Cloaking without breaking it.
[Lv 1]: Cooldown Reduction: 4 secs 
[Lv 2]: Cooldown Reduction: 8 secs 
[Lv 3]: Cooldown Reduction: 12 secs 
[Lv 4]: Cooldown Reduction: 16 secs 
[Lv 5]: Cooldown Reduction: 20 secs`,
  img: icon_ass_14_namespaceObject
}];

/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */
;// ./src/img/icon_asx/icon_asx_3.png
const icon_asx_3_namespaceObject = __webpack_require__.p + "2cb9506c004384d3a653.png";
;// ./src/img/icon_asx/icon_asx_2.png
const icon_asx_2_namespaceObject = __webpack_require__.p + "cd01643ec41957972da6.png";
;// ./src/img/icon_asx/icon_asx_6.png
const icon_asx_6_namespaceObject = __webpack_require__.p + "b060c08c16baf561fba6.png";
;// ./src/img/icon_asx/icon_asx_7.png
const icon_asx_7_namespaceObject = __webpack_require__.p + "4e62ecd9bd477ad3a305.png";
;// ./src/js/listSkills/ThiefAssassinCross.js
/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */

 // заглушка





// список скилов Assassin Cross
const skillsAssassinCross = [{
  id: "crossLethality",
  level: 0,
  dependencies: [{
    id: "dualWieldingMastery",
    minLevel: 5
  }, {
    id: "katarMastery",
    minLevel: 5
  }],
  dependent: [],
  element: null,
  skillName: "Cross Lethality",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Passive
Type: Physical
Requirement: Dual Wielding Mastery Lv: 5, Katar Mastery Lv: 5
Description: Equipping Katars Class Weapons reduces the Attack Power of the weapon in 40%, this skill restores Attack Power that is reduced. Also increases the Critical rate when Dual Wielding Weapons.
[Lv 1]: Katar Penalty -4%, Dual Wielding Critical Rate +10%,
[Lv 2]: Katar Penalty -8%, Dual Wielding Critical Rate +20%,
[Lv 3]: Katar Penalty -12%, Dual Wielding Critical Rate +30%,
[Lv 4]: Katar Penalty -16%, Dual Wielding Critical Rate +40%,
[Lv 5]: Katar Penalty -20%, Dual Wielding Critical Rate +50%`,
  img: icon_asx_7_namespaceObject
}, {
  id: "deadlyPoisonMastery",
  level: 0,
  dependencies: [{
    id: "poisonery",
    minLevel: 1
  }],
  dependent: [],
  element: null,
  skillName: "Deadly Poison Mastery",
  maxLevel: 5,
  inform: `Max Lv: 5
Advanced..
Skill Form: Passive
Type: Physical
Requirement: Poisonery Lv: 1
Description: Grants advanced expertise with poisons, enabling the creation of strong poisons using the Poisonery skill. Learning this provides the necessary knowledge to utilize strong poisons, which offer positive effects to the user and a chance to poison targets with extraordinary toxins.
[Lv 1]: Strong Poisons Apply Chance: 4%, User Duration: 52 sec, Target Duration: 20 sec,
[Lv 2]: Strong Poisons Apply Chance: 8%, User Duration: 84 sec, Target Duration: 30 sec,
[Lv 3]: Strong Poisons Apply Chance: 12%, User Duration: 116 sec, Target Duration: 40 sec,
[Lv 4]: Strong Poisons Apply Chance: 16%, User Duration: 148 sec, Target Duration: 50 sec,
[Lv 5]: Strong Poisons Apply Chance: 20%, User Duration: 180 sec, Target Duration: 60 sec`,
  img: icon_asx_6_namespaceObject
}, {
  id: "meteorAssault",
  level: 0,
  dependencies: [{
    id: "dualWieldingMastery",
    minLevel: 10
  }, {
    id: "cloaking",
    minLevel: 5
  }, {
    id: "poisonWeapon",
    minLevel: 5
  }],
  dependent: [],
  element: null,
  skillName: "Meteor Assault",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Self
Requirement: Dual Wielding Mastery Lv: 10, Cloaking Lv: 5, Poison Weapon Lv: 5
Description: Unleashes a powerful attack that damages all enemies in a 5x5 area around the caster, with a chance to cause statuses such as Stun, Blind, or Bleed. Requires dual wielding.
[Lv 1]: Atk 320%, Status Chance: 10%,
[Lv 2]: Atk 440%, Status Chance: 15%,
[Lv 3]: Atk 560%, Status Chance: 20%,
[Lv 4]: Atk 680%, Status Chance: 25%,
[Lv 5]: Atk 800%, Status Chance: 30%,
[Lv 6]: Atk 920%, Status Chance: 35%,
[Lv 7]: Atk 1040%, Status Chance: 40%,
[Lv 8]: Atk 1160%, Status Chance: 45%,
[Lv 9]: Atk 1280%, Status Chance: 50%,
[Lv 10]: Atk 1400%, Status Chance: 55%
Details: AfterCastActDelay set as ASPD + 220; CastTime and Fixed Cast Time of 500; Cooldown of 1000.
`,
  img: icon_asx_3_namespaceObject
}, {
  id: "soulDestroyer",
  level: 0,
  dependencies: [{
    id: "doubleAttack",
    minLevel: 5
  }, {
    id: "cloaking",
    minLevel: 3
  }, {
    id: "poisonWeapon",
    minLevel: 5
  }, {
    id: "Envenom",
    minLevel: 5
  }],
  dependent: [],
  element: null,
  skillName: "Soul Destroyer",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Enemy
Range: 4 ~ 9
Requirement: Double Attack Lv: 5, Cloaking Lv: 3, Poison Weapon Lv: 5, Envenom Lv: 5
Description: Deals powerful Magical Poison Damage to a target. Damage scales with Weapon Attack and INT.
[Lv 1]: Matk 630%,
[Lv 2]: Matk 760%,
[Lv 3]: Matk 890%,
[Lv 4]: Matk 1020%,
[Lv 5]: Matk 1150%,
[Lv 6]: Matk 1280%,
[Lv 7]: Matk 1410%,
[Lv 8]: Matk 1540%,
[Lv 9]: Matk 1670%,
[Lv 10]: Matk 1800%
Details: AfterCastActDelay set as ASPD + 220; CastTime of 500 + (100 × Skill Lv); Fixed Cast Time: 500; Cooldown of 1500.
`,
  img: icon_asx_2_namespaceObject
}];

/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */
;// ./src/js/listSkills/ThiefRogue.js
/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */

 // заглушка

// список скилов Rogue
const skillsRogue = [{
  id: "oneHandedSwordMastery",
  level: 0,
  dependencies: [],
  dependent: [{
    id: "counterInstinct"
  }],
  element: null,
  skillName: "One-Handed Sword Mastery",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Passive
Type: Physical
Requirement: None
Description: Increase Attack with One Handed Sword. The benefits of this skill are improved upon reaching 2nd class. When [Lv 10], it increases Attack in 6%. Attack bonus granted by this skill is of the Equipment type.
[Lv 1]: Atk +2, 2nd Class Additional Atk +1,
[Lv 2]: Atk +4, 2nd Class Additional Atk +2,
[Lv 3]: Atk +6, 2nd Class Additional Atk +3,
[Lv 4]: Atk +8, 2nd Class Additional Atk +4,
[Lv 5]: Atk +10, 2nd Class Additional Atk +5,
[Lv 6]: Atk +12, 2nd Class Additional Atk +6,
[Lv 7]: Atk +14, 2nd Class Additional Atk +7,
[Lv 8]: Atk +16, 2nd Class Additional Atk +8,
[Lv 9]: Atk +18, 2nd Class Additional Atk +9,
[Lv 10]: Atk +20, 2nd Class Additional Atk +10`,
  img: no_img_namespaceObject
}, {
  id: "vulturesEye",
  level: 0,
  dependencies: [{
    id: "throwStone",
    minLevel: 7
  }],
  dependent: [{
    id: "doubleStrafe"
  }],
  element: null,
  skillName: "Vulture's Eye",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Passive
Type: Misc
Requirement: Throw Stone Lv: 7
Description: Enhances Attack and Attack Range with Bow class weapons. The benefits of this skill are improved upon reaching 2nd class. When [Lv 10] increases Hit Rate in 6%.
[Lv 1]: Atk +2, Range +2, 2nd Class Additional Atk +1,
[Lv 2]: Atk +4, Range +2, 2nd Class Additional Atk +2,
[Lv 3]: Atk +6, Range +3, 2nd Class Additional Atk +3,
[Lv 4]: Atk +8, Range +3, 2nd Class Additional Atk +4,
[Lv 5]: Atk +10, Range +4, 2nd Class Additional Atk +5,
[Lv 6]: Atk +12, Range +4, 2nd Class Additional Atk +6,
[Lv 7]: Atk +14, Range +5, 2nd Class Additional Atk +7,
[Lv 8]: Atk +16, Range +5, 2nd Class Additional Atk +8,
[Lv 9]: Atk +18, Range +6, 2nd Class Additional Atk +9,
[Lv 10]: Atk +20, Range +6, 2nd Class Additional Atk +10`,
  img: no_img_namespaceObject
}, {
  id: "doubleStrafe",
  level: 0,
  dependencies: [{
    id: "vulturesEye",
    minLevel: 5
  }],
  dependent: [{
    id: "tripleStrafe"
  }],
  element: null,
  skillName: "Double Strafe",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
Range: Bow + Vulture's Eye Range
Requirement: Vulture's Eye Lv: 5
Description: Double Strafe unleashes a powerful arrow shot that deals double damage to the target. Consumes: 2x Arrow.
[Lv 1]: Atk 110% x 2 Hits,
[Lv 2]: Atk 120% x 2 Hits,
[Lv 3]: Atk 130% x 2 Hits,
[Lv 4]: Atk 140% x 2 Hits,
[Lv 5]: Atk 150% x 2 Hits,
[Lv 6]: Atk 160% x 2 Hits,
[Lv 7]: Atk 170% x 2 Hits,
[Lv 8]: Atk 180% x 2 Hits,
[Lv 9]: Atk 190% x 2 Hits,
[Lv 10]: Atk 200% x 2 Hits`,
  img: no_img_namespaceObject
}, {
  id: "snatcher",
  level: 0,
  dependencies: [{
    id: "steal",
    minLevel: 1
  }],
  dependent: [{
    id: "gashingBlow"
  }, {
    id: "plagiarism"
  }, {
    id: "helmStripping"
  }],
  element: null,
  skillName: "Snatcher",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Passive
Type: Physical
Requirement: Steal Lv: 1
Description: Automatically steals items, from a monster while attacking it with, physical melee attacks. The success, rate of stealing items is affected by, the skill level of the Thief skill, , Steal and by this skill's level.
[Lv 1]: Steal Chance: 7%,
[Lv 2]: Steal Chance: 8%,
[Lv 3]: Steal Chance: 10%,
[Lv 4]: Steal Chance: 11%,
[Lv 5]: Steal Chance: 13%,
[Lv 6]: Steal Chance: 14%,
[Lv 7]: Steal Chance: 16%,
[Lv 8]: Steal Chance: 17%,
[Lv 9]: Steal Chance: 19%,
[Lv 10]: Steal Chance: 20%`,
  img: no_img_namespaceObject
}, {
  id: "plagiarism",
  level: 0,
  dependencies: [{
    id: "steal",
    minLevel: 10
  }, {
    id: "snatcher",
    minLevel: 4
  }],
  dependent: [{
    id: "simulation"
  }, {
    id: "gangsterParadise"
  }],
  element: null,
  skillName: "Plagiarism",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Ally
Range: 9
Requirement: Steal Lv: 10, Snatcher Lv: 4
Description: Copies a skill from an ally, enemy, or monster by selecting from a list of eligible skills they have learned. The level of the copied skill matches the level learned by the target. It cannot exceed the Maximum level of this skill. Skills already possessed by the user, including those from equipment, cannot be copied.
[Lv 1]: Lv. 1 Able to memorize, Increase Atk Speed: 1%,
[Lv 2]: Lv. 2 Able to memorize, Increase Atk Speed: 2%,
[Lv 3]: Lv. 3 Able to memorize, Increase Atk Speed: 3%,
[Lv 4]: Lv. 4 Able to memorize, Increase Atk Speed: 4%,
[Lv 5]: Lv. 5 Able to memorize, Increase Atk Speed: 5%,
[Lv 6]: Lv. 6 Able to memorize, Increase Atk Speed: 6%,
[Lv 7]: Lv. 7 Able to memorize, Increase Atk Speed: 7%,
[Lv 8]: Lv. 8 Able to memorize, Increase Atk Speed: 8%,
[Lv 9]: Lv. 9 Able to memorize, Increase Atk Speed: 9%,
[Lv 10]: Lv.10 Able to memorize, Increase Atk Speed: 10%`,
  img: no_img_namespaceObject
}, {
  id: "gangsterParadise",
  level: 0,
  dependencies: [{
    id: "plagiarism",
    minLevel: 5
  }],
  dependent: [{
    id: "gangland"
  }],
  element: null,
  skillName: "Gangster Paradise",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Passive
Type: Misc
Requirement: Plagiarism Lv: 5
Description: When two or more Rogues with this skill sit next to each other, and at least one knows the skill, monsters will not attack them. This effect extends to any party member sitting next to the Rogues but does not affect boss monsters. Also if a Rogue is the party leader, they can grant benefits to a member. Skill level determines which benefit is granted, and the number of party members influences the benefit's value. Rogues who have learned Gangster Paradise count as two for increasing the bonus.
[Lv 1]: +Hard Def% and +Hard Mdef%,
[Lv 2]: Reduces V.Cast Time% and After Cast Delay%,
[Lv 3]: +HP% and +SP%,
[Lv 4]: +Hit Rate% and +Critical Rate%,
[Lv 5]: +Atk% and +MAtk%`,
  img: no_img_namespaceObject
}, {
  id: "gangland",
  level: 0,
  dependencies: [{
    id: "gangsterParadise",
    minLevel: 5
  }],
  dependent: [],
  element: null,
  skillName: "Gangland",
  maxLevel: 1,
  inform: `Max Lv: 1
Skill Form: Passive
Type: Misc
Requirement: Gangster Paradise Lv: 5
Description: Increases the bonuses granted by Gangster Paradise for the user by +5%.`,
  img: no_img_namespaceObject
}, {
  id: "gashingBlow",
  level: 0,
  dependencies: [{
    id: "snatcher",
    minLevel: 4
  }],
  dependent: [{
    id: "backStab"
  }],
  element: null,
  skillName: "Gashing Blow",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
Range: 1
Requirement: Snatcher Lv: 4
Description: Delivers a powerful strike that has a chance to apply the Gashing Wound effect on the target. Attacking targets affected by Gashing Wound grants a chance to cause Bleeding. Gashing Wound also increases the chance to inflict negative effects on the target and boosts the damage of Gashing Blow by 50% plus an additional 15% for each negative effect on the target.
[Lv 1]: Atk 330%, Gashing Wound Chance: 12%,
[Lv 2]: Atk 360%, Gashing Wound Chance: 14%,
[Lv 3]: Atk 390%, Gashing Wound Chance: 16%,
[Lv 4]: Atk 420%, Gashing Wound Chance: 18%,
[Lv 5]: Atk 450%, Gashing Wound Chance: 20%,
[Lv 6]: Atk 480%, Gashing Wound Chance: 22%,
[Lv 7]: Atk 510%, Gashing Wound Chance: 24%,
[Lv 8]: Atk 540%, Gashing Wound Chance: 26%,
[Lv 9]: Atk 570%, Gashing Wound Chance: 28%,
[Lv 10]: Atk 600%, Gashing Wound Chance: 30%`,
  img: no_img_namespaceObject
}, {
  id: "backStab",
  level: 0,
  dependencies: [{
    id: "gashingBlow",
    minLevel: 4
  }],
  dependent: [{
    id: "raid"
  }],
  element: null,
  skillName: "Back Stab",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
Range: 1
Requirement: Gashing Blow Lv: 4
Description: Attacks the target from behind, causing physical damage. The skill teleports the caster immediately behind the enemy. When used with a Dagger class weapon, the damage is doubled. When in Hiding status, this skill deals additional damage equal to the casters STR.
[Lv 1]: Atk 330%,
[Lv 2]: Atk 360%,
[Lv 3]: Atk 390%,
[Lv 4]: Atk 420%,
[Lv 5]: Atk 450%,
[Lv 6]: Atk 480%,
[Lv 7]: Atk 510%,
[Lv 8]: Atk 540%,
[Lv 9]: Atk 570%,
[Lv 10]: Atk 600%`,
  img: no_img_namespaceObject
}, {
  id: "tunnelDrive",
  level: 0,
  dependencies: [{
    id: "hiding",
    minLevel: 1
  }],
  dependent: [{
    id: "stealth"
  }, {
    id: "raid"
  }],
  element: null,
  skillName: "Tunnel Drive",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Passive
Type: Misc
Requirement: Hiding Lv: 1
Description: Enables Movement while in, Hiding status. Movement Speed is slower, than normal walk.
[Lv 1]: Movement Speed: 26%,
[Lv 2]: Movement Speed: 32%,
[Lv 3]: Movement Speed: 38%,
[Lv 4]: Movement Speed: 44%,
[Lv 5]: Movement Speed: 50%`,
  img: no_img_namespaceObject
}, {
  id: "raid",
  level: 0,
  dependencies: [{
    id: "sprinkleSand",
    minLevel: 5
  }, {
    id: "backStab",
    minLevel: 2
  }, {
    id: "tunnelDrive",
    minLevel: 2
  }],
  dependent: [{
    id: "intimidate"
  }],
  element: null,
  skillName: "Raid",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Self
Requirement: Sprinkle Sand Lv: 5, Back Stab Lv: 2, Tunnel Drive Lv: 2
Description: Execute a sneak attack on nearby enemies within a [7*7] area. If used from a hidden state, this ability has no cooldown, and affected enemies receives amplified damage for a short period. Cooldown of this ability can be reduced based on the level of [Hiding] Skill. Amplified damage has half for Boss Protocol monsters.
[Lv 1]: Atk 200%, Amplified Damage +6%, Duration: 1 Second,
[Lv 2]: Atk 350%, Amplified Damage +12%, Duration: 2 Second,
[Lv 3]: Atk 500%, Amplified Damage +18%, Duration: 3 Second,
[Lv 4]: Atk 650%, Amplified Damage +24%, Duration: 4 Second,
[Lv 5]: Atk 800%, Amplified Damage +30%, Duration: 5 Second`,
  img: no_img_namespaceObject
}, {
  id: "intimidate",
  level: 0,
  dependencies: [{
    id: "raid",
    minLevel: 5
  }],
  dependent: [],
  element: null,
  skillName: "Intimidate",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Enemy
Range: 1
Requirement: Raid Lv: 5
Description: Strikes a target and, forcibly teleport it with the caster to, a random location on the same map. This skill's success rate is affected by, the level of the skill. Boss monsters, are unaffected by Intimidate.
[Lv 1]: ATK 130%,
[Lv 2]: ATK 160%,
[Lv 3]: ATK 190%,
[Lv 4]: ATK 220%,
[Lv 5]: ATK 250%`,
  img: no_img_namespaceObject
}, {
  id: "helmStripping",
  level: 0,
  dependencies: [{
    id: "snatcher",
    minLevel: 5
  }],
  dependent: [{
    id: "fullStrip"
  }, {
    id: "shieldStripping"
  }],
  element: null,
  skillName: "Helm Stripping",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Enemy
Range: 1
Requirement: Snatcher Lv: 5
Description: Attempts to forcibly remove the equipped helmet of a single target, temporarily preventing them from equipping it again for 60 seconds. The success rate is influenced by the difference between the users and the targets Base Level. Each level of the target reduces the duration by 0.5%. Against monsters, this will decrease their total MATK temporarily. Has double base chance of success.
[Lv 1]: Success Chance: 9%, Monster MATK -5%,
[Lv 2]: Success Chance: 13%, Monster MATK -10%,
[Lv 3]: Success Chance: 17%, Monster MATK -15%,
[Lv 4]: Success Chance: 21%, Monster MATK -20%,
[Lv 5]: Success Chance: 25%, Monster MATK -25%`,
  img: no_img_namespaceObject
}, {
  id: "shieldStripping",
  level: 0,
  dependencies: [{
    id: "helmStripping",
    minLevel: 2
  }],
  dependent: [{
    id: "fullStrip"
  }, {
    id: "armorStripping"
  }],
  element: null,
  skillName: "Shield Stripping",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Enemy
Range: 1
Requirement: Helm Stripping Lv: 2
Description: Attempts to forcibly remove the equipped shield of a single target, temporarily preventing them from equipping it again for 60 seconds. The success rate is influenced by the difference between the users and the targets Base Level. Each level of the target reduces the duration by 0.5%. Against monsters, this will decrease their total MDEF temporarily. Has double base chance of success.
[Lv 1]: Success Chance: 9%, Monster MDEF -5%,
[Lv 2]: Success Chance: 13%, Monster MDEF -10%,
[Lv 3]: Success Chance: 17%, Monster MDEF -15%,
[Lv 4]: Success Chance: 21%, Monster MDEF -20%,
[Lv 5]: Success Chance: 25%, Monster MDEF -25%`,
  img: no_img_namespaceObject
}, {
  id: "armorStripping",
  level: 0,
  dependencies: [{
    id: "shieldStripping",
    minLevel: 2
  }],
  dependent: [{
    id: "fullStrip"
  }, {
    id: "weaponStripping"
  }],
  element: null,
  skillName: "Armor Stripping",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Enemy
Range: 1
Requirement: Shield Stripping Lv: 2
Description: Attempts to forcibly remove the equipped armor of a single target, temporarily preventing them from equipping it again for 60 seconds. The success rate is influenced by the difference between the users and the targets Base Level. Each level of the target reduces the duration by 0.5%. Against monsters, this will decrease their total DEF temporarily. Has double base chance of success.
[Lv 1]: Success Chance: 9%, Monster DEF -5%,
[Lv 2]: Success Chance: 13%, Monster DEF -10%,
[Lv 3]: Success Chance: 17%, Monster DEF -15%,
[Lv 4]: Success Chance: 21%, Monster DEF -20%,
[Lv 5]: Success Chance: 25%, Monster DEF -25%`,
  img: no_img_namespaceObject
}, {
  id: "weaponStripping",
  level: 0,
  dependencies: [{
    id: "armorStripping",
    minLevel: 2
  }],
  dependent: [{
    id: "fullStrip"
  }],
  element: null,
  skillName: "Weapon Stripping",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Enemy
Range: 1
Requirement: Armor Stripping Lv: 2
Description: Attempts to forcibly remove the equipped weapon of a single target, temporarily preventing them from equipping it again for 60 seconds. The success rate is influenced by the difference between the users and the targets Base Level. Each level of the target reduces the duration by 0.5%. Against monsters, this will decrease their total ATK temporarily. Has double base chance of success.
[Lv 1]: Success Chance: 9%, Monster ATK -5%,
[Lv 2]: Success Chance: 13%, Monster ATK -10%,
[Lv 3]: Success Chance: 17%, Monster ATK -15%,
[Lv 4]: Success Chance: 21%, Monster ATK -20%,
[Lv 5]: Success Chance: 25%, Monster ATK -25%`,
  img: no_img_namespaceObject
}];

/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */
;// ./src/js/listSkills/ThiefStalker.js
/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */

 // заглушка

// список скилов Stalker
const skillsStalker = [{
  id: "counterInstinct",
  level: 0,
  dependencies: [{
    id: "oneHandedSwordMastery",
    minLevel: 3
  }],
  dependent: [],
  element: null,
  skillName: "Counter Instinct",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Self
Requirement: One-Handed Sword Mastery Lv: 3
Description: Deflects incoming attacks, reducing damage by half. If the attacker is using a Sword or Dagger, the reduced damage is reflected back to them. On monsters, reflects without weapon restriction. Cooldown of this skill decreases with each blocked attack. Only usable with daggers or swords.
[Lv 1]: Parry Chance: 90%, Duration: 5 seconds, Cooldown 15 seconds,
[Lv 2]: Parry Chance: 80%, Duration: 6 seconds, Cooldown 16 seconds,
[Lv 3]: Parry Chance: 70%, Duration: 8 seconds, Cooldown 18 seconds,
[Lv 4]: Parry Chance: 60%, Duration: 11 seconds, Cooldown 21 seconds,
[Lv 5]: Parry Chance: 50%, Duration: 15 seconds, Cooldown 25 seconds`,
  img: no_img_namespaceObject
}, {
  id: "fullStrip",
  level: 0,
  dependencies: [{
    id: "helmStripping",
    minLevel: 2
  }, {
    id: "shieldStripping",
    minLevel: 2
  }, {
    id: "armorStripping",
    minLevel: 2
  }, {
    id: "weaponStripping",
    minLevel: 2
  }],
  dependent: [],
  element: null,
  skillName: "Full Strip",
  maxLevel: 1,
  inform: `Max Lv: 1
Skill Form: Active
Type: Physical
Target: Enemy
Range: 1
Requirement: Helm Stripping Lv: 2, Shield Stripping Lv: 2, Armor Stripping Lv: 2, Weapon Stripping Lv: 2
Description: Attempts to forcibly remove the equipped weapon, shield, armor and headgear of a single target, temporarily preventing them from equipping it again. Does not work against monsters. The success rate is influenced by the difference between the users and the targets Base Level. Each level of the target reduces the duration by 0.5%. Success Chance: 10% + 1% for every level learned in Divest Helm, Divest Shield, Divest Armor, and Divest Weapon, Duration: 15 seconds`,
  img: no_img_namespaceObject
}, {
  id: "simulation",
  level: 0,
  dependencies: [{
    id: "plagiarism",
    minLevel: 10
  }],
  dependent: [],
  element: null,
  skillName: "Simulation",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Misc
Target: Self
Requirement: Plagiarism Lv: 10
Description: Adds +5 True ATK and MATK per level learned. Each basic attack has a chance to automatically cast a skill stolen by Plagiarism on the target. The chance and level of the auto-cast skill increase with the level of Simulation. Auto-casting skills have increased SP consumption, reducible by learned level of Simulation.
[Lv 1]: Auto-Cast Level: 3, Auto-Cast Chance: 24%, Auto-Cast SP Cost: +45%,
[Lv 2]: Auto-Cast Level: 3, Auto-Cast Chance: 23%, Auto-Cast SP Cost: +40%,
[Lv 3]: Auto-Cast Level: 4, Auto-Cast Chance: 22%, Auto-Cast SP Cost: +35%,
[Lv 4]: Auto-Cast Level: 4, Auto-Cast Chance: 21%, Auto-Cast SP Cost: +30%,
[Lv 5]: Auto-Cast Level: 5, Auto-Cast Chance: 20%, Auto-Cast SP Cost: +25%,
[Lv 6]: Auto-Cast Level: 5, Auto-Cast Chance: 19%, Auto-Cast SP Cost: +20%,
[Lv 7]: Auto-Cast Level: 6, Auto-Cast Chance: 18%, Auto-Cast SP Cost: +15%,
[Lv 8]: Auto-Cast Level: 6, Auto-Cast Chance: 17%, Auto-Cast SP Cost: +10%,
[Lv 9]: Auto-Cast Level: 7, Auto-Cast Chance: 16%, Auto-Cast SP Cost: +5%,
[Lv 10]: Auto-Cast Level: 7, Auto-Cast Chance: 15%, Auto-Cast SP Cost: +0%
Now, Simulation opens up a list of possible skills to be autocast, including the user’s own skills.
`,
  img: no_img_namespaceObject
}, {
  id: "stealth",
  level: 0,
  dependencies: [{
    id: "hiding",
    minLevel: 5
  }, {
    id: "tunnelDrive",
    minLevel: 3
  }],
  dependent: [],
  element: null,
  skillName: "Stealth",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Misc
Target: Self
Requirement: Hiding Lv: 5, Tunnel Drive Lv: 3
Description: Enter a special Hiding status in which caster can move without being detected by all detecting skills. However, the caster will leave footprints and can be damaged by skills that target the ground. Ineffective against Insect, Devil and Boss monsters. After being hidden, gain STR, DEX and INT for 180 seconds.
[Lv 1]: Stats Bonus: 2%, 60% Move Speed, SP cost: 12 every 10 seconds,
[Lv 2]: Stats Bonus: 4%, 70% Move Speed, SP cost: 14 every 10 seconds,
[Lv 3]: Stats Bonus: 6%, 80% Move Speed, SP cost: 16 every 10 seconds,
[Lv 4]: Stats Bonus: 8%, 90% Move Speed, SP cost: 18 every 10 seconds,
[Lv 5]: Stats Bonus: 10%, 100% Move Speed, SP cost: 20 every 10 seconds`,
  img: no_img_namespaceObject
}, {
  id: "tripleStrafe",
  level: 0,
  dependencies: [{
    id: "doubleStrafe",
    minLevel: 10
  }],
  dependent: [],
  element: null,
  skillName: "Triple Strafe",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
Range: 1
Requirement: Double Strafe Lv: 10
Description: Shoots three arrows quickly at the same target. Learning this skill allows Double Strafe to accumulate Strafe Points, up to 3 max. Spending Strafe Points in Triple Strafe reduces its cooldown by 2 second per point and boosts damage based on the users AGI.
[Lv 1]: Atk 216% x 3 Hits,
[Lv 2]: Atk 229% x 3 Hits,
[Lv 3]: Atk 242% x 3 Hits,
[Lv 4]: Atk 255% x 3 Hits,
[Lv 5]: Atk 268% x 3 Hits,
[Lv 6]: Atk 281% x 3 Hits,
[Lv 7]: Atk 294% x 3 Hits,
[Lv 8]: Atk 307% x 3 Hits,
[Lv 9]: Atk 320% x 3 Hits,
[Lv 10]: Atk 333% x 3 Hits`,
  img: no_img_namespaceObject
}];

/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */
;// ./src/img/icon_arc/icon_arc_3.png
const icon_arc_3_namespaceObject = __webpack_require__.p + "e9053c323a6674e55e97.png";
;// ./src/img/icon_arc/icon_arc_2.png
const icon_arc_2_namespaceObject = __webpack_require__.p + "4b7d5fb8086df4d13d86.png";
;// ./src/img/icon_arc/icon_arc_1.png
const icon_arc_1_namespaceObject = __webpack_require__.p + "304edaab0fd8aaeb4f05.png";
;// ./src/img/icon_arc/icon_arc_4.png
const icon_arc_4_namespaceObject = __webpack_require__.p + "8f0c009bae3d29cdb3dc.png";
;// ./src/img/icon_arc/icon_arc_5.png
const icon_arc_5_namespaceObject = __webpack_require__.p + "2e43bdf6b730c040dbb8.png";
;// ./src/img/icon_arc/icon_arc_7.png
const icon_arc_7_namespaceObject = __webpack_require__.p + "b8d021a664b24864c190.png";
;// ./src/img/icon_arc/icon_arc_8.png
const icon_arc_8_namespaceObject = __webpack_require__.p + "21c82ea344c619d294f7.png";
;// ./src/img/icon_arc/icon_arc_9.png
const icon_arc_9_namespaceObject = __webpack_require__.p + "a1703a01530018edd238.png";
;// ./src/js/listSkills/Archer.js
/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */

 // заглушка









// список скилов Archer
const skillsArcher = [{
  id: "doubleStrafe",
  level: 0,
  dependencies: [],
  dependent: [{
    id: "arrowShower"
  }, {
    id: "sharpShooting"
  }, {
    id: "arrowVulcan"
  }],
  element: null,
  skillName: "Double Strafe",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
Range: Bow + Vulture's Eye Range
Requirement: None
Description: Double Strafe unleashes a powerful arrow shot that deals double damage to the target. Consumes: 2x Arrow.
[Lv 1]: Atk 110% x 2 Hits,
[Lv 2]: Atk 120% x 2 Hits,
[Lv 3]: Atk 130% x 2 Hits,
[Lv 4]: Atk 140% x 2 Hits,
[Lv 5]: Atk 150% x 2 Hits,
[Lv 6]: Atk 160% x 2 Hits,
[Lv 7]: Atk 170% x 2 Hits,
[Lv 8]: Atk 180% x 2 Hits,
[Lv 9]: Atk 190% x 2 Hits,
[Lv 10]: Atk 200% x 2 Hits`,
  img: icon_arc_3_namespaceObject
}, {
  id: "arrowShower",
  level: 0,
  dependencies: [{
    id: "doubleStrafe",
    minLevel: 5
  }],
  dependent: [{
    id: "arrowVulcan"
  }],
  element: null,
  skillName: "Arrow Shower",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Ground
Range: 12
Requirement: Double Strafe Lv: 5
Description: Unleashes a barrage of arrows, raining down on enemies within a 7x7 area and dealing damage in multiple waves. Each wave delivers four hits. Number of waves increases based on the user's ASPD. Consumes: 6x Arrow.
[Lv 1]: Wave ATK 55%, Duration: 1.9 s,
[Lv 2]: Wave ATK 60%, Duration: 2.1 s,
[Lv 3]: Wave ATK 65%, Duration: 2.3 s,
[Lv 4]: Wave ATK 70%, Duration: 2.5 s,
[Lv 5]: Wave ATK 75%, Duration: 2.7 s,
[Lv 6]: Wave ATK 80%, Duration: 2.9 s,
[Lv 7]: Wave ATK 85%, Duration: 3.1 s,
[Lv 8]: Wave ATK 90%, Duration: 3.3 s,
[Lv 9]: Wave ATK 95%, Duration: 3.5 s,
[Lv 10]: Wave ATK 100%, Duration: 3.7 s,
New calculation: ATK% = 50 + (5 × Skill Lv) * (1 + (BaseLevel² / 10000)).
Details: AfterCastActDelay set as ASPD + 220; CastTime between 70 and 700; AmmoAmount: 1.
`,
  img: icon_arc_1_namespaceObject
}, {
  id: "chargeArrow",
  level: 0,
  dependencies: [],
  dependent: [{
    id: "sharpShooting"
  }],
  element: null,
  skillName: "Charge Arrow",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
Range: Bow + Vulture's Eye Range
Requirement: None
Description: Draw their bowstring to its maximum tension, firing a powerful volley that not only deals damage but also knocksback the target 6 cells and reduces their Movement Speed by 15%. Consumes: 1x Arrow.
Targets pushed by Charge Arrow cannot be pushed again for 4 seconds.
[Lv 1]: Atk 140%,
[Lv 2]: Atk 180%,
[Lv 3]: Atk 220%,
[Lv 4]: Atk 260%,
[Lv 5]: Atk 300%,
[Lv 6]: Atk 340%,
[Lv 7]: Atk 380%,
[Lv 8]: Atk 420%,
[Lv 9]: Atk 460%,
[Lv 10]: Atk 500%
`,
  img: icon_arc_7_namespaceObject
}, {
  id: "owlsEye",
  level: 0,
  dependencies: [],
  dependent: [{
    id: "vulturesEye"
  }, {
    id: "fletchery"
  }, {
    id: "quivery"
  }, {
    id: "improveConcentration"
  }, {
    id: "quickDraw"
  }, {
    id: "trueSight"
  }],
  element: null,
  skillName: "Owl's Eye",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Passive
Type: Misc
Requirement: None
Description: Sharpens the user focus, increasing their DEX and enhancing their Hit Rate.
[Lv 1]: DEX +1, Hit Rate +1%,
[Lv 2]: DEX +2, Hit Rate +2%,
[Lv 3]: DEX +3, Hit Rate +3%,
[Lv 4]: DEX +4, Hit Rate +4%,
[Lv 5]: DEX +5, Hit Rate +5%,
[Lv 6]: DEX +6, Hit Rate +6%,
[Lv 7]: DEX +7, Hit Rate +7%,
[Lv 8]: DEX +8, Hit Rate +8%,
[Lv 9]: DEX +9, Hit Rate +9%,
[Lv 10]: DEX +10, Hit Rate +10%`,
  img: icon_arc_4_namespaceObject
}, {
  id: "vulturesEye",
  level: 0,
  dependencies: [{
    id: "owlsEye",
    minLevel: 3
  }],
  dependent: [{
    id: "improveConcentration"
  }, {
    id: "quickDraw"
  }, {
    id: "trueSight"
  }],
  element: null,
  skillName: "Vulture's Eye",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Passive
Type: Misc
Requirement: Owl's Eye Lv: 3
Description: Enhances Attack and Attack Range with Bow class weapons. The benefits of this skill are improved upon reaching 2nd class. When [Lv 10] increases Hit Rate in 6%.
[Lv 1]: Atk +2, Range +2, 2nd Class Additional Atk +1,
[Lv 2]: Atk +4, Range +2, 2nd Class Additional Atk +2,
[Lv 3]: Atk +6, Range +3, 2nd Class Additional Atk +3,
[Lv 4]: Atk +8, Range +3, 2nd Class Additional Atk +4,
[Lv 5]: Atk +10, Range +4, 2nd Class Additional Atk +5,
[Lv 6]: Atk +12, Range +4, 2nd Class Additional Atk +6,
[Lv 7]: Atk +14, Range +5, 2nd Class Additional Atk +7,
[Lv 8]: Atk +16, Range +5, 2nd Class Additional Atk +8,
[Lv 9]: Atk +18, Range +6, 2nd Class Additional Atk +9,
[Lv 10]: Atk +20, Range +6, 2nd Class Additional Atk +10`,
  img: icon_arc_5_namespaceObject
}, {
  id: "improveConcentration",
  level: 0,
  dependencies: [{
    id: "vulturesEye",
    minLevel: 1
  }],
  dependent: [{
    id: "quickDraw"
  }, {
    id: "sharpShooting"
  }, {
    id: "trueSight"
  }, {
    id: "windWalk"
  }, {
    id: "moonlitWaterMill"
  }, {
    id: "tarotCardOfFate"
  }],
  element: null,
  skillName: "Improve Concentration",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Self
Requirement: Vulture's Eye Lv: 1
Description: Boosts AGI and DEX for 240 seconds as well as detects nearby hidden characters in 3x3 AoE.
[Lv 1]: DEX/AGI +3%,
[Lv 2]: DEX/AGI +4%,
[Lv 3]: DEX/AGI +5%,
[Lv 4]: DEX/AGI +6%,
[Lv 5]: DEX/AGI +7%,
[Lv 6]: DEX/AGI +8%,
[Lv 7]: DEX/AGI +9%,
[Lv 8]: DEX/AGI +10%,
[Lv 9]: DEX/AGI +11%,
[Lv 10]: DEX/AGI +12%`,
  img: icon_arc_2_namespaceObject
}, {
  id: "fletchery",
  level: 0,
  dependencies: [{
    id: "owlsEye",
    minLevel: 3
  }],
  dependent: [{
    id: "quivery"
  }],
  element: null,
  skillName: "Fletchery",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Self
Requirement: Owl's Eye Lv: 3
Description: Uses various items to craft arrows. The quantity of arrows crafted receives an additional bonus based on Base Level, Job Level, and all attributes, with INT being the most influential. The relevance of attributes increases exponentially as they grow. The skill level affects the efficiency of the additional production. Regardless of the skill level, the additional production varies.
[Lv 1]: No Additional Bonus,
[Lv 2]: Additional Efficiency -75%,
[Lv 3]: Additional Efficiency -50%,
[Lv 4]: Additional Efficiency -25%,
[Lv 5]: Full Efficiency`,
  img: icon_arc_8_namespaceObject
}, {
  id: "quivery",
  level: 0,
  dependencies: [{
    id: "fletchery",
    minLevel: 3
  }],
  dependent: [],
  element: null,
  skillName: "Quivery",
  maxLevel: 1,
  inform: `Max Lv: 1
Skill Form: Active
Type: Physical
Target: Self
Requirement: Fletchery Lv: 3
Description: Allows the user to create a quiver using 500 arrows. The process requires an Empty Quiver as the base item for crafting.`,
  img: icon_arc_9_namespaceObject
}];

/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */
;// ./src/img/icon_hnt/icon_hnt_1.png
const icon_hnt_1_namespaceObject = __webpack_require__.p + "34ba214da20a73f25e22.png";
;// ./src/img/icon_hnt/icon_hnt_2.png
const icon_hnt_2_namespaceObject = __webpack_require__.p + "e5bc5481a2eadeff0524.png";
;// ./src/img/icon_hnt/icon_hnt_3.png
const icon_hnt_3_namespaceObject = __webpack_require__.p + "d80f10e809109c752cfd.png";
;// ./src/img/icon_hnt/icon_hnt_4.png
const icon_hnt_4_namespaceObject = __webpack_require__.p + "0b32521cca76093a567d.png";
;// ./src/img/icon_hnt/icon_hnt_5.png
const icon_hnt_5_namespaceObject = __webpack_require__.p + "d4515f4b2e6ff6109ec7.png";
;// ./src/img/icon_hnt/icon_hnt_6.png
const icon_hnt_6_namespaceObject = __webpack_require__.p + "9141e4245ef90436584c.png";
;// ./src/img/icon_hnt/icon_hnt_7.png
const icon_hnt_7_namespaceObject = __webpack_require__.p + "1b588cea909a7b500488.png";
;// ./src/img/icon_hnt/icon_hnt_8.png
const icon_hnt_8_namespaceObject = __webpack_require__.p + "6b6e31416e7c803f619c.png";
;// ./src/img/icon_hnt/icon_hnt_9.png
const icon_hnt_9_namespaceObject = __webpack_require__.p + "0e23e7a4721a368fd90c.png";
;// ./src/img/icon_hnt/icon_hnt_10.png
const icon_hnt_10_namespaceObject = __webpack_require__.p + "dc0b09b35fcef5588237.png";
;// ./src/img/icon_hnt/icon_hnt_11.png
const icon_hnt_11_namespaceObject = __webpack_require__.p + "d7c2aa39f496bab8a01d.png";
;// ./src/img/icon_hnt/icon_hnt_12.png
const icon_hnt_12_namespaceObject = __webpack_require__.p + "270eb9b4731b8394206d.png";
;// ./src/img/icon_hnt/icon_hnt_13.png
const icon_hnt_13_namespaceObject = __webpack_require__.p + "ab22264b3ae1325323f1.png";
;// ./src/img/icon_hnt/icon_hnt_14.png
const icon_hnt_14_namespaceObject = __webpack_require__.p + "1fb0ad3d9b789169c2c2.png";
;// ./src/img/icon_hnt/icon_hnt_15.png
const icon_hnt_15_namespaceObject = __webpack_require__.p + "06155cd1b3b73a5ac580.png";
;// ./src/img/icon_hnt/icon_hnt_16.png
const icon_hnt_16_namespaceObject = __webpack_require__.p + "90319cb7ce944a73b03c.png";
;// ./src/js/listSkills/ArcherHunter.js
/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */

 // заглушка
















//import icon from '../../img/icon_hnt/icon_hnt_17.png'; 

// список скилов Hunter
const skillsHunter = [{
  id: "falconryMastery",
  level: 0,
  dependencies: [],
  dependent: [{
    id: "steelCrow"
  }, {
    id: "beastBane"
  }, {
    id: "blitzBeat"
  }, {
    id: "detect"
  }, {
    id: "springTrap"
  }],
  element: null,
  skillName: "Falconry Mastery",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Passive
Type: Misc
Requirement: None
Description: Master the art of Falcon command. Increasing the chance to auto-cast Blitz Beat. Falcon Breeder.
[Lv 1]: Auto Blitz chance +2%,
[Lv 2]: Auto Blitz chance +4%,
[Lv 3]: Auto Blitz chance +6%,
[Lv 4]: Auto Blitz chance +8%,
[Lv 5]: Auto Blitz chance +10%`,
  img: icon_hnt_7_namespaceObject
}, {
  id: "steelCrow",
  level: 0,
  dependencies: [{
    id: "falconryMastery",
    minLevel: 1
  }],
  dependent: [{
    id: "falconAssault"
  }],
  element: null,
  skillName: "Steel Crow",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Passive
Type: Misc
Requirement: Falconry Mastery Lv: 1
Description: Amplify the might of your falcon attacks.
[Lv 1]: Damage: +10,
[Lv 2]: Damage: +20,
[Lv 3]: Damage: +30,
[Lv 4]: Damage: +40,
[Lv 5]: Damage: +50,
[Lv 6]: Damage: +60,
[Lv 7]: Damage: +70,
[Lv 8]: Damage: +80,
[Lv 9]: Damage: +90,
[Lv 10]: Damage: +100`,
  img: icon_hnt_16_namespaceObject
}, {
  id: "beastBane",
  level: 0,
  dependencies: [{
    id: "falconryMastery",
    minLevel: 1
  }],
  dependent: [],
  element: null,
  skillName: "Beast Bane",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Passive
Type: Physical
Requirement: Falconry Mastery Lv: 1
Description: Harness the power of the falcon to deliver devastating strikes against Beast and Insect monsters. Mastery attack increases when accompanied by a falcon, enhancing the damage of your birds attacks.
[Lv 1]: Damage +4, Falcon skills damage +1%,
[Lv 2]: Damage +8, Falcon skills damage +2%,
[Lv 3]: Damage +12, Falcon skills damage +3%,
[Lv 4]: Damage +16, Falcon skills damage +4%,
[Lv 5]: Damage +20, Falcon skills damage +5%,
[Lv 6]: Damage +24, Falcon skills damage +6%,
[Lv 7]: Damage +28, Falcon skills damage +7%,
[Lv 8]: Damage +32, Falcon skills damage +8%,
[Lv 9]: Damage +36, Falcon skills damage +9%,
[Lv 10]: Damage +40, Falcon skills damage +10%`,
  img: icon_hnt_4_namespaceObject
}, {
  id: "blitzBeat",
  level: 0,
  dependencies: [{
    id: "falconryMastery",
    minLevel: 1
  }],
  dependent: [{
    id: "falconAssault"
  }],
  element: null,
  skillName: "Blitz Beat",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
Range: 12
Requirement: Falconry Mastery Lv: 1
Description: Commands the Falcon to dive at a single target and strike repeatedly to inflict special ranged damage to all enemies in a [3*3] area around the target. Falcon damage increases with owners AGI, DEX, INT and MATK. For Bows: Every 3 LUK points, auto-cast chance is increased by 1%. For Daggers: Every 2 LUK points, auto-cast chance is increased by 1%.
The skill no longer ignores DEF.
[Lv 1]: Hits: 2,
[Lv 2]: Hits: 2,
[Lv 3]: Hits: 3,
[Lv 4]: Hits: 3,
[Lv 5]: Hits: 4,
[Lv 6]: Hits: 4,
[Lv 7]: Hits: 5,
[Lv 8]: Hits: 5,
[Lv 9]: Hits: 6,
[Lv 10]: Hits: 6
New calculation: Damage = (Skill Lv × 10) + (Steel Crow Lv × 10) + Agi + (Dex ÷ 5) + (Luk ÷ 3) + (Matk × (Int / 80)).
Details: AfterCastActDelay set as ASPD + 220; CastTime: 700 + (50 × Skill Lv); Fixed Cast Time: 600.
`,
  img: icon_hnt_3_namespaceObject
}, {
  id: "detect",
  level: 0,
  dependencies: [{
    id: "falconryMastery",
    minLevel: 5
  }],
  dependent: [],
  element: null,
  skillName: "Detect",
  maxLevel: 4,
  inform: `Max Lv: 4
Skill Form: Active
Type: Misc
Target: Ground
Range: 6
Requirement: Falconry Mastery Lv: 5
Description: Commands a Falcon to detect hidden characters from a distance.
[Lv 1]: Range: 6 cells,
[Lv 2]: Range: 7 cells,
[Lv 3]: Range: 8 cells,
[Lv 4]: Range: 9 cells`,
  img: icon_hnt_6_namespaceObject
}, {
  id: "springTrap",
  level: 0,
  dependencies: [{
    id: "falconryMastery",
    minLevel: 3
  }],
  dependent: [],
  element: null,
  skillName: "Spring Trap",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Misc
Target: Trap
Range: 5
Requirement: Falconry Mastery Lv: 3
Description: Commands Falcon to remove a set Trap from a distance.
[Lv 1]: Range: 5 cells,
[Lv 2]: Range: 6 cells,
[Lv 3]: Range: 7 cells,
[Lv 4]: Range: 8 cells,
[Lv 5]: Range: 9 cells`,
  img: icon_hnt_15_namespaceObject
}, {
  id: "blastMine",
  level: 0,
  dependencies: [{
    id: "trapResearch",
    minLevel: 1
  }, {
    id: "landMine",
    minLevel: 1
  }],
  dependent: [{
    id: "detonator"
  }, {
    id: "claymoreTrap"
  }, {
    id: "glacialTrap"
  }, {
    id: "shockwaveTrap"
  }],
  element: null,
  skillName: "Blast Mine",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Ground
Range: 2
Requirement: Trap Research Lv: 1, Land Mine Lv: 1
Description: Deploys a trap that explodes when triggered, dealing piercing Wind damage to all enemies in a 5x5 area. Damage increases upon skill level, users base level, DEX and INT. Traps ignores accuracy checks and lasts for 90 seconds, and can be placed directly under enemies. It can be pushed 3 cells back with basic attacks. Catalyst: 1x Trap.
[Lv 1]: Trap HP: 5,
[Lv 2]: Trap HP: 10,
[Lv 3]: Trap HP: 15,
[Lv 4]: Trap HP: 20,
[Lv 5]: Trap HP: 25`,
  img: icon_hnt_2_namespaceObject
}, {
  id: "claymoreTrap",
  level: 0,
  dependencies: [{
    id: "trapResearch",
    minLevel: 1
  }, {
    id: "landMine",
    minLevel: 3
  }, {
    id: "blastMine",
    minLevel: 2
  }, {
    id: "glacialTrap",
    minLevel: 1
  }],
  dependent: [{
    id: "detonator"
  }, {
    id: "shockwaveTrap"
  }],
  element: null,
  skillName: "Claymore Trap",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Ground
Range: 2
Requirement: Trap Research Lv: 1, Land Mine Lv: 3, Blast Mine Lv: 2, Glacial Trap Lv: 1
Description: Deploys a trap that explodes when triggered, dealing piercing Fire damage to all enemies in a 5x5 area. Damage increases upon skill level, users base level, DEX and INT. Traps ignores accuracy checks and lasts for 90 seconds, and can be placed directly under enemies. It can be pushed 3 cells back with basic attacks. Catalyst: 1x Trap.
[Lv 1]: Trap HP: 5,
[Lv 2]: Trap HP: 10,
[Lv 3]: Trap HP: 15,
[Lv 4]: Trap HP: 20,
[Lv 5]: Trap HP: 25`,
  img: icon_hnt_5_namespaceObject
}, {
  id: "ankleSnare",
  level: 0,
  dependencies: [{
    id: "trapResearch",
    minLevel: 1
  }],
  dependent: [{
    id: "detonator"
  }, {
    id: "flasher"
  }, {
    id: "sandman"
  }, {
    id: "shockwaveTrap"
  }],
  element: null,
  skillName: "Ankle Snare",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Misc
Target: Ground
Range: 2
Requirement: Trap Research Lv: 1
Description: Deploys trap at a targeted location that immobilizes any enemy that steps on it. The duration of immobilization decreases based on the targets AGI. Catalyst: 1x Trap.
[Lv 1]: Trap HP: 5, Duration: 28 sec,
[Lv 2]: Trap HP: 10, Duration: 56 sec,
[Lv 3]: Trap HP: 15, Duration: 84 sec,
[Lv 4]: Trap HP: 20, Duration: 112 sec,
[Lv 5]: Trap HP: 25, Duration: 140 sec`,
  img: icon_hnt_1_namespaceObject
}, {
  id: "flasher",
  level: 0,
  dependencies: [{
    id: "trapResearch",
    minLevel: 1
  }, {
    id: "skidTrap",
    minLevel: 2
  }, {
    id: "ankleSnare",
    minLevel: 1
  }],
  dependent: [{
    id: "detonator"
  }, {
    id: "sandman"
  }, {
    id: "shockwaveTrap"
  }],
  element: null,
  skillName: "Flasher",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Misc
Target: Ground
Range: 2
Requirement: Trap Research Lv: 1, Skid Trap Lv: 2, Ankle Snare Lv: 1
Description: Deploys trap at a targeted location that releases a blinding flash when triggered, potentially causing all enemies within the area to become blind for 18 seconds. Catalyst: 1x Trap.
[Lv 1]: Trap HP: 5, Duration: 28 sec, Blind chance: 50%,
[Lv 2]: Trap HP: 10, Duration: 56 sec, Blind chance: 60%,
[Lv 3]: Trap HP: 15, Duration: 84 sec, Blind chance: 70%,
[Lv 4]: Trap HP: 20, Duration: 112 sec, Blind chance: 80%,
[Lv 5]: Trap HP: 25, Duration: 140 sec, Blind chance: 90%`,
  img: icon_hnt_8_namespaceObject
}, {
  id: "glacialTrap",
  level: 0,
  dependencies: [{
    id: "trapResearch",
    minLevel: 1
  }, {
    id: "landMine",
    minLevel: 2
  }, {
    id: "blastMine",
    minLevel: 1
  }],
  dependent: [{
    id: "detonator"
  }, {
    id: "claymoreTrap"
  }, {
    id: "shockwaveTrap"
  }],
  element: null,
  skillName: "Glacial Trap",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Ground
Range: 2
Requirement: Trap Research Lv: 1, Land Mine Lv: 2, Blast Mine Lv: 1
Description: Deploys a trap that explodes when triggered, dealing piercing Water damage to all enemies in a 5x5 area. Damage increases upon skill level, users base level, DEX and INT. Traps ignores accuracy checks and lasts for 90 seconds, and can be placed directly under enemies. It can be pushed 3 cells back with basic attacks. Catalyst: 1x Trap.
[Lv 1]: Trap HP: 5,
[Lv 2]: Trap HP: 10,
[Lv 3]: Trap HP: 15,
[Lv 4]: Trap HP: 20,
[Lv 5]: Trap HP: 25`,
  img: icon_hnt_9_namespaceObject
}, {
  id: "landMine",
  level: 0,
  dependencies: [{
    id: "trapResearch",
    minLevel: 1
  }],
  dependent: [{
    id: "detonator"
  }, {
    id: "blastMine"
  }, {
    id: "claymoreTrap"
  }, {
    id: "glacialTrap"
  }, {
    id: "shockwaveTrap"
  }],
  element: null,
  skillName: "Land Mine",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Ground
Range: 2
Requirement: Trap Research Lv: 1
Description: Deploys a trap that explodes when triggered, dealing piercing Earth damage to all enemies in a 5x5 area. Damage increases upon skill level, users base level, DEX and INT. Traps ignores accuracy checks and lasts for 90 seconds, and can be placed directly under enemies. It can be pushed 3 cells back with basic attacks. Catalyst: 1x Trap.
[Lv 1]: Trap HP: 5,
[Lv 2]: Trap HP: 10,
[Lv 3]: Trap HP: 15,
[Lv 4]: Trap HP: 20,
[Lv 5]: Trap HP: 25`,
  img: icon_hnt_10_namespaceObject
}, {
  id: "removeTrap",
  level: 0,
  dependencies: [{
    id: "trapResearch",
    minLevel: 5
  }],
  dependent: [],
  element: null,
  skillName: "Remove Trap",
  maxLevel: 1,
  inform: `Max Lv: 1
Skill Form: Active
Type: Misc
Target: Trap
Range: 2
Requirement: Trap Research Lv: 5
Description: Removes a trap that has been set on the ground, as well as regain that Trap.`,
  img: icon_hnt_11_namespaceObject
}, {
  id: "sandman",
  level: 0,
  dependencies: [{
    id: "trapResearch",
    minLevel: 1
  }, {
    id: "skidTrap",
    minLevel: 3
  }, {
    id: "ankleSnare",
    minLevel: 2
  }, {
    id: "flasher",
    minLevel: 1
  }],
  dependent: [{
    id: "detonator"
  }, {
    id: "shockwaveTrap"
  }],
  element: null,
  skillName: "Sandman",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Misc
Target: Ground
Range: 2
Requirement: Trap Research Lv: 1, Skid Trap Lv: 3, Ankle Snare Lv: 2, Flasher Lv: 1
Description: Deploys trap at a targeted location that releases a sedative when triggered, potentially putting all enemies within the area to sleep for 18 seconds. Catalyst: 1x Trap.
[Lv 1]: Trap HP: 5, Duration: 28 sec, Sleep chance: 50%,
[Lv 2]: Trap HP: 10, Duration: 56 sec, Sleep chance: 60%,
[Lv 3]: Trap HP: 15, Duration: 84 sec, Sleep chance: 70%,
[Lv 4]: Trap HP: 20, Duration: 112 sec, Sleep chance: 80%,
[Lv 5]: Trap HP: 25, Duration: 140 sec, Sleep chance: 90%`,
  img: icon_hnt_14_namespaceObject
}, {
  id: "shockwaveTrap",
  level: 0,
  dependencies: [{
    id: "landMine",
    minLevel: 4
  }, {
    id: "skidTrap",
    minLevel: 4
  }, {
    id: "blastMine",
    minLevel: 3
  }, {
    id: "ankleSnare",
    minLevel: 3
  }, {
    id: "glacialTrap",
    minLevel: 2
  }, {
    id: "flasher",
    minLevel: 2
  }, {
    id: "claymoreTrap",
    minLevel: 1
  }, {
    id: "sandman",
    minLevel: 1
  }],
  dependent: [],
  element: null,
  skillName: "Shockwave Trap",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Misc
Target: Ground
Range: 2
Requirement: Land Mine Lv: 4, Skid Trap Lv: 4, Blast Mine Lv: 3, Ankle Snare Lv: 3, Glacial Trap Lv: 2, Flasher Lv: 2, Claymore Trap Lv: 1, Sandman Lv: 1
Description: Deploys trap that releases a shockwave when triggered, drains the target's SP every 2 seconds for 20 seconds. Deals damage equal to double the SP burned. Catalyst: 1x Trap.
[Lv 1]: Trap HP: 5, Duration: 23 sec, SP Burn: 4%,
[Lv 2]: Trap HP: 10, Duration: 46 sec, SP Burn: 5%,
[Lv 3]: Trap HP: 15, Duration: 69 sec, SP Burn: 6%,
[Lv 4]: Trap HP: 20, Duration: 92 sec, SP Burn: 7%,
[Lv 5]: Trap HP: 25, Duration: 115 sec, SP Burn: 8%`,
  img: icon_hnt_13_namespaceObject
}, {
  id: "skidTrap",
  level: 0,
  dependencies: [{
    id: "trapResearch",
    minLevel: 1
  }],
  dependent: [{
    id: "detonator"
  }, {
    id: "flasher"
  }, {
    id: "sandman"
  }, {
    id: "shockwaveTrap"
  }],
  element: null,
  skillName: "Skid Trap",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Misc
Target: Ground
Range: 2
Requirement: Trap Research Lv: 1
Description: Deploys trap that causes any enemy that steps on it to slip and slide in a certain direction. Catalyst: 1x Trap.
[Lv 1]: Trap HP: 5, Duration: 28 sec, Knock Back: 6 cells,
[Lv 2]: Trap HP: 10, Duration: 56 sec, Knock Back: 7 cells,
[Lv 3]: Trap HP: 15, Duration: 84 sec, Knock Back: 8 cells,
[Lv 4]: Trap HP: 20, Duration: 112 sec, Knock Back: 9 cells,
[Lv 5]: Trap HP: 25, Duration: 140 sec, Knock Back: 10 cells`,
  img: icon_hnt_12_namespaceObject
}, {
  id: "trapResearch",
  level: 0,
  dependencies: [],
  dependent: [{
    id: "blastMine"
  }, {
    id: "claymoreTrap"
  }, {
    id: "ankleSnare"
  }, {
    id: "flasher"
  }, {
    id: "glacialTrap"
  }, {
    id: "landMine"
  }, {
    id: "removeTrap"
  }, {
    id: "sandman"
  }, {
    id: "skidTrap"
  }],
  element: null,
  skillName: "Trap Research",
  maxLevel: 5,
  inform: `Max Lv: 5
??????????`,
  img: no_img_namespaceObject
}];

/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */
;// ./src/img/icon_snp/icon_snp_1.png
const icon_snp_1_namespaceObject = __webpack_require__.p + "ed39a84b6e80b025f48f.png";
;// ./src/img/icon_snp/icon_snp_2.png
const icon_snp_2_namespaceObject = __webpack_require__.p + "7326330649a9d4631488.png";
;// ./src/img/icon_snp/icon_snp_3.png
const icon_snp_3_namespaceObject = __webpack_require__.p + "893d2e0f61d97bf22ce2.png";
;// ./src/img/icon_snp/icon_snp_4.png
const icon_snp_4_namespaceObject = __webpack_require__.p + "b684752ab346ec7e36d8.png";
;// ./src/img/icon_snp/icon_snp_5.png
const icon_snp_5_namespaceObject = __webpack_require__.p + "c6e253cafa0685219093.png";
;// ./src/img/icon_snp/icon_snp_6.png
const icon_snp_6_namespaceObject = __webpack_require__.p + "4f2ed36204da3c90c657.png";
;// ./src/js/listSkills/ArcherSniper.js
/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */

 // заглушка







// список скилов Sniper
const skillsSniper = [{
  id: "detonator",
  level: 0,
  dependencies: [{
    id: "landMine",
    minLevel: 4
  }, {
    id: "skidTrap",
    minLevel: 4
  }, {
    id: "blastMine",
    minLevel: 3
  }, {
    id: "ankleSnare",
    minLevel: 3
  }, {
    id: "glacialTrap",
    minLevel: 2
  }, {
    id: "flasher",
    minLevel: 2
  }, {
    id: "claymoreTrap",
    minLevel: 1
  }, {
    id: "sandman",
    minLevel: 1
  }],
  dependent: [],
  element: null,
  skillName: "Detonator",
  maxLevel: 1,
  inform: `Max Lv: 1
Skill Form: Active
Type: Misc
Target: Ground
Range: 9
Requirement: Land Mine Lv: 4, Skid Trap Lv: 4, Blast Mine Lv: 3, Ankle Snare Lv: 3, Glacial Trap Lv: 2, Flasher Lv: 2, Claymore Trap Lv: 1, Sandman Lv: 1
Description: Instantly activates all traps within a 7x7 area. Traps triggered by this skill have their detonation area expanded to 7x7. This skill does not activate traps set by other players. Can activate the following traps: Glacial Trap, Blast Mine, Land Mine, Claymore Trap, Flasher, Sandman.`,
  img: icon_snp_6_namespaceObject
}, {
  id: "falconAssault",
  level: 0,
  dependencies: [{
    id: "steelCrow",
    minLevel: 6
  }, {
    id: "blitzBeat",
    minLevel: 7
  }],
  dependent: [],
  element: null,
  skillName: "Falcon Assault",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
Range: 12
Requirement: Steel Crow Lv: 6, Blitz Beat Lv: 7
Description: Command your falcon to execute a swift dive, delivering a physical attack that bypasses both defense and evasion on a single target. Falcon Assault has a chance to automatically trigger Blitz Beat. The damage is based on Blitz Beat's damage.
[Lv 1]: Blitz Beat Damage x [1.1 + 0.1 every 8 INT], Blitz Beat auto-trigger chance 1% + one third of the Auto-Blitz Beat chance.
[Lv 2]: Blitz Beat Damage x [1.2 + 0.1 every 8 INT], Blitz Beat auto-trigger chance 2% + one third of the Auto-Blitz Beat chance.
[Lv 3]: Blitz Beat Damage x [1.3 + 0.1 every 8 INT], Blitz Beat auto-trigger chance 3% + one third of the Auto-Blitz Beat chance.
[Lv 4]: Blitz Beat Damage x [1.4 + 0.1 every 8 INT], Blitz Beat auto-trigger chance 4% + one third of the Auto-Blitz Beat chance.
[Lv 5]: Blitz Beat Damage x [1.5 + 0.1 every 8 INT], Blitz Beat auto-trigger chance 5% + one third of the Auto-Blitz Beat chance.
[Lv 6]: Blitz Beat Damage x [1.6 + 0.1 every 8 INT], Blitz Beat auto-trigger chance 6% + one third of the Auto-Blitz Beat chance.
[Lv 7]: Blitz Beat Damage x [1.7 + 0.1 every 8 INT], Blitz Beat auto-trigger chance 7% + one third of the Auto-Blitz Beat chance.
[Lv 8]: Blitz Beat Damage x [1.8 + 0.1 every 8 INT], Blitz Beat auto-trigger chance 8% + one third of the Auto-Blitz Beat chance.
[Lv 9]: Blitz Beat Damage x [1.9 + 0.1 every 8 INT], Blitz Beat auto-trigger chance 9% + one third of the Auto-Blitz Beat chance.
[Lv 10]: Blitz Beat Damage x [2 + 0.1 every 8 INT], Blitz Beat auto-trigger chance 10% + one third of the Auto-Blitz Beat chance.
New calculation:
Damage = ((Skill Lv × 10) + (Steel Crow Lv × 10) + Agi + (Dex ÷ 5) + (Luk ÷ 3) + (Matk × (Int / 80)) × BlitzBeat Hits) × ((Int / 80) + (Skill Lv × 0.1)).
Details: AfterCastActDelay set as ASPD + 220; CastTime varying between 410 and 1400; Fixed Cast Time: 600; Cooldown: 1500.
`,
  img: icon_snp_2_namespaceObject
}, {
  id: "quickDraw",
  level: 0,
  dependencies: [{
    id: "owlsEye",
    minLevel: 10
  }, {
    id: "vulturesEye",
    minLevel: 10
  }, {
    id: "improveConcentration",
    minLevel: 10
  }],
  dependent: [],
  element: null,
  skillName: "Quick Draw",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Self
Requirement: Owl's Eye Lv: 10, Vulture's Eye Lv: 10, Improve Concentration Lv: 10
Description: Enters the Quickdraw state, reducing your Flee Rate to increase your Attack Speed and Critical. Also provides a chance to unleash a second attack with basic attacks.
[Lv 1]: Flee -47%, Aspd +2%, Crit +2, Double Attack Chance 7%,
[Lv 2]: Flee -44%, Aspd +4%, Crit +4, Double Attack Chance 9%,
[Lv 3]: Flee -41%, Aspd +6%, Crit +6, Double Attack Chance 11%,
[Lv 4]: Flee -38%, Aspd +8%, Crit +8, Double Attack Chance 13%,
[Lv 5]: Flee -35%, Aspd +10%, Crit +10, Double Attack Chance 15%,
[Lv 6]: Flee -32%, Aspd +12%, Crit +12, Double Attack Chance 17%,
[Lv 7]: Flee -29%, Aspdt +14%, Crit +14, Double Attack Chance 19%,
[Lv 8]: Flee -26%, Aspd +16%, Crit +16, Double Attack Chance 21%,
[Lv 9]: Flee -23%, Aspd +18%, Crit +18, Double Attack Chance 23%,
[Lv 10]: Flee -20%, Aspd +20%, Crit +20, Double Attack Chance 25%`,
  img: icon_snp_5_namespaceObject
}, {
  id: "sharpShooting",
  level: 0,
  dependencies: [{
    id: "improveConcentration",
    minLevel: 10
  }, {
    id: "doubleStrafe",
    minLevel: 7
  }, {
    id: "chargeArrow",
    minLevel: 10
  }],
  dependent: [],
  element: null,
  skillName: "Sharp Shooting",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
Range: 1
Requirement: Improve Concentration Lv: 10, Double Strafe Lv: 7, Charge Arrow Lv: 10
Description: Fires a powerful arrow towards a target point, dealing heavy damage to all enemies in its path. Each Base Level above 80 increases the skill damage. Consumes: 1x Arrow.
[Lv 1]: Atk 210%,
[Lv 2]: Atk 320%,
[Lv 3]: Atk 430%,
[Lv 4]: Atk 540%,
[Lv 5]: Atk 650%,
[Lv 6]: Atk 760%,
[Lv 7]: Atk 870%,
[Lv 8]: Atk 980%,
[Lv 9]: Atk 1090%,
[Lv 10]: Atk 1200%
Details: AfterCastActDelay set as ASPD + 220; CastTime: 200 + (100 × Skill Lv); Fixed Cast Time: 500; Cooldown: 2000.`,
  img: icon_snp_3_namespaceObject
}, {
  id: "trueSight",
  level: 0,
  dependencies: [{
    id: "owlsEye",
    minLevel: 10
  }, {
    id: "vulturesEye",
    minLevel: 10
  }, {
    id: "improveConcentration",
    minLevel: 10
  }],
  dependent: [],
  element: null,
  skillName: "True Sight",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Self
Requirement: Owl's Eye Lv: 10, Vulture's Eye Lv: 10, Improve Concentration Lv: 10
Description: Enters the True Sight state, reducing your attack speed to increase your hit rate , damage and Critical.
[Lv 1]: Aspd -47%, Hit +2%, Damage +7%, Crit +2,
[Lv 2]: Aspd -44%, Hit +4%, Damage +9%, Crit +4,
[Lv 3]: Aspd -41%, Hit +6%, Damage +11%, Crit +6,
[Lv 4]: Aspd -38%, Hit +8%, Damage +13%, Crit +8,
[Lv 5]: Aspd -35%, Hit +10%, Damage +15%, Crit +10,
[Lv 6]: Aspd -32%, Hit +12%, Damage +17%, Crit +12,
[Lv 7]: Aspd -29%, Hit +14%, Damage +19%, Crit +14,
[Lv 8]: Aspd -26%, Hit +16%, Damage +21%, Crit +16,
[Lv 9]: Aspd -23%, Hit +18%, Damage +23%, Crit +18,
[Lv 10]: Aspd -20%, Hit +20%, Damage +25%, Crit +20`,
  img: icon_snp_1_namespaceObject
}, {
  id: "windWalk",
  level: 0,
  dependencies: [{
    id: "improveConcentration",
    minLevel: 9
  }],
  dependent: [],
  element: null,
  skillName: "Wind Walk",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Self
Requirement: Improve Concentration Lv: 9
Description: Increases Movement Speed and Flee Rate for you and party members for 210 seconds. Movement speed boosts from different skills do not stack; only the highest bonus applies. Skills that reduce Movement Speed, like Quagmire, cancel Wind Walk.
[Lv 1]: Move Speed +17%, Flee Rate +1%,
[Lv 2]: Move Speed +19%, Flee Rate +2%,
[Lv 3]: Move Speed +21%, Flee Rate +3%,
[Lv 4]: Move Speed +23%, Flee Rate +4%,
[Lv 5]: Move Speed +25%, Flee Rate +5%,
[Lv 6]: Move Speed +27%, Flee Rate +6%,
[Lv 7]: Move Speed +29%, Flee Rate +7%,
[Lv 8]: Move Speed +31%, Flee Rate +8%,
[Lv 9]: Move Speed +33%, Flee Rate +9%,
[Lv 10]: Move Speed +35%, Flee Rate +10%
New calculation: Bonus% = 5 + (Skill Lv × 2).
`,
  img: icon_snp_4_namespaceObject
}];

/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */
;// ./src/js/listSkills/ArcherBard.js
/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */

 // заглушка

// список скилов Bard
const skillsBard = [{
  id: "musicalLesson",
  level: 0,
  dependencies: [],
  dependent: [{
    id: "moonlitWaterMill"
  }, {
    id: "encore"
  }, {
    id: "musicalStrike"
  }, {
    id: "dissonance"
  }],
  element: null,
  skillName: "Musical Lesson",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Passive
Type: Physical
Requirement: None
Description: Increase Atk, MAtk and Aspd with Musical Instruments Class Weapon. When [Lv 10], it increases Max SP in 6%.
[Lv 1]: Atk +2, MAtk +2, Aspd +1%,
[Lv 2]: Atk +4, MAtk +4, Aspd +2%,
[Lv 3]: Atk +6, MAtk +6, Aspd +3%,
[Lv 4]: Atk +8, MAtk +8, Aspd +4%,
[Lv 5]: Atk +10, MAtk +10, Aspd +5%,
[Lv 6]: Atk +12, MAtk +12, Aspd +6%,
[Lv 7]: Atk +14, MAtk +14, Aspd +7%,
[Lv 8]: Atk +16, MAtk +16, Aspd +8%,
[Lv 9]: Atk +18, MAtk +18, Aspd +9%,
[Lv 10]: Atk +20, MAtk +20, Aspd +10%
`,
  img: no_img_namespaceObject
}, {
  id: "musicalStrike",
  level: 0,
  dependencies: [{
    id: "musicalLesson",
    minLevel: 3
  }],
  dependent: [{
    id: "arrowVulcan"
  }],
  element: null,
  skillName: "Musical Strike",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Enemy
Range: 12
Requirement: Musical Lesson Lv: 3
Description: Fires a powerful volley of arrows using an instrument. The Arrows element determines the element of this attack. Consumes: 2x Arrow.
[Lv 1]: Atk 130% x 2 Hits,
[Lv 2]: Atk 160% x 2 Hits,
[Lv 3]: Atk 190% x 2 Hits,
[Lv 4]: Atk 220% x 2 Hits,
[Lv 5]: Atk 250% x 2 Hits
New calculation: ATK% = (50 + Crit) + (30 × Skill Lv).
Details: AfterCastActDelay set as ASPD; CastTime: 350 + (50 × Skill Lv); Fixed Cast Time: 400; AmmoAmount: 1.
`,
  img: no_img_namespaceObject
}, {
  id: "dissonance",
  level: 0,
  dependencies: [{
    id: "musicalLesson",
    minLevel: 2
  }],
  dependent: [{
    id: "reverberation"
  }, {
    id: "tarotCardOfFate"
  }, {
    id: "appleOfIdun"
  }, {
    id: "poemOfBragi"
  }, {
    id: "whistle"
  }],
  element: null,
  skillName: "Dissonance",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Toggle
Type: Magical
Target: Self
Requirement: Musical Lesson Lv: 2
Description: Plays a discordant tune, dealing Neutral magic damage to all enemies in a 9x9 radius every 3 seconds. Reduces movement speed by 25% and consumes 3 SP per second while active. Can trigger auto-cast items. You can still use basic attacks and skills while active. Requires a Musical Instrument class weapon. Cannot switch weapons while active.
[Lv 1]: (Atk + MAtk) x 30% every 3 seconds,
[Lv 2]: (Atk + MAtk) x 60% every 3 seconds,
[Lv 3]: (Atk + MAtk) x 90% every 3 seconds,
[Lv 4]: (Atk + MAtk) x 120% every 3 seconds,
[Lv 5]: (Atk + MAtk) x 150% every 3 seconds
The interval between hits is now calculated based on the user’s attack speed.
New Hit/Sec calculation:
Hit/Sec = 1000 ÷ ((4000 - (20 × ASPD)) × 3).
Now the skill can trigger autocast for both physical and magical modes.
It does not disable SP regeneration, but reduces regeneration by 70% and increases the regeneration time by 30%.
`,
  img: no_img_namespaceObject
}, {
  id: "appleOfIdun",
  level: 0,
  dependencies: [{
    id: "dissonance",
    minLevel: 3
  }],
  dependent: [{
    id: "drumOfBattlefield"
  }],
  element: null,
  skillName: "Apple of Idun",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Misc
Target: Self
Requirement: Dissonance Lv: 3
Description: Performs a song that will boost Max HP and Healings Received of the user and nearby party members around the performer. The duration of this skill is 180 seconds and is reduced by 60 seconds for each subsequent music used after it. Requires Musical Instrument Class Weapon.
[Lv 1]: MaxHP +10%, Healings Received + 2%,
[Lv 2]: MaxHP +11%, Healings Received + 4%,
[Lv 3]: MaxHP +12%, Healings Received + 6%,
[Lv 4]: MaxHP +13%, Healings Received + 8%,
[Lv 5]: MaxHP +14%, Healings Received +10%,
[Lv 6]: MaxHP +15%, Healings Received +12%,
[Lv 7]: MaxHP +16%, Healings Received +14%,
[Lv 8]: MaxHP +17%, Healings Received +16%,
[Lv 9]: MaxHP +18%, Healings Received +18%,
[Lv 10]: MaxHP +20%, Healings Received +20%
Additional Benefits and Adjustments: Heals 5% of allies’ HP when using the skill; increases MaxHP by (2 × Skill Lv)%; heals 2% of the user’s HP every (25 - (Skill Lv × 2)) seconds.
`,
  img: no_img_namespaceObject
}, {
  id: "drumOfBattlefield",
  level: 0,
  dependencies: [{
    id: "appleOfIdun",
    minLevel: 10
  }],
  dependent: [{
    id: "lokisWail"
  }],
  element: null,
  skillName: "Drum of Battlefield",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Misc
Target: Self
Requirement: Apple of Idun Lv: 10
Description: Initiates a battle duet that temporarily increases both physical and magical attack power for you and your party members within a 25x25 area. Both users must be in the same group and adjacent to each other, and the partner must have learned the duet. Duet level matches the initiator skill level. Only one duet can be active at a time, but it can coexist with other songs or dances. Using the duet puts both partners skills on cooldown.
[Lv 1]: Atk +15, MAtk +15,
[Lv 2]: Atk +20, MAtk +20,
[Lv 3]: Atk +25, MAtk +25,
[Lv 4]: Atk +30, MAtk +30,
[Lv 5]: Atk +35, MAtk +35`,
  img: no_img_namespaceObject
}, {
  id: "lokisWail",
  level: 0,
  dependencies: [{
    id: "drumOfBattlefield",
    minLevel: 3
  }],
  dependent: [],
  element: null,
  skillName: "Loki's Wail",
  maxLevel: 1,
  inform: `Max Lv: 1
Skill Form: Active
Type: Misc
Target: Self
Requirement: Drum of Battlefield Lv: 3
Description: Initiates a frenzied duet that gives opponents within a 9x9 area a 35% chance to fail when activating their skills. Upon activation, it also has a 100% chance to inflict Chaos. Both users must be in the same group and adjacent to each other. Duet lasts for 180 seconds, and both partners can move freely and use skills within the area. If either leaves the area, the effect ends. Only one duet can be active at a time, but it can coexist with other songs or dances. Using the duet puts both partners skills on cooldown.`,
  img: no_img_namespaceObject
}, {
  id: "encore",
  level: 0,
  dependencies: [{
    id: "musicalLesson",
    minLevel: 5
  }],
  dependent: [{
    id: "frostJoke"
  }],
  element: null,
  skillName: "Encore",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Misc
Target: Self
Requirement: Musical Lesson Lv: 5
Description: Extends the duration of all active songs, dances, and party buff duets for you and your allies by 15 seconds. Upon use, you gain a special status effect that enhances your abilities based on the number of active songs, dances, and duets. For Melody Strike and Slinging Strike, it increases skill damage by +10%. For Dissonance and Cringe Dance, it reduces the interval between attacks by 0.4 seconds. For Arrow Vulcan and Reverberation, it reduces the cooldown by 0.107 seconds. SP cost increases by 35 for each active song, dance, and duet. SP cost increases by 35 for each active song, dance, and duet.
[Lv 1]: Encore duration: 40 seconds,
[Lv 2]: Encore duration: 60 seconds,
[Lv 3]: Encore duration: 80 seconds,
[Lv 4]: Encore duration: 100 seconds,
[Lv 5]: Encore duration: 120 seconds
The functionality has been modified to improve usability.
When activated, it reduces the Cooldown of all active songs/dances by 50% and increases their duration by 50% (based on their current duration).
Synergies:
Slinging/Musical Strike: increases the final ATK% by 10% per active song/dance.
Arrow Vulcan: increases the final ATK% by 5% per active song/dance.
Reverberation: reduces SP cost and Cooldown by 5% per active song/dance.
Dissonance/Cringe Dance: reduces physical damage received by 5% per active song/dance.
`,
  img: no_img_namespaceObject
}, {
  id: "frostJoke",
  level: 0,
  dependencies: [{
    id: "encore",
    minLevel: 3
  }],
  dependent: [],
  element: null,
  skillName: "Frost Joke",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Misc
Target: Self
Requirement: Encore Lv: 3
Description: Inflicts the Freezing status to enemies within the casters view.
[Lv 1]: Chance: 20%,
[Lv 2]: Chance: 25%,
[Lv 3]: Chance: 30%,
[Lv 4]: Chance: 35%,
[Lv 5]: Chance: 40%`,
  img: no_img_namespaceObject
}, {
  id: "whistle",
  level: 0,
  dependencies: [{
    id: "dissonance",
    minLevel: 3
  }],
  dependent: [{
    id: "intoTheAbyss"
  }],
  element: null,
  skillName: "Whistle",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Misc
Target: Self
Requirement: Dissonance Lv: 3
Description: Performs a song that will boost Flee and Perfect Dodge of the user and party members around the performer. The duration of this skill is 180 seconds and is reduced by 60 seconds for each subsequent music used after it. Requires Musical Instrument Class Weapon.
[Lv 1]: Flee +20, Perfect Dodge +1,
[Lv 2]: Flee +22, Perfect Dodge +2,
[Lv 3]: Flee +24, Perfect Dodge +3,
[Lv 4]: Flee +26, Perfect Dodge +4,
[Lv 5]: Flee +28, Perfect Dodge +5,
[Lv 6]: Flee +30, Perfect Dodge +6,
[Lv 7]: Flee +32, Perfect Dodge +7,
[Lv 8]: Flee +34, Perfect Dodge +8,
[Lv 9]: Flee +36, Perfect Dodge +9,
[Lv 10]: Flee +40, Perfect Dodge +10
Additional Benefits and Adjustments: Perfect Dodge +1 × Skill Lv; Flee: +20 + (Skill Lv × 2); adds 1% × Skill Lv chance to dodge any damage.
`,
  img: no_img_namespaceObject
}, {
  id: "intoTheAbyss",
  level: 0,
  dependencies: [{
    id: "whistle",
    minLevel: 10
  }],
  dependent: [{
    id: "lullaby"
  }],
  element: null,
  skillName: "Into the Abyss",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Misc
Target: Self
Requirement: Whistle Lv: 10
Description: Initiates an ambitious duet that grants a temporary effect, giving you and your party members within a 25x25 area a chance to negate the consumption of catalysts when using skills. Both users must be in the same group and adjacent to each other, and the partner must have learned the duet. Duet level matches the initiator skill level. Only one duet can be active at a time, but it can coexist with other songs or dances. Using the duet puts both partners skills on cooldown. You must have the skills catalyst to use it. Catalysts That Can Have Consumption Negated: Arrows, Gems, Zeny Pouch, Vials, Potions, Traps, Spider Web, Sage Points, Throwing Knives, Poison Bottle, Stones, Spirit Orbs and any type of ammunition.
[Lv 1]: Grants a 4% chance to negate catalyst consumption.
[Lv 2]: Grants a 8% chance to negate catalyst consumption.
[Lv 3]: Grants a 12% chance to negate catalyst consumption.
[Lv 4]: Grants a 16% chance to negate catalyst consumption.
[Lv 5]: Grants a 20% chance to negate catalyst consumption.`,
  img: no_img_namespaceObject
}, {
  id: "lullaby",
  level: 0,
  dependencies: [{
    id: "intoTheAbyss",
    minLevel: 3
  }],
  dependent: [],
  element: null,
  skillName: "Lullaby",
  maxLevel: 1,
  inform: `Max Lv: 1
Skill Form: Active
Type: Misc
Target: Self
Requirement: Into the Abyss Lv: 3
Description: Initiates a sleepy duet that gives opponents within a 9x9 area a 100% chance to be inflicted with Sleep every 10 seconds while they remain in the area. The Sleep effect lasts for 4 seconds. Both users must be in the same group and adjacent to each other. Duet lasts for 180 seconds, and both partners can move freely and use skills within the area. If either leaves the area, the effect ends. Only one duet can be active at a time, but it can coexist with other songs or dances. Using the duet puts both partners skills on cooldown`,
  img: no_img_namespaceObject
}, {
  id: "poemOfBragi",
  level: 0,
  dependencies: [{
    id: "dissonance",
    minLevel: 3
  }],
  dependent: [{
    id: "invulnerableSiegfried"
  }],
  element: null,
  skillName: "Poem of Bragi",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Misc
Target: Self
Requirement: Dissonance Lv: 3
Description: Performs a song that will shorten Variable Cast Time and After Cast Delay of the user and party members around the performer. The duration of this skill is 180 seconds and is reduced by 60 seconds for each subsequent music used after it. Requires Musical Instrument Class Weapon.
[Lv 1]: VCT -2%, Cast Delay -3%,
[Lv 2]: VCT -4%, Cast Delay -6%,
[Lv 3]: VCT -6%, Cast Delay -9%,
[Lv 4]: VCT -8%, Cast Delay -12%,
[Lv 5]: VCT -10%, Cast Delay -15%,
[Lv 6]: VCT -12%, Cast Delay -18%,
[Lv 7]: VCT -14%, Cast Delay -21%,
[Lv 8]: VCT -16%, Cast Delay -24%,
[Lv 9]: VCT -18%, Cast Delay -27%,
[Lv 10]: VCT -20%, Cast Delay -30%
Additional Benefits and Adjustments: Reduces VariableCastTime, FixedCastTime, and AfterCastDelay by (5 + (Skill Lv × 2))%.
`,
  img: no_img_namespaceObject
}, {
  id: "invulnerableSiegfried",
  level: 0,
  dependencies: [{
    id: "poemOfBragi",
    minLevel: 10
  }],
  dependent: [{
    id: "mrKimARichMan"
  }],
  element: null,
  skillName: "Invulnerable Siegfried",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Misc
Target: Self
Requirement: Poem of Bragi Lv: 10
Description: Initiates a comforting duet that grants temporary resistance to various negative effects and increases Fire, Water, Wind, and Earth resistances for you and party members within a 25x25 area. Both users must be in the same group and adjacent to each other, and the partner must have learned the duet. Duet level matches the initiator skill level. Only one duet can be active at a time, but it can coexist with other songs or dances. Using the duet puts both partners skills on cooldown. Negative Effects Affected: Blind, Petrification, Freezing, Stun, Curse, Sleep, Silence, Chaos,
[Lv 1]: Elemental Resistences +3%, Tolerance to negative effects +5%,
[Lv 2]: Elemental Resistences +6%, Tolerance to negative effects +10%,
[Lv 3]: Elemental Resistences +9%, Tolerance to negative effects +15%,
[Lv 4]: Elemental Resistences +12%, Tolerance to negative effects +20%,
[Lv 5]: Elemental Resistences +15%, Tolerance to negative effects +25%`,
  img: no_img_namespaceObject
}, {
  id: "mrKimARichMan",
  level: 0,
  dependencies: [{
    id: "invulnerableSiegfried",
    minLevel: 3
  }],
  dependent: [],
  element: null,
  skillName: "Mr. Kim A Rich Man",
  maxLevel: 1,
  inform: `Max Lv: 1
Skill Form: Active
Type: Misc
Target: Self
Requirement: Invulnerable Siegfried Lv: 3
Description: Initiates a greedy duet that increases Base and Job experience gain for you and players within the 9x9 area of effect who defeat monsters. Both users must be in the same group and adjacent to each other. Duet lasts for 180 seconds, and both partners can move freely and use skills within the area, but if either leaves the area, the effect ends. Only one duet can be active at a time, but it can coexist with other songs or dances. Using the duet puts both partners skills on cooldown. Increases base and class experience from defeating monsters by 40%`,
  img: no_img_namespaceObject
}, {
  id: "assassinCrossOfSunset",
  level: 0,
  dependencies: [],
  dependent: [{
    id: "theRingOfNibelungen"
  }],
  element: null,
  skillName: "Assassin Cross of Sunset",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Misc
Target: Self
Requirement: None
Description: Performs a song that will boost attack speed of the user and party members around the performer. The duration of this skill is 180 seconds and is reduced by 60 seconds for each subsequent music used after it. Requires Musical Instrument Class Weapon.
[Lv 1]: Aspd +2%,
[Lv 2]: Aspd +4%,
[Lv 3]: Aspd +6%,
[Lv 4]: Aspd +8%,
[Lv 5]: Aspd +10%,
[Lv 6]: Aspd +12%,
[Lv 7]: Aspd +14%,
[Lv 8]: Aspd +16%,
[Lv 9]: Aspd +18%,
[Lv 10]: Aspd +20%
Additional Benefits and Adjustments: Reduces the user’s After Attack Delay by 5 + (Skill Lv × 2)%; increases enemies’ After Attack Delay by 5 + (Skill Lv × 2)% for 5 seconds (only for the summoner); True ATK/MATK +10 × Skill Lv.

`,
  img: no_img_namespaceObject
}, {
  id: "theRingOfNibelungen",
  level: 0,
  dependencies: [{
    id: "assassinCrossOfSunset",
    minLevel: 10
  }],
  dependent: [{
    id: "eternalChaos"
  }],
  element: null,
  skillName: "The Ring of Nibelungen",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Misc
Target: Self
Requirement: Assassin Cross of Sunset Lv: 10
Description: Initiates a refined duet that grants a random temporary effect to you and your party members within a 25x25 area. Both users must be in the same group and adjacent to each other, and the partner must have learned the duet. Duet level matches the initiator skill level. Only one duet can be active at a time, but it can coexist with other songs or dances. Using the duet puts both partners skills on cooldown.
[Lv 1]: Attack Speed +4%, Atk +4%, MAtk +4%, Max HP +6%, Max SP +6%, All Stats +3, Hit +10, Flee +10, SP consumption -6%, HP recovery +20%, SP recovery +20%,
[Lv 2]: Attack Speed +8%, Atk +8%, MAtk +8%, Max HP +12%, Max SP +12%, All Stats +6, Hit +20, Flee +20, SP consumption -12%, HP recovery +40%, SP recovery +40%,
[Lv 3]: Attack Speed +12%, Atk +12%, MAtk +12%, Max HP +18%, Max SP +18%, All Stats +9, Hit +30, Flee +30, SP consumption -18%, HP recovery +60%, SP recovery +60%,
[Lv 4]: Attack Speed +16%, Atk +16%, MAtk +16%, Max HP +24%, Max SP +24%, All Stats +12, Hit +40, Flee +40, SP consumption -24%, HP recovery +80%, SP recovery +80%,
[Lv 5]: Attack Speed +20%, Atk +20%, MAtk +20%, Max HP +30%, Max SP +30%, All Stats +15, Hit +50, Flee +50, SP consumption -30%, HP recovery +100%, SP recovery +100%`,
  img: no_img_namespaceObject
}, {
  id: "eternalChaos",
  level: 0,
  dependencies: [{
    id: "theRingOfNibelungen",
    minLevel: 3
  }],
  dependent: [],
  element: null,
  skillName: "Eternal Chaos",
  maxLevel: 1,
  inform: `Max Lv: 1
Skill Form: Active
Type: Misc
Target: Self
Requirement: The Ring of Nibelungen Lv: 3
Description: Initiates a discordant duet that randomly reduces the physical and magical defenses of opponents within a 9x9 area. Both users must be in the same group and adjacent to each other. Duet lasts for 180 seconds, and both partners can move freely and use skills within the area. If either leaves the area, the effect ends. Only one duet can be active at a time, but it can coexist with other songs or dances. Using the duet puts both partners skills on cooldown. Reduces physical and magical defenses by a random percentage between 10% and 50%.`,
  img: no_img_namespaceObject
}];

/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */
;// ./src/js/listSkills/ArcherClown.js
/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */

 // заглушка

// список скилов Clown
const skillsClown = [{
  id: "arrowVulcan",
  level: 0,
  dependencies: [{
    id: "arrowShower",
    minLevel: 5
  }, {
    id: "musicalStrike",
    minLevel: 1
  }, {
    id: "doubleStrafe",
    minLevel: 5
  }],
  dependent: [],
  element: null,
  skillName: "Arrow Vulcan",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
Range: 12
Requirement: Arrow Shower Lv: 5, Musical Strike Lv: 1, Double Strafe Lv: 5
Description: Fires a rapid flurry of arrows at a targeted enemy, with damage increasing based on your Base Level. This skill requires a Musical Instrument Class Weapon for Minstrels or a Whip Class Weapon for Gypsies. If used after Musical Strike or Slinging Strike, halves the fixed and variable cast times and removes the after-cast delay. Consumes: 3x Arrow.
[Lv 1]: Atk 610%,
[Lv 2]: Atk 720%,
[Lv 3]: Atk 830%,
[Lv 4]: Atk 940%,
[Lv 5]: Atk 1050%,
[Lv 6]: Atk 1160%,
[Lv 7]: Atk 1270%,
[Lv 8]: Atk 1380%,
[Lv 9]: Atk 1490%,
[Lv 10]: Atk 1600%
New calculation: ATK% = (100 + (8 × Skill Lv)) × Hits.
Details: HitCount of 9; AfterCastActDelay set as ASPD + 220; CastTime: 400 + (100 × Skill Lv); Fixed Cast Time: 600; Cooldown: 1500; AmmoAmount: 1.
`,
  img: no_img_namespaceObject
}, {
  id: "moonlitWaterMill",
  level: 0,
  dependencies: [{
    id: "improveConcentration",
    minLevel: 5
  }, {
    id: "musicalLesson",
    minLevel: 7
  }],
  dependent: [],
  element: null,
  skillName: "Moonlit Water Mill",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Misc
Target: Self
Requirement: Improve Concentration Lv: 5, Musical Lesson Lv: 7
Description: The Moonlight Watermill performance can be executed by both Minstrels and Gypsies, providing inspiration to the group. However, the characteristics of this performance vary depending on the performer. Both effects share the same type, preventing simultaneous activation of both. When performed by Minstrels, it grants an Atk, whereas when executed by Gypsies, it offers an MAtk. The granted bonuses are influenced by the presence of additional Minstrels or Gypsies in the group. The more Minstrels in the group, the higher the Atk, and the same principle applies to Gypsies for the MAtk. Additionally, the users job level and the level of [Musical Lesson] or [Dancing Lesson] also contribute to increasing the bonuses provided by the performance. Requires Musical Instrument Class Weapon for Minstrels and Whip Class Weapon for Gypsies.
[Lv 1]: Atk or MAtk +6,
[Lv 2]: Atk or MAtk +12,
[Lv 3]: Atk or MAtk +18,
[Lv 4]: Atk or MAtk +24,
[Lv 5]: Atk or MAtk +30`,
  img: no_img_namespaceObject
}, {
  id: "reverberation",
  level: 0,
  dependencies: [{
    id: "dissonance",
    minLevel: 5
  }],
  dependent: [],
  element: null,
  skillName: "Reverberation",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Enemy
Range: 9
Requirement: Dissonance Lv: 5
Description: Emits a high-frequency sound wave at an enemy, causing magical damage to the target and all enemies within a 5x5 area. Skills element is determined by the arrows element.
[Lv 1]: MAtk 700%,
[Lv 2]: MAtk 900%,
[Lv 3]: MAtk 1100%,
[Lv 4]: MAtk 1300%,
[Lv 5]: MAtk 1500%
Details: AfterCastActDelay set as ASPD + 220; CastTime: 700 + (200 × Skill Lv); Fixed Cast Time: 600; Cooldown: 1500.`,
  img: no_img_namespaceObject
}, {
  id: "tarotCardOfFate",
  level: 0,
  dependencies: [{
    id: "improveConcentration",
    minLevel: 10
  }, {
    id: "dissonance",
    minLevel: 3
  }],
  dependent: [],
  element: null,
  skillName: "Tarot Card of Fate",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Misc
Target: Self
Requirement: Improve Concentration Lv: 10, Dissonance Lv: 3
Description: When using [Tarot Card of Fate], the cards are drawn one by one, and the drawn cards appear above your head. Upon using [Tarot Card of Fate] again, you select the card to be used. After that, you can choose the target for the Tarot card, whether it be yourself, an ally, or an enemy. The cooldown, cast time, and cast delay of [Tarot Card of Fate] are applied after choosing a target for the card. The effects of tarot cards are:
[The Fool]: Allies: If your current SP percentage is higher than the targets, transfer yours to the target. When used on yourself, restores 20% of maximum SP. Enemies: If your current SP percentage is higher than the targets, removes the same amount of SP from the target.
[The Magician]: Allies: Increases MATK by 20% for 15 seconds. Enemies: Decreases MATK by 20% for 15 seconds.
[The High Priestess]: Allies: Renders the target immune to the next negative status received. Enemies: Reduces the targets resistance to the next negative status.
[The Chariot]: Allies: Grants movement speed and removes movement impairment effects. Gains immunity to movement impairment for 2 seconds. Enemies: Reduces movement speed by 20% for 15 seconds.
[Strength]: Allies: Increases ATK by 20% for 15 seconds. Enemies: Decreases ATK by 20% for 15 seconds.
[The Lovers]: Allies: Combines the current HP and SP of the target with the users and divides it equally between them. Enemies: Applies the Charm status to the enemy for 10 seconds.
[Wheel of Fortune]: Allies and enemies: Randomly activates the effects of two tarot cards.
[The Hanged Man]: Allies: Inflicts Hallucination and Confusion for 10 seconds but makes the target immune to any crowd control effect* for the same duration. Enemies: Inflicts Hallucination and Confusion for 10 seconds.
[Temperance]: Allies: Increases the effectiveness of received heals by 25% for 10 seconds. Enemies: You and the enemy cannot inflict damage on each other for 5 seconds.
[The Devil]: Allies: Causes 666 damage every 3 seconds for 15 seconds and increases Atk and Matk by 10% for the same duration. Enemies: Causes fixed 666 damage every 1.5 seconds for 15 seconds and reduces Atk and Matk by 10% for the same duration.
[Death]: Allies: Resurrects a dead ally with 20% HP but enchants their armor with the corrupt property for 10 seconds. Enemies: Causes 1000 corrupt property damage and enchants their armor with the corrupt property for 10 seconds.
[The Tower]: Allies: Increases soft DEF by 500 for 10 seconds. Enemies: Reduces soft DEF by 500 for 10 seconds.
[The Star]: Allies: Reduces fixed cast time by 20% for 15 seconds. Enemies: Increases fixed cast time by 20% for 15 seconds.
[The Sun]: Allies: Increases Atk, Matk, Soft Def, Soft Mdef, Flee, and Hit by 5% for 10 seconds. Enemies: Decreases Atk, Matk, Soft Def, Soft Mdef, Flee, and Hit by 5% for 10 seconds.
[Lv 1]: Cooldown: 51 Seconds,
[Lv 2]: Cooldown: 42 Seconds,
[Lv 3]: Cooldown: 33 Seconds,
[Lv 4]: Cooldown: 24 Seconds,
[Lv 5]: Cooldown: 15 Seconds`,
  img: no_img_namespaceObject
}];

/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */
;// ./src/js/listSkills/ArcherDancer.js
/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */

 // заглушка

// список скилов Dancer
const skillsDancer = [{
  id: "dancingLesson",
  level: 0,
  dependencies: [],
  dependent: [{
    id: "moonlitWaterMill"
  }, {
    id: "cringeDance"
  }, {
    id: "encore"
  }, {
    id: "slingingStrike"
  }],
  element: null,
  skillName: "Dancing Lesson",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Passive
Type: Physical
Requirement: None
Description: Increase Atk, MAtk and Aspd with Whip Class Weapon. When [Lv 10], it increases Max SP in 6%.
[Lv 1]: Atk +2, MAtk +2, Aspd +1%,
[Lv 2]: Atk +4, MAtk +4, Aspd +2%,
[Lv 3]: Atk +6, MAtk +6, Aspd +3%,
[Lv 4]: Atk +8, MAtk +8, Aspd +4%,
[Lv 5]: Atk +10, MAtk +10, Aspd +5%,
[Lv 6]: Atk +12, MAtk +12, Aspd +6%,
[Lv 7]: Atk +14, MAtk +14, Aspd +7%,
[Lv 8]: Atk +16, MAtk +16, Aspd +8%,
[Lv 9]: Atk +18, MAtk +18, Aspd +9%,
[Lv 10]: Atk +20, MAtk +20, Aspd +10%`,
  img: no_img_namespaceObject
}, {
  id: "slingingStrike",
  level: 0,
  dependencies: [{
    id: "dancingLesson",
    minLevel: 3
  }],
  dependent: [{
    id: "arrowVulcan"
  }],
  element: null,
  skillName: "Slinging Strike",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Enemy
Range: 12
Requirement: Dancing Lesson Lv: 3
Description: Fires a powerful volley of arrows using an whip. The Arrows element determines the element of this attack. Consumes: 2x Arrow.
[Lv 1]: Atk 130% x 2 Hits,
[Lv 2]: Atk 160% x 2 Hits,
[Lv 3]: Atk 190% x 2 Hits,
[Lv 4]: Atk 220% x 2 Hits,
[Lv 5]: Atk 250% x 2 Hits
New calculation: ATK% = (50 + Crit) + (30 × Skill Lv).
Details: AfterCastActDelay set as ASPD; CastTime: 350 + (50 × Skill Lv); Fixed Cast Time: 400; AmmoAmount: 1.
`,
  img: no_img_namespaceObject
}, {
  id: "cringeDance",
  level: 0,
  dependencies: [{
    id: "dancingLesson",
    minLevel: 2
  }],
  dependent: [{
    id: "tarotCardOfFate"
  }, {
    id: "reverberation"
  }, {
    id: "bellyDance"
  }, {
    id: "dontForgetMe"
  }, {
    id: "fortunesKiss"
  }, {
    id: "humming"
  }],
  element: null,
  skillName: "Cringe Dance",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Self
Requirement: Dancing Lesson Lv: 2
Description: Performs a corny dance, dealing Neutral magic damage to all enemies in a 9x9 radius every 3 seconds. Reduces movement speed by 25% and consumes 3 SP per second while active. Can trigger auto-cast items. You can still use basic attacks and skills while active. Requires a Whip class weapon. Cannot switch weapons while active.
[Lv 1]: (Atk + MAtk) x 30% every 3 seconds,
[Lv 2]: (Atk + MAtk) x 60% every 3 seconds,
[Lv 3]: (Atk + MAtk) x 90% every 3 seconds,
[Lv 4]: (Atk + MAtk) x 120% every 3 seconds,
[Lv 5]: (Atk + MAtk) x 150% every 3 seconds
The interval between hits is now calculated based on the user’s attack speed.
New Hit/Sec calculation:
Hit/Sec = 1000 ÷ ((4000 - (20 × ASPD)) × 3).
Now the skill can trigger autocast for both physical and magical modes.
It does not disable SP regeneration, but reduces regeneration by 70% and increases the regeneration time by 30%.
`,
  img: no_img_namespaceObject
}, {
  id: "bellyDance",
  level: 0,
  dependencies: [{
    id: "cringeDance",
    minLevel: 3
  }],
  dependent: [{
    id: "drumOfBattlefield"
  }],
  element: null,
  skillName: "Belly Dance",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Misc
Target: Self
Requirement: Cringe Dance Lv: 3
Description: Performs a dance that will boost Max SP and reduce SP Cost of the user and party members around the performer. Duration of this skill is 180 seconds and is reduced by 60 seconds for each subsequent music used after it. Requires Whip Class Weapon.
[Lv 1]: MaxSP +10%, SP consumption: -6%,
[Lv 2]: MaxSP +11%, SP consumption: -7%,
[Lv 3]: MaxSP +12%, SP consumption: -8%,
[Lv 4]: MaxSP +13%, SP consumption: -9%,
[Lv 5]: MaxSP +14%, SP consumption: -10%,
[Lv 6]: MaxSP +15%, SP consumption: -11%,
[Lv 7]: MaxSP +16%, SP consumption: -12%,
[Lv 8]: MaxSP +17%, SP consumption: -13%,
[Lv 9]: MaxSP +18%, SP consumption: -14%,
[Lv 10]: MaxSP +20%, SP consumption: -15%
Additional Benefits and Adjustments: Increases MaxSP by (Skill Lv × 2)%; reduces SP Consumption by (Skill Lv × 2)%; increases SP Recovery by (Skill Lv × 2)%.
`,
  img: no_img_namespaceObject
}, {
  id: "drumOfBattlefield",
  level: 0,
  dependencies: [{
    id: "bellyDance",
    minLevel: 10
  }],
  dependent: [{
    id: "lokisWail"
  }],
  element: null,
  skillName: "Drum of Battlefield",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Misc
Target: Self
Requirement: Belly Dance Lv: 10
Description: Initiates a battle duet that temporarily increases both physical and magical attack power for you and your party members within a 25x25 area. Both users must be in the same group and adjacent to each other, and the partner must have learned the duet. Duet level matches the initiator skill level. Only one duet can be active at a time, but it can coexist with other songs or dances. Using the duet puts both partners skills on cooldown.
[Lv 1]: Atk +15, MAtk +15,
[Lv 2]: Atk +20, MAtk +20,
[Lv 3]: Atk +25, MAtk +25,
[Lv 4]: Atk +30, MAtk +30,
[Lv 5]: Atk +35, MAtk +35`,
  img: no_img_namespaceObject
}, {
  id: "lokisWail",
  level: 0,
  dependencies: [{
    id: "drumOfBattlefield",
    minLevel: 3
  }],
  dependent: [],
  element: null,
  skillName: "Loki's Wail",
  maxLevel: 1,
  inform: `Max Lv: 1
Skill Form: Active
Type: Misc
Target: Self
Requirement: Drum of Battlefield Lv: 3
Description: Initiates a frenzied duet that gives opponents within a 9x9 area a 35% chance to fail when activating their skills. Upon activation, it also has a 100% chance to inflict Chaos. Both users must be in the same group and adjacent to each other. Duet lasts for 180 seconds, and both partners can move freely and use skills within the area. If either leaves the area, the effect ends. Only one duet can be active at a time, but it can coexist with other songs or dances. Using the duet puts both partners skills on cooldown.`,
  img: no_img_namespaceObject
}, {
  id: "encore",
  level: 0,
  dependencies: [{
    id: "dancingLesson",
    minLevel: 5
  }],
  dependent: [{
    id: "medusaScream"
  }],
  element: null,
  skillName: "Encore",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Misc
Target: Self
Requirement: Dancing Lesson Lv: 5
Description: Extends the duration of all active songs, dances, and party buff duets for you and your allies by 15 seconds. Upon use, you gain a special status effect that enhances your abilities based on the number of active songs, dances, and duets. For Melody Strike and Slinging Strike, it increases skill damage by +10%. For Dissonance and Cringe Dance, it reduces the interval between attacks by 0.4 seconds. For Arrow Vulcan and Reverberation, it reduces the cooldown by 0.107 seconds. SP cost increases by 35 for each active song, dance, and duet. SP cost increases by 35 for each active song, dance, and duet.
[Lv 1]: Encore duration: 40 seconds,
[Lv 2]: Encore duration: 60 seconds,
[Lv 3]: Encore duration: 80 seconds,
[Lv 4]: Encore duration: 100 seconds,
[Lv 5]: Encore duration: 120 seconds
The functionality has been modified to improve usability.
When activated, it reduces the Cooldown of all active songs/dances by 50% and increases their duration by 50% (based on their current duration).
Synergies:
Slinging/Musical Strike: increases the final ATK% by 10% per active song/dance.
Arrow Vulcan: increases the final ATK% by 5% per active song/dance.
Reverberation: reduces SP cost and Cooldown by 5% per active song/dance.
Dissonance/Cringe Dance: reduces physical damage received by 5% per active song/dance.
`,
  img: no_img_namespaceObject
}, {
  id: "medusaScream",
  level: 0,
  dependencies: [{
    id: "encore",
    minLevel: 3
  }],
  dependent: [],
  element: null,
  skillName: "Medusa Scream",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Misc
Target: Self
Requirement: Encore Lv: 3
Description: Inflicts the Petrifying status to enemies within the casters view.
[Lv 1]: Chance: 20%,
[Lv 2]: Chance: 25%,
[Lv 3]: Chance: 30%,
[Lv 4]: Chance: 35%,
[Lv 5]: Chance: 40%`,
  img: no_img_namespaceObject
}, {
  id: "humming",
  level: 0,
  dependencies: [{
    id: "cringeDance",
    minLevel: 3
  }],
  dependent: [],
  element: null,
  skillName: "Humming",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Misc
Target: Self
Requirement: Cringe Dance Lv: 3
Description: Performs a dance that will boost Hit and Long Range Damage of all players around the performer. Duration of this skill is 180 seconds and is reduced by 60 seconds for each subsequent music used after it. Requires Whip Class Weapon.
[Lv 1]: Perfect Hit +1, Ranged Damage +2%,
[Lv 2]: Perfect Hit +2, Ranged Damage +4%,
[Lv 3]: Perfect Hit +3, Ranged Damage +6%,
[Lv 4]: Perfect Hit +4, Ranged Damage +8%,
[Lv 5]: Perfect Hit +5, Ranged Damage +10%,
[Lv 6]: Perfect Hit +6, Ranged Damage +12%,
[Lv 7]: Perfect Hit +7, Ranged Damage +14%,
[Lv 8]: Perfect Hit +8, Ranged Damage +16%,
[Lv 9]: Perfect Hit +9, Ranged Damage +18%,
[Lv 10]: Perfect Hit +10, Ranged Damage +20%
Additional Benefits and Adjustments: Perfect Hit +1 × Skill Lv; Ranged Damage: +(5 + Skill Lv)%; adds 1% × Skill Lv chance to ignore the target’s defense.
`,
  img: no_img_namespaceObject
}, {
  id: "intoTheAbyss",
  level: 0,
  dependencies: [{
    id: "humming",
    minLevel: 10
  }],
  dependent: [{
    id: "lullaby"
  }],
  element: null,
  skillName: "Into the Abyss",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Misc
Target: Self
Requirement: Humming Lv: 10
Description: Initiates an ambitious duet that grants a temporary effect, giving you and your party members within a 25x25 area a chance to negate the consumption of catalysts when using skills. Both users must be in the same group and adjacent to each other, and the partner must have learned the duet. Duet level matches the initiator skill level. Only one duet can be active at a time, but it can coexist with other songs or dances. Using the duet puts both partners skills on cooldown. You must have the skills catalyst to use it. Catalysts That Can Have Consumption Negated: Arrows, Gems, Zeny Pouch, Vials, Potions, Traps, Spider Web, Sage Points, Throwing Knives, Poison Bottle, Stones, Spirit Orbs and any type of ammunition.
[Lv 1]: Grants a 4% chance to negate catalyst consumption.
[Lv 2]: Grants a 8% chance to negate catalyst consumption.
[Lv 3]: Grants a 12% chance to negate catalyst consumption.
[Lv 4]: Grants a 16% chance to negate catalyst consumption.
[Lv 5]: Grants a 20% chance to negate catalyst consumption.`,
  img: no_img_namespaceObject
}, {
  id: "lullaby",
  level: 0,
  dependencies: [{
    id: "intoTheAbyss",
    minLevel: 3
  }],
  dependent: [],
  element: null,
  skillName: "Lullaby",
  maxLevel: 1,
  inform: `Max Lv: 1
Skill Form: Active
Type: Misc
Target: Self
Requirement: Into the Abyss Lv: 3
Description: Initiates a sleepy duet that gives opponents within a 9x9 area a 100% chance to be inflicted with Sleep every 10 seconds while they remain in the area. The Sleep effect lasts for 4 seconds. Both users must be in the same group and adjacent to each other. Duet lasts for 180 seconds, and both partners can move freely and use skills within the area. If either leaves the area, the effect ends. Only one duet can be active at a time, but it can coexist with other songs or dances. Using the duet puts both partners skills on cooldown.`,
  img: no_img_namespaceObject
}, {
  id: "fortunesKiss",
  level: 0,
  dependencies: [{
    id: "cringeDance",
    minLevel: 3
  }],
  dependent: [{
    id: "invulnerableSiegfried"
  }],
  element: null,
  skillName: "Fortune's Kiss",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Misc
Target: Self
Requirement: Cringe Dance Lv: 3
Description: Performs a dance that will boost the Crit and Critical Damage of the user and party members around the performer. Duration of this skill is 180 seconds and is reduced by 60 seconds for each subsequent music used after it. Requires Whip Class Weapon.
[Lv 1]: Crit +1, Critical Damage + 2%,
[Lv 2]: Crit +2, Critical Damage + 4%,
[Lv 3]: Crit +3, Critical Damage + 6%,
[Lv 4]: Crit +4, Critical Damage + 8%,
[Lv 5]: Crit +5, Critical Damage + 10%,
[Lv 6]: Crit +6, Critical Damage + 12%,
[Lv 7]: Crit +7, Critical Damage + 14%,
[Lv 8]: Crit +8, Critical Damage + 16%,
[Lv 9]: Crit +9, Critical Damage + 18%,
[Lv 10]: Crit +10, Critical Damage + 20%
Additional Benefits and Adjustments: Crit +1 × Skill Lv; Critical Shield +1 × Skill Lv; Critical Damage + (5 + Skill Lv)%.`,
  img: no_img_namespaceObject
}, {
  id: "invulnerableSiegfried",
  level: 0,
  dependencies: [{
    id: "fortunesKiss",
    minLevel: 10
  }],
  dependent: [{
    id: "mrKimARichMan"
  }],
  element: null,
  skillName: "Invulnerable Siegfried",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Misc
Target: Self
Requirement: Fortune's Kiss Lv: 10
Description: Initiates a comforting duet that grants temporary resistance to various negative effects and increases Fire, Water, Wind, and Earth resistances for you and party members within a 25x25 area. Both users must be in the same group and adjacent to each other, and the partner must have learned the duet. Duet level matches the initiator skill level. Only one duet can be active at a time, but it can coexist with other songs or dances. Using the duet puts both partners skills on cooldown. Negative Effects Affected: Blind, Petrification, Freezing, Stun, Curse, Sleep, Silence, Chaos,
[Lv 1]: Elemental Resistences +3%, Tolerance to negative effects +5%,
[Lv 2]: Elemental Resistences +6%, Tolerance to negative effects +10%,
[Lv 3]: Elemental Resistences +9%, Tolerance to negative effects +15%,
[Lv 4]: Elemental Resistences +12%, Tolerance to negative effects +20%,
[Lv 5]: Elemental Resistences +15%, Tolerance to negative effects +25%`,
  img: no_img_namespaceObject
}, {
  id: "mrKimARichMan",
  level: 0,
  dependencies: [{
    id: "invulnerableSiegfried",
    minLevel: 3
  }],
  dependent: [],
  element: null,
  skillName: "Mr. Kim A Rich Man",
  maxLevel: 1,
  inform: `Max Lv: 1
Skill Form: Active
Type: Misc
Target: Self
Requirement: Invulnerable Siegfried Lv: 3
Description: Initiates a greedy duet that increases Base and Job experience gain for you and players within the 9x9 area of effect who defeat monsters. Both users must be in the same group and adjacent to each other. Duet lasts for 180 seconds, and both partners can move freely and use skills within the area, but if either leaves the area, the effect ends. Only one duet can be active at a time, but it can coexist with other songs or dances. Using the duet puts both partners skills on cooldown. Increases base and class experience from defeating monsters by 40%`,
  img: no_img_namespaceObject
}, {
  id: "dontForgetMe",
  level: 0,
  dependencies: [{
    id: "cringeDance",
    minLevel: 3
  }],
  dependent: [{
    id: "theRingOfNibelungen"
  }],
  element: null,
  skillName: "Don't Forget Me",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Misc
Target: Self
Requirement: Cringe Dance Lv: 3
Description: Perform a dance that increases the movement speed of you and your party around the performer. While the effect is active, when you take damage, the attackers movement speed and attack speed are reduced. Duration of this skill is 180 seconds and is reduced by 60 seconds for each subsequent music used after it. Requires Whip Class Weapon.
[Lv 1]: Allies MS +7%, Attacker MS and ASPD -11% for 9.5 seconds,
[Lv 2]: Allies MS +9%, Attacker MS and ASPD -12% for 9 seconds,
[Lv 3]: Allies MS +11%, Attacker MS and ASPD -13% for 8.5 seconds,
[Lv 4]: Allies MS +13%, Attacker MS and ASPD -14% for 8 seconds,
[Lv 5]: Allies MS +15%, Attacker MS and ASPD -15% for 7.5 seconds,
[Lv 6]: Allies MS +17%, Attacker MS and ASPD -16% for 7 seconds,
[Lv 7]: Allies MS +19%, Attacker MS and ASPD -17% for 6.5 seconds,
[Lv 8]: Allies MS +21%, Attacker MS and ASPD -18% for 6 seconds,
[Lv 9]: Allies MS +23%, Attacker MS and ASPD -19% for 5.5 seconds,
[Lv 10]: Allies MS +25%, Attacker MS and ASPD -20% for 5 seconds
Additional Benefits and Adjustments: Increases movement speed by (5 + (Skill Lv × 2))%; reduces enemies’ movement speed by 5 + (Skill Lv × 2)% for 5 seconds (only for the summoner); True Defense +10 × Skill Lv.`,
  img: no_img_namespaceObject
}, {
  id: "theRingOfNibelungen",
  level: 0,
  dependencies: [{
    id: "dontForgetMe",
    minLevel: 10
  }],
  dependent: [{
    id: "eternalChaos"
  }],
  element: null,
  skillName: "The Ring of Nibelungen",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Misc
Target: Self
Requirement: Don't Forget Me Lv: 10
Description: Initiates a refined duet that grants a random temporary effect to you and your party members within a 25x25 area. Both users must be in the same group and adjacent to each other, and the partner must have learned the duet. Duet level matches the initiator skill level. Only one duet can be active at a time, but it can coexist with other songs or dances. Using the duet puts both partners skills on cooldown.
[Lv 1]: Attack Speed +4%, Atk +4%, MAtk +4%, Max HP +6%, Max SP +6%, All Stats +3, Hit +10, Flee +10, SP consumption -6%, HP recovery +20%, SP recovery +20%,
[Lv 2]: Attack Speed +8%, Atk +8%, MAtk +8%, Max HP +12%, Max SP +12%, All Stats +6, Hit +20, Flee +20, SP consumption -12%, HP recovery +40%, SP recovery +40%,
[Lv 3]: Attack Speed +12%, Atk +12%, MAtk +12%, Max HP +18%, Max SP +18%, All Stats +9, Hit +30, Flee +30, SP consumption -18%, HP recovery +60%, SP recovery +60%,
[Lv 4]: Attack Speed +16%, Atk +16%, MAtk +16%, Max HP +24%, Max SP +24%, All Stats +12, Hit +40, Flee +40, SP consumption -24%, HP recovery +80%, SP recovery +80%,
[Lv 5]: Attack Speed +20%, Atk +20%, MAtk +20%, Max HP +30%, Max SP +30%, All Stats +15, Hit +50, Flee +50, SP consumption -30%, HP recovery +100%, SP recovery +100%`,
  img: no_img_namespaceObject
}, {
  id: "eternalChaos",
  level: 0,
  dependencies: [{
    id: "theRingOfNibelungen",
    minLevel: 3
  }],
  dependent: [],
  element: null,
  skillName: "Eternal Chaos",
  maxLevel: 1,
  inform: `Max Lv: 1
Skill Form: Active
Type: Misc
Target: Self
Requirement: The Ring of Nibelungen Lv: 3
Description: Initiates a discordant duet that randomly reduces the physical and magical defenses of opponents within a 9x9 area. Both users must be in the same group and adjacent to each other. Duet lasts for 180 seconds, and both partners can move freely and use skills within the area. If either leaves the area, the effect ends. Only one duet can be active at a time, but it can coexist with other songs or dances. Using the duet puts both partners skills on cooldown. Reduces physical and magical defenses by a random percentage between 10% and 50%.`,
  img: no_img_namespaceObject
}];

/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */
;// ./src/js/listSkills/ArcherGypsy.js
/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */

 // заглушка

// список скилов Gypsy
const skillsGypsy = [{
  id: "arrowVulcan",
  level: 0,
  dependencies: [{
    id: "arrowShower",
    minLevel: 5
  }, {
    id: "slingingStrike",
    minLevel: 1
  }, {
    id: "doubleStrafe",
    minLevel: 5
  }],
  dependent: [],
  element: null,
  skillName: "Arrow Vulcan",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
Range: 12
Requirement: Arrow Shower Lv: 5, Slinging Strike Lv: 1, Double Strafe Lv: 5
Description: Fires a rapid flurry of arrows at a targeted enemy, with damage increasing based on your Base Level. This skill requires a Musical Instrument Class Weapon for Minstrels or a Whip Class Weapon for Gypsies. If used after Musical Strike or Slinging Strike, halves the fixed and variable cast times and removes the after-cast delay. Consumes: 3x Arrow.
[Lv 1]: Atk 610%,
[Lv 2]: Atk 720%,
[Lv 3]: Atk 830%,
[Lv 4]: Atk 940%,
[Lv 5]: Atk 1050%,
[Lv 6]: Atk 1160%,
[Lv 7]: Atk 1270%,
[Lv 8]: Atk 1380%,
[Lv 9]: Atk 1490%,
[Lv 10]: Atk 1600%
using Arrow Vulcan after Slinging/Musical Strike now adds 3 hits to the skill.
New calculation: ATK% = (100 + (8 × Skill Lv)) × Hits.
Details: HitCount of 9; AfterCastActDelay set as ASPD + 220; CastTime: 400 + (100 × Skill Lv); Fixed Cast Time: 600; Cooldown: 1500; AmmoAmount: 1.
`,
  img: no_img_namespaceObject
}, {
  id: "moonlitWaterMill",
  level: 0,
  dependencies: [{
    id: "improveConcentration",
    minLevel: 5
  }, {
    id: "dancingLesson",
    minLevel: 7
  }],
  dependent: [],
  element: null,
  skillName: "Moonlit Water Mill",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Misc
Target: Self
Requirement: Improve Concentration Lv: 5, Dancing Lesson Lv: 7
Description: The Moonlight Watermill performance can be executed by both Minstrels and Gypsies, providing inspiration to the group. However, the characteristics of this performance vary depending on the performer. Both effects share the same type, preventing simultaneous activation of both. When performed by Minstrels, it grants an Atk, whereas when executed by Gypsies, it offers an MAtk. The granted bonuses are influenced by the presence of additional Minstrels or Gypsies in the group. The more Minstrels in the group, the higher the Atk, and the same principle applies to Gypsies for the MAtk. Additionally, the users job level and the level of [Musical Lesson] or [Dancing Lesson] also contribute to increasing the bonuses provided by the performance. Requires Musical Instrument Class Weapon for Minstrels and Whip Class Weapon for Gypsies.
[Lv 1]: Atk or MAtk +6,
[Lv 2]: Atk or MAtk +12,
[Lv 3]: Atk or MAtk +18,
[Lv 4]: Atk or MAtk +24,
[Lv 5]: Atk or MAtk +30`,
  img: no_img_namespaceObject
}, {
  id: "reverberation",
  level: 0,
  dependencies: [{
    id: "cringeDance",
    minLevel: 5
  }],
  dependent: [],
  element: null,
  skillName: "Reverberation",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Enemy
Range: 9
Requirement: Cringe Dance Lv: 5
Description: Emits a high-frequency sound wave at an enemy, causing magical damage to the target and all enemies within a 5x5 area. Skills element is determined by the arrows element.
[Lv 1]: MAtk 700%,
[Lv 2]: MAtk 900%,
[Lv 3]: MAtk 1100%,
[Lv 4]: MAtk 1300%,
[Lv 5]: MAtk 1500%
Details: AfterCastActDelay set as ASPD + 220; CastTime: 700 + (200 × Skill Lv); Fixed Cast Time: 600; Cooldown: 1500.
`,
  img: no_img_namespaceObject
}, {
  id: "tarotCardOfFate",
  level: 0,
  dependencies: [{
    id: "improveConcentration",
    minLevel: 10
  }, {
    id: "cringeDance",
    minLevel: 3
  }],
  dependent: [],
  element: null,
  skillName: "Tarot Card of Fate",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Misc
Target: Self
Requirement: Improve Concentration Lv: 10, Cringe Dance Lv: 3
Description: When using [Tarot Card of Fate], the cards are drawn one by one, and the drawn cards appear above your head. Upon using [Tarot Card of Fate] again, you select the card to be used. After that, you can choose the target for the Tarot card, whether it be yourself, an ally, or an enemy. The cooldown, cast time, and cast delay of [Tarot Card of Fate] are applied after choosing a target for the card. The effects of tarot cards are:
[The Fool]: Allies: If your current SP percentage is higher than the targets, transfer yours to the target. When used on yourself, restores 20% of maximum SP. Enemies: If your current SP percentage is higher than the targets, removes the same amount of SP from the target.
[The Magician]: Allies: Increases MATK by 20% for 15 seconds. Enemies: Decreases MATK by 20% for 15 seconds.
[The High Priestess]: Allies: Renders the target immune to the next negative status received. Enemies: Reduces the targets resistance to the next negative status.
[The Chariot]: Allies: Grants movement speed and removes movement impairment effects. Gains immunity to movement impairment for 2 seconds. Enemies: Reduces movement speed by 20% for 15 seconds.
[Strength]: Allies: Increases ATK by 20% for 15 seconds. Enemies: Decreases ATK by 20% for 15 seconds.
[The Lovers]: Allies: Combines the current HP and SP of the target with the users and divides it equally between them. Enemies: Applies the Charm status to the enemy for 10 seconds.
[Wheel of Fortune]: Allies and enemies: Randomly activates the effects of two tarot cards.
[The Hanged Man]: Allies: Inflicts Hallucination and Confusion for 10 seconds but makes the target immune to any crowd control effect* for the same duration. Enemies: Inflicts Hallucination and Confusion for 10 seconds.
[Temperance]: Allies: Increases the effectiveness of received heals by 25% for 10 seconds. Enemies: You and the enemy cannot inflict damage on each other for 5 seconds.
[The Devil]: Allies: Causes 666 damage every 3 seconds for 15 seconds and increases Atk and Matk by 10% for the same duration. Enemies: Causes fixed 666 damage every 1.5 seconds for 15 seconds and reduces Atk and Matk by 10% for the same duration.
[Death]: Allies: Resurrects a dead ally with 20% HP but enchants their armor with the corrupt property for 10 seconds. Enemies: Causes 1000 corrupt property damage and enchants their armor with the corrupt property for 10 seconds.
[The Tower]: Allies: Increases soft DEF by 500 for 10 seconds. Enemies: Reduces soft DEF by 500 for 10 seconds.
[The Star]: Allies: Reduces fixed cast time by 20% for 15 seconds. Enemies: Increases fixed cast time by 20% for 15 seconds.
[The Sun]: Allies: Increases Atk, Matk, Soft Def, Soft Mdef, Flee, and Hit by 5% for 10 seconds. Enemies: Decreases Atk, Matk, Soft Def, Soft Mdef, Flee, and Hit by 5% for 10 seconds.
[Lv 1]: Cooldown: 51 Seconds,
[Lv 2]: Cooldown: 42 Seconds,
[Lv 3]: Cooldown: 33 Seconds,
[Lv 4]: Cooldown: 24 Seconds,
[Lv 5]: Cooldown: 15 Seconds`,
  img: no_img_namespaceObject
}];

/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */
;// ./src/index.js
/*  author Chalykh Maksim 
  # data 25.01.2025 
  # email: chalyh.maksim.88@mail.ru */



// Mage





// Merchant





// Acolyte





// Swordman





// Thief





// Archer








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

/***/ }),

/***/ 9140:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* eslint-env browser */
/*
  eslint-disable
  no-console,
  func-names
*/

/** @typedef {any} TODO */

var normalizeUrl = __webpack_require__(9918);
var srcByModuleId = Object.create(null);
var noDocument = typeof document === "undefined";
var forEach = Array.prototype.forEach;

/**
 * @param {function} fn
 * @param {number} time
 * @returns {(function(): void)|*}
 */
function debounce(fn, time) {
  var timeout = 0;
  return function () {
    // @ts-ignore
    var self = this;
    // eslint-disable-next-line prefer-rest-params
    var args = arguments;
    var functionCall = function functionCall() {
      return fn.apply(self, args);
    };
    clearTimeout(timeout);

    // @ts-ignore
    timeout = setTimeout(functionCall, time);
  };
}
function noop() {}

/**
 * @param {TODO} moduleId
 * @returns {TODO}
 */
function getCurrentScriptUrl(moduleId) {
  var src = srcByModuleId[moduleId];
  if (!src) {
    if (document.currentScript) {
      src = ( /** @type {HTMLScriptElement} */document.currentScript).src;
    } else {
      var scripts = document.getElementsByTagName("script");
      var lastScriptTag = scripts[scripts.length - 1];
      if (lastScriptTag) {
        src = lastScriptTag.src;
      }
    }
    srcByModuleId[moduleId] = src;
  }

  /**
   * @param {string} fileMap
   * @returns {null | string[]}
   */
  return function (fileMap) {
    if (!src) {
      return null;
    }
    var splitResult = src.split(/([^\\/]+)\.js$/);
    var filename = splitResult && splitResult[1];
    if (!filename) {
      return [src.replace(".js", ".css")];
    }
    if (!fileMap) {
      return [src.replace(".js", ".css")];
    }
    return fileMap.split(",").map(function (mapRule) {
      var reg = new RegExp("".concat(filename, "\\.js$"), "g");
      return normalizeUrl(src.replace(reg, "".concat(mapRule.replace(/{fileName}/g, filename), ".css")));
    });
  };
}

/**
 * @param {TODO} el
 * @param {string} [url]
 */
function updateCss(el, url) {
  if (!url) {
    if (!el.href) {
      return;
    }

    // eslint-disable-next-line
    url = el.href.split("?")[0];
  }
  if (!isUrlRequest( /** @type {string} */url)) {
    return;
  }
  if (el.isLoaded === false) {
    // We seem to be about to replace a css link that hasn't loaded yet.
    // We're probably changing the same file more than once.
    return;
  }
  if (!url || !(url.indexOf(".css") > -1)) {
    return;
  }

  // eslint-disable-next-line no-param-reassign
  el.visited = true;
  var newEl = el.cloneNode();
  newEl.isLoaded = false;
  newEl.addEventListener("load", function () {
    if (newEl.isLoaded) {
      return;
    }
    newEl.isLoaded = true;
    el.parentNode.removeChild(el);
  });
  newEl.addEventListener("error", function () {
    if (newEl.isLoaded) {
      return;
    }
    newEl.isLoaded = true;
    el.parentNode.removeChild(el);
  });
  newEl.href = "".concat(url, "?").concat(Date.now());
  if (el.nextSibling) {
    el.parentNode.insertBefore(newEl, el.nextSibling);
  } else {
    el.parentNode.appendChild(newEl);
  }
}

/**
 * @param {string} href
 * @param {TODO} src
 * @returns {TODO}
 */
function getReloadUrl(href, src) {
  var ret;

  // eslint-disable-next-line no-param-reassign
  href = normalizeUrl(href);
  src.some(
  /**
   * @param {string} url
   */
  // eslint-disable-next-line array-callback-return
  function (url) {
    if (href.indexOf(src) > -1) {
      ret = url;
    }
  });
  return ret;
}

/**
 * @param {string} [src]
 * @returns {boolean}
 */
function reloadStyle(src) {
  if (!src) {
    return false;
  }
  var elements = document.querySelectorAll("link");
  var loaded = false;
  forEach.call(elements, function (el) {
    if (!el.href) {
      return;
    }
    var url = getReloadUrl(el.href, src);
    if (!isUrlRequest(url)) {
      return;
    }
    if (el.visited === true) {
      return;
    }
    if (url) {
      updateCss(el, url);
      loaded = true;
    }
  });
  return loaded;
}
function reloadAll() {
  var elements = document.querySelectorAll("link");
  forEach.call(elements, function (el) {
    if (el.visited === true) {
      return;
    }
    updateCss(el);
  });
}

/**
 * @param {string} url
 * @returns {boolean}
 */
function isUrlRequest(url) {
  // An URL is not an request if

  // It is not http or https
  if (!/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(url)) {
    return false;
  }
  return true;
}

/**
 * @param {TODO} moduleId
 * @param {TODO} options
 * @returns {TODO}
 */
module.exports = function (moduleId, options) {
  if (noDocument) {
    console.log("no window.document found, will not HMR CSS");
    return noop;
  }
  var getScriptSrc = getCurrentScriptUrl(moduleId);
  function update() {
    var src = getScriptSrc(options.filename);
    var reloaded = reloadStyle(src);
    if (options.locals) {
      console.log("[HMR] Detected local css modules. Reload all css");
      reloadAll();
      return;
    }
    if (reloaded) {
      console.log("[HMR] css reload %s", src.join(" "));
    } else {
      console.log("[HMR] Reload all css");
      reloadAll();
    }
  }
  return debounce(update, 50);
};

/***/ }),

/***/ 9918:
/***/ ((module) => {



/* eslint-disable */

/**
 * @param {string[]} pathComponents
 * @returns {string}
 */
function normalizeUrl(pathComponents) {
  return pathComponents.reduce(function (accumulator, item) {
    switch (item) {
      case "..":
        accumulator.pop();
        break;
      case ".":
        break;
      default:
        accumulator.push(item);
    }
    return accumulator;
  }, /** @type {string[]} */[]).join("/");
}

/**
 * @param {string} urlString
 * @returns {string}
 */
module.exports = function (urlString) {
  urlString = urlString.trim();
  if (/^data:/i.test(urlString)) {
    return urlString;
  }
  var protocol = urlString.indexOf("//") !== -1 ? urlString.split("//")[0] + "//" : "";
  var components = urlString.replace(new RegExp(protocol, "i"), "").split("/");
  var host = components[0].toLowerCase().replace(/\.$/, "");
  components[0] = "";
  var path = normalizeUrl(components);
  return protocol + host + path;
};

/***/ }),

/***/ 8588:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

// extracted by mini-css-extract-plugin

    if(true) {
      (function() {
        var localsJsonString = undefined;
        // 1741533687094
        var cssReload = __webpack_require__(9140)(module.id, {});
        // only invalidate when locals change
        if (
          module.hot.data &&
          module.hot.data.value &&
          module.hot.data.value !== localsJsonString
        ) {
          module.hot.invalidate();
        } else {
          module.hot.accept();
        }
        module.hot.dispose(function(data) {
          data.value = localsJsonString;
          cssReload();
        });
      })();
    }
  

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("d9d10dc3a9e006c925df")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "skilltreemoy:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId, fetchPriority) {
/******/ 				return trackBlockingPromise(require.e(chunkId, fetchPriority));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				// inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results).then(function () {});
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							}, [])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								}
/******/ 								return setStatus("ready").then(function () {
/******/ 									return updatedModules;
/******/ 								});
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		if (typeof document === "undefined") return;
/******/ 		var createStylesheet = (chunkId, fullhref, oldTag, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			if (__webpack_require__.nc) {
/******/ 				linkTag.nonce = __webpack_require__.nc;
/******/ 			}
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && event.type;
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + errorType + ": " + realHref + ")");
/******/ 					err.name = "ChunkLoadError";
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					if (linkTag.parentNode) linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 		
/******/ 			if (oldTag) {
/******/ 				oldTag.parentNode.insertBefore(linkTag, oldTag.nextSibling);
/******/ 			} else {
/******/ 				document.head.appendChild(linkTag);
/******/ 			}
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, null, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// no chunk loading
/******/ 		
/******/ 		var oldTags = [];
/******/ 		var newTags = [];
/******/ 		var applyHandler = (options) => {
/******/ 			return { dispose: () => {
/******/ 				for(var i = 0; i < oldTags.length; i++) {
/******/ 					var oldTag = oldTags[i];
/******/ 					if(oldTag.parentNode) oldTag.parentNode.removeChild(oldTag);
/******/ 				}
/******/ 				oldTags.length = 0;
/******/ 			}, apply: () => {
/******/ 				for(var i = 0; i < newTags.length; i++) newTags[i].rel = "stylesheet";
/******/ 				newTags.length = 0;
/******/ 			} };
/******/ 		}
/******/ 		__webpack_require__.hmrC.miniCss = (chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList) => {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			chunkIds.forEach((chunkId) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var oldTag = findStylesheet(href, fullhref);
/******/ 				if(!oldTag) return;
/******/ 				promises.push(new Promise((resolve, reject) => {
/******/ 					var tag = createStylesheet(chunkId, fullhref, oldTag, () => {
/******/ 						tag.as = "style";
/******/ 						tag.rel = "preload";
/******/ 						resolve();
/******/ 					}, reject);
/******/ 					oldTags.push(oldTag);
/******/ 					newTags.push(tag);
/******/ 				}));
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			792: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdateskilltreemoy"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result = newModuleFactory
/******/ 						? getAffectedModuleEffects(moduleId)
/******/ 						: {
/******/ 								type: "disposed",
/******/ 								moduleId: moduleId
/******/ 							};
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err1) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err1,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err1);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__(3776);
/******/ 	
/******/ })()
;