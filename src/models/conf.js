export { //很关键
  conf
}

function conf() {

  this.requestType = "GET";
  this.url = "";
  this.params = {};
  this.data = null;

}
conf.prototype.getData = function (response){

  var items =[
    {com:"AdminGoods",info:{}},

  ];

  this.data = items;
  return items
}
conf.prototype.click = function (index){

}
