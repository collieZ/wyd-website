// 全局配置
// 登录URL
export const API = 'http://www.paintingapi.pinxianhs.com/api';
// 3D画廊的远程地址
export const GalleryUrl = 'http://www.gallery.pinxianhs.com';
//项目远程部署的地址
export const Domain = 'http://www.pinxianhs.com';

const URLS = {
  'zh': 'baseApi',
  'en': 'baseApiEn'
}
export let base_url = 'baseApi'
export const setBaseUrl = (lang) => {
  base_url = URLS[lang]
}