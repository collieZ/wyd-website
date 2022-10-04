import Vue from 'vue'

// const defaultPreviewImgUrl = 'https://res.cloudinary.com/sourcetoad/image/upload/v1483582294/frog-2-sm_zjphps.jpg'
const defaultPreviewImgUrl = require('@/assets/images/placeholder/placeholder.jpg')
// console.log(s, 'img sss');

const init = function (el, binding, vnode) {
  console.log(binding.value, 'kkk')
  if (!Array.isArray(binding.value)) {
    throw new TypeError('传入数据必须是数组类型!')
  }
  if (!binding.value[0]) {
    throw new Error('请传入图片地址!')
  }
  const previewImgUrl = binding.value[1] || defaultPreviewImgUrl
  const newImgUrl = binding.value[0]
  // 创建预览和实际图片div
  const newImg = document.createElement('div')
  const previewImg = document.createElement('div')
  // 设置元素图片属性
  previewImg.setAttribute('class', 'tc-previewImg')
  newImg.setAttribute('class', 'tc-overlayImg')
  previewImg.setAttribute('data-image', newImgUrl)
  previewImg.setAttribute('tc-progressive', '')
  newImg.setAttribute('tc-progressive', '')
  previewImg.style.backgroundImage = `url(${previewImgUrl})`
  // 将创建子元素添加到父元素上
  el.appendChild(previewImg)
  // el.appendChild(newImg)
}

const inserte = function (el, binding) {
  // 创建 Img 对象，在缓存中加载图片，监听加载进度
  const Imgs = new Image()
  const preImgDom = Array.from(el.children).filter(d => d.getAttribute('class') === 'tc-previewImg')[0]
  Imgs.onload = function () {
    el.style.backgroundImage = `url(${Imgs.src})`
    el.style.opacity = '1'
    // console.log('URL 设置完成！！');
    preImgDom.remove()
  }
  Imgs.onerror = function () {
    // console.log('图片加载失败！！！');
    Imgs.src = defaultPreviewImgUrl
  }
  Imgs.src = binding.value[0]
  // console.log(el, 'ininiserlt');
}

const unbind = function (el) {
  // console.log('unbind', el);
}

Vue.directive('progressive', {
  bind: init,
  // update: init,
  inserted: inserte,
  // comppnentUpdated: lazy,
  unbind
})
