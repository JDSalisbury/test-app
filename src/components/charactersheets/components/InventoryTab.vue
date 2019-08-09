<template>
  <div>
    <div>
      <div class="table-area" v-if="char.inventory_items && char.inventory_items.length > 0">
        <table>
          <tr>
            <th style="width: 15%">Name</th>
            <th style="width: 60%">Note</th>
            <th style="width: 10%">Quantity</th>
            <th style="width: 10%">Cost</th>
            <th style="width: 5%"></th>
          </tr>
          <tr v-for="(item, index) in char.inventory_items" :key="index">
            <td>
              <v-text-field v-model="item.name"></v-text-field>
            </td>
            <td>
              <v-text-field v-model="item.note"></v-text-field>
            </td>
            <td>
              <v-text-field v-model="item.quantity"></v-text-field>
            </td>
            <td>
              <v-text-field v-model="item.cost"></v-text-field>
            </td>
            <td>
              <div class="btnDiv">
                <v-btn @click="deleteItem(item.id)" class="mx-2" fab dark small color="red">
                  <v-icon dark>delete</v-icon>
                </v-btn>
                <v-btn @click="editItem(item, index)" class="mx-2" fab dark small color="cyan">
                  <v-icon dark>save</v-icon>
                </v-btn>
              </div>
            </td>
          </tr>
        </table>
      </div>

      <div v-else>
        <br />No Invetory items...
      </div>
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
              <v-text-field v-model="quantity" label="Quantity" required></v-text-field>
            </v-flex>
            <v-flex xs8>
              <v-text-field v-model="cost" label="Cost" required></v-text-field>
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
</style>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: ["char"],
  data() {
    return {
      name: "",
      note: "",
      quantity: "",
      cost: "",
      edit: false,
      id: "",
      index: ""
    };
  },
  computed: { ...mapGetters(["getKey"]) },
  methods: {
    ...mapActions(["addInventory", "deleteInventory", "updateInventory"]),
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
          quantity: this.quantity,
          cost: this.cost
        }
      };
      this.addInventory(info);
      this.reset();
    },
    deleteItem(id) {
      const info = {
        key: this.getKey.key,
        id: id
      };
      this.deleteInventory(info);
    },
    editItem(item, index) {
      this.id = item.id;
      this.name = item.name;
      this.note = item.note;
      this.quantity = item.quantity;
      this.cost = item.cost;
      this.index = index;
      const info = {
        key: this.getKey.key,
        id: this.id,
        data: {
          gammaCharacterSheet: this.char.id,
          name: this.name,
          note: this.note,
          quantity: this.quantity,
          cost: this.cost
        }
      };
      this.updateInventory(info);
      this.reset();
    }
  }
};
</script>
