
/*  author Chalykh Maksim 
  # data 10.02.2025 
  # email: chalyh.maksim.88@mail.ru */

import skillImgNo from '../../img/no_img.png'; // заглушка

// список скилов Alchemist
export const skillsAlchemist = [ 
  {
    id: "acidTerror",
    level: 0,
    dependencies: [
      { id: "demonstration", minLevel: 4 },
    ],
    dependent: [
      { id: "acidDemonstration" },
      { id: "chemicalReaction" },
    ],
    element: null,
    skillName: "Acid Terror",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
Range: 9
Requirement: Demonstration Lv: 5
Description: Unleash a bottle of corrosive acid on a single target, causing severe damage and applying the Chemical Corrosion debuff with a chance that scales with the skill level. If the target is already affected by Chemical Corrosion, this skill also has a chance to break their armor. Mini Acid Bottle at Lv.1 ~ 5, Acid Bottle at Lv.6 ~ 10,
[Lv 1]: Atk 100%,
[Lv 2]: Atk 200%,
[Lv 3]: Atk 300%,
[Lv 4]: Atk 400%,
[Lv 5]: Atk 500%,
[Lv 6]: Atk 600%,
[Lv 7]: Atk 700%,
[Lv 8]: Atk 800%,
[Lv 9]: Atk 900%,
[Lv 10]: Atk 1000%`,
    img: skillImgNo,
  },
  {
    id: "armorChemicalProtection",
    level: 0,
    dependencies: [
      { id: "shieldChemicalProtection", minLevel: 0 },
    ],
    dependent: [
      { id: "fullChemicalProtection" },
      { id: "weaponChemicalProtection" },
    ],
    element: null,
    skillName: "Armor Chemical Protection",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Ally
Range: 1
Requirement: Shield Chemical Protection Lv: 1
Description: Temporarily protects the equipped armor of a single target from damage and removal. At levels 1 to 3, the protection is removed upon death, dispel, or Chemical Corrosion without stacking. Mini Glistening Bottle at Lv.1 ~ 5, Glistening Bottle at Lv.6 ~ 10,
[Lv 1]: Duration: 60 seconds,
[Lv 2]: Duration: 120 seconds,
[Lv 3]: Duration: 180 seconds,
[Lv 4]: Duration: 360 seconds,
[Lv 5]: Duration: 720 seconds`,
    img: skillImgNo,
  },
  {
    id: "bioCannibalize",
    level: 0,
    dependencies: [
      { id: "throwingPotionsTechniques", minLevel: 2 },
    ],
    dependent: [      
      { id: "hyperFertilize" },
      { id: "briarVines" },
      { id: "deplant" },
    ],
    element: null,
    skillName: "Bio Cannibalize",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Misc
Target: Ground
Range: 4
Requirement: Throwing Potions Techniques Lv: 3
Description: Summons a living plant at the target location to assist the user in combat for 300 seconds. The created plant depends on skill level, with stronger plants available from levels 5~10. Plant level scales with the user's base and job level, while each plant's traits are influenced by the user's INT, DEX, and Throwing Potions Techniques skill level. Grants 40 Plant Points upon learning, increased by the user's INT. Each plant consumes Plant Points: Mandragora 8, Hydra and Flora 10, Parasite 12, and Geographer 15. Mini Plant Bottle at Lv.1 ~ 5, Plant Bottle at Lv.6 ~ 10,
[Lv 1]: Summons Little Mandragora,
[Lv 2]: Summons Little Hydra,
[Lv 3]: Summons Little Flora,
[Lv 4]: Summons Little Parasite,
[Lv 5]: Summons Little Geographer,
[Lv 6]: Summons Mandragora,
[Lv 7]: Summons Hydra,
[Lv 8]: Summons Flora,
[Lv 9]: Summons Parasite,
[Lv 10]: Summons Geographer`,
    img: skillImgNo,
  },
  {
    id: "briarVines",
    level: 0,
    dependencies: [
      { id: "deplant", minLevel: 2 },
      { id: "bioCannibalize", minLevel: 6 },
    ],
    dependent: [
      { id: "hyperFertilize" },
    ],
    element: null,
    skillName: "Briar Vines",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Misc
Target: Enemy
Range: 9
Requirement: Deplant Lv: 3, Bio Cannibalize Lv: 7
Description: Throws a vine bomb that immobilizes the target and deals damage over time. The target will attack the vines to break free. Summoned plants by Bio Cannibalize automatically attack the target. Fire-element attacks and skills like Acid Terror and Acid Demonstration will burn the vines, dealing Fire damage and removing effect. Up to 3 Briar Vines can be active simultaneously. Effective on boss monsters, but with half duration. Catalyst: 1x Briar Seed.
[Lv 1]: Duration: 4 seconds,
[Lv 2]: Duration: 8 seconds,
[Lv 3]: Duration: 12 seconds,
[Lv 4]: Duration: 16 seconds,
[Lv 5]: Duration: 20 seconds`,
    img: skillImgNo,
  },
  {
    id: "chemicalReaction",
    level: 0,
    dependencies: [
      { id: "acidTerror", minLevel: 4 },
    ],
    dependent: [
      { id: "acidDemonstration" },
    ],
    element: null,
    skillName: "Chemical Reaction",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Ground
Range: 9
Requirement: Acid Terror Lv: 5
Description: Unleash explosive versatility with Chemical Reaction, altering the Bomb skills effects by tossing specialized Chemical Bottles into the mix, each providing unique and powerful results.
[Lv 1] Oil Bottle: Bombs Damage is boosted by Strength and base level.
[Lv 2] Explosive Powder: Triggers a massive fiery explosion with fire magic damage, pushing targets 4 cells away. Damage is enhanced by Strength.
[Lv 3] Smoke Powder: Burns plants and creates a dense smoke cloud, reducing physical damage taken by 20% and increasing evasion by 20%. Duration scales with Bombs level.
[Lv 4] Tear Gas: Releases potent tear gas, lowering evasion and accuracy by 40%. Entities lose 3% of their max health every 3 seconds and are forced to use /snif. Duration scales with Bombs level.
[Lv 5] Acid Bottle: Ignites a powerful explosion that spreads acid, transforming the Bombs area into an AoE Acid Terror. Replaces Bomb tiles and casts Acid Demonstration at level 5 or highest learned level.`,
    img: skillImgNo,
  },
  {
    id: "demonstration",
    level: 0,
    dependencies: [
      { id: "throwingPotionsTechniques", minLevel: 2 },
    ],
    dependent: [      
      { id: "acidDemonstration" },
      { id: "acidTerror" },
    ],
    element: null,
    skillName: "Demonstration",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Ground
Range: 9
Requirement: Throwing Potions Techniques Lv: 3
Description: Unleash fiery devastation with a bottle of flammable liquid, hurling it at a target location to inflict Fire property physical damage every half second to all enemies within the area. If the target is affected by [Chemical Corrosion], theres a chance to break their weapon. A maximum of 9 Demonstrations can be active at once. Mini Fire Bottle at Lv.1 ~ 5, Fire Bottle at Lv.6 ~ 10,
[Lv 1]: Atk 120%,
[Lv 2]: Atk 140%,
[Lv 3]: Atk 160%,
[Lv 4]: Atk 180%,
[Lv 5]: Atk 200%,
[Lv 6]: Atk 220%,
[Lv 7]: Atk 240%,
[Lv 8]: Atk 260%,
[Lv 9]: Atk 280%,
[Lv 10]: Atk 300%`,
    img: skillImgNo,
  },
  {
    id: "deplant",
    level: 0,
    dependencies: [
      { id: "bioCannibalize", minLevel: 4 },
    ],
    dependent: [
      { id: "hyperFertilize" },
      { id: "briarVines" },
    ],
    element: null,
    skillName: "Deplant",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Ground
Range: 2
Requirement: Bio Cannibalize Lv: 5
Description: Removes Summon Flora plants within the selected area and grants a chance to recover the potion used.
[Lv 1]: Chance: 36%, AoE 3x3,
[Lv 2]: Chance: 42%, AoE 5x5,
[Lv 3]: Chance: 48%, AoE 7x7,
[Lv 4]: Chance: 54%, AoE 9x9,
[Lv 5]: Chance: 60%, AoE 11x11`,
    img: skillImgNo,
  },
  {
    id: "helmChemicalProtection",
    level: 0,
    dependencies: [
      { id: "potionResearch", minLevel: 4 },
    ],
    dependent: [
      { id: "fullChemicalProtection" },
      { id: "shieldChemicalProtection" },
    ],
    element: null,
    skillName: "Helm Chemical Protection",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Ally
Range: 1
Requirement: Potion Research Lv: 5
Description: Temporarily protects the equipped headgear of a single target from damage and removal. At levels 1 to 3, the protection is removed upon death, dispel, or Chemical Corrosion without stacking. Mini Glistening Bottle at Lv.1 ~ 5, Glistening Bottle at Lv.6 ~ 10,
[Lv 1]: Duration: 60 seconds,
[Lv 2]: Duration: 120 seconds,
[Lv 3]: Duration: 180 seconds,
[Lv 4]: Duration: 360 seconds,
[Lv 5]: Duration: 720 seconds`,
    img: skillImgNo,
  },
  {
    id: "largeScalePharmacy",
    level: 0,
    dependencies: [
      { id: "pharmacy", minLevel: 4 },
    ],
    dependent: [ ],
    element: null,
    skillName: "Large Scale Pharmacy",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Misc
Target: Self
Requirement: Pharmacy Lv: 5
Description: Brew a large batch of potions all at once, with each potions creation rate calculated individually. Requires a Large Scale Guide and 1 Cauldron in your inventory.
[Lv 1]: Requires materials for 20 crafting attempts,
[Lv 2]: Requires materials for 40 crafting attempts,
[Lv 3]: Requires materials for 60 crafting attempts,
[Lv 4]: Requires materials for 80 crafting attempts,
[Lv 5]: Requires materials for 100 crafting attempts`,
    img: skillImgNo,
  },
  {
    id: "marineSphereBomb",
    level: 0,
    dependencies: [
      { id: "throwingPotionsTechniques", minLevel: 2 },
    ],
    dependent: [      
      { id: "potionPitcher" },
    ],
    element: null,
    skillName: "Marine Sphere Bomb",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
Range: 7
Requirement: Throwing Potions Techniques Lv: 3
Description: Summons a Marine Sphere that moves toward the target and then uses Self Destruction, dealing damage based on its HP. Marine Sphere's base HP increases with skill level and is further multiplied by the caster's level. Each point of INT or VIT boosts the Marine Sphere's HP by 0.5%. The explosion deals neutral property damage. Mini Marine Sphere Bottle at Lv.1 ~ 5, Marine Sphere Bottle at Lv.6 ~ 10,
[Lv 1]: Sphere Base HP: 4 x Base Level,
[Lv 2]: Sphere Base HP: 8 x Base Level,
[Lv 3]: Sphere Base HP: 12 x Base Level,
[Lv 4]: Sphere Base HP: 16 x Base Level,
[Lv 5]: Sphere Base HP: 20 x Base Level,
[Lv 6]: Sphere Base HP: 24 x Base Level,
[Lv 7]: Sphere Base HP: 28 x Base Level,
[Lv 8]: Sphere Base HP: 32 x Base Level,
[Lv 9]: Sphere Base HP: 36 x Base Level,
[Lv 10]: Sphere Base HP: 40 x Base Level`,
    img: skillImgNo,
  },
  {
    id: "pharmacy",
    level: 0,
    dependencies: [],
    dependent: [      
      { id: "largeScalePharmacy" },
    ],
    element: null,
    skillName: "Pharmacy",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Misc
Target: Self
Requirement: None
Description: Allows the creation of Potions and Chemical Bottles. Requires the appropriate Potion Creation Guide for each specific potion. The success rate is determined by your Base Level and Job Level, reaching up to 100%. The amount produced receives an additional bonus based on all attributes, with LUK being the most influential. The relevance of attributes increases exponentially as they grow. The skill level affects the efficiency of the additional production. Regardless of the skill level, the additional production varies. Pharmacy Creation Guide ,
[Lv 1]: No Additional Bonus,
[Lv 2]: Additional Efficiency -75%,
[Lv 3]: Additional Efficiency -50%,
[Lv 4]: Additional Efficiency -25%,
[Lv 5]: Full Efficiency`,
    img: skillImgNo,
  },
  {
    id: "potionPitcher",
    level: 0,
    dependencies: [
      { id: "marineSphereBomb", minLevel: 4 },
    ],
    dependent: [],
    element: null,
    skillName: "Potion Pitcher",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Misc
Target: Ally
Range: 9
Requirement: Marine Sphere Bomb Lv: 5
Description: Throws a potion at a single target, instantly applying a healing effect. Healing is increased by 1% per point of the caster's INT, 1% per point of the target's VIT, 5% per skill level, and 5% per level of Throwing Potions Techniques. Cast delay is halved at levels above 5.
[Lv 1]: Red Potion,
[Lv 2]: Orange Potion,
[Lv 3]: Yellow Potion,
[Lv 4]: Green Potion,
[Lv 5]: White Potion,
[Lv 6]: Condensed Red Potion,
[Lv 7]: Condensed Orange Potion,
[Lv 8]: Condensed Yellow Potion,
[Lv 9]: Condensed Green Potion,
[Lv 10]: Condensed White Potion`,
    img: skillImgNo,
  },
  {
    id: "potionResearch",
    level: 0,
    dependencies: [],
    dependent: [
      { id: "helmChemicalProtection" },
    ],
    element: null,
    skillName: "Potion Research",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Passive
Type: Misc
Requirement: None
Description: Boosts the success rate for creating potions and chemicals while also enhancing the effectiveness of healing potions consumed. Your expertise in potion-making not only improves your chances of crafting success but also amplifies the benefits of the potions you use.
[Lv 1]: Rate Bonus: +1%, Potion Effectiveness: +8%,
[Lv 2]: Rate Bonus: +2%, Potion Effectiveness: +11%,
[Lv 3]: Rate Bonus: +3%, Potion Effectiveness: +14%,
[Lv 4]: Rate Bonus: +4%, Potion Effectiveness: +17%,
[Lv 5]: Rate Bonus: +5%, Potion Effectiveness: +20%,
[Lv 6]: Rate Bonus: +6%, Potion Effectiveness: +23%,
[Lv 7]: Rate Bonus: +7%, Potion Effectiveness: +26%,
[Lv 8]: Rate Bonus: +8%, Potion Effectiveness: +29%,
[Lv 9]: Rate Bonus: +9%, Potion Effectiveness: +32%,
[Lv 10]: Rate Bonus: +10%, Potion Effectiveness: +35%`,
    img: skillImgNo,
  },
  {
    id: "shieldChemicalProtection",
    level: 0,
    dependencies: [
      { id: "helmChemicalProtection", minLevel: 0 },
    ],
    dependent: [
      { id: "fullChemicalProtection" },
      { id: "armorChemicalProtection" },
    ],
    element: null,
    skillName: "Shield Chemical Protection",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Ally
Range: 1
Requirement: Helm Chemical Protection Lv: 1
Description: Temporarily protects the equipped shield of a single target from damage and removal. At levels 1 to 3, the protection is removed upon death, dispel, or Chemical Corrosion without stacking. Mini Glistening Bottle at Lv.1 ~ 5, Glistening Bottle at Lv.6 ~ 10,
[Lv 1]: Duration: 60 seconds,
[Lv 2]: Duration: 120 seconds,
[Lv 3]: Duration: 180 seconds,
[Lv 4]: Duration: 360 seconds,
[Lv 5]: Duration: 720 seconds`,
    img: skillImgNo,
  },
  {
    id: "slingItem",
    level: 0,
    dependencies: [
      { id: "potionPitcher", minLevel: 4 },
    ],
    dependent: [      
      { id: "potionSpreader" },
    ],
    element: null,
    skillName: "Sling Item",
    maxLevel: 5,
    inform: `Max Lv: 1 (or 5)
Skill Form: Active
Type: Misc
Target: Ally
Range: 11
Requirement: Potion Pitcher Lv: 5
Description: Throws Fruit Bombs or Throwing Items. Status reduction and damage from fruit bombs are influenced by the user's INT. Chance to apply Status reduction decreases on targets with a higher level than the user. [Fruit Bombs]: , Apple Bomb , Coconut Bomb , Melon Bomb , Pineapple Bomb , Banana Bomb , [Throwing Items]: , Throwing Concentration Potion , Throwing Awakening Potion , Throwing Berserk Potion ,
[Lv 1]: Stats Drop Duration: 10 Seconds, Cooldown: 3 S ,
[Lv 2]: Stats Drop Duration: 20 Seconds, Cooldown: 2.5 S ,
[Lv 3]: Stats Drop Duration: 30 Seconds, Cooldown: 2 S ,
[Lv 4]: Stats Drop Duration: 40 Seconds, Cooldown: 1.5 S ,
[Lv 5]: Stats Drop Duration: 50 Seconds, Cooldown: 1 S`,
    img: skillImgNo,
  },
  {
    id: "throwingPotionsTechniques",
    level: 0,
    dependencies: [],
    dependent: [      
      { id: "bioCannibalize" },
      { id: "demonstration" },
      { id: "marineSphereBomb" },
    ],
    element: null,
    skillName: "Throwing Potions Techniques",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Passive
Type: Physical
Requirement: None
Description: Master the art of potion-throwing with this skill, enhancing both the efficiency and impact of your potion and bottle-based abilities. This technique has a chance to recover empty bottles or empty potion bottles used in your throws, while boosting the healing, damage, and duration of a variety of related skills. [Demonstration]: Adds +1% damage per Learned Level for every 10 Base Levels.
[Acid Terror]: Adds +1% damage per Learned Level for each Base Level.
[Marine Sphere Bomb]: Increases Marine Sphere Base HP by +1 per Learned Level.
[Potion Pitcher]: Increases Healing Value by 5% per Learned Level.
[Potion Spreader]: Increases Healing Value by 5% per Learned Level.
[Bio Cannibalize]: Increases Plant Status by 1.5% per Learned Level. [Deplant]: Increases chance of success by 1% per Learned Level.
[Briar Vines]: Adds 10% of user MATK to damage per Learned Level.
[Hyper Fertilize]: Increases Fertilization effect duration by 6 seconds per Learned Level.`,
    img: skillImgNo,
  },
  {
    id: "weaponChemicalProtection",
    level: 0,
    dependencies: [
      { id: "armorChemicalProtection", minLevel: 0 },
    ],
    dependent: [      
      { id: "fullChemicalProtection" },
    ],
    element: null,
    skillName: "Weapon Chemical Protection",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Ally
Range: 1
Requirement: Armor Chemical Protection Lv: 1
Description: Temporarily protects the equipped weapon of a single target from damage and removal. At levels 1 to 3, the protection is removed upon death, dispel, or Chemical Corrosion without stacking. Mini Glistening Bottle at Lv.1 ~ 5, Glistening Bottle at Lv.6 ~ 10,
[Lv 1]: Duration: 60 seconds,
[Lv 2]: Duration: 120 seconds,
[Lv 3]: Duration: 180 seconds,
[Lv 4]: Duration: 360 seconds,
[Lv 5]: Duration: 720 seconds`,
    img: skillImgNo,
  },
];
