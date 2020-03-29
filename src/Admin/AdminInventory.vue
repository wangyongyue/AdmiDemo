

<template>
  <div style="float: left;width: 100%;">
    <AdminRecord></AdminRecord>
  </div>
</template>

<script>
  import AdminRecord from '@/Admin/AdminRecord'

  export default {
    name: 'AdminInventory',
    components: {
      AdminRecord,
    },
    mounted () {

      this.requestModules()

    },
    methods:{
      requestModules(){

        var params = new URLSearchParams()
        params.append('style', "Inventory")
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
