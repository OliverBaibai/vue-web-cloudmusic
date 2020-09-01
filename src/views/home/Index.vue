<template>
  <div class="home-wrap container">
    <banner></banner>
    <recommend-music></recommend-music>
  </div>
</template>

<script>
import Banner from "components/home/banner/Index";
import RecommendMusic from "components/home/recommend-music/Index";
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    Banner,
    RecommendMusic
  },
  methods: {},
  created: {},
  mounted: {}
};
</script>

<style></style>
