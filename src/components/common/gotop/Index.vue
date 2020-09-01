<template>
  <div class="back-to-top">
    <img src="../../../assets/images/gotop.png" />
  </div>
</template>

<script>
export default {};
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
