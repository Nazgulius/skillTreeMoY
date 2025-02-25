/*  author Chalykh Maksim 
  # data 25.01.2025 
  # email: chalyh.maksim.88@mail.ru */

//import { skills } from './listSkills';
import { createSkill } from './createSkill';
import skillImgNo from '../img/no_img.png';


export default class App {
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
      jobOne.appendChild(createSkill(
        this._skillsJobOne[i].id,
        this._skillsJobOne[i].skillName,
        this._skillsJobOne[i].maxLevel,
        this._skillsJobOne[i].img,));
    }

    for (let i = 0; i < this._skillsJobTwo.length; i++) {
      jobTwo.appendChild(createSkill(
        this._skillsJobTwo[i].id,
        this._skillsJobTwo[i].skillName,
        this._skillsJobTwo[i].maxLevel,
        this._skillsJobTwo[i].img));
    }

    for (let i = 0; i < this._skillsJobTwoHight.length; i++) {
      jobTwoHight.appendChild(createSkill(
        this._skillsJobTwoHight[i].id,
        this._skillsJobTwoHight[i].skillName,
        this._skillsJobTwoHight[i].maxLevel,
        this._skillsJobTwoHight[i].img));        
    }


    // ждём загрузку DOM елементов
    //document.addEventListener("DOMContentLoaded", () => {});

    // обработчик события клика по скилу
    document.querySelectorAll(".skill").forEach((skillElement) => {
      if (!skillElement) return;
      const skillId = skillElement.id; // у каждого sкилла есть уникальный id
      const allSkills = [
        ...this._skillsJobOne,
        ...this._skillsJobTwo,
        ...this._skillsJobTwoHight,
      ];

      const skill = allSkills.find((s) => s.id === skillId);
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
          this.calcSkillDotSum();
        });
      });

      dotResetArray.forEach((resetBtn) => {
        resetBtn.addEventListener("click", () => {
          const skillDiv = resetBtn.closest('.skill');// Находим родительский элемент .skill 
          const allSkills = [
            ...this._skillsJobOne,
            ...this._skillsJobTwo,
            ...this._skillsJobTwoHight,
          ];

          const skillReset = allSkills.find((s) => s.id === skillDiv.id);

          //const skillReset = this._skills.find((s) => s.id === skillDiv.id);

          console.log("skillReset:", skillReset);

          if (skillReset) {
            // Сбрасываем уровень скилла и его зависимостей  
            this.resetSkillLevel(skillReset);  
            
            dotArray.forEach((dot) => {  
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
    const allSkills2 = [
      ...this._skillsJobOne,
      ...this._skillsJobTwo,
      ...this._skillsJobTwoHight,
    ];

    skillImgAll.forEach((eImg) => {
      eImg.addEventListener('click', (e) => {
        // Проверяем, уже есть ли попап  
        const existingPop = document.querySelector('.ePopDiv');
        if (existingPop) {
          existingPop.remove(); // Убираем существующий попап, если есть  
        }

        const eSkill = allSkills2.find((s) => s.id === eImg.parentElement.id); // находим нужный скил

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

      this._skillsJobOne.forEach((s) => {
        s.level = 0;
      });
      this._skillsJobTwo.forEach((s) => {
        s.level = 0;
      });
      this._skillsJobTwoHight.forEach((s) => {
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
    btnHome.addEventListener('click', (e) => { 
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
        skillReset.dependent.forEach((sr) => {  
          const allSkills = [  
            ...this._skillsJobOne,  
            ...this._skillsJobTwo,  
            ...this._skillsJobTwoHight,  
          ];  
          const sReset = allSkills.find((s) => s.id === sr.id);  
    
          console.log("sReset:", sReset);  
          if (sReset) {  
            console.log("sReset: OK");  
            this.resetSkillLevel(sReset); // Рекурсивный вызов для зависимых  
          } else {  
            console.warn("Dependent skill not found:", sr.id);  
          }  
        });  
      }  
    };
  
  // метод для проверки зависимостей (реиспользование внутри себя)
  checkDependencies(skill) {
    if (skill.dependencies) {
      skill.dependencies.forEach((dep) => {
        const allSkills = [
          ...this._skillsJobOne,
          ...this._skillsJobTwo,
          ...this._skillsJobTwoHight,
        ];
        const dependentSkill = allSkills.find((s) => s.id === dep.id);
  
        // Проверяем, достигнут ли минимальный уровень
        const isLevelMet = dependentSkill.level > dep.minLevel;
  
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

        if(Boolean(dependentSkill && dependentSkill.dependencies)){
          this.checkDependencies(dependentSkill);
        }
      });
    }
  }

  // метод для сброса зависимых скиллов
  checkDependent(skill) {
    if (skill.dependent) {
      skill.dependent.forEach((dep) => {
        const allSkills = [
          ...this._skillsJobOne,
          ...this._skillsJobTwo,
          ...this._skillsJobTwoHight,
        ];
        const dependentSkill = allSkills.find((s) => s.id === dep.id);

        if (dependentSkill && dependentSkill.element) {
          dependentSkill.element.querySelectorAll('.dot').forEach((dot) => {
            dot.classList.remove("hidden");
          });
        }

        if(Boolean(dependentSkill && dependentSkill.dependent)){
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
    const skillAll =  document.querySelectorAll(".skill");
    skillAll.forEach((skill) => {
      skill.id
      const skillLvl = skill.querySelector('.dot_sum');

      const allSkills = [
            ...this._skillsJobOne,
            ...this._skillsJobTwo,
            ...this._skillsJobTwoHight,
          ];

      const skillBase = allSkills.find((s) => s.id === skill.id);
      
      skillLvl.textContent = skillBase.level + 1;
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
