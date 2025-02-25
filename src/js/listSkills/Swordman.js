/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */

import skillImgNo from '../../img/no_img.png'; // заглушка

// список скилов Swordman
export const skillsSwordman = [  
  {
    id: "oneHandedSwordMastery",
    level: 0,
    dependencies: [],
    dependent: [
      { id: "swordQuicken" },
      { id: "twoHandedSwordMastery" },
    ],
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
    img: skillImgNo,
  },
  {
    id: "oneSpearMastery",
    level: 0,
    dependencies: [],
    dependent: [
       { id: "spearQuicken" },
       { id: "twoHandedSpearMastery" },
       { id: "pierce" },      
    ],
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
    img: skillImgNo,
  },
  {
    id: "bash",
    level: 0,
    dependencies: [],
    dependent: [
      { id: "magnumBreak" }     
    ],
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
    img: skillImgNo,
  },
  {
    id: "magnumBreak",
    level: 0,
    dependencies: [{ id: "bash", minLevel: 5 }],
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
    img: skillImgNo,
  },
  {
    id: "provoke",
    level: 0,
    dependencies: [],
    dependent: [{ id: "endure" }],
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
    img: skillImgNo,
  },
  {
    id: "endure",
    level: 0,
    dependencies: [
      { id: "provoke", minLevel: 5 },      
    ],
    dependent: [
      { id: "riding" },
    ],
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
    img: skillImgNo,
  },
  {
    id: "increaseHPRecovery",
    level: 0,
    dependencies: [],
    dependent: [{ id: "movingHPRecovery" }],
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
    img: skillImgNo,
  },
  {
    id: "movingHPRecovery",
    level: 0,
    dependencies: [
      { id: "increaseHPRecovery", minLevel: 5 },
    ],
    dependent: [
      { id: "sacrifice" },
    ],
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
    img: skillImgNo,
  },
];


/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */
