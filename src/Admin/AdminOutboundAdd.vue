
<template>
  <div>
    <div style="float: left;width: 100%;height: 600px;overflow: scroll">
      <AdminGoods :list="list" v-on:goodAdd="goodAdd" v-on:goodCommit="goodCommit"></AdminGoods>
    </div>

  </div>

</template>

<script>
  import AdminGoods from '@/Admin/AdminGoods'

  export default {
    name: 'AdminOutboundAdd',
    components: {
      AdminGoods,
    },
    data(){
      return{
        list:[
          // {name:"",number:"",price:"",operator:"",supervisor:"",time:"",remark:""},

        ]
      }
    },
    methods:{
      goodAdd (){
        let obj =  {name:"",number:"",price:"",operator:"",supervisor:"",time:"",remark:""}
        this.list.push(obj)
      },
      goodCommit (val){

        this.requestModuleSave(val)

      },
      requestModuleSave(index){

        var params = new URLSearchParams()
        params.append('data', JSON.stringify(this.list[index]))
        params.append('style', "Outbound")
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
