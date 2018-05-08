<template>
  <div class="rightBtn" @click="rightBtnClick">{{msg}}</div>
</template>

<script>
  export default{
    name:'RightBtn',
    data () {
      return {
        msg: '下一张'
      }
    },
    methods:{
      rightBtnClick(){
//        console.log('right ok');
        this.$emit('rightClick',405);
      }
    }
  }
</script>

<style scoped>
  *{margin:0;padding:0;border:0;}
  ul,ol,li{list-style: none;}

  .rightBtn{
    width:60px;height: 30px;background: #eee;cursor: pointer;
    border:1px solid #ddd;color: #f00;line-height: 30px;font-size: 16px;
    position: absolute;right: 0;top: 142px;z-index: 6
  }
</style>
