/* const skillElements = document.querySelectorAll('.skill');  // находим все скилы

skillElements.forEach(skill => {  
  const dotArray = skill.querySelectorAll('.dot');  
  const dotResetArray = skill.querySelectorAll('.dot-reset');  

  // Обработчик событий для каждой точки  
  dotArray.forEach(dot => {  
    dot.addEventListener('click', () => {  
      dotToggle(dot);  
    });  
  });  

  // Обработчик событий для кнопки сброса для каждой группы точек  
  dotResetArray.forEach(resetBtn => {  
    resetBtn.addEventListener('click', () => {  
      dotArray.forEach(dot => {  
        dot.classList.remove('hidden');  
      });  
    });  
  });  

  function dotToggle(dotItem) {  
    dotItem.classList.add('hidden');  
    let dotPre = dotItem.previousElementSibling;  
    while (dotPre) {  
      dotPre.classList.add('hidden');  
      dotPre = dotPre.previousElementSibling;  
    }  

    let dotNext = dotItem.nextElementSibling;  
    while (dotNext) {  
      dotNext.classList.remove('hidden');  
      dotNext = dotNext.nextElementSibling;  
    }  
  }  
});*/

// btn reset all skills
document.querySelector(".btn-reset").addEventListener("click", () => {
  const allDot = document.querySelectorAll(".dot");
  for (let i = 0; i < allDot.length; i++) {
    allDot[i].classList.remove("hidden");
  }
});

// проверка зависимостей скилов
// список скилов
const skills = [
  {
    id: "fireBolt",
    level: 0, // Уровень скилла
    dependencies: [], // Нет зависимостей
    element: null
  },
  {
    id: "fireBall",
    level: 0, // Уровень скилла
    dependencies: [{ id: "fireBolt", minLevel: 4 }], // Зависит от skill1 с уровнем 1
    element: null
  },
  {
    id: "fireWall",
    level: 0, // Уровень скилла
    dependencies: [{ id: "fireBall", minLevel: 5 }], // Зависит от skill2 с уровнем 2
    element: null
  }
];

// Инициализация и добавление обработчиков событий
const skillElements = document.querySelectorAll(".skill");

skillElements.forEach((skillElement) => {
  const skillId = skillElement.id; // Убедитесь, что у каждого sкилла есть уникальный id
  const skill = skills.find((s) => s.id === skillId);
  skill.element = skillElement; // Сохраняем ссылку на HTML элемент

  const dotArray = skillElement.querySelectorAll(".dot");
  const dotResetArray = skillElement.querySelectorAll(".dot-reset");

  dotArray.forEach((dot) => {
    dot.addEventListener("click", () => {
      dotToggle(dot);
      checkDependencies(skill); // Проверяем зависимости
    });
  });

  dotResetArray.forEach((resetBtn) => {
    resetBtn.addEventListener("click", () => {
      dotArray.forEach((dot) => {
        dot.classList.remove("hidden");
      });
      checkDependencies(skill); // Проверяем зависимости
    });
  });
});

// Функция для проверки зависимостей
function checkDependencies(skill) {
  skill.dependencies.forEach((dep) => {
    const dependentSkill = skills.find((s) => s.id === dep.id);

    // Проверяем, достигнут ли минимальный уровень
    const isLevelMet = skill.level >= dep.minLevel;

    if (isLevelMet && dependentSkill.element) {
      // Если текущий скилл на нужном уровне, показываем зависимый скилл
      dependentSkill.element.classList.remove("hidden");
      dotRemoveDependent(dependentSkill.element);
    } else if (dependentSkill.element) {
      // Если не достигнут уровень, скрываем зависимый скилл
      dependentSkill.element.classList.add("hidden");
      dotAddDependent(dependentSkill.element);
    }
  });
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

// Обработчик событий для сброса точек у зависимых скилов  
function dotAddDependent(dotArrayDep) {
  dotArrayDep.forEach((dot) => {
    dot.classList.add('hidden');
  });
}

// Обработчик событий для добавления точек в зависимые скилы 
function dotRemoveDependent(dotArrayDep) {
  dotArrayDep.forEach((dot) => {
    dot.classList.remove('hidden');
  });
}