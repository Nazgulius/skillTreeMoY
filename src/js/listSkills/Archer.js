/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */

import skillImgNo from '../../img/no_img.png'; // заглушка

// список скилов Archer
export const skillsArcher = [  
  {
    id: "doubleStrafe",
    level: 0,
    dependencies: [],
    dependent: [],
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
    img: skillImgNo,
  },
  {
    id: "chargeArrow",
    level: 0,
    dependencies: [],
    dependent: [],
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
[Lv 1]: Atk 140%,
[Lv 2]: Atk 180%,
[Lv 3]: Atk 220%,
[Lv 4]: Atk 260%,
[Lv 5]: Atk 300%,
[Lv 6]: Atk 340%,
[Lv 7]: Atk 380%,
[Lv 8]: Atk 420%,
[Lv 9]: Atk 460%,
[Lv 10]: Atk 500%`,
    img: skillImgNo,
  },
  {
    id: "owlsEye",
    level: 0,
    dependencies: [],
    dependent: [],
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
    img: skillImgNo,
  },
  {
    id: "vulturesEye",
    level: 0,
    dependencies: [],
    dependent: [],
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
    img: skillImgNo,
  },
  {
    id: "fletchery",
    level: 0,
    dependencies: [],
    dependent: [],
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
    img: skillImgNo,
  },
  {
    id: "quivery",
    level: 0,
    dependencies: [],
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
    img: skillImgNo,
  },
  {
    id: "arrowShower",
    level: 0,
    dependencies: [],
    dependent: [],
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
[Lv 10]: Wave ATK 100%, Duration: 3.7 s,`,
    img: skillImgNo,
  },
  {
    id: "improveConcentration",
    level: 0,
    dependencies: [],
    dependent: [],
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
    img: skillImgNo,
  },
];


/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */