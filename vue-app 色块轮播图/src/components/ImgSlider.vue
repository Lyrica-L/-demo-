<template>
  <div class="sliderWrap">
    <h2>{{msg}}</h2>
    <LeftBtn @leftClick="preFn"></LeftBtn>
    <ul ref="sliderUl">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
    <RightBtn @rightClick="nextFn"></RightBtn>
  </div>
</template>

<script>
  import LeftBtn from '@/components/LeftBtn';
  import RightBtn from '@/components/RightBtn';

  export default {
    name: 'ImgSlider',
    data () {
      return {
        msg: '轮播图(vue-cli)',
        inx:0
      }
    },
    components:{
      LeftBtn,
      RightBtn
    },
    methods:{
      nextFn(n){
        if(this.inx < 3){
          this.inx ++;
        }else{
          this.inx = 0;
        }

        this.$refs.sliderUl.style.left = -(this.inx*n)+'px';
      },
      preFn(n){
        if(this.inx > 0){
          this.inx -- ;
        }else{
          this.inx = 3;
        }

        this.$refs.sliderUl.style.left = -(this.inx*n)+'px';
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{margin:0;padding:0;border:0;}
  ul,ol,li{list-style: none;}

  .sliderWrap{
    width:400px;height: 300px;background: #eee;border:1px solid #ddd;margin:0 auto;
    position: relative;
    /*overflow: hidden;*/
  }
  .sliderWrap ul{
    width:1630px;height: 260px;position: absolute;left: 0;top: 40px;
    z-index: 5;
  }
  .sliderWrap ul li{
    width:400px;height: 260px;float: left;
    background: #8c9196;
    margin-right: 5px;
  }
</style>
