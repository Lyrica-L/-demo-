<template>
  <div>
    <h2>{{msg}}</h2>
    <el-row :gutter="1">
      <el-col :span="2"></el-col>
      <!-- 左边区域 点单 -->
      <el-col :span="7">
        <el-tabs v-model="activeName">
          <el-tab-pane label="点菜" name="first">
            <el-table :data="tableData" border style="width: 100%; text-align: left" show-summary>
              <el-table-column prop="foodsName" label="商品" width="120"></el-table-column>
              <el-table-column prop="count" label="数量" width="54"></el-table-column>
              <el-table-column prop="rowPrice" label="金额(元)" width="80"></el-table-column>
              <el-table-column label="操作" width="100">
                <template slot-scope="scope">
                  <el-button type="text" size="small"
                             @click="addNum(scope.$index, tableData)">
                    增加
                  </el-button>
                  <el-button type="text" size="small"
                             @click="deleteRow(scope.$index, tableData)">
                    删除
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="外卖" name="second">(外卖)</el-tab-pane>
          <el-tab-pane label="自取" name="third">(自取)</el-tab-pane>
        </el-tabs>
        <div style="margin-top: 20px">
          <el-button type="danger" @click="clearBtn"><div class="footerBtn">清空</div></el-button>
          <el-button type="primary" @click="checkOut"><div class="footerBtn">结算(伪)</div></el-button>
        </div>
      </el-col>
      <!-- 右边区域 菜单-->
      <el-col :span="15">
        <!-- 日常商品 -->
        <div class="daily-goods">
          <div class="title">日常商品</div>
          <div class="daily-goods-list">
            <ul>
              <li v-for="g in dailyFoods" @click="orderDishesBtn(g)">
                <span class="foodName">{{g.foodsName}}</span>
                <span class="foodPrice">￥{{g.price}}</span>
              </li>
            </ul>
          </div>
          <!-- 套餐 -->
          <div class="goods-type">
            <el-tabs>
              <el-tab-pane label="套餐一">
                <ul class="cookList">
                  <li v-for="t in setMeal_01" @click="orderDishesBtn(t)">
                    <span class="foodImg"><img :src="t.goodsImg" width="100%"/></span>
                    <span class="foodName">{{t.foodsName}}</span>
                    <span class="foodPrice">￥{{t.price}}</span>
                  </li>
                </ul>
              </el-tab-pane>
              <el-tab-pane label="套餐二">
                <ul class="cookList">
                  <li v-for="t in setMeal_02" @click="orderDishesBtn(t)">
                    <span class="foodImg"><img :src="t.goodsImg" width="100%"/></span>
                    <span class="foodName">{{t.foodsName}}</span>
                    <span class="foodPrice">￥{{t.price}}</span>
                  </li>
                </ul>
              </el-tab-pane>
              <el-tab-pane label="套餐三">
                <ul class="cookList">
                  <li v-for="t in setMeal_03" @click="orderDishesBtn(t)">
                    <span class="foodImg"><img :src="t.goodsImg" width="100%"/></span>
                    <span class="foodName">{{t.foodsName}}</span>
                    <span class="foodPrice">￥{{t.price}}</span>
                  </li>
                </ul>
              </el-tab-pane>
              <el-tab-pane label="套餐四">
                <ul class="cookList">
                  <li v-for="t in setMeal_04" @click="orderDishesBtn(t)">
                    <span class="foodImg"><img :src="t.goodsImg" width="100%"/></span>
                    <span class="foodName">{{t.foodsName}}</span>
                    <span class="foodPrice">￥{{t.price}}</span>
                  </li>
                </ul>
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default{
    name: 'Pay',
    data(){
      return {
        msg: '点菜结算(vue-cli)',
        activeName: 'first',
        tableData:  [],
        dailyFoods:[
          {
            goodsId:1,
            foodsName:'汉堡11',
            price:18,
            num:1
          }, {
            goodsId:2,
            foodsName:'汉堡22',
            price:15,
            num:1
          }, {
            goodsId:3,
            foodsName:'汉堡33',
            price:15,
            num:1
          }, {
            goodsId:4,
            foodsName:'汉堡44',
            price:80,
            num:1
          }, {
            goodsId:5,
            foodsName:'汉堡55',
            price:10,
            num:1
          },{
            goodsId:6,
            foodsName:'汉堡66',
            price:20,
            num:1
          }, {
            goodsId:7,
            foodsName:'汉堡77',
            price:10,
            num:1
          }, {
            goodsId:8,
            foodsName:'汉堡88',
            price:18,
            num:1
          }, {
            goodsId:9,
            foodsName:'汉堡99',
            price:15,
            num:1
          }, {
            goodsId:10,
            foodsName:'汉堡666',
            price:17,
            num:1
          }
        ],
        setMeal_01:[
            {
            goodsId:11,
            goodsImg:"http://pic2.16pic.com/00/05/57/16pic_557962_b.jpg",
            foodsName:'套餐A-1',
            price:18,
            num:1
          }, {
            goodsId:12,
            goodsImg:"https://gd3.alicdn.com/imgextra/i3/2485892750/TB2x9RFbNXlpuFjSsphXXbJOXXa_!!2485892750.jpg",
            foodsName:'套餐A-2',
            price:15,
            num:1
          }, {
            goodsId:13,
            goodsImg:"http://file06.16sucai.com/2016/0301/3e5a68f7afd2f172577dba8e847b41d0.jpg",
            foodsName:'套餐A-3',
            price:10,
            num:1
          }
        ],
        setMeal_02:[
            {
            goodsId:14,
            goodsImg:"http://file06.16sucai.com/2016/0301/59cf0b8f830895bdb2b1cde6d2bbd78e.jpg",
            foodsName:'套餐B-1',
            price:80,
            num:1
          },{
            goodsId:15,
            goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
            foodsName:'套餐B-2',
            price:10,
            num:1
          }
        ],
        setMeal_03:[
          {
            goodsId:16,
            goodsImg:"http://file06.16sucai.com/2016/0301/59cf0b8f830895bdb2b1cde6d2bbd78e.jpg",
            foodsName:'套餐C-1',
            price:20,
            num:1
          }
        ],
        setMeal_04:[
            {
            goodsId:17,
            goodsImg:"https://gd3.alicdn.com/imgextra/i3/2485892750/TB2x9RFbNXlpuFjSsphXXbJOXXa_!!2485892750.jpg",
            foodsName:'套餐D-1',
            price:10,
            num:1
          }, {
            goodsId:18,
            goodsImg:"http://file06.16sucai.com/2016/0301/3e5a68f7afd2f172577dba8e847b41d0.jpg",
            foodsName:'套餐D-2',
            price:18,
            num:1
          }, {
            goodsId:19,
            goodsImg:"http://pic2.16pic.com/00/05/57/16pic_557962_b.jpg",
            foodsName:'套餐D-3',
            price:15,
            num:1
          }
        ]
      }
    },
    watch:{
      tableData:{
        handler(newVal){
          newVal.forEach((t,i) => this.subTotal(t.price, t.count,i));
        },
        deep: true
      }
    },
    methods:{
      // 点单中的小计金额
      subTotal(p,n,inx){
        /*dish.rowPrice = p*n;*/
        this.tableData[inx].rowPrice = p*n;
      },
      // 点菜
      orderDishesBtn(g){
        let orderDishes = {
            goodsId: g.goodsId,
            foodsName: g.foodsName,
            price: g.price,
            count: g.num,
            rowPrice: g.price * g.num
        };

        let pickedDish = this.tableData.filter( t => {
          return t.goodsId == g.goodsId
        });

        if(pickedDish.length == 0){
          this.tableData.push(orderDishes);
        } else {
          pickedDish[0].count ++;
        }
      },
      // 增加
      addNum(index,_d){
        _d[index].count ++;
      },
      // 删除
      deleteRow(index,rows){
        rows.splice(index,1);
      },
      // 清空
      clearBtn(){
        this.tableData = [];
      },
      // 结算
      checkOut() {
        if(this.tableData.length == 0){
          this.$alert('点餐表为空，请先添加商品！', '无法结算', {confirmButtonText: '确定'});
        } else {
          this.tableData = [];
          this.$alert('祝您用餐愉快！', '结算成功', {confirmButtonText: '确定'});
        }
      }
    }
  }
</script>

<style scoped>
  *{margin:0;padding:0;border:0;}
  ul,ol,li{list-style: none;}
  .title{
    height: 20px;
    border-bottom:1px solid #D3DCE6;
    background-color: #F9FAFC;text-alien:left;
    padding:10px;
  }
  .daily-goods-list ul li{
    list-style: none;
    float:left;
    border:1px solid #E5E9F2;
    padding:10px;
    margin:5px;
    background-color:#fff;
    cursor:pointer;
  }
  .o-price{
    color:#58B7FF;
  }
  /* 套餐 */
  .goods-type{clear: both;}
  .cookList li{
    list-style: none;
    width:23%;
    border:1px solid #E5E9F2;
    height: auto;
    overflow: hidden;
    background-color:#fff;
    padding: 2px;
    float:left;
    margin: 2px;
    cursor: pointer;

  }
  .cookList li span{
    display: block;
    float:left;
  }
  .cookList li span.foodImg{
    width:100px;height:100px;overflow:hidden;
    display: block;
    float:left;
  }
  .foodImg{
    width: 40%;
  }
  .foodName{
    font-size: 18px;
    padding-left: 10px;
    color:brown;

  }
  .foodPrice{
    font-size: 16px;
    padding-left: 10px;
  }
  .footerBtn{height:30px;line-height: 30px;padding:0 10px;}
</style>
