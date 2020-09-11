<template>
  <div class="recommend-music">
    <h2 class="title">推荐新歌曲</h2>
    <song-list :songList="songs"></song-list>
  </div>
</template>

<script>
import songList from "@/components/common/songList/Index";
import { createSong } from "@/model/song";
export default {
  data() {
    return {
      songs: []
    };
  },
  components: { songList },
  methods: {
    async getNewSongs() {
      try {
        let res = await this.$api.getNewSongs();
        let list = [];
        if (res.code === 200) {
          res.result.map(item => {
            list.push(item.id);
          });
          this.getSongDetail(list);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async getSongDetail(sliceArr) {
      let timestamp = new Date().valueOf();
      sliceArr = sliceArr.join(",");
      try {
        let res = await this.$api.getSongDetail(sliceArr, timestamp);
        console.log(res);
        this.songs = this._dealWithSongs(res.songs);
        console.log(this.songs);
      } catch (error) {
        console.log(error);
      }
    },
    _dealWithSongs(list) {
      let ret = [];
      list.map(item => {
        ret.push(createSong(item));
      });
      return ret;
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
