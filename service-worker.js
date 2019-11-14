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
    "revision": "6f6c5a1fdc37d6542c0e1ab4d1d772e5"
  },
  {
    "url": "assets/css/0.styles.fa8550d7.css",
    "revision": "5b4d96e25d67536d44e191c318aa6a90"
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
    "url": "assets/js/1.124a0f00.js",
    "revision": "7b28521d24ff730266a2c2bb3b44a9ea"
  },
  {
    "url": "assets/js/10.26ccf08f.js",
    "revision": "fb9a9273c8c753b4e6e628eeca71b02b"
  },
  {
    "url": "assets/js/11.ae2bc590.js",
    "revision": "4a34e08acedea784f66a282f6e196808"
  },
  {
    "url": "assets/js/12.48062b3a.js",
    "revision": "570c7672821b8db98a9fe7c17dca9cb5"
  },
  {
    "url": "assets/js/13.8d195e7a.js",
    "revision": "fddc80ec1b365488ebf5021be99dbc56"
  },
  {
    "url": "assets/js/14.54aaab09.js",
    "revision": "e55a1126c3be1644543228b6aec521b6"
  },
  {
    "url": "assets/js/15.3da031ed.js",
    "revision": "588548de5ddc5b6c47e4207822475f14"
  },
  {
    "url": "assets/js/16.7a0715ef.js",
    "revision": "18cbf2820662b731a23f0cc69fce9505"
  },
  {
    "url": "assets/js/17.38fb97d8.js",
    "revision": "26d877f7ec412e9e13065d5c010ee5f6"
  },
  {
    "url": "assets/js/18.cfce7786.js",
    "revision": "9d1538aa7d380a74225c89efaef9b17e"
  },
  {
    "url": "assets/js/19.04eea930.js",
    "revision": "5b9960b90b993a45b1d2f954bdb26062"
  },
  {
    "url": "assets/js/2.8684b4ab.js",
    "revision": "db6b8d7dcd2e30eee4e6f4f9f9de6c2f"
  },
  {
    "url": "assets/js/20.42ec876e.js",
    "revision": "54485ca70a15b01c420b78c34161d202"
  },
  {
    "url": "assets/js/21.b0ac1ae9.js",
    "revision": "f1cb296cca1e5e7fe8e59b95138e0df3"
  },
  {
    "url": "assets/js/22.9c66b91a.js",
    "revision": "ae58d97ca3cedeb10724763faf4f8486"
  },
  {
    "url": "assets/js/23.3eea54c7.js",
    "revision": "809b87b8480067b2da296c6078f6efd6"
  },
  {
    "url": "assets/js/24.4a811ad8.js",
    "revision": "a6ed0f75be2a99a25ae2ab8682884016"
  },
  {
    "url": "assets/js/25.3a0917e8.js",
    "revision": "d9fd2a1eb47256d235121b40fb9e68cb"
  },
  {
    "url": "assets/js/26.e5ea19d8.js",
    "revision": "5d93a697cdd297a258ad9f613ed4c92a"
  },
  {
    "url": "assets/js/27.2fd11c39.js",
    "revision": "98613071902fe1a1857f36f02e25bdd0"
  },
  {
    "url": "assets/js/28.51daae0e.js",
    "revision": "41130e0f95d219d2fa10df566009142e"
  },
  {
    "url": "assets/js/29.a389c583.js",
    "revision": "ed956f83af0fac625775ea00d87f7edd"
  },
  {
    "url": "assets/js/30.aba67883.js",
    "revision": "5f717ee023b2429f3888786d9d424a40"
  },
  {
    "url": "assets/js/31.64181d50.js",
    "revision": "367828d830c24e8e3a48ad787df0e3f7"
  },
  {
    "url": "assets/js/32.a6df14da.js",
    "revision": "65fac25bbb43af80c608db660ba5b692"
  },
  {
    "url": "assets/js/33.cee2cd46.js",
    "revision": "f89e6f78e2b2d5e3fa7b30b31bade411"
  },
  {
    "url": "assets/js/34.7fde45db.js",
    "revision": "500bb607ca825130dafcda3d4e6c42ad"
  },
  {
    "url": "assets/js/35.bcb29654.js",
    "revision": "2b3b9d6b44aab8a56dfcd9a5b3b901bf"
  },
  {
    "url": "assets/js/36.2e4844f3.js",
    "revision": "becc8398c629f576622b242ba9b595a0"
  },
  {
    "url": "assets/js/37.3de1064d.js",
    "revision": "3393ab1773d386d9981e9fe47c37422b"
  },
  {
    "url": "assets/js/38.f7e74f62.js",
    "revision": "f16ece2224b9ae8214594bdb828bf861"
  },
  {
    "url": "assets/js/39.4a419355.js",
    "revision": "ea609e842a602b4b588be9be90da8904"
  },
  {
    "url": "assets/js/40.7ad5c829.js",
    "revision": "7d034c1ccb51fca142d48268b78ecbb9"
  },
  {
    "url": "assets/js/41.8bcc887c.js",
    "revision": "bcd04b0087f22e855a9c68f50170b78d"
  },
  {
    "url": "assets/js/42.72c5bcb4.js",
    "revision": "340cf325ea3b775ba18d8495ea28e7d5"
  },
  {
    "url": "assets/js/43.17703775.js",
    "revision": "917dae89cfa4f6e7121e9022f7907b20"
  },
  {
    "url": "assets/js/44.6a73d231.js",
    "revision": "a6ae5cde86a39738e19b2d7de9d99976"
  },
  {
    "url": "assets/js/45.d2059a1f.js",
    "revision": "f21cbe99a49cefae7d4f9597d86231a9"
  },
  {
    "url": "assets/js/46.76044531.js",
    "revision": "fe88d57ddfcd2c6b19f1a324ec088be2"
  },
  {
    "url": "assets/js/47.7da961c6.js",
    "revision": "5092662b260ddff88e55eb79e63e2c23"
  },
  {
    "url": "assets/js/48.717d0361.js",
    "revision": "6a7809d445364da35db20ffc8bf9a9f2"
  },
  {
    "url": "assets/js/49.aae21093.js",
    "revision": "c8977fe75b515384cc9ada40e3a02d5c"
  },
  {
    "url": "assets/js/50.1ec3df6d.js",
    "revision": "829316bf262839a5e733b4e3441a9062"
  },
  {
    "url": "assets/js/51.b3864da6.js",
    "revision": "334e66e7286826bf299226689468aecb"
  },
  {
    "url": "assets/js/52.f4459e4c.js",
    "revision": "d8891d88c23ce40de0c80cca603961ac"
  },
  {
    "url": "assets/js/53.12d4f693.js",
    "revision": "acfb2c2d4fd886b47ddbcb999cf6bbac"
  },
  {
    "url": "assets/js/54.7ff7099f.js",
    "revision": "1f83eda9624893dcda4b5dfb1b7323fa"
  },
  {
    "url": "assets/js/55.33373ad8.js",
    "revision": "74a55175aebfd420e3976bcbf6ace3e6"
  },
  {
    "url": "assets/js/56.b18bc11a.js",
    "revision": "54186bc95c5018de8ea1046df571efbb"
  },
  {
    "url": "assets/js/57.3a4d0a4e.js",
    "revision": "fd50bf71e07e544cfc779c36d7fb9829"
  },
  {
    "url": "assets/js/58.b882e65f.js",
    "revision": "692e0a7b8ec001505277c1bda72c8f5d"
  },
  {
    "url": "assets/js/59.3e0d8b56.js",
    "revision": "85b998dcaca6e2a415f0417a087b5bee"
  },
  {
    "url": "assets/js/6.7186bf86.js",
    "revision": "1148844931f360ca7606b920bfecce59"
  },
  {
    "url": "assets/js/60.260c683d.js",
    "revision": "5d07d124c42764ed8fb681889b602902"
  },
  {
    "url": "assets/js/61.e42a81af.js",
    "revision": "1a10f86e3304ddedf9d1f08f9a02c4f0"
  },
  {
    "url": "assets/js/62.19aa3cf6.js",
    "revision": "f8c9e64ba3966161a0837ac0f7ee00ee"
  },
  {
    "url": "assets/js/63.3a354dc6.js",
    "revision": "18062b87cc3808743a4d010fa8dde4f4"
  },
  {
    "url": "assets/js/64.03f17a09.js",
    "revision": "92638f677471df5c9edac6ad0475cb9d"
  },
  {
    "url": "assets/js/65.8fd2df49.js",
    "revision": "41ae6d54c256a4a0e515db05a65b75b7"
  },
  {
    "url": "assets/js/7.86867c42.js",
    "revision": "622777872020027310fce5541a537d57"
  },
  {
    "url": "assets/js/8.97807900.js",
    "revision": "3d4beb5a18183e9dafad67f59ac821ff"
  },
  {
    "url": "assets/js/9.52290e39.js",
    "revision": "89a3634c1b87b8e0fa454f1ae6c3abc9"
  },
  {
    "url": "assets/js/app.77ed26c5.js",
    "revision": "4506aa564735146aa3246f374e1d9df2"
  },
  {
    "url": "assets/js/vendors~docsearch.98c0e43c.js",
    "revision": "700a5dec06670bed3fe4e07d8b524143"
  },
  {
    "url": "assets/js/vendors~flowchart.a12fc33b.js",
    "revision": "401c7db69a8c29d96e007472fd81762f"
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
    "revision": "f277bcb2204a28a567fcd867138d9b36"
  },
  {
    "url": "categories/index.html",
    "revision": "fe7adeb93fa93375d1738477af0c5f3a"
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
    "revision": "9fdaaaae660e9cb30c9752506ff1d384"
  },
  {
    "url": "tag/index.html",
    "revision": "4c02c1a63710459c50fd2c643073b814"
  },
  {
    "url": "timeline/index.html",
    "revision": "d01f1fe0563b93b5effb916b2b11ba7d"
  },
  {
    "url": "views/0.x/abstract.html",
    "revision": "d142daf256193b60c38b755914f0b59a"
  },
  {
    "url": "views/0.x/category.html",
    "revision": "f30c8060647388d1c51d2a7f43b67be0"
  },
  {
    "url": "views/0.x/configJs.html",
    "revision": "d33b1cfbd16fad8270861e5268998f22"
  },
  {
    "url": "views/0.x/home.html",
    "revision": "8ded12235c81088eb72e9e9d87c4f570"
  },
  {
    "url": "views/0.x/index.html",
    "revision": "e22cbc0a9bea40e779e0f9c0a73d9025"
  },
  {
    "url": "views/0.x/installUse.html",
    "revision": "d042d767689bb11dba4ab7c82ab1abbf"
  },
  {
    "url": "views/0.x/password.html",
    "revision": "79803410c834636037ed59d3142d89d2"
  },
  {
    "url": "views/0.x/tag.html",
    "revision": "8093c04d005685b4f995b1f46d34a649"
  },
  {
    "url": "views/0.x/timeline.html",
    "revision": "0027355b45aef2bbb815cf544d10d35b"
  },
  {
    "url": "views/0.x/valine.html",
    "revision": "8ede0f08bf215026c2cf3dc9d8856c1d"
  },
  {
    "url": "views/1.x/0update1.html",
    "revision": "4aef5ee4dbaf8933a0b8159f6d8fe9dd"
  },
  {
    "url": "views/1.x/404.html",
    "revision": "a587099da2124258f82147588ec40ac1"
  },
  {
    "url": "views/1.x/abstract.html",
    "revision": "0215c51a0e815d92c9e34dfcd6813321"
  },
  {
    "url": "views/1.x/blog.html",
    "revision": "191874af6ea9d4ecffba7a91edd75fad"
  },
  {
    "url": "views/1.x/configJs.html",
    "revision": "7587816eadfc7da6cb631751ab7a2d87"
  },
  {
    "url": "views/1.x/frontMatter.html",
    "revision": "dafb0c4b0e2c2d091d2718c8ba7ad3d2"
  },
  {
    "url": "views/1.x/ga.html",
    "revision": "c231d616c3dba759ed03bcc21a328578"
  },
  {
    "url": "views/1.x/home.html",
    "revision": "fe98b7a1f7bc14b510d740bfe71bc449"
  },
  {
    "url": "views/1.x/index.html",
    "revision": "25a0d7ff0b39d0559ef55333bf03128b"
  },
  {
    "url": "views/1.x/installUse.html",
    "revision": "a6957e3c091f64b378cbe24dc743ac53"
  },
  {
    "url": "views/1.x/password.html",
    "revision": "5e8e4309c16764a598d8638c8dc4597d"
  },
  {
    "url": "views/1.x/recommend.html",
    "revision": "89e7d10a51b1b753c8654ddaae05ee03"
  },
  {
    "url": "views/1.x/sidebar.html",
    "revision": "2e2dc30a8632668288553a7e9b83f393"
  },
  {
    "url": "views/1.x/syntax.html",
    "revision": "c0f004b48e57e8458b31e00514fae574"
  },
  {
    "url": "views/1.x/themePicker.html",
    "revision": "8e2cea4325f2052775fe6f9ad16d89b0"
  },
  {
    "url": "views/1.x/timeline.html",
    "revision": "b418d77ff16952cfd7f3005792fa054f"
  },
  {
    "url": "views/1.x/valine.html",
    "revision": "e2d4241750479b0211b47313ce75be6b"
  },
  {
    "url": "views/other/about.html",
    "revision": "0bbc8a4c113139a2153be6ba1a033f7d"
  },
  {
    "url": "views/other/deploy.html",
    "revision": "64b6844d2a1797d0234b764456bfd07d"
  },
  {
    "url": "views/other/develop.html",
    "revision": "ed6c10361d2a24c5dd4a3c0c07cc7945"
  },
  {
    "url": "views/other/domain.html",
    "revision": "7558ca8dc711a002504c133f4ec632b0"
  },
  {
    "url": "views/other/notice.html",
    "revision": "cbb9f5c64a1b271ae14d1e8c324f90ff"
  },
  {
    "url": "views/other/one-year-old.html",
    "revision": "e83d9cadb3ee104697e5842bc5d196d8"
  },
  {
    "url": "views/other/question.html",
    "revision": "b05b37d676f823a9d0de5f1300c9c79a"
  },
  {
    "url": "views/other/theme-example.html",
    "revision": "e1bbdf40a1effd68713671c16210f5f2"
  },
  {
    "url": "views/plugins/backToTop.html",
    "revision": "1266d2b94477c7ae9ca5bab70afc4844"
  },
  {
    "url": "views/plugins/comments.html",
    "revision": "44954f4b9cbcc07de72c819d29e5c0dd"
  },
  {
    "url": "views/plugins/extractCode.html",
    "revision": "f3abb299f48eb366ba62798be57d00f7"
  },
  {
    "url": "views/plugins/ga.html",
    "revision": "f2aea7fd3bf3094f858e27b9000c5608"
  },
  {
    "url": "views/plugins/index.html",
    "revision": "c40e6bb0691fb8343983095415a761fc"
  },
  {
    "url": "views/plugins/kanbanniang.html",
    "revision": "f91a6626facf840094fd592ced87909f"
  },
  {
    "url": "views/plugins/loadingPage.html",
    "revision": "18880366e879f2873ce05a9156bb930a"
  },
  {
    "url": "views/plugins/pagation.html",
    "revision": "0ac0e6ebe5e967e9e7e75964c9d5d1a1"
  },
  {
    "url": "views/plugins/rss.html",
    "revision": "5696ca0ac862bbb97fe7247646d70c55"
  },
  {
    "url": "views/plugins/screenfull.html",
    "revision": "d0af522f3c829bdd90bd76ff180db179"
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
