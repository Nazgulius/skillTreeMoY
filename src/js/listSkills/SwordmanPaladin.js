/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */

import skillImgNo from '../../img/no_img.png'; // заглушка
import gloriaDomini from '../../img/icon_pld/icon_pld_1.gif'; 
import sacrifice from '../../img/icon_pld/icon_pld_2.gif'; 
import gospel from '../../img/icon_pld/icon_pld_3.gif'; 
import shieldChain from '../../img/icon_pld/icon_pld_4.gif'; 


// список скилов Paladin
export const skillsPaladin = [  
  {
    id: "gloriaDomini",
    level: 0,
    dependencies: [
       { id: "grandCross", minLevel: 5 },
    ],
    dependent: [],
    element: null,
    skillName: "Gloria Domini",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Physical or Magical
Target: Enemy
Element: Holy
Variable Cast Time: 1.40s
Fixed Cast Time: 0.60s
After Cast Delay: A.Delay 0.40s
Cooldown: 1s
Range: 9 
Hits: 3
Requirement: Grand Cross Lv: 5
Description: Deals P.DMG or M.DMG to the target based on Weapon type, scaling with STR and INT.
Reduces target's Holy property resistance by 20% for 5s.
Drains SP when used against Shadow and Corrupt monsters.
[Lv. 1]: ATK/MATK 350%, SP Cost: 20 
[Lv. 2]: ATK/MATK 600%, SP Cost: 25 
[Lv. 3]: ATK/MATK 850%, SP Cost: 30 
[Lv. 4]: ATK/MATK 1100%, SP Cost: 35 
[Lv. 5]: ATK/MATK 1350%, SP Cost: 40
Formula: ATK (%): 100 + (250 x Skill Lv) + (STR + (INT / 2) x 3)
MATK (%) 100 + (250 x Skill Lv) + (INT+ (STR / 2) x 3)
Drained SP: (T.Max SP x. (5 x Skill Lv)) = 100 `,
    img: gloriaDomini,
  },
  {
    id: "gospel",
    level: 0,
    dependencies: [
      { id: "graceofthemartyr", minLevel: 4 },
    ],
    dependent: [],
    element: null,
    skillName: "Gospel",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Misc
Target: Self
After Cast Delay: 0.30s
Cooldown: 30s
HP Cost: 5%

Requirement: Martyr's Heal Lv: 4
Description: Activates a 5x5 AoE aura, with effects based on selected skill level. Drains HP and SP every 10s while active.
Allies under the effects of Devotion also emit the aura.
Only affects allies within a 10 Base Level range.
Thorns Aura: +20% Thorns and a bonus amount based on the caster's Base Level. Prestige Aura: +10% NSE Resistance and a bonus to all Stats based on the caster's base Stats and Base Level.
Protection Aura: +10% Max HP and a bonus of H.DEF based on the caster's H.DEF.
Salvation: +10 H.MDEF and a bonus resistance. to Fire, Water, Wind, and Earth based on the caster's base INT.
Inspiration Aura: +50 B.ATK and B.MATK and a bonus of Holy P.DMG and M.DMG based on the caster's Base Level.
[Lv. 1]: Thorns Aura. SP Cost: 19 
[Lv. 2]: Prestige Aura. SP Cost: 23
[Lv. 3]: Protection Aura. SP Cost: 27 
[Lv. 4]: Salvation Aura. SP Cost: 31 
[Lv. 5]: Inspiration Aura. SP Cost: 35

Drained SP: 15+ (4 x Gospel Lv)
Drained HP: 5% of MaxHP
Thorns: (Base Lv 40) x Gospel Lv
All Stats: ((((STR. + AGI + VIT + INT + DEX + LUK) + 6)^2) + (300 - Base Lv)) + Gospel Lv 
H.DEF: HIDEF (8 - Gospel Lv)
Property Resistance % 5 + (INT (15 Gospel Lv))
Holy Damage %: 5 + (Base Lv / 10) `,
    img: gospel,
  },
  {
    id: "sacrifice",
    level: 0,
    dependencies: [
      { id: "faith", minLevel: 10 },
      { id: "movingHPRecovery", minLevel: 1 },
    ],
    dependent: [],
    element: null,
    skillName: "Sacrifice",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Toggle 
Type: Supportive 
Target: Self
After Cast Delay: 0.30s
Cooldown: A.Delay
Requirement: Faith Lv: 10, Moving HP Recovery Lv: 1
Description: While active, drains HP on each attack or skill, increasing DMG by double the amount of drained HP. This bonus damage cannot miss.
[Lv. 1]: Drained HP: 1% of MaxHP 
[Lv. 2]: Drained HP: 2% of MaxHP
[Lv. 3]: Drained HP: 3% of MaxHP 
[Lv. 4]: Drained HP: 4% of MaxHP 
[Lv. 5]: Drained HP: 5% of MaxHP
Damage Bonus: ((0.01 x Skill Level) x Max HP) x 2 `,
    img: sacrifice,
  },
  {
    id: "shieldChain",
    level: 0,
    dependencies: [
      { id: "shieldBoomerang", minLevel: 5 },
    ],
    dependent: [],
    element: null,
    skillName: "Shield Chain",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
Element: Elementless
After Cast Delay: A.Delay 0.40s
Fixed Cast Time: 0.60s
Cooldown: 1s
Range: 10
Hits: 5
SP Cost: 30
Requirement: Shield Boomerang Lv: 5
Description: Deals ranged P.DMG to the target, scaling with shield stats and the learned level of Shield Boomerang. Adds T.ATK based on shield stats if the target was Immobilized in the last 3s. VCT scales with skill level. 
Requires a shield.
[Lv. 1]: ATK 100% x Hits. VCT: 0.33s 
[Lv. 2]: ATK 100% x Hits. VCT: 0.36s 
[Lv. 3]: ATK 100% x Hits. VCT: 0.39s 
[Lv. 4]: ATK 100% x Hits. VCT: 0.42s 
[Lv. 5]: ATK 100% x Hits. VCT: 0.45s 
[Lv. 6]: ATK 100% x Hits. VCT: 0.48s 
[Lv. 7]: ATK 100% x Hits. VCT: 0.51s 
[Lv. 8]: ATK 100% x Hits. VCT: 0.54s 
[Lv. 9]: ATK 100% x Hits. VCT: 0.57s 
[Lv.10]: ATK 100% x Hits. VCT: 0.60s
ATK (%); 100 + (((S/weight + S.Defense+ (S.Refine^2)) / (20 - Shield Boomerang Lv)) x Skill Lv) x Hits 
T.ATK: S.Weight + S.Defense + (SRefine^2) `,
    img: shieldChain,
  },
];


/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */
