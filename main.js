/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 3473:
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
        const popX = e.target.offsetLeft;
        const popY = e.target.offsetTop + e.target.height + 5;

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
      window.location.href = '/skillTreeMoY/';
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
        if (!dependentSkill) {
          console.warn(`Dependent skill not found: ${dep.id}`);
          return;
        }

        // Проверяем, достигнут ли минимальный уровень
        const depLevel = dependentSkill?.level ?? 0;
        const isLevelMet = depLevel > dep.minLevel;
        // const isLevelMet = dependentSkill.level > dep.minLevel;

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
Formula: MATK (%): (100 + Base Lv Bonus) x Hits
Base Lv Bonus: (100 x Base Lv^2) / 10000
The Base Lv Bonus is not consider on auto-cast`,
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
  }, {
    id: "soulStrike",
    minLevel: 7
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
;// ./src/img/icon_wiz/icon_wiz_staffMastery.png
const icon_wiz_staffMastery_namespaceObject = __webpack_require__.p + "99c45d952d387a7998bb.png";
;// ./src/js/listSkills/MageWizard.js
/*  author Chalykh Maksim 
  # data 25.01.2025 
  # email: chalyh.maksim.88@mail.ru */

 // заглушка















// skills Wizard

const skillsWizard = [{
  id: "staffMastery",
  level: 0,
  dependencies: [],
  dependent: [],
  element: null,
  skillName: "Staff Mastery",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Passive
Weapon: Staff
Requirement: None
Description: Increases Extra Magical Attack while wielding a Staff. At max level, also grants -6% Cooldown.
When the skill is maxed: Cooldown -6%
[Lv. 1]: One-Handed Staff: E.MATK +3, Tho-Handed Staff: E.MATK +4
[Lv. 2]: One-Handed Staff: E.MATK +6, Tho-Handed Staff: E.MATK +8
[Lv. 3]: One-Handed Staff: E.MATK +9, Tho-Handed Staff: E.MATK +12
[Lv. 4]: One-Handed Staff: E.MATK +12, Tho-Handed Staff: E.MATK +16
[Lv. 5]: One-Handed Staff: E.MATK +15 Tho-Handed Staff: E.MATK +20
[Lv. 6]: One-Handed Staff: E.MATK +18, Tho-Handed Staff: E.MATK +24
[Lv. 7]: One-Handed Staff: E.MATK +21, Tho-Handed Staff: E.MATK +28
[Lv. 8]: One-Handed Staff: E.MATK +24, Tho-Handed Staff: E.MATK +32
[Lv. 9]: One-Handed Staff: E.MATK +27, Tho-Handed Staff: E.MATK +36
[Lv.10]: One-Handed Staff: E.MATK +30, Tho-Handed Staff: E.MATK +40`,
  img: icon_wiz_staffMastery_namespaceObject
}, {
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
    id: "firePillar"
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
  id: "firePillar",
  level: 0,
  dependencies: [{
    id: "sightrasher",
    minLevel: 2
  }],
  dependent: [{
    id: "meteorStorm"
  }],
  element: null,
  skillName: "Fire Pillar",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Ground
Element: Fire
Variable Cast Time: 0.85s
Fixed Cast Time: 0.15s
After Cast Delay: 0.30s 
Cooldown: 0.30s
Max Instances: 5 
Range: 9
Requirement: Sightrasher Lv: 2
Description: Creates a temporary pillar that deals Magical Damage to enemies within a Area of Effect when triggered. When cast on a cell occupied by monsters, the Area of Effect becomes 3x3 and deals 6 hits.
When cast on an unoccupied cell, the Area of Effect becomes 5x5, deals 12 hits.
[Lv. 1]: MATK 200%, SP Cost: 14 Duration: 10s
[Lv. 2]: MATK 300%, SP Cost: 18 Duration: 15s
[Lv. 3]: MATK 400%, SP Cost: 22 Duration: 20s
[Lv. 4]: MATK 500%, SP Cost: 26 Duration: 25s
[Lv. 5]: MATK 600%, SP Cost: 30 Duration: 30s
Formula: MATK (%) 100 + (Skill Lv x 100)`,
  img: icon_wiz_3_namespaceObject
}, {
  id: "meteorStorm",
  level: 0,
  dependencies: [{
    id: "firePillar",
    minLevel: 3
  }],
  dependent: [],
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
Requirement: Fire Pillar Lv: 3
Description: Creates a 7x7 AoE at the targeted location that deals M.DMG to enemies within a random 7x7 AoE every 0.45s for 4.5s.
Has a chance to inflict Burning for 100s. VCT and FCT scale with skill level.
[Lv. 1]: MATK 160%, VCT: 2.40s. FCT: 0.3s Duration: 4.7s. Damage Interval: 0.47s. SP Cost: 36. Passive Bonus: 6%
[Lv. 2]: MATK 220%, VCT: 2.80s. FCT: 0.4s Duration: 4.4s. Damage Interval: 0.44s. SP Cost: 42. Passive Bonus: 7%
[Lv. 3]: MATK 280%, VCT: 3.20s. FCT: 0.5s Duration: 4.1s. Damage Interval: 0.41s. SP Cost: 48. Passive Bonus: 8%
[Lv. 4]: MATK 340%, VCT: 3.60s. FCT: 0.6s Duration: 3.8s. Damage Interval: 0.38s. SP Cost: 54. Passive Bonus: 9%
[Lv. 5]: MATK 400%, VCT: 4.00s. FCT: 0.75 Duration: 3.5s. Damage Interval: 0.35s. SP Cost: 60. Passive Bonus: 10%
[Lv. 6]: MATK 460%, VCT: 4.40s. FCT: 0.8s Duration: 3.2s. Damage Interval: 0.32s. SP Cost: 66. Passive Bonus: 11%
[Lv. 7]: MATK 520%, VCT: 4.80s. FCT: 0.9s Duration: 2.9s. Damage Interval: 0.29s. SP Cost: 72. Passive Bonus: 12%
[Lv. 8]: MATK 580%, VCT: 5.20s. FCT: 1.0s Duration: 2.6s. Damage Interval: 0.26s. SP Cost: 78. Passive Bonus: 13%
[Lv. 9]: MATK 640%, VCT: 5.60s. FCT: 1.1s Duration: 2.3s. Damage Interval: 0.235. SP Cost: 84. Passive Bonus: 14%
[Lv.10]: MATK 700%, VCT: 6.00s. FCT: 1.2s Duration: 2.0s. Damage Interval: 0.20s. SP Cost: 90. Passive Bonus: 15%
Formula: MATK per Tick (%): 100 + (60 x Skill Lv) `,
  img: icon_wiz_9_namespaceObject
}, {
  id: "waterBall",
  level: 0,
  dependencies: [{
    id: "frostDiver",
    minLevel: 3
  }],
  dependent: [{
    id: "frostNova"
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
  id: "frostNova",
  level: 0,
  dependencies: [{
    id: "waterBall",
    minLevel: 2
  }],
  dependent: [{
    id: "stormGust"
  }],
  element: null,
  skillName: "Frost Nova",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Self
Element: Water
Variable Cast Time: 0.85s
Fixed Cast Time: 0.15s
After Cast Delay: 0.30s 
Cooldown: 0.30s
Hits: 1
Requirement: Water Ball Lv: 2
Description: Deals Magical Damage to enemies within a 11x11 Area of Effect. Has a chance to inflict Freezing for 5s. Inflicts Freeze for 10 seconds on the target once the Freezing effect ends.
[Lv. 1]: MATK 200%, Chance: 40%, SP Cost: 14
[Lv. 2]: MATK 300%, Chance: 50%, SP Cost: 18
[Lv. 3]: MATK 400%, Chance: 60%, SP Cost: 22
[Lv. 4]: MATK 500%, Chance: 70%, SP Cost: 26
[Lv. 5]: MATK 600%, Chance: 80%, SP Cost: 30
Formula: MATK (%): 100 + (100 x Skill Lv) `,
  img: icon_wiz_4_namespaceObject
}, {
  id: "stormGust",
  level: 0,
  dependencies: [{
    id: "frostNova",
    minLevel: 3
  }],
  dependent: [],
  element: null,
  skillName: "Storm Gust",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Ground
Element: Water
After Cast Delay: 1s 
Cooldown: 3s 
Range: 9 
Hits: 1
Requirement: Frost Nova Lv: 3
Description: Frost Nova Lv. 3 Description: Deals Magical Damage to enemies in the 9x9 Area of Effect, Knocking them back 2 cells to a random direction. Has a 15% chance to inflict Freezing for 5s. Inflicts Freeze on the target for 20s once the Freezing effect ends.
Instantly freezes enemies hit 3 times. Does not hit frozen enemies.
While learned, passively increases Magical Damage against enemies under Freezing or Freeze. This passive bonus is doubled when using a Two-Handed Staff.
Variable Cast Time and Fixed Cast Time scale with the skill level.
[Lv. 1]: MATK 160%, VCT: 2.40s. FCT: 0.3s Duration: 4.7s. Damage Interval: 0.47s. SP Cost: 36. Passive Bonus: 6%
[Lv. 2]: MATK 220%, VCT: 2.80s. FCT: 0.4s Duration: 4.4s. Damage Interval: 0.44s. SP Cost: 42. Passive Bonus: 7%
[Lv. 3]: MATK 280%, VCT: 3.20s. FCT: 0.5s Duration: 4.1s. Damage Interval: 0.41s. SP Cost: 48. Passive Bonus: 8%
[Lv. 4]: MATK 340%, VCT: 3.60s. FCT: 0.6s Duration: 3.8s. Damage Interval: 0.38s. SP Cost: 54. Passive Bonus: 9%
[Lv. 5]: MATK 400%, VCT: 4.00s. FCT: 0.75 Duration: 3.5s. Damage Interval: 0.35s. SP Cost: 60. Passive Bonus: 10%
[Lv. 6]: MATK 460%, VCT: 4.40s. FCT: 0.8s Duration: 3.2s. Damage Interval: 0.32s. SP Cost: 66. Passive Bonus: 11%
[Lv. 7]: MATK 520%, VCT: 4.80s. FCT: 0.9s Duration: 2.9s. Damage Interval: 0.29s. SP Cost: 72. Passive Bonus: 12%
[Lv. 8]: MATK 580%, VCT: 5.20s. FCT: 1.0s Duration: 2.6s. Damage Interval: 0.26s. SP Cost: 78. Passive Bonus: 13%
[Lv. 9]: MATK 640%, VCT: 5.60s. FCT: 1.1s Duration: 2.3s. Damage Interval: 0.235. SP Cost: 84. Passive Bonus: 14%
[Lv.10]: MATK 700%, VCT: 6.00s. FCT: 1.2s Duration: 2.0s. Damage Interval: 0.20s. SP Cost: 90. Passive Bonus: 15%
Formula: MATK per Tick (%): 100 + (60 x Skill Lv)`,
  img: icon_wiz_11_namespaceObject
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
  id: "electricalInduction",
  level: 0,
  dependencies: [{
    id: "jupitelThunder",
    minLevel: 2
  }],
  dependent: [{
    id: "lordOfVermilion"
  }],
  element: null,
  skillName: "Electrical Induction",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Enemy
Element: Wind
Variable Cast Time: 0.85s
Fixed Cast Time: 0.15s
After Cast Delay: 0.30s 
Cooldown: 0.30s
Range: 9
Requirement: Jupitel Thunder Lv: 2
Description: Deals Magical Damage to the target, bouncing to a random enemy within a 3x3 Area of Effect after 2 hits. 
The damage increases with each bounce, and the bounce interval scales with Attack Motion. 
[Lv. 1]: MATK 110%, SP Cost: 14 
[Lv. 2]: MATK 120%, SP Cost: 18
[Lv. 3]: MATK 130%, SP Cost: 22 
[Lv. 4]: MATK 140%, SP Cost: 26 
[Lv. 5]: MATK 150%, SP Cost: 30
Formula: MATK (%): 100 + (Skill Lv x 10) + (Jumps x 10) 
Interval (seconds): (A.Motion - (Jumps x 20)) / 1000 `,
  img: icon_wiz_17_namespaceObject
}, {
  id: "lordOfVermilion",
  level: 0,
  dependencies: [{
    id: "electricalInduction",
    minLevel: 3
  }],
  dependent: [],
  element: null,
  skillName: "Lord of Vermilion",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Ground
Element: Wind
After Cast Delay: 1s
Cooldown: 3s
Range: 9 
Hits: 3
Requirement: Electrical Induction Lv: 3
Description: Deals Magical Damage to enemies in the 9x9 Area of Effect. Has a 15% chance to inflict Blind. 
While learned, passively increases Magical Damage against enemies under Blind. 
This passive bonus is doubled when using a Two-Handed Staff.
Variable Cast Time and Fixed Cast Time scale with the skill level.
[Lv. 1]: MATK 160%, VCT: 2.40s. FCT: 0.3s Duration: 4.7s. Damage Interval: 0.47s. SP Cost: 36. Passive Bonus: 6%
[Lv. 2]: MATK 220%, VCT: 2.80s, FCT: 0.4s Duration: 4.4s. Damage Interval: 0.44s. SP Cost: 42. Passive Bonus: 7%
[Lv. 3]: MATK 280%, VCT: 3.20s, FCT: 0.5s Duration: 4.1s. Damage Interval: 0.41s. SP Cost: 48. Passive Bonus: 8%
[Lv. 4]: MATK 340%, VCT: 3.60s, FCT: 0.6s Duration: 3.8s. Damage Interval: 0.38s. SP Cost: 54. Passive Bonus: 9%
[Lv. 5]: MATK 400%, VCT: 4.00s. FCT: 0.7s Duration: 3.5s. Damage Interval: 0.35s. SP Cost: 60. Passive Bonus: 10%
[Lv. 6]: MATK 460%, VCT: 4.40s. FCT: 0.8s Duration: 3.2s. Damage Interval: 0.32s. SP Cost: 66. Passive Bonus: 11%
[Lv. 7]: MATK 520%, VCT: 4.80s, FCT: 0.9s Duration: 2.9s. Damage Interval: 0.29s. SP Cost: 72. Passive Bonus: 12%
[Lv. 8]: MATK 580%, VCT: 5.20s, FCT: 1.0s Duration: 2.6s. Damage Interval: 0.26s. SP Cost: 78. Passive Bonus: 13%
[Lv. 9]: MATK 640%, VCT: 5.60s. FCT: 1.1s Duration: 2.3s. Damage Interval: 0.235. SP Cost: 84. Passive Bonus: 14%
[Lv.10]: MATK 700%, VCT: 6.00s. FCT: 1.2s Duration: 2.0s. Damage Interval: 0.20s. SP Cost: 90. Passive Bonus: 15%
Formula: MATK per Tick(%): 100 + (60 x Skill Lv)`,
  img: icon_wiz_8_namespaceObject
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
  inform: `Max Lv: 5
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
Formula: MATK (%): Skill Lv x 25 `,
  img: icon_wiz_5_namespaceObject
}, {
  id: "quagmire",
  level: 0,
  dependencies: [{
    id: "heavensDrive",
    minLevel: 2
  }],
  dependent: [{
    id: "violentQuake"
  }],
  element: null,
  skillName: "Quagmire",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Supportive 
Target: Ground
Variable Cast Time: 0.15s
Fixed Cast Time: 0.15s
After Cast Delay: 0.30s 
Cooldown: 0.30s
Max Instances: 3 
Range: 9
Requirement: Heaven's Drive Lv: 2
Description: Creates a 5x5 Area of Effect that reduces enemies' Agility and Dexterity, as well as increases their Walk Delay.
Also clears some Status Effects from them. This skill is Replaceable.
[Lv. 1]: WD +40%, AGI/DEX -10% Duration: 10s. SP Cost: 14
[Lv. 2]: WD +50%, AGI/DEX -20% Duration: 15s. SP Cost: 18
[Lv. 3]: WD +60%, AGI/DEX -30% Duration: 20s. SP Cost: 22
[Lv. 4]: WD +70%, AGI/DEX -40% Duration: 25s. SP Cost: 26
[Lv. 5]: WD +80%, AGI/DEX -50% Duration: 30s. SP Cost: 30`,
  img: icon_wiz_10_namespaceObject
}, {
  id: "violentQuake",
  level: 0,
  dependencies: [{
    id: "quagmire",
    minLevel: 3
  }],
  dependent: [],
  element: null,
  skillName: "Violent Quake",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Ground
Element: Earth
After Cast Delay: 1s 
Cooldown: 3s 
Range: 9
Requirement: Quagmire Lv: 3
Description: Creates a 9x9 AoE at the targeted location that deals M.DMG to enemies within a random 9x9 AoE every.
Has a 15% chance to inflict Stun. While learned, passively increases Magical Damage against enemies under Stun. This passive bonus is doubled when using a Two- Handed Staff.
Variable Cast Time and Fixed Cast Time scale with the skill level.
[Lv. 1]: MATK 160%, VCT: 2.40s. FCT: 0.3s Duration: 4.7s. Damage Interval: 0.47s. SP Cost: 36. Passive Bonus: 6%
[Lv. 2]: MATK 220%, VCT: 2.80s, FCT: 0.4s Duration: 4.4s. Damage Interval: 0.44s. SP Cost: 42. Passive Bonus: 7%
[Lv. 3]: MATK 280%, VCT: 3.20s, FCT: 0.5s Duration: 4.1s. Damage Interval: 0.41s. SP Cost: 48. Passive Bonus: 8%
[Lv. 4]: MATK 340%, VCT: 3.60s. FCT: 0.65 Duration: 3.8s. Damane Interval: 0.38s. SP Cost: 54. Passive Bonus: 9%
[Lv. 5]: MATK 400%, VCT: 4.00s. FCT: 0.75 Duration: 3.5s. Damage Interval: 0.35s. SP Cost: 60. Passive Bonus: 10%
[Lv. 6]: MATK 460%, VCT: 4.40s. FCT: 0.8s Duration: 3.2s. Damage Interval: 0.32s. SP Cost: 66. Passive Bonus: 11%
[Lv. 7]: MATK 520%, VCT: 4.80s. FCT: 0.95 Duration: 2.9s. Damage Interval: 0.295. SP Cost: 72. Passive Bonus: 12%
[Lv. 8]: MATK 580%, VCT: 5.20s. FCT: 1.0s Duration: 2.6s. Damage Interval: 0.265. SP Cost: 78. Passive Bonus: 13%
[Lv. 9]: MATK 640%, VCT: 5.60s. FCT: 1.1s Duration: 2.3s. Damage Interval: 0.23s. SP Cost: 84. Passive Bonus: 14%
[Lv.10]: MATK 700%, VCT: 6.00s. FCT: 1.2s Duration: 2.0s. Damage Interval: 0.20s. SP Cost: 90. Passive Bonus: 15%
Formula: MATK per Tick(%): 100 + (60 x Skill Lv)`,
  img: icon_wiz_violentquake_namespaceObject
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
Description: Removes M.DMG Variance, ensuring maximum damage while active, but increases all skills' SP Cost by 30%,
Also increases B.MATK and Hard Magical Defense.
[Lv. 1]: B.MATK +10%, H.MDEF +10, SP Cost: 40 
[Lv. 2]: B.MATK +20%, H.MDEF +20, SP Cost: 50 
[Lv. 3]: B.MATK +30%, H.MDEF +30, SP Cost: 60 
[Lv. 4]: B.MATK +40%, H.MDEF +40, SP Cost: 70 
[Lv. 5]: B.MATK +50%, H.MDEF +50, SP Cost: 80`,
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
[Lv. 1]: VCT: 0.80s. Hits: 1. Chance: 5% SP Cost: 8 Passive Bonus: 7%
[Lv. 2]: VCT: 1.20s. Hits: 2. Chance: 10% SP Cost: 16 Passive Bonus: 9%
[Lv. 3]: VCT: 1.60s. Hits: 3. Chance: 15% SP Cost: 24 Passive Bonus: 11%
[Lv. 4]: VCT: 2.00s. Hits: 4. Chance: 20% SP Cost: 32 Passive Bonus: 13%
[Lv. 5]: VCT: 2.40s. Hits: 5. Chance: 25% SP Cost: 40 Passive Bonus: 15%
Formula: MATK (%): (100 + (Napalm Beat Lv x 20)) x Hits `,
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
[Lv. 1]: MaxSP +10%
[Lv. 2]: MaxSP +15%
[Lv. 3]: MaxSP +20% 
[Lv. 4]: MaxSP +25% 
[Lv. 5]: MaxSP +30%
Formula: SP Drain: (Target Lv x (95 + (Skill Lv x 30)) / 100 `,
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
Cooldown: 8s
Range: 9
Hits: 4
Description: Consumes 4 elemental orbs to deal M.DMG to enemies within a 7x7 M.DMG. Each consumed orb triggers one hit, with the element corresponding to that orb's element. Casting or defeating enemies with Fire,
Water, Wind or Earth skills has a chance to summon an elemental orb for 180s, based on the element of the casted skill.
A maximum of 4 orbs can exist at once, with each orb increasing the damage of its matching element by 4% while active. Each orb's duration is tracked separately. VCT scales with skill level.
[Lv. 1]: MATK 800% x Hits, VCT: 5s Orb Chance: 6%, SP Cost: 60
[Lv. 2]: MATK 1100% x Hits. VCT: 6s Orb Chance: 7%, SP Cost: 75
[Lv. 3]: MATK 1400% x Hits. VCT: 7s Orb Chance: 8%, SP Cost: 90
[Lv. 4]: MATK 1700% x Hits. VCT: 8s Orb Chance: 9%, SP Cost: 105 
[Lv. 5]: MATK 2000% x Hits. VCT: 9s Orb Chance: 10%, SP Cost: 120
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
  dependencies: [{
    id: "deluge",
    minLevel: 2
  }, {
    id: "whirlwind",
    minLevel: 2
  }],
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
Weapon: Axe
Requirement: None
Description: Increases E.ATK while wielding Axes. Blacksmiths and Alchemists gain extra E.ATK. At max level, also grants +6% P.DMG on all sizes.
[Lv. 1]: One-Handed Axes: E.ATK +2 Two-Handed Axes: E.ATK +3
[Lv. 2]: One-Handed Axes: E.ATK +4 Two-Handed Axes: E.ATK +6
[Lv. 3]: One-Handed Axes: E.ATK +6 Two-Handed Axes: E.ATK +9
[Lv. 4]: One-Handed Axes: E.ATK +8 Two-Handed Axes: E.ATK +12
[Lv. 5]: One-Handed Axes: E.ATK +10 Two-Handed Axes: E.ATK +15
[Lv. 6]: One-Handed Axes: E.ATK +12 Two-Handed Axes: E.ATK +18
[Lv. 7]: One-Handed Axes: E.ATK +14 Two-Handed Axes: E.ATK +21
[Lv. 8]: One-Handed Axes: E.ATK +16 Two-Handed Axes: E.ATK +24
[Lv. 9]: One-Handed Axes: E.ATK +18 Two-Handed Axes: E.ATK +27
[Lv.10]: One-Handed Axes: E.ATK +20 Two-Handed Axes: E.ATK +30
Formula: E.ATK Bonus: Skill Lv x 1 
Effects:
 - One-Handed Axes: E.ATK and E.MATK +(2 × Skill Lv)
 - Two-Handed Axes: E.ATK and E.MATK +(4 × Skill Lv)
Max bonus: +6% Damage on all sizes`,
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
After Cast Delay: A.Delay - 0.28s
Cooldown: A.Delay
Range: 1 + Weapon's range
Hits: 1
SP Cost: 8
Requirement: None
Description: Deals P.DMG to the target.
Has a chance to inflict Stun for 4.5s at level 6 or higher.
Catalyst: 2x Zeny Pouch for Lv. 6 or higher.
[Lv. 1]: ATK 150%
[Lv. 2]: ATK 200%
[Lv. 3]: ATK 250% 
[Lv. 4]: ATK 300%
[Lv. 5]: ATK 350%
[Lv. 6]: ATK 400%, Stun chance 4% 
[Lv. 7]: ATK 450%, Stun chance 8% 
[Lv. 8]: ATK 500%, Stun chance 12% 
[Lv. 9]: ATK 550%, Stun chance 16% 
[Lv.10]: ATK 600%, Stun chance 20%
Formula: skill lv x 60`,
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
Description: Grants the ability to push a cart. Also increases Max Weight.
Use Decoration Tools to change its appearance.
Rental at: Pushcart Assembler
[Lv. 1]: Maximum Weight +200 
[Lv. 2]: Maximum Weight +400 
[Lv. 3]: Maximum Weight +600 
[Lv. 4]: Maximum Weight +800 
[Lv. 5]: Maximum Weight +1000 
[Lv. 6]: Maximum Weight +1200 
[Lv. 7]: Maximum Weight +1400 
[Lv. 8]: Maximum Weight +1600 
[Lv. 9]: Maximum Weight +1800 
[Lv.10]: Maximum Weight +2000`,
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
  }
  // { id: "cartTermination" },
  ],
  element: null,
  skillName: "Cart Revolution",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
After Cast Delay: A.Delay - 0.28s
Cooldown: A.Delay
Range: 1
Hits: 1
Requirement: Pushcart Lv: 1
Description: Deals P.DMG to the target, Knocking it back 3 cells.
The damage scales with the number of different items in the Pushcart and its current weight.
Requires a Pushcart.
[Lv. 1]: SP Cost: 8
[Lv. 2]: SP Cost: 8
[Lv. 3]: SP Cost: 9 
[Lv. 4]: SP Cost: 9 
[Lv. 5]: SP Cost: 10
[Lv. 6]: SP Cost: 10
[Lv. 7]: SP Cost: 11 
[Lv. 8]: SP Cost: 11 
[Lv. 9]: SP Cost: 12 
[Lv.10]: SP Cost: 12
Formula: ATK (%): 100 + Number of Different Items + ((Pushcart Weight / 200) x Skill Lv)
Adds cost: (Skill Lv ÷ 2) Zeny Pouch
Pushcart always counts as 100 different items
Targets colliding with obstacles take the damage again
Targets that cannot be pushed always receive the bonus damage `,
  img: icon_mer_7_namespaceObject
}, {
  id: "cartTwister",
  level: 0,
  dependencies: [{
    id: "cartRevolution",
    minLevel: 5
  }],
  dependent: [
    // { id: "cartTermination" },
  ],
  element: null,
  skillName: "Cart Twister",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Self
After Cast Delay: A.Delay 0.225
Cooldown: 1.50s
Range: 1
Hits: 3
Requirement: Cart Revolution Lv: 5
Description: Deals P.DMG to enemies within a 7x7 AoE, Knocking them back 1 cell.
The damage scales with VIT, Base Level, the number of different items in the Pushcart and its current weight.
Requires a Pushcart.
[Lv. 1]: SP Cost: 6
[Lv. 2]: SP Cost: 7
[Lv. 3]: SP Cost: 8 
[Lv. 4]: SP Cost: 9 
[Lv. 5]: SP Cost: 10
Formula: ATK (%): 200 + ((Pushcart Weight ÷ (500 - Number of Different Items)) × Skill Lv) × (1 + ((VIT ÷ 30) × (Base Lv ÷ 100))) 
Adds cost: (Skill Lv) Zeny Pouch
Pushcart always counts as 100 different items`,
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
Type: Supportive 
Target: Self
After Cast Delay: 0.30s
Cooldown: A.Delay
SP Cost: 5 + (2 × Skill Lv)
Duration: 300 seconds
Requirement: Pushcart Lv: 3
Description: Grants a chance to randomly reduce all skills' SP Cost by 10%, 20% or 50% while active.
Cancels the effect of Overcharge. 
[Lv. 1]: Chance: 10%
[Lv. 2]: Chance: 20%
[Lv. 3]: Chance: 30%
[Lv. 4]: Chance: 40%
[Lv. 5]: Chance: 50%
[Lv. 6]: Chance: 60%
[Lv. 7]: Chance: 70%
[Lv. 8]: Chance: 80% 
[Lv. 9]: Chance: 90% 
[Lv.10]: Chance: 100%
Adds cost: (Skill Lv × 2) Zeny Pouch
SP Cost reduction increased by +10%
Effect: Reduces SP Cost by (10 + (2 × Skill Lv))%.`,
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
Type: Supportive 
Target: Self
SP Cost: 5 + (2 × Skill Lv)
Duration: 300 seconds
Requirement: Discount Lv: 3
Description: Grants a chance to randomly increase all skills' SP Cost by 10%, 20%, or 50% while active, and also increases W.ATK by the same numerical value as the SP Cost increase percentage.
Cancels the effect of Discount.
[Lv. 1]: Chance: 10%
[Lv. 2]: Chance: 20%
[Lv. 3]: Chance: 30%
[Lv. 4]: Chance: 40%
[Lv. 5]: Chance: 50%
[Lv. 6]: Chance: 60%
[Lv. 7]: Chance: 70%
[Lv. 8]: Chance: 80% 
[Lv. 9]: Chance: 90% 
[Lv.10]: Chance: 100%
Adds cost: (Skill Lv × 2) Zeny Pouch
Extra Attack and Extra Magical Attack increased by +10
Effect:
- Basic attacks consume 3 SP (flat)
- Skills have their SP Cost increased by (10 + (2 × Skill Lv))% + 3 SP (flat)
  (flat value applied at the end of the calculation)
- Increases Extra Attack / Extra Magical Attack by (10 + (2 × Skill Lv))`,
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
Description: Grants a chance to recover Empty Bottle and Empty Potion Bottle on casting skills that consume them as Catalysts.
[Lv. 1]; Recover Chance: 2% 
[Lv. 2]: Recover Chance: 4%
[Lv. 3]: Recover Chance: 6% 
[Lv. 4]: Recover Chance: 8% 
[Lv. 5]: Recover Chance: 10% 
[Lv. 6]: Recover Chance: 12% 
[Lv. 7]: Recover Chance: 14% 
[Lv. 8]: Recover Chance: 16% 
[Lv. 9]: Recover Chance: 18% 
[Lv.10]: Recover Chance: 20%`,
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
Element: Fire
Variable Cast Time: 0.70s
Fixed Cast Time: 0.30s 
After Cast Delay: 0.50s 
Cooldown: 0.60s 
Max Instances: 9 
Range: 9 
Hits: 1
SP Cost: 10
Requirement: Throwing Potions Techniques Lv: 3
Description: Stances a temporary 3x3 AoE at the targeted location that deals P.DMG to enemies every 0.5s, scaling with STR, Base Level and the learned level of Throwing Potions Techniques.
The damage is increased on enemies affected by Chemical Corrosion, and has a chance to Break their weapon.
Ignores Auto Guard.
Catalyst: 
  1x Mini Fire Bottle for Lv. 1~5
  1x Fire Bottle for Lv. 6~10
[Lv. 1]: ATK 120%, Break Chance: 1% Duration: 42s
[Lv. 2]: ATK 140%, Break Chance: 2% Duration: 44s
[Lv. 3]: ATK 160%, Break Chance: 3% Duration: 46s
[Lv. 4]: ATK 180%, Break Chance: 4% Duration: 48s
[Lv. 5]: ATK 200%, Break Chance: 5% Duration: 50s
[Lv. 6]: ATK 220%, Break Chance: 6% Duration: 52s
[Lv. 7]: ATK 240%, Break Chance: 7% Duration: 54s
[Lv. 8]: ATK 260%, Break Chance: 8% Duration: 56s
[Lv. 9]: ATK 280%, Break Chance: 9% Duration: 58s
[Lv.10]: ATK 300%, Break Chance: 10% Duration: 60s
Formula: ATK (%): 100 + (Skill Lv x 20) + (T. P. Techniques Lv x (Base Lv / 10)) + (STR / 2) + (Chemical Corrosion Stacks) `,
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
Variable Cast Time: 0.90s
Fixed Cast Time: 0.60s
After Cast Delay: 0.50s 
Range: 9 
Hits: 1
SP Cost: 15
Requirement: Demonstration Lv: 5
Description: Deals ranged P.DMG to the target, scaling with Base Level and the learned level of Throwing Potions Techniques. Has a chance to inflict Chemical Corrosion for 635.
If the enemy is affected by Chemical Corrosion, has a chance to Break the armor. Ignores Auto Guard and S.DEF.
Catalyst:
  1x Mini Acid Bottle for Lv. 1~5
  1x Acid Bottle for Lv. 6~10
[Lv. 1]: ATK 100% Corrosion/Break Chance: 1%
[Lv. 2]: ATK 200% Corrosion/Break Chance: 2% 
[Lv. 3]: ATK 300% Corrosion/Break Chance: 3% 
[Lv. 4]: ATK 400% Corrosion/Break Chance: 4%
[Lv. 5]: ATK 500% Corrosion/Break Chance: 5%
[Lv. 6]: ATK 600% Corrosion/Break Chance: 6%
[Lv. 7]: ATK 700% Corrosion/Break Chance: 7%
[Lv. 8]: ATK 800% Corrosion/Break Chance: 8%
[Lv. 9]: ATK 900% Corrosion/Break Chance: 9%
[Lv.10]: ATK 1000% Corrosion/Break Chance: 10%
Formula: ATK (%): (Skill Lv x 100) + (T. P. Techniques x Base Lv) + Chemical Corrosion Stacks `,
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
Variable Cast Time: 0.30s
Fixed Cast Time: 0.30s
After Cast Delay: 0.50s 
Range: 9
SP Cost: 35
Requirement: Acid Terror Lv: 5
Description: Throws resources into Demonstration cells, causing chemical reactions in the area.
[Lv. 1]: Oil Bottle: Increases Demonstration damage.
[Lv. 2]: Explosive Powder: Deals M.DMG damage to enemies within a 7x7 AoE and Knocks them back 4 cells. Ignores Auto Guard.
[Lv. 3]: Smoke Powder: Reduces P.DMG damage taken by 20% and increases FLEE by 20% for all entities within its 5x5 AoE. Ends all Demonstration cells within the area.
[Lv. 4]: Tear Gas: Reduces FLEE and ACC by 40% for enemies within its 7x7 AoE. Also drains 3% of their Max HP every 3s. Ends all Demonstration cells within the area.
[Lv. 5]: Acid Bottle: Deals ranged P.DMG damage to enemies standing on a Demonstration cell within a 7x7 AoE. Ends all Demonstration cells within the area.
Formula: 
Oil Bottle:
Demonstration ATK (%): + Base Lv + STR
Explosive Powder:
ATK (%): STR x 10
Smoke Powder & Tear Gas:
Duration (seconds): Demonstration Lv x 5
Acid Bottle:
ATK (%): ((900 + (Higher Lv x 150)) x (1 + (Target VIT / 100))) + Chemical Corrosion Stacks
Higher Lv: The highest value between 5 and the learned level of Acid Demonstration `,
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
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Passive
Type: Misc
Requirement: None
Description: Increases the success rate of Potion and Bottles creation.
Also increases the effectiveness of potions. 
[Lv. 1]: Rate +2%, Effectiveness +5% 
[Lv. 2]: Rate +4%, Effectiveness +10% 
[Lv. 3]: Rate +6%, Effectiveness +15% 
[Lv. 4]: Rate +8%, Effectiveness +20% 
[Lv. 5]: Rate +10%, Effectiveness +25%`,
  img: icon_alc_1_namespaceObject
}, {
  id: "helmChemicalProtection",
  level: 0,
  dependencies: [{
    id: "potionResearch",
    minLevel: 3
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
Type: Supportive 
Target: Ally
Variable Cast Time: 0.90s
Fixed Cast Time: 0.60s
After Cast Delay: 0.50s 
Cooldown: A.Delay
Range: 1
SP Cost: 20
Requirement: Potion Research Lv: 3
Description: Protects the target's equipped helm, preventing Break and Remove.
Also increases H.MDEF and reduces the damage from Chemical Corrosion by 25%. At level 4 or higher, the protection cannot be canceled upon death or Dispel.
Catalyst: 
  1x Mini Glistening Bottle for Lv. 1~3
  1x Glistening Bottle for Lv. 4~5
[Lv. 1]: H.MDEF +3. Duration: 60s 
[Lv. 2]: H.MDEF +4. Duration: 120s 
[Lv. 3]: H.MDEF +5. Duration: 180s 
[Lv. 4]: H.MDEF +7. Duration: 360s 
[Lv. 5]: H.MDEF +10. Duration: 720s`,
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
Type: Supportive 
Target: Ally
Variable Cast Time: 0.90s
Fixed Cast Time: 0.60s
After Cast Delay: 0.50s 
Cooldown: A.Delay 
Range: 1
SP Cost: 20
Requirement: Potion Research Lv: 3, Helm Chemical Protection Lv: 1
Description: Protects the target's equipped shield, preventing Break and Remove.
Also increases H.DEF and reduces the damage from Chemical Corrosion by 25%, At level 4 or higher, the protection cannot be canceled upon death or Dispel.
Catalyst:
  1x Mini Glistening Bottle for Lv. 1~3
  1x Glistening Bottle for Lv. 4~5
[Lv. 1]: H.DEF +12. Duration: 60s 
[Lv. 2]: H.DEF +16. Duration: 120s
[Lv. 3]: H.DEF +20. Duration: 180s 
[Lv. 4]: H.DEF +28. Duration: 360s 
[Lv. 5]: H.DEF +40. Duration: 720s`,
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
Type: Supportive 
Target: Ally
Variable Cast Time: 0.90s
Fixed Cast Time: 0.60s
After Cast Delay: 0.50s 
Cooldown: A.Delay
Range: 1
SP Cost: 20
Requirement: Potion Research Lv: 3, Helm Chemical Protection Lv: 1, Shield Chemical Protection Lv: 1
Description: Protects the target's equipped armor, preventing Break and Remove. Also increases HP and reduces the damage from Chemical Corrosion by 25%,
At level 4 or higher, the protection cannot be canceled upon death or Dispel. 
Catalyst:
  1x Mini Glistening Bottle for Lv. 1~3
  1x Glistening Bottle for Lv. 4~5
[Lv. 1]: HP +300. Duration: 60s 
[Lv. 2]: HP +400. Duration: 120s 
[Lv. 3]: HP +500. Duration: 180s 
[Lv. 4]: HP +700. Duration: 360s 
[Lv. 5]: HP +1000. Duration: 720s`,
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
Type: Supportive 
Target: Ally
Variable Cast Time: 0.90s
Fixed Cast Time: 0.60s
After Cast Delay: 0.50s 
Cooldown: A.Delay 
Range: 1
SP Cost: 20
Requirement: Potion Research Lv: 3, Helm Chemical Protection Lv: 1, Shield Chemical Protection Lv: 1, Armor Chemical Protection Lv: 1
Description: Protects the target's equipped weapon, preventing Break and Remove. Also increases B.ATK and B.MATK, and reduces the damage from Chemical Corrosion by 25%,
At level 4 or higher, the protection cannot be canceled upon death or Dispel. 
Catalyst:
  1x Mini Glistening Bottle for Lv. 1~3
  1x Glistening Bottle for Lv. 4~5
[Lv. 1]: B.ATK/B.MATK +6. Duration: 60s 
[Lv. 2]: B.ATK/B.MATK +8. Duration: 120s 
[Lv. 3]: B.ATK/B.MATK +10. Duration: 180s 
[Lv. 4]: B.ATK/B.MATK +14. Duration: 360s 
[Lv. 5]: B.ATK/B.MATK +20. Duration: 720s`,
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
Type: Supportive 
Target: Ground
Variable Cast Time: 1.40s
Fixed Cast Time: 0.60s
After Cast Delay: 0.50s 
Range: 4
SP Cost: 20
Requirement: Throwing Potions Techniques Lv: 3
Description: Summons a familiar at the targeted location for 300s.
The familiar's stats scale with the equipped Armor, Shield, Garment, and Weapon. Its basic attacks' property depends on the weapon's property, and it cannot target enemies far from its master.
Mini familiars deal half the damage and have half the HP.
Requires Cannibalize Peak.
Catalyst: 
  1x Mini Plant Bottle for Lv. 1~5
  1x Plant Bottle for Lv. 6~10
[Lv. 1]: Mini Mandragora
[Lv. 2]: Mini Hydra
[Lv. 3]: Mini Flora
[Lv. 4]: Mini Parasite
[Lv. 5]: Mini Geographer
[Lv. 6]: Mandragora
[Lv. 7]: Hydra
[Lv. 8]: Flora
[Lv. 9]: Parasite
[Lv.10]: Geographer
Formla:  Plant Stats Scaling: (((((INT / 2) + (DEX / 10)) x Stat) / 100) x ((T. P. Techniques Lv x 15) / 100)) + ((Plant Lv x Stat) / 100) 
Plant Level: ((Base Lv x 60) / 100) + ((Job Lv x 50) / 100) `,
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
Type: Supportive 
Target: Ground
Variable Cast Time: 0.30s
Fixed Cast Time: 0.30s
After Cast Delay: 0.50s 
Cooldown: 10s
Range: 2
Requirement: Bio Cannibalize Lv: 5
Description: Removes all owned Cannibalize familiars within the AoE at the targeted location.
Grants a chance to recover Mini Plant Bottle or Plant Bottle from each familiar, depending on its type.
[Lv. 1]: Chance: 36%, AoE 3x3, SP Cost: 30
[Lv. 2]: Chance: 42%, AoE 5x5. SP Cost: 35
[Lv. 3]: Chance: 48%, AoE 7x7. SP Cost: 40
[Lv. 4]: Chance: 54%, AoE 9x9, SP Cost: 45
[Lv. 5]: Chance: 60%, AoE 11x11. SP Cost: 50`,
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
Type: Supportive
Target: Enemy
Variable Cast Time: 0.90s
Fixed Cast Time: 0.60s
After Cast Delay: 0.50s 
Max Instances: 3
Range: 9
Requirement: Deplant Lv: 3, Bio Cannibalize Lv: 7
Description: Throws a seed at the target which drains HP every 0.65s, scaling with INT, Base Level and the learned level of Throwing Potions Techniques. Increases its WD by 90% while active.
Also changes the target of the caster's Cannibalize familiars to the enemy if the caster is within their attack range.
Acid Terror, Acid Demonstration, or any Fire property damage burns the seed, dealing Fire M.DMG to the target and canceling the effect.
The duration is halved on bosses. 
Catalyst: 1x Briar Seed
[Lv. 1]: Duration: 4s. SP Cost: 22 
[Lv. 2]: Duration: 8s. SP Cost: 26 
[Lv. 3]: Duration: 12s. SP Cost: 30 
[Lv. 4]: Duration: 16s. SP Cost: 34 
[Lv. 5]: Duration: 20s. SP Cost: 38
Formula: Damage: ((((Skill Lv x 100) + INT + Base Lv) + ((MATK / 2) x T. P. Techniques Lv) / 10))) x 65) / 100 
Fire Property MATK (%): 500% `,
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
Type: Supportive 
Target: Self
SP Cost: 5
Requirement: None
Description: Crafts potions and bottles from items.
Base Level, Job Level, and Stats increase the number of crafted items.
Guide: Pharmacy Creation Guide 
Catalyst: 1x Medicine Bowl
[Lv. 1]: Bonus Efficiency: 0% 
[Lv. 2]: Bonus Efficiency: 25% 
[Lv. 3]: Bonus Efficiency: 50% 
[Lv. 4]: Bonus Efficiency: 75% 
[Lv. 5]: Bonus Efficiency: 100%
Formula:
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
Type: Ground
Target: Enemy
Element: Neutral
Variable Cast Time: 1.40s
Fixed Cast Time: 0.60s 
After Cast Delay: 0.50s 
Range: 7
Hits: 1
SP Cost: 10
Requirement: Throwing Potions Techniques Lv: 3
Description: Command a Marine Sphere to explode after 0.7s at the targeted location, dealing P.DMG to enemies within an 11x11 AoE.
The damage scales with INT, VIT, Base Level and the learned level of Throwing Potions Techniques, and the Sphere's HP.
Catalyst:
  1x Mini Marine Sphere Bottle for Lv. 1~5
  1x Marine Sphere Bottle for Lv. 6~10
[Lv. 1]: Sphere Base HP: 4
[Lv. 2]: Sphere Base HP: 8
[Lv. 3]: Sphere Base HP: 12 
[Lv. 4]: Sphere Base HP: 16 
[Lv. 5]: Sphere Base HP: 20 
[Lv. 6]: Sphere Base HP: 24 
[Lv. 7]: Sphere Base HP: 28 
[Lv. 8]: Sphere Base HP: 32 
[Lv. 9]: Sphere Base HP: 36 
[Lv.10]: Sphere Base HP: 40
Formula: Sphere HP: ((((Skill Lv x 4) + T. P. Techniques Lv) x Base Lv) x (100+ ((VIT + INT) / 2))) / 100 `,
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
Type: Supportive 
Target: Ally
After Cast Delay: 0.50s 
Range: 9
SP Cost: 5
Requirement: Marine Sphere Bomb Lv: 5
Description: Consumes a Potion to restore the target's HP, scaling with the user's INT, the learned level of Throwing Potions Techniques and skill level, and the target's VIT.
[Lv. 1]: Red Potion. CD - 2s. ACD - 1s.
[Lv. 2]: Red Potion. CD - 1s. ACD - 0.5s.
[Lv. 3]: Orange Potion. CD - 2s. ACD - 1s.
[Lv. 4]: Orange Potion. CD - 1s. ACD - 0.5s.
[Lv. 5]: Yellow Potion. CD - 2s. ACD - 1s.
[Lv. 6]: Yellow Potion. CD - 1s. ACD - 0.5s.
[Lv. 7]: Green Potion. CD - 2s. ACD - 1s.
[Lv. 8]: Green Potion. CD - 1s. ACD - 0.5s.
[Lv. 9]: White Potion. CD - 2s. ACD - 1s.
[Lv.10]: White Potion. CD - 1s. ACD - 0.5s.

Base Healing:
Red Potion - (5 * Target Base Lv) + 120 
Orange Potion - (4 * Target Base Lv) + 240 
Yellow Potion - (3 * Target Base Lv) + 480 
Green Potion - (2 * Target Base Lv) + 960 
White Potion - (1 * Target Base Lv) + 1920 

Formula: Final Heal: (((Base Healing * (100 + INT + (Target VIT / 2))) / 100) * ((Skill Lv * 5) + (T. P. Techniques Lv x 5))) / 100 `,
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
  inform: `Max Lv: 5
Skill Form: Active
Type: Supportive
Target: Enemy/Ally
After Cast Delay: A.Delay - 0.28s
Cooldown: A.Delay + 0.36s
Range: 9
Hits: 1
Requirement: Potion Pitcher Lv: 5
Description: Deals Magical Damage to the target, scaling with INT.
Catalyst: 1x Sling Item
[Lv. 1]: SP Cost: 25 
[Lv. 2]: SP Cost: 30
[Lv. 3]: SP Cost: 35
[Lv. 4]: SP Cost: 40 
[Lv. 5]: SP Cost: 45
Formula: MATK (%): 100 + (Skill Lv x (100 + INT)) `,
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
Variable Cast Time: 0.90s
Fixed Cast Time: 0.60s
After Cast Delay: 0.50s
Cooldown: 1s
Range: 9
Hits: 10
SP Cost: 15
Requirement: Demonstration Lv: 10, Acid Terror Lv: 10, Chemical Reaction Lv: 5
Description: Deals ranged P.DMG to the target, scaling with the target's VIT, Chemical Corrosion Stacks and Neutral property resistance.
Has a chance to inflict Chemical Corrosion for 63s, and if the enemy is already affected by it, has a chance to Break its armor.
Catalysts:
  1x Mini Fire Bottle for Lv. 1~5
  1x Mini Acid Bottle for Lv. 1~5
  1x Fire Bottle for Lv. 6~10
  1x Acid Bottle for Lv. 6~10
[Lv. 1]: ATK 1050%, Corrosion Chance: 1% 
[Lv. 2]: ATK 1200%, Corrosion Chance: 2% 
[Lv. 3]: ATK 1350%, Corrosion Chance: 3% 
[Lv. 4]: ATK 1500%, Corrosion Chance: 4% 
[Lv. 5]: ATK 1650%, Corrosion Chance: 5% 
[Lv. 6]: ATK 1800%, Corrosion Chance: 6% 
[Lv. 7]: ATK 1950%, Corrosion Chance: 7% 
[Lv. 8]: ATK 2100%, Corrosion Chance: 8% 
[Lv. 9]: ATK 2250%, Corrosion Chance: 9% 
[Lv.10]: ATK 2400%, Corrosion Chance: 10%
Formula: ATK (%): ((900 + (Skill Lv x 150)) x (1 + (Target VIT / 100))) + Chemical Corrosion Stacks
ATK (%) against Boss: ((900 + (Skill Lv x 150)) x (1 + ((Target VIT / 2) 100))) + Chemical Corrosion Stacks `,
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
Type: Supportive
Target: Ally
Variable Cast Time: 0.90s
Fixed Cast Time: 0.60s
After Cast Delay: 0.50s 
Cooldown: A.Delay 
Range: 1
SP Cost: 40
Requirement: Weapon Chemical Protection Lv: 1, Shield Chemical Protection Lv: 1, Armor Chemical Protection Lv: 1, Helm Chemical Protection Lv: 1
Description: Protects the target's equipment, activating Helm, Shield, Armor, and Weapon Chemical Protection effects.
The effects and duration depend on the learned level of each corresponding skill. 
Catalyst: 1x Glistening Bottle `,
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
Type: Supportive 
Target: Ground 
Element: Earth
Variable Cast Time: 2s
Fixed Cast Time: 0.60s
After Cast Delay: A.Delay + 1s
Cooldown: 5s
Range: 2
Hits: 1
SP Cost: 35
Requirement: Bio Cannibalize Lv: 10, Briar Vines Lv: 5, Deplant Lv: 5
Description: Fertilizes a 9x9 AoE for 5s, dealing M.DMG to enemies every 0.5s. Also applies a bonus effect on plant monsters within the area based on its cast level.
The bonus duration scales with learned level of Throwing Potions Techniques.
Catalyst: 1x Fertilizer Bag
[Lv. 1]: MATK 110%, Poison Injection 120% VCT: 2.90s. Bonus Duration: 6s. SP Cost: 22 
[Lv. 2]: MATK 120%, Poison Injection 60% VCT: 2.80s. Bonus Duration: 12s. SP Cost: 24 
[Lv. 3]: MATK 130%, Harden 30% VCT: 2.70s. Bonus Duration: 18s. SP Cost: 26 
[Lv. 4]: MATK 140%, Harden 15% VCT: 2.60s. Bonus Duration: 24s. SP Cost: 28 
[Lv. 5]: MATK 150%, Penetration 60% VCT: 2.50s. Bonus Duration: 30s. SP Cost: 30 
[Lv. 6]: MATK 160%, Penetration 30% VCT: 2.40s. Bonus Duration: 36s. SP Cost: 32 
[Lv. 7]: MATK 170%, Long Live 50% VCT: 2.30s. Bonus Duration: 42s. SP Cost: 34 
[Lv. 8]: MATK 180%, Long Live 25% VCT: 2.20s. Bonus Duration: 48s. SP Cost: 36
[Lv. 9]: MATK 190%, Undying 30% VCT: 2.10s. Bonus Duration: 54s. SP Cost: 38 
[Lv.10]: MATK 200%, Undying 15% VCT: 2.00s. Bonus Duration: 60s. SP Cost: 40
Formula: MATK (%): 100 + (Skill Lv x 10)
Duration (seconds): (Skill Lv x 6) + (T. P. Techniques Lv x 6) `,
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
Type: Supportive 
Target: Ground
Variable Cast Time: 1.10s
Fixed Cast Time: 0.90s
After Cast Delay: 1s 
Range: 3
SP Cost: 30
Requirement: Sling Item Lv: 5
Description: Consumes a potion to restore HP of allies within a 7x7 AoE around the targeted location, scaling with the user's INT, the learned level of Throwing Potions Techniques and Potion Pitcher, and the target's VIT.
CD scales with skill level.
[Lv. 1]: Red Potion. CD - 2s. ACD - 1s.
[Lv. 2]: Red Potion. CD - 1s. ACD - 0.5s.
[Lv. 3]: Orange Potion. CD - 2s. ACD - 1s.
[Lv. 4]: Orange Potion. CD - 1s. ACD - 0.5s.
[Lv. 5]: Yellow Potion. CD - 2s. ACD - 1s.
[Lv. 6]: Yellow Potion. CD - 1s. ACD - 0.5s.
[Lv. 7]: Green Potion. CD - 2s. ACD - 1s.
[Lv. 8]: Green Potion. CD - 1s. ACD - 0.5s.
[Lv. 9]: White Potion. CD - 2s. ACD - 1s.
[Lv.10]: White Potion. CD - 1s. ACD - 0.5s.

Base Healing:
Red Potion - (5 * Target Base Lv) + 120 
Orange Potion - (4 * Target Base Lv) + 240 
Yellow Potion - (3 * Target Base Lv) + 480 
Green Potion - (2 * Target Base Lv) + 960 
White Potion - (1 * Target Base Lv) + 1920 

Formula: Final Heal: (((Base Healing * (100 + INT + (Target VIT / 2))) / 100) * ((Skill Lv * 5) + (T. P. Techniques Lv x 5))) / 100 `,
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
;// ./src/img/icon_bsm/icon_bsm_39.png
const icon_bsm_39_namespaceObject = __webpack_require__.p + "61445d31bedae4e8ebb8.png";
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
  inform: `Max Lv: 10
Skill Form: Active
Weapon: Axes/Maces 
Type: Physical
Target: Ground
After Cast Delay: A.Delay - 0.22s
Cooldown: A.Delay + 0.36s
Range: 1
SP Cost: 10
Requirement: None
Description: Attempts to Stun enemies within a 5x5 AoE around the targeted location for 4.5s.
[Lv. 1]: Stun Chance: 30%
[Lv. 2]: Stun Chance: 40%
[Lv. 3]: Stun Chance: 50% 
[Lv. 4]: Stun Chance: 60% 
[Lv. 5]: Stun Chance: 70%`,
  img: icon_bsm_17_namespaceObject
}, {
  id: "reforge",
  level: 0,
  dependencies: [
    // { id: "enchantedStoneCraft", minLevel: 1 },
    // { id: "metalTempering", minLevel: 1 },
  ],
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
Type: Supportive 
Target: Self
Requirement: None
Description: Grants the ability to reforge weapons.
The reforge's success rate scales with DEX, LUK, Job Level, skill level and Anvil type.
Reforging a reforged weapon will override its reforge.
Requires any type of Anvil in the inventory. 
[Lv. 1]: Success Rate +3%
[Lv. 2]: Success Rate +6%
[Lv. 3]: Success Rate +9% 
[Lv. 4]: Success Rate +12% 
[Lv. 5]: Success Rate +15%
Formula: Success Rate (%): (Reforge Lv x 3) + (Job Lv x 0.2) + ((DEX + LUK) x 0.1) + Anvil Bonus
Anvil Bonus:
Emperium Anvil 10
Golden Anvil: 5
Oridecon Anvil: 3
Anvil: 0
*Only the highest one is considered 
- UPDATE:
All versions of Weapon Reforging have been removed from the skill tree.
Their effects now belong to Reforge.`,
  img: icon_bsm_39_namespaceObject
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
Type: Supportive
Target: Ally
Range: 2
Requirement: Reforge Lv: 2
Description: Repairs the damaged equipment of the target, allowing it to be usable again. Requires any type of Anvil in the inventory.
Catalyst: 2x Steel `,
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
Description: Reduces the DMG taken from basic attacks and skills of Fire and Neutral property.
[Lv. 1]: Fire +4%, Neutral +1% 
[Lv. 2]: Fire +8%, Neutral +2% 
[Lv. 3]: Fire +12%, Neutral +3% 
[Lv. 4]: Fire +16%, Neutral +4% 
[Lv. 5]: Fire +20%, Neutral +5%`,
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
Weapon: Axes/Maces 
Type: Supportive 
Target: Self
After Cast Delay: 0.30s
Cooldown: A.Delay
Requirement: Axe Mastery Lv: 3
Description: Temporarily increases nearby allies' ASPD by 20%,
Also increases their CRIT and ACC. [Lv. 1]: CRIT +1. ACC +2. SP Cost: 16 Duration: 84s
[Lv. 2]: CRIT +2. ACC +4. SP Cost: 18 Duration: 108s
[Lv. 3]: CRIT +3. ACC +6. SP Cost: 20 Duration: 132s
[Lv. 4]: CRIT +4. ACC +8. SP Cost: 22 Duration: 156s
[Lv. 5]: CRIT +5. ACC +10. SP Cost: 24 Duration: 180s
[Lv. 6]: CRIT +6. ACC +12. SP Cost: 26 Duration: 204s
[Lv. 7]: CRIT +7. ACC +14. SP Cost: 28 Duration: 228s
[Lv. 8]: CRIT +8. ACC +16. SP Cost: 30 Duration: 252s
[Lv. 9]: CRIT +9. ACC +18, SP Cost: 32 Duration: 2765
[Lv.10]: CRIT +10. ACC +20. SP Cost: 34 Duration: 300s`,
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
Type: Supportive 
Target: Self
After Cast Delay: 0.30s
Cooldown: A.Delay
Requirement: Adrenaline Rush Lv: 3
Description: Temporarily increases nearby allies' Weapon Size Modifier.
[Lv. 1]: Modifier +5%, SP Cost: 18 Duration: 30s
[Lv. 2]: Modifier +10%, SP Cost: 16 Duration: 60s
[Lv. 3]: Modifier +15%, SP Cost: 14 Duration: 90s
[Lv. 4]: Modifier +20%, SP Cost: 12 Duration: 120s
[Lv. 5]: Modifier +25%, SP Cost: 10 Duration: 150s`,
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
Type: Supportive 
Target: Self
After Cast Delay: 0.30s
Cooldown: A.Delay
Requirement: Weapon Perfection Lv: 3
Description: Temporarily increases nearby allies' R.ATK.
[Lv. 1]: R.ATK +7%, SP Cost: 19 Duration: 60s
[Lv. 2]: R.ATK +9%, SP Cost: 18 Duration: 70s
[Lv. 3]: R.ATK +11%, SP Cost: 17 Duration: 80s
[Lv. 4]: R.ATK +13%, SP Cost: 16 Duration: 90s
[Lv. 5]: R.ATK +15%, SP Cost: 15 Duration: 100s
[Lv. 6]: R.ATK +17%, SP Cost: 14 Duration: 110s
[Lv. 7]: R.ATK +19%, SP Cost: 13 Duration: 120s
[Lv. 8]: R.ATK +21%, SP Cost: 12 Duration: 130s
[Lv. 9]: R.ATK +23%, SP Cost: 11 Duration: 140s
[Lv.10]: R.ATK +25%, SP Cost: 10 Duration: 150s`,
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
Skill Form: Toggle
Type: Supportive 
Target: Self
After Cast Delay: 0.30s
Cooldown: A.Delay
Requirement: Power Thrust Lv: 5
Description: Removes P.DMG Variance, ensuring maximum damage while active, but drains SP every 2s.
Also makes Discount and Overcharge always apply their max bonus.
[Lv. 1]: SP Drain: 6
[Lv. 2]: SP Drain: 5
[Lv. 3]: SP Drain: 4
[Lv. 4]: SP Drain: 3 
[Lv. 5]: SP Drain: 2`,
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
Description: Increases B.ATK and ACC. 
[Lv. 1]: B.ATK +4, ACC +4% 
[Lv. 2]: B.ATK +8, ACC +8% 
[Lv. 3]: B.ATK +12. ACC +12% 
[Lv. 4]: B.ATK +16. ACC +16% 
[Lv. 5]: B.ATK +20. ACC +20%`,
  img: icon_bsm_14_namespaceObject
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
Description: Grants the ability to perform extraordinary reforges on Blade-type weapons. Also increases the success rate of reforging Blade-type weapons.
[Lv. 1]: Blade Success Rate +5% 
[Lv. 2]: Blade Success Rate +10% 
[Lv. 3]: Blade Success Rate +15%`,
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
Description: Grants the ability to perform extraordinary reforges on Blunt-type weapons. Also increases the success rate of reforging Blunt-type weapons.
[Lv. 1]: Blunt Success Rate +5% 
[Lv. 2]: Blunt Success Rate +10% 
[Lv. 3]: Blunt Success Rate +15%`,
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
Description: Grants the ability to perform extraordinary reforges on Pierce-type weapons. Also increases the success rate of reforging Pierce-type weapons.
[Lv. 1]: Pierce Success Rate +5% 
[Lv. 2]: Pierce Success Rate +10% 
[Lv. 3]: Pierce Success Rate +15%`,
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
Description: Grants the ability to perform extraordinary reforges on Magic-type weapons. Also increases the success rate of reforging Magic-type weapons.
[Lv. 1]: Magic Success Rate +5% 
[Lv. 2]: Magic Success Rate +10% 
[Lv. 3]: Magic Success Rate +15%`,
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
Description: Grants the ability to perform extraordinary reforges on String-type weapons. Also increases the success rate of reforging String-type weapons.
[Lv. 1]: String Success Rate +5% 
[Lv. 2]: String Success Rate +10% 
[Lv. 3]: String Success Rate +15%`,
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
Description: Grants the ability to perform extraordinary reforges on Exotic-type weapons. Also increases the success rate of reforging Exotic-type weapons.
[Lv. 1]: Exotic Success Rate +5% 
[Lv. 2]: Exotic Success Rate +10% 
[Lv. 3]: Exotic Success Rate +15%`,
  img: icon_bsm_36_namespaceObject
}];

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
  dependencies: [
    // { id: "cartRevolution", minLevel: 10 },
    // { id: "cartBoost", minLevel: 1 },
    // { id: "cartTwister", minLevel: 5 },
  ],
  dependent: [],
  element: null,
  skillName: "Cart Termination",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
After Cast Delay: A.Delay - 0.22s
Cooldown: A.Delay
Range: 2
Hits: 1
SP Cost: 15
Requirement: None
Description: Deals P.DMG to the target, scaling with Pushcart's current weight. Ignores Auto Guard, Parry, and Weapon Blocking.
Requires a Pushcart.
Can be cast up to 9 cells, transforming into High Speed Cart Ram if cast from more than 3 cells.
High Speed Cart Ram: Charges to the target, dealing P.DMG.
Has a chance to inflict Stun for 4.5s.
Also temporarily grants T.ATK bonus to pushcart Skills.
VCT scales with WD and the distance from the target, and cannot be decreased by stats or gear.
High Speed Cart Ram has its own CD, scaling with the distance from the target.
Catalyst: 3x Zeny Pouch

Formula:
ATK (%): (((Cart Weight  / (15 - Skill Lv)) x 8000) / 8000) - 100 
VCT (seconds): WD x Skill Lv
Special Effect:
Stun Chance (%): 10 + (Skill Lv x 7)
High Speed Cart Ram Cooldown (seconds): 2 x Number of Cells 
True ATK: ((Cart Weight / 20) x STR) / 100 
Duration (seconds): 1 x Skill Lv `,
  img: icon_wsm_4_namespaceObject
},
// Requirement: Cart Revolution Lv: 10, Cart Boost Lv: 1, Cart Twister Lv: 5
{
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
Type: Supportive
Target: Ally
Range: 2
Fixed Cast Time: 1s
After Cast Delay: 0.30s
Requirement: Reforge Lv: 5, Exotic Weapon Reforging Lv: 1, Repair Weapon Lv: 1, Blade Weapon Reforging Lv: 1, Blunt Weapon Reforging Lv: 1, Pierce Weapon Reforging Lv: 1, Magic Weapon Reforging Lv: 1, String Weapon Reforging Lv: 1
Description: Enhances the target's Weapon or Shield for 30s.
Has a chance for a perfect enhancement, increasing its effectiveness and doubling duration. The chance scales with DEX, LUK, Anvil type, equipment stats and skill level. Requires any type of Anvil in the inventory. Catalyst: 
  2x Rough Oridecon for Lv. 1~2 Weapons
  2x Oridecon for Lv. 3~4 Weapons
  2x Rough Elunium for Lv. 1~2 Shields
  2x Elunium for Lv. 3~4 Shields
[Lv. 1]: SP Cost: 33
[Lv. 2]: SP Cost: 36
[Lv. 3]: SP Cost: 39
[Lv. 4]: SP Cost: 42
[Lv. 5]: SP Cost: 45
[Lv. 6]: SP Cost: 48
[Lv. 7]: SP Cost: 51
[Lv. 8]: SP Cost: 54 
[Lv. 9]: SP Cost: 57 
[Lv.10]: SP Cost: 60
Formula:
Perfect Enhance Chance (%): (((Skill Lv x 10) + Anvil Bonus + ((DEX x LUK) / 600) x 100) - Penalty) / 100 
Penalty: ((Equip Refine x 6) + (Equip Lv x 10)) x 100
Anvil Bonus: 
Emperium Anvil 10
Golden Anvil: 5
Oridecon Anvil: 3
Anvil: 0 `,
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
Type: Supportive 
Target: Self
After Cast Delay: 0.30s 
Cooldown: A.Delay
SP Cost: 15
Requirement: Power Thrust Lv: 10
Description: Increases the allies' refine bonus received from their weapon.
Catalyst: 5x Zeny Pouch
[Lv. 1]: Refine Bonus +10%, Duration: 156s 
[Lv. 2]: Refine Bonus +20%, Duration: 192s 
[Lv. 3]: Refine Bonus +30%, Duration: 228s 
[Lv. 4]: Refine Bonus +40%, Duration: 264s 
[Lv. 5]: Refine Bonus +50%, Duration: 300s`,
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
Type: Supportive 
Target: Self
After Cast Delay: 0.30s 
Cooldown: A.Delay
Requirement: Skin Tempering Lv: 5, Hammerfall Lv: 5
Description: Temporarily adds Fire property damage to melee P.DMG, scaling with DEX and LUK. This also applies to reflected melee P.DMG.
The damage bonus does not work on pushcart Skills.
Grants a chance to reduce normal monsters' W.ATK, B.MATK and P.DEF by 15% for 60s on performing basic attacks. Also grants a chance to Break players' weapon and armor.
[Lv. 1]: Duration: 15s. SP Cost: 45
[Lv. 2]: Duration: 20s. SP Cost: 50
[Lv. 3]: Duration: 25s. SP Cost: 55 
[Lv. 4]: Duration: 30s. SP Cost: 60 
[Lv. 5]: Duration: 35s. SP Cost: 65 
[Lv. 6]: Duration: 40s. SP Cost: 70 
[Lv. 7]: Duration: 45s. SP Cost: 75 
[Lv. 8]: Duration: 50s. SP Cost: 80 
[Lv. 9]: Duration: 55s. SP Cost: 85 
[Lv.10]: Duration: 60s. SP Cost: 90
Formula:
Fire Damage: (Skill Lv x 50) + ((DEX + LUK) × 5)
Reflect Fire Damage: (((Skill Lv x 50) + ((DEX + LUK) x 5)) x User's Melee Reflect Rate) / 100 
Break Weapon chance (%): 1 x Skill Lv
Break Armor chance (%): 0.7 x Skill Lv
Reduce W.ATK/B.MATK Chance (%): 1 x Skill Lv
Reduce P.DEF Chance (%): 0.7 x Skill Lv `,
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
  }, {
    id: "penitent"
  }],
  element: null,
  skillName: "Divine Protection",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Passive
Type: Physical
Requirement: None
Description: Grants S.DEF and S.MDEF against Demon, Undead and Corrupt monsters, scaling with Base Level. Also grants a chance. to activate Divine Protection for 10s when receiving damage from these monsters. 
[Lv. 1]; S.DEF/S.MDEF +3. Chance: 1% 
[Lv. 2]: S.DEF/S.MDEF +6. Chance: 2% 
[Lv. 3]: S.DEF/S.MDEF +9. Chance: 3% 
[Lv. 4]: S.DEF/S.MDEF +12. Chance: 4% 
[Lv. 5]: S.DEF/S.MDEF +15. Chance: 5% 
[Lv. 6]: S.DEF/S.MDEF +18. Chance: 6% 
[Lv. 7]: S.DEF/S.MDEF +21. Chance: 7% 
[Lv. 8]: S.DEF/S.MDEF +24. Chance: 8% 
[Lv. 9]: S.DEF/S.MDEF +27. Chance: 9% 
[Lv.10]: S.DEF/S.MDEF +30. Chance: 10%
Formula: S.DEF/S.MDEF: (Skill Lv x 3) + Base Lv `,
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
  }, {
    id: "penitent"
  }],
  element: null,
  skillName: "Demon Bane",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Passive
Type: Physical
Requirement: Divine Protection Lv: 3
Description: Grants Mastery ATK and Mastery MATK against Demon, Undead and Corrupt monsters, scaling with Base Level. Also grants a chance to activate Demon Bane for 10s when deals damage to these monsters.
[Lv. 1]: Mastery +3. Chance: 1% 
[Lv. 2]: Mastery +6. Chance: 2% 
[Lv. 3]: Mastery +9. Chance: 3% 
[Lv. 4]: Mastery +12. Chance: 4% 
[Lv. 5]: Mastery +15. Chance: 5% 
[Lv. 6]: Mastery +18. Chance: 6% 
[Lv. 7]: Mastery +21. Chance: 7% 
[Lv. 8]: Mastery +24. Chance: 8% 
[Lv. 9]: Mastery +27. Chance: 9% 
[Lv.10]: Mastery +30. Chance: 10%`,
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
Type: Supportive
Target: Ally
After Cast Delay: 1s
Range: 9
Requirement: None
Description: Restores the target's HP, scaling with MATK and the Weapon's Level.
Against Undead and Corrupt monsters, deals Holy property M.DMG damage equal to 75% of the amount of the HP restored. 
[Lv. 1]: SP Cost: 13
[Lv. 2]: SP Cost: 16
[Lv. 3]: SP Cost: 19
[Lv. 4]: SP Cost: 22
[Lv. 5]: SP Cost: 25
[Lv. 6]: SP Cost: 28
[Lv. 7]: SP Cost: 31
[Lv. 8]: SP Cost: 34 
[Lv. 9]: SP Cost: 37 
[Lv.10]: SP Cost: 40
Formula: Heal: MATK + (((Skill Lv x 100) / 4) x Weapon Lv) `,
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
Type: Supportive
Target: Ally
Cooldown: 35
Range: 9
Requirement: Heal Lv: 2
Description: Attempts to remove Silence, Chaos and Blind from the target.
The chance scales with the user's INT and Base Level, and target's INT, LUK and Base Level.
Also grants +20% resistance to the removed statuses for 10s in a successful attempt.

Silence Chance (%): ((Base Lv x 10) + (INT x 40) + (Target Base Lv x 10) + (Target INT x 40)) / 100 
Chaos Chance (%): ((Base Lv x 10) + (INT x 40)) + (Target Base Lv x 10) + (Target LUK × 40)) / 100
Blind Chance (%): ((Base Lv x 10) + (INT x 40) + (Target Base Lv x 10) + (Target INT x 20) + (Target LUK x 20)) / 100 `,
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
Type: Supportive 
Target: Ally
Variable Cast Time: 0.70s
Fixed Cast Time: 0.30s
After Cast Delay: 1s 
Cooldown: A.Delay 
Range: 9
Requirement: Divine Protection Lv: 3
Description: Increases VIT, S.DEF and Max HP of the target for 240s.
The VIT bonus scales with Job Level, and the Max HP bonus scales with the target's Base Level.
[Lv. 1]; VIT +1. S.DEF +7%, SP Cost: 22 
[Lv. 2]: VIT +2. S.DEF +9%, SP Cost: 24 
[Lv. 3]: VIT +3. S.DEF +11%, SP Cost: 26 
[Lv. 4]: VIT +4. S.DEF +13%, SP Cost: 28 
[Lv. 5]: VIT +5. S.DEF +15%, SP Cost: 30
[Lv. 6]; VIT +6. S.DEF +17%, SP Cost: 32 
[Lv. 7]: VIT +7. S.DEF +19%, SP Cost: 34 
[Lv. 8]: VIT +8. S.DEF +21%, SP Cost: 36 
[Lv. 9]: VIT +9. S.DEF +23%, SP Cost: 38 
[Lv. 10]: VIT +10. S.DEF +25%, SP Cost: 40
Formula: VIT Bonus: Skill Lv + (Job Lv / 14) 
MaxHP Bonus: (Skill Lv + 5) x Target Base Lv `,
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
Type: Supportive
Target: Ally
Range: 9
Requirement: Divine Protection Lv: 5
Description: Increases STR, INT and DEX of the target for 240s, scaling with Job Level.
Also reduces its skill's VCT.
Has a chance to remove Curse, which scales with the user's INT and Base Level, and the target's LUK and Base Level.
Deals M.DMG against Demon, Undead and Corrupt monsters. Also decreases their STR, INT and DEX by 50% for 240s.
[Lv. 1]: Stats +1. VCT -1%, SP Cost: 22 
[Lv. 2]: Stats +2. VCT -2%, SP Cost: 24 
[Lv. 3]: Stats +3. VCT -3%, SP Cost: 26 
[Lv. 4]: Stats +4. VCT -4%, SP Cost: 28 
[Lv. 5]: Stats +5, VCT -5%, SP Cost: 30
[Lv. 6]: Stats +6. VCT -6%, SP Cost: 32 
[Lv. 7]: Stats +7. VCT -7%, SP Cost: 34 
[Lv. 8]: Stats +8. VCT -8%, SP Cost: 36 
[Lv. 9]: Stats +9. VCT -9%, SP Cost: 38 
[Lv. 10]: Stats +10, VCT -10%, SP Cost: 40
Formula: Stats Bonus: Skill Lv + (Job Lv / 14)
MATK (%): 50
Chance (%); ((Base Lv x 10) + (INT x 40)) + (Target Base Lv x 10) + (Target LUK x 40)) / 100 `,
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
Type: Supportive
Target: Ally
Variable Cast Time: 1.40s
Fixed Cast Time: 0.60s
After Cast Delay: 1s
Cooldown: Cooldown
Requirement: Heal Lv: 3
Description: Reduces DAA and increases AGI of the target. Also reduces its WD by 18%, The AGI bonus scales with Job Level.
[Lv. 1]: AGI +1. DAA -1%, SP Cost: 22 
[Lv. 2]: AGI +2. DAA -2%, SP Cost: 24 
[Lv. 3]: AGI +3. DAA -3%, SP Cost: 26 
[Lv. 4]: AGI +4. DAA -4%, SP Cost: 28 
[Lv. 5]: AGI +5. DAA -5%, SP Cost: 30 
[Lv. 6]: AGI +6. DAA -6%, SP Cost: 32 
[Lv. 7]: AGI +7. DAA -7%, SP Cost: 34 
[Lv. 8]: AGI +8. DAA -8%, SP Cost: 36 
[Lv. 9]: AGI +9. DAA -9%, SP Cost: 38 
[Lv.10]: AGI +10. DAA -10%, SP Cost: 40
Formula: AGI Bonus: Skill Lv + (Job Lv / 14) `,
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
Variable Cast Time: 0.70s
Fixed Cast Time: 0.30s
After Cast Delay: A.Delay 0.28s Cooldown: A.Delay
Range: 9
Requirement: Increase Agility Lv: 1
Description: Reduces AGI of the target. Also increases its WD by 10%. 
The AGI reduction scales with Job Level. 
[Lv. 1]: AGI -1. Duration: 15s. SP Cost: 22 
[Lv. 2]: AGI -2. Duration: 20s. SP Cost: 24 
[Lv. 3]: AGI -3. Duration: 25s. SP Cost: 26 
[Lv. 4]: AGI -4. Duration: 30s. SP Cost: 28 
[Lv. 5]: AGI -5. Duration: 35s. SP Cost: 30 
[Lv. 6]: AGI -6. Duration: 40s. SP Cost: 32 
[Lv. 7]: AGI -7. Duration: 45s. SP Cost: 34 
[Lv. 8]: AGI -8. Duration: 50s. SP Cost: 36 
[Lv. 9]: AGI -9. Duration: 55s. SP Cost: 38 
[Lv.10]: AGI -10. Duration: 60s. SP Cost: 40
Formula: AGI Decrease: Skill Lv + (Job Lv / 14) `,
  img: icon_aco_5_namespaceObject
}, {
  id: "holyLight",
  level: 0,
  dependencies: [],
  dependent: [{
    id: "magnusExorcismus"
  }, {
    id: "turnUndead"
  }, {
    id: "exsuffla"
  }],
  element: null,
  skillName: "Holy Light",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical or Magical
Target: Enemy
Element: Holy
After Cast Delay: A.Delay - 0.465
Cooldown: A.Delay
Hits: 2
Requirement: None
Description: Deals P.DMG or M.DMG to the target based on Weapon type.
Enemies within a 3x3 AoE around the target receive half of the damage.
[Lv. 1]: ATK/MATK 135%, SP Cost: 11 VCT: 0.10s. FCT: 0.04s
[Lv. 2]: ATK/MATK 170%, SP Cost: 12 VCT: 0.20s. FCT: 0.08s
[Lv. 3]: ATK/MATK 205%, SP Cost: 13 VCT: 0.30s. FCT: 0.125
[Lv. 4]: ATK/MATK 240%, SP Cost: 14 VCT: 0.40s. FCT: 0.16s
[Lv. 5]: ATK/MATK 275%, SP Cost: 15 VCT: 0.50s. FCT: 0.20s
[Lv. 6]: ATK/MATK 310%, SP Cost: 16 VCT: 0.60s. FCT: 0.24s
[Lv. 7]: ATK/MATK 345%, SP Cost: 17 VCT: 0.70s. FCT: 0.28s
[Lv. 8]: ATK/MATK 380%, SP Cost: 18 VCT: 0.80s. FCT: 0.32s
[Lv. 9]: ATK/MATK 415%, SP Cost: 19 VCT: 0.90s. FCT: 0.36s
[Lv.10]: ATK/MATK 450%, SP Cost: 20 VCT: 1.00s. FCT: 0.40s`,
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
  }, {
    id: "exsuffla"
  }],
  element: null,
  skillName: "Ruwach",
  maxLevel: 1,
  inform: `Max Lv: 1
Skill Form: Active
Type: Supportive 
Target: Self
After Cast Delay: A.Delay - 0.285 
Cooldown: A.Delay
SP Cost: 10
Requirement: None 
Description: Reveals Invisible enemies within a 7x7 AoE for 10s.`,
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
Type: Supportive 
Target: Self
After Cast Delay: 1s
Cooldown: 3s
Requirement: Ruwach Lv: 1
Description: Warps the user to a different location instantly.
Cannot be used while standing on a Land Protector cell.
[Lv. 1]: Random Spot. SP Cost: 10 
[Lv. 2]: Save Point. SP Cost: 9`,
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
Type: Supportive 
Target: Ground
After Cast Delay: 1s 
Fixed Cast Time: 1s
Max Instances: 3 
Range: 9
Requirement: Teleport Lv: 2
Description: Opens a list of Memo Points. Creates a portal at the targeted location to the selected memo point. Up to 8 players can cross the portal.
Older instances are removed to create new ones when reaching the instance limit.
Catalyst: 1x Blue Gemstone
[Lv. 1]: Memo Points: 1. SP Cost: 35 Duration: 10s
[Lv. 2]: Memo Points: 2. SP Cost: 32 Duration: 15s
[Lv. 3]: Memo Points: 3. SP Cost: 29 Duration: 20s`,
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
Type: Supportive 
Target: Ground
After Cast Delay: 0.50s 
Cooldown: 0.50s
Max Instances: 3 
Range: 9
SP Cost: 10
Requirement: Warp Portal Lv: 3
Description: Creates a pillar at the targeted location, blocking all ranged P.DMG until its durability runs out or it reaches its 10-hit limit.
The blocked damage is transferred to the pillar, reducing its durability.
The durability scales with INT, Max SP and Base Level.
Older instances are removed to create new ones when reaching the instance limit.

Durability: 300+ (65 x (INT + Base Lv)) + MaxSP `,
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
Type: Supportive
Target: Self
Variable Cast Time: 0.80s
Fixed Cast Time: 0.20s
After Cast Delay: 0.50s
SP Cost: 10
Requirement: None
Description: Creates Holy Water.
Base Level, Job Level, and Stats increase the number of crafted Holy Water.
Requires standing on a water cell.
Catalyst: 1x Empty Bottle
[Lv. 1]: Bonus Efficiency: 0%
[Lv. 2]: Bonus Efficiency: 25%
[Lv. 3]: Bonus Efficiency: 50% 
[Lv. 4]: Bonus Efficiency: 75% 
[Lv. 5]: Bonus Efficiency: 100%

Crafted Holy Water:
1 + Bonus Amount
Bonus Amount:
((1 x ((Level Bonus + Stats Bonus) x ((Skill Lv x 25) - 25))) / 100)
Level Bonus: 
((Base Lv x 100) / 200) + ((Job Lv x 100) / 140) / 100
Stats Bonus: 
((STR^2 /10) + ((AGI^2 / 10) + (VIT^2) + (INT^2 / 10) + (DEX^2 / 10) + (LUK^2 / 10)) / 100

Random Bonus Amount:
10% chance for the bonus to be reduced to 25% 
70% chance for the bonus to be reduced to 50% 
20% chance for no reductions `,
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
Variable Cast Time: 0.90s
Fixed Cast Time: 0.60s 
After Cast Delay: 3s 
Cooldown: 30s
Requirement: None
Description: Increases W.ATK and B.MATK of nearby allies for 120s.
The duration scales with Job Level.
[Lv. 1]: W.ATK/B.MATK +5. SP Cost: 59 
[Lv. 2]: W.ATK/B.MATK +10. SP Cost: 62 
[Lv. 3]: W.ATK/B.MATK +15. SP Cost: 65 
[Lv. 4]: W.ATK/B.MATK +20. SP Cost: 68 
[Lv. 5]: W.ATK/B.MATK +25. SP Cost: 71
Duration (seconds): 120 + Job Level `,
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
Type: Supportive 
Target: Ally
Element: Holy
Variable Cast Time: 1s
After Cast Delay: 25 
Cooldown: A.Delay 
Range: 9
Requirement: Aqua Benedicta Lv: 1, Impositio Manus Lv: 3
Description: Endows a single target's equipped weapon with the Holy property.
Also increases the DMG of Holy property basic attacks and skills.
At max level, it enchants allies within a 5x5 AoE around the target, but has a 0.65 FCT, costs double the SP, and triple the catalysts. 
Catalyst: 1x Holy Water
[Lv. 1]: Holy Damage +2%, SP Cost: 19 Duration: 75s
[Lv. 2]: Holy Damage +3%, SP Cost: 23 Duration: 150s
[Lv. 3]: Holy Damage +4%, SP Cost: 27 Duration: 225s
[Lv. 4]: Holy Damage +5%, SP Cost: 31 Duration: 300s
[Lv. 5]: Holy Damage +5%, SP Cost: 31 Duration: 300s`,
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
Type: Supportive
Target: Ground
After Cast Delay: A.Delay - 0.46s
Cooldown: A.Delay
Range: 9
SP Cost: 30
Requirement: Gloria Lv: 3, Aspersio Lv: 5
Description: Temporarily endows allies' armor in a AoE around the targeted location with Holy property.
Also deals Holy property M.DMG to Demon, Undead and Corrupt monsters in the area. Requires an Acolyte class ally adjacent to the caster.
Catalyst: 1x Holy Water
[Lv. 1]: AoE: 3x3. Duration: 30s 
[Lv. 2]: AoE: 3x3. Duration: 60s
[Lv. 3]: AoE: 5x5. Duration: 90s 
[Lv. 4]: AoE: 5x5. Duration: 120s 
[Lv. 5]: AoE: 7x7. Duration: 150s
Formula: Damage: ((((Base Lv + INT) / 5) x (30 x Skill Lv)) / 10) + MATK Bonus
MATK Bonus: Base MATK (min~max) + (Weapon MATK +- ((MATK x Weapon Lv) / 10)) `,
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
Type: Supportive
Target: Self
After Cast Delay: 2s
SP Cost: 20
Requirement: Kyrie Eleison Lv: 4, Magnificat Lv: 3
Description: Temporarily increases LUK and C.DEF of nearby allies. Also increases their C.DMG if the caster is a High Priest. The duration scales with Job Level.
[Lv. 1]: LUK +14. C.DEF +1. C.DMG +1% Duration: 10s
[Lv. 2]: LUK +18. C.DEF +2. C.DMG +2% Duration: 15s
[Lv. 3]: LUK +22. C.DEF +3. C.DMG +3% Duration: 20s
[Lv. 4]: LUK +26. C.DEF +4. C.DMG +4% Duration: 25s
[Lv. 5]: LUK +30. C.DEF +5. C.DMG +5% Duration: 30s
Duration (seconds): 5 + (Skill Lv x 5) + Job Level `,
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
Description: Boosts SP Recovery and increases SP potion healing.
Also gains SP Recovery based on Max HP.
[Lv. 1]; Recovery: +3. Potion: +3% 
[Lv. 2]: Recovery: +6. Potion: +6% 
[Lv. 3]: Recovery: +9. Potion: +9% 
[Lv. 4]: Recovery: +12. Potion: +12% 
[Lv. 5]: Recovery: +15. Potion: +15% 
[Lv. 6]: Recovery: +18. Potion: +18% 
[Lv. 7]: Recovery: +21. Potion: +21% 
[Lv. 8]: Recovery: +24. Potion: +24% 
[Lv. 9]: Recovery: +27. Potion: +27% 
[Lv.10]: Recovery: +30. Potion: +30%`,
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
Type: Supportive 
Target: Self
Variable Cast Time: 1.40s
Fixed Cast Time: 0.60s 
After Cast Delay: 2s 
Range: 9
Requirement: Angelus Lv: 2
Description: Protects the target with a shield that blocks P.DMG until its durability runs out or it reaches the hit limit. The durability scales with the target's Max HP.
The shield is canceled by Holy Light skill. 
[Lv. 1]: Durability: 12% of MaxHP Hits: 5. SP Cost: 20 
[Lv. 2]: Durability: 14% of MaxHP Hits: 6. SP Cost: 20 
[Lv. 3]: Durability: 16% of MaxHP Hits: 6. SP Cost: 20
[Lv. 4]: Durability: 18% of MaxHP Hits: 7. SP Cost: 25
[Lv. 5]: Durability: 20% of MaxHP Hits: 7. SP Cost: 25
[Lv. 6]: Durability: 22% of MaxHP Hits: 8. SP Cost: 25
[Lv. 7]: Durability: 24% of MaxHP Hits: 8. SP Cost: 30
[Lv. 8]: Durability: 26% of MaxHP Hits: 9. SP Cost: 30
[Lv. 9]: Durability: 28% of MaxHP Hits: 9. SP Cost: 30
[Lv.10]: Durability: 30% of MaxHP Hits: 10. SP Cost: 35`,
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
Type: Supportive 
Target: Enemy
After Cast Delay: 35 
Cooldown: 10s
SP Cost: 60
Requirement: Lex Divina Lv: 3
Description: Marks the target temporarily, increasing all incoming damage it takes. Becomes an AoE when cast at level 2 or higher.
VCT scales with skill level.
Catalyst: 1x Holy Water
[Lv. 1]: Damage +50%, VCT: 0.00s Duration: 4s
[Lv. 2]: Damage +40%, AoE: 3x3. VCT: 1.00s Duration: 5s
[Lv. 3]: Damage +30%, AoE: 5x5. VCT: 1.30s Duration: 6s
[Lv. 4]: Damage +20%, AoE: 7x7. VCT: 1.60s Duration: 7s`,
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
After Cast Delay: 35
Requirement: Ruwach Lv: 1
Description: Inflicts Silence temporarily to the target. Becomes an AoE when cast at level 2 or higher.
Does not affect targets that are already silenced.
[Lv. 1]: Duration 40s. SP Cost: 12
[Lv. 2]: Duration 20s. AoE: 3x3, SP Cost: 14 
[Lv. 3]: Duration 30s. AoE: 3x3. SP Cost: 16 
[Lv. 4]: Duration 10s. AoE: 5x5. SP Cost: 18 
[Lv. 5]: Duration 20s. AoE: 5x5. SP Cost: 20`,
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
  }, {
    id: "penitent"
  }],
  element: null,
  skillName: "Mace Mastery",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Passive
Type: Physical
Weapon: Mace
Requirement: Demon Bane Lv: 7
Description: Increases E.ATK and CRIT while wielding a Mace. At max level, also grants +6% C.DMG.
[Lv. 1]: E.ATK +3. CRIT +1 
[Lv. 2]: E.ATK +6. CRIT +2
[Lv. 3]: E.ATK +9. CRIT +3 
[Lv. 4]: E.ATK +12. CRIT +4 
[Lv. 5]: E.ATK +15. CRIT +5
[Lv. 6]: E.ATK +18. CRIT +6 
[Lv. 7]: E.ATK +21. CRIT +7 
[Lv. 8]: E.ATK +24. CRIT +8 
[Lv. 9]: E.ATK +27. CRIT +9 
[Lv.10]: E.ATK +30. CRIT +10`,
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
Target: Selt
Variable Cast Time: 3s
Fixed Cast Time: 1s
After Cast Delay: 2s
SP Cost: 40
Requirement: None
Description: Temporarily increases SP Recovery of nearby allies. Also reduces its recovery interval.
The bonus duration scales with Job Level. 
[Lv. 1]: SP Recovery +1. Interval -18% Duration: 30s
[Lv. 2]: SP Recovery +2. Interval -26% Duration: 45s
[Lv. 3]: SP Recovery +3. Interval -34% Duration: 60s
[Lv. 4]: SP Recovery +4. Interval -42% Duration: 75s
[Lv. 5]: SP Recovery +5. Interval -50% Duration: 90s
Formula: Duration (seconds); 15 + (Skill Lv x 15) + Job Level `,
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
  dependent: [{
    id: "exsuffla"
  }],
  element: null,
  skillName: "Magnus Exorcismus",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Magical 
Target: Ground
Element: Holy
After Cast Delay: 35 
Range: 9
Hits: 10
Requirement: Holy Light Lv: 5, Lex Aeterna Lv: 3, Aspersio Lv: 3, Turn Undead Lv: 3
Description: Creates an area that deals M.DMG to enemies within a 7x7 AoE every 2.2s.
The damage is increased against Demon, Undead and Corrupt monsters.
VCT, FCT and CD scale with skill level.
Catalyst: 1x
Holy Water for Lv. 6~10
[Lv. 1]: MATK 37% x Hits. Waves: 3 Cooldown: 3s. VCT: 2.00s. FCT: 0.50s Duration: 6.6s. SP Cost: 40
[Lv. 2]: MATK 44% x Hits. Waves: 3 Cooldown: 3s. VCT: 2.00s. FCT: 0.50s Duration: 6.6s. SP Cost: 42
[Lv. 3]: MATK 51% x Hits. Waves: 3 Cooldown: 3s. VCT: 2.00s. FCT: 0.50s Duration: 6.6s. SP Cost: 44
[Lv. 4]: MATK 58% x Hits. Waves: 4 Cooldown: 4s. VCT: 2.67s. FCT: 0.63s Duration: 8.8s. SP Cost: 46
[Lv. 5]: MATK 65% x Hits. Waves: 4 Cooldown: 4s. VCT: 2.67s. FCT: 0.63s Duration: 8.8s. SP Cost: 48
[Lv. 6]: MATK 72% x Hits. Waves: 4 Cooldown: 4s. VCT: 2.67s. FCT: 0.63s Duration: 8.8s. SP Cost: 50
[Lv. 7]: MATK 79% x Hits. Waves: 5 Cooldown: 5s. VCT: 3.33s. FCT: 0.88s Duration: 11.0s. SP Cost: 52
[Lv. 8]: MATK 86% x Hits. Waves: 5 Cooldown: 5s. VCT: 3.33s. FCT: 0.88s Duration: 11.0s. SP Cost: 54
[Lv. 9]: MATK 93% x Hits. Waves: 5 Cooldown: 5s. VCT: 3.33s. FCT: 0.885 Duration: 11.0s. SP Cost: 56
[Lv.10]: MATK 100% x Hits. Waves: 6 Cooldown: 6s. VCT: 4.00s. FCT: 1.00s Duration: 13.2s. SP Cost: 58
Formula: MATK (%): (30 + (Skill Lv x 7) + Bonus) x Hits
Bonus: Skill Lv x 5 `,
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
Type: Supportive
Target: Ally
Range: 9
SP Cost: 60
Requirement: Status Recovery Lv: 1, Increase SP Recovery Lv: 4
Description: Returns a dead player to life. VCT, FCT and ACD scales with skill level. 
Catalyst: 1x Blue Gemstone
[Lv. 1]: VCT: 4.80s. FCT: 1.20s. ACD: 0.00s Revives with 10% of Max HP
[Lv. 2]: VCT: 3.20s. FCT: 0.80s. ACD: 1.00s Revives with 30% of Max HP
[Lv. 3]: VCT: 1.60s. FCT: 0.40s. ACD: 2.00s Revives with 50% of Max HP
[Lv. 4]: VCT: 0.00s. FCT: 0.00s. ACD: 3.00s Revives with 80% of Max HP`,
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
Type: Supportive 
Target: Ground
After Cast Delay: 0.50s 
Cooldown: 0.50s
Max Instances: 4
Range: 9
Requirement: Sanctuary Lv: 5
Description: Creates a pillar at the targeted location, blocking all melee P.DMG until its durability runs out or it reaches the hit limit. The blocked damage is transferred to the pillar, reducing its durability.
The durability scales with INT, Max SP and Base Level.
Older instances are removed to create new ones when reaching the instance limit.
VCT and FCT scale with skill level.
Catalist: 1x Blue Gemstone
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
Formula: Durability: (Skill Lv x 300) + (65 x (INT + Base Lv)) + MaxSP `,
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
Variable Cast Time: 4s
Fixed Cast Time: 1s
After Cast Delay: 1s 
Range: 9
Requirement: Heal Lv: 1
Description: Creates an area that heals the HP of entities within a 5x5 AoE every 1s. Also inflicts M.DMG to Demon, Undead and Corrupt monsters and Knocks them back 2 cells.
The area can restore HP to a limited number of entities, based on its capacity. 
Catalyst: 1x Holy Water
[Lv. 1]: Healing: 100. Capacity: 4 Duration: 7s. SP Cost: 15
[Lv. 2]: Healing: 200, Capacity: 5 Duration: 9s. SP Cost: 18
[Lv. 3]: Healing: 300. Capacity: 6 Duration: 11s. SP Cost: 21
[Lv. 4]: Healing: 400. Capacity: 7 Duration: 13s. SP Cost: 24
[Lv. 5]: Healing: 500. Capacity: 8 Duration: 15s. SP Cost: 27
[Lv. 6]: Healing: 600. Capacity: 9 Duration: 17s, SP Cost: 30
[Lv. 7]: Healing: 700. Capacity: 10 Duration: 19s. SP Cost: 33
[Lv. 8]: Healing: 800. Capacity: 11 Duration: 21s. SP Cost: 36
[Lv. 9]: Healing: 900. Capacity: 12 Duration: 23s. SP Cost: 39
[Lv.10]: Healing: 1000. Capacity: 13 Duration: 25s. SP Cost: 42
Formula: Damage: ((((Base Lv + INT) / 5) x (30 x Skill Lv)) / 10) + MATK Bonus
MATK Bonus: Base MATK (min~max) + (Weapon MATK +- ((MATK x Weapon Lv) / 10)) `,
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
Type: Supportive 
Target: Ally/Enemy
After Cast Delay: 2s 
Range: 9
SP Cost: 5
Requirement: None
Description: Attempts to remove Freezing, Freeze, Petrifying, Petrify and Stun of the target. The chance scales with the user's INT and Base Level, and the target's VIT, LUK, H.MDEF and Base Level.
Inflicts Blind for 18s against Undead and Corrupt monsters.
Formula: Freeze & Petrify Chance (%): ((Base Lv x 10) + (INT x 40) + (Target Base Lv x 10) + (Target H.MDEF x 40)) / 100 
Stun Chance (%): ((Base Lv x 10) + (INT x 40) + (Target Base Lv x 10) + (Target VIT X 20) + (Target LUK x 20)) / 100 `,
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
Variable Cast Time: 0.90s 
Fixed Cast Time: 0.60s 
After Cast Delay: 2s 
Cooldown: 30s
SP Cost: 8
Requirement: Impositio Manus Lv: 2
Description: Reduces nearby allies' skill's VCT for 60s. At max level, also reduces their skill's FCT by 0.15.
The duration scales with Job Level.
[Lv. 1]: VCT -10%
[Lv. 2]: VCT -15%
[Lv. 3]: VCT -20%
Duration (seconds): 60 + Job Level `,
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
Type: Supportive 
Target: Self
Variable Cast Time: 0.90s 
Fixed Cast Time: 0.60s
After Cast Delay: 35
Cooldown: 10s
Requirement: Resurrection Lv: 1, Lex Divina Lv: 3, Holy Light Lv: 5
Description: Reduces nearby enemies' Holy resistance.
Also inflicts Evil Execution for 30s on Demon, Undead, Shadow and Corrupt monsters. 
[Lv. 1]: Resistance -2%, SP Cost: 35 
[Lv. 2]: Resistance -4%, SP Cost: 38 
[Lv. 3]: Resistance -6%, SP Cost: 41 
[Lv. 4]: Resistance -8%, SP Cost: 44 
[Lv. 5]: Resistance -10%, SP Cost: 47 
[Lv. 6]: Resistance -12%, SP Cost: 50 
[Lv. 7]: Resistance -14%, SP Cost: 53
[Lv. 8]: Resistance -16%, SP Cost: 56 
[Lv. 9]: Resistance -18%, SP Cost: 59
[Lv. 10]: Resistance -20%, SP Cost: 62`,
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
    id: "chainFi"
  }],
  element: null,
  skillName: "Call Spirit Sphere",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Supportive
Target: Self
After Cast Delay: A.Delay 0.18s
Cooldown: A.Delay
Max Instances: 5
Requirement: None
Description: Summons Spirit Spheres for 600s, which increases Mastery ATK and S.DEF The Mastery ATK bonus increases while in Furious Spirit stance.
VCT and FCT scale with skill level.
[Lv. 1]: VCT: 0.10s. FCT: 0.10s Spheres: 1. SP Cost: 5
[Lv. 2]: VCT: 0.20s. FCT: 0.20s Spheres: 2. SP Cost: 10
[Lv. 3]: VCT: 0.30s. FCT: 0.30s Spheres: 3. SP Cost: 15
[Lv. 4]: VCT: 0.40s. FCT: 0.40s Spheres: 4. SP Cost: 20
[Lv. 5]: VCT: 0.50s. FCT: 0.50s Spheres: 5. SP Cost: 25
Formula: Mastery ATK & S.DEF: Spirit Spheres x 3 
Furious Spirits Bonus: Furious Spirits Lv x 6 `,
  img: icon_mon_3_namespaceObject
}, {
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
Type: Supportive 
Target: Self/Enemy
Fixed Cast Time: 0.60s
After Cast Delay: A.Delay - 0.18s 
Cooldown: A.Delay
Range: 9
Requirement: Call Spirit Sphere Lv: 5
Description: Absorbs the target's Spirit Spheres, recovering 10 SP per sphere.
Against monsters, has a chance to recover SP based on the user's Base Level and the monster's Level. 
Formula: Chance (%): 25 + ((Base Lv / 4) - (Monster Level / 3))
SP Recover: ((5~10) Monster Level) / 10 `,
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
After Cast Delay: 1.50s
Cooldown: 3s
Range: 2 + Weapon's range
SP Cost: 20
Requirement: Furious Spirits Lv: 5
Description: Deals P.DMG to the target, ignoring its FLEE.
This skill is unaffected by Damage Modifiers. While in Furious Spirits stance, it passively grants Asura Strike Charge. After casting, the caster is temporarily afflicted with Asura Strike Recoil, for a duration equal to half of the skill's cooldown.
If Spirit Spheres Collect is active, both the Spirit Sphere and max SP Cost are doubled. This skill can be cast on targets trapped by Pacify.
Requires Furious Spirits stance to use.
CD increases by 1s for each Spirit Sphere consumed.
VCT and FCT scale with skill level.
[Lv. 1]: VCT/FCT: 1.20s. Spheres Cost: 1 MaxSP Cost: 1%
[Lv. 2]: VCT/FCT: 1.40s. Spheres Cost: 2 MaxSP Cost: 2%
[Lv. 3]: VCT/FCT: 1.60s. Spheres Cost: 3 MaxSP Cost: 3%
[Lv. 4]: VCT/FCT: 1.80s. Spheres Cost: 4 MaxSP Cost: 4%
[Lv. 5]: VCT/FCT: 2.00s. Spheres Cost: 5 MaxSP Cost: 5%
Formula: Damage: ATK x 25 + ((Stack x (Consumed Spheres x 10)) / 100) 
Max Damage Stack: (100000 x ((STR + Base Lv) / 150)) + (MaxSP x 20) `,
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
  }, {
    id: "lotusPu",
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
After Cast Delay: A.Delay - 0.18s
Requirement: Throw Spirit Sphere Lv: 3, Pacify Lv: 3
Description: Charges to the targeted location.
if the path has no obstacles.
After casting this skill, puts Asura Strike and Deva Retaliation in a 2s CD.
Furious Spirits: Removes the Spirit Sphere cost.
Calm Spirits: Deals P.DMG to enemies within a 3x3 AoE, knocking them back 2 cells. The damage scales with VIT, P.DEF, Base Level, Weight and the distance to the targets. Requires 1 Spirit Sphere.
[Lv. 1]: Range: 3. SP Cost: 6 
[Lv. 2]: Range: 5. SP Cost: 8 
[Lv. 3]: Range: 7. SP Cost: 10
[Lv. 4]: Range: 9. SP Cost: 12 
[Lv. 5]: Range: 11. SP Cost: 14
Calm Spirits: ATK (%): ((((Weight / 200) x Distance) x (1 + ((VIT / 30) x (Base Lv / 100)))) x (S.DEF + H.DEF)) / 100 `,
  img: icon_mon_6_namespaceObject
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
Skill Form: Toggle
Type: Supportive 
Target: Self
Variable Cast Time: 0.90s
Fixed Cast Time: 0.60s
After Cast Delay: 0.30s 
Cooldown: A.Delay
Requirement: Spiritual Cadence Lv: 3
Description: Increases C.DEF and resistance to both P.DMG and M.DMG while active, but reduces ATK.
Also grants +10 C.DEF.
Requires 5 Spirit Spheres.
Cancels the effect of Furious Spirits. 
[Lv. 1]: Resistance: P.DMG: 6%, M.DMG: 2% C.DEF +5%, ATK -12%, SP Cost: 2% 
[Lv. 2]: Resistance: P.DMG: 12%, M.DMG: 4% C.DEF +10%, ATK -24%, SP Cost: 4%
[Lv. 3]: Resistance: P.DMG: 18%, M.DMG: 6% C.DEF +15%, ATK -36%, SP Cost: 6% 
[Lv. 4]: Resistance: P.DMG: 24%, M.DMG: 8% C.DEF +20%, ATK -48%, SP Cost: 8% 
[Lv. 5]: Resistance: P.DMG: 30%, M.DMG: 10% C.DEF +25%, ATK -60%, SP Cost: 10%`,
  img: icon_mon_10_namespaceObject
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
After Cast Delay: 1.50s
Cooldown: 3s
Range: 2 + Weapon's range
SP Cost: 20
Requirement: Calm Spirits Lv: 5
Description: Deals P.DMG to the target, ignoring its FLEE.
This skill is unaffected by Damage Modifiers. While in Calm Spirits stance, it passively grants Deva Retaliation Charge. After casting, the caster is temporarily afflicted with Deva Retaliation Recoil, for a duration equal to half of the skill's cooldown.
If Spirit Spheres Collect is active, both the Spirit Sphere and max SP Cost are doubled. This skill can be cast on targets trapped by Pacify.
Requires Calm Spirits stance to use.
CD increases by 1s for each Spirit Sphere consumed.
VCT and FCT scale with skill level.
[Lv. 1]: VCT/FCT: 1.20s. Spheres Cost: 1 MaxSP Cost: 1%
[Lv. 2]: VCT/FCT: 1.40s. Spheres Cost: 2 MaxSP Cost: 2%
[Lv. 3]: VCT/FCT: 1.60s. Spheres Cost: 3 MaxSP Cost: 3%
[Lv. 4]: VCT/FCT: 1.80s. Spheres Cost: 4 MaxSP Cost: 4%
[Lv. 5]: VCT/FCT: 2.00s. Spheres Cost: 5 MaxSP Cost: 5%
Formula: Damage: (((S.DEF / 8) + (H.DEF / 4)) x 25) + ((Stack x (Consumed Spheres x 10)) / 100) 
Max Damage Stack: (100000 x ((VIT + Base Lv) / 150)) + (MaxSP x 20) `,
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
Type: Supportive 
Target: Self
After Cast Delay: 1s
Cooldown: 20s
Requirement: Call Spirit Sphere Lv: 5
Description: Grants a chance to block ranged P.DMG once, charging toward the attacker when triggered.
Passively increases FLEE and grants a chance to avoid P.DMG.
Requires Furious Spirit stance.
VCT scales with skill level.
[Lv. 1]: Block Chance 10%, VCT: 2.00s Duration: 6s. HP Cost: 1%, SP Cost: 14 Flee +4. Avoid Chance: 1%
[Lv. 2]: Block Chance 20%, VCT: 1.50s Duration: 7s. HP Cost: 2%, SP Cost: 18 Flee +8. Avoid Chance: 2%
[Lv. 3]: Block Chance 30%, VCT: 1.00s Duration: 8s. HP Cost: 3%, SP Cost: 22 Flee +12. Avoid Chance: 3%
[Lv. 4]: Block Chance 40%, VCT: 0.50s Duration: 9s. HP Cost: 4%, SP Cost: 26 Flee +16. Avoid Chance: 4%
[Lv. 5]: Block Chance 50%, VCT: 0.00s Duration: 10s. HP Cost: 5%, SP Cost: 30 Flee +20. Avoid Chance: 5%`,
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
Skill Form: Toggle 
Type: Supportive 
Target: Self
Variable Cast Time: 0.90s
Fixed Cast Time: 0.60s
After Cast Delay: 0.30s 
Cooldown: A.Delay
Requirement: Falling Blossoms Lv: 3
Description: Increases ATK and CRIT, and reduces DAA while active, but reduces P.DEF.
Also grants +10 CRIT.
Requires 5 Spirit Spheres.
Cancels the effect of Calm Spirits. 
[Lv. 1]: ATK +6%, CRIT +5%, DAA -2% DEF -12%, SP Cost: 2%
[Lv. 2]: ATK +12%, CRIT +10%, DAA -4% DEF -24%, SP Cost: 4%
[Lv. 3]: ATK +18%, CRIT +15%, DAA -6% DEF -36%, SP Cost: 6%
[Lv. 4]: ATK +24%, CRIT +20%, DAA -8% DEF -48%, SP Cost: 8%
[Lv. 5]: ATK +30%, CRIT +25%, DAA -10% DEF -60%, SP Cost: 10%`,
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
  dependent: [{
    id: "chainFi"
  }],
  element: null,
  skillName: "Iron Hand",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Passive
Type: Physical
Weapon: Knuckle/Bare Hands
Requirement: Demon Bane Lv: 10, Divine Protection Lv: 10
Description: Increases E.ATK while wielding.
Knuckles or Bare-Handed. At max level, also reduces DAA by 6%.
Double the E.ATK bonus while bare-handed. 
[Lv. 1]: E.ATK +3
[Lv. 2]: E.ATK +6
[Lv. 3]: E.ATK +9
[Lv. 4]: E.ATK +12
[Lv. 5]: E.ATK +15
[Lv. 6]: E.ATK +18
[Lv. 7]: E.ATK +21
[Lv. 8]: E.ATK +24
[Lv. 9]: E.ATK +27 
[Lv.10]: E.ATK +30`,
  img: icon_mon_1_namespaceObject
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
  }, {
    id: "lotusPu"
  }],
  element: null,
  skillName: "Pacify",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Supportive 
Target: Self
After Cast Delay: 0.50s
SP Cost: 10
Requirement: Call Spirit Sphere Lv: 5
Description: Enters a stance that temporarily traps the next enemy that uses a basic attacks against the caster, provided it happens within the skill's time frame. The trap duration is reduced to 2s against Elite and Boss monsters.
Furious Spirits: Increases the next damage against the target while trapped.
Calm Spirits: Grants T.DEF while trapped, scaling with P.DEF.
[Lv. 1]: Time Frame: 0.7s. Duration: 5.4s 
[Lv. 2]: Time Frame: 0.9s. Duration: 5.8s 
[Lv. 3]: Time Frame: 1.1s. Duration: 6.25
[Lv. 4]: Time Frame: 1.3s. Duration: 6.65 
[Lv. 5]: Time Frame: 1.5s. Duration: 7.0s
Formula: Furious Spirit:
ATK (%): Skill Lv x 4 
MATK (%): Skill Lv x 10 
Calm Spirits:
True Defense: (H.DEF / 2) + (S.DEF / 4) 
Duration (seconds): Skill Lv x 0.8 `,
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
Type: Supportive
Target: Self
After Cast Delay: 1s 
Cooldown: 20s
Requirement: Call Spirit Sphere Lv: 5
Description: Sits down temporarily, triggering HP Recovery and SP Recovery every 1s. Cannot be interrupted by damage or actions while active.
Passively recovers HP and SP every 10s while not walking.
Requires Calm Spirit stance.
VCT scales with skill level.
[Lv. 1]: VCT: 2.00s. Duration: 6s. SP Cost: 14 
[Lv. 2]: VCT: 1.50s. Duration: 7s. SP Cost: 18 
[Lv. 3]: VCT: 1.00s. Duration: 8s. SP Cost: 22 
[Lv. 4]: VCT: 0.50s. Duration: 9s. SP Cost: 26 
[Lv. 5]: VCT: 0.00s. Duration: 10s, SP Cost: 30
Formula: Passive HP Recover: (Skill Lv x 10) + (((Skill Lv x 4) x MaxHP) / 1000) 
Passive SP Recover: (Skill Lv x 6) + (((Skill Lv x 4) x MaxSP) / 1000) `,
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
  }, {
    id: "lotusPu"
  }],
  element: null,
  skillName: "Throw Spirit Sphere",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Enemy
After Cast Delay: A.Delay 0.18s
Cooldown: A.Delay
Range: 9
Requirement: Occult Impaction Lv: 3, Pacify Lv: 2
Description: Deals ranged P.DMG to the target.
Requires 1 Spirit Sphere.
VCT and FCT scale with skill level.
Furious Spirits: The damage scales with STR. Calm Spirits: The damage scales with P.DEF. 
[Lv. 1]: VCT: 0.30s. FCT: 0.10s Hits: 1. SP Cost: 12
[Lv. 2]: VCT: 0.40s. FCT: 0.15s Hits: 2. SP Cost: 14
[Lv. 3]: VCT: 0.50s. FCT: 0.20s Hits: 3. SP Cost: 16
[Lv. 4]: VCT: 0.60s. FCT: 0.25s Hits: 4. SP Cost: 18
[Lv. 5]: VCT: 0.70s. FCT: 0.30s Hits: 5. SP Cost: 20
Formula: ATK (%): 200 x Hits 
Furious Spirits: ATK Bonus (%): STR
Calm Spirits: Damage Bonus: ((S.DEF + H.DEF) - Target Defense) x Hits `,
  img: icon_mon_9_namespaceObject
}, {
  id: "lotusPu",
  level: 0,
  dependencies: [{
    id: "throwSpiritSphere",
    minLevel: 3
  }, {
    id: "pacify",
    minLevel: 3
  }],
  dependent: [{
    id: "bodyRelocation"
  }],
  element: null,
  skillName: "Lotus Pulse",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Self
After Cast Delay: 1s
Cooldown: 2s
Hits: 1
Description: Consumes all Spirit Spheres to deal P.DMG to enemies within a 7x7 AoE, scaling with Base Level and the amount of consumed spheres.
Requires at least 1 Spirit Sphere to cast. Furious Spirits: Knocks enemies back 2 cells. Calm Spirits: Pulls enemies toward the caster, granting a chance to inflict Stun for 1s. 
[Lv. 1]: ATK 200%, SP Cost: 11
[Lv. 2]: ATK 300%, SP Cost: 12
[Lv. 3]: ATK 400%, SP Cost: 13
[Lv. 4]: ATK 500%, SP Cost: 14
[Lv. 5]: ATK 600%, SP Cost: 15
Formula: ATK (%): 100 + (100 x Skill Lv) + (Base Lv x Spirit Spheres)
Calm Spirits:
Stun Chance (%): 20 + (Skill Lv x 10) `,
  img: icon_mon_25_namespaceObject
}, {
  id: "chainFi",
  level: 0,
  dependencies: [{
    id: "ironHand",
    minLevel: 3
  }, {
    id: "callSpiritSphere",
    minLevel: 5
  }],
  dependent: [{
    id: "flightF"
  }, {
    id: "fallenF"
  }],
  element: null,
  skillName: "Chain Fist",
  maxLevel: 10,
  inform: `Max Level: 10
Skill Form: Active 
Weapon: Knuckle 
Type: Physical
Target: Enemy
After Cast Delay: A.Delay - 0.18s
Cooldown: A.Delay + 0.32
Range: 1
Hits: 3
Description: Deals P.DMG to the target. Grants a 30% chance to auto-cast it at the learned level on performing basic attacks. Furious Spirits: Grants +50% HCM and the damage scales with CRIT.
Calm Spirits: Becomes a 3x3 AoE around the target, and the damage scales with P.DEF. 
[Lv. 1]: ATK: 55% x Hits. SP Cost: 6 
[Lv. 2]: ATK: 60% x Hits. SP Cost: 7 
[Lv. 3]: ATK: 65% x Hits. SP Cost: 8
[Lv. 4]: ATK: 70% x Hits. SP Cost: 9 
[Lv. 5]: ATK: 75% x Hits. SP Cost: 10 
[Lv. 6]: ATK: 80% x Hits. SP Cost: 11 
[Lv. 7]: ATK: 85% x Hits. SP Cost: 12 
[Lv. 8]: ATK: 90% x Hits. SP Cost: 13 
[Lv. 9]: ATK: 95% x Hits. SP Cost: 14 
[Lv.10]: ATK: 100% x Hits. SP Cost: 15
Formula: ATK (%): (50 + (Skill Lv x 5)) x Hits 
Furious Spirits: 
ATK Bonus (%): ((Skill Lv x CRIT) / 10) x Hits 
Calmt Spirits:
Darnage Bonus: ((S.DEF + H.DEF) - Target Defense) x Hits `,
  img: icon_mon_20_namespaceObject
}, {
  id: "flightF",
  level: 0,
  dependencies: [{
    id: "chainFi",
    minLevel: 5
  }],
  dependent: [{
    id: "phoenix"
  }],
  element: null,
  skillName: "Flight Fist",
  maxLevel: 5,
  inform: `Max Level: 5
Skill Form: Active 
Weapon: Knuckle 
Type: Physical
Target: Enemy
After Cast Delay: A.Delay - 0.18s 
Cooldown: A.Delay
Range: 2 + Weapon's range 
Hits: 4
Description: Deals P.DMG to the target. Can be activated immediately after Chain Fist and Pacify. Also can be activated after Fallen Fist, but requires 1 Spirit Sphere.
Furious Spirits: Grants +50% HCM and the damage scales with CRIT.
Calm Spirits: Becomes a 3x3 AoE around the target, and the damage scales with P.DEF. 
[Lv. 1]: ATK: 115% x Hits. SP Cost: 5
[Lv. 2]: ATK: 130% x Hits. SP Cost: 10
[Lv. 3]: ATK: 145% x Hits. SP Cost: 15 
[Lv. 4]: ATK: 160% x Hits. SP Cost: 20 
[Lv. 5]: ATK: 175% x Hits. SP Cost: 25
Formula: ATK (%): (100 + (Skill Lv x 15)) x Hits 
Furious Spirits:
ATK Bonus (%): ((Skill Lv x CRIT) / 5) x Hits
Calm Spirits:
Damage Bonus: ((S.DEF+ H.DEF) - Target Defense) x Hits `,
  img: icon_mon_26_namespaceObject
}, {
  id: "fallenF",
  level: 0,
  dependencies: [{
    id: "chainFi",
    minLevel: 5
  }],
  dependent: [{
    id: "dragons"
  }],
  element: null,
  skillName: "Fallen Fist",
  maxLevel: 5,
  inform: `Max Level: 5
Skill Form: Active 
Weapon: Knuckle 
Type: Physical
Target: Enemy
After Cast Delay: A.Delay - 0.18s
Cooldown: A.Delay
Range: 2 + Weapon's range Hits: 1
Description: Deals P.DMG to the target. Can be activated immediately after Chain Fist and Pacify. Also can be activated after Flight Fist, but requires 1 Spirit Sphere. Furious Spirits: Grants +50% HCM and the damage scales with CRIT.
Calm Spirits: Becomes a 3x3 AoE around the target, and the damage scales with P.DEF.
[Lv. 1]: ATK: 400%, SP Cost: 5
[Lv. 2]: ATK: 550%, SP Cost: 10
[Lv. 3]: ATK: 700%, SP Cost: 15 
[Lv. 4]: ATK: 850%, SP Cost: 20 
[Lv. 5]: ATK: 1000%, SP Cost: 25
Formula: ATK (%): (250 + (Skill Lv x 150))
Furious Spirits:
ATK Bonus (%): Skill Lv x STR
Calm Spirits:
Damage Bonus: ((S.DEF + H.DEF) - Target Defense) x Hits `,
  img: icon_mon_27_namespaceObject
}];

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
Type: Supportive 
Target: Ally
After Cast Delay: 2s
Range: 9
Requirement: Angelus Lv: 5, Impositio Manus Lv: 3
Description: Increases H.DEF of the target. Also increases its Skill Healing Eff received. VCT and FCT scale with skill level. 
[Lv 1]: H.DEF +50. Healing +2% VCT: 0.80s. FCT: 0.20s Duration: 20s. SP Cost: 20 
[Lv 2]: H.DEF +100. Healing +4% VCT: 1.20s. FCT: 0.30s Duration: 40s. SP Cost: 30
[Lv 3]: H.DEF +150. Healing +6% VCT: 1.60s. FCT: 0.40s Duration: 60s. SP Cost: 40
[Lv 4]: H.DEF +200. Healing +8% VCT: 2.00s. FCT: 0.50s Duration: 80s, SP Cost: 50
[Lv 5]: H.DEF +250. Healing +10% VCT: 2.40s, FCT: 0.60s Duration: 100s, SP Cost: 60`,
  img: icon_hpr_1_namespaceObject
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
Description: Increases Max SP, SP Recovery and Skill Healing Eff.
[Lv. 1]: MaxSP +1%, Healing +2% SP Recovery +3%
[Lv. 2]: MaxSP +2%, Healing +4% SP Recovery +6%
[Lv. 3]: MaxSP +3%, Healing +6% SP Recovery +9%
[Lv. 4]: MaxSP +4%, Healing +8% SP Recovery +12%
[Lv. 5]: MaxSP +5%, Healing +10% SP Recovery +15%
[Lv. 6]: MaxSP +6%, Healing +12% SP Recovery +18%
[Lv. 7]: MaxSP +7%, Healing +14% SP Recovery +21%
[Lv. 8]: MaxSP +8%, Healing +16% SP Recovery +24%
[Lv. 9]: MaxSP +9%, Healing +18% SP Recovery +27%
[Lv.10]: MaxSP +10%, Healing +20% SP Recovery +30%`,
  img: icon_hpr_3_namespaceObject
}, {
  id: "penitent",
  level: 0,
  dependencies: [{
    id: "maceMastery",
    minLevel: 10
  }, {
    id: "divineProtection",
    minLevel: 3
  }, {
    id: "demonBane",
    minLevel: 7
  }],
  dependent: [],
  element: null,
  skillName: "Penitentia",
  maxLevel: 5,
  inform: `Max Level: 5
Skill Form: Active
Type: Supportive 
Target: Self
Variable Cast Time: 0.60s
Fixed Cast Time: 0.60s
After Cast Delay: 1s
Cooldown: 5s
Description: Increases P.DMG temporarily.
Catalyst: 1x Holy Water
[Lv. 1]: Damage +10%, SP Cost: 40 Duration: 60s
[Lv. 2]: Damage +15%, SP Cost: 50 Duration: 90s
[Lv. 3]: Damage +20%, SP Cost: 60 Duration: 120s
[Lv. 4]: Damage +25%, SP Cost: 70 Duration: 150s
[Lv. 5]: Damage +30%, SP Cost: 80 Duration: 180s`,
  img: icon_hpr_5_namespaceObject
}, {
  id: "exsuffla",
  level: 0,
  dependencies: [{
    id: "magnusExorcismus",
    minLevel: 1
  }, {
    id: "ruwach",
    minLevel: 1
  }, {
    id: "holyLight",
    minLevel: 10
  }],
  dependent: [],
  element: null,
  skillName: "Exsufflatio",
  maxLevel: 10,
  inform: `Max Level: 10
Skill Form: Active
Type: Magical
Target: Enemy 
Element: Holy
Fixed Cast Time: 0.60s
After Cast Delay: 1s 
Cooldown: 1.50s
Range: 9
Hits: 3
Description: Deals M.DMG to the target. Has a chance to inflict Blind for 30s. Also grants a chance to auto-cast Decrease Agility at its learned level for 30s.
Catalyst: 1x Holy Water
[Lv. 1]: MATK 630%, VCT: 0.60s Blind/Auto-cast Chance: 4%, SP Cost: 30
[Lv. 2]: MATK 760%, VCT: 0.80s Blind/Auto-cast Chance: 8%, SP Cost: 36 
[Lv. 3]: MATK 890%, VCT: 1.00s Blind/Auto-cast Chance: 12%, SP Cost: 42 
[Lv. 4]: MATK 1020%, VCT: 1.20s Blind/Auto-cast Chance: 16%, SP Cost: 48 
[Lv. 5]: MATK 1150%, VCT: 1.40s Blind/Auto-cast Chance: 20%, SP Cost: 54 
[Lv. 6]: MATK 1280%, VCT: 1.60s Blind/Auto-cast Chance: 24%, SP Cost: 60 
[Lv. 7]: MATK 1410%, VCT: 1.80s Blind/Auto-cast Chance: 28%, SP Cost: 66 
[Lv. 8]: MATK 1540%, VCT: 2.00s Blind/Auto-cast Chance: 32%, SP Cost: 72 
[Lv. 9]: MATK 1670%, VCT: 2.20s Blind/Auto-cast Chance: 36%, SP Cost: 78 
[Lv.10]: MATK 1800%, VCT: 2.40s Blind/Auto-cast Chance: 40%, SP Cost: 84
Formula: MATK (%): 500 + (Skill Lv x 130) `,
  img: icon_hpr_6_namespaceObject
}];

/*  author Chalykh Maksim 
  # data 10.02.2025 
  # email: chalyh.maksim.88@mail.ru */

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
const skillsChampion = [{
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
After Cast Delay: A.Delay - 0.18s 
Cooldown: A.Delay + 0.365 
Range: 1
Hits: 1
Requirement: Pacify Lv: 4, Body Relocation Lv: 3
Description: Deals P.DMG to the target after a 1.25s delay, Knocking it back. The damage delay scales with A.Motion.
If the target hits an obstacle or cannot be knocked back, it takes a second P.DMG based on its Level and Size. Against players, this damage scales with Weight instead of Size. 
Furious Spirits: The damage scales with STR. 
Calm Spirits: The damage scales with VIT. 
[Lv. 1]: ATK 300%, Knockback: 1 Range: 1. SP Cost: 7
[Lv. 2]: ATK 450%, Knockback: 2 Range: 2. SP Cost: 9
[Lv. 3]: ATK 600%, Knockback: 3 Range: 3. SP Cost: 11
[Lv. 4]: ATK 750%, Knockback: 4 Range: 4. SP Cost: 13
[Lv. 5]: ATK 900%, Knockback: 5 Range: 5. SP Cost: 15
Formula: ATK (%): 150 + (Skill Lv x 150)
Second ATK (%): (Skill Lv x 150) + Weight Bonus + (Target Lv x 5)

Weight Bonus:
Target Player: (weight x 100) / Max Weight 
Target Large Size: 50
Target Medium Size: 40
Target Small Size: 30

Furious Spirits: ATK Bonus (%): STR x 3
Calm Spirits: ATK Bonus (%): VIT x 3 `,
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
Skill Form: Active 
Type: Supportive 
Target: Self
Fixed Cast Time: 1s
After Cast Delay: 0.30s
Cooldown: A.Delay
Requirement: Call Spirit Sphere Lv: 5
Description: Grants a status that temporarily increases Max HP and Max SP, as well as causes Call Spirit Spheres to summon double the amount of Spirit Spheres in exchange for doubling their SP Cost.
[Lv. 1]: Max HP/SP +2%, SP Cost: 26 Duration: 140s
[Lv. 2]: Max HP/SP +4%, SP Cost: 32 Duration: 180s
[Lv. 3]: Max HP/SP +6%, SP Cost: 38 Duration: 220s
[Lv. 4]: Max HP/SP +8%, SP Cost: 44 Duration: 260s
[Lv. 5]: Max HP/SP +10%, SP Cost: 50 Duration: 300s`,
  img: icon_chp_4_namespaceObject
}, {
  id: "phoenix",
  level: 0,
  dependencies: [{
    id: "flightF",
    minLevel: 5
  }, {
    id: "ironHand",
    minLevel: 5
  }],
  dependent: [],
  element: null,
  skillName: "Phoenix's Dive",
  maxLevel: 5,
  inform: `Max Level: 5
Skill Form: Active
Type: Physical
Target: Enemy
Variable Cast Time: A.Delay + 1.40s
Fixed Cast Time: 0.60s
After Cast Delay: A.Delay + 1s
Cooldown: A.Delay + 3s
Range: 2 + Weapon's range
Hits: 8
Description: Deals P.DMG to the target, Knocking it back 2 cells. The damage scales with the user's HP.
Can be used immediately after Flight Fist. Its ACD becomes A.Delay + 0.12s, with no cast time. Damage is also increased. Requires Furious Spirits stance and 2 Spirit Spheres.
[Lv. 1]: HP Cost: 2%, SP Cost: 20
[Lv. 2]: HP Cost: 4%, SP Cost: 25 
[Lv. 3]: HP Cost: 6%, SP Cost: 30 
[Lv. 4]: HP Cost: 8%, SP Cost: 35 
[Lv. 5]: HP Cost: 10%, SP Cost: 40
Formula: ATK (%): (Skill Lv x 400) x (1.0 + ((100 - ((HP x 100) / MaxHP)) / 100))
Combo ATK (%): (Skill Lv x 400) x (1.3 + ((100 - ((HP x 100) / MaxHP)) / 100)) `,
  img: icon_chp_5_namespaceObject
}, {
  id: "dragons",
  level: 0,
  dependencies: [{
    id: "fallenF",
    minLevel: 5
  }, {
    id: "ironHand",
    minLevel: 5
  }],
  dependent: [],
  element: null,
  skillName: "Dragon's Rise",
  maxLevel: 5,
  inform: `Max Level: 5
Skill Form: Active 
Type: Physical
Target: Enemy
Variable Cast Time: A.Delay +1.40s
Fixed Cast Time: 0.60s
After Cast Delay: A.Delay + 1s 
Cooldown: A.Delay + 35
Range: 2 + Weapon's range 
Hits: 1
Description: Deals P.DMG to enemies within a 5x5 AoE around the target, scaling with the user's HP and SP. Enemies on the edge take half the damage.
Can be used immediately after Fallen Fist. Its ACD becomes A.Delay + 0.12s, with no cast time. Damage is also increased. 
Requires Calm Spirits stance and 2 Spirit Spheres.
[Lv. 1]: SP Cost: 20
[Lv. 2]: SP Cost: 25
[Lv. 3]: SP Cost: 30 
[Lv. 4]: SP Cost: 35 
[Lv. 5]: SP Cost: 40
Formula: Damage: (HP x (10 + (Skill Lv x 4)) / 100) x (SP / 500) 
Combo Damage: (HP x (10 + (Skill Lv x 4)) / 100) x (SP / 350) `,
  img: icon_chp_6_namespaceObject
}];

/*  author Chalykh Maksim 
  # data 10.02.2025 
  # email: chalyh.maksim.88@mail.ru */

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
After Cast Delay: A.Delay - 0.48s
Cooldown: A.Delay
Range: 1 + Weapon's range
Hits: 1
Requirement: None
Description: Deals P.DMG to the target. This skill has HCM.
[Lv. 1]: ATK 130%, HCM: 105%, SP Cost: 2 
[Lv. 2]: ATK 160%, HCM: 110%, SP Cost: 3 
[Lv. 3]: ATK 190%, HCM: 115%, SP Cost: 3 
[Lv. 4]: ATK 220%, HCM: 120%, SP Cost: 3 
[Lv. 5]: ATK 250%, HCM: 125%, SP Cost: 4 
[Lv. 6]: ATK 280%, HCM: 130%, SP Cost: 4 
[Lv. 7]: ATK 310%, HCM: 135%, SP Cost: 4 
[Lv. 8]: ATK 340%, HCM: 140%, SP Cost: 5 
[Lv. 9]: ATK 370%, HCM: 145%, SP Cost: 5
[Lv. 10]: ATK 400%, HCM: 150%, SP Cost: 5
Formula: ATK (%): 100 + (30 x Skill Lv) `,
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
Element: Fire
After Cast Delay: A.Delay - 0.44s
Cooldown: 1s
Hits: 1
Requirement: Bash Lv: 5
Description: Deals P.DMG to enemies within a 7x7 AoE and Knocks them back 2 cells. Enemies at the edge take less damage.
Also grants +20% P.DMG as Fire property temporarily.
This skill has HCM bonus.
[Lv. 1]: ATK 120%, HCM: 110% HP Cost: 30. SP Cost: 6 Property Damage Duration: 10s 
[Lv. 2]: ATK 140%, HCM: 120% HP Cost: 29. SP Cost: 6 Property Damage Duration: 20s 
[Lv. 3]: ATK 160%, HCM: 130% HP Cost: 28. SP Cost: 7 Property Damage Duration: 30s 
[Lv. 4]: ATK 180%, HCM: 140% HP Cost: 27. SP Cost: 7 Property Damage Duration: 40s 
[Lv. 5]: ATK 200%, HCM: 150% HP Cost: 26. SP Cost: 8 Property Damage Duration: 50s 
[Lv. 6]: ATK 220%, HCM: 160% HP Cost: 25. SP Cost: 8 Property Damage Duration: 60s
[Lv. 7]: ATK 240%, HCM: 170% HP Cost: 24. SP Cost: 9 Property Damage Duration: 70s 
[Lv. 8]: ATK 260%, HCM: 180% HP Cost: 23. SP Cost: 9 Property Damage Duration: 80s 
[Lv. 9]: ATK 280%, HCM: 190% HP Cost: 22. SP Cost: 10 Property Damage Duration: 90s 
[Lv.10]: ATK 300%, HCM: 200% HP Cost: 21. SP Cost: 10 Property Damage Duration: 100s
Formula: ATK (%): 100 + (Skill Lv x 20)
Edge ATK (%): 100 + (Skill Lv x 10) `,
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
Type: Supportive 
Target: Ally/Enemy
After Cast Delay: Attack Delay - 0.44s 
Cooldown: Attack Delay
Range: 9
Requirement: None
Description: Increases Physical Damage dealt and taken for 30s. It also provokes the enemy, drawing its aggro.
Does not affect Undead, Corrupt or Boss monsters, and provoked targets.
[Lv. 1]: Dealt +6%, Taken +1% SP Cost: 1
[Lv. 2]: Dealt +7%. Taken +2% SP Cost: 2
[Lv. 3]: Dealt +8%, Taken +3% SP Cost: 3
[Lv. 4]: Dealt +9%, Taken +4% SP Cost: 4
[Lv. 5]: Dealt +10%, Taken +5% SP Cost: 5
[Lv. 6]: Dealt +11%, Taken +6% SP Cost: 6
[Lv. 7]: Dealt +12%, Taken +7% SP Cost: 7
[Lv. 8]: Dealt +13%, Taken +8% SP Cost: 8
[Lv. 9]: Dealt +14%, Taken +9% SP Cost: 9
[Lv.10]: Dealt +15%, Taken +10% SP Cost: 10`,
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
Type: Supportive 
Target: Self
After Cast Delay: 0.30s
Cooldown: 25s
SP Cost: 10
Requirement: Provoke Lv: 5
Description: Resists Flinching from attacks. Increases H.DEF and C.DEF.
[Lv. 1]: H.DEF +5. C.DEF +1. Duration: 7s 
[Lv. 2]: H.DEF +10. C.DEF +2. Duration: 9s 
[Lv. 3]: H.DEF +15. C.DEF +3. Duration: 11s 
[Lv. 4]: H.DEF +20. C.DEF +4. Duration: 13s 
[Lv. 5]: H.DEF +25. C.DEF +5. Duration: 15s 
[Lv. 6]: H.DEF +30. C.DEF +6. Duration: 17s 
[Lv. 7]: H.DEF +35. C.DEF +7. Duration: 19s 
[Lv. 8]: H.DEF +40. C.DEF +8. Duration: 21s 
[Lv. 9]: H.DEF +45. C.DEF +9. Duration: 23s 
[Lv.10]: H.DEF +50. C.DEF +10. Duration: 25s`,
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
Description: Boosts HP Recovery and increases HP potion healing.
Also gains HP Recovery based on Max HP. 
[Lv. 1]: Recovery: +5. Potion: +3% 
[Lv. 2]: Recovery: +10. Potion: +6% 
[Lv. 3]: Recovery: +15. Potion: +9% 
[Lv. 4]: Recovery: +20. Potion: +12% 
[Lv. 5]: Recovery: +25. Potion: +15% 
[Lv. 6]: Recovery: +30. Potion: +18% 
[Lv. 7]: Recovery: +35. Potion: +21% 
[Lv. 8]: Recovery: +40. Potion: +24% 
[Lv. 9]: Recovery: +45. Potion: +27% 
[Lv.10]: Recovery: +50. Potion: +30%
HP Recovery: (Skill Lv x 5) + (Skill Lv x 0.1% of MaxHP) `,
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
Description: HP Recovery also heals HP while moving or fighting.
[Lv. 1]: Recovery every 24s 
[Lv. 2]: Recovery every 22s 
[Lv. 3]: Recovery every 20s 
[Lv. 4]: Recovery every 18s 
[Lv. 5]: Recovery every 16s 
[Lv. 6]: Recovery every 14s 
[Lv. 7]: Recovery every 12s 
[Lv. 8]: Recovery every 10s 
[Lv. 9]: Recovery every 8s 
[Lv.10]: Recovery every 6s`,
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
Weapon: Two-Handed Spear
Requirement: One-Spear Mastery Lv: 5
Description: Increases E.ATK while wielding a Two-Handed Spear. At max level, also grants +6% P.DMG on all sizes.
[Lv. 1]: E.ATK +4
[Lv. 2]: E.ATK +8
[Lv. 3]: E.ATK +12
[Lv. 4]: E.ATK +16
[Lv. 5]: E.ATK +20
[Lv. 6]: E.ATK +24
[Lv. 7]: E.ATK +28
[Lv. 8]: E.ATK +32
[Lv. 9]: E.ATK +36 
[Lv.10]: E.ATK +40`,
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
Weapon: Spear-Class 
Type: Supportive 
Target: Self
After Cast Delay: 0.30s 
Cooldown: A.Delay
Requirement: One-Spear Mastery Lv: 5
Description: Temporarily reduces DAA by 10% and increases ASPD by 20%, Also boosts CRIT and ACC 
[Lv. 1]: CRIT +1, ACC +2 Duration: 84s. SP Cost: 12 
[Lv. 2]: CRIT +2. ACC +4 Duration: 108s. SP Cost: 14 
[Lv. 3]: CRIT +3, ACC +6 Duration: 132s. SP Cost: 16 
[Lv. 4]: CRIT +4. ACC +8 Duration: 156s. SP Cost: 18
[Lv. 5]: CRIT +5. ACC +10 Duration: 180s, SP Cost: 20 
[Lv. 6]: CRIT +6. ACC +12 Duration: 204s, SP Cost: 22 
[Lv. 7]: CRIT +7. ACC +14 Duration: 228s. SP Cost: 24 
[Lv. 8]: CRIT +8. ACC +16 Duration: 252s. SP Cost: 26 
[Lv. 9]: CRIT +9. ACC +18 Duration: 276s, SP Cost: 28 
[Lv.10]: CRIT +10, ACC +20 Duration: 300s, SP Cost: 30`,
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
Weapon: Sword-Class 
Type: Supportive 
Target: Self
After Cast Delay: 0.30s 
Cooldown: A.Delay
Requirement: One-Handed Sword Mastery Lv: 5
Description: Temporarily reduces DAA by 10% and increases ASPD by 20%. Also boosts CRIT and ACC. 
[Lv. 1]: CRIT +1. ACC +2 Duration: 84s. SP Cost: 12 
[Lv. 2]: CRIT +2. ACC +4 Duration: 108s. SP Cost: 14 
[Lv. 3]: CRIT +3. ACC +6 Duration: 132s. SP Cost: 16 
[Lv. 4]: CRIT +4. ACC +8 Duration: 156s. SP Cost: 18 
[Lv. 5]: CRIT +5, ACC +10 Duration: 180s. SP Cost: 20 
[Lv. 6]: CRIT +6, ACC +12 Duration: 204s. SP Cost: 22 
[Lv. 7]: CRIT +7. ACC +14 Duration: 228s. SP Cost: 24 
[Lv. 8]: CRIT +8. ACC +16 Duration: 252s. SP Cost: 26 
[Lv. 9]: CRIT +9. ACC +18 Duration: 276s. SP Cost: 28 
[Lv.10]: CRIT +10. ACC +20 Duration: 300s, SP Cost: 30`,
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
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Passive
Type: Physical
Requirement: Endure Lv: 1
Description: Lets the user ride a Peco Peco. While mounted, reduces WD and Flee. While not mounted, increases CRIT and ACC 
Rental with: PecoPeco Breeder
[Lv. 1]: Mounted: WD -13%, Flee -6% Unmounted: CRIT +2. ACC +4. 
[Lv. 2]: Mounted: WD -16%, Flee -7% Unmounted: CRIT +4. ACC +8. 
[Lv. 3]: Mounted: WD -19%, Flee -8% Unmounted: CRIT +6. ACC +12. 
[Lv. 4]: Mounted: WD -22%, Flee -9% Unmounted: CRIT +8. ACC +16. 
[Lv. 5]: Mounted: WD -25%, Flee -10% Unmounted: CRIT +10. ACC +20.`,
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
Type: Supportive
Target: Self
After Cast Delay: 0.30s
Cooldown: A.Delay
Requirement: None
Description: Unlinks all targets connected by Devotion. Also passively increases Max HP.
[Lv. 1]: MaxHP +200 + 1%
[Lv. 2]: MaxHP +400 + 2% 
[Lv. 3]: MaxHP +600 + 3% 
[Lv. 4]: MaxHP +800 + 4% 
[Lv. 5]: MaxHP +1000 + 5% 
[Lv. 6]: MaxHP +1200 + 6% 
[Lv. 7]: MaxHP +1400 + 7% 
[Lv. 8]: MaxHP +1600 + 8% 
[Lv. 9]: MaxHP +1800 + 9% 
[Lv.10]: MaxHP +2000 + 10%
Max HP: ((0.01 x Skill Lv) x MaxHP) + (200 x Skill Lv) `,
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
Element: Holy
After Cast Delay: A.Delay 0.40s
Cooldown: A.Delay
Range: 2+ Weapon's range 
Hits: 2
Requirement: Faith Lv: 5
Description: Deals P.DMG or M.DMG to the target based on Weapon type, scaling with STR and INT.
Has a 30% chance to infliect Blind on the target for 18s.
[Lv. 1]: ATK/MATK 140% x Hits. SP Cost: 11 
[Lv. 2]: ATK/MATK 180% x Hits. SP Cost: 12 
[Lv. 3]: ATK/MATK 220% x Hits. SP Cost: 13 
[Lv. 4]: ATK/MATK 260% x Hits. SP Cost: 14
[Lv. 5]: ATK/MATK 300% x Hits. SP Cost: 15 
[Lv. 6]: ATK/MATK 340% x Hits. SP Cost: 16 
[Lv. 7]: ATK/MATK 380% x Hits. SP Cost: 17 
[Lv. 8]: ATK/MATK 420% x Hits. SP Cost: 18 
[Lv. 9]: ATK/MATK 460% x Hits. SP Cost: 19 
[Lv.10]: ATK/MATK 500% x Hits. SP Cost: 20
Formula: ATK (%): (100 + (40 x Skill Lv) + STR + (INT / 2)) X Hits
        MATK (%): (100 + (40 x Skill Lv) + INT + (STR / 2)) x Hits `,
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
Element: Holy
Variable Cast Time: 1s
Fixed Cast Time: 0.60s
After Cast Delay: A.Delay - 0.40s 
Cooldown: 1.5s
Hits: 4
Requirement: Holy Cross Lv: 5
Description: Deals P.DMG or M.DMG to enemies within a 9x9 AoE, based on Weapon type and scaling with STR and INT.
Inflicts Blind for 1.2s on Undead and Demon monsters.
Each cast drains 10% of HP and cannot be interrupted.
[Lv. 1]: ATK/MATK 135% x Hits. SP Cost: 19
[Lv. 2]: ATK/MATK 170% x Hits. SP Cost: 23 
[Lv. 3]: ATK/MATK 205% x Hits. SP Cost: 27 
[Lv. 4]: ATK/MATK 240% x Hits. SP Cost: 31 
[Lv. 5]: ATK/MATK 275% x Hits. SP Cost: 35 
[Lv. 6]: ATK/MATK 310% x Hits. SP Cost: 39 
[Lv. 7]: ATK/MATK 345% x Hits. SP Cost: 43 
[Lv. 8]: ATK/MATK 380% x Hits. SP Cost: 47 
[Lv. 9]: ATK/MATK 415% x Hits. SP Cost: 51 
[Lv.10]: ATK/MATK 450% x Hits. SP Cost: 55
Details: ATK (%); (100 + (35 x Skill Lv) + STR + (INT / 2)) x Hits 
        MATK (%); (100 + (35 x Skill Lv) + INT + (STR / 2)) x Hits `,
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
Skill Form: Toggle
Type: Supportive 
Target: Self
After Cast Delay: 0.30s 
Cooldown: A.Delay
Requirement: None
Description: grants a chance to fully block any incoming P.DMG for the next 300s. Briefly immobilizes the character after a successful block. Requires a Shield.
[Lv. 1]: Block Chance: 5%, SP Cost: 12 
[Lv. 2]: Block Chance: 10%, SP Cost: 14 
[Lv. 3]: Block Chance: 14%, SP Cost: 16 
[Lv. 4]: Block Chance: 18%, SP Cost: 18 
[Lv. 5]: Block Chance: 21%, SP Cost: 20 
[Lv. 6]: Block Chance: 24%, SP Cost: 22 
[Lv. 7]: Block Chance: 26%, SP Cost: 24 
[Lv. 8]: Block Chance: 28%, SP Cost: 26
[Lv. 9]: Block Chance: 29%, SP Cost: 28 
[Lv.10]: Block Chance: 30%, SP Cost: 30`,
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
Skill Form: Toggle
Type: Supportive 
Target: Self
After Cast Delay: 0.30s
Cooldown: A.Delay
Requirement: Guard Lv: 5, Faith Lv: 5
Description: Reduces ranged P.DMG taken for 180s, but decreases ASPD and increases WD. 
Requires a Shield.
[Lv. 1]: Ranged P.DMG Reduction: 20% ASPD -20%, WD +20%
[Lv. 2]: Ranged P.DMG Reduction: 35% ASPD -15%, WD +15%
[Lv. 3]: Ranged P.DMG Reduction: 50% ASPD -10%, WD +10%
[Lv. 4]: Ranged P.DMG Reduction: 65% ASPD -5%, WD +5%
[Lv. 5]: Ranged P.DMG Reduction: 80% ASPD -0%, WD +0%`,
  img: icon_cru_17_namespaceObject
}, {
  id: "devotion",
  level: 0,
  dependencies: [{
    id: "layonh",
    minLevel: 5
  }, {
    id: "guard",
    minLevel: 3
  }],
  dependent: [{
    id: "graceofthemartyr"
  }],
  element: null,
  skillName: "Devotion",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active
Type: Supportive
Target: Ally
Range: 11
Variable Cast Time: 1.50s
Fixed Cast Time: 1.50s After Cast Delay: 1.50s SP Cost: 20
Requirement: Lay On H... Lv: 5, Guard Lv: 3
Description: Links with up to 5 allies, sharing part of the DMG they take until they move out of range or the duration ends.
Increases Max HP based on the number of devoted allies.
Only works on targets within 10 Base Levels. Cannot target allies that are already linked. 
[Lv. 1]: MaxHP: 100 + 0.4% Shared DMG: 50%, Duration: 30s
[Lv. 2]: MaxHP: 200 + 0.8% Shared DMG: 60%, Duration: 45s 
[Lv. 3]: MaxHP: 300 + 1.2% Shared DMG: 70%, Duration: 60s 
[Lv. 4]: MaxHP: 400 + 1.6% Shared DMG: 80%, Duration: 75s 
[Lv. 5]: MaxHP: 500 + 2.0% Shared DMG: 90%, Duration: 90s
Max HP: + (((0,04 x Skill Lv) x Max HP) + (100 x Skill Lv)) x Links `,
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
Skill Form: Toggle
Type: Supportive 
Target: Self
After Cast Delay: 0.30s 
Cooldown: A.Delay
Requirement: Guard Lv: 5, Faith Lv: 5
Description: Reflects all P.DMG taken back to the attacker for 300s.
Requires a shield.
[Lv. 1]: Reflect: 4%, SP Cost: 15 
[Lv. 2]: Reflect: 8%, SP Cost: 20 
[Lv. 3]: Reflect: 12%, SP Cost: 25 
[Lv. 4]: Reflect: 16%, SP Cost: 30 
[Lv. 5]: Reflect: 20%, SP Cost: 35 
[Lv. 6]: Reflect: 24%, SP Cost: 40 
[Lv. 7]: Reflect: 28%, SP Cost: 45 
[Lv. 8]: Reflect: 32%, SP Cost: 50 
[Lv. 9]: Reflect: 36%, SP Cost: 55 
[Lv.10]: Reflect: 40%, SP Cost: 60`,
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
Type: Physical Target: Enemy
Element: Elementless
After Cast Delay: A.Delay 0.40s 
Cooldown: A.Delay + 0.36s 
Range: 4 + Weapon's range 
Hits: 1
Requirement: Faith Lv: 5
Description: Deals ranged P.DMG to enemies within a 3x3 AoE around the target, Knocking them back and increasing their WD by 15% for 85.
Has a chance to inflict Stun on any target that collides with an obstacle. 
Requires a shield.
[Lv. 1]: ATK 180%, Knockback: 5 Stun Chance: 12%, SP Cost: 7
[Lv. 2]: ATK 260%, Knockback: 6 Stun Chance: 24%, SP Cost: 9 
[Lv. 3]: ATK 340%, Knockback: 7 Stun Chance: 36%, SP Cost: 11 
[Lv. 4]: ATK 420%, Knockback: 8 Stun Chance: 48%, SP Cost: 13 
[Lv. 5]: ATK 500%, Knockback: 9 Stun Chance: 60%, SP Cost: 15
Formula: ATK (%): 100 + (80 x Skill Lv) `,
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
Element: Elementless
After Cast Delay: A.Delay 0.40s
Cooldown: A.Delay + 0.265
Hits: 1
Requirement: Shield Charge Lv: 3
Description: Deals ranged P.DMG to the target, scaling with shield stats.
If the target's WD is increased by a status effect, they become Immobilized for 0.5s. Requires a shield.
[Lv. 1]: ATK 135%, Range: 5. SP Cost: 6 
[Lv. 2]: ATK 170%, Range: 6. SP Cost: 7 
[Lv. 3]: ATK 205%, Range: 6. SP Cost: 8 
[Lv. 4]: ATK 240%, Range: 7. SP Cost: 9 
[Lv. 5]: ATK 275%, Range: 7. SP Cost: 10
[Lv. 6]: ATK 310%, Range: 8. SP Cost: 11 
[Lv. 7]: ATK 345%, Range: 8. SP Cost: 12 
[Lv. 8]: ATK 380%, Range: 9. SP Cost: 13 
[Lv. 9]: ATK 415%, Range: 9. SP Cost: 14
[Lv. 10]: ATK 450%, Range: 10. SP Cost: 15
Formula: ATK (%): 100 + ((((Sweight + S.Defense + (S.Refine^2)) / 10 + 35) × Skill Lv) `,
  img: icon_cru_11_namespaceObject
}, {
  id: "layonh",
  level: 0,
  dependencies: [{
    id: "faith",
    minLevel: 7
  }],
  dependent: [{
    id: "devotion"
  }],
  element: null,
  skillName: "Lay On H...",
  // дописать название + в "devotion"
  maxLevel: 10,
  inform: `Max Level: 10
Skill Form: Active
Type: Supportive
Target: Ally
After Cast Delay: 1s
Cooldown: 10s
Range: 9
Description: Restores the target's HP, scaling with VIT, S.DEF, HP and Base Level.
CD scales with the number of devoted allies.
[Lv. 1]: SP Cost: 13
[Lv. 2]: SP Cost: 16 
[Lv. 3]: SP Cost: 19
[Lv. 4]: SP Cost: 22
[Lv. 5]: SP Cost: 25
[Lv. 6]: SP Cost: 28 
[Lv. 7]: SP Cost: 31 
[Lv. 8]: SP Cost: 34
[Lv. 9]: SP Cost: 37
[Lv. 10]: SP Cost: 40
Heal: ((((Base Lv + VIT) / 5) x 30) x (Skill Lv / 10)) + S.DEF + (HP / 50)
Cooldown (seconds): 10 - (2 x Devoted Allies) `,
  img: icon_cru_24_namespaceObject
}, {
  id: "graceofthemartyr",
  level: 0,
  dependencies: [{
    id: "devotion",
    minLevel: 1
  }],
  dependent: [{
    id: "gospel"
  }],
  element: null,
  skillName: "Grace of the Martyr",
  maxLevel: 10,
  inform: `Max Level: 10
Skill Form: Active
Type: Supportive Target: Self
Variable Cast Time: 25 
Fixed Cast Time: 1s
After Cast Delay: 0.30s 
Cooldown: 120s
SP Cost: 60
Description: Reduces DMG taken from allies under the effects of Devotion, scaling with the number of linked allies.
Requires a Shield.
[Lv. 1]: Reduction: 2%. Duration: 39s 
[Lv. 2]: Reduction: 4%. Duration: 48s 
[Lv. 3]: Reduction: 6%. Duration: 57s 
[Lv. 4]: Reduction: 8%. Duration: 66s 
[Lv. 5]: Reduction: 10%, Duration: 75s
[Lv. 6]: Reduction: 12%. Duration: 84s 
[Lv. 7]: Reduction: 14%. Duration: 93s 
[Lv. 8]: Reduction: 16%. Duration: 102s 
[Lv. 9]: Reduction: 18%. Duration: 101s 
[Lv. 10]: Reduction: 20%, Duration: 110s
Reduction (%); (Skill Lv x 2) + (Devoted Allies x. 6) `,
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
  dependencies: [{
    id: "graceofthemartyr",
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
  dependent: [],
  element: null,
  skillName: "Two-Handed Sword Mastery",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Passive
Type: Physical
Weapon: Two-Handed Sword
Requirement: One-Handed Sword Mastery Lv: 5
Description: Increases E.ATK while wielding a Two-Handed Sword. At max level, also grants +6 CRIT.
[Lv. 1]: E.ATK +4
[Lv. 2]: E.ATK +8
[Lv. 3]: E.ATK +12
[Lv. 4]: E.ATK +16
[Lv. 5]: E.ATK +20
[Lv. 6]: E.ATK +24
[Lv. 7]: E.ATK +28
[Lv. 8]: E.ATK +32
[Lv. 9]: E.ATK +36 
[Lv.10]: E.ATK +40`,
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
Weapon: Sword-Class
Target: Self
After Cast Delay: A.Delay 0.44s
Cooldown: A.Delay + 0.26s
Hits: 1
SP Cost: 9
Requirement: Sword Quicken Lv: 5
Description: Temporarily enters a stance that blocks 50% of the next attack's P.DMG and counters by dealing the same amount of P.DMG back to the attacker.
The counter will always CRIT and scales with weapon.
Must face the attacker to retaliate.
[Lv. 1]: Duration: 0.40s
[Lv. 2]: Duration: 0.60s
[Lv. 3]: Duration: 0.80s
[Lv. 4]: Duration: 1.00s
[Lv. 5]: Duration: 1.20s
ATK (%): 100 + (W.Weight + W.Attack + (100 x (W.Level X (W.Refine x 6))) + Countered Damage `,
  img: icon_knt_6_namespaceObject
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
Weapon: Sword-Class 
Target: Enemy
Hits: 1
Variable Cast Time: A.Delay
After Cast Delay: A.Delay 0.44s 
Cooldown: A.Delay + 0.365
SP Cost: 18
Requirement: Counter Attack Lv: 5
Description: Charges at the target, dealing P.DMG, scaling with WD.
VCT cannot be reduced by stats or gear.
[Lv. 1]: ATK 200%, Range: 6 + Weapon's range
[Lv. 2]: ATK 300%, Range: 7 + Weapon's range
[Lv. 3]: ATK 400%, Range: 8 + Weapon's range
[Lv. 4]: ATK 500%, Range: 9 + Weapon's range
[Lv. 5]: ATK 600%, Range: 10 + Weapon's range
Formula: ATK (%): (100 + (100 x Skill Lv)) x (2.5 - (0.01 x Walk Delay)); (Max 1200%) `,
  img: icon_knt_13_namespaceObject
}, {
  id: "bowlingBash",
  level: 0,
  dependencies: [{
    id: "swordQuicken",
    minLevel: 5
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
Weapon: Sword-Class 
Type: Physical
Target: Enemy
Variable Cast Time: 0.20s
After Cast Delay: A.Delay + 0.22s
Cooldown: 1s
Range: 2 Weapon's range
Requirement: Sword Quicken Lv: 10, Counter Attack Lv: 5
Description: Deals P.DMG to enemies within a 5x5 AoE around the target, Knocking them back 2 cells.
The damage scales with Base Level and the learned level of Bash.
Hits depend on the Weapon and the number of targets.
[Lv. 1]: ATK 110% x Hits. SP Cost: 13
[Lv. 2]: ATK 120% x Hits. SP Cost: 14 
[Lv. 3]: ATK 130% x Hits. SP Cost: 15 
[Lv. 4]: ATK 140% x Hits. SP Cost: 16 
[Lv. 5]: ATK 150% x Hits. SP Cost: 17 
[Lv. 6]: ATK 160% x Hits. SP Cost: 18 
[Lv. 7]: ATK 170% x Hits. SP Cost: 19 
[Lv. 8]: ATK 180% x Hits. SP Cost: 20 
[Lv. 9]: ATK 190% x Hits. SP Cost: 21 
[Lv.10]: ATK 200% x Hits. SP Cost: 22
Formula: ATK (%): (100 + (10 x Skill Lv) + (10 x Bash Lv)) x Hits
Base Level higher than 50: + ((((Base Lv - 50) / 5) x 10) x Hits)`,
  img: icon_knt_7_namespaceObject
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
  }, {
    id: "parry"
  }],
  element: null,
  skillName: "Sword Quicken",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Weapon: Sword-Class 
Type: Supportive 
Target: Self
After Cast Delay: 0.30s 
Cooldown: A.Delay
Requirement: One-Handed Sword Mastery Lv: 5
Description: Temporarily reduces DAA by 10% and increases ASPD by 20%. Also boosts CRIT and ACC. 
[Lv. 1]: CRIT +1. ACC +2 Duration: 84s. SP Cost: 12 
[Lv. 2]: CRIT +2. ACC +4 Duration: 108s. SP Cost: 14 
[Lv. 3]: CRIT +3. ACC +6 Duration: 132s. SP Cost: 16 
[Lv. 4]: CRIT +4. ACC +8 Duration: 156s. SP Cost: 18 
[Lv. 5]: CRIT +5, ACC +10 Duration: 180s. SP Cost: 20 
[Lv. 6]: CRIT +6, ACC +12 Duration: 204s. SP Cost: 22 
[Lv. 7]: CRIT +7. ACC +14 Duration: 228s. SP Cost: 24 
[Lv. 8]: CRIT +8. ACC +16 Duration: 252s. SP Cost: 26 
[Lv. 9]: CRIT +9. ACC +18 Duration: 276s. SP Cost: 28 
[Lv.10]: CRIT +10. ACC +20 Duration: 300s, SP Cost: 30`,
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
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Passive
Type: Physical
Requirement: Endure Lv: 1
Description: Lets the user ride a Peco Peco. While mounted, reduces WD and Flee. While not mounted, increases CRIT and ACC. 
Rental with: PecoPeco Breeder
[Lv. 1]: Mounted: WD -13%, Flee -6% Unmounted: CRIT +2. ACC +4. 
[Lv. 2]: Mounted: WD -16%, Flee -7% Unmounted: CRIT +4. ACC +8. 
[Lv. 3]: Mounted: WD -19%, Flee -8% Unmounted: CRIT +6. ACC +12. 
[Lv. 4]: Mounted: WD -22%, Flee -9% Unmounted: CRIT +8. ACC +16. 
[Lv. 5]: Mounted: WD -25%, Flee -10% Unmounted: CRIT +10. ACC +20.`,
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
Weapon: Spear-Class and Dagger
Target: Enemy
After Cast Delay: A.Delay 0.44s 
Cooldown: A.Delay
Range: 1+ Weapon's range
SP Cost: 5
Requirement: One-Spear Mastery Lv: 5
Description: Deals ranged P.DMG to the target.
Each hit grants 1 Stabbing stack for 60s. Gaining more Stacks adds additional hits. 
[Lv. 1]: ATK 120% x Hits
[Lv. 2]: ATK 140% x Hits
[Lv. 3]: ATK 160% x Hits 
[Lv. 4]: ATK 180% x Hits 
[Lv. 5]: ATK 200% x Hits
[Lv. 6]: ATK 220% x Hits
[Lv. 7]: ATK 240% x Hits
[Lv. 8]: ATK 260% x Hits
[Lv. 9]: ATK 280% x Hits
[Lv. 10]: ATK 300% x Hits
Formula: ATK (%): (100 + (20 x Skill Lv) + ((Agility / 100) x Stabbing Stacks)) x Hits `,
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
Weapon: Spear-Class 
Type: Physical
Target: Enemy
After Cast Delay: A.Delay
Cooldown: A.Delay + 0.265 
Hits: 1
Requirement: Spear Stab Lv: 3
Description: Deals ranged P.DMG to the target, scaling with weapon stats.
If the target's WD is increased by a status effect, they become Immobilized for 0.5s. 
[Lv. 1]: ATK 135%, Range: 5. SP Cost: 6 
[Lv. 2]: ATK 170%, Range: 6. SP Cost: 7 
[Lv. 3]: ATK 205%, Range: 6. SP Cost: 8 
[Lv. 4]: ATK 240%, Range: 7. SP Cost: 9 
[Lv. 5]: ATK 275%, Range: 7. SP Cost: 10 
[Lv. 6]: ATK 310%, Range: 8. SP Cost: 11
[Lv. 7]: ATK 345%, Range: 8. SP Cost: 12 
[Lv. 8]: ATK 380%, Range: 9. SP Cost: 13 
[Lv. 9]: ATK 415%, Range: 9. SP Cost: 14 
[Lv.10]: ATK 450%, Range: 10. SP Cost: 15
Formula: ATK (%): 100 + (((Weapon Weight / 10) + 35) Skill Lv) `,
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
Weapon: Spear-Class 
Type: Supportive 
Target: Self
After Cast Delay: 0.30s 
Cooldown: A.Delay
Requirement: One-Spear Mastery Lv: 5
Description: Temporarily reduces DAA by 10% and increases ASPD by 20%, Also boosts CRIT and ACC 
[Lv. 1]: CRIT +1, ACC +2 Duration: 84s. SP Cost: 12 
[Lv. 2]: CRIT +2. ACC +4 Duration: 108s. SP Cost: 14 
[Lv. 3]: CRIT +3, ACC +6 Duration: 132s. SP Cost: 16 
[Lv. 4]: CRIT +4. ACC +8 Duration: 156s. SP Cost: 18
[Lv. 5]: CRIT +5. ACC +10 Duration: 180s, SP Cost: 20 
[Lv. 6]: CRIT +6. ACC +12 Duration: 204s, SP Cost: 22 
[Lv. 7]: CRIT +7. ACC +14 Duration: 228s. SP Cost: 24 
[Lv. 8]: CRIT +8. ACC +16 Duration: 252s. SP Cost: 26 
[Lv. 9]: CRIT +9. ACC +18 Duration: 276s, SP Cost: 28 
[Lv.10]: CRIT +10, ACC +20 Duration: 300s, SP Cost: 30`,
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
Weapon: Spear-Class 
Type: Physical
Target: Enemy
After Cast Delay: A.Delay 0.44s
Cooldown: A.Delay + 0.36s
Range: 4 + Weapon's range 
Hits: 1
Requirement: Pierce Lv: 5
Description: Deals ranged P.DMG to enemies within a 3x3 AoE around the target, Knocking them back and increasing their WD by 15% for 8s.
Has a chance to inflict Stun on any target that collides with an obstacle.
[Lv. 1]: ATK 180%, Knockback: 5 Stun Chance: 12%, SP Cost: 7
[Lv. 2]: ATK 260%, Knockback: 6 Stun Chance: 24%, SP Cost: 9 
[Lv. 3]: ATK 340%, Knockback: 7 Stun Chance: 36%, SP Cost: 11 
[Lv. 4]: ATK 420%, Knockback: 8 Stun Chance: 48%, SP Cost: 13 
[Lv. 5]: ATK 500%, Knockback: 9 Stun Chance: 60%, SP Cost: 15
Formula: ATK (%): 100 + (80 x skill Lv) `,
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
Weapon: Spear-Class 
Type: Physical
Target: Enemy
Variable Cast Time: 0.20s
Fixed Cast Time: 0.40s
After Cast Delay: A.Delay 0.445
Cooldown: 1s
Range: 3
Hits: 3
SP Cost: 24
Requirement: Spear Stab Lv: 5
Description: Deals ranged P.DMG to enemies within a 7x7 AoE around the target, Knocking them back 2 cells. Damage scales with VIT and Base Level.
Only enemies in front of the user are affected.
[Lv. 1]: ATK 140% SP Cost: 11
[Lv. 2]: ATK 180% SP Cost: 12
[Lv. 3]: ATK 220% SP Cost: 13
[Lv. 4]: ATK 260% SP Cost: 14
[Lv. 5]: ATK 300% SP Cost: 15
[Lv. 6]: ATK 340% SP Cost: 16
[Lv. 7]: ATK 380% SP Cost: 17
[Lv. 8]: ATK 420% SP Cost: 18
[Lv. 9]: ATK 460% SP Cost: 19
[Lv.10]: ATK 500% SP Cost: 20
Formula: ATK (%): 100 + (40 x Skill Lv x (1 + ((VIT + 30) x (Base Lv / 100)))) `,
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
Description: Temporarily increases True Physical Damage, scaling with CRIT. Bonus is doubled for basic attacks.
[Lv. 1]: TPD +5%, TPD +50 Duration: 60s. SP Cost: 23
[Lv. 2]: TPD +10%, TPD +100 Duration: 80s. SP Cost: 26
[Lv. 3]: TPD +15%, TPD +150 Duration: 100s. SP Cost: 29 
[Lv. 4]: TPD +20%, TPD +200 Duration: 120s. SP Cost: 32
[Lv. 5]: TPD +25%, TPD +250 Duration: 140s. SP Cost: 35 
[Lv. 6]: TPD +30%, TPD +300 Duration: 160s. SP Cost: 38 
[Lv. 7]: TPD +35%, TPD +350 Duration: 180s. SP Cost: 41
[Lv. 8]: TPD +40%, TPD +400 Duration: 200s. SP Cost: 44
[Lv. 9]: TPD +45%. TPD +450 Duration: 220s, SP Cost: 47
[Lv.10]: TPD +50%, TPD +500 Duration: 240s. SP Cost: 50
TPD: + ((TPD x (5 x Skill Lv)) / 100) + (50 x Skill Lv) + (CRIT x 2)`,
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
Drains 1% of Max HP every 3s and disabled HP Recovery and SP Recovery. Also reduces Healing received from potions, food, items, and skill, as well as Physical Defense.
Cannot be used while mounted.
[Lv. 1]: Heal. Eff/Life Steal/DEF -90%, Cooldown: 300s
[Lv. 2]: Heal. Eff/Life Steal/DEF -80%, Cooldown: 240s
[Lv. 3]: Heal. Eff/Life Steal/DEF -70%, Cooldown: 180s
[Lv. 4]: Heal. Eff/Life Steal/DEF -60%, Cooldown: 120s
[Lv. 5]: Heal. Eff/Life Steal/DEF -50%, Cooldown: 60s
Max HP (%): +(base Vitality / 2)
Attack Speed (%): +(Base Agility / 4)
Basic Attacks Bonus: +100%
Critical Basic Attacks Bonus: +125%
Skill Attack Bonus: +25% `,
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
[Lv. 1]: B.ATK +12% ACC +2% Duration: 84s. SP Cost: 23
[Lv. 2]: B.ATK +14% ACC +4% Duration: 80s. SP Cost: 26
[Lv. 3]: B.ATK +16% ACC +6% Duration: 100s. SP Cost: 29
[Lv. 4]: B.ATK +18% ACC +8% Duration: 120s. SP Cost: 32
[Lv. 5]: B.ATK +20% ACC +10% Duration: 140s. SP Cost: 35 
[Lv. 6]: B.ATK +22% ACC +12% Duration: 160s, SP Cost: 38 
[Lv. 7]: B.ATK +24% ACC +14% Duration: 180s. SP Cost: 41 
[Lv. 8]: B.ATK +26% ACC +16% Duration: 200s. SP Cost: 44 
[Lv. 9]: B.ATK +28% ACC +18% Duration: 220s. SP Cost: 47
[Lv.10]: B.ATK +30% ACC +20% Duration: 240s. SP Cost: 50`,
  img: icon_lkn_3_namespaceObject
}, {
  id: "parry",
  level: 0,
  dependencies: [{
    id: "counterAttack",
    minLevel: 5
  }, {
    id: "swordQuicken",
    minLevel: 5
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
Cooldown: Attack Delay
SP Cost: 30
Duration: (60 + (24 × Skill Lv))s
Requirement: Counter Attack Lv: 5, Sword Quicken Lv: 5
Description: Grants a chance to fully block any incoming Physical Damage. Block chance is reduced by 10% when wielding a One- Handed Sword.
[Lv. 1]: Block Chance: 23%, Duration: 84s 
[Lv. 2]: Block Chance: 26%, Duration: 108s 
[Lv. 3]: Block Chance: 29%, Duration: 132s 
[Lv. 4]: Block Chance: 32%, Duration: 156s 
[Lv. 5]: Block Chance: 35%, Duration: 180s 
[Lv. 6]: Block Chance: 38%, Duration: 204s 
[Lv. 7]: Block Chance: 41%, Duration: 228s
[Lv. 8]: Block Chance: 44%, Duration: 252s 
[Lv. 9]: Block Chance: 47%, Duration: 276s 
[Lv.10]: Block Chance: 50%, Duration: 300s
Block Chance (1H Sword): ((20 + (3 × Skill Lv)) - 10)%`,
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
Formula: ATK (%): (100 + (((W.Weight / (20 - Spear Boomerang Lv)) + 10) x Skill Lv)) x Hits `,
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
Description: Increases FLEE and reduces WD.
[Lv. 1]: FLEE +3. WD -1%
[Lv. 2]: FLEE +6. WD -2%
[Lv. 3]: FLEE +9. WD -3%
[Lv. 4]: FLEE +12. WD -4% 
[Lv. 5]: FLEE +15. WD -5% 
[Lv. 6]: FLEE +18. WD -6% 
[Lv. 7]: FLEE +21. WD -7% 
[Lv. 8]: FLEE +24. WD -8% 
[Lv. 9]: FLEE +27. WD -9% 
[Lv. 10]: FLEE +30. WD -10%`,
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
Weapon: Dagger
Type: Physical
Range: 1
Requirement: None
Description: Grants a chance for basic attacks to hit twice. When this happens, both hits have increased ACC
[Lv. 1]: Chance: 7%, ACC +1 
[Lv. 2]: Chance: 14%, ACC +2
[Lv. 3]: Chance: 21%, ACC +3 
[Lv. 4]: Chance: 28%, ACC +4 
[Lv. 5]: Chance: 35%, ACC +5 
[Lv. 6]: Chance: 42%, ACC +6 
[Lv. 7]: Chance: 49%, ACC +7 
[Lv. 8]: Chance: 56%, ACC +8 
[Lv. 9]: Chance: 63%, ACC +9 
[Lv.10]: Chance: 70%, ACC +10`,
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
Type: Magical
Target: Enemy
Element: Poison
After Cast Delay: A.Delay 0.265
Cooldown: A.Delay
Range: 2+ Weapon's range
Hits: 1
Requirement: none
Description: Deals M.DMG to the target, scaling with Base Level.
Has a chance to inflict Poison for 60s.
[Lv. 1]: MATK 120%, SP Cost: 7 Poison Chance: 14%
[Lv. 2]: MATK 140%, SP Cost: 8 Poison Chance: 18%
[Lv. 3]: MATK 160%, SP Cost: 9 Poison Chance: 22%
[Lv. 4]: MATK 180%, SP Cost: 10 Poison Chance: 26%
[Lv. 5]: MATK 200%, SP Cost: 11 Poison Chance: 30%
[Lv. 6]: MATK 220%, SP Cost: 12 Poison Chance: 34%
[Lv. 7]: MATK 240%, SP Cost: 13 Poison Chance: 38%
[Lv. 8]: MATK 260%, SP Cost: 14 Poison Chance: 42%
[Lv. 9]: MATK 280%, SP Cost: 15 Poison Chance: 46%
[Lv. 10]: MATK 300%, SP Cost: 16 Poison Chance: 50%
Formula: MATK (%): 100 + (Skill Lv x 20) + (Base Lv x 3) `,
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
Type: Supportive 
Range: 9
After Cast Delay: 1s
Cooldown: 3s
SP Cost: 10
Requirement: Envenom Lv: 3
Description: Has a chance to clear Poison, scaling with both the user's INT and Base Level, as well as the target's VIT and Base Level.
If successful, grants +20% Poison resistance.
Formula: Chance (%): (Base Lv x 10) + (INT x 40)) + (Target Base Lv x 10) + (Target VIT x 40) `,
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
Type: Supportive
Target: Enemy
After Cast Delay: A.Delay 0.26s
Cooldown: A.Delay
Range: 1
Requirement: None
Description: Has a chance to steal an item
from normal monsters. Success chance scales with the level difference between user and monster.
[Lv. 1]: Steal Chance: 6%
[Lv. 2]: Steal Chance: 12% 
[Lv. 3]: Steal Chance: 18% 
[Lv. 4]: Steal Chance: 24% 
[Lv. 5]: Steal Chance: 30% 
[Lv. 6]: Steal Chance: 36% 
[Lv. 7]: Steal Chance: 42% 
[Lv. 8]: Steal Chance: 48% 
[Lv. 9]: Steal Chance: 54% 
[Lv.10]: Steal Chance: 60%
Formula: Steal Chance (%): (Skill Lv x 6) + ((Base Lv - Target Lv) / 2) `,
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
Skill Form: Toggle
Type: Supportive 
Target: Self
SP Cost: 10
Requirement: Steal Lv: 4
Description: Becomes Invisible and dodges enemy attacks.
While active, drains 1 SP per second and prevents any action. 
ACD scales with skill level.
[Lv. 1]: ACD: 1.00s. SP Drain: every 1s Duration: 30s
[Lv. 2]: ACD: 0.90s. SP Drain: every 2s Duration: 60s
[Lv. 3]: ACD: 0.80s. SP Drain: every 3s Duration: 90s
[Lv. 4]: ACD: 0.70s. SP Drain: every 4s Duration: 120s
[Lv. 5]: ACD: 0.60s. SP Drain: every 5s Duration: 150s
[Lv. 6]: ACD: 0.50s. SP Drain: every 6s Duration: 180s
[Lv. 7]: ACD: 0.40s. SP Drain: every 7s Duration: 210s
[Lv. 8]: ACD: 0.30s. SP Drain: every 8s Duration: 240s
[Lv. 9]: ACD: 0.20s. SP Drain: every 9s Duration: 270s
[Lv.10]: ACD: 0.10s. SP Drain: every 10s Duration: 300s`,
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
Element: Earth
After Cast Delay: A.Delay - 0.26s
Cooldown: A.Delay + 1s
Range: 3
Requirement: None
Description: Deals P.DMG to enemies within a 3x3 AoE around the target. Has a 20% chance to inflict Blind on them for 20s. 
[Lv. 1]: ATK 120%, SP Cost: 6
[Lv. 2]: ATK 140%, SP Cost: 6
[Lv. 3]: ATK 160%, SP Cost: 7
[Lv. 4]: ATK 180%, SP Cost: 7 
[Lv. 5]: ATK 200%, SP Cost: 8 
[Lv. 6]: ATK 220%, SP Cost: 8 
[Lv. 7]: ATK 240%, SP Cost: 9 
[Lv. 8]: ATK 260%, SP Cost: 9 
[Lv. 9]: ATK 280%, SP Cost: 10 
[Lv.10]: ATK 300%, SP Cost: 10
Formula: ATK (%): 100 + (Skill Lv x 20) `,
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
Element: Neutral
After Cast Delay: A.Delay - 0.26s 
Cooldown: A.Delay + 0.36s
Range: 7 
Hits: 1
SP Cost: 4
Requirement: None
Description: Deals ranged P.DMG scaling with STR and has a chance to inflict Stun.
Also deals 30% increased P.DMG to stunned enemies.
[Lv. 1]: ATK 110%, Stun Chance: 13% 
[Lv. 2]: ATK 120%, Stun Chance: 16% 
[Lv. 3]: ATK 130%, Stun Chance: 19% 
[Lv. 4]: ATK 140%, Stun Chance: 22% 
[Lv. 5]: ATK 150%, Stun Chance: 25%
[Lv. 6]: ATK 160%, Stun Chance: 28% 
[Lv. 7]: ATK 170%, Stun Chance: 31% 
[Lv. 8]: ATK 180%, Stun Chance: 34% 
[Lv. 9]: ATK 190%, Stun Chance: 37% 
[Lv.10]: ATK 200%, Stun Chance: 40%
Formula: MATK (%): 100 + (Skill Lv x 10) + STR `,
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
Weapon: Katar
Requirement: None
Description: Increases E.ATK and CRIT while wielding a Katar. At max level, also grants +6% ATK.
[Lv. 1]: E.ATK +4. CRIT +10% 
[Lv. 2]: E.ATK +8. CRIT +20% 
[Lv. 3]: E.ATK +12. CRIT +30% 
[Lv. 4]: E.ATK +16. CRIT +40% 
[Lv. 5]: E.ATK +20. CRIT +50% 
[Lv. 6]: E.ATK +24. CRIT +60% 
[Lv. 7]: E.ATK +28. CRIT +70% 
[Lv. 8]: E.ATK +32. CRIT +80% 
[Lv. 9]: E.ATK +36. CRIT +90% 
[Lv.10]: E.ATK +40. CRIT +100%`,
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
Skill Form: Toggle 
Type: Supportive 
Target: Self
After Cast Delay: 0.30s 
Cooldown: A.Delay
SP Cost: 15
Requirement: Hiding Lv: 1
Description: Becomes Invisible, reducing WD while near walls and increasing it while far. While active, drains 1 SP over time.
At level 1, can only be used near walls. 
[Lv. 1]: Near -3% SP Drain: every 0.5s
[Lv. 2]: Far +24%, Near -6% SP Drain: every 1s
[Lv. 3]: Far +21%, Near -9% SP Drain: every 2s
[Lv. 4]: Far +18%, Near -12% SP Drain: every 3s
[Lv. 5]: Far +15%, Near -15% SP Drain: every 4s
[Lv. 6]: Far +12%, Near -18% SP Drain: every 5s
[Lv. 7]: Far +9%, Near -21% SP Drain: every 6s
[Lv. 8]: Far +6%, Near -24% SP Drain: every 7s
[Lv. 9]: Far +3%, Near -27% SP Drain: every 8s
[Lv.10]: Far +0%, Near -30% SP Drain: every 9s `,
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
Weapon: Dual-Wielded
Requirement: None
Description: Increases E.ATK while Dual Wielding. Also reduces their damage penalty. 
[Lv. 1]: E.ATK +4. Penalty -10%
[Lv. 2]: E.ATK +8. Penalty -20% 
[Lv. 3]: E.ATK +12. Penalty -30% 
[Lv. 4]: E.ATK +16. Penalty -40% 
[Lv. 5]: E.ATK +20. Penalty -50% 
[Lv. 6]: E.ATK +24. Penalty -60% 
[Lv. 7]: E.ATK +28. Penalty -70% 
[Lv. 8]: E.ATK +32. Penalty -80% 
[Lv. 9]: E.ATK +36. Penalty -90% 
[Lv.10]: E.ATK +40. Penalty -100%`,
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
Element: Ammunition
After Cast Delay: A.Delay - 0.22s
Cooldown: A.Delay
Range: 12
Hits: 1
Requirement: Dual Wielding Mastery Lv: 5, Cloaking Lv: 5
Description: Deals ranged P.DMG to the target, scaling with their missing HP.
Also ignores 1% of their P.DEF for each 1% HP missing.
This skill has HCM based on CRIT.
Catalyst: 1x Throwing Knife
[Lv. 1]: ATK 140%, SP Cost: 6 
[Lv. 2]: ATK 180%, SP Cost: 7 
[Lv. 3]: ATK 220%, SP Cost: 8 
[Lv. 4]: ATK 260%, SP Cost: 9 
[Lv. 5]: ATK 300%, SP Cost: 10 
[Lv. 6]: ATK 340%, SP Cost: 11 
[Lv. 7]: ATK 380%, SP Cost: 12 
[Lv. 8]: ATK 420%, SP Cost: 13 
[Lv. 9]: ATK 460%, SP Cost: 14 
[Lv.10]: ATK 500%, SP Cost: 15
Formula: ATK (%): 100 + (Skill Lv x 40) + Target Missing HP bonus 
HCM (%): 100 + (CRIT / 2)
Target Missing HP bonus:
If the target's HP is below 25%: 100% bonus 
If the target's HP is below 50%: 60% bonus 
If the target's HP is below 75%: 30% bonus `,
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
Weapon: Katar 
Type: Physical
Target: Enemy
After Cast Delay: A.Delay - 0.22s 
Cooldown: A.Delay
Hits: 1
Requirement: Cloaking Lv: 2, Katar Mastery Lv: 4
Description: Deals ranged P.DMG to enemies between the user and the target, scaling with AGI when used from Hiding.
Also increases WD of normal monsters by 50% for 1s.
This skill has HCM based on CRIT. Requires Hiding or Cloaking state.
[Lv. 1]: ATK 120%, Range: 5. SP Cost: 4 
[Lv. 2]: ATK 140%, Range: 5. SP Cost: 4 
[Lv. 3]: ATK 160%, Range: 6. SP Cost: 5 
[Lv. 4]: ATK 180%, Range: 6. SP Cost: 5
[Lv. 5]: ATK 200%, Range: 7. SP Cost: 6 
[Lv. 6]: ATK 220%, Range: 7. SP Cost: 6 
[Lv. 7]: ATK 240%, Range: 8. SP Cost: 7 
[Lv. 8]: ATK 260%, Range: 8. SP Cost: 7 
[Lv. 9]: ATK 280%, Range: 9. SP Cost: 8 
[Lv.10]: ATK 300%, Range: 9. SP Cost: 8
Formula: ATK (%): 100 + (Skill Lv x 20) 
HCM (%) 100 + (CRIT / 2)
Hiding ATK (%): 100 + (Skill Lv x 20) + AGI `,
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
Weapon: Katar 
Type: Physical 
Target: Enemy
After Cast Delay: A.Delay 0.22s 
Cooldown: A.Delay + 0.66s
Range: 1
Hits: 8
Requirement: Grimtooth Lv: 5
Description: Deals P.DMG to the target. Has a chance to inflict Stun for 4.5s. Hits scales with A.Delay.
This skill has HCM based on CRIT.
[Lv. 1]: ATK 60% x Hits. SP Cost: 16 Stun Chance: 12%
[Lv. 2]: ATK 70% x Hits. SP Cost: 17 Stun Chance: 14%
[Lv. 3]: ATK 80% x Hits. SP Cost: 18 Stun Chance: 16%
[Lv. 4]: ATK 90% x Hits. SP Cost: 19 Stun Chance: 18%
[Lv. 5]: ATK 100% x Hits. SP Cost: 20 Stun Chance: 20%
[Lv. 6]: ATK 110% x Hits. SP Cost: 21 Stun Chance: 22%
[Lv. 7]: ATK 120% x Hits. SP Cost: 22 Stun Chance: 24%
[Lv. 8]: ATK 130% x Hits. SP Cost: 23 Stun Chance: 26%
[Lv. 9]: ATK 140% x Hits. SP Cost: 24 Stun Chance: 28%
[Lv.10]: ATK 150% x Hits. SP Cost: 25 Stun Chance: 30%
Formula: ATK (%): (50 + (Skill Lv x 10)) x Hits 
HCM (%): 100 + (CRIT / 2) 
Hits: 8 + (1000 + A.Delay) `,
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
Type: Supportive 
Target: Ally
Variable Cast Time: 1s
After Cast Delay: A.Delay + 2s
Range: 9
Requirement: Envenom Lv: 1
Description: Endows the weapon with Poison property, granting a chance to inflict Poison for 60s on attacks.
Also increases the DMG of Poison property basic attacks and skills.
From level 5, affects allies within a 5x5 AoE around the target, but has a 0.6s FCT, doubles SP Cost and triples the Catalyst required.
Catalyst: 1x Condensed Poison
[Lv. 1]: Poison Damage +2%, Chance: 4% Duration: 75s. SP Cost: 19
[Lv. 2]: Poison Damage +3%, Chance: 6% Duration: 150s. SP Cost: 23
[Lv. 3]: Poison Damage +4%, Chance: 8% Duration: 225s. SP Cost: 27
[Lv. 4]: Poison Damage +5%, Chance: 10% Duration: 300s. SP Cost: 31
[Lv. 5]: Poison Damage +5%, Chance: 10% Duration: 300s. SP Cost: 62 `,
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
Type: Supportive 
Target: Self
After Cast Delay: A.Delay - 0.22s
Requirement: Poison Weapon Lv: 3
Description: Amplifies and reflects 70% of Poison property DMG as M.DMG to the attacker, while only taking 30% of the original DMG. Ends after reflecting.
Has a chance to auto-cast Envenom at its learned level when taking non-Poison property damage, if the attacker is within Envenom range.
Chance scales with Venom Dust and Venom Splasher levels, and is reduced to one-third if the attack misses.
CD scales with skill level.
[Lv. 1]: Amplify: 130%, CD: 1s. SP Cost: 15 Envenom Chance: 6%, Duration: 15s
[Lv. 2]: Amplify: 160%, CD: 2s. SP Cost: 20 Envenom Chance: 12%, Duration: 20s
[Lv. 3]: Amplify: 190%, CD: 3s. SP Cost: 25 Envenom Chance: 18%, Duration: 25s
[Lv. 4]: Amplify: 220%, CD: 4s. SP Cost: 30 Envenom Chance: 24%, Duration: 30s
[Lv. 5]: Amplify: 250%, CD: 5s. SP Cost: 35 Envenom Chance: 30%, Duration: 35s
[Lv. 6]: Amplify: 280%, CD: 6s, SP Cost: 40 Envenom Chance: 36%, Duration: 40s 
[Lv. 7]: Amplify: 310%, CD: 7s. SP Cost: 45 Envenom Chance: 42%, Duration: 45s
[Lv. 8]: Amplify: 340%, CD: 8s. SP Cost: 50 Envenom Chance: 48%, Duration: 50s
[Lv. 9]: Amplify: 370%, CD: 9s, SP Cost: 55 Envenom Chance: 54%, Duration: 55s 
[Lv.10]: Amplify: 400%, CD: 10s. SP Cost: 60 Envenom Chance: 60%, Duration: 60s
Formula: Redirect and Envenom Chance (%): (Skill Lv x 6) + ((Venom Dust Lv + Venom Splasher Lv) x 2) `,
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
Type: Supportive 
Target: Self
SP Cost: 5
Requirement: Envenom Lv: 10, Detoxify Lv: 1, Poison Weapon Lv: 5
Description: Crafts Poison Bottles.
Base Level, Job Level and Stats increase the number of crafted bottles.
Guide: Poisonery Creation Guide
[Lv. 1]: Bonus Efficiency: 0% 
[Lv. 2]: Bonus Efficiency: 25% 
[Lv. 3]: Bonus Efficiency: 50% 
[Lv. 4]: Bonus Efficiency: 75% 
[Lv. 5]: Bonus Efficiency: 100%
Formula: 
Crafted Bottles: 
1 + Bonus Amount
Bonus Amount:
((1 x ((Level Bonus + Stats Bonus) x ((Skill Lv x 25) - 25))) / 100)
Level Bonus: 
((Base Lv x 100) / 200) + ((Job Lv x 100) / 140) / 100
Stats Bonus:
((STR2^ / 10) + (AGI^2 / 10) + (VIT^2 / 10) + (INT^2 / 10) + (DEX^2) + (LUK^2 / 10)) / 100

Random Bonus Amount:
10% chance for the bonus to be reduced to 25%
70% chance for the bonus to be reduced to 50% 
20% chance for no reductions `,
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
Type: Supportive 
Target: Ground
Fixed Cast Time: 0.50s
After Cast Delay: A.Delay 0.22s
Range: 9
SP Cost: 40
Requirement: Poison Weapon Lv: 5
Description: Creates a 7x7 AoE that inflicts. Poison on enemies for 18s.
Also reduces their resistance to Poison property and to Poison status, strongest at the center.
VCT and CD scales with skill level.
Catalyst: 1x Noxious Powder Bottle
[Lv 1]: VCT: 0.10s. CD: 6s Duration: 6s
[Lv 2]; VCT: 0.20s. CD: 12s Duration: 12s
[Lv 3]: VCT: 0.30s, CD: 18s Duration: 18s
[Lv 4]: VCT: 0.40s. CD: 24s Duration: 24s
[Lv 5]: VCT: 0.50s. CD: 30s Duration: 30s
[Lv 6]: VCT: 0.60s. CD: 36s Duration: 36s
[Lv 7]: VCT: 0.70s. CD: 42s Duration: 42s
[Lv 8]: VCT: 0.80s. CD: 48s Duration: 48s
[Lv 9]: VCT: 0.90s. CD: 54s  Duration: 54s
[Lv.10]: VCT: 1.00s. CD: 60s Duration: 60s
Formula: 
Poison status and property resistance reduce (%):
  Center: Skill Lv x 5
  Around the Center: Skill Lv x 3
  Outer area: Skill Lv x 1 `,
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
  dependent: [{
    id: "vSAnticipation"
  }],
  element: null,
  skillName: "Venom Splasher",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Enemy
Element: Poison
Variable Cast Time: 1s
Fixed Cast Time: 0.30s 
After Cast Delay: 0.14s 
Max Instances: 5
Range: 4
Hits: 1
Requirement: Poison React Lv: 5, Venom Dust Lv: 5
Description: Plants a bomb on a single target which explodes after 90s, dealing M.DMG to enemies within a 5x5 AoE around the target. The user's ATK is added to the damage as T.MATK.
Has a chance to inflict Poison for 20s, which spreads to enemies in the area if the target is already poisoned.
CD scales with skill level. 
[Lv. 1]: MATK 600%, CD: 2s Poison Chance: 14%, SP Cost: 17 
[Lv. 2]: MATK 700%, CD: 4s Poison Chance: 18%, SP Cost: 19 
[Lv. 3]: MATK 800%, CD: 6s Poison Chance: 22%, SP Cost: 21 
[Lv. 4]: MATK 900%, CD: 8s Poison Chance: 26%, SP Cost: 23 
[Lv. 5]: MATK 1000%, CD: 10s Poison Chance: 30%, SP Cost: 25 
[Lv. 6]: MATK 1100%, CD: 12s Poison Chance: 34%, SP Cost: 27 
[Lv. 7]: MATK 1200%, CD: 14s Poison Chance: 38%, SP Cost: 29 
[Lv. 8]: MATK 1300%, CD: 16s Poison Chance: 42%, SP Cost: 31 
[Lv. 9]: MATK 1400%, CD: 18s Poison Chance: 46%, SP Cost: 33 
[Lv.10]: MATK 1500%, CD: 20s Poison Chance: 50%, SP Cost: 35
Formula: MATK (%): 500 + (Skill Lv x 100) `,
  img: icon_ass_10_namespaceObject
}, {
  id: "vSAnticipation",
  level: 0,
  dependencies: [{
    id: "venomSplasher",
    minLevel: 1
  }],
  dependent: [],
  element: null,
  skillName: "V.S. Anticipation",
  maxLevel: 5,
  inform: `Max Lv: 5
Skill Form: Active 
Type: Supportive 
Target: Self
After Cast Delay: 0.14s
Cooldown: 3s
SP Cost: 5
Description: Instantly triggers user's Venom Splasher within a 21x21 AoE, reducing its CD. Can be used while in Cloaking.
[Lv. 1]: CD Reduction: 4s 
[Lv. 2]: CD Reduction: 85 
[Lv. 3]: CD Reduction: 12s 
[Lv. 4]: CD Reduction: 16s 
[Lv. 5]: CD Reduction: 20s`,
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
Weapon: Katar/Dual-Wielded
Requirement: Dual Wielding Mastery Lv: 5, Katar Mastery Lv: 5
Description: Reduces the damage penalty while wielding Katars. Also increases CRIT while Dual Wielding.
[Lv. 1]: Penalty -20%, CRIT +10% 
[Lv. 2]: Penalty -40%, CRIT +20%
[Lv. 3]: Penalty -60%, CRIT +30% 
[Lv. 4]: Penalty -80%, CRIT +40% 
[Lv. 5]: Penalty -100%, CRIT +50%`,
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
  skillName: "Advanced Poison Mastery",
  maxLevel: 5,
  inform: `Max Level: 5
Skill Form: Passive
Requirement: Poisonery Lv: 1
Description: Allows the creation and consumption of Advanced Poison Bottles. Duration scales with the skill level.
[Lv. 1]: Duration: 100s
[Lv. 2]: Duration: 120s
[Lv. 3]: Duration: 140s 
[Lv. 4]: Duration: 160s 
[Lv. 5]: Duration: 180s`,
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
Weapon: Dual-Wielded 
Type: Physical
Target: Self
Fixed Cast Time: 0.60s
After Cast Delay: 0.50s
Cooldown: 1s
Hits: 1
Requirement: Dual Wielding Mastery Lv: 10, Cloaking Lv: 5, Poison Weapon Lv: 5
Description: Deals P.DMG to enemies within a 5x5 AoE.
This skill has HCM based on CRIT.
[Lv. 1]: ATK 320%
[Lv. 2]: ATK 440%
[Lv. 3]: ATK 560%
[Lv. 4]: ATK 680%
[Lv. 5]: ATK 800%
[Lv. 6]: ATK 920% 
[Lv. 7]: ATK 1040%
[Lv. 8]: ATK 1160% 
[Lv. 9]: ATK 1280% 
[Lv.10]: ATK 1400%
Formula: 
ATK (%): 200 + (Skill Lv x 120)
HCM (%): 100 + (CRIT / 2) `,
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
    id: "envenom",
    minLevel: 5
  }],
  dependent: [],
  element: null,
  skillName: "Soul Destroyer",
  maxLevel: 10,
  inform: `Max Lv: 10
Skill Form: Active
Element: Elementless 
Type: Magical
Target: Enemy
Fixed Cast Time: 0.60s
After Cast Delay: 0.90s
Cooldown: 1s
Range: 10
Hits: 1
Requirement: Double Attack Lv: 5, Cloaking Lv: 3, Poison Weapon Lv: 5, Envenom Lv: 5
Description: Deals M.DMG to the target,
scaling with INT, WATK and Base Level. Becomes Poison property if Poison Weapon is active.
VCT scales with skill level.
[Lv. 1]: MATK 600%, VCT: 0.36s
[Lv. 2]: MATK 700%, VCT: 0.42s
[Lv. 3]: MATK 800%, VCT: 0.48s
[Lv. 4]: MATK 900%, VCT: 0.54s
[Lv. 5]: MATK 1000%, VCT: 0.60s 
[Lv. 6]: MATK 1200%, VCT: 0.66s 
[Lv. 7]: MATK 1300%, VCT: 0.72s 
[Lv. 8]: MATK 1400%, VCT: 0.78s 
[Lv. 9]: MATK 1500%, VCT: 0.84s 
[Lv.10]: MATK 1600%, VCT: 0.90s
Formula: MATK (%): ((500 + (Skill Lv x 100) + W.ATK + ((INT x 3) / 2)) x Base Lv) / 100 `,
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
Weapon: One-Handed Sword
Requirement: None
Description: Increases E.ATK while wielding a One-Handed Sword. Knights, Crusaders and Rogues gain extra E.ATK. At max level, also grants +6% ACC
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
Formula: E.ATK Bonus: Skill Lv x 1 `,
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
Weapon: Bow/Instrument/Whip
Requirement: Throw Stone Lv: 7
Description: Increases E.ATK and Range while wielding a Bow, Instrument or Whip. Hunters, Bards and Gypsies gain extra E.ATK. At max level, also grants +6% ACC.
[Lv. 1]: E.ATK +2. Range +2
[Lv. 2]: E.ATK +4. Range +2
[Lv. 3]: E.ATK +6. Range +3 
[Lv. 4]: E.ATK +8. Range +3 
[Lv. 5]: E.ATK +10. Range +4 
[Lv. 6]: E.ATK +12. Range +4 
[Lv. 7]: E.ATK +14. Range +5 
[Lv. 8]: E.ATK +16. Range +5 
[Lv. 9]: E.ATK +18. Range +6 
[Lv.10]: E.ATK +20. Range +6
Formula: E.ATK Bonus: Skill Lv x 1 `,
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
Weapon: Bow 
Type: Physical
Target: Enemy
Element: Ammunition
After Cast Delay: A.Delay - 0.22s
Cooldown: A.Delay
Range: Weapon's range
Hits: 2
Range: Bow + Vulture's Eye Range
Requirement: Vulture's Eye Lv: 5
Description: Deals ranged P.DMG to the target.
Catalyst: 1x Arrow
[Lv. 1]: ATK 110% x Hits. SP Cost: 6 
[Lv. 2]: ATK 120% x Hits. SP Cost: 6 
[Lv. 3]: ATK 130% x Hits. SP Cost: 7 
[Lv. 4]: ATK 140% x Hits. SP Cost: 7 
[Lv. 5]: ATK 150% x Hits. SP Cost: 8
[Lv. 6]: ATK 160% x Hits. SP Cost: 8 
[Lv. 7]: ATK 170% x Hits. SP Cost: 9 
[Lv. 8]: ATK 180% x Hits. SP Cost: 9 
[Lv. 9]: ATK 190% x Hits. SP Cost: 10 
[Lv.10]: ATK 200% x Hits. SP Cost: 10
Formula: ATK (%): (100 + (10 x Skill Lv)) x Hits `,
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
Requirement: Steal Lv: 1
Description: Grants a chance to auto-cast
Steal while performing basic attacks.
Chance scales with the learned level of Steal.
[Lv. 1]: Steal Chance: 7.00%
[Lv. 2]: Steal Chance: 8.50% 
[Lv. 3]: Steal Chance: 10.00% 
[Lv. 4]: Steal Chance: 11.50% 
[Lv. 5]: Steal Chance: 13.00% 
[Lv. 6]: Steal Chance: 14.50% 
[Lv. 7]: Steal Chance: 16.00% 
[Lv. 8]: Steal Chance: 17.50% 
[Lv. 9]: Steal Chance: 19.00% 
[Lv.10]: Steal Chance: 20.50%
Formula: Steal Chance (%): (55 + (Skill Lv x 15) + (Steal Lv x 10)) / 1000 `,
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
Type: Supportive 
Target: Ally/Enemy
After Cast Delay: A.Delay 0.10s 
Cooldown: A.Delay
Range: 9
Requirement: Steal Lv: 10, Snatcher Lv: 4
Description: Plagiarizes a skill from the target at its highest possible level, limited by the skill's learned level.
Passively decreases DAA.
[Lv. 1]: DAA -1%, SP Cost: 18 
[Lv. 2]: DAA -2%, SP Cost: 21
[Lv. 3]: DAA -3%, SP Cost: 24 
[Lv. 4]: DAA -4%, SP Cost: 27 
[Lv. 5]: DAA -5%, SP Cost: 30 
[Lv. 6]: DAA -6%, SP Cost: 33 
[Lv. 7]: DAA -7%, SP Cost: 36 
[Lv. 8]: DAA -8%, SP Cost: 39 
[Lv. 9]: DAA -9%, SP Cost: 42 
[Lv.10]: DAA -10%, SP Cost: 45`,
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
Type: Supportive 
Target: Ally
Variable Cast Time: 1s
Fixed Cast Time: 0.50s
After Cast Delay: 0.30s
SP Cost: 10
Requirement: Plagiarism Lv: 5
Description: Recruits allies into a gang, granting different benefits based on the skill's level.
Effectiveness scales with the number of party members; those with Gangster Paradise learned count twice.
The caster and target must be on the same map.
Passively, normal monsters will not attack Rogues sitting side by side. Nearby sitting allies are also affected.
[Lv. 1] Ironveil: Increases H.DEF and H.MDEF. 
[Lv. 2] Spellrush: Reduces VCT and ACD. 
[Lv. 3] Syndicate: Increases HP and SP. 
[Lv. 4] Truefang: Increases ACC and CRIT. 
[Lv. 5] Brutal: Increases B.ATK and B.MATK.
Formula: Bonus effect (%): 1 + (Skill Lv / 2) + (PartyMembers / 2) + Paradise PartyMembers`,
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
Description: Increases the effectiveness of bonuses granted by Gangster Paradise by 5%.`,
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
After Cast Delay: A.Delay 
Range: 1
Hits: 1
Requirement: Snatcher Lv: 4
Description: Deals P.DMG to the target. Has a chance to inflict Gashing Wound for 10s.
If the target has Gashing Wound, the damage scales with the number of the target's active NSE, and has a chance to inflict Bleeding for 120s.
[Lv. 1]: ATK 330%, SP Cost: 12 Gashing Wound/Bleeding Chance: 12% 
[Lv. 2]: ATK 360%, SP Cost: 13 Gashing Wound/Bleeding Chance: 14% 
[Lv. 3]: ATK 390%, SP Cost: 13 Gashing Wound/Bleeding Chance: 16% 
[Lv. 4]: ATK 420%, SP Cost: 14 Gashing Wound/Bleeding Chance: 18% 
[Lv. 5]: ATK 450%, SP Cost: 14 Gashing Wound/Bleeding Chance: 20% 
[Lv. 6]: ATK 480%, SP Cost: 15 Gashing Wound/Bleeding Chance: 22% 
[Lv. 7]: ATK 510%, SP Cost: 15 Gashing Wound/Bleeding Chance: 24% 
[Lv. 8]: ATK 540%, SP Cost: 16 Gashing Wound/Bleeding Chance: 26% 
[Lv. 9]: ATK 570%, SP Cost: 16 Gashing Wound/Bleeding Chance: 28% 
[Lv.10]: ATK 600%, SP Cost: 17 Gashing Wound/Bleeding Chance: 30%
Formula: ATK (%): 300 + (Skill Lv x 30) + (15 x Active Negative Effects)
Targets with Gashing Wound ATK (%): 350 + (Skill Lv x 30) + (15 x Negative Effects) `,
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
After Cast Delay: A.Delay - 0.10s
Cooldown: A.Delay + 0.36s
Range: 1 + Weapon's range 
Hits: 1
SP Cost: 16
Requirement: Gashing Blow Lv: 4
Description: Charges behind the target. Deals P.DMG, with damage scaling with STR if used while Hiding.
Has a chance to inflict Stun for 4.5s.
Adds an additional hit when wielding a Dagger. This skill has an extra HC bonus.
[Lv. 1]: ATK 330%, Chance: 7%, HC +1% 
[Lv. 2]: ATK 360%, Chance: 9%, HC +2% 
[Lv. 3]: ATK 390%, Chance: 11%, HC +3% 
[Lv. 4]: ATK 420%, Chance: 13%, HC +4%
[Lv. 5]: ATK 450%, Chance: 15%, HC +5% 
[Lv. 6]: ATK 480%, Chance: 17%, HC +6% 
[Lv. 7]: ATK 510%, Chance: 19%, HC +7% 
[Lv. 8]: ATK 540%, Chance: 21%, HC +8% 
[Lv. 9]: ATK 570%, Chance: 23%, HC +9% 
[Lv.10]: ATK 600%, Chance: 25%, HC +10%
Formula: ATK (%): (300 + (Skill Lv x 30)) x Hits
Hiding ATK (%): (300 + (Skill Lv x 30) + STR) x Hits `,
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
Description: Allows movement while Hiding, during which WD is increased.
[Lv. 1]: WD +114%
[Lv. 2]: WD +108%
[Lv. 3]: WD +102% 
[Lv. 4]: WD +96% 
[Lv. 5]: WD +90%`,
  img: icon_rog_8_namespaceObject
}, {
  id: "raid",
  level: 0,
  dependencies: [{
    id: "sprinkleSand",
    minLevel: 5
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
After Cast Delay: 0.14s
Cooldown: 1s
Hits: 1
SP Cost: 15
Requirement: Sprinkle Sand Lv: 5, Back Stab Lv: 2, Tunnel Drive Lv: 2
Description: Deals P.DMG to enemies within a 7x7 AoE. Has a chance to inflict Stun for 5s and Blind for 20s.
If cast from Hiding, this skill has no CD and increases damage taken by enemies for 10s. This amplified damage is reduced by half for boss monsters.
CD scales with the learned level of Hiding. 
[Lv 1]: ATK 200%, Damage +6% Stun/Blind Chance: 13%
[Lv 2]: ATK 350%, Damage +12% Stun/Blind Chance: 16%
[Lv 3]: ATK 500%, Damage +18% Stun/Blind Chance: 19%
[Lv 4]: ATK 650%, Damage +24% Stun/Blind Chance: 22%
[Lv 5]: ATK 800%, Damage +30% Stun/Blind Chance: 25%
Formula: ATK (%): 50 + (Skill Lv x 150) 
Cooldown (seconds): 1 - (Hiding Lv x 0,1) `,
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
After Cast Delay: A.Delay
Cooldown: A.Delay + 0.36s 
Range: 1
Hits: 1
Requirement: Raid Lv: 5
Description: Deals P.DMG to the target. Has a chance to teleport both caster and target to a random location on the same map. Chance scales with the Base Level difference between the caster and target.
Boss and Elite monsters cannot be teleported.
[Lv. 1]: ATK 130%, Chance: 55% 
[Lv. 2]: ATK 160%, Chance: 60%
[Lv. 3]: ATK 190%, Chance: 65% 
[Lv. 4]: ATK 220%, Chance: 70% 
[Lv. 5]: ATK 250%, Chance: 75%
Formula: ATK (%): 100 + (Skill Lv x 30)
Chance (%): 50 + (Skill Lv x 5) + (Base Lv - Target Base Lv) `,
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
Type: Supportive
Target: Enemy
After Cast Delay: A.Delay + 0.50s 
Cooldown: A.Delay
Range: 1
Requirement: Snatcher Lv: 5
Description: Attempts to Remove the target's helmet for 60s.
Success rate scales with the Base Level difference between the caster and target. Duration is reduced by the target's Base Level.
Against monsters, decreases M.ATK for 60s, with double success rate and duration. Against bosses, duration is reduced to a quarter.
[Lv. 1]: VCT: 0.56s. FCT: 0.14s. MATK -5% Chance: 9%, SP Cost: 12
[Lv. 2]: VCT: 0.72s. FCT: 0.18s. MATK -10% Chance: 13%, SP Cost: 14
[Lv. 3]: VCT: 0.88s. FCT: 0.22s. MATK -15% Chance: 17%, SP Cost: 16
[Lv. 4]: VCT: 1.14s. FCT: 0.26s. MATK -20% Chance: 21%, SP Cost: 18
[Lv. 5]: VCT: 1.20s. FCT: 0.30s. MATK -25% Chance: 25%, SP Cost: 20
Formula: Chance (%): (50 + (Skill Lv x 40) + ((Base Lv - Target Base Lv) x 10)) / 1000
Duration (seconds): 60 - ((60 x (Target Base Lv x 0.5)) / 100) `,
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
Type: Supportive 
Target: Enemy
After Cast Delay: A.Delay + 0.50s 
Cooldown: A.Delay
Range: 1
Requirement: Helm Stripping Lv: 2
Description: Attempts to forcibly Remove the target's shield for 60s.
Success rate scales with the Base Level difference between the caster and target. Duration is reduced by the target's Base Level.
Against monsters, decreases M.DEF for 60s, with double success rate and duration. Against bosses, duration is reduced to a quarter.
[Lv. 1]: VCT: 0.56s. FCT: 0.14s. M.DEF -5% Chance: 9%, SP Cost: 12
[Lv. 2]: VCT: 0.72s. FCT: 0.18s. M.DEF -10% Chance: 13%, SP Cost: 14
[Lv. 3]: VCT: 0.88s. FCT: 0.22s. M.DEF -15% Chance: 17%, SP Cost: 16
[Lv. 4]: VCT: 1.14s. FCT: 0.26s. M.DEF -20% Chance: 21%, SP Cost: 18
[Lv. 5]: VCT: 1.20s. FCT: 0.30s. M.DEF -25% Chance: 25%, SP Cost: 20
Formula: Chance (%): (50 + (Skill Lv x 40) + ((Base Lv - Target Base Lv) x 10)) / 1000 
Duration (seconds): 60 - ((60 x (Target Base Lv x 0.5)) / 100) `,
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
Type: Supportive
Target: Enemy
After Cast Delay: A.Delay + 0.50s 
Cooldown: A.Delay
Range: 1
Requirement: Shield Stripping Lv: 2
Description: Attempts to forcibly remove the equipped armor of a single target, temporarily preventing them from equipping it again for 60 Description: Attempts to forcibly Remove the target's armor for 60s.
Success rate scales with the Base Level difference between the caster and target. Duration is reduced by the target's Base Level.
Against monsters, decreases P.DEF for 60s, with double success rate and duration. Against bosses, duration is reduced to a quarter.
[Lv. 1]: VCT: 0.56s. FCT: 0.14s. P.DEF -5% Chance: 9%, SP Cost: 12
[Lv. 2]: VCT: 0.72s. FCT: 0.18s. P.DEF -10% Chance: 13%, SP Cost: 14
[Lv. 3]: VCT: 0.88s. FCT: 0.22s. P.DEF -15% Chance: 17%, SP Cost: 16
[Lv. 4]: VCT: 1.14s. FCT: 0.26s. P.DEF -20% Chance: 21%, SP Cost: 18
[Lv. 5]: VCT: 1.20s. FCT: 0.30s. P.DEF -25% Chance: 25%, SP Cost: 20
Formula: Chance (%): (50 + (Skill Lv x 40) + ((Base Lv - Target Base Lv) x 10)) / 1000 
Duration (seconds): 60 - ((60 x (Target Base Lv x 0.5)) / 100) `,
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
Type: Supportive 
Target: Enemy
After Cast Delay: A.Delay + 0.50s 
Cooldown: A.Delay
Range: 1
Requirement: Armor Stripping Lv: 2
Description: Attempts to forcibly Remove the target's weapon for 60s.
Success rate scales with the Base Level difference between the caster and target. Duration is reduced by the target's Base Level.
Against monsters, decreases W.ATK for 60s, with double success rate and duration. Against bosses, duration is reduced to a quarter.
[Lv. 1]: VCT: 0.56s. FCT: 0.14s. W.ATK -5% Chance: 9%, SP Cost: 12
[Lv. 2]: VCT: 0.72s. FCT: 0.18s. W.ATK -10% Chance: 13%, SP Cost: 14
[Lv. 3]: VCT: 0.88s. FCT: 0.22s. W.ATK -15% Chance: 17%, SP Cost: 16
[Lv. 4]: VCT: 1.14s. FCT: 0.26s. W.ATK -20% Chance: 21%, SP Cost: 18
[Lv. 5]: VCT: 1.20s. FCT: 0.30s. W.ATK -25% Chance: 25%, SP Cost: 20
Formula: Chance (%): (50 + (Skill Lv x 40) + ((Base Lv - Target Base Lv) x 10)) / 1000 
Duration (seconds): 60 - ((60 x (Target Base Lv x 0.5)) / 100) `,
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
Weapon: Dagger/Sword 
Type: Supportive
Target: Self
After Cast Delay: A.Delay
Requirement: One-Handed Sword Mastery Lv: 3
Description: Deflects incoming attacks from monsters and from players wielding Daggers or Swords, reducing damage by half and reflecting it back to them.
CD scales with skill level, and each deflected attack reduces CD.
[Lv. 1]: Chance: 90%, CD Reduce: 1s Duration: 5s. Cooldown 15s. SP Cost: 10 
[Lv. 2]: Chance: 80%, CD Reduce: 2s Duration: 6s. Cooldown 16s. SP Cost: 15 
[Lv. 3]: Chance: 70%, CD Reduce: 3s Duration: 8s. Cooldown 18s. SP Cost: 20 
[Lv. 4]: Chance: 60%, CD Reduce: 4s Duration: 11s. Cooldown 21s. SP Cost: 25 
[Lv. 5]: Chance: 50%, CD Reduce: 5s Duration: 15s. Cooldown 25s. SP Cost: 30`,
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
Type: Supportive
Target: Enemy
After Cast Delay: A.Delay + 0.50s
Cooldown: A.Delay 
Range: 1
SP Cost: 30
Requirement: Helm Stripping Lv: 2, Shield Stripping Lv: 2, Armor Stripping Lv: 2, Weapon Stripping Lv: 2
Description: Attempts to forcibly Remove a single target's weapon, shield, armor, and headgear for 15s.
Success rate scales with the learned level of Stripping Skills and the Base Level difference between the caster and target.
Duration scales with the target's Base Level. Does not work against monsters.
Formula: Chance (%): (100 + ((Helm Stripping Lv + Shield Stripping Lv + Armor Stripping Lv + Weapon Stripping Lv) x 10) + ((Base Lv - Target Lv) x 10)) / 10 `,
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
Skill Form: Toggle 
Type: Supportive 
Target: Self
After Cast Delay: 0.30s
Fixed Cast Time: 1s 
Cooldown: A.Delay
SP Cost: 80
Requirement: Plagiarism Lv: 10
Description: Allows the caster to choose a skill from their list of eligible skills, granting a chance to auto-cast the chosen skill on basic attacks.
The auto-cast consumes one-third of the chosen skill's SP Cost and cannot activate if there is not enough SP.
The Auto-cast Level scales with the skill level. Passively increases T.DMG.
[Lv. 1]: Auto-cast Level: 50% Auto-cast Chance: 30%, T.DMG +5
[Lv. 2]: Auto-cast Level: 60% Auto-cast Chance: 26%, T.DMG +10 
[Lv. 3]: Auto-cast Level: 60% Auto-cast Chance: 28%, T.DMG +15 
[Lv. 4]: Auto-cast Level: 70% Auto-cast Chance: 22%, T.DMG +20 
[Lv. 5]: Auto-cast Level: 70% Auto-cast Chance: 24%, T.DMG +25 
[Lv. 6]: Auto-cast Level: 80% Auto-cast Chance: 18%, T.DMG +30 
[Lv. 7]: Auto-cast Level: 80% Auto-cast Chance: 20%, T.DMG +35 
[Lv. 8]: Auto-cast Level: 90% Auto-cast Chance: 16%, T.DMG +40 
[Lv. 9]: Auto-cast Level: 90% Auto-cast Chance: 17%, T.DMG +45 
[Lv.10]: Auto-cast Level: 100% Auto-cast Chance: 15%, T.DMG +50

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
Skill Form: Toggle
Type: Supportive 
Target: Self
SP Cost: 10
Requirement: Hiding Lv: 5, Tunnel Drive Lv: 3
Description: Becomes Invisible.
Cannot be revealed by any detection skills, and activates Stealth status for 180s. While invisible, drains SP every 10s, increases WD and leaves shoe prints behind while walking.
Cannot attack in this mode and becomes visible if SP runs out.
[Lv 1]: WD: +40%, SP Drain: 12 
[Lv 2]: WD: +30%, SP Drain: 14
[Lv 3]: WD: +20%, SP Drain: 16 
[Lv 4]: WD: +10%, SP Drain: 18 
[Lv 5]: WD: +0%, SP Drain: 20`,
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
After Cast Delay: A.Delay 0.09s
Fixed Cast Time: 0.60s
Cooldown: 1s
Range: 1 + Weapon's range
Hits: 3
Requirement: Double Strafe Lv: 10
Description: Deals ranged P.DMG to the target, Knocking it back 3 cells.
Allows stacking Triple Strafe Charging for 60s whenever Double Strafe is used. Damage scales with the stacks and AGI. VCT scales with skill level.
Catalyst: 1x Arrow
[Lv. 1]: ATK 216% x Hits. VCT: 0.33s SP Cost: 22
[Lv. 2]: ATK 229% x Hits, VCT: 0.35s SP Cost: 24
[Lv. 3]: ATK 242% x Hits. VCT: 0.37s SP Cost: 26
[Lv. 4]: ATK 255% x Hits. VCT: 0.39s SP Cost: 28
[Lv. 5]: ATK 268% x Hits. VCT: 0.42s SP Cost: 30
[Lv. 6]: ATK 281% x Hits. VCT: 0.45s SP Cost: 32
[Lv. 7]: ATK 294% x Hits. VCT: 0.48s SP Cost: 34
[Lv. 8]: ATK 307% x Hits. VCT: 0.52s SP Cost: 36
[Lv. 9]: ATK 320% x Hits, VCT: 0.56s SP Cost: 38
[Lv.10]: ATK 333% x Hits. VCT: 0.60s SP Cost: 40
Formula: ATK (%): 203 + (Skill Lv x 13) + (Triple Strafe Charging Stacks x AGI)) x Hits `,
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
Weapon: Bow 
Type: Physical
Target: Enemy
Element: Ammunition
After Cast Delay: A.Delay - 0.22s
Cooldown: A.Delay
Range: Weapon's range
Hits: 2
Requirement: None
Description: Deals ranged P.DMG to the target.
Catalyst: 1x Arrow
[Lv. 1]: ATK 110% x Hits. SP Cost: 6 
[Lv. 2]: ATK 120% x Hits. SP Cost: 6 
[Lv. 3]: ATK 130% x Hits. SP Cost: 7 
[Lv. 4]: ATK 140% x Hits. SP Cost: 7 
[Lv. 5]: ATK 150% x Hits. SP Cost: 8
[Lv. 6]: ATK 160% x Hits. SP Cost: 8 
[Lv. 7]: ATK 170% x Hits. SP Cost: 9 
[Lv. 8]: ATK 180% x Hits. SP Cost: 9 
[Lv. 9]: ATK 190% x Hits. SP Cost: 10 
[Lv.10]: ATK 200% x Hits. SP Cost: 10
Formula: ATK (%): (100 + (10 x Skill Lv)) x Hits `,
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
Weapon: Bow/Instrument/Whip
Type: Physical
Target: Ground
Element: Ammunition
Variable Cast Time: 0.38s
After Cast Delay: A.Delay - 0.22s 
Cooldown: 6s
Range: 12
Hits: 4
Requirement: Double Strafe Lv: 5
Description: Deals ranged P.DMG to enemies within a 7x7 AoE at the targeted location, hitting in waves every 0.2s.
Damage scales with Base Level, and wave
interval scales with A.Delay.
Catalyst: 1x Arrow!
[Lv. 1]: ATK 55% x Waves Duration: 2.00s. SP Cost: 7
[Lv. 2]: ATK 60% x Waves Duration: 2.10s. SP Cost: 9 
[Lv. 3]: ATK 65% x Waves Duration: 2.30s. SP Cost: 11 
[Lv. 4]: ATK 70% x Waves Duration: 2.50s. SP Cost: 13 
[Lv. 5]: ATK 75% x Waves Duration: 2.70s. SP Cost: 15 
[Lv. 6]: ATK 80% x Waves Duration: 2.90s. SP Cost: 17 
[Lv. 7]: ATK 85% x Waves Duration: 3.10s. SP Cost: 19 
[Lv. 8]: ATK 90% x Waves Duration: 3.30s. SP Cost: 21 
[Lv. 9]: ATK 95% x Waves Duration: 3.50s. SP Cost: 23 
[Lv.10]: ATK 100% x Waves Duration: 3.70s. SP Cost: 25
Formula: ATK (%): (50 + (5 × Skill Lv)) x (1 + ((Base Lv^2) / 10000)) x Waves `,
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
Weapon: Bow/Instrument/Whip
Type: Physical
Target: Enemy
Element: Ammunition
After Cast Delay: A.Delay 0.22s 
Cooldown: A.Delay + 0.36s
Range: Weapon's range
Requirement: None
Description: Deals ranged P.DMG to the target, Knocking it back 6 cells and temporarily increasing its WD by 15%.
Catalyst: 1x Arrow
[Lv. 1]: ATK 140%, SP Cost: 6 WD Duration: 1.40s
[Lv. 2]: ATK 180%, SP Cost: 7 WD Duration: 1.80s
[Lv. 3]: ATK 220%, SP Cost: 8 WD Duration: 2.20s
[Lv. 4]: ATK 260%, SP Cost: 9 WD Duration: 2.60s
[Lv. 5]: ATK 300%, SP Cost: 10 WD Duration: 3.00s
[Lv. 6]: ATK 340%, SP Cost: 11 WD Duration: 3.40s
[Lv. 7]: ATK 380%, SP Cost: 12 WD Duration: 3.80s
[Lv. 8]: ATK 420%, SP Cost: 13 WD Duration: 4.20s
[Lv. 9]: ATK 460%, SP Cost: 14 WD Duration: 4.60s
[Lv.10]: ATK 500%, SP Cost: 15 WD Duration: 5.00s
Formula: ATK (%): 100 + (40 x Skill Lv) `,
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
Description: Increases DEX and ACC
[Lv. 1]: DEX +1. ACC +1%
[Lv. 2]: DEX +2. ACC +2%
[Lv. 3]: DEX +3, ACC +3% 
[Lv. 4]: DEX +4, ACC +4% 
[Lv. 5]: DEX +5. ACC +5% 
[Lv. 6]: DEX +6. ACC +6% 
[Lv. 7]: DEX +7, ACC +7% 
[Lv. 8]: DEX +8. ACC +8% 
[Lv. 9]: DEX +9, ACC +9% 
[Lv.10]: DEX +10. ACC +10%`,
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
Weapon: Bow/Instrument/Whip
Requirement: Owl's Eye Lv: 3
Description: Increases E.ATK and Range while wielding a Bow, Instrument or Whip. Hunters, Bards and Gypsies gain extra E.ATK. At max level, also grants +6% ACC.
[Lv. 1]: E.ATK +2. Range +2 
[Lv. 2]: E.ATK +4. Range +2
[Lv. 3]: E.ATK +6. Range +3 
[Lv. 4]: E.ATK +8. Range +3 
[Lv. 5]: E.ATK +10. Range +4 
[Lv. 6]: E.ATK +12. Range +4 
[Lv. 7]: E.ATK +14. Range +5 
[Lv. 8]: E.ATK +16. Range +5 
[Lv. 9]: E.ATK +18. Range +6 
[Lv.10]: E.ATK +20. Range +6`,
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
Type: Supportive 
Target: Self
After Cast Delay: 0.30s
Cooldown: A.Delay
Requirement: Vulture's Eye Lv: 1
Description: Boosts DEX and AGI for 240s.
Reveals Invisible enemies within a 3x3 AoE when used.
[Lv. 1]: DEX/AGI +3%
[Lv. 2]: DEX/AGI +4%
[Lv. 3]: DEX/AGI +5%
[Lv. 4]: DEX/AGI +6%
[Lv. 5]: DEX/AGI +7% 
[Lv. 6]: DEX/AGI +8% 
[Lv. 7]: DEX/AGI +9% 
[Lv. 8]: DEX/AGI +10% 
[Lv. 9]: DEX/AGI +11% 
[Lv.10]: DEX/AGI +12%`,
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
Type: Supportive 
Target: Self
Requirement: Owl's Eye Lv: 3
Description: Crafts arrows from items.
Base Level, Job Level, and Stats increase the number of crafted arrows.
Guide: Flechery Creation Guide
[Lv. 1]: Bonus Efficiency: 0%, SP Cost: 2 
[Lv. 2]: Bonus Efficiency: 25%, SP Cost: 4 
[Lv. 3]: Bonus Efficiency: 50%, SP Cost: 6 
[Lv. 4]: Bonus Efficiency: 75%, SP Cost: 8 
[Lv. 5]: Bonus Efficiency: 100%, SP Cost: 10
Crafted Arrows :
Base Amount + Bonus Amount
Bonus Amount:
((Base Amount x ((Level Bonus + Stats Bonus) x ((Skill Lv x 25) - 25))) / 100)

Level Bonus: 
((Base Lv x 100) / 200) + ((Job Lv x 100) / 140) / 100

Stats Bonus:
((STR^2 / 10) + (AGI^2 / 10) + (VIT^2 / 10) + (INT^2) + (DEX^2 / 10) + (LUK^2 / 10)) / 100

Random Bonus Amount:
10% chance for the bonus to be reduced to 25%
70% chance for the bonus to be reduced to 50%
 20% chance for no reductions `,
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
Type: Supportive 
Target: Self
SP Cost: 20
Requirement: Fletchery Lv: 3
Description: Stores arrows inside a Quiver. Each Quiver stores 500 arrows of the same type.
Catalyst: 1x Empty Quiver `,
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
Description: Grants the ability to command a Falcon.
Rental with: Falcon Breeder

*** Old note: ***
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
Description: Increases the damage of Blitz
Beat and Falcon Assault skills.
These skills also start ignoring part of the target's M.DEF.
[Lv. 1]: Damage +1%, MDEF -1% 
[Lv. 2]: Damage +2%, MDEF -2%
[Lv. 3]: Damage +3%, MDEF -3% 
[Lv. 4]: Damage +4%, MDEF -4% 
[Lv. 5]: Damage +5%, MDEF -5% 
[Lv. 6]: Damage +6%, MDEF -6% 
[Lv. 7]: Damage +7%, MDEF -7% 
[Lv. 8]: Damage +8%, MDEF -8% 
[Lv. 9]: Damage +9%, MDEF -9% 
[Lv.10]: Damage +10%, MDEF -10%`,
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
Description: Boosts the DMG of Falcon Skills.
Also increases Mastery ATK against Brute
and Insect monsters.
[Lv. 1]: Falcon skills DMG: +1% Mastery ATK +4
[Lv. 2]: Falcon skills DMG: +2% Mastery ATK +8
[Lv. 3]: Falcon skills DMG: +3% Mastery ATK +12
[Lv. 4]: Falcon skills DMG: +4% Mastery ATK +16
[Lv. 5]: Falcon skills DMG: +5% Mastery ATK +20
[Lv. 6]: Falcon skills DMG: +6% Mastery ATK +24
[Lv. 7]: Falcon skills DMG: +7% Mastery ATK +28
[Lv. 8]: Falcon skills DMG: +8% Mastery ATK +32
[Lv. 9]: Falcon skills DMG: +9% Mastery ATK +36
[Lv.10]: Falcon skills DMG: +10% Mastery ATK +40`,
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
Type: Magical 
Target: Enemy
Element: Neutral
Fixed Cast Time: 0.60s
After Cast Delay: A.Delay 0.14s 
Cooldown: A.Delay + 0.365
Range: 12
Hits: 6
Requirement: Falconry Mastery Lv: 1
Description: Deals M.DMG to enemies within a 3x3 AoE around the target, scaling with Base Level.
Has a chance to auto-cast on basic attacks, scaling with the weapon's stats and the learned level of Falconry Mastery.
When this skill is auto-cast, it only targets a single enemy.
The auto-cast chance doubles while wielding a Dagger or bare handed.
VCT scales with skill level.
[Lv. 1]: VCT: 0.75s. SP Cost: 9
[Lv. 2]: VCT: 0.80s. SP Cost: 11
[Lv. 3]: VCT: 0.85s. SP Cost: 13 
[Lv. 4]: VCT: 0.90s. SP Cost: 15 
[Lv. 5]: VCT: 0.95s. SP Cost: 17 
[Lv. 6]: VCT: 1.00s. SP Cost: 19 
[Lv. 7]: VCT: 1.05s. SP Cost: 21 
[Lv. 8]: VCT: 1.10s. SP Cost: 23 
[Lv. 9]: VCT: 1.15s. SP Cost: 25 
[Lv.10]: VCT: 1.20s. SP Cost: 27
Formula: MATK (%): 100 + (Skill Lv x 50) + (Base Lv x 3) 
 Auto-cast chance: (LUK / 3) + (2 x Falconry Mastery Lv)

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
Type: Supportive 
Target: Ground
After Cast Delay: A.Delay - 0.14s 
Cooldown: A.Delay
SP Cost: 8
Requirement: Falconry Mastery Lv: 5
Description: Reveals Invisible entities within a 7x7 AoE around the targeted location. Requires a Falcon.
[Lv. 1]: Range: 6 cells
[Lv. 2]: Range: 7 cells
[Lv. 3]: Range: 8 cells 
[Lv. 4]: Range: 9 cells`,
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
Type: Supportive
Target: Trap
After Cast Delay: A.Delay 0.44s 
Cooldown: A.Delay
SP Cost: 10
Requirement: Falconry Mastery Lv: 3
Description: Removes a targeted trap. Requires a Falcon.
[Lv. 1]: Range: 5 cells
[Lv. 2]: Range: 6 cells
[Lv. 3]: Range: 7 cells
[Lv. 4]: Range: 8 cells 
[Lv. 5]: Range: 9 cells`,
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
Type: Offensive 
Target: Ground
Element: Wind
Fixed Cast Time: 1s
After Cast Delay: A.Delay 0.34s
Cooldown: 0.50s
Range: 4 Hits: 1
SP Cost: 15
Requirement: Trap Research Lv: 1, Land Mine Lv: 1
Description: Sets a trap at the targeted location. When triggered, deals P.DMG to enemies within a 5x5 AoE, scaling with Max SP, Base Level and the learned level of Trap Research. Also reduces their Wind property damage resistance by 5% for 10s.
Lasts 90s on the ground and can be pushed back 3 cells by attacks.
Ignores FLEE, Auto Guard, Parry and Weapon Blocking.
While wielding a Dagger or bare handed, doubles the skill's Range and halves its FCT and CD.
Catalyst: 1x Trap
[Lv. 1]: ATK 100%, Trap HP: 5 
[Lv. 2]: ATK 200%, Trap HP: 10
[Lv. 3]: ATK 300%, Trap HP: 15 
[Lv. 4]: ATK 400%, Trap HP: 20 
[Lv. 5]: ATK 500%, Trap HP: 25
Formula: ATK%: (Skill Lv x 100) + (Base Lv x 6) + (Trap Research Lv x 10) + (Max SP / 4) `,
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
Type: Offensive
Target: Ground
Element: Fire
Fixed Cast Time: 1s
After Cast Delay: A.Delay 0.345
Cooldown: 0.50s
Range: 4
Hits: 1
SP Cost: 15
Requirement: Trap Research Lv: 1, Land Mine Lv: 3, Blast Mine Lv: 2, Glacial Trap Lv: 1
Description: Sets a trap at the targeted location. When triggered, deals P.DMG to enemies within a 5x5 AoE, scaling with Max SP, Base Level and the learned level of Trap Research. Also reduces their Fire property damage resistance by 5% for 10s.
Lasts 90s on the ground and can be pushed back 3 cells by attacks.
Ignores FLEE, Auto Guard, Parry and Weapon Blocking.
While wielding a Dagger or bare handed, doubles the skill's Range and halves its FCT and CD.
Catalyst: 1x Trap
[Lv. 1]: ATK 100%, Trap HP: 5 
[Lv. 2]: ATK 200%, Trap HP: 10 
[Lv. 3]: ATK 300%, Trap HP: 15 
[Lv. 4]: ATK 400%, Trap HP: 20 
[Lv. 5]: ATK 500%, Trap HP: 25
Formula: ATK%: (Skill Lv x 100) + (Base Lv x 6) + (Trap Research Lv x 10) + (Max SP / 4) `,
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
Type: Supportive 
Target: Ground
Fixed Cast Time: 1s
After Cast Delay: A.Delay - 0.44s
Cooldown: 0.50s
Range: 4
SP Cost: 12
Requirement: Trap Research Lv: 1
Description: Sets a trap at the targeted location that lasts 20s. When triggered, has a chance to inflict Immobilized for 10s.
While wielding a Dagger or bare handed, doubles the skill's Range and halves its FCT and CD.
Catalyst: 1x Trap
[Lv. 1]: Immobilization Chance: 10% Trap HP: 5
[Lv. 2]: Immobilization Chance: 20% Trap HP: 10
[Lv. 3]: Immobilization Chance: 30% Trap HP: 15
[Lv. 4]: Immobilization Chance: 40% Trap HP: 20
[Lv. 5]: Immobilization Chance: 50% Trap HP: 25`,
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
Type: Supportive 
Target: Ground
Fixed Cast Time: 1s
After Cast Delay: A.Delay - 0.44s
Cooldown: 0.50s
Range: 4
SP Cost: 12
Requirement: Trap Research Lv: 1, Skid Trap Lv: 2, Ankle Snare Lv: 1
Description: Sets a trap at the targeted location that lasts for 20s. When triggered, has a chance to inflict Blind on enemies within a 5x5 AoE for 10s.
While wielding a Dagger or bare handed, doubles the skill's Range and halves its FCT and CD.
Catalyst: 1x Trap
[Lv. 1]: Trap HP: 5. Blind Chance: 10%
[Lv. 2]: Trap HP: 10. Blind Chance: 20% 
[Lv. 3]: Trap HP: 15. Blind Chance: 30% 
[Lv. 4]: Trap HP: 20. Blind Chance: 40% 
[Lv. 5]: Trap HP: 25. Blind Chance: 50%`,
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
Type: Offensive
Target: Ground
Element: Water
Fixed Cast Time: 1s
After Cast Delay: A.Delay 0.34s
Cooldown: 0.50s
Range: 4
Hits: 1
SP Cost: 15
Requirement: Trap Research Lv: 1, Land Mine Lv: 2, Blast Mine Lv: 1
Description: Sets a trap at the targeted location. When triggered, deals P.DMG to enemies within a 5x5 AoE, scaling with Max SP, Base Level and the learned level of Trap Research. Also reduces their Water property damage resistance by 5% for 10s.
Lasts 90s on the ground and can be pushed back 3 cells by attacks.
Ignores FLEE, Auto Guard, Parry and Weapon Blocking.
While wielding a Dagger or bare handed, doubles the skill's Range and halves its FCT and CD.
Catalyst: 1x Trap
[Lv. 1]: ATK 100%, Trap HP: 5 
[Lv. 2]: ATK 200%, Trap HP: 10
[Lv. 3]: ATK 300%, Trap HP: 15 
[Lv. 4]: ATK 400%, Trap HP: 20 
[Lv. 5]: ATK 500%, Trap HP: 25
Formula: ATK%: (Skill Lv x 100) + (Base Lv x 6) + (Trap Research Lv x 10) + (Max SP / 4) `,
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
Type: Offensive 
Target: Ground
Element: Earth
Fixed Cast Time: 1s
After Cast Delay: A.Delay 0.34s
Cooldown: 0.50s
Range: 4
Hits: 1
SP Cost: 15
Requirement: Trap Research Lv: 1
Description: Sets a trap at the targeted location. When triggered, deals P.DMG to enemies within a 5x5 AoE, scaling with Max SP, Base Level and the learned level of Trap Research. Also reduces their Earth property damage resistance by 5% for 10s.
Lasts 90s on the ground and can be pushed back 3 cells by attacks.
Ignores FLEE, Auto Guard, Parry and Weapon Blocking.
While wielding a Dagger or bare handed, doubles the skill's Range and halves its FCT and CD.
Catalyst: 1x Trap
[Lv. 1]: ATK 100%, Trap HP: 5 
[Lv. 2]: ATK 200%, Trap HP: 10
[Lv. 3]: ATK 300%, Trap HP: 15 
[Lv. 4]: ATK 400%, Trap HP: 20 
[Lv. 5]: ATK 500%, Trap HP: 25
Formula: ATK%: (Skill Lv x 100) + (Base Lv x 6) + (Trap Research Lv x 10) + (Max SP / 4) `,
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
Type: Supportive 
Target: Trap
After Cast Delay: 0.60s
Range: 2
SP Cost: 5
Requirement: Trap Research Lv: 5
Description: Removes the targeted trap and returns it to the inventory.`,
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
Type: Supportive 
Target: Ground
Fixed Cast Time: 1s
After Cast Delay: A.Delay 0.445
Cooldown: 0.50s
Range: 4
SP Cost: 12
Requirement: Trap Research Lv: 1, Skid Trap Lv: 3, Ankle Snare Lv: 2, Flasher Lv: 1
Description: Sets a trap at the targeted location that lasts for 20s. When triggered, has a chance to inflict Sleep on enemies within a 5x5 AoE for 10s.
While wielding a Dagger or bare handed, doubles the skill's Range and halves its FCT and CD.
Catalyst: 1x Trap
[Lv. 1]: Trap HP: 5. Sleep Chance: 10%
[Lv. 2]: Trap HP: 10. Sleep Chance: 20% 
[Lv. 3]: Trap HP: 15. Sleep Chance: 30% 
[Lv. 4]: Trap HP: 20. Sleep Chance: 40% 
[Lv. 5]: Trap HP: 25. Sleep Chance: 50%`,
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
Type: Offensive
Target: Ground
Element: Elementless
Fixed Cast Time: 1s
After Cast Delay: A.Delay 0.34s
Cooldown: 0.50s
Range: 4
SP Cost: 45
Requirement: Land Mine Lv: 4, Skid Trap Lv: 4, Blast Mine Lv: 3, Ankle Snare Lv: 3, Glacial Trap Lv: 2, Flasher Lv: 2, Claymore Trap Lv: 1, Sandman Lv: 1
Description: Sets a trap at the targeted location that lasts for 20s. When triggered, deals P.DMG to enemies within a 5x5 AoE, scaling with Max SP, Base Level and the learned level of Trap Research. Also reduces their Neutral property damage resistance by 5% for 10s.
Has a chance to inflict Shockwave for 10s. While wielding a Dagger or bare handed, doubles the skill's Range and halves its FCT and CD.
Catalyst: 1x Trap
[Lv. 1]: ATK 100%, Trap HP: 5 
[Lv. 2]: ATK 200%, Trap HP: 10
[Lv. 3]: ATK 300%, Trap HP: 15 
[Lv. 4]: ATK 400%, Trap HP: 20 
[Lv. 5]: ATK 500%, Trap HP: 25
Formula: ATK%: (Skill Lv x 100) + (Base Lv x 6) + (Trap Research Lv x 10) + (Max SP / 4) 
Burned SP (%): 3 + Skill Lv
Shockwave Damage: (Burned SP x 2) + (Trap Research Lv x 50) `,
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
Type: Supportive 
Target: Ground
Fixed Cast Time: 1s
After Cast Delay: A.Delay 0.44s
Cooldown: 0.50s
Range: 4
SP Cost: 10
Requirement: Trap Research Lv: 1
Description: Sets a trap at the targeted location that lasts for 20s. When triggered, Knocks the enemy back 7 cells.
While wielding a Dagger or bare handed, doubles the skill's Range and halves its FCT and CD.
Catalyst: 1x Trap
[Lv. 1]: Trap HP: 5
[Lv. 2]: Trap HP: 10
[Lv. 3]: Trap HP: 15
[Lv. 4]: Trap HP: 20
[Lv. 5]: Trap HP: 25`,
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
Description: Increases the duration and the property resistance drop of Offensive traps. Also boosts and the NSE chance of Supportive traps.
Also increases INT.
[Lv. 1]: INT +1. NSE Chance +5% Duration +10s. Resistance Drop +1% 
[Lv. 2]: INT +2. NSE Chance +10% Duration +20s. Resistance Drop +2% 
[Lv. 3]: INT +3. NSE Chance +15% Duration +30s. Resistance Drop +3% 
[Lv. 4]: INT +4. NSE Chance +20% Duration +40s. Resistance Drop +4% 
[Lv. 5]: INT +5. NSE Chance +25% Duration +50s. Resistance Drop +5% 
[Lv. 6]: INT +6. NSE Chance +30% Duration +60s. Resistance Drop +6%
[Lv. 7]: INT +7. NSE Chance +35% Duration +70s. Resistance Drop +7% 
[Lv. 8]: INT +8. NSE Chance +40% Duration +80s. Resistance Drop +8% 
[Lv. 9]: INT +9, NSE Chance +45% Duration +90s. Resistance Drop +9% 
[Lv.10]: INT +10. NSE Chance +50% Duration +100s. Resistance Drop +10%`,
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
Type: Supportive 
Target: Ground
After Cast Delay: A.Delay 0.34s 
Cooldown: A.Delay
Range: 9
SP Cost: 15
Requirement: Land Mine Lv: 4, Skid Trap Lv: 4, Blast Mine Lv: 3, Ankle Snare Lv: 3, Glacial Trap Lv: 2, Flasher Lv: 2, Claymore Trap Lv: 1, Sandman Lv: 1
Description: Activates all owned traps within a 7x7 AoE. Triggered traps expand their AoE to 7x7.`,
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
Type: Supportive
Target: Enemy
Variable Cast Time: 1.20s
After Cast Delay: A.Delay - 0.14s
Cooldown: 10s
Range: 12
Hits: 1
Requirement: Steel Crow Lv: 6, Blitz Beat Lv: 7
Description: Marks a Monster or Job Class for the next 300s.
The Falcon will automatically and randomly attack any nearby marked enemy, dealing M.DMG that scales with Base Level and the learned levels of Blitz Beat and Steel Crow. Has a chance to inflict Bleeding for 20s. Attack interval scales with LUK, skill level, VCT reductions and the learned level of Falconry Mastery.
Effect is canceled if used on the same target.
Requires a Falcon.
[Lv. 1]: Bleeding Chance: 2%, SP Cost: 7 
[Lv. 2]: Bleeding Chance: 4%, SP Cost: 14 
[Lv. 3]: Bleeding Chance: 6%, SP Cost: 21 
[Lv. 4]: Bleeding Chance: 8%, SP Cost: 28 
[Lv. 5]: Bleeding Chance: 10%, SP Cost: 35 
[Lv. 6]: Bleeding Chance: 12%, SP Cost: 42 
[Lv. 7]: Bleeding Chance: 14%, SP Cost: 49 
[Lv. 8]: Bleeding Chance: 16%, SP Cost: 56 
[Lv. 9]: Bleeding Chance: 18%, SP Cost: 63 
[Lv.10]: Bleeding Chance: 20%, SP Cost: 70
Formula: MATK (%): (50 x Blitz Beat Lv) + (Base Lv x 3)
Interval (s): 4500 - (Skill Lv x 150) + (750 - Reductions) + (750 - (750 x Bonus) / 100) / 1000
Bonus: (LUK / 3) + (2 x Falconry Mastery Lv)
The bonus doubles while wielding a Dagger or bare handed `,
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
Skill Form: Toggle 
Type: Supportive 
Target: Self
Variable Cast Time: 2s
Fixed Cast Time: 0.50s
After Cast Delay: 0.30s
Cooldown: A.Delay + 35
Requirement: Owl's Eye Lv: 10, Vulture's Eye Lv: 10, Improve Concentration Lv: 10
Description: Increases ASPD and CRIT, but reduces FLEE.
Grants a chance to hit twice when performing basic attacks.
Cancels the effect of True Sight.
[Lv. 1]: ASPD +2%, CRIT +2. SP Cost: 13 Double Chance: 7%, FLEE -47%
[Lv. 2]: ASPD +4%, CRIT +4. SP Cost: 16 Double Chance: 9%, FLEE -44%
[Lv. 3]: ASPD +6%, CRIT +6. SP Cost: 19 Double Chance: 11%, FLEE -41%
[Lv. 4]: ASPD +8%, CRIT +8. SP Cost: 22 Double Chance: 13%, FLEE -38%
[Lv. 5]: ASPD +10%, CRIT +10. SP Cost: 25 Double Chance: 15%, FLEE -35%
[Lv. 6]: ASPD +12%, CRIT +12. SP Cost: 28 Double Chance: 17%, FLEE -32%
[Lv. 7]: ASPD +14%, CRIT +14. SP Cost: 31 Double Chance: 19%, FLEE -29%
[Lv. 8]: ASPD +16%, CRIT +16. SP Cost: 34 Double Chance: 21%, FLEE -26%
[Lv. 9]: ASPD +18%, CRIT +18. SP Cost: 37 Double Chance: 23%, FLEE -23%
[Lv.10]: ASPD +20%, CRIT +20. SP Cost: 40 Double Chance: 25%, FLEE -20%`,
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
Weapon: Bow 
Type: Physical
Target: Enemy
Element: Ammunition
Fixed Cast Time: 0.60s
After Cast Delay: A.Delay 0.14s
Cooldown: 2s
Max Instances: 20
Range: 1 + Weapon's range
Hits: 1
Requirement: Improve Concentration Lv: 10, Double Strafe Lv: 7, Charge Arrow Lv: 10
Description: Deals ranged P.DMG to enemies in the direction of the target, scaling with Base Level.
Damage is reduced by 5% for each enemy hit.
VCT scales with skill level.
Catalyst: 1x Arrow
[Lv. 1]: ATK 210%, VCT: 0.50s. SP Cost: 14 
[Lv. 2]: ATK 320%, VCT: 0.60s. SP Cost: 16 
[Lv. 3]: ATK 430%, VCT: 0.70s. SP Cost: 18 
[Lv. 4]: ATK 540%, VCT: 0.80s, SP Cost: 20 
[Lv. 5]: ATK 650%, VCT: 0.90s. SP Cost: 22 
[Lv. 6]: ATK 760%, VCT: 1.00s. SP Cost: 24 
[Lv. 7]: ATK 870%, VCT: 1.10s. SP Cost: 26 
[Lv. 8]: ATK 980%, VCT: 1.20s. SP Cost: 28 
[Lv. 9]: ATK 1090%, VCT: 1.30s. SP Cost: 30 
[Lv.10]: ATK 1200%, VCT: 1.40s, SP Cost: 32
Formula: ATK (%): ((100 + (110 x Skill Lv)) x Base Lv) / 80 `,
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
Type: Supportive 
Target: Self
Variable Cast Time: 2s
Fixed Cast Time: 0.50s
After Cast Delay: 0.30s
Cooldown: A.Delay + 35
Requirement: Owl's Eye Lv: 10, Vulture's Eye Lv: 10, Improve Concentration Lv: 10
Description: Increases ACC, CRIT and P.DMG, but reduces ASPD. Does not increase Trap and Falcon skill P.DMG.
Cancels the effect of Quick Draw.
[Lv. 1]: ACC +2%, CRIT +2. P.DMG +7% ASPD -47%, SP Cost: 13
[Lv. 2]: ACC +4%, CRIT +4. P.DMG +9% ASPD -44%, SP Cost: 16
[Lv. 3]: ACC +6%, CRIT +6. P.DMG +11% ASPD -41%, SP Cost: 19
[Lv. 4]: ACC +8%, CRIT +8. P.DMG +13% ASPD -38%, SP Cost: 22
[Lv. 5]: ACC +10%, CRIT +10. P.DMG +15% ASPD -35%, SP Cost: 25
[Lv. 6]: ACC +12%, CRIT +12. P.DMG +17% ASPD -32%, SP Cost: 28
[Lv. 7]: ACC +14%, CRIT +14. P.DMG +19% ASPD -29%, SP Cost: 31
[Lv. 8]: ACC +16%, CRIT +16. P.DMG +21% ASPD -26%, SP Cost: 34
[Lv. 9]: ACC +18%, CRIT +18. P.DMG +23% ASPD -23%, SP Cost: 37
[Lv.10]: ACC +20%, CRIT +20. P.DMG +25% ASPD -20%, SP Cost: 40`,
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
Type: Supportive
Target: Self
After Cast Delay: 0.30s 
Cooldown: A.Delay
Requirement: Improve Concentration Lv: 9
Description: Reduces WD and increases FLEE of nearby allies for 210s.
VCT and FCT scales with skill level.
[Lv. 1]: VCT: 1.50s. FCT: 0.30s. SP Cost: 26 WD -12%, FLEE +1%
[Lv. 2]: VCT: 1.80s. FCT: 0.40s. SP Cost: 32 WD -14%, FLEE +2%
[Lv. 3]: VCT: 2.10s. FCT: 0.50s. SP Cost: 38 WD -16%, FLEE +3%
[Lv. 4]: VCT: 2.40s. FCT: 0.60s. SP Cost: 44 WD -18%, FLEE +4%
[Lv. 5]: VCT: 2.70s. FCT: 0.70s. SP Cost: 50 WD -20%, FLEE +5%
[Lv. 6]: VCT: 3.00s. FCT: 0.80s. SP Cost: 56 WD -22%, FLEE +6%
[Lv. 7]: VCT: 3.30s. FCT: 0.90s. SP Cost: 62 WD -24%, FLEE +7%
[Lv. 8]: VCT: 3.60s. FCT: 1.00s. SP Cost: 68 WD -26%, FLEE +8%
[Lv. 9]: VCT: 3.90s. FCT: 1.10s. SP Cost: 74 WD -28%, FLEE +9%
[Lv.10]: VCT: 4.20s. FCT: 1.20s. SP Cost: 80 WD -30%, FLEE +10%`,
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
Weapon: Instrument
Requirement: None
Description: Increases E.ATK, E.MATK and decreases DAA while wielding an Instrument. At max level, also grants +6% Max SP. 
[Lv. 1]: E.ATK +2. E.MATK +2. DAA -1% 
[Lv. 2]: E.ATK +4. E.MATK +4. DAA -2% 
[Lv. 3]: E.ATK +6. E.MATK +6. DAA -3% 
[Lv. 4]: E.ATK +8. E.MATK +8. DAA -4% 
[Lv. 5]: E.ATK +10. E.MATK +10. DAA -5% 
[Lv. 6]: E.ATK +12. E.MATK +12. DAA -6% 
[Lv. 7]: E.ATK +14. E.MATK +14. DAA -7% 
[Lv. 8]: E.ATK +16. E.MATK +16. DAA -8% 
[Lv. 9]: E.ATK +18. E.MATK +18. DAA -9% 
[Lv.10]: E.ATK +20. E.MATK +20. DAA -10%`,
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
Weapon: Instrument 
Type: Physical
Target: Enemy
Element: Ammunition
Fixed Cast Time: 0.30s
After Cast Delay: A.Delay - 0.26s
Cooldown: A.Delay
Range: 12
Hits: 2
Requirement: Musical Lesson Lv: 3
Description: Deals ranged P.DMG to the target, scaling with CRIT.
VCT scales with skill level.
Catalyst: 1x Arrow
[Lv. 1]: ATK 180% x Hits. VCT: 0.30s SP Cost: 8
[Lv. 2]: ATK 210% x Hits. VCT: 0.40s SP Cost: 11
[Lv. 3]: ATK 240% x Hits, VCT: 0.50s SP Cost: 14
[Lv. 4]: ATK 270% x Hits, VCT: 0.60s SP Cost: 17
[Lv. 5]: ATK 300% x Hits, VCT: 0.70s SP Cost: 20
Formula: ATK (%): (50 + CRIT + (Skill Lv x 30)) x Hits `,
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
Weapon: Instrument 
Type: Magical
Target: Self
Element: Neutral
Variable Cast Time: 0.70s 
Fixed Cast Time: 0.30s
After Cast Delay: 0.30s 
Cooldown: 10s
Requirement: Musical Lesson Lv: 2
Description: Deals M.DMG to enemies within a 9x9 AoE, scaling with ATK and Musical Lesson level. Damage interval is based on A.Delay, and can trigger auto-cast.
While active, increases WD by 25% and SP Recovery Interval by 30%, reduces SP Recovery by 70%, and drains SP every second.
Switching to a non-instrument weapon cancel the skill.
[Lv. 1]: ATK/MATK 30%, SP Cost: 28 
[Lv. 2]: ATK/MATK 60%, SP Cost: 31 
[Lv. 3]: ATK/MATK 90%, SP Cost: 34 
[Lv. 4]: ATK/MATK 120%, SP Cost: 37 
[Lv. 5]: ATK/MATK 150%, SP Cost: 40
Damage: (((Skill Lv x 30) + (ATK + MATK x (Skill Lv x 0,3))) x (100+ (Musical Lesson Lv x 3))) / 100
SP Consumption: (5 + Max SP / 500)
Interval (seconds): A.Delay x 3 `,
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
Weapon: Instrument 
Type: Song
Target: Self
Variable Cast Time: 1s
After Cast Delay: 0.30s
Cooldown: 20s
Requirement: Dissonance Lv: 3
Description: Instantly recovers 5% Max HP of nearby allies.
Also increases their Max HP and restores 2% over time for 180s.
Only 3 songs can be active at a time.
[Lv. 1]: MaxHP +2%, Interval: 23s SP Cost: 33
[Lv. 2]: MaxHP +4%, Interval: 21s SP Cost: 36
[Lv. 3]: MaxHP +6%, Interval: 19s SP Cost: 39
[Lv. 4]: MaxHP +8%, Interval: 17s SP Cost: 42
[Lv. 5]: MaxHP +10%, Interval: 15s SP Cost: 45
[Lv. 6]: MaxHP +12%, Interval: 13s SP Cost: 48
[Lv. 7]: MaxHP +14%, Interval: 11s SP Cost: 51
[Lv. 8]: MaxHP +16%, Interval: 9s SP Cost: 54
[Lv. 9]: MaxHP +18%, Interval: 75 SP Cost: 57
[Lv.10]: MaxHP +20%, Interval: 5s SP Cost: 60`,
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
Weapon: Instrument/Whip 
Type: Duet
Target: Self
Variable Cast Time: 1.50s
Fixed Cast Time: 0.50s 
After Cast Delay: 0.30s
Cooldown: 20s
Requirement: Apple of Idun Lv: 10
Description: Increases B.ATK and B.MATK of nearby allies for 60s.
Requires an Artist ally in an adjacent cell to activate, and only 1 duet can be active at a time.
[Lv. 1]: B.ATK +20. B.MATK +20, SP Cost: 38 
[Lv. 2]: B.ATK +25. B.MATK +25, SP Cost: 46 
[Lv. 3]: B.ATK +30. B.MATK +30, SP Cost: 54 
[Lv. 4]; B.ATK +35. B.MATK +35, SP Cost: 62 
[Lv. 5]: B.ATK +40. B.MATK +40. SP Cost: 70`,
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
Weapon: Instrument/Whip
Type: Ground Duet
Target: Self
Variable Cast Time: 1.50s
Fixed Cast Time: 0.50s
After Cast Delay: 0.30s 
Cooldown: 30s
SP Cost: 40
Requirement: Drum of Battlefield Lv: 3
Description: Creates a 9x9 AoE that lasts for 180s, inflicting Loki's Wail to enemies inside.
Also inflicts Chaos on enemies on activation. Requires an Artist ally in an adjacent cell to activate, and the duet ends if either the user or the artist who activated it leaves the AoE.`,
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
Weapon: Instrument/Whip
Type: Supportive
Target: Self
After Cast Delay: 0.30s
Cooldown: 20s
SP Cost: 70
Requirement: Musical Lesson Lv: 5
Description: Increases duration and reduces CD of all Songs and Dances by 50%.
Also boosts the effectiveness of Bard and Dancer Skills.
[Lv 1]: Duration: 40s
[Lv 2]: Duration: 60s
[Lv 3]: Duration: 80s
[Lv 4]: Duration: 100s 
[Lv 5]: Duration: 120s`,
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
Type: Supportive 
Target: Self
After Cast Delay: A.Delay - 0.26s 
Cooldown: A.Delay + 25
Requirement: Encore Lv: 3
Description: Has a chance to inflict Freezing on nearby enemies.
When freezing ends, inflicts Freeze for 275. 
[Lv. 1]: Freezing Chance: 20%, SP Cost: 12 
[Lv. 2]: Freezing Chance: 25%, SP Cost: 14 
[Lv. 3]: Freezing Chance: 30%, SP Cost: 16 
[Lv. 4]: Freezing Chance: 35%, SP Cost: 18 
[Lv. 5]: Freezing Chance: 40%, SP Cost: 20`,
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
Weapon: Instrument 
Type: Song 
Target: Self
Variable Cast Time: 1s
After Cast Delay: 0.30s 
Cooldown: 20s
Requirement: Dissonance Lv: 3
Description: Increases FLEE and P.FLEE of nearby allies for 180s.
Only 3 songs can be active at a time. 
[Lv. 1]: FLEE +22. P.FLEE +1. SP Cost: 33 
[Lv. 2]: FLEE +24. P.FLEE +2. SP Cost: 36 
[Lv. 3]: FLEE +26. P.FLEE +3. SP Cost: 39 
[Lv. 4]: FLEE +28. P.FLEE +4. SP Cost: 42 
[Lv. 5]: FLEE +30. P.FLEE +5. SP Cost: 45 
[Lv. 6]: FLEE +32. P.FLEE +6. SP Cost: 48 
[Lv. 7]: FLEE +34. P.FLEE +7. SP Cost: 51 
[Lv. 8]: FLEE +36. P.FLEE +8. SP Cost: 54
[Lv. 9]: FLEE +38. P.FLEE +9. SP Cost: 57 
[Lv.10]: FLEE +40. P.FLEE +10. SP Cost: 60`,
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
Weapon: Instrument/Whip 
Type: Duet
Target: Self
Variable Cast Time: 1.50s
Fixed Cast Time: 0.50s
After Cast Delay: 0.30s 
Cooldown: 20s
Requirement: Whistle Lv: 10
Description: Grants nearby allies a chance to not consume skill Catalyst for 60s.
Requires an Artist ally in an adjacent cell to activate, and only 1 duet can be active at a time.
[Lv. 1]: Chance: 4%, SP Cost: 38 
[Lv. 2]: Chance: 8%, SP Cost: 46 
[Lv. 3]: Chance: 12%, SP Cost: 54 
[Lv. 4]: Chance: 16%, SP Cost: 62 
[Lv. 5]: Chance: 20%, SP Cost: 70`,
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
Weapon: Instrument/Whip 
Type: Ground Duet 
Target: Self
Variable Cast Time: 1.50s
Fixed Cast Time: 0.50s
After Cast Delay: 0.30s 
Cooldown: 30s
SP Cost: 40
Requirement: Into the Abyss Lv: 3
Description: Creates a 9x9 AoE that lasts for 180s, inflicting Sleep on enemies inside for 4s every 10s.
Requires an Artist ally in an adjacent cell to activate, and the duet ends if either the user or the artist who activated it leaves the AoE.`,
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
Weapon: Instrument 
Type: Song
Target: Self
Variable Cast Time: 1s
After Cast Delay: 0.30s
Cooldown: 20s
Requirement: Dissonance Lv: 3
Description: Reduces VCT, FCT and ACD of nearby allies for 180s.
Only 3 songs can be active at a time.
[Lv. 1]: VCT/FCT/ACD -7%, SP Cost: 33 
[Lv. 2]: VCT/FCT/ACD -9%, SP Cost: 36 
[Lv. 3]: VCT/FCT/ACD -11%, SP Cost: 39 
[Lv. 4]: VCT/FCT/ACD -13%, SP Cost: 42 
[Lv. 5]: VCT/FCT/ACD -15%, SP Cost: 45 
[Lv. 6]: VCT/FCT/ACD -17%, SP Cost: 48 
[Lv. 7]: VCT/FCT/ACD -19%, SP Cost: 51 
[Lv. 8]: VCT/FCT/ACD -21%, SP Cost: 54
[Lv. 9]: VCT/FCT/ACD -23%, SP Cost: 57 
[Lv.10]: VCT/FCT/ACD -25%, SP Cost: 60`,
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
Weapon: Instrument/Whip 
Type: Duet
Target: Self
Variable Cast Time: 1.50s
Fixed Cast Time: 0.50s
After Cast Delay: 0.30s
Cooldown: 20s
Requirement: Poem of Bragi Lv: 10
Description: Grants nearby allies both NSE and ELE resistance for 60s.
Requires an Artist ally in an adjacent cell to activate, and only 1 duet can be active at a time.
[Lv. 1]; NSE +3%, ELE +5%, SP Cost: 38 
[Lv. 2]: NSE. +6%, ELE +10%, SP Cost: 46 
[Lv. 3]; NSE. +9%, ELE +15%, SP Cost: 54 
[Lv. 4]: NSE. +12%, ELE +20%, SP Cost: 62 
[Lv. 5]; NSE. +15%, ELE +25%, SP Cost: 70`,
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
Weapon: Instrument/Whip 
Type: Ground Duet 
Target: Self
Variable Cast Time: 1.50s
Fixed Cast Time: 0.50s
After Cast Delay: 0.30s 
Cooldown: 30s
SP Cost: 40
Requirement: Invulnerable Siegfried Lv: 3
Description: Creates a 9x9 AoE that lasts for 180s, granting Mr. Kim A Rich Man to allies inside.
Requires an Artist ally in an adjacent cell to activate, and the duet ends if either the user or the artist who activated it leaves the AoE.`,
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
Weapon: Instrument 
Type: Song
Target: Self
Variable Cast Time: 1s
After Cast Delay: 0.30s 
Cooldown: 20s
Requirement: None
Description: Reduces DAA and increases T.DMG of nearby allies for 180s.
Also increases DAA of nearby enemies for 5s, and while active, this effect is reapplied whenever an enemy deals P.DMG to the user. Only 3 songs can be active at a time.
[Lv. 1]: DAA -7%, T.DMG +10. SP Cost: 33 Enemies DAA +7%
[Lv. 2]: DAA -9%, T.DMG +20. SP Cost: 36 Enemies DAA +9%
[Lv. 3]: DAA -11%, T.DMG +30. SP Cost: 39 Enemies DAA +11%
[Lv. 4]: DAA -13%, T.DMG +40. SP Cost: 42 Enemies DAA +13%
[Lv. 5]: DAA -15%, T.DMG +50. SP Cost: 45 Enemies DAA +15%
[Lv. 6]: DAA -17%, T.DMG +60. SP Cost: 48 Enemies DAA +17%
[Lv. 7]: DAA -19%, T.DMG +70. SP Cost: 51 Enemies DAA +19%
[Lv. 8]: DAA -21%, T.DMG +80. SP Cost: 54 Enemies DAA +21%
[Lv. 9]: DAA -23%, T.DMG +90. SP Cost: 57 Enemies DAA +23%
[Lv.10]: DAA -25%, T.DMG +100. SP Cost: 60 Enemies DAA +25%`,
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
Weapon: Instrument/Whip 
Type: Duet
Target: Self
Variable Cast Time: 1.50s
Fixed Cast Time: 0.50s
After Cast Delay: 0.30s
Cooldown: 20s
Requirement: Assassin Cross of Sunset Lv: 10
Description: Grants nearby allies a random Effect for 60s.
Requires an Artist ally in an adjacent cell to activate, and only 1 duet can be active at a time.
[Lv. 1]: SP Cost: 38
[Lv. 2]: SP Cost: 46
[Lv. 3]: SP Cost: 54
[Lv. 4]: SP Cost: 62 
[Lv. 5]: SP Cost: 70`,
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
Weapon: Instrument/Whip 
Type: Ground Duet 
Target: Self
Variable Cast Time: 1.50s
Fixed Cast Time: 0.50s
After Cast Delay: 0.30s 
Cooldown: 30s
SP Cost: 40
Requirement: The Ring of Nibelungen Lv: 3
Description: Creates a 9x9 AoE that lasts for 180s, inflicting Eternal Chaos to enemies inside.
Requires an Artist ally in an adjacent cell to activate, and the duet ends if either the user or the artist who activated it leaves the AoE.`,
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
Weapon: Instrument/Whip 
Type: Physical
Target: Enemy
Element: Ammunition
After Cast Delay: A.Delay - 0.26s
Fixed Cast Time: 0.60s
Cooldown: 1.50s
Range: 12
Hits: 9
Requirement: Arrow Shower Lv: 5, Musical Strike Lv: 1, Double Strafe Lv: 5
Description: Deals ranged P.DMG to the target.
Grants +3 hits if used after Musical Strike or Slinging Strike.
VCT scales with skill level.
Catalyst: 1x Arrow
[Lv. 1]: ATK 108% x Hits, VCT: 0.50s SP Cost: 17
[Lv. 2]: ATK 116% x Hits. VCT: 0.60s SP Cost: 19
[Lv. 3]: ATK 124% x Hits, VCT: 0.70s SP Cost: 21
[Lv. 4]: ATK 132% x Hits, VCT: 0.80s SP Cost: 23
[Lv. 5]: ATK 140% x Hits, VCT: 0.90s SP Cost: 25
[Lv. 6]: ATK 148% x Hits. VCT: 1.00s SP Cost: 27
[Lv. 7]: ATK 156% x Hits. VCT: 1.10s SP Cost: 29
[Lv. 8]: ATK 164% x Hits. VCT: 1.20s SP Cost: 31
[Lv. 9]: ATK 172% x Hits. VCT: 1.30s SP Cost: 33
[Lv.10]: ATK 180% x Hits. VCT: 1.40s SP Cost: 35
Formula: ATK (%): (100 + (Skill Lv x 8)) x Hits `,
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
Weapon: Instrument/Whip 
ype: Supportive
Target: Self
Variable Cast Time: 1s
After Cast Delay: 0.30s
Cooldown: 20s
Requirement: Improve Concentration Lv: 5, Musical Lesson Lv: 7
Description: Increases B.ATK or B.MATK of nearby allies for 180s, depending on Class. Scales with Job Level, Musical Lesson, Dancing Lesson, and number of party members. 
[Lv 1]: B.ATK or B.MATK +6. SP Cost: 30 
[Lv 2]: B.ATK or B.MATK +12. SP Cost: 40 
[Lv 3]: B.ATK or B.MATK +18. SP Cost: 50 
[Lv 4]: B.ATK or B.MATK +24. SP Cost: 60 
[Lv 5]: B.ATK or B.MATK +30. SP Cost: 70
Formula: BATK: + (Skill Lv x 6) + (Job Lv / 7) + Musical Lesson Lv + Number of Bards in the party 
B.MATK: + (Skill Lv x 6) + (Job Lv / 7) + Dancing Lesson Ly + Number of Dancers in the party `,
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
Weapon: Instrument/Whip
Type: Magical
Target: Enemy
Element: Ammunition.
After Cast Delay: 1s 
Fixed Cast Time: 0.60s 
Cooldown: 1.50s
Range: 9
Requirement: Dissonance Lv: 5
Description: Deals M.DMG to enemies within a 5x5 AoE around the target.
VCT scales with skill level.
Catalyst: 1x Arrow
[Lv. 1]: MATK 700%, VCT: 1.10s SP Cost: 30
[Lv. 2]: MATK 900%, VCT: 1.30s SP Cost: 35
[Lv. 3]: MATK 1100%, VCT: 1.50s SP Cost: 40
[Lv. 4]: MATK 1300%, VCT: 1.70s SP Cost: 45
[Lv. 5]: MATK 1500%, VCT: 1.90s SP Cost: 50`,
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
Type: Supportive 
Target: Self
SP Cost: 70
Requirement: Improve Concentration Lv: 10, Dissonance Lv: 3
Description: When activated for the first time, Tarot Cards are displayed in order above the user's head for 30s.
Upon second activation, the displayed card is used on allies and enemies within an 11x11 AoE.
After a card is used, it is removed from the list and replaced by a random card on the next skill use.
CD scales with skill level.
The Lovers: Heals allies 20% Max HP. Inflicts Seduction on enemies for 5s. 
The Fool: Heals allies 20% Max SP. Burns enemies' SP by 20%, 
The Chariot: Removes movement NSE and reduces WD by 20% for allies for 60s. Also grants 2s immunity to movement NSE. Increases WD by 20% for enemies for 30s. 
The Hanged Man: Removes control NSE from allies and grants 10s immunity. Inflicts Hallucination and Chaos on allies and enemies for 10s.
The High Priestess: Grants allies immunity to the next NSE for 60s. Ignores enemies' resistance to the next NSE for 30s.
The Tower: Increases allies' S.DEF by 150 for 60s. Reduces enemies' S.DEF by 300 for 30s. 
The Temperance: Grants +20% Healing Received Effectiveness to allies for 60s. Prevents user and enemies from hurting each other for 5s.
The Sun: Increases allies' B.ATK, W.ATK, B.MATK, H.DEF, H.MDEF, FLEE, and ACC by 5% for 60s. Decreases these stats for enemies by 5% for 30s.
The Devil: Increases allies' B.ATK, W.ATK and B.MATK by 10% for 60s. Decreases these stats for enemies by 5% and deals 666 T.DMG every 1.5s for 30s. 
Wheel of Fortune: Applies effects of two random cards to allies and enemies.
The Star: Decreases allies' FCT by 20% for 60s. Increases enemies' FCT by 20% for 30s. 
The Strength: Increases allies' B.ATK and W.ATK by 20% for 60s. Reduces enemies' B.ATK and W.ATK by 20% for 30s.
The Magician: Increases allies' B.MATK by 20% for 60s. Decreases enemies' B.MATK by 20% for 30s. 
Death: Resurrects allies and changes their property to Corrupt for 60s. Deals 1000 T.DMG as Corrupt property and changes enemies' property to Corrupt for 30s.
Catalyst: 1x 'Tarot Cards
[Lv. 1]: CD: 90s
[Lv. 2]: CD: 75s
[Lv. 3]: CD: 60s
[Lv. 4]: CD: 45s
[Lv. 5]: CD: 30s

*** Old note ***
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
Weapon: Whip
Requirement: None
Description: Increases E.ATK, E.MATK, and reduces DAA while wielding a Whip. At max level, also grants +6% Max SP.
[Lv. 1]: E.ATK +2. E.MATK +2. DAA -1% 
[Lv. 2]: E.ATK +4. E.MATK +4. DAA -2% 
[Lv. 3]: E.ATK +6. E.MATK +6. DAA -3% 
[Lv. 4]: E.ATK +8. E.MATK +8. DAA -4% 
[Lv. 5]: E.ATK +10. E.MATK +10. DAA -5% 
[Lv. 6]: E.ATK +12. E.MATK +12. DAA -6% 
[Lv. 7]: E.ATK +14. EMATK +14. DAA -7% 
[Lv. 8]: E.ATK +16. E.MATK +16. DAA -8% 
[Lv. 9]: E.ATK +18. E.MATK +18. DAA -9% 
[Lv.10]: E.ATK +20. E.MATK +20. DAA -10%`,
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
Weapon: Whip (or Instrument)
Target: Enemy
Element: Ammunition
Fixed Cast Time: 0.30s
After Cast Delay: A.Delay - 0.26s
Cooldown: A.Delay
Range: 12
Hits: 2
Requirement: Dancing Lesson Lv: 3
Description: Deals ranged P.DMG to the target, scaling with CRIT.
VCT scales with skill level.
Catalyst: 1x Arrow
[Lv. 1]: ATK 180% x Hits. VCT: 0.30s SP Cost: 8
[Lv. 2]: ATK 210% x Hits. VCT: 0.40s SP Cost: 11
[Lv. 3]: ATK 240% x Hits. VCT: 0.50s SP Cost: 14
[Lv. 4]: ATK 270% x Hits, VCT: 0.60s SP Cost: 17
[Lv. 5]: ATK 300% x Hits, VCT: 0.70s SP Cost: 20
Formula: ATK (%): (50 + CRIT + (Skill Lv x 30)) x Hits `,
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
Weapon: Whip
Type: Magical
Target: Self
Element: Neutral
Variable Cast Time: 0.70s
Fixed Cast Time: 0.30s
After Cast Delay: 0.30s
Cooldown: 10s
Requirement: Dancing Lesson Lv: 2
Description: Deals M.DMG to enemies within a 9x9 AoE, scaling with ATK and Musical Lesson level. Damage interval is based on A.Delay, and can trigger auto-cast.
While active, increases WD by 25% and SP Recovery Interval by 30%, reduces SP Recovery by 70%, and drains SP every second.
Switching to a non-whip weapon cancel the skill.
[Lv. 1]: ATK/MATK 30%, SP Cost: 28 
[Lv. 2]: ATK/MATK 60%, SP Cost: 31 
[Lv. 3]: ATK/MATK 90%, SP Cost: 34 
[Lv. 4]: ATK/MATK 120%, SP Cost: 37 
[Lv. 5]: ATK/MATK 150%, SP Cost: 40
Damage: (((Skill Lv x 30) + (ATK + MATK x (Skill Lv x 0.3))) x (100 + (Musical Lesson Lv x 3))) / 100 
SP Consumption: (5 + Max SP / 500)
Interval (seconds): A.Delay x 3 `,
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
Weapon: Whip 
Type: Dance 
Target: Self
Variable Cast Time: 1s
After Cast Delay: 0.30s
Cooldown: 20s
Requirement: Cringe Dance Lv: 3
Description: Increases SP Recovery and Max SP, and reduces SP Cost of nearby allies for 180s.
Only 3 dances can be active at a time.
[Lv 1]: MaxSP +2%, SP Cost: -2% SP Recovery: +2%
[Lv 2]: MaxSP +4%, SP Cost: -4% SP Recovery: +4%
[Lv 3]: MaxSP +6%, SP Cost: -6% SP Recovery: +6%
[Lv 4]: MaxSP +8%, SP Cost: -8% SP Recovery: +8%
[Lv 5]: MaxSP +10%, SP Cost: -10% SP Recovery: +10%
[Lv 6]: MaxSP +12%, SP Cost: -12% SP Recovery: +12%
[Lv 7]: MaxSP +14%, SP Cost: -14% SP Recovery: +14%
[Lv 8]: MaxSP +16%, SP Cost: -16% SP Recovery: +16%
[Lv 9]: MaxSP +18%, SP Cost: -18% SP Recovery: +18%
[Lv10]: MaxSP +20%, SP Cost: -20% SP Recovery: +20%`,
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
Weapon: Instrument/Whip 
Type: Duet
Target: Self
Variable Cast Time: 1.50s
Fixed Cast Time: 0.50s 
After Cast Delay: 0.30s
Cooldown: 20s
Requirement: Apple of Idun Lv: 10
Description: Increases B.ATK and B.MATK of nearby allies for 60s.
Requires an Artist ally in an adjacent cell to activate, and only 1 duet can be active at a time.
[Lv. 1]: B.ATK +20. B.MATK +20, SP Cost: 38 
[Lv. 2]: B.ATK +25. B.MATK +25, SP Cost: 46 
[Lv. 3]: B.ATK +30. B.MATK +30, SP Cost: 54 
[Lv. 4]; B.ATK +35. B.MATK +35, SP Cost: 62 
[Lv. 5]: B.ATK +40. B.MATK +40. SP Cost: 70`,
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
Weapon: Instrument/Whip
Type: Ground Duet
Target: Self
Variable Cast Time: 1.50s
Fixed Cast Time: 0.50s
After Cast Delay: 0.30s 
Cooldown: 30s
SP Cost: 40
Requirement: Drum of Battlefield Lv: 3
Description: Creates a 9x9 AoE that lasts for 180s, inflicting Loki's Wail to enemies inside.
Also inflicts Chaos on enemies on activation. Requires an Artist ally in an adjacent cell to activate, and the duet ends if either the user or the artist who activated it leaves the AoE.`,
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
Weapon: Instrument/Whip
Type: Supportive
Target: Self
After Cast Delay: 0.30s
Cooldown: 20s
SP Cost: 70
Requirement: Musical Lesson Lv: 5
Description: Increases duration and reduces CD of all Songs and Dances by 50%.
Also boosts the effectiveness of Bard and Dancer Skills.
[Lv 1]: Duration: 40s
[Lv 2]: Duration: 60s
[Lv 3]: Duration: 80s
[Lv 4]: Duration: 100s 
[Lv 5]: Duration: 120s`,
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
Type: Supportive 
Target: Self
After Cast Delay: A.Delay - 0.26s 
Cooldown: A.Delay + 25
Requirement: Encore Lv: 3
Description: Has a chance to inflict Petrifying on nearby enemies.
When petrifying ends, inflicts Petrify for 27s. 
[Lv. 1]: Petrifying Chance: 20%, SP Cost: 12 
[Lv. 2]: Petrifying Chance: 25%, SP Cost: 14 
[Lv. 3]: Petrifying Chance: 30%, SP Cost: 16 
[Lv. 4]: Petrifying Chance: 35%, SP Cost: 18 
[Lv. 5]: Petrifying Chance: 40%, SP Cost: 20`,
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
Weapon: Whip 
Type: Dance 
Target: Self
Variable Cast Time: 1s
After Cast Delay: 0.30s
Cooldown: 20s
Requirement: Cringe Dance Lv: 3
Description: Increases P.ACC and ranged P.DMG of nearby allies for 180s. Also grants Armor Pierce.
Only 3 dances can be active at a time. 
[Lv. 1]: P.ACC +1. Ranged P.DMG: +2% Armor Pierce: +1%, SP Cost: 33 
[Lv. 2]: P.ACC +2. Ranged P.DMG: +4% Armor Pierce: +2%, SP Cost: 36 
[Lv. 3]: P.ACC +3. Ranged P.DMG: +6% Armor Pierce: +3%, SP Cost: 39
[Lv. 4]: P.ACC +4. Ranged P.DMG: +8% Armor Pierce: +4%, SP Cost: 42 
[Lv. 5]: P.ACC +5. Ranged P.DMG: +10% Armor Pierce: +5%, SP Cost: 45 
[Lv. 6]: P.ACC +6. Ranged P.DMG: +12% Armor Pierce: +6%, SP Cost: 48 
[Lv. 7]: P.ACC +7. Ranged P.DMG: +14% Armor Pierce: +7%, SP Cost: 51 
[Lv. 8]: P.ACC +8. Ranged P.DMG: +16% Armor Pierce: +8%, SP Cost: 54 
[Lv. 9]: P.ACC +9. Ranged P.DMG: +18% Armor Pierce: +9%, SP Cost: 57 
[Lv.10]: P.ACC +10. Ranged P.DMG: +20% Armor Pierce: +10%, SP Cost: 60`,
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
Weapon: Instrument/Whip 
Type: Duet
Target: Self
Variable Cast Time: 1.50s
Fixed Cast Time: 0.50s
After Cast Delay: 0.30s 
Cooldown: 20s
Requirement: Whistle Lv: 10
Description: Grants nearby allies a chance to not consume skill Catalyst for 60s.
Requires an Artist ally in an adjacent cell to activate, and only 1 duet can be active at a time.
[Lv. 1]: Chance: 4%, SP Cost: 38 
[Lv. 2]: Chance: 8%, SP Cost: 46 
[Lv. 3]: Chance: 12%, SP Cost: 54 
[Lv. 4]: Chance: 16%, SP Cost: 62 
[Lv. 5]: Chance: 20%, SP Cost: 70`,
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
Weapon: Instrument/Whip 
Type: Ground Duet 
Target: Self
Variable Cast Time: 1.50s
Fixed Cast Time: 0.50s
After Cast Delay: 0.30s 
Cooldown: 30s
SP Cost: 40
Requirement: Into the Abyss Lv: 3
Description: Creates a 9x9 AoE that lasts for 180s, inflicting Sleep on enemies inside for 4s every 10s.
Requires an Artist ally in an adjacent cell to activate, and the duet ends if either the user or the artist who activated it leaves the AoE.`,
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
Weapon: Whip 
Type: Dance 
Target: Self
Variable Cast Time: 1s
After Cast Delay: 0.30s
Cooldown: 20s
Requirement: Cringe Dance Lv: 3
Description: Increases CRIT and C.DMG of nearby allies for 180s.
Only 3 dances can be active at a time. 
[Lv. 1]: CRIT +1. C.DMG +2%, SP Cost: 33 
[Lv. 2]: CRIT +2. C.DMG +4%, SP Cost: 36 
[Lv. 3]: CRIT +3. C.DMG +6%, SP Cost: 39 
[Lv. 4]: CRIT +4. C.DMG +8%, SP Cost: 42 
[Lv. 5]: CRIT +5. C.DMG +10%, SP Cost: 45 
[Lv. 6]: CRIT +6. C.DMG +12%, SP Cost: 48 
[Lv. 7]: CRIT +7, C.DMG +14%, SP Cost: 51 
[Lv. 8]: CRIT +8. C.DMG +16%, SP Cost: 54 
[Lv. 9]: CRIT +9. C.DMG +18%, SP Cost: 57 
[Lv.10]: CRIT +10. C.DMG +20%, SP Cost: 60`,
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
Weapon: Instrument/Whip 
Type: Duet
Target: Self
Variable Cast Time: 1.50s
Fixed Cast Time: 0.50s
After Cast Delay: 0.30s
Cooldown: 20s
Requirement: Poem of Bragi Lv: 10
Description: Grants nearby allies both NSE and ELE resistance for 60s.
Requires an Artist ally in an adjacent cell to activate, and only 1 duet can be active at a time.
[Lv. 1]; NSE +3%, ELE +5%, SP Cost: 38 
[Lv. 2]: NSE. +6%, ELE +10%, SP Cost: 46 
[Lv. 3]; NSE. +9%, ELE +15%, SP Cost: 54 
[Lv. 4]: NSE. +12%, ELE +20%, SP Cost: 62 
[Lv. 5]; NSE. +15%, ELE +25%, SP Cost: 70`,
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
Weapon: Instrument/Whip 
Type: Ground Duet 
Target: Self
Variable Cast Time: 1.50s
Fixed Cast Time: 0.50s
After Cast Delay: 0.30s 
Cooldown: 30s
SP Cost: 40
Requirement: Invulnerable Siegfried Lv: 3
Description: Creates a 9x9 AoE that lasts for 180s, granting Mr. Kim A Rich Man to allies inside.
Requires an Artist ally in an adjacent cell to activate, and the duet ends if either the user or the artist who activated it leaves the AoE.`,
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
Weapon: Whip 
Type: Dance
Target: Self
Variable Cast Time: 1s
After Cast Delay: 0.30s
Cooldown: 20s
Requirement: Cringe Dance Lv: 3
Description: Reduces WD and increases T.DEF of nearby allies for 180s.
Also increases WD of nearby enemies for 5s, and while active, this effect is reapplied whenever an enemy deals P.DMG to the user. Only 3 dances can be active at a time.
[Lv. 1]: WD -7%, T.DEF +10. SP Cost: 33 Enemies WD +7%
[Lv. 2]: WD -9%, T.DEF +20. SP Cost: 36 Enemies WD +9%
[Lv. 3]: WD -11%, T.DEF +30. SP Cost: 39 Enemies WD +11%
[Lv. 4]: WD -13%, T.DEF +40. SP Cost: 42 Enemies WD +13%
[Lv. 5]: WD -15%, T.DEF +50. SP Cost: 45 Enemies WD +15%
[Lv. 6]: WD -17%, T.DEF +60. SP Cost: 48 Enemies WD +17%
[Lv. 7]: WD -19%, T.DEF +70. SP Cost: 51 Enemies WD +19%
[Lv. 8]: WD -21%, T.DEF +80. SP Cost: 54 Enemies WD +21%
[Lv. 9]: WD -23%, T.DEF +90. SP Cost: 57 Enemies WD +23%
[Lv.10]: WD -25%, T.DEF +100, SP Cost: 60 Enemies WD +25%`,
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
Weapon: Instrument/Whip 
Type: Duet
Target: Self
Variable Cast Time: 1.50s
Fixed Cast Time: 0.50s
After Cast Delay: 0.30s
Cooldown: 20s
Requirement: Assassin Cross of Sunset Lv: 10
Description: Grants nearby allies a random Effect for 60s.
Requires an Artist ally in an adjacent cell to activate, and only 1 duet can be active at a time.
[Lv. 1]: SP Cost: 38
[Lv. 2]: SP Cost: 46
[Lv. 3]: SP Cost: 54
[Lv. 4]: SP Cost: 62 
[Lv. 5]: SP Cost: 70`,
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
Weapon: Instrument/Whip 
Type: Ground Duet 
Target: Self
Variable Cast Time: 1.50s
Fixed Cast Time: 0.50s
After Cast Delay: 0.30s 
Cooldown: 30s
SP Cost: 40
Requirement: The Ring of Nibelungen Lv: 3
Description: Creates a 9x9 AoE that lasts for 180s, inflicting Eternal Chaos to enemies inside.
Requires an Artist ally in an adjacent cell to activate, and the duet ends if either the user or the artist who activated it leaves the AoE.`,
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
Weapon: Instrument/Whip 
Type: Physical
Target: Enemy
Element: Ammunition
After Cast Delay: A.Delay - 0.26s
Fixed Cast Time: 0.60s
Cooldown: 1.50s
Range: 12
Hits: 9
Requirement: Arrow Shower Lv: 5, Musical Strike Lv: 1, Double Strafe Lv: 5
Description: Deals ranged P.DMG to the target.
Grants +3 hits if used after Musical Strike or Slinging Strike.
VCT scales with skill level.
Catalyst: 1x Arrow
[Lv. 1]: ATK 108% x Hits, VCT: 0.50s SP Cost: 17
[Lv. 2]: ATK 116% x Hits. VCT: 0.60s SP Cost: 19
[Lv. 3]: ATK 124% x Hits, VCT: 0.70s SP Cost: 21
[Lv. 4]: ATK 132% x Hits, VCT: 0.80s SP Cost: 23
[Lv. 5]: ATK 140% x Hits, VCT: 0.90s SP Cost: 25
[Lv. 6]: ATK 148% x Hits. VCT: 1.00s SP Cost: 27
[Lv. 7]: ATK 156% x Hits. VCT: 1.10s SP Cost: 29
[Lv. 8]: ATK 164% x Hits. VCT: 1.20s SP Cost: 31
[Lv. 9]: ATK 172% x Hits. VCT: 1.30s SP Cost: 33
[Lv.10]: ATK 180% x Hits. VCT: 1.40s SP Cost: 35
Formula: ATK (%): (100 + (Skill Lv x 8)) x Hits `,
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
Weapon: Instrument/Whip 
ype: Supportive
Target: Self
Variable Cast Time: 1s
After Cast Delay: 0.30s
Cooldown: 20s
Requirement: Improve Concentration Lv: 5, Musical Lesson Lv: 7
Description: Increases B.ATK or B.MATK of nearby allies for 180s, depending on Class. Scales with Job Level, Musical Lesson, Dancing Lesson, and number of party members. 
[Lv 1]: B.ATK or B.MATK +6. SP Cost: 30 
[Lv 2]: B.ATK or B.MATK +12. SP Cost: 40 
[Lv 3]: B.ATK or B.MATK +18. SP Cost: 50 
[Lv 4]: B.ATK or B.MATK +24. SP Cost: 60 
[Lv 5]: B.ATK or B.MATK +30. SP Cost: 70
Formula: BATK: + (Skill Lv x 6) + (Job Lv / 7) + Musical Lesson Lv + Number of Bards in the party 
B.MATK: + (Skill Lv x 6) + (Job Lv / 7) + Dancing Lesson Ly + Number of Dancers in the party `,
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
Weapon: Instrument/Whip
Type: Magical
Target: Enemy
Element: Ammunition.
After Cast Delay: 1s 
Fixed Cast Time: 0.60s 
Cooldown: 1.50s
Range: 9
Requirement: Dissonance Lv: 5
Description: Deals M.DMG to enemies within a 5x5 AoE around the target.
VCT scales with skill level.
Catalyst: 1x Arrow
[Lv. 1]: MATK 700%, VCT: 1.10s SP Cost: 30
[Lv. 2]: MATK 900%, VCT: 1.30s SP Cost: 35
[Lv. 3]: MATK 1100%, VCT: 1.50s SP Cost: 40
[Lv. 4]: MATK 1300%, VCT: 1.70s SP Cost: 45
[Lv. 5]: MATK 1500%, VCT: 1.90s SP Cost: 50`,
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
Type: Supportive 
Target: Self
SP Cost: 70
Requirement: Improve Concentration Lv: 10, Cringe Dance Lv: 3
Description: When activated for the first time, Tarot Cards are displayed in order above the user's head for 30s.
Upon second activation, the displayed card is used on allies and enemies within an 11x11 AoE.
After a card is used, it is removed from the list and replaced by a random card on the next skill use.
CD scales with skill level.
The Lovers: Heals allies 20% Max HP. Inflicts Seduction on enemies for 5s. 
The Fool: Heals allies 20% Max SP. Burns enemies' SP by 20%, 
The Chariot: Removes movement NSE and reduces WD by 20% for allies for 60s. Also grants 2s immunity to movement NSE. Increases WD by 20% for enemies for 30s. 
The Hanged Man: Removes control NSE from allies and grants 10s immunity. Inflicts Hallucination and Chaos on allies and enemies for 10s.
The High Priestess: Grants allies immunity to the next NSE for 60s. Ignores enemies' resistance to the next NSE for 30s.
The Tower: Increases allies' S.DEF by 150 for 60s. Reduces enemies' S.DEF by 300 for 30s. 
The Temperance: Grants +20% Healing Received Effectiveness to allies for 60s. Prevents user and enemies from hurting each other for 5s.
The Sun: Increases allies' B.ATK, W.ATK, B.MATK, H.DEF, H.MDEF, FLEE, and ACC by 5% for 60s. Decreases these stats for enemies by 5% for 30s.
The Devil: Increases allies' B.ATK, W.ATK and B.MATK by 10% for 60s. Decreases these stats for enemies by 5% and deals 666 T.DMG every 1.5s for 30s. 
Wheel of Fortune: Applies effects of two random cards to allies and enemies.
The Star: Decreases allies' FCT by 20% for 60s. Increases enemies' FCT by 20% for 30s. 
The Strength: Increases allies' B.ATK and W.ATK by 20% for 60s. Reduces enemies' B.ATK and W.ATK by 20% for 30s.
The Magician: Increases allies' B.MATK by 20% for 60s. Decreases enemies' B.MATK by 20% for 30s. 
Death: Resurrects allies and changes their property to Corrupt for 60s. Deals 1000 T.DMG as Corrupt property and changes enemies' property to Corrupt for 30s.
Catalyst: 1x 'Tarot Cards
[Lv. 1]: CD: 90s
[Lv. 2]: CD: 75s
[Lv. 3]: CD: 60s
[Lv. 4]: CD: 45s
[Lv. 5]: CD: 30s

*** Old note ***
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
        // 1767983049865
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
/******/ 		__webpack_require__.h = () => ("e9d81da1f0c2bf951834")
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
/******/ 	var __webpack_exports__ = __webpack_require__(3473);
/******/ 	
/******/ })()
;