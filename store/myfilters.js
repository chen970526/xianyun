export const dataFormat = (data, spe) => {
  data = new Date(data)
  spe = spe || '/'
  var year = data.getFullYear()
  var month = data.getMonth() + 1
  var day = data.getDate()
  var time = data.getHours()
  return year + spe + month + spe + day
}

export const datatime = (data, spe) => {
  data = new Date(data)
  spe = spe || '/'
  var time = data.getHours()
  var minute = data.getMinutes()
  return time + spe + minute
}
