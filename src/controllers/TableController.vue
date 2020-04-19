<template>
  <div
    style="float: left;width: 100%;" >
    <component v-for="(item,index) in items" :key="index" :is="item.com" :info="item.info" v-on:clickDown="clickDown(index)"></component>
  </div>
</template>

<script>
  import {conf} from '../models/conf'
  import AdminGoods from '@/Admin/AdminGoods'
  import comTest from '@/components/comTest'
  import {networking} from '../controllers/networking'


  export default {
    name: 'TableController',
    components: {
      AdminGoods,
      comTest,
    },
    props:{
      items:[],
      m:conf
    },
    data(){
      return{

      }
    },
    mounted (){

      if (this.m.requestType.length == 0){

        this.items = this.m.getData(null)

      }else {

        this.requestModules()

      }

    },
    methods:{
      clickDown(index){
        this.m.click(index)
      },
      requestModules(){

        var net = new networking()
        net.request(this.$axios,this.m,response =>  {

          this.items = this.m.getData(response)

        })

      },
    }
  }
</script>

<style scoped>

</style>
