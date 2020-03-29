<template>
  <div style="width: 100%">
    <button style="font-size: 16px;width: 100%;float: left;background-color: #1CB28A;height: 30px" v-model="info.index" v-on:click="enterMenu">{{info.title}}</button>
    <div v-if="info.isH" v-for="(item,index) in info.list" >
      <button :class="{defult: !item.isshow,blue: item.isshow}" style="font-size: 15px;width: 100%;float: left;text-align: right;height: 30px" v-on:click="clickMenu(index)" >{{item.name}}</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AdminMenu',
    props:{
      info:{
        list: Array,
        title: String,
        index: String,
        isH:Boolean,
      }

    },
    data(){
      return{
      }
    },
    methods: {

      enterMenu() {

        this.info.isH = !this.info.isH;
        this.$emit('enterMenu')

      },
      clickMenu(index) {

        this.info.index = index.toString()
        this.$emit('clickMenu')

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
  .defult {
    color: black;
  }
  .blue {
    color: #1CB28A;
  }

</style>
