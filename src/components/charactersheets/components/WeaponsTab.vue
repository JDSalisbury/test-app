<template>
  <div class="table-area" v-if="char.weapons && char.weapons.length > 0">
    <table>
      <tr>
        <th>Name</th>
        <th>Note</th>
        <th>Dice</th>
        <th>Bonus</th>
        <th>Accuracy</th>
        <th>Ability Mod</th>
        <th>Equipped</th>
      </tr>
      <tr v-for="(item, index) in char.weapons" :key="index">
        <td>{{ item.name }}</td>
        <td>{{ item.note }}</td>
        <td>{{ item.dice }}</td>
        <td>{{ item.bonus }}</td>
        <td>{{ item.accuracy }}</td>
        <td>{{ item.ability_modifier }}</td>
        <td>{{ item.equipped }}</td>
      </tr>
    </table>
  </div>
  <div v-else><br />No weapons...</div>
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
