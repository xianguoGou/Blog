import request from './request'

export async function getBanners() {
   return await request.get('/api/banners')
   
}

getBanners().then(res => {
    console.log('getBanners', res)
})