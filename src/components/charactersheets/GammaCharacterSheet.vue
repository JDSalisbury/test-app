<template>
  <div class="play">
    <form action="/action_page.php">
      <div id="gamma-charactersheet">
        <div class="soft-info">
          <div>
            <v-toolbar color="pink" dark>
              <v-text-field
                persistent-hint="true"
                :hint="originHint(oneCharacter.origin1_first, oneCharacter.origin2_second)"
                class="headline"
                v-model="oneCharacter.name"
                required
              ></v-text-field>
            </v-toolbar>
            <v-card>
              <v-container fluid grid-list-lg>
                <v-layout row wrap>
                  <v-flex xs12>
                    <v-card color="blue-grey darken-3" class="white--text">
                      <v-card-title>
                        <v-img
                          v-if="oneCharacter.image !== null"
                          :src="oneCharacter.image"
                          max-height="200px"
                          contain
                          alt="pic"
                        ></v-img>
                        <v-img
                          v-else
                          max-height="200px"
                          contain
                          alt="Vue logo"
                          :src="require('../../assets/dogo.png')"
                        ></v-img>
                      </v-card-title>
                      <v-card-actions>
                        <v-text-field dark v-model="oneCharacter.lvl" label="LVL" required></v-text-field>
                      </v-card-actions>
                    </v-card>
                  </v-flex>

                  <v-flex xs12>
                    <v-card color="cyan darken-2" class="white--text">
                      <v-layout row>
                        <v-flex xs4>
                          <v-text-field required label="HP" v-model="oneCharacter.hp"></v-text-field>
                        </v-flex>
                        <v-flex xs4>
                          <v-text-field required label="Temp"></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-divider light></v-divider>

                      <v-card-actions class="pa-3">
                        <div>
                          <v-text-field
                            label="STR"
                            readonly
                            type="number"
                            v-model="oneCharacter.strength"
                            size="4"
                          ></v-text-field>
                          <span>{{abilityModified(oneCharacter.strength)}}</span>
                        </div>
                        <div>
                          <v-text-field
                            label="CON"
                            readonly
                            type="number"
                            v-model="oneCharacter.constitution"
                          ></v-text-field>
                          <span>{{abilityModified(oneCharacter.constitution)}}</span>
                        </div>
                        <div>
                          <v-text-field
                            label="DEX"
                            readonly
                            type="number"
                            v-model="oneCharacter.dexterity"
                          ></v-text-field>
                          <span>{{abilityModified(oneCharacter.dexterity)}}</span>
                        </div>
                        <div>
                          <v-text-field
                            label="INT"
                            readonly
                            type="number"
                            v-model="oneCharacter.intelligence"
                          ></v-text-field>
                          <span>{{abilityModified(oneCharacter.intelligence)}}</span>
                        </div>
                        <div>
                          <v-text-field
                            label="WIS"
                            readonly
                            type="number"
                            v-model="oneCharacter.wisdom"
                          ></v-text-field>
                          <span>{{abilityModified(oneCharacter.wisdom)}}</span>
                        </div>
                        <div>
                          <v-text-field
                            label="CHA"
                            readonly
                            type="number"
                            v-model="oneCharacter.charisma"
                          ></v-text-field>
                          <span>{{abilityModified(oneCharacter.charisma)}}</span>
                        </div>
                      </v-card-actions>
                      <v-card-actions>
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
                      </v-card-actions>
                    </v-card>
                  </v-flex>

                  <v-flex xs12>
                    <v-card color="purple" class="white--text">
                      <v-layout row>
                        <v-flex xs12>
                          <v-card-title primary-title>
                            <div class="skills">
                              <h4>Skills</h4>
                              <span
                                v-if="oneCharacter.skill1 !== ''"
                              >{{capString(oneCharacter.skill1)}}</span>
                              <span
                                v-if="oneCharacter.skill1_mod !== 0"
                              >{{" "}}{{ oneCharacter.skill1_mod}}</span>
                              <br>
                              <span
                                v-if="oneCharacter.skill2 !== ''"
                              >{{capString(oneCharacter.skill2)}}</span>
                              <span
                                v-if="oneCharacter.skill2_mod !== 0"
                              >{{" "}}{{ oneCharacter.skill2_mod}}</span>
                              <br>
                              <span
                                v-if="oneCharacter.skill3 !== ''"
                              >{{capString(oneCharacter.skill3)}}</span>
                              <span
                                v-if="oneCharacter.skill3_mod !== 0"
                              >{{" "}}{{ oneCharacter.skill3_mod}}</span>
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
                          </v-card-title>
                        </v-flex>
                      </v-layout>
                      <v-divider light></v-divider>
                      <v-card-actions class="pa-3">
                        <UploadImage/>

                        <div class="buttons">
                          <input type="submit" value="Submit">
                        </div>
                      </v-card-actions>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </div>
        </div>

        <div class="novice-skills">
          <v-card>
            <v-container>
              <v-card-title>
                <h4>Novice</h4>
              </v-card-title>
              <div>
                <textarea rows="5" cols="50" readonly v-model="oneCharacter.novice_1"></textarea>
                <v-divider light></v-divider>
                <textarea rows="5" cols="50" readonly v-model="oneCharacter.novice_2"></textarea>
              </div>
            </v-container>
          </v-card>
        </div>

        <div class="def-abilities">
          <v-card>
            <v-container>
              <v-card-title>Defense Abilities</v-card-title>
              <div class="defenses">
                <textarea
                  v-if="oneCharacter.defense1.length > 8"
                  cols="50"
                  readonly
                  v-model="oneCharacter.defense1"
                ></textarea>
                <v-divider light></v-divider>

                <textarea
                  v-if="oneCharacter.defense2.length > 8"
                  cols="50"
                  readonly
                  v-model="oneCharacter.defense2"
                ></textarea>
                <v-divider light></v-divider>

                <textarea
                  v-if="oneCharacter.defense_ability1 !== ''"
                  cols="50"
                  readonly
                  v-model="oneCharacter.defense_ability1"
                ></textarea>
                <v-divider light></v-divider>

                <textarea
                  v-if="oneCharacter.defense_ability2 !== ''"
                  cols="50"
                  readonly
                  v-model="oneCharacter.defense_ability2"
                ></textarea>
              </div>
            </v-container>
          </v-card>
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
} from "../../config/config.js";
import UploadImage from "../charactersheets/ImageUpload";
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
    UploadImage
  },
  computed: {
    ...mapGetters(["getKey"]),
    ...mapGetters(["oneCharacter"])
  },
  methods: {
    ...mapActions(["fetchCharacter"]),
    capString,
    abilityModified,
    setOverChargeMod,
    originHint(first, second) {
      return first + " " + second;
    }
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