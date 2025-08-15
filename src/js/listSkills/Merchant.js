
/*  author Chalykh Maksim 
  # data 10.02.2025 
  # email: chalyh.maksim.88@mail.ru */

import skillImgNo from '../../img/no_img.png'; // заглушка
import discount from '../../img/icon_mer/icon_mer_2.png'; 
import overcharge from '../../img/icon_mer/icon_mer_3.png'; 
import pushcart from '../../img/icon_mer/icon_mer_4.gif'; 
import mammonite from '../../img/icon_mer/icon_mer_6.gif'; 
import cartRevolution from '../../img/icon_mer/icon_mer_7.gif'; 
import cartTwister from '../../img/icon_mer/icon_mer_8.png'; 
import axeMastery from '../../img/icon_mer/icon_mer_13.png'; 

// список скилов Merchant
export const skillsMerchant = [  
  {
    id: "axeMastery",
    level: 0,
    dependencies: [],
    dependent: [
      { id: "adrenalineRush" },
    ],
    element: null,
    skillName: "Axe Mastery",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Passive
Type: Physical
Weapon: Axe
Requirement: None
Description: Increases E.ATK while wielding Axes. Blacksmiths and Alchemists gain extra E.ATK. At max level, also grants +6% P.DMG on all sizes.
[Lv. 1]: One-Handed Axes: E.ATK +2 Two-Handed Axes: E.ATK +3
[Lv. 2]: One-Handed Axes: E.ATK +4 Two-Handed Axes: E.ATK +6
[Lv. 3]: One-Handed Axes: E.ATK +6 Two-Handed Axes: E.ATK +9
[Lv. 4]: One-Handed Axes: E.ATK +8 Two-Handed Axes: E.ATK +12
[Lv. 5]: One-Handed Axes: E.ATK +10 Two-Handed Axes: E.ATK +15
[Lv. 6]: One-Handed Axes: E.ATK +12 Two-Handed Axes: E.ATK +18
[Lv. 7]: One-Handed Axes: E.ATK +14 Two-Handed Axes: E.ATK +21
[Lv. 8]: One-Handed Axes: E.ATK +16 Two-Handed Axes: E.ATK +24
[Lv. 9]: One-Handed Axes: E.ATK +18 Two-Handed Axes: E.ATK +27
[Lv.10]: One-Handed Axes: E.ATK +20 Two-Handed Axes: E.ATK +30
Formula: E.ATK Bonus: Skill Lv x 1 `,
    img: axeMastery,
  },
  {
    id: "mammonite",
    level: 0,
    dependencies: [],
    dependent: [ ],
    element: null,
    skillName: "Mammonite",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
After Cast Delay: A.Delay - 0.28s
Cooldown: A.Delay
Range: 1 + Weapon's range
Hits: 1
SP Cost: 8
Requirement: None
Description: Deals P.DMG to the target.
Has a chance to inflict Stun for 4.5s at level 6 or higher.
Catalyst: 2x Zeny Pouch for Lv. 6 or higher.
[Lv. 1]: ATK 150%
[Lv. 2]: ATK 200%
[Lv. 3]: ATK 250% 
[Lv. 4]: ATK 300%
[Lv. 5]: ATK 350%
[Lv. 6]: ATK 400%, Stun chance 4% 
[Lv. 7]: ATK 450%, Stun chance 8% 
[Lv. 8]: ATK 500%, Stun chance 12% 
[Lv. 9]: ATK 550%, Stun chance 16% 
[Lv.10]: ATK 600%, Stun chance 20%`,
    img: mammonite,
  },
  {
    id: "pushcart",
    level: 0,
    dependencies: [],
    dependent: [
      { id: "cartRevolution" },
      { id: "cartTwister" },
      { id: "discount" },
      { id: "overcharge" },
      { id: "cartBoost" },
    ],
    element: null,
    skillName: "Pushcart",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Passive
Type: Misc
Requirement: None
Description: Grants the ability to push a cart. Also increases Max Weight.
Use Decoration Tools to change its appearance.
Rental at: Pushcart Assembler
[Lv. 1]: Maximum Weight +200 
[Lv. 2]: Maximum Weight +400 
[Lv. 3]: Maximum Weight +600 
[Lv. 4]: Maximum Weight +800 
[Lv. 5]: Maximum Weight +1000 
[Lv. 6]: Maximum Weight +1200 
[Lv. 7]: Maximum Weight +1400 
[Lv. 8]: Maximum Weight +1600 
[Lv. 9]: Maximum Weight +1800 
[Lv.10]: Maximum Weight +2000`,
    img: pushcart,
  },
  {
    id: "cartRevolution",
    level: 0,
    dependencies: [{ id: "pushcart", minLevel: 1 }],
    dependent: [
      { id: "cartTwister" },
      { id: "cartTermination" },
    ],
    element: null,
    skillName: "Cart Revolution",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
After Cast Delay: A.Delay - 0.28s
Cooldown: A.Delay
Range: 1
Hits: 1
Requirement: Pushcart Lv: 1
Description: Deals P.DMG to the target, Knocking it back 3 cells.
The damage scales with the number of different items in the Pushcart and its current weight.
Requires a Pushcart.
[Lv. 1]: SP Cost: 8
[Lv. 2]: SP Cost: 8
[Lv. 3]: SP Cost: 9 
[Lv. 4]: SP Cost: 9 
[Lv. 5]: SP Cost: 10
[Lv. 6]: SP Cost: 10
[Lv. 7]: SP Cost: 11 
[Lv. 8]: SP Cost: 11 
[Lv. 9]: SP Cost: 12 
[Lv.10]: SP Cost: 12
Formula: ATK (%): 100 + Number of Different Items + ((Pushcart Weight / 200) x Skill Lv) `,
    img: cartRevolution,
  },
  {
    id: "cartTwister",
    level: 0,
    dependencies: [
      { id: "cartRevolution", minLevel: 5 },
    ],
    dependent: [
      { id: "cartTermination" },
    ],
    element: null,
    skillName: "Cart Twister",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Self
After Cast Delay: A.Delay 0.225
Cooldown: 1.50s
Range: 1
Hits: 3
Requirement: Cart Revolution Lv: 5
Description: Deals P.DMG to enemies within a 5x5 AoE, Knocking them back 1 cell.
The damage scales with VIT, Base Level, the number of different items in the Pushcart and its current weight.
Requires a Pushcart.
[Lv. 1]: SP Cost: 6
[Lv. 2]: SP Cost: 7
[Lv. 3]: SP Cost: 8 
[Lv. 4]: SP Cost: 9 
[Lv. 5]: SP Cost: 10
Formula: ATK (%): 100 + ((Pushcart Weight / (400 - Number of Different Items)) x Skill Lv) x (1 + ((VIT / 30) x (Base Lv / 100)))) `,
    img: cartTwister,
  },
  {
    id: "discount",
    level: 0,
    dependencies: [{ id: "pushcart", minLevel: 3 },],
    dependent: [      
      { id: "overcharge" },
    ],
    element: null,
    skillName: "Discount",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Supportive 
Target: Self
After Cast Delay: 0.30s
Cooldown: A.Delay
Requirement: Pushcart Lv: 3
Description: Grants a chance to randomly reduce all skills' SP Cost by 10%, 20% or 50% while active.
Cancels the effect of Overcharge. 
[Lv. 1]: Chance: 10%
[Lv. 2]: Chance: 20%
[Lv. 3]: Chance: 30%
[Lv. 4]: Chance: 40%
[Lv. 5]: Chance: 50%
[Lv. 6]: Chance: 60%
[Lv. 7]: Chance: 70%
[Lv. 8]: Chance: 80% 
[Lv. 9]: Chance: 90% 
[Lv.10]: Chance: 100%`,
    img: discount,
  },
  {
    id: "overcharge",
    level: 0,
    dependencies: [
      { id: "discount", minLevel: 3 },
    ],
    dependent: [ ],
    element: null,
    skillName: "Overcharge",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Supportive 
Target: Self
Requirement: Discount Lv: 3
Description: Grants a chance to randomly increase all skills' SP Cost by 10%, 20%, or 50% while active, and also increases W.ATK by the same numerical value as the SP Cost increase percentage.
Cancels the effect of Discount.
[Lv. 1]: Chance: 10%
[Lv. 2]: Chance: 20%
[Lv. 3]: Chance: 30%
[Lv. 4]: Chance: 40%
[Lv. 5]: Chance: 50%
[Lv. 6]: Chance: 60%
[Lv. 7]: Chance: 70%
[Lv. 8]: Chance: 80% 
[Lv. 9]: Chance: 90% 
[Lv.10]: Chance: 100%`,
    img: overcharge,
  },
];
