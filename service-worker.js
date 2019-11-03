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
    "revision": "da4fc5e05b750f9a100a141cca937afe"
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
    "url": "assets/js/26.35c80200.js",
    "revision": "b5d8bcc2afb90f2528cf6c0b19ce8b3c"
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
    "url": "assets/js/53.b04b7872.js",
    "revision": "abf9340775e211742d4aae25135a0972"
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
    "url": "assets/js/app.8d44f6dc.js",
    "revision": "9fee77417f6a436b62b5b470c2cbdaa1"
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
    "revision": "5196ab701e41cd18a24b9d2239d3bf2c"
  },
  {
    "url": "categories/index.html",
    "revision": "4fc07fb1c560a5b7f7beb02cc0867e6f"
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
    "revision": "1c7b83fc7710daa842f64404feaf3f4b"
  },
  {
    "url": "tag/index.html",
    "revision": "46ae2d5e12e9e7257ff63bdc6ac62bd7"
  },
  {
    "url": "timeline/index.html",
    "revision": "04ced4a135c84e64f6e5dd34dbc1424c"
  },
  {
    "url": "views/0.x/abstract.html",
    "revision": "68c9fc0f70b66ce4d54a489a4ae8531a"
  },
  {
    "url": "views/0.x/category.html",
    "revision": "7afa9f0469f6b5e3edf7ce81ea51aa3f"
  },
  {
    "url": "views/0.x/configJs.html",
    "revision": "6ceb8897147f1894b282d4ca26e639ec"
  },
  {
    "url": "views/0.x/home.html",
    "revision": "b56ccd166f3602078d1a6d39de6b4670"
  },
  {
    "url": "views/0.x/index.html",
    "revision": "eef91ce489f9bca3b6570189a0aa458e"
  },
  {
    "url": "views/0.x/installUse.html",
    "revision": "8e37afb71751edc47f80a8d1d0d2ee4e"
  },
  {
    "url": "views/0.x/password.html",
    "revision": "34df634ff99a55fe3e45c787f17dfa05"
  },
  {
    "url": "views/0.x/tag.html",
    "revision": "45d24000bdbc2e570cea6cb79e4712d5"
  },
  {
    "url": "views/0.x/timeline.html",
    "revision": "e50d917012225e1264f2dc2e10236432"
  },
  {
    "url": "views/0.x/valine.html",
    "revision": "621fa3e0312532c8765f1a16cfeabee9"
  },
  {
    "url": "views/1.x/0update1.html",
    "revision": "655b28667a6105f4cda0f86ffb4d5fb2"
  },
  {
    "url": "views/1.x/404.html",
    "revision": "fef54314a46331f64ca64ad051f13a5e"
  },
  {
    "url": "views/1.x/abstract.html",
    "revision": "68c9fc0f70b66ce4d54a489a4ae8531a"
  },
  {
    "url": "views/1.x/blog.html",
    "revision": "36c7fc0d95e4fbab30b430c05bb92508"
  },
  {
    "url": "views/1.x/configJs.html",
    "revision": "6ceb8897147f1894b282d4ca26e639ec"
  },
  {
    "url": "views/1.x/frontMatter.html",
    "revision": "7fa4465bc032c299812296cfd37713d1"
  },
  {
    "url": "views/1.x/ga.html",
    "revision": "8adffd30afa5d3ec6cbf50bc58f70bbf"
  },
  {
    "url": "views/1.x/home.html",
    "revision": "b56ccd166f3602078d1a6d39de6b4670"
  },
  {
    "url": "views/1.x/index.html",
    "revision": "eef91ce489f9bca3b6570189a0aa458e"
  },
  {
    "url": "views/1.x/installUse.html",
    "revision": "8e37afb71751edc47f80a8d1d0d2ee4e"
  },
  {
    "url": "views/1.x/password.html",
    "revision": "34df634ff99a55fe3e45c787f17dfa05"
  },
  {
    "url": "views/1.x/recommend.html",
    "revision": "5fa7d60adca470a262ffcb24f2a76240"
  },
  {
    "url": "views/1.x/sidebar.html",
    "revision": "7779cc0077c2fe1031c97919ccb103e4"
  },
  {
    "url": "views/1.x/syntax.html",
    "revision": "1a83b3a78b556d3a22617dafa525ef4b"
  },
  {
    "url": "views/1.x/themePicker.html",
    "revision": "c8cc24df075e0e9d07a14efb8ee3c02c"
  },
  {
    "url": "views/1.x/timeline.html",
    "revision": "e50d917012225e1264f2dc2e10236432"
  },
  {
    "url": "views/1.x/valine.html",
    "revision": "2cb07d521fc2d2c952eab21199c5b7c0"
  },
  {
    "url": "views/other/about.html",
    "revision": "66d332407589cd2aed5c0ac9ce4f50f9"
  },
  {
    "url": "views/other/deploy.html",
    "revision": "852d57915315f889f32965f6aeec28c7"
  },
  {
    "url": "views/other/develop.html",
    "revision": "77efdd0de033a11e26075b9dbd8bfdcd"
  },
  {
    "url": "views/other/domain.html",
    "revision": "0ae26e7327588d30a81ac2c040544a9b"
  },
  {
    "url": "views/other/notice.html",
    "revision": "b20ff27752f83d4b2f928705b7bd3164"
  },
  {
    "url": "views/other/one-year-old.html",
    "revision": "37d3388ed76620c2bf208f7409b8be03"
  },
  {
    "url": "views/other/question.html",
    "revision": "e28bc3cfaff5db50ceeed3256f7b82e8"
  },
  {
    "url": "views/other/theme-example.html",
    "revision": "3c782d6531fafa5cb4a286e9004a8c24"
  },
  {
    "url": "views/plugins/backToTop.html",
    "revision": "5bed6f7c0028d137704221d5e7734c1d"
  },
  {
    "url": "views/plugins/comments.html",
    "revision": "2cc8ae012ffbc5e594817e1a7b5689a8"
  },
  {
    "url": "views/plugins/extractCode.html",
    "revision": "0f915c29b8da6f20764d3b265b086a46"
  },
  {
    "url": "views/plugins/ga.html",
    "revision": "45a025bdddde2984a8cad466ea150e58"
  },
  {
    "url": "views/plugins/index.html",
    "revision": "57d2ef2576883ba2428d06a3da18bdc9"
  },
  {
    "url": "views/plugins/kanbanniang.html",
    "revision": "dbd1d3d8978946dcad9823b53aa393a9"
  },
  {
    "url": "views/plugins/loadingPage.html",
    "revision": "78c48f034d7b09a1b072e2ee4cda9e1d"
  },
  {
    "url": "views/plugins/pagation.html",
    "revision": "ffbc232f6d8ddee099ffdd6da34c018d"
  },
  {
    "url": "views/plugins/screenfull.html",
    "revision": "40c60dc71d0e65b9b334724080efb53f"
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
