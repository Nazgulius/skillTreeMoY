/*  author Chalykh Maksim 
  # data 10.02.2025 
  # email: chalyh.maksim.88@mail.ru */

import skillImgNo from '../../img/no_img.png'; // заглушка

// список скилов Priest
export const skillsPriest = [  
  {
    id: "aquaBenedicta",
    level: 0,
    dependencies: [],
    dependent: [
      { id: "bSSacramenti" },
      { id: "magnusExorcismus" },
    ],
    element: null,
    skillName: "Aqua Benedicta",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Self
Requirement: None
Description: Creates 1 Holy Water with 1 Empty Bottle while standing in water. The quantity of Holy Water crafted receives an additional bonus based on Base Level, Job Level, and all attributes, with VIT being the most influential. The relevance of attributes increases exponentially as they grow. The skill level affects the efficiency of the additional production. Regardless of the skill level, the additional production varies.
[Lv 1]: No Additional Bonus,
[Lv 2]: Additional Efficiency -75%,
[Lv 3]: Additional Efficiency -50%,
[Lv 4]: Additional Efficiency -25%,
[Lv 5]: Full Efficiency`,
    img: skillImgNo,
  },
  {
    id: "impositioManus",
    level: 0,
    dependencies: [],
    dependent: [
      { id: "aspersio" },
      { id: "bSSacramenti" },
      { id: "magnusExorcismus" },
      { id: "suffragium" },
      { id: "assumptio" },
      { id: "meditatio" },
    ],
    element: null,
    skillName: "Impositio Manus",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Self
Requirement: None
Description: Blesses others by placing, your hands on their head. Increases ATK and, MATK of yourself and nearby party members, for 120 seconds.
[Lv 1]: ATK/MATK +5, ,
[Lv 2]: ATK/MATK +10,
[Lv 3]: ATK/MATK +15,
[Lv 4]: ATK/MATK +20,
[Lv 5]: ATK/MATK +25`,
    img: skillImgNo,
  },
  {
    id: "aspersio",
    level: 0,
    dependencies: [
      { id: "aquaBenedicta", minLevel: 0 },
      { id: "impositioManus", minLevel: 2 },
    ],
    dependent: [
      { id: "bSSacramenti" },
      { id: "magnusExorcismus" },
    ],
    element: null,
    skillName: "Aspersio",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Ally
Range: 9
Requirement: Aqua Benedicta Lv: 1, Impositio Manus Lv: 3
Description: Temporarily imbue a single target weapon with the Holy property. Consumes 1 Holy Water per use. At Lv 5, the effect expands to a 5x5 area around the target but costs double the SP and triple the catalyst.. Catalyst: 1x Holy Water.
[Lv 1]: Physical and Magical Holy Damage +2%, Duration: 75 sec.
[Lv 2]: Physical and Magical Holy Damage +3%, Duration: 140 sec.
[Lv 3]: Physical and Magical Holy Damage +4%, Duration: 225 sec.
[Lv 4]: Physical and Magical Holy Damage +5%, Duration: 300 sec.
[Lv 5]: Physical and Magical Holy Damage +5%, Duration: 300 sec.`,
    img: skillImgNo,
  },
  {
    id: "bSSacramenti",
    level: 0,
    dependencies: [
      { id: "gloria", minLevel: 2 },
      { id: "aspersio", minLevel: 4 },
      { id: "aquaBenedicta", minLevel: 0 },
      { id: "impositioManus", minLevel: 2 },
    ],
    dependent: [],
    element: null,
    skillName: "B.S. Sacramenti",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Ground
Range: 9
Requirement: Gloria Lv: 3, Aspersio Lv: 5
Description: Blesses a targeted location to endow the armor of all players within the area of effect with the Holy property. Requires the user to have Acolyte class players horizontally adjacent to the user. Acts as Offensive Endowment when used against Undead and Demon race monsters.
[Lv 1]: Area of Effect: 3x3, Duration: 30sec,
[Lv 2]: Area of Effect: 3x3, Duration: 60sec,
[Lv 3]: Area of Effect: 5x5, Duration: 90sec,
[Lv 4]: Area of Effect: 5x5, Duration: 120sec,
[Lv 5]: Area of Effect: 7x7, Duration: 150sec`,
    img: skillImgNo,
  },
  {
    id: "gloria",
    level: 0,
    dependencies: [ 
      { id: "kyrieEleison", minLevel: 3 },
      { id: "magnificat", minLevel: 2 },
    ],
    dependent: [
      { id: "bSSacramenti" },      
    ],
    element: null,
    skillName: "Gloria",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Self
Requirement: Kyrie Eleison Lv: 4, Magnificat Lv: 3
Description: Temporarily boosts LUK and CRIT DEF to the user and party members. The duration of this skill increases by 1 second per users Job level. If your are High Priest, increase Critical Damage in 1% per Skill Level.
[Lv 1]: LUK: +14, CRIT DEF: +1, Duration: 10sec,
[Lv 2]: LUK: +18, CRIT DEF: +2, Duration: 15sec,
[Lv 3]: LUK: +22, CRIT DEF: +3, Duration: 20sec,
[Lv 4]: LUK: +26, CRIT DEF: +4, Duration: 25sec,
[Lv 5]: LUK: +30, CRIT DEF: +5, Duration: 30sec`,
    img: skillImgNo,
  },
  
  {
    id: "increaseSPRecovery",
    level: 0,
    dependencies: [],
    dependent: [
      { id: "resurrection" },
      { id: "meditatio" },
    ],
    element: null,
    skillName: "Increase SP Recovery",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Passive
Type: Misc
Requirement: None
Description: Increases the amount of SP recovered through your natural SP regeneration. Increases SP Potions healing in 3% per Skill Level.
[Lv 1]: SP Recovery +[3 + 0.1% of MaxSP],
[Lv 2]: SP Recovery +[6 + 0.2% of MaxSP],
[Lv 3]: SP Recovery +[9 + 0.3% of MaxSP],
[Lv 4]: SP Recovery +[12 + 0.4% of MaxSP],
[Lv 5]: SP Recovery +[15 + 0.5% of MaxSP],
[Lv 6]: SP Recovery +[18 + 0.6% of MaxSP],
[Lv 7]: SP Recovery +[21 + 0.7% of MaxSP],
[Lv 8]: SP Recovery +[24 + 0.8% of MaxSP],
[Lv 9]: SP Recovery +[27 + 0.9% of MaxSP],
[Lv 10]: SP Recovery +[30 + 1% of MaxSP]`,
    img: skillImgNo,
  },
  {
    id: "kyrieEleison",
    level: 0,
    dependencies: [
      { id: "angelus", minLevel: 1 },
    ],
    dependent: [],
    element: null,
    skillName: "Kyrie Eleison",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Ally
Range: 9
Requirement: Angelus Lv: 2
Description: Creates a perfect barrier, around a character that will be able to, withstand a certain number of hits, , before it breaks, for 120 seconds. The barrier, strength and number of hits is affected, by the skill's level. The Holy Light skill, immediately cancels this skill.
[Lv 1]: Barrier: 12% MaxHP, Blocks 5 Hits,
[Lv 2]: Barrier: 14% MaxHP, Blocks 6 Hits,
[Lv 3]: Barrier: 16% MaxHP, Blocks 6 Hits,
[Lv 4]: Barrier: 18% MaxHP, Blocks 7 Hits,
[Lv 5]: Barrier: 20% MaxHP, Blocks 7 Hits,
[Lv 6]: Barrier: 22% MaxHP, Blocks 8 Hits,
[Lv 7]: Barrier: 24% MaxHP, Blocks 8 Hits,
[Lv 8]: Barrier: 26% MaxHP, Blocks 9 Hits,
[Lv 9]: Barrier: 28% MaxHP, Blocks 9 Hits,
[Lv 10]: Barrier: 30% MaxHP, Blocks 10 Hits`,
    img: skillImgNo,
  },
  {
    id: "lexAeterna",
    level: 0,
    dependencies: [
      { id: "lexDivina", minLevel: 2 },
    ],
    dependent: [
      { id: "magnusExorcismus" },
    ],
    element: null,
    skillName: "Lex Aeterna",
    maxLevel: 4,
    inform: `Max Lv: 4
Skill Form: Active
Type: Magical
Target: Enemy
Range: 7 ~ 10
Requirement: Lex Divina Lv: 3
Description: Decreases the resistance of the affected target, amplifying the damage it receives for a short period of time. Catalyst: 1x Holy Water.
[Lv 1]: Amplification: [1.5x], Single Target, Duration: 4 sec,
[Lv 2]: Amplification: [1.4x], AoE: 3x3, Duration: 5 sec,
[Lv 3]: Amplification: [1.3x], AoE: 5x5, Duration: 6 sec,
[Lv 4]: Amplification: [1.2x], AoE: 7x7, Duration: 7 sec`,
    img: skillImgNo,
  },
  {
    id: "lexDivina",
    level: 0,
    dependencies: [
      { id: "ruwach", minLevel: 0 },
    ],
    dependent: [
      { id: "lexAeterna" },
      { id: "magnusExorcismus" },
      { id: "turnUndead" },
      { id: "meditatio" },
    ],
    element: null,
    skillName: "Lex Divina",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Enemy
Range: 5
Requirement: Ruwach Lv: 1
Description: Silences an enemy, temporarily disabling its use of skills, for a set duration. The duration of Lex Divina is affected by the targets resistense.
[Lv 1]: Silence Duration: 20sec,
[Lv 2]: Silence Duration: 30sec,
[Lv 3]: Silence Duration: 40sec,
[Lv 4]: Silence Duration: 50sec,
[Lv 5]: Silence Duration: 60sec`,
    img: skillImgNo,
  },
  {
    id: "maceMastery",
    level: 0,
    dependencies: [
      { id: "demonBane", minLevel: 6 },
    ],
    dependent: [
      { id: "manaRecharge" }, 
    ],
    element: null,
    skillName: "Mace Mastery",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Passive
Type: Physical
Requirement: Demon Bane Lv: 7
Description: Increase attack with Mace Class Weapons. When [Lv 10], it increases Critical Damage in 6%. Attack bonus granted by this skill is of the Equipment type.
[Lv 1]: Atk +3, Critcal +1,
[Lv 2]: Atk +6, Critcal +2,
[Lv 3]: Atk +9, Critcal +3,
[Lv 4]: Atk +12, Critcal +4,
[Lv 5]: Atk +15, Critcal +5,
[Lv 6]: Atk +18, Critcal +6,
[Lv 7]: Atk +21, Critcal +7,
[Lv 8]: Atk +24, Critcal +8,
[Lv 9]: Atk +27, Critcal +9,
[Lv 10]: Atk +30, Critcal +10`,
    img: skillImgNo,
  },
  {
    id: "magnificat",
    level: 0,
    dependencies: [],
    dependent: [
      { id: "gloria" },
    ],
    element: null,
    skillName: "Magnificat",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Self
Requirement: None
Description: Doubles the caster and, party's SP regen for the duration of the skill.
[Lv 1]: Duration: 30 seconds,
[Lv 2]: Duration: 45 seconds,
[Lv 3]: Duration: 60 seconds,
[Lv 4]: Duration: 75 seconds,
[Lv 5]: Duration: 90 seconds`,
    img: skillImgNo,
  },
  {
    id: "magnusExorcismus",
    level: 0,
    dependencies: [
      { id: "holyLight", minLevel: 4 },
      { id: "lexAeterna", minLevel: 2 },
      { id: "aspersio", minLevel: 2 },
      { id: "turnUndead", minLevel: 2 },     
    ],
    dependent: [      
    ],
    element: null,
    skillName: "Magnus Exorcismus",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Ground
Range: 9
Requirement: Holy Light Lv: 5, Lex Aeterna Lv: 3, Aspersio Lv: 3, Turn Undead Lv: 3
Description: Summons a purifying cross on the ground, dealing Holy property magic damage over multiple waves. Each wave deals 10 hits. Damage per hit is significantly increased against Demon and Undead races as well as Shadow and Corrupt elements. When used above level 5, it consumes 1x Holy Water.
[Lv 1]: 3 Waves, Hits x 37% MAtk,
[Lv 2]: 3 Waves, Hits x 44% MAtk,
[Lv 3]: 3 Waves, Hits x 51% MAtk,
[Lv 4]: 4 Waves, Hits x 58% MAtk,
[Lv 5]: 4 Waves, Hits x 65% MAtk,
[Lv 6]: 4 Waves, Hits x 72% MAtk,
[Lv 7]: 5 Waves, Hits x 79% MAtk,
[Lv 8]: 5 Waves, Hits x 86% MAtk,
[Lv 9]: 5 Waves, Hits x 93% MAtk,
[Lv 10]: 6 Waves, Hits x 100% MAtk`,
    img: skillImgNo,
  },
  {
    id: "resurrection",
    level: 0,
    dependencies: [
      { id: "statusRecovery", minLevel: 0 },
      { id: "increaseSPRecovery", minLevel: 3 },
    ],
    dependent: [
      { id: "turnUndead" },     
    ],
    element: null,
    skillName: "Resurrection",
    maxLevel: 4,
    inform: `Max Lv: 4
Skill Form: Active
Type: Magical
Target: Ally
Range: 9
Requirement: Status Recovery Lv: 1, Increase SP Recovery Lv: 4
Description: Revives KO'ed character. Catalyst: 1x Blue Gemstone.
[Lv 1]: Revives with 10% of Max HP,
[Lv 2]: Revives with 30% of Max HP,
[Lv 3]: Revives with 50% of Max HP,
[Lv 4]: Revives with 80% of Max HP`,
    img: skillImgNo,
  },
  {
    id: "safetyWal",
    level: 0,
    dependencies: [
      { id: "sanctuary", minLevel: 4 },
    ],
    dependent: [      
    ],
    element: null,
    skillName: "Safety Wal",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Ground
Range: 9
Requirement: Sanctuary Lv: 5
Description: Constructs a protective barrier at a targeted location that blocks all close-range physical damage until its durability is depleted or the skill expires. The walls durability and effectiveness are influenced by your INT, Base Level, and MaxSP. Only the initial impact is prevented beyond the total durability. A maximum of 4 Safety Walls can be active at once. Catalyst: 1x Blue Gemstone.
[Lv 1]: Durability: 300, Blocks Damage 2 times,
[Lv 2]: Durability: 600, Blocks Damage 3 times,
[Lv 3]: Durability: 900, Blocks Damage 4 times,
[Lv 4]: Durability: 1200, Blocks Damage 5 times,
[Lv 5]: Durability: 1500, Blocks Damage 6 times,
[Lv 6]: Durability: 1800, Blocks Damage 7 times,
[Lv 7]: Durability: 2100, Blocks Damage 8 times,
[Lv 8]: Durability: 2400, Blocks Damage 9 times,
[Lv 9]: Durability: 2700, Blocks Damage 10 times,
[Lv 10]: Durability: 3000, Blocks Damage 11 times`,
    img: skillImgNo,
  },
  {
    id: "sanctuary",
    level: 0,
    dependencies: [{ id: "heal", minLevel: 0 },],
    dependent: [
      { id: "safetyWal" },
      { id: "basilica" },
    ],
    element: null,
    skillName: "Sanctuary",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Ground
Range: 9
Requirement: Heal Lv: 1
Description: Creates a soothing area on a targeted location that will restore HP of all entities within the area of effect every second. SKill level affects healing Value and Target Limit. Against Undead property and Demon race monsters, this skill will inflict Holy property damage equal to healing value and push them 2 cells backwards. Catalyst: 1x Holy Water.
[Lv 1]: Targets: 4, Healing: 100, Duration: 7 sec.
[Lv 2]: Targets: 5, Healing: 200, Duration: 9 sec.
[Lv 3]: Targets: 6, Healing: 300, Duration: 11 sec.
[Lv 4]: Targets: 7, Healing: 400, Duration: 13 sec.
[Lv 5]: Targets: 8, Healing: 500, Duration: 15 sec.
[Lv 6]: Targets: 9, Healing: 600, Duration: 17 sec.
[Lv 7]: Targets: 10, Healing: 700, Duration: 19 sec.
[Lv 8]: Targets: 11, Healing: 800, Duration: 21 sec.
[Lv 9]: Targets: 12, Healing: 900, Duration: 23 sec.
[Lv 10]: Targets: 13, Healing: 1000, Duration: 25 sec.`,
    img: skillImgNo,
  },
  {
    id: "statusRecovery",
    level: 0,
    dependencies: [],
    dependent: [
       { id: "resurrection" },
    ],
    element: null,
    skillName: "Status Recovery",
    maxLevel: 1,
    inform: `Max Lv: 1
Skill Form: Active
Type: Magical
Target: Ally
Range: 9
Requirement: None
Description: Cancels abnormal status, effects such as Stun, Frozen or Stone Curse. Inflicts Blind status on Undead monsters.`,
    img: skillImgNo,
  },
  {
    id: "suffragium",
    level: 0,
    dependencies: [
      { id: "impositioManus", minLevel: 1 },
    ],
    dependent: [],
    element: null,
    skillName: "Suffragium",
    maxLevel: 3,
    inform: `Max Lv: 3
Skill Form: Active
Type: Magical
Target: Self
Requirement: Impositio Manus Lv: 2
Description: Offers a prayer for others by reducing the Casting Time of yourself and nearby party members for 60 seconds.
[Lv 1]: 10% reduction in variable casting,
[Lv 2]: 15% reduction in variable casting,
[Lv 3]: 20% reduction in variable casting and 0.1 second in fix cast time`,
    img: skillImgNo,
  },
  {
    id: "turnUndead",
    level: 0,
    dependencies: [
       { id: "resurrection", minLevel: 0 },
       { id: "lexDivina", minLevel: 2 },
       { id: "holyLight", minLevel: 4 },
    ],
    dependent: [
      { id: "magnusExorcismus" },      
    ],
    element: null,
    skillName: "Turn Undead",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Self
Range: 5
Requirement: Resurrection Lv: 1, Lex Divina Lv: 3, Holy Light Lv: 5
Description: Cleanse the darkness with a holy incantation, reducing the Holy resistance of all enemies. Offers a chance to execute 30% or low health enemies of Undead and Demon races, and those of Shadow and Corrupt elements when dealing damage. Elite Monsters can be executed when at 20% or less HP, although the execution chance is reduced.
[Lv 1]: Holy Resistance -2%, 50% success rate, 32 SP,
[Lv 2]: Holy Resistance -4%, 50% success rate, 35 SP,
[Lv 3]: Holy Resistance -6%, 50% success rate, 38 SP,
[Lv 4]: Holy Resistance -8%, 50% success rate, 41 SP,
[Lv 5]: Holy Resistance -10%, 50% success rate, 44 SP,
[Lv 6]: Holy Resistance -12%, 50% success rate, 47 SP,
[Lv 7]: Holy Resistance -14%, 50% success rate, 50 SP,
[Lv 8]: Holy Resistance -16%, 50% success rate, 53 SP,
[Lv 9]: Holy Resistance -18%, 50% success rate, 56 SP,
[Lv 10]: Holy Resistance -20%, 50% success rate, 59 SP`,
    img: skillImgNo,
  },
];


/*  author Chalykh Maksim 
  # data 10.02.2025 
  # email: chalyh.maksim.88@mail.ru */
