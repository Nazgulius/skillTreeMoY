/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */

import skillImgNo from '../../img/no_img.png'; // заглушка
import doubleAttack from '../../img/icon_thf/icon_thf_1.png';
import detoxify from '../../img/icon_thf/icon_thf_2.png';
import envenom from '../../img/icon_thf/icon_thf_9.png';
import hiding from '../../img/icon_thf/icon_thf_4.png';
import improveDodge from '../../img/icon_thf/icon_thf_5.png';
import steal from '../../img/icon_thf/icon_thf_6.png';
import sprinkleSand from '../../img/icon_thf/icon_thf_10.png';
import throwStone from '../../img/icon_thf/icon_thf_11.png';

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
Description: Increases FLEE and reduces WD.
[Lv. 1]: FLEE +3. WD -1%
[Lv. 2]: FLEE +6. WD -2%
[Lv. 3]: FLEE +9. WD -3%
[Lv. 4]: FLEE +12. WD -4% 
[Lv. 5]: FLEE +15. WD -5% 
[Lv. 6]: FLEE +18. WD -6% 
[Lv. 7]: FLEE +21. WD -7% 
[Lv. 8]: FLEE +24. WD -8% 
[Lv. 9]: FLEE +27. WD -9% 
[Lv. 10]: FLEE +30. WD -10%`,
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
Weapon: Dagger
Type: Physical
Range: 1
Requirement: None
Description: Grants a chance for basic attacks to hit twice. When this happens, both hits have increased ACC
[Lv. 1]: Chance: 7%, ACC +1 
[Lv. 2]: Chance: 14%, ACC +2
[Lv. 3]: Chance: 21%, ACC +3 
[Lv. 4]: Chance: 28%, ACC +4 
[Lv. 5]: Chance: 35%, ACC +5 
[Lv. 6]: Chance: 42%, ACC +6 
[Lv. 7]: Chance: 49%, ACC +7 
[Lv. 8]: Chance: 56%, ACC +8 
[Lv. 9]: Chance: 63%, ACC +9 
[Lv.10]: Chance: 70%, ACC +10`,
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
Type: Magical
Target: Enemy
Element: Poison
After Cast Delay: A.Delay 0.265
Cooldown: A.Delay
Range: 2+ Weapon's range
Hits: 1
Requirement: none
Description: Deals M.DMG to the target, scaling with Base Level.
Has a chance to inflict Poison for 60s.
[Lv. 1]: MATK 120%, SP Cost: 7 Poison Chance: 14%
[Lv. 2]: MATK 140%, SP Cost: 8 Poison Chance: 18%
[Lv. 3]: MATK 160%, SP Cost: 9 Poison Chance: 22%
[Lv. 4]: MATK 180%, SP Cost: 10 Poison Chance: 26%
[Lv. 5]: MATK 200%, SP Cost: 11 Poison Chance: 30%
[Lv. 6]: MATK 220%, SP Cost: 12 Poison Chance: 34%
[Lv. 7]: MATK 240%, SP Cost: 13 Poison Chance: 38%
[Lv. 8]: MATK 260%, SP Cost: 14 Poison Chance: 42%
[Lv. 9]: MATK 280%, SP Cost: 15 Poison Chance: 46%
[Lv. 10]: MATK 300%, SP Cost: 16 Poison Chance: 50%
Formula: MATK (%): 100 + (Skill Lv x 20) + (Base Lv x 3) `,
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
Type: Supportive 
Range: 9
After Cast Delay: 1s
Cooldown: 3s
SP Cost: 10
Requirement: Envenom Lv: 3
Description: Has a chance to clear Poison, scaling with both the user's INT and Base Level, as well as the target's VIT and Base Level.
If successful, grants +20% Poison resistance.
Formula: Chance (%): (Base Lv x 10) + (INT x 40)) + (Target Base Lv x 10) + (Target VIT x 40) `,
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
Type: Supportive
Target: Enemy
After Cast Delay: A.Delay 0.26s
Cooldown: A.Delay
Range: 1
Requirement: None
Description: Has a chance to steal an item
from normal monsters. Success chance scales with the level difference between user and monster.
[Lv. 1]: Steal Chance: 6%
[Lv. 2]: Steal Chance: 12% 
[Lv. 3]: Steal Chance: 18% 
[Lv. 4]: Steal Chance: 24% 
[Lv. 5]: Steal Chance: 30% 
[Lv. 6]: Steal Chance: 36% 
[Lv. 7]: Steal Chance: 42% 
[Lv. 8]: Steal Chance: 48% 
[Lv. 9]: Steal Chance: 54% 
[Lv.10]: Steal Chance: 60%
Formula: Steal Chance (%): (Skill Lv x 6) + ((Base Lv - Target Lv) / 2) `,
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
Skill Form: Toggle
Type: Supportive 
Target: Self
SP Cost: 10
Requirement: Steal Lv: 4
Description: Becomes Invisible and dodges enemy attacks.
While active, drains 1 SP per second and prevents any action. 
ACD scales with skill level.
[Lv. 1]: ACD: 1.00s. SP Drain: every 1s Duration: 30s
[Lv. 2]: ACD: 0.90s. SP Drain: every 2s Duration: 60s
[Lv. 3]: ACD: 0.80s. SP Drain: every 3s Duration: 90s
[Lv. 4]: ACD: 0.70s. SP Drain: every 4s Duration: 120s
[Lv. 5]: ACD: 0.60s. SP Drain: every 5s Duration: 150s
[Lv. 6]: ACD: 0.50s. SP Drain: every 6s Duration: 180s
[Lv. 7]: ACD: 0.40s. SP Drain: every 7s Duration: 210s
[Lv. 8]: ACD: 0.30s. SP Drain: every 8s Duration: 240s
[Lv. 9]: ACD: 0.20s. SP Drain: every 9s Duration: 270s
[Lv.10]: ACD: 0.10s. SP Drain: every 10s Duration: 300s`,
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
Element: Earth
After Cast Delay: A.Delay - 0.26s
Cooldown: A.Delay + 1s
Range: 3
Requirement: None
Description: Deals P.DMG to enemies within a 3x3 AoE around the target. Has a 20% chance to inflict Blind on them for 20s. 
[Lv. 1]: ATK 120%, SP Cost: 6
[Lv. 2]: ATK 140%, SP Cost: 6
[Lv. 3]: ATK 160%, SP Cost: 7
[Lv. 4]: ATK 180%, SP Cost: 7 
[Lv. 5]: ATK 200%, SP Cost: 8 
[Lv. 6]: ATK 220%, SP Cost: 8 
[Lv. 7]: ATK 240%, SP Cost: 9 
[Lv. 8]: ATK 260%, SP Cost: 9 
[Lv. 9]: ATK 280%, SP Cost: 10 
[Lv.10]: ATK 300%, SP Cost: 10
Formula: ATK (%): 100 + (Skill Lv x 20) `,
    img: sprinkleSand,
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
Element: Neutral
After Cast Delay: A.Delay - 0.26s 
Cooldown: A.Delay + 0.36s
Range: 7 
Hits: 1
SP Cost: 4
Requirement: None
Description: Deals ranged P.DMG scaling with STR and has a chance to inflict Stun.
Also deals 30% increased P.DMG to stunned enemies.
[Lv. 1]: ATK 110%, Stun Chance: 13% 
[Lv. 2]: ATK 120%, Stun Chance: 16% 
[Lv. 3]: ATK 130%, Stun Chance: 19% 
[Lv. 4]: ATK 140%, Stun Chance: 22% 
[Lv. 5]: ATK 150%, Stun Chance: 25%
[Lv. 6]: ATK 160%, Stun Chance: 28% 
[Lv. 7]: ATK 170%, Stun Chance: 31% 
[Lv. 8]: ATK 180%, Stun Chance: 34% 
[Lv. 9]: ATK 190%, Stun Chance: 37% 
[Lv.10]: ATK 200%, Stun Chance: 40%
Formula: MATK (%): 100 + (Skill Lv x 10) + STR `,
    img: throwStone,
  },
];


/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */
