<template>
  <div class="home-wrap container">
    <banner></banner>
    <recommend-songs></recommend-songs>
    <recommend-music></recommend-music>
  </div>
</template>

<script>
import Banner from "components/home/banner/Index";
import RecommendSongs from "components/home/recommend-songs/Index";
import RecommendMusic from "components/home/recommend-music/Index";
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    Banner,
    RecommendMusic,
    RecommendSongs
  },
  methods: {},
  created() {},
  mounted() {}
};
</script>

<style></style>
