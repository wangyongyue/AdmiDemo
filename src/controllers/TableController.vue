<template>
  <div
    style="float: left;width: 100%;" >
    <component v-for="item in items" :is="item.com"></component>
  </div>
</template>

<script>
  import AdminGoods from '@/Admin/AdminGoods'
  import {conf} from '../models/conf'

  export default {
    name: 'TableController',
    components: {
      AdminGoods,
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

        this.items = this.m.getData(response)

      }else {

        this.requestModules()

      }

    },
    methods:{

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
