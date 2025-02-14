
/*  author Chalykh Maksim 
  # data 10.02.2025 
  # email: chalyh.maksim.88@mail.ru */

import skillImgNo from '../../img/no_img.png'; // заглушка

// список скилов Creator
export const skillsCreator = [
  {
    id: "acidDemonstration",
    level: 0,
    dependencies: [],
    dependent: [ ],
    element: null,
    skillName: "Acid Demonstration",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
Range: 9
Requirement: Demonstration Lv: 10, Acid Terror Lv: 10, Chemical Reaction Lv: 5
Description: Toss 1 Bottle Grenade and 1 Acid Bottle at a targeted enemy, unleashing a powerful ranged attack that inflicts physical damage and add a chance to applies [Chemical Corrosion] debuff that scales with skill level. Damage is influenced by the targets VIT, and if the target is already under Chemical Corrosion, there's also a chance to break their armor. Catalyst: 1x Fire Bottle and 1x Acid Bottle.
[Lv 1]: 1 Hit, Chemical Corrosion chance: 1%,
[Lv 2]: 2 Hits, Chemical Corrosion chance: 2%,
[Lv 3]: 3 Hits, Chemical Corrosion chance: 3%,
[Lv 4]: 4 Hits, Chemical Corrosion chance: 4%,
[Lv 5]: 5 Hits, Chemical Corrosion chance: 5%,
[Lv 6]: 6 Hits, Chemical Corrosion chance: 6%,
[Lv 7]: 7 Hits, Chemical Corrosion chance: 7%,
[Lv 8]: 8 Hits, Chemical Corrosion chance: 8%,
[Lv 9]: 9 Hits, Chemical Corrosion chance: 9%,
[Lv 10]: 10 Hits, Chemical Corrosion chance: 10%`,
    img: skillImgNo,
  },
  {
    id: "fullChemicalProtection",
    level: 0,
    dependencies: [],
    dependent: [ ],
    element: null,
    skillName: "Full Chemical Protection",
    maxLevel: 1,
    inform: `Max Lv: 1
Skill Form: Active
Type: Physical
Target: Ally
Range: 1
Requirement: Weapon Chemical Protection Lv: 1, Shield Chemical Protection Lv: 1, Armor Chemical Protection Lv: 1, Helm Chemical Protection Lv: 1
Description: Temporarily protects the target's equipped weapon, shield, armor, and helmet from damage and removal. Protection level and duration depend on the learned level of individual protections. Catalyst: 1x Glistening Bottle.`,
    img: skillImgNo,
  },
  {
    id: "hyperFertilize",
    level: 0,
    dependencies: [],
    dependent: [ ],
    element: null,
    skillName: "Hyper Fertilize",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Ground
Range: 2
Requirement: Bio Cannibalize Lv: 10, Briar Vines Lv: 5, Deplant Lv: 5
Description: Fertilizes the ground to grow a variety of plants that deal Poison magic damage in a 9x9 area over 5 seconds. Plants within the area, including Summoned Floras, receive the Fertilization buff, with its duration increased by 6 seconds per skill level. Caster's INT boosts the damage dealt. Plant-type monsters are immune to this skill's damage. Catalyst: 1x Fertilizer Bag.
[Lv 1]: MAtk 110% x Hits, Enhances plant basic attacks with 120% of the caster's MAtk as Poison damage.
[Lv 2]: MAtk 120% x Hits, Enhances plant basic attacks with 60% of the caster's MAtk as Poison damage.
[Lv 3]: MAtk 130% x Hits, Increases plants Max HP by 30%, DEF by 30%, and MDEF by 30%.
[Lv 4]: MAtk 140% x Hits, Increases plants Max HP by 15%, DEF by 15%, and MDEF by 15%.
[Lv 5]: MAtk 150% x Hits, Plant attacks ignore 60% of targets def and mdef.
[Lv 6]: MAtk 160% x Hits, Plant attacks ignore 30% of targets def and mdef.
[Lv 7]: MAtk 170% x Hits, Extends the duration of the plants by 50% seconds(up to maximum 600 Sec).
[Lv 8]: MAtk 180% x Hits, Extends the duration of the plants by 20% seconds(up to maximum 600 Sec).
[Lv 9]: MAtk 190% x Hits, If a plant receives fatal damage, it heals 30% of its HP.
[Lv 10]: MAtk 200%, x Hits, If a plant receives fatal damage, it heals 15% of its HP.`,
    img: skillImgNo,
  },
  {
    id: "potionSpreader",
    level: 0,
    dependencies: [],
    dependent: [ ],
    element: null,
    skillName: "Potion Spreader",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Misc
Target: Ground
Range: 3
Requirement: Sling Item Lv: 5
Description: Throws a potion in a 7x7 area, applying its effect instantly to all targets within. Healing is increased by 1% per point of the caster's INT, 1% per point of the target's VIT, 5% per skill level, and 5% per level of Throwing Potions Techniques.
[Lv 1]: Red Thick Potion CD: 0.4 Sec,
[Lv 2]: Red Thick Potion CD: 0.2 Sec,
[Lv 3]: Orange Thick Potion CD: 0.8 Sec,
[Lv 4]: Orange Thick Potion CD: 0.4 Sec,
[Lv 7]: Yellow Thick Potion CD: 1.2 Sec,
[Lv 8]: Yellow Thick Potion CD: 0.6 Sec,
[Lv 5]: Green Thick Potion CD: 1.6 Sec,
[Lv 6]: Green Thick Potion CD: 0.8 Sec,
[Lv 9]: White Thick Potion CD: 2 Sec,
[Lv 10]: White Thick Potion CD: 1 Sec`,
    img: skillImgNo,
  },
];