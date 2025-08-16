/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */

import skillImgNo from '../../img/no_img.png'; // заглушка
import meteorAssault from '../../img/icon_asx/icon_asx_3.png'; 
import soulDestroyer from '../../img/icon_asx/icon_asx_2.png'; 
import deadlyPoisonMastery from '../../img/icon_asx/icon_asx_6.png'; 
import crossLethality from '../../img/icon_asx/icon_asx_7.png'; 

// список скилов Assassin Cross
export const skillsAssassinCross = [  
  {
    id: "crossLethality",
    level: 0,
    dependencies: [
      { id: "dualWieldingMastery", minLevel: 5 },
      { id: "katarMastery", minLevel: 5 },
    ],
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
    img: crossLethality,
  },
  {
    id: "deadlyPoisonMastery",
    level: 0,
    dependencies: [
      { id: "poisonery", minLevel: 1 },
    ],
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
    img: deadlyPoisonMastery,
  },
  {
    id: "meteorAssault",
    level: 0,
    dependencies: [
      { id: "dualWieldingMastery", minLevel: 10 },
      { id: "cloaking", minLevel: 5 },
      { id: "poisonWeapon", minLevel: 5 },
    ],
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
    img: meteorAssault,
  },
  {
    id: "soulDestroyer",
    level: 0,
    dependencies: [
      { id: "doubleAttack", minLevel: 5 },
      { id: "cloaking", minLevel: 3 },
      { id: "poisonWeapon", minLevel: 5 },
      { id: "Envenom", minLevel: 5 },
    ],
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
    img: soulDestroyer,
  },
];


/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */
