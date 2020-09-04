<template>
  <div class="recommend-songs">
    <h2 class="title">推荐歌单</h2>
    <song-sheet :sheetList="personalizeds"></song-sheet>
  </div>
</template>

<script>
import songSheet from "components/common/songSheet/Index";
export default {
  data() {
    return {
      limit: 24,
      personalizeds: []
    };
  },
  components: {
    songSheet
  },
  computed: {},
  methods: {
    async getPersonalized() {
      try {
        let res = await this.$api.getPersonalized(this.limit);
        this.personalizeds = res.result;
      } catch (error) {
        console.log(error);
      }
    }
  },
  created() {},
  mounted() {
    this.getPersonalized();
  }
};
</script>

<style lang="stylus" scoped>
.recommend-songs {
  margin-top: 40px;

  .title {
    margin: 0 0 15px 0;
  }
}
</style>
