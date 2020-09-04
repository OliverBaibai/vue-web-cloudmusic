<template>
  <div class="banner">
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in banners" :key="item.imageUrl">
        <img :src="item.imageUrl" :alt="item.typeTitle" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "Banner",
  data() {
    return {
      banners: []
    };
  },
  methods: {
    async getBanner() {
      try {
        let res = await this.$api.getBanner();
        this.banners = res.banners;
      } catch (error) {
        console.log(error);
      }
    }
  },
  mounted() {
    this.getBanner();
  }
};
</script>

<style lang="stylus" scoped>
.banner {
  position: relative;

  img {
    border-radius: 3px;
  }
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
