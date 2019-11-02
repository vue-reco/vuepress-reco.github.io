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
    "revision": "e86f5bdd10207c5905820f5dc2834d51"
  },
  {
    "url": "assets/css/0.styles.352c9942.css",
    "revision": "1031c6c12fc5f4f4ff751dbf16a775b0"
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
    "url": "assets/js/1.8acadf55.js",
    "revision": "1fc09b2397e664a98d84e36bbcc011e5"
  },
  {
    "url": "assets/js/10.d26348bb.js",
    "revision": "73a79f0a1c68e3ad9d53b37823e02e48"
  },
  {
    "url": "assets/js/11.31d14030.js",
    "revision": "2e4b2a37bc53ed6f98e1b46a9890b618"
  },
  {
    "url": "assets/js/12.450aab78.js",
    "revision": "c812e23a745bdbb5183326fd043a50ef"
  },
  {
    "url": "assets/js/13.5810cf77.js",
    "revision": "b31773a747417cd67c272dc3085ecee3"
  },
  {
    "url": "assets/js/14.810b1ec4.js",
    "revision": "f0d8a9916410f0ae701f3b1ff5160478"
  },
  {
    "url": "assets/js/15.f78645f0.js",
    "revision": "7ea25192693b1f6912d613a71a8fd4f8"
  },
  {
    "url": "assets/js/16.7cc2f9cd.js",
    "revision": "5d06db15b44c18c695dc58a3f4c29994"
  },
  {
    "url": "assets/js/17.0cd9092b.js",
    "revision": "94c04a2f9cebbd2a5afbc562d1959cbc"
  },
  {
    "url": "assets/js/18.138435ce.js",
    "revision": "51334ddc514ee1154e87de3e2c50b0f5"
  },
  {
    "url": "assets/js/19.3eb836b9.js",
    "revision": "38f905cd0679ef76c92cb2a85aedb529"
  },
  {
    "url": "assets/js/2.898185e1.js",
    "revision": "793f94946e832f0fa0ae518d2dbf7b93"
  },
  {
    "url": "assets/js/20.2f604a1e.js",
    "revision": "2b99721d3008329fa73c44f377493f38"
  },
  {
    "url": "assets/js/21.91d7685b.js",
    "revision": "e17ae76070db1448e659dfe766fa3ed6"
  },
  {
    "url": "assets/js/22.7090d433.js",
    "revision": "313e2c1b24a1175aa84bc8f81ba10f03"
  },
  {
    "url": "assets/js/23.37fbe010.js",
    "revision": "c39244168babd84a3ed6fa502e0557a8"
  },
  {
    "url": "assets/js/24.5bbb9e84.js",
    "revision": "26419d91fd5de0fde92d86935a1cdd77"
  },
  {
    "url": "assets/js/25.a599b1e8.js",
    "revision": "94c3fc00f57daae893648accd80f4bc1"
  },
  {
    "url": "assets/js/26.70d119e7.js",
    "revision": "e82e58d566b72e6a3c07ce2a1c769496"
  },
  {
    "url": "assets/js/27.2d89d4ee.js",
    "revision": "9e4e9c8f164b95d44f7c1b658566ddc1"
  },
  {
    "url": "assets/js/28.fdb7e265.js",
    "revision": "e7af7d62788f00bbd197e954bc003fe6"
  },
  {
    "url": "assets/js/29.57862bcb.js",
    "revision": "8f9645b7b71a8369cbcfb5c6a55cd380"
  },
  {
    "url": "assets/js/30.e8976281.js",
    "revision": "ccfcb7076951eee525056796198db21b"
  },
  {
    "url": "assets/js/31.648205d4.js",
    "revision": "8707e4d09962744cd29ac03943989360"
  },
  {
    "url": "assets/js/32.27fbb363.js",
    "revision": "2b45ec6abb07f5f597c22c799fb73cd7"
  },
  {
    "url": "assets/js/33.4eff2b41.js",
    "revision": "759731ea05ffab1b6011f7464fa1d6a2"
  },
  {
    "url": "assets/js/34.cc9569f1.js",
    "revision": "468288aa3d9b6bd52405b75ef86be80d"
  },
  {
    "url": "assets/js/35.188574e2.js",
    "revision": "03a6e21c43062061a2a05e890686ee23"
  },
  {
    "url": "assets/js/36.9ec1e9e2.js",
    "revision": "6360f801ca67e6cb4d564d95ab410996"
  },
  {
    "url": "assets/js/37.804c73ec.js",
    "revision": "d81e1ef6ee28dc60e1175d0e3eac84db"
  },
  {
    "url": "assets/js/38.ca4c2b68.js",
    "revision": "fd30256e10ad165f0fa9dc331450adca"
  },
  {
    "url": "assets/js/39.3a7bb1cd.js",
    "revision": "aff0f24474e2302ff4c333a750fb71bc"
  },
  {
    "url": "assets/js/4.9857d5f0.js",
    "revision": "c84279942da2f8d12fbf4468574a267c"
  },
  {
    "url": "assets/js/40.34319964.js",
    "revision": "6a4d5a3ee9287c3c401e25f68d72c0a6"
  },
  {
    "url": "assets/js/41.ccea78b0.js",
    "revision": "5a79e4025892f50a400c2b032aa4ae44"
  },
  {
    "url": "assets/js/42.7b219c6b.js",
    "revision": "fc12714cbfcfc91b0026ceaf32fb0c3d"
  },
  {
    "url": "assets/js/43.32eb6017.js",
    "revision": "00d69f61332ac5b0471fd2e3f6cc5384"
  },
  {
    "url": "assets/js/44.3b801c97.js",
    "revision": "ba693903245f4964f128d4d3bd211d50"
  },
  {
    "url": "assets/js/45.1d5705ca.js",
    "revision": "110530fd4d5f5d116f776d5b8c538ab8"
  },
  {
    "url": "assets/js/46.091858f1.js",
    "revision": "45d46dc6ef6b477502df3afbca44adcf"
  },
  {
    "url": "assets/js/47.2fa10daa.js",
    "revision": "08df3f666e2ad53916027f089bab4db8"
  },
  {
    "url": "assets/js/48.05c49f08.js",
    "revision": "33f6a6f3f916db728353265991f1bdae"
  },
  {
    "url": "assets/js/49.9c4821a6.js",
    "revision": "dd69008b85db016ded0361faa82b04a9"
  },
  {
    "url": "assets/js/5.cd7f7e55.js",
    "revision": "4fbb0500757753183e082688849cb293"
  },
  {
    "url": "assets/js/50.006fa876.js",
    "revision": "4ead03b21481b5ce85d6ffd8454fa73f"
  },
  {
    "url": "assets/js/51.16164fe7.js",
    "revision": "dc66bc7544a77a09e1119f09b4ff6a93"
  },
  {
    "url": "assets/js/52.c86a5e49.js",
    "revision": "19d4924361044fd1dcb987718462a0f8"
  },
  {
    "url": "assets/js/53.345f8ea1.js",
    "revision": "ac298fe6d2e4b090f4373e8e6cf4cbbd"
  },
  {
    "url": "assets/js/54.df98e4a2.js",
    "revision": "1df6eb6f406a4b6db025bca08ee7db5e"
  },
  {
    "url": "assets/js/55.331483ab.js",
    "revision": "30b3db6394909fa2d972a1ade2151b65"
  },
  {
    "url": "assets/js/56.25b62ce0.js",
    "revision": "73d77b009e6c65699d2fb0d64e5c9497"
  },
  {
    "url": "assets/js/57.fe574b30.js",
    "revision": "327089f5e83e3b6d634b877e082d4842"
  },
  {
    "url": "assets/js/58.e6b96446.js",
    "revision": "1b1080c2712cd5f415cb0120c61100a2"
  },
  {
    "url": "assets/js/59.8adb8c94.js",
    "revision": "f4b78f3d045285115d24a30bcff58166"
  },
  {
    "url": "assets/js/6.f949e9f4.js",
    "revision": "6a75d0fa8ca9ef93157e96005843f2c1"
  },
  {
    "url": "assets/js/7.60ab11a2.js",
    "revision": "94c59474d7ff46f340c6e21c8565040b"
  },
  {
    "url": "assets/js/8.1d983746.js",
    "revision": "13cbc568eb0617067d05734edfff0299"
  },
  {
    "url": "assets/js/9.915e9b2c.js",
    "revision": "89f7bfba2b62cb227a81f1e0aed57684"
  },
  {
    "url": "assets/js/app.fd3a8c94.js",
    "revision": "a33ed38691870b984dfcbb1fcf7ceee2"
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
    "revision": "e8429175e476093341654e716ef0551c"
  },
  {
    "url": "categories/index.html",
    "revision": "3388a0783d26e8bc1b1933667cdcc2bc"
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
    "revision": "6695aacec9cdce49c439dea83d3875d0"
  },
  {
    "url": "tag/index.html",
    "revision": "4ed31bd9d48e161f24cd72f9a369a061"
  },
  {
    "url": "timeline/index.html",
    "revision": "ef521f6473cdc27b742541bdb40e2ac8"
  },
  {
    "url": "views/0.x/abstract.html",
    "revision": "54839f6410cf0626e1201e88cd60c523"
  },
  {
    "url": "views/0.x/category.html",
    "revision": "2cd441fa7e975c48befb61b198245a7e"
  },
  {
    "url": "views/0.x/configJs.html",
    "revision": "37a42f9bae863a1f43692b272d9089bc"
  },
  {
    "url": "views/0.x/home.html",
    "revision": "6f4c4bc78f18835e3d5e14dac36d1f9c"
  },
  {
    "url": "views/0.x/index.html",
    "revision": "c269a40a062af59794964b5c7e6b2f33"
  },
  {
    "url": "views/0.x/installUse.html",
    "revision": "624f86e233f5b1ee30e4aefef9e6616c"
  },
  {
    "url": "views/0.x/password.html",
    "revision": "6224f65308a661bae89c9b7b9a3ed278"
  },
  {
    "url": "views/0.x/tag.html",
    "revision": "9a6602c0c0ae2126a8afcb48cb00fcb2"
  },
  {
    "url": "views/0.x/timeline.html",
    "revision": "a4c09154ed4c4fbecf8b624acd0fc7f5"
  },
  {
    "url": "views/0.x/valine.html",
    "revision": "ee7a95005db72556762a4ac1cdd5ed2b"
  },
  {
    "url": "views/1.x/0update1.html",
    "revision": "2699f19e4cb736673b9b3bf4c7ea0a80"
  },
  {
    "url": "views/1.x/404.html",
    "revision": "e767e724f65457868275278759796798"
  },
  {
    "url": "views/1.x/abstract.html",
    "revision": "54839f6410cf0626e1201e88cd60c523"
  },
  {
    "url": "views/1.x/blog.html",
    "revision": "717379942861d195138643553af3a3ce"
  },
  {
    "url": "views/1.x/configJs.html",
    "revision": "37a42f9bae863a1f43692b272d9089bc"
  },
  {
    "url": "views/1.x/frontMatter.html",
    "revision": "707fe514eb8941865418342f5f9e59fe"
  },
  {
    "url": "views/1.x/ga.html",
    "revision": "b8b0b821e212b6f7a2cc1b13fa6327ea"
  },
  {
    "url": "views/1.x/home.html",
    "revision": "6f4c4bc78f18835e3d5e14dac36d1f9c"
  },
  {
    "url": "views/1.x/index.html",
    "revision": "c269a40a062af59794964b5c7e6b2f33"
  },
  {
    "url": "views/1.x/installUse.html",
    "revision": "624f86e233f5b1ee30e4aefef9e6616c"
  },
  {
    "url": "views/1.x/password.html",
    "revision": "6224f65308a661bae89c9b7b9a3ed278"
  },
  {
    "url": "views/1.x/recommend.html",
    "revision": "1c3067eaaa46c7ef6a2bd9c42f77b51e"
  },
  {
    "url": "views/1.x/themePicker.html",
    "revision": "d6e367e0c4ec73bfc52c30a7d244bcd2"
  },
  {
    "url": "views/1.x/timeline.html",
    "revision": "a4c09154ed4c4fbecf8b624acd0fc7f5"
  },
  {
    "url": "views/1.x/valine.html",
    "revision": "c4a538fe7c867bfdc3b98a1ac72fece0"
  },
  {
    "url": "views/other/about.html",
    "revision": "2a0335a3164b893a5889e960beb822ec"
  },
  {
    "url": "views/other/deploy.html",
    "revision": "131b1679bc44f7b813ade243b4bf5328"
  },
  {
    "url": "views/other/develop.html",
    "revision": "8fe94f96f928286f19b77e6c142894ea"
  },
  {
    "url": "views/other/domain.html",
    "revision": "25192bee21f7296c2ede8879afa9af3c"
  },
  {
    "url": "views/other/notice.html",
    "revision": "36dd31f53cb741c53aba4dcc7966201a"
  },
  {
    "url": "views/other/one-year-old.html",
    "revision": "e23209a399e5480b29e96aa5fae3abbe"
  },
  {
    "url": "views/other/question.html",
    "revision": "8da3dc320adae0ebf40fe1742a0af861"
  },
  {
    "url": "views/other/theme-example.html",
    "revision": "a08286cf0387106ee69af5934e8dbb46"
  },
  {
    "url": "views/plugins/backToTop.html",
    "revision": "80849aa83f7c15f5ac755aecaa714c70"
  },
  {
    "url": "views/plugins/comments.html",
    "revision": "fd56d6017ccffdd633bee6a4b83127ad"
  },
  {
    "url": "views/plugins/extractCode.html",
    "revision": "c80d014b11c75c39580018233935f567"
  },
  {
    "url": "views/plugins/ga.html",
    "revision": "116872f069e9764a0c9deed5024ba91f"
  },
  {
    "url": "views/plugins/index.html",
    "revision": "16ce96d38fad189329eb87b66b4f30ef"
  },
  {
    "url": "views/plugins/kanbanniang.html",
    "revision": "4f8f08192cb6d11c61585a892e7438ae"
  },
  {
    "url": "views/plugins/loadingPage.html",
    "revision": "2fa208ed4f3c47e359d3bd1204901d5d"
  },
  {
    "url": "views/plugins/pagation.html",
    "revision": "77cbb70e43e206991abde4f9863e82b1"
  },
  {
    "url": "views/plugins/screenfull.html",
    "revision": "fc3e01afc3f563cc08f1e036a67f7a88"
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
