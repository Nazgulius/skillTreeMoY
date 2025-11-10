/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */

import skillImgNo from '../../img/no_img.png'; // заглушка
import cloaking from '../../img/icon_ass/icon_ass_1.png'; 
import poisonWeapon from '../../img/icon_ass/icon_ass_2.png'; 
import grimtooth from '../../img/icon_ass/icon_ass_3.png'; 
import katarMastery from '../../img/icon_ass/icon_ass_4.png'; 
import sonicBlow from '../../img/icon_ass/icon_ass_8.png'; 
import poisonReact from '../../img/icon_ass/icon_ass_6.png'; 
import venomDust from '../../img/icon_ass/icon_ass_9.png'; 
import venomSplasher from '../../img/icon_ass/icon_ass_10.png'; 
import dualWieldingMastery from '../../img/icon_ass/icon_ass_11.png'; 
import throwingKnife from '../../img/icon_ass/icon_ass_15.png'; 
import poisonery from '../../img/icon_ass/icon_ass_13.png'; 
import vSAnticipation from '../../img/icon_ass/icon_ass_16.png'; 

// список скилов Assassin
export const skillsAssassin = [  
  {
    id: "katarMastery",
    level: 0,
    dependencies: [],
    dependent: [
      { id: "crossLethality" },
      { id: "grimtooth" },
    ],
    element: null,
    skillName: "Katar Mastery",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Passive
Type: Physical
Weapon: Katar
Requirement: None
Description: Increases E.ATK and CRIT while wielding a Katar. At max level, also grants +6% ATK.
[Lv. 1]: E.ATK +4. CRIT +10% 
[Lv. 2]: E.ATK +8. CRIT +20% 
[Lv. 3]: E.ATK +12. CRIT +30% 
[Lv. 4]: E.ATK +16. CRIT +40% 
[Lv. 5]: E.ATK +20. CRIT +50% 
[Lv. 6]: E.ATK +24. CRIT +60% 
[Lv. 7]: E.ATK +28. CRIT +70% 
[Lv. 8]: E.ATK +32. CRIT +80% 
[Lv. 9]: E.ATK +36. CRIT +90% 
[Lv.10]: E.ATK +40. CRIT +100%`,
    img: katarMastery,
  },
  {
    id: "cloaking",
    level: 0,
    dependencies: [
      { id: "hiding", minLevel: 1 }
    ],
    dependent: [
      { id: "meteorAssault" },
      { id: "soulDestroyer" },
      { id: "grimtooth" },
      { id: "throwingKnife" },
    ],
    element: null,
    skillName: "Cloaking",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Toggle 
Type: Supportive 
Target: Self
After Cast Delay: 0.30s 
Cooldown: A.Delay
SP Cost: 15
Requirement: Hiding Lv: 1
Description: Becomes Invisible, reducing WD while near walls and increasing it while far. While active, drains 1 SP over time.
At level 1, can only be used near walls. 
[Lv. 1]: Near -3% SP Drain: every 0.5s
[Lv. 2]: Far +24%, Near -6% SP Drain: every 1s
[Lv. 3]: Far +21%, Near -9% SP Drain: every 2s
[Lv. 4]: Far +18%, Near -12% SP Drain: every 3s
[Lv. 5]: Far +15%, Near -15% SP Drain: every 4s
[Lv. 6]: Far +12%, Near -18% SP Drain: every 5s
[Lv. 7]: Far +9%, Near -21% SP Drain: every 6s
[Lv. 8]: Far +6%, Near -24% SP Drain: every 7s
[Lv. 9]: Far +3%, Near -27% SP Drain: every 8s
[Lv.10]: Far +0%, Near -30% SP Drain: every 9s `,
    img: cloaking,
  },
  {
    id: "dualWieldingMastery",
    level: 0,
    dependencies: [],
    dependent: [
      { id: "crossLethality" },
      { id: "meteorAssault" },
      { id: "throwingKnife" },
    ],
    element: null,
    skillName: "Dual Wielding Mastery",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Passive
Type: Physical
Weapon: Dual-Wielded
Requirement: None
Description: Increases E.ATK while Dual Wielding. Also reduces their damage penalty. 
[Lv. 1]: E.ATK +4. Penalty -10%
[Lv. 2]: E.ATK +8. Penalty -20% 
[Lv. 3]: E.ATK +12. Penalty -30% 
[Lv. 4]: E.ATK +16. Penalty -40% 
[Lv. 5]: E.ATK +20. Penalty -50% 
[Lv. 6]: E.ATK +24. Penalty -60% 
[Lv. 7]: E.ATK +28. Penalty -70% 
[Lv. 8]: E.ATK +32. Penalty -80% 
[Lv. 9]: E.ATK +36. Penalty -90% 
[Lv.10]: E.ATK +40. Penalty -100%`,
    img: dualWieldingMastery,
  },
  {
    id: "throwingKnife",
    level: 0,
    dependencies: [
      { id: "dualWieldingMastery", minLevel: 5 },
      { id: "cloaking", minLevel: 5 },
    ],
    dependent: [],
    element: null,
    skillName: "Throwing Knife",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
Element: Ammunition
After Cast Delay: A.Delay - 0.22s
Cooldown: A.Delay
Range: 12
Hits: 1
Requirement: Dual Wielding Mastery Lv: 5, Cloaking Lv: 5
Description: Deals ranged P.DMG to the target, scaling with their missing HP.
Also ignores 1% of their P.DEF for each 1% HP missing.
This skill has HCM based on CRIT.
Catalyst: 1x Throwing Knife
[Lv. 1]: ATK 140%, SP Cost: 6 
[Lv. 2]: ATK 180%, SP Cost: 7 
[Lv. 3]: ATK 220%, SP Cost: 8 
[Lv. 4]: ATK 260%, SP Cost: 9 
[Lv. 5]: ATK 300%, SP Cost: 10 
[Lv. 6]: ATK 340%, SP Cost: 11 
[Lv. 7]: ATK 380%, SP Cost: 12 
[Lv. 8]: ATK 420%, SP Cost: 13 
[Lv. 9]: ATK 460%, SP Cost: 14 
[Lv.10]: ATK 500%, SP Cost: 15
Formula: ATK (%): 100 + (Skill Lv x 40) + Target Missing HP bonus 
HCM (%): 100 + (CRIT / 2)
Target Missing HP bonus:
If the target's HP is below 25%: 100% bonus 
If the target's HP is below 50%: 60% bonus 
If the target's HP is below 75%: 30% bonus `,
    img: throwingKnife,
  },
  {
    id: "grimtooth",
    level: 0,
    dependencies: [
      { id: "cloaking", minLevel: 2 },
      { id: "katarMastery", minLevel: 4 },
    ],
    dependent: [
      { id: "sonicBlow" },
    ],
    element: null,
    skillName: "Grimtooth",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Weapon: Katar 
Type: Physical
Target: Enemy
After Cast Delay: A.Delay - 0.22s 
Cooldown: A.Delay
Hits: 1
Requirement: Cloaking Lv: 2, Katar Mastery Lv: 4
Description: Deals ranged P.DMG to enemies between the user and the target, scaling with AGI when used from Hiding.
Also increases WD of normal monsters by 50% for 1s.
This skill has HCM based on CRIT. Requires Hiding or Cloaking state.
[Lv. 1]: ATK 120%, Range: 5. SP Cost: 4 
[Lv. 2]: ATK 140%, Range: 5. SP Cost: 4 
[Lv. 3]: ATK 160%, Range: 6. SP Cost: 5 
[Lv. 4]: ATK 180%, Range: 6. SP Cost: 5
[Lv. 5]: ATK 200%, Range: 7. SP Cost: 6 
[Lv. 6]: ATK 220%, Range: 7. SP Cost: 6 
[Lv. 7]: ATK 240%, Range: 8. SP Cost: 7 
[Lv. 8]: ATK 260%, Range: 8. SP Cost: 7 
[Lv. 9]: ATK 280%, Range: 9. SP Cost: 8 
[Lv.10]: ATK 300%, Range: 9. SP Cost: 8
Formula: ATK (%): 100 + (Skill Lv x 20) 
HCM (%) 100 + (CRIT / 2)
Hiding ATK (%): 100 + (Skill Lv x 20) + AGI `,
    img: grimtooth,
  },
  {
    id: "sonicBlow",
    level: 0,
    dependencies: [
      { id: "grimtooth", minLevel: 5 },
    ],
    dependent: [],
    element: null,
    skillName: "Sonic Blow",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Weapon: Katar 
Type: Physical 
Target: Enemy
After Cast Delay: A.Delay 0.22s 
Cooldown: A.Delay + 0.66s
Range: 1
Hits: 8
Requirement: Grimtooth Lv: 5
Description: Deals P.DMG to the target. Has a chance to inflict Stun for 4.5s. Hits scales with A.Delay.
This skill has HCM based on CRIT.
[Lv. 1]: ATK 60% x Hits. SP Cost: 16 Stun Chance: 12%
[Lv. 2]: ATK 70% x Hits. SP Cost: 17 Stun Chance: 14%
[Lv. 3]: ATK 80% x Hits. SP Cost: 18 Stun Chance: 16%
[Lv. 4]: ATK 90% x Hits. SP Cost: 19 Stun Chance: 18%
[Lv. 5]: ATK 100% x Hits. SP Cost: 20 Stun Chance: 20%
[Lv. 6]: ATK 110% x Hits. SP Cost: 21 Stun Chance: 22%
[Lv. 7]: ATK 120% x Hits. SP Cost: 22 Stun Chance: 24%
[Lv. 8]: ATK 130% x Hits. SP Cost: 23 Stun Chance: 26%
[Lv. 9]: ATK 140% x Hits. SP Cost: 24 Stun Chance: 28%
[Lv.10]: ATK 150% x Hits. SP Cost: 25 Stun Chance: 30%
Formula: ATK (%): (50 + (Skill Lv x 10)) x Hits 
HCM (%): 100 + (CRIT / 2) 
Hits: 8 + (1000 + A.Delay) `,
    img: sonicBlow,
  },
   {
    id: "poisonWeapon",
    level: 0,
    dependencies: [
      { id: "envenom", minLevel: 1 },
    ],
    dependent: [
      { id: "meteorAssault" },
      { id: "soulDestroyer" },
      { id: "poisonReact" },
      { id: "poisonery" },
      { id: "venomDust" },
    ],
    element: null,
    skillName: "Poison Weapon",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Supportive 
Target: Ally
Variable Cast Time: 1s
After Cast Delay: A.Delay + 2s
Range: 9
Requirement: Envenom Lv: 1
Description: Endows the weapon with Poison property, granting a chance to inflict Poison for 60s on attacks.
Also increases the DMG of Poison property basic attacks and skills.
From level 5, affects allies within a 5x5 AoE around the target, but has a 0.6s FCT, doubles SP Cost and triples the Catalyst required.
Catalyst: 1x Condensed Poison
[Lv. 1]: Poison Damage +2%, Chance: 4% Duration: 75s. SP Cost: 19
[Lv. 2]: Poison Damage +3%, Chance: 6% Duration: 150s. SP Cost: 23
[Lv. 3]: Poison Damage +4%, Chance: 8% Duration: 225s. SP Cost: 27
[Lv. 4]: Poison Damage +5%, Chance: 10% Duration: 300s. SP Cost: 31
[Lv. 5]: Poison Damage +5%, Chance: 10% Duration: 300s. SP Cost: 62 `,
    img: poisonWeapon,
  },
  {
    id: "poisonReact",
    level: 0,
    dependencies: [
      { id: "poisonWeapon", minLevel: 3 },
    ],
    dependent: [],
    element: null,
    skillName: "Poison React",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Supportive 
Target: Self
After Cast Delay: A.Delay - 0.22s
Requirement: Poison Weapon Lv: 3
Description: Amplifies and reflects 70% of Poison property DMG as M.DMG to the attacker, while only taking 30% of the original DMG. Ends after reflecting.
Has a chance to auto-cast Envenom at its learned level when taking non-Poison property damage, if the attacker is within Envenom range.
Chance scales with Venom Dust and Venom Splasher levels, and is reduced to one-third if the attack misses.
CD scales with skill level.
[Lv. 1]: Amplify: 130%, CD: 1s. SP Cost: 15 Envenom Chance: 6%, Duration: 15s
[Lv. 2]: Amplify: 160%, CD: 2s. SP Cost: 20 Envenom Chance: 12%, Duration: 20s
[Lv. 3]: Amplify: 190%, CD: 3s. SP Cost: 25 Envenom Chance: 18%, Duration: 25s
[Lv. 4]: Amplify: 220%, CD: 4s. SP Cost: 30 Envenom Chance: 24%, Duration: 30s
[Lv. 5]: Amplify: 250%, CD: 5s. SP Cost: 35 Envenom Chance: 30%, Duration: 35s
[Lv. 6]: Amplify: 280%, CD: 6s, SP Cost: 40 Envenom Chance: 36%, Duration: 40s 
[Lv. 7]: Amplify: 310%, CD: 7s. SP Cost: 45 Envenom Chance: 42%, Duration: 45s
[Lv. 8]: Amplify: 340%, CD: 8s. SP Cost: 50 Envenom Chance: 48%, Duration: 50s
[Lv. 9]: Amplify: 370%, CD: 9s, SP Cost: 55 Envenom Chance: 54%, Duration: 55s 
[Lv.10]: Amplify: 400%, CD: 10s. SP Cost: 60 Envenom Chance: 60%, Duration: 60s
Formula: Redirect and Envenom Chance (%): (Skill Lv x 6) + ((Venom Dust Lv + Venom Splasher Lv) x 2) `,
    img: poisonReact,
  },
  {
    id: "poisonery",
    level: 0,
    dependencies: [
      { id: "envenom", minLevel: 10 },
      { id: "detoxify", minLevel: 1 },
      { id: "poisonWeapon", minLevel: 5 },
    ],
    dependent: [
      { id: "deadlyPoisonMastery" },
    ],
    element: null,
    skillName: "Poisonery",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Supportive 
Target: Self
SP Cost: 5
Requirement: Envenom Lv: 10, Detoxify Lv: 1, Poison Weapon Lv: 5
Description: Crafts Poison Bottles.
Base Level, Job Level and Stats increase the number of crafted bottles.
Guide: Poisonery Creation Guide
[Lv. 1]: Bonus Efficiency: 0% 
[Lv. 2]: Bonus Efficiency: 25% 
[Lv. 3]: Bonus Efficiency: 50% 
[Lv. 4]: Bonus Efficiency: 75% 
[Lv. 5]: Bonus Efficiency: 100%
Formula: 
Crafted Bottles: 
1 + Bonus Amount
Bonus Amount:
((1 x ((Level Bonus + Stats Bonus) x ((Skill Lv x 25) - 25))) / 100)
Level Bonus: 
((Base Lv x 100) / 200) + ((Job Lv x 100) / 140) / 100
Stats Bonus:
((STR2^ / 10) + (AGI^2 / 10) + (VIT^2 / 10) + (INT^2 / 10) + (DEX^2) + (LUK^2 / 10)) / 100

Random Bonus Amount:
10% chance for the bonus to be reduced to 25%
70% chance for the bonus to be reduced to 50% 
20% chance for no reductions `,
    img: poisonery,
  },  
  {
    id: "venomDust",
    level: 0,
    dependencies: [
      { id: "poisonWeapon", minLevel: 5 },
    ],
    dependent: [],
    element: null,
    skillName: "Venom Dust",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Supportive 
Target: Ground
Fixed Cast Time: 0.50s
After Cast Delay: A.Delay 0.22s
Range: 9
SP Cost: 40
Requirement: Poison Weapon Lv: 5
Description: Creates a 7x7 AoE that inflicts. Poison on enemies for 18s.
Also reduces their resistance to Poison property and to Poison status, strongest at the center.
VCT and CD scales with skill level.
Catalyst: 1x Noxious Powder Bottle
[Lv 1]: VCT: 0.10s. CD: 6s Duration: 6s
[Lv 2]; VCT: 0.20s. CD: 12s Duration: 12s
[Lv 3]: VCT: 0.30s, CD: 18s Duration: 18s
[Lv 4]: VCT: 0.40s. CD: 24s Duration: 24s
[Lv 5]: VCT: 0.50s. CD: 30s Duration: 30s
[Lv 6]: VCT: 0.60s. CD: 36s Duration: 36s
[Lv 7]: VCT: 0.70s. CD: 42s Duration: 42s
[Lv 8]: VCT: 0.80s. CD: 48s Duration: 48s
[Lv 9]: VCT: 0.90s. CD: 54s  Duration: 54s
[Lv.10]: VCT: 1.00s. CD: 60s Duration: 60s
Formula: 
Poison status and property resistance reduce (%):
  Center: Skill Lv x 5
  Around the Center: Skill Lv x 3
  Outer area: Skill Lv x 1 `,
    img: venomDust,
  },
  {
    id: "venomSplasher",
    level: 0,
    dependencies: [
      { id: "poisonReact", minLevel: 5 },
      { id: "venomDust", minLevel: 5 },
    ],
    dependent: [      
      { id: "vSAnticipation" },
    ],
    element: null,
    skillName: "Venom Splasher",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Enemy
Element: Poison
Variable Cast Time: 1s
Fixed Cast Time: 0.30s 
After Cast Delay: 0.14s 
Max Instances: 5
Range: 4
Hits: 1
Requirement: Poison React Lv: 5, Venom Dust Lv: 5
Description: Plants a bomb on a single target which explodes after 90s, dealing M.DMG to enemies within a 5x5 AoE around the target. The user's ATK is added to the damage as T.MATK.
Has a chance to inflict Poison for 20s, which spreads to enemies in the area if the target is already poisoned.
CD scales with skill level. 
[Lv. 1]: MATK 600%, CD: 2s Poison Chance: 14%, SP Cost: 17 
[Lv. 2]: MATK 700%, CD: 4s Poison Chance: 18%, SP Cost: 19 
[Lv. 3]: MATK 800%, CD: 6s Poison Chance: 22%, SP Cost: 21 
[Lv. 4]: MATK 900%, CD: 8s Poison Chance: 26%, SP Cost: 23 
[Lv. 5]: MATK 1000%, CD: 10s Poison Chance: 30%, SP Cost: 25 
[Lv. 6]: MATK 1100%, CD: 12s Poison Chance: 34%, SP Cost: 27 
[Lv. 7]: MATK 1200%, CD: 14s Poison Chance: 38%, SP Cost: 29 
[Lv. 8]: MATK 1300%, CD: 16s Poison Chance: 42%, SP Cost: 31 
[Lv. 9]: MATK 1400%, CD: 18s Poison Chance: 46%, SP Cost: 33 
[Lv.10]: MATK 1500%, CD: 20s Poison Chance: 50%, SP Cost: 35
Formula: MATK (%): 500 + (Skill Lv x 100) `,
    img: venomSplasher,
  },  
  {
    id: "vSAnticipation",
    level: 0,
    dependencies: [
      { id: "venomSplasher", minLevel: 1 },
    ],
    dependent: [],
    element: null,
    skillName: "V.S. Anticipation",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active 
Type: Supportive 
Target: Self
After Cast Delay: 0.14s
Cooldown: 3s
SP Cost: 5
Description: Instantly triggers user's Venom Splasher within a 21x21 AoE, reducing its CD. Can be used while in Cloaking.
[Lv. 1]: CD Reduction: 4s 
[Lv. 2]: CD Reduction: 85 
[Lv. 3]: CD Reduction: 12s 
[Lv. 4]: CD Reduction: 16s 
[Lv. 5]: CD Reduction: 20s`,
    img: vSAnticipation,
  },
];


/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */
