/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */

import skillImgNo from '../../img/no_img.png'; // заглушка

// список скилов Rogue
export const skillsRogue = [ 
  {
    id: "oneHandedSwordMastery",
    level: 0,
    dependencies: [],
    dependent: [
      { id: "counterInstinct" },
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
    id: "vulturesEye",
    level: 0,
    dependencies: [
      { id: "throwStone", minLevel: 6 },
    ],
    dependent: [
      { id: "doubleStrafe" },
    ],
    element: null,
    skillName: "Vulture's Eye",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Passive
Type: Misc
Requirement: Throw Stone Lv: 7
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
    id: "doubleStrafe",
    level: 0,
    dependencies: [
      { id: "vulturesEye", minLevel: 4 },
    ],
    dependent: [
      { id: "tripleStrafe" },
    ],
    element: null,
    skillName: "Double Strafe",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
Range: Bow + Vulture's Eye Range
Requirement: Vulture's Eye Lv: 5
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
    id: "snatcher",
    level: 0,
    dependencies: [
      { id: "steal", minLevel: 0 },
    ],
    dependent: [      
      { id: "gashingBlow" },
      { id: "plagiarism" },
      { id: "helmStripping" },
    ],
    element: null,
    skillName: "Snatcher",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Passive
Type: Physical
Requirement: Steal Lv: 1
Description: Automatically steals items, from a monster while attacking it with, physical melee attacks. The success, rate of stealing items is affected by, the skill level of the Thief skill, , Steal and by this skill's level.
[Lv 1]: Steal Chance: 7%,
[Lv 2]: Steal Chance: 8%,
[Lv 3]: Steal Chance: 10%,
[Lv 4]: Steal Chance: 11%,
[Lv 5]: Steal Chance: 13%,
[Lv 6]: Steal Chance: 14%,
[Lv 7]: Steal Chance: 16%,
[Lv 8]: Steal Chance: 17%,
[Lv 9]: Steal Chance: 19%,
[Lv 10]: Steal Chance: 20%`,
    img: skillImgNo,
  },
  {
    id: "plagiarism",
    level: 0,
    dependencies: [
      { id: "steal", minLevel: 9 },
      { id: "snatcher", minLevel: 3 },
    ],
    dependent: [
      { id: "simulation" },
      { id: "gangsterParadise" },
    ],
    element: null,
    skillName: "Plagiarism",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Ally
Range: 9
Requirement: Steal Lv: 10, Snatcher Lv: 4
Description: Copies a skill from an ally, enemy, or monster by selecting from a list of eligible skills they have learned. The level of the copied skill matches the level learned by the target. It cannot exceed the Maximum level of this skill. Skills already possessed by the user, including those from equipment, cannot be copied.
[Lv 1]: Lv. 1 Able to memorize, Increase Atk Speed: 1%,
[Lv 2]: Lv. 2 Able to memorize, Increase Atk Speed: 2%,
[Lv 3]: Lv. 3 Able to memorize, Increase Atk Speed: 3%,
[Lv 4]: Lv. 4 Able to memorize, Increase Atk Speed: 4%,
[Lv 5]: Lv. 5 Able to memorize, Increase Atk Speed: 5%,
[Lv 6]: Lv. 6 Able to memorize, Increase Atk Speed: 6%,
[Lv 7]: Lv. 7 Able to memorize, Increase Atk Speed: 7%,
[Lv 8]: Lv. 8 Able to memorize, Increase Atk Speed: 8%,
[Lv 9]: Lv. 9 Able to memorize, Increase Atk Speed: 9%,
[Lv 10]: Lv.10 Able to memorize, Increase Atk Speed: 10%`,
    img: skillImgNo,
  },
  {
    id: "gangsterParadise",
    level: 0,
    dependencies: [
      { id: "plagiarism", minLevel: 4 },
    ],
    dependent: [
      { id: "gangland" },  
    ],
    element: null,
    skillName: "Gangster Paradise",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Passive
Type: Misc
Requirement: Plagiarism Lv: 5
Description: When two or more Rogues with this skill sit next to each other, and at least one knows the skill, monsters will not attack them. This effect extends to any party member sitting next to the Rogues but does not affect boss monsters. Also if a Rogue is the party leader, they can grant benefits to a member. Skill level determines which benefit is granted, and the number of party members influences the benefit's value. Rogues who have learned Gangster Paradise count as two for increasing the bonus.
[Lv 1]: +Hard Def% and +Hard Mdef%,
[Lv 2]: Reduces V.Cast Time% and After Cast Delay%,
[Lv 3]: +HP% and +SP%,
[Lv 4]: +Hit Rate% and +Critical Rate%,
[Lv 5]: +Atk% and +MAtk%`,
    img: skillImgNo,
  },
  {
    id: "gangland",
    level: 0,
    dependencies: [
      { id: "gangsterParadise", minLevel: 4 },
    ],
    dependent: [],
    element: null,
    skillName: "Gangland",
    maxLevel: 1,
    inform: `Max Lv: 1
Skill Form: Passive
Type: Misc
Requirement: Gangster Paradise Lv: 5
Description: Increases the bonuses granted by Gangster Paradise for the user by +5%.`,
    img: skillImgNo,
  },
  {
    id: "gashingBlow",
    level: 0,
    dependencies: [
      { id: "snatcher", minLevel: 3 },
    ],
    dependent: [      
      { id: "backStab" },
    ],
    element: null,
    skillName: "Gashing Blow",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
Range: 1
Requirement: Snatcher Lv: 4
Description: Delivers a powerful strike that has a chance to apply the Gashing Wound effect on the target. Attacking targets affected by Gashing Wound grants a chance to cause Bleeding. Gashing Wound also increases the chance to inflict negative effects on the target and boosts the damage of Gashing Blow by 50% plus an additional 15% for each negative effect on the target.
[Lv 1]: Atk 330%, Gashing Wound Chance: 12%,
[Lv 2]: Atk 360%, Gashing Wound Chance: 14%,
[Lv 3]: Atk 390%, Gashing Wound Chance: 16%,
[Lv 4]: Atk 420%, Gashing Wound Chance: 18%,
[Lv 5]: Atk 450%, Gashing Wound Chance: 20%,
[Lv 6]: Atk 480%, Gashing Wound Chance: 22%,
[Lv 7]: Atk 510%, Gashing Wound Chance: 24%,
[Lv 8]: Atk 540%, Gashing Wound Chance: 26%,
[Lv 9]: Atk 570%, Gashing Wound Chance: 28%,
[Lv 10]: Atk 600%, Gashing Wound Chance: 30%`,
    img: skillImgNo,
  },
  {
    id: "backStab",
    level: 0,
    dependencies: [
      { id: "gashingBlow", minLevel: 3 },
    ],
    dependent: [
      { id: "raid" },
    ],
    element: null,
    skillName: "Back Stab",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
Range: 1
Requirement: Gashing Blow Lv: 4
Description: Attacks the target from behind, causing physical damage. The skill teleports the caster immediately behind the enemy. When used with a Dagger class weapon, the damage is doubled. When in Hiding status, this skill deals additional damage equal to the casters STR.
[Lv 1]: Atk 330%,
[Lv 2]: Atk 360%,
[Lv 3]: Atk 390%,
[Lv 4]: Atk 420%,
[Lv 5]: Atk 450%,
[Lv 6]: Atk 480%,
[Lv 7]: Atk 510%,
[Lv 8]: Atk 540%,
[Lv 9]: Atk 570%,
[Lv 10]: Atk 600%`,
    img: skillImgNo,
  },
  {
    id: "tunnelDrive",
    level: 0,
    dependencies: [
      { id: "hiding", minLevel: 0 },
    ],
    dependent: [
      { id: "stealth" },
      { id: "raid" },
    ],
    element: null,
    skillName: "Tunnel Drive",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Passive
Type: Misc
Requirement: Hiding Lv: 1
Description: Enables Movement while in, Hiding status. Movement Speed is slower, than normal walk.
[Lv 1]: Movement Speed: 26%,
[Lv 2]: Movement Speed: 32%,
[Lv 3]: Movement Speed: 38%,
[Lv 4]: Movement Speed: 44%,
[Lv 5]: Movement Speed: 50%`,
    img: skillImgNo,
  },
  {
    id: "raid",
    level: 0,
    dependencies: [
      { id: "sprinkleSand", minLevel: 4 },
      { id: "backStab", minLevel: 1 },
      { id: "tunnelDrive", minLevel: 1 },
    ],
    dependent: [
      { id: "intimidate" },
    ],
    element: null,
    skillName: "Raid",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Self
Requirement: Sprinkle Sand Lv: 5, Back Stab Lv: 2, Tunnel Drive Lv: 2
Description: Execute a sneak attack on nearby enemies within a [7*7] area. If used from a hidden state, this ability has no cooldown, and affected enemies receives amplified damage for a short period. Cooldown of this ability can be reduced based on the level of [Hiding] Skill. Amplified damage has half for Boss Protocol monsters.
[Lv 1]: Atk 200%, Amplified Damage +6%, Duration: 1 Second,
[Lv 2]: Atk 350%, Amplified Damage +12%, Duration: 2 Second,
[Lv 3]: Atk 500%, Amplified Damage +18%, Duration: 3 Second,
[Lv 4]: Atk 650%, Amplified Damage +24%, Duration: 4 Second,
[Lv 5]: Atk 800%, Amplified Damage +30%, Duration: 5 Second`,
    img: skillImgNo,
  },
  {
    id: "intimidate",
    level: 0,
    dependencies: [
      { id: "raid", minLevel: 4 },
    ],
    dependent: [],
    element: null,
    skillName: "Intimidate",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Enemy
Range: 1
Requirement: Raid Lv: 5
Description: Strikes a target and, forcibly teleport it with the caster to, a random location on the same map. This skill's success rate is affected by, the level of the skill. Boss monsters, are unaffected by Intimidate.
[Lv 1]: ATK 130%,
[Lv 2]: ATK 160%,
[Lv 3]: ATK 190%,
[Lv 4]: ATK 220%,
[Lv 5]: ATK 250%`,
    img: skillImgNo,
  },
  {
    id: "helmStripping",
    level: 0,
    dependencies: [
      { id: "snatcher", minLevel: 4 },
    ],
    dependent: [
      { id: "fullStrip" },
      { id: "shieldStripping" },
    ],
    element: null,
    skillName: "Helm Stripping",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Enemy
Range: 1
Requirement: Snatcher Lv: 5
Description: Attempts to forcibly remove the equipped helmet of a single target, temporarily preventing them from equipping it again for 60 seconds. The success rate is influenced by the difference between the users and the targets Base Level. Each level of the target reduces the duration by 0.5%. Against monsters, this will decrease their total MATK temporarily. Has double base chance of success.
[Lv 1]: Success Chance: 9%, Monster MATK -5%,
[Lv 2]: Success Chance: 13%, Monster MATK -10%,
[Lv 3]: Success Chance: 17%, Monster MATK -15%,
[Lv 4]: Success Chance: 21%, Monster MATK -20%,
[Lv 5]: Success Chance: 25%, Monster MATK -25%`,
    img: skillImgNo,
  },
  {
    id: "shieldStripping",
    level: 0,
    dependencies: [
      { id: "helmStripping", minLevel: 1 },
    ],
    dependent: [
      { id: "fullStrip" },
      { id: "armorStripping" },
    ],
    element: null,
    skillName: "Shield Stripping",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Enemy
Range: 1
Requirement: Helm Stripping Lv: 2
Description: Attempts to forcibly remove the equipped shield of a single target, temporarily preventing them from equipping it again for 60 seconds. The success rate is influenced by the difference between the users and the targets Base Level. Each level of the target reduces the duration by 0.5%. Against monsters, this will decrease their total MDEF temporarily. Has double base chance of success.
[Lv 1]: Success Chance: 9%, Monster MDEF -5%,
[Lv 2]: Success Chance: 13%, Monster MDEF -10%,
[Lv 3]: Success Chance: 17%, Monster MDEF -15%,
[Lv 4]: Success Chance: 21%, Monster MDEF -20%,
[Lv 5]: Success Chance: 25%, Monster MDEF -25%`,
    img: skillImgNo,
  },
  {
    id: "armorStripping",
    level: 0,
    dependencies: [
      { id: "shieldStripping", minLevel: 1 },
    ],
    dependent: [
      { id: "fullStrip" },
      { id: "weaponStripping" },
    ],
    element: null,
    skillName: "Armor Stripping",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Enemy
Range: 1
Requirement: Shield Stripping Lv: 2
Description: Attempts to forcibly remove the equipped armor of a single target, temporarily preventing them from equipping it again for 60 seconds. The success rate is influenced by the difference between the users and the targets Base Level. Each level of the target reduces the duration by 0.5%. Against monsters, this will decrease their total DEF temporarily. Has double base chance of success.
[Lv 1]: Success Chance: 9%, Monster DEF -5%,
[Lv 2]: Success Chance: 13%, Monster DEF -10%,
[Lv 3]: Success Chance: 17%, Monster DEF -15%,
[Lv 4]: Success Chance: 21%, Monster DEF -20%,
[Lv 5]: Success Chance: 25%, Monster DEF -25%`,
    img: skillImgNo,
  },
  {
    id: "weaponStripping",
    level: 0,
    dependencies: [
      { id: "armorStripping", minLevel: 1 },
    ],
    dependent: [
      { id: "fullStrip" },
    ],
    element: null,
    skillName: "Weapon Stripping",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Enemy
Range: 1
Requirement: Armor Stripping Lv: 2
Description: Attempts to forcibly remove the equipped weapon of a single target, temporarily preventing them from equipping it again for 60 seconds. The success rate is influenced by the difference between the users and the targets Base Level. Each level of the target reduces the duration by 0.5%. Against monsters, this will decrease their total ATK temporarily. Has double base chance of success.
[Lv 1]: Success Chance: 9%, Monster ATK -5%,
[Lv 2]: Success Chance: 13%, Monster ATK -10%,
[Lv 3]: Success Chance: 17%, Monster ATK -15%,
[Lv 4]: Success Chance: 21%, Monster ATK -20%,
[Lv 5]: Success Chance: 25%, Monster ATK -25%`,
    img: skillImgNo,
  },
];


/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */
