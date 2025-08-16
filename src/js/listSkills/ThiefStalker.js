/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */

import skillImgNo from '../../img/no_img.png'; // заглушка
import tripleStrafe from '../../img/icon_chs/icon_chs_6.png';
import stealth from '../../img/icon_chs/icon_chs_1.gif'; 
import counterInstinct from '../../img/icon_chs/icon_chs_2.gif'; 
import simulation from '../../img/icon_chs/icon_chs_3.gif'; 
import fullStrip from '../../img/icon_chs/icon_chs_4.gif'; 

// список скилов Stalker
export const skillsStalker = [  
  {
    id: "counterInstinct",
    level: 0,
    dependencies: [
      { id: "oneHandedSwordMastery", minLevel: 3 },
    ],
    dependent: [],
    element: null,
    skillName: "Counter Instinct",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Weapon: Dagger/Sword 
Type: Supportive
Target: Self
After Cast Delay: A.Delay
Requirement: One-Handed Sword Mastery Lv: 3
Description: Deflects incoming attacks from monsters and from players wielding Daggers or Swords, reducing damage by half and reflecting it back to them.
CD scales with skill level, and each deflected attack reduces CD.
[Lv. 1]: Chance: 90%, CD Reduce: 1s Duration: 5s. Cooldown 15s. SP Cost: 10 
[Lv. 2]: Chance: 80%, CD Reduce: 2s Duration: 6s. Cooldown 16s. SP Cost: 15 
[Lv. 3]: Chance: 70%, CD Reduce: 3s Duration: 8s. Cooldown 18s. SP Cost: 20 
[Lv. 4]: Chance: 60%, CD Reduce: 4s Duration: 11s. Cooldown 21s. SP Cost: 25 
[Lv. 5]: Chance: 50%, CD Reduce: 5s Duration: 15s. Cooldown 25s. SP Cost: 30`,
    img: counterInstinct,
  },
  {
    id: "fullStrip",
    level: 0,
    dependencies: [
      { id: "helmStripping", minLevel: 2 },
      { id: "shieldStripping", minLevel: 2 },
      { id: "armorStripping", minLevel: 2 },
      { id: "weaponStripping", minLevel: 2 },
    ],
    dependent: [],
    element: null,
    skillName: "Full Strip",
    maxLevel: 1,
    inform: `Max Lv: 1
Skill Form: Active
Type: Supportive
Target: Enemy
After Cast Delay: A.Delay + 0.50s
Cooldown: A.Delay 
Range: 1
SP Cost: 30
Requirement: Helm Stripping Lv: 2, Shield Stripping Lv: 2, Armor Stripping Lv: 2, Weapon Stripping Lv: 2
Description: Attempts to forcibly Remove a single target's weapon, shield, armor, and headgear for 15s.
Success rate scales with the learned level of Stripping Skills and the Base Level difference between the caster and target.
Duration scales with the target's Base Level. Does not work against monsters.
Formula: Chance (%): (100 + ((Helm Stripping Lv + Shield Stripping Lv + Armor Stripping Lv + Weapon Stripping Lv) x 10) + ((Base Lv - Target Lv) x 10)) / 10 `,
    img: fullStrip,
  },
  {
    id: "simulation",
    level: 0,
    dependencies: [
      { id: "plagiarism", minLevel: 10 },
    ],
    dependent: [],
    element: null,
    skillName: "Simulation",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Toggle 
Type: Supportive 
Target: Self
After Cast Delay: 0.30s
Fixed Cast Time: 1s 
Cooldown: A.Delay
SP Cost: 80
Requirement: Plagiarism Lv: 10
Description: Allows the caster to choose a skill from their list of eligible skills, granting a chance to auto-cast the chosen skill on basic attacks.
The auto-cast consumes one-third of the chosen skill's SP Cost and cannot activate if there is not enough SP.
The Auto-cast Level scales with the skill level. Passively increases T.DMG.
[Lv. 1]: Auto-cast Level: 50% Auto-cast Chance: 30%, T.DMG +5
[Lv. 2]: Auto-cast Level: 60% Auto-cast Chance: 26%, T.DMG +10 
[Lv. 3]: Auto-cast Level: 60% Auto-cast Chance: 28%, T.DMG +15 
[Lv. 4]: Auto-cast Level: 70% Auto-cast Chance: 22%, T.DMG +20 
[Lv. 5]: Auto-cast Level: 70% Auto-cast Chance: 24%, T.DMG +25 
[Lv. 6]: Auto-cast Level: 80% Auto-cast Chance: 18%, T.DMG +30 
[Lv. 7]: Auto-cast Level: 80% Auto-cast Chance: 20%, T.DMG +35 
[Lv. 8]: Auto-cast Level: 90% Auto-cast Chance: 16%, T.DMG +40 
[Lv. 9]: Auto-cast Level: 90% Auto-cast Chance: 17%, T.DMG +45 
[Lv.10]: Auto-cast Level: 100% Auto-cast Chance: 15%, T.DMG +50

`,
    img: simulation,
  },
  {
    id: "stealth",
    level: 0,
    dependencies: [
      { id: "hiding", minLevel: 5 },
      { id: "tunnelDrive", minLevel: 3 },
    ],
    dependent: [],
    element: null,
    skillName: "Stealth",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Toggle
Type: Supportive 
Target: Self
SP Cost: 10
Requirement: Hiding Lv: 5, Tunnel Drive Lv: 3
Description: Becomes Invisible.
Cannot be revealed by any detection skills, and activates Stealth status for 180s. While invisible, drains SP every 10s, increases WD and leaves shoe prints behind while walking.
Cannot attack in this mode and becomes visible if SP runs out.
[Lv 1]: WD: +40%, SP Drain: 12 
[Lv 2]: WD: +30%, SP Drain: 14
[Lv 3]: WD: +20%, SP Drain: 16 
[Lv 4]: WD: +10%, SP Drain: 18 
[Lv 5]: WD: +0%, SP Drain: 20`,
    img: stealth,
  },
  {
    id: "tripleStrafe",
    level: 0,
    dependencies: [
      { id: "doubleStrafe", minLevel: 10 },
    ],
    dependent: [],
    element: null,
    skillName: "Triple Strafe",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
After Cast Delay: A.Delay 0.09s
Fixed Cast Time: 0.60s
Cooldown: 1s
Range: 1 + Weapon's range
Hits: 3
Requirement: Double Strafe Lv: 10
Description: Deals ranged P.DMG to the target, Knocking it back 3 cells.
Allows stacking Triple Strafe Charging for 60s whenever Double Strafe is used. Damage scales with the stacks and AGI. VCT scales with skill level.
Catalyst: 1x Arrow
[Lv. 1]: ATK 216% x Hits. VCT: 0.33s SP Cost: 22
[Lv. 2]: ATK 229% x Hits, VCT: 0.35s SP Cost: 24
[Lv. 3]: ATK 242% x Hits. VCT: 0.37s SP Cost: 26
[Lv. 4]: ATK 255% x Hits. VCT: 0.39s SP Cost: 28
[Lv. 5]: ATK 268% x Hits. VCT: 0.42s SP Cost: 30
[Lv. 6]: ATK 281% x Hits. VCT: 0.45s SP Cost: 32
[Lv. 7]: ATK 294% x Hits. VCT: 0.48s SP Cost: 34
[Lv. 8]: ATK 307% x Hits. VCT: 0.52s SP Cost: 36
[Lv. 9]: ATK 320% x Hits, VCT: 0.56s SP Cost: 38
[Lv.10]: ATK 333% x Hits. VCT: 0.60s SP Cost: 40
Formula: ATK (%): 203 + (Skill Lv x 13) + (Triple Strafe Charging Stacks x AGI)) x Hits `,
    img: tripleStrafe,
  },
];


/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */
