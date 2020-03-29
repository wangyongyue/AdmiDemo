<template>
  <div style="width: 1200px;margin: 0 auto">
    <div style="width: 100%;height: 70px;background-color: #1CB28A;position:fixed ;top:0px;">
      <p style="float: left;margin-left: 100px;font-size: 16px">公司名称</p>
      <p style="float: right;margin-right: 200px">用户：wyy</p>
    </div>
    <div style="width: 100%;height: 70px;background-color: white;top:0px;">

    </div>
    <div style="width: 120px;height: 1000px;float: left;margin-left: 50px">
      <AdminMenu v-for="(item,index) in menus"
                 :info="item"
                 v-on:clickMenu="clickMenu(index)"
                 v-on:enterMenu="enterMenu(index)"
      ></AdminMenu>
    </div>
    <div style="float: left;width: 1000px;height: 1000px;margin-left: 30px">
      <component :is="currentView"></component>
    </div>
  </div>
</template>

<script>
  import AdminLogin from '@/Admin/AdminLogin'
  import AdminMenu from '@/Admin/AdminMenu'
  import AdminRecord from '@/Admin/AdminRecord'
  import AdminOutbound from '@/Admin/AdminOutbound'
  import AdminInbound from '@/Admin/AdminInbound'
  import AdminInventory from '@/Admin/AdminInventory'
  import AdminOutboundAdd from '@/Admin/AdminOutboundAdd'
  import AdminInboundAdd from '@/Admin/AdminInboundAdd'
  import AdminManagement from '@/Admin/AdminManagement'
  import AdminSafe from '@/Admin/AdminSafe'


  export default {
    name: 'Admin',
    components: {
      AdminMenu,
      AdminLogin,
      AdminRecord,
      AdminOutbound,
      AdminInbound,
      AdminInventory,
      AdminOutboundAdd,
      AdminInboundAdd,
      AdminManagement,
      AdminSafe

    },
    data() {
      return{
        currentView:"AdminOutbound",
        menus:[
          {
            isH:true,
            index:"0",
            title:"出库",
            list:[
              {name:"出库记录",isshow:true},
              {name:"出库商品",isshow:false},
              ]
          },
          {
            isH:false,
            index:"0",
            title:"入库",
            list:[
              {name:"入库记录",isshow:false},
              {name:"入库商品",isshow:false},
            ]
          },
          {
            isH:false,
            index:"0",
            title:"库存",
            list:[
              {name:"库存详情",isshow:false},
             ]
          },
          {
            isH:false,
            index:"0",
            title:"管理",
            list:[
              {name:"人员管理",isshow:false},
              {name:"人员添加",isshow:false},
            ]
          },
        ],

      }
    },
    methods: {

      enterMenu(index){

        // for(let i = 0;i < this.menus.length;i ++){
        //   let item = this.menus[i]
        //   item.isH = false;
        // }
        // this.menus[index].isH = true

      },
      clickMenu(index){

        for(let i = 0;i < this.menus.length;i ++){
          let item = this.menus[i]
          for(let j = 0;j < this.menus[i].list.length;j ++){
            this.menus[i].list[j].isshow = false
          }
        }

        let a = this.menus[index].index
        this.menus[index].list[a].isshow = true

        if (index == 0){

          if (this.menus[index].index == "0"){
            this.currentView = "AdminOutbound"

          }else {
            this.currentView = "AdminOutboundAdd"

          }

        }else if (index == 1){

          if (this.menus[index].index == "0"){
            this.currentView = "AdminInbound"

          }else {
            this.currentView = "AdminInboundAdd"

          }


        }else if (index == 2){

          if (this.menus[index].index == "0"){
            this.currentView = "AdminInventory"

          }

        }else if (index == 3){

          if (this.menus[index].index == "0"){
            this.currentView = "AdminManagement"

          }else {
            this.currentView = "AdminSafe"

          }


        }
      }
    }
  }

</script>

<style scoped>



</style>
