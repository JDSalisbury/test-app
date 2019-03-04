export function createCharacter(primary, secondary) {
  let randNum = Math.floor(Math.random() * 10) + 7;
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

  let char_data = {
    name: randName,
    origin_primary: primary.origin,
    origin_secondary: secondary.origin,
    ability_primary: primary.ability,
    ability_secondary: secondary.ability,
    skill_primary: primary.skill,
    skill_secondary: secondary.skill,
    bonus_primary: primary.bonus,
    bonus_secondary: secondary.bonus,
    ac: primary.ac + secondary.ac,
    fort: primary.fort + secondary.fort,
    ref: primary.ref + secondary.ref,
    will: primary.will + secondary.will,
    defense_primary: primary.defense,
    defense_secondary: secondary.defense,
    lvl_1_primary: primary.lvl_1,
    lvl_1_secondary: secondary.lvl_1,
    lvl_2_or_6_primary: primary.lvl_2_or_6,
    lvl_2_or_6_secondary: secondary.lvl_2_or_6,
    novice_primary: primary.novice,
    novice_secondary: secondary.novice,
    utility_primary: primary.utility,
    utility_secondary: secondary.utility,
    expert_primary: primary.expert,
    expert_secondary: secondary.expert,
    random_skill: randNum
  };
  return char_data;
}
