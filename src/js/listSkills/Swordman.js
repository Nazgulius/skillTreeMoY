/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */

import skillImgNo from '../../img/no_img.png'; // заглушка
import oneHandedSwordMastery from '../../img/icon_swd/icon_swd_1.gif'; 
import increaseHPRecovery from '../../img/icon_swd/icon_swd_3.gif'; 
import bash from '../../img/icon_swd/icon_swd_4.gif'; 
import provoke from '../../img/icon_swd/icon_swd_5.gif'; 
import magnumBreak from '../../img/icon_swd/icon_swd_6.gif'; 
import endure from '../../img/icon_swd/icon_swd_7.gif'; 
import movingHPRecovery from '../../img/icon_swd/icon_swd_8.gif'; 
import oneSpearMastery from '../../img/icon_swd/icon_swd_9.gif'; 

// список скилов Swordman
export const skillsSwordman = [  
  {
    id: "oneHandedSwordMastery",
    level: 0,
    dependencies: [],
    dependent: [
      { id: "swordQuicken" },
      { id: "twoHandedSwordMastery" },
    ],
    element: null,
    skillName: "One-Handed Sword Mastery",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Passive
Type: Physical
Weapon: One-Handed Sword
Requirement: None
Description: Increases E.ATK while wielding a One-Handed Sword. Knights, Crusaders and Rogues gain extra E.ATK. At max level, also grants +6% ACC.
[Lv. 1]: E.ATK +2
[Lv. 2]: E.ATK +4
[Lv. 3]: E.ATK +6
[Lv. 4]: E.ATK +8
[Lv. 5]: E.ATK +10
[Lv. 6]: E.ATK +12
[Lv. 7]: E.ATK +14
[Lv. 8]: E.ATK +16 
[Lv. 9]: E.ATK +18 
[Lv.10]: E.ATK +20
E.ATK Bonus: Skill Lv x 1 `,
    img: oneHandedSwordMastery,
  },
  {
    id: "oneSpearMastery",
    level: 0,
    dependencies: [],
    dependent: [
       { id: "spearQuicken" },
       { id: "twoHandedSpearMastery" },
       { id: "pierce" },      
    ],
    element: null,
    skillName: "One-Spear Mastery",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Passive
Type: Physical
Weapon: One-Handed Spear
Requirement: None
Description: Increases E.ATK while wielding a One-Handed Spear. Knights and Crusaders gain extra E.ATK. At max level, also grants +6% ACC.
[Lv. 1]: E.ATK +2
[Lv. 2]: E.ATK +4
[Lv. 3]: E.ATK +6
[Lv. 4]: E.ATK +8
[Lv. 5]: E.ATK +10
[Lv. 6]: E.ATK +12
[Lv. 7]: E.ATK +14
[Lv. 8]: E.ATK +16 
[Lv. 9]: E.ATK +18 
[Lv.10]: E.ATK +20
E.ATK Bonus: Skill Lv x 1 `,
    img: oneSpearMastery,
  },
  {
    id: "bash",
    level: 0,
    dependencies: [],
    dependent: [
      { id: "magnumBreak" }     
    ],
    element: null,
    skillName: "Bash",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
After Cast Delay: A.Delay - 0.48s
Cooldown: A.Delay
Range: 1 + Weapon's range
Hits: 1
Requirement: None
Description: Deals P.DMG to the target. This skill has HCM.
[Lv. 1]: ATK 130%, HCM: 105%, SP Cost: 2 
[Lv. 2]: ATK 160%, HCM: 110%, SP Cost: 3 
[Lv. 3]: ATK 190%, HCM: 115%, SP Cost: 3 
[Lv. 4]: ATK 220%, HCM: 120%, SP Cost: 3 
[Lv. 5]: ATK 250%, HCM: 125%, SP Cost: 4 
[Lv. 6]: ATK 280%, HCM: 130%, SP Cost: 4 
[Lv. 7]: ATK 310%, HCM: 135%, SP Cost: 4 
[Lv. 8]: ATK 340%, HCM: 140%, SP Cost: 5 
[Lv. 9]: ATK 370%, HCM: 145%, SP Cost: 5
[Lv. 10]: ATK 400%, HCM: 150%, SP Cost: 5
Formula: ATK (%): 100 + (30 x Skill Lv) `,
    img: bash,
  },
  {
    id: "magnumBreak",
    level: 0,
    dependencies: [{ id: "bash", minLevel: 5 }],
    dependent: [],
    element: null,
    skillName: "Magnum Break",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Self
Element: Fire
After Cast Delay: A.Delay - 0.44s
Cooldown: 1s
Hits: 1
Requirement: Bash Lv: 5
Description: Deals P.DMG to enemies within a 7x7 AoE and Knocks them back 2 cells. Enemies at the edge take less damage.
Also grants +20% P.DMG as Fire property temporarily.
This skill has HCM bonus.
[Lv. 1]: ATK 120%, HCM: 110% HP Cost: 30. SP Cost: 6 Property Damage Duration: 10s 
[Lv. 2]: ATK 140%, HCM: 120% HP Cost: 29. SP Cost: 6 Property Damage Duration: 20s 
[Lv. 3]: ATK 160%, HCM: 130% HP Cost: 28. SP Cost: 7 Property Damage Duration: 30s 
[Lv. 4]: ATK 180%, HCM: 140% HP Cost: 27. SP Cost: 7 Property Damage Duration: 40s 
[Lv. 5]: ATK 200%, HCM: 150% HP Cost: 26. SP Cost: 8 Property Damage Duration: 50s 
[Lv. 6]: ATK 220%, HCM: 160% HP Cost: 25. SP Cost: 8 Property Damage Duration: 60s
[Lv. 7]: ATK 240%, HCM: 170% HP Cost: 24. SP Cost: 9 Property Damage Duration: 70s 
[Lv. 8]: ATK 260%, HCM: 180% HP Cost: 23. SP Cost: 9 Property Damage Duration: 80s 
[Lv. 9]: ATK 280%, HCM: 190% HP Cost: 22. SP Cost: 10 Property Damage Duration: 90s 
[Lv.10]: ATK 300%, HCM: 200% HP Cost: 21. SP Cost: 10 Property Damage Duration: 100s
Formula: ATK (%): 100 + (Skill Lv x 20)
Edge ATK (%): 100 + (Skill Lv x 10) `,
    img: magnumBreak,
  },
  {
    id: "provoke",
    level: 0,
    dependencies: [],
    dependent: [{ id: "endure" }],
    element: null,
    skillName: "Provoke",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Supportive 
Target: Ally/Enemy
After Cast Delay: Attack Delay - 0.44s 
Cooldown: Attack Delay
Range: 9
Requirement: None
Description: Increases Physical Damage dealt and taken for 30s. It also provokes the enemy, drawing its aggro.
Does not affect Undead, Corrupt or Boss monsters, and provoked targets.
[Lv. 1]: Dealt +6%, Taken +1% SP Cost: 1
[Lv. 2]: Dealt +7%. Taken +2% SP Cost: 2
[Lv. 3]: Dealt +8%, Taken +3% SP Cost: 3
[Lv. 4]: Dealt +9%, Taken +4% SP Cost: 4
[Lv. 5]: Dealt +10%, Taken +5% SP Cost: 5
[Lv. 6]: Dealt +11%, Taken +6% SP Cost: 6
[Lv. 7]: Dealt +12%, Taken +7% SP Cost: 7
[Lv. 8]: Dealt +13%, Taken +8% SP Cost: 8
[Lv. 9]: Dealt +14%, Taken +9% SP Cost: 9
[Lv.10]: Dealt +15%, Taken +10% SP Cost: 10`,
    img: provoke,
  },
  {
    id: "endure",
    level: 0,
    dependencies: [
      { id: "provoke", minLevel: 5 },      
    ],
    dependent: [
      { id: "riding" },
    ],
    element: null,
    skillName: "Endure",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Supportive 
Target: Self
After Cast Delay: 0.30s
Cooldown: 25s
SP Cost: 10
Requirement: Provoke Lv: 5
Description: Resists Flinching from attacks. Increases H.DEF and C.DEF.
[Lv. 1]: H.DEF +5. C.DEF +1. Duration: 7s 
[Lv. 2]: H.DEF +10. C.DEF +2. Duration: 9s 
[Lv. 3]: H.DEF +15. C.DEF +3. Duration: 11s 
[Lv. 4]: H.DEF +20. C.DEF +4. Duration: 13s 
[Lv. 5]: H.DEF +25. C.DEF +5. Duration: 15s 
[Lv. 6]: H.DEF +30. C.DEF +6. Duration: 17s 
[Lv. 7]: H.DEF +35. C.DEF +7. Duration: 19s 
[Lv. 8]: H.DEF +40. C.DEF +8. Duration: 21s 
[Lv. 9]: H.DEF +45. C.DEF +9. Duration: 23s 
[Lv.10]: H.DEF +50. C.DEF +10. Duration: 25s`,
    img: endure,
  },
  {
    id: "increaseHPRecovery",
    level: 0,
    dependencies: [],
    dependent: [{ id: "movingHPRecovery" }],
    element: null,
    skillName: "Increase HP Recovery",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Passive
Type: Misc
Requirement: None
Description: Boosts HP Recovery and increases HP potion healing.
Also gains HP Recovery based on Max HP. 
[Lv. 1]: Recovery: +5. Potion: +3% 
[Lv. 2]: Recovery: +10. Potion: +6% 
[Lv. 3]: Recovery: +15. Potion: +9% 
[Lv. 4]: Recovery: +20. Potion: +12% 
[Lv. 5]: Recovery: +25. Potion: +15% 
[Lv. 6]: Recovery: +30. Potion: +18% 
[Lv. 7]: Recovery: +35. Potion: +21% 
[Lv. 8]: Recovery: +40. Potion: +24% 
[Lv. 9]: Recovery: +45. Potion: +27% 
[Lv.10]: Recovery: +50. Potion: +30%
HP Recovery: (Skill Lv x 5) + (Skill Lv x 0.1% of MaxHP) `,
    img: increaseHPRecovery,
  },
  {
    id: "movingHPRecovery",
    level: 0,
    dependencies: [
      { id: "increaseHPRecovery", minLevel: 5 },
    ],
    dependent: [
      { id: "sacrifice" },
    ],
    element: null,
    skillName: "Moving HP Recovery",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Passive
Type: Misc
Requirement: Increase HP Recovery Lv: 5
Description: HP Recovery also heals HP while moving or fighting.
[Lv. 1]: Recovery every 24s 
[Lv. 2]: Recovery every 22s 
[Lv. 3]: Recovery every 20s 
[Lv. 4]: Recovery every 18s 
[Lv. 5]: Recovery every 16s 
[Lv. 6]: Recovery every 14s 
[Lv. 7]: Recovery every 12s 
[Lv. 8]: Recovery every 10s 
[Lv. 9]: Recovery every 8s 
[Lv.10]: Recovery every 6s`,
    img: movingHPRecovery,
  },
];


/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */
