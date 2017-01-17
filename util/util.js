function formatTime(time) {
  if (typeof time !== 'number' || time < 0) {
    return time
  }

  var hour = parseInt(time / 3600)
  time = time % 3600
  var minute = parseInt(time / 60)
  time = time % 60
  var second = time

  return ([hour, minute, second]).map(function (n) {
    n = n.toString()
    return n[1] ? n : '0' + n
  }).join(':')
}

function formatLocation(longitude, latitude) {
  if (typeof longitude === 'string' && typeof latitude === 'string') {
    longitude = parseFloat(longitude)
    latitude = parseFloat(latitude)
  }

  longitude = longitude.toFixed(2)
  latitude = latitude.toFixed(2)

  return {
    longitude: longitude.toString().split('.'),
    latitude: latitude.toString().split('.')
  }
}

function formatDate (time){
    let _time = time
    if (typeof _time !== 'number' || _time < 0) {
      return _time
    }
    if( _time.toString().length === 10 ){
      _time = parseInt(_time.toString().concat('000'))
    }

    let date = new Date(_time)

    return ([date.getFullYear(),date.getMonth() + 1,date.getDate()]).map(function(item){
      return item.toString()
    })
}
module.exports = {
  formatTime: formatTime,
  formatLocation: formatLocation,
  formatDate: formatDate
}
