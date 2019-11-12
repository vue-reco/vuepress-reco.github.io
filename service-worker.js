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
    "revision": "b79708c0be0efab17f32212cb42c049d"
  },
  {
    "url": "assets/css/0.styles.7ada6ff5.css",
    "revision": "fe71149d47e4b8796af2e0bd924a79d3"
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
    "url": "assets/js/1.c0e98b80.js",
    "revision": "eb2e4a7d8c45dfb5309fd3ae674a7b61"
  },
  {
    "url": "assets/js/10.7d66348a.js",
    "revision": "1ed0383f44451d939f4c490d7d6024f9"
  },
  {
    "url": "assets/js/11.b25515e0.js",
    "revision": "7b393fb7ba8778f7b9d30f2bbf4e106b"
  },
  {
    "url": "assets/js/12.7dd6af79.js",
    "revision": "7c71b19078817d8e8716d712be030e36"
  },
  {
    "url": "assets/js/13.eae63470.js",
    "revision": "165663cb4eeee6904d85dded0b115b9a"
  },
  {
    "url": "assets/js/14.8140f563.js",
    "revision": "693371d2acc13207a1b226543d1e5a31"
  },
  {
    "url": "assets/js/15.516c344a.js",
    "revision": "345bd7827ed9b47dd2c397ac0f286e4f"
  },
  {
    "url": "assets/js/16.f347e390.js",
    "revision": "25a9f3bd633077d1a63fdd4e4a044639"
  },
  {
    "url": "assets/js/17.a9cd97c8.js",
    "revision": "78fb703e68021a34fe6e4f0d5cbed81e"
  },
  {
    "url": "assets/js/18.ef1e1cdf.js",
    "revision": "9a2409abf392a979bf241a23e25272da"
  },
  {
    "url": "assets/js/19.8ee71b74.js",
    "revision": "c21f3c557ad828d46c29bb0ed1ab205a"
  },
  {
    "url": "assets/js/2.5360e44d.js",
    "revision": "f0821a87dff71a87b1f35b7e2ccd040c"
  },
  {
    "url": "assets/js/20.baa51205.js",
    "revision": "0d48836c0d52e29779766268b30ff403"
  },
  {
    "url": "assets/js/21.b4795978.js",
    "revision": "dd605b9930f7b1c99d38a3a24d2b417d"
  },
  {
    "url": "assets/js/22.4402f2b8.js",
    "revision": "6942d9ac6b6bc41be6196691b0f44998"
  },
  {
    "url": "assets/js/23.8c8cda7b.js",
    "revision": "8fa5bab0d421fcb6b4607af230636551"
  },
  {
    "url": "assets/js/24.578571db.js",
    "revision": "56daf2bd9a0d8eeb510763b51d9caba6"
  },
  {
    "url": "assets/js/25.0651ad77.js",
    "revision": "359b4d1b3ad811e82d53a51b479ae3f5"
  },
  {
    "url": "assets/js/26.4f4e08ea.js",
    "revision": "cc3513624cc809465aece108d13a426b"
  },
  {
    "url": "assets/js/27.2b8e506c.js",
    "revision": "62b2c1557453e603bea3739e6f6c61e2"
  },
  {
    "url": "assets/js/28.b3b00f6e.js",
    "revision": "f5614c9086d9c7a5db574dfe664f9750"
  },
  {
    "url": "assets/js/29.f14731b3.js",
    "revision": "02f65ad6e8c871db21da88400d324f21"
  },
  {
    "url": "assets/js/30.5e3a20fc.js",
    "revision": "6fac6ce10f8dd631e5bf8b9e3cd8006a"
  },
  {
    "url": "assets/js/31.ce217561.js",
    "revision": "ef2dc645564d45bb9ffa58c513cc0ec5"
  },
  {
    "url": "assets/js/32.44fcade3.js",
    "revision": "817e2f4b6d0230022515ab53c280846c"
  },
  {
    "url": "assets/js/33.376579fc.js",
    "revision": "70dcdac77cf3af93a501864e0e8e3d5d"
  },
  {
    "url": "assets/js/34.43b66eae.js",
    "revision": "c1a4d4279f3915fd11db7508f9a63e84"
  },
  {
    "url": "assets/js/35.716b91f7.js",
    "revision": "65167f0546737ea30d93c2829aa0d9bb"
  },
  {
    "url": "assets/js/36.519c7515.js",
    "revision": "2714f691946b5b8e5bd6d7954f319d65"
  },
  {
    "url": "assets/js/37.1a111725.js",
    "revision": "219b6accb881401972933f1e552c2821"
  },
  {
    "url": "assets/js/38.88505fb7.js",
    "revision": "73916d8fddfc860689b20fa857591405"
  },
  {
    "url": "assets/js/39.50971290.js",
    "revision": "a05b38a1bf43ac73ba06313391a983a2"
  },
  {
    "url": "assets/js/40.59ca6c9d.js",
    "revision": "433e2870a21a2447e7c68e6af7d9630f"
  },
  {
    "url": "assets/js/41.d9d1c321.js",
    "revision": "731afb7d678c21dc15d3d3f976a94d4f"
  },
  {
    "url": "assets/js/42.4a1d2762.js",
    "revision": "faa21284566eb9d1b2c889907f6f97d1"
  },
  {
    "url": "assets/js/43.32ea44d5.js",
    "revision": "5de08d1347d0967cb1010ac3b2bfcc8e"
  },
  {
    "url": "assets/js/44.de4dc6ab.js",
    "revision": "c88461f5ce33611021492daa5a899538"
  },
  {
    "url": "assets/js/45.29a86f37.js",
    "revision": "099c3a07c867945a924a331294f6af63"
  },
  {
    "url": "assets/js/46.1f68bebc.js",
    "revision": "3f7167177effcf8262d7d6f349cf08ac"
  },
  {
    "url": "assets/js/47.a215895e.js",
    "revision": "f140223288b8f6f2f0b2e629453c45e5"
  },
  {
    "url": "assets/js/48.5862602b.js",
    "revision": "de7934cc9ea8b5bbd5e6258806144e01"
  },
  {
    "url": "assets/js/49.be6868fc.js",
    "revision": "eaf3708a9de1ea4a07314bbe81034362"
  },
  {
    "url": "assets/js/50.370238ea.js",
    "revision": "a7bd82d03fd73479125da2c0f2acb1cb"
  },
  {
    "url": "assets/js/51.dfdbcbc7.js",
    "revision": "01846cd153417f5edca5e261865122a3"
  },
  {
    "url": "assets/js/52.fe4a86b6.js",
    "revision": "c7677bdbce6cf352ff00d6a0e91a4538"
  },
  {
    "url": "assets/js/53.e984788d.js",
    "revision": "1d8c2ba5d7810e90e5ac39d3496d2ab4"
  },
  {
    "url": "assets/js/54.3562776c.js",
    "revision": "6d401017b5d06234b300ccc3e0243c6a"
  },
  {
    "url": "assets/js/55.85906037.js",
    "revision": "b26d9399e144278d38a82f9d6d80ec27"
  },
  {
    "url": "assets/js/56.817cdcb6.js",
    "revision": "14054906c5b7865bfa382dbf13a99e1c"
  },
  {
    "url": "assets/js/57.a56b09cd.js",
    "revision": "3e530e91f0cf479eef4b7b56cc75768a"
  },
  {
    "url": "assets/js/58.2fb1df0a.js",
    "revision": "5ecabfc2b5ffaa92dc1b796be1582c08"
  },
  {
    "url": "assets/js/59.1a2ee76a.js",
    "revision": "ab51a23b96c10100692cc30e2aa3d3e7"
  },
  {
    "url": "assets/js/6.4079fcea.js",
    "revision": "098f7a881ce01a596901e1d2b12bf845"
  },
  {
    "url": "assets/js/60.a5e822d2.js",
    "revision": "87e588104589e19af4543432983db49e"
  },
  {
    "url": "assets/js/61.795732ee.js",
    "revision": "2f0ddc52eab2e9335eee941af1c93206"
  },
  {
    "url": "assets/js/62.63d611f4.js",
    "revision": "3d2fb2c4369242ce39ce6fa8d8b04867"
  },
  {
    "url": "assets/js/63.9d68020c.js",
    "revision": "1edc5dba7451e2b8f60f555e03601bdd"
  },
  {
    "url": "assets/js/64.f4848086.js",
    "revision": "5daa2a8a08eeefef00d4002b4ec8f6f1"
  },
  {
    "url": "assets/js/65.8fd2df49.js",
    "revision": "41ae6d54c256a4a0e515db05a65b75b7"
  },
  {
    "url": "assets/js/7.0f56ea74.js",
    "revision": "1136dd289584a5d87b1f0a29063f3f73"
  },
  {
    "url": "assets/js/8.c18dff89.js",
    "revision": "ef19fbc4a1def1be9e1a1f7ac51be308"
  },
  {
    "url": "assets/js/9.1d788925.js",
    "revision": "4a20b6ffe6fe42070b353476d2c17acd"
  },
  {
    "url": "assets/js/app.6e09f222.js",
    "revision": "1acfb97cbf35532c4283852daf9339d3"
  },
  {
    "url": "assets/js/vendors~docsearch.3805d4a7.js",
    "revision": "302d51179dadcb4fd10056f66aa63c86"
  },
  {
    "url": "assets/js/vendors~flowchart.ecc9a8f8.js",
    "revision": "725d38ad8bf890eaf2a6bef847e70bb8"
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
    "revision": "cd4e295ff9019dadd329884127440a16"
  },
  {
    "url": "categories/index.html",
    "revision": "b392479f2f11ff289599933e9289722a"
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
    "revision": "e94c5e56e3b41a9f02fb8df5ba20dd5b"
  },
  {
    "url": "tag/index.html",
    "revision": "546bb26ac428cb6e581a620bc55bf6d9"
  },
  {
    "url": "timeline/index.html",
    "revision": "1bf667e61968ee81c56cd003b19f9470"
  },
  {
    "url": "views/0.x/abstract.html",
    "revision": "4d4bf3a6240e0cce13134e334218bf0a"
  },
  {
    "url": "views/0.x/category.html",
    "revision": "42e4c18116662570fa25fcbc4b230bb7"
  },
  {
    "url": "views/0.x/configJs.html",
    "revision": "3dcd3e0193c8e204233f42ba0df4477b"
  },
  {
    "url": "views/0.x/home.html",
    "revision": "4295982f818c587c7d32f25114ab1b26"
  },
  {
    "url": "views/0.x/index.html",
    "revision": "90e762641997c247e14b34016f86e7d8"
  },
  {
    "url": "views/0.x/installUse.html",
    "revision": "39eca4c542c2508c23788e5058c3eba4"
  },
  {
    "url": "views/0.x/password.html",
    "revision": "d01f82fba88846c58cf6ed99ff788fd5"
  },
  {
    "url": "views/0.x/tag.html",
    "revision": "e169569837bb97d2081dd6893b894546"
  },
  {
    "url": "views/0.x/timeline.html",
    "revision": "303dd5cf356e4f08806cdd4455d092d4"
  },
  {
    "url": "views/0.x/valine.html",
    "revision": "1e1ee772f78a1e8a10f48381baf9e212"
  },
  {
    "url": "views/1.x/0update1.html",
    "revision": "b9984b6ee0515b3955f3f915958406f6"
  },
  {
    "url": "views/1.x/404.html",
    "revision": "d82b39058ed6f86724c93d54c5a9eac3"
  },
  {
    "url": "views/1.x/abstract.html",
    "revision": "8b1a5ea243eca590578199b7a34b8418"
  },
  {
    "url": "views/1.x/blog.html",
    "revision": "3375b75543bb44184b5a4557c32ffd3b"
  },
  {
    "url": "views/1.x/configJs.html",
    "revision": "9cc146029a3c81ed47b68b393ba7a7ae"
  },
  {
    "url": "views/1.x/frontMatter.html",
    "revision": "ae0a2456d0b5916155af295218fb70e1"
  },
  {
    "url": "views/1.x/ga.html",
    "revision": "cc6d85cbac413b85ba1fd35180dc7db9"
  },
  {
    "url": "views/1.x/home.html",
    "revision": "5439fe02be085d035957e41ed1c33413"
  },
  {
    "url": "views/1.x/index.html",
    "revision": "875cda91648a6913530cc6dd52f357f1"
  },
  {
    "url": "views/1.x/installUse.html",
    "revision": "798a420bee95cbe496ba3e2328d62773"
  },
  {
    "url": "views/1.x/password.html",
    "revision": "761a78cc14e3bbf9d39277f7f3ca8927"
  },
  {
    "url": "views/1.x/recommend.html",
    "revision": "5a641b2d7cb6a09db22606b39a541124"
  },
  {
    "url": "views/1.x/sidebar.html",
    "revision": "78de887fa8001a4db9c418a75e4f7836"
  },
  {
    "url": "views/1.x/syntax.html",
    "revision": "57a1ba6571b32b1682f9607326bd6a0d"
  },
  {
    "url": "views/1.x/themePicker.html",
    "revision": "86feca54a48930e1f371af6a6590dd1f"
  },
  {
    "url": "views/1.x/timeline.html",
    "revision": "8fd65dc05cf891a7145ec0c2bd12c48e"
  },
  {
    "url": "views/1.x/valine.html",
    "revision": "900a83e991d0bf878b87e6a7aa874081"
  },
  {
    "url": "views/other/about.html",
    "revision": "bfa3b5dd8d52c6deecefef6a396aed88"
  },
  {
    "url": "views/other/deploy.html",
    "revision": "0db5ec799f1991bd1f37b41355e496f0"
  },
  {
    "url": "views/other/develop.html",
    "revision": "8fa9665724d96e29128379c74520c11e"
  },
  {
    "url": "views/other/domain.html",
    "revision": "f15b0a50b5cd5b43ba5f4f8a40905e02"
  },
  {
    "url": "views/other/notice.html",
    "revision": "04f4b8e0e2474198087e0ec571b3a47a"
  },
  {
    "url": "views/other/one-year-old.html",
    "revision": "2d9bc3f533cc58a87927a1ef675816c1"
  },
  {
    "url": "views/other/question.html",
    "revision": "eb59a5835979979231f4907cefada9a4"
  },
  {
    "url": "views/other/theme-example.html",
    "revision": "c4bfed2a37a313c31b47a3fa3a24b630"
  },
  {
    "url": "views/plugins/backToTop.html",
    "revision": "efc6754658b95119c75efadd4eda6fed"
  },
  {
    "url": "views/plugins/comments.html",
    "revision": "588dfe6cb9650c8b69913e180efa7e27"
  },
  {
    "url": "views/plugins/extractCode.html",
    "revision": "f5dac945a96969640aef2e037cd39e87"
  },
  {
    "url": "views/plugins/ga.html",
    "revision": "a1a8eb3b3fd2304799ac97ab64bd6daf"
  },
  {
    "url": "views/plugins/index.html",
    "revision": "f3dd02e11df826fa6fb991eb8df83980"
  },
  {
    "url": "views/plugins/kanbanniang.html",
    "revision": "7723eac7dc0d0745c008ca2fa58c6356"
  },
  {
    "url": "views/plugins/loadingPage.html",
    "revision": "e7ee3885eae7c4bf54f3f94566f28926"
  },
  {
    "url": "views/plugins/pagation.html",
    "revision": "f298d7eb7435d142996a1013b5440888"
  },
  {
    "url": "views/plugins/rss.html",
    "revision": "3d4c7153ef2dda6d24dadd4186db89fa"
  },
  {
    "url": "views/plugins/screenfull.html",
    "revision": "860a53e693c42ed1fad8da2214d101f2"
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
