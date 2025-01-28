// btn reset all skills
document.querySelector(".bnt-reset").addEventListener("click", () => {
  const allDot = document.querySelectorAll(".dot");
  for (let i = 0; i < allDot.length; i++) {
    allDot[i].classList.remove("hidden");
  }
  
  skills.forEach((s) => {
    s.level = 0;
  });
  
  calcUsed();
});

// проверка зависимостей скилов
// список скилов
const skills = [
  {
    id: "fireBolt",
    level: 0, 
    dependencies: [], 
    dependent: [{ id: "fireBall" }, { id: "fireWall" }, { id: "sightrasher" }, { id: "meteorStorm" }, { id: "firePillar" }],
    element: null
  },
  {
    id: "fireBall",
    level: 0,
    dependencies: [{ id: "fireBolt", minLevel: 3 }], 
    dependent: [{ id: "fireWall" }, { id: "sightrasher" }, { id: "meteorStorm" }, { id: "firePillar" }],
    element: null
  },
  {
    id: "fireWall",
    level: 0, 
    dependencies: [{ id: "fireBolt", minLevel: 3 }, { id: "fireBall", minLevel: 4 }], 
    element: null
  },
  {
    id: "coldBolt",
    level: 0, 
    dependencies: [], 
    dependent: [{ id: "frostDiver" }, { id: "iceWall" }, { id: "waterBall" }, { id: "stormGust" }, { id: "frostNova" }],
    element: null
  },
  {
    id: "frostDiver",
    level: 0, 
    dependencies: [{ id: "coldBolt", minLevel: 3 }], 
    dependent: [{ id: "iceWall" }, { id: "waterBall" }, { id: "stormGust" }, { id: "frostNova" }],
    element: null
  },
  {
    id: "iceWall",
    level: 0, 
    dependencies: [{ id: "coldBolt", minLevel: 3 }, { id: "frostDiver", minLevel: 4 }], 
    dependent: [{ id: "fireWall" }],
    element: null
  },
  {
    id: "lightningBolt",
    level: 0, 
    dependencies: [], 
    dependent: [{ id: "thunderstorm" }, { id: "jupitelThunder" }, { id: "lordOfVermilion" }, { id: "electricalInduction" }],
    element: null
  },
  {
    id: "thunderstorm",
    level: 0, 
    dependencies: [{ id: "lightningBolt", minLevel: 3 }], 
    dependent: [{ id: "jupitelThunder" }, { id: "lordOfVermilion" }, { id: "electricalInduction" }],
    element: null
  },
  {
    id: "earthSpike",
    level: 0, 
    dependencies: [], 
    dependent: [{ id: "stoneCurse" }, { id: "violentQuake" }, { id: "quagmire" }, { id: "heavensDrive" }],
    element: null
  },
  {
    id: "stoneCurse",
    level: 0, 
    dependencies: [{ id: "earthSpike", minLevel: 3 }], 
    dependent: [{ id: "violentQuake" }, { id: "quagmire" }, { id: "heavensDrive" }],
    element: null
  },
  {
    id: "soulStrike",
    level: 0, 
    dependencies: [], 
    dependent: [{ id: "napalmBeat" }, { id: "safetyWall" }],
    element: null
  },
  {
    id: "napalmBeat",
    level: 0,
    dependencies: [{ id: "soulStrike", minLevel: 3 }], 
    dependent: [{ id: "safetyWall" }],
    element: null
  },
  {
    id: "safetyWall",
    level: 0, 
    dependencies: [{ id: "soulStrike", minLevel: 6 }, { id: "napalmBeat", minLevel: 4 }], 
    element: null
  },
  {
    id: "incSPRecovery",
    level: 0, 
    dependencies: [], 
    dependent: [],
    element: null
  },
  {
    id: "sight",
    level: 0, 
    dependencies: [], 
    dependent: [],
    element: null
  },
  {
    id: "sightrasher",
    level: 0,
    dependencies: [{ id: "fireBolt", minLevel: 3 }, { id: "fireBall", minLevel: 2 }], 
    dependent: [{ id: "meteorStorm" }, { id: "firePillar" }],
    element: null
  },
  {
    id: "meteorStorm",
    level: 0,
    dependencies: [{ id: "sightrasher", minLevel: 2 }, { id: "fireBolt", minLevel: 3 }, { id: "fireBall", minLevel: 2 }], 
    dependent: [{ id: "firePillar" }], 
    element: null
  },
  {
    id: "firePillar",
    level: 0,
    dependencies: [
      { id: "meteorStorm", minLevel: 6 }, 
      { id: "sightrasher", minLevel: 2 },
      { id: "fireBolt", minLevel: 3 }, 
      { id: "fireBall", minLevel: 2 }
    ], 
    dependent: [],
    element: null
  },
  {
    id: "waterBall",
    level: 0,
    dependencies: [{ id: "frostDiver", minLevel: 2 }, { id: "coldBolt", minLevel: 3 }], 
    dependent: [{ id: "stormGust" }, { id: "frostNova" }], 
    element: null
  },
  {
    id: "stormGust",
    level: 0,
    dependencies: [{ id: "waterBall", minLevel: 2 }, { id: "frostDiver", minLevel: 2 }, { id: "coldBolt", minLevel: 3 }], 
    dependent: [{ id: "frostNova" }], 
    element: null
  },
  {
    id: "frostNova",
    level: 0,
    dependencies: [{ id: "stormGust", minLevel: 6 }, { id: "waterBall", minLevel: 2 }, { id: "frostDiver", minLevel: 2 }, { id: "coldBolt", minLevel: 3 }], 
    dependent: [], 
    element: null
  },
  {
    id: "jupitelThunder",
    level: 0,
    dependencies: [{ id: "thunderstorm", minLevel: 2 }, { id: "lightningBolt", minLevel: 3 }], 
    dependent: [{ id: "lordOfVermilion" }, { id: "electricalInduction" }], 
    element: null
  },
  {
    id: "lordOfVermilion",
    level: 0,
    dependencies: [{ id: "jupitelThunder", minLevel: 2 }, { id: "thunderstorm", minLevel: 2 }, { id: "lightningBolt", minLevel: 3 }], 
    dependent: [{ id: "electricalInduction" }], 
    element: null
  },
  {
    id: "electricalInduction",
    level: 0,
    dependencies: [{ id: "lordOfVermilion", minLevel: 6 }, { id: "jupitelThunder", minLevel: 2 }, { id: "thunderstorm", minLevel: 2 }, { id: "lightningBolt", minLevel: 3 }], 
    dependent: [], 
    element: null
  },
  {
    id: "heavensDrive",
    level: 0,
    dependencies: [{ id: "stoneCurse", minLevel: 2 }, { id: "earthSpike", minLevel: 3 }], 
    dependent: [{ id: "violentQuake" }, { id: "quagmire" }], 
    element: null
  },
  {
    id: "violentQuake",
    level: 0,
    dependencies: [{ id: "heavensDrive", minLevel: 2 }, { id: "stoneCurse", minLevel: 2 }, { id: "earthSpike", minLevel: 3 }], 
    dependent: [{ id: "quagmire" }], 
    element: null
  },
  {
    id: "quagmire",
    level: 0,
    dependencies: [{ id: "violentQuake", minLevel: 6 }, { id: "heavensDrive", minLevel: 2 }, { id: "stoneCurse", minLevel: 2 }, { id: "earthSpike", minLevel: 3 }], 
    dependent: [], 
    element: null
  },
];

// Инициализация и добавление обработчиков событий
const skillElements = document.querySelectorAll(".skill");

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
      calcUsed();
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
      calcUsed();
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
  const totalSkillPoint = 98;
  
  stText.textContent = total.length;
  if (total.length > 98) {
    panelStatistic.classList.add('red');
  } else {
    panelStatistic.classList.remove('red');
  }
  
  const a = totalSkillPoint - total.length;
  
  stBalance.textContent = totalSkillPoint - total.length;
}
