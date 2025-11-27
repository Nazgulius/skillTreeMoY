
/*  author Chalykh Maksim
  # data 10.02.2025
  # email: chalyh.maksim.88@mail.ru */

import skillImgNo from '../../img/no_img.png'; // заглушка
import enchantedStoneCraft from '../../img/icon_bsm/icon_bsm_3.gif';
import hiltBinding from '../../img/icon_bsm/icon_bsm_12.gif';
import weaponryResearch from '../../img/icon_bsm/icon_bsm_14.gif';
import repairWeapon from '../../img/icon_bsm/icon_bsm_15.gif';
import skinTempering from '../../img/icon_bsm/icon_bsm_16.gif';
import hammerfall from '../../img/icon_bsm/icon_bsm_17.gif';
import adrenalineRush from '../../img/icon_bsm/icon_bsm_18.gif';
import weaponPerfection from '../../img/icon_bsm/icon_bsm_19.gif';
import powerThrust from '../../img/icon_bsm/icon_bsm_20.gif';
import maximizePower from '../../img/icon_bsm/icon_bsm_21.gif';
import cartBoost from '../../img/icon_wsm/icon_wsm_2.gif';
import metalTempering from '../../img/icon_bsm/icon_bsm_25.png';
import reforge from '../../img/icon_bsm/icon_bsm_39.png';
import bluntWeaponReforging from '../../img/icon_bsm/icon_bsm_33.png';
import pierceWeaponReforging from '../../img/icon_bsm/icon_bsm_34.png';
import magicWeaponReforging from '../../img/icon_bsm/icon_bsm_35.png';
import exoticWeaponReforging from '../../img/icon_bsm/icon_bsm_36.png';
import stringWeaponReforging from '../../img/icon_bsm/icon_bsm_37.png';
import bladeWeaponReforging from '../../img/icon_bsm/icon_bsm_38.png';

// список скилов Blacksmith
export const skillsBlacksmith = [
  {
    id: "hammerfall",
    level: 0,
    dependencies: [],
    dependent: [
      { id: "meltdown" },
    ],
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
    img: hammerfall,
  },
  {
    id: "reforge",
    level: 0,
    dependencies: [
      // { id: "enchantedStoneCraft", minLevel: 1 },
      // { id: "metalTempering", minLevel: 1 },
    ],
    dependent: [
      { id: "foundryPowerUp" },
      { id: "bladeWeaponReforging" },
      { id: "bluntWeaponReforging" },
      { id: "pierceWeaponReforging" },
      { id: "magicWeaponReforging" },
      { id: "stringWeaponReforging" },
      { id: "exoticWeaponReforging" },
      { id: "repairWeapon" },
      { id: "skinTempering" },
    ],
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
*Only the highest one is considered `,
    img: reforge,
  },
  {
    id: "bladeWeaponReforging",
    level: 0,
    dependencies: [
      { id: "reforge", minLevel: 1 },
    ],
    dependent: [
      { id: "foundryPowerUp" },
    ],
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
    img: bladeWeaponReforging,
  },
  {
    id: "bluntWeaponReforging",
    level: 0,
    dependencies: [
      { id: "reforge", minLevel: 1 },
    ],
    dependent: [
      { id: "foundryPowerUp" },
    ],
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
    img: bluntWeaponReforging,
  },
  {
    id: "pierceWeaponReforging",
    level: 0,
    dependencies: [
      { id: "reforge", minLevel: 1 },
    ],
    dependent: [
      { id: "foundryPowerUp" },
    ],
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
    img: pierceWeaponReforging,
  },
  {
    id: "magicWeaponReforging",
    level: 0,
    dependencies: [
      { id: "reforge", minLevel: 1 },
    ],
    dependent: [
      { id: "foundryPowerUp" },
    ],
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
    img: magicWeaponReforging,
  },
  {
    id: "stringWeaponReforging",
    level: 0,
    dependencies: [
      { id: "reforge", minLevel: 1 },
    ],
    dependent: [
      { id: "foundryPowerUp" },
    ],
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
    img: stringWeaponReforging,
  },
  {
    id: "exoticWeaponReforging",
    level: 0,
    dependencies: [
      { id: "reforge", minLevel: 1 },
    ],
    dependent: [
      { id: "foundryPowerUp" },
    ],
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
    img: exoticWeaponReforging,
  },
  {
    id: "repairWeapon",
    level: 0,
    dependencies: [
      { id: "reforge", minLevel: 2 },
    ],
    dependent: [
      { id: "foundryPowerUp" },
    ],
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
    img: repairWeapon,
  },
  {
    id: "skinTempering",
    level: 0,
    dependencies: [
      { id: "reforge", minLevel: 2 },
    ],
    dependent: [
      { id: "meltdown" },
    ],
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
    img: skinTempering,
  },
  {
    id: "adrenalineRush",
    level: 0,
    dependencies: [
      { id: "maximizePower", minLevel: 1 },
    ],
    dependent: [],
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
SP Cost: 10 + (2 × Skill Lv)
Catalyst: (Skill Lv ÷ 2) × Zeny Pouch
Duration: 180 Seconds
Requirement: Maximize Power Lv: 1
Description:
Increases nearby allies ASPD, CRIT and ACC. 
- Attack Speed + (10 + Skill Lv)%
- Accuracy + (2 × Skill Lv)
- Critical + Skill Lv

[Lv. 1]: ASPD 11%. CRIT +1. ACC +2. SP Cost: 12
[Lv. 2]: ASPD 12%. CRIT +2. ACC +4. SP Cost: 14
[Lv. 3]: ASPD 13%. CRIT +3. ACC +6. SP Cost: 16
[Lv. 4]: ASPD 14%. CRIT +4. ACC +8. SP Cost: 18
[Lv. 5]: ASPD 15%. CRIT +5. ACC +10. SP Cost: 20
[Lv. 6]: ASPD 16%. CRIT +6. ACC +12. SP Cost: 22
[Lv. 7]: ASPD 17%. CRIT +7. ACC +14. SP Cost: 24
[Lv. 8]: ASPD 18%. CRIT +8. ACC +16. SP Cost: 26
[Lv. 9]: ASPD 19%. CRIT +9. ACC +18, SP Cost: 28
[Lv.10]: ASPD 20%. CRIT +10. ACC +20. SP Cost: 30`,
    img: adrenalineRush,
  },
  {
    id: "weaponPerfection",
    level: 0,
    dependencies: [
      { id: "maximizePower", minLevel: 3 },
    ],
    dependent: [],
    element: null,
    skillName: "Weapon Perfection",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Supportive 
Target: Self
After Cast Delay: 0.30s
Cooldown: A.Delay
SP Cost: 15 + (2 × Skill Lv)
Catalyst: Skill Lv × Zeny Pouch
Duration: 180 Seconds
Requirement: Maximize Power Lv: 3
Description: Temporarily increases nearby allies' Weapon Size Modifier.
[Lv. 1]: Modifier +5%, SP Cost: 17
[Lv. 2]: Modifier +10%, SP Cost: 19
[Lv. 3]: Modifier +15%, SP Cost: 21
[Lv. 4]: Modifier +20%, SP Cost: 23
[Lv. 5]: Modifier +25%, SP Cost: 25`,
    img: weaponPerfection,
  },
  {
    id: "powerThrust",
    level: 0,
    dependencies: [
      { id: "maximizePower", minLevel: 2 },
    ],
    dependent: [

    ],
    element: null,
    skillName: "Power Thrust",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Supportive 
Target: Self
After Cast Delay: 0.30s
Cooldown: A.Delay
SP Cost: 10 + (2 × Skill Lv)
Catalyst: (Skill Lv ÷ 2) × Zeny Pouch
Duration: 180 Seconds
Requirement: Maximize Power Lv: 2
Description: Temporarily increases nearby allies' R.ATK.
[Lv. 1]: R.ATK +7%, SP Cost: 12
[Lv. 2]: R.ATK +9%, SP Cost: 14
[Lv. 3]: R.ATK +11%, SP Cost: 16
[Lv. 4]: R.ATK +13%, SP Cost: 18
[Lv. 5]: R.ATK +15%, SP Cost: 20
[Lv. 6]: R.ATK +17%, SP Cost: 22
[Lv. 7]: R.ATK +19%, SP Cost: 24
[Lv. 8]: R.ATK +21%, SP Cost: 26
[Lv. 9]: R.ATK +23%, SP Cost: 28
[Lv.10]: R.ATK +25%, SP Cost: 30`,
    img: powerThrust,
  },
  {
    id: "maximizePower",
    level: 0,
    dependencies: [
      { id: "weaponryResearch", minLevel: 3 },
    ],
    dependent: [ ],
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
SP Cost: 15 + (2 × Skill Lv)
Catalyst: Skill Lv × Zeny Pouch
Duration: 180 Seconds
Requirement: Weaponry Research Lv: 3
Description: Removes P.DMG Variance, ensuring maximum damage while active, but drains SP every 2s.
[Lv. 1]: SP Drain: 17
[Lv. 2]: SP Drain: 19
[Lv. 3]: SP Drain: 21
[Lv. 4]: SP Drain: 23
[Lv. 5]: SP Drain: 25`,
    img: maximizePower,
  },
  {
    id: "hiltBinding",
    level: 0,
    dependencies: [
      { id: "adrenalineRush", minLevel: 3 },
      { id: "powerThrust", minLevel: 3 },
      { id: "weaponPerfection", minLevel: 3 },
      { id: "maximizePower", minLevel: 3 },
    ],
    dependent: [
    ],
    element: null,
    skillName: "Hilt Binding",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Passive
Type: Physical
Requirement: Adrenaline Rush Lv: 3, Power Thrust Lv: 3, Weapon Perfection Lv: 3, Maximize Power Lv: 3
Description: 
Increases duration of Maximize Power, Adrenaline Rush, Power Thrust and Weapon Perfection by:
- (20 + (20 × Skill Lv)) Seconds
- Grants Strength + (Skill Lv) for each active buff for the user (those four skills)
`,
    img: hiltBinding,
  },
  {
    id: "weaponryResearch",
    level: 0,
    dependencies: [],
    dependent: [ ],
    element: null,
    skillName: "Weaponry Research",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Passive
Type: Physical
Requirement: Hilt Binding Lv: 1
Description: Increases E.ATK and ACC. 
- Extra ATK + (2 × Skill Lv)
- Accuracy + (10 + Skill Lv)%

[Lv. 1]: E.ATK +2, ACC +2% 
[Lv. 2]: E.ATK +4, ACC +4% 
[Lv. 3]: E.ATK +6. ACC +6% 
[Lv. 4]: E.ATK +8. ACC +8% 
[Lv. 5]: E.ATK +10. ACC +10%
[Lv. 6]: E.ATK +12. ACC +12%
[Lv. 7]: E.ATK +14. ACC +14%
[Lv. 8]: E.ATK +16. ACC +16%
[Lv. 9]: E.ATK +18. ACC +18%
[Lv. 10]: E.ATK +20. ACC +20%`,
    img: weaponryResearch,
  },
];

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
