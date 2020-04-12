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

        var params = new URLSearchParams()
        params.append('table', this.m.table)
        params.append('params', JSON.stringify(this.m.params))

        this.$axios
          .post('/getNew', params)
          .then(response => {
            var data = response['data']
            if (data['code'] == 1000) {

              this.items = this.m.getData(response)

            }else {

              alert(data("message"))
            }

          })
          .catch(function (error) {
            alert(error)
          })
      },
    }
  }
</script>

<style scoped>

</style>
