export function _callback(params = { result:1 }){
  return new Promise((resolve, reject) => {
    resolve(params)
  })
}