/*  author Chalykh Maksim 
  # data 10.02.2025 
  # email: chalyh.maksim.88@mail.ru */

import skillImgNo from '../../img/no_img.png'; // заглушка
import ironHand from '../../img/icon_mon/icon_mon_1.gif'; 
import spiritualCadence from '../../img/icon_mon/icon_mon_2.gif'; 
import callSpiritSphere from '../../img/icon_mon/icon_mon_3.gif'; 
import absorbSpiritSphere from '../../img/icon_mon/icon_mon_4.gif'; 
import tripleAttack from '../../img/icon_mon/icon_mon_5.gif'; 
import bodyRelocation from '../../img/icon_mon/icon_mon_6.gif'; 
import occultImpaction from '../../img/icon_mon/icon_mon_8.gif'; 
import throwSpiritSphere from '../../img/icon_mon/icon_mon_9.gif'; 
import asuraStrike from '../../img/icon_mon/icon_mon_13.gif'; 
import chainCombo from '../../img/icon_mon/icon_mon_14.gif'; 
import comboFinish from '../../img/icon_mon/icon_mon_15.gif'; 

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
Type: Physical
Target: Ally
Range: 9
Requirement: Call Spirit Sphere Lv: 5
Description: Allows the user to absorb Spirit Spheres, restoring their SP. Recovers 10 SP per absorbed Spirit Sphere. When used on monsters, it may restore SP equal to 0.5 to 2 times the monster level with a success rate dependent on the user's Base Level and the targets level. Chance: [25% + 1% Every 4 Base Level of user] - [1% Every 3 Level of Target]`,
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
Range: 2
Requirement: Furious Spirits Lv: 5
Description: Unleash the full force of your spiritual energy, dealing devastating damage based on the number of Spirit Spheres consumed and your current SP spends. Requires the user to be in the Furious Spirits state. Can be performed Manually, after Pacify, or as part of a Combo. After use, all forms of SP recovery (Natural, Potion, Food, Skill, etc.) are penalized for 10 seconds. The penalty decreases progressively each second. Manually: Select Asura Strike via a hotkey and click on the desired target. This will consume the current number of Spirit Spheres. Each sphere consumed will use 10% of your current SP and put the skill on a 3-second cooldown per sphere used. Pacify: Can be used on a target immobilized by Pacify at Level 5, consuming only 1 Spirit Sphere and 10% of your current SP. The cooldown is 9 seconds. Combo: Can be used during the 'Combo Finish' cooldown, avoiding casting time. Consumes only 1 Spirit Sphere and 10% of current SP. Cooldown is 3 seconds.`,
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
Range: 3
Requirement: Throw Spirit Sphere Lv: 3, Pacify Lv: 3
Description: Instantly teleport to a targeted spot if there are no obstacles between the caster and the destination. After using this skill, [Asura Strike] and [Deva Retaliation] have a cooldown of 2 seconds. Each cast requires 1 Spirit Sphere. In Furious Spirits state, removes the Spirit Sphere cost. In Calm Spirits state, adds a 2 second cooldown, deals area damage 3x3 cells based on the distance between the user and the target, user weight and DEF, and pushes enemies and objects by 2 cells.
[Lv 1]: Range: 3 cells, SP Cost: 6,
[Lv 2]: Range: 5 cells, SP Cost: 8,
[Lv 3]: Range: 7 cells, SP Cost: 10,
[Lv 4]: Range: 9 cells, SP Cost: 12,
[Lv 5]: Range: 11 cells, SP Cost: 14`,
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
      { id: "tripleAttack" },
    ],
    element: null,
    skillName: "Call Spirit Sphere",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Misc
Target: Self
Requirement: None
Description: Summons a Spirit Sphere that will orbit the user. Summoned sphere is maintained for 10 minutes. Each sphere increases Atk and DEF by 3.
[Lv 1]: Summon 1 Spirit Sphere,
[Lv 2]: Summon 2 Spirit Sphere,
[Lv 3]: Summon 3 Spirit Sphere,
[Lv 4]: Summon 4 Spirit Sphere,
[Lv 5]: Summon 5 Spirit Sphere`,
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
Skill Form: Active
Type: Physical
Target: Self
Requirement: Spiritual Cadence Lv: 3
Description: Enter a meditative state that greatly boosting your Physical and Magical Defenses and Mitigates Damage received. This also adds effects to certain skills but comes with drawbacks such as reduces Attack, Movement Speed and Attack speed. Additionally, grants a bonus of +80 Hard Defense and +10 Critical Defense. Each cast requires 5 Spirit Sphere.
[Lv 1]: Physical Defense +8%, Critical Defense +4%, Mitigates 2% of incoming damage. Attack -10%, Movement Speed -2%, Attack Speed -2%.
[Lv 2]: Physical Defense +16%, Critical Defense +8%, Mitigates 4% of incoming damage. Attack -20%, Movement Speed -4%, Attack Speed -4%.
[Lv 3]: Physical Defense +24%, Critical Defense +12%, Mitigates 6% of incoming damage. Attack -30%, Movement Speed -6%, Attack Speed -6%.
[Lv 4]: Physical Defense +32%, Critical Defense +16%, Mitigates 8% of incoming damage. Attack -40%, Movement Speed -8%, Attack Speed -8%.
[Lv 5]: Physical Defense +40%, Critical Defense +20%, Mitigates 10% of incoming damage. Attack -50%, Movement Speed -10%, Attack Speed -10%.`,
    img: skillImgNo,
  },
  {
    id: "chainCombo",
    level: 0,
    dependencies: [
      { id: "tripleAttack", minLevel: 5 },
    ],
    dependent: [
      { id: "comboFinish" },
    ],
    element: null,
    skillName: "Chain Combo",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Self
Range: 2
Requirement: Triple Attack Lv: 5
Description: Chain Combo is a powerful melee attack that can be used after Raging Trifecta Blow, delivering a devastating follow-up strike. Attack power increases further if the user is a Champion, based on their Base Level. When wielding a Knuckle-class weapon, deals additional damage and reduces cast delay. In Furious Spirits state, Adds twice your CRIT as TRUE DAMAGE to skill hits. In Calm Spirits state, adds your Soft Defense and half of Hard Defense as Physical Damage and become 5x5 AoE.
[Lv 1]: Atk 350%, SP Cost: 7,
[Lv 2]: Atk 450%, SP Cost: 9,
[Lv 3]: Atk 500%, SP Cost: 11,
[Lv 4]: Atk 650%, SP Cost: 13,
[Lv 5]: Atk 700%, SP Cost: 15`,
    img: chainCombo,
  },
  {
    id: "comboFinish",
    level: 0,
    dependencies: [
      { id: "chainCombo", minLevel: 3 },
    ],
    dependent: [
      { id: "tigerFist" },
      { id: "chainCrushCombo" },      
    ],
    element: null,
    skillName: "Combo Finish",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Self
Range: 2
Requirement: Chain Combo Lv: 3
Description: Combo Finish delivers a powerful melee strike that can be used after Chain Combo, dealing substantial damage that scales with the user's STR. Attack power increases further if the user is a Champion, based on their Base Level. When wielding a Knuckle-class weapon, deals additional damage and reduces cast delay. In Furious Spirits state, Adds twice your CRIT as TRUE DAMAGE to skill hits. In Calm Spirits state, adds your Soft Defense and half of Hard Defense as Physical Damage and become 7x7 AoE. Each cast requires 1 Spirit Sphere.
[Lv 1]: Atk 600% + STR%, SP Cost: 8,
[Lv 2]: Atk 750% + STR%, SP Cost: 8,
[Lv 3]: Atk 900% + STR%, SP Cost: 8,
[Lv 4]: Atk 1050% + STR%, SP Cost: 8,
[Lv 5]: Atk 1200% + STR%, SP Cost: 8`,
    img: comboFinish,
  },
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
Range: 2
Requirement: Calm Spirits Lv: 5
Description: Release the pain accumulated during your battles while in a state of Calm Spirit, striking enemies with the full force based on the number of Spirit Spheres consumed and your Stored Suffering. Requires the user to be in the Calm Spirits state.Can be performed Manually, after Pacify, or as part of a Combo. After use, all forms of SP recovery (Natural, Potion, Food, Skill, etc.) are penalized for 10 seconds. The penalty decreases progressively each second. Manually: Select Deva Retaliation via a hotkey and click on the desired target. This will consume the current number of Spirit Spheres. Each sphere consumed will use 10% of your current Stored Suffering and put the skill on a 3-second cooldown per sphere used. Pacify: Can be used on a target immobilized by Pacify at Level 5, consuming only 1 Spirit Sphere and 10% of your current Stored Suffering. The cooldown is 9 seconds. Combo: Can be used during the 'Combo Finish' cooldown, avoiding casting time. Consumes only 1 Spirit Sphere and 10% of current Stored Suffering. Cooldown is 3 seconds.`,
    img: skillImgNo,
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
Type: Physical
Target: Self
Requirement: Call Spirit Sphere Lv: 5
Description: Passively enhances evasion and grants a chance to dodge any physical attack. Requires Furious Spirits to activate, it allows the user have a chance to nullify a ranged physical attack by instantly leaping towards the attacker.
[Lv 1]: Passive: Flee +4, Dodge 1%, Active: Nullify chance 10%, SP Cost: 14, HP Cost: 1%,
[Lv 2]: Passive: Flee +8, Dodge 2%, Active: Nullify chance 20%, SP Cost: 18, HP Cost: 2%,
[Lv 3]: Passive: Flee +12, Dodge 3%, Active: Nullify chance 30%, SP Cost: 22, HP Cost: 3%,
[Lv 4]: Passive: Flee +16, Dodge 4%, Active: Nullify chance 40%, SP Cost: 26, HP Cost: 4%,
[Lv 5]: Passive: Flee +20, Dodge 5%, Active: Nullify chance 50%, SP Cost: 30, HP Cost: 5%`,
    img: skillImgNo,
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
Skill Form: Active
Type: Physical
Target: Self
Requirement: Falling Blossoms Lv: 3
Description: Enter a heightened state of rage, boosting your Attack and Critical Hit Chance while increasing Attack Speed based on lost HP. This also adds effects to certain skills but comes with drawbacks such as increased SP consumption, reduced SP regeneration, and decreased physical defense. Additionally, grants a bonus of +50 Weapon Attack and +10 Critical Chance. Each cast requires 5 Spirit Sphere.
[Lv 1]: Attack +5%, Critical Hit Chance +5%, +1% Attack Speed every 9% HP lost, SP consumption +4%, SP regeneration -10% , Physical Defense -10%,
[Lv 2]: Attack +10%, Critical Hit Chance +10%, +1% Attack Speed every 8% HP lost, SP consumption +8%, SP regeneration -20% , Physical Defense -20%, SP Consumption +18%, SP Regen -20%, Hard DEF -20%,
[Lv 3]: Attack +15%, Critical Hit Chance +15%, +1% Attack Speed every 7% HP lost, SP consumption +12%, SP regeneration -30% , Physical Defense -30%,
[Lv 4]: Attack +20%, Critical Hit Chance +20%, +1% Attack Speed every 6% HP lost, SP consumption +8%, SP regeneration -40% , Physical Defense -40%, SP Consumption +16%, SP Regen -40%, Hard DEF -40%,
[Lv 5]: Attack +25%, Critical Hit Chance +25%, +1% Attack Speed every 5% HP lost, SP consumption +20%, SP regeneration -50% , Physical Defense -50%`,
    img: skillImgNo,
  },
  {
    id: "ironHand",
    level: 0,
    dependencies: [
      { id: "demonBane", minLevel: 10 },
      { id: "divineProtection", minLevel: 10 },      
    ],
    dependent: [
      { id: "tripleAttack" },
    ],
    element: null,
    skillName: "Iron Hand",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Passive
Type: Physical
Requirement: Demon Bane Lv: 10, Divine Protection Lv: 10
Description: Increase attack with Knuckle Class Weapons or Bare Handed. When [Lv 10], it increases Aspd in 6%. Attack bonus granted by this skill is of the Equipment type.
[Lv 1]: Bare Handed: Atk +6, Knuckle: Atk +3,
[Lv 2]: Bare Handed: Atk +12, Knuckle: Atk +6,
[Lv 3]: Bare Handed: Atk +18, Knuckle: Atk +9,
[Lv 4]: Bare Handed: Atk +24, Knuckle: Atk +12,
[Lv 5]: Bare Handed: Atk +30, Knuckle: Atk +15,
[Lv 6]: Bare Handed: Atk +36, Knuckle: Atk +18,
[Lv 7]: Bare Handed: Atk +42, Knuckle: Atk +21,
[Lv 8]: Bare Handed: Atk +48, Knuckle: Atk +24,
[Lv 9]: Bare Handed: Atk +54, Knuckle: Atk +27,
[Lv 10]: Bare Handed: Atk +60, Knuckle: Atk +30`,
    img: ironHand,
  },
  {
    id: "occultImpaction",
    level: 0,
    dependencies: [
      { id: "pacify", minLevel: 1 },      
    ],
    dependent: [
      { id: "throwSpiritSphere" },
    ],
    element: null,
    skillName: "Occult Impaction",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Enemy
Range: 6
Requirement: Pacify Lv: 1
Description: Strike with a force that scales with the targets DEF. Damage is always Neutral. In Furious Spirits state, increases range to 6 cells. In Calm Spirits state, adds your Hard DEF as True Damage at the damage. Each cast requires 1 Spirit Sphere.
[Lv 1]: Atk [Target DEF/2 x 1]%, SP Consumption: 11,
[Lv 2]: Atk [Target DEF/2 x 2]%, SP Consumption: 12,
[Lv 3]: Atk [Target DEF/2 x 3]%, SP Consumption: 13,
[Lv 4]: Atk [Target DEF/2 x 4]%, SP Consumption: 14,
[Lv 5]: Atk [Target DEF/2 x 5]%, SP Consumption: 15`,
    img: occultImpaction,
  },
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
Type: Physical
Target: Self
Requirement: Call Spirit Sphere Lv: 5
Description: Temporarily halt the aggression of an enemy by capturing them in a Pacify status when they attempt a melee attack during Reaction Time. Only melee physical attacks can activate this skill, although it can be used against ranged attacks if the user is within melee range. In Furious Spirits state, damage of skills (except Asura Strike and Deva Retaliation) is increased by 4% per level learned of Pacify when used against a target captured by the Pacify skill. In Calm Spirits state, receive half of your Hard Defense and a quarter of your Soft Defense as True Defense for 0.8 seconds per level learned in Pacify.
[Lv 1]: Reaction Time 0.5s, Duration 5.4s,
[Lv 2]: Reaction Time 0.7s, Duration 5.8s,
[Lv 3]: Reaction Time 0.9s, Duration 6.2s,
[Lv 4]: Reaction Time 1.1s, Duration 6.6s,
[Lv 5]: Reaction Time 1.3s, Duration 7.0s
Note: Duration is reduced to 2 seconds on elite, miniboss, and boss monsters.`,
    img: skillImgNo,
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
Type: Physical
Target: Self
Requirement: Call Spirit Sphere Lv: 5
Description: Passively recovers HP and SP recovery every 10 seconds when the characte its not walking. Requires Calm Spirits to activate, forces the player into a deep meditation, greatly accelerating recovery. The player remains seated even if attacked and cannot move until the meditation is complete.
[Lv 1]: Passive: Recovers (10 +0.4% MaxHP) HP and (6 +0.4% MaxSP) SP, Active: Meditates for 2 seconds.
[Lv 2]: Passive: Recovers (20 +0.8% MaxHP) HP and (12 +0.8% MaxSP) SP, Active: Meditates for 4 seconds.
[Lv 3]: Passive: Recovers (30 +1.2% MaxHP) HP and (18 +1.2% MaxSP) SP, Active: Meditates for 6 seconds.
[Lv 4]: Passive: Recovers (40 +1.6% MaxHP) HP and (24 +1.6% MaxSP) SP, Active: Meditates for 8 seconds.
[Lv 5]: Passive: Recovers (50 +2% MaxHP) HP and (30 +2% MaxSP) SP, Active: Meditates for 10 seconds.`,
    img: spiritualCadence,
  },
  {
    id: "throwSpiritSphere",
    level: 0,
    dependencies: [
      { id: "occultImpaction", minLevel: 3 },
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
Range: 6
Requirement: Occult Impaction Lv: 3, Pacify Lv: 2
Description: Hurl spirit spheres at your enemy, dealing 200% damage per sphere. The number of hits depends on the skill level. Damage is influenced by the users Base Level. In Furious Spirits state, increases range by 6 cells. In Calm Spirits state, adds your Hard DEF as True Damage at the damage. Each cast requires 1 Spirit Sphere.
[Lv 1]: Sphere Hit 1 Time,
[Lv 2]: Sphere Hit 2 Times,
[Lv 3]: Sphere Hit 3 Times,
[Lv 4]: Sphere Hit 4 Times,
[Lv 5]: Sphere Hit 5 Times`,
    img: throwSpiritSphere,
  },
  {
    id: "tripleAttack",
    level: 0,
    dependencies: [
      { id: "callSpiritSphere", minLevel: 5 },
      { id: "ironHand", minLevel: 3 },
    ],
    dependent: [
      { id: "tigerFist" },
      { id: "chainCrushCombo" },
      { id: "chainCombo" },
    ],
    element: null,
    skillName: "Triple Attack",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Self
Range: 1
Requirement: Call Spirit Sphere Lv: 5, Iron Hand Lv: 3 
Description: Triple Attack provides a chance to automatically unleash a triple strike during battle or can be manually activated. When activated manually, it costs SP. In Furious Spirits state, Adds twice your CRIT as TRUE DAMAGE to skill hits. In Calm Spirits state, adds your Soft Defense and half of Hard Defense as Physical Damage and become 3x3 AoE. Chance to automatically activate on normal attacks is 30%. Triple Attack can be used after any combo to reset the combo chain.
[Lv 1]: 120% Atk, Manual Activation SP Cost: 3,
[Lv 2]: 140% Atk, Manual Activation SP Cost: 4,
[Lv 3]: 160% Atk, Manual Activation SP Cost: 5,
[Lv 4]: 180% Atk, Manual Activation SP Cost: 6,
[Lv 5]: 200% Atk, Manual Activation SP Cost: 7,
[Lv 6]: 220% Atk, Manual Activation SP Cost: 8,
[Lv 7]: 240% Atk, Manual Activation SP Cost: 9,
[Lv 8]: 260% Atk, Manual Activation SP Cost: 10,
[Lv 9]: 280% Atk, Manual Activation SP Cost: 11,
[Lv 10]: 300% Atk, Manual Activation SP Cost: 12`,
    img: tripleAttack,
  },
];


/*  author Chalykh Maksim 
  # data 10.02.2025 
  # email: chalyh.maksim.88@mail.ru */
