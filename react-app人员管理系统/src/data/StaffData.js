export default class StaffData{
    constructor(){
        /*this.allState = [
            new dataFormat(StaffData.data[0]),
            new dataFormat(StaffData.data[1]),
            new dataFormat(StaffData.data[2]),
            new dataFormat(StaffData.data[3]),
            new dataFormat(StaffData.data[4]),
            new dataFormat(StaffData.data[5]),
            new dataFormat(StaffData.data[6]),
            new dataFormat(StaffData.data[7]),
            new dataFormat(StaffData.data[8]),
            new dataFormat(StaffData.data[9]),
            new dataFormat(StaffData.data[10]),
        ];*/
        this.allState = [];
        StaffData.data.map(n => this.allState.push(new dataFormat(n)));

        this.pickedStaff = this.allState;
    }
    // 搜索人员
    searchStaff(n){
        this.pickedStaff = this.allState;
        this.pickedStaff = this.pickedStaff.filter(_itm =>{
            // 四个筛选范围，满足任意一项就会被选出
            return _itm.info.name.indexOf(n) !== -1 ||
                    _itm.info.gender.indexOf(n) !== -1 ||
                    _itm.info.id.indexOf(n) !== -1 ||
                    (_itm.info.age+'').indexOf(n) !== -1
        });
        // 返回的this即StaffData，
        // 便于在App.js中用.pickedStaff给StaffPanel传值
        return this;
    }
    // 添加人员
    addStaff(obj){
        this.allState.push(new dataFormat(obj));
        // console.log(this);
        return this;
    }
}
StaffData.data = [
    { info: { gender: '男', age: 20, name: '徐晨曦', id: '主任'}},
    { info: { gender: '女', age: 21, name: '秦婷婷', id: '学生'}},
    { info: { gender: '女', age: 22, name: '曹丽娜', id: '学生'}},
    { info: { gender: '女', age: 24, name: '王官君', id: '实习'}},
    { info: { gender: '男', age: 23, name: '王红梅', id: '实习'}},
    { info: { gender: '男', age: 22, name: '郭淑慧', id: '学生'}},
    { info: { gender: '男', age: 24, name: '马海娟', id: '主任'}},
    { info: { gender: '男', age: 35, name: '倪辰曦', id: '老师'}},
    { info: { gender: '男', age: 42, name: '范志坚', id: '学生'}},
    { info: { gender: '男', age: 50, name: '安瑞娟', id: '实习'}},
    { info: { gender: '男', age: 60, name: '陈逸群', id: '实习'}}
];
// 这个class用于把数据格式化
class dataFormat{
    constructor(d){
        this.info = {};
        this.info.name = d.info.name;
        this.info.age = d.info.age;
        this.info.id = d.info.id;
        this.info.gender = d.info.gender;
        this.key = ++dataFormat.key;
    }
}
dataFormat.key = 0;