/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */

import skillImgNo from '../../img/no_img.png'; // заглушка
import meteorAssault from '../../img/icon_asx/icon_asx_3.png'; 
import soulDestroyer from '../../img/icon_asx/icon_asx_2.png'; 

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
Requirement: Dual Wielding Mastery Lv: 5, Katar Mastery Lv: 5
Description: Equipping Katars Class Weapons reduces the Attack Power of the weapon in 40%, this skill restores Attack Power that is reduced. Also increases the Critical rate when Dual Wielding Weapons.
[Lv 1]: Katar Penalty -4%, Dual Wielding Critical Rate +10%,
[Lv 2]: Katar Penalty -8%, Dual Wielding Critical Rate +20%,
[Lv 3]: Katar Penalty -12%, Dual Wielding Critical Rate +30%,
[Lv 4]: Katar Penalty -16%, Dual Wielding Critical Rate +40%,
[Lv 5]: Katar Penalty -20%, Dual Wielding Critical Rate +50%`,
    img: skillImgNo,
  },
  {
    id: "deadlyPoisonMastery",
    level: 0,
    dependencies: [
      { id: "poisonery", minLevel: 1 },
    ],
    dependent: [],
    element: null,
    skillName: "Deadly Poison Mastery",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Passive
Type: Physical
Requirement: Poisonery Lv: 1
Description: Grants advanced expertise with poisons, enabling the creation of strong poisons using the Poisonery skill. Learning this provides the necessary knowledge to utilize strong poisons, which offer positive effects to the user and a chance to poison targets with extraordinary toxins.
[Lv 1]: Strong Poisons Apply Chance: 4%, User Duration: 52 sec, Target Duration: 20 sec,
[Lv 2]: Strong Poisons Apply Chance: 8%, User Duration: 84 sec, Target Duration: 30 sec,
[Lv 3]: Strong Poisons Apply Chance: 12%, User Duration: 116 sec, Target Duration: 40 sec,
[Lv 4]: Strong Poisons Apply Chance: 16%, User Duration: 148 sec, Target Duration: 50 sec,
[Lv 5]: Strong Poisons Apply Chance: 20%, User Duration: 180 sec, Target Duration: 60 sec`,
    img: skillImgNo,
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
Type: Physical
Target: Self
Requirement: Dual Wielding Mastery Lv: 10, Cloaking Lv: 5, Poison Weapon Lv: 5
Description: Unleashes a powerful attack that damages all enemies in a 5x5 area around the caster, with a chance to cause statuses such as Stun, Blind, or Bleed. Requires dual wielding.
[Lv 1]: Atk 320%, Status Chance: 10%,
[Lv 2]: Atk 440%, Status Chance: 15%,
[Lv 3]: Atk 560%, Status Chance: 20%,
[Lv 4]: Atk 680%, Status Chance: 25%,
[Lv 5]: Atk 800%, Status Chance: 30%,
[Lv 6]: Atk 920%, Status Chance: 35%,
[Lv 7]: Atk 1040%, Status Chance: 40%,
[Lv 8]: Atk 1160%, Status Chance: 45%,
[Lv 9]: Atk 1280%, Status Chance: 50%,
[Lv 10]: Atk 1400%, Status Chance: 55%
Details: AfterCastActDelay set as ASPD + 220; CastTime and Fixed Cast Time of 500; Cooldown of 1000.
`,
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
Type: Magical
Target: Enemy
Range: 4 ~ 9
Requirement: Double Attack Lv: 5, Cloaking Lv: 3, Poison Weapon Lv: 5, Envenom Lv: 5
Description: Deals powerful Magical Poison Damage to a target. Damage scales with Weapon Attack and INT.
[Lv 1]: Matk 630%,
[Lv 2]: Matk 760%,
[Lv 3]: Matk 890%,
[Lv 4]: Matk 1020%,
[Lv 5]: Matk 1150%,
[Lv 6]: Matk 1280%,
[Lv 7]: Matk 1410%,
[Lv 8]: Matk 1540%,
[Lv 9]: Matk 1670%,
[Lv 10]: Matk 1800%
Details: AfterCastActDelay set as ASPD + 220; CastTime of 500 + (100 × Skill Lv); Fixed Cast Time: 500; Cooldown of 1500.
`,
    img: soulDestroyer,
  },
];


/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */
