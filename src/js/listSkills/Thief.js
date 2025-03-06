/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */

import skillImgNo from '../../img/no_img.png'; // заглушка
import doubleAttack from '../../img/icon_thf/icon_thf_1.png';
import detoxify from '../../img/icon_thf/icon_thf_2.png';
import envenom from '../../img/icon_thf/icon_thf_3.png';
import hiding from '../../img/icon_thf/icon_thf_4.png';
import improveDodge from '../../img/icon_thf/icon_thf_5.png';
import steal from '../../img/icon_thf/icon_thf_6.png';

// список скилов Thief
export const skillsThief = [    
  {
    id: "improveDodge",
    level: 0,
    dependencies: [],
    dependent: [],
    element: null,
    skillName: "Improve Dodge",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Passive
Type: Physical
Requirement: None
Description: Increases FLEE and Movement Speed.
[Lv 1]: FLEE +3, Movement Speed: +1%,
[Lv 2]: FLEE +6, Movement Speed: +2%,
[Lv 3]: FLEE +9, Movement Speed: +3%,
[Lv 4]: FLEE +12, Movement Speed: +4%,
[Lv 5]: FLEE +15, Movement Speed: +5%,
[Lv 6]: FLEE +18, Movement Speed: +6%,
[Lv 7]: FLEE +21, Movement Speed: +7%,
[Lv 8]: FLEE +24, Movement Speed: +8%,
[Lv 9]: FLEE +27, Movement Speed: +9%,
[Lv 10]: FLEE +30, Movement Speed: +10%`,
    img: improveDodge,
  },
  {
    id: "doubleAttack",
    level: 0,
    dependencies: [],
    dependent: [
      { id: "soulDestroyer" },
    ],
    element: null,
    skillName: "Double Attack",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Passive
Type: Physical
Range: 1
Requirement: None
Description: Grants a chance to inflict two hits instead of one when attacking with Dagger class weapons. Allows the use of Double Attack with bows at the level learned of Vulture Eye and with swords at the level learned of Sword Mastery.
[Lv 1]: 7% chance,
[Lv 2]: 14% chance,
[Lv 3]: 21% chance,
[Lv 4]: 28% chance,
[Lv 5]: 35% chance,
[Lv 6]: 42% chance,
[Lv 7]: 49% chance,
[Lv 8]: 56% chance,
[Lv 9]: 63% chance,
[Lv 10]: 70% chance`,
    img: doubleAttack,
  },
  {
    id: "envenom",
    level: 0,
    dependencies: [],
    dependent: [
      { id: "detoxify" },
      { id: "soulDestroyer" },
      { id: "poisonWeapon" },
      { id: "poisonery" },
    ],
    element: null,
    skillName: "Envenom",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Enemy
Range: 2
**Requirement:*Description: Unleash a toxic assault with Poison elemental magic damage on your target, with a chance to inflict Poison status. Each level increases chance to poison the target. Every Base Level increases Skill Ratio by 3%.
[Lv 1]: MAtk 120%, Poison Chance: 14%,
[Lv 2]: MAtk 140%, Poison Chance: 18%,
[Lv 3]: MAtk 160%, Poison Chance: 22%,
[Lv 4]: MAtk 180%, Poison Chance: 26%,
[Lv 5]: MAtk 200%, Poison Chance: 30%,
[Lv 6]: MAtk 220%, Poison Chance: 34%,
[Lv 7]: MAtk 240%, Poison Chance: 38%,
[Lv 8]: MAtk 260%, Poison Chance: 42%,
[Lv 9]: MAtk 280%, Poison Chance: 46%,
[Lv 10]: MAtk 300%, Poison Chance: 50%`,
    img: envenom,
  },
  {
    id: "detoxify",
    level: 0,
    dependencies: [
      { id: "envenom", minLevel: 3 },
    ],
    dependent: [
      { id: "poisonery" },
    ],
    element: null,
    skillName: "Detoxify",
    maxLevel: 1,
    inform: `Max Lv: 1
Skill Form: Active
Type: Physical
Target: Ally
Range: 9
Requirement: Envenom Lv: 3
Description: Attempts to cleanse a single target from the Poison status. If successful, it grants a temporary boost to Poison status resistance by 20%. Caster INT and Base Level, target VIT and Base Level increases chance of cleanse. This skill is initially learned at level 1, with higher levels unlocked through special items.
[Lv 1]: Resistance duration: 10 seconds. Cooldown: 3 seconds,
[Lv 2]: Resistance duration: 20 seconds. Cooldown: 2.5 seconds,
[Lv 3]: Resistance duration: 30 seconds. Cooldown: 2 seconds,
[Lv 4]: Resistance duration: 40 seconds. Cooldown: 1.5 seconds,
[Lv 5]: Resistance duration: 50 seconds. Cooldown: 1 seconds`,
    img: detoxify,
  },
  {
    id: "steal",
    level: 0,
    dependencies: [],
    dependent: [
      { id: "hiding" },
      { id: "plagiarism" },
      { id: "snatcher" },
    ],
    element: null,
    skillName: "Steal",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
Range: 1
Requirement: None
Description: Steals an item from a specified target. If target's DEX is higher than the caster, the success rate of stealing an item is decreased. This skill can't be used on Boss monsters and Players.
[Lv 1]: 8% Base Chance,
[Lv 2]: 14% Base Chance,
[Lv 3]: 20% Base Chance,
[Lv 4]: 26% Base Chance,
[Lv 5]: 32% Base Chance,
[Lv 6]: 38% Base Chance,
[Lv 7]: 44% Base Chance,
[Lv 8]: 50% Base Chance,
[Lv 9]: 56% Base Chance,
[Lv 10]: 62% Base Chance`,
    img: steal,
  },
  {
    id: "hiding",
    level: 0,
    dependencies: [
      { id: "steal", minLevel: 4 },
    ],
    dependent: [
      { id: "cloaking" },
      { id: "stealth" },
      { id: "tunnelDrive" },
    ],
    element: null,
    skillName: "Hiding",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Misc
Target: Self
Range: 1
Requirement: Steal Lv: 4
Description: Burrow underground to evade enemy attacks. The hidden status can be disrupted by detection skills, and certain enemies, like Insect, Demon, and Boss Protocol monsters, can still detect you. The skill can be canceled by using it again. SP is gradually drained while hiding.
[Lv 1]: SP Drain: 1 SP every 1 seconds. After-cast delay: 1 second,
[Lv 2]: SP Drain: 1 SP every 2 seconds. After-cast delay: 0.9 seconds,
[Lv 3]: SP Drain: 1 SP every 3 seconds. After-cast delay: 0.8 seconds,
[Lv 4]: SP Drain: 1 SP every 4 seconds. After-cast delay: 0.7 seconds,
[Lv 5]: SP Drain: 1 SP every 5 seconds. After-cast delay: 0.6 seconds,
[Lv 6]: SP Drain: 1 SP every 6 seconds. After-cast delay: 0.5 seconds,
[Lv 7]: SP Drain: 1 SP every 7 seconds. After-cast delay: 0.4 seconds,
[Lv 8]: SP Drain: 1 SP every 8 seconds. After-cast delay: 0.3 seconds,
[Lv 9]: SP Drain: 1 SP every 9 seconds. After-cast delay: 0.2 seconds,
[Lv 10]: SP Drain: 1 SP every 10 second. After-cast delay: 0.1 seconds`,
    img: hiding,
  },
  {
    id: "sprinkleSand",
    level: 0,
    dependencies: [],
    dependent: [
      { id: "raid" },
    ],
    element: null,
    skillName: "Sprinkle Sand",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
Range: 3
Requirement: None
Description: Kick up a cloud of sand, dealing Earth elemental damage to enemies in a [3x3] area and potentially leaving them Blind.
[Lv 1]: Atk 120%,
[Lv 2]: Atk 140%,
[Lv 3]: Atk 160%,
[Lv 4]: Atk 180%,
[Lv 5]: Atk 200%,
[Lv 6]: Atk 220%,
[Lv 7]: Atk 240%,
[Lv 8]: Atk 260%,
[Lv 9]: Atk 280%,
[Lv 10]: Atk 300%
Details: AfterCastActDelay set as ASPD; Cooldown of 1000.`,
    img: skillImgNo,
  },
  
  {
    id: "throwStone",
    level: 0,
    dependencies: [],
    dependent: [
      { id: "vulturesEye" },
    ],
    element: null,
    skillName: "Throw Stone",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
Range: 7
Requirement: None
Description: Flings a stone at a single target, dealing damage that ignores defense and has a chance to Stun the target. Your STR increases Skill Ratio. Stunned targets take 30% more damage.
[Lv 1]: Atk 110 + STR%, Stun chance: 13%,
[Lv 2]: Atk 120 + STR%, Stun chance: 16%,
[Lv 3]: Atk 130 + STR%, Stun chance: 19%,
[Lv 4]: Atk 140 + STR%, Stun chance: 22%,
[Lv 5]: Atk 150 + STR%, Stun chance: 25%,
[Lv 6]: Atk 160 + STR%, Stun chance: 28%,
[Lv 7]: Atk 170 + STR%, Stun chance: 31%,
[Lv 8]: Atk 180 + STR%, Stun chance: 34%,
[Lv 9]: Atk 190 + STR%, Stun chance: 37%,
[Lv 10]: Atk 200 + STR%, Stun chance: 40%`,
    img: skillImgNo,
  },
];


/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */
