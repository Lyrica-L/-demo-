<template>
  <div class="addressWrap">
    <h2>{{msg}}</h2>
    <!-- title 选中的地址 -->
    <div class="curp" @click="opsDisplay">
      <ul class="addressTitle">
        <li v-for="t in addrsTitle">{{t}}</li>
      </ul>
    </div>
    <!-- 整个地址菜单 -->
    <div ref="addressOptions">
      <!-- tab按钮 -->
      <ul>
        <li v-for="(t,i) in tabOps" @click="tabClick(i,$event)">{{t}}</li>
      </ul>
      <!-- Provinces 省级 列表-->
      <div ref="provinceRef" class="nameList">
        <ul>
          <li v-for="t in addrsObj"
              v-bind:title="t.name" @click="provClick(t)"
          >
            {{t.name}}
          </li>
        </ul>
      </div>
      <!-- Cities 市级 列表-->
      <div ref="cityRef" class="nameList" style="display: none">
        <ul>
          <li v-for="t in city"
              v-bind:title="t.name" @click="cityClick(t)"
          >
            {{t.name}}
          </li>
        </ul>
      </div>
      <!-- Areas 区级 列表-->
      <div ref="areaRef" class="nameList" style="display: none">
        <ul>
          <li v-for="t in area"
              v-bind:title="t.name" @click="areaClick(t)"
          >
            {{t.name}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'DeliverAddress',
    data () {
      return {
        msg: '配送地址(vue-cli)',
        tabOps:['选择省'],
        addrsObj:'',
        city:'',
        area:'',
        addrsTitle:['配送地址:','点击选择'],
        onoff:0
      }
    },
    created(){
      axios.get('http://localhost:1101/address_pca')
        .then((_d)=>{
          /*console.log(_d.data);*/
          this.addrsObj = _d.data.pca;
      });
    },
    methods:{
      // 整个地址菜单的显示隐藏
      opsDisplay(){
        if(this.onoff == 0){
          this.$refs.addressOptions.style.display='block';
          this.onoff = 1;
        } else {
          this.$refs.addressOptions.style.display='none';
          this.onoff = 0;
        }

      },
      // 每个省的点击事件
      provClick(t){
        this.city = this.addrsObj[t.inx].childs;

        this.addrsTitle.splice(1,3, t.name);
        this.tabOps.splice(0,4,t.name,'请选择');

        this.$refs.provinceRef.style.display='none';
        this.$refs.cityRef.style.display='block';
      },
      // 每个市的点击事件
      cityClick(t){
        this.area = this.city[t.inx].childs;

        this.addrsTitle.splice(2,3, t.name);
        this.tabOps.splice(1,4,t.name,'请选择');

        /*console.log(this.area);*/
        this.$refs.cityRef.style.display='none';
        this.$refs.areaRef.style.display='block';

      },
      // 每个区的点击事件
      areaClick(t){
        this.addrsTitle.splice(3,3, t.name);
        this.tabOps.splice(2,4,t.name);

        this.$refs.addressOptions.style.display='none';
        this.onoff = 0;
      },
      // tab省市区的点击事件
      tabClick(i,e){
        if(i == 0){
          this.$refs.provinceRef.style.display='block';
          this.$refs.cityRef.style.display='none';
          this.$refs.areaRef.style.display='none';

        } else if(i == 1){
          this.$refs.provinceRef.style.display='none';
          this.$refs.areaRef.style.display='none';
          this.$refs.cityRef.style.display='block';

        } else if(i == 2){
          this.$refs.cityRef.style.display='none';
          this.$refs.areaRef.style.display='block';
          this.$refs.provinceRef.style.display='none';
        }
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{margin:0;padding:0;border:0;}
  ul,ol,li{list-style: none;}
  .curp{cursor: pointer;}
  .redFont{color: #f00}
  /**/
  .addressWrap ul.addressTitle{
    background: #fff;border:1px solid #000;margin:10px;padding:0;border-radius: 10px;
  }
  .addressWrap ul.addressTitle li{background: #fff;padding:0;margin:5px;}
  /**/
  .addressWrap{
    width:500px;background: #eee;border:1px solid #ddd;margin:0 auto;
  }
  .addressWrap ul{
    clear: both;padding: 10px;background: #5d5d5d;display: block;overflow: hidden;
  }
  .addressWrap ul li{
    font-size: 14px;padding:5px;
    float: left;margin-left: 10px;background: #ddd;cursor: pointer;
  }
  .addressWrap ul li:hover{
    background: #eee;
  }
  /**/
  .nameList{
    clear: both;margin:10px;background: #5e5e5e;padding: 10px;
  }
  .nameList ul{
    clear: both;padding: 10px;background: #5d5d5d;display: block;overflow: hidden;
  }
  .nameList ul li{
    width:63px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;
    font-size: 14px;padding:5px;
    float: left;margin: 5px;background: #ddd;cursor: pointer;
  }
  .nameList ul li:hover{
    background: #eee;
  }
</style>
