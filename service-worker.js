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
    "revision": "ec2e657b209cb9f9b85b04f7006926e8"
  },
  {
    "url": "assets/css/0.styles.27282608.css",
    "revision": "ba8345bdf51c2f63a9ef008d421fcb96"
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
    "url": "assets/js/11.fc45cd21.js",
    "revision": "63f853c3707a007d7beccfe48425cbd4"
  },
  {
    "url": "assets/js/12.0ad1dda7.js",
    "revision": "0df0f7375ccc85f0590184cf0ecbe985"
  },
  {
    "url": "assets/js/13.8a83e799.js",
    "revision": "81b6844f14c77f0bf267aa98b8be0524"
  },
  {
    "url": "assets/js/14.ef618b14.js",
    "revision": "2632c4b707c3939cd7717b13970238bd"
  },
  {
    "url": "assets/js/15.323bf508.js",
    "revision": "672f5a200ca9bae8fbc7c52d5c31807c"
  },
  {
    "url": "assets/js/16.23fa91c0.js",
    "revision": "810b71406c00d5c25d124699bc61c555"
  },
  {
    "url": "assets/js/17.52ef0095.js",
    "revision": "2e8827450ed9df2ca211f58d317d39f0"
  },
  {
    "url": "assets/js/18.a2aab50a.js",
    "revision": "40ee931bb1be8501433736983a1109cc"
  },
  {
    "url": "assets/js/19.5591d806.js",
    "revision": "e49bcf14a137a83f981824ddaa1bd712"
  },
  {
    "url": "assets/js/2.9f6c7404.js",
    "revision": "1932359b5334d96857377a4a2d6287b6"
  },
  {
    "url": "assets/js/20.774b77a0.js",
    "revision": "f6129aabce652279d747e1d34b3329a0"
  },
  {
    "url": "assets/js/21.d57cad18.js",
    "revision": "f7d37c9360ddc82694a8dc08572c4507"
  },
  {
    "url": "assets/js/22.cfda9b39.js",
    "revision": "52119191a68334f115bdc01c439acee1"
  },
  {
    "url": "assets/js/23.7b0f6b91.js",
    "revision": "f455a9afa1f381ae7355d7e0b8ab40d7"
  },
  {
    "url": "assets/js/24.7cedd512.js",
    "revision": "782eca4041c62924180672988be397ec"
  },
  {
    "url": "assets/js/25.ed7922c8.js",
    "revision": "6ddf65585912128942648465e92f4f30"
  },
  {
    "url": "assets/js/26.742dcd80.js",
    "revision": "b36a2b0ce51e23a33f24af1e9920ec18"
  },
  {
    "url": "assets/js/27.1d98bbc1.js",
    "revision": "2af5869bdc442b638a3ca9514c0da1cf"
  },
  {
    "url": "assets/js/28.196b0313.js",
    "revision": "8cc01a3c9172f6d74476111a13449fd2"
  },
  {
    "url": "assets/js/29.23f83c12.js",
    "revision": "8ec80db2c29f8c035ef6710ed17c9cd3"
  },
  {
    "url": "assets/js/30.b128c0f0.js",
    "revision": "e1bc77367cc0a162fe8f84f6a5279b8b"
  },
  {
    "url": "assets/js/31.c98be67e.js",
    "revision": "0352d4f548724255e7ced1f9e5899f0f"
  },
  {
    "url": "assets/js/32.1104d998.js",
    "revision": "2660df5ed0add02986fe6ebb19322dd1"
  },
  {
    "url": "assets/js/33.1f8c7e7c.js",
    "revision": "1370f8e3eb34808c8d2058cd956e9e7b"
  },
  {
    "url": "assets/js/34.3edf3290.js",
    "revision": "8c4965f36a9fbc0a3f2fcf5ef20fbe9f"
  },
  {
    "url": "assets/js/35.201c7440.js",
    "revision": "9b9a973574cc2b3dd03885d974ca0e25"
  },
  {
    "url": "assets/js/36.f7e55e10.js",
    "revision": "f48abea76a3f60b7fc391cdaf0f51a8a"
  },
  {
    "url": "assets/js/37.8b1b23c2.js",
    "revision": "aa72ee110d8cb0a27d1b0f8ab0b0b0f0"
  },
  {
    "url": "assets/js/38.a7c677c4.js",
    "revision": "78c7d31590212489622ed85c90550d91"
  },
  {
    "url": "assets/js/39.6dd59841.js",
    "revision": "ba2d8827e8fe7404d6803aa85a7da3cd"
  },
  {
    "url": "assets/js/4.9b3ee280.js",
    "revision": "5f20bab6bccaaabc596384d1123e926a"
  },
  {
    "url": "assets/js/40.c767a072.js",
    "revision": "47a28e0ea8497042f068fb85f1a4ce50"
  },
  {
    "url": "assets/js/41.15c38c5c.js",
    "revision": "7f0abcfe0b581b952acb8ff982381ca4"
  },
  {
    "url": "assets/js/42.b91a8a05.js",
    "revision": "fce9f58c5bb9631116defe899d430a84"
  },
  {
    "url": "assets/js/43.6374ddd9.js",
    "revision": "34cad1341f13e0ef4c97de54f15e4224"
  },
  {
    "url": "assets/js/44.0730cc2c.js",
    "revision": "845767cdc87427c4aaf41a4de31383cd"
  },
  {
    "url": "assets/js/45.8e352453.js",
    "revision": "612d7167d83c09232de5383465fa0ee2"
  },
  {
    "url": "assets/js/46.5c1095b2.js",
    "revision": "f81f5460d856c15d888916c6a024bd43"
  },
  {
    "url": "assets/js/47.67be57a6.js",
    "revision": "9b0a4db736096c10e8af0e0dbd0f4a31"
  },
  {
    "url": "assets/js/48.e688713a.js",
    "revision": "cb35a2c2c2798d6af1a1f01ec7c30d65"
  },
  {
    "url": "assets/js/49.33353470.js",
    "revision": "2edd54e1692391894a73c5af97a579c5"
  },
  {
    "url": "assets/js/5.6c047095.js",
    "revision": "dfcd9f854001039abbee22f7a2f016de"
  },
  {
    "url": "assets/js/50.bbb8cddf.js",
    "revision": "add0223f5217260b4777cb327eb4b448"
  },
  {
    "url": "assets/js/51.a2c6c7db.js",
    "revision": "433c4a008bfda45b5f38534b107562e7"
  },
  {
    "url": "assets/js/52.4ec18693.js",
    "revision": "892f1d0c901d83fadeb57b31c33788a5"
  },
  {
    "url": "assets/js/53.b23598e7.js",
    "revision": "d5ea2e091b78a6341c70c72f4627e1b1"
  },
  {
    "url": "assets/js/54.cf4cd151.js",
    "revision": "9d26808e49534935ffb8b71f174a00e5"
  },
  {
    "url": "assets/js/55.9e1b5433.js",
    "revision": "5ad31e787ab82e453e4d92c2ffa54178"
  },
  {
    "url": "assets/js/56.28027f14.js",
    "revision": "f9234f70ca6615a79e48203b7f761d18"
  },
  {
    "url": "assets/js/57.330d8472.js",
    "revision": "f225dd98a956dde923003caa707cd736"
  },
  {
    "url": "assets/js/6.d01ca6b4.js",
    "revision": "ba716fcea13ca2fcd63006a56d07c8ac"
  },
  {
    "url": "assets/js/7.f3572132.js",
    "revision": "242e5fab654817dc84018a99725df933"
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
    "url": "assets/js/app.2dea0de0.js",
    "revision": "8f4f8c42f8ee71e9a713df5539b7e229"
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
    "revision": "35285b2654b82b836c88d7d6b791003d"
  },
  {
    "url": "categories/index.html",
    "revision": "75f6d62cd5c3c0a4f2e91ce6a9cd9627"
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
    "revision": "86253f5e77197e1869e1d31a23dbbe57"
  },
  {
    "url": "tag/index.html",
    "revision": "c6c65f9e867cebfc4d63cdaeaebf1fff"
  },
  {
    "url": "timeline/index.html",
    "revision": "0ce5fa5265892ab8199340b723a551af"
  },
  {
    "url": "views/0.x/abstract.html",
    "revision": "b736d8b4e496f8f758d11c4b394c01d7"
  },
  {
    "url": "views/0.x/category.html",
    "revision": "427225761f6621a1b219549099342ec5"
  },
  {
    "url": "views/0.x/configJs.html",
    "revision": "b928355da5b4db27eebeae21b770498f"
  },
  {
    "url": "views/0.x/home.html",
    "revision": "55995d76cb1745183ac6e5121cf67746"
  },
  {
    "url": "views/0.x/index.html",
    "revision": "140387176dd9ba52e59feb48ad38ad28"
  },
  {
    "url": "views/0.x/installUse.html",
    "revision": "aede19d2aae89ecac0c135dd11c4e874"
  },
  {
    "url": "views/0.x/password.html",
    "revision": "ab10971f26d7c45d24f2c2785dbd51ef"
  },
  {
    "url": "views/0.x/tag.html",
    "revision": "2569eebf34280191e20246a1f5f6f0ae"
  },
  {
    "url": "views/0.x/timeline.html",
    "revision": "694d4e83357ba085be85fa0399e920b1"
  },
  {
    "url": "views/0.x/valine.html",
    "revision": "e8ba3c0a3979d470f31b1ea4e8c1b079"
  },
  {
    "url": "views/1.x/0update1.html",
    "revision": "1a83e1570a4736627efd35dd17ae3ac8"
  },
  {
    "url": "views/1.x/404.html",
    "revision": "878dd5cd6bdd2b7c7d45d09de86ba756"
  },
  {
    "url": "views/1.x/abstract.html",
    "revision": "b736d8b4e496f8f758d11c4b394c01d7"
  },
  {
    "url": "views/1.x/blog.html",
    "revision": "e0407b92098fce8a9fc05ec0308d7b23"
  },
  {
    "url": "views/1.x/configJs.html",
    "revision": "b928355da5b4db27eebeae21b770498f"
  },
  {
    "url": "views/1.x/frontMatter.html",
    "revision": "45281c69e360ae7ac880580b4c9c6755"
  },
  {
    "url": "views/1.x/ga.html",
    "revision": "5ac9eb9112d5fc5a108ed42f5778f7e8"
  },
  {
    "url": "views/1.x/home.html",
    "revision": "55995d76cb1745183ac6e5121cf67746"
  },
  {
    "url": "views/1.x/index.html",
    "revision": "140387176dd9ba52e59feb48ad38ad28"
  },
  {
    "url": "views/1.x/installUse.html",
    "revision": "aede19d2aae89ecac0c135dd11c4e874"
  },
  {
    "url": "views/1.x/password.html",
    "revision": "ab10971f26d7c45d24f2c2785dbd51ef"
  },
  {
    "url": "views/1.x/recommend.html",
    "revision": "7edd5003f3d138aa55ad77a90a6e5e5a"
  },
  {
    "url": "views/1.x/themePicker.html",
    "revision": "b9467d50cb209304de9ff98310816172"
  },
  {
    "url": "views/1.x/timeline.html",
    "revision": "694d4e83357ba085be85fa0399e920b1"
  },
  {
    "url": "views/1.x/valine.html",
    "revision": "83213bc8d8df372bc5084a80efe014a4"
  },
  {
    "url": "views/other/about.html",
    "revision": "b027734d8de2af4ac1f2a31636cf715b"
  },
  {
    "url": "views/other/deploy.html",
    "revision": "aad2501ba04df18aa237109d9965d443"
  },
  {
    "url": "views/other/develop.html",
    "revision": "c3829edf6b35fa0cb4c367a8b7fcc6ed"
  },
  {
    "url": "views/other/domain.html",
    "revision": "f652cd320adc5017f740e425c34826e9"
  },
  {
    "url": "views/other/notice.html",
    "revision": "6e13fde43042967594a3364648375bce"
  },
  {
    "url": "views/other/one-year-old.html",
    "revision": "6c593d4f74db7a1a496f231c8ec2e436"
  },
  {
    "url": "views/other/question.html",
    "revision": "4097d8346b8619fe409ae70c64d67d8d"
  },
  {
    "url": "views/other/theme-example.html",
    "revision": "b8e3bb3b63ae74c43939a96b3031f7a7"
  },
  {
    "url": "views/plugins/backToTop.html",
    "revision": "0010f8c537ece4ef2220682fdd3d5328"
  },
  {
    "url": "views/plugins/comments.html",
    "revision": "29bb2dae0e2e1b87ebc77d22e67a9b84"
  },
  {
    "url": "views/plugins/ga.html",
    "revision": "dd432d322bfa458f70fd840129367673"
  },
  {
    "url": "views/plugins/index.html",
    "revision": "4b3be213f6a7f4be030b7dc040224690"
  },
  {
    "url": "views/plugins/kanbanniang.html",
    "revision": "3beb32911bc83b2979ca8e17cfda5361"
  },
  {
    "url": "views/plugins/loadingPage.html",
    "revision": "5fcfce779deb10e55b8caa7157a713a3"
  },
  {
    "url": "views/plugins/pagation.html",
    "revision": "28dbdc7f8e86e7103227b93bb6418c49"
  },
  {
    "url": "views/plugins/screenfull.html",
    "revision": "58e95abdf69bc96b3b96e318799c3939"
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
