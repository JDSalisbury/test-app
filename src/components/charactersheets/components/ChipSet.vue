<template>
  <div>
    <div>
      <Chip
        color="deep-purple"
        textColor="white"
        avatarClassColor="deep-purple darken-4"
        text="AC"
        :avatar="
                                  addToCompareTwo(
                                    abilityMod(char.dexterity),
                                    abilityMod(char.intelligence),
                                    char.ac + Number(char.lvl)
                                  )
                                "
      />
      <Chip
        color="deep-purple"
        textColor="white"
        text="FORT"
        avatarClassColor="deep-purple darken-4"
        :avatar="
                                  addToCompareTwo(
                                    abilityMod(char.strength),
                                    abilityMod(char.constitution),
                                    char.fort + Number(char.lvl)
                                  )
                                "
      />
      <Chip
        color="deep-purple"
        textColor="white"
        text="REF"
        avatarClassColor="deep-purple darken-4"
        :avatar="
                                  addToCompareTwo(
                                    abilityMod(char.dexterity),
                                    abilityMod(char.intelligence),
                                    char.ref + Number(char.lvl)
                                  )
                                "
      />
      <Chip
        color="deep-purple"
        textColor="white"
        text="WILL"
        avatarClassColor="deep-purple darken-4"
        :avatar="
                                  addToCompareTwo(
                                    abilityMod(char.wisdom),
                                    abilityMod(char.charisma),
                                    char.will + Number(char.lvl)
                                  )
                                "
      />
      <Chip
        color="deep-purple"
        textColor="white"
        text="Speed"
        avatarClassColor="deep-purple darken-4"
        :avatar="6"
      />
      <Chip
        color="deep-purple"
        textColor="white"
        text="Initiative"
        avatarClassColor="deep-purple darken-4"
        :avatar="
                                  Number(abilityMod(char.dexterity)) +
                                    Number(char.lvl)
                                "
      />
    </div>
  </div>
</template>

<script>
import Chip from "../../vuetify/chip";
import {
  capString,
  abilityMod,
  setOverChargeMod,
  addToCompareTwo
} from "../../../config/config.js";
export default {
  props: ["char"],
  components: {
    Chip
  },
  methods: {
    capString,
    abilityMod,
    setOverChargeMod,
    addToCompareTwo
  }
};
</script>