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
    "revision": "298caa4a9ff06dc6902dc1da4901e170"
  },
  {
    "url": "assets/css/0.styles.beb95f72.css",
    "revision": "4033c0e88a09d461d970db8af3b78f32"
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
    "url": "assets/js/10.6e155c3d.js",
    "revision": "de0f7bef0dd39a74c10e998ff72b6be1"
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
    "url": "assets/js/26.9d9445b8.js",
    "revision": "78891da79bd581e9642829dfc7567a24"
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
    "url": "assets/js/5.f18cf746.js",
    "revision": "9833c4a13ba04133c98aaf041e06293b"
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
    "url": "assets/js/53.a456e5bb.js",
    "revision": "ca54090aa4beb74556ff96140c9f39e0"
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
    "url": "assets/js/app.39c49d80.js",
    "revision": "fdd86312b06b3354a55d63c86080c154"
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
    "revision": "375ecaa003180e9b45060c6c01e56a3a"
  },
  {
    "url": "categories/index.html",
    "revision": "485bbbbc571c0ec238ddb1463a14783b"
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
    "revision": "6bd618fc8ecc4165fe267e8a78c028cb"
  },
  {
    "url": "tag/index.html",
    "revision": "f6bcb174da986789c0996dedd2d21393"
  },
  {
    "url": "timeline/index.html",
    "revision": "ae72e1d1cc0ded0acf8906493ae63fb4"
  },
  {
    "url": "views/0.x/abstract.html",
    "revision": "722748730d32cd014dbddd8fa8781b78"
  },
  {
    "url": "views/0.x/category.html",
    "revision": "6defd3daa88b014fccc62baf6d22ec77"
  },
  {
    "url": "views/0.x/configJs.html",
    "revision": "21fa79d3e6767ec61c1f439cd5f3980a"
  },
  {
    "url": "views/0.x/home.html",
    "revision": "cc592a0c3470316663c243b7daca3a7c"
  },
  {
    "url": "views/0.x/index.html",
    "revision": "456c424cc11d7ffbd297508d859ab73a"
  },
  {
    "url": "views/0.x/installUse.html",
    "revision": "116a55468459719d5edfae182a3700d4"
  },
  {
    "url": "views/0.x/password.html",
    "revision": "052a734b1bb06a46432450b60447992b"
  },
  {
    "url": "views/0.x/tag.html",
    "revision": "dda1898f9238c2056dd87f3a4da2d0fe"
  },
  {
    "url": "views/0.x/timeline.html",
    "revision": "07ad04d1b8153facb479b5364bc59dfe"
  },
  {
    "url": "views/0.x/valine.html",
    "revision": "7730cbdbef60e40d5a6691f9b42a241e"
  },
  {
    "url": "views/1.x/0update1.html",
    "revision": "7110428b00b57dc8995f3ee0a1a0b4ae"
  },
  {
    "url": "views/1.x/404.html",
    "revision": "efa48d28ca74e73d99ef67ff8ae90f1d"
  },
  {
    "url": "views/1.x/abstract.html",
    "revision": "722748730d32cd014dbddd8fa8781b78"
  },
  {
    "url": "views/1.x/blog.html",
    "revision": "dfdcfbdfb9eb5c347003f08e4eb0b3e2"
  },
  {
    "url": "views/1.x/configJs.html",
    "revision": "21fa79d3e6767ec61c1f439cd5f3980a"
  },
  {
    "url": "views/1.x/frontMatter.html",
    "revision": "dd21751dc860a7adac638d1390185939"
  },
  {
    "url": "views/1.x/ga.html",
    "revision": "e4c56e8a8ca0e41a2741501fde038824"
  },
  {
    "url": "views/1.x/home.html",
    "revision": "cc592a0c3470316663c243b7daca3a7c"
  },
  {
    "url": "views/1.x/index.html",
    "revision": "456c424cc11d7ffbd297508d859ab73a"
  },
  {
    "url": "views/1.x/installUse.html",
    "revision": "116a55468459719d5edfae182a3700d4"
  },
  {
    "url": "views/1.x/password.html",
    "revision": "052a734b1bb06a46432450b60447992b"
  },
  {
    "url": "views/1.x/recommend.html",
    "revision": "0a22bc9acd6cd59368ff16ee78347db1"
  },
  {
    "url": "views/1.x/sidebar.html",
    "revision": "e02fed70c0815a5bca814bdd152eb37c"
  },
  {
    "url": "views/1.x/syntax.html",
    "revision": "328f99798413a1900bde7e6ec96e26ff"
  },
  {
    "url": "views/1.x/themePicker.html",
    "revision": "c50ab36616603335f6209e0cda6504de"
  },
  {
    "url": "views/1.x/timeline.html",
    "revision": "07ad04d1b8153facb479b5364bc59dfe"
  },
  {
    "url": "views/1.x/valine.html",
    "revision": "374609ff8d8ac67c37165c8943d0fb42"
  },
  {
    "url": "views/other/about.html",
    "revision": "03f84cd0639909a1b4471bff979ca5b8"
  },
  {
    "url": "views/other/deploy.html",
    "revision": "c2e388a90cc5838b7938cb716db0e9cf"
  },
  {
    "url": "views/other/develop.html",
    "revision": "b98b629329f6724a9129a971a9239fd7"
  },
  {
    "url": "views/other/domain.html",
    "revision": "bd111a027888fc4e1c2732070e219f09"
  },
  {
    "url": "views/other/notice.html",
    "revision": "156f473ca9af2ed01b356afd63df50ed"
  },
  {
    "url": "views/other/one-year-old.html",
    "revision": "bedb4f886861dc5ad87c33a1b79c9a7a"
  },
  {
    "url": "views/other/question.html",
    "revision": "f218b2343afda46dc821b2d2e95585ac"
  },
  {
    "url": "views/other/theme-example.html",
    "revision": "37eb1a3e51c8bee98957b33e90b1c75e"
  },
  {
    "url": "views/plugins/backToTop.html",
    "revision": "d48ae896e0dd8542118a0ae4e7f3b649"
  },
  {
    "url": "views/plugins/comments.html",
    "revision": "4d41ea0bc05576e58a8ee71ab6e99290"
  },
  {
    "url": "views/plugins/extractCode.html",
    "revision": "21f88239db37c650dccf20aa2d7793ef"
  },
  {
    "url": "views/plugins/ga.html",
    "revision": "811a1018e07b90901bafbc7cbf6bce25"
  },
  {
    "url": "views/plugins/index.html",
    "revision": "9b968d6c2504284b8481e9ae8f49306d"
  },
  {
    "url": "views/plugins/kanbanniang.html",
    "revision": "61e2a3d7d4ee24c5741a7ba001f0e635"
  },
  {
    "url": "views/plugins/loadingPage.html",
    "revision": "e15c574b8b05f937e8f447d3c0fdf098"
  },
  {
    "url": "views/plugins/pagation.html",
    "revision": "6a9a9708b559e215e838b896e46d0e05"
  },
  {
    "url": "views/plugins/screenfull.html",
    "revision": "b95170c80b6a8b8b4a76ef8cad3f72fb"
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
