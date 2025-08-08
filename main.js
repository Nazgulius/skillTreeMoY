/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 3682:
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
Element: Fire
After Cast Delay: 1.4s
Range: 9
Requirement: None
Description: Deals M.DMG to the target, scaling with Base Level when manually cast. VCT and FCT scale with skill level.
[Lv 1]: 1 Hit, VCT: 0.50s, FCT: 0.30s SP Cost: 12,
[Lv 2]: 2 Hits, VCT: 0.65s, FCT: 0.35s SP Cost: 14,
[Lv 3]: 3 Hits, VCT: 0.80s, FCT: 0.40s SP Cost: 16,
[Lv 4]: 4 Hits, VCT: 0.95s, FCT: 0.45s SP Cost: 18,
[Lv 5]: 5 Hits, VCT: 1.25s, FCT: 0.55s SP Cost: 20,
[Lv 6]: 6 Hits, VCT: 1.55s, FCT: 0.65s SP Cost: 22,
[Lv 7]: 7 Hits, VCT: 1.85s, FCT: 0.75s SP Cost: 24,
[Lv 8]: 8 Hits, VCT: 2.30s, FCT: 0.90s SP Cost: 26,
[Lv 9]: 9 Hits, VCT: 2.75s, FCT: 1.05s SP Cost: 28,
[Lv 10]: 10 Hits, VCT: 3.20s, FCT: 1.20s SP Cost: 30
Formula: MATK (%): (100 + Manually Cast Bonus) x Hits
Manually Cast Bonus: (100 x Base Lv^2) / 10000`,
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
Element: Fire
Variable Cast Delay: 1.2s
After Cast Delay: 0.5s
Cooldown: 1s
Range: 9
Hit: 1
SP Cost: 25
Requirement: Fire Bolt Lv: 4
Description: Deals M.DMG to enemies within a 7x7 AoE around the target. Enemies on the edge take half damage.
Consumes nearby Fire Wall cells or the Volcano cell beneath the user to launch up to 9 additional Fire Balls at the same target. The damage from additional Fire Balls is split across all enemies hit.
[Lv 1]: MATK 120%,
[Lv 2]: MATK 140%,
[Lv 3]: MATK 160%,
[Lv 4]: MATK 180%,
[Lv 5]: MATK 200%,
[Lv 6]: MATK 220%,
[Lv 7]: MATK 240%,
[Lv 8]: MATK 260%,
[Lv 9]: MATK 280%,
[Lv 10]: MATK 300%
Formula: MATK (%): 100 + (Skill Lv x 20) `,
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
Element: Fire
Cooldown: 0.20s 
Range: 9
SP Cost: 20
Requirement: Fire Ball Lv: 5
Description: Creates a 3x1 AoE wall at the targeted location, dealing M.DMG and Knocking enemies back 2 cells until it expires or its hit limit is reached.
Cannot knock Undead and Corrupt enemies. Older instances are removed to create new ones when reaching the instance limit.
[Lv. 1]: VCT: 2.00s. Max Instances: 1 Hits: 3. Duration: 55
[Lv. 2]: VCT: 1.80s. Max Instances: 1 Hits: 4. Duration: 55
[Lv. 3]: VCT: 1.60s. Max Instances: 1 Hits: 5. Duration: 5s
[Lv. 4]: VCT: 1.40s. Max Instances: 2 Hits: 6. Duration: 10s
[Lv. 5]: VCT: 1.20s. Max Instances: 2 Hits: 7. Duration: 10s
[Lv. 6]: VCT: 1.10s. Max Instances: 2 Hits: 8. Duration: 10s
[Lv. 7]: VCT: 1.00s. Max Instances: 3 Hits: 9. Duration: 15s
[Lv. 8]: VCT: 0.90s. Max Instances: 3 Hits: 10. Duration: 15s
[Lv. 9]: VCT: 0.80s. Max Instances: 3 Hits: 11. Duration: 15s
[Lv.10]: VCT: 0.70s. Max Instances: 4 Hits: 12. Duration: 20s
Formula: MATK (%): 50 `,
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
Element: Water
After Cast Delay: 1.40s 
Range: 9
Requirement: None
Description: Deals M.DMG to the target, scaling with Base Level when manually cast.
VCT and FCT scale with skill level.
[Lv. 1]: VCT: 0.50s. FCT: 0.30s Hits: 1. SP Cost: 12
[Lv. 2]: VCT: 0.65s. FCT: 0.35s Hits: 2. SP Cost: 14
[Lv. 3]: VCT: 0.80s. FCT: 0.40s Hits: 3. SP Cost: 16
[Lv. 4]: VCT: 0.95s. FCT: 0.45s Hits: 4. SP Cost: 18
[Lv. 5]: VCT: 1.25s. FCT: 0.55s Hits: 5. SP Cost: 20
[Lv. 6]: VCT: 1.55s. FCT: 0.65s Hits: 6. SP Cost: 22
[Lv. 7]: VCT: 1.85s. FCT: 0.75s Hits: 7. SP Cost: 24
[Lv. 8]: VCT: 2.30s. FCT: 0.90s Hits: 8. SP Cost: 26
[Lv. 9]: VCT: 2.75s. FCT: 1.05s Hits: 9. SP Cost: 28
[Lv.10]: VCT: 3.20s. FCT: 1.20s Hits: 10. SP Cost: 30
Formula: MATK (%) (100+ Manually Cast Bonus) x Hits 
Manually Cast Bonus: (100 x Base Lv^2) / 10000`,
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
Element: Water
Variable Cast Time: 1.20s 
Cooldown: 0.30s
Range: 9
Requirement: Cold Bolt Lv: 4
Description: Deals M.DMG to the target. Has a chance to inflict Freezing for 3s. Inflicts Freeze on the target once the Freezing effect ends.
If the target is already frozen, the skill fails but still consumes SP.
[Lv. 1]: MATK 110%, Chance: 38% Freeze Duration: 3s
[Lv. 2]: MATK 120%, Chance: 41% Freeze Duration: 6s
[Lv. 3]: MATK 130%, Chance: 44% Freeze Duration: 9s
[Lv. 4]: MATK 140%, Chance: 47% Freeze Duration: 12s
[Lv. 5]: MATK 150%, Chance: 50% Freeze Duration: 15s
[Lv. 6]: MATK 160%, Chance: 53% Freeze Duration: 18s
[Lv. 7]: MATK 170%, Chance: 56% Freeze Duration: 21s
[Lv. 8]: MATK 180%, Chance: 59% Freeze Duration: 24s
[Lv. 9]: MATK 190%, Chance: 62% Freeze Duration: 27s
[Lv.10]: MATK 200%, Chance: 65% Freeze Duration: 30s
Formula: MATK (%); 100 + (Skill Lv x 10) `,
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
Type: Supportive
Target: Ground
Cooldown: 0.20s 
Range: 9
SP Cost: 20
Requirement: Frost Diver Lv: 5
Description: Creates a 5x1 AoE wall at the targeted location, blocking the path until its durability runs out or it expires.
The durability decreases by 50 every second and can receive DMG.
Older instances are removed to create new ones when reaching the instance limit.
[Lv. 1]: VCT: 2.00s. Max Instances: 1 Durability: 400. Duration: 5s
[Lv. 2]: VCT: 1.80s. Max Instances: 1 Durability: 600. Duration: 5s
[Lv. 3]: VCT: 1.60s. Max Instances: 1 Durability: 800. Duration: 5s
[Lv. 4]: VCT: 1.40s. Max Instances: 2 Durability: 1000. Duration: 10s
[Lv. 5]: VCT: 1.20s. Max Instances: 2 Durability: 1200. Duration: 10s
[Lv. 6]: VCT: 1.10s. Max Instances: 2 Durability: 1400. Duration: 10s
[Lv. 7]: VCT: 1.00s. Max Instances: 3 Durability: 1600. Duration: 15s
[Lv. 8]: VCT: 0.90s. Max Instances: 3 Durability: 1800. Duration: 15s
[Lv. 9]: VCT: 0.80s. Max Instances: 3 Durability: 2000. Duration: 15s 
[Lv.10]: VCT: 0.70s. Max Instances: 4 Durability: 2200. Duration: 20s
Durability: 200 + (Skill Lv x 200) `,
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
Element: Wind
After Cast Delay: 1.40s
Range: 9
Requirement: None
Description: Deals M.DMG to the target, scaling with Base Level when manually cast.
VCT and FCT scale with skill level.
[Lv. 1]: VCT: 0.50s. FCT: 0.30s Hits: 1. SP Cost: 12
[Lv. 2]: VCT: 0.65s. FCT: 0.35s Hits: 2. SP Cost: 14
[Lv. 3]: VCT: 0.80s. FCT: 0.40s Hits: 3. SP Cost: 16
[Lv. 4]: VCT: 0.95s. FCT: 0.45s Hits: 4. SP Cost: 18
[Lv. 5]: VCT: 1.25s. FCT: 0.55s Hits: 5. SP Cost: 20
[Lv. 6]: VCT: 1.55s. FCT: 0.65s Hits: 6. SP Cost: 22
[Lv. 7]: VCT: 1.85s. FCT: 0.75s Hits: 7. SP Cost: 24
[Lv. 8]: VCT: 2.30s. FCT: 0.90s Hits: 8. SP Cost: 26
[Lv. 9]: VCT: 2.75s. FCT: 1.05s Hits: 9. SP Cost: 28
[Lv.10]: VCT: 3.20s. FCT: 1.20s Hits: 10. SP Cost: 30
Formula: MATK (%); (100 + Manually Cast Bonus) x Hits 
Manually Cast Bonus: (100 x Base Lv^2) = 10000 `,
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
Eelement: Wind
Variable Cast Time: 1.20s
After Cast Delay: 0.50s 
Cooldown: 1s
Range: 9 
Hits: 3
SP Cost: 25
Requirement: Lightning Bolt Lv: 4
Description: Deals M.DMG to enemies within a 5x5 AoE around the targeted location. Consumes the Whirlwind cell beneath the user to launch up to 9 additional Thunder Storm at the same location.
The damage from additional Thunder Storm is split across all enemies hit.
[Lv. 1]: MATK 120%
[Lv. 2]: MATK 140%
[Lv. 3]: MATK 160%
[Lv. 4]: MATK 180%
[Lv. 5]: MATK 200%
[Lv. 6]: MATK 220%
[Lv. 7]: MATK 240%
[Lv. 8]: MATK 260% 
[Lv. 9]: MATK 280% 
[Lv.10]: MATK 300%
Formula: MATK (%); 100 + (Skill Lv x 20) `,
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
Element: Earth
After Cast Delay: 1.40s
Range: 9
Requirement: None
Description: Deals M.DMG to the target, scaling with Base Level when manually cast. VCT and FCT scale with skill level.
[Lv. 1]: VCT: 0.50s. FCT: 0.30s Hits: 1. SP Cost: 12
[Lv. 2]: VCT: 0.65s. FCT: 0.35s Hits: 2. SP Cost: 14
[Lv. 3]: VCT: 0.80s. FCT: 0.40s Hits: 3. SP Cost: 16
[Lv. 4]: VCT: 0.95s. FCT: 0.45s Hits: 4. SP Cost: 18
[Lv. 5]: VCT: 1.25s. FCT: 0.55s Hits: 5. SP Cost: 20
[Lv. 6]: VCT: 1.55s. FCT: 0.65s Hits: 6. SP Cost: 22
[Lv. 7]: VCT: 1.85s. FCT: 0.75s Hits: 7. SP Cost: 24
[Lv. 8]: VCT: 2.30s. FCT: 0.90s Hits: 8. SP Cost: 26
[Lv. 9]: VCT: 2.75s. FCT: 1.05s Hits: 9. SP Cost: 28
[Lv.10]: VCT: 3.20s. FCT: 1.20s Hits: 10. SP Cost: 30
Formula: MATK (%); (100 + Manually Cast Bonus) x Hits 
Manually Cast Bonus: (100 x Base Lv^2) = 10000 `,
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
Variable Cast Time: 1s Cooldown: 0.50s 
Range: 2
Requirement: Earth Spike Lv: 4
Variable Cast Time: 1s 
Cooldown: 0.50s 
Range: 2
Description: Attempts to inflict Petrifying to the target for 3s. Inflicts Petrify on the target for 17s once the Petrifying effect ends.
If the target is already petrifying or petrified, the skill fails but still consumes SP. When cast from skill level 5 or higher, consumes the Catalyst in a successful attempt only.
Catalyst: 1x Red Gemstone
[Lv. 1]: Petrifying Chance: 24%, SP Cost: 25 
[Lv. 2]: Petrifying Chance: 28%, SP Cost: 24 
[Lv. 3]: Petrifying Chance: 32%, SP Cost: 23 
[Lv. 4]: Petrifying Chance: 36%, SP Cost: 22 
[Lv. 5]: Petrifying Chance: 40%, SP Cost: 21 
[Lv. 6]: Petrifying Chance: 44%, SP Cost: 20 
[Lv. 7]: Petrifying Chance: 48%, SP Cost: 19 
[Lv. 8]: Petrifying Chance: 52%, SP Cost: 18 
[Lv. 9]: Petrifying Chance: 56%, SP Cost: 17 
[Lv.10]: Petrifying Chance: 60%, SP Cost: 16`,
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
Element: Ghost
After Cast Delay: 1.40s
Range: 9
Requirement: None
Description: Deals M.DMG to the target, scaling with Base Level when manually cast. VCT and FCT scale with skill level.
[Lv. 1]: MATK 100%, VCT: 0.50s. FCT: 0.30s Hits: 1. SP Cost: 12
[Lv. 2]: MATK 200%, VCT: 0.65s. FCT: 0.35s Hits: 1. SP Cost: 14
[Lv. 3]: MATK 300%, VCT: 0.80s. FCT: 0.40s Hits: 2. SP Cost: 16
[Lv. 4]: MATK 400%, VCT: 0.95s. FCT: 0.45s Hits: 2. SP Cost: 18
[Lv. 5]: MATK 500%, VCT: 1.25s. FCT: 0.55s Hits: 3. SP Cost: 20
[Lv. 6]: MATK 600%, VCT: 1.55s. FCT: 0.65s Hits: 3. SP Cost: 22
[Lv. 7]: MATK 700%, VCT: 1.85s. FCT: 0.75s Hits: 4. SP Cost: 24
[Lv. 8]: MATK 800%, VCT: 2.30s. FCT: 0.90s Hits: 4. SP Cost: 26
[Lv. 9]: MATK 900%, VCT: 2.75s. FCT: 1.05s Hits: 5. SP Cost: 28
[Lv.10]: MATK 1000%, VCT: 3.20s. FCT: 1.20s Hits: 5. SP Cost: 30
Formula: MATK (%); (Skill Lv x 100) + Manually Cast Bonus 
Manually Cast Bonus: ((Skill Lv x 100) x Base Lv^2) = 10000 `,
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
Element: Ghost
Variable Cast Time: 1.20s
After Cast Delay: 0.50s 
Cooldown: 1s
Range: 9
Hits: 1
Requirement: Requirement: Soul Strike Lv: 4
Description: Deals M.DMG to enemies within a 5x5 AoE around the target, increased against Undead and Corrupt enemies.
[Lv. 1]: MATK 120%, SP Cost: 9 
[Lv. 2]: MATK 140%, SP Cost: 9
[Lv. 3]: MATK 160%, SP Cost: 9 
[Lv. 4]: MATK 180%, SP Cost: 12 
[Lv. 5]: MATK 200%, SP Cost: 12
[Lv. 6]: MATK 220%, SP Cost: 12 
[Lv. 7]: MATK 240%, SP Cost: 15 
[Lv. 8]: MATK 260%, SP Cost: 15 
[Lv. 9]: MATK 280%, SP Cost: 15 
[Lv.10]: MATK 300%, SP Cost: 18
Formula: MATK (%); 100+ (Skill Lv x 20) + Undead/Corrupt Bonus 
Undead/Corrupt Bonus: Skill Lv x 10 `,
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
After Cast Delay: 0.50s 
Cooldown: 0.50s
Max Instances: 4
Range: 9
Requirement: Napalm Beat Lv: 5, Soul Strike Lv: 7
Description: Creates a pillar at the targeted location, blocking all melee P.DMG until its durability runs out or it reaches the hit limit. The blocked damage is transferred to the pillar, reducing its durability.
The durability scales with INT, Max SP and Base Level.
Older instances are removed to create new ones when reaching the instance limit.
VCT and FCT scale with skill level.
Catalyst: 1x Blue Gemstone
[Lv. 1]: VCT: 3.20s. FCT: 0.80s. Hits: 2 Durability: 300. Duration: 5s. SP Cost: 30 
[Lv. 2]: VCT: 2.88s. FCT: 0.72s. Hits: 3 Durability: 600. Duration: 10s. SP Cost: 30 
[Lv. 3]: VCT: 2.56s. FCT: 0.64s. Hits: 4 Durability: 900. Duration: 15s. SP Cost: 30 
[Lv. 4]: VCT: 2.24s. FCT: 0.56s. Hits: 5 Durability: 1200. Duration: 20s. SP Cost: 35 
[Lv. 5]: VCT: 1.92s. FCT: 0.48s. Hits: 6 Durability: 1500. Duration: 25s. SP Cost: 35 
[Lv. 6]: VCT: 1.60s. FCT: 0.40s. Hits: 7 Durability: 1800. Duration: 30s. SP Cost: 35 
[Lv. 7]: VCT: 1.28s. FCT: 0.32s. Hits: 8 Durability: 2100. Duration: 35s. SP Cost: 40 
[Lv. 8]: VCT: 0.96s. FCT: 0.24s. Hits: 9 Durability: 2400. Duration: 40s. SP Cost: 40
[Lv. 9]: VCT: 0.64s. FCT: 0.16s. Hits: 10 Durability: 2700. Duration: 45s. SP Cost: 40 
[Lv.10]: VCT: 0.32s. FCT: 0.08s. Hits: 11 Durability: 3000. Duration: 50s. SP Cost: 40
Durability: (Skill Lv x 300) + (65 x (INT + Base Lv)) + MaxSP `,
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
Description: Boosts SP Recovery and increases SP potion healing.
Also gains SP Recovery based on Max HP. 
[Lv. 1]; Recovery: +3. Potion: +3% 
[Lv. 2]; Recovery: +6. Potion: +6% 
[Lv. 3]; Recovery: +9. Potion: +9% 
[Lv. 4]: Recovery: +12. Potion: +12% 
[Lv. 5]; Recovery: +15. Potion: +15% 
[Lv. 6]; Recovery: +18. Potion: +18% 
[Lv. 7]; Recovery: +21. Potion: +21% 
[Lv. 8]: Recovery: +24. Potion: +24% 
[Lv. 9]; Recovery: +27. Potion: +27% 
[Lv.10]: Recovery: +30. Potion: +30%`,
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
Type: Supportive
Target: Self
Requirement: None
After Cast Delay: A.Delay - 0.285 
Cooldown: A.Delay
SP Cost: 10
Description: Reveals Invisible enemies within a 7x7 AoE for 10s.`,
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
;// ./src/img/icon_wiz/icon_wiz_gemmancy.png
const icon_wiz_gemmancy_namespaceObject = __webpack_require__.p + "9c75b1fcab3fc41ce1d6.png";
;// ./src/img/icon_wiz/icon_wiz_violentquake.png
const icon_wiz_violentquake_namespaceObject = __webpack_require__.p + "ada43206824b138e6813.png";
;// ./src/img/icon_wiz/icon_wiz_17.png
const icon_wiz_17_namespaceObject = __webpack_require__.p + "1217f6de11fd312b314d.png";
;// ./src/js/listSkills/MageWizard.js
/*  author Chalykh Maksim 
  # data 25.01.2025 
  # email: chalyh.maksim.88@mail.ru */

 // заглушка










// import electricalInduction from '../../img/icon_wiz/icon_wiz_electricalinduction.png';




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
Element: Fire
Variable Cast Time: 0.30s
Fixed Cast Time: 0.10s 
After Cast Delay: 2s
Hits: 1
Requirement: Fire Bolt Lv: 4, Fire Ball Lv: 3
Description: Deals M.DMG to enemies within a 15x15 AoE, Knocking them back 5 cells. Double the damage against Invisible enemies. Consumes Sight if active.
[Lv. 1]: MATK 100%, SP Cost: 40 
[Lv. 2]: MATK 200%, SP Cost: 47
[Lv. 3]: MATK 300%, SP Cost: 54 
[Lv. 4]: MATK 400%, SP Cost: 61 
[Lv. 5]: MATK 500%, SP Cost: 68
Formula: MATK (%); (Skill Lv x 100) `,
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
Element: Fire
After Cast Delay: 1s 
Cooldown: 65 
Range: 9
Requirement: Sightrasher Lv: 3
Description: Creates a 7x7 AoE at the targeted location that deals M.DMG to enemies within a random 7x7 AoE every 0.45s for 4.5s.
Has a chance to inflict Burning for 100s. VCT and FCT scale with skill level.
[Lv. 1]: MATK 330%, VCT: 2.60s. FCT: 0.78s Burning Chance: 3%, SP Cost: 60
[Lv. 2]: MATK 360%, VCT: 2.90s. FCT: 0.82s Burning Chance: 6%, SP Cost: 64
[Lv. 3]: MATK 390%, VCT: 3.20s. FCT: 0.86s Burning Chance: 9%, SP Cost: 68
[Lv. 4]: MATK 420%, VCT: 3.50s. FCT: 0.90s Burning Chance: 12%, SP Cost: 72
[Lv. 5]: MATK 450%, VCT: 4.10s. FCT: 0.98s Burning Chance: 15%, SP Cost: 76
[Lv. 6]: MATK 480%, VCT: 4.70s. FCT: 1.06s Burning Chance: 18%, SP Cost: 80
[Lv. 7]: MATK 510%, VCT: 5.30s. FCT: 1.14s Burning Chance: 21%, SP Cost: 84
[Lv. 8]: MATK 540%, VCT: 6.20s. FCT: 1.26s Burning Chance: 24%, SP Cost: 88
[Lv. 9]: MATK 570%, VCT: 7.10s. FCT: 1.38s Burning Chance: 27%, SP Cost: 92
[Lv.10]: MATK 600%, VCT: 8.00s. FCT: 1.50s Burning Chance: 30%, SP Cost: 96
Formula: MATK (%); 300 + (Skill Lv x 30) `,
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
Element: Fire
After Cast Delay: 1s 
Max Instances: 5 
Range: 9
Requirement: Meteor Storm Lv: 7
Description: Summons a temporary pillar at the targeted location that explodes when triggered, dealing M.DMG damage to all enemies within a 5x5 AoE.
The damage is not multiplied by hits against players.
Grants a chance to auto-cast Fire Pillar when casting Skills, with the auto-casted level being half of the skill's learned level.
VCT and FCT scale with skill level.
Catalyst: 1x Red Gemstone for Lv. 6 or higher.
[Lv. 1]: MATK 80% x 3 Hits Duration: 36s. Chance: 1%, SP Cost: 39
[Lv. 2]: MATK 100% x 4 Hits Duration: 42s. Chance: 2%, SP Cost: 43 
[Lv. 3]: MATK 120% x 5 Hits Duration: 48s. Chance: 3%, SP Cost: 47 
[Lv. 4]: MATK 140% x 6 Hits Duration: 54s. Chance: 4%, SP Cost: 51 
[Lv. 5]: MATK 160% x 7 Hits Duration: 60s. Chance: 5%, SP Cost: 55 
[Lv. 6]: MATK 180% x 8 Hits Duration: 66s. Chance: 6%, SP Cost: 59 
[Lv. 7]: MATK 200% x 9 Hits Duration: 72s. Chance: 7%, SP Cost: 63 
[Lv. 8]: MATK 220% x 10 Hits Duration: 78s. Chance: 8%, SP Cost: 67 
[Lv. 9]: MATK 240% x 11 Hits Duration: 84s. Chance: 9%, SP Cost: 71 
[Lv.10]: MATK 260% x 12 Hits Duration: 90s. Chance: 10%, SP Cost: 75
Formula: MATK (%) (60+ (Skill Lv x 20)) x Hits 
Against Players MATK (%): 60 + (Skill Lv x 20)`,
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
Element: Water
Variable Cast Time: 1.20s
After Cast Delay: 0.50s 
Cooldown: 1s
Range: 9
Hits: 1
SP Cost: 25
Requirement: Frost Diver Lv: 3
Description: Deals M.DMG to enemies within a 7x7 AoE around the target. Enemies on the edge take half damage.
Inflicts Wet for 10s, and each hit increases its stack by 1.
Consumes nearby Ice Wall cells or the Deluge cell beneath the user to launch up to 9 additional Water Balls at the same target. The damage from additional Water Balls is split across all enemies hit.
[Lv. 1]: MATK 140%
[Lv. 2]: MATK 180%
[Lv. 3]: MATK 220%
[Lv. 4]: MATK 260% 
[Lv. 5]: MATK 300%
Formula: MATK (%): 100 + (Skill Lv x 40) `,
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
Element: Water
After Cast Delay: 1s 
Cooldown: 65 
Range: 9 
Hits: 1
Requirement: Water Ball Lv: 3
Description: Deals M.DMG to enemies within a 9x9 AoE around the targeted location every 0.45s for 4.5s, knocking them back 2 cells. Has a chance to inflict Freezing for 5s. Inflicts Freeze on the target for 27s once the Freezing effect ends.
Also inflicts Freeze immediately if the enemy is hit 3 times.
Does not hit frozen enemies.
VCT and FCT scale with skill level.
[Lv. 1]: MATK 120%, VCT: 2.60s. FCT: 0.78s Freezing Chance: 60%, SP Cost: 60
[Lv. 2]: MATK 170%, VCT: 2.90s. FCT: 0.825 Freezing Chance: 55%, SP Cost: 64
[Lv. 3]: MATK 220%, VCT: 3.20s. FCT: 0.86s Freezing Chance: 50%, SP Cost: 68
[Lv. 4]: MATK 270%, VCT: 3.50s. FCT: 0.90s Freezing Chance: 45%, SP Cost: 72
[Lv. 5]: MATK 320%, VCT: 4.10s. FCT: 0.98s Freezing Chance: 40%, SP Cost: 76
[Lv. 6]: MATK 370%, VCT: 4.70s. FCT: 1.06s Freezing Chance: 35%, SP Cost: 80
[Lv. 7]: MATK 420%, VCT: 5.30s. FCT: 1.14s Freezing Chance: 30%, SP Cost: 84
[Lv. 8]: MATK 470%, VCT: 6.20s. FCT: 1.26s Freezing Chance: 25%, SP Cost: 88
[Lv. 9]: MATK 520%, VCT: 7.10s. FCT: 1.38s Freezing Chance: 20%, SP Cost: 92 
[Lv.10]: MATK 570%, VCT: 8.00s. FCT: 1.50s Freezing Chance: 15%, SP Cost: 96
Formula: MATK (%); 70 + (Skill Lv x 50) `,
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
Element: Water
After Cast Delay: 0.14s 
Cooldown: 0.30s
Hits: 1
Requirement: Storm Gust Lv: 7
Description: Deals M.DMG to enemies within a 9x9 AoE.
Has a chance to inflict Freezing for 5s. Inflicts Freeze on the target once the Freezing effect ends.
VCT and FCT scale with skill level. 
[Lv. 1]: MATK 110%, VCT/FCT: 0.57s Chance: 38%, Freeze Duration: 2.80s SP Cost: 35
[Lv. 2]: MATK 120%, VCT/FCT: 0.54s Chance: 43%, Freeze Duration: 3.60s SP Cost: 34
[Lv. 3]: MATK 130%, VCT/FCT: 0.51s Chance: 48%, Freeze Duration: 4.40s SP Cost: 33
[Lv. 4]: MATK 140%, VCT/FCT: 0.48s Chance: 53%, Freeze Duration: 5.20s SP Cost: 32
[Lv. 5]: MATK 150%, VCT/FCT: 0.45s Chance: 58%, Freeze Duration: 6.00s SP Cost: 31
[Lv. 6]: MATK 160%, VCT/FCT: 0.42s Chance: 63%, Freeze Duration: 6.80s SP Cost: 30
[Lv. 7]: MATK 170%, VCT/FCT: 0.39s Chance: 68%, Freeze Duration: 7.60s SP Cost: 29
[Lv. 8]: MATK 180%, VCT/FCT: 0.36s Chance: 73%, Freeze Duration: 8.40s SP Cost: 28
[Lv. 9]: MATK 190%, VCT/FCT: 0.33s Chance: 78%, Freeze Duration: 9.20s SP Cost: 27
[Lv.10]: MATK 200%, VCT/FCT: 0.30s Chance: 83%, Freeze Duration: 10.00s SP Cost: 26
Formula: MATK (%); 100 + (Skill Lv) `,
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
Element: Wind
After Cast Delay: 0.14s 
Cooldown: 0.30s 
Range: 9
Requirement: Thunderstorm Lv:3
Description: Deals M.DMG to the target, Knocking it back.
VCT and FCT scale with skill level. 
[Lv. 1]: VCT: 2.00s. FCT: 0.30s. Hits: 2 Knockback: 3. SP Cost: 20
[Lv. 2]: VCT: 2.10s. FCT: 0.35s. Hits: 4 Knockback: 4. SP Cost: 25
[Lv. 3]: VCT: 2.30s. FCT: 0.40s. Hits: 6 Knockback: 5. SP Cost: 30
[Lv. 4]: VCT: 2.60s. FCT: 0.45s. Hits: 8 Knockback: 6. SP Cost: 35
[Lv. 5]: VCT: 3.00s. FCT: 0.50s. Hits: 10 Knockback: 7. SP Cost: 40
Formula: MATK (%); 100 x Hits `,
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
Element: Wind
After Cast Delay: 1s
Cooldown: 65
Range: 9 
Hits: 4
Requirement: Jupitel Thunder Lv: 3
Description: Deals M.DMG to enemies within a 13x13 AoE around the targeted location every 0.45s for 4.5s.
Has a chance to inflict Blind for 20s.
VCT and FCT scale with skill level.
[Lv. 1]: MATK 20%, VCT: 2.60s. FCT: 0.78s Blind Chance: 15%, SP Cost: 60
[Lv. 2]: MATK 40%, VCT: 2.90s. FCT: 0.82s Blind Chance: 20%, SP Cost: 64
[Lv. 3]: MATK 60%, VCT: 3.20s. FCT: 0.86s Blind Chance: 25%, SP Cost: 68
[Lv. 4]: MATK 80%, VCT: 3.50s. FCT: 0.90s Blind Chance: 30%, SP Cost: 72
[Lv. 5]: MATK 100%, VCT: 4.10s. FCT: 0.98s Blind Chance: 35%, SP Cost: 76
[Lv. 6]: MATK 120%, VCT: 4.70s. FCT: 1.06s Blind Chance: 40%, SP Cost: 80
[Lv. 7]: MATK 140%, VCT: 5.30s. FCT: 1.14s Blind Chance: 45%, SP Cost: 84
[Lv. 8]: MATK 160%, VCT: 6.20s. FCT: 1.26s Blind Chance: 50%, SP Cost: 88
[Lv. 9]: MATK 180%, VCT: 7.10s. FCT: 1.38s Blind Chance: 55%, SP Cost: 92
[Lv.10]: MATK 200%, VCT: 8.00s. FCT: 1.50s Blind Chance: 60%, SP Cost: 96
Formula: MATK (%): Skill Lv x 20 `,
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
Element: Wind
After Cast Delay: 1s 
Range: 9
Requirement: Lord of Vermilion Lv: 7
Description: Deals M.DMG to the target, and bounces to a random enemy within a 7x7 AoE after 2 hits. The damage increases by 10% with each bounce, and the bounce interval scales with A.Motion.
Grants a chance to auto-cast Electrical Induction when casting Skills, and the auto- cast level being half of the skill's learned level.
VCT and FCT scale with skill level.
[Lv. 1]: MATK 20% x 3 Hits. VCT: 2.30s FCT: 0.55s. Chance: 1%, SP Cost: 39
[Lv. 2]: MATK 30% x 4 Hits. VCT: 2.10s FCT: 0.50s. Chance: 2%, SP Cost: 43 
[Lv. 3]: MATK 40% x 5 Hits. VCT: 1.90s FCT: 0.45s. Chance: 3%, SP Cost: 47 
[Lv. 4]: MATK 50% x 6 Hits. VCT: 1.70s FCT: 0.40s. Chance: 4%, SP Cost: 51 
[Lv. 5]: MATK 60% x 7 Hits, VCT: 1.50s FCT: 0.35s. Chance: 5%, SP Cost: 55
[Lv. 6]: MATK 70% x 8 Hits. VCT: 1.30s FCT: 0.30s. Chance: 6%, SP Cost: 59 
[Lv. 7]: MATK 80% x 9 Hits. VCT: 1.10s FCT: 0.25s. Chance: 7%, SP Cost: 63
[Lv. 8]: MATK 90% x 10 Hits. VCT: 0.90s FCT: 0.20s. Chance: 8%, SP Cost: 67
[Lv. 9]: MATK 100% x 11 Hits, VCT: 0.70s FCT: 0.15s. Chance: 9%, SP Cost: 71 
[Lv.10]: MATK 110% x 12 Hits. VCT: 0.50s FCT: 0.10s. Chance: 10%, SP Cost: 75
Formula: MATK (%); 10+ (Skill Lv x 10) + (Jumps x 10) 
Interval (seconds): (A.Motion (Jumps x 20)) = 1000 `,
  img: icon_wiz_17_namespaceObject
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
Element: Earth
After Cast Delay: 1s 
Range: 9 
Hits: 2
Requirement: Stone Curse Lv: 3
Description: Deals M.DMG to enemies within a 5x10 AoE at the targeted location, Knocking them back 2 cells.
The cast direction determines the skill's path, starting 1 cell away from the caster.
The skill moves 1 cell further every 0.3s, up to 5 times, dealing damage and knocking them back again.
VCT and FCT scale with skill level.
[Lv. 1]: MATK 25%, VCT: 0.70s. FCT: 0.10s SP Cost: 24
[Lv. 2]: MATK 50%, VCT: 0.95s. FCT: 0.30s SP Cost: 28
[Lv. 3]: MATK 75%, VCT: 1.20s. FCT: 0.40s SP Cost: 32
[Lv. 4]: MATK 100%, VCT: 1.45s. FCT: 0.60s SP Cost: 36
[Lv. 5]: MATK 125%, VCT: 1.70s. FCT: 0.70s SP Cost: 40
Formula: MATK (%); Skill Lv x 25 `,
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
Element: Earth
After Cast Delay: 1s 
Cooldown: 65 
Range: 9
Requirement: Heaven's Drive Lv: 3
Description: Creates a 7x7 AoE at the targeted location that deals M.DMG to enemies within a random 7x7 AoE every 0.45s for 4.5s.
Has a chance to inflict Stun for 5s. VCT and FCT scale with skill level.
[Lv. 1]: MATK 230%, VCT: 2.60s. FCT: 0.78s Stun Chance: 3%, SP Cost: 60
[Lv. 2]: MATK 260%, VCT: 2.90s. FCT: 0.82s Stun Chance: 6%, SP Cost: 64
[Lv. 3]: MATK 290%, VCT: 3.20s. FCT: 0.86s Stun Chance: 9%, SP Cost: 68
[Lv. 4]: MATK 320%, VCT: 3.50s. FCT: 0.90s Stun Chance: 12%, SP Cost: 72
[Lv. 5]: MATK 350%, VCT: 4.10s. FCT: 0.98s Stun Chance: 15%, SP Cost: 76
[Lv. 6]: MATK 380%, VCT: 4.70s. FCT: 1.06s Stun Chance: 18%, SP Cost: 80
[Lv. 7]: MATK 410%, VCT: 5.30s. FCT: 1.14s Stun Chance: 21%, SP Cost: 84
[Lv. 8]: MATK 440%, VCT: 6.20s. FCT: 1.26s Stun Chance: 24%, SP Cost: 88
[Lv. 9]: MATK 470%, VCT: 7.10s. FCT: 1.38s Stun Chance: 27%, SP Cost: 92
[Lv.10]: MATK 500%, VCT: 8.00s. FCT: 1.50s Stun Chance: 30%, SP Cost: 96
Formula: MATK (%); 200 + (Skill Lv x 30) `,
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
After Cast Delay: 1s 
Max Instances: 3 
Range: 9
Requirement: Violent Quake Lv: 7
Description: Temporarily creates a 5x5 AoE at the targeted location, reducing AGI and DEX and increasing WD of enemies. Also removes some Status Effects from them. Older instances are removed to create new ones when reaching the instance limit. 
[Lv. 1]: WD +26%, AGI/DEX -15% Duration: 8s. SP Cost: 8
[Lv. 2]: WD +32%, AGI/DEX -20% Duration: 11s. SP Cost: 11
[Lv. 3]: WD +38%, AGI/DEX -25% Duration: 14s. SP Cost: 14
[Lv. 4]: WD +44%, AGI/DEX -30% Duration: 17s. SP Cost: 17
[Lv. 5]: WD +50%, AGI/DEX -35% Duration: 20s. SP Cost: 20
[Lv. 6]: WD +56%, AGI/DEX -40% Duration: 23s. SP Cost: 23
[Lv. 7]: WD +62%, AGI/DEX -45% Duration: 26s. SP Cost: 26
[Lv. 8]: WD +68%, AGI/DEX -50% Duration: 29s, SP Cost: 29
[Lv. 9]: WD +74%, AGI/DEX -55% Duration: 32s. SP Cost: 32
[Lv.10]: WD +80%, AGI/DEX -60% Duration: 35s, SP Cost: 35`,
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
SP Cost: 5
Requirement: None
Description: Crafts gemstones.
Base Level, Job Level, and Stats increase the number of crafted gemstones, except for Blue, Red, and Yellow gemstones.
Guide: Gemmancy Creation Guide
[Lv. 1]: Bonus Efficiency: 0%
[Lv. 2]: Bonus Efficiency: 25% 
[Lv. 3]: Bonus Efficiency: 50% 
[Lv. 4]: Bonus Efficiency: 75% 
[Lv. 5]: Bonus Efficiency: 100%

Crafted Gemstones :
Base Amount + Bonus Amount

Bonus Amount:
((Base Amount x ((Level Bonus + Stats Bonus) x ((Skill Lv x 25) - 25))) = 100)

Level Bonus:
((Base Lv x 100) / 200) + ((Job Lv x 100) / 140) / 100 
Stats Bonus:
((STR^2 / 10) + (AGI^2 / 10) + (VIT^2) + (INT^2 / 10) + (DEX^2 / 10) + (LUK^2 / 10)) / 100

Random Bonus Amount:
10% chance for the bonus to be reduced to 25% 
70% chance for the bonus to be reduced to 50% 
20% chance for no reductions`,
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
;// ./src/img/icon_wiz/icon_wiz_18.png
const icon_wiz_18_namespaceObject = __webpack_require__.p + "31d3e1a88b7626103a12.png";
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
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Self
Fixed Cast Time: 1s
After Cast Delay: 0.30s
Cooldown: A.Delay
Requirement: None
Description: Removes M.DMG Variance, ensuring maximum damage while active, but increases all skills' SP Cost by 25%,
Also increases B.MATK.
[Lv. 1]: B.MATK +15%, SP Cost: 40 
[Lv. 2]: B.MATK +20%, SP Cost: 50 
[Lv. 3]: B.MATK +25%, SP Cost: 60 
[Lv. 4]: B.MATK +30%, SP Cost: 70 
[Lv. 5]: B.MATK +35%, SP Cost: 80`,
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
Element: Ghost
Fixed Cast Time: 0.60s
After Cast Delay: 1s 
Cooldown: 2s
Range: 9
Requirement: Napalm Beat Lv: 5
Description: Deals M.DMG to enemies within a
7x7 AoE around the target, scaling with the learned level of Napalm Beat.
Has a chance to inflict Curse for 18s. VCT scales with skill level.
[Lv. 1]: VCT: 0.80s. Hits: 1. Chance: 5% SP Cost: 8
[Lv. 2]: VCT: 1.20s. Hits: 2. Chance: 10% SP Cost: 16
[Lv. 3]: VCT: 1.60s. Hits: 3. Chance: 15% SP Cost: 24
[Lv. 4]: VCT: 2.00s. Hits: 4. Chance: 20% SP Cost: 32
[Lv. 5]: VCT: 2.40s. Hits: 5. Chance: 25% SP Cost: 40
Formula: MATK (%): (100 + (Napalm Beat Lv x 20)); x Hits `,
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
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Passive
Type: Magical
Requirement: Increase SP Recovery Lv: 5, Soul Strike Lv: 7
Description: Increases Max SP and drains SP from monsters when they are killed, scaling with their level.
[Lv. 1]: MaxSP +4%
[Lv. 2]: MaxSP +8%
[Lv. 3]: MaxSP +12% 
[Lv. 4]: MaxSP +16% 
[Lv. 5]: MaxSP +20%
Formula: SP Drain: (Target Lv x (95 + (Skill Lv x 30)) = 100 `,
  img: icon_hwz_1_namespaceObject
}, {
  id: "cataclysm",
  level: 5,
  dependencies: [
    // { id: "increaseSPRecovery", minLevel: 5 },       
  ],
  dependent: [],
  element: null,
  skillName: "Cataclysm",
  maxLevel: 5,
  inform: `Max Level: 5
Skill Form: Active Type: Magical
Target: Enemy
Element: Flexible
Fixed Cast Time: 1.50s
After Cast Delay: 2s 
Cooldown: 85
Range: 9
Hits: 4
Description: Consumes 4 elemental orbs to deal M.DMG to enemies within a 7x7 M.DMG. Each consumed orb triggers one hit, with the element corresponding to that orb's element. Casting or defeating enemies with Fire,
Water, Wind or Earth skills has a chance to summon an elemental orb for 180s, based on the element of the casted skill.
A maximum of 4 orbs can exist at once, with each orb increasing the damage of its matching element by 4% while active. Each orb's duration is tracked separately. VCT scales with skill level.
[Lv. 1]: MATK 800% x Hits, VCT: 5s Orb Chance: 6%, SP Cost: 60
[Lv. 2]: MATK 1100% x Hits. VCT: 6s Orb Chance: 7%, SP Cost: 75
[Lv. 3]: MATK 1400% x Hits. VCT: 7s Orb Chance: 8%, SP Cost: 90
[Lv. 4]: MATK 1700% x Hits. VCT: 85 Orb Chance: 9%, SP Cost: 105 
[Lv. 5]: MATK 2000% x Hits. VCT: 95 Orb Chance: 10%, SP Cost: 120
Formula: MATK (%): (500 + (Skill Lv x 300)) x Hits `,
  img: icon_wiz_18_namespaceObject
}];

/*  author Chalykh Maksim 
  # data 10.02.2025 
  # email: chalyh.maksim.88@mail.ru */
;// ./src/img/icon_sag/icon_sag_1.gif
const icon_sag_1_namespaceObject = __webpack_require__.p + "c98be2bf1260b7c9031d.gif";
;// ./src/img/icon_sag/icon_sag_2.gif
const icon_sag_2_namespaceObject = __webpack_require__.p + "f96b773702bbf0cdb680.gif";
;// ./src/img/icon_sag/icon_sag_3.gif
const icon_sag_3_namespaceObject = __webpack_require__.p + "2e3fbef8397d0f68bc78.gif";
;// ./src/img/icon_sag/icon_sag_4.gif
const icon_sag_4_namespaceObject = __webpack_require__.p + "fd3966ebf89ea22e2df4.gif";
;// ./src/img/icon_sag/icon_sag_5.gif
const icon_sag_5_namespaceObject = __webpack_require__.p + "402fd3496d2c25e111fc.gif";
;// ./src/img/icon_sag/icon_sag_7.gif
const icon_sag_7_namespaceObject = __webpack_require__.p + "de3a8496b67a110d0a97.gif";
;// ./src/img/icon_sag/icon_sag_8.gif
const icon_sag_8_namespaceObject = __webpack_require__.p + "8ded47772b8f85dee08a.gif";
;// ./src/img/icon_sag/icon_sag_9.gif
const icon_sag_9_namespaceObject = __webpack_require__.p + "fc1cca60b8ae697170f8.gif";
;// ./src/img/icon_sag/icon_sag_10.gif
const icon_sag_10_namespaceObject = __webpack_require__.p + "b442d105043bd26cf412.gif";
;// ./src/img/icon_sag/icon_sag_12.gif
const icon_sag_12_namespaceObject = __webpack_require__.p + "73d2afaa00243bcb75f0.gif";
;// ./src/img/icon_sag/icon_sag_13.gif
const icon_sag_13_namespaceObject = __webpack_require__.p + "111fd19fa44b87d09960.gif";
;// ./src/img/icon_sag/icon_sag_14.gif
const icon_sag_14_namespaceObject = __webpack_require__.p + "a8f496e15aa9dba8a250.gif";
;// ./src/img/icon_sag/icon_sag_17.png
const icon_sag_17_namespaceObject = __webpack_require__.p + "31a836dc092f35a57ef9.png";
;// ./src/img/icon_sag/icon_sag_15.gif
const icon_sag_15_namespaceObject = __webpack_require__.p + "eac6e61d9a5efa17342d.gif";
;// ./src/img/icon_sag/icon_sag_16.gif
const icon_sag_16_namespaceObject = __webpack_require__.p + "d6e42c7055c1c05c1f3d.gif";
;// ./src/img/icon_sag/icon_sag_18.png
const icon_sag_18_namespaceObject = __webpack_require__.p + "872dce1f851d053ab015.png";
;// ./src/img/icon_sag/icon_sag_19.png
const icon_sag_19_namespaceObject = __webpack_require__.p + "f14dd6728d3e320e701c.png";
;// ./src/img/icon_sag/icon_sag_20.png
const icon_sag_20_namespaceObject = __webpack_require__.p + "fc66df64f3c4f805e6bf.png";
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
Weapon: Book
Requirement: None
Description: Increases B.MATK while wielding Books. At max level, also grants +6% B.MATK and decreases DAA by 5%,
[Lv. 1]: B.MATK +3
[Lv. 2]: B.MATK +6
[Lv. 3]: B.MATK +9
[Lv. 4]: B.MATK +12
[Lv. 5]: B.MATK +15
[Lv. 6]: B.MATK +18
[Lv. 7]: B.MATK +21
[Lv. 8]: B.MATK +24
[Lv. 9]: B.MATK +27 
[Lv.10]: B.MATK +30`,
  img: icon_sag_1_namespaceObject
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
Type: Supportive
Target: Ally
Element: Water
Variable Cast Time: 1s
After Cast Delay: 2s 
Cooldown: A.Delay 
Range: 9
Requirement: Cold Bolt Lv: 3, Advanced Book Lv: 3
Description: Endows a single target's weapon with Water. Also increases the DMG of Water property basic attacks and skills. 
At max level becomes a 5x5 AoE, endowing allies around the target, but has a 0.6s FCT, double the SP Cost and triple the Catalysts.
Catalyst: 1x Indigo Point
[Lv. 1]: Water Damage +2%, SP Cost: 19 Duration: 75s
[Lv. 2]: Water Damage +3%, SP Cost: 23 Duration: 150s
[Lv. 3]: Water Damage +4%, SP Cost: 27 Duration: 225s
[Lv. 4]: Water Damage +5%, SP Cost: 31 Duration: 300s
[Lv. 5]: Water Damage +5%, SP Cost: 62 Duration: 300s`,
  img: icon_sag_8_namespaceObject
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
Type: Supportive 
Target: Ally
Element: Wind
Variable Cast Time: 1s
After Cast Delay: 2s 
Cooldown: A.Delay 
Range: 9
Requirement: Lightning Bolt Lv: 3, Advanced Book Lv: 3
Description: Endows a single target's weapon with Wind. Also increases the DMG of Wind property basic attacks and skills.
At max level becomes a 5x5 AoE, endowing allies around the target, but has a 0.6s FCT, double the SP Cost and triple the Catalysts. 
Catalyst: 1x Canary Point
[Lv. 1]: Wind Damage +2%, SP Cost: 19 Duration: 75s
[Lv. 2]: Wind Damage +3%, SP Cost: 23 Duration: 150s
[Lv. 3]: Wind Damage +4%, SP Cost: 27 Duration: 225s
[Lv. 4]: Wind Damage +5%, SP Cost: 31 Duration: 300s
[Lv. 5]: Wind Damage +5%, SP Cost: 62 Duration: 300s`,
  img: icon_sag_9_namespaceObject
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
Type: Supportive Target: Ally
Element: Earth
Variable Cast Time: 1s
After Cast Delay: 2s 
Cooldown: A.Delay 
Range: 9

Requirement: Earth Spike Lv: 3, Advanced Book Lv: 3
Description: Endows a single target's weapon with Earth. Also increases the DMG of Earth property basic attacks and skills.
At max level becomes a 5x5 AoE, endowing allies around the target, but has a 0.6s FCT, double the SP Cost and triple the Catalysts.
Catalyst: 1x Verdant Point
[Lv. 1]: Earth Damage +2%, SP Cost: 19 Duration: 75s
[Lv. 2]: Earth Damage +3%, SP Cost: 23 Duration: 150s
[Lv. 3]: Earth Damage +4%, SP Cost: 27 Duration: 225s
[Lv. 4]: Earth Damage +5%, SP Cost: 31 Duration: 300s
[Lv. 5]: Earth Damage +5%, SP Cost: 62 Duration: 300s`,
  img: icon_sag_10_namespaceObject
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
Type: Supportive 
Target: Ally
Element: Fire
Variable Cast Time: 1s
After Cast Delay: 2s 
Cooldown: A.Delay 
Range: 9
Requirement: Fire Bolt Lv: 3, Advanced Book Lv: 3
Description: Endows a single target's weapon with Fire. Also increases the DMG of Fire property basic attacks and skills.
At max level becomes a 5x5 AoE, endowing allies around the target, but has a 0.6s FCT, double the SP Cost and triple the Catalysts.
Catalyst: 1x Scarlet Point
[Lv. 1]: Fire Damage +2%, SP Cost: 19 Duration: 75s
[Lv. 2]: Fire Damage +3%, SP Cost: 23 Duration: 150s
[Lv. 3]: Fire Damage +4%, SP Cost: 27 Duration: 225s
[Lv. 4]: Fire Damage +5%, SP Cost: 31 Duration: 300s
[Lv. 5]: Fire Damage +5%, SP Cost: 62 Duration: 300s`,
  img: icon_sag_7_namespaceObject
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
Type: Supportive 
Target: Ground
Element: Water
Variable Cast Time: 4s
Fixed Cast Time: 1s
After Cast Delay: 1s 
Range: 2
Requirement: Frost Weapon Lv: 2
Description: Creates a 7x7 AoE at the targeted location.
Increases allies' Max HP and basic attacks and skills of Water property damage.
Every 3s, Water entities recover 1% of their Max HP, and Fire entities receive 1% of their Max HP as Water M.DMG.
Does not consume Catalysts if the caster is within their own Deluge cell.
Catalyst: 3x Indigo Point
[Lv. 1]: Damage +10%, MaxHP +5% Duration: 60s. SP Cost: 30
[Lv. 2]: Damage +15%, MaxHP +10% Duration: 120s. SP Cost: 35
[Lv. 3]: Damage +20%, MaxHP +15% Duration: 180s, SP Cost: 40`,
  img: icon_sag_13_namespaceObject
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
Type: Supportive 
Target: Ground
Element: Wind
Variable Cast Time: 4s
Fixed Cast Time: 1s
After Cast Delay: 1s 
Range: 2
Requirement: Lightning Weapon Lv: 2
Description: Creates a 7x7 AoE at the targeted location.
Increases allies' FLEE and basic attacks and skills of Wind property damage.
Every 3s, Wind entities recover 1% of their Max HP, and Water entities receive 1% of their Max HP as Wind M.DMG.
Increases Fire Wall duration by 50%.
Does not consume Catalysts if the caster is within their own Whirlwind cell.
Catalyst: 3x Canary Point
[Lv. 1]: Damage +10%, FLEE +10 Duration: 60s. SP Cost: 30
[Lv. 2]: Damage +15%, FLEE +20 Duration: 120s. SP Cost: 35
[Lv. 3]: Damage +20%, FLEE +30 Duration: 180s. SP Cost: 40`,
  img: icon_sag_14_namespaceObject
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
Type: Supportive 
Target: Ground
Element: Earth
Variable Cast Time: 4s
Fixed Cast Time: 1s
After Cast Delay: 1s 
Range: 2
Requirement: Seismic Weapon Lv: 2
Description: Creates a 7x7 AoE at the targeted location.
Increases allies' P.DEF and basic attacks and skills of Earth property damage.
Every 3s, Earth entities recover 1% of their Max HP, and Wind entities receive 1% of their Max HP as Earth M.DMG. Entities cannot become Invisible.
Does not consume Catalysts if the caster is within their own Sandstorm cell.
Catalyst: 3x Verdant Point
[Lv. 1]: Damage +10%, P.DEF +20 Duration: 60s, SP Cost: 30
[Lv. 2]: Damage +15%, P.DEF +30 Duration: 120s. SP Cost: 35
[Lv. 3]: Damage +20%, P.DEF +40 Duration: 180s. SP Cost: 40`,
  img: icon_sag_17_namespaceObject
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
Type: Supportive 
Target: Ground
Element: Fire
Variable Cast Time: 4s
Fixed Cast Time: 1s
After Cast Delay: 1s 
Range: 2
Requirement: Flame Weapon Lv: 2
Description: Creates a 7x7 AoE at the targeted location.
Increases allies' W.ATK, B.MATK and basic attacks and skills of Fire property damage. Every 3s, Fire entities recover 1% of their Max HP, and Earth entities receive 1% of their Max HP as Fire M.DMG.
Prevents the placement of Ice Walls.
Does not consume Catalysts if the caster is within their own Volcano cell.
Catalyst:  Scarlet Point
[Lv. 1]: Damage +10%, W.ATK/B.MATK +10 Duration: 60s. SP Cost: 30
[Lv. 2]: Damage +15%. W.ATK/B.MATK +20 Duration: 120s, SP Cost: 35
[Lv. 3]: Damage +20%, W.ATK/B.MATK +30 Duration: 180s. SP Cost: 40`,
  img: icon_sag_12_namespaceObject
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
Type: Supportive Target: Self
After Cast Delay: 0.30s 
Cooldown: A.Delay 
SP Cost: 2
Requirement: Advanced Book Lv: 2
Description: Interrupts the caster's current skill cast and saves a portion of its SP Cost. 
[Lv. 1]: SP Retained: 10%
[Lv. 2]: SP Retained: 30%
[Lv. 3]: SP Retained: 50% 
[Lv. 4]: SP Retained: 70% 
[Lv. 5]: SP Retained: 90%`,
  img: icon_sag_2_namespaceObject
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
Type: Supportive 
Target: Enemy
Variable Cast Time: 1.40s
Fixed Cast Time: 0.60s
After Cast Delay: 0.50s
Cooldown: 1s
Range: 9
SP Cost: 1
Requirement: Spell Breaker Lv: 3
Description: Attempts to cancel all the target's status effects.
Catalyst: 1x Yellow Gemstone.
[Lv. 1]: Chance: 60%
[Lv. 2]: Chance: 70%
[Lv. 3]: Chance: 80% 
[Lv. 4]: Chance: 90%
[Lv. 5]: Chance: 100%`,
  img: icon_sag_16_namespaceObject
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
Type: Supportive 
Target: Self
After Cast Delay: 0.30s
SP Cost: 2
Requirement: Advanced Book Lv: 4
Description: Temporarily prevents the next incoming single-target skill, absorbing a portion of its SP Cost.
Drains 20% of the target's SP if the prevented skill is Spell Breaker.
[Lv. 1]: Duration: 0.40s. SP Absorption: 20% 
[Lv. 2]: Duration: 0.60s. SP Absorption: 40% 
[Lv. 3]: Duration: 0.80s. SP Absorption: 60% 
[Lv. 4]: Duration: 1.00s. SP Absorption: 80% 
[Lv. 5]: Duration: 1.20s. SP Absorption: 100%`,
  img: icon_sag_3_namespaceObject
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
Variable Cast Time: 0.56s
Fixed Cast Time: 0.14s
After Cast Delay: 0.50s 
Cooldown: 1s 
Range: 9
SP Cost: 10
Requirement: Magic Rod Lv: 1
Description: Interrupts the target's skill casting, absorbing a portion of its SP Cost. At max level, this skill also inflicts damage equal to 2% of the target's Max HP while absorbing half of it as health. 
[Lv. 1]: SP Absorption: 0% 
[Lv. 2]: SP Absorption: 25% 
[Lv. 3]: SP Absorption: 50%
[Lv. 4]: SP Absorption: 75%
[Lv. 5]: SP Absorption: 100%`,
  img: icon_sag_4_namespaceObject
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
Description: Grants the ability to walk and to perform basic attacks while casting a skill, but increases WD and A.Motion during which. 
[Lv. 1]: WD +75%, A.Motion +100% 
[Lv. 2]: WD +70%, A.Motion +95%
[Lv. 3]: WD +65%, A.Motion +90% 
[Lv. 4]: WD +60%, A.Motion +85% 
[Lv. 5]: WD +55%, A.Motion +80% 
[Lv. 6]: WD +50%, A.Motion +75% 
[Lv. 7]: WD +45%, A.Motion +70% 
[Lv. 8]: WD +40%, A.Motion +65% 
[Lv. 9]: WD +35%, A.Motion +60% 
[Lv.10]: WD +30%, A.Motion +55%`,
  img: icon_sag_5_namespaceObject
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
Type: Supportive 
Target: Self
Fixed Cast Time: 3s
After Cast Delay: 0.30s 
Cooldown: A.Delay
SP Cost: 35
Requirement: Free Cast Lv: 4
Description: Opens a list of learned Skills. Choosing a skill temporarily grants a chance to auto-cast it while performing basic attacks, consuming 65% of its SP Cost. The auto-cast level scales with Base Level and the learned level of the chosen skill. 
[Lv. 1]: Chance: 12%. Duration: 120s 
[Lv. 2]: Chance: 14%, Duration: 150s 
[Lv. 3]: Chance: 16%. Duration: 180s 
[Lv. 4]: Chance: 18%, Duration: 210s
[Lv. 5]: Chance: 20%. Duration: 240s 
[Lv. 6]: Chance: 22%, Duration: 270s 
[Lv. 7]: Chance: 24%, Duration: 300s 
[Lv. 8]: Chance: 26%, Duration: 330s 
[Lv. 9]: Chance: 28%. Duration: 360s 
[Lv.10]: Chance: 30%, Duration: 390s
Formula: Auto-cast Level: (Selected Skill Lv x Base Lv) x 100 `,
  img: icon_sag_19_namespaceObject
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
Type: Supportive 
Target: Ground
Variable Cast Time: 4s.
Fixed Cast Time: 1s
After Cast Delay: 1s 
Range: 2
Requirement: Volcano Lv: 2, Deluge Lv: 2, Sandstorm Lv: 2, Whirlwind Lv: 2
Description: Places an area at the targeted location that nullifies and blocks certain ground targeted skills.
Can override other Land Protector instances.
AoE increases with skill level.
Catalyst: 1x Yellow Gemstone
[Lv. 1]: AoE: 3x3. SP Cost: 66 Duration: 60s
[Lv. 2]: AoE: 5x5. SP Cost: 62 Duration: 120s
[Lv. 3]: AoE: 7x7. SP Cost: 58 Duration: 180s
[Lv. 4]: AoE: 9x9. SP Cost: 54 Duration: 240s
[Lv. 5]: AoE: 11x11. SP Cost: 50 Duration: 300s`,
  img: icon_sag_15_namespaceObject
},
//   {
//     id: "psychicWave",
//     level: 0,
//     dependencies: [
//       { id: "volcano", minLevel: 2 },
//       { id: "deluge", minLevel: 2 },
//       { id: "sandstorm", minLevel: 2 },
//       { id: "whirlwind", minLevel: 2 },
//     ],
//     dependent: [],
//     element: null,
//     skillName: "Psychic Wave",
//     maxLevel: 5,
//     inform: `Max Lv: 5
// Skill Form: Active
// Type: Magical
// Target: Ground
// Range: 9
// Requirement: Volcano Lv: 2, Deluge Lv: 2, Sandstorm Lv: 2, Whirlwind Lv: 2
// Description: Fires a wave of psychic energy at targets in an area to deal multiple hits of Neutral elemental magic. The element of this skill can be changed by applying Frost Weapon, Lightning Weapon, Seismic Weapon, or Flame Weapon. Damage additionally increases according to the skill level and caster's Base Level.
// [Lv 1]: MAtk 120% x Hits,
// [Lv 2]: MAtk 130% x Hits,
// [Lv 3]: MAtk 140% x Hits,
// [Lv 4]: MAtk 150% x Hits,
// [Lv 5]: MAtk 160% x Hits`,
//     img: skillImgNo,
//   },
{
  id: "landDistortion",
  level: 10,
  dependencies: [
    // { id: "volcano", minLevel: 2 },     
  ],
  dependent: [],
  element: null,
  skillName: "Land Distortion",
  maxLevel: 5,
  inform: `Max Level: 5
Skill Form: Active 
Type: Magical
Target: Ground
Fixed Cast Time: 0.60s
After Cast Delay: 1s 
Cooldown: 35
Range: 9
Hits: 2
Description: Creates a 9x9 AoE at the targeted location that deals M.DMG every 0.5s for 3s, scaling with Base Level.
The element of this skill can be changed by certain Skills.
VCT scales with skill level.
[Lv. 1]: MATK 120%, VCT: 2.80s. SP Cost: 48 
[Lv. 2]: MATK 140%, VCT: 3.20s, SP Cost: 56 
[Lv. 3]: MATK 160%, VCT: 3.60s. SP Cost: 64
[Lv. 4]: MATK 180%, VCT: 4.00s. SP Cost: 72
[Lv. 5]: MATK 200%, VCT: 4.40s. SP Cost: 80
Formula: MATK (%) 120 + (Skill Lv x 20) + Base Lv `,
  img: icon_sag_18_namespaceObject
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
  inform: `Max Level: 5
Skill Form: Active 
Type: Supportive 
Target: Self
Requirement: Flame Weapon Lv: 4, Frost Weapon Lv: 4, Lightning Weapon Lv: 4, Seismic Weapon Lv: 4
Description: Crafts Scrollbends using a variety of items.
Base Level, Job Level and Stats increase the number of crafted items.
Guide: Scrollbending Creation Guide
[Lv. 1]: Bonus Efficiency: 0%, SP Cost: 2 
[Lv. 2]: Bonus Efficiency: 25%, SP Cost: 4 
[Lv. 3]: Bonus Efficiency: 50%, SP Cost: 6 
[Lv. 4]: Bonus Efficiency: 75%, SP Cost: 8 
[Lv. 5]: Bonus Efficiency: 100%, SP Cost: 10

(В игре была такая информация)
Crafted Arrows:
Base Amount + Bonus Amount
Bonus Amount:
((Base Amount x ((Level Bonus + Stats Bonus) x ((Skill Lv x 25) - 25))) / 100)
Level Bonus:
((Base Lv x 100) / 200) + ((Job Lv x 100) / 140) / 100
Stats Bonus:
((STR^2 / 10) + (AGI^2 / 10) + (VIT^2 / 10) + (INT^2 / 10) + (DEX^2 / 10) + (LUK^2)) / 100
Random Bonus Amount:
10% chance for the bonus to be reduced to 25% 
70% chance for the bonus to be reduced to 50% 
20% chance for no reductions `,
  img: icon_sag_20_namespaceObject
}];

/*  author Chalykh Maksim 
  # data 25.01.2025 
  # email: chalyh.maksim.88@mail.ru */
;// ./src/img/icon_sag/icon_sag_17.gif
const img_icon_sag_icon_sag_17_namespaceObject = __webpack_require__.p + "98e4b08de3f62df49c40.gif";
;// ./src/img/icon_pro/icon_pro_1.gif
const icon_pro_1_namespaceObject = __webpack_require__.p + "b2b36a479c97bb2925ba.gif";
;// ./src/img/icon_pro/icon_pro_3.gif
const icon_pro_3_namespaceObject = __webpack_require__.p + "0d4cedf3a84d9b906751.gif";
;// ./src/img/icon_pro/icon_pro_4.gif
const icon_pro_4_namespaceObject = __webpack_require__.p + "cb1dd4a0c217f9e708ff.gif";
;// ./src/img/icon_pro/icon_pro_6.gif
const icon_pro_6_namespaceObject = __webpack_require__.p + "66301f364700e7a201b6.gif";
;// ./src/img/icon_pro/icon_pro_8.gif
const icon_pro_8_namespaceObject = __webpack_require__.p + "e85b64fe67791cb8c5ea.gif";
;// ./src/js/listSkills/MageProfessor.js
/*  author Chalykh Maksim 
  # data 10.02.2025 
  # email: chalyh.maksim.88@mail.ru */

 // заглушка


// import soulChange from '../../img/icon_pro/icon_pro_2.gif'; 


// import memorize from '../../img/icon_pro/icon_pro_5.gif'; 

// import spiderWeb from '../../img/icon_pro/icon_pro_7.gif'; 


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
Type: Supportive 
Target: Self
Variable Cast Time: 2.40s
Fixed Cast Time: 0.60s
After Cast Delay: 1s 
Cooldown: 10s
SP Cost: 60
Requirement: Dispell Lv: 1
Description: While active, every time a skill is cast or a basic attack is performed, there is a chance to auto-cast an additional skill of a similar type.
The auto-cast skill scales with the learned level of Abracadabra.
Increases VCT by 10%, adds 0.5s FCT to instant skills, and raises all SP Cost relative to the active level of Abracadabra. 
Abracadabra ends after casting a number of skills based on its level.
Catalyst: 2x Yellow Gemstone
[Lv. 1]: Amount: 1. Max Lv: 1. SP Cost +1 Attacking Chance: 1%, Casting Chance: 5% 
[Lv. 2]: Amount: 1. Max Lv: 2. SP Cost +2 Attacking Chance: 2%, Casting Chance: 10% 
[Lv. 3]: Amount: 2. Max Lv: 3. SP Cost +3 Attacking Chance: 3%, Casting Chance: 15% 
[Lv. 4]: Amount: 2. Max Lv: 4. SP Cost +4 Attacking Chance: 4%, Casting Chance: 20% 
[Lv. 5]: Amount: 3. Max Lv: 5. SP Cost +5 Attacking Chance: 5%, Casting Chance: 25% 
[Lv. 6]: Amount: 3. Max Lv: 6. SP Cost +6 Attacking Chance: 6%, Casting Chance: 30% 
[Lv. 7]: Amount: 4. Max Lv: 7. SP Cost +7 Attacking Chance: 7%, Casting Chance: 35%
[Lv. 8]: Amount: 4. Max Lv: 8. SP Cost +8 Attacking Chance: 8%, Casting Chance: 40% 
[Lv. 9]: Amount: 5. Max Lv: 9. SP Cost +9 Attacking Chance: 9%, Casting Chance: 45% 
[Lv.10]: Amount: 5. Max Lv: 10. SP Cost +10 Attacking Chance: 10%, Casting Chance: 50%`,
  img: img_icon_sag_icon_sag_17_namespaceObject
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
Type: Supportive 
Target: Self
Variable Cast Time: 1.40s
Fixed Cast Time: 0.60s
After Cast Delay: 0.30s 
Cooldown: A.Delay
Requirement: Free Cast Lv: 5
Description: Grants a chance to cast certain Skills twice for the next 90s.
This effect applies to both manually casted skills as well as auto-casted skills.
[Lv. 1]: Chance: 40%, SP Cost: 40
[Lv. 2]: Chance: 50%, SP Cost: 45
[Lv. 3]: Chance: 60%, SP Cost: 50 
[Lv. 4]: Chance: 70%, SP Cost: 55 
[Lv. 5]: Chance: 80%, SP Cost: 60`,
  img: icon_pro_8_namespaceObject
}, {
  id: "fogWall",
  level: 0,
  dependencies: [],
  dependent: [],
  element: null,
  skillName: "Fog Wall",
  maxLevel: 5,
  inform: `Max Level: 5
Skill Form: Active
Type: Supportive
Target: Ground
After Cast Delay: A.Delay - 0.425
Cooldown: 1s
Range: 9 
SP Cost: 25
Requirement: None
Description: Creates a 5x3 AoE at the targeted location that temporarily inflicts Blind on enemies.
Reduces the P.DMG taken and ACC of ranged basic attacks and skills launched against entities within the area.
Older instances are removed to create new ones when reaching the instance limit. 
[Lv. 1]: Max Instances: 1. Duration: 14s 
[Lv. 2]: Max Instances: 2. Duration: 18s 
[Lv. 3]: Max Instances: 3. Duration: 22s 
[Lv. 4]: Max Instances: 4. Duration: 26s 
[Lv. 5]: Max Instances: 5. Duration: 30s
Ranged Skills Damage: -25%
Ranged Basic Attacks Darnage: -75% ACC: -50% `,
  img: icon_pro_6_namespaceObject
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
  maxLevel: 5,
  inform: `Max Level: 5
Skill Form: Active
Type: Supportive 
Target: Self
After Cast Delay: A.Delay - 0.42s
Cooldown: A.Delay
Description: Drains 10% of Max HP, and restores SP based on the drained amount. 
[Lv. 1]; SP Restore: 10% of drained HP 
[Lv. 2]: SP Restore: 20% of drained HP 
[Lv. 3]: SP Restore: 30% of drained HP 
[Lv. 4]: SP Restore: 40% of drained HP 
[Lv. 5]: SP Restore: 50% of drained HP`,
  img: icon_pro_1_namespaceObject
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
Type: Supportive
Target: Enemy
After Cast Delay: 1s 
Range: 9
Requirement: Increase SP Recovery Lv: 3, Soul Burn Lv: 2
Description: Attempts to reduce the target's M.DEF, but increases its B.MATK. Does not work on Bosses, Undead and Corrupt monsters.
[Lv. 1]: B.MATK +32%, M.DEF -16% SP Cost: 12
[Lv. 2]: B.MATK +44%, M.DEF -22% SP Cost: 15
[Lv. 3]: B.MATK +56%, M.DEF -28% SP Cost: 18
[Lv. 4]: B.MATK +68%, M.DEF -34% SP Cost: 21
[Lv. 5]: B.MATK +80%, M.DEF -40% SP Cost: 24`,
  img: icon_pro_4_namespaceObject
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
Element: Neutral
After Cast Delay: 0.30s
Cooldown: 10s 
Range: 10 
Hits: 1
Requirement: Cast Cancel Lv: 5, Magic Rod Lv: 3, Dispell Lv: 3
Description: Deals M.DMG to the SP of single target, scaling with Max SP. 
If the damage exceeds the target's SP, the remaining damage is dealt to their HP.
The damage is based on the target's INT and Level against monsters. 
This skill has a 30% chance for the damage to be dealt back to the caster against players.
VCT scales with skill level.
[Lv. 1]: MATK 100%, MaxSP: 20%, VCT: 0,50s SP Cost: 30
[Lv. 2]: MATK 200%, MaxSP: 40%, VCT: 1.00s SP Cost: 35
[Lv. 3]: MATK 300%, MaxSP: 60%, VCT: 1.50s SP Cost: 40
[Lv. 4]: MATK 400%, MaxSP: 80%, VCT: 2.00s SP Cost: 45
[Lv. 5]: MATK 500%, MaxSP: 100%, VCT: 2.50s SP Cost: 50
Formula: 
SP Damage: (MaxSP x (Skill Lv x 20)) / 100
HP Damage: (Exceeded Damage x (Skill Lv x 100)) / 100 
SP Monsters: (3 + (INT / 10)) x Lv `,
  img: icon_pro_3_namespaceObject
}];

/*  author Chalykh Maksim 
# data 10.02.2025 
# email: chalyh.maksim.88@mail.ru */
//   {
//     id: "memorize",
//     level: 0,
//     dependencies: [],
//     dependent: [ ],
//     element: null,
//     skillName: "Memorize",
//     maxLevel: 1,
//     inform: `Max Lv: 1
// Skill Form: Active
// Type: Magical
// Target: Self
// Requirement: None
// Description: Charges for 0.5 sec to gain a stack that reduces After-cast delay, Variable cast time, and Fixed cast time by 50%. Max Stacks: 5`,
//     img: memorize,
//   },
//   {
//     id: "soulChange",
//     level: 0,
//     dependencies: [
//       { id: "magicRod", minLevel: 3 },
//       { id: "spellBreaker", minLevel: 2 },      
//     ],
//     dependent: [ ],
//     element: null,
//     skillName: "Soul Change",
//     maxLevel: 1,
//     inform: `Max Lv: 1
// Skill Form: Active
// Type: Misc
// Target: Enemy
// Range: 9
// Requirement: Magic Rod Lv: 3, Spell Breaker Lv: 2
// Description: Exchanges caster's remaining SP with target's remaining SP. The SP that the caster receives cannot exceed the caster's MaxSP limit.`,
//     img: soulChange,
//   },
//   {
//     id: "spiderWeb",
//     level: 0,
//     dependencies: [],
//     dependent: [ ],
//     element: null,
//     skillName: "Spider Web",
//     maxLevel: 1,
//     inform: `Max Lv: 1
// Skill Form: Active
// Type: Magical
// Target: Enemy
// Range: 7
// Requirement: None
// Description: Shoots a spider web that will bind and immobilize a target and decrease it's FLEE rate by half for 8 seconds. Fire, Earth, Wind and Water elemental attacks will cause 75% more damage on Fiber Locked targets and cancel the Fiber Locked status. A maximum of 5 Spider Webs can be shot at once. Catalyst: 1x Cobweb.`,
//     img: spiderWeb,
//   },
;// ./src/img/icon_mer/icon_mer_2.png
const icon_mer_2_namespaceObject = __webpack_require__.p + "5c31625ffc74f629216b.png";
;// ./src/img/icon_mer/icon_mer_3.png
const icon_mer_3_namespaceObject = __webpack_require__.p + "eb7d2368b12936f111a6.png";
;// ./src/img/icon_mer/icon_mer_4.gif
const icon_mer_4_namespaceObject = __webpack_require__.p + "7f9537eb4ac0c5b7e660.gif";
;// ./src/img/icon_mer/icon_mer_6.gif
const icon_mer_6_namespaceObject = __webpack_require__.p + "9add4a6b94f27dc8e73c.gif";
;// ./src/img/icon_mer/icon_mer_7.gif
const icon_mer_7_namespaceObject = __webpack_require__.p + "d923a440f9296aa85852.gif";
;// ./src/img/icon_mer/icon_mer_8.png
const icon_mer_8_namespaceObject = __webpack_require__.p + "b79c0b9cbf8c124c0b30.png";
;// ./src/img/icon_mer/icon_mer_13.png
const icon_mer_13_namespaceObject = __webpack_require__.p + "bedfd00add360f27360d.png";
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
  img: icon_mer_13_namespaceObject
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
  img: icon_mer_6_namespaceObject
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
  img: icon_mer_4_namespaceObject
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
  img: icon_mer_7_namespaceObject
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
  img: icon_mer_8_namespaceObject
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
  img: icon_mer_2_namespaceObject
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
  img: icon_mer_3_namespaceObject
}];
;// ./src/img/icon_alc/icon_alc_1.gif
const icon_alc_1_namespaceObject = __webpack_require__.p + "5834953985d21463d80e.gif";
;// ./src/img/icon_alc/icon_alc_2.gif
const icon_alc_2_namespaceObject = __webpack_require__.p + "1752fb7a95fb5448345c.gif";
;// ./src/img/icon_alc/icon_alc_3.gif
const icon_alc_3_namespaceObject = __webpack_require__.p + "48b543bd2997aabfa36a.gif";
;// ./src/img/icon_alc/icon_alc_4.gif
const icon_alc_4_namespaceObject = __webpack_require__.p + "f0eae0f46c7cb7360e2d.gif";
;// ./src/img/icon_alc/icon_alc_5.gif
const icon_alc_5_namespaceObject = __webpack_require__.p + "b1aefab5a05ba2fea729.gif";
;// ./src/img/icon_alc/icon_alc_6.gif
const icon_alc_6_namespaceObject = __webpack_require__.p + "ad4fa0bfa5c8368becc4.gif";
;// ./src/img/icon_alc/icon_alc_7.gif
const icon_alc_7_namespaceObject = __webpack_require__.p + "cdee991f1763faa41501.gif";
;// ./src/img/icon_alc/icon_alc_8.gif
const icon_alc_8_namespaceObject = __webpack_require__.p + "64f3a8102e5ae71e5b68.gif";
;// ./src/img/icon_alc/icon_alc_9.gif
const icon_alc_9_namespaceObject = __webpack_require__.p + "b669a15186c47fe9b9ee.gif";
;// ./src/img/icon_alc/icon_alc_10.gif
const icon_alc_10_namespaceObject = __webpack_require__.p + "a36919b91e0e0522f7ec.gif";
;// ./src/img/icon_alc/icon_alc_11.gif
const icon_alc_11_namespaceObject = __webpack_require__.p + "bbbd227be4d101ba4f7a.gif";
;// ./src/img/icon_alc/icon_alc_20.png
const icon_alc_20_namespaceObject = __webpack_require__.p + "70cb1d7599657b0f45ac.png";
;// ./src/img/icon_alc/icon_alc_21.png
const icon_alc_21_namespaceObject = __webpack_require__.p + "60ce57505148ffc4ee9a.png";
;// ./src/img/icon_alc/icon_alc_26.png
const icon_alc_26_namespaceObject = __webpack_require__.p + "3d4419a68178245dbce4.png";
;// ./src/img/icon_alc/icon_alc_27.png
const icon_alc_27_namespaceObject = __webpack_require__.p + "2bbe8cdf63df3e83cace.png";
;// ./src/img/icon_alc/icon_alc_24.png
const icon_alc_24_namespaceObject = __webpack_require__.p + "91cb09a6949631f9ce5d.png";
;// ./src/img/icon_alc/icon_alc_28.png
const icon_alc_28_namespaceObject = __webpack_require__.p + "52690c0f1491f6bf6f58.png";
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
  img: icon_alc_20_namespaceObject
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
  img: icon_alc_3_namespaceObject
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
  img: icon_alc_4_namespaceObject
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
  img: icon_alc_21_namespaceObject
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
  img: icon_alc_1_namespaceObject
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
  img: icon_alc_11_namespaceObject
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
  img: icon_alc_9_namespaceObject
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
  img: icon_alc_10_namespaceObject
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
  img: icon_alc_8_namespaceObject
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
  img: icon_alc_6_namespaceObject
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
  img: icon_alc_26_namespaceObject
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
  img: icon_alc_27_namespaceObject
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
  img: icon_alc_2_namespaceObject
},
//   {
//     id: "largeScalePharmacy",
//     level: 0,
//     dependencies: [
//       { id: "pharmacy", minLevel: 5 },
//     ],
//     dependent: [ ],
//     element: null,
//     skillName: "Large Scale Pharmacy",
//     maxLevel: 5,
//     inform: `Max Lv: 5
// Skill Form: Active
// Type: Misc
// Target: Self
// Requirement: Pharmacy Lv: 5
// Description: Brew a large batch of potions all at once, with each potions creation rate calculated individually. Requires a Large Scale Guide and 1 Cauldron in your inventory.
// [Lv 1]: Requires materials for 20 crafting attempts,
// [Lv 2]: Requires materials for 40 crafting attempts,
// [Lv 3]: Requires materials for 60 crafting attempts,
// [Lv 4]: Requires materials for 80 crafting attempts,
// [Lv 5]: Requires materials for 100 crafting attempts`,
//     img: largeScalePharmacy,
//   },
{
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
  img: icon_alc_7_namespaceObject
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
  img: icon_alc_5_namespaceObject
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
  img: icon_alc_28_namespaceObject
}];
;// ./src/img/icon_cre/icon_cre_1.gif
const icon_cre_1_namespaceObject = __webpack_require__.p + "7bd23f6bb17d718d3170.gif";
;// ./src/img/icon_cre/icon_cre_2.gif
const icon_cre_2_namespaceObject = __webpack_require__.p + "33fba584c3224f86332e.gif";
;// ./src/img/icon_cre/icon_cre_3.gif
const icon_cre_3_namespaceObject = __webpack_require__.p + "99798e1fb5d0c01cf525.gif";
;// ./src/img/icon_cre/icon_cre_6.png
const icon_cre_6_namespaceObject = __webpack_require__.p + "3200c22bd09fae433473.png";
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
  img: icon_cre_3_namespaceObject
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
  img: icon_cre_2_namespaceObject
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
  img: icon_cre_6_namespaceObject
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
  img: icon_cre_1_namespaceObject
}];
;// ./src/img/icon_bsm/icon_bsm_3.gif
const icon_bsm_3_namespaceObject = __webpack_require__.p + "0095892a5b718c0ac9bb.gif";
;// ./src/img/icon_bsm/icon_bsm_12.gif
const icon_bsm_12_namespaceObject = __webpack_require__.p + "45b9d94bf0d47a021088.gif";
;// ./src/img/icon_bsm/icon_bsm_14.gif
const icon_bsm_14_namespaceObject = __webpack_require__.p + "386553f0c756e5470f9e.gif";
;// ./src/img/icon_bsm/icon_bsm_15.gif
const icon_bsm_15_namespaceObject = __webpack_require__.p + "c2c832007fa614133369.gif";
;// ./src/img/icon_bsm/icon_bsm_16.gif
const icon_bsm_16_namespaceObject = __webpack_require__.p + "5e418133991398628511.gif";
;// ./src/img/icon_bsm/icon_bsm_17.gif
const icon_bsm_17_namespaceObject = __webpack_require__.p + "f894d176b350d0702a66.gif";
;// ./src/img/icon_bsm/icon_bsm_18.gif
const icon_bsm_18_namespaceObject = __webpack_require__.p + "a92a1bf2dc80f882a80f.gif";
;// ./src/img/icon_bsm/icon_bsm_19.gif
const icon_bsm_19_namespaceObject = __webpack_require__.p + "90f061529f9bf2c263b8.gif";
;// ./src/img/icon_bsm/icon_bsm_20.gif
const icon_bsm_20_namespaceObject = __webpack_require__.p + "c609cf5bd49315979297.gif";
;// ./src/img/icon_bsm/icon_bsm_21.gif
const icon_bsm_21_namespaceObject = __webpack_require__.p + "1667abb61991a55c215e.gif";
;// ./src/img/icon_wsm/icon_wsm_2.gif
const icon_wsm_2_namespaceObject = __webpack_require__.p + "b2f93677c429a64e1484.gif";
;// ./src/img/icon_bsm/icon_bsm_25.png
const icon_bsm_25_namespaceObject = __webpack_require__.p + "4754280d5ec8998b1ded.png";
;// ./src/img/icon_bsm/icon_bsm_26.png
const icon_bsm_26_namespaceObject = __webpack_require__.p + "876f2cae8228d7e7b678.png";
;// ./src/img/icon_bsm/icon_bsm_33.png
const icon_bsm_33_namespaceObject = __webpack_require__.p + "42107f8c40bfb2d331ec.png";
;// ./src/img/icon_bsm/icon_bsm_34.png
const icon_bsm_34_namespaceObject = __webpack_require__.p + "0baeddbcd3b58cff685d.png";
;// ./src/img/icon_bsm/icon_bsm_35.png
const icon_bsm_35_namespaceObject = __webpack_require__.p + "c23eeceb139ff1275c70.png";
;// ./src/img/icon_bsm/icon_bsm_36.png
const icon_bsm_36_namespaceObject = __webpack_require__.p + "f33da3e39d76408685fa.png";
;// ./src/img/icon_bsm/icon_bsm_37.png
const icon_bsm_37_namespaceObject = __webpack_require__.p + "7d8be812c832f8c7b33c.png";
;// ./src/img/icon_bsm/icon_bsm_38.png
const icon_bsm_38_namespaceObject = __webpack_require__.p + "baf1f0215bfd50307821.png";
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
  img: icon_bsm_17_namespaceObject
},
//   {
//     id: "metalTempering",
//     level: 0,
//     dependencies: [],
//     dependent: [
//       { id: "reforge" },
//     ],
//     element: null,
//     skillName: "Metal Tempering",
//     maxLevel: 10,
//     inform: `Max Lv: 5
// Skill Form: Active
// Type: Physical
// Target: Self
// Requirement: None
// Description: Become a master of metalworking by smelting Iron Ore into Iron, crafting Steel from it, and refining Rough Elunium and Rough Oridecon into Elunium and Oridecon. The success rate is determined by your Base Level and Job Level, reaching up to 100%. The amount produced receives an additional bonus based on all attributes, with DEX being the most influential. The relevance of attributes increases exponentially as they grow. The skill level affects the efficiency of the additional production. Regardless of the skill level, the additional production varies. Metal Tempering Guide ,
// [Lv 1]: No Additional Bonus,
// [Lv 2]: Additional Efficiency -75%,
// [Lv 3]: Additional Efficiency -50%,
// [Lv 4]: Additional Efficiency -25%,
// [Lv 5]: Full Efficiency`,
//     img: metalTempering,
//   },
//   {
//     id: "enchantedStoneCraft",
//     level: 0,
//     dependencies: [],
//     dependent: [
//       { id: "reforge" },
//     ],
//     element: null,
//     skillName: "Enchanted Stone Craft",
//     maxLevel: 5,
//     inform: `Max Lv: 5
// Skill Form: Active
// Type: Physical
// Target: Self
// Description: Enable to create [Elemental Stones] by using a Mini Furnace and 10 [Elemental Ores]. The success rate is determined by your Base Level and Job Level, reaching up to 100%. The amount produced receives an additional bonus based on all attributes, with LUK being the most influential. The relevance of attributes increases exponentially as they grow. The skill level affects the efficiency of the additional production. Regardless of the skill level, the additional production varies.
// [Lv 1]: No Additional Bonus,
// [Lv 2]: Additional Efficiency -75%,
// [Lv 3]: Additional Efficiency -50%,
// [Lv 4]: Additional Efficiency -25%,
// [Lv 5]: Full Efficiency`,
//     img: enchantedStoneCraft,
//   },
{
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
  img: icon_bsm_26_namespaceObject
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
  img: icon_bsm_38_namespaceObject
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
  img: icon_bsm_33_namespaceObject
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
  img: icon_bsm_34_namespaceObject
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
  img: icon_bsm_35_namespaceObject
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
  img: icon_bsm_37_namespaceObject
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
  img: icon_bsm_36_namespaceObject
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
  img: icon_bsm_15_namespaceObject
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
  img: icon_bsm_16_namespaceObject
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
  img: icon_bsm_18_namespaceObject
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
  img: icon_bsm_19_namespaceObject
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
  img: icon_bsm_20_namespaceObject
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
  img: icon_bsm_21_namespaceObject
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
  img: icon_bsm_12_namespaceObject
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
  img: icon_bsm_14_namespaceObject
}
//   {
//     id: "cartBoost",
//     level: 0,
//     dependencies: [
//       { id: "pushcart", minLevel: 5 },
//     ],
//     dependent: [
//       { id: "cartTermination" },
//     ],
//     element: null,
//     skillName: "Cart Boost",
//     maxLevel: 1,
//     inform: `Max Lv: 1
// Skill Form: Active
// Type: Physical
// Target: Self
// Requirement: Pushcart Lv: 5
// Description: Increase Move Speed for 30 Seconds when a Pushcart is equipped.`,
//     img: cartBoost,
//   },
];
;// ./src/img/icon_wsm/icon_wsm_1.gif
const icon_wsm_1_namespaceObject = __webpack_require__.p + "936c3104664cdaff8735.gif";
;// ./src/img/icon_wsm/icon_wsm_3.gif
const icon_wsm_3_namespaceObject = __webpack_require__.p + "df077a65309620e902bc.gif";
;// ./src/img/icon_wsm/icon_wsm_4.gif
const icon_wsm_4_namespaceObject = __webpack_require__.p + "df2fa774103c5b7d103a.gif";
;// ./src/img/icon_wsm/icon_wsm_5.gif
const icon_wsm_5_namespaceObject = __webpack_require__.p + "0da510f82bc4aa806188.gif";
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
  img: icon_wsm_4_namespaceObject
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
  img: icon_wsm_3_namespaceObject
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
  img: icon_wsm_5_namespaceObject
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
  img: icon_wsm_1_namespaceObject
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
;// ./src/img/icon_aco/icon_aco_16.png
const icon_aco_16_namespaceObject = __webpack_require__.p + "b2fad9e36c35339af40c.png";
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
  img: icon_aco_16_namespaceObject
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
;// ./src/img/icon_pri/icon_pri_19.png
const icon_pri_19_namespaceObject = __webpack_require__.p + "f27be86bdce64917e305.png";
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
  img: icon_pri_19_namespaceObject
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
;// ./src/img/icon_mon/icon_mon_1.gif
const icon_mon_1_namespaceObject = __webpack_require__.p + "9d39f2610f12c8ef9e34.gif";
;// ./src/img/icon_mon/icon_mon_24.png
const icon_mon_24_namespaceObject = __webpack_require__.p + "354351c3825762a396f3.png";
;// ./src/img/icon_mon/icon_mon_3.gif
const icon_mon_3_namespaceObject = __webpack_require__.p + "a24c726a3d091f00831e.gif";
;// ./src/img/icon_mon/icon_mon_4.gif
const icon_mon_4_namespaceObject = __webpack_require__.p + "f4dd3c930f69be3add5e.gif";
;// ./src/img/icon_mon/icon_mon_5.gif
const icon_mon_5_namespaceObject = __webpack_require__.p + "58921620e47c50f567d3.gif";
;// ./src/img/icon_mon/icon_mon_6.gif
const icon_mon_6_namespaceObject = __webpack_require__.p + "c265b69c3bdc0872986f.gif";
;// ./src/img/icon_mon/icon_mon_8.gif
const icon_mon_8_namespaceObject = __webpack_require__.p + "c58464e27eed15735e63.gif";
;// ./src/img/icon_mon/icon_mon_9.gif
const icon_mon_9_namespaceObject = __webpack_require__.p + "cb32c24434a390fb41fa.gif";
;// ./src/img/icon_mon/icon_mon_10.gif
const icon_mon_10_namespaceObject = __webpack_require__.p + "ca45fcb26e76d00141fe.gif";
;// ./src/img/icon_mon/icon_mon_11.gif
const icon_mon_11_namespaceObject = __webpack_require__.p + "57f8cec7934321ad6b09.gif";
;// ./src/img/icon_mon/icon_mon_13.gif
const icon_mon_13_namespaceObject = __webpack_require__.p + "b97f6c1a013e368edf31.gif";
;// ./src/img/icon_mon/icon_mon_14.gif
const icon_mon_14_namespaceObject = __webpack_require__.p + "3e06911313bf878e496c.gif";
;// ./src/img/icon_mon/icon_mon_15.gif
const icon_mon_15_namespaceObject = __webpack_require__.p + "67d2b6ad816fb0dcd939.gif";
;// ./src/img/icon_mon/icon_mon_21.png
const icon_mon_21_namespaceObject = __webpack_require__.p + "7d51842de785cb630891.png";
;// ./src/img/icon_mon/icon_mon_22.png
const icon_mon_22_namespaceObject = __webpack_require__.p + "87e2683edd7d484e0fb9.png";
;// ./src/img/icon_mon/icon_mon_23.png
const icon_mon_23_namespaceObject = __webpack_require__.p + "2bd2d3b0ebbfab4dd993.png";
;// ./src/img/icon_mon/icon_mon_25.png
const icon_mon_25_namespaceObject = __webpack_require__.p + "97b250c777a888faa384.png";
;// ./src/img/icon_mon/icon_mon_20.png
const icon_mon_20_namespaceObject = __webpack_require__.p + "0560c61b78620259d65d.png";
;// ./src/img/icon_mon/icon_mon_26.png
const icon_mon_26_namespaceObject = __webpack_require__.p + "71160edd5467f14d7c51.png";
;// ./src/img/icon_mon/icon_mon_27.png
const icon_mon_27_namespaceObject = __webpack_require__.p + "fef62be554e0112b84a5.png";
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
  img: icon_mon_4_namespaceObject
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
  img: icon_mon_13_namespaceObject
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
  img: icon_mon_6_namespaceObject
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
  }
  // { id: "tripleAttack" },
  ],
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
  img: icon_mon_3_namespaceObject
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
  img: icon_mon_10_namespaceObject
},
//   {
//     id: "chainCombo",
//     level: 0,
//     dependencies: [
//       { id: "tripleAttack", minLevel: 5 },
//     ],
//     dependent: [
//       { id: "comboFinish" },
//     ],
//     element: null,
//     skillName: "Chain Combo",
//     maxLevel: 5,
//     inform: `Max Lv: 5
// Skill Form: Active
// Type: Physical
// Target: Self
// Range: 2
// Requirement: Triple Attack Lv: 5
// Description: Chain Combo is a powerful melee attack that can be used after Raging Trifecta Blow, delivering a devastating follow-up strike. Attack power increases further if the user is a Champion, based on their Base Level. When wielding a Knuckle-class weapon, deals additional damage and reduces cast delay. In Furious Spirits state, Adds twice your CRIT as TRUE DAMAGE to skill hits. In Calm Spirits state, adds your Soft Defense and half of Hard Defense as Physical Damage and become 5x5 AoE.
// [Lv 1]: Atk 350%, SP Cost: 7,
// [Lv 2]: Atk 450%, SP Cost: 9,
// [Lv 3]: Atk 500%, SP Cost: 11,
// [Lv 4]: Atk 650%, SP Cost: 13,
// [Lv 5]: Atk 700%, SP Cost: 15`,
//     img: chainCombo,
//   },
//   {
//     id: "comboFinish",
//     level: 0,
//     dependencies: [
//       { id: "chainCombo", minLevel: 3 },
//     ],
//     dependent: [
//       { id: "tigerFist" },
//       { id: "chainCrushCombo" },      
//     ],
//     element: null,
//     skillName: "Combo Finish",
//     maxLevel: 5,
//     inform: `Max Lv: 5
// Skill Form: Active
// Type: Physical
// Target: Self
// Range: 2
// Requirement: Chain Combo Lv: 3
// Description: Combo Finish delivers a powerful melee strike that can be used after Chain Combo, dealing substantial damage that scales with the user's STR. Attack power increases further if the user is a Champion, based on their Base Level. When wielding a Knuckle-class weapon, deals additional damage and reduces cast delay. In Furious Spirits state, Adds twice your CRIT as TRUE DAMAGE to skill hits. In Calm Spirits state, adds your Soft Defense and half of Hard Defense as Physical Damage and become 7x7 AoE. Each cast requires 1 Spirit Sphere.
// [Lv 1]: Atk 600% + STR%, SP Cost: 8,
// [Lv 2]: Atk 750% + STR%, SP Cost: 8,
// [Lv 3]: Atk 900% + STR%, SP Cost: 8,
// [Lv 4]: Atk 1050% + STR%, SP Cost: 8,
// [Lv 5]: Atk 1200% + STR%, SP Cost: 8`,
//     img: comboFinish,
//   },
{
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
  img: icon_mon_21_namespaceObject
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
  img: icon_mon_22_namespaceObject
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
  img: icon_mon_23_namespaceObject
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
  dependent: [
    // { id: "tripleAttack" },
  ],
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
  img: icon_mon_1_namespaceObject
},
//   {
//     id: "occultImpaction",
//     level: 0,
//     dependencies: [
//       { id: "pacify", minLevel: 1 },      
//     ],
//     dependent: [
//       { id: "throwSpiritSphere" },
//     ],
//     element: null,
//     skillName: "Occult Impaction",
//     maxLevel: 5,
//     inform: `Max Lv: 5
// Skill Form: Active
// Type: Physical
// Target: Enemy
// Range: 6
// Requirement: Pacify Lv: 1
// Description: Strike with a force that scales with the targets DEF. Damage is always Neutral. In Furious Spirits state, increases range to 6 cells. In Calm Spirits state, adds your Hard DEF as True Damage at the damage. Each cast requires 1 Spirit Sphere.
// [Lv 1]: Atk [Target DEF/2 x 1]%, SP Consumption: 11,
// [Lv 2]: Atk [Target DEF/2 x 2]%, SP Consumption: 12,
// [Lv 3]: Atk [Target DEF/2 x 3]%, SP Consumption: 13,
// [Lv 4]: Atk [Target DEF/2 x 4]%, SP Consumption: 14,
// [Lv 5]: Atk [Target DEF/2 x 5]%, SP Consumption: 15`,
//     img: occultImpaction,
//   },
{
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
  img: icon_mon_11_namespaceObject
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
  img: icon_mon_24_namespaceObject
}, {
  id: "throwSpiritSphere",
  level: 0,
  dependencies: [
  // { id: "occultImpaction", minLevel: 3 },
  {
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
  img: icon_mon_9_namespaceObject
},
//   {
//     id: "tripleAttack",
//     level: 0,
//     dependencies: [
//       { id: "callSpiritSphere", minLevel: 5 },
//       { id: "ironHand", minLevel: 3 },
//     ],
//     dependent: [
//       { id: "tigerFist" },
//       { id: "chainCrushCombo" },
//       { id: "chainCombo" },
//     ],
//     element: null,
//     skillName: "Triple Attack",
//     maxLevel: 10,
//     inform: `Max Lv: 10
// Skill Form: Active
// Type: Physical
// Target: Self
// Range: 1
// Requirement: Call Spirit Sphere Lv: 5, Iron Hand Lv: 3 
// Description: Triple Attack provides a chance to automatically unleash a triple strike during battle or can be manually activated. When activated manually, it costs SP. In Furious Spirits state, Adds twice your CRIT as TRUE DAMAGE to skill hits. In Calm Spirits state, adds your Soft Defense and half of Hard Defense as Physical Damage and become 3x3 AoE. Chance to automatically activate on normal attacks is 30%. Triple Attack can be used after any combo to reset the combo chain.
// [Lv 1]: 120% Atk, Manual Activation SP Cost: 3,
// [Lv 2]: 140% Atk, Manual Activation SP Cost: 4,
// [Lv 3]: 160% Atk, Manual Activation SP Cost: 5,
// [Lv 4]: 180% Atk, Manual Activation SP Cost: 6,
// [Lv 5]: 200% Atk, Manual Activation SP Cost: 7,
// [Lv 6]: 220% Atk, Manual Activation SP Cost: 8,
// [Lv 7]: 240% Atk, Manual Activation SP Cost: 9,
// [Lv 8]: 260% Atk, Manual Activation SP Cost: 10,
// [Lv 9]: 280% Atk, Manual Activation SP Cost: 11,
// [Lv 10]: 300% Atk, Manual Activation SP Cost: 12`,
//     img: tripleAttack,
//   },
{
  id: "lotusPu",
  level: 0,
  dependencies: [
    // { id: "tripleAttack", minLevel: 8 },
  ],
  dependent: [],
  element: null,
  skillName: "Lotus Pu...",
  maxLevel: 10,
  inform: `...
`,
  img: icon_mon_25_namespaceObject
}, {
  id: "chainFi",
  level: 0,
  dependencies: [
    // { id: "tripleAttack", minLevel: 8 },
  ],
  dependent: [],
  element: null,
  skillName: "Chain Fi...",
  maxLevel: 10,
  inform: `...
`,
  img: icon_mon_20_namespaceObject
}, {
  id: "flightF",
  level: 0,
  dependencies: [
    // { id: "tripleAttack", minLevel: 8 },
  ],
  dependent: [],
  element: null,
  skillName: "Flight F...",
  maxLevel: 10,
  inform: `...
`,
  img: icon_mon_26_namespaceObject
}, {
  id: "fallenF",
  level: 0,
  dependencies: [
    // { id: "tripleAttack", minLevel: 8 },
  ],
  dependent: [],
  element: null,
  skillName: "Fallen F...",
  maxLevel: 10,
  inform: `...
`,
  img: icon_mon_27_namespaceObject
}];

/*  author Chalykh Maksim 
  # data 10.02.2025 
  # email: chalyh.maksim.88@mail.ru */
;// ./src/img/icon_hpr/icon_hpr_1.png
const icon_hpr_1_namespaceObject = __webpack_require__.p + "c5e658de35d7005d0306.png";
;// ./src/img/icon_hpr/icon_hpr_3.png
const icon_hpr_3_namespaceObject = __webpack_require__.p + "ddc387ad583e22bfb942.png";
;// ./src/img/icon_hpr/icon_hpr_5.png
const icon_hpr_5_namespaceObject = __webpack_require__.p + "1789cf3241bc11187b43.png";
;// ./src/img/icon_hpr/icon_hpr_6.png
const icon_hpr_6_namespaceObject = __webpack_require__.p + "59f5fd750b59d9c6b39e.png";
;// ./src/js/listSkills/AcolyteHighPriest.js
/*  author Chalykh Maksim 
  # data 10.02.2025 
  # email: chalyh.maksim.88@mail.ru */

 // заглушка


// import manaRecharge from '../../img/icon_hpr/icon_hpr_4.png'; 
// import basilica from '../../img/icon_hpr/icon_hpr_2.png'; 



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
},
//   {
//     id: "basilica",
//     level: 0,
//     dependencies: [
//       { id: "demonBane", minLevel: 3 },
//       { id: "divineProtection", minLevel: 3 },
//       { id: "sanctuary", minLevel: 1 },
//     ],
//     dependent: [],
//     element: null,
//     skillName: "Basilica",
//     maxLevel: 5,
//     inform: `Max Lv: 5
// Skill Form: Active
// Type: Magical
// Target: Self
// Range: 4
// Requirement: Demon Bane Lv: 3, Divine Protection Lv: 3, Sanctuary Lv: 1
// Description: Creates a sacred basilica in a [5x5] area around the user, sharing the benefits of Demon Bane and Divine Protection with allies within the basilica. Allies who already possess these skills will have their effects increased by 50%. For the user, activates the effects of Demon Bane and Divine Protection every 3 seconds. Catalyst: 3x Holy Water.
// [Lv 1]: SP Cost: 60, Duration: 20,
// [Lv 2]: SP Cost: 70, Duration: 30,
// [Lv 3]: SP Cost: 80, Duration: 40,
// [Lv 4]: SP Cost: 90, Duration: 50,
// [Lv 5]: SP Cost: 100, Duration: 60`,
//     img: basilica,
//   },
//   {
//     id: "manaRecharge",
//     level: 0,
//     dependencies: [
//       { id: "maceMastery", minLevel: 10 }, 
//       { id: "demonBane", minLevel: 10 },       
//     ],
//     dependent: [],
//     element: null,
//     skillName: "Mana Recharge",
//     maxLevel: 5,
//     inform: `Max Lv: 5
// Skill Form: Passive
// Type: Misc
// Requirement: Mace Mastery Lv: 10, Demon Bane Lv: 10
// Description: Reduces the amount of SP, that is consumed when using skills.
// [Lv 1]: -4% SP Consumption,
// [Lv 2]: -8% SP Consumption,
// [Lv 3]: -12% SP Consumption,
// [Lv 4]: -16% SP Consumption,
// [Lv 5]: -20% SP Consumption`,
//     img: manaRecharge,
//   },
{
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
}, {
  id: "penitent",
  level: 0,
  dependencies: [
    // { id: "impositioManus", minLevel: 3 },
    // { id: "increaseSPRecovery", minLevel: 3 },
    // { id: "lexDivina", minLevel: 3 },
  ],
  dependent: [],
  element: null,
  skillName: "Penitent...",
  maxLevel: 10,
  inform: `...
`,
  img: icon_hpr_5_namespaceObject
}, {
  id: "exsuffla",
  level: 0,
  dependencies: [
    // { id: "impositioManus", minLevel: 3 },
    // { id: "increaseSPRecovery", minLevel: 3 },
    // { id: "lexDivina", minLevel: 3 },
  ],
  dependent: [],
  element: null,
  skillName: "Exsuffla...",
  maxLevel: 10,
  inform: `...
`,
  img: icon_hpr_6_namespaceObject
}];

/*  author Chalykh Maksim 
  # data 10.02.2025 
  # email: chalyh.maksim.88@mail.ru */
;// ./src/img/icon_chp/icon_chp_1.gif
const icon_chp_1_namespaceObject = __webpack_require__.p + "08672925f8e1f6903970.gif";
;// ./src/img/icon_chp/icon_chp_4.gif
const icon_chp_4_namespaceObject = __webpack_require__.p + "7389a1deb862e7fce9f6.gif";
;// ./src/img/icon_chp/icon_chp_5.png
const icon_chp_5_namespaceObject = __webpack_require__.p + "495c6937b7490c11c70a.png";
;// ./src/img/icon_chp/icon_chp_6.png
const icon_chp_6_namespaceObject = __webpack_require__.p + "e194be8362583d10bbfb.png";
;// ./src/js/listSkills/AcolyteChampion.js
/*  author Chalykh Maksim 
  # data 10.02.2025 
  # email: chalyh.maksim.88@mail.ru */

 // заглушка

// import tigerFist from '../../img/icon_chp/icon_chp_2.gif'; 
// import chainCrushCombo from '../../img/icon_chp/icon_chp_3.gif'; 




// список скилов Champion
const skillsChampion = [
//   {
//     id: "chainCrushCombo",
//     level: 0,
//     dependencies: [
//       { id: "tripleAttack", minLevel: 8 },
//       { id: "comboFinish", minLevel: 4 },
//     ],
//     dependent: [],
//     element: null,
//     skillName: "Chain Crush Combo",
//     maxLevel: 5,
//     inform: `Max Lv: 5
// Skill Form: Active
// Type: Physical
// Target: Self
// Range: 2
// Requirement: Triple Attack Lv: 8, Combo Finish Lv: 4
// Description: Chain Crush Combo is a devastating melee attack that can be used after Combo Finish, delivering a series of rapid crushing blows. Attack power increases further based on their Base Level. When wielding a Knuckle-class weapon, deals additional damage and reduces cast delay. In Furious Spirits state, Adds twice your CRIT as TRUE DAMAGE to skill hits. In Calm Spirits state, adds your Soft Defense and half of Hard Defense as Physical Damage and become 9x9 AoE. Each cast requires 2 Spirit Sphere.
// [Lv 1]: Atk 400%, SP Cost: 16,
// [Lv 2]: Atk 800%, SP Cost: 22,
// [Lv 3]: Atk 1200%, SP Cost: 28,
// [Lv 4]: Atk 1600%, SP Cost: 34,
// [Lv 5]: Atk 2000%, SP Cost: 40`,
//     img: chainCrushCombo, 
//   },
{
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
  img: icon_chp_1_namespaceObject
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
  img: icon_chp_4_namespaceObject
},
//   {
//     id: "tigerFist",
//     level: 0,
//     dependencies: [
//       { id: "tripleAttack", minLevel: 8 },
//       { id: "comboFinish", minLevel: 4 },
//     ],
//     dependent: [],
//     element: null,
//     skillName: "Tiger Fist",
//     maxLevel: 5,
//     inform: `Max Lv: 5
// Skill Form: Active
// Type: Physical
// Target: Self
// Range: 2
// Requirement: Triple Attack Lv: 8, Combo Finish Lv: 4
// Description: Tiger Fist is a powerful area-of-effect strike that can be used after Combo Finish, delivering a devastating blow within a 5x5 area and has a high chance of immobilizing enemies. Attack power increases further based on their Base Level. When wielding a Knuckle-class weapon, deals additional damage and reduces cast delay. In Furious Spirits state, Adds twice your CRIT as TRUE DAMAGE to skill hits. In Calm Spirits state, adds your Soft Defense and half of Hard Defense as Physical Damage and become 9x9. Each cast requires 2 Spirit Sphere.
// [Lv 1]: Atk 350%, SP Cost: 9,
// [Lv 2]: Atk 500%, SP Cost: 13,
// [Lv 3]: Atk 650%, SP Cost: 17,
// [Lv 4]: Atk 800%, SP Cost: 21,
// [Lv 5]: Atk 950%, SP Cost: 25`,
//     img: tigerFist,
//   },
{
  id: "phoenix",
  level: 0,
  dependencies: [
    // { id: "tripleAttack", minLevel: 8 },
    // { id: "comboFinish", minLevel: 4 },
  ],
  dependent: [],
  element: null,
  skillName: "Phoenix'...",
  maxLevel: 10,
  inform: `...
`,
  img: icon_chp_5_namespaceObject
}, {
  id: "dragons",
  level: 0,
  dependencies: [
    // { id: "tripleAttack", minLevel: 8 },
    // { id: "comboFinish", minLevel: 4 },
  ],
  dependent: [],
  element: null,
  skillName: "Dragon's...",
  maxLevel: 10,
  inform: `...
`,
  img: icon_chp_6_namespaceObject
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
Weapon: One-Handed Sword
Requirement: None
Description: Increases E.ATK while wielding a One-Handed Sword. Knights, Crusaders and Rogues gain extra E.ATK. At max level, also grants +6% ACC.
[Lv. 1]: E.ATK +2
[Lv. 2]: E.ATK +4
[Lv. 3]: E.ATK +6
[Lv. 4]: E.ATK +8
[Lv. 5]: E.ATK +10
[Lv. 6]: E.ATK +12
[Lv. 7]: E.ATK +14
[Lv. 8]: E.ATK +16 
[Lv. 9]: E.ATK +18 
[Lv.10]: E.ATK +20
E.ATK Bonus: Skill Lv x 1 `,
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
Skill Form: Passive
Weapon: One-Handed Spear
Requirement: None
Description: Increases E.ATK while wielding a One-Handed Spear. Knights and Crusaders gain extra E.ATK. At max level, also grants +6% ACC.
[Lv. 1]: E.ATK +2
[Lv. 2]: E.ATK +4
[Lv. 3]: E.ATK +6
[Lv. 4]: E.ATK +8
[Lv. 5]: E.ATK +10
[Lv. 6]: E.ATK +12
[Lv. 7]: E.ATK +14
[Lv. 8]: E.ATK +16 
[Lv. 9]: E.ATK +18 
[Lv.10]: E.ATK +20
E.ATK Bonus: Skill Lv x 1 `,
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
;// ./src/img/icon_cru/icon_cru_7.gif
const icon_cru_7_namespaceObject = __webpack_require__.p + "3a0dd3ea5c1cc28c3db6.gif";
;// ./src/img/icon_cru/icon_cru_9.gif
const icon_cru_9_namespaceObject = __webpack_require__.p + "e963b1c0819d82ee486e.gif";
;// ./src/img/icon_cru/icon_cru_10.gif
const icon_cru_10_namespaceObject = __webpack_require__.p + "9ee2909753856c9ddf46.gif";
;// ./src/img/icon_cru/icon_cru_11.gif
const icon_cru_11_namespaceObject = __webpack_require__.p + "57605fe8c7e7ece5eb6c.gif";
;// ./src/img/icon_cru/icon_cru_12.gif
const icon_cru_12_namespaceObject = __webpack_require__.p + "8a07e548dbd87ff71482.gif";
;// ./src/img/icon_cru/icon_cru_13.gif
const icon_cru_13_namespaceObject = __webpack_require__.p + "13798e9199a8808fa433.gif";
;// ./src/img/icon_cru/icon_cru_14.gif
const icon_cru_14_namespaceObject = __webpack_require__.p + "fedda96e3293f4b31331.gif";
;// ./src/img/icon_cru/icon_cru_15.gif
const icon_cru_15_namespaceObject = __webpack_require__.p + "1fe3632de0d42a6ce9a7.gif";
;// ./src/img/icon_cru/icon_cru_17.gif
const icon_cru_17_namespaceObject = __webpack_require__.p + "a6e6c89ee7f7692c3947.gif";
;// ./src/img/icon_cru/icon_cru_18.gif
const icon_cru_18_namespaceObject = __webpack_require__.p + "09abbab0231d46d3f685.gif";
;// ./src/img/icon_knt/icon_knt_14.png
const icon_knt_14_namespaceObject = __webpack_require__.p + "e0d1b218c82d0b0b4d1b.png";
;// ./src/img/icon_cru/icon_cru_22.png
const icon_cru_22_namespaceObject = __webpack_require__.p + "5394ac2a9ee79687e179.png";
;// ./src/img/icon_cru/icon_cru_23.png
const icon_cru_23_namespaceObject = __webpack_require__.p + "f7a778a1943824e05720.png";
;// ./src/img/icon_cru/icon_cru_24.png
const icon_cru_24_namespaceObject = __webpack_require__.p + "79a017c48d26c8b06f83.png";
;// ./src/img/icon_cru/icon_cru_25.png
const icon_cru_25_namespaceObject = __webpack_require__.p + "3b013ed4bf331c664fbc.png";
;// ./src/js/listSkills/SwordmanCrusader.js
/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */

 // заглушка
// import heal from '../../img/icon_cru/icon_cru_3.gif'; //вроде как убран из игры

// import faith from '../../img/icon_cru/icon_cru_8.gif';







// import martyrsHeal from '../../img/icon_cru/icon_cru_16.gif'; 


// import swordQuicken from '../../img/icon_cru/icon_cru_20.png'; 
// import twoHandedSpearMastery from '../../img/icon_cru/icon_cru_21.png'; 






// список скилов Crusader
const skillsCrusader = [{
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
  img: icon_cru_22_namespaceObject
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
  img: icon_cru_18_namespaceObject
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
  img: icon_knt_14_namespaceObject
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
  img: icon_cru_7_namespaceObject
}, {
  id: "faith",
  level: 0,
  dependencies: [],
  dependent: [{
    id: "defender"
  },
  // { id: "heal" },
  {
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
  img: icon_cru_23_namespaceObject
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
  img: icon_cru_13_namespaceObject
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
  img: icon_cru_14_namespaceObject
},
//   {
//     id: "heal",
//     level: 0,
//     dependencies: [
//       { id: "faith", minLevel: 7 },      
//     ],
//     dependent: [
//       { id: "devotion" },
//     ],
//     element: null,
//     skillName: "Heal",
//     maxLevel: 10,
//     inform: `Max Lv: 10
// Skill Form: Active
// Type: Magical
// Target: Ally
// Range: 9
// Requirement: Faith Lv: 7
// Description: Restores HP of a single target. This skill is affected by Base Level, INT and MAtk. Versus Corrupt property targets, inflicts Holy property damage equal 75% the amount of the HP restored.
// [Lv 1]: SP Cost: 13,
// [Lv 2]: SP Cost: 16,
// [Lv 3]: SP Cost: 19,
// [Lv 4]: SP Cost: 22,
// [Lv 5]: SP Cost: 25,
// [Lv 6]: SP Cost: 28,
// [Lv 7]: SP Cost: 31,
// [Lv 8]: SP Cost: 34,
// [Lv 9]: SP Cost: 37,
// [Lv 10]: SP Cost: 40`,
//     img: heal,
//   },
{
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
  img: icon_cru_9_namespaceObject
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
  img: icon_cru_17_namespaceObject
}, {
  id: "devotion",
  level: 0,
  dependencies: [
  // { id: "heal", minLevel: 5 },
  {
    id: "guard",
    minLevel: 3
  }],
  dependent: [
    // { id: "martyrsHeal" },
  ],
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
  img: icon_cru_15_namespaceObject
},
//   {
//     id: "martyrsHeal",
//     level: 0,
//     dependencies: [
//       { id: "devotion", minLevel: 1 },
//     ],
//     dependent: [
//       { id: "gospel" },
//     ],
//     element: null,
//     skillName: "Martyr's Heal",
//     maxLevel: 10,
//     inform: `Max Lv: 10
// Skill Form: Active
// Type: Magical
// Target: Self
// Range: 9
// Requirement: Devotion Lv: 1
// Description: Center a divine cross on yourself, sacrificing HP and SP to heal allies around you over time. The cross moves with you and doesn't prevent the use of any attacks or skills. The healing is based on your learned Heal skill and your maximum HP. Allies under the effect of Devotion receive the healing even outside the area of effect. The user is not healed and has their movement speed reduced by 30%. This skill can be switched on and off.
// [Lv 1]: Heal every 10 seconds, Drain 19 SP and 1% HP every 10 seconds,
// [Lv 2]: Heal every 9 seconds, Drain 23 SP and 1% HP every 9 seconds,
// [Lv 3]: Heal every 8 seconds, Drain 27 SP and 1% HP every 8 seconds,
// [Lv 4]: Heal every 7 seconds, Drain 31 SP and 1% HP every 7 seconds,
// [Lv 5]: Heal every 6 seconds, Drain 35 SP and 1% HP every 6 seconds,
// [Lv 6]: Heal every 5 seconds, Drain 39 SP and 1% HP every 5 seconds,
// [Lv 7]: Heal every 4 seconds, Drain 43 SP and 1% HP every 4 seconds,
// [Lv 8]: Heal every 3 seconds, Drain 47 SP and 1% HP every 3 seconds,
// [Lv 9]: Heal every 2 seconds, Drain 51 SP and 1% HP every 2 seconds,
// [Lv 10]: Heal every 1 seconds, Drain 55 SP and 1% HP every 1 seconds`,
//     img: martyrsHeal,
//   },
{
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
  img: icon_cru_12_namespaceObject
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
  img: icon_cru_10_namespaceObject
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
  img: icon_cru_11_namespaceObject
}, {
  id: "layonh",
  level: 0,
  dependencies: [
    // { id: "shieldCharge", minLevel: 3 },
  ],
  dependent: [
    // { id: "shieldChain" },
  ],
  element: null,
  skillName: "Lay On H...",
  maxLevel: 10,
  inform: `....
    `,
  img: icon_cru_24_namespaceObject
}, {
  id: "graceof",
  level: 0,
  dependencies: [
    // { id: "shieldCharge", minLevel: 3 },
  ],
  dependent: [
    // { id: "shieldChain" },
  ],
  element: null,
  skillName: "Grace of...",
  maxLevel: 10,
  inform: `...
    `,
  img: icon_cru_25_namespaceObject
}];

/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */
;// ./src/img/icon_pld/icon_pld_1.gif
const icon_pld_1_namespaceObject = __webpack_require__.p + "d93f2d0ab2c6838a58be.gif";
;// ./src/img/icon_pld/icon_pld_2.gif
const icon_pld_2_namespaceObject = __webpack_require__.p + "f0af5ecf9e6d2dde7bf8.gif";
;// ./src/img/icon_pld/icon_pld_3.gif
const icon_pld_3_namespaceObject = __webpack_require__.p + "cebca857600a4a9a64c5.gif";
;// ./src/img/icon_pld/icon_pld_4.gif
const icon_pld_4_namespaceObject = __webpack_require__.p + "68f512f73656b9fa423c.gif";
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
Element: Holy
Variable Cast Time: 1.40s
Fixed Cast Time: 0.60s
After Cast Delay: A.Delay 0.40s
Cooldown: 1s
Range: 9 
Hits: 3
Requirement: Grand Cross Lv: 5
Description: Deals P.DMG or M.DMG to the target based on Weapon type, scaling with STR and INT.
Reduces target's Holy property resistance by 20% for 5s.
Drains SP when used against Shadow and Corrupt monsters.
[Lv. 1]: ATK/MATK 350%, SP Cost: 20 
[Lv. 2]: ATK/MATK 600%, SP Cost: 25 
[Lv. 3]: ATK/MATK 850%, SP Cost: 30 
[Lv. 4]: ATK/MATK 1100%, SP Cost: 35 
[Lv. 5]: ATK/MATK 1350%, SP Cost: 40
Formula: ATK (%): 100 + (250 x Skill Lv) + (STR + (INT / 2) x 3)
MATK (%) 100 + (250 x Skill Lv) + (INT+ (STR / 2) x 3)
Drained SP: (T.Max SP x. (5 x Skill Lv)) = 100 `,
  img: icon_pld_1_namespaceObject
}, {
  id: "gospel",
  level: 0,
  dependencies: [],
  dependent: [],
  element: null,
  skillName: "Gospel",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Misc
Target: Self
After Cast Delay: 0.30s
Cooldown: 30s
HP Cost: 5%

Requirement: Martyr's Heal Lv: 4
Description: Activates a 5x5 AoE aura, with effects based on selected skill level. Drains HP and SP every 10s while active.
Allies under the effects of Devotion also emit the aura.
Only affects allies within a 10 Base Level range.
Thorns Aura: +20% Thorns and a bonus amount based on the caster's Base Level. Prestige Aura: +10% NSE Resistance and a bonus to all Stats based on the caster's base Stats and Base Level.
Protection Aura: +10% Max HP and a bonus of H.DEF based on the caster's H.DEF.
Salvation: +10 H.MDEF and a bonus resistance. to Fire, Water, Wind, and Earth based on the caster's base INT.
Inspiration Aura: +50 B.ATK and B.MATK and a bonus of Holy P.DMG and M.DMG based on the caster's Base Level.
[Lv. 1]: Thorns Aura. SP Cost: 19 
[Lv. 2]: Prestige Aura. SP Cost: 23
[Lv. 3]: Protection Aura. SP Cost: 27 
[Lv. 4]: Salvation Aura. SP Cost: 31 
[Lv. 5]: Inspiration Aura. SP Cost: 35

Drained SP: 15+ (4 x Gospel Lv)
Drained HP: 5% of MaxHP
Thorns: (Base Lv 40) x Gospel Lv
All Stats: ((((STR. + AGI + VIT + INT + DEX + LUK) + 6)^2) + (300 - Base Lv)) + Gospel Lv 
H.DEF: HIDEF (8 - Gospel Lv)
Property Resistance % 5 + (INT (15 Gospel Lv))
Holy Damage %: 5 + (Base Lv / 10) `,
  img: icon_pld_3_namespaceObject
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
Skill Form: Toggle 
Type: Supportive 
Target: Self
After Cast Delay: 0.30s
Cooldown: A.Delay
Requirement: Faith Lv: 10, Moving HP Recovery Lv: 1
Description: While active, drains HP on each attack or skill, increasing DMG by double the amount of drained HP. This bonus damage cannot miss.
[Lv. 1]: Drained HP: 1% of MaxHP 
[Lv. 2]: Drained HP: 2% of MaxHP
[Lv. 3]: Drained HP: 3% of MaxHP 
[Lv. 4]: Drained HP: 4% of MaxHP 
[Lv. 5]: Drained HP: 5% of MaxHP
Damage Bonus: ((0.01 x Skill Level) x Max HP) x 2 `,
  img: icon_pld_2_namespaceObject
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
Element: Elementless
After Cast Delay: A.Delay 0.40s
Fixed Cast Time: 0.60s
Cooldown: 1s
Range: 10
Hits: 5
SP Cost: 30
Requirement: Shield Boomerang Lv: 5
Description: Deals ranged P.DMG to the target, scaling with shield stats and the learned level of Shield Boomerang. Adds T.ATK based on shield stats if the target was Immobilized in the last 3s. VCT scales with skill level. 
Requires a shield.
[Lv. 1]: ATK 100% x Hits. VCT: 0.33s 
[Lv. 2]: ATK 100% x Hits. VCT: 0.36s 
[Lv. 3]: ATK 100% x Hits. VCT: 0.39s 
[Lv. 4]: ATK 100% x Hits. VCT: 0.42s 
[Lv. 5]: ATK 100% x Hits. VCT: 0.45s 
[Lv. 6]: ATK 100% x Hits. VCT: 0.48s 
[Lv. 7]: ATK 100% x Hits. VCT: 0.51s 
[Lv. 8]: ATK 100% x Hits. VCT: 0.54s 
[Lv. 9]: ATK 100% x Hits. VCT: 0.57s 
[Lv.10]: ATK 100% x Hits. VCT: 0.60s
ATK (%); 100 + (((S/weight + S.Defense+ (S.Refine^2)) / (20 - Shield Boomerang Lv)) x Skill Lv) x Hits 
T.ATK: S.Weight + S.Defense + (SRefine^2) `,
  img: icon_pld_4_namespaceObject
}];

/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */
;// ./src/img/icon_knt/icon_knt_1.gif
const icon_knt_1_namespaceObject = __webpack_require__.p + "eda9d596d7055baa06f3.gif";
;// ./src/img/icon_knt/icon_knt_2.gif
const icon_knt_2_namespaceObject = __webpack_require__.p + "16fa0e589029c6ad30d4.gif";
;// ./src/img/icon_knt/icon_knt_3.gif
const icon_knt_3_namespaceObject = __webpack_require__.p + "5c49afb446b7d3e8a167.gif";
;// ./src/img/icon_knt/icon_knt_4.gif
const icon_knt_4_namespaceObject = __webpack_require__.p + "c2a4a2c187d80e5e7157.gif";
;// ./src/img/icon_knt/icon_knt_6.gif
const icon_knt_6_namespaceObject = __webpack_require__.p + "38b8da844cb1b33443f6.gif";
;// ./src/img/icon_knt/icon_knt_7.gif
const icon_knt_7_namespaceObject = __webpack_require__.p + "ac63f321b300238224eb.gif";
;// ./src/img/icon_knt/icon_knt_8.gif
const icon_knt_8_namespaceObject = __webpack_require__.p + "b0ed6c1ae64eb602d6ef.gif";
;// ./src/img/icon_knt/icon_knt_10.gif
const icon_knt_10_namespaceObject = __webpack_require__.p + "17742abf7a89b2c4867a.gif";
;// ./src/img/icon_knt/icon_knt_11.png
const icon_knt_11_namespaceObject = __webpack_require__.p + "65046b76336e02963a20.png";
;// ./src/img/icon_knt/icon_knt_13.png
const icon_knt_13_namespaceObject = __webpack_require__.p + "1671195eec42895dcde2.png";
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
  img: icon_knt_10_namespaceObject
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
  img: icon_knt_6_namespaceObject
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
  img: icon_knt_7_namespaceObject
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
  img: icon_knt_13_namespaceObject
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
  img: icon_knt_14_namespaceObject
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
  img: icon_knt_8_namespaceObject
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
  img: icon_knt_1_namespaceObject
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
  img: icon_knt_4_namespaceObject
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
  img: icon_knt_11_namespaceObject
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
  img: icon_knt_3_namespaceObject
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
  img: icon_knt_2_namespaceObject
}];

/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */
;// ./src/img/icon_lkn/icon_lkn_1.png
const icon_lkn_1_namespaceObject = __webpack_require__.p + "db949a52b2f9beaa7cea.png";
;// ./src/img/icon_lkn/icon_lkn_2.png
const icon_lkn_2_namespaceObject = __webpack_require__.p + "5660a1f8af1af6de5cae.png";
;// ./src/img/icon_lkn/icon_lkn_3.png
const icon_lkn_3_namespaceObject = __webpack_require__.p + "cc92514a9825e3fbb03c.png";
;// ./src/img/icon_lkn/icon_lkn_5.png
const icon_lkn_5_namespaceObject = __webpack_require__.p + "5372dca8d78e5268cdf2.png";
;// ./src/img/icon_lkn/icon_lkn_6.png
const icon_lkn_6_namespaceObject = __webpack_require__.p + "cff73e254211259aa0e8.png";
;// ./src/img/icon_lkn/icon_lkn_8.png
const icon_lkn_8_namespaceObject = __webpack_require__.p + "459e60668fc9e16d8c1d.png";
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
Weapon: Sword-Class 
Type: Supportive 
Target: Self
After Cast Delay: 0.30s
Cooldown: A.Delay
Requirement: Sword Quicken Lv: 5
Description: Temporarily increases T.ATK, scaling with CRIT. Bonus is doubled for basic attacks.
[Lv. 1]: T.ATK +5%, T.ATK +50 Duration: 60s. SP Cost: 23
[Lv. 2]: T.ATK +10%, T.ATK +100 Duration: 80s. SP Cost: 26
[Lv. 3]: T.ATK +15%, T.ATK +150 Duration: 100s. SP Cost: 29 
[Lv. 4]: T.ATK +20%, T.ATK +200 Duration: 120s. SP Cost: 32
[Lv. 5]: T.ATK +25%, T.ATK +250 Duration: 140s. SP Cost: 35 
[Lv. 6]: T.ATK +30%, T.ATK +300 Duration: 160s. SP Cost: 38 
[Lv. 7]: T.ATK +35%, T.ATK +350 Duration: 180s. SP Cost: 41
[Lv. 8]: T.ATK +40%, T.ATK +400 Duration: 200s. SP Cost: 44
[Lv. 9]: T.ATK +45%. T.ATK +450 Duration: 220s, SP Cost: 47
[Lv.10]: T.ATK +50%, T.ATK +500 Duration: 240s. SP Cost: 50
T.ATK: + ((T.ATK x (5 x Skill Lv)) / 100) + (50 x Skill Lv) + CRIT `,
  img: icon_lkn_1_namespaceObject
}, {
  id: "berserk",
  level: 0,
  dependencies: [],
  dependent: [],
  element: null,
  skillName: "Berserk",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Toggle
Type: Supportive 
Target: Self
After Cast Delay: 0.30s
Requirement: None
Description: While active, grants +100% Max HP, +30% ASPD, +20% ATK for skills, +100% ATK for basic attacks, and -30% WD.
Drains 1% of Max HP every 3s and reduces HP Recovery and SP Recovery by 90%. Also reduces Healing Eff, Life Steal, DEF, and FLEE.
Cannot be used while mounted.
[Lv. 1]: Heal. Eff/Life Steal/DEF -94% Flee -92%, Cooldown: 300s
[Lv. 2]: Heal. Eff/Life Steal/DEF -88% Flee -84%, Cooldown: 240s
[Lv. 3]: Heal. Eff/Life Steal/DEF -82% Flee -76%, Cooldown: 180s
[Lv. 4]: Heal. Eff/Life Steal/DEF -76% Flee -68%, Cooldown: 120s
[Lv. 5]: Heal. Eff/Life Steal/DEF -70% Flee -60%, Cooldown: 60s`,
  img: icon_lkn_5_namespaceObject
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
Weapon: Spear-Class 
Type: Supportive 
Target: Self
After Cast Delay: 0.30s
Cooldown: A.Delay
Requirement: Spear Quicken Lv: 5
Description: Temporarily increases B.ATK,
W.ATK and ACC.
Also increases E.ATK based on 10% of ACC. 
[Lv. 1]: B.ATK/W.ATK/ACC +7% Duration: 60s. SP Cost: 23
[Lv. 2]: B.ATK/W.ATK/ACC +9% Duration: 80s. SP Cost: 26
[Lv. 3]: B.ATK/W.ATK/ACC +11% Duration: 100s. SP Cost: 29
[Lv. 4]: B.ATK/W.ATK/ACC +13% Duration: 120s. SP Cost: 32
[Lv. 5]: B.ATK/W.ATK/ACC +15% Duration: 140s. SP Cost: 35 
[Lv. 6]: B.ATK/W.ATK/ACC +17% Duration: 160s, SP Cost: 38 
[Lv. 7]: B.ATK/W.ATK/ACC +19% Duration: 180s. SP Cost: 41 
[Lv. 8]: B.ATK/W.ATK/ACC +21% Duration: 200s. SP Cost: 44 
[Lv. 9]: B.ATK/W.ATK/ACC +23% Duration: 220s. SP Cost: 47
[Lv.10]: B.ATK/W.ATK/ACC +25% Duration: 240s. SP Cost: 50`,
  img: icon_lkn_3_namespaceObject
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
Weapon: Sword-Class 
Type: Supportive 
Target: Self
After Cast Delay: 0.30s 
Cooldown: A.Delay
SP Cost: 30
Requirement: Counter Attack Lv: 5, Two-Handed Sword Mastery Lv: 10
Description: Grants a chance to fully block any incoming P.DMG. Block chance is halved while wielding a One-Handed Sword. Briefly immobilizes the character after a successful block.
[Lv. 1]: Block Chance: 23%. Duration: 30s 
[Lv. 2]: Block Chance: 26%, Duration: 40s 
[Lv. 3]: Block Chance: 29%, Duration: 50s 
[Lv. 4]: Block Chance: 32%, Duration: 60s 
[Lv. 5]: Block Chance: 35%, Duration: 70s`,
  img: icon_lkn_2_namespaceObject
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
Weapon: Spear-Class 
Type: Physical
Target: Enemy
After Cast Delay: A.Delay 0.445
Fixed Cast Time: 0.60s
Cooldown: 1s
Range: 10
Hits: 5
SP Cost: 30
Requirement: Spear Boomerang Lv: 5
Description: Deals ranged P.DMG to the target, scaling with weapon stats and the learned level of Spear Boomerang.
Adds T.ATK based on weapon weight if the target was Immobilized in the last 3s.
VCT scales with skill level.
[Lv. 1]: ATK 110%, VCT: 0.33s
[Lv. 2]: ATK 120%, VCT: 0.36s
[Lv. 3]: ATK 130%, VCT: 0.39s 
[Lv. 4]: ATK 140%, VCT: 0.42s 
[Lv. 5]: ATK 150%, VCT: 0.45s 
[Lv. 6]: ATK 160%, VCT: 0.48s 
[Lv. 7]: ATK 170%, VCT: 0.51s 
[Lv. 8]: ATK 180%, VCT: 0.54s 
[Lv. 9]: ATK 190%, VCT: 0.57s 
[Lv.10]: ATK 200%, VCT: 0.60s
Formula: ATK (9%): (100 + (((W.Weight / (20 - Spear Boomerang Lv)) + 10) x Skill Lv)) x Hits `,
  img: icon_lkn_6_namespaceObject
}];

/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */
;// ./src/img/icon_thf/icon_thf_1.png
const icon_thf_1_namespaceObject = __webpack_require__.p + "82c92fcd527e60deef59.png";
;// ./src/img/icon_thf/icon_thf_2.png
const icon_thf_2_namespaceObject = __webpack_require__.p + "57a16f1e6461a1be7c66.png";
;// ./src/img/icon_thf/icon_thf_9.png
const icon_thf_9_namespaceObject = __webpack_require__.p + "04267468460c2c55591d.png";
;// ./src/img/icon_thf/icon_thf_4.png
const icon_thf_4_namespaceObject = __webpack_require__.p + "fa11dedcf541ace63a05.png";
;// ./src/img/icon_thf/icon_thf_5.png
const icon_thf_5_namespaceObject = __webpack_require__.p + "eb7e35f6c7a942fe9e4e.png";
;// ./src/img/icon_thf/icon_thf_6.png
const icon_thf_6_namespaceObject = __webpack_require__.p + "3cb6e66aa4fc8ccbb841.png";
;// ./src/img/icon_thf/icon_thf_10.png
const icon_thf_10_namespaceObject = __webpack_require__.p + "bee7be4a0589d256302a.png";
;// ./src/img/icon_thf/icon_thf_11.png
const icon_thf_11_namespaceObject = __webpack_require__.p + "486bf31444ac9aaa5cd8.png";
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
  img: icon_thf_9_namespaceObject
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
  img: icon_thf_10_namespaceObject
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
  img: icon_thf_11_namespaceObject
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
;// ./src/img/icon_ass/icon_ass_15.png
const icon_ass_15_namespaceObject = __webpack_require__.p + "032b5df44390ea1bf4a6.png";
;// ./src/img/icon_ass/icon_ass_13.png
const icon_ass_13_namespaceObject = __webpack_require__.p + "8bba48bc4b57d070dc13.png";
;// ./src/img/icon_ass/icon_ass_16.png
const icon_ass_16_namespaceObject = __webpack_require__.p + "fbb3163dc59403f22d50.png";
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
  img: icon_ass_15_namespaceObject
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
  img: icon_ass_16_namespaceObject
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
;// ./src/img/icon_rog/icon_rog_1.gif
const icon_rog_1_namespaceObject = __webpack_require__.p + "4c668292b05d5435f604.gif";
;// ./src/img/icon_rog/icon_rog_2.gif
const icon_rog_2_namespaceObject = __webpack_require__.p + "3209ad41e1217faa8fde.gif";
;// ./src/img/icon_rog/icon_rog_3.gif
const icon_rog_3_namespaceObject = __webpack_require__.p + "f9691b6bcfde0d05e100.gif";
;// ./src/img/icon_rog/icon_rog_5.gif
const icon_rog_5_namespaceObject = __webpack_require__.p + "b7cdcb21758b5a870bc7.gif";
;// ./src/img/icon_rog/icon_rog_7.gif
const icon_rog_7_namespaceObject = __webpack_require__.p + "c0bb1e25f3101772d971.gif";
;// ./src/img/icon_rog/icon_rog_8.gif
const icon_rog_8_namespaceObject = __webpack_require__.p + "a5468ecd9b74c1dada92.gif";
;// ./src/img/icon_rog/icon_rog_9.gif
const icon_rog_9_namespaceObject = __webpack_require__.p + "61e0435b5e7f12f7a971.gif";
;// ./src/img/icon_rog/icon_rog_10.gif
const icon_rog_10_namespaceObject = __webpack_require__.p + "95ee33d91766f400dca0.gif";
;// ./src/img/icon_rog/icon_rog_11.gif
const icon_rog_11_namespaceObject = __webpack_require__.p + "32ec36e44081cc3472ae.gif";
;// ./src/img/icon_rog/icon_rog_12.gif
const icon_rog_12_namespaceObject = __webpack_require__.p + "8f390f4d95dad64f8199.gif";
;// ./src/img/icon_rog/icon_rog_13.gif
const icon_rog_13_namespaceObject = __webpack_require__.p + "cb416f411c37acbed588.gif";
;// ./src/img/icon_rog/icon_rog_14.gif
const icon_rog_14_namespaceObject = __webpack_require__.p + "6acb6fb027f06d97c87b.gif";
;// ./src/img/icon_rog/icon_rog_25.png
const icon_rog_25_namespaceObject = __webpack_require__.p + "23f0cf3071e9e287482f.png";
;// ./src/img/icon_rog/icon_rog_24.png
const icon_rog_24_namespaceObject = __webpack_require__.p + "17533aaa8409f715fb3c.png";
;// ./src/img/icon_rog/icon_rog_22.png
const icon_rog_22_namespaceObject = __webpack_require__.p + "57b8ccee072cd7bec0f0.png";
;// ./src/img/icon_rog/icon_rog_26.png
const icon_rog_26_namespaceObject = __webpack_require__.p + "dc550b69f6af1cb16e26.png";
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
  img: icon_rog_1_namespaceObject
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
  img: icon_rog_2_namespaceObject
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
  img: icon_rog_3_namespaceObject
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
  img: icon_rog_5_namespaceObject
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
  img: icon_rog_24_namespaceObject
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
  img: icon_rog_25_namespaceObject
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
  img: icon_rog_22_namespaceObject
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
  img: icon_rog_26_namespaceObject
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
  img: icon_rog_7_namespaceObject
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
  img: icon_rog_8_namespaceObject
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
  img: icon_rog_9_namespaceObject
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
  img: icon_rog_14_namespaceObject
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
  img: icon_rog_13_namespaceObject
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
  img: icon_rog_11_namespaceObject
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
  img: icon_rog_12_namespaceObject
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
  img: icon_rog_10_namespaceObject
}];

/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */
;// ./src/img/icon_chs/icon_chs_6.png
const icon_chs_6_namespaceObject = __webpack_require__.p + "07be2a2e3924ab11ecd4.png";
;// ./src/img/icon_chs/icon_chs_1.gif
const icon_chs_1_namespaceObject = __webpack_require__.p + "228c51eddac50729d258.gif";
;// ./src/img/icon_chs/icon_chs_2.gif
const icon_chs_2_namespaceObject = __webpack_require__.p + "eee9cded5d58cc69b2cd.gif";
;// ./src/img/icon_chs/icon_chs_3.gif
const icon_chs_3_namespaceObject = __webpack_require__.p + "61c6c924dd454595f3a9.gif";
;// ./src/img/icon_chs/icon_chs_4.gif
const icon_chs_4_namespaceObject = __webpack_require__.p + "9405f1139f9ddb9d2776.gif";
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
  img: icon_chs_2_namespaceObject
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
  img: icon_chs_4_namespaceObject
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
  img: icon_chs_3_namespaceObject
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
  img: icon_chs_1_namespaceObject
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
  img: icon_chs_6_namespaceObject
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
;// ./src/img/icon_hnt/icon_hnt_18.png
const icon_hnt_18_namespaceObject = __webpack_require__.p + "95cd6520b8a519346156.png";
;// ./src/js/listSkills/ArcherHunter.js
/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */

 // заглушка


















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
  inform: `Max Lv: 10
Skill Form: Passive
Type: Physical
Description: Boosts the effectiveness of traps, Increases damage for Land Wine, Blast Mine, Freezing Trap, Claymore Trap, and Shockwave Trap. Extends the duration of Skid Trap, Ankle Snare, Flasher, Sandman, and Shockwave Trap. At levels 5 and 10, it expands the trap placement range, Every 2 levels alsa increase INT and DEX.
[Level 1]; Trap Damage +20, Trap Duration +10 sec, INT/DEX +1
[Level 2]: Trap Damage +40, Trap Duration +20 sec, INT/DEX +1
[Level 3]: Trap Damage +60, Trap Duration +30 sec, INT/DEX +2
[Level 4]: Trap Damage +80, Trap Duration +30 sec, INT/DEX +2
[Level 5]: Trap Damage , Trap Duration , INT/DEX 
[Level 6]: Trap Damage , Trap Duration , INT/DEX 
[Level 7]: Trap Damage , Trap Duration , INT/DEX 
[Level 8]: Trap Damage , Trap Duration , INT/DEX 
[Level 9]: Trap Damage , Trap Duration , INT/DEX 
[Level 10]: Trap Damage , Trap Duration , INT/DEX 
`,
  img: icon_hnt_18_namespaceObject
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
;// ./src/img/icon_snp/icon_snp_7.png
const icon_snp_7_namespaceObject = __webpack_require__.p + "c568e88a60a9ff55a2b8.png";
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
  img: icon_snp_7_namespaceObject
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
;// ./src/img/icon_bnd/icon_bnd_2.gif
const icon_bnd_2_namespaceObject = __webpack_require__.p + "ce632d33b31f62ea7b4c.gif";
;// ./src/img/icon_bnd/icon_bnd_3.gif
const icon_bnd_3_namespaceObject = __webpack_require__.p + "e7296abb9576e9ec4487.gif";
;// ./src/img/icon_bnd/icon_bnd_4.gif
const icon_bnd_4_namespaceObject = __webpack_require__.p + "5ba77f4f34ac9e69b52f.gif";
;// ./src/img/icon_bnd/icon_bnd_5.gif
const icon_bnd_5_namespaceObject = __webpack_require__.p + "db19fda98d575881db47.gif";
;// ./src/img/icon_bnd/icon_bnd_6.gif
const icon_bnd_6_namespaceObject = __webpack_require__.p + "0d5e264eefdb67f5c07d.gif";
;// ./src/img/icon_bnd/icon_bnd_7.gif
const icon_bnd_7_namespaceObject = __webpack_require__.p + "5af639e9b0d517278e2c.gif";
;// ./src/img/icon_bnd/icon_bnd_8.gif
const icon_bnd_8_namespaceObject = __webpack_require__.p + "6b6b841ef6f0c46970c5.gif";
;// ./src/img/icon_bnd/icon_bnd_9.gif
const icon_bnd_9_namespaceObject = __webpack_require__.p + "6e4d7b75c094f0d4d1ca.gif";
;// ./src/img/icon_bnd/icon_bnd_10.gif
const icon_bnd_10_namespaceObject = __webpack_require__.p + "2030b2e590bf07930c11.gif";
;// ./src/img/icon_bnd/icon_bnd_11.gif
const icon_bnd_11_namespaceObject = __webpack_require__.p + "3bc0b32b6e81357ab60e.gif";
;// ./src/img/icon_bnd/icon_bnd_20.png
const icon_bnd_20_namespaceObject = __webpack_require__.p + "79f0df1862ecaed4b53c.png";
;// ./src/img/icon_bnd/icon_bnd_13.gif
const icon_bnd_13_namespaceObject = __webpack_require__.p + "cc686881150a52f968dc.gif";
;// ./src/img/icon_bnd/icon_bnd_14.gif
const icon_bnd_14_namespaceObject = __webpack_require__.p + "a49ac6d47a42ba66bb6c.gif";
;// ./src/img/icon_bnd/icon_bnd_15.gif
const icon_bnd_15_namespaceObject = __webpack_require__.p + "8866d9509d5fa280d902.gif";
;// ./src/img/icon_bnd/icon_bnd_22.png
const icon_bnd_22_namespaceObject = __webpack_require__.p + "6679add996f996ad82d2.png";
;// ./src/img/icon_bnd/icon_bnd_17.gif
const icon_bnd_17_namespaceObject = __webpack_require__.p + "bcd40cd735864f2402b8.gif";
;// ./src/img/icon_bnd/icon_bnd_21.png
const icon_bnd_21_namespaceObject = __webpack_require__.p + "4b75e20e5a84126e3d04.png";
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
  img: icon_bnd_11_namespaceObject
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
  img: icon_bnd_20_namespaceObject
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
  img: icon_bnd_13_namespaceObject
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
  img: icon_bnd_17_namespaceObject
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
  img: icon_bnd_6_namespaceObject
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
  img: icon_bnd_8_namespaceObject
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
  img: icon_bnd_2_namespaceObject
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
  img: icon_bnd_21_namespaceObject
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
  img: icon_bnd_14_namespaceObject
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
  img: icon_bnd_9_namespaceObject
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
  img: icon_bnd_3_namespaceObject
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
  img: icon_bnd_22_namespaceObject
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
  img: icon_bnd_10_namespaceObject
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
  img: icon_bnd_4_namespaceObject
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
  img: icon_bnd_15_namespaceObject
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
  img: icon_bnd_7_namespaceObject
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
  img: icon_bnd_5_namespaceObject
}];

/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */
;// ./src/img/icon_cng/icon_cng_1.gif
const icon_cng_1_namespaceObject = __webpack_require__.p + "130ac3c8c6d52a36841a.gif";
;// ./src/img/icon_cng/icon_cng_2.gif
const icon_cng_2_namespaceObject = __webpack_require__.p + "06b65ad5a24a01d9d8b9.gif";
;// ./src/img/icon_cng/icon_cng_6.gif
const icon_cng_6_namespaceObject = __webpack_require__.p + "df3acc77be260b2519e6.gif";
;// ./src/img/icon_cng/icon_cng_7.png
const icon_cng_7_namespaceObject = __webpack_require__.p + "2bd76bdcd059fa37bc60.png";
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
  img: icon_cng_1_namespaceObject
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
  img: icon_cng_2_namespaceObject
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
  img: icon_cng_7_namespaceObject
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
  img: icon_cng_6_namespaceObject
}];

/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */
;// ./src/img/icon_dan/icon_dan_1.gif
const icon_dan_1_namespaceObject = __webpack_require__.p + "c9b056be5d60b9680e89.gif";
;// ./src/img/icon_dan/icon_dan_10.png
const icon_dan_10_namespaceObject = __webpack_require__.p + "7c424515ed20379d1aa9.png";
;// ./src/img/icon_dan/icon_dan_5.gif
const icon_dan_5_namespaceObject = __webpack_require__.p + "eecebadc4d2493549edd.gif";
;// ./src/img/icon_dan/icon_dan_6.gif
const icon_dan_6_namespaceObject = __webpack_require__.p + "40a55822dbbbe433b883.gif";
;// ./src/img/icon_dan/icon_dan_7.gif
const icon_dan_7_namespaceObject = __webpack_require__.p + "d4e04c29506bcadebeec.gif";
;// ./src/img/icon_dan/icon_dan_3.gif
const icon_dan_3_namespaceObject = __webpack_require__.p + "cc6893c583912513ae56.gif";
;// ./src/img/icon_dan/icon_dan_4.gif
const icon_dan_4_namespaceObject = __webpack_require__.p + "6a50439ca90b1d849424.gif";
;// ./src/img/icon_dan/icon_dan_8.gif
const icon_dan_8_namespaceObject = __webpack_require__.p + "643ea267d08be928ecec.gif";
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
  img: icon_dan_1_namespaceObject
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
  img: icon_dan_10_namespaceObject
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
  img: icon_dan_3_namespaceObject
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
  img: icon_dan_8_namespaceObject
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
  img: icon_bnd_6_namespaceObject
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
  img: icon_bnd_8_namespaceObject
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
  img: icon_bnd_2_namespaceObject
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
  img: icon_dan_4_namespaceObject
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
  img: icon_dan_5_namespaceObject
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
  img: icon_bnd_9_namespaceObject
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
  img: icon_bnd_3_namespaceObject
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
  img: icon_dan_7_namespaceObject
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
  img: icon_bnd_10_namespaceObject
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
  img: icon_bnd_4_namespaceObject
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
  img: icon_dan_6_namespaceObject
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
  img: icon_bnd_7_namespaceObject
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
  img: icon_bnd_5_namespaceObject
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
  img: icon_cng_1_namespaceObject
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
  img: icon_cng_2_namespaceObject
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
  img: icon_cng_7_namespaceObject
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
  img: icon_cng_6_namespaceObject
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
        // 1754687911421
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
/******/ 		__webpack_require__.h = () => ("e36e59ed90aa3f5fb74f")
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
/******/ 	var __webpack_exports__ = __webpack_require__(3682);
/******/ 	
/******/ })()
;