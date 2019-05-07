export function diceRoll(numOfDice, sidesOnDice, mod) {
  let total = 0;

  for (let i = 1; i <= numOfDice; i++) {
    total += Math.floor(Math.random() * sidesOnDice + 1);
  }
  return total + mod;
}

export function statsRoll() {
  let total = [];
  for (let i = 1; i <= 4; i++) {
    total.push(Math.floor(Math.random() * 6 + 1));
  }

  let low = Math.min.apply(null, total);

  total.splice(total.indexOf(low), 1);

  return total.reduce((a, b) => a + b);
}

export function capString(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function abilityMod(ability) {
  ability = ability - 10;
  ability = Math.floor(ability / 2);
  return ability === 0 ? "0" : ability;
}

export function setStartHP(con) {
  let hp = 0;
  con = abilityMod(con);
  hp = con + 12;
  return hp;
}

export function compareTwo(a, b) {
  return a >= b ? a : b;
}

export function addToCompareTwo(a, b, c) {
  return compareTwo(a, b) + c;
}

export function setOverChargeMod(ocOne, ocTwo) {
  return ocOne === "" || ocTwo === "" ? 8 : 4;
}

export function compareThreeSkills(skill1, skill2, skill3) {
  let set = {
    skill1mod: 0,
    skill2mod: 0,
    skill3mod: 0,
    skill1ability: "",
    skill2ability: "",
    skill3ability: ""
  };

  if (skill1 == skill2 && skill1 == skill3) {
    set.skill1mod = 12;
    set.skill1ability = skill1;
  }

  if (skill1 != skill2 && skill1 != skill3 && skill2 != skill3) {
    set.skill1mod = 4;
    set.skill2mod = 4;
    set.skill3mod = 4;
    set.skill1ability = skill1;
    set.skill2ability = skill2;
    set.skill3ability = skill3;
  }

  if (skill1 == skill2 && skill1 != skill3) {
    set.skill1mod = 8;
    set.skill1ability = skill1;
    set.skill3mod = 4;
    set.skill3ability = skill3;
  }

  if (skill1 != skill2 && skill1 == skill3) {
    set.skill1mod = 8;
    set.skill1ability = skill1;
    set.skill2mod = 4;
    set.skill2ability = skill2;
  }

  if (skill1 != skill2 && skill2 == skill3) {
    set.skill2mod = 8;
    set.skill2ability = skill2;
    set.skill1mod = 4;
    set.skill1ability = skill1;
  }

  return set;
}

export function abilityScores(prime, second) {
  let abilities = {
    STR: 0,
    CON: 0,
    DEX: 0,
    INT: 0,
    WIS: 0,
    CHA: 0
  };

  if (prime.toUpperCase() == second.toUpperCase()) {
    abilities[prime] = 20;
  }

  if (prime.toUpperCase() != second.toUpperCase()) {
    abilities[prime] = 18;
    abilities[second] = 16;
  }
  if (abilities.STR === 0) {
    abilities.STR = statsRoll();
  }

  if (abilities.CON === 0) {
    abilities.CON = statsRoll();
  }

  if (abilities.INT === 0) {
    abilities.INT = statsRoll();
  }

  if (abilities.WIS === 0) {
    abilities.WIS = statsRoll();
  }

  if (abilities.DEX === 0) {
    abilities.DEX = statsRoll();
  }

  if (abilities.CHA === 0) {
    abilities.CHA = statsRoll();
  }

  return abilities;
}

export function overCharge(ob1, ob2) {
  let overChargeBonus = {
    overChargeBonus1: ob1,
    overChargeBonus2: ob2
  };

  if (ob1 == ob2) {
    overChargeBonus.overChargeBonus2 = "";
  }

  return overChargeBonus;
}
// let addFort = 0;
// let addRef = 0;
// let addWill = 0;

// if (str > con) {
//   addFort = abilityMod(str);
// } else {
//   addFort = abilityMod(con);
// }

// if (dex > int) {
//   addRef = abilityMod(dex);
// } else {
//   addRef = abilityMod(int);
// }

// if (wis > cha) {
//   addWill = abilityMod(wis);
// } else {
//   addWill = abilityMod(cha);
// }
