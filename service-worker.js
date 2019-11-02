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
    "revision": "55dfc2637113b65a6c60cdf8f1367926"
  },
  {
    "url": "assets/css/0.styles.129c3669.css",
    "revision": "c11a5891a0bfd1ace90f93b206065334"
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
    "url": "assets/img/blog.3e05c04a.svg",
    "revision": "3e05c04a69a1437e95c640102feca339"
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
    "url": "assets/img/kanbannaing_1.9d4605aa.png",
    "revision": "9d4605aa2583bf47e34fd44310d28da7"
  },
  {
    "url": "assets/img/kanbanniang_2.ef1f6e5b.png",
    "revision": "ef1f6e5bd64755096091089e16cd6baa"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/today.484a4d22.svg",
    "revision": "484a4d22a4aa9be93c18433c5ff3903f"
  },
  {
    "url": "assets/img/tomorrow.b4d5d120.svg",
    "revision": "b4d5d12018797c09ee380995039f9148"
  },
  {
    "url": "assets/img/yesterday.bb55e9bb.svg",
    "revision": "bb55e9bbbe3826708fa4a0e5944a4ace"
  },
  {
    "url": "assets/js/1.64c5e3d6.js",
    "revision": "358c3e6e02a691aa95844795d8f9fe1e"
  },
  {
    "url": "assets/js/10.1aa6509c.js",
    "revision": "2bb52ba10d6f78006fc1e71b7e9dd3d6"
  },
  {
    "url": "assets/js/11.a3d2e0d4.js",
    "revision": "cb9fb9ff90b95b4c1d914e7628d1f9e7"
  },
  {
    "url": "assets/js/12.d81cf9cc.js",
    "revision": "4cba4dc6f93ccc287ad338c0b1936a01"
  },
  {
    "url": "assets/js/13.9750c7ec.js",
    "revision": "3e05890d18b3d83da9175d9b68f72ed3"
  },
  {
    "url": "assets/js/14.255b3c1c.js",
    "revision": "9b3df77585f5865da4286d717f66a2f1"
  },
  {
    "url": "assets/js/15.c3e54dcf.js",
    "revision": "afeb6acb7428680f49bc12d77e7d678c"
  },
  {
    "url": "assets/js/16.18b25f8d.js",
    "revision": "a70414254ddae4de3355fe06f46c05fe"
  },
  {
    "url": "assets/js/17.2211215b.js",
    "revision": "a7efee1c3d19074dffe0a333801ef118"
  },
  {
    "url": "assets/js/18.2ffc83fd.js",
    "revision": "d54f107a5d868d8a9f5cb92a831bb1c5"
  },
  {
    "url": "assets/js/19.fc8e3f24.js",
    "revision": "29c5b63a5d3ff4a6bcdfddbd34f8a9f6"
  },
  {
    "url": "assets/js/2.b4f28e08.js",
    "revision": "92c83c2b54552478ecba5bad01a1f52d"
  },
  {
    "url": "assets/js/20.c25cf5f2.js",
    "revision": "22a0ba8ca63964ff6bdfbb1f8fe57438"
  },
  {
    "url": "assets/js/21.9bbc5012.js",
    "revision": "09e7f2209244975b5aeba98db2628d8c"
  },
  {
    "url": "assets/js/22.22cc83e8.js",
    "revision": "af9e7ec22d4f7f9f68df385cf52b4707"
  },
  {
    "url": "assets/js/23.9c165cc4.js",
    "revision": "ecaab9feb63e927c39f2c580a7222f0b"
  },
  {
    "url": "assets/js/24.5321a850.js",
    "revision": "e30725c1f366e8a9a6ea5fc38d478303"
  },
  {
    "url": "assets/js/25.da157e0c.js",
    "revision": "b648ac0b19e4c91a6e3952eb032fb871"
  },
  {
    "url": "assets/js/26.263bbd68.js",
    "revision": "3746c38227a8c2935850c2111e8e2f53"
  },
  {
    "url": "assets/js/27.1f133b59.js",
    "revision": "d8c8b2d2d852c5225859c290aec79571"
  },
  {
    "url": "assets/js/28.78e825c6.js",
    "revision": "ff11f21bec2114b54baf8db52ef6e448"
  },
  {
    "url": "assets/js/29.85e5074e.js",
    "revision": "fd52e06a9abf248d6b6fcbc601fda2e8"
  },
  {
    "url": "assets/js/30.4ec4af76.js",
    "revision": "055701bf4f216ff00590a0b2ac94edcb"
  },
  {
    "url": "assets/js/31.f9edcd93.js",
    "revision": "8f7cc9e9006852472ddaf10a7ea1751a"
  },
  {
    "url": "assets/js/32.f92f319d.js",
    "revision": "411b1ff766d8405830e4010f9dd0011f"
  },
  {
    "url": "assets/js/33.98d00d0a.js",
    "revision": "a8523ded22c7d1aaa2be9c40b9676ced"
  },
  {
    "url": "assets/js/34.d81a4b21.js",
    "revision": "3e1771e934e7a01ab7a50ca1f44a8846"
  },
  {
    "url": "assets/js/35.66d3ae57.js",
    "revision": "70f248eeed62256db62d5402aff62671"
  },
  {
    "url": "assets/js/36.cc916325.js",
    "revision": "4877161e7819256a237d4029248ccb2f"
  },
  {
    "url": "assets/js/37.ec50da76.js",
    "revision": "e533b7957c873d2a941e06760d84b606"
  },
  {
    "url": "assets/js/38.66f7494c.js",
    "revision": "5dafadfc0c06286c886af70e915f9b14"
  },
  {
    "url": "assets/js/39.724ab4a9.js",
    "revision": "bfea5b022055180f96068a7276962793"
  },
  {
    "url": "assets/js/4.1a3005c1.js",
    "revision": "983243b3a512d84b3a8bde01cd82c4d3"
  },
  {
    "url": "assets/js/40.819a1f8c.js",
    "revision": "9ae027832505c9f8f9d6f951ddae7cae"
  },
  {
    "url": "assets/js/41.d125ba21.js",
    "revision": "787f25b3ef6d01c800f3bbaf6fd1ca8b"
  },
  {
    "url": "assets/js/42.12d1a814.js",
    "revision": "241b8b7292970450a02f3208ece67a70"
  },
  {
    "url": "assets/js/43.b627d86b.js",
    "revision": "ab8bfc636c7431e15c99410da9e887c0"
  },
  {
    "url": "assets/js/44.1c15a7e9.js",
    "revision": "22a5879fd5ff6566fd5722e51e0f2268"
  },
  {
    "url": "assets/js/45.7b7b10a8.js",
    "revision": "7e707f4a7e34d52a261839869c8e47d7"
  },
  {
    "url": "assets/js/46.5ccf909c.js",
    "revision": "493a82cd62dd968b98018e91492bf7b4"
  },
  {
    "url": "assets/js/47.a67e9d7b.js",
    "revision": "4fd9b493311da1fc1072a3f7ca20049f"
  },
  {
    "url": "assets/js/48.e7bf54a8.js",
    "revision": "4d999988a6ef5b68d6207af0930d1dbd"
  },
  {
    "url": "assets/js/49.73ed960e.js",
    "revision": "d3a03c075e567dc3721c33aa762b5863"
  },
  {
    "url": "assets/js/5.fe6cad78.js",
    "revision": "c275732ef5fe9be59ae706c1c63bcca4"
  },
  {
    "url": "assets/js/50.aa1b0eaa.js",
    "revision": "5b53449e5656d66ba0c28e46a87586e2"
  },
  {
    "url": "assets/js/51.41f5406d.js",
    "revision": "e08f7691bb6a67dcd8c8422bd6fc1a5e"
  },
  {
    "url": "assets/js/52.c5a078f9.js",
    "revision": "f5484658bab0451c07d8d4ee1575e8ac"
  },
  {
    "url": "assets/js/53.f6ff7b90.js",
    "revision": "98cf6a4f49fb85678625e9798aa41c34"
  },
  {
    "url": "assets/js/54.86abfcc2.js",
    "revision": "8d54f2d8699934c990aee84782765381"
  },
  {
    "url": "assets/js/55.b0a0f285.js",
    "revision": "f2641fb3d34aca2e6da9fc6fb41ff3e6"
  },
  {
    "url": "assets/js/56.393838ba.js",
    "revision": "5d2e65dd0903eea3958007df10bb2283"
  },
  {
    "url": "assets/js/57.89fe617e.js",
    "revision": "1cccf6372ff0af6e8df2e0de9bb224b0"
  },
  {
    "url": "assets/js/58.1662a220.js",
    "revision": "67f71f485a8760e2be70ff469eaf8c91"
  },
  {
    "url": "assets/js/59.be706d70.js",
    "revision": "9e660d8038fa18341414ca439e9c37e5"
  },
  {
    "url": "assets/js/6.4d928659.js",
    "revision": "39990fb3abf34167254cb7455bddc6a3"
  },
  {
    "url": "assets/js/60.4db001a7.js",
    "revision": "1107b09dc5a5d42c7195d0151eb9bb83"
  },
  {
    "url": "assets/js/7.ffed892c.js",
    "revision": "fcb4f370a0892e55755d6a97c6ff61be"
  },
  {
    "url": "assets/js/8.95a6af46.js",
    "revision": "fa6675ceeb77d55b4270ffbd81f5585d"
  },
  {
    "url": "assets/js/9.3e0cf99a.js",
    "revision": "a11379a3eab9e98c28681d036b273429"
  },
  {
    "url": "assets/js/app.6c9d73e4.js",
    "revision": "e60066fdd528ccc03aaaa687acfdc774"
  },
  {
    "url": "blogImages/BlackHouse.png",
    "revision": "a64ce7c8a0d616209a3819256d634559"
  },
  {
    "url": "blogImages/CodingandFixing.png",
    "revision": "5ae1fc8142a1222e083d3265c24a2414"
  },
  {
    "url": "blogImages/latteandcat.png",
    "revision": "9d506458c50a3ffba01ed1021b85adb2"
  },
  {
    "url": "blogImages/LINUX48.png",
    "revision": "9fa505d2de5b827dfef076d402fbb1cf"
  },
  {
    "url": "blogImages/originalxzx.png",
    "revision": "70697bb43202017aa6baafe19700d47d"
  },
  {
    "url": "blogImages/SigureMo.png",
    "revision": "eb7a7909e8f01eb88d5fbc497f55fe12"
  },
  {
    "url": "blogImages/znote.png",
    "revision": "44823314515c8e0ee2be59d1d395b915"
  },
  {
    "url": "blogImages/会走路的三百块.png",
    "revision": "c2ba93e2d6c7c1db6203acecef35f659"
  },
  {
    "url": "blogImages/凯小默的博客.png",
    "revision": "ed91e9c43c4bea93423b6a9cfe4e418a"
  },
  {
    "url": "blogImages/刘晓北.png",
    "revision": "0e76b92f6f84b7c06330e536fedd2c9e"
  },
  {
    "url": "blogImages/午后南杂.png",
    "revision": "7765e6ebfae2dd800f7554015eff0428"
  },
  {
    "url": "blogImages/学海无涯.png",
    "revision": "1cd519a82f374792ad66314ef367f299"
  },
  {
    "url": "blogImages/月上秦少.png",
    "revision": "636680da3f5835024fbd99e34aaf43f2"
  },
  {
    "url": "blogImages/烟雨江畔.png",
    "revision": "d4c953a7579bf670ada719602069edd8"
  },
  {
    "url": "categories/blog/index.html",
    "revision": "770ca22cb8c3d0e9b264391fb57b8631"
  },
  {
    "url": "categories/index.html",
    "revision": "41bd44d7ff22eedb4bfb39330d911870"
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
    "revision": "84da71c65b404e6223ea25c622509f13"
  },
  {
    "url": "tag/index.html",
    "revision": "2adae1d471151f333346cbc150e80760"
  },
  {
    "url": "timeline/index.html",
    "revision": "f3d80b6c96aa698c478040f2da35d468"
  },
  {
    "url": "views/0.x/abstract.html",
    "revision": "4873bd50f8ae1098f70bae679b570276"
  },
  {
    "url": "views/0.x/category.html",
    "revision": "9050a79d1d367da8b3d78d83058d45d6"
  },
  {
    "url": "views/0.x/configJs.html",
    "revision": "338473fcf7fc0bb9501032c2592e3369"
  },
  {
    "url": "views/0.x/home.html",
    "revision": "9438e7bf2cd14f02b764bc5d86d3b5b6"
  },
  {
    "url": "views/0.x/index.html",
    "revision": "f79c66d7a905c1f2e6b1665c54f0e4a7"
  },
  {
    "url": "views/0.x/installUse.html",
    "revision": "5c8f88f08aaf1745526516b9aff01c0c"
  },
  {
    "url": "views/0.x/password.html",
    "revision": "83550efd5aa62d6795b3aa7cad00771d"
  },
  {
    "url": "views/0.x/tag.html",
    "revision": "6898f5ba60cb77d965ae99aadaec4973"
  },
  {
    "url": "views/0.x/timeline.html",
    "revision": "1ecabcf25e5f1bc89188e953fad2bf01"
  },
  {
    "url": "views/0.x/valine.html",
    "revision": "82d7118c93c4529aeffd0e511ea1f1ac"
  },
  {
    "url": "views/1.x/0update1.html",
    "revision": "388e5e905adac505edb73712bbf6b6bd"
  },
  {
    "url": "views/1.x/404.html",
    "revision": "0200019f4b9985f01ba4265a2e94f98f"
  },
  {
    "url": "views/1.x/abstract.html",
    "revision": "4873bd50f8ae1098f70bae679b570276"
  },
  {
    "url": "views/1.x/blog.html",
    "revision": "5192dc5bf67f668282551764ab14290c"
  },
  {
    "url": "views/1.x/configJs.html",
    "revision": "338473fcf7fc0bb9501032c2592e3369"
  },
  {
    "url": "views/1.x/frontMatter.html",
    "revision": "ea5e3f79affcda432f0b6ad1f88ca91b"
  },
  {
    "url": "views/1.x/ga.html",
    "revision": "2559fabe87f989ed9cb68e1a3b8b2f8f"
  },
  {
    "url": "views/1.x/home.html",
    "revision": "9438e7bf2cd14f02b764bc5d86d3b5b6"
  },
  {
    "url": "views/1.x/index.html",
    "revision": "f79c66d7a905c1f2e6b1665c54f0e4a7"
  },
  {
    "url": "views/1.x/installUse.html",
    "revision": "5c8f88f08aaf1745526516b9aff01c0c"
  },
  {
    "url": "views/1.x/password.html",
    "revision": "83550efd5aa62d6795b3aa7cad00771d"
  },
  {
    "url": "views/1.x/recommend.html",
    "revision": "dac7ccd443b6a08ac3321fdad9004aaa"
  },
  {
    "url": "views/1.x/themePicker.html",
    "revision": "ed582743bce402b279d04323c849f456"
  },
  {
    "url": "views/1.x/timeline.html",
    "revision": "1ecabcf25e5f1bc89188e953fad2bf01"
  },
  {
    "url": "views/1.x/valine.html",
    "revision": "0969fe30676b1b7a675ddeed2a886411"
  },
  {
    "url": "views/other/about.html",
    "revision": "98c7664b7cf1cf467868ad01bbbe1951"
  },
  {
    "url": "views/other/deploy.html",
    "revision": "4138c4d9b8ad4fbe336811c765577c61"
  },
  {
    "url": "views/other/develop.html",
    "revision": "290a920feaa77fa677fa4daf5ec705ac"
  },
  {
    "url": "views/other/domain.html",
    "revision": "16b5214ebfbf4610b38a245fa86476de"
  },
  {
    "url": "views/other/notice.html",
    "revision": "eee6c13e97d59fa62d4fdb1b20ddeaeb"
  },
  {
    "url": "views/other/one-year-old.html",
    "revision": "9e314c4c7290ee8d5bfba18e7894de78"
  },
  {
    "url": "views/other/question.html",
    "revision": "760d9202ff312a95c1a376e7dfeba3cb"
  },
  {
    "url": "views/other/theme-example.html",
    "revision": "e08667248e62bbef5b2d18c096b518dc"
  },
  {
    "url": "views/plugins/backToTop.html",
    "revision": "4b5efae83282459c641131b65dadd83a"
  },
  {
    "url": "views/plugins/comments.html",
    "revision": "b0e8bb2c724effb06a20fecaf712d985"
  },
  {
    "url": "views/plugins/extractCode.html",
    "revision": "0578fca5a1da11c9e551f92c55ddbf45"
  },
  {
    "url": "views/plugins/ga.html",
    "revision": "3947129d1508d9ba81856741b2a674ff"
  },
  {
    "url": "views/plugins/index.html",
    "revision": "ec6d77e70c4069c8272702f7e28fda87"
  },
  {
    "url": "views/plugins/kanbanniang.html",
    "revision": "a08febfc3b53b50853996b8f5025ba1f"
  },
  {
    "url": "views/plugins/loadingPage.html",
    "revision": "e921e508aca17738ae34121feddbee02"
  },
  {
    "url": "views/plugins/pagation.html",
    "revision": "9ff591b8aa987f833568ba412c59adeb"
  },
  {
    "url": "views/plugins/screenfull.html",
    "revision": "2615ad16f762d7dbd63ae9dae3c3c849"
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
