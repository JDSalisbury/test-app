<template>
  <div class="play">
    <form enctype="multipart/form-data" @submit.prevent="handleSubmit">
      <div id="gamma-charactersheet">
        <div class="soft-info">
          <div>
            <v-toolbar color="light-blue darken-3" dark>
              <v-text-field
                persistent-hint
                :hint="
                  originHint(char.origin1_first, char.origin2_second).toString()
                "
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
                        <v-text-field dark v-model="char.lvl" label="LVL" required></v-text-field>
                      </v-card-actions>
                    </v-card>
                  </v-flex>

                  <v-flex xs12>
                    <v-card color="light-blue lighten-2">
                      <v-layout id="hp" row>
                        <v-flex xs4>
                          <v-text-field required label="HP" v-model="char.hp"></v-text-field>
                        </v-flex>
                        <v-flex xs4>
                          <v-text-field v-model="char.temp" label="Temp"></v-text-field>
                        </v-flex>
                      </v-layout>
                      <v-divider light></v-divider>

                      <AbilityCard :char="char" />
                      <v-card-actions>
                        <div class="saves">
                          <ChipSet :char="char" />
                        </div>
                      </v-card-actions>
                    </v-card>
                  </v-flex>

                  <v-flex>
                    <v-card color="blue-grey lighten-1">
                      <v-layout class="skills">
                        <div>
                          <SkillsCard :char="char" />
                        </div>
                        <div>
                          <OverChargeCard :char="char" />
                        </div>
                      </v-layout>
                      <v-divider light></v-divider>
                      <div class="buttons pa-1">
                        <input @click="showPicture" type="button" value="Change Picture" />
                      </div>
                      <v-flex v-if="changePicture">
                        <v-text-field v-model="char.image" label="Pic Url"></v-text-field>
                      </v-flex>
                      <div class="buttons pa-1">
                        <div v-if="editStatus.status && editStatus.id === char.id">
                          <input type="submit" value="Saved!" />
                        </div>
                        <div v-else>
                          <input type="submit" value="Submit" />
                        </div>
                      </div>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </div>
        </div>
        <v-card class="tabs scroll">
          <div>
            <v-tabs
              class="fixed-tabs-bar"
              grow
              v-model="active"
              color="light-blue darken-3"
              dark
              slider-color="white"
            >
              <v-tab ripple :key="1">Defense Abilities</v-tab>
              <v-tab ripple :key="2">Novice</v-tab>
              <v-tab ripple :key="3">Inventory</v-tab>
              <v-tab ripple :key="4">Gear</v-tab>
              <v-tab ripple :key="5">Weapons</v-tab>

              <v-tab-item>
                <v-card :key="1" flat>
                  <DefenseTabCard
                    :def="char.defense1"
                    :defTwo="char.defense2"
                    :defAb="char.defense_ability1"
                    :defAbTwo="char.defense_ability2"
                  />
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card :key="2" flat>
                  <NoviceTabCard :novOne="char.novice_1" :novTwo="char.novice_2" />
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card :key="3" flat>
                  <InventoryTab :char="char" />
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card :key="4" flat>
                  <GearTab :char="char" />
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card :key="5" flat>
                  <WeaponTab :char="char" />
                </v-card>
              </v-tab-item>
            </v-tabs>
          </div>
        </v-card>
      </div>
    </form>
  </div>
</template>
<style scope>
.scroll {
  overflow-y: auto;
}
.fixed-tabs-bar .v-tabs__bar {
  position: -webkit-sticky;
  position: sticky;
  top: 0rem;
  z-index: 2;
}
</style>

<script>
import { mapGetters, mapActions } from "vuex";
import {
  capString,
  abilityMod,
  setOverChargeMod,
  addToCompareTwo
} from "../../config/config.js";
import ProfileImage from "../charactersheets/components/ProfileImage";
import DefenseTabCard from "../charactersheets/components/DefenseTabCard";
import NoviceTabCard from "../charactersheets/components/NoviceAbilitiesTabCard";
import AbilityCard from "../charactersheets/components/AbilityCard";
import ChipSet from "../charactersheets/components/ChipSet";
import SkillsCard from "../charactersheets/components/SkillsCard";
import OverChargeCard from "../charactersheets/components/OverChargeCard";
import InventoryTab from "../charactersheets/components/InventoryTab";
import GearTab from "../charactersheets/components/GearTab";
import WeaponTab from "../charactersheets/components/WeaponsTab";
//(Ability Score – 10) / 2

export default {
  data() {
    return {
      id: this.$route.params.id,
      changePicture: false
    };
  },
  name: "play",
  components: {
    ChipSet,
    AbilityCard,
    ProfileImage,
    DefenseTabCard,
    NoviceTabCard,
    SkillsCard,
    OverChargeCard,
    InventoryTab,
    GearTab,
    WeaponTab
  },
  computed: {
    ...mapGetters(["getKey", "editStatus", "char", "gearAc"])
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
    showPicture() {
      this.changePicture = !this.changePicture;
    },
    handleSubmit() {
      const info = {
        key: this.getKey.key,
        id: this.id,
        data: {
          name: this.char.name,
          lvl: this.char.lvl,
          image: this.char.image,
          temp: this.char.temp,
          hp: this.char.hp
        }
      };

      this.updateCharacter(info);
    }
  },
  created() {
    const info = {
      key: this.getKey.key,
      id: this.id
    };
    this.fetchCharacter(info);
    console.log(this.gearAc);
  }
};
</script>
