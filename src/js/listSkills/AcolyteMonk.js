/*  author Chalykh Maksim 
  # data 10.02.2025 
  # email: chalyh.maksim.88@mail.ru */

import skillImgNo from '../../img/no_img.png'; // заглушка
import ironHand from '../../img/icon_mon/icon_mon_1.gif'; 
import spiritualCadence from '../../img/icon_mon/icon_mon_24.png'; 
import callSpiritSphere from '../../img/icon_mon/icon_mon_3.gif'; 
import absorbSpiritSphere from '../../img/icon_mon/icon_mon_4.gif'; 
import tripleAttack from '../../img/icon_mon/icon_mon_5.gif'; 
import bodyRelocation from '../../img/icon_mon/icon_mon_6.gif'; 
import occultImpaction from '../../img/icon_mon/icon_mon_8.gif'; 
import throwSpiritSphere from '../../img/icon_mon/icon_mon_9.gif'; 
import calmSpirits from '../../img/icon_mon/icon_mon_10.gif'; 
import pacify from '../../img/icon_mon/icon_mon_11.gif'; 
import asuraStrike from '../../img/icon_mon/icon_mon_13.gif'; 
import chainCombo from '../../img/icon_mon/icon_mon_14.gif'; 
import comboFinish from '../../img/icon_mon/icon_mon_15.gif'; 
import devaRetaliation from '../../img/icon_mon/icon_mon_21.png'; 
import fallingBlossoms from '../../img/icon_mon/icon_mon_22.png'; 
import furiousSpirits from '../../img/icon_mon/icon_mon_23.png'; 
import lotusPu from '../../img/icon_mon/icon_mon_25.png'; 
import chainFi from '../../img/icon_mon/icon_mon_20.png'; 
import flightF from '../../img/icon_mon/icon_mon_26.png'; 
import fallenF from '../../img/icon_mon/icon_mon_27.png'; 

// список скилов Monk
export const skillsMonk = [  
  {
    id: "absorbSpiritSphere",
    level: 0,
    dependencies: [
      { id: "callSpiritSphere", minLevel: 5 },
    ],
    dependent: [],
    element: null,
    skillName: "Absorb Spirit Sphere",
    maxLevel: 1,
    inform: `Max Lv: 1
Skill Form: Active
Type: Supportive 
Target: Self/Enemy
Fixed Cast Time: 0.60s
After Cast Delay: A.Delay - 0.18s 
Cooldown: A.Delay
Range: 9
Requirement: Call Spirit Sphere Lv: 5
Description: Absorbs the target's Spirit Spheres, recovering 10 SP per sphere.
Against monsters, has a chance to recover SP based on the user's Base Level and the monster's Level. 
Formula: Chance (%): 25 + ((Base Lv / 4) - (Monster Level / 3))
SP Recover: ((5~10) Monster Level) / 10 `,
    img: absorbSpiritSphere,
  },
  {
    id: "asuraStrike",
    level: 0,
    dependencies: [
      { id: "furiousSpirits", minLevel: 5 },
    ],
    dependent: [],
    element: null,
    skillName: "Asura Strike",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Enemy
After Cast Delay: 1.50s
Cooldown: 3s
Range: 2 + Weapon's range
SP Cost: 20
Requirement: Furious Spirits Lv: 5
Description: Deals P.DMG to the target, ignoring its FLEE.
This skill is unaffected by Damage Modifiers. While in Furious Spirits stance, it passively grants Asura Strike Charge. After casting, the caster is temporarily afflicted with Asura Strike Recoil, for a duration equal to half of the skill's cooldown.
If Spirit Spheres Collect is active, both the Spirit Sphere and max SP Cost are doubled. This skill can be cast on targets trapped by Pacify.
Requires Furious Spirits stance to use.
CD increases by 1s for each Spirit Sphere consumed.
VCT and FCT scale with skill level.
[Lv. 1]: VCT/FCT: 1.20s. Spheres Cost: 1 MaxSP Cost: 1%
[Lv. 2]: VCT/FCT: 1.40s. Spheres Cost: 2 MaxSP Cost: 2%
[Lv. 3]: VCT/FCT: 1.60s. Spheres Cost: 3 MaxSP Cost: 3%
[Lv. 4]: VCT/FCT: 1.80s. Spheres Cost: 4 MaxSP Cost: 4%
[Lv. 5]: VCT/FCT: 2.00s. Spheres Cost: 5 MaxSP Cost: 5%
Formula: Damage: ATK x 25 + ((Stack x (Consumed Spheres x 10)) / 100) 
Max Damage Stack: (100000 x ((STR + Base Lv) / 150)) + (MaxSP x 20) `,
    img: asuraStrike,
  },
  {
    id: "bodyRelocation",
    level: 0,
    dependencies: [
      { id: "throwSpiritSphere", minLevel: 3 },
      { id: "pacify", minLevel: 3 },
    ],
    dependent: [
      { id: "palmStrike" },
    ],
    element: null,
    skillName: "Body Relocation",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active 
Type: Physical
Target: Ground
After Cast Delay: A.Delay - 0.18s
Requirement: Throw Spirit Sphere Lv: 3, Pacify Lv: 3
Description: Charges to the targeted location.
if the path has no obstacles.
After casting this skill, puts Asura Strike and Deva Retaliation in a 2s CD.
Furious Spirits: Removes the Spirit Sphere cost.
Calm Spirits: Deals P.DMG to enemies within a 3x3 AoE, knocking them back 2 cells. The damage scales with VIT, P.DEF, Base Level, Weight and the distance to the targets. Requires 1 Spirit Sphere.
[Lv. 1]: Range: 3. SP Cost: 6 
[Lv. 2]: Range: 5. SP Cost: 8 
[Lv. 3]: Range: 7. SP Cost: 10
[Lv. 4]: Range: 9. SP Cost: 12 
[Lv. 5]: Range: 11. SP Cost: 14
Calm Spirits: ATK (%): ((((Weight / 200) x Distance) x (1 + ((VIT / 30) x (Base Lv / 100)))) x (S.DEF + H.DEF)) / 100 `,
    img: bodyRelocation,
  },
  {
    id: "callSpiritSphere",
    level: 0,
    dependencies: [],
    dependent: [
      { id: "spiritSpheresCollect" },
      { id: "absorbSpiritSphere" },
      { id: "fallingBlossoms" },
      { id: "pacify" },
      { id: "spiritualCadence" },
      // { id: "tripleAttack" },
    ],
    element: null,
    skillName: "Call Spirit Sphere",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Supportive
Target: Self
After Cast Delay: A.Delay 0.18s
Cooldown: A.Delay
Max Instances: 5
Requirement: None
Description: Summons Spirit Spheres for 600s, which increases Mastery ATK and S.DEF The Mastery ATK bonus increases while in Furious Spirit stance.
VCT and FCT scale with skill level.
[Lv. 1]: VCT: 0.10s. FCT: 0.10s Spheres: 1. SP Cost: 5
[Lv. 2]: VCT: 0.20s. FCT: 0.20s Spheres: 2. SP Cost: 10
[Lv. 3]: VCT: 0.30s. FCT: 0.30s Spheres: 3. SP Cost: 15
[Lv. 4]: VCT: 0.40s. FCT: 0.40s Spheres: 4. SP Cost: 20
[Lv. 5]: VCT: 0.50s. FCT: 0.50s Spheres: 5. SP Cost: 25
Formula: Mastery ATK & S.DEF: Spirit Spheres x 3 
Furious Spirits Bonus: Furious Spirits Lv x 6 `,
    img: callSpiritSphere,
  },
  {
    id: "calmSpirits",
    level: 0,
    dependencies: [
      { id: "spiritualCadence", minLevel: 3 },
    ],
    dependent: [
      { id: "devaRetaliation" },
    ],
    element: null,
    skillName: "Calm Spirits",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Toggle
Type: Supportive 
Target: Self
Variable Cast Time: 0.90s
Fixed Cast Time: 0.60s
After Cast Delay: 0.30s 
Cooldown: A.Delay
Requirement: Spiritual Cadence Lv: 3
Description: Increases C.DEF and resistance to both P.DMG and M.DMG while active, but reduces ATK.
Also grants +10 C.DEF.
Requires 5 Spirit Spheres.
Cancels the effect of Furious Spirits. 
[Lv. 1]: Resistance: P.DMG: 6%, M.DMG: 2% C.DEF +5%, ATK -12%, SP Cost: 2% 
[Lv. 2]: Resistance: P.DMG: 12%, M.DMG: 4% C.DEF +10%, ATK -24%, SP Cost: 4%
[Lv. 3]: Resistance: P.DMG: 18%, M.DMG: 6% C.DEF +15%, ATK -36%, SP Cost: 6% 
[Lv. 4]: Resistance: P.DMG: 24%, M.DMG: 8% C.DEF +20%, ATK -48%, SP Cost: 8% 
[Lv. 5]: Resistance: P.DMG: 30%, M.DMG: 10% C.DEF +25%, ATK -60%, SP Cost: 10%`,
    img: calmSpirits,
  },
//   {
//     id: "chainCombo",
//     level: 0,
//     dependencies: [
//       { id: "tripleAttack", minLevel: 5 },
//     ],
//     dependent: [
//       { id: "comboFinish" },
//     ],
//     element: null,
//     skillName: "Chain Combo",
//     maxLevel: 5,
//     inform: `Max Lv: 5
// Skill Form: Active
// Type: Physical
// Target: Self
// Range: 2
// Requirement: Triple Attack Lv: 5
// Description: Chain Combo is a powerful melee attack that can be used after Raging Trifecta Blow, delivering a devastating follow-up strike. Attack power increases further if the user is a Champion, based on their Base Level. When wielding a Knuckle-class weapon, deals additional damage and reduces cast delay. In Furious Spirits state, Adds twice your CRIT as TRUE DAMAGE to skill hits. In Calm Spirits state, adds your Soft Defense and half of Hard Defense as Physical Damage and become 5x5 AoE.
// [Lv 1]: Atk 350%, SP Cost: 7,
// [Lv 2]: Atk 450%, SP Cost: 9,
// [Lv 3]: Atk 500%, SP Cost: 11,
// [Lv 4]: Atk 650%, SP Cost: 13,
// [Lv 5]: Atk 700%, SP Cost: 15`,
//     img: chainCombo,
//   },
//   {
//     id: "comboFinish",
//     level: 0,
//     dependencies: [
//       { id: "chainCombo", minLevel: 3 },
//     ],
//     dependent: [
//       { id: "tigerFist" },
//       { id: "chainCrushCombo" },      
//     ],
//     element: null,
//     skillName: "Combo Finish",
//     maxLevel: 5,
//     inform: `Max Lv: 5
// Skill Form: Active
// Type: Physical
// Target: Self
// Range: 2
// Requirement: Chain Combo Lv: 3
// Description: Combo Finish delivers a powerful melee strike that can be used after Chain Combo, dealing substantial damage that scales with the user's STR. Attack power increases further if the user is a Champion, based on their Base Level. When wielding a Knuckle-class weapon, deals additional damage and reduces cast delay. In Furious Spirits state, Adds twice your CRIT as TRUE DAMAGE to skill hits. In Calm Spirits state, adds your Soft Defense and half of Hard Defense as Physical Damage and become 7x7 AoE. Each cast requires 1 Spirit Sphere.
// [Lv 1]: Atk 600% + STR%, SP Cost: 8,
// [Lv 2]: Atk 750% + STR%, SP Cost: 8,
// [Lv 3]: Atk 900% + STR%, SP Cost: 8,
// [Lv 4]: Atk 1050% + STR%, SP Cost: 8,
// [Lv 5]: Atk 1200% + STR%, SP Cost: 8`,
//     img: comboFinish,
//   },
  {
    id: "devaRetaliation",
    level: 0,
    dependencies: [
      { id: "calmSpirits", minLevel: 5 },
    ],
    dependent: [],
    element: null,
    skillName: "Deva Retaliation",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Enemy
After Cast Delay: 1.50s
Cooldown: 3s
Range: 2 + Weapon's range
SP Cost: 20
Requirement: Calm Spirits Lv: 5
Description: Deals P.DMG to the target, ignoring its FLEE.
This skill is unaffected by Damage Modifiers. While in Calm Spirits stance, it passively grants Deva Retaliation Charge. After casting, the caster is temporarily afflicted with Deva Retaliation Recoil, for a duration equal to half of the skill's cooldown.
If Spirit Spheres Collect is active, both the Spirit Sphere and max SP Cost are doubled. This skill can be cast on targets trapped by Pacify.
Requires Calm Spirits stance to use.
CD increases by 1s for each Spirit Sphere consumed.
VCT and FCT scale with skill level.
[Lv. 1]: VCT/FCT: 1.20s. Spheres Cost: 1 MaxSP Cost: 1%
[Lv. 2]: VCT/FCT: 1.40s. Spheres Cost: 2 MaxSP Cost: 2%
[Lv. 3]: VCT/FCT: 1.60s. Spheres Cost: 3 MaxSP Cost: 3%
[Lv. 4]: VCT/FCT: 1.80s. Spheres Cost: 4 MaxSP Cost: 4%
[Lv. 5]: VCT/FCT: 2.00s. Spheres Cost: 5 MaxSP Cost: 5%
Formula: Damage: (((S.DEF / 8) + (H.DEF / 4)) x 25) + ((Stack x (Consumed Spheres x 10)) / 100) 
Max Damage Stack: (100000 x ((VIT + Base Lv) / 150)) + (MaxSP x 20) `,
    img: devaRetaliation,
  },
  {
    id: "fallingBlossoms",
    level: 0,
    dependencies: [
      { id: "callSpiritSphere", minLevel: 5 },
    ],
    dependent: [
      { id: "furiousSpirits" },
    ],
    element: null,
    skillName: "Falling Blossoms",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Supportive 
Target: Self
After Cast Delay: 1s
Cooldown: 20s
Requirement: Call Spirit Sphere Lv: 5
Description: Grants a chance to block ranged P.DMG once, charging toward the attacker when triggered.
Passively increases FLEE and grants a chance to avoid P.DMG.
Requires Furious Spirit stance.
VCT scales with skill level.
[Lv. 1]: Block Chance 10%, VCT: 2.00s Duration: 6s. HP Cost: 1%, SP Cost: 14 Flee +4. Avoid Chance: 1%
[Lv. 2]: Block Chance 20%, VCT: 1.50s Duration: 7s. HP Cost: 2%, SP Cost: 18 Flee +8. Avoid Chance: 2%
[Lv. 3]: Block Chance 30%, VCT: 1.00s Duration: 8s. HP Cost: 3%, SP Cost: 22 Flee +12. Avoid Chance: 3%
[Lv. 4]: Block Chance 40%, VCT: 0.50s Duration: 9s. HP Cost: 4%, SP Cost: 26 Flee +16. Avoid Chance: 4%
[Lv. 5]: Block Chance 50%, VCT: 0.00s Duration: 10s. HP Cost: 5%, SP Cost: 30 Flee +20. Avoid Chance: 5%`,
    img: fallingBlossoms,
  },
  {
    id: "furiousSpirits",
    level: 0,
    dependencies: [
      { id: "fallingBlossoms", minLevel: 3 },
    ],
    dependent: [
      { id: "asuraStrike" },
    ],
    element: null,
    skillName: "Furious Spirits",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Toggle 
Type: Supportive 
Target: Self
Variable Cast Time: 0.90s
Fixed Cast Time: 0.60s
After Cast Delay: 0.30s 
Cooldown: A.Delay
Requirement: Falling Blossoms Lv: 3
Description: Increases ATK and CRIT, and reduces DAA while active, but reduces P.DEF.
Also grants +10 CRIT.
Requires 5 Spirit Spheres.
Cancels the effect of Calm Spirits. 
[Lv. 1]: ATK +6%, CRIT +5%, DAA -2% DEF -12%, SP Cost: 2%
[Lv. 2]: ATK +12%, CRIT +10%, DAA -4% DEF -24%, SP Cost: 4%
[Lv. 3]: ATK +18%, CRIT +15%, DAA -6% DEF -36%, SP Cost: 6%
[Lv. 4]: ATK +24%, CRIT +20%, DAA -8% DEF -48%, SP Cost: 8%
[Lv. 5]: ATK +30%, CRIT +25%, DAA -10% DEF -60%, SP Cost: 10%`,
    img: furiousSpirits,
  },
  {
    id: "ironHand",
    level: 0,
    dependencies: [
      { id: "demonBane", minLevel: 10 },
      { id: "divineProtection", minLevel: 10 },      
    ],
    dependent: [
      // { id: "tripleAttack" },
    ],
    element: null,
    skillName: "Iron Hand",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Passive
Type: Physical
Weapon: Knuckle/Bare Hands
Requirement: Demon Bane Lv: 10, Divine Protection Lv: 10
Description: Increases E.ATK while wielding.
Knuckles or Bare-Handed. At max level, also reduces DAA by 6%.
Double the E.ATK bonus while bare-handed. 
[Lv. 1]: E.ATK +3
[Lv. 2]: E.ATK +6
[Lv. 3]: E.ATK +9
[Lv. 4]: E.ATK +12
[Lv. 5]: E.ATK +15
[Lv. 6]: E.ATK +18
[Lv. 7]: E.ATK +21
[Lv. 8]: E.ATK +24
[Lv. 9]: E.ATK +27 
[Lv.10]: E.ATK +30`,
    img: ironHand,
  },
//   {
//     id: "occultImpaction",
//     level: 0,
//     dependencies: [
//       { id: "pacify", minLevel: 1 },      
//     ],
//     dependent: [
//       { id: "throwSpiritSphere" },
//     ],
//     element: null,
//     skillName: "Occult Impaction",
//     maxLevel: 5,
//     inform: `Max Lv: 5
// Skill Form: Active
// Type: Physical
// Target: Enemy
// Range: 6
// Requirement: Pacify Lv: 1
// Description: Strike with a force that scales with the targets DEF. Damage is always Neutral. In Furious Spirits state, increases range to 6 cells. In Calm Spirits state, adds your Hard DEF as True Damage at the damage. Each cast requires 1 Spirit Sphere.
// [Lv 1]: Atk [Target DEF/2 x 1]%, SP Consumption: 11,
// [Lv 2]: Atk [Target DEF/2 x 2]%, SP Consumption: 12,
// [Lv 3]: Atk [Target DEF/2 x 3]%, SP Consumption: 13,
// [Lv 4]: Atk [Target DEF/2 x 4]%, SP Consumption: 14,
// [Lv 5]: Atk [Target DEF/2 x 5]%, SP Consumption: 15`,
//     img: occultImpaction,
//   },
  {
    id: "pacify",
    level: 0,
    dependencies: [
      { id: "callSpiritSphere", minLevel: 5 },
    ],
    dependent: [
      { id: "palmStrike" },
      { id: "bodyRelocation" },
      { id: "occultImpaction" },
      { id: "throwSpiritSphere" },
    ],
    element: null,
    skillName: "Pacify",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Supportive 
Target: Self
After Cast Delay: 0.50s
SP Cost: 10
Requirement: Call Spirit Sphere Lv: 5
Description: Enters a stance that temporarily traps the next enemy that uses a basic attacks against the caster, provided it happens within the skill's time frame. The trap duration is reduced to 2s against Elite and Boss monsters.
Furious Spirits: Increases the next damage against the target while trapped.
Calm Spirits: Grants T.DEF while trapped, scaling with P.DEF.
[Lv. 1]: Time Frame: 0.7s. Duration: 5.4s 
[Lv. 2]: Time Frame: 0.9s. Duration: 5.8s 
[Lv. 3]: Time Frame: 1.1s. Duration: 6.25
[Lv. 4]: Time Frame: 1.3s. Duration: 6.65 
[Lv. 5]: Time Frame: 1.5s. Duration: 7.0s
Formula: Furious Spirit:
ATK (%): Skill Lv x 4 
MATK (%): Skill Lv x 10 
Calm Spirits:
True Defense: (H.DEF / 2) + (S.DEF / 4) 
Duration (seconds): Skill Lv x 0.8 `,
    img: pacify,
  },
  {
    id: "spiritualCadence",
    level: 0,
    dependencies: [
      { id: "callSpiritSphere", minLevel: 5 },
    ],
    dependent: [
      { id: "calmSpirits" },
    ],
    element: null,
    skillName: "Spiritual Cadence",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Supportive
Target: Self
After Cast Delay: 1s 
Cooldown: 20s
Requirement: Call Spirit Sphere Lv: 5
Description: Sits down temporarily, triggering HP Recovery and SP Recovery every 1s. Cannot be interrupted by damage or actions while active.
Passively recovers HP and SP every 10s while not walking.
Requires Calm Spirit stance.
VCT scales with skill level.
[Lv. 1]: VCT: 2.00s. Duration: 6s. SP Cost: 14 
[Lv. 2]: VCT: 1.50s. Duration: 7s. SP Cost: 18 
[Lv. 3]: VCT: 1.00s. Duration: 8s. SP Cost: 22 
[Lv. 4]: VCT: 0.50s. Duration: 9s. SP Cost: 26 
[Lv. 5]: VCT: 0.00s. Duration: 10s, SP Cost: 30
Formula: Passive HP Recover: (Skill Lv x 10) + (((Skill Lv x 4) x MaxHP) / 1000) 
Passive SP Recover: (Skill Lv x 6) + (((Skill Lv x 4) x MaxSP) / 1000) `,
    img: spiritualCadence,
  },
  {
    id: "throwSpiritSphere",
    level: 0,
    dependencies: [
      // { id: "occultImpaction", minLevel: 3 },
      { id: "pacify", minLevel: 2 },
    ],
    dependent: [
      { id: "bodyRelocation" },
    ],
    element: null,
    skillName: "Throw Spirit Sphere",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Enemy
After Cast Delay: A.Delay 0.18s
Cooldown: A.Delay
Range: 9
Requirement: Occult Impaction Lv: 3, Pacify Lv: 2
Description: Deals ranged P.DMG to the target.
Requires 1 Spirit Sphere.
VCT and FCT scale with skill level.
Furious Spirits: The damage scales with STR. Calm Spirits: The damage scales with P.DEF. 
[Lv. 1]: VCT: 0.30s. FCT: 0.10s Hits: 1. SP Cost: 12
[Lv. 2]: VCT: 0.40s. FCT: 0.15s Hits: 2. SP Cost: 14
[Lv. 3]: VCT: 0.50s. FCT: 0.20s Hits: 3. SP Cost: 16
[Lv. 4]: VCT: 0.60s. FCT: 0.25s Hits: 4. SP Cost: 18
[Lv. 5]: VCT: 0.70s. FCT: 0.30s Hits: 5. SP Cost: 20
Formula: ATK (%): 200 x Hits 
Furious Spirits: ATK Bonus (%): STR
Calm Spirits: Damage Bonus: ((S.DEF + H.DEF) - Target Defense) x Hits `,
    img: throwSpiritSphere,
  },
//   {
//     id: "tripleAttack",
//     level: 0,
//     dependencies: [
//       { id: "callSpiritSphere", minLevel: 5 },
//       { id: "ironHand", minLevel: 3 },
//     ],
//     dependent: [
//       { id: "tigerFist" },
//       { id: "chainCrushCombo" },
//       { id: "chainCombo" },
//     ],
//     element: null,
//     skillName: "Triple Attack",
//     maxLevel: 10,
//     inform: `Max Lv: 10
// Skill Form: Active
// Type: Physical
// Target: Self
// Range: 1
// Requirement: Call Spirit Sphere Lv: 5, Iron Hand Lv: 3 
// Description: Triple Attack provides a chance to automatically unleash a triple strike during battle or can be manually activated. When activated manually, it costs SP. In Furious Spirits state, Adds twice your CRIT as TRUE DAMAGE to skill hits. In Calm Spirits state, adds your Soft Defense and half of Hard Defense as Physical Damage and become 3x3 AoE. Chance to automatically activate on normal attacks is 30%. Triple Attack can be used after any combo to reset the combo chain.
// [Lv 1]: 120% Atk, Manual Activation SP Cost: 3,
// [Lv 2]: 140% Atk, Manual Activation SP Cost: 4,
// [Lv 3]: 160% Atk, Manual Activation SP Cost: 5,
// [Lv 4]: 180% Atk, Manual Activation SP Cost: 6,
// [Lv 5]: 200% Atk, Manual Activation SP Cost: 7,
// [Lv 6]: 220% Atk, Manual Activation SP Cost: 8,
// [Lv 7]: 240% Atk, Manual Activation SP Cost: 9,
// [Lv 8]: 260% Atk, Manual Activation SP Cost: 10,
// [Lv 9]: 280% Atk, Manual Activation SP Cost: 11,
// [Lv 10]: 300% Atk, Manual Activation SP Cost: 12`,
//     img: tripleAttack,
//   },
  {
    id: "lotusPu",
    level: 0,
    dependencies: [
      // { id: "tripleAttack", minLevel: 8 },
    ],
    dependent: [],
    element: null,
    skillName: "Lotus Pulse",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Self
After Cast Delay: 1s
Cooldown: 2s
Hits: 1
Description: Consumes all Spirit Spheres to deal P.DMG to enemies within a 7x7 AoE, scaling with Base Level and the amount of consumed spheres.
Requires at least 1 Spirit Sphere to cast. Furious Spirits: Knocks enemies back 2 cells. Calm Spirits: Pulls enemies toward the caster, granting a chance to inflict Stun for 1s. 
[Lv. 1]: ATK 200%, SP Cost: 11
[Lv. 2]: ATK 300%, SP Cost: 12
[Lv. 3]: ATK 400%, SP Cost: 13
[Lv. 4]: ATK 500%, SP Cost: 14
[Lv. 5]: ATK 600%, SP Cost: 15
Formula: ATK (%): 100 + (100 x Skill Lv) + (Base Lv x Spirit Spheres)
Calm Spirits:
Stun Chance (%): 20 + (Skill Lv x 10) `,
    img: lotusPu,
  },
  {
    id: "chainFi",
    level: 0,
    dependencies: [
      // { id: "tripleAttack", minLevel: 8 },
    ],
    dependent: [],
    element: null,
    skillName: "Chain Fist",
    maxLevel: 10,
    inform: `Max Level: 10
Skill Form: Active 
Weapon: Knuckle 
Type: Physical
Target: Enemy
After Cast Delay: A.Delay - 0.18s
Cooldown: A.Delay + 0.32
Range: 1
Hits: 3
Description: Deals P.DMG to the target. Grants a 30% chance to auto-cast it at the learned level on performing basic attacks. Furious Spirits: Grants +50% HCM and the damage scales with CRIT.
Calm Spirits: Becomes a 3x3 AoE around the target, and the damage scales with P.DEF. 
[Lv. 1]: ATK: 55% x Hits. SP Cost: 6 
[Lv. 2]: ATK: 60% x Hits. SP Cost: 7 
[Lv. 3]: ATK: 65% x Hits. SP Cost: 8
[Lv. 4]: ATK: 70% x Hits. SP Cost: 9 
[Lv. 5]: ATK: 75% x Hits. SP Cost: 10 
[Lv. 6]: ATK: 80% x Hits. SP Cost: 11 
[Lv. 7]: ATK: 85% x Hits. SP Cost: 12 
[Lv. 8]: ATK: 90% x Hits. SP Cost: 13 
[Lv. 9]: ATK: 95% x Hits. SP Cost: 14 
[Lv.10]: ATK: 100% x Hits. SP Cost: 15
Formula: ATK (%): (50 + (Skill Lv x 5)) x Hits 
Furious Spirits: 
ATK Bonus (%): ((Skill Lv x CRIT) / 10) x Hits 
Calmt Spirits:
Darnage Bonus: ((S.DEF + H.DEF) - Target Defense) x Hits `,
    img: chainFi,
  },
  {
    id: "flightF",
    level: 0,
    dependencies: [
      // { id: "tripleAttack", minLevel: 8 },
    ],
    dependent: [],
    element: null,
    skillName: "Flight Fist",
    maxLevel: 5,
    inform: `Max Level: 5
Skill Form: Active 
Weapon: Knuckle 
Type: Physical
Target: Enemy
After Cast Delay: A.Delay - 0.18s 
Cooldown: A.Delay
Range: 2 + Weapon's range 
Hits: 4
Description: Deals P.DMG to the target. Can be activated immediately after Chain Fist and Pacify. Also can be activated after Fallen Fist, but requires 1 Spirit Sphere.
Furious Spirits: Grants +50% HCM and the damage scales with CRIT.
Calm Spirits: Becomes a 3x3 AoE around the target, and the damage scales with P.DEF. 
[Lv. 1]: ATK: 115% x Hits. SP Cost: 5
[Lv. 2]: ATK: 130% x Hits. SP Cost: 10
[Lv. 3]: ATK: 145% x Hits. SP Cost: 15 
[Lv. 4]: ATK: 160% x Hits. SP Cost: 20 
[Lv. 5]: ATK: 175% x Hits. SP Cost: 25
Formula: ATK (%): (100 + (Skill Lv x 15)) x Hits 
Furious Spirits:
ATK Bonus (%): ((Skill Lv x CRIT) / 5) x Hits
Calm Spirits:
Damage Bonus: ((S.DEF+ H.DEF) - Target Defense) x Hits `,
    img: flightF,
  },
  {
    id: "fallenF",
    level: 0,
    dependencies: [
      // { id: "tripleAttack", minLevel: 8 },
    ],
    dependent: [],
    element: null,
    skillName: "Fallen Fist",
    maxLevel: 5,
    inform: `Max Level: 5
Skill Form: Active 
Weapon: Knuckle 
Type: Physical
Target: Enemy
After Cast Delay: A.Delay - 0.18s
Cooldown: A.Delay
Range: 2 + Weapon's range Hits: 1
Description: Deals P.DMG to the target. Can be activated immediately after Chain Fist and Pacify. Also can be activated after Flight Fist, but requires 1 Spirit Sphere. Furious Spirits: Grants +50% HCM and the damage scales with CRIT.
Calm Spirits: Becomes a 3x3 AoE around the target, and the damage scales with P.DEF.
[Lv. 1]: ATK: 400%, SP Cost: 5
[Lv. 2]: ATK: 550%, SP Cost: 10
[Lv. 3]: ATK: 700%, SP Cost: 15 
[Lv. 4]: ATK: 850%, SP Cost: 20 
[Lv. 5]: ATK: 1000%, SP Cost: 25
Formula: ATK (%): (250 + (Skill Lv x 150))
Furious Spirits:
ATK Bonus (%): Skill Lv x STR
Calm Spirits:
Damage Bonus: ((S.DEF + H.DEF) - Target Defense) x Hits `,
    img: fallenF,
  },
];


/*  author Chalykh Maksim 
  # data 10.02.2025 
  # email: chalyh.maksim.88@mail.ru */
