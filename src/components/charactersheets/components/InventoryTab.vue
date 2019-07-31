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
            <v-btn @click="deleteItem(item.id)">X</v-btn>
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
      cost: ""
    };
  },
  computed: { ...mapGetters(["getKey"]) },
  methods: {
    ...mapActions(["addInventory", "deleteInventory"]),
    reset() {
      this.$refs.form.reset();
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
      this.$refs.form.reset();
    },
    deleteItem(id) {
      const info = {
        key: this.getKey.key,
        id: id
      };
      this.deleteInventory(info);
    }
  }
};
</script>
