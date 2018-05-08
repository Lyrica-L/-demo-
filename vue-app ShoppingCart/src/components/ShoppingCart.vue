<template>
  <div>
    <h1>{{msg}}</h1>
    <div class="cartWrap">
      <div class="goodsList" v-for="t in goodsList">
        <ul>
          <li class="w_1"><input type="checkbox" @click="itemCheckBtn(t)" v-model="t.isCheck"/></li>
          <li class="w_2"><img :src="t.goodsImgUrl"/></li>
          <li class="w_3">{{t.productInfo}}</li>
          <li class="w_4">￥{{t.unitPrice}}</li>
          <li class="w_5">
            <GoodsNum v-bind:num ="t.goodsNum"
                      @pickedItem="pickedEvent(t.g_id)" @changeNum="numChangeFn"/>
          </li>
          <li class="w_6">￥{{t.total}}</li>
          <li class="w_7"><input type="button" value="删除" @click="deleteBtn(t)"/></li>
        </ul>
      </div>
    </div>
    <h1>总数：{{totalNum}}</h1>
    <h1>总价：{{totalPrice}}</h1>
  </div>
</template>

<script>
  import axios from 'axios';
  import GoodsNum from './GoodsNum.vue';

  export default {
    name: 'ShoppingCart',
    data () {
      return {
        msg: '购物车(vue-cli)',
        goodsList:'',
        totalNum:'',
        totalPrice:'',
        pickedItem:[]
      }
    },
    created(){
      axios.get('http://localhost:8877/goodsList')
        .then( _d => {
          this.goodsList = _d.data.goodsList;
          this.totalNum = _d.data.allGoodsNum;
          this.totalPrice = _d.data.allGoodsMoney;
      });
    },
    components: {GoodsNum},
    watch:{
      pickedItem(newVal){
        this.subTotalUpdate(newVal[0]);
      }
    },
    methods:{
      // 筛选被点击加减的商品
      pickedEvent(gid){
        this.pickedItem = this.goodsList.filter(t => {
            return t.g_id == gid;
          });
        /*console.log(this.pickedItem);*/
      },
      // 加减数量
      numChangeFn(act){
        if(act == 'add'){
          ++ this.pickedItem[0].goodsNum;
        } else if(act == 'minus'){
          -- this.pickedItem[0].goodsNum;
        }
      },
      // 更新小计
      subTotalUpdate(t){
        axios.get('http://localhost:8877/colPrice',{
          params:{
            n: t.goodsNum,
            p: t.unitPrice
          }
        })
          .then( _d => {
          this.pickedItem[0].total = _d.data.p;
          this.grandTotalUpdate();
        })
      },
      // 复选框点击
      itemCheckBtn(t){
        // 改变pickedItem，触发小计-总计的更新
        // 如果只清空，会报错；如果不清空直接push，每点一次都会添加一次
        this.pickedItem = [];
        this.pickedItem.push(t);
      },
      // 复选框统计
      checkedItems(){
        let itemsChecked = this.goodsList.filter(t => {
            return t.isCheck == true;
          });
        /*console.log(itemsChecked);*/
        return itemsChecked;
      },
      // 更新总计数量、价格
      grandTotalUpdate(){
        let itemObj = {};
        this.checkedItems().forEach((t,i)=>{
          itemObj['goods'+i]={
            unitPrice: t.unitPrice,
            num: t.goodsNum
          }
        });
        /*console.log(itemObj);*/
        axios.get('http://localhost:8877/allGoodsFn',{
            params:{
            all_goods:itemObj
            }
        })
        .then(_d => {
          this.totalNum = _d.data.n;
          this.totalPrice = _d.data.p;
        })
      },
      // 删除按钮
      deleteBtn(t){
        this.pickedItem = [];
        this.pickedItem.push(t);
        // 把被删除的商品信息从整体数据里拿掉
        this.goodsList = this.goodsList.filter(m => {
            return m.g_id !== t.g_id;
      });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{margin:0;padding:0;border:0;}
  ul,ol,li{list-style: none;}

  .cartWrap{
    width:95%;height: auto;overflow: hidden;margin:10px auto;
    background: #ddd;
  }
  .cartWrap table{
    width:100%;
    text-align: left;
  }
  .goodsList{
    width: 95%;height: 110px;clear: both;background: #eee;margin:10px auto;
  }
  .goodsList li{
    float: left;height: 100px;margin:5px;background: #b4b4b4;
    color: #000;font-weight: bold;font-size: 33px;
  }
  .goodsList li.w_1{width:30px;}
  .goodsList li.w_1 input{width:30px;height: 30px;}
  .goodsList li.w_2{width:100px;}
  .goodsList li.w_2 img{width:97px;}
  .goodsList li.w_3{width:100px;font-size: 22px;}
  .goodsList li.w_4{width:120px;}
  .goodsList li.w_5{width:180px;padding-left: 15px;}
  .goodsList li.w_6{width:120px;}
  .goodsList li.w_7{width:75px;}
  .goodsList li.w_7 input{padding:5px;color: #f00;cursor: pointer;}
  .goodsList li.w_7 input:hover{background: #fff;}
</style>
