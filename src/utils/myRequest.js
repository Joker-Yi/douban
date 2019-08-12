/**
 * Created by Yee .
 */

function myRequest(options){
    return new Promise((resolve, reject) => {
        wx.request({
            url: options.url,//请求的路径
            method: options.method || 'get',//请求方式
            data: options.data || {},//请求参数
            header: options.header || {},//请求头
            scuccess: function (res) {
                //成功后的回调
                resolve(res)
            },
            fail(err){
                //失败后的回调
                reject(err)
            }
        })
    })
}
//方法暴露出去
export default myRequest;









