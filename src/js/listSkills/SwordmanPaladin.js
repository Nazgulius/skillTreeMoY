/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */

import skillImgNo from '../../img/no_img.png'; // заглушка
import gloriaDomini from '../../img/icon_pld/icon_pld_1.gif'; 
import sacrifice from '../../img/icon_pld/icon_pld_2.gif'; 
import gospel from '../../img/icon_pld/icon_pld_3.gif'; 
import shieldChain from '../../img/icon_pld/icon_pld_4.gif'; 


// список скилов Paladin
export const skillsPaladin = [  
  {
    id: "gloriaDomini",
    level: 0,
    dependencies: [
       { id: "grandCross", minLevel: 5 },
    ],
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
    img: gloriaDomini,
  },
  {
    id: "gospel",
    level: 0,
    dependencies: [
      
    ],
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
    img: gospel,
  },
  {
    id: "sacrifice",
    level: 0,
    dependencies: [
      { id: "faith", minLevel: 10 },
      { id: "movingHPRecovery", minLevel: 1 },
    ],
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
    img: sacrifice,
  },
  {
    id: "shieldChain",
    level: 0,
    dependencies: [
      { id: "shieldBoomerang", minLevel: 5 },
    ],
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
    img: shieldChain,
  },
];


/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */
