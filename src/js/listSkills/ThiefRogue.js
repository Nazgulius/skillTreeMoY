/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */

import skillImgNo from '../../img/no_img.png'; // заглушка
import oneHandedSwordMastery from '../../img/icon_rog/icon_rog_1.gif'; 
import vulturesEye from '../../img/icon_rog/icon_rog_2.gif'; 
import doubleStrafe from '../../img/icon_rog/icon_rog_3.gif'; 
import snatcher from '../../img/icon_rog/icon_rog_5.gif'; 
import backStab from '../../img/icon_rog/icon_rog_7.gif'; 
import tunnelDrive from '../../img/icon_rog/icon_rog_8.gif'; 
import raid from '../../img/icon_rog/icon_rog_9.gif'; 
import weaponStripping from '../../img/icon_rog/icon_rog_10.gif'; 
import shieldStripping from '../../img/icon_rog/icon_rog_11.gif'; 
import armorStripping from '../../img/icon_rog/icon_rog_12.gif'; 
import helmStripping from '../../img/icon_rog/icon_rog_13.gif'; 
import intimidate from '../../img/icon_rog/icon_rog_14.gif'; 
import gangsterParadise from '../../img/icon_rog/icon_rog_25.png'; 
import plagiarism from '../../img/icon_rog/icon_rog_24.png'; 
import gangland from '../../img/icon_rog/icon_rog_22.png'; 
import gashingBlow from '../../img/icon_rog/icon_rog_26.png'; 

// список скилов Rogue
export const skillsRogue = [ 
  {
    id: "oneHandedSwordMastery",
    level: 0,
    dependencies: [],
    dependent: [
      { id: "counterInstinct" },
    ],
    element: null,
    skillName: "One-Handed Sword Mastery",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Passive
Type: Physical
Weapon: One-Handed Sword
Requirement: None
Description: Increases E.ATK while wielding a One-Handed Sword. Knights, Crusaders and Rogues gain extra E.ATK. At max level, also grants +6% ACC
[Lv. 1]: E.ATK +2
[Lv. 2]: E.ATK +4
[Lv. 3]: E.ATK +6
[Lv. 4]: E.ATK +8
[Lv. 5]: E.ATK +10
[Lv. 6]: E.ATK +12
[Lv. 7]: E.ATK +14
[Lv. 8]: E.ATK +16
[Lv. 9]: E.ATK +18 
[Lv.10]: E.ATK +20
Formula: E.ATK Bonus: Skill Lv x 1 `,
img: oneHandedSwordMastery,
  },
  {
    id: "vulturesEye",
    level: 0,
    dependencies: [
      { id: "throwStone", minLevel: 7 },
    ],
    dependent: [
      { id: "doubleStrafe" },
    ],
    element: null,
    skillName: "Vulture's Eye",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Passive
Type: Misc
Weapon: Bow/Instrument/Whip
Requirement: Throw Stone Lv: 7
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
[Lv.10]: E.ATK +20. Range +6
Formula: E.ATK Bonus: Skill Lv x 1 `,
    img: vulturesEye,
  },
  {
    id: "doubleStrafe",
    level: 0,
    dependencies: [
      { id: "vulturesEye", minLevel: 5 },
    ],
    dependent: [
      { id: "tripleStrafe" },
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
Range: Bow + Vulture's Eye Range
Requirement: Vulture's Eye Lv: 5
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
    id: "snatcher",
    level: 0,
    dependencies: [
      { id: "steal", minLevel: 1 },
    ],
    dependent: [      
      { id: "gashingBlow" },
      { id: "plagiarism" },
      { id: "helmStripping" },
    ],
    element: null,
    skillName: "Snatcher",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Passive
Requirement: Steal Lv: 1
Description: Grants a chance to auto-cast
Steal while performing basic attacks.
Chance scales with the learned level of Steal.
[Lv. 1]: Steal Chance: 7.00%
[Lv. 2]: Steal Chance: 8.50% 
[Lv. 3]: Steal Chance: 10.00% 
[Lv. 4]: Steal Chance: 11.50% 
[Lv. 5]: Steal Chance: 13.00% 
[Lv. 6]: Steal Chance: 14.50% 
[Lv. 7]: Steal Chance: 16.00% 
[Lv. 8]: Steal Chance: 17.50% 
[Lv. 9]: Steal Chance: 19.00% 
[Lv.10]: Steal Chance: 20.50%
Formula: Steal Chance (%): (55 + (Skill Lv x 15) + (Steal Lv x 10)) / 1000 `,
    img: snatcher,
  },
  {
    id: "plagiarism",
    level: 0,
    dependencies: [
      { id: "steal", minLevel: 10 },
      { id: "snatcher", minLevel: 4 },
    ],
    dependent: [
      { id: "simulation" },
      { id: "gangsterParadise" },
    ],
    element: null,
    skillName: "Plagiarism",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Supportive 
Target: Ally/Enemy
After Cast Delay: A.Delay 0.10s 
Cooldown: A.Delay
Range: 9
Requirement: Steal Lv: 10, Snatcher Lv: 4
Description: Plagiarizes a skill from the target at its highest possible level, limited by the skill's learned level.
Passively decreases DAA.
[Lv. 1]: DAA -1%, SP Cost: 18 
[Lv. 2]: DAA -2%, SP Cost: 21
[Lv. 3]: DAA -3%, SP Cost: 24 
[Lv. 4]: DAA -4%, SP Cost: 27 
[Lv. 5]: DAA -5%, SP Cost: 30 
[Lv. 6]: DAA -6%, SP Cost: 33 
[Lv. 7]: DAA -7%, SP Cost: 36 
[Lv. 8]: DAA -8%, SP Cost: 39 
[Lv. 9]: DAA -9%, SP Cost: 42 
[Lv.10]: DAA -10%, SP Cost: 45`,
    img: plagiarism,
  },
  {
    id: "gangsterParadise",
    level: 0,
    dependencies: [
      { id: "plagiarism", minLevel: 5 },
    ],
    dependent: [
      { id: "gangland" },  
    ],
    element: null,
    skillName: "Gangster Paradise",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Passive
Type: Supportive 
Target: Ally
Variable Cast Time: 1s
Fixed Cast Time: 0.50s
After Cast Delay: 0.30s
SP Cost: 10
Requirement: Plagiarism Lv: 5
Description: Recruits allies into a gang, granting different benefits based on the skill's level.
Effectiveness scales with the number of party members; those with Gangster Paradise learned count twice.
The caster and target must be on the same map.
Passively, normal monsters will not attack Rogues sitting side by side. Nearby sitting allies are also affected.
[Lv. 1] Ironveil: Increases H.DEF and H.MDEF. 
[Lv. 2] Spellrush: Reduces VCT and ACD. 
[Lv. 3] Syndicate: Increases HP and SP. 
[Lv. 4] Truefang: Increases ACC and CRIT. 
[Lv. 5] Brutal: Increases B.ATK and B.MATK.
Formula: Bonus effect (%): 1 + (Skill Lv / 2) + (PartyMembers / 2) + Paradise PartyMembers`,
    img: gangsterParadise,
  },
  {
    id: "gangland",
    level: 0,
    dependencies: [
      { id: "gangsterParadise", minLevel: 5 },
    ],
    dependent: [],
    element: null,
    skillName: "Gangland",
    maxLevel: 1,
    inform: `Max Lv: 1
Skill Form: Passive
Type: Misc
Requirement: Gangster Paradise Lv: 5
Description: Increases the effectiveness of bonuses granted by Gangster Paradise by 5%.`,
    img: gangland,
  },
  {
    id: "gashingBlow",
    level: 0,
    dependencies: [
      { id: "snatcher", minLevel: 4 },
    ],
    dependent: [      
      { id: "backStab" },
    ],
    element: null,
    skillName: "Gashing Blow",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
After Cast Delay: A.Delay 
Range: 1
Hits: 1
Requirement: Snatcher Lv: 4
Description: Deals P.DMG to the target. Has a chance to inflict Gashing Wound for 10s.
If the target has Gashing Wound, the damage scales with the number of the target's active NSE, and has a chance to inflict Bleeding for 120s.
[Lv. 1]: ATK 330%, SP Cost: 12 Gashing Wound/Bleeding Chance: 12% 
[Lv. 2]: ATK 360%, SP Cost: 13 Gashing Wound/Bleeding Chance: 14% 
[Lv. 3]: ATK 390%, SP Cost: 13 Gashing Wound/Bleeding Chance: 16% 
[Lv. 4]: ATK 420%, SP Cost: 14 Gashing Wound/Bleeding Chance: 18% 
[Lv. 5]: ATK 450%, SP Cost: 14 Gashing Wound/Bleeding Chance: 20% 
[Lv. 6]: ATK 480%, SP Cost: 15 Gashing Wound/Bleeding Chance: 22% 
[Lv. 7]: ATK 510%, SP Cost: 15 Gashing Wound/Bleeding Chance: 24% 
[Lv. 8]: ATK 540%, SP Cost: 16 Gashing Wound/Bleeding Chance: 26% 
[Lv. 9]: ATK 570%, SP Cost: 16 Gashing Wound/Bleeding Chance: 28% 
[Lv.10]: ATK 600%, SP Cost: 17 Gashing Wound/Bleeding Chance: 30%
Formula: ATK (%): 300 + (Skill Lv x 30) + (15 x Active Negative Effects)
Targets with Gashing Wound ATK (%): 350 + (Skill Lv x 30) + (15 x Negative Effects) `,
    img: gashingBlow,
  },
  {
    id: "backStab",
    level: 0,
    dependencies: [
      { id: "gashingBlow", minLevel: 4 },
    ],
    dependent: [
      { id: "raid" },
    ],
    element: null,
    skillName: "Back Stab",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Physical 
Target: Enemy
After Cast Delay: A.Delay - 0.10s
Cooldown: A.Delay + 0.36s
Range: 1 + Weapon's range 
Hits: 1
SP Cost: 16
Requirement: Gashing Blow Lv: 4
Description: Charges behind the target. Deals P.DMG, with damage scaling with STR if used while Hiding.
Has a chance to inflict Stun for 4.5s.
Adds an additional hit when wielding a Dagger. This skill has an extra HC bonus.
[Lv. 1]: ATK 330%, Chance: 7%, HC +1% 
[Lv. 2]: ATK 360%, Chance: 9%, HC +2% 
[Lv. 3]: ATK 390%, Chance: 11%, HC +3% 
[Lv. 4]: ATK 420%, Chance: 13%, HC +4%
[Lv. 5]: ATK 450%, Chance: 15%, HC +5% 
[Lv. 6]: ATK 480%, Chance: 17%, HC +6% 
[Lv. 7]: ATK 510%, Chance: 19%, HC +7% 
[Lv. 8]: ATK 540%, Chance: 21%, HC +8% 
[Lv. 9]: ATK 570%, Chance: 23%, HC +9% 
[Lv.10]: ATK 600%, Chance: 25%, HC +10%
Formula: ATK (%): (300 + (Skill Lv x 30)) x Hits
Hiding ATK (%): (300 + (Skill Lv x 30) + STR) x Hits `,
    img: backStab,
  },
  {
    id: "tunnelDrive",
    level: 0,
    dependencies: [
      { id: "hiding", minLevel: 1 },
    ],
    dependent: [
      { id: "stealth" },
      { id: "raid" },
    ],
    element: null,
    skillName: "Tunnel Drive",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Passive
Type: Misc
Requirement: Hiding Lv: 1
Description: Allows movement while Hiding, during which WD is increased.
[Lv. 1]: WD +114%
[Lv. 2]: WD +108%
[Lv. 3]: WD +102% 
[Lv. 4]: WD +96% 
[Lv. 5]: WD +90%`,
    img: tunnelDrive,
  },
  {
    id: "raid",
    level: 0,
    dependencies: [
      { id: "sprinkleSand", minLevel: 5 },
      { id: "tunnelDrive", minLevel: 2 },
    ],
    dependent: [
      { id: "intimidate" },
    ],
    element: null,
    skillName: "Raid",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Physical 
Target: Self
After Cast Delay: 0.14s
Cooldown: 1s
Hits: 1
SP Cost: 15
Requirement: Sprinkle Sand Lv: 5, Back Stab Lv: 2, Tunnel Drive Lv: 2
Description: Deals P.DMG to enemies within a 7x7 AoE. Has a chance to inflict Stun for 5s and Blind for 20s.
If cast from Hiding, this skill has no CD and increases damage taken by enemies for 10s. This amplified damage is reduced by half for boss monsters.
CD scales with the learned level of Hiding. 
[Lv 1]: ATK 200%, Damage +6% Stun/Blind Chance: 13%
[Lv 2]: ATK 350%, Damage +12% Stun/Blind Chance: 16%
[Lv 3]: ATK 500%, Damage +18% Stun/Blind Chance: 19%
[Lv 4]: ATK 650%, Damage +24% Stun/Blind Chance: 22%
[Lv 5]: ATK 800%, Damage +30% Stun/Blind Chance: 25%
Formula: ATK (%): 50 + (Skill Lv x 150) 
Cooldown (seconds): 1 - (Hiding Lv x 0,1) `,
    img: raid,
  },
  {
    id: "intimidate",
    level: 0,
    dependencies: [
      { id: "raid", minLevel: 5 },
    ],
    dependent: [],
    element: null,
    skillName: "Intimidate",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Enemy
After Cast Delay: A.Delay
Cooldown: A.Delay + 0.36s 
Range: 1
Hits: 1
Requirement: Raid Lv: 5
Description: Deals P.DMG to the target. Has a chance to teleport both caster and target to a random location on the same map. Chance scales with the Base Level difference between the caster and target.
Boss and Elite monsters cannot be teleported.
[Lv. 1]: ATK 130%, Chance: 55% 
[Lv. 2]: ATK 160%, Chance: 60%
[Lv. 3]: ATK 190%, Chance: 65% 
[Lv. 4]: ATK 220%, Chance: 70% 
[Lv. 5]: ATK 250%, Chance: 75%
Formula: ATK (%): 100 + (Skill Lv x 30)
Chance (%): 50 + (Skill Lv x 5) + (Base Lv - Target Base Lv) `,
    img: intimidate,
  },
  {
    id: "helmStripping",
    level: 0,
    dependencies: [
      { id: "snatcher", minLevel: 5 },
    ],
    dependent: [
      { id: "fullStrip" },
      { id: "shieldStripping" },
    ],
    element: null,
    skillName: "Helm Stripping",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Supportive
Target: Enemy
After Cast Delay: A.Delay + 0.50s 
Cooldown: A.Delay
Range: 1
Requirement: Snatcher Lv: 5
Description: Attempts to Remove the target's helmet for 60s.
Success rate scales with the Base Level difference between the caster and target. Duration is reduced by the target's Base Level.
Against monsters, decreases M.ATK for 60s, with double success rate and duration. Against bosses, duration is reduced to a quarter.
[Lv. 1]: VCT: 0.56s. FCT: 0.14s. MATK -5% Chance: 9%, SP Cost: 12
[Lv. 2]: VCT: 0.72s. FCT: 0.18s. MATK -10% Chance: 13%, SP Cost: 14
[Lv. 3]: VCT: 0.88s. FCT: 0.22s. MATK -15% Chance: 17%, SP Cost: 16
[Lv. 4]: VCT: 1.14s. FCT: 0.26s. MATK -20% Chance: 21%, SP Cost: 18
[Lv. 5]: VCT: 1.20s. FCT: 0.30s. MATK -25% Chance: 25%, SP Cost: 20
Formula: Chance (%): (50 + (Skill Lv x 40) + ((Base Lv - Target Base Lv) x 10)) / 1000
Duration (seconds): 60 - ((60 x (Target Base Lv x 0.5)) / 100) `,
    img: helmStripping,
  },
  {
    id: "shieldStripping",
    level: 0,
    dependencies: [
      { id: "helmStripping", minLevel: 2 },
    ],
    dependent: [
      { id: "fullStrip" },
      { id: "armorStripping" },
    ],
    element: null,
    skillName: "Shield Stripping",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Supportive 
Target: Enemy
After Cast Delay: A.Delay + 0.50s 
Cooldown: A.Delay
Range: 1
Requirement: Helm Stripping Lv: 2
Description: Attempts to forcibly Remove the target's shield for 60s.
Success rate scales with the Base Level difference between the caster and target. Duration is reduced by the target's Base Level.
Against monsters, decreases M.DEF for 60s, with double success rate and duration. Against bosses, duration is reduced to a quarter.
[Lv. 1]: VCT: 0.56s. FCT: 0.14s. M.DEF -5% Chance: 9%, SP Cost: 12
[Lv. 2]: VCT: 0.72s. FCT: 0.18s. M.DEF -10% Chance: 13%, SP Cost: 14
[Lv. 3]: VCT: 0.88s. FCT: 0.22s. M.DEF -15% Chance: 17%, SP Cost: 16
[Lv. 4]: VCT: 1.14s. FCT: 0.26s. M.DEF -20% Chance: 21%, SP Cost: 18
[Lv. 5]: VCT: 1.20s. FCT: 0.30s. M.DEF -25% Chance: 25%, SP Cost: 20
Formula: Chance (%): (50 + (Skill Lv x 40) + ((Base Lv - Target Base Lv) x 10)) / 1000 
Duration (seconds): 60 - ((60 x (Target Base Lv x 0.5)) / 100) `,
    img: shieldStripping,
  },
  {
    id: "armorStripping",
    level: 0,
    dependencies: [
      { id: "shieldStripping", minLevel: 2 },
    ],
    dependent: [
      { id: "fullStrip" },
      { id: "weaponStripping" },
    ],
    element: null,
    skillName: "Armor Stripping",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Supportive
Target: Enemy
After Cast Delay: A.Delay + 0.50s 
Cooldown: A.Delay
Range: 1
Requirement: Shield Stripping Lv: 2
Description: Attempts to forcibly remove the equipped armor of a single target, temporarily preventing them from equipping it again for 60 Description: Attempts to forcibly Remove the target's armor for 60s.
Success rate scales with the Base Level difference between the caster and target. Duration is reduced by the target's Base Level.
Against monsters, decreases P.DEF for 60s, with double success rate and duration. Against bosses, duration is reduced to a quarter.
[Lv. 1]: VCT: 0.56s. FCT: 0.14s. P.DEF -5% Chance: 9%, SP Cost: 12
[Lv. 2]: VCT: 0.72s. FCT: 0.18s. P.DEF -10% Chance: 13%, SP Cost: 14
[Lv. 3]: VCT: 0.88s. FCT: 0.22s. P.DEF -15% Chance: 17%, SP Cost: 16
[Lv. 4]: VCT: 1.14s. FCT: 0.26s. P.DEF -20% Chance: 21%, SP Cost: 18
[Lv. 5]: VCT: 1.20s. FCT: 0.30s. P.DEF -25% Chance: 25%, SP Cost: 20
Formula: Chance (%): (50 + (Skill Lv x 40) + ((Base Lv - Target Base Lv) x 10)) / 1000 
Duration (seconds): 60 - ((60 x (Target Base Lv x 0.5)) / 100) `,
    img: armorStripping,
  },
  {
    id: "weaponStripping",
    level: 0,
    dependencies: [
      { id: "armorStripping", minLevel: 2 },
    ],
    dependent: [
      { id: "fullStrip" },
    ],
    element: null,
    skillName: "Weapon Stripping",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Supportive 
Target: Enemy
After Cast Delay: A.Delay + 0.50s 
Cooldown: A.Delay
Range: 1
Requirement: Armor Stripping Lv: 2
Description: Attempts to forcibly Remove the target's weapon for 60s.
Success rate scales with the Base Level difference between the caster and target. Duration is reduced by the target's Base Level.
Against monsters, decreases W.ATK for 60s, with double success rate and duration. Against bosses, duration is reduced to a quarter.
[Lv. 1]: VCT: 0.56s. FCT: 0.14s. W.ATK -5% Chance: 9%, SP Cost: 12
[Lv. 2]: VCT: 0.72s. FCT: 0.18s. W.ATK -10% Chance: 13%, SP Cost: 14
[Lv. 3]: VCT: 0.88s. FCT: 0.22s. W.ATK -15% Chance: 17%, SP Cost: 16
[Lv. 4]: VCT: 1.14s. FCT: 0.26s. W.ATK -20% Chance: 21%, SP Cost: 18
[Lv. 5]: VCT: 1.20s. FCT: 0.30s. W.ATK -25% Chance: 25%, SP Cost: 20
Formula: Chance (%): (50 + (Skill Lv x 40) + ((Base Lv - Target Base Lv) x 10)) / 1000 
Duration (seconds): 60 - ((60 x (Target Base Lv x 0.5)) / 100) `,
    img: weaponStripping,
  },
];


/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */
