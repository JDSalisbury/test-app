<template>
  <div class="table-area" v-if="char.gear.length > 0">
    <table>
      <tr>
        <th>Name</th>
        <th>Note</th>
        <th>AC Bonus</th>
        <th>Equip</th>
      </tr>
      <tr v-for="(item, index) in char.gear" :key="index">
        <td>{{ item.name }}</td>
        <td>{{ item.note }}</td>
        <td>{{ item.ac_bonus }}</td>
        <td>{{ item.equipped }}</td>
      </tr>
    </table>
  </div>
  <div v-else>
    <br />No gear...
  </div>
</template>
<style>
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
export default {
  props: ["char"],
  components: {},
  methods: {}
};
</script>