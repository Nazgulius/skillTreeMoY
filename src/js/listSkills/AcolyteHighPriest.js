/*  author Chalykh Maksim 
  # data 10.02.2025 
  # email: chalyh.maksim.88@mail.ru */

import skillImgNo from '../../img/no_img.png'; // заглушка
import assumptio from '../../img/icon_hpr/icon_hpr_1.png'; 
import meditatio from '../../img/icon_hpr/icon_hpr_3.png'; 
// import manaRecharge from '../../img/icon_hpr/icon_hpr_4.png'; 
// import basilica from '../../img/icon_hpr/icon_hpr_2.png'; 
import penitent from '../../img/icon_hpr/icon_hpr_5.png'; 
import exsuffla from '../../img/icon_hpr/icon_hpr_6.png'; 

// список скилов HighPriest
export const skillsHighPriest = [  
  {
    id: "assumptio",
    level: 0,
    dependencies: [
      { id: "angelus", minLevel: 5 },
      { id: "impositioManus", minLevel: 3 },
    ],
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
    img: assumptio,
  },
  {
    id: "meditatio",
    level: 0,
    dependencies: [
      { id: "impositioManus", minLevel: 3 },
      { id: "increaseSPRecovery", minLevel: 3 },
      { id: "lexDivina", minLevel: 3 },
    ],
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
    img: meditatio,
  },
  {
    id: "penitent",
    level: 0,
    dependencies: [
      // { id: "impositioManus", minLevel: 3 },
    ],
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
    img: penitent,
  },
  {
    id: "exsuffla",
    level: 0,
    dependencies: [
      // { id: "impositioManus", minLevel: 3 },
    ],
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
    img: exsuffla,
  },
];


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
