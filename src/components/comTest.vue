
<template>
  <div style="width: 100%;float: left;height: 50px">
    <p style="width: 80px;float: left;height: 100%;text-align: center">{{info.name}}</p>
    <input type="text" v-model="info.name" placeholder="请输入" style="width: 120px;float:left;height: 100%;text-align: center">
    <button style="width: 50px;float: left;height: 100%;font-size: 15px;color: #1CB28A" @click="clickDown">点击</button>
  </div>

</template>

<script>
  export default {
    name: 'comTest',
    props:{
      info:{
        name:String,
      },
    },
    data(){
      return{
      }
    },
    methods:{
      clickDown(){
        this.info.index = 1
        this.$emit('clickDown')
      },

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

