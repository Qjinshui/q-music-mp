const baseURL = 'https://q-music-1910740-1311814359.ap-shanghai.run.tcloudbase.com'

export const get = (uri: string) => {
  wx.showLoading({
    title: '加载中'
  })
  return new Promise((resolve,reject)=>{
    wx.request({
      url: baseURL + uri,
      method: 'GET',
      success:(response)=>{
        resolve(response.data)
      },
      fail: reject,
      complete: ()=>{
        wx.hideLoading()
      }
    })
  })
}