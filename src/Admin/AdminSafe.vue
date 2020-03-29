

<style scoped>

</style>
<template>
  <div>
    <div style="float: left;width: 100%;height: 600px;overflow: scroll">
      <AdminPersonAdd :list="list" v-on:goodAdd="goodAdd" v-on:goodCommit="goodCommit"></AdminPersonAdd>
    </div>

  </div>

</template>

<script>
  import AdminPersonAdd from '@/Admin/AdminPersonAdd'

  export default {
    name: 'AdminSafe',
    components: {
      AdminPersonAdd,
    },
    data(){
      return{
        list:[
          // {name:"",number:"",price:"",operator:"",time:"",remark:""},

        ]
      }
    },
    methods:{
      goodAdd (){
        let obj =  {name:"",number:"",price:"",operator:"",time:"",remark:""}
        this.list.push(obj)
      },
      goodCommit (val){

        this.requestModuleSave(val)

      },
      requestModuleSave(index){

        var params = new URLSearchParams()
        params.append('data', JSON.stringify(this.list[0]))
        params.append('style', "Person")
        params.append('id',"0")

        this.$axios
          .post('/updateData', params)
          .then(response => {
            var data = response['data']
            if (data['code'] == 1000) {

              alert("操作成功")
              this.list.splice(index,1)

            }else {
              alert(data['message'])
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
