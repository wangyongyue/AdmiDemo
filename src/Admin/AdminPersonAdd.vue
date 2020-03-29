
<template>
  <div>
    <div style="width: 100%;height: 30px">
      <p style="width: 13%;float: left;height: 70%">{{name}}</p>
      <p style="width: 13%;float: left;height: 70%">{{number}}</p>
      <p style="width: 13%;float: left;height: 70%">{{price}}</p>
      <p style="width: 13%;float: left;height: 70%">{{operator}}</p>
      <p style="width: 13%;float: left;height: 70%">{{time}}</p>
      <p style="width: 13%;float: left;height: 70%">{{remark}}</p>
      <button style="width: 9%;float: right;height: 70%;font-size: 15px;color: #1CB28A" @click="goodAdd">添加</button>

    </div>
    <div style="width: 100%;height: 30px" v-for="(item,index) in list">
      <input type="text" v-model="item.name" placeholder="请输入" style="width: 120px;float:left;height: 70%;text-align: center">
      <input type="text" v-model="item.number" placeholder="请输入" style="width: 120px;float:left;height: 70%;text-align: center">
      <input type="text" v-model="item.price" placeholder="请输入" style="width: 120px;float:left;height: 70%;text-align: center">
      <input type="text" v-model="item.operator" placeholder="请输入" style="width: 120px;float:left;height: 70%;text-align: center">
      <input type="text" v-model="item.time" placeholder="请输入" style="width: 120px;float:left;height: 70%;text-align: center">
      <input type="text" v-model="item.remark" placeholder="请输入" style="width: 120px;float:left;height: 70%;text-align: center">
      <button style="width: 9%;float: right;height: 70%;font-size: 15px;color: #1CB28A" @click="goodCommit(index)">提交</button>

    </div>
  </div>

</template>

<script>
  export default {
    name: 'AdminPersonAdd',
    props:{
      list:Array,
    },
    data(){
      return{
        name:"姓名",
        number:"职位",
        price:"等级",
        operator:"审批上级",
        time:"时间",
        remark:"备注",

      }
    },
    methods:{
      goodAdd(){

        this.$emit('goodAdd')
      },
      goodCommit(index){

        this.$emit('goodCommit',index)

      }
    }

  }
</script>

<style scoped>
  *{
    margin: 0px;
    padding: 0px;
  }
  button{
    float: right;
    margin: 0;
    padding: 0;
    background-color: transparent;
    border: 0px solid transparent;
    outline: none;
    float: left;
    font-size: x-large;

  }
</style>
