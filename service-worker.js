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
    "revision": "4ea3926549792ddaa2c7e54b71fc2897"
  },
  {
    "url": "assets/css/0.styles.f055ad18.css",
    "revision": "aa59619b292f41b0ff5c337e10af9c68"
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
    "url": "assets/js/1.8f5dbc41.js",
    "revision": "92da51c9cd90217a86c1ce0b4f6214aa"
  },
  {
    "url": "assets/js/10.0a4d1638.js",
    "revision": "c17c0af88c029b5d4dff7103a9833402"
  },
  {
    "url": "assets/js/11.d512c949.js",
    "revision": "4dd28b963ca35af4593732c88ed2fac9"
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
    "url": "assets/js/16.bffdd085.js",
    "revision": "ae67fed0162a427500b396ca1b59ec59"
  },
  {
    "url": "assets/js/17.c0c123d5.js",
    "revision": "0754cd495a10cd6a677e5f92bd4b413e"
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
    "url": "assets/js/47.3c5ff5fe.js",
    "revision": "e817a3d748ee060258f585f2fa8be7ad"
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
    "url": "assets/js/5.cd86cd3c.js",
    "revision": "4685a2da6ef22c3ef9455da6990643f1"
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
    "url": "assets/js/6.78f22021.js",
    "revision": "1ac20b4c76a64e6a202fded7dcf4371a"
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
    "url": "assets/js/7.ffd7b75d.js",
    "revision": "92a81c9f5a5aa96a20ada49093585031"
  },
  {
    "url": "assets/js/8.a36b2ddd.js",
    "revision": "58c1b3133c3d4d2b6fffcb6423bda8e0"
  },
  {
    "url": "assets/js/9.173f272a.js",
    "revision": "77318782dc7dd707bcade1af9464701a"
  },
  {
    "url": "assets/js/app.613997ea.js",
    "revision": "217d0eee0e84741d79b71942c357353f"
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
    "revision": "75c8f1a3d761c979ba057c59440b1fe3"
  },
  {
    "url": "categories/index.html",
    "revision": "f62f088f189cc8eadf26a0a140e768b3"
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
    "revision": "551e98f8440a8557c5a6ea7a780b2d49"
  },
  {
    "url": "tag/index.html",
    "revision": "7fe5c951594137123c9fc790381b19c4"
  },
  {
    "url": "timeline/index.html",
    "revision": "c96dcfcdcf6290039a4dcb6aa12961c3"
  },
  {
    "url": "views/0.x/abstract.html",
    "revision": "1985e6bc2fe1ba8b3ef65ef69faf0fed"
  },
  {
    "url": "views/0.x/category.html",
    "revision": "17c1fa280228129feef239a30d37e4f6"
  },
  {
    "url": "views/0.x/configJs.html",
    "revision": "379a972cf837868cd42e07b862c9f903"
  },
  {
    "url": "views/0.x/home.html",
    "revision": "8e7790d5b72d5fc683ac93f165886dae"
  },
  {
    "url": "views/0.x/index.html",
    "revision": "686c429c85b59f11e76e8cb389885b7e"
  },
  {
    "url": "views/0.x/installUse.html",
    "revision": "f4373d26a821cb650eeec65942ac49cd"
  },
  {
    "url": "views/0.x/password.html",
    "revision": "008a9b321a9c1c18d857b986d15b6157"
  },
  {
    "url": "views/0.x/tag.html",
    "revision": "1a6fe312ed068b725de90fc58f9c4b6e"
  },
  {
    "url": "views/0.x/timeline.html",
    "revision": "3add2a0d9e0d38c48bb14918374098df"
  },
  {
    "url": "views/0.x/valine.html",
    "revision": "ca5ead2fda4bbf12b36671de977aeb47"
  },
  {
    "url": "views/1.x/0update1.html",
    "revision": "211fc4b769ef0a769214ea5ee8835c03"
  },
  {
    "url": "views/1.x/404.html",
    "revision": "6dd137f3a4a87be2a8bc13e25585c0ec"
  },
  {
    "url": "views/1.x/abstract.html",
    "revision": "ac01c1c244adffd63fa05a597f3f2a93"
  },
  {
    "url": "views/1.x/blog.html",
    "revision": "457fd0dc0a33e5ac8e388dab53c27423"
  },
  {
    "url": "views/1.x/configJs.html",
    "revision": "8783a75a90b4ab65fc9f87907a65e6b7"
  },
  {
    "url": "views/1.x/frontMatter.html",
    "revision": "0cb96e52511db619336426274f81c854"
  },
  {
    "url": "views/1.x/ga.html",
    "revision": "17c01e8f36217bd575bf67a03e156f91"
  },
  {
    "url": "views/1.x/home.html",
    "revision": "b4dc03a95447c07b98ac7b85ebdc6520"
  },
  {
    "url": "views/1.x/index.html",
    "revision": "41bc9f8914f25d383dc33de8a41bd155"
  },
  {
    "url": "views/1.x/installUse.html",
    "revision": "a45cbe8c8b50e246cabce5da5e58ecf0"
  },
  {
    "url": "views/1.x/password.html",
    "revision": "ff4eecc77d55d42e257931a2c8c444ca"
  },
  {
    "url": "views/1.x/recommend.html",
    "revision": "a830e726ebb6731d799533fe4ef148c9"
  },
  {
    "url": "views/1.x/sidebar.html",
    "revision": "b8b7b7317e71de4a3c69982906391d2e"
  },
  {
    "url": "views/1.x/syntax.html",
    "revision": "41d07d95b296c896df09ec26e6596b61"
  },
  {
    "url": "views/1.x/themePicker.html",
    "revision": "2da7a16c01261efa72b4043c60c25e85"
  },
  {
    "url": "views/1.x/timeline.html",
    "revision": "54fdd8cdf783fb39b6b65f9a66999164"
  },
  {
    "url": "views/1.x/valine.html",
    "revision": "d19e4a565a5c990d146a145ab297b458"
  },
  {
    "url": "views/other/about.html",
    "revision": "78b58eb9c08ff95169b68db2b6addab3"
  },
  {
    "url": "views/other/deploy.html",
    "revision": "dacd06dc8701f54238138888d0dabe09"
  },
  {
    "url": "views/other/develop.html",
    "revision": "80bca7c3764100caf72b6a59e1847764"
  },
  {
    "url": "views/other/domain.html",
    "revision": "23e2f55d0fc70cbb7641a5c88740a4e4"
  },
  {
    "url": "views/other/notice.html",
    "revision": "e84a41cba0cd2a72126a7b9fd5f404d5"
  },
  {
    "url": "views/other/one-year-old.html",
    "revision": "09c34a987f665efcdf3781089a9bc0b8"
  },
  {
    "url": "views/other/question.html",
    "revision": "cf5419a88e52f1e89f0ea5a626e78424"
  },
  {
    "url": "views/other/theme-example.html",
    "revision": "c80d827af5e491c36184dd872cc3e6c1"
  },
  {
    "url": "views/plugins/backToTop.html",
    "revision": "e5c1fdec641b6ea8a318ebf18b154cae"
  },
  {
    "url": "views/plugins/comments.html",
    "revision": "a5a73b25c826b134e0550c004c879796"
  },
  {
    "url": "views/plugins/extractCode.html",
    "revision": "aeb8daed09b6a08df8af7bed09930a84"
  },
  {
    "url": "views/plugins/ga.html",
    "revision": "ed513193f8261a3d0a555829745c8e33"
  },
  {
    "url": "views/plugins/index.html",
    "revision": "a3fff2dea6b4882e3f664e816962e615"
  },
  {
    "url": "views/plugins/kanbanniang.html",
    "revision": "84a4c99ec2ffd254cf06ae065192b39e"
  },
  {
    "url": "views/plugins/loadingPage.html",
    "revision": "cc37c340b78d74fb9923ecc16bfc71a6"
  },
  {
    "url": "views/plugins/pagation.html",
    "revision": "2f4e537efc21b87669437587b97d98e7"
  },
  {
    "url": "views/plugins/rss.html",
    "revision": "70b9de07acff9819a6f8e43951a64ac9"
  },
  {
    "url": "views/plugins/screenfull.html",
    "revision": "3011005efead66e62743ce91dc80847d"
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
