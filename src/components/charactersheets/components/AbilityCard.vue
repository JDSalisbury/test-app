<template>
  <v-card-actions class="pa-3">
    <div>
      <Ability label="STR" :vModel="char.strength" />
    </div>
    <div>
      <Ability label="CON" :vModel="char.constitution" />
    </div>
    <div>
      <Ability label="DEX" :vModel="char.dexterity" />
    </div>
    <div>
      <Ability label="INT" :vModel="char.intelligence" />
    </div>
    <div>
      <Ability label="WIS" :vModel="char.wisdom" />
    </div>
    <div>
      <Ability label="CHA" :vModel="char.charisma" />
    </div>
  </v-card-actions>
</template>

<script>
import Ability from "../../vuetify/ability";

export default {
  props: ["char"],
  components: {
    Ability
  }
};
</script>