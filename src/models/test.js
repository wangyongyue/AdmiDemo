
export { //很关键
  test
}
import {conf} from '../models/conf'

function test() {

  this.requestType = "POST";
  this.table = "StockOut";
  this.params = {};
  this.data = null;

}
test.prototype = new conf();
test.prototype.getData = function (response){

  var items =[
    {com:"AdminGoods",info:{}},
    {com:"AdminGoods",info:{}},
    {com:"AdminGoods",info:{}},
    {com:"AdminGoods",info:{}},
    {com:"AdminGoods",info:{}},

  ];

  this.data = items;
  return items
}

