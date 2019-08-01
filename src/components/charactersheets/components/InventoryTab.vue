<template>
  <div>
    <div>
      <div class="table-area" v-if="char.inventory_items && char.inventory_items.length > 0">
        <table>
          <tr>
            <th>Name</th>
            <th>Note</th>
            <th>Quantity</th>
            <th>Cost</th>
            <th></th>
          </tr>
          <tr v-for="(item, index) in char.inventory_items" :key="index">
            <td>{{ item.name }}</td>
            <td>{{ item.note }}</td>
            <td>{{ item.quantity }}</td>
            <td>{{ item.cost }}</td>
            <td>
              <div class="btnDiv">
                <v-btn @click="deleteItem(item.id)" class="btn" small color="red">
                  <v-icon dark>delete</v-icon>
                </v-btn>
                <v-btn @click="editItem(item)" class="btn" small color="cyan">
                  <v-icon dark>edit</v-icon>
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
.btn {
  margin-top: -8px !important;
  margin-bottom: -8px !important;
}
.table-area {
  margin: 5px;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
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
      id: ""
    };
  },
  computed: { ...mapGetters(["getKey"]) },
  methods: {
    ...mapActions(["addInventory", "deleteInventory", "updateInventory"]),
    reset() {
      this.$refs.form.reset();
      this.edit = false;
      this.id = "";
    },
    send() {
      if (!this.edit) {
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
      } else {
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
    },
    deleteItem(id) {
      const info = {
        key: this.getKey.key,
        id: id
      };
      this.deleteInventory(info);
    },
    editItem(item) {
      this.id = item.id;
      this.name = item.name;
      this.note = item.note;
      this.quantity = item.quantity;
      this.cost = item.cost;
      this.edit = true;
    }
  }
};
</script>
