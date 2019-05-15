<template>
  <div class="play">
    <form enctype="multipart/form-data" @submit.prevent="handleSubmit">
      <div id="gamma-charactersheet">
        <div class="soft-info">
          <div>
            <v-toolbar color="light-blue darken-3" dark>
              <v-text-field
                persistent-hint="true"
                :hint="originHint(char.origin1_first, char.origin2_second)"
                class="headline"
                v-model="char.name"
                required
              ></v-text-field>
            </v-toolbar>
            <v-card>
              <v-container fluid grid-list-lg>
                <v-layout row wrap>
                  <v-flex xs12>
                    <v-card color="blue-grey lighten-1">
                      <ProfileImage :img="char.image" />

                      <v-card-actions>
                        <v-text-field
                          dark
                          v-model="char.lvl"
                          label="LVL"
                          required
                        ></v-text-field>
                      </v-card-actions>
                    </v-card>
                  </v-flex>

                  <v-flex xs12>
                    <v-card color="light-blue lighten-2">
                      <v-layout id="hp" row>
                        <v-flex xs4>
                          <v-text-field
                            required
                            label="HP"
                            v-model="char.hp"
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs4>
                          <v-text-field required label="Temp"></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-divider light></v-divider>

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
                      <v-card-actions>
                        <div class="saves">
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
                        </div>
                      </v-card-actions>
                    </v-card>
                  </v-flex>

                  <v-flex>
                    <v-card color="blue-grey lighten-1">
                      <v-layout class="skills">
                        <div>
                          <v-card-title>
                            <v-card
                              color="light-blue darken-3"
                              class="white--text pa-2"
                            >
                              <h4>Skills</h4>
                              <span v-if="char.skill1 !== ''">
                                {{ capString(char.skill1) }}
                              </span>
                              <span v-if="char.skill1_mod !== 0"
                                >{{ " " }}{{ char.skill1_mod }}</span
                              >
                              <br />
                              <span v-if="char.skill2 !== ''">
                                {{ capString(char.skill2) }}
                              </span>
                              <span v-if="char.skill2_mod !== 0"
                                >{{ " " }}{{ char.skill2_mod }}</span
                              >
                              <br />
                              <span v-if="char.skill3 !== ''">
                                {{ capString(char.skill3) }}
                              </span>
                              <span v-if="char.skill3_mod !== 0"
                                >{{ " " }}{{ char.skill3_mod }}</span
                              >
                            </v-card>
                          </v-card-title>
                        </div>
                        <div>
                          <v-card-title>
                            <v-card
                              color="light-blue darken-3"
                              class="white--text pa-2"
                            >
                              <h4>OverCharge</h4>
                              <span v-if="char.overcharge_bonus1 !== ''">
                                {{ capString(char.overcharge_bonus1) }}
                              </span>
                              <span v-if="char.overcharge_bonus1 !== ''">
                                {{ " "
                                }}{{
                                  setOverChargeMod(
                                    char.overcharge_bonus1,
                                    char.overcharge_bonus2
                                  )
                                }}
                              </span>
                              <br />
                              <span v-if="char.overcharge_bonus2 !== ''">
                                {{ capString(char.overcharge_bonus2) }}
                              </span>
                              <span v-if="char.overcharge_bonus2 !== ''">
                                {{ " "
                                }}{{
                                  setOverChargeMod(
                                    char.overcharge_bonus1,
                                    char.overcharge_bonus2
                                  )
                                }}
                              </span>
                            </v-card>
                          </v-card-title>
                        </div>
                      </v-layout>
                      <v-divider light></v-divider>
                      <v-card-actions class="pa-1">
                        <UploadImage />
                        <div class="buttons pa-1">
                          <input type="submit" value="Submit" />
                        </div>
                      </v-card-actions>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </div>
        </div>
        <v-card class="tabs">
          <div>
            <v-tabs
              v-model="active"
              color="light-blue darken-3"
              dark
              slider-color="white"
            >
              <v-tab ripple :key="novice">Novice</v-tab>
              <v-tab ripple :key="defAbilities">Defense Abilities</v-tab>
              <v-tab-item>
                <v-card :key="novice" flat>
                  <NoviceTabCard
                    :novOne="char.novice_1"
                    :novTwo="char.novice_2"
                  />
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card :key="defAbilities" flat>
                  <DefenseTabCard
                    :def="char.defense1"
                    :defTwo="char.defense2"
                    :defAb="char.defense_ability1"
                    :defAbTwo="char.defense_ability2"
                  />
                </v-card>
              </v-tab-item>
            </v-tabs>
          </div>
        </v-card>

        <!-- <div v-if="char.inventory_items !== null" class="inventory">
          <h4>Inventory Items</h4>
          <textarea
            v-model="char.inventory_items[0].name"
            name="inventory"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div v-if="char.gear !== null" class="gear">
          <h4>Gear</h4>
          <textarea v-model="char.gear[0].name" name="gear" cols="30" rows="10"></textarea>
        </div>
        <div v-if="char.weapons !== null" class="weapons">
          <h4>Weapons</h4>
          <textarea v-model="char.weapons[0].name" name="weapons" cols="30" rows="10"></textarea>
        </div>-->
      </div>
    </form>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import {
  capString,
  abilityMod,
  setOverChargeMod,
  addToCompareTwo
} from "../../config/config.js";
import UploadImage from "../charactersheets/ImageUpload";
import ProfileImage from "../charactersheets/components/ProfileImage";
import DefenseTabCard from "../charactersheets/components/DefenseTabCard";
import NoviceTabCard from "../charactersheets/components/NoviceAbilitiesTabCard";
import Chip from "../vuetify/chip";
import Ability from "../vuetify/ability";
//(Ability Score – 10) / 2

export default {
  data() {
    console.log(this.data);
    return {
      id: this.$route.params.id,
      image: ""
    };
  },
  name: "play",
  components: {
    UploadImage,
    Chip,
    Ability,
    ProfileImage,
    DefenseTabCard,
    NoviceTabCard
  },
  computed: {
    ...mapGetters(["getKey"]),
    ...mapGetters(["char"])
  },
  methods: {
    ...mapActions(["fetchCharacter", "updateCharacter"]),
    capString,
    abilityMod,
    setOverChargeMod,
    addToCompareTwo,
    originHint(first, second) {
      return first + " " + second;
    },
    handleSubmit() {
      const info = {
        key: this.getKey.key,
        id: this.id,
        data: {
          name: this.char.name,
          lvl: this.char.lvl
        }
      };
      console.log(info);

      this.updateCharacter(info);
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
