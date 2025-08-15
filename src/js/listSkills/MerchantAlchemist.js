
/*  author Chalykh Maksim 
  # data 10.02.2025 
  # email: chalyh.maksim.88@mail.ru */

import skillImgNo from '../../img/no_img.png'; // заглушка
import potionResearch from '../../img/icon_alc/icon_alc_1.gif'; 
import pharmacy from '../../img/icon_alc/icon_alc_2.gif'; 
import demonstration from '../../img/icon_alc/icon_alc_3.gif'; 
import acidTerror from '../../img/icon_alc/icon_alc_4.gif'; 
import potionPitcher from '../../img/icon_alc/icon_alc_5.gif'; 
import bioCannibalize from '../../img/icon_alc/icon_alc_6.gif'; 
import marineSphereBomb from '../../img/icon_alc/icon_alc_7.gif'; 
import weaponChemicalProtection from '../../img/icon_alc/icon_alc_8.gif'; 
import shieldChemicalProtection from '../../img/icon_alc/icon_alc_9.gif'; 
import armorChemicalProtection from '../../img/icon_alc/icon_alc_10.gif'; 
import helmChemicalProtection from '../../img/icon_alc/icon_alc_11.gif'; 
import throwingPotionsTechniques from '../../img/icon_alc/icon_alc_20.png'; 
import chemicalReaction from '../../img/icon_alc/icon_alc_21.png'; 
import deplant from '../../img/icon_alc/icon_alc_26.png'; 
import briarVines from '../../img/icon_alc/icon_alc_27.png'; 
import largeScalePharmacy from '../../img/icon_alc/icon_alc_24.png'; 
import slingItem from '../../img/icon_alc/icon_alc_28.png'; 

// список скилов Alchemist
export const skillsAlchemist = [ 
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
Description: Grants a chance to recover Empty Bottle and Empty Potion Bottle on casting skills that consume them as Catalysts.
[Lv. 1]; Recover Chance: 2% 
[Lv. 2]: Recover Chance: 4%
[Lv. 3]: Recover Chance: 6% 
[Lv. 4]: Recover Chance: 8% 
[Lv. 5]: Recover Chance: 10% 
[Lv. 6]: Recover Chance: 12% 
[Lv. 7]: Recover Chance: 14% 
[Lv. 8]: Recover Chance: 16% 
[Lv. 9]: Recover Chance: 18% 
[Lv.10]: Recover Chance: 20%`,
    img: throwingPotionsTechniques,
  },
   {
    id: "demonstration",
    level: 0,
    dependencies: [
      { id: "throwingPotionsTechniques", minLevel: 3 },
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
Element: Fire
Variable Cast Time: 0.70s
Fixed Cast Time: 0.30s 
After Cast Delay: 0.50s 
Cooldown: 0.60s 
Max Instances: 9 
Range: 9 
Hits: 1
SP Cost: 10
Requirement: Throwing Potions Techniques Lv: 3
Description: Stances a temporary 3x3 AoE at the targeted location that deals P.DMG to enemies every 0.5s, scaling with STR, Base Level and the learned level of Throwing Potions Techniques.
The damage is increased on enemies affected by Chemical Corrosion, and has a chance to Break their weapon.
Ignores Auto Guard.
Catalyst: 
  1x Mini Fire Bottle for Lv. 1~5
  1x Fire Bottle for Lv. 6~10
[Lv. 1]: ATK 120%, Break Chance: 1% Duration: 42s
[Lv. 2]: ATK 140%, Break Chance: 2% Duration: 44s
[Lv. 3]: ATK 160%, Break Chance: 3% Duration: 46s
[Lv. 4]: ATK 180%, Break Chance: 4% Duration: 48s
[Lv. 5]: ATK 200%, Break Chance: 5% Duration: 50s
[Lv. 6]: ATK 220%, Break Chance: 6% Duration: 52s
[Lv. 7]: ATK 240%, Break Chance: 7% Duration: 54s
[Lv. 8]: ATK 260%, Break Chance: 8% Duration: 56s
[Lv. 9]: ATK 280%, Break Chance: 9% Duration: 58s
[Lv.10]: ATK 300%, Break Chance: 10% Duration: 60s
Formula: ATK (%): 100 + (Skill Lv x 20) + (T. P. Techniques Lv x (Base Lv / 10)) + (STR / 2) + (Chemical Corrosion Stacks) `,
    img: demonstration,
  },
  {
    id: "acidTerror",
    level: 0,
    dependencies: [
      { id: "demonstration", minLevel: 5 },
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
Variable Cast Time: 0.90s
Fixed Cast Time: 0.60s
After Cast Delay: 0.50s 
Range: 9 
Hits: 1
SP Cost: 15
Requirement: Demonstration Lv: 5
Description: Deals ranged P.DMG to the target, scaling with Base Level and the learned level of Throwing Potions Techniques. Has a chance to inflict Chemical Corrosion for 635.
If the enemy is affected by Chemical Corrosion, has a chance to Break the armor. Ignores Auto Guard and S.DEF.
Catalyst:
  1x Mini Acid Bottle for Lv. 1~5
  1x Acid Bottle for Lv. 6~10
[Lv. 1]: ATK 100% Corrosion/Break Chance: 1%
[Lv. 2]: ATK 200% Corrosion/Break Chance: 2% 
[Lv. 3]: ATK 300% Corrosion/Break Chance: 3% 
[Lv. 4]: ATK 400% Corrosion/Break Chance: 4%
[Lv. 5]: ATK 500% Corrosion/Break Chance: 5%
[Lv. 6]: ATK 600% Corrosion/Break Chance: 6%
[Lv. 7]: ATK 700% Corrosion/Break Chance: 7%
[Lv. 8]: ATK 800% Corrosion/Break Chance: 8%
[Lv. 9]: ATK 900% Corrosion/Break Chance: 9%
[Lv.10]: ATK 1000% Corrosion/Break Chance: 10%
Formula: ATK (%): (Skill Lv x 100) + (T. P. Techniques x Base Lv) + Chemical Corrosion Stacks `,
    img: acidTerror,
  },
  {
    id: "chemicalReaction",
    level: 0,
    dependencies: [
      { id: "acidTerror", minLevel: 5 },
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
Variable Cast Time: 0.30s
Fixed Cast Time: 0.30s
After Cast Delay: 0.50s 
Range: 9
SP Cost: 35
Requirement: Acid Terror Lv: 5
Description: Throws resources into Demonstration cells, causing chemical reactions in the area.
[Lv. 1]: Oil Bottle: Increases Demonstration damage.
[Lv. 2]: Explosive Powder: Deals M.DMG damage to enemies within a 7x7 AoE and Knocks them back 4 cells. Ignores Auto Guard.
[Lv. 3]: Smoke Powder: Reduces P.DMG damage taken by 20% and increases FLEE by 20% for all entities within its 5x5 AoE. Ends all Demonstration cells within the area.
[Lv. 4]: Tear Gas: Reduces FLEE and ACC by 40% for enemies within its 7x7 AoE. Also drains 3% of their Max HP every 3s. Ends all Demonstration cells within the area.
[Lv. 5]: Acid Bottle: Deals ranged P.DMG damage to enemies standing on a Demonstration cell within a 7x7 AoE. Ends all Demonstration cells within the area.
Formula: 
Oil Bottle:
Demonstration ATK (%): + Base Lv + STR
Explosive Powder:
ATK (%): STR x 10
Smoke Powder & Tear Gas:
Duration (seconds): Demonstration Lv x 5
Acid Bottle:
ATK (%): ((900 + (Higher Lv x 150)) x (1 + (Target VIT / 100))) + Chemical Corrosion Stacks
Higher Lv: The highest value between 5 and the learned level of Acid Demonstration `,
    img: chemicalReaction,
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
Description: Increases the success rate of Potion and Bottles creation.
Also increases the effectiveness of potions. 
[Lv. 1]: Rate +1%, Effectiveness +8% 
[Lv. 2]: Rate +2%, Effectiveness +11% 
[Lv. 3]: Rate +3%, Effectiveness +14% 
[Lv. 4]: Rate +4%, Effectiveness +17% 
[Lv. 5]: Rate +5%, Effectiveness +20% 
[Lv. 6]: Rate +6%, Effectiveness +23% 
[Lv. 7]: Rate +7%, Effectiveness +26% 
[Lv. 8]: Rate +8%, Effectiveness +29% 
[Lv. 9]: Rate +9%, Effectiveness +32% 
[Lv.10]: Rate +10%, Effectiveness +35%`,
    img: potionResearch,
  },
  {
    id: "helmChemicalProtection",
    level: 0,
    dependencies: [
      { id: "potionResearch", minLevel: 5 },
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
Type: Supportive 
Target: Ally
Variable Cast Time: 0.90s
Fixed Cast Time: 0.60s
After Cast Delay: 0.50s 
Cooldown: A.Delay
Range: 1
SP Cost: 20
Requirement: Potion Research Lv: 5
Description: Protects the target's equipped helm, preventing Break and Remove.
Also increases H.MDEF and reduces the damage from Chemical Corrosion by 25%. At level 4 or higher, the protection cannot be canceled upon death or Dispel.
Catalyst: 
  1x Mini Glistening Bottle for Lv. 1~3
  1x Glistening Bottle for Lv. 4~5
[Lv. 1]: H.MDEF +3. Duration: 60s 
[Lv. 2]: H.MDEF +4. Duration: 120s 
[Lv. 3]: H.MDEF +5. Duration: 180s 
[Lv. 4]: H.MDEF +7. Duration: 360s 
[Lv. 5]: H.MDEF +10. Duration: 720s`,
    img: helmChemicalProtection,
  },
  {
    id: "shieldChemicalProtection",
    level: 0,
    dependencies: [
      { id: "helmChemicalProtection", minLevel: 1 },
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
Type: Supportive 
Target: Ally
Variable Cast Time: 0.90s
Fixed Cast Time: 0.60s
After Cast Delay: 0.50s 
Cooldown: A.Delay 
Range: 1
SP Cost: 20
Requirement: Helm Chemical Protection Lv: 1
Description: Protects the target's equipped shield, preventing Break and Remove.
Also increases H.DEF and reduces the damage from Chemical Corrosion by 25%, At level 4 or higher, the protection cannot be canceled upon death or Dispel.
Catalyst:
  1x Mini Glistening Bottle for Lv. 1~3
  1x Glistening Bottle for Lv. 4~5
[Lv. 1]: H.DEF +12. Duration: 60s 
[Lv. 2]: H.DEF +16. Duration: 120s
[Lv. 3]: H.DEF +20. Duration: 180s 
[Lv. 4]: H.DEF +28. Duration: 360s 
[Lv. 5]: H.DEF +40. Duration: 720s`,
    img: shieldChemicalProtection,
  },
  {
    id: "armorChemicalProtection",
    level: 0,
    dependencies: [
      { id: "shieldChemicalProtection", minLevel: 1 },
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
Type: Supportive 
Target: Ally
Variable Cast Time: 0.90s
Fixed Cast Time: 0.60s
After Cast Delay: 0.50s 
Cooldown: A.Delay
Range: 1
SP Cost: 20
Requirement: Shield Chemical Protection Lv: 1
Description: Protects the target's equipped armor, preventing Break and Remove. Also increases HP and reduces the damage from Chemical Corrosion by 25%,
At level 4 or higher, the protection cannot be canceled upon death or Dispel. 
Catalyst:
  1x Mini Glistening Bottle for Lv. 1~3
  1x Glistening Bottle for Lv. 4~5
[Lv. 1]: HP +300. Duration: 60s 
[Lv. 2]: HP +400. Duration: 120s 
[Lv. 3]: HP +500. Duration: 180s 
[Lv. 4]: HP +700. Duration: 360s 
[Lv. 5]: HP +1000. Duration: 720s`,
    img: armorChemicalProtection,
  },
  {
    id: "weaponChemicalProtection",
    level: 0,
    dependencies: [
      { id: "armorChemicalProtection", minLevel: 1 },
    ],
    dependent: [      
      { id: "fullChemicalProtection" },
    ],
    element: null,
    skillName: "Weapon Chemical Protection",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Supportive 
Target: Ally
Variable Cast Time: 0.90s
Fixed Cast Time: 0.60s
After Cast Delay: 0.50s 
Cooldown: A.Delay 
Range: 1
SP Cost: 20
Requirement: Armor Chemical Protection Lv: 1
Description: Protects the target's equipped weapon, preventing Break and Remove. Also increases B.ATK and B.MATK, and reduces the damage from Chemical Corrosion by 25%,
At level 4 or higher, the protection cannot be canceled upon death or Dispel. 
Catalyst:
  1x Mini Glistening Bottle for Lv. 1~3
  1x Glistening Bottle for Lv. 4~5
[Lv. 1]: B.ATK/B.MATK +6. Duration: 60s 
[Lv. 2]: B.ATK/B.MATK +8. Duration: 120s 
[Lv. 3]: B.ATK/B.MATK +10. Duration: 180s 
[Lv. 4]: B.ATK/B.MATK +14. Duration: 360s 
[Lv. 5]: B.ATK/B.MATK +20. Duration: 720s`,
    img: weaponChemicalProtection,
  },
  {
    id: "bioCannibalize",
    level: 0,
    dependencies: [
      { id: "throwingPotionsTechniques", minLevel: 3 },
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
Type: Supportive 
Target: Ground
Variable Cast Time: 1.40s
Fixed Cast Time: 0.60s
After Cast Delay: 0.50s 
Range: 4
SP Cost: 20
Requirement: Throwing Potions Techniques Lv: 3
Description: Summons a familiar at the targeted location for 300s.
The familiar's stats scale with the equipped Armor, Shield, Garment, and Weapon. Its basic attacks' property depends on the weapon's property, and it cannot target enemies far from its master.
Mini familiars deal half the damage and have half the HP.
Requires Cannibalize Peak.
Catalyst: 
  1x Mini Plant Bottle for Lv. 1~5
  1x Plant Bottle for Lv. 6~10
[Lv. 1]: Mini Mandragora
[Lv. 2]: Mini Hydra
[Lv. 3]: Mini Flora
[Lv. 4]: Mini Parasite
[Lv. 5]: Mini Geographer
[Lv. 6]: Mandragora
[Lv. 7]: Hydra
[Lv. 8]: Flora
[Lv. 9]: Parasite
[Lv.10]: Geographer
Formla:  Plant Stats Scaling: (((((INT / 2) + (DEX / 10)) x Stat) / 100) x ((T. P. Techniques Lv x 15) / 100)) + ((Plant Lv x Stat) / 100) 
Plant Level: ((Base Lv x 60) / 100) + ((Job Lv x 50) / 100) `,
    img: bioCannibalize,
  },
  {
    id: "deplant",
    level: 0,
    dependencies: [
      { id: "bioCannibalize", minLevel: 5 },
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
Type: Supportive 
Target: Ground
Variable Cast Time: 0.30s
Fixed Cast Time: 0.30s
After Cast Delay: 0.50s 
Cooldown: 10s
Range: 2
Requirement: Bio Cannibalize Lv: 5
Description: Removes all owned Cannibalize familiars within the AoE at the targeted location.
Grants a chance to recover Mini Plant Bottle or Plant Bottle from each familiar, depending on its type.
[Lv. 1]: Chance: 36%, AoE 3x3, SP Cost: 30
[Lv. 2]: Chance: 42%, AoE 5x5. SP Cost: 35
[Lv. 3]: Chance: 48%, AoE 7x7. SP Cost: 40
[Lv. 4]: Chance: 54%, AoE 9x9, SP Cost: 45
[Lv. 5]: Chance: 60%, AoE 11x11. SP Cost: 50`,
    img: deplant,
  },
  {
    id: "briarVines",
    level: 0,
    dependencies: [
      { id: "deplant", minLevel: 3 },
      { id: "bioCannibalize", minLevel: 7 },
    ],
    dependent: [
      { id: "hyperFertilize" },
    ],
    element: null,
    skillName: "Briar Vines",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Supportive
Target: Enemy
Variable Cast Time: 0.90s
Fixed Cast Time: 0.60s
After Cast Delay: 0.50s 
Max Instances: 3
Range: 9
Requirement: Deplant Lv: 3, Bio Cannibalize Lv: 7
Description: Throws a seed at the target which drains HP every 0.65s, scaling with INT, Base Level and the learned level of Throwing Potions Techniques. Increases its WD by 90% while active.
Also changes the target of the caster's Cannibalize familiars to the enemy if the caster is within their attack range.
Acid Terror, Acid Demonstration, or any Fire property damage burns the seed, dealing Fire M.DMG to the target and canceling the effect.
The duration is halved on bosses. 
Catalyst: 1x Briar Seed
[Lv. 1]: Duration: 4s. SP Cost: 22 
[Lv. 2]: Duration: 8s. SP Cost: 26 
[Lv. 3]: Duration: 12s. SP Cost: 30 
[Lv. 4]: Duration: 16s. SP Cost: 34 
[Lv. 5]: Duration: 20s. SP Cost: 38
Formula: Damage: ((((Skill Lv x 100) + INT + Base Lv) + ((MATK / 2) x T. P. Techniques Lv) / 10))) x 65) / 100 
Fire Property MATK (%): 500% `,
    img: briarVines,
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
Type: Supportive 
Target: Self
SP Cost: 5
Requirement: None
Description: Crafts potions and bottles from items.
Base Level, Job Level, and Stats increase the number of crafted items.
Guide: Pharmacy Creation Guide 
Catalyst: 1x Medicine Bowl
[Lv. 1]: Bonus Efficiency: 0% 
[Lv. 2]: Bonus Efficiency: 25% 
[Lv. 3]: Bonus Efficiency: 50% 
[Lv. 4]: Bonus Efficiency: 75% 
[Lv. 5]: Bonus Efficiency: 100%
Formula:
Crafted Arrows:
Base Amount + Bonus Amount
Bonus Amount:
((Base Amount x ((Level Bonus + Stats Bonus) x ((Skill Lv x 25) - 25))) / 100)
Level Bonus:
((Base Lv x 100) / 200) + ((Job Lv x 100) / 140) / 100
Stats Bonus:
((STR^2 / 10) + (AGI^2 / 10) + (VIT^2 / 10) + (INT^2 / 10) + (DEX^2 / 10) + (LUK^2)) / 100
Random Bonus Amount:
10% chance for the bonus to be reduced to 25% 
70% chance for the bonus to be reduced to 50% 
20% chance for no reductions `,
    img: pharmacy,
  },
//   {
//     id: "largeScalePharmacy",
//     level: 0,
//     dependencies: [
//       { id: "pharmacy", minLevel: 5 },
//     ],
//     dependent: [ ],
//     element: null,
//     skillName: "Large Scale Pharmacy",
//     maxLevel: 5,
//     inform: `Max Lv: 5
// Skill Form: Active
// Type: Misc
// Target: Self
// Requirement: Pharmacy Lv: 5
// Description: Brew a large batch of potions all at once, with each potions creation rate calculated individually. Requires a Large Scale Guide and 1 Cauldron in your inventory.
// [Lv 1]: Requires materials for 20 crafting attempts,
// [Lv 2]: Requires materials for 40 crafting attempts,
// [Lv 3]: Requires materials for 60 crafting attempts,
// [Lv 4]: Requires materials for 80 crafting attempts,
// [Lv 5]: Requires materials for 100 crafting attempts`,
//     img: largeScalePharmacy,
//   },
  {
    id: "marineSphereBomb",
    level: 0,
    dependencies: [
      { id: "throwingPotionsTechniques", minLevel: 3 },
    ],
    dependent: [      
      { id: "potionPitcher" },
    ],
    element: null,
    skillName: "Marine Sphere Bomb",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Ground
Target: Enemy
Element: Neutral
Variable Cast Time: 1.40s
Fixed Cast Time: 0.60s 
After Cast Delay: 0.50s 
Range: 7
Hits: 1
SP Cost: 10
Requirement: Throwing Potions Techniques Lv: 3
Description: Command a Marine Sphere to explode after 0.7s at the targeted location, dealing P.DMG to enemies within an 11x11 AoE.
The damage scales with INT, VIT, Base Level and the learned level of Throwing Potions Techniques, and the Sphere's HP.
Catalyst:
  1x Mini Marine Sphere Bottle for Lv. 1~5
  1x Marine Sphere Bottle for Lv. 6~10
[Lv. 1]: Sphere Base HP: 4
[Lv. 2]: Sphere Base HP: 8
[Lv. 3]: Sphere Base HP: 12 
[Lv. 4]: Sphere Base HP: 16 
[Lv. 5]: Sphere Base HP: 20 
[Lv. 6]: Sphere Base HP: 24 
[Lv. 7]: Sphere Base HP: 28 
[Lv. 8]: Sphere Base HP: 32 
[Lv. 9]: Sphere Base HP: 36 
[Lv.10]: Sphere Base HP: 40
Formula: Sphere HP: ((((Skill Lv x 4) + T. P. Techniques Lv) x Base Lv) x (100+ ((VIT + INT) / 2))) / 100 `,
    img: marineSphereBomb,
  },
  {
    id: "potionPitcher",
    level: 0,
    dependencies: [
      { id: "marineSphereBomb", minLevel: 5 },
    ],
    dependent: [
      { id: "slingItem" },
    ],
    element: null,
    skillName: "Potion Pitcher",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Supportive 
Target: Ally
After Cast Delay: 0.50s 
Range: 9
SP Cost: 5
Requirement: Marine Sphere Bomb Lv: 5
Description: Consumes a Potion to restore the target's HP, scaling with the user's INT, the learned level of Throwing Potions Techniques and skill level, and the target's VIT.
[Lv. 1]: Red Potion.
[Lv. 2]: Orange Potion
[Lv. 3]: Yellow Potion
[Lv. 4]: Green Potion
[Lv. 5]: White Potion
[Lv. 6]: Condensed Red Potion
[Lv. 7]: Condensed Orange Potion
[Lv. 8]: Condensed Yellow Potion
[Lv. 9]: Condensed Green Potion
[Lv.10]: Condensed White Potion
Formula: Healing (%): 100 + INT + Target VIT + (T. P. Techniques Lv x 5) `,
    img: potionPitcher,
  },
  {
    id: "slingItem",
    level: 0,
    dependencies: [
      { id: "potionPitcher", minLevel: 5 },
    ],
    dependent: [      
      { id: "potionSpreader" },
    ],
    element: null,
    skillName: "Sling Item",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Supportive
Target: Enemy/Ally
After Cast Delay: A.Delay - 0.28s
Cooldown: A.Delay + 0.36s
Range: 9
Hits: 1
Requirement: Potion Pitcher Lv: 5
Description: Throws items to the target. Offensive items deals ranged P.DMG, scaling with INT.
Catalyst: 1x Sling Item
[Lv. 1]: SP Cost: 25 
[Lv. 2]: SP Cost: 30
[Lv. 3]: SP Cost: 35
[Lv. 4]: SP Cost: 40 
[Lv. 5]: SP Cost: 45
Formula: ATK (%): 100 + (Skill Lv x (100 + INT)) `,
    img: slingItem,
  },
];
