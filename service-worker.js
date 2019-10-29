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
    "revision": "9eedbc4d23eecff4a0ca92955be889d6"
  },
  {
    "url": "assets/css/0.styles.bf669701.css",
    "revision": "d35e12914d9245d48071ee02df223fa2"
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
    "url": "assets/js/1.024a0852.js",
    "revision": "704609429adc72bf4967ba89e7446a7c"
  },
  {
    "url": "assets/js/10.ea6c25b5.js",
    "revision": "7a3e7e45d608635ff1d5d5da9be81362"
  },
  {
    "url": "assets/js/11.27ae85ce.js",
    "revision": "5c3dd2fedd1b88e0aea4fb1366900461"
  },
  {
    "url": "assets/js/12.b390d1e0.js",
    "revision": "7f1b4cfa5649fba62bf9ce6697f1e045"
  },
  {
    "url": "assets/js/13.8a83e799.js",
    "revision": "81b6844f14c77f0bf267aa98b8be0524"
  },
  {
    "url": "assets/js/14.1dbf4f4d.js",
    "revision": "6f569fe978ab6a390e5d673d4b3acf80"
  },
  {
    "url": "assets/js/15.86197252.js",
    "revision": "7e9479c3227f5118a6182ee218f38b1d"
  },
  {
    "url": "assets/js/16.b11e6e6d.js",
    "revision": "fa36e5922b6317b8e395edb241e4bac2"
  },
  {
    "url": "assets/js/17.c1ce27ef.js",
    "revision": "bc2aa702562b854bbcafd4863791ef50"
  },
  {
    "url": "assets/js/18.dd32a581.js",
    "revision": "99e9231b7d88ce40a30fdc65386a9aa1"
  },
  {
    "url": "assets/js/19.2318651c.js",
    "revision": "3a419fe9190f646ac9b9e3f23182c102"
  },
  {
    "url": "assets/js/2.9f6c7404.js",
    "revision": "1932359b5334d96857377a4a2d6287b6"
  },
  {
    "url": "assets/js/20.f6fab7c9.js",
    "revision": "4415f1ba9dcc03cb258e27450ba7f550"
  },
  {
    "url": "assets/js/21.b1b2188c.js",
    "revision": "6185789c12d433b0bc22630638934ba7"
  },
  {
    "url": "assets/js/22.6b5862cd.js",
    "revision": "27f3e1b718445cd9b2abc7097e9477d4"
  },
  {
    "url": "assets/js/23.de4ed527.js",
    "revision": "ee64021eb7f52b97fde06d5dd5cd79ee"
  },
  {
    "url": "assets/js/24.1c9012c9.js",
    "revision": "07e9e4217234217cf354cfe2a070e6cd"
  },
  {
    "url": "assets/js/25.1f4a4929.js",
    "revision": "511418d441946629b430c235746fefdb"
  },
  {
    "url": "assets/js/26.a7698f51.js",
    "revision": "8db1c9ab2f034ddf2ecae8959038dfd2"
  },
  {
    "url": "assets/js/27.b80433e8.js",
    "revision": "a335635f7a7159a43100eb36f61f9617"
  },
  {
    "url": "assets/js/28.5e505ec6.js",
    "revision": "64738b5bf03108422a2ec01dfc15330f"
  },
  {
    "url": "assets/js/29.6dfbb4af.js",
    "revision": "ca303f66e13b8df8a7601cbae9c29ab8"
  },
  {
    "url": "assets/js/30.d284eed6.js",
    "revision": "3a9d72493a4e6d16cbced5896b3e17af"
  },
  {
    "url": "assets/js/31.5b32804c.js",
    "revision": "81f9c99f789abca0a141302bffa84e32"
  },
  {
    "url": "assets/js/32.2aad77fe.js",
    "revision": "b65d0e6defce0d2b4a3f679e3e5ba91b"
  },
  {
    "url": "assets/js/33.dfd43a4b.js",
    "revision": "58db395a9422d511f9061674640a414a"
  },
  {
    "url": "assets/js/34.003749d7.js",
    "revision": "f211c48a89280ed3c4c6ac2d7889c23f"
  },
  {
    "url": "assets/js/35.78c685a9.js",
    "revision": "674dbc3183c9dde46fa41866aabf9386"
  },
  {
    "url": "assets/js/36.ea35a414.js",
    "revision": "aa5eb37038de2973b101c2ae11eb2b60"
  },
  {
    "url": "assets/js/37.d84acc67.js",
    "revision": "7d1c1fcc7b26bc68007446fe19526cd3"
  },
  {
    "url": "assets/js/38.6c453cfa.js",
    "revision": "b11a52cdb1fc9b5692942e471ee12d17"
  },
  {
    "url": "assets/js/39.c5e2167d.js",
    "revision": "456f215167fbc0e953adfaec53d47ea7"
  },
  {
    "url": "assets/js/4.9b3ee280.js",
    "revision": "5f20bab6bccaaabc596384d1123e926a"
  },
  {
    "url": "assets/js/40.9e3bf585.js",
    "revision": "d5636b97761b69f8bf803b944766a43a"
  },
  {
    "url": "assets/js/41.c87e4283.js",
    "revision": "fa7deabeea72b2674bea3bbf9dc89718"
  },
  {
    "url": "assets/js/42.38196b5e.js",
    "revision": "e0658d4f7ea6385ce9a41629d784db77"
  },
  {
    "url": "assets/js/43.a64e0573.js",
    "revision": "b777747252e40bc527f3a7fb355cfa55"
  },
  {
    "url": "assets/js/44.12847c1e.js",
    "revision": "61e843751884bc4e00d4374ef1653916"
  },
  {
    "url": "assets/js/45.89e4ab30.js",
    "revision": "9b4365c44e246c0129f354eb5ce123b7"
  },
  {
    "url": "assets/js/46.3546c60a.js",
    "revision": "3d4e45535b89725007f43b6846d936e4"
  },
  {
    "url": "assets/js/47.1640cb9b.js",
    "revision": "74ad4c0de3487329a4e4618e55202a88"
  },
  {
    "url": "assets/js/48.9f80aa23.js",
    "revision": "6f1951a2c1667ba704cdc7a374226506"
  },
  {
    "url": "assets/js/49.956e670d.js",
    "revision": "786827cf6f9ef4087e4a775c325c28d5"
  },
  {
    "url": "assets/js/5.6c047095.js",
    "revision": "dfcd9f854001039abbee22f7a2f016de"
  },
  {
    "url": "assets/js/50.011a7e63.js",
    "revision": "3f7c580bfd9f0cd2880eec8851d102a0"
  },
  {
    "url": "assets/js/51.5d6a0e25.js",
    "revision": "bf84db42f15eecacd583f9d3d80ed9cf"
  },
  {
    "url": "assets/js/52.797e0481.js",
    "revision": "88fdd15c8ca3d1bcc446970959d8787f"
  },
  {
    "url": "assets/js/53.30e0f834.js",
    "revision": "6188616913039057dfe74a87fe74031d"
  },
  {
    "url": "assets/js/54.153e83cf.js",
    "revision": "79cdc6d86130eea1e55c55889bde4bec"
  },
  {
    "url": "assets/js/55.943ca24e.js",
    "revision": "3178e9275a747cfce25a74f6113b11f1"
  },
  {
    "url": "assets/js/56.dabd4ed5.js",
    "revision": "b29d5471a20848bb712b2ac71a53627b"
  },
  {
    "url": "assets/js/6.d01ca6b4.js",
    "revision": "ba716fcea13ca2fcd63006a56d07c8ac"
  },
  {
    "url": "assets/js/7.76ff58c7.js",
    "revision": "52a2657ee8ad018dff4a7cc5c1001590"
  },
  {
    "url": "assets/js/8.49871c60.js",
    "revision": "eb8c6dba9dfdb40d9fe188a8f1b337d6"
  },
  {
    "url": "assets/js/9.2821fb03.js",
    "revision": "bda822cf822348266cb2dc9a29672920"
  },
  {
    "url": "assets/js/app.646c0066.js",
    "revision": "6104208e08966f1b0964484e4635b8a9"
  },
  {
    "url": "blogImages/17.png",
    "revision": "27354499b38416f31b6e2d78d2f6a3ac"
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
    "url": "blogImages/goozyshi的博客.png",
    "revision": "29004117a86c9da7d9d5f34e3fdcf93c"
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
    "revision": "a10d4295628666da3ed33b925b88218c"
  },
  {
    "url": "categories/index.html",
    "revision": "aee815c79a506359c81ddb238e265585"
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
    "revision": "4853814bcf258f4abd8dab94f1f4efbb"
  },
  {
    "url": "tag/index.html",
    "revision": "d3d1e9c82e954e03a6461a9db356afa3"
  },
  {
    "url": "timeline/index.html",
    "revision": "f9b17401f9fd99f113324f3bdcdbd642"
  },
  {
    "url": "views/0.x/abstract.html",
    "revision": "36a021a91f085e0bdaa19506454a071e"
  },
  {
    "url": "views/0.x/category.html",
    "revision": "5abbc388ac4b8d0717c0153e9d4b584c"
  },
  {
    "url": "views/0.x/configJs.html",
    "revision": "a3029d7015b10ab8de615773adef6a1f"
  },
  {
    "url": "views/0.x/home.html",
    "revision": "d703e2a10791d7961a57bc6dc5a76f2e"
  },
  {
    "url": "views/0.x/index.html",
    "revision": "1920bda83dc54557c1633bafc56c7a5d"
  },
  {
    "url": "views/0.x/installUse.html",
    "revision": "fe76199998b028d2f1fa286a0590a6f9"
  },
  {
    "url": "views/0.x/password.html",
    "revision": "f7d07a64d688c66a5141281c2eb2c8c7"
  },
  {
    "url": "views/0.x/tag.html",
    "revision": "fcfebbbb7c361eed50bd70075936b374"
  },
  {
    "url": "views/0.x/timeline.html",
    "revision": "9906cfad74a6af804c8f41fa6cd1516e"
  },
  {
    "url": "views/0.x/valine.html",
    "revision": "9dd382dc131a5d86eecb332db43dcfdb"
  },
  {
    "url": "views/1.x/0update1.html",
    "revision": "e730f6af549a69b39998a4f368917800"
  },
  {
    "url": "views/1.x/404.html",
    "revision": "c5cb5b477221616b4ca42e511c3bc14b"
  },
  {
    "url": "views/1.x/abstract.html",
    "revision": "36a021a91f085e0bdaa19506454a071e"
  },
  {
    "url": "views/1.x/blog.html",
    "revision": "d6c780791ec442ca28e858d08ece3080"
  },
  {
    "url": "views/1.x/configJs.html",
    "revision": "a3029d7015b10ab8de615773adef6a1f"
  },
  {
    "url": "views/1.x/frontMatter.html",
    "revision": "e1e4b3f93a01ad52145adc417e276a92"
  },
  {
    "url": "views/1.x/ga.html",
    "revision": "2a71683c55d6dc94adf220ef6d289a33"
  },
  {
    "url": "views/1.x/home.html",
    "revision": "d703e2a10791d7961a57bc6dc5a76f2e"
  },
  {
    "url": "views/1.x/index.html",
    "revision": "1920bda83dc54557c1633bafc56c7a5d"
  },
  {
    "url": "views/1.x/installUse.html",
    "revision": "fe76199998b028d2f1fa286a0590a6f9"
  },
  {
    "url": "views/1.x/password.html",
    "revision": "f7d07a64d688c66a5141281c2eb2c8c7"
  },
  {
    "url": "views/1.x/recommend.html",
    "revision": "8e2a8d9c44d0ddf872a131bb9cd99dd1"
  },
  {
    "url": "views/1.x/themePicker.html",
    "revision": "17ea3226110d773fcf28fc54463526fd"
  },
  {
    "url": "views/1.x/timeline.html",
    "revision": "9906cfad74a6af804c8f41fa6cd1516e"
  },
  {
    "url": "views/1.x/valine.html",
    "revision": "7534e32d1518457d590fc797a28f8e87"
  },
  {
    "url": "views/other/about.html",
    "revision": "21c545a473404a13e9ba4d846dfb7c37"
  },
  {
    "url": "views/other/deploy.html",
    "revision": "8e12c8f20a1a07b6a46f792cc786b6da"
  },
  {
    "url": "views/other/develop.html",
    "revision": "3dfeaf147a165f4840cdaf66676254e7"
  },
  {
    "url": "views/other/domain.html",
    "revision": "ac8ef15fbc30f9dc894539d455cb0240"
  },
  {
    "url": "views/other/notice.html",
    "revision": "bf99afee1a101b9944402678a62db3e6"
  },
  {
    "url": "views/other/one-year-old.html",
    "revision": "4071d94fe5a430131d90aeb3a42a3533"
  },
  {
    "url": "views/other/question.html",
    "revision": "9d944425f9386b42931d1bd3ad0e6528"
  },
  {
    "url": "views/other/theme-example.html",
    "revision": "1650e5037e1ea5bfddf81953aa09a741"
  },
  {
    "url": "views/plugins/backToTop.html",
    "revision": "68e00b8b15493b033bc1ef0bb5453944"
  },
  {
    "url": "views/plugins/comments.html",
    "revision": "aedabdb6a8fe0e6edf48e97b76985779"
  },
  {
    "url": "views/plugins/ga.html",
    "revision": "e50fbd400acaa5b33ebb1a73435a5598"
  },
  {
    "url": "views/plugins/index.html",
    "revision": "f435468a2e3bf818343f41b392288eee"
  },
  {
    "url": "views/plugins/kanbanniang.html",
    "revision": "b6311562475e8a573e6e95f97b4e4e28"
  },
  {
    "url": "views/plugins/loadingPage.html",
    "revision": "c10dc74fa1cfd0ffecaefcffa848fc2b"
  },
  {
    "url": "views/plugins/pagation.html",
    "revision": "5f9e382b8ef8ace28d7e08f185418508"
  },
  {
    "url": "views/plugins/screenfull.html",
    "revision": "7a1ce0983495697f651ce219cdb32b47"
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
