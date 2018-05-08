<template>
  <div>
    <input type="button" value="-" class="enterNum_a" @click="minusBtn" :disabled="minusDis"/>
    <input type="text" v-bind:value="num" class="enterNum_b"/>
    <input type="button" value="+" class="enterNum_c" @click="addBtn"/>
  </div>
</template>

<script>
  export default{
    name:'GoodsNum',
    data(){
      return {
        minusDis:false
      }
    },
    props:['num','onoff'],
    watch:{
      num(newVal){
        if(newVal <= 1){
          this.minusDis = true;
        } else {
          this.minusDis = false;
        }
      }
    },
    methods:{
      minusBtn(){
        this.$emit('pickedItem');
        this.$emit('changeNum','minus');
      },
      addBtn(){
        this.$emit('pickedItem');
        this.$emit('changeNum','add');
      }
    }
  }
</script>

<style scoped>
  .enterNum_a,.enterNum_b, .enterNum_c{
    width: 30px;height: 36px;display: block;float: left;
  }
  /*.enterNum_a{float: left;}*/
  /*.enterNum_c{float: right;}*/
  .enterNum_b{
    width: 100px;text-align: center;
    height: 30px;font-size: 30px;
  }
</style>
