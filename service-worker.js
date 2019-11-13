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
    "revision": "cec59dd2e1472cb7f92a044e3bd57a7a"
  },
  {
    "url": "assets/css/0.styles.9eee1d01.css",
    "revision": "dc32e24918b3edf5d627258b36f05b88"
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
    "url": "assets/js/1.57f4d09f.js",
    "revision": "72a7b77f2600e727d3f91dd75ecf8b87"
  },
  {
    "url": "assets/js/10.f53ba611.js",
    "revision": "25326aa43448efff0747e22b68d5cd74"
  },
  {
    "url": "assets/js/11.83ec5101.js",
    "revision": "1e4f60d7ac8bbbbd47ef3a51d85a81a3"
  },
  {
    "url": "assets/js/12.065cd2bf.js",
    "revision": "e41ae2f745f6e422c60181632852458e"
  },
  {
    "url": "assets/js/13.6d5aa01e.js",
    "revision": "18e9261a2c300df9fa1c49cf17f7ac84"
  },
  {
    "url": "assets/js/14.c8b0ce89.js",
    "revision": "9762d7276312e72518bab116457ef6f9"
  },
  {
    "url": "assets/js/15.5d57db1e.js",
    "revision": "fea3efeda941548716400ee4df458463"
  },
  {
    "url": "assets/js/16.60e741b4.js",
    "revision": "62de38198e370b44a2f6e3205d56cd4d"
  },
  {
    "url": "assets/js/17.c5d4d1e2.js",
    "revision": "917cbc918a2e3bfd5efab5265130fa34"
  },
  {
    "url": "assets/js/18.eb84f0f6.js",
    "revision": "bf293be6a30af851268594f2e2700e2b"
  },
  {
    "url": "assets/js/19.c7bc1167.js",
    "revision": "de58800c719f3e2aa7160569f7676237"
  },
  {
    "url": "assets/js/2.c9d6a8c7.js",
    "revision": "331353ba912192d5edd55f54a75b2952"
  },
  {
    "url": "assets/js/20.7945c45d.js",
    "revision": "99dc377b55e3d2e686e22bdec65cc203"
  },
  {
    "url": "assets/js/21.cf8a020c.js",
    "revision": "d276b94a81cf9ab38b3ca1f219b0c6b6"
  },
  {
    "url": "assets/js/22.771ce776.js",
    "revision": "937f3beb74bec3e3fdf9e62a4f61cae8"
  },
  {
    "url": "assets/js/23.5f326b4e.js",
    "revision": "854fa4e5475fecf7719f9da1caa4cbd0"
  },
  {
    "url": "assets/js/24.8c1576b4.js",
    "revision": "e1b38b8bcf3ab2a7ff9116a0451f4d68"
  },
  {
    "url": "assets/js/25.98be0e2c.js",
    "revision": "08452e485a70608b6bdfcf365cc57102"
  },
  {
    "url": "assets/js/26.4a378ca9.js",
    "revision": "7de3d08aba651d1ded1dd154b8d7207c"
  },
  {
    "url": "assets/js/27.9dc3da8a.js",
    "revision": "7328a2e91fd09cba7e37e14dee87de6a"
  },
  {
    "url": "assets/js/28.a15b3f0f.js",
    "revision": "2da8ef2a632b10bc6c6ef547c840fa97"
  },
  {
    "url": "assets/js/29.9a85f6bf.js",
    "revision": "1d3471b2c805ad6b4c0bc49a9cf05939"
  },
  {
    "url": "assets/js/30.172d84c4.js",
    "revision": "10575cbcd5b750c629e905815cd38d59"
  },
  {
    "url": "assets/js/31.84252412.js",
    "revision": "26bc87fb51e1f85f43c2e0245e6eae76"
  },
  {
    "url": "assets/js/32.f6a26ae5.js",
    "revision": "5fd252f3bc61904990705ac8eb224cf5"
  },
  {
    "url": "assets/js/33.b16e59e4.js",
    "revision": "b9068b3c040937c77e5c3bdf89267a51"
  },
  {
    "url": "assets/js/34.ab60743a.js",
    "revision": "3d6f4fc87d525819dea289a79537158a"
  },
  {
    "url": "assets/js/35.0a44289c.js",
    "revision": "53ecd6d7e54983a81edadfa257e18816"
  },
  {
    "url": "assets/js/36.a5d4cbac.js",
    "revision": "1af0032e85be6531a71a816f7dde78cc"
  },
  {
    "url": "assets/js/37.06aa9f6d.js",
    "revision": "8f55567af91b8a8aa89150ec9eb804ef"
  },
  {
    "url": "assets/js/38.bc12fd3a.js",
    "revision": "22358251e4f34b5aeaa1d3824a81953c"
  },
  {
    "url": "assets/js/39.59403d06.js",
    "revision": "577162f2207f77e0fb7af8262daa6186"
  },
  {
    "url": "assets/js/40.1b4cc547.js",
    "revision": "13ac84029770b5ab96cf291693b2ed7b"
  },
  {
    "url": "assets/js/41.b2c25566.js",
    "revision": "a9044de02ba0abc4e06d6eb8dd7721c6"
  },
  {
    "url": "assets/js/42.3c2dcf6c.js",
    "revision": "2ebbff92e1f152bbc9f3632d2dc4b5d1"
  },
  {
    "url": "assets/js/43.afa6f4e5.js",
    "revision": "8c83e1c0e621e1b76df78decc5ee5d33"
  },
  {
    "url": "assets/js/44.1f228a5a.js",
    "revision": "0b3005430074cab943a4f2d4c6c8d9c0"
  },
  {
    "url": "assets/js/45.0577aed3.js",
    "revision": "1b69aa080f673e7eeeebf4f06a7ce28b"
  },
  {
    "url": "assets/js/46.9befa7af.js",
    "revision": "95d7e46977d3e589b9119c45e5160191"
  },
  {
    "url": "assets/js/47.c895979a.js",
    "revision": "1f761592210a49c04be38ae162295e0b"
  },
  {
    "url": "assets/js/48.12f48f33.js",
    "revision": "e800b9564a2cd8c1a502f17fdf089a97"
  },
  {
    "url": "assets/js/49.5d75210a.js",
    "revision": "567535ec96c7e2b8d9a4cb60e6550cee"
  },
  {
    "url": "assets/js/50.e3ed862a.js",
    "revision": "577c6f79a8afd25c340d2ec5c3d77782"
  },
  {
    "url": "assets/js/51.d92628b3.js",
    "revision": "7abb5256ce81f17f87a0dad5556861a8"
  },
  {
    "url": "assets/js/52.c40c7afc.js",
    "revision": "7773be0edda814c361330dce013ff0f7"
  },
  {
    "url": "assets/js/53.4aadf591.js",
    "revision": "e6449ca29e2d562422ba68107e0b9713"
  },
  {
    "url": "assets/js/54.5c13e612.js",
    "revision": "64823006e7199cae21b7425828fbda84"
  },
  {
    "url": "assets/js/55.e911f816.js",
    "revision": "7815761393891a7ef404c0f5c359f2a9"
  },
  {
    "url": "assets/js/56.4ae9b17d.js",
    "revision": "6e1628b627f6dc9e73c91c59103a8477"
  },
  {
    "url": "assets/js/57.f3dba544.js",
    "revision": "6da51d147bfcdb449e6dd73a9fc77621"
  },
  {
    "url": "assets/js/58.d130f664.js",
    "revision": "e44c2635e4f43941cf7cc8455b4256a7"
  },
  {
    "url": "assets/js/59.3974c04a.js",
    "revision": "c2d7c06e8328bd84804ff86553518b2f"
  },
  {
    "url": "assets/js/6.4c5a7c44.js",
    "revision": "d2a2a9fb16300bba8fde0c247fed2874"
  },
  {
    "url": "assets/js/60.a4c1de02.js",
    "revision": "33742d3a7bf9ecf65c2a73b15ca649a5"
  },
  {
    "url": "assets/js/61.45d46708.js",
    "revision": "33ae1a970fe317d3d81e7f0938d56e34"
  },
  {
    "url": "assets/js/62.3a596575.js",
    "revision": "a8b2973dbaa90fbf8f38791b0cf6aafd"
  },
  {
    "url": "assets/js/63.ccd5479b.js",
    "revision": "ee1ed7bc25610cf981ce8c0401ddca83"
  },
  {
    "url": "assets/js/64.4bfd9940.js",
    "revision": "c37764f6150126462c1002c01c6461ff"
  },
  {
    "url": "assets/js/65.8fd2df49.js",
    "revision": "41ae6d54c256a4a0e515db05a65b75b7"
  },
  {
    "url": "assets/js/7.9318020f.js",
    "revision": "9839088645c02b723e650587c7b8ac88"
  },
  {
    "url": "assets/js/8.1d6c9af9.js",
    "revision": "d52b2afdaac8a0501a4a906e200b21d0"
  },
  {
    "url": "assets/js/9.9d6f31fc.js",
    "revision": "cdcb75887e294189a8bd169ce209ee55"
  },
  {
    "url": "assets/js/app.e2d71058.js",
    "revision": "1d94d7b4a165a639aeb6296c585ed328"
  },
  {
    "url": "assets/js/vendors~docsearch.341b940b.js",
    "revision": "6ac9e09fb33cd761a7ca008f5e07ee79"
  },
  {
    "url": "assets/js/vendors~flowchart.7926ae7c.js",
    "revision": "ed5c0554d6859b0705cd3925414b0943"
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
    "revision": "3a099047bf7c486a4a6f176236603f36"
  },
  {
    "url": "categories/index.html",
    "revision": "04260e0451e8fce1065d14fed2eb16a8"
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
    "revision": "6134acc83f2ee7e05ac5a9721f3b067e"
  },
  {
    "url": "tag/index.html",
    "revision": "29190babd870519d5c22a15c2e14c35e"
  },
  {
    "url": "timeline/index.html",
    "revision": "f7dce95c7d680c4cffb96fd45a85f0b7"
  },
  {
    "url": "views/0.x/abstract.html",
    "revision": "8a05fbeb7901b0a420d7b3b1c6f0776a"
  },
  {
    "url": "views/0.x/category.html",
    "revision": "176138e9c8ad66a7727e682ef01346a7"
  },
  {
    "url": "views/0.x/configJs.html",
    "revision": "7216fc65a2a9648b09e8eef730c8f52f"
  },
  {
    "url": "views/0.x/home.html",
    "revision": "87b4d035b5f8601324ac192d9c44fd7d"
  },
  {
    "url": "views/0.x/index.html",
    "revision": "559fd18954b0ee1ad352ab6b901552a5"
  },
  {
    "url": "views/0.x/installUse.html",
    "revision": "32d71e8039c34f8dbec749f1addad9cc"
  },
  {
    "url": "views/0.x/password.html",
    "revision": "2c87221a35f622704f2a98a0f11db730"
  },
  {
    "url": "views/0.x/tag.html",
    "revision": "ff2c08685535c1c5e047c25488c31b46"
  },
  {
    "url": "views/0.x/timeline.html",
    "revision": "b235d9144ea66548fc281f0d507915bc"
  },
  {
    "url": "views/0.x/valine.html",
    "revision": "e87a20fbdf9363507c7c380bc3739874"
  },
  {
    "url": "views/1.x/0update1.html",
    "revision": "789278555289dd22179c6aba18f81604"
  },
  {
    "url": "views/1.x/404.html",
    "revision": "9029575e1b5a3004fb4520951f8d217e"
  },
  {
    "url": "views/1.x/abstract.html",
    "revision": "f503bebc17dab1ae3eef839c7279d4da"
  },
  {
    "url": "views/1.x/blog.html",
    "revision": "a3051165fa8fae9c27c8cf2f23f2d0f5"
  },
  {
    "url": "views/1.x/configJs.html",
    "revision": "11160a388acff85dfb2fbfda5da4a4d9"
  },
  {
    "url": "views/1.x/frontMatter.html",
    "revision": "7096eccbbfb05a0a04bbae1d81d5f7dc"
  },
  {
    "url": "views/1.x/ga.html",
    "revision": "ae6e3ef4d4eccdf24b18173196ac1d94"
  },
  {
    "url": "views/1.x/home.html",
    "revision": "b239a8c158ed1e84610e8a311f7abc44"
  },
  {
    "url": "views/1.x/index.html",
    "revision": "0dc9c4a8866805f365164acc8afaa387"
  },
  {
    "url": "views/1.x/installUse.html",
    "revision": "a27a9f5de1e4ed2714d22901e2ce10bd"
  },
  {
    "url": "views/1.x/password.html",
    "revision": "82338107875ff2050eaad98d75e26d75"
  },
  {
    "url": "views/1.x/recommend.html",
    "revision": "0f2814088d37df2516c7cb9b24c6d9d7"
  },
  {
    "url": "views/1.x/sidebar.html",
    "revision": "576439498dde5d87943357df546e7ff1"
  },
  {
    "url": "views/1.x/syntax.html",
    "revision": "9f6118d918a9e7f3d500b9d0a8a4e1b7"
  },
  {
    "url": "views/1.x/themePicker.html",
    "revision": "80fc015ebf94243b480a373766151fd8"
  },
  {
    "url": "views/1.x/timeline.html",
    "revision": "d6574b18c78c88aec5f201095286ebb5"
  },
  {
    "url": "views/1.x/valine.html",
    "revision": "8741047d2a4aaaeb4643ec94be8369f7"
  },
  {
    "url": "views/other/about.html",
    "revision": "a27afed22a212c7d6751b0735a469903"
  },
  {
    "url": "views/other/deploy.html",
    "revision": "ce8ed79b744dc3a75d59cc9932867529"
  },
  {
    "url": "views/other/develop.html",
    "revision": "e8d81c82fb4321df8b05116e15867608"
  },
  {
    "url": "views/other/domain.html",
    "revision": "50861fc86e899b0580bf15f24b60f2cc"
  },
  {
    "url": "views/other/notice.html",
    "revision": "c28d2d9ab140b7b6943a3a9a16137318"
  },
  {
    "url": "views/other/one-year-old.html",
    "revision": "e2dbe2cb529d41255db2ddea8e7dc680"
  },
  {
    "url": "views/other/question.html",
    "revision": "bbf1d167435f4794661b805cdc089bb5"
  },
  {
    "url": "views/other/theme-example.html",
    "revision": "ad4366e61286f55eb80a81eb22553056"
  },
  {
    "url": "views/plugins/backToTop.html",
    "revision": "e30c7f127c69a81a9699cf3c782492c5"
  },
  {
    "url": "views/plugins/comments.html",
    "revision": "f21094d96169a9936bdcf221023f55be"
  },
  {
    "url": "views/plugins/extractCode.html",
    "revision": "b5156779d969b8e235a60aadce01bb65"
  },
  {
    "url": "views/plugins/ga.html",
    "revision": "bd24d8eab70c08c7ca8ba613b8bd90b1"
  },
  {
    "url": "views/plugins/index.html",
    "revision": "2da5d20dbc8d3d6a460bdc59ada8cc84"
  },
  {
    "url": "views/plugins/kanbanniang.html",
    "revision": "525f8bbc584535773ec9a3b2777612c0"
  },
  {
    "url": "views/plugins/loadingPage.html",
    "revision": "03ad15470496016c1fc657996b5823a6"
  },
  {
    "url": "views/plugins/pagation.html",
    "revision": "2208133c2518eb43c0ea798e55c4e181"
  },
  {
    "url": "views/plugins/rss.html",
    "revision": "8e4afb9cb6349e96fa8701d5a4008a0a"
  },
  {
    "url": "views/plugins/screenfull.html",
    "revision": "2a54f187b73d417865ab6feeb5f242e3"
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
