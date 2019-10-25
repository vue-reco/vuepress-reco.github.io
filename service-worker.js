/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f5edc93d3d4d4030ee73a262788d1b99"
  },
  {
    "url": "assets/css/0.styles.9f6abb14.css",
    "revision": "fb81e2cdb6b4d689ea2d11d93286b2a4"
  },
  {
    "url": "assets/img/1.7e1db593.png",
    "revision": "7e1db5932a2c77ae21d1a43658740d7c"
  },
  {
    "url": "assets/img/11.c5c08d41.png",
    "revision": "c5c08d41d176a6236d023effc1560ad1"
  },
  {
    "url": "assets/img/12.75aaa91e.png",
    "revision": "75aaa91eae44e66c67389f803548c481"
  },
  {
    "url": "assets/img/2.546ac487.png",
    "revision": "546ac4870845bdae1fd686965ff8f306"
  },
  {
    "url": "assets/img/3.3b8e3c37.png",
    "revision": "3b8e3c373419b75d1b713e52a6c2fcaa"
  },
  {
    "url": "assets/img/4.daa6eaf2.png",
    "revision": "daa6eaf2671a7c3b139bc403af33488b"
  },
  {
    "url": "assets/img/5.a3a628ab.png",
    "revision": "a3a628ab01f201989621296ac8051437"
  },
  {
    "url": "assets/img/6.0ded2d21.png",
    "revision": "0ded2d214d0678ef97dc903786846996"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/home-blog.7765e6eb.png",
    "revision": "7765e6ebfae2dd800f7554015eff0428"
  },
  {
    "url": "assets/img/home-head.9e98f9ef.png",
    "revision": "9e98f9efba10bcad33519b782a1d09db"
  },
  {
    "url": "assets/img/icon_vuepress_reco.406370f8.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "assets/img/kanbanniang_2.7ccb19c9.png",
    "revision": "7ccb19c90325d4daae5df43e2920bdc1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.0ab87cec.js",
    "revision": "0ba84905ffa180990903e9dd3eec9f28"
  },
  {
    "url": "assets/js/10.f0170d0b.js",
    "revision": "e68ca811859ff80dcd6f8fc4cfda6445"
  },
  {
    "url": "assets/js/11.cc634914.js",
    "revision": "667144368d2fbf071c0df3c5242a8f7b"
  },
  {
    "url": "assets/js/12.8f068565.js",
    "revision": "e061200c3c9f512299234c6752a70258"
  },
  {
    "url": "assets/js/13.345f43e0.js",
    "revision": "f7e0ae251e07b7947825e578dcde829f"
  },
  {
    "url": "assets/js/14.b96f88d8.js",
    "revision": "463ce6763371f1d9cd41f2c3bc8d9379"
  },
  {
    "url": "assets/js/15.65a082c8.js",
    "revision": "1205496b5c1a8e8386ebdf8985788703"
  },
  {
    "url": "assets/js/16.a3a4e14a.js",
    "revision": "4ac08428f535a962f798e6aecde35394"
  },
  {
    "url": "assets/js/17.8e9e5ba6.js",
    "revision": "529f83a53b42ee4cfbca7cc2b622fea7"
  },
  {
    "url": "assets/js/18.9ff1b2d2.js",
    "revision": "fb9c784f2d0f76a659050843c2cc2b15"
  },
  {
    "url": "assets/js/19.a5b7e601.js",
    "revision": "2bfe0b0f5cb06c71461b7cb11aeb8d36"
  },
  {
    "url": "assets/js/20.4c91cb84.js",
    "revision": "3c74d2e5c17dd657d1fadc00923dcdac"
  },
  {
    "url": "assets/js/21.3481718a.js",
    "revision": "61903d5beb81085a0c14f9c338abfce4"
  },
  {
    "url": "assets/js/22.c5dc016a.js",
    "revision": "7090d8f3e785dbf25a49b2453dea083d"
  },
  {
    "url": "assets/js/23.2d37f687.js",
    "revision": "817c65f0570b8f3200100c21f7db28c9"
  },
  {
    "url": "assets/js/24.9e5d9edc.js",
    "revision": "d639ab17feb867ec8a94c3d8d5c52f78"
  },
  {
    "url": "assets/js/25.fcc70ecf.js",
    "revision": "5dacff099f69ee49854d63f9b93bdc9a"
  },
  {
    "url": "assets/js/26.77267786.js",
    "revision": "7e258780833307c2398cd4ac4f4624ce"
  },
  {
    "url": "assets/js/27.3a3fb8e5.js",
    "revision": "8552bae0079df988525a94f782e5d7e8"
  },
  {
    "url": "assets/js/28.009e4392.js",
    "revision": "fc466d34267ea6b795b1fb8669ad7010"
  },
  {
    "url": "assets/js/29.43f1d889.js",
    "revision": "a29f1bba334ee652d41a1f03f7581189"
  },
  {
    "url": "assets/js/3.ef010b36.js",
    "revision": "f4982455f0cc5756a0d3b0bb83e6e017"
  },
  {
    "url": "assets/js/30.728c4e6b.js",
    "revision": "970bbf9ca272aee64bb87e039bdb8b9d"
  },
  {
    "url": "assets/js/31.40983aa1.js",
    "revision": "31c7a460e83db6036318fe28b8f2d36a"
  },
  {
    "url": "assets/js/32.185b3414.js",
    "revision": "a4a7c9c10a6330dd827541516daab794"
  },
  {
    "url": "assets/js/33.8ff320c3.js",
    "revision": "ff1773fc50d021be36bf395034e9f6a3"
  },
  {
    "url": "assets/js/34.4e6b7ddf.js",
    "revision": "dc403fb01c7f075cef8690c5e3f8c33d"
  },
  {
    "url": "assets/js/35.5ebc701a.js",
    "revision": "4bd481c103aeba598c91ac893d2cc230"
  },
  {
    "url": "assets/js/36.4a443792.js",
    "revision": "14e4b43b1a61fef2db3fbe408430f8ff"
  },
  {
    "url": "assets/js/37.1401397d.js",
    "revision": "1616720f8dbc9dc0f44c06695ec391de"
  },
  {
    "url": "assets/js/38.be2ecf81.js",
    "revision": "91fcf1dbe7b1220fa3bc118f29e98cf1"
  },
  {
    "url": "assets/js/39.60f305ca.js",
    "revision": "4852ad4987326af94ef6f8def93140e8"
  },
  {
    "url": "assets/js/4.984ec004.js",
    "revision": "f27adbf4008554f2a5a7ff99a41a2e7b"
  },
  {
    "url": "assets/js/40.dd8f9953.js",
    "revision": "dc0ccdd8a9fb959755e7b82576028ee3"
  },
  {
    "url": "assets/js/41.2b69fcc0.js",
    "revision": "4a2907c1cbe96ae23f52f4e708c635ec"
  },
  {
    "url": "assets/js/42.0c1c4012.js",
    "revision": "fe3bb04c0ff5514e1ae2465598da9b40"
  },
  {
    "url": "assets/js/43.77f8289e.js",
    "revision": "b33ccfd7337b9da5b511a1d1c53ab0a3"
  },
  {
    "url": "assets/js/44.11be0210.js",
    "revision": "ffd800045b310341cab6207e2581d9ef"
  },
  {
    "url": "assets/js/45.9fc1a292.js",
    "revision": "d74d0f852e95d93241593522dbcd4029"
  },
  {
    "url": "assets/js/46.f24f6251.js",
    "revision": "97a13eb5918cf6cd041028777794966d"
  },
  {
    "url": "assets/js/47.b5915a12.js",
    "revision": "a5630f55fb7f80200eb9c4d5ee25b359"
  },
  {
    "url": "assets/js/48.7b7ae88b.js",
    "revision": "558bb9ca3fb8cc49c60b2187c23d8527"
  },
  {
    "url": "assets/js/49.cfd3fc0a.js",
    "revision": "5fb42dae07b38d8b7e700eaf30361412"
  },
  {
    "url": "assets/js/5.48bf07aa.js",
    "revision": "d56ca00741258c503cb9614e30dfdebd"
  },
  {
    "url": "assets/js/50.b66d9307.js",
    "revision": "b5b37ef4071b83fc9ee0ef96e7a4c796"
  },
  {
    "url": "assets/js/51.f2067969.js",
    "revision": "795677374a53da4ba00bc4f01b382059"
  },
  {
    "url": "assets/js/52.5659ca2e.js",
    "revision": "eed9fb1a5d392a91766e30d7af042c34"
  },
  {
    "url": "assets/js/53.101bfb22.js",
    "revision": "b32a6676da23aac005c602c50d348158"
  },
  {
    "url": "assets/js/54.2c76bec1.js",
    "revision": "6c6cfda4c07903736948e59a3514b641"
  },
  {
    "url": "assets/js/6.450a3628.js",
    "revision": "e1c014b1c05b6fd49ee27d9a7ceb7afb"
  },
  {
    "url": "assets/js/7.940754c3.js",
    "revision": "c08f2d5099839756bc7de20027d72550"
  },
  {
    "url": "assets/js/8.30f3b29f.js",
    "revision": "9567e34daf5e605bc155e604d5c31a2f"
  },
  {
    "url": "assets/js/9.2e1773f7.js",
    "revision": "704cac4e6369c1270af9605576a6c0a3"
  },
  {
    "url": "assets/js/app.9482ca9d.js",
    "revision": "b1bef9a136fe26742853c97d0bcae5ef"
  },
  {
    "url": "blogImages/0.png",
    "revision": "7765e6ebfae2dd800f7554015eff0428"
  },
  {
    "url": "blogImages/1.png",
    "revision": "0e76b92f6f84b7c06330e536fedd2c9e"
  },
  {
    "url": "blogImages/10.png",
    "revision": "3d933d4420816ba3a03fcbae8121b779"
  },
  {
    "url": "blogImages/11.png",
    "revision": "1cd519a82f374792ad66314ef367f299"
  },
  {
    "url": "blogImages/12.png",
    "revision": "44823314515c8e0ee2be59d1d395b915"
  },
  {
    "url": "blogImages/13.png",
    "revision": "ed91e9c43c4bea93423b6a9cfe4e418a"
  },
  {
    "url": "blogImages/14.png",
    "revision": "5ae1fc8142a1222e083d3265c24a2414"
  },
  {
    "url": "blogImages/15.png",
    "revision": "d3873f2d64c2f7da637b1e8b115e4d66"
  },
  {
    "url": "blogImages/16.png",
    "revision": "57f7d7defbefc174bb6cbbfa793a552c"
  },
  {
    "url": "blogImages/2.png",
    "revision": "9d506458c50a3ffba01ed1021b85adb2"
  },
  {
    "url": "blogImages/3.png",
    "revision": "c2ba93e2d6c7c1db6203acecef35f659"
  },
  {
    "url": "blogImages/4.png",
    "revision": "70697bb43202017aa6baafe19700d47d"
  },
  {
    "url": "blogImages/5.png",
    "revision": "b1119b74f767be486ba4444c5d21bd55"
  },
  {
    "url": "blogImages/6.png",
    "revision": "dc449526437cb7eff15e28d81910376c"
  },
  {
    "url": "blogImages/7.png",
    "revision": "955781ac6a70c180c82b0ff34de3c320"
  },
  {
    "url": "blogImages/8.png",
    "revision": "a64ce7c8a0d616209a3819256d634559"
  },
  {
    "url": "blogImages/9.png",
    "revision": "29004117a86c9da7d9d5f34e3fdcf93c"
  },
  {
    "url": "categories/blog/index.html",
    "revision": "a2a7b245f960b2363a4ed6b8f99ad603"
  },
  {
    "url": "categories/index.html",
    "revision": "c6dbae0d50a90d0fd2ee4042ea2def76"
  },
  {
    "url": "head.jpg",
    "revision": "350e4ac403a28d3ee7580e76d27e3202"
  },
  {
    "url": "head.png",
    "revision": "9e98f9efba10bcad33519b782a1d09db"
  },
  {
    "url": "hero_old.png",
    "revision": "4e87182c817155fe1c94932ca2608e1f"
  },
  {
    "url": "icon_vuepress_reco.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "icon_vuepress_reco.svg",
    "revision": "d8e877e0520ecbd7a7afecdfe46b5a09"
  },
  {
    "url": "index.html",
    "revision": "0e090a8e5460cee078edc2b7109d7639"
  },
  {
    "url": "tag/index.html",
    "revision": "ea3d6c2fb8b2dd9904c697443a512bec"
  },
  {
    "url": "timeline/index.html",
    "revision": "6df48cea0b54e9de376294d27f9fe123"
  },
  {
    "url": "views/0.x/abstract.html",
    "revision": "67e7fcaa3a26d15e86ea2ec09d83e518"
  },
  {
    "url": "views/0.x/category.html",
    "revision": "c99bc22a52558ae5fbacd81d26cea95c"
  },
  {
    "url": "views/0.x/configJs.html",
    "revision": "e2eac39ca826f504de368cdeebe322a5"
  },
  {
    "url": "views/0.x/home.html",
    "revision": "e46963f26212f13b0d5dd2954b3705cf"
  },
  {
    "url": "views/0.x/index.html",
    "revision": "589cade1b12a10f4e707f42307e676eb"
  },
  {
    "url": "views/0.x/installUse.html",
    "revision": "5a6c36407e07fb95b6b18e7c87e49148"
  },
  {
    "url": "views/0.x/password.html",
    "revision": "7f56afb92e875cc507c945e2f67915c4"
  },
  {
    "url": "views/0.x/tag.html",
    "revision": "7af9f762a3e87697036d996f8bc621e1"
  },
  {
    "url": "views/0.x/timeline.html",
    "revision": "8efdbcbc7e5ccdf385a9da4565953a2b"
  },
  {
    "url": "views/0.x/valine.html",
    "revision": "77f8390446f8a468f16100c8645d8425"
  },
  {
    "url": "views/1.x/0update1.html",
    "revision": "58c09209aa75be9eaf329d4fa3c3e64c"
  },
  {
    "url": "views/1.x/404.html",
    "revision": "5a7e7f6d7675d6d644de559dc9c8cc3d"
  },
  {
    "url": "views/1.x/abstract.html",
    "revision": "67e7fcaa3a26d15e86ea2ec09d83e518"
  },
  {
    "url": "views/1.x/blog.html",
    "revision": "fc5e6dfb070e21e2c2e475b726beb957"
  },
  {
    "url": "views/1.x/configJs.html",
    "revision": "e2eac39ca826f504de368cdeebe322a5"
  },
  {
    "url": "views/1.x/frontMatter.html",
    "revision": "94d1fe50cc5af4a94ecce17c69519c87"
  },
  {
    "url": "views/1.x/ga.html",
    "revision": "bcc9122a06e3b0adc2436f56c7c74615"
  },
  {
    "url": "views/1.x/home.html",
    "revision": "e46963f26212f13b0d5dd2954b3705cf"
  },
  {
    "url": "views/1.x/index.html",
    "revision": "589cade1b12a10f4e707f42307e676eb"
  },
  {
    "url": "views/1.x/installUse.html",
    "revision": "5a6c36407e07fb95b6b18e7c87e49148"
  },
  {
    "url": "views/1.x/password.html",
    "revision": "7f56afb92e875cc507c945e2f67915c4"
  },
  {
    "url": "views/1.x/recommend.html",
    "revision": "b09ad850ce9ccd6bff4dba7c7db834ce"
  },
  {
    "url": "views/1.x/themePicker.html",
    "revision": "0feb9f6ee3efc53548e33d504c135465"
  },
  {
    "url": "views/1.x/timeline.html",
    "revision": "8efdbcbc7e5ccdf385a9da4565953a2b"
  },
  {
    "url": "views/1.x/valine.html",
    "revision": "30c1c59c147782bd45c980c6b5a8309e"
  },
  {
    "url": "views/other/about.html",
    "revision": "c8c1a26c1b08aa8af3d6fa843696f2ac"
  },
  {
    "url": "views/other/deploy.html",
    "revision": "efe9bf719d60283c5e14e51fce82d548"
  },
  {
    "url": "views/other/develop.html",
    "revision": "538d41c80e17fc8ee25db81a7d2f2f66"
  },
  {
    "url": "views/other/domain.html",
    "revision": "a4423996996adef31ffc5e0b38888b9f"
  },
  {
    "url": "views/other/notice.html",
    "revision": "c40f70259d49274f2d92adc8a3838202"
  },
  {
    "url": "views/other/question.html",
    "revision": "4d06c93db193f23151101c59ae4f24d8"
  },
  {
    "url": "views/other/theme-example.html",
    "revision": "68ecc3c5b0d07af9e223c25eab0ac883"
  },
  {
    "url": "views/plugins/backToTop.html",
    "revision": "7e54ac406bf82303f71c0f2d71e2f1c9"
  },
  {
    "url": "views/plugins/comments.html",
    "revision": "6cf6a53dc8b1ba9554e667b7e566b744"
  },
  {
    "url": "views/plugins/ga.html",
    "revision": "af5f8657eebdbdbfcbdd635932df840b"
  },
  {
    "url": "views/plugins/index.html",
    "revision": "d18ad378737100fff685bf031857bf76"
  },
  {
    "url": "views/plugins/kanbanniang.html",
    "revision": "0deb28eb063066680ba2c7108d4d2936"
  },
  {
    "url": "views/plugins/loadingPage.html",
    "revision": "a5b7a2c8b1fa6f9998d2b77a0f5a082e"
  },
  {
    "url": "views/plugins/pagation.html",
    "revision": "e67182bdc8f5ea5ee0321280bfb9aaa0"
  },
  {
    "url": "views/plugins/screenfull.html",
    "revision": "a9ebc8dd8c106a5c8bcda4c5a3647e67"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
