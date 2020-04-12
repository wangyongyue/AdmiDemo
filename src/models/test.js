
export { //很关键
  test
}
import {conf} from '../models/conf'

function test() {

  this.requestType = "POST";
  this.table = "StockOut";
  this.params = {};

}
test.prototype = new conf();
test.prototype.getData = function (response){

  var items =[
    {com:"comTest",info:{index:0,name:"abc"}},
    {com:"AdminGoods",info:{}},
  ];

  this.data = items;
  return items
}
conf.prototype.click = function (index){

  alert(this.data[index].info.name)

}
