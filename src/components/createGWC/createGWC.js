import {
  setStartHP,
  compareThreeSkills,
  abilityScores,
  overCharge
} from "../../config/config";

export function createCharacter(primary, secondary) {
  let skill_list = [
    "Acrobatics",
    "Athletics",
    "Conspiricy",
    "Insight",
    "Interaction",
    "Mechanics",
    "Nature",
    "Perception",
    "Science",
    "Stealth"
  ];
  let name_list = [
    "Seymour",
    "Sandridge",
    "Janice",
    "Jasmin",
    "Cheree",
    "Constantine",
    "Suzann",
    "Soucie",
    "Janie",
    "Jarrard",
    "Wen",
    "Wojtowicz",
    "Catherin",
    "Class",
    "Latrina",
    "Liggett",
    "Stella",
    "Slick",
    "Felice",
    "Forney",
    "Ellan",
    "Eckhardt",
    "Lisbeth",
    "Lares",
    "Kurtis",
    "Keeley",
    "Reina",
    "Roop",
    "Christene",
    "Craney",
    "Karole",
    "Klosterman",
    "Laverna",
    "Larocque",
    "Ehtel",
    "Esquer",
    "Dino",
    "Daily",
    "Spencer",
    "Samson"
  ];

  var randName = name_list[Math.floor(Math.random() * name_list.length)];
  var randSkill = skill_list[Math.floor(Math.random() * skill_list.length)];

  const skillSet = compareThreeSkills(
    primary.skill.toLowerCase().trim(),
    secondary.skill.toLowerCase().trim(),
    randSkill.toLowerCase().trim()
  );

  const ocb = overCharge(primary.bonus.trim(), secondary.bonus.trim());
  const score = abilityScores(primary.ability.trim(), secondary.ability.trim());

  let char_data = {
    name: randName,
    origin1_first: primary.origin,
    origin2_second: secondary.origin,

    hp: setStartHP(score.CON),
    constitution: score.CON,
    strength: score.STR,
    wisdom: score.WIS,
    dexterity: score.DEX,
    charisma: score.CHA,
    intelligence: score.INT,

    skill1_mod: skillSet.skill1mod,
    skill1: skillSet.skill1ability,
    skill2_mod: skillSet.skill2mod,
    skill2: skillSet.skill2ability,
    skill3_mod: skillSet.skill3mod,
    skill3: skillSet.skill3ability,

    overcharge_bonus1: ocb.overChargeBonus1,
    overcharge_bonus2: ocb.overChargeBonus2,

    ac: primary.ac + secondary.ac + 10,
    fort: primary.fort + secondary.fort + 10,
    ref: primary.ref + secondary.ref + 10,
    will: primary.will + secondary.will + 10,

    defense1: primary.defense,
    defense2: secondary.defense,
    defense_ability1: primary.lvl_1,
    defense_ability2: secondary.lvl_1,

    critical1: primary.lvl_2_or_6,
    critical2: secondary.lvl_2_or_6,

    novice_1: primary.novice,
    novice_2: secondary.novice,

    utility_1: primary.utility,
    utility_2: secondary.utility,
    expert_1: primary.expert,
    expert_2: secondary.expert
  };

  return char_data;
}
