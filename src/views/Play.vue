<template>
  <div class="play">
    <Navbar />
    <div id="gamma-charactersheet">
      <img
        v-if="oneCharacter.image !== null"
        style="height:200px"
        v-bind:src="oneCharacter.image"
        alt
      />
      <img v-else alt="Vue logo" src="../assets/dogo.png" />
      <h1>Charactersheet</h1>
      <h2>{{ oneCharacter.name }}</h2>
      <form action="/action_page.php">
        Name:
        <br />
        <input v-model="oneCharacter.name" type="text" />
        LVL
        <input v-model="oneCharacter.lvl" type="text" />
        HP:
        <input v-model="oneCharacter.hp" type="text" />
        <br />Origins
        <br />
        <input readonly type="text" v-model="oneCharacter.origin1_first" />
        <input readonly type="text" v-model="oneCharacter.origin2_second" />
        <br />
        <br />STR
        <input readonly type="number" v-model="oneCharacter.strength" />
        <br />CON
        <input readonly type="number" v-model="oneCharacter.constitution" />
        <br />DEX
        <input readonly type="number" v-model="oneCharacter.dexterity" />
        <br />INT
        <input readonly type="number" v-model="oneCharacter.intelligence" />
        <br />WIS
        <input readonly type="number" v-model="oneCharacter.wisdom" />
        <br />CHA
        <input readonly type="number" v-model="oneCharacter.charisma" />
        <br />
        <br />AC
        <input readonly type="number" v-model="oneCharacter.ac" />
        <br />FORT
        <input readonly type="number" v-model="oneCharacter.fort" />
        <br />REF
        <input readonly type="number" v-model="oneCharacter.ref" />
        <br />WILL
        <input readonly type="number" v-model="oneCharacter.will" />
        <br />
        <input
          v-if="oneCharacter.skill1 !== ''"
          readonly
          type="text"
          v-model="oneCharacter.skill1"
        />
        <input
          v-if="oneCharacter.skill1_mod !== 0"
          readonly
          type="number"
          v-model="oneCharacter.skill1_mod"
        />

        <br />
        <input
          v-if="oneCharacter.skill2 !== ''"
          readonly
          type="text"
          v-model="oneCharacter.skill2"
        />
        <input
          v-if="oneCharacter.skill2_mod !== 0"
          readonly
          type="number"
          v-model="oneCharacter.skill2_mod"
        />
        <br />
        <input
          v-if="oneCharacter.skill3 !== ''"
          readonly
          type="text"
          v-model="oneCharacter.skill3"
        />
        <input
          v-if="oneCharacter.skill3_mod !== 0"
          readonly
          type="number"
          v-model="oneCharacter.skill3_mod"
        />
        <br />
        <br />

        <input
          v-if="oneCharacter.overcharge_bonus1 !== ''"
          readonly
          type="text"
          v-model="oneCharacter.overcharge_bonus1"
        />
        <input
          v-if="oneCharacter.overcharge_bonus2 !== ''"
          readonly
          type="text"
          v-model="oneCharacter.overcharge_bonus2"
        />

        <br />Novice
        <br />
        <textarea
          rows="5"
          cols="50"
          readonly
          v-model="oneCharacter.novice_1"
        ></textarea>
        <textarea
          rows="5"
          cols="50"
          readonly
          v-model="oneCharacter.novice_2"
        ></textarea>
        <br />
        <br />Defense Abilities
        <br />
        <textarea
          v-if="oneCharacter.defense1.length > 8"
          rows="5"
          cols="50"
          readonly
          v-model="oneCharacter.defense1"
        ></textarea>
        <br />
        <textarea
          v-if="oneCharacter.defense2.length > 8"
          rows="5"
          cols="50"
          readonly
          v-model="oneCharacter.defense2"
        ></textarea>
        <br />
        <textarea
          v-if="oneCharacter.defense_ability1 !== ''"
          rows="5"
          cols="50"
          readonly
          v-model="oneCharacter.defense_ability1"
        ></textarea>
        <textarea
          v-if="oneCharacter.defense_ability2 !== ''"
          rows="5"
          cols="50"
          readonly
          v-model="oneCharacter.defense_ability2"
        ></textarea>
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <br />
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import Navbar from "@/components/navigation/Nav.vue";
//(Ability Score – 10) / 2
export default {
  data() {
    console.log(this.data);
    return {
      id: this.$route.params.id
    };
  },
  name: "play",
  components: {
    Navbar
  },
  computed: {
    ...mapGetters(["getKey"]),
    ...mapGetters(["oneCharacter"])
  },
  methods: {
    ...mapActions(["fetchCharacter"])
  },
  created() {
    const info = {
      key: this.getKey.key,
      id: this.id
    };
    this.fetchCharacter(info);
  }
};
</script>
