<template>
  <div>
    <div class="table-area" v-if="char.gear && char.gear.length > 0">
      <table>
        <tr>
          <th style="width: 15%">Name</th>
          <th style="width: 60%">Note</th>
          <th style="width: 10%">AC Bonus</th>
          <th style="width: 10%">Equipped</th>
          <th style="width: 5%"></th>
        </tr>
        <tr v-for="(item, index) in char.gear" :key="index">
          <td>
            <v-text-field v-model="item.name"></v-text-field>
          </td>
          <td>
            <v-text-field v-model="item.note"></v-text-field>
          </td>
          <td>
            <v-text-field disabled v-model="item.ac_bonus"></v-text-field>
          </td>
          <td>
            <!-- <v-text-field v-model="item.equipped"></v-text-field> -->
            <v-switch v-model="item.equipped" color="green"></v-switch>
          </td>
          <td>
            <div class="btnDiv">
              <v-btn @click="deleteItem(item.id)" class="mx-2" fab dark small color="red">
                <v-icon dark>delete</v-icon>
              </v-btn>
              <v-btn @click="editItem(item, index)" class="mx-2" fab dark small color="cyan">
                <div v-if="editStatus.status && editStatus.id === item.id">
                  <v-icon dark>check</v-icon>
                </div>
                <div v-else>
                  <v-icon dark>save</v-icon>
                </div>
              </v-btn>
            </div>
          </td>
        </tr>
      </table>
    </div>
    <div v-else>
      <br />No gear...
    </div>
    <div>
      <v-layout column align-center>
        <v-form ref="form">
          <v-layout row>
            <v-flex xs8>
              <v-text-field v-model="name" label="Name" required></v-text-field>
            </v-flex>
            <v-flex xs8>
              <v-text-field v-model="note" label="Note" required></v-text-field>
            </v-flex>
            <v-flex xs8>
              <v-text-field v-model="ac_bonus" label="AC Bonus" required></v-text-field>
            </v-flex>
            <v-flex xs8>
              <v-switch v-model="equipped" label="Equip" color="green"></v-switch>
            </v-flex>
          </v-layout>
          <v-btn class="mr-4" @click="send">Submit</v-btn>
          <v-btn class="mr-4" @click="reset">Reset</v-btn>
        </v-form>
      </v-layout>
    </div>
  </div>
</template>
<style scope>
.btnDiv {
  display: flex;
  margin: 0;
}

.table-area {
  margin: 0px;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
.v-input {
  margin-bottom: -17px;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 3px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

.v-input--switch__track,
.success--text {
  color: green;
}
</style>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props: ["char"],
  data() {
    return {
      name: "",
      note: "",
      ac_bonus: "",
      equipped: false,
      edit: false,
      id: "",
      index: ""
    };
  },
  computed: { ...mapGetters(["getKey", "editStatus"]) },

  components: {},
  methods: {
    ...mapActions(["addGear", "deleteGear", "updateGear"]),
    reset() {
      this.$refs.form.reset();
      this.edit = false;
      this.id = "";
      this.index = "";
    },
    send() {
      const info = {
        key: this.getKey.key,
        data: {
          gammaCharacterSheet: this.char.id,
          name: this.name,
          note: this.note,
          ac_bonus: this.ac_bonus,
          equipped: this.equipped
        }
      };
      this.addGear(info);
      this.reset();
    },
    deleteItem(id) {
      const info = {
        key: this.getKey.key,
        id: id
      };
      this.deleteGear(info);
    },
    editItem(item, index) {
      this.id = item.id;
      this.name = item.name;
      this.note = item.note;
      this.ac_bonus = item.ac_bonus;
      this.equipped = item.equipped;
      this.index = index;
      const info = {
        key: this.getKey.key,
        id: this.id,
        data: {
          gammaCharacterSheet: this.char.id,
          name: this.name,
          note: this.note,
          ac_bonus: this.ac_bonus,
          equipped: this.equipped
        }
      };
      this.updateGear(info);
      this.reset();
    }
  }
};
</script>
