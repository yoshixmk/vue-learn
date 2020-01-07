<template>
  <div>
    <select v-model="current">
      <option
        v-for="topic in topics"
        v-bind:key="topic.key"
        v-bind:value="topic.value"
      >
        {{ topic.name }}
      </option>
    </select>
    <div v-for="item in list" v-bind:key="item.key">{{ item.full_name }}</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      list: [],
      current: "",
      topics: [
        { value: "vue", name: "Vue.js" },
        { value: "jQuery", name: "jQuery" }
      ]
    };
  },
  watch: {
    current: function(val) {
      // GitHubのAPIからトピックのリポジトリを検索
      axios
        .get("https://api.github.com/search/repositories", {
          params: {
            q: "topic:" + val
          }
        })
        .then(
          function(response) {
            this.list = response.data.items;
          }.bind(this)
        );
    }
  }
};
</script>

<style scoped></style>
