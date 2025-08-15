/*  author Chalykh Maksim 
  # data 10.02.2025 
  # email: chalyh.maksim.88@mail.ru */

import skillImgNo from '../../img/no_img.png'; // заглушка
import angelus from '../../img/icon_aco/icon_aco_1.png';
import blessing from '../../img/icon_aco/icon_aco_3.png';
import cure from '../../img/icon_aco/icon_aco_4.png';
import decreaseAgility from '../../img/icon_aco/icon_aco_5.png';
import demonBane from '../../img/icon_aco/icon_aco_6.png';
import divineProtection from '../../img/icon_aco/icon_aco_7.png';
import heal from '../../img/icon_aco/icon_aco_8.png';
import increaseAgility from '../../img/icon_aco/icon_aco_9.png';
import pneuma from '../../img/icon_aco/icon_aco_10.png';
import ruwach from '../../img/icon_aco/icon_aco_11.png';
import teleport from '../../img/icon_aco/icon_aco_13.png';
import warpPortal from '../../img/icon_aco/icon_aco_14.png';
import holyLight from '../../img/icon_aco/icon_aco_16.png';


// список скилов Acolyte
export const skillsAcolyte = [ 
  
  {
    id: "divineProtection",
    level: 0,
    dependencies: [],
    dependent: [
      { id: "angelus" }, 
      { id: "blessing" }, 
      { id: "demonBane" },
      { id: "kyrieEleison" }, 
      { id: "maceMastery" },
      { id: "assumptio" },
      { id: "basilica" },
      { id: "manaRecharge" }, 
      { id: "ironHand" }, 
    ],
    element: null,
    skillName: "Divine Protection",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Passive
Type: Physical
Requirement: None
Description: Grants S.DEF and S.MDEF against Demon, Undead and Corrupt monsters, scaling with Base Level. Also grants a chance. to activate Divine Protection for 10s when receiving damage from these monsters. 
[Lv. 1]; S.DEF/S.MDEF +3. Chance: 1% 
[Lv. 2]: S.DEF/S.MDEF +6. Chance: 2% 
[Lv. 3]: S.DEF/S.MDEF +9. Chance: 3% 
[Lv. 4]: S.DEF/S.MDEF +12. Chance: 4% 
[Lv. 5]: S.DEF/S.MDEF +15. Chance: 5% 
[Lv. 6]: S.DEF/S.MDEF +18. Chance: 6% 
[Lv. 7]: S.DEF/S.MDEF +21. Chance: 7% 
[Lv. 8]: S.DEF/S.MDEF +24. Chance: 8% 
[Lv. 9]: S.DEF/S.MDEF +27. Chance: 9% 
[Lv.10]: S.DEF/S.MDEF +30. Chance: 10%
Formula: S.DEF/S.MDEF: (Skill Lv x 3) + Base Lv `,
    img: divineProtection,    
  }, 
  {
    id: "demonBane",
    level: 0,
    dependencies: [{ id: "divineProtection", minLevel: 3 }],
    dependent: [
      { id: "maceMastery" },
      { id: "basilica" },
      { id: "manaRecharge" }, 
      { id: "ironHand" }, 
    ],
    element: null,
    skillName: "Demon Bane",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Passive
Type: Physical
Requirement: Divine Protection Lv: 3
Description: Grants Mastery ATK and Mastery MATK against Demon, Undead and Corrupt monsters, scaling with Base Level. Also grants a chance to activate Demon Bane for 10s when deals damage to these monsters.
[Lv. 1]: Mastery +3. Chance: 1% 
[Lv. 2]: Mastery +6. Chance: 2% 
[Lv. 3]: Mastery +9. Chance: 3% 
[Lv. 4]: Mastery +12. Chance: 4% 
[Lv. 5]: Mastery +15. Chance: 5% 
[Lv. 6]: Mastery +18. Chance: 6% 
[Lv. 7]: Mastery +21. Chance: 7% 
[Lv. 8]: Mastery +24. Chance: 8% 
[Lv. 9]: Mastery +27. Chance: 9% 
[Lv.10]: Mastery +30. Chance: 10%`,
    img: demonBane, 
  },
  {
    id: "heal",
    level: 0,
    dependencies: [],
    dependent: [
      { id: "cure" },
      { id: "increaseAgility" },
      { id: "decreaseAgility" },
      { id: "safetyWal" },
      { id: "sanctuary" },
      { id: "basilica" },
    ], 
    element: null,
    skillName: "Heal",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Type: Supportive
Target: Ally
After Cast Delay: 1s
Range: 9
Requirement: None
Description: Restores the target's HP, scaling with MATK and the Weapon's Level.
Against Undead and Corrupt monsters, deals Holy property M.DMG damage equal to 75% of the amount of the HP restored. 
[Lv. 1]: SP Cost: 13
[Lv. 2]: SP Cost: 16
[Lv. 3]: SP Cost: 19
[Lv. 4]: SP Cost: 22
[Lv. 5]: SP Cost: 25
[Lv. 6]: SP Cost: 28
[Lv. 7]: SP Cost: 31
[Lv. 8]: SP Cost: 34 
[Lv. 9]: SP Cost: 37 
[Lv.10]: SP Cost: 40
Formula: Heal: MATK + (((Skill Lv x 100) / 4) x Weapon Lv) `,
    img: heal, 
  },
  {
    id: "cure",
    level: 0,
    dependencies: [{ id: "heal", minLevel: 2 }],
    dependent: [],
    element: null,
    skillName: "Cure",
    maxLevel: 5,
    inform: `Max Lv: 1 (or 5)
Skill Form: Active
Type: Supportive
Target: Ally
Cooldown: 35
Range: 9
Requirement: Heal Lv: 2
Description: Attempts to remove Silence, Chaos and Blind from the target.
The chance scales with the user's INT and Base Level, and target's INT, LUK and Base Level.
Also grants +20% resistance to the removed statuses for 10s in a successful attempt.

Silence Chance (%): ((Base Lv x 10) + (INT x 40) + (Target Base Lv x 10) + (Target INT x 40)) / 100 
Chaos Chance (%): ((Base Lv x 10) + (INT x 40)) + (Target Base Lv x 10) + (Target LUK × 40)) / 100
Blind Chance (%): ((Base Lv x 10) + (INT x 40) + (Target Base Lv x 10) + (Target INT x 20) + (Target LUK x 20)) / 100 `,
    img: cure, 
  },
  {
    id: "angelus",
    level: 0,
    dependencies: [{ id: "divineProtection", minLevel: 3 }],
    dependent: [
      { id: "kyrieEleison" }, 
      { id: "assumptio" },
    ],
    element: null,
    skillName: "Angelus",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Supportive 
Target: Ally
Variable Cast Time: 0.70s
Fixed Cast Time: 0.30s
After Cast Delay: 1s 
Cooldown: A.Delay 
Range: 9
Requirement: Divine Protection Lv: 3
Description: Increases VIT, S.DEF and Max HP of the target for 240s.
The VIT bonus scales with Job Level, and the Max HP bonus scales with the target's Base Level.
[Lv. 1]; VIT +1. S.DEF +7%, SP Cost: 22 
[Lv. 2]: VIT +2. S.DEF +9%, SP Cost: 24 
[Lv. 3]: VIT +3. S.DEF +11%, SP Cost: 26 
[Lv. 4]: VIT +4. S.DEF +13%, SP Cost: 28 
[Lv. 5]: VIT +5. S.DEF +15%, SP Cost: 30
[Lv. 6]; VIT +6. S.DEF +17%, SP Cost: 32 
[Lv. 7]: VIT +7. S.DEF +19%, SP Cost: 34 
[Lv. 8]: VIT +8. S.DEF +21%, SP Cost: 36 
[Lv. 9]: VIT +9. S.DEF +23%, SP Cost: 38 
[Lv. 10]: VIT +10. S.DEF +25%, SP Cost: 40
Formula: VIT Bonus: Skill Lv + (Job Lv / 14) 
MaxHP Bonus: (Skill Lv + 5) x Target Base Lv `,
    img: angelus, 
  },
  {
    id: "blessing",
    level: 0,
    dependencies: [{ id: "divineProtection", minLevel: 5 }],
    dependent: [],
    element: null,
    skillName: "Blessing",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Supportive
Target: Ally
Range: 9
Requirement: Divine Protection Lv: 5
Description: Increases STR, INT and DEX of the target for 240s, scaling with Job Level.
Also reduces its skill's VCT.
Has a chance to remove Curse, which scales with the user's INT and Base Level, and the target's LUK and Base Level.
Deals M.DMG against Demon, Undead and Corrupt monsters. Also decreases their STR, INT and DEX by 50% for 240s.
[Lv. 1]: Stats +1. VCT -1%, SP Cost: 22 
[Lv. 2]: Stats +2. VCT -2%, SP Cost: 24 
[Lv. 3]: Stats +3. VCT -3%, SP Cost: 26 
[Lv. 4]: Stats +4. VCT -4%, SP Cost: 28 
[Lv. 5]: Stats +5, VCT -5%, SP Cost: 30
[Lv. 6]: Stats +6. VCT -6%, SP Cost: 32 
[Lv. 7]: Stats +7. VCT -7%, SP Cost: 34 
[Lv. 8]: Stats +8. VCT -8%, SP Cost: 36 
[Lv. 9]: Stats +9. VCT -9%, SP Cost: 38 
[Lv. 10]: Stats +10, VCT -10%, SP Cost: 40
Formula: Stats Bonus: Skill Lv + (Job Lv / 14)
MATK (%): 50
Chance (%); ((Base Lv x 10) + (INT x 40)) + (Target Base Lv x 10) + (Target LUK x 40)) / 100 `,
    img: blessing, 
  },
  {
    id: "increaseAgility",
    level: 0,
    dependencies: [{ id: "heal", minLevel: 3 }],
    dependent: [{ id: "decreaseAgility" }],
    element: null,
    skillName: "Increase Agility",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Supportive
Target: Ally
Variable Cast Time: 1.40s
Fixed Cast Time: 0.60s
After Cast Delay: 1s
Cooldown: Cooldown
Requirement: Heal Lv: 3
Description: Reduces DAA and increases AGI of the target. Also reduces its WD by 18%, The AGI bonus scales with Job Level.
[Lv. 1]: AGI +1. DAA -1%, SP Cost: 22 
[Lv. 2]: AGI +2. DAA -2%, SP Cost: 24 
[Lv. 3]: AGI +3. DAA -3%, SP Cost: 26 
[Lv. 4]: AGI +4. DAA -4%, SP Cost: 28 
[Lv. 5]: AGI +5. DAA -5%, SP Cost: 30 
[Lv. 6]: AGI +6. DAA -6%, SP Cost: 32 
[Lv. 7]: AGI +7. DAA -7%, SP Cost: 34 
[Lv. 8]: AGI +8. DAA -8%, SP Cost: 36 
[Lv. 9]: AGI +9. DAA -9%, SP Cost: 38 
[Lv.10]: AGI +10. DAA -10%, SP Cost: 40
Formula: AGI Bonus: Skill Lv + (Job Lv / 14) `,
    img: increaseAgility, 
  },  
  {
    id: "decreaseAgility",
    level: 0,
    dependencies: [{ id: "increaseAgility", minLevel: 1 }],
    dependent: [],
    element: null,
    skillName: "Decrease Agility",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Enemy
Variable Cast Time: 0.70s
Fixed Cast Time: 0.30s
After Cast Delay: A.Delay 0.28s Cooldown: A.Delay
Range: 9
Requirement: Increase Agility Lv: 1
Description: Reduces AGI of the target. Also increases its WD by 10%. 
The AGI reduction scales with Job Level. 
[Lv. 1]: AGI -1. Duration: 15s. SP Cost: 22 
[Lv. 2]: AGI -2. Duration: 20s. SP Cost: 24 
[Lv. 3]: AGI -3. Duration: 25s. SP Cost: 26 
[Lv. 4]: AGI -4. Duration: 30s. SP Cost: 28 
[Lv. 5]: AGI -5. Duration: 35s. SP Cost: 30 
[Lv. 6]: AGI -6. Duration: 40s. SP Cost: 32 
[Lv. 7]: AGI -7. Duration: 45s. SP Cost: 34 
[Lv. 8]: AGI -8. Duration: 50s. SP Cost: 36 
[Lv. 9]: AGI -9. Duration: 55s. SP Cost: 38 
[Lv.10]: AGI -10. Duration: 60s. SP Cost: 40
Formula: AGI Decrease: Skill Lv + (Job Lv / 14) `,
    img: decreaseAgility, 
  },
  {
    id: "holyLight",
    level: 0,
    dependencies: [],
    dependent: [
      { id: "magnusExorcismus" },
      { id: "turnUndead" },
    ],
    element: null,
    skillName: "Holy Light",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Physical or Magical
Target: Enemy
Element: Holy
After Cast Delay: A.Delay - 0.465
Cooldown: A.Delay
Hits: 2
Requirement: None
Description: Deals P.DMG or M.DMG to the target based on Weapon type.
Enemies within a 3x3 AoE around the target receive half of the damage.
[Lv. 1]: ATK/MATK 135%, SP Cost: 11 VCT: 0.10s. FCT: 0.04s
[Lv. 2]: ATK/MATK 170%, SP Cost: 12 VCT: 0.20s. FCT: 0.08s
[Lv. 3]: ATK/MATK 205%, SP Cost: 13 VCT: 0.30s. FCT: 0.125
[Lv. 4]: ATK/MATK 240%, SP Cost: 14 VCT: 0.40s. FCT: 0.16s
[Lv. 5]: ATK/MATK 275%, SP Cost: 15 VCT: 0.50s. FCT: 0.20s
[Lv. 6]: ATK/MATK 310%, SP Cost: 16 VCT: 0.60s. FCT: 0.24s
[Lv. 7]: ATK/MATK 345%, SP Cost: 17 VCT: 0.70s. FCT: 0.28s
[Lv. 8]: ATK/MATK 380%, SP Cost: 18 VCT: 0.80s. FCT: 0.32s
[Lv. 9]: ATK/MATK 415%, SP Cost: 19 VCT: 0.90s. FCT: 0.36s
[Lv.10]: ATK/MATK 450%, SP Cost: 20 VCT: 1.00s. FCT: 0.40s`,
    img: holyLight, 
  },
  {
    id: "ruwach",
    level: 0,
    dependencies: [],
    dependent: [
      { id: "teleport" },
      { id: "warpPortal" },
      { id: "pneuma" },
      { id: "lexAeterna" },
      { id: "lexDivina" },
      { id: "magnusExorcismus" },
      { id: "turnUndead" },
      { id: "meditatio" },
    ],
    element: null,
    skillName: "Ruwach",
    maxLevel: 1,
    inform: `Max Lv: 1
Skill Form: Active
Type: Supportive 
Target: Self
After Cast Delay: A.Delay - 0.285 
Cooldown: A.Delay
SP Cost: 10
Requirement: None 
Description: Reveals Invisible enemies within a 7x7 AoE for 10s.`,
    img: ruwach, 
  },
  {
    id: "teleport",
    level: 0,
    dependencies: [{ id: "ruwach", minLevel: 1 }],
    dependent: [{ id: "warpPortal" }],
    element: null,
    skillName: "Teleport",
    maxLevel: 2,
    inform: `Max Lv: 2
Skill Form: Active
Type: Supportive 
Target: Self
After Cast Delay: 1s
Cooldown: 3s
Requirement: Ruwach Lv: 1
Description: Warps the user to a different location instantly.
Cannot be used while standing on a Land Protector cell.
[Lv. 1]: Random Spot. SP Cost: 10 
[Lv. 2]: Save Point. SP Cost: 9`,
    img: teleport, 
  },
  {
    id: "warpPortal",
    level: 0,
    dependencies: [{ id: "teleport", minLevel: 2 },],
    dependent: [{ id: "pneuma" }], 
    element: null,
    skillName: "Warp Portal",
    maxLevel: 3,
    inform: `Max Lv: 3
Skill Form: Active
Type: Supportive 
Target: Ground
After Cast Delay: 1s 
Fixed Cast Time: 1s
Max Instances: 3 
Range: 9
Requirement: Teleport Lv: 2
Description: Opens a list of Memo Points. Creates a portal at the targeted location to the selected memo point. Up to 8 players can cross the portal.
Older instances are removed to create new ones when reaching the instance limit.
Catalyst: 1x Blue Gemstone
[Lv. 1]: Memo Points: 1. SP Cost: 35 Duration: 10s
[Lv. 2]: Memo Points: 2. SP Cost: 32 Duration: 15s
[Lv. 3]: Memo Points: 3. SP Cost: 29 Duration: 20s`,
    img: warpPortal, 
  },
  {
    id: "pneuma",
    level: 0,
    dependencies: [
      { id: "warpPortal", minLevel: 3 }, 
    ],
    dependent: [],
    element: null,
    skillName: "Pneuma",
    maxLevel: 1,
    inform: `Max Lv: 1
Skill Form: Active
Type: Supportive 
Target: Ground
After Cast Delay: 0.50s 
Cooldown: 0.50s
Max Instances: 3 
Range: 9
SP Cost: 10
Requirement: Warp Portal Lv: 3
Description: Creates a pillar at the targeted location, blocking all ranged P.DMG until its durability runs out or it reaches its 10-hit limit.
The blocked damage is transferred to the pillar, reducing its durability.
The durability scales with INT, Max SP and Base Level.
Older instances are removed to create new ones when reaching the instance limit.

Durability: 300+ (65 x (INT + Base Lv)) + MaxSP `,
    img: pneuma, 
  },
];


/*  author Chalykh Maksim 
  # data 10.02.2025 
  # email: chalyh.maksim.88@mail.ru */
