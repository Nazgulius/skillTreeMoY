
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
      { id: "demonstration", minLevel: 10 },
      { id: "acidTerror", minLevel: 10 },
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
Requirement: Demonstration Lv: 10, Acid Terror Lv: 10, Chemical Reaction Lv: 5
Description: Deals ranged P.DMG to the target, scaling with the target's VIT, Chemical Corrosion Stacks and Neutral property resistance.
Has a chance to inflict Chemical Corrosion for 63s, and if the enemy is already affected by it, has a chance to Break its armor.
Catalysts:
  1x Mini Fire Bottle for Lv. 1~5
  1x Mini Acid Bottle for Lv. 1~5
  1x Fire Bottle for Lv. 6~10
  1x Acid Bottle for Lv. 6~10
[Lv. 1]: ATK 1050%, Corrosion Chance: 1% 
[Lv. 2]: ATK 1200%, Corrosion Chance: 2% 
[Lv. 3]: ATK 1350%, Corrosion Chance: 3% 
[Lv. 4]: ATK 1500%, Corrosion Chance: 4% 
[Lv. 5]: ATK 1650%, Corrosion Chance: 5% 
[Lv. 6]: ATK 1800%, Corrosion Chance: 6% 
[Lv. 7]: ATK 1950%, Corrosion Chance: 7% 
[Lv. 8]: ATK 2100%, Corrosion Chance: 8% 
[Lv. 9]: ATK 2250%, Corrosion Chance: 9% 
[Lv.10]: ATK 2400%, Corrosion Chance: 10%
Formula: ATK (%): ((900 + (Skill Lv x 150)) x (1 + (Target VIT / 100))) + Chemical Corrosion Stacks
ATK (%) against Boss: ((900 + (Skill Lv x 150)) x (1 + ((Target VIT / 2) 100))) + Chemical Corrosion Stacks `,
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
The effects and duration depend on the learned level of each corresponding skill. 
Catalyst: 1x Glistening Bottle `,
    img: fullChemicalProtection,
  },
  {
    id: "hyperFertilize",
    level: 0,
    dependencies: [
      { id: "bioCannibalize", minLevel: 10 },
      { id: "briarVines", minLevel: 5 },
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
Fixed Cast Time: 0.60s
After Cast Delay: A.Delay + 1s
Cooldown: 5s
Range: 2
Hits: 1
SP Cost: 35
Requirement: Bio Cannibalize Lv: 10, Briar Vines Lv: 5, Deplant Lv: 5
Description: Fertilizes a 9x9 AoE for 5s, dealing M.DMG to enemies every 0.5s. Also applies a bonus effect on plant monsters within the area based on its cast level.
The bonus duration scales with learned level of Throwing Potions Techniques.
Catalyst: 1x Fertilizer Bag
[Lv. 1]: MATK 110%, Poison Injection 120% VCT: 2.90s. Bonus Duration: 6s. SP Cost: 22 
[Lv. 2]: MATK 120%, Poison Injection 60% VCT: 2.80s. Bonus Duration: 12s. SP Cost: 24 
[Lv. 3]: MATK 130%, Harden 30% VCT: 2.70s. Bonus Duration: 18s. SP Cost: 26 
[Lv. 4]: MATK 140%, Harden 15% VCT: 2.60s. Bonus Duration: 24s. SP Cost: 28 
[Lv. 5]: MATK 150%, Penetration 60% VCT: 2.50s. Bonus Duration: 30s. SP Cost: 30 
[Lv. 6]: MATK 160%, Penetration 30% VCT: 2.40s. Bonus Duration: 36s. SP Cost: 32 
[Lv. 7]: MATK 170%, Long Live 50% VCT: 2.30s. Bonus Duration: 42s. SP Cost: 34 
[Lv. 8]: MATK 180%, Long Live 25% VCT: 2.20s. Bonus Duration: 48s. SP Cost: 36
[Lv. 9]: MATK 190%, Undying 30% VCT: 2.10s. Bonus Duration: 54s. SP Cost: 38 
[Lv.10]: MATK 200%, Undying 15% VCT: 2.00s. Bonus Duration: 60s. SP Cost: 40
Formula: MATK (%): 100 + (Skill Lv x 10)
Duration (seconds): (Skill Lv x 6) + (T. P. Techniques Lv x 6) `,
    img: hyperFertilize,
  },
  {
    id: "potionSpreader",
    level: 0,
    dependencies: [
      { id: "slingItem", minLevel: 5 },
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
Requirement: Sling Item Lv: 5
Description: Consumes a potion to restore HP of allies within a 7x7 AoE around the targeted location, scaling with the user's INT, the learned level of Throwing Potions Techniques and Potion Pitcher, and the target's VIT.
CD scales with skill level.
[Lv. 1]: Red Potion. CD - 2s. ACD - 1s.
[Lv. 2]: Red Potion. CD - 1s. ACD - 0.5s.
[Lv. 3]: Orange Potion. CD - 2s. ACD - 1s.
[Lv. 4]: Orange Potion. CD - 1s. ACD - 0.5s.
[Lv. 5]: Yellow Potion. CD - 2s. ACD - 1s.
[Lv. 6]: Yellow Potion. CD - 1s. ACD - 0.5s.
[Lv. 7]: Green Potion. CD - 2s. ACD - 1s.
[Lv. 8]: Green Potion. CD - 1s. ACD - 0.5s.
[Lv. 9]: White Potion. CD - 2s. ACD - 1s.
[Lv.10]: White Potion. CD - 1s. ACD - 0.5s.

Base Healing:
Red Potion - (5 * Target Base Lv) + 120 
Orange Potion - (4 * Target Base Lv) + 240 
Yellow Potion - (3 * Target Base Lv) + 480 
Green Potion - (2 * Target Base Lv) + 960 
White Potion - (1 * Target Base Lv) + 1920 

Formula: Final Heal: (((Base Healing * (100 + INT + (Target VIT / 2))) / 100) * ((Skill Lv * 5) + (T. P. Techniques Lv x 5))) / 100 `,
    img: potionSpreader,
  },
];
