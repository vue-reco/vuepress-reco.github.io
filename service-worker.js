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
    "revision": "6ca947bae1f3754f0880f700c1ba0abc"
  },
  {
    "url": "assets/css/0.styles.eb9a00a3.css",
    "revision": "e1bef5d52c2405c6054b873310392567"
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
    "url": "assets/js/1.5e0f78f5.js",
    "revision": "fede937f74e24ce7324bb4dd2edc16c5"
  },
  {
    "url": "assets/js/10.d540a7b1.js",
    "revision": "9a155bc14b8c31bd8c65588514e07841"
  },
  {
    "url": "assets/js/11.ce797341.js",
    "revision": "2d27c37b4ff607ba5c212beeb8907808"
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
    "url": "assets/js/17.5bb53ed2.js",
    "revision": "5233f88fcc390da8a7d5e41e573848b9"
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
    "url": "assets/js/22.e4ef411b.js",
    "revision": "3e90ac40d2969644d403de5d04d72965"
  },
  {
    "url": "assets/js/23.16c93b54.js",
    "revision": "c1ac56a70680f48fb67543359afb49cd"
  },
  {
    "url": "assets/js/24.ff2a3fdb.js",
    "revision": "fbb7ce258169d66ebc1a45cd134213e8"
  },
  {
    "url": "assets/js/25.10cfae6f.js",
    "revision": "8966084c2623eae243a397763002a605"
  },
  {
    "url": "assets/js/26.78c8a143.js",
    "revision": "1e615ff2cc4a9fd0ed0260558b13d46f"
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
    "url": "assets/js/5.6f72f939.js",
    "revision": "dfa8d2f79fcedfaab7aee78530a69233"
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
    "url": "assets/js/52.63aa5342.js",
    "revision": "c3cec0142842bb3865f12170036a1308"
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
    "url": "assets/js/55.0ac9f334.js",
    "revision": "dbb7342646d899dff442b76ccfdf424b"
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
    "url": "assets/js/58.ef601862.js",
    "revision": "fed3c52124db0388575dfcb162c95c10"
  },
  {
    "url": "assets/js/59.6981a53c.js",
    "revision": "75d9abbaf7130497f437cc46cad5825c"
  },
  {
    "url": "assets/js/6.fc9bf440.js",
    "revision": "62bbad1abf3e94c16da4a027ecf1d092"
  },
  {
    "url": "assets/js/60.c5e9b4f1.js",
    "revision": "4b71821c93e70ca09c2b24d905cb35c7"
  },
  {
    "url": "assets/js/61.79bfafdc.js",
    "revision": "79bfb18a0d14241fdf843ffc2a19d729"
  },
  {
    "url": "assets/js/62.777e465d.js",
    "revision": "fcffd0f6e2bbc12a21f3a2e9715beeac"
  },
  {
    "url": "assets/js/63.16fdf8f5.js",
    "revision": "74d0533874c351f32583df5a71b6bc19"
  },
  {
    "url": "assets/js/64.e056bbb5.js",
    "revision": "dcc958e7e49d5ec67f01c187a5ec8417"
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
    "url": "assets/js/app.16d615f8.js",
    "revision": "4e9678056d6d962b33e76a155a8e7fe0"
  },
  {
    "url": "assets/js/vendors~flowchart.2193ab4d.js",
    "revision": "ffbd2af8aad7e0ed9b9e1286c06b80f5"
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
    "revision": "9448e444c76ee565c468d3d8ff636897"
  },
  {
    "url": "categories/index.html",
    "revision": "fe1b76b55db919c7f8e8d8ea65e00c2f"
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
    "revision": "050004a5f29af85c63f2fa0e9811162a"
  },
  {
    "url": "tag/index.html",
    "revision": "2b9d446a39b8a7c1f4d07ad7b4819bfa"
  },
  {
    "url": "timeline/index.html",
    "revision": "0d5db89191b795db68e7cdbbba05c917"
  },
  {
    "url": "views/0.x/abstract.html",
    "revision": "e56225a1dad1c7bc81cb1ccde5f02e95"
  },
  {
    "url": "views/0.x/category.html",
    "revision": "3e2bda10903b27776d482de7cdec434c"
  },
  {
    "url": "views/0.x/configJs.html",
    "revision": "59d4e05f16a1b64ff6f5a825ef4651c7"
  },
  {
    "url": "views/0.x/home.html",
    "revision": "caa3eeeb449def66cac71dfd1f78a693"
  },
  {
    "url": "views/0.x/index.html",
    "revision": "957ac7a9b61560cf0d06bef4567ded8e"
  },
  {
    "url": "views/0.x/installUse.html",
    "revision": "ca22fde78abc19b53aecc3fcfa4524ad"
  },
  {
    "url": "views/0.x/password.html",
    "revision": "029759bfca40381bec0822aed1498dba"
  },
  {
    "url": "views/0.x/tag.html",
    "revision": "afe825ea835f6d01316aa0945aa3f98c"
  },
  {
    "url": "views/0.x/timeline.html",
    "revision": "1873f54b8dc4412c5206a9b6805f5a73"
  },
  {
    "url": "views/0.x/valine.html",
    "revision": "e817e12089994c97bee1fdd797a7dcd8"
  },
  {
    "url": "views/1.x/0update1.html",
    "revision": "1acd2e98a3c8ee315603fd6771132435"
  },
  {
    "url": "views/1.x/404.html",
    "revision": "fe689002953a0a1e0b6717fdd253289a"
  },
  {
    "url": "views/1.x/abstract.html",
    "revision": "e56225a1dad1c7bc81cb1ccde5f02e95"
  },
  {
    "url": "views/1.x/blog.html",
    "revision": "8cff8315594ad95421dc5f71a9cfab2b"
  },
  {
    "url": "views/1.x/configJs.html",
    "revision": "59d4e05f16a1b64ff6f5a825ef4651c7"
  },
  {
    "url": "views/1.x/frontMatter.html",
    "revision": "3e1484e9142dee6fb9593e7be1d28bff"
  },
  {
    "url": "views/1.x/ga.html",
    "revision": "31ae3ac7067fb96d9d372dba76ed616f"
  },
  {
    "url": "views/1.x/home.html",
    "revision": "caa3eeeb449def66cac71dfd1f78a693"
  },
  {
    "url": "views/1.x/index.html",
    "revision": "957ac7a9b61560cf0d06bef4567ded8e"
  },
  {
    "url": "views/1.x/installUse.html",
    "revision": "ca22fde78abc19b53aecc3fcfa4524ad"
  },
  {
    "url": "views/1.x/password.html",
    "revision": "029759bfca40381bec0822aed1498dba"
  },
  {
    "url": "views/1.x/recommend.html",
    "revision": "46276af6f728672143fe7b70e8936fb8"
  },
  {
    "url": "views/1.x/sidebar.html",
    "revision": "ca7df4622ad1e5d95a2a6d0e5ad43e31"
  },
  {
    "url": "views/1.x/syntax.html",
    "revision": "da50cc8f69781421c9adc4ee8d56b5d4"
  },
  {
    "url": "views/1.x/themePicker.html",
    "revision": "bc08e3724fce7bf83ae4be0f754dc69f"
  },
  {
    "url": "views/1.x/timeline.html",
    "revision": "1873f54b8dc4412c5206a9b6805f5a73"
  },
  {
    "url": "views/1.x/valine.html",
    "revision": "6e7d7575013fe78821eb53a8f0d30eba"
  },
  {
    "url": "views/other/about.html",
    "revision": "e88859ae904e02f5045ae2114f7d33d3"
  },
  {
    "url": "views/other/deploy.html",
    "revision": "ceda957075f9f00f0b762d29ad441707"
  },
  {
    "url": "views/other/develop.html",
    "revision": "5444e4939f30419da5071b514f3e3de2"
  },
  {
    "url": "views/other/domain.html",
    "revision": "70cb3aa83084fb598865df2ac0d4bdfb"
  },
  {
    "url": "views/other/notice.html",
    "revision": "6c34db0fa93cb4cf63d2d55b50ad410f"
  },
  {
    "url": "views/other/one-year-old.html",
    "revision": "27768952e25b2031b6930d1ccd2f0db1"
  },
  {
    "url": "views/other/question.html",
    "revision": "a279940411f528120800b808c616e62c"
  },
  {
    "url": "views/other/theme-example.html",
    "revision": "2156f2b860345273dd6104b2ad975114"
  },
  {
    "url": "views/plugins/backToTop.html",
    "revision": "e765141afa56f88b43f52db510305850"
  },
  {
    "url": "views/plugins/comments.html",
    "revision": "1da3c63e84634b28fadf187a3b34e748"
  },
  {
    "url": "views/plugins/extractCode.html",
    "revision": "be1d4e6983495e1d756f0407b15d4316"
  },
  {
    "url": "views/plugins/ga.html",
    "revision": "8f52009926cd8de5c179a7c0cf65adef"
  },
  {
    "url": "views/plugins/index.html",
    "revision": "683a4a817535b210681134b390465b90"
  },
  {
    "url": "views/plugins/kanbanniang.html",
    "revision": "40543914b3628c4ea75ae49a6c864bea"
  },
  {
    "url": "views/plugins/loadingPage.html",
    "revision": "1b2a0c8564d4684db66661dd5d6c7cf3"
  },
  {
    "url": "views/plugins/pagation.html",
    "revision": "465be390ba26003a1ce1b6cdff1db013"
  },
  {
    "url": "views/plugins/rss.html",
    "revision": "d0f23213d82de162c3480892c8b695bc"
  },
  {
    "url": "views/plugins/screenfull.html",
    "revision": "7c595ff5f94e041d2d5476c6c856ddff"
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
