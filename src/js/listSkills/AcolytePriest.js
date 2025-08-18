/*  author Chalykh Maksim 
  # data 10.02.2025 
  # email: chalyh.maksim.88@mail.ru */

import skillImgNo from '../../img/no_img.png'; // заглушка
import aquaBenedicta from '../../img/icon_pri/icon_pri_19.png';
import aspersio from '../../img/icon_pri/icon_pri_1.png';
import bSSacramenti from '../../img/icon_pri/icon_pri_2.png';
import increaseSPRecovery from '../../img/icon_pri/icon_pri_3.png';
import gloria from '../../img/icon_pri/icon_pri_4.png';
import impositioManus from '../../img/icon_pri/icon_pri_5.png';
import kyrieEleison from '../../img/icon_pri/icon_pri_6.png';
import lexAeterna from '../../img/icon_pri/icon_pri_7.png';
import lexDivina from '../../img/icon_pri/icon_pri_8.png';
import maceMastery from '../../img/icon_pri/icon_pri_9.png';
import magnusExorcismus from '../../img/icon_pri/icon_pri_10.png';
import magnificat from '../../img/icon_pri/icon_pri_11.png';
import statusRecovery from '../../img/icon_pri/icon_pri_12.png';
import resurrection from '../../img/icon_pri/icon_pri_13.png';
import safetyWal from '../../img/icon_pri/icon_pri_14.png';
import sanctuary from '../../img/icon_pri/icon_pri_15.png';
import suffragium from '../../img/icon_pri/icon_pri_17.png';
import turnUndead from '../../img/icon_pri/icon_pri_18.png';

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
Type: Supportive
Target: Self
Variable Cast Time: 0.80s
Fixed Cast Time: 0.20s
After Cast Delay: 0.50s
SP Cost: 10
Requirement: None
Description: Creates Holy Water.
Base Level, Job Level, and Stats increase the number of crafted Holy Water.
Requires standing on a water cell.
Catalyst: 1x Empty Bottle
[Lv. 1]: Bonus Efficiency: 0%
[Lv. 2]: Bonus Efficiency: 25%
[Lv. 3]: Bonus Efficiency: 50% 
[Lv. 4]: Bonus Efficiency: 75% 
[Lv. 5]: Bonus Efficiency: 100%

Crafted Holy Water:
1 + Bonus Amount
Bonus Amount:
((1 x ((Level Bonus + Stats Bonus) x ((Skill Lv x 25) - 25))) / 100)
Level Bonus: 
((Base Lv x 100) / 200) + ((Job Lv x 100) / 140) / 100
Stats Bonus: 
((STR^2 /10) + ((AGI^2 / 10) + (VIT^2) + (INT^2 / 10) + (DEX^2 / 10) + (LUK^2 / 10)) / 100

Random Bonus Amount:
10% chance for the bonus to be reduced to 25% 
70% chance for the bonus to be reduced to 50% 
20% chance for no reductions `,
    img: aquaBenedicta,
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
Variable Cast Time: 0.90s
Fixed Cast Time: 0.60s 
After Cast Delay: 3s 
Cooldown: 30s
Requirement: None
Description: Increases W.ATK and B.MATK of nearby allies for 120s.
The duration scales with Job Level.
[Lv. 1]: W.ATK/B.MATK +5. SP Cost: 59 
[Lv. 2]: W.ATK/B.MATK +10. SP Cost: 62 
[Lv. 3]: W.ATK/B.MATK +15. SP Cost: 65 
[Lv. 4]: W.ATK/B.MATK +20. SP Cost: 68 
[Lv. 5]: W.ATK/B.MATK +25. SP Cost: 71
Duration (seconds): 120 + Job Level `,
    img: impositioManus,
  },
  {
    id: "aspersio",
    level: 0,
    dependencies: [
      { id: "aquaBenedicta", minLevel: 1 },
      { id: "impositioManus", minLevel: 3 },
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
Type: Supportive 
Target: Ally
Element: Holy
Variable Cast Time: 1s
After Cast Delay: 25 
Cooldown: A.Delay 
Range: 9
Requirement: Aqua Benedicta Lv: 1, Impositio Manus Lv: 3
Description: Endows a single target's equipped weapon with the Holy property.
Also increases the DMG of Holy property basic attacks and skills.
At max level, it enchants allies within a 5x5 AoE around the target, but has a 0.65 FCT, costs double the SP, and triple the catalysts. 
Catalyst: 1x Holy Water
[Lv. 1]: Holy Damage +2%, SP Cost: 19 Duration: 75s
[Lv. 2]: Holy Damage +3%, SP Cost: 23 Duration: 150s
[Lv. 3]: Holy Damage +4%, SP Cost: 27 Duration: 225s
[Lv. 4]: Holy Damage +5%, SP Cost: 31 Duration: 300s
[Lv. 5]: Holy Damage +5%, SP Cost: 31 Duration: 300s`,
    img: aspersio,
  },
  {
    id: "bSSacramenti",
    level: 0,
    dependencies: [
      { id: "gloria", minLevel: 3 },
      { id: "aspersio", minLevel: 5 },
    ],
    dependent: [],
    element: null,
    skillName: "B.S. Sacramenti",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Supportive
Target: Ground
After Cast Delay: A.Delay - 0.46s
Cooldown: A.Delay
Range: 9
SP Cost: 30
Requirement: Gloria Lv: 3, Aspersio Lv: 5
Description: Temporarily endows allies' armor in a AoE around the targeted location with Holy property.
Also deals Holy property M.DMG to Demon, Undead and Corrupt monsters in the area. Requires an Acolyte class ally adjacent to the caster.
Catalyst: 1x Holy Water
[Lv. 1]: AoE: 3x3. Duration: 30s 
[Lv. 2]: AoE: 3x3. Duration: 60s
[Lv. 3]: AoE: 5x5. Duration: 90s 
[Lv. 4]: AoE: 5x5. Duration: 120s 
[Lv. 5]: AoE: 7x7. Duration: 150s
Formula: Damage: ((((Base Lv + INT) / 5) x (30 x Skill Lv)) / 10) + MATK Bonus
MATK Bonus: Base MATK (min~max) + (Weapon MATK +- ((MATK x Weapon Lv) / 10)) `,
    img: bSSacramenti,
  },
  {
    id: "gloria",
    level: 0,
    dependencies: [ 
      { id: "kyrieEleison", minLevel: 4 },
      { id: "magnificat", minLevel: 3 },
    ],
    dependent: [
      { id: "bSSacramenti" },      
    ],
    element: null,
    skillName: "Gloria",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Supportive
Target: Self
After Cast Delay: 2s
SP Cost: 20
Requirement: Kyrie Eleison Lv: 4, Magnificat Lv: 3
Description: Temporarily increases LUK and C.DEF of nearby allies. Also increases their C.DMG if the caster is a High Priest. The duration scales with Job Level.
[Lv. 1]: LUK +14. C.DEF +1. C.DMG +1% Duration: 10s
[Lv. 2]: LUK +18. C.DEF +2. C.DMG +2% Duration: 15s
[Lv. 3]: LUK +22. C.DEF +3. C.DMG +3% Duration: 20s
[Lv. 4]: LUK +26. C.DEF +4. C.DMG +4% Duration: 25s
[Lv. 5]: LUK +30. C.DEF +5. C.DMG +5% Duration: 30s
Duration (seconds): 5 + (Skill Lv x 5) + Job Level `,
    img: gloria,
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
Description: Boosts SP Recovery and increases SP potion healing.
Also gains SP Recovery based on Max HP.
[Lv. 1]; Recovery: +3. Potion: +3% 
[Lv. 2]: Recovery: +6. Potion: +6% 
[Lv. 3]: Recovery: +9. Potion: +9% 
[Lv. 4]: Recovery: +12. Potion: +12% 
[Lv. 5]: Recovery: +15. Potion: +15% 
[Lv. 6]: Recovery: +18. Potion: +18% 
[Lv. 7]: Recovery: +21. Potion: +21% 
[Lv. 8]: Recovery: +24. Potion: +24% 
[Lv. 9]: Recovery: +27. Potion: +27% 
[Lv.10]: Recovery: +30. Potion: +30%`,
    img: increaseSPRecovery,
  },
  {
    id: "kyrieEleison",
    level: 0,
    dependencies: [
      { id: "angelus", minLevel: 2 },
    ],
    dependent: [],
    element: null,
    skillName: "Kyrie Eleison",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Supportive 
Target: Self
Variable Cast Time: 1.40s
Fixed Cast Time: 0.60s 
After Cast Delay: 2s 
Range: 9
Requirement: Angelus Lv: 2
Description: Protects the target with a shield that blocks P.DMG until its durability runs out or it reaches the hit limit. The durability scales with the target's Max HP.
The shield is canceled by Holy Light skill. 
[Lv. 1]: Durability: 12% of MaxHP Hits: 5. SP Cost: 20 
[Lv. 2]: Durability: 14% of MaxHP Hits: 6. SP Cost: 20 
[Lv. 3]: Durability: 16% of MaxHP Hits: 6. SP Cost: 20
[Lv. 4]: Durability: 18% of MaxHP Hits: 7. SP Cost: 25
[Lv. 5]: Durability: 20% of MaxHP Hits: 7. SP Cost: 25
[Lv. 6]: Durability: 22% of MaxHP Hits: 8. SP Cost: 25
[Lv. 7]: Durability: 24% of MaxHP Hits: 8. SP Cost: 30
[Lv. 8]: Durability: 26% of MaxHP Hits: 9. SP Cost: 30
[Lv. 9]: Durability: 28% of MaxHP Hits: 9. SP Cost: 30
[Lv.10]: Durability: 30% of MaxHP Hits: 10. SP Cost: 35`,
    img: kyrieEleison,
  },
  {
    id: "lexAeterna",
    level: 0,
    dependencies: [
      { id: "lexDivina", minLevel: 3 },
    ],
    dependent: [
      { id: "magnusExorcismus" },
    ],
    element: null,
    skillName: "Lex Aeterna",
    maxLevel: 4,
    inform: `Max Lv: 4
Skill Form: Active
Type: Supportive 
Target: Enemy
After Cast Delay: 35 
Cooldown: 10s
SP Cost: 60
Requirement: Lex Divina Lv: 3
Description: Marks the target temporarily, increasing all incoming damage it takes. Becomes an AoE when cast at level 2 or higher.
VCT scales with skill level.
Catalyst: 1x Holy Water
[Lv. 1]: Damage +50%, VCT: 0.00s Duration: 4s
[Lv. 2]: Damage +40%, AoE: 3x3. VCT: 1.00s Duration: 5s
[Lv. 3]: Damage +30%, AoE: 5x5. VCT: 1.30s Duration: 6s
[Lv. 4]: Damage +20%, AoE: 7x7. VCT: 1.60s Duration: 7s`,
    img: lexAeterna,
  },
  {
    id: "lexDivina",
    level: 0,
    dependencies: [
      { id: "ruwach", minLevel: 1 },
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
After Cast Delay: 35
Requirement: Ruwach Lv: 1
Description: Inflicts Silence temporarily to the target. Becomes an AoE when cast at level 2 or higher.
Does not affect targets that are already silenced.
[Lv. 1]: Duration 40s. SP Cost: 12
[Lv. 2]: Duration 20s. AoE: 3x3, SP Cost: 14 
[Lv. 3]: Duration 30s. AoE: 3x3. SP Cost: 16 
[Lv. 4]: Duration 10s. AoE: 5x5. SP Cost: 18 
[Lv. 5]: Duration 20s. AoE: 5x5. SP Cost: 20`,
    img: lexDivina,
  },
  {
    id: "maceMastery",
    level: 0,
    dependencies: [
      { id: "demonBane", minLevel: 7 },
    ],
    dependent: [
      { id: "manaRecharge" }, 
      { id: "penitent" }, 
    ],
    element: null,
    skillName: "Mace Mastery",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Passive
Type: Physical
Weapon: Mace
Requirement: Demon Bane Lv: 7
Description: Increases E.ATK and CRIT while wielding a Mace. At max level, also grants +6% C.DMG.
[Lv. 1]: E.ATK +3. CRIT +1 
[Lv. 2]: E.ATK +6. CRIT +2
[Lv. 3]: E.ATK +9. CRIT +3 
[Lv. 4]: E.ATK +12. CRIT +4 
[Lv. 5]: E.ATK +15. CRIT +5
[Lv. 6]: E.ATK +18. CRIT +6 
[Lv. 7]: E.ATK +21. CRIT +7 
[Lv. 8]: E.ATK +24. CRIT +8 
[Lv. 9]: E.ATK +27. CRIT +9 
[Lv.10]: E.ATK +30. CRIT +10`,
    img: maceMastery,
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
Target: Selt
Variable Cast Time: 3s
Fixed Cast Time: 1s
After Cast Delay: 2s
SP Cost: 40
Requirement: None
Description: Temporarily increases SP Recovery of nearby allies. Also reduces its recovery interval.
The bonus duration scales with Job Level. 
[Lv. 1]: SP Recovery +1. Interval -18% Duration: 30s
[Lv. 2]: SP Recovery +2. Interval -26% Duration: 45s
[Lv. 3]: SP Recovery +3. Interval -34% Duration: 60s
[Lv. 4]: SP Recovery +4. Interval -42% Duration: 75s
[Lv. 5]: SP Recovery +5. Interval -50% Duration: 90s
Formula: Duration (seconds); 15 + (Skill Lv x 15) + Job Level `,
    img: magnificat,
  },
  {
    id: "magnusExorcismus",
    level: 0,
    dependencies: [
      { id: "holyLight", minLevel: 5 },
      { id: "lexAeterna", minLevel: 3 },
      { id: "aspersio", minLevel: 3 },
      { id: "turnUndead", minLevel: 3 }, 
    ],
    dependent: [    
      { id: "exsuffla" },
    ],
    element: null,
    skillName: "Magnus Exorcismus",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Magical 
Target: Ground
Element: Holy
After Cast Delay: 35 
Range: 9
Hits: 10
Requirement: Holy Light Lv: 5, Lex Aeterna Lv: 3, Aspersio Lv: 3, Turn Undead Lv: 3
Description: Creates an area that deals M.DMG to enemies within a 7x7 AoE every 2.2s.
The damage is increased against Demon, Undead and Corrupt monsters.
VCT, FCT and CD scale with skill level.
Catalyst: 1x
Holy Water for Lv. 6~10
[Lv. 1]: MATK 37% x Hits. Waves: 3 Cooldown: 3s. VCT: 2.00s. FCT: 0.50s Duration: 6.6s. SP Cost: 40
[Lv. 2]: MATK 44% x Hits. Waves: 3 Cooldown: 3s. VCT: 2.00s. FCT: 0.50s Duration: 6.6s. SP Cost: 42
[Lv. 3]: MATK 51% x Hits. Waves: 3 Cooldown: 3s. VCT: 2.00s. FCT: 0.50s Duration: 6.6s. SP Cost: 44
[Lv. 4]: MATK 58% x Hits. Waves: 4 Cooldown: 4s. VCT: 2.67s. FCT: 0.63s Duration: 8.8s. SP Cost: 46
[Lv. 5]: MATK 65% x Hits. Waves: 4 Cooldown: 4s. VCT: 2.67s. FCT: 0.63s Duration: 8.8s. SP Cost: 48
[Lv. 6]: MATK 72% x Hits. Waves: 4 Cooldown: 4s. VCT: 2.67s. FCT: 0.63s Duration: 8.8s. SP Cost: 50
[Lv. 7]: MATK 79% x Hits. Waves: 5 Cooldown: 5s. VCT: 3.33s. FCT: 0.88s Duration: 11.0s. SP Cost: 52
[Lv. 8]: MATK 86% x Hits. Waves: 5 Cooldown: 5s. VCT: 3.33s. FCT: 0.88s Duration: 11.0s. SP Cost: 54
[Lv. 9]: MATK 93% x Hits. Waves: 5 Cooldown: 5s. VCT: 3.33s. FCT: 0.885 Duration: 11.0s. SP Cost: 56
[Lv.10]: MATK 100% x Hits. Waves: 6 Cooldown: 6s. VCT: 4.00s. FCT: 1.00s Duration: 13.2s. SP Cost: 58
Formula: MATK (%): (30 + (Skill Lv x 7) + Bonus) x Hits
Bonus: Skill Lv x 5 `,
    img: magnusExorcismus,
  },
  {
    id: "resurrection",
    level: 0,
    dependencies: [
      { id: "statusRecovery", minLevel: 1 },
      { id: "increaseSPRecovery", minLevel: 4 },
    ],
    dependent: [
      { id: "turnUndead" },     
    ],
    element: null,
    skillName: "Resurrection",
    maxLevel: 4,
    inform: `Max Lv: 4
Skill Form: Active
Type: Supportive
Target: Ally
Range: 9
SP Cost: 60
Requirement: Status Recovery Lv: 1, Increase SP Recovery Lv: 4
Description: Returns a dead player to life. VCT, FCT and ACD scales with skill level. 
Catalyst: 1x Blue Gemstone
[Lv. 1]: VCT: 4.80s. FCT: 1.20s. ACD: 0.00s Revives with 10% of Max HP
[Lv. 2]: VCT: 3.20s. FCT: 0.80s. ACD: 1.00s Revives with 30% of Max HP
[Lv. 3]: VCT: 1.60s. FCT: 0.40s. ACD: 2.00s Revives with 50% of Max HP
[Lv. 4]: VCT: 0.00s. FCT: 0.00s. ACD: 3.00s Revives with 80% of Max HP`,
    img: resurrection,
  },
  {
    id: "safetyWal",
    level: 0,
    dependencies: [
      { id: "sanctuary", minLevel: 5 },
    ],
    dependent: [      
    ],
    element: null,
    skillName: "Safety Wal",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Supportive 
Target: Ground
After Cast Delay: 0.50s 
Cooldown: 0.50s
Max Instances: 4
Range: 9
Requirement: Sanctuary Lv: 5
Description: Creates a pillar at the targeted location, blocking all melee P.DMG until its durability runs out or it reaches the hit limit. The blocked damage is transferred to the pillar, reducing its durability.
The durability scales with INT, Max SP and Base Level.
Older instances are removed to create new ones when reaching the instance limit.
VCT and FCT scale with skill level.
Catalist: 1x Blue Gemstone
[Lv. 1]: VCT: 3.20s. FCT: 0.80s. Hits: 2 Durability: 300. Duration: 5s. SP Cost: 30 
[Lv. 2]: VCT: 2.88s. FCT: 0.72s. Hits: 3 Durability: 600. Duration: 10s. SP Cost: 30 
[Lv. 3]: VCT: 2.56s. FCT: 0.64s. Hits: 4 Durability: 900. Duration: 15s. SP Cost: 30 
[Lv. 4]: VCT: 2.24s. FCT: 0.56s. Hits: 5 Durability: 1200. Duration: 20s. SP Cost: 35 
[Lv. 5]: VCT: 1.92s. FCT: 0.48s. Hits: 6 Durability: 1500. Duration: 25s. SP Cost: 35 
[Lv. 6]: VCT: 1.60s. FCT: 0.40s. Hits: 7 Durability: 1800. Duration: 30s. SP Cost: 35 
[Lv. 7]: VCT: 1.28s. FCT: 0.32s. Hits: 8 Durability: 2100. Duration: 35s. SP Cost: 40 
[Lv. 8]: VCT: 0.96s. FCT: 0.24s. Hits: 9 Durability: 2400. Duration: 40s. SP Cost: 40 
[Lv. 9]: VCT: 0.64s. FCT: 0.16s. Hits: 10 Durability: 2700. Duration: 45s. SP Cost: 40 
[Lv.10]: VCT: 0.32s. FCT: 0.08s. Hits: 11 Durability: 3000. Duration: 50s. SP Cost: 40
Formula: Durability: (Skill Lv x 300) + (65 x (INT + Base Lv)) + MaxSP `,
    img: safetyWal,
  },
  {
    id: "sanctuary",
    level: 0,
    dependencies: [{ id: "heal", minLevel: 1 },],
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
Variable Cast Time: 4s
Fixed Cast Time: 1s
After Cast Delay: 1s 
Range: 9
Requirement: Heal Lv: 1
Description: Creates an area that heals the HP of entities within a 5x5 AoE every 1s. Also inflicts M.DMG to Demon, Undead and Corrupt monsters and Knocks them back 2 cells.
The area can restore HP to a limited number of entities, based on its capacity. 
Catalyst: 1x Holy Water
[Lv. 1]: Healing: 100. Capacity: 4 Duration: 7s. SP Cost: 15
[Lv. 2]: Healing: 200, Capacity: 5 Duration: 9s. SP Cost: 18
[Lv. 3]: Healing: 300. Capacity: 6 Duration: 11s. SP Cost: 21
[Lv. 4]: Healing: 400. Capacity: 7 Duration: 13s. SP Cost: 24
[Lv. 5]: Healing: 500. Capacity: 8 Duration: 15s. SP Cost: 27
[Lv. 6]: Healing: 600. Capacity: 9 Duration: 17s, SP Cost: 30
[Lv. 7]: Healing: 700. Capacity: 10 Duration: 19s. SP Cost: 33
[Lv. 8]: Healing: 800. Capacity: 11 Duration: 21s. SP Cost: 36
[Lv. 9]: Healing: 900. Capacity: 12 Duration: 23s. SP Cost: 39
[Lv.10]: Healing: 1000. Capacity: 13 Duration: 25s. SP Cost: 42
Formula: Damage: ((((Base Lv + INT) / 5) x (30 x Skill Lv)) / 10) + MATK Bonus
MATK Bonus: Base MATK (min~max) + (Weapon MATK +- ((MATK x Weapon Lv) / 10)) `,
    img: sanctuary,
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
Type: Supportive 
Target: Ally/Enemy
After Cast Delay: 2s 
Range: 9
SP Cost: 5
Requirement: None
Description: Attempts to remove Freezing, Freeze, Petrifying, Petrify and Stun of the target. The chance scales with the user's INT and Base Level, and the target's VIT, LUK, H.MDEF and Base Level.
Inflicts Blind for 18s against Undead and Corrupt monsters.
Formula: Freeze & Petrify Chance (%): ((Base Lv x 10) + (INT x 40) + (Target Base Lv x 10) + (Target H.MDEF x 40)) / 100 
Stun Chance (%): ((Base Lv x 10) + (INT x 40) + (Target Base Lv x 10) + (Target VIT X 20) + (Target LUK x 20)) / 100 `,
    img: statusRecovery,
  },
  {
    id: "suffragium",
    level: 0,
    dependencies: [
      { id: "impositioManus", minLevel: 2 },
    ],
    dependent: [],
    element: null,
    skillName: "Suffragium",
    maxLevel: 3,
    inform: `Max Lv: 3
Skill Form: Active
Type: Magical
Target: Self
Variable Cast Time: 0.90s 
Fixed Cast Time: 0.60s 
After Cast Delay: 2s 
Cooldown: 30s
SP Cost: 8
Requirement: Impositio Manus Lv: 2
Description: Reduces nearby allies' skill's VCT for 60s. At max level, also reduces their skill's FCT by 0.15.
The duration scales with Job Level.
[Lv. 1]: VCT -10%
[Lv. 2]: VCT -15%
[Lv. 3]: VCT -20%
Duration (seconds): 60 + Job Level `,
    img: suffragium,
  },
  {
    id: "turnUndead",
    level: 0,
    dependencies: [
      { id: "resurrection", minLevel: 1 },
      { id: "lexDivina", minLevel: 3 },
      { id: "holyLight", minLevel: 5 },
    ],
    dependent: [
      { id: "magnusExorcismus" },      
    ],
    element: null,
    skillName: "Turn Undead",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Supportive 
Target: Self
Variable Cast Time: 0.90s 
Fixed Cast Time: 0.60s
After Cast Delay: 35
Cooldown: 10s
Requirement: Resurrection Lv: 1, Lex Divina Lv: 3, Holy Light Lv: 5
Description: Reduces nearby enemies' Holy resistance.
Also inflicts Evil Execution for 30s on Demon, Undead, Shadow and Corrupt monsters. 
[Lv. 1]: Resistance -2%, SP Cost: 35 
[Lv. 2]: Resistance -4%, SP Cost: 38 
[Lv. 3]: Resistance -6%, SP Cost: 41 
[Lv. 4]: Resistance -8%, SP Cost: 44 
[Lv. 5]: Resistance -10%, SP Cost: 47 
[Lv. 6]: Resistance -12%, SP Cost: 50 
[Lv. 7]: Resistance -14%, SP Cost: 53
[Lv. 8]: Resistance -16%, SP Cost: 56 
[Lv. 9]: Resistance -18%, SP Cost: 59
[Lv. 10]: Resistance -20%, SP Cost: 62`,
    img: turnUndead,
  },
];


/*  author Chalykh Maksim 
  # data 10.02.2025 
  # email: chalyh.maksim.88@mail.ru */
