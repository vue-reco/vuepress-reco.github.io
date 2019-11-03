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
    "revision": "b5edc31f9aa7006d7693d3bd29358794"
  },
  {
    "url": "assets/css/0.styles.dfbb962f.css",
    "revision": "7b43ea5930ceaa023bf409a704f76191"
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
    "url": "assets/js/1.6284ad87.js",
    "revision": "0b765445ba75f28c43e3aaa614ef9efe"
  },
  {
    "url": "assets/js/10.d9da7bed.js",
    "revision": "b5ca56dae9628b10156457f3a8153701"
  },
  {
    "url": "assets/js/11.18eb244b.js",
    "revision": "758592e85e2ab2467242acb9acb16e34"
  },
  {
    "url": "assets/js/12.d8dac093.js",
    "revision": "aa74fdb90d4616e990dc820c613ef92e"
  },
  {
    "url": "assets/js/13.e3f626b9.js",
    "revision": "90e65a8f0e28a49acf8457b2894325f5"
  },
  {
    "url": "assets/js/14.e98f07db.js",
    "revision": "c518a31141fcf11352b0aebe5ac917db"
  },
  {
    "url": "assets/js/15.e5319f2e.js",
    "revision": "d7a635b3ea44275718a8d5010a8da926"
  },
  {
    "url": "assets/js/16.bab23730.js",
    "revision": "c7d94b76a77d8d992e4aa32cedc30012"
  },
  {
    "url": "assets/js/17.77c711a7.js",
    "revision": "dc350c949d9459b945670741af81a6a5"
  },
  {
    "url": "assets/js/18.e3c45ca8.js",
    "revision": "aea7af1a2209a27a3d4b7f5fb1f26dc8"
  },
  {
    "url": "assets/js/19.15a037fb.js",
    "revision": "df342ae6385e6e4ff6805529f3ff4739"
  },
  {
    "url": "assets/js/2.58b7aeaf.js",
    "revision": "2c2f3959fe8cb3e868c7beaaa480041c"
  },
  {
    "url": "assets/js/20.f622a3f8.js",
    "revision": "0e0526690b089dc0f4dd45db846be7cc"
  },
  {
    "url": "assets/js/21.129528b8.js",
    "revision": "08ed9385ca708a23977e7e228eefabfc"
  },
  {
    "url": "assets/js/22.b9e5bb65.js",
    "revision": "5d0519d014c17b158a4258295ed54836"
  },
  {
    "url": "assets/js/23.56f2a722.js",
    "revision": "5dee74a7074c77870d3f791ba619ebc1"
  },
  {
    "url": "assets/js/24.2c5c4b18.js",
    "revision": "b30dcdedd0cf20ea15038e2f72f96dbf"
  },
  {
    "url": "assets/js/25.10cfae6f.js",
    "revision": "8966084c2623eae243a397763002a605"
  },
  {
    "url": "assets/js/26.68efe4e9.js",
    "revision": "cdf70819c69356c7cf7350d7c40ec750"
  },
  {
    "url": "assets/js/27.5e6e906b.js",
    "revision": "66fa5b3c0eb7ab36f1694a07697be4cc"
  },
  {
    "url": "assets/js/28.6a48f125.js",
    "revision": "c80ad5a131f6e314e50b473956be1340"
  },
  {
    "url": "assets/js/29.2d10df00.js",
    "revision": "1d6e91f992bb90613159c43cd603d56c"
  },
  {
    "url": "assets/js/30.95f2ce90.js",
    "revision": "fbc169d4d4ec81f883a7d0965ecc6732"
  },
  {
    "url": "assets/js/31.22f0aa25.js",
    "revision": "f8662e6d46bd63d9dc48bf5862b6ff27"
  },
  {
    "url": "assets/js/32.3e677cd8.js",
    "revision": "cd212e4eb4e575fb6a88cb786154c6f1"
  },
  {
    "url": "assets/js/33.80e7df11.js",
    "revision": "c9f7be58bf509fa4a5b97397c74d6e5e"
  },
  {
    "url": "assets/js/34.a0695eaa.js",
    "revision": "68ad55aab1674fe9534e5a903931d23f"
  },
  {
    "url": "assets/js/35.18b2af1a.js",
    "revision": "5aa882b32d912c9e87c05a8c9a906218"
  },
  {
    "url": "assets/js/36.18523927.js",
    "revision": "e7a7f1e462f86989bbac29713d1a8efb"
  },
  {
    "url": "assets/js/37.1c855751.js",
    "revision": "8b8e813ca87a68a940466e82310d6bb0"
  },
  {
    "url": "assets/js/38.0248725a.js",
    "revision": "0bf0ecbf5a888db1f478a8cc295eff0c"
  },
  {
    "url": "assets/js/39.c08519f8.js",
    "revision": "6562d47806655de9cb39dfc8c1623aa0"
  },
  {
    "url": "assets/js/40.2b90d155.js",
    "revision": "e03e09230a2d97e225d2f7dbc256e4bf"
  },
  {
    "url": "assets/js/41.ef609287.js",
    "revision": "9cda5a32fe20891a56488df4f1a3a1b5"
  },
  {
    "url": "assets/js/42.d4e66018.js",
    "revision": "762aeef15e745db7ed9d75adfd525f1d"
  },
  {
    "url": "assets/js/43.4d8eda30.js",
    "revision": "44f87c2cf8ace821a0ad729a3d5bd7f9"
  },
  {
    "url": "assets/js/44.e17d2971.js",
    "revision": "6160eb060587e75bf17ddb9873bd604e"
  },
  {
    "url": "assets/js/45.7bfb34b5.js",
    "revision": "249b47f29d84ce82eba91877a6f86f1b"
  },
  {
    "url": "assets/js/46.3789a2b6.js",
    "revision": "79fd79f968fb66654066b0d8742e132c"
  },
  {
    "url": "assets/js/47.ff1e5f6a.js",
    "revision": "ba36a8fc35a242193f361bafc7a58d16"
  },
  {
    "url": "assets/js/48.1e4f27a9.js",
    "revision": "e190f94012d2a6fa49dd75c916ffbb03"
  },
  {
    "url": "assets/js/49.a844140e.js",
    "revision": "e2f70166ab214ef5f328823cfad37fdd"
  },
  {
    "url": "assets/js/5.90660e15.js",
    "revision": "61f48ad3d8d9aed8529f2db551b6d396"
  },
  {
    "url": "assets/js/50.c9f4c671.js",
    "revision": "a44f90b946f52e4609559045b1544b1c"
  },
  {
    "url": "assets/js/51.2eca823b.js",
    "revision": "47dec9567c5a811f973ffa7dedcd01f6"
  },
  {
    "url": "assets/js/52.57e06918.js",
    "revision": "cb3bdf8514ff616c9bfe3fec5ffe5656"
  },
  {
    "url": "assets/js/53.d4038e4b.js",
    "revision": "8dd2548f13054b2845bfca25191d3f26"
  },
  {
    "url": "assets/js/54.3c79cf30.js",
    "revision": "da9a164a6aa4723992b6e3d674013b56"
  },
  {
    "url": "assets/js/55.95d2ccbe.js",
    "revision": "939cfbcfabe56b92b49d4c72b6a7bf03"
  },
  {
    "url": "assets/js/56.804e9004.js",
    "revision": "d1721dbc24b9d79aeb5779dc72843ea2"
  },
  {
    "url": "assets/js/57.1f156a8b.js",
    "revision": "9a02633bed9930e56bcd280541dafd73"
  },
  {
    "url": "assets/js/58.44edf2a9.js",
    "revision": "f735aebaa269c33b19b4bf241078ff09"
  },
  {
    "url": "assets/js/59.01e24cb7.js",
    "revision": "0645b5cc7f754bf3b2f9513aa299bce3"
  },
  {
    "url": "assets/js/6.1d0f73e6.js",
    "revision": "01df9aafbbacacd673e0711477419d5a"
  },
  {
    "url": "assets/js/60.e729a2e0.js",
    "revision": "49fa1adf72f73cf4ab973f1a0b0d2730"
  },
  {
    "url": "assets/js/61.6bc9bae7.js",
    "revision": "13a3a7007869f34bb7b0dacc2d5a5af7"
  },
  {
    "url": "assets/js/62.11a2f78a.js",
    "revision": "491959e3050404d11e498b06fc661a93"
  },
  {
    "url": "assets/js/63.68230959.js",
    "revision": "7b96463b8d015e2fa78fc1f6ec4a31a1"
  },
  {
    "url": "assets/js/7.6e2759e2.js",
    "revision": "8ad1f4d1a537266309c360018d2bda6e"
  },
  {
    "url": "assets/js/8.a36b2ddd.js",
    "revision": "58c1b3133c3d4d2b6fffcb6423bda8e0"
  },
  {
    "url": "assets/js/9.3e5de0b7.js",
    "revision": "88a16165e65ec4c2122e3966c56f0ced"
  },
  {
    "url": "assets/js/app.209ae32b.js",
    "revision": "8c2e1fd3f92d2d0d070652d4731cea4f"
  },
  {
    "url": "assets/js/vendors~flowchart.c26f353b.js",
    "revision": "7632ac4d288f6e83309dd6830cb8b78c"
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
    "revision": "a382da4eb62a1ed24fc3a41eee7ea858"
  },
  {
    "url": "categories/index.html",
    "revision": "034f90f91c2f8459ef7dfae549b53baa"
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
    "revision": "18ee272446df86456796bc44de69ff22"
  },
  {
    "url": "tag/index.html",
    "revision": "1c9231fa27086d9419f5bc275891f02a"
  },
  {
    "url": "timeline/index.html",
    "revision": "50d35edcad3624a8faf56e88cb4f56c4"
  },
  {
    "url": "views/0.x/abstract.html",
    "revision": "3435727028dcc18423d70a7b88ec6f41"
  },
  {
    "url": "views/0.x/category.html",
    "revision": "bfaa7d87f0a7a5d33285f46b709ca870"
  },
  {
    "url": "views/0.x/configJs.html",
    "revision": "90a07bfb68312edec7116392e6b8b8f5"
  },
  {
    "url": "views/0.x/home.html",
    "revision": "7eac594e7e11dc9e9d72e6b467dd2f38"
  },
  {
    "url": "views/0.x/index.html",
    "revision": "0629cf6d2f025ee257b6918ab811d601"
  },
  {
    "url": "views/0.x/installUse.html",
    "revision": "3d1b3d31a052f8fe1a94e65f2be7f761"
  },
  {
    "url": "views/0.x/password.html",
    "revision": "a90256ddb8a0e7e72cbf72c53bd46337"
  },
  {
    "url": "views/0.x/tag.html",
    "revision": "11f9dfc51feaee3f212606ad62abf6f8"
  },
  {
    "url": "views/0.x/timeline.html",
    "revision": "e6c3b9162f3dd6b38749b97f1003955e"
  },
  {
    "url": "views/0.x/valine.html",
    "revision": "48dc1a32ea52cc1581d19e15a20c4e1b"
  },
  {
    "url": "views/1.x/0update1.html",
    "revision": "5ee28b3e0f07f3173fde601577699c42"
  },
  {
    "url": "views/1.x/404.html",
    "revision": "55ea84c1977aad95e58d8253d4eb14df"
  },
  {
    "url": "views/1.x/abstract.html",
    "revision": "3435727028dcc18423d70a7b88ec6f41"
  },
  {
    "url": "views/1.x/blog.html",
    "revision": "3ae26503b50b4f9f9ebdf1e327f38620"
  },
  {
    "url": "views/1.x/configJs.html",
    "revision": "90a07bfb68312edec7116392e6b8b8f5"
  },
  {
    "url": "views/1.x/frontMatter.html",
    "revision": "f74aee1565438696ddfdbe0f8278901a"
  },
  {
    "url": "views/1.x/ga.html",
    "revision": "0cbb51c494b9c16ad1a4862e5201640d"
  },
  {
    "url": "views/1.x/home.html",
    "revision": "7eac594e7e11dc9e9d72e6b467dd2f38"
  },
  {
    "url": "views/1.x/index.html",
    "revision": "0629cf6d2f025ee257b6918ab811d601"
  },
  {
    "url": "views/1.x/installUse.html",
    "revision": "3d1b3d31a052f8fe1a94e65f2be7f761"
  },
  {
    "url": "views/1.x/password.html",
    "revision": "a90256ddb8a0e7e72cbf72c53bd46337"
  },
  {
    "url": "views/1.x/recommend.html",
    "revision": "48e3055491f0c78522a66a399bf8a2c8"
  },
  {
    "url": "views/1.x/sidebar.html",
    "revision": "42bbbefeb4d983facfcd80aa3b6c1e61"
  },
  {
    "url": "views/1.x/syntax.html",
    "revision": "bcc57c5b7c09064669d8c01b83c81dee"
  },
  {
    "url": "views/1.x/themePicker.html",
    "revision": "5f404ec4cbf65eecc3d4de4fe3885d0e"
  },
  {
    "url": "views/1.x/timeline.html",
    "revision": "e6c3b9162f3dd6b38749b97f1003955e"
  },
  {
    "url": "views/1.x/valine.html",
    "revision": "a3378e0e7016bad90570fb9bcc8ef5e1"
  },
  {
    "url": "views/other/about.html",
    "revision": "0c405e0e85499d5ba34fd939bbdc408b"
  },
  {
    "url": "views/other/deploy.html",
    "revision": "a41631761007416c54102ab9f9f24299"
  },
  {
    "url": "views/other/develop.html",
    "revision": "a6b53d41029aebeb26db6b5e1f95a742"
  },
  {
    "url": "views/other/domain.html",
    "revision": "4e42062bcad827e6a98fe31b4c7d0a7a"
  },
  {
    "url": "views/other/notice.html",
    "revision": "d0d094887b069cac1916bd48e37901f4"
  },
  {
    "url": "views/other/one-year-old.html",
    "revision": "542a0af7b2484e08b5505960db2598ba"
  },
  {
    "url": "views/other/question.html",
    "revision": "3b4a2537b0ca15ee21fa73e4a8ffd0be"
  },
  {
    "url": "views/other/theme-example.html",
    "revision": "ed872e565cace4e8a1f3817a1169f948"
  },
  {
    "url": "views/plugins/backToTop.html",
    "revision": "f9998a6bebd6e27e7d1451e876f2110a"
  },
  {
    "url": "views/plugins/comments.html",
    "revision": "d41878aba62d0cb9477a59d35470ff3c"
  },
  {
    "url": "views/plugins/extractCode.html",
    "revision": "d5c0d6c6e2df881cdab87735556045b3"
  },
  {
    "url": "views/plugins/ga.html",
    "revision": "023c37f8526a765bc7638fc3960cf581"
  },
  {
    "url": "views/plugins/index.html",
    "revision": "a90b33307fe24bb53cade855eafbcf66"
  },
  {
    "url": "views/plugins/kanbanniang.html",
    "revision": "cef04a5dfd017be2c9299e987dfbf52c"
  },
  {
    "url": "views/plugins/loadingPage.html",
    "revision": "51c094ee917bfd6b151f546c0a10bda3"
  },
  {
    "url": "views/plugins/pagation.html",
    "revision": "f85cfd498d56cb970f8245ea00b60ec9"
  },
  {
    "url": "views/plugins/screenfull.html",
    "revision": "57b21784fc085564ab165c37aee69022"
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
