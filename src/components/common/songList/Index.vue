<template>
  <div class="list">
    <div
      class="item"
      v-for="(item,index) in songList"
      :key="item.id"
      :class="index == currentIndex && currentSong.id == item.id && playing ? 'playing' : ''"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    songList: {
      type: Array
    }
  },
  methods: {},
  computed: {}
};
</script>


<style lang="stylus" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;

  .item {
    flex: 0 0 50%;
    max-width: 50%;
    margin-bottom: 20px;
    height: 80px;
    padding: 0 15px 30px;

    .wrapper {
      width: 100%;
      height: 80px;
      background-color: #ffffff;
      justify-content: start;
      padding: 0 4%;
      border-radius: 5px;
      position: relative;

      .bg {
        width: 100%;
        height: 80%;
        position: absolute;
        background-repeat: no-repeat;
        background-size: cover;
        top: 50%;
        left: 0;
        margin: -32px 0 0 0;
        opacity: 0.08;
        filter: blur(10px);
        z-index: -1;
      }

      .index-container {
        width: 30px;
        margin-right: 20px;

        .num {
          font-size: 15px;
          color: #4a4a4a;
          font-weight: bold;
        }

        .play-icon {
          display: none;
          height: 16px;
          min-width: 18px;
          overflow: hidden;

          .line {
            width: 2px;
            height: 100%;
            margin-left: 2px;
            background-color: #ff410f;
            animation: play 0.9s linear infinite alternate;
          }
        }

        .play-btn {
          color: $color-theme;
          font-size: 28px;
          display: none;
          text-align: left;
          cursor: pointer;
        }

        .pause-btn {
          color: $color-theme;
          font-size: 30px;
          display: none;
          text-align: left;
          cursor: pointer;
        }
      }

      .avatar {
        width: 55px;
        height: 55px;
        border-radius: 5px;
        position: relative;
        margin-right: 30px;

        img {
          width: 100%;
          height: 100%;
          border-radius: 5px;
        }

        .layer {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          background: rgba(0, 0, 0, 0.6);
          border-radius: 5px;
          opacity: 0;

          i {
            color: #ffffff;
            font-size: 26px;
            font-weight: 100;
          }
        }
      }

      .info {
        width: 15%;

        .name {
          font-size: 14px;
          color: #333333;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .author {
          font-size: 12px;
          color: #666666;
          font-weight: bold;

          &:after {
            content: '/';
            margin: 0 3px;
          }

          &:last-child {
            &:after {
              content: '';
            }
          }
        }
      }

      .album {
        font-size: 14px;
        color: #333333;
        font-weight: bold;
        margin-left: 80px;
        flex: 1;
      }

      .duration {
        font-size: 14px;
        color: #333333;
        font-weight: bold;
        margin-left: 80px;
      }

      .tools {
        width: 25%;
        height: 100%;
        padding-left: 4.28%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        opacity: 0;
        position: absolute;
        right: 4%;
        top: 0;

        i {
          font-size: 20px;
          cursor: pointer;
          display: block;
          color: #666666;
        }
      }
    }

    &.playing {
      p {
        color: $color-theme;
      }

      i {
        color: $color-theme;
      }

      .index-container {
        .num {
          display: none;
        }

        .play-icon {
          display: flex;
        }

        .play-btn {
          display: none;
        }
      }
    }

    &:hover {
      .index-container {
        .num {
          display: none;
        }

        .play-btn {
          display: block;
        }
      }

      &.playing {
        .index-container {
          .play-btn {
            display: none;
          }

          .play-icon {
            display: none;
          }

          .pause-btn {
            display: block;
          }
        }
      }
    }
  }
}
</style>
