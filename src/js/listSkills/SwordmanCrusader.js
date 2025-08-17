/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */

import skillImgNo from '../../img/no_img.png'; // заглушка
// import heal from '../../img/icon_cru/icon_cru_3.gif'; //вроде как убран из игры
import riding from '../../img/icon_cru/icon_cru_7.gif';
// import faith from '../../img/icon_cru/icon_cru_8.gif';
import guard from '../../img/icon_cru/icon_cru_9.gif';
import shieldCharge from '../../img/icon_cru/icon_cru_10.gif';
import shieldBoomerang from '../../img/icon_cru/icon_cru_11.gif';
import reflectorShield from '../../img/icon_cru/icon_cru_12.gif';
import holyCross from '../../img/icon_cru/icon_cru_13.gif'; 
import grandCross from '../../img/icon_cru/icon_cru_14.gif'; 
import devotion from '../../img/icon_cru/icon_cru_15.gif'; 
// import martyrsHeal from '../../img/icon_cru/icon_cru_16.gif'; 
import defender from '../../img/icon_cru/icon_cru_17.gif'; 
import spearQuicken from '../../img/icon_cru/icon_cru_18.gif'; 
// import swordQuicken from '../../img/icon_cru/icon_cru_20.png'; 
// import twoHandedSpearMastery from '../../img/icon_cru/icon_cru_21.png'; 
import swordQuicken from '../../img/icon_knt/icon_knt_14.png';
import twoHandedSpearMastery from '../../img/icon_cru/icon_cru_22.png'; 
import faith from '../../img/icon_cru/icon_cru_23.png'; 
import layonh from '../../img/icon_cru/icon_cru_24.png'; 
import graceofthemartyr from '../../img/icon_cru/icon_cru_25.png'; 


// список скилов Crusader
export const skillsCrusader = [ 
  {
    id: "twoHandedSpearMastery",
    level: 0,
    dependencies: [
      { id: "oneSpearMastery", minLevel: 5 },
    ],
    dependent: [],
    element: null,
    skillName: "Two-Handed Spear Mastery",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Passive
Type: Physical
Weapon: Two-Handed Spear
Requirement: One-Spear Mastery Lv: 5
Description: Increases E.ATK while wielding a Two-Handed Spear. At max level, also grants +6% P.DMG on all sizes.
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
    img: twoHandedSpearMastery,
  }, 
  {
    id: "spearQuicken",
    level: 0,
    dependencies: [
      { id: "oneSpearMastery", minLevel: 5 },
    ],
    dependent: [],
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
    id: "swordQuicken",
    level: 0,
    dependencies: [
      { id: "oneHandedSwordMastery", minLevel: 5 },
    ],
    dependent: [],
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
Description: Lets the user ride a Peco Peco. While mounted, reduces WD and Flee. While not mounted, increases CRIT and ACC 
Rental with: PecoPeco Breeder
[Lv. 1]: Mounted: WD -13%, Flee -6% Unmounted: CRIT +2. ACC +4. 
[Lv. 2]: Mounted: WD -16%, Flee -7% Unmounted: CRIT +4. ACC +8. 
[Lv. 3]: Mounted: WD -19%, Flee -8% Unmounted: CRIT +6. ACC +12. 
[Lv. 4]: Mounted: WD -22%, Flee -9% Unmounted: CRIT +8. ACC +16. 
[Lv. 5]: Mounted: WD -25%, Flee -10% Unmounted: CRIT +10. ACC +20.`,
    img: riding,
  },
  {
    id: "faith",
    level: 0,
    dependencies: [
    ],
    dependent: [
      { id: "defender" },
      // { id: "heal" },
      { id: "holyCross" },
      { id: "reflectorShield" },
      { id: "shieldCharge" },
      { id: "sacrifice" },
    ],
    element: null,
    skillName: "Faith",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Supportive
Target: Self
After Cast Delay: 0.30s
Cooldown: A.Delay
Requirement: None
Description: Unlinks all targets connected by Devotion. Also passively increases Max HP.
[Lv. 1]: MaxHP +200 + 1%
[Lv. 2]: MaxHP +400 + 2% 
[Lv. 3]: MaxHP +600 + 3% 
[Lv. 4]: MaxHP +800 + 4% 
[Lv. 5]: MaxHP +1000 + 5% 
[Lv. 6]: MaxHP +1200 + 6% 
[Lv. 7]: MaxHP +1400 + 7% 
[Lv. 8]: MaxHP +1600 + 8% 
[Lv. 9]: MaxHP +1800 + 9% 
[Lv.10]: MaxHP +2000 + 10%
Max HP: ((0.01 x Skill Lv) x MaxHP) + (200 x Skill Lv) `,
    img: faith,
  },
  {
    id: "holyCross",
    level: 0,
    dependencies: [
      { id: "faith", minLevel: 5 },      
    ],
    dependent: [
      { id: "grandCross" },
    ],
    element: null,
    skillName: "Holy Cross",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Physical or Magical
Target: Enemy
Element: Holy
After Cast Delay: A.Delay 0.40s
Cooldown: A.Delay
Range: 2+ Weapon's range 
Hits: 2
Requirement: Faith Lv: 5
Description: Deals P.DMG or M.DMG to the target based on Weapon type, scaling with STR and INT.
Has a 30% chance to infliect Blind on the target for 18s.
[Lv. 1]: ATK/MATK 140% x Hits. SP Cost: 11 
[Lv. 2]: ATK/MATK 180% x Hits. SP Cost: 12 
[Lv. 3]: ATK/MATK 220% x Hits. SP Cost: 13 
[Lv. 4]: ATK/MATK 260% x Hits. SP Cost: 14
[Lv. 5]: ATK/MATK 300% x Hits. SP Cost: 15 
[Lv. 6]: ATK/MATK 340% x Hits. SP Cost: 16 
[Lv. 7]: ATK/MATK 380% x Hits. SP Cost: 17 
[Lv. 8]: ATK/MATK 420% x Hits. SP Cost: 18 
[Lv. 9]: ATK/MATK 460% x Hits. SP Cost: 19 
[Lv.10]: ATK/MATK 500% x Hits. SP Cost: 20
Formula: ATK (%): (100 + (40 x Skill Lv) + STR + (INT / 2)) X Hits
        MATK (%): (100 + (40 x Skill Lv) + INT + (STR / 2)) x Hits `,
    img: holyCross,
  },
  {
    id: "grandCross",
    level: 0,
    dependencies: [
      { id: "holyCross", minLevel: 5 },
    ],
    dependent: [
      { id: "gloriaDomini" },
    ],
    element: null,
    skillName: "Grand Cross",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Physical or Magical
Target: Self
Element: Holy
Variable Cast Time: 1s
Fixed Cast Time: 0.60s
After Cast Delay: A.Delay - 0.40s 
Cooldown: 1.5s
Hits: 4
Requirement: Holy Cross Lv: 5
Description: Deals P.DMG or M.DMG to enemies within a 9x9 AoE, based on Weapon type and scaling with STR and INT.
Inflicts Blind for 1.2s on Undead and Demon monsters.
Each cast drains 10% of HP and cannot be interrupted.
[Lv. 1]: ATK/MATK 135% x Hits. SP Cost: 19
[Lv. 2]: ATK/MATK 170% x Hits. SP Cost: 23 
[Lv. 3]: ATK/MATK 205% x Hits. SP Cost: 27 
[Lv. 4]: ATK/MATK 240% x Hits. SP Cost: 31 
[Lv. 5]: ATK/MATK 275% x Hits. SP Cost: 35 
[Lv. 6]: ATK/MATK 310% x Hits. SP Cost: 39 
[Lv. 7]: ATK/MATK 345% x Hits. SP Cost: 43 
[Lv. 8]: ATK/MATK 380% x Hits. SP Cost: 47 
[Lv. 9]: ATK/MATK 415% x Hits. SP Cost: 51 
[Lv.10]: ATK/MATK 450% x Hits. SP Cost: 55
Details: ATK (%); (100 + (35 x Skill Lv) + STR + (INT / 2)) x Hits 
        MATK (%); (100 + (35 x Skill Lv) + INT + (STR / 2)) x Hits `,
    img: grandCross,
  },
//   {
//     id: "heal",
//     level: 0,
//     dependencies: [
//       { id: "faith", minLevel: 7 },      
//     ],
//     dependent: [
//       { id: "devotion" },
//     ],
//     element: null,
//     skillName: "Heal",
//     maxLevel: 10,
//     inform: `Max Lv: 10
// Skill Form: Active
// Type: Magical
// Target: Ally
// Range: 9
// Requirement: Faith Lv: 7
// Description: Restores HP of a single target. This skill is affected by Base Level, INT and MAtk. Versus Corrupt property targets, inflicts Holy property damage equal 75% the amount of the HP restored.
// [Lv 1]: SP Cost: 13,
// [Lv 2]: SP Cost: 16,
// [Lv 3]: SP Cost: 19,
// [Lv 4]: SP Cost: 22,
// [Lv 5]: SP Cost: 25,
// [Lv 6]: SP Cost: 28,
// [Lv 7]: SP Cost: 31,
// [Lv 8]: SP Cost: 34,
// [Lv 9]: SP Cost: 37,
// [Lv 10]: SP Cost: 40`,
//     img: heal,
//   },
  {
    id: "guard",
    level: 0,
    dependencies: [],
    dependent: [
      { id: "defender" },
      { id: "devotion" },
      { id: "reflectorShield" },
    ],
    element: null,
    skillName: "Guard",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Skill Form: Toggle
Type: Supportive 
Target: Self
After Cast Delay: 0.30s 
Cooldown: A.Delay
Requirement: None
Description: grants a chance to fully block any incoming P.DMG for the next 300s. Briefly immobilizes the character after a successful block. Requires a Shield.
[Lv. 1]: Block Chance: 5%, SP Cost: 12 
[Lv. 2]: Block Chance: 10%, SP Cost: 14 
[Lv. 3]: Block Chance: 14%, SP Cost: 16 
[Lv. 4]: Block Chance: 18%, SP Cost: 18 
[Lv. 5]: Block Chance: 21%, SP Cost: 20 
[Lv. 6]: Block Chance: 24%, SP Cost: 22 
[Lv. 7]: Block Chance: 26%, SP Cost: 24 
[Lv. 8]: Block Chance: 28%, SP Cost: 26
[Lv. 9]: Block Chance: 29%, SP Cost: 28 
[Lv.10]: Block Chance: 30%, SP Cost: 30`,
    img: guard,
  },
  {
    id: "defender",
    level: 0,
    dependencies: [
      { id: "guard", minLevel: 5 },
      { id: "faith", minLevel: 5 },
    ],
    dependent: [],
    element: null,
    skillName: "Defender",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Toggle
Type: Supportive 
Target: Self
After Cast Delay: 0.30s
Cooldown: A.Delay
Requirement: Guard Lv: 5, Faith Lv: 5
Description: Reduces ranged P.DMG taken for 180s, but decreases ASPD and increases WD. 
Requires a Shield.
[Lv. 1]: Ranged P.DMG Reduction: 20% ASPD -20%, WD +20%
[Lv. 2]: Ranged P.DMG Reduction: 35% ASPD -15%, WD +15%
[Lv. 3]: Ranged P.DMG Reduction: 50% ASPD -10%, WD +10%
[Lv. 4]: Ranged P.DMG Reduction: 65% ASPD -5%, WD +5%
[Lv. 5]: Ranged P.DMG Reduction: 80% ASPD -0%, WD +0%`,
    img: defender,
  },
  {
    id: "devotion",
    level: 0,
    dependencies: [
      { id: "layonh", minLevel: 5 },
      { id: "guard", minLevel: 3 },      
    ],
    dependent: [
      { id: "graceofthemartyr" },
    ],
    element: null,
    skillName: "Devotion",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Supportive
Target: Ally
Range: 11
Variable Cast Time: 1.50s
Fixed Cast Time: 1.50s After Cast Delay: 1.50s SP Cost: 20
Requirement: Lay On H... Lv: 5, Guard Lv: 3
Description: Links with up to 5 allies, sharing part of the DMG they take until they move out of range or the duration ends.
Increases Max HP based on the number of devoted allies.
Only works on targets within 10 Base Levels. Cannot target allies that are already linked. 
[Lv. 1]: MaxHP: 100 + 0.4% Shared DMG: 50%, Duration: 30s
[Lv. 2]: MaxHP: 200 + 0.8% Shared DMG: 60%, Duration: 45s 
[Lv. 3]: MaxHP: 300 + 1.2% Shared DMG: 70%, Duration: 60s 
[Lv. 4]: MaxHP: 400 + 1.6% Shared DMG: 80%, Duration: 75s 
[Lv. 5]: MaxHP: 500 + 2.0% Shared DMG: 90%, Duration: 90s
Max HP: + (((0,04 x Skill Lv) x Max HP) + (100 x Skill Lv)) x Links `,
    img: devotion,
  },
//   {
//     id: "martyrsHeal",
//     level: 0,
//     dependencies: [
//       { id: "devotion", minLevel: 1 },
//     ],
//     dependent: [
//       { id: "gospel" },
//     ],
//     element: null,
//     skillName: "Martyr's Heal",
//     maxLevel: 10,
//     inform: `Max Lv: 10
// Skill Form: Active
// Type: Magical
// Target: Self
// Range: 9
// Requirement: Devotion Lv: 1
// Description: Center a divine cross on yourself, sacrificing HP and SP to heal allies around you over time. The cross moves with you and doesn't prevent the use of any attacks or skills. The healing is based on your learned Heal skill and your maximum HP. Allies under the effect of Devotion receive the healing even outside the area of effect. The user is not healed and has their movement speed reduced by 30%. This skill can be switched on and off.
// [Lv 1]: Heal every 10 seconds, Drain 19 SP and 1% HP every 10 seconds,
// [Lv 2]: Heal every 9 seconds, Drain 23 SP and 1% HP every 9 seconds,
// [Lv 3]: Heal every 8 seconds, Drain 27 SP and 1% HP every 8 seconds,
// [Lv 4]: Heal every 7 seconds, Drain 31 SP and 1% HP every 7 seconds,
// [Lv 5]: Heal every 6 seconds, Drain 35 SP and 1% HP every 6 seconds,
// [Lv 6]: Heal every 5 seconds, Drain 39 SP and 1% HP every 5 seconds,
// [Lv 7]: Heal every 4 seconds, Drain 43 SP and 1% HP every 4 seconds,
// [Lv 8]: Heal every 3 seconds, Drain 47 SP and 1% HP every 3 seconds,
// [Lv 9]: Heal every 2 seconds, Drain 51 SP and 1% HP every 2 seconds,
// [Lv 10]: Heal every 1 seconds, Drain 55 SP and 1% HP every 1 seconds`,
//     img: martyrsHeal,
//   },
  {
    id: "reflectorShield",
    level: 0,
    dependencies: [
      { id: "guard", minLevel: 5 },
      { id: "faith", minLevel: 5 },
    ],
    dependent: [],
    element: null,
    skillName: "Reflector Shield",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Toggle
Type: Supportive 
Target: Self
After Cast Delay: 0.30s 
Cooldown: A.Delay
Requirement: Guard Lv: 5, Faith Lv: 5
Description: Reflects all P.DMG taken back to the attacker for 300s.
Requires a shield.
[Lv. 1]: Reflect: 4%, SP Cost: 15 
[Lv. 2]: Reflect: 8%, SP Cost: 20 
[Lv. 3]: Reflect: 12%, SP Cost: 25 
[Lv. 4]: Reflect: 16%, SP Cost: 30 
[Lv. 5]: Reflect: 20%, SP Cost: 35 
[Lv. 6]: Reflect: 24%, SP Cost: 40 
[Lv. 7]: Reflect: 28%, SP Cost: 45 
[Lv. 8]: Reflect: 32%, SP Cost: 50 
[Lv. 9]: Reflect: 36%, SP Cost: 55 
[Lv.10]: Reflect: 40%, SP Cost: 60`,
    img: reflectorShield,
  },
  {
    id: "shieldCharge",
    level: 0,
    dependencies: [
      { id: "faith", minLevel: 5 },      
    ],
    dependent: [
      { id: "shieldBoomerang" },      
    ],
    element: null,
    skillName: "Shield Charge",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Physical Target: Enemy
Element: Elementless
After Cast Delay: A.Delay 0.40s 
Cooldown: A.Delay + 0.36s 
Range: 4 + Weapon's range 
Hits: 1
Requirement: Faith Lv: 5
Description: Deals ranged P.DMG to enemies within a 3x3 AoE around the target, Knocking them back and increasing their WD by 15% for 85.
Has a chance to inflict Stun on any target that collides with an obstacle. 
Requires a shield.
[Lv. 1]: ATK 180%, Knockback: 5 Stun Chance: 12%, SP Cost: 7
[Lv. 2]: ATK 260%, Knockback: 6 Stun Chance: 24%, SP Cost: 9 
[Lv. 3]: ATK 340%, Knockback: 7 Stun Chance: 36%, SP Cost: 11 
[Lv. 4]: ATK 420%, Knockback: 8 Stun Chance: 48%, SP Cost: 13 
[Lv. 5]: ATK 500%, Knockback: 9 Stun Chance: 60%, SP Cost: 15
Formula: ATK (%): 100 + (80 x Skill Lv) `,
    img: shieldCharge,
  },
  {
    id: "shieldBoomerang",
    level: 0,
    dependencies: [
      { id: "shieldCharge", minLevel: 3 },
    ],
    dependent: [
      { id: "shieldChain" },
    ],
    element: null,
    skillName: "Shield Boomerang",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
Element: Elementless
After Cast Delay: A.Delay 0.40s
Cooldown: A.Delay + 0.265
Hits: 1
Requirement: Shield Charge Lv: 3
Description: Deals ranged P.DMG to the target, scaling with shield stats.
If the target's WD is increased by a status effect, they become Immobilized for 0.5s. Requires a shield.
[Lv. 1]: ATK 135%, Range: 5. SP Cost: 6 
[Lv. 2]: ATK 170%, Range: 6. SP Cost: 7 
[Lv. 3]: ATK 205%, Range: 6. SP Cost: 8 
[Lv. 4]: ATK 240%, Range: 7. SP Cost: 9 
[Lv. 5]: ATK 275%, Range: 7. SP Cost: 10
[Lv. 6]: ATK 310%, Range: 8. SP Cost: 11 
[Lv. 7]: ATK 345%, Range: 8. SP Cost: 12 
[Lv. 8]: ATK 380%, Range: 9. SP Cost: 13 
[Lv. 9]: ATK 415%, Range: 9. SP Cost: 14
[Lv. 10]: ATK 450%, Range: 10. SP Cost: 15
Formula: ATK (%): 100 + ((((Sweight + S.Defense + (S.Refine^2)) / 10 + 35) × Skill Lv) `,
    img: shieldBoomerang,
  },
  {
    id: "layonh",
    level: 0,
    dependencies: [
      { id: "faith", minLevel: 7 },
    ],
    dependent: [
      { id: "devotion" },
    ],
    element: null,
    skillName: "Lay On H...",  // дописать название + в "devotion"
    maxLevel: 10,
    inform: `Max Level: 10
Skill Form: Active
Type: Supportive
Target: Ally
After Cast Delay: 1s
Cooldown: 10s
Range: 9
Description: Restores the target's HP, scaling with VIT, S.DEF, HP and Base Level.
CD scales with the number of devoted allies.
[Lv. 1]: SP Cost: 13
[Lv. 2]: SP Cost: 16 
[Lv. 3]: SP Cost: 19
[Lv. 4]: SP Cost: 22
[Lv. 5]: SP Cost: 25
[Lv. 6]: SP Cost: 28 
[Lv. 7]: SP Cost: 31 
[Lv. 8]: SP Cost: 34
[Lv. 9]: SP Cost: 37
[Lv. 10]: SP Cost: 40
Heal: ((((Base Lv + VIT) / 5) x 30) x (Skill Lv / 10)) + S.DEF + (HP / 50)
Cooldown (seconds): 10 - (2 x Devoted Allies) `,
    img: layonh,
  },
  {
    id: "graceofthemartyr",
    level: 0,
    dependencies: [
      { id: "devotion", minLevel: 1 },
    ],
    dependent: [
      // { id: "shieldChain" },
    ],
    element: null,
    skillName: "Grace of the Martyr",
    maxLevel: 10,
    inform: `Max Level: 10
Skill Form: Active
Type: Supportive Target: Self
Variable Cast Time: 25 
Fixed Cast Time: 1s
After Cast Delay: 0.30s 
Cooldown: 120s
SP Cost: 60
Description: Reduces DMG taken from allies under the effects of Devotion, scaling with the number of linked allies.
Requires a Shield.
[Lv. 1]: Reduction: 2%. Duration: 39s 
[Lv. 2]: Reduction: 4%. Duration: 48s 
[Lv. 3]: Reduction: 6%. Duration: 57s 
[Lv. 4]: Reduction: 8%. Duration: 66s 
[Lv. 5]: Reduction: 10%, Duration: 75s
[Lv. 6]: Reduction: 12%. Duration: 84s 
[Lv. 7]: Reduction: 14%. Duration: 93s 
[Lv. 8]: Reduction: 16%. Duration: 102s 
[Lv. 9]: Reduction: 18%. Duration: 101s 
[Lv. 10]: Reduction: 20%, Duration: 110s
Reduction (%); (Skill Lv x 2) + (Devoted Allies x. 6) `,
    img: graceofthemartyr,
  },
];


/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */
