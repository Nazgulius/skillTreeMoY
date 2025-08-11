/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */

import skillImgNo from '../../img/no_img.png'; // заглушка
import doubleStrafe from '../../img/icon_arc/icon_arc_3.png';
import improveConcentration from '../../img/icon_arc/icon_arc_2.png';
import arrowShower from '../../img/icon_arc/icon_arc_1.png';
import owlsEye from '../../img/icon_arc/icon_arc_4.png';
import vulturesEye from '../../img/icon_arc/icon_arc_5.png';
import chargeArrow from '../../img/icon_arc/icon_arc_7.png';
import fletchery from '../../img/icon_arc/icon_arc_8.png';
import quivery from '../../img/icon_arc/icon_arc_9.png';

// список скилов Archer
export const skillsArcher = [  
  {
    id: "doubleStrafe",
    level: 0,
    dependencies: [],
    dependent: [
      { id: "arrowShower" },
      { id: "sharpShooting" },
      { id: "arrowVulcan" },
    ],
    element: null,
    skillName: "Double Strafe",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Weapon: Bow 
Type: Physical
Target: Enemy
Element: Ammunition
After Cast Delay: A.Delay - 0.22s
Cooldown: A.Delay
Range: Weapon's range
Hits: 2
Requirement: None
Description: Deals ranged P.DMG to the target.
Catalyst: 1x Arrow
[Lv. 1]: ATK 110% x Hits. SP Cost: 6 
[Lv. 2]: ATK 120% x Hits. SP Cost: 6 
[Lv. 3]: ATK 130% x Hits. SP Cost: 7 
[Lv. 4]: ATK 140% x Hits. SP Cost: 7 
[Lv. 5]: ATK 150% x Hits. SP Cost: 8
[Lv. 6]: ATK 160% x Hits. SP Cost: 8 
[Lv. 7]: ATK 170% x Hits. SP Cost: 9 
[Lv. 8]: ATK 180% x Hits. SP Cost: 9 
[Lv. 9]: ATK 190% x Hits. SP Cost: 10 
[Lv.10]: ATK 200% x Hits. SP Cost: 10
Formula: ATK (%): (100 + (10 x Skill Lv)) x Hits `,
    img: doubleStrafe,
  },
  {
    id: "arrowShower",
    level: 0,
    dependencies: [
      { id: "doubleStrafe", minLevel: 5 }
    ],
    dependent: [      
      { id: "arrowVulcan" },
    ],
    element: null,
    skillName: "Arrow Shower",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Weapon: Bow/Instrument/Whip
Type: Physical
Target: Ground
Element: Ammunition
Variable Cast Time: 0.38s
After Cast Delay: A.Delay - 0.22s 
Cooldown: 6s
Range: 12
Hits: 4
Requirement: Double Strafe Lv: 5
Description: Deals ranged P.DMG to enemies within a 7x7 AoE at the targeted location, hitting in waves every 0.2s.
Damage scales with Base Level, and wave
interval scales with A.Delay.
Catalyst: 1x Arrow!
[Lv. 1]: ATK 55% x Waves Duration: 2.00s. SP Cost: 7
[Lv. 2]: ATK 60% x Waves Duration: 2.10s. SP Cost: 9 
[Lv. 3]: ATK 65% x Waves Duration: 2.30s. SP Cost: 11 
[Lv. 4]: ATK 70% x Waves Duration: 2.50s. SP Cost: 13 
[Lv. 5]: ATK 75% x Waves Duration: 2.70s. SP Cost: 15 
[Lv. 6]: ATK 80% x Waves Duration: 2.90s. SP Cost: 17 
[Lv. 7]: ATK 85% x Waves Duration: 3.10s. SP Cost: 19 
[Lv. 8]: ATK 90% x Waves Duration: 3.30s. SP Cost: 21 
[Lv. 9]: ATK 95% x Waves Duration: 3.50s. SP Cost: 23 
[Lv.10]: ATK 100% x Waves Duration: 3.70s. SP Cost: 25
Formula: ATK (%): (50 + (5 × Skill Lv)) x (1 + ((Base Lv^2) / 10000)) x Waves `,
    img: arrowShower,
  },
  {
    id: "chargeArrow",
    level: 0,
    dependencies: [],
    dependent: [
      { id: "sharpShooting" },
    ],
    element: null,
    skillName: "Charge Arrow",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Weapon: Bow/Instrument/Whip
Type: Physical
Target: Enemy
Element: Ammunition
After Cast Delay: A.Delay 0.22s 
Cooldown: A.Delay + 0.36s
Range: Weapon's range
Requirement: None
Description: Deals ranged P.DMG to the target, Knocking it back 6 cells and temporarily increasing its WD by 15%.
Catalyst: 1x Arrow
[Lv. 1]: ATK 140%, SP Cost: 6 WD Duration: 1.40s
[Lv. 2]: ATK 180%, SP Cost: 7 WD Duration: 1.80s
[Lv. 3]: ATK 220%, SP Cost: 8 WD Duration: 2.20s
[Lv. 4]: ATK 260%, SP Cost: 9 WD Duration: 2.60s
[Lv. 5]: ATK 300%, SP Cost: 10 WD Duration: 3.00s
[Lv. 6]: ATK 340%, SP Cost: 11 WD Duration: 3.40s
[Lv. 7]: ATK 380%, SP Cost: 12 WD Duration: 3.80s
[Lv. 8]: ATK 420%, SP Cost: 13 WD Duration: 4.20s
[Lv. 9]: ATK 460%, SP Cost: 14 WD Duration: 4.60s
[Lv.10]: ATK 500%, SP Cost: 15 WD Duration: 5.00s
Formula: ATK (%): 100 + (40 x Skill Lv) `,
    img: chargeArrow,
  },
  {
    id: "owlsEye",
    level: 0,
    dependencies: [],
    dependent: [
      { id: "vulturesEye" },
      { id: "fletchery" },
      { id: "quivery" },
      { id: "improveConcentration" },
      { id: "quickDraw" },
      { id: "trueSight" },
    ],
    element: null,
    skillName: "Owl's Eye",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Passive
Type: Misc
Requirement: None
Description: Increases DEX and ACC
[Lv. 1]: DEX +1. ACC +1%
[Lv. 2]: DEX +2. ACC +2%
[Lv. 3]: DEX +3, ACC +3% 
[Lv. 4]: DEX +4, ACC +4% 
[Lv. 5]: DEX +5. ACC +5% 
[Lv. 6]: DEX +6. ACC +6% 
[Lv. 7]: DEX +7, ACC +7% 
[Lv. 8]: DEX +8. ACC +8% 
[Lv. 9]: DEX +9, ACC +9% 
[Lv.10]: DEX +10. ACC +10%`,
    img: owlsEye,
  },
  {
    id: "vulturesEye",
    level: 0,
    dependencies: [{ id: "owlsEye", minLevel: 3 },],
    dependent: [
      { id: "improveConcentration" },
      { id: "quickDraw" },
      { id: "trueSight" },
    ],
    element: null,
    skillName: "Vulture's Eye",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Passive
Type: Misc
Weapon: Bow/Instrument/Whip
Requirement: Owl's Eye Lv: 3
Description: Increases E.ATK and Range while wielding a Bow, Instrument or Whip. Hunters, Bards and Gypsies gain extra E.ATK. At max level, also grants +6% ACC.
[Lv. 1]: E.ATK +2. Range +2 
[Lv. 2]: E.ATK +4. Range +2
[Lv. 3]: E.ATK +6. Range +3 
[Lv. 4]: E.ATK +8. Range +3 
[Lv. 5]: E.ATK +10. Range +4 
[Lv. 6]: E.ATK +12. Range +4 
[Lv. 7]: E.ATK +14. Range +5 
[Lv. 8]: E.ATK +16. Range +5 
[Lv. 9]: E.ATK +18. Range +6 
[Lv.10]: E.ATK +20. Range +6`,
    img: vulturesEye,
  },
  {
    id: "improveConcentration",
    level: 0,
    dependencies: [
      { id: "vulturesEye", minLevel: 1 },
    ],
    dependent: [
      { id: "quickDraw" },
      { id: "sharpShooting" },
      { id: "trueSight" },
      { id: "windWalk" },
      { id: "moonlitWaterMill" },
      { id: "tarotCardOfFate" },
    ],
    element: null,
    skillName: "Improve Concentration",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Supportive 
Target: Self
After Cast Delay: 0.30s
Cooldown: A.Delay
Requirement: Vulture's Eye Lv: 1
Description: Boosts DEX and AGI for 240s.
Reveals Invisible enemies within a 3x3 AoE when used.
[Lv. 1]: DEX/AGI +3%
[Lv. 2]: DEX/AGI +4%
[Lv. 3]: DEX/AGI +5%
[Lv. 4]: DEX/AGI +6%
[Lv. 5]: DEX/AGI +7% 
[Lv. 6]: DEX/AGI +8% 
[Lv. 7]: DEX/AGI +9% 
[Lv. 8]: DEX/AGI +10% 
[Lv. 9]: DEX/AGI +11% 
[Lv.10]: DEX/AGI +12%`,
    img: improveConcentration,
  },
  {
    id: "fletchery",
    level: 0,
    dependencies: [{ id: "owlsEye", minLevel: 3 }],
    dependent: [
      { id: "quivery" },
    ],
    element: null,
    skillName: "Fletchery",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Supportive 
Target: Self
Requirement: Owl's Eye Lv: 3
Description: Crafts arrows from items.
Base Level, Job Level, and Stats increase the number of crafted arrows.
Guide: Flechery Creation Guide
[Lv. 1]: Bonus Efficiency: 0%, SP Cost: 2 
[Lv. 2]: Bonus Efficiency: 25%, SP Cost: 4 
[Lv. 3]: Bonus Efficiency: 50%, SP Cost: 6 
[Lv. 4]: Bonus Efficiency: 75%, SP Cost: 8 
[Lv. 5]: Bonus Efficiency: 100%, SP Cost: 10
Crafted Arrows :
Base Amount + Bonus Amount
Bonus Amount:
((Base Amount x ((Level Bonus + Stats Bonus) x ((Skill Lv x 25) - 25))) / 100)

Level Bonus: 
((Base Lv x 100) / 200) + ((Job Lv x 100) / 140) / 100

Stats Bonus:
((STR^2 / 10) + (AGI^2 / 10) + (VIT^2 / 10) + (INT^2) + (DEX^2 / 10) + (LUK^2 / 10)) / 100

Random Bonus Amount:
10% chance for the bonus to be reduced to 25%
70% chance for the bonus to be reduced to 50%
 20% chance for no reductions `,
    img: fletchery,
  },
  {
    id: "quivery",
    level: 0,
    dependencies: [
      { id: "fletchery", minLevel: 3 },
    ],
    dependent: [],
    element: null,
    skillName: "Quivery",
    maxLevel: 1,
    inform: `Max Lv: 1
Skill Form: Active
Type: Supportive 
Target: Self
SP Cost: 20
Requirement: Fletchery Lv: 3
Description: Stores arrows inside a Quiver. Each Quiver stores 500 arrows of the same type.
Catalyst: 1x Empty Quiver `,
    img: quivery,
  },
];


/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */
