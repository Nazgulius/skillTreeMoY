
/*  author Chalykh Maksim
  # data 10.02.2025
  # email: chalyh.maksim.88@mail.ru */

import skillImgNo from '../../img/no_img.png'; // заглушка
import potionSpreader from '../../img/icon_cre/icon_cre_1.gif';
import fullChemicalProtection from '../../img/icon_cre/icon_cre_2.gif';
import acidDemonstration from '../../img/icon_cre/icon_cre_3.gif';
import hyperFertilize from '../../img/icon_cre/icon_cre_6.png';

// список скилов Creator
export const skillsCreator = [
  {
    id: "acidDemonstration",
    level: 0,
    dependencies: [
      { id: "chemicalReaction", minLevel: 5 },
    ],
    dependent: [],
    element: null,
    skillName: "Acid Demonstration",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
Variable Cast Time: 0.90s
Fixed Cast Time: 0.60s
After Cast Delay: 0.50s
Cooldown: 1s
Range: 9
Hits: 10
SP Cost: 15
Requirement: Chemical Reaction Lv: 5
Description: Deals ranged P.DMG to the target, scaling with the target's VIT, Chemical Corrosion Stacks.
Has a chance to inflict Chemical Corrosion for 63s, and if the enemy is already affected by it, has a chance to Break its armor.

Chemical Corrosion Chance: (10 + (3 × Skill Lv))%
Break Weapon / Armor Chance: (5 + Skill Lv)%

Never Miss
Lv 1–5 do not apply Corrosion or Break.

Catalysts:
  1x Mini Fire Bottle for Lv. 1~5
  1x Mini Acid Bottle for Lv. 1~5
  1x Fire Bottle for Lv. 6~10
  1x Acid Bottle for Lv. 6~10
  
[Lv. 1]: ATK 1200%, Corrosion Chance: 13%, Break Chance: 6%
[Lv. 2]: ATK 1400%, Corrosion Chance: 16%, Break Chance: 7%
[Lv. 3]: ATK 1600%, Corrosion Chance: 19%, Break Chance: 8%
[Lv. 4]: ATK 1800%, Corrosion Chance: 22%, Break Chance: 9%
[Lv. 5]: ATK 2000%, Corrosion Chance: 25%, Break Chance: 10%
[Lv. 6]: ATK 2200%, Corrosion Chance: 28%, Break Chance: 11%
[Lv. 7]: ATK 2400%, Corrosion Chance: 31%, Break Chance: 12%
[Lv. 8]: ATK 2600%, Corrosion Chance: 34%, Break Chance: 13%
[Lv. 9]: ATK 2800%, Corrosion Chance: 37%, Break Chance: 14%
[Lv.10]: ATK 3000%, Corrosion Chance: 40%, Break Chance: 15%

Formula: ATK (%): (1000 + (200 × Skill Lv)) × (Target VIT ÷ 100) + Chemical Corrosion Stacks
ATK (%) against Boss: (1000 + (200 × Skill Lv)) × ((Target VIT ÷ 2) ÷ 100) + Chemical Corrosion Stacks `,
    img: acidDemonstration,
  },
  {
    id: "fullChemicalProtection",
    level: 0,
    dependencies: [
      { id: "weaponChemicalProtection", minLevel: 1 },
      { id: "shieldChemicalProtection", minLevel: 1 },
      { id: "armorChemicalProtection", minLevel: 1 },
      { id: "helmChemicalProtection", minLevel: 1 },
    ],
    dependent: [],
    element: null,
    skillName: "Full Chemical Protection",
    maxLevel: 1,
    inform: `Max Lv: 1
Skill Form: Active
Type: Supportive
Target: Ally
Variable Cast Time: 0.90s
Fixed Cast Time: 0.60s
After Cast Delay: 0.50s 
Cooldown: A.Delay 
Range: 1
SP Cost: 40
Requirement: Weapon Chemical Protection Lv: 1, Shield Chemical Protection Lv: 1, Armor Chemical Protection Lv: 1, Helm Chemical Protection Lv: 1
Description: Protects the target's equipment, activating Helm, Shield, Armor, and Weapon Chemical Protection effects.
Catalyst: 3x Glistening Bottle

Applies all Chemical Protections at learned level
All durations are doubled
Cannot be removed by Dispell
Removed only if Chemical Corrosion reaches 20 stacks

Helm CP: –(1 × Skill Lv)% Magic Damage Taken
Shield CP: –(1 × Skill Lv)% Physical Damage Taken
Armor CP: + (1 × Skill Lv)% Max HP
Weapon CP: + (1 × Skill Lv)% Damage Dealt
`,
    img: fullChemicalProtection,
  },
  {
    id: "hyperFertilize",
    level: 0,
    dependencies: [
      { id: "deplant", minLevel: 5 },
    ],
    dependent: [],
    element: null,
    skillName: "Hyper Fertilize",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Supportive 
Target: Ground 
Element: Earth
Variable Cast Time: 2s
Fixed Cast Time: 0.30s
After Cast Delay: 1s
Cooldown: 3s
Range: 2
SP Cost: 35
Requirement: Deplant Lv: 5
Description: Fertilizes a 9x9 AoE for (5 − 0.3 × Skill Lv) s, dealing Earth Magic Damage to enemies every (0.5 − 0.03 × Skill Lv)s. 
Also applies a bonus effect on plant monsters within the area based on its cast level.

No longer requires 1× Fertilizer Bag to cast, but still requires it to apply the buff
If a Fertilizer Bag is consumed, each hit has: Poison Chance: (10 + 2 × Skill Lv)%


Hyper Fertilize Buff
  Adds Poison element damage to plant basic attacks:  (Skill Lv × 12)% of user’s M.ATK
  Plants ignore target Defenses by (Skill Lv × 3)%
  Extends plant duration by (Skill Lv × 3)% -> Up to 600 seconds max
  Skill Ratio bonus: 100 + (60 × Skill Lv) (per hit)

Catalyst: 1x Fertilizer Bag
[Lv. 1]: MATK 160%, Poison Chance: 12%, Poison Damage: 12% of user's MATK, Ignore Defense: 3%, Extra Plats Duration: 3%, SP Cost: 22 
[Lv. 2]: MATK 220%, Poison Chance: 14%, Poison Damage: 24% of user's MATK, Ignore Defense: 6%, Extra Plats Duration: 6%, SP Cost: 24 
[Lv. 3]: MATK 280%, Poison Chance: 16%, Poison Damage: 36% of user's MATK, Ignore Defense: 9%, Extra Plats Duration: 9%, SP Cost: 26 
[Lv. 4]: MATK 340%, Poison Chance: 18%, Poison Damage: 48% of user's MATK, Ignore Defense: 12%, Extra Plats Duration: 12%, SP Cost: 28 
[Lv. 5]: MATK 400%, Poison Chance: 20%, Poison Damage: 60% of user's MATK, Ignore Defense: 15%, Extra Plats Duration: 15%, SP Cost: 30 
[Lv. 6]: MATK 460%, Poison Chance: 22%, Poison Damage: 72% of user's MATK, Ignore Defense: 18%, Extra Plats Duration: 18%, SP Cost: 32 
[Lv. 7]: MATK 520%, Poison Chance: 24%, Poison Damage: 84% of user's MATK, Ignore Defense: 21%, Extra Plats Duration: 21%, SP Cost: 34 
[Lv. 8]: MATK 580%, Poison Chance: 26%, Poison Damage: 96% of user's MATK, Ignore Defense: 24%, Extra Plats Duration: 24%, SP Cost: 36
[Lv. 9]: MATK 640%, Poison Chance: 28%, Poison Damage: 108% of user's MATK, Ignore Defense: 27%, Extra Plats Duration: 27%, SP Cost: 38 
[Lv.10]: MATK 700%, Poison Chance: 30%, Poison Damage: 120% of user's MATK, Ignore Defense: 30%, Extra Plats Duration: 30%, SP Cost: 40`,
    img: hyperFertilize,
  },
  {
    id: "potionSpreader",
    level: 0,
    dependencies: [
      { id: "potionPitcher", minLevel: 5 },
    ],
    dependent: [],
    element: null,
    skillName: "Potion Spreader",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Supportive 
Target: Ground
Variable Cast Time: 1.10s
Fixed Cast Time: 0.90s
After Cast Delay: 1s 
Range: 3
SP Cost: 30
Requirement: Potion Pitcher Lv: 5
Description: Consumes a potion to restore HP of allies within a 7x7 AoE around the targeted location, scaling with the user's INT, the learned level of Throwing Potions Techniques and Potion Pitcher, and the target's VIT.
CD scales with skill level.
[Lv. 1]: Red Thick Potion CD: 0.40s
[Lv. 2]: Red Thick Potion CD: 0.20s
[Lv. 3]: Orange Thick Potion CD: 0.80s
[Lv. 4]: Orange Thick Potion CD: 0.40s
[Lv. 5]: Yellow Thick Potion CD: 1.20s
[Lv. 6]: Yellow Thick Potion CD: 0.60s
[Lv. 7]: Green Thick Potion CD: 1.60s
[Lv. 8]: Green Thick Potion CD: 0.80s
[Lv. 9]: White Thick Potion CD: 2.00s
[Lv.10]: White Thick Potion CD: 1.00s
Formula: Healing: (Potion Healing x (100 + INT + Target Vit + (Potion Pitcher Lv x 5) + (T. P. Techniques Lv x 5))) / 100 `,
    img: potionSpreader,
  },
];
