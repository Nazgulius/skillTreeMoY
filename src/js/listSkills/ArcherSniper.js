/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */

import skillImgNo from '../../img/no_img.png'; // заглушка
import trueSight from '../../img/icon_snp/icon_snp_1.png';
import falconAssault from '../../img/icon_snp/icon_snp_2.png';
import sharpShooting from '../../img/icon_snp/icon_snp_3.png';
import windWalk from '../../img/icon_snp/icon_snp_4.png';
import quickDraw from '../../img/icon_snp/icon_snp_5.png';
import detonator from '../../img/icon_snp/icon_snp_7.png';

// список скилов Sniper
export const skillsSniper = [  
  {
    id: "detonator",
    level: 0,
    dependencies: [
      { id: "landMine", minLevel: 4 },
      { id: "skidTrap", minLevel: 4 },
      { id: "blastMine", minLevel: 3 },
      { id: "ankleSnare", minLevel: 3 },
      { id: "glacialTrap", minLevel: 2 },
      { id: "flasher", minLevel: 2 },
      { id: "claymoreTrap", minLevel: 1 },
      { id: "sandman", minLevel: 1 },
    ],
    dependent: [],
    element: null,
    skillName: "Detonator",
    maxLevel: 1,
    inform: `Max Lv: 1
Skill Form: Active
Type: Supportive 
Target: Ground
After Cast Delay: A.Delay 0.34s 
Cooldown: A.Delay
Range: 9
SP Cost: 15
Requirement: Land Mine Lv: 4, Skid Trap Lv: 4, Blast Mine Lv: 3, Ankle Snare Lv: 3, Glacial Trap Lv: 2, Flasher Lv: 2, Claymore Trap Lv: 1, Sandman Lv: 1
Description: Activates all owned traps within a 7x7 AoE. Triggered traps expand their AoE to 7x7.`,
    img: detonator,
  },
  {
    id: "falconAssault",
    level: 0,
    dependencies: [
      { id: "steelCrow", minLevel: 6 },
      { id: "blitzBeat", minLevel: 7 },
    ],
    dependent: [],
    element: null,
    skillName: "Falcon Assault",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Supportive
Target: Enemy
Variable Cast Time: 1.20s
After Cast Delay: A.Delay - 0.14s
Cooldown: 10s
Range: 12
Hits: 1
Requirement: Steel Crow Lv: 6, Blitz Beat Lv: 7
Description: Marks a Monster or Job Class for the next 300s.
The Falcon will automatically and randomly attack any nearby marked enemy, dealing M.DMG that scales with Base Level and the learned levels of Blitz Beat and Steel Crow. Has a chance to inflict Bleeding for 20s. Attack interval scales with LUK, skill level, VCT reductions and the learned level of Falconry Mastery.
Effect is canceled if used on the same target.
Requires a Falcon.
[Lv. 1]: Bleeding Chance: 2%, SP Cost: 7 
[Lv. 2]: Bleeding Chance: 4%, SP Cost: 14 
[Lv. 3]: Bleeding Chance: 6%, SP Cost: 21 
[Lv. 4]: Bleeding Chance: 8%, SP Cost: 28 
[Lv. 5]: Bleeding Chance: 10%, SP Cost: 35 
[Lv. 6]: Bleeding Chance: 12%, SP Cost: 42 
[Lv. 7]: Bleeding Chance: 14%, SP Cost: 49 
[Lv. 8]: Bleeding Chance: 16%, SP Cost: 56 
[Lv. 9]: Bleeding Chance: 18%, SP Cost: 63 
[Lv.10]: Bleeding Chance: 20%, SP Cost: 70
Formula: MATK (%): (50 x Blitz Beat Lv) + (Base Lv x 3)
Interval (s): 4500 - (Skill Lv x 150) + (750 - Reductions) + (750 - (750 x Bonus) / 100) / 1000
Bonus: (LUK / 3) + (2 x Falconry Mastery Lv)
The bonus doubles while wielding a Dagger or bare handed `,
    img: falconAssault,
  },
  {
    id: "quickDraw",
    level: 0,
    dependencies: [
      { id: "owlsEye", minLevel: 10 },
      { id: "vulturesEye", minLevel: 10 },
      { id: "improveConcentration", minLevel: 10 },
    ],
    dependent: [],
    element: null,
    skillName: "Quick Draw",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Toggle 
Type: Supportive 
Target: Self
Variable Cast Time: 2s
Fixed Cast Time: 0.50s
After Cast Delay: 0.30s
Cooldown: A.Delay + 35
Requirement: Owl's Eye Lv: 10, Vulture's Eye Lv: 10, Improve Concentration Lv: 10
Description: Increases ASPD and CRIT, but reduces FLEE.
Grants a chance to hit twice when performing basic attacks.
Cancels the effect of True Sight.
[Lv. 1]: ASPD +2%, CRIT +2. SP Cost: 13 Double Chance: 7%, FLEE -47%
[Lv. 2]: ASPD +4%, CRIT +4. SP Cost: 16 Double Chance: 9%, FLEE -44%
[Lv. 3]: ASPD +6%, CRIT +6. SP Cost: 19 Double Chance: 11%, FLEE -41%
[Lv. 4]: ASPD +8%, CRIT +8. SP Cost: 22 Double Chance: 13%, FLEE -38%
[Lv. 5]: ASPD +10%, CRIT +10. SP Cost: 25 Double Chance: 15%, FLEE -35%
[Lv. 6]: ASPD +12%, CRIT +12. SP Cost: 28 Double Chance: 17%, FLEE -32%
[Lv. 7]: ASPD +14%, CRIT +14. SP Cost: 31 Double Chance: 19%, FLEE -29%
[Lv. 8]: ASPD +16%, CRIT +16. SP Cost: 34 Double Chance: 21%, FLEE -26%
[Lv. 9]: ASPD +18%, CRIT +18. SP Cost: 37 Double Chance: 23%, FLEE -23%
[Lv.10]: ASPD +20%, CRIT +20. SP Cost: 40 Double Chance: 25%, FLEE -20%`,
    img: quickDraw,
  },
  {
    id: "sharpShooting",
    level: 0,
    dependencies: [
      { id: "improveConcentration", minLevel: 10 },
      { id: "doubleStrafe", minLevel: 7 },
      { id: "chargeArrow", minLevel: 10 },
    ],
    dependent: [],
    element: null,
    skillName: "Sharp Shooting",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Weapon: Bow 
Type: Physical
Target: Enemy
Element: Ammunition
Fixed Cast Time: 0.60s
After Cast Delay: A.Delay 0.14s
Cooldown: 2s
Max Instances: 20
Range: 1 + Weapon's range
Hits: 1
Requirement: Improve Concentration Lv: 10, Double Strafe Lv: 7, Charge Arrow Lv: 10
Description: Deals ranged P.DMG to enemies in the direction of the target, scaling with Base Level.
Damage is reduced by 5% for each enemy hit.
VCT scales with skill level.
Catalyst: 1x Arrow
[Lv. 1]: ATK 210%, VCT: 0.50s. SP Cost: 14 
[Lv. 2]: ATK 320%, VCT: 0.60s. SP Cost: 16 
[Lv. 3]: ATK 430%, VCT: 0.70s. SP Cost: 18 
[Lv. 4]: ATK 540%, VCT: 0.80s, SP Cost: 20 
[Lv. 5]: ATK 650%, VCT: 0.90s. SP Cost: 22 
[Lv. 6]: ATK 760%, VCT: 1.00s. SP Cost: 24 
[Lv. 7]: ATK 870%, VCT: 1.10s. SP Cost: 26 
[Lv. 8]: ATK 980%, VCT: 1.20s. SP Cost: 28 
[Lv. 9]: ATK 1090%, VCT: 1.30s. SP Cost: 30 
[Lv.10]: ATK 1200%, VCT: 1.40s, SP Cost: 32
Formula: ATK (%): ((100 + (110 x Skill Lv)) x Base Lv) / 80 `,
    img: sharpShooting,
  },
  {
    id: "trueSight",
    level: 0,
    dependencies: [
      { id: "owlsEye", minLevel: 10 },
      { id: "vulturesEye", minLevel: 10 },
      { id: "improveConcentration", minLevel: 10 },
    ],
    dependent: [],
    element: null,
    skillName: "True Sight",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Supportive 
Target: Self
Variable Cast Time: 2s
Fixed Cast Time: 0.50s
After Cast Delay: 0.30s
Cooldown: A.Delay + 35
Requirement: Owl's Eye Lv: 10, Vulture's Eye Lv: 10, Improve Concentration Lv: 10
Description: Increases ACC, CRIT and P.DMG, but reduces ASPD. Does not increase Trap and Falcon skill P.DMG.
Cancels the effect of Quick Draw.
[Lv. 1]: ACC +2%, CRIT +2. P.DMG +7% ASPD -47%, SP Cost: 13
[Lv. 2]: ACC +4%, CRIT +4. P.DMG +9% ASPD -44%, SP Cost: 16
[Lv. 3]: ACC +6%, CRIT +6. P.DMG +11% ASPD -41%, SP Cost: 19
[Lv. 4]: ACC +8%, CRIT +8. P.DMG +13% ASPD -38%, SP Cost: 22
[Lv. 5]: ACC +10%, CRIT +10. P.DMG +15% ASPD -35%, SP Cost: 25
[Lv. 6]: ACC +12%, CRIT +12. P.DMG +17% ASPD -32%, SP Cost: 28
[Lv. 7]: ACC +14%, CRIT +14. P.DMG +19% ASPD -29%, SP Cost: 31
[Lv. 8]: ACC +16%, CRIT +16. P.DMG +21% ASPD -26%, SP Cost: 34
[Lv. 9]: ACC +18%, CRIT +18. P.DMG +23% ASPD -23%, SP Cost: 37
[Lv.10]: ACC +20%, CRIT +20. P.DMG +25% ASPD -20%, SP Cost: 40`,
    img: trueSight,
  },
  {
    id: "windWalk",
    level: 0,
    dependencies: [
      { id: "improveConcentration", minLevel: 9 },
    ],
    dependent: [],
    element: null,
    skillName: "Wind Walk",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Supportive
Target: Self
After Cast Delay: 0.30s 
Cooldown: A.Delay
Requirement: Improve Concentration Lv: 9
Description: Reduces WD and increases FLEE of nearby allies for 210s.
VCT and FCT scales with skill level.
[Lv. 1]: VCT: 1.50s. FCT: 0.30s. SP Cost: 26 WD -12%, FLEE +1%
[Lv. 2]: VCT: 1.80s. FCT: 0.40s. SP Cost: 32 WD -14%, FLEE +2%
[Lv. 3]: VCT: 2.10s. FCT: 0.50s. SP Cost: 38 WD -16%, FLEE +3%
[Lv. 4]: VCT: 2.40s. FCT: 0.60s. SP Cost: 44 WD -18%, FLEE +4%
[Lv. 5]: VCT: 2.70s. FCT: 0.70s. SP Cost: 50 WD -20%, FLEE +5%
[Lv. 6]: VCT: 3.00s. FCT: 0.80s. SP Cost: 56 WD -22%, FLEE +6%
[Lv. 7]: VCT: 3.30s. FCT: 0.90s. SP Cost: 62 WD -24%, FLEE +7%
[Lv. 8]: VCT: 3.60s. FCT: 1.00s. SP Cost: 68 WD -26%, FLEE +8%
[Lv. 9]: VCT: 3.90s. FCT: 1.10s. SP Cost: 74 WD -28%, FLEE +9%
[Lv.10]: VCT: 4.20s. FCT: 1.20s. SP Cost: 80 WD -30%, FLEE +10%`,
    img: windWalk,
  },
];


/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */
