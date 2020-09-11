<template>
  <div
    class="back-to-top"
    @click="backToTop"
    v-show="showReturnToTop"
    @mouseenter="show"
    @mouseout="hide"
  >
    <img src="../../../assets/images/gotop.png" />
  </div>
</template>

<script>
import { scrollIt } from "@/common/scrollIt";
export default {
  name: "back-to-top",
  data() {
    return {
      showTooltips: false,
      showReturnToTop: false
    };
  },
  props: {
    // 文本提示
    text: {
      type: String,
      default: "返回顶部"
    },
    textColor: {
      // 文本颜色
      type: String,
      default: "#f00"
    },
    iPos: {
      // 文本位置
      type: String,
      default: "right"
    },
    iClass: {
      // 图标形状
      type: String,
      default: "fzicon fz-ad-fanhuidingbu1"
    },
    iColor: {
      // 图标颜色
      type: String,
      default: "#f00"
    },
    iFontsize: {
      // 图标大小
      type: String,
      default: "32px"
    },
    pageY: {
      // 默认在哪个视图显示返回按钮
      type: Number,
      default: 200
    },
    transitionName: {
      // 过渡动画名称
      type: String,
      default: "linear"
    }
  },
  components: {},
  computed: {},
  watch: {},
  methods: {
    show() {
      retrun((this.showTooltips = true));
    },
    hide() {
      return (this.showTooltips = false);
    },
    currentPageYOffset() {
      // 判断滚动区域大于多少的时候显示返回顶部的按钮
      window.pageYOffset > this.pageY
        ? (this.showReturnToTop = true)
        : (this.showReturnToTop = false);
    },
    backToTop() {
      scrollIt(0, 500, this.transitionName, this.currentPageYOffset);
    }
  },
  created() {
    window.addEventListener("scroll", this.currentPageYOffset, true);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.currentPageYOffset, true);
  }
};
</script>


<style scoped lang="stylus">
.back-to-top {
  position: fixed;
  bottom: 10%;
  right: 100px;
  z-index: 9999;
  cursor: pointer;
  width: auto;

  i {
    font-size: 32px;
    display: inline-block;
    position: relative;
    text-align: center;
    padding: 5px;
    background-color: rgba(234, 231, 231, 0.52);
    border-radius: 5px;
    transition: all 0.3s linear;

    &:hover {
      border-radius: 50%;
      background: #222;
      color: #fff !important;
    }
  }

  .tips {
    display: inline-block;
    position: absolute;
    word-break: normal;
    white-space: nowrap;
    width: auto;
    font-size: 12px;
    color: #fff;
    z-index: -1;
  }

  .left {
    right: 0;
    top: 50%;
    margin-right: 50px;
    transform: translateY(-50%);
  }

  .right {
    left: 0;
    top: 50%;
    margin-left: 50px;
    transform: translateY(-50%);
  }

  .bottom {
    bottom: 0;
    margin-top: 50px;
  }

  .top {
    top: 0;
    margin-bottom: 50px;
  }
}
</style>
