/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */

import skillImgNo from '../../img/no_img.png'; // заглушка
import pierce from '../../img/icon_knt/icon_knt_1.gif';
import brandishSpear from '../../img/icon_knt/icon_knt_2.gif';
import spearStab from '../../img/icon_knt/icon_knt_3.gif';
import spearBoomerang from '../../img/icon_knt/icon_knt_4.gif';
import counterAttack from '../../img/icon_knt/icon_knt_6.gif';
import bowlingBash from '../../img/icon_knt/icon_knt_7.gif';
import riding from '../../img/icon_knt/icon_knt_8.gif';
import twoHandedSwordMastery from '../../img/icon_knt/icon_knt_10.gif';
import spearQuicken from '../../img/icon_knt/icon_knt_11.png';
import dashingBash from '../../img/icon_knt/icon_knt_13.png';
import swordQuicken from '../../img/icon_knt/icon_knt_14.png';

// список скилов Knight
export const skillsKnight = [  
  {
    id: "twoHandedSwordMastery",
    level: 0,
    dependencies: [
      { id: "oneHandedSwordMastery", minLevel: 5 },      
    ],
    dependent: [
      
    ],
    element: null,
    skillName: "Two-Handed Sword Mastery",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Passive
Type: Physical
Weapon: Two-Handed Sword
Requirement: One-Handed Sword Mastery Lv: 5
Description: Increases E.ATK while wielding a Two-Handed Sword. At max level, also grants +6 CRIT.
[Lv. 1]: E.ATK +4
[Lv. 2]: E.ATK +8
[Lv. 3]: E.ATK +12
[Lv. 4]: E.ATK +16
[Lv. 5]: E.ATK +20
[Lv. 6]: E.ATK +24
[Lv. 7]: E.ATK +28
[Lv. 8]: E.ATK +32
[Lv. 9]: E.ATK +36 
[Lv.10]: E.ATK +40`,
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
Weapon: Sword-Class
Target: Self
After Cast Delay: A.Delay 0.44s
Cooldown: A.Delay + 0.26s
Hits: 1
SP Cost: 9
Requirement: Sword Quicken Lv: 5
Description: Temporarily enters a stance that blocks 50% of the next attack's P.DMG and counters by dealing the same amount of P.DMG back to the attacker.
The counter will always CRIT and scales with weapon.
Must face the attacker to retaliate.
[Lv. 1]: Duration: 0.40s
[Lv. 2]: Duration: 0.60s
[Lv. 2]: Duration: 0.80s
[Lv. 3]: Duration: 1.00s
[Lv. 4]: Duration: 1.20s
ATK (%): 100 + (W.Weight + W.Attack + (100 x (W.Level X (W.Refine x 6))) + Countered Damage `,
    img: counterAttack,
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
Weapon: Sword-Class 
Target: Enemy
Hits: 1
Variable Cast Time: A.Delay
After Cast Delay: A.Delay 0.44s 
Cooldown: A.Delay + 0.365
SP Cost: 18
Requirement: Counter Attack Lv: 5
Description: Charges at the target.
Deals P.DMG, scaling with WD.
VCT cannot be reduced by stats or gear. The skill's Range is further increased by the equipped weapon's range.
[Lv. 1]: ATK 200%, Range: 6 
[Lv. 2]: ATK 300%, Range: 7
[Lv. 3]: ATK 400%, Range: 8
[Lv. 4]: ATK 500%, Range: 9
[Lv. 5]: ATK 600%, Range: 10
Formula: ATK (%): (100 + (100 x Skill Lv)) x (2.5 (0.01 x Walk Delay)); (Max 1200%) `,
    img: dashingBash,
  },
  {
    id: "bowlingBash",
    level: 0,
    dependencies: [
      { id: "swordQuicken", minLevel: 5 },
      { id: "counterAttack", minLevel: 5 },
    ],
    dependent: [],
    element: null,
    skillName: "Bowling Bash",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Weapon: Sword-Class 
Type: Physical
Target: Enemy
Variable Cast Time: 0.20s
After Cast Delay: A.Delay + 0.22s
Cooldown: 1s
Range: 2 Weapon's range
Requirement: Sword Quicken Lv: 10, Counter Attack Lv: 5
Description: Deals P.DMG to enemies within a 5x5 AoE around the target, Knocking them back 2 cells.
The damage scales with Base Level and the learned level of Bash.
Hits depend on the Weapon and the number of targets.
[Lv. 1]: ATK 110% x Hits. SP Cost: 13
[Lv. 2]: ATK 120% x Hits. SP Cost: 14 
[Lv. 3]: ATK 130% x Hits. SP Cost: 15 
[Lv. 4]: ATK 140% x Hits. SP Cost: 16 
[Lv. 5]: ATK 150% x Hits. SP Cost: 17 
[Lv. 6]: ATK 160% x Hits. SP Cost: 18 
[Lv. 7]: ATK 170% x Hits. SP Cost: 19 
[Lv. 8]: ATK 180% x Hits. SP Cost: 20 
[Lv. 9]: ATK 190% x Hits. SP Cost: 21 
[Lv.10]: ATK 200% x Hits. SP Cost: 22
Formula: ATK (%): (100 + (10 x Skill Lv) + (10 x Bash Lv)) > Hits
Base Level higher than 50: + ((((Base Lv - 50) / 5) x 10) x Hits)`,
    img: bowlingBash,
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
      { id: "parry" },
    ],
    element: null,
    skillName: "Sword Quicken",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Weapon: Sword-Class 
Type: Supportive 
Target: Self
After Cast Delay: 0.30s 
Cooldown: A.Delay
Requirement: One-Handed Sword Mastery Lv: 5
Description: Temporarily reduces DAA by 10% and increases ASPD by 20%. Also boosts CRIT and ACC. 
[Lv. 1]: CRIT +1. ACC +2 Duration: 84s. SP Cost: 12 
[Lv. 2]: CRIT +2. ACC +4 Duration: 108s. SP Cost: 14 
[Lv. 3]: CRIT +3. ACC +6 Duration: 132s. SP Cost: 16 
[Lv. 4]: CRIT +4. ACC +8 Duration: 156s. SP Cost: 18 
[Lv. 5]: CRIT +5, ACC +10 Duration: 180s. SP Cost: 20 
[Lv. 6]: CRIT +6, ACC +12 Duration: 204s. SP Cost: 22 
[Lv. 7]: CRIT +7. ACC +14 Duration: 228s. SP Cost: 24 
[Lv. 8]: CRIT +8. ACC +16 Duration: 252s. SP Cost: 26 
[Lv. 9]: CRIT +9. ACC +18 Duration: 276s. SP Cost: 28 
[Lv.10]: CRIT +10. ACC +20 Duration: 300s, SP Cost: 30`,
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
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Passive
Type: Physical
Requirement: Endure Lv: 1
Description: Lets the user ride a Peco Peco. While mounted, reduces WD and Flee. While not mounted, increases CRIT and ACC. 
Rental with: PecoPeco Breeder
[Lv. 1]: Mounted: WD -13%, Flee -6% Unmounted: CRIT +2. ACC +4. 
[Lv. 2]: Mounted: WD -16%, Flee -7% Unmounted: CRIT +4. ACC +8. 
[Lv. 3]: Mounted: WD -19%, Flee -8% Unmounted: CRIT +6. ACC +12. 
[Lv. 4]: Mounted: WD -22%, Flee -9% Unmounted: CRIT +8. ACC +16. 
[Lv. 5]: Mounted: WD -25%, Flee -10% Unmounted: CRIT +10. ACC +20.`,
    img: riding,
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
Weapon: Spear-Class 
Target: Enemy
After Cast Delay: A.Delay 0.44s 
Cooldown: A.Delay
Range: 1+ Weapon's range
SP Cost: 5
Requirement: One-Spear Mastery Lv: 5
Description: Deals ranged P.DMG to the target.
Each hit grants 1 Stabbing stack for 60s. Gaining more Stacks adds additional hits. 
[Lv. 1]: ATK 120% x Hits
[Lv. 2]: ATK 140% x Hits
[Lv. 3]: ATK 160% x Hits 
[Lv. 4]: ATK 180% x Hits 
[Lv. 5]: ATK 200% x Hits
[Lv. 6]: ATK 220% x Hits
[Lv. 7]: ATK 240% x Hits
[Lv. 8]: ATK 260% x Hits
[Lv. 9]: ATK 280% x Hits
[Lv. 10]: ATK 300% x Hits
Formula: ATK (%): (100 + (20 x Skill Lv) + (Stabbing Stacks x 2)) x Hits `,
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
Weapon: Spear-Class 
Type: Physical
Target: Enemy
After Cast Delay: A.Delay
Cooldown: A.Delay + 0.265 
Hits: 1
Requirement: Spear Stab Lv: 3
Description: Deals ranged P.DMG to the target, scaling with weapon stats.
If the target's WD is increased by a status effect, they become Immobilized for 0.5s. 
[Lv. 1]: ATK 135%, Range: 5. SP Cost: 6 
[Lv. 2]: ATK 170%, Range: 6. SP Cost: 7 
[Lv. 3]: ATK 205%, Range: 6. SP Cost: 8 
[Lv. 4]: ATK 240%, Range: 7. SP Cost: 9 
[Lv. 5]: ATK 275%, Range: 7. SP Cost: 10 
[Lv. 6]: ATK 310%, Range: 8. SP Cost: 11
[Lv. 7]: ATK 345%, Range: 8. SP Cost: 12 
[Lv. 8]: ATK 380%, Range: 9. SP Cost: 13 
[Lv. 9]: ATK 415%, Range: 9. SP Cost: 14 
[Lv.10]: ATK 450%, Range: 10. SP Cost: 15
Formula: ATK (%): 100 + (((Weapon Weight / 10) + 35) Skill Lv) `,
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
Weapon: Spear-Class 
Type: Supportive 
Target: Self
After Cast Delay: 0.30s 
Cooldown: A.Delay
Requirement: One-Spear Mastery Lv: 5
Description: Temporarily reduces DAA by 10% and increases ASPD by 20%, Also boosts CRIT and ACC 
[Lv. 1]: CRIT +1, ACC +2 Duration: 84s. SP Cost: 12 
[Lv. 2]: CRIT +2. ACC +4 Duration: 108s. SP Cost: 14 
[Lv. 3]: CRIT +3, ACC +6 Duration: 132s. SP Cost: 16 
[Lv. 4]: CRIT +4. ACC +8 Duration: 156s. SP Cost: 18
[Lv. 5]: CRIT +5. ACC +10 Duration: 180s, SP Cost: 20 
[Lv. 6]: CRIT +6. ACC +12 Duration: 204s, SP Cost: 22 
[Lv. 7]: CRIT +7. ACC +14 Duration: 228s. SP Cost: 24 
[Lv. 8]: CRIT +8. ACC +16 Duration: 252s. SP Cost: 26 
[Lv. 9]: CRIT +9. ACC +18 Duration: 276s, SP Cost: 28 
[Lv.10]: CRIT +10, ACC +20 Duration: 300s, SP Cost: 30`,
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
Weapon: Spear-Class 
Type: Physical
Target: Enemy
After Cast Delay: A.Delay 0.44s
Cooldown: A.Delay + 0.36s
Range: 4 + Weapon's range 
Hits: 1
Requirement: Pierce Lv: 5
Description: Deals ranged P.DMG to enemies within a 3x3 AoE around the target, Knocking them back and increasing their WD by 15% for 8s.
Has a chance to inflict Stun on any target that collides with an obstacle.
[Lv. 1]: ATK 180%, Knockback: 5 Stun Chance: 12%, SP Cost: 7
[Lv. 2]: ATK 260%, Knockback: 6 Stun Chance: 24%, SP Cost: 9 
[Lv. 3]: ATK 340%, Knockback: 7 Stun Chance: 36%, SP Cost: 11 
[Lv. 4]: ATK 420%, Knockback: 8 Stun Chance: 48%, SP Cost: 13 
[Lv. 5]: ATK 500%, Knockback: 9 Stun Chance: 60%, SP Cost: 15
Formula: ATK (%): 100 + (80 x skill Lv) `,
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
Weapon: Spear-Class 
Type: Physical
Target: Enemy
Variable Cast Time: 0.20s
Fixed Cast Time: 0.40s
After Cast Delay: A.Delay 0.445
Cooldown: 1s
Range: 3
Hits: 3
SP Cost: 24
Requirement: Spear Stab Lv: 5
Description: Deals ranged P.DMG to enemies within a 7x7 AoE around the target, Knocking them back 2 cells. Damage scales with VIT and Base Level.
Only enemies in front of the user are affected.
[Lv. 1]: ATK 130%
[Lv. 2]: ATK 160%
[Lv. 3]: ATK 190%
[Lv. 4]: ATK 220%
[Lv. 5]: ATK 250%
[Lv. 6]: ATK 280%
[Lv. 7]: ATK 310%
[Lv. 8]: ATK 340% 
[Lv. 9]: ATK 370% 
[Lv.10]: ATK 400%
Formula: ATK (%): 100 + (30 x Skill Lv x (1 + ((VIT + 30) x (Base Lv = 100))))) `,
    img: brandishSpear,
  },
];


/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */
