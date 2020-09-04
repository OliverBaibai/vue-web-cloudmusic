<template>
  <div class="recommend-music">
    <h2 class="title">推荐新歌曲</h2>
    <song-list :songList="songs"></song-list>
  </div>
</template>

<script>
import songList from "@/components/common/songList/Index";
export default {
  data() {
    return {
      songs: []
    };
  },
  components: { songList },
  methods: {
    async getNewSongs() {
      let res = await this.$api.getNewSongs();
      this.songs = res.result;
    }
  },
  created() {},
  mounted() {
    this.getNewSongs();
  }
};
</script>

<style lang="stylus" scoped>
.recommend-music {
  .title {
    margin: 0 0 15px 0;
  }
}
</style>
