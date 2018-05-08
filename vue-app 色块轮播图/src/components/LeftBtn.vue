<template>
  <div class="leftBtn" @click="leftBtnClick">{{msg}}</div>
</template>

<script>
  export default{
    name:'LeftBtn',
    data () {
      return {
        msg: '上一张'
      }
    },
    methods:{
      leftBtnClick(){
//          console.log('left ok');
        this.$emit('leftClick',405);
      }
    }
  }
</script>

<style scoped>
  *{margin:0;padding:0;border:0;}
  ul,ol,li{list-style: none;}

  .leftBtn{
    width:60px;height: 30px;background: #eee;cursor: pointer;
    border:1px solid #ddd;color: #f00;line-height: 30px;font-size: 16px;
    position: absolute;left: 0;top: 142px;z-index: 6
  }
</style>
