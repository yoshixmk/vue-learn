<template>
  <ul>
    <li v-for="item in list" v-bind:key="item.id">
      ID.{{ item.id }} {{ item.name }} {{ item.hp }}
    </li>
  </ul>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      list: []
    };
  },
  created: function() {
    axios
      .get("list.json")
      .then(
        function(res) {
          this.list = res.data;
        }.bind(this)
      )
      .catch(function(e) {
        alert(e);
      });
  }
};
</script>

<style scoped></style>
