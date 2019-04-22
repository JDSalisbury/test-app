<template>
  <div class="play">
    <Navbar/>
    <form action="/action_page.php">
      <div id="gamma-charactersheet">
        <div class="char-image">
          <img
            v-if="oneCharacter.image !== null"
            style="height:200px"
            v-bind:src="oneCharacter.image"
            alt
          >
          <img v-else alt="Vue logo" src="../assets/dogo.png">
        </div>
        <div class="soft-info">
          <div>
            <div>
              Name:
              <input v-model="oneCharacter.name" type="text">
            </div>
            <div>
              LVL:
              <input v-model="oneCharacter.lvl" type="text">
            </div>
            <div>
              Origins:
              <input readonly type="text" v-model="oneCharacter.origin1_first">
              <input readonly type="text" v-model="oneCharacter.origin2_second">
            </div>
          </div>
        </div>
        <div class="health">
          <div>
            HP:
            <input v-model="oneCharacter.hp" type="text">
          </div>
          <div>
            Temp:
            <input type="text">
          </div>
        </div>
        <div class="abilities">
          <div class="a-mod">
            <div>
              STR:
              <input readonly type="number" v-model="oneCharacter.strength" size="4">
              <span>{{abilityModified(oneCharacter.strength)}}</span>
            </div>
            <div>
              CON:
              <input readonly type="number" v-model="oneCharacter.constitution">
              <span>{{abilityModified(oneCharacter.constitution)}}</span>
            </div>
            <div>
              DEX:
              <input readonly type="number" v-model="oneCharacter.dexterity">
              <span>{{abilityModified(oneCharacter.dexterity)}}</span>
            </div>
            <div>
              INT:
              <input readonly type="number" v-model="oneCharacter.intelligence">
              <span>{{abilityModified(oneCharacter.intelligence)}}</span>
            </div>
            <div>
              WIS:
              <input readonly type="number" v-model="oneCharacter.wisdom">
              <span>{{abilityModified(oneCharacter.wisdom)}}</span>
            </div>
            <div>
              CHA:
              <input readonly type="number" v-model="oneCharacter.charisma">
              <span>{{abilityModified(oneCharacter.charisma)}}</span>
            </div>
          </div>
        </div>
        <div class="saves">
          <div>
            <div>
              AC:
              <input readonly type="number" v-model="oneCharacter.ac">
            </div>
            <div>
              FORT:
              <input readonly type="number" v-model="oneCharacter.fort">
            </div>
            <div>
              REF:
              <input readonly type="number" v-model="oneCharacter.ref">
            </div>
            <div>
              WILL:
              <input readonly type="number" v-model="oneCharacter.will">
            </div>
          </div>
        </div>
        <div class="skills">
          <h4>Skills</h4>
          <span v-if="oneCharacter.skill1 !== ''">{{capString(oneCharacter.skill1)}}</span>
          <span v-if="oneCharacter.skill1_mod !== 0">{{" "}}{{ oneCharacter.skill1_mod}}</span>
          <br>
          <span v-if="oneCharacter.skill2 !== ''">{{capString(oneCharacter.skill2)}}</span>
          <span v-if="oneCharacter.skill2_mod !== 0">{{" "}}{{ oneCharacter.skill2_mod}}</span>
          <br>
          <span v-if="oneCharacter.skill3 !== ''">{{capString(oneCharacter.skill3)}}</span>
          <span v-if="oneCharacter.skill3_mod !== 0">{{" "}}{{ oneCharacter.skill3_mod}}</span>
          <h4>OverCharge</h4>
          <span
            v-if="oneCharacter.overcharge_bonus1 !== ''"
          >{{capString(oneCharacter.overcharge_bonus1)}}</span>
          <span
            v-if="oneCharacter.overcharge_bonus1 !== ''"
          >{{" "}}{{ setOverChargeMod(oneCharacter.overcharge_bonus1, oneCharacter.overcharge_bonus2)}}</span>

          <span
            v-if="oneCharacter.overcharge_bonus2 !== ''"
          >{{capString(oneCharacter.overcharge_bonus2)}}</span>
          <span
            v-if="oneCharacter.overcharge_bonus2 !== ''"
          >{{" "}}{{ setOverChargeMod(oneCharacter.overcharge_bonus1, oneCharacter.overcharge_bonus2)}}</span>
        </div>
        <div class="novice-skills">
          <h4>Novice</h4>
          <textarea rows="5" cols="50" readonly v-model="oneCharacter.novice_1"></textarea>
          <textarea rows="5" cols="50" readonly v-model="oneCharacter.novice_2"></textarea>
        </div>
        <div class="def-abilities">
          Defense Abilities
          <textarea
            v-if="oneCharacter.defense1.length > 8"
            rows="5"
            cols="50"
            readonly
            v-model="oneCharacter.defense1"
          ></textarea>

          <textarea
            v-if="oneCharacter.defense2.length > 8"
            rows="5"
            cols="50"
            readonly
            v-model="oneCharacter.defense2"
          ></textarea>

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
        </div>
        <div class="buttons">
          <input type="submit" value="Submit">
        </div>
        <!-- <div v-if="oneCharacter.inventory_items !== null" class="inventory">
          <h4>Inventory Items</h4>
          <textarea
            v-model="oneCharacter.inventory_items[0].name"
            name="inventory"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div v-if="oneCharacter.gear !== null" class="gear">
          <h4>Gear</h4>
          <textarea v-model="oneCharacter.gear[0].name" name="gear" cols="30" rows="10"></textarea>
        </div>
        <div v-if="oneCharacter.weapons !== null" class="weapons">
          <h4>Weapons</h4>
          <textarea v-model="oneCharacter.weapons[0].name" name="weapons" cols="30" rows="10"></textarea>
        </div>-->
      </div>
    </form>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import {
  capString,
  abilityModified,
  setOverChargeMod
} from "../config/config.js";
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
    ...mapActions(["fetchCharacter"]),
    capString,
    abilityModified,
    setOverChargeMod
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
