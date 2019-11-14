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
    "revision": "c2811068ff1a5ff36470f9ba58566272"
  },
  {
    "url": "assets/css/0.styles.b2b2c2d9.css",
    "revision": "87addf99038c0ca07e79ff5337e543c0"
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
    "url": "assets/img/rvcode.4887d179.jpg",
    "revision": "4887d179d55ed3a948bd6af514ad356e"
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
    "url": "assets/js/1.3c9d3740.js",
    "revision": "f831a7f76e6b66116f3768f8f9889802"
  },
  {
    "url": "assets/js/10.0b5a98ee.js",
    "revision": "e9fb6373158207a58867935999c01560"
  },
  {
    "url": "assets/js/11.59352c82.js",
    "revision": "fd4e913f4facbabbf86da02dea1807d2"
  },
  {
    "url": "assets/js/12.c4cc06b0.js",
    "revision": "e06d4dfb01961bc04cdd41085f06166e"
  },
  {
    "url": "assets/js/13.a1e043ef.js",
    "revision": "3d019fd038da4a13c06da1445bd12afb"
  },
  {
    "url": "assets/js/14.b5b864d0.js",
    "revision": "2231074ceb8657408d522b64378fe3d7"
  },
  {
    "url": "assets/js/15.20972e03.js",
    "revision": "bdb348625e5b00bf7f52d132ca9a661c"
  },
  {
    "url": "assets/js/16.717bdca5.js",
    "revision": "0f423dbf4ede4168aa0801e5b5d0f600"
  },
  {
    "url": "assets/js/17.6463d8a6.js",
    "revision": "ffe4c22171727ac22ef88687ea3ec114"
  },
  {
    "url": "assets/js/18.42d5a279.js",
    "revision": "c076a8d115365a0d264f69befd483270"
  },
  {
    "url": "assets/js/19.01f72952.js",
    "revision": "909fbf46f6241d419cec6aceedcd43ae"
  },
  {
    "url": "assets/js/2.072248e5.js",
    "revision": "01f0a077af19808e5925b253ea4a446a"
  },
  {
    "url": "assets/js/20.b3ff8675.js",
    "revision": "228c84a21fe9bc622e2ef6d94f3241b4"
  },
  {
    "url": "assets/js/21.1f9bb4bf.js",
    "revision": "ea911b34a0f582a9b241eb1aee771421"
  },
  {
    "url": "assets/js/22.f16a62f3.js",
    "revision": "0a8e58f446a0d2b4b245825b3527fbd3"
  },
  {
    "url": "assets/js/23.9e45e77c.js",
    "revision": "0b75597e4f69c9b283b9363f9a677661"
  },
  {
    "url": "assets/js/24.84b1ca9a.js",
    "revision": "c09b86b151c47f616752f830d3d7d999"
  },
  {
    "url": "assets/js/25.0b04d9eb.js",
    "revision": "e11d8874e0166ad71501240ea2cd8c57"
  },
  {
    "url": "assets/js/26.7dfb9f9f.js",
    "revision": "afe80fb1b1fce0e07e60d22ac06ea9b2"
  },
  {
    "url": "assets/js/27.83530e94.js",
    "revision": "b1d02aa160579fd458b31d3f6f576406"
  },
  {
    "url": "assets/js/28.f407491c.js",
    "revision": "2a9e9c1dbafd0f920e82550d85e950b1"
  },
  {
    "url": "assets/js/29.860c82e7.js",
    "revision": "94e45b848a447d90972ce779e61488ec"
  },
  {
    "url": "assets/js/30.af88f1e6.js",
    "revision": "d3ec7b9ade4e24763dcd6c9334b08998"
  },
  {
    "url": "assets/js/31.0f151ec9.js",
    "revision": "56d3d3fc7cad93789b08e3d16e922ff9"
  },
  {
    "url": "assets/js/32.96c5d86e.js",
    "revision": "6fcc8f7f205ab3702864db65d82b74dd"
  },
  {
    "url": "assets/js/33.bee266f0.js",
    "revision": "0cac07887ef240d9e270ff3465aefe97"
  },
  {
    "url": "assets/js/34.18078544.js",
    "revision": "c97cc3375f8f6052df4ae37626afd5a7"
  },
  {
    "url": "assets/js/35.b96c8a6b.js",
    "revision": "b0914e9ef81d2880bd8124cd9875b1fd"
  },
  {
    "url": "assets/js/36.20f1b82d.js",
    "revision": "be6b353ca4472bea1a08b4cb6d3d8a82"
  },
  {
    "url": "assets/js/37.c397c632.js",
    "revision": "9f5a40de07f2753992d281df69e4216c"
  },
  {
    "url": "assets/js/38.fb9f8232.js",
    "revision": "eb051d7924b45a643f67f485615ff16c"
  },
  {
    "url": "assets/js/39.14e6276a.js",
    "revision": "6665ec2e928612ad547b638b3fea7648"
  },
  {
    "url": "assets/js/40.76ffd32e.js",
    "revision": "0e2e9f4a45632531c82af10dc85057b6"
  },
  {
    "url": "assets/js/41.b75368f1.js",
    "revision": "1e43927ee6a7307bfe09ed3f8b35bf7d"
  },
  {
    "url": "assets/js/42.0b26481e.js",
    "revision": "ef15b9352a8073215ee31fcb50e2c3d6"
  },
  {
    "url": "assets/js/43.fe94b12c.js",
    "revision": "97a4264c8f16f6ba56af3a87742d6611"
  },
  {
    "url": "assets/js/44.6eb2169e.js",
    "revision": "c5ca1e5823ead03973cc0f6e36f17f10"
  },
  {
    "url": "assets/js/45.892fa344.js",
    "revision": "72449c833450065c8cdf50dd1aac56b1"
  },
  {
    "url": "assets/js/46.5eafee7f.js",
    "revision": "ff23a42f88509d0f91ec955831d2c355"
  },
  {
    "url": "assets/js/47.a7904a82.js",
    "revision": "3f19b5e0c031301a019dd648246026b4"
  },
  {
    "url": "assets/js/48.79abdc5b.js",
    "revision": "2f852e7668c89100666102ef35b96f25"
  },
  {
    "url": "assets/js/49.952373d8.js",
    "revision": "000b7e92defc5417c1a6083cc9a2e49a"
  },
  {
    "url": "assets/js/50.b5e6420b.js",
    "revision": "39a783a9f7e16fb80018410b18eabb46"
  },
  {
    "url": "assets/js/51.fd6f86d3.js",
    "revision": "c75b51fdea0f375f4ddf6c3c8353e557"
  },
  {
    "url": "assets/js/52.b30b8c45.js",
    "revision": "c1228a94b9716821ed231b905b0a35be"
  },
  {
    "url": "assets/js/53.97f5c4d1.js",
    "revision": "7f627bfeca9f9f82dbbbfa73273cb158"
  },
  {
    "url": "assets/js/54.ba965c1e.js",
    "revision": "6a8ea7b610f1c982fef587fb0afeffa6"
  },
  {
    "url": "assets/js/55.0e6d7f0d.js",
    "revision": "84212582fd0513b99ce9379d46dcb5ba"
  },
  {
    "url": "assets/js/56.f6caeb04.js",
    "revision": "5f75dc1a428d50ef26c5d45f4b1e7aea"
  },
  {
    "url": "assets/js/57.73283cde.js",
    "revision": "b29e4231cae67f9825b02620bfea2935"
  },
  {
    "url": "assets/js/58.882c8629.js",
    "revision": "15f2527c678817287381a94e55610b4d"
  },
  {
    "url": "assets/js/59.f4c93601.js",
    "revision": "a6590f2a6bb5fd260665812cacd6ecf3"
  },
  {
    "url": "assets/js/6.813c9695.js",
    "revision": "6340444d3500faac79af69e68be98ffc"
  },
  {
    "url": "assets/js/60.648bde07.js",
    "revision": "6b5fcc0f3359ec7dde0ec99cad0a5683"
  },
  {
    "url": "assets/js/61.53228a51.js",
    "revision": "9032fd3af21be074f9c284de4ae6ea51"
  },
  {
    "url": "assets/js/62.9c27303f.js",
    "revision": "8689cb232fdcae3112c312266e84d868"
  },
  {
    "url": "assets/js/63.1ab54f46.js",
    "revision": "94d65dfeaafd84cde481aaa7735638ac"
  },
  {
    "url": "assets/js/64.23d0b80b.js",
    "revision": "c5cd35cb99f5bb524b1780f0e877493d"
  },
  {
    "url": "assets/js/65.32e6084b.js",
    "revision": "b6de345ad5dfb87f54bab02000d95a24"
  },
  {
    "url": "assets/js/7.09e8b9b1.js",
    "revision": "96e1685be78f6b2fdf588de543503917"
  },
  {
    "url": "assets/js/8.b3220a4e.js",
    "revision": "73cb363f339438ee3534448862201a15"
  },
  {
    "url": "assets/js/9.f128a913.js",
    "revision": "374fed1074155d21e145aa62c264dfd9"
  },
  {
    "url": "assets/js/app.bc954e8f.js",
    "revision": "7c6b4e196f7f8934df54beea429d938f"
  },
  {
    "url": "assets/js/vendors~docsearch.323f2f71.js",
    "revision": "3e83a604454a78920d39b130cb319f5e"
  },
  {
    "url": "assets/js/vendors~flowchart.64535e96.js",
    "revision": "3b2290ab91d61bbc8a9613baf4262944"
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
    "revision": "c203a598afd66ab530d2465e28b0bd9e"
  },
  {
    "url": "categories/index.html",
    "revision": "9fd61c62c92309b72b0de762b1091d61"
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
    "revision": "e335d2ab8289377a59f482f97e21f3ca"
  },
  {
    "url": "tag/index.html",
    "revision": "7722534da33d431cab1f20f07ee9b5a9"
  },
  {
    "url": "timeline/index.html",
    "revision": "1b1ca101b033232ba260c635ffa4114b"
  },
  {
    "url": "views/0.x/abstract.html",
    "revision": "1f4ff1a983fbbd46e35b11f87241eb8b"
  },
  {
    "url": "views/0.x/category.html",
    "revision": "d7cf7a28f991cf1414da7d21c8b364a2"
  },
  {
    "url": "views/0.x/configJs.html",
    "revision": "963277a583d512fd4736de4bba2c05c8"
  },
  {
    "url": "views/0.x/home.html",
    "revision": "b04d34df3e6fd2c469409c942f9a6f99"
  },
  {
    "url": "views/0.x/index.html",
    "revision": "d71da946fe9d99070f0df9a40fb969e6"
  },
  {
    "url": "views/0.x/installUse.html",
    "revision": "3952fd3c4c1ff874d2658106ca6cdcd6"
  },
  {
    "url": "views/0.x/password.html",
    "revision": "165d80fa9560b0a9c266009d4765a491"
  },
  {
    "url": "views/0.x/tag.html",
    "revision": "9d33c738a859fd75a2b49755f9800372"
  },
  {
    "url": "views/0.x/timeline.html",
    "revision": "2014f81036b8853d700b9ab0983e1c8b"
  },
  {
    "url": "views/0.x/valine.html",
    "revision": "32fd73e8d80606c0dada04f61c9c3543"
  },
  {
    "url": "views/1.x/0update1.html",
    "revision": "2ef67e1f723f6c6a99293195040b3144"
  },
  {
    "url": "views/1.x/404.html",
    "revision": "e694e8bef3927c20f2a391435c944c77"
  },
  {
    "url": "views/1.x/abstract.html",
    "revision": "bb7cce72a65f06a04c31302062eaf660"
  },
  {
    "url": "views/1.x/blog.html",
    "revision": "14d3b07cd0559fc88bce89d81eb86b15"
  },
  {
    "url": "views/1.x/configJs.html",
    "revision": "5625c4fb23e2aea5f6660a9224c206dc"
  },
  {
    "url": "views/1.x/frontMatter.html",
    "revision": "a63d4fde46f09cb69cf4a732c110bbee"
  },
  {
    "url": "views/1.x/ga.html",
    "revision": "8285c68dc18b49d4f0700da9f524f04d"
  },
  {
    "url": "views/1.x/home.html",
    "revision": "10484281fdcbceaa20ef62071d104334"
  },
  {
    "url": "views/1.x/index.html",
    "revision": "6352f3e500f5510da312e6a0417b7175"
  },
  {
    "url": "views/1.x/installUse.html",
    "revision": "3341633048b7fc71319665bf911305f3"
  },
  {
    "url": "views/1.x/password.html",
    "revision": "4f194de5ad70a5b268ddb2117a86724a"
  },
  {
    "url": "views/1.x/recommend.html",
    "revision": "e4796cab2f0c37e89a5d94645420bc9f"
  },
  {
    "url": "views/1.x/sidebar.html",
    "revision": "1f1afab01090e7493d6317852a8e7529"
  },
  {
    "url": "views/1.x/syntax.html",
    "revision": "d68d5cea1bb22dea84a43a02e307c398"
  },
  {
    "url": "views/1.x/themePicker.html",
    "revision": "d39f92ecc11e82afec3602fb79bb3394"
  },
  {
    "url": "views/1.x/timeline.html",
    "revision": "024351cdce760acd760f8492ed7269ce"
  },
  {
    "url": "views/1.x/valine.html",
    "revision": "c9db3dad2b2a8071ffc802985e7edde4"
  },
  {
    "url": "views/other/about.html",
    "revision": "ba8b54aec57e6823dbe61f8854a1f17d"
  },
  {
    "url": "views/other/deploy.html",
    "revision": "804a9830d86fada3bad5b11e747e8a98"
  },
  {
    "url": "views/other/develop.html",
    "revision": "642851ce52b51361867a584f1899afdd"
  },
  {
    "url": "views/other/domain.html",
    "revision": "2de5007d34519cce75c3347323a2bb10"
  },
  {
    "url": "views/other/notice.html",
    "revision": "8f867d2906a4e4d5ae61860c9384c352"
  },
  {
    "url": "views/other/one-year-old.html",
    "revision": "86055f23fc6e0a262aebc900144b5b93"
  },
  {
    "url": "views/other/question.html",
    "revision": "04b75d2f68ad85e4e5c70d9d82524dee"
  },
  {
    "url": "views/other/theme-example.html",
    "revision": "1c40ad65ed2e16e7f1d87353c19a778f"
  },
  {
    "url": "views/plugins/backToTop.html",
    "revision": "4ac39cab3c873b00e0c614a8bedfb99e"
  },
  {
    "url": "views/plugins/comments.html",
    "revision": "c573dd4a4ea0f83107756dd248735c32"
  },
  {
    "url": "views/plugins/extractCode.html",
    "revision": "861914a9530caa8ce57e87f88b618e45"
  },
  {
    "url": "views/plugins/ga.html",
    "revision": "1efc0afd50749cd23c832632e7ffee38"
  },
  {
    "url": "views/plugins/index.html",
    "revision": "878306c9cde977f6fdcc12c84d0df632"
  },
  {
    "url": "views/plugins/kanbanniang.html",
    "revision": "9e60f22561d2a3c3be64952e0e2331f7"
  },
  {
    "url": "views/plugins/loadingPage.html",
    "revision": "01f31ffd534374ee32232ebf7e9e1e87"
  },
  {
    "url": "views/plugins/pagation.html",
    "revision": "9a0a4fd73724d3edb016608759c43b9e"
  },
  {
    "url": "views/plugins/rss.html",
    "revision": "2e3091b868c215658f20adf33933a12c"
  },
  {
    "url": "views/plugins/screenfull.html",
    "revision": "b192505ffdcc2ca4893575a08974fbab"
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
