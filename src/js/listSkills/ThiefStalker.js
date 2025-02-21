/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */

import skillImgNo from '../../img/no_img.png'; // заглушка

// список скилов Stalker
export const skillsStalker = [  
  {
    id: "counterInstinct",
    level: 0,
    dependencies: [
      { id: "oneHandedSwordMastery", minLevel: 2 },
    ],
    dependent: [],
    element: null,
    skillName: "Counter Instinct",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Self
Requirement: One-Handed Sword Mastery Lv: 3
Description: Deflects incoming attacks, reducing damage by half. If the attacker is using a Sword or Dagger, the reduced damage is reflected back to them. On monsters, reflects without weapon restriction. Cooldown of this skill decreases with each blocked attack. Only usable with daggers or swords.
[Lv 1]: Parry Chance: 90%, Duration: 5 seconds, Cooldown 15 seconds,
[Lv 2]: Parry Chance: 80%, Duration: 6 seconds, Cooldown 16 seconds,
[Lv 3]: Parry Chance: 70%, Duration: 8 seconds, Cooldown 18 seconds,
[Lv 4]: Parry Chance: 60%, Duration: 11 seconds, Cooldown 21 seconds,
[Lv 5]: Parry Chance: 50%, Duration: 15 seconds, Cooldown 25 seconds`,
    img: skillImgNo,
  },
  {
    id: "fullStrip",
    level: 0,
    dependencies: [
      { id: "helmStripping", minLevel: 1 },
      { id: "shieldStripping", minLevel: 1 },
      { id: "armorStripping", minLevel: 1 },
      { id: "weaponStripping", minLevel: 1 },
    ],
    dependent: [],
    element: null,
    skillName: "Full Strip",
    maxLevel: 1,
    inform: `Max Lv: 1
Skill Form: Active
Type: Physical
Target: Enemy
Range: 1
Requirement: Helm Stripping Lv: 2, Shield Stripping Lv: 2, Armor Stripping Lv: 2, Weapon Stripping Lv: 2
Description: Attempts to forcibly remove the equipped weapon, shield, armor and headgear of a single target, temporarily preventing them from equipping it again. Does not work against monsters. The success rate is influenced by the difference between the users and the targets Base Level. Each level of the target reduces the duration by 0.5%. Success Chance: 10% + 1% for every level learned in Divest Helm, Divest Shield, Divest Armor, and Divest Weapon, Duration: 15 seconds`,
    img: skillImgNo,
  },
  {
    id: "simulation",
    level: 0,
    dependencies: [
      { id: "plagiarism", minLevel: 9 },
    ],
    dependent: [],
    element: null,
    skillName: "Simulation",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Misc
Target: Self
Requirement: Plagiarism Lv: 10
Description: Adds +5 True ATK and MATK per level learned. Each basic attack has a chance to automatically cast a skill stolen by Plagiarism on the target. The chance and level of the auto-cast skill increase with the level of Simulation. Auto-casting skills have increased SP consumption, reducible by learned level of Simulation.
[Lv 1]: Auto-Cast Level: 3, Auto-Cast Chance: 24%, Auto-Cast SP Cost: +45%,
[Lv 2]: Auto-Cast Level: 3, Auto-Cast Chance: 23%, Auto-Cast SP Cost: +40%,
[Lv 3]: Auto-Cast Level: 4, Auto-Cast Chance: 22%, Auto-Cast SP Cost: +35%,
[Lv 4]: Auto-Cast Level: 4, Auto-Cast Chance: 21%, Auto-Cast SP Cost: +30%,
[Lv 5]: Auto-Cast Level: 5, Auto-Cast Chance: 20%, Auto-Cast SP Cost: +25%,
[Lv 6]: Auto-Cast Level: 5, Auto-Cast Chance: 19%, Auto-Cast SP Cost: +20%,
[Lv 7]: Auto-Cast Level: 6, Auto-Cast Chance: 18%, Auto-Cast SP Cost: +15%,
[Lv 8]: Auto-Cast Level: 6, Auto-Cast Chance: 17%, Auto-Cast SP Cost: +10%,
[Lv 9]: Auto-Cast Level: 7, Auto-Cast Chance: 16%, Auto-Cast SP Cost: +5%,
[Lv 10]: Auto-Cast Level: 7, Auto-Cast Chance: 15%, Auto-Cast SP Cost: +0%`,
    img: skillImgNo,
  },
  {
    id: "stealth",
    level: 0,
    dependencies: [
      { id: "hiding", minLevel: 4 },
      { id: "tunnelDrive", minLevel: 2 },
    ],
    dependent: [],
    element: null,
    skillName: "Stealth",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Misc
Target: Self
Requirement: Hiding Lv: 5, Tunnel Drive Lv: 3
Description: Enter a special Hiding status in which caster can move without being detected by all detecting skills. However, the caster will leave footprints and can be damaged by skills that target the ground. Ineffective against Insect, Devil and Boss monsters. After being hidden, gain STR, DEX and INT for 180 seconds.
[Lv 1]: Stats Bonus: 2%, 60% Move Speed, SP cost: 12 every 10 seconds,
[Lv 2]: Stats Bonus: 4%, 70% Move Speed, SP cost: 14 every 10 seconds,
[Lv 3]: Stats Bonus: 6%, 80% Move Speed, SP cost: 16 every 10 seconds,
[Lv 4]: Stats Bonus: 8%, 90% Move Speed, SP cost: 18 every 10 seconds,
[Lv 5]: Stats Bonus: 10%, 100% Move Speed, SP cost: 20 every 10 seconds`,
    img: skillImgNo,
  },
  {
    id: "tripleStrafe",
    level: 0,
    dependencies: [
      { id: "doubleStrafe", minLevel: 9 },
    ],
    dependent: [],
    element: null,
    skillName: "Triple Strafe",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
Range: 1
Requirement: Double Strafe Lv: 10
Description: Shoots three arrows quickly at the same target. Learning this skill allows Double Strafe to accumulate Strafe Points, up to 3 max. Spending Strafe Points in Triple Strafe reduces its cooldown by 2 second per point and boosts damage based on the users AGI.
[Lv 1]: Atk 216% x 3 Hits,
[Lv 2]: Atk 229% x 3 Hits,
[Lv 3]: Atk 242% x 3 Hits,
[Lv 4]: Atk 255% x 3 Hits,
[Lv 5]: Atk 268% x 3 Hits,
[Lv 6]: Atk 281% x 3 Hits,
[Lv 7]: Atk 294% x 3 Hits,
[Lv 8]: Atk 307% x 3 Hits,
[Lv 9]: Atk 320% x 3 Hits,
[Lv 10]: Atk 333% x 3 Hits`,
    img: skillImgNo,
  },
];


/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */
