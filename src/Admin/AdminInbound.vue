
<template>
  <div style="float: left;width: 100%;">
    <AdminRecord :list="list"></AdminRecord>

  </div>
</template>

<script>
  import AdminRecord from '@/Admin/AdminRecord'


  export default {
    name: 'AdminInbound',
    components: {
      AdminRecord,
    },
    data(){
      return{
        list:[
          // {name:"bax",number:"bax",price:"bax",operator:"bax",supervisor:"bax",time:"bax",remark:"bax"},
          // {name:"bax",number:"bax",price:"bax",operator:"bax",supervisor:"bax",time:"bax",remark:"bax"}
        ]
      }
    },
    mounted () {

      this.requestModules()

    },
    methods:{
      requestModules(){

        var params = new URLSearchParams()
        params.append('style', "Inbound")
        this.$axios
          .post('/getData', params)
          .then(response => {
            var data = response['data']
            if (data['code'] == 1000) {
              this.modules = [];
              this.list = data["data"]
              // for (var i = 0; i < list.length; i++) {
              //
              //   this.list.push({title:list[i].name,id:list[i].id})
              //
              // }
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
