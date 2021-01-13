// callbacks function we run after a function

function md(flower, sugar, cb) {
  //mixing ingradients
  coockiedough = 'chocolate chip coockie'
  return(cb(coockiedough))
}

function oven(dough) {
  //logic
  return ('backed' + dough)
}

let chocolate = md('1cup', '5cup', oven)
console.log(chocolate)