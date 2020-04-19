
export { //很关键
  networking
}

function networking() {

  this.requestType = "POST";//get update  delete none
  this.url = "StockOut";
  this.params = {};

}
networking.prototype.request = function (axios,conf,success){

  var params = new URLSearchParams()
  params.append('table', conf.url)
  params.append('params', JSON.stringify(conf.params))
  var url = ''
  if (conf.requestType == 'GET'){
    url = '/getNew'
  }else if (conf.requestType == 'UPDATE'){
    url = '/updateNew'
  }else if (conf.requestType == 'DELETE'){
    url = '/deleteNew'
  }
    axios
    .post(url, params)
    .then(response => {
      var data = response['data']
      if (data['code'] == 1000) {

        success(data)

      }else {

        alert(data("message"))
      }

    })
    .catch(function (error) {
      alert(error)
    })

}



