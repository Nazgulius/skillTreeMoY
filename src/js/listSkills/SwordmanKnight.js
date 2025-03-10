/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */

import skillImgNo from '../../img/no_img.png'; // заглушка
import pierce from '../../img/icon_knt/icon_knt_1.gif';
import brandishSpear from '../../img/icon_knt/icon_knt_2.gif';
import spearStab from '../../img/icon_knt/icon_knt_3.gif';
import spearBoomerang from '../../img/icon_knt/icon_knt_4.gif';
import swordQuicken from '../../img/icon_knt/icon_knt_5.gif';
import counterAttack from '../../img/icon_knt/icon_knt_6.gif';
import bowlingBash from '../../img/icon_knt/icon_knt_7.gif';
import riding from '../../img/icon_knt/icon_knt_8.gif';
import cavalryMastery from '../../img/icon_knt/icon_knt_9.gif';
import twoHandedSwordMastery from '../../img/icon_knt/icon_knt_10.gif';
import spearQuicken from '../../img/icon_knt/icon_knt_11.png';
import dashingBash from '../../img/icon_knt/icon_knt_12.png';

// список скилов Knight
export const skillsKnight = [  
  {
    id: "twoHandedSwordMastery",
    level: 0,
    dependencies: [
      { id: "oneHandedSwordMastery", minLevel: 5 },      
    ],
    dependent: [
      { id: "parry" },
    ],
    element: null,
    skillName: "Two-Handed Sword Mastery",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Passive
Type: Physical
Requirement: One-Handed Sword Mastery Lv: 5
Description: Increase Attack with Two-Handed Sword Weapons. When [Lv 10], it increases Crital Rate in +6. Attack bonus granted by this skill is of the Equipment type.
[Lv 1]: Atk +4,
[Lv 2]: Atk +8,
[Lv 3]: Atk +12,
[Lv 4]: Atk +16,
[Lv 5]: Atk +20,
[Lv 6]: Atk +24,
[Lv 7]: Atk +28,
[Lv 8]: Atk +32,
[Lv 9]: Atk +36,
[Lv 10]: Atk +40`,
    img: twoHandedSwordMastery,
  },
  {
    id: "counterAttack",
    level: 0,
    dependencies: [
      { id: "swordQuicken", minLevel: 5 },      
    ],
    dependent: [
      { id: "bowlingBash" },
      { id: "dashingBash" },
      { id: "parry" },
    ],
    element: null,
    skillName: "Counter Attack",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Self
Requirement: Sword Quicken Lv: 5
Description: Requires Swords Class Weapon. If an opponent physically attacks a player casting Auto Counter while facing it, the attack will be blocked and the caster will perform one Critical attack on them. Weapon Attack plus Weapon Weight increase the attack multiplier for this skill.
[Lv 1]: Auto Counter Duration: 0.4 sec,
[Lv 2]: Auto Counter Duration: 0.6 sec,
[Lv 3]: Auto Counter Duration: 0.8 sec,
[Lv 4]: Auto Counter Duration: 1.0 sec,
[Lv 5]: Auto Counter Duration: 1.2 sec`,
    img: counterAttack,
  },
  {
    id: "bowlingBash",
    level: 0,
    dependencies: [
      { id: "swordQuicken", minLevel: 10 },
      { id: "counterAttack", minLevel: 5 },
    ],
    dependent: [],
    element: null,
    skillName: "Bowling Bash",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
Range: 2
Requirement: Sword Quicken Lv: 10, Counter Attack Lv: 5
Description: Requires a Sword-class weapon. Deals physical damage to all enemies within range and pushes them backward. The number of hits depends on the weapon type and the number of targets, up to a maximum of four hits. For every level of Bash learned, the skill damage increases by 10%. Additionally, every 5 Base Levels above 50 increase the skill damage by 10%. One-Handed Sword: 2 ~ 3 targets: 2 hits, 4 ~ 5 targets: 3 hits, 6+ targets: 4 hits. Two-Handed Sword: 1 target: 2 hits, 2 ~ 3 targets: 3 hits, 4+ targets: 4 hits.
[Lv 1]: Atk 110% x Hits,
[Lv 2]: Atk 120% x Hits,
[Lv 3]: Atk 130% x Hits,
[Lv 4]: Atk 140% x Hits,
[Lv 5]: Atk 150% x Hits,
[Lv 6]: Atk 160% x Hits,
[Lv 7]: Atk 170% x Hits,
[Lv 8]: Atk 180% x Hits,
[Lv 9]: Atk 190% x Hits,
[Lv 10]: Atk 200% x Hits
Details: AfterCastActDelay set as ASPD + 220; CastTime: 200; Fixed Cast Time: 400; Cooldown: 1000.
`,
    img: bowlingBash,
  },
  {
    id: "dashingBash",
    level: 0,
    dependencies: [
      { id: "counterAttack", minLevel: 5 },
    ],
    dependent: [],
    element: null,
    skillName: "Dashing Bash",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Enemy
Range: 6 ~ 10
Requirement: Counter Attack Lv: 5
Description: Requires Swords Class Weapon. Quickly approach and attack a distant target. Movement Speed multiplies the skill's damage, and can even double it.
[Lv 1]: Atk 200%, Range: 6,
[Lv 2]: Atk 300%, Range: 7,
[Lv 3]: Atk 400%, Range: 8,
[Lv 4]: Atk 500%, Range: 9,
[Lv 5]: Atk 600%, Range: 10
Details: AfterCastActDelay set as ASPD + 220; Fixed Cast Time: 400.`,
    img: dashingBash,
  },
  {
    id: "swordQuicken",
    level: 0,
    dependencies: [
      { id: "oneHandedSwordMastery", minLevel: 5 },      
    ],
    dependent: [
      { id: "auraBlade" },
      { id: "bowlingBash" },
      { id: "counterAttack" },
    ],
    element: null,
    skillName: "Sword Quicken",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Self
Requirement: One-Handed Sword Mastery Lv: 5
Description: Requires Swords Class Weapon. Temporarily boosts Attack Speed, Critcal and Hit. This effect is also knocked off by Decrease AGI and Quagmire.
[Lv 1]: Duration: 84sec, Critcal +1, Hit +2,
[Lv 2]: Duration: 108sec, Critcal +2, Hit +4,
[Lv 3]: Duration: 132sec, Critcal +3, Hit +6,
[Lv 4]: Duration: 156sec, Critcal +4, Hit +8,
[Lv 5]: Duration: 180sec, Critcal +5, Hit +10,
[Lv 6]: Duration: 204sec, Critcal +6, Hit +12,
[Lv 7]: Duration: 228sec, Critcal +7, Hit +14,
[Lv 8]: Duration: 252sec, Critcal +8, Hit +16,
[Lv 9]: Duration: 276sec, Critcal +9, Hit +18,
[Lv 10]: Duration: 300sec, Critcal +10, Hit +20`,
    img: swordQuicken,
  },
  
  {
    id: "riding",
    level: 0,
    dependencies: [
      { id: "endure", minLevel: 1 },
    ],
    dependent: [
      { id: "cavalryMastery" },
    ],
    element: null,
    skillName: "Riding",
    maxLevel: 1,
    inform: `Max Lv: 1
Skill Form: Passive
Type: Physical
Requirement: Endure Lv: 1
Description: Enables the user to ride a Peco Peco. Increases Weight Limit by 750 but reduces ASPD and Flee by 50% while mounted. Riding affects Weapon Size Modifiers as follows:, One-Handed Sword: Small 100%, Medium 125%, Large 100%, Two-Handed Sword: Small 100%, Medium 100%, Large 125%, Spear: Small 100%, Medium 100%, Large 125%, PecoPeco Breeder.`,
    img: riding,
  },
  {
    id: "cavalryMastery",
    level: 0,
    dependencies: [
      { id: "riding", minLevel: 1 },
    ],
    dependent: [],
    element: null,
    skillName: "Cavalry Mastery",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Passive
Type: Physical
Requirement: Riding Lv: 1
Description: Reduces the ASPD and Flee penalty while mounted.
[Lv 1]: -8% ASPD and Flee penalty.
[Lv 2]: -16% ASPD and Flee penalty.
[Lv 3]: -24% ASPD and Flee penalty.
[Lv 4]: -32% ASPD and Flee penalty.
[Lv 5]: -40% ASPD and Flee penalty.`,
    img: cavalryMastery,
  },
  {
    id: "pierce",
    level: 0,
    dependencies: [
      { id: "oneSpearMastery", minLevel: 5 },
    ],
    dependent: [
      { id: "spearStab" },
    ],
    element: null,
    skillName: "Pierce",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
Range: Weapon
Requirement: One-Spear Mastery Lv: 5
Description: Requires Spear Class Weapon. Thrusts the equipped spear into a single target to deal Ranged Physical Damage. Each successful hit with this skill grants Stabbing stacks for 60 seconds, which can accumulate up to 50 times. Stabbing stacks increases the number of hits and damage dealt. Stabbing stacks: 0 to 10 stacks result in 1 hit, 11 to 30 stacks result in 2 hits, and 31 to 50 stacks result in 3 hits. Also, every 10 stacks gain +2% Aspd.
[Lv 1]: Atk 110% x Hits,
[Lv 2]: Atk 120% x Hits,
[Lv 3]: Atk 130% x Hits,
[Lv 4]: Atk 140% x Hits,
[Lv 5]: Atk 150% x Hits,
[Lv 6]: Atk 160% x Hits,
[Lv 7]: Atk 170% x Hits,
[Lv 8]: Atk 180% x Hits,
[Lv 9]: Atk 190% x Hits,
[Lv 10]: Atk 200% x Hits
New calculation: ATK% = (20 × Skill Lv) + (Stabbing Stacks × 2).`,
    img: pierce,
  },
  
  {
    id: "spearBoomerang",
    level: 0,
    dependencies: [
      { id: "spearStab", minLevel: 3 },      
    ],
    dependent: [
      { id: "spiralPierce" },
    ],
    element: null,
    skillName: "Spear Boomerang",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
Range: 6 ~ 10
Requirement: Spear Stab Lv: 3
Description: Requires Spear Class Weapon. Throws a spear at a target like a boomerang to inflict Ranged Physical Damage. Damage is greatly affected by Weight of equipped weapon. If used against targets with reduced Move Speed, it causes Immobilization for 0.5 seconds. Immobilized status is applied to the target even if it is immune to immobilizations.
[Lv 1]: Atk 135% + 10% of Weapon Weight,
[Lv 2]: Atk 170% + 20% of Weapon Weight,
[Lv 3]: Atk 205% + 30% of Weapon Weight,
[Lv 4]: Atk 240% + 40% of Weapon Weight,
[Lv 5]: Atk 275% + 50% of Weapon Weight,
[Lv 6]: Atk 310% + 60% of Weapon Weight,
[Lv 7]: Atk 345% + 70% of Weapon Weight,
[Lv 8]: Atk 380% + 80% of Weapon Weight,
[Lv 9]: Atk 415% + 90% of Weapon Weight,
[Lv 10]: Atk 450% + 100% of Weapon Weight`,
    img: spearBoomerang,
  },
  {
    id: "spearQuicken",
    level: 0,
    dependencies: [
      { id: "oneSpearMastery", minLevel: 5 },      
    ],
    dependent: [
      { id: "concentration" },
    ],
    element: null,
    skillName: "Spear Quicken",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Self
Requirement: One-Spear Mastery Lv: 5
Description: Requires Spear Class Weapon. Temporarily boosts Attack speed, Critcal and Hit. This effect is also knocked off by Decrease AGI and Quagmire.
[Lv 1]: Duration: 84sec, Critcal +1, Hit +2,
[Lv 2]: Duration: 108sec, Critcal +2, Hit +4,
[Lv 3]: Duration: 132sec, Critcal +3, Hit +6,
[Lv 4]: Duration: 156sec, Critcal +4, Hit +8,
[Lv 5]: Duration: 180sec, Critcal +5, Hit +10,
[Lv 6]: Duration: 204sec, Critcal +6, Hit +12,
[Lv 7]: Duration: 228sec, Critcal +7, Hit +14,
[Lv 8]: Duration: 252sec, Critcal +8, Hit +16,
[Lv 9]: Duration: 276sec, Critcal +9, Hit +18,
[Lv 10]: Duration: 300sec, Critcal +10, Hit +20`,
    img: spearQuicken,
  },
  {
    id: "spearStab",
    level: 0,
    dependencies: [
      { id: "pierce", minLevel: 5 },      
    ],
    dependent: [
      { id: "brandishSpear" },
      { id: "spearBoomerang" },
    ],
    element: null,
    skillName: "Spear Stab",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Enemy
Range: 4
Requirement: Pierce Lv: 5
Description: Requires Spear Class Weapon. Thrusts the equipped spear against a single target to deal Ranged Physical Damage, knockback it and reducing its Move Speed by 15% for 8 seconds. If the target collides with any obstacle, there is a 12% chance per skill level of being Stunned. Slow caused by this skill works on any type of monster.
[Lv 1]: Atk 180%, Knockback: 5 cells,
[Lv 2]: Atk 260%, Knockback: 6 cells,
[Lv 3]: Atk 340%, Knockback: 7 cells,
[Lv 4]: Atk 420%, Knockback: 8 cells,
[Lv 5]: Atk 500%, Knockback: 9 cells`,
    img: spearStab,
  },
  {
    id: "brandishSpear",
    level: 0,
    dependencies: [
      { id: "spearStab", minLevel: 5 },      
    ],
    dependent: [
      { id: "jointBeat" },
    ],
    element: null,
    skillName: "Brandish Spear",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
Range: 3
Requirement: Spear Stab Lv: 5
Description: Requires Spear Class Weapon. Swings the equipped spear forward to a single target to inflict Ranged Physical Damage to all enemies in front of the user. Every 30 VIT increases the SkillRatio by 1% per Base Level. The player cannot change weapons during this time.
[Lv 1]: Atk 130% + VIT and B. Level Bonus,
[Lv 2]: Atk 160% + VIT and B. Level Bonus,
[Lv 3]: Atk 190% + VIT and B. Level Bonus,
[Lv 4]: Atk 220% + VIT and B. Level Bonus,
[Lv 5]: Atk 250% + VIT and B. Level Bonus,
[Lv 6]: Atk 280% + VIT and B. Level Bonus,
[Lv 7]: Atk 310% + VIT and B. Level Bonus,
[Lv 8]: Atk 340% + VIT and B. Level Bonus,
[Lv 9]: Atk 370% + VIT and B. Level Bonus,
[Lv 10]: Atk 400% + VIT and B. Level Bonus
Details: AfterCastActDelay set as ASPD + 220; Note: Has Hit -4.`,
    img: brandishSpear,
  },
];


/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */
