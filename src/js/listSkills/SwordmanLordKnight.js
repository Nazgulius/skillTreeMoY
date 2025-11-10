/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */

import skillImgNo from '../../img/no_img.png'; // заглушка
import auraBlade from '../../img/icon_lkn/icon_lkn_1.png';
import parry from '../../img/icon_lkn/icon_lkn_2.png';
import concentration from '../../img/icon_lkn/icon_lkn_3.png';
import berserk from '../../img/icon_lkn/icon_lkn_5.png';
import spiralPierce from '../../img/icon_lkn/icon_lkn_6.png';
import jointBeat from '../../img/icon_lkn/icon_lkn_8.png';

// список скилов Lord Knight
export const skillsLordKnight = [  
  {
    id: "auraBlade",
    level: 0,
    dependencies: [
      { id: "swordQuicken", minLevel: 5 },
    ],
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
    img: auraBlade,
  },
  {
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
    img: berserk,
  },
  {
    id: "concentration",
    level: 0,
    dependencies: [
      { id: "spearQuicken", minLevel: 5 },
    ],
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
    img: concentration,
  },
  {
    id: "parry",
    level: 0,
    dependencies: [
      { id: "counterAttack", minLevel: 5 },
      { id: "swordQuicken", minLevel: 5 },
    ],
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
Duration: (60 + (24 × Skill Lv))s
Requirement: Counter Attack Lv: 5, Sword Quicken Lv: 5
Description: Grants a chance to fully block any incoming P.DMG. Block chance is halved while wielding a One-Handed Sword. Briefly immobilizes the character after a successful block.
[Lv. 1]: Block Chance: 23%. Duration: 30s 
[Lv. 2]: Block Chance: 26%, Duration: 40s 
[Lv. 3]: Block Chance: 29%, Duration: 50s 
[Lv. 4]: Block Chance: 32%, Duration: 60s 
[Lv. 5]: Block Chance: 35%, Duration: 70s
Block Chance (1H Sword): ((20 + (3 × Skill Lv)) - 10)%`,
    img: parry,
  },
  {
    id: "spiralPierce",
    level: 0,
    dependencies: [
      { id: "spearBoomerang", minLevel: 5 },
    ],
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
    img: spiralPierce,
  },
];


/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */
