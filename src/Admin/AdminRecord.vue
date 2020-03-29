<template>
  <div>
    <div style="width: 100%;height: 30px">
      <p style="width: 13%;float: left">{{name}}</p>
      <p style="width: 13%;float: left">{{number}}</p>
      <p style="width: 13%;float: left">{{price}}</p>
      <p style="width: 13%;float: left">{{operator}}</p>
      <p style="width: 13%;float: left">{{supervisor}}</p>
      <p style="width: 13%;float: left">{{time}}</p>
      <p style="width: 13%;float: left">{{remark}}</p>
    </div>
    <div style="width: 100%;height: 30px" v-for="item in list">
      <p style="width: 13%;float: left">{{item.name}}</p>
      <p style="width: 13%;float: left">{{item.number}}</p>
      <p style="width: 13%;float: left">{{item.price}}</p>
      <p style="width: 13%;float: left">{{item.operator}}</p>
      <p style="width: 13%;float: left">{{item.supervisor}}</p>
      <p style="width: 13%;float: left">{{item.time}}</p>
      <p style="width: 13%;float: left">{{item.remark}}</p>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'AdminRecord',
    props:{
      list:Array,
    },
    data(){
      return{
        name:"名称",
        number:"数量",
        price:"单价",
        operator:"操作人",
        supervisor:"监督人",
        time:"时间",
        remark:"备注",

      }
    },
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
