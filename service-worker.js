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
    "revision": "aea2b518919339660c82dbab5d0e7458"
  },
  {
    "url": "assets/css/0.styles.99591cdf.css",
    "revision": "4d56c4351ed058d8f6e3fdafb1a9a984"
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
    "url": "assets/img/kanbanniang_2.7ccb19c9.png",
    "revision": "7ccb19c90325d4daae5df43e2920bdc1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.f3388cfe.js",
    "revision": "2d9c3ecc3acafaaa6e0b6581a22b47a4"
  },
  {
    "url": "assets/js/10.00be564c.js",
    "revision": "e8e9d518318ed4b18905c3425fc0b2ba"
  },
  {
    "url": "assets/js/11.f6222bd1.js",
    "revision": "ff906aef1a79872dec1e0964debafa00"
  },
  {
    "url": "assets/js/12.ab90510d.js",
    "revision": "ea070f48ca53e885609f00ec17c5d83d"
  },
  {
    "url": "assets/js/13.41288daf.js",
    "revision": "339aeb6abe305856a1eab56ebedaa1ed"
  },
  {
    "url": "assets/js/14.4f8c03af.js",
    "revision": "0d329086d664f552ce026e82972c0df0"
  },
  {
    "url": "assets/js/15.dbf179d9.js",
    "revision": "69525e66335e16888b505f58c5f5b231"
  },
  {
    "url": "assets/js/16.8f973747.js",
    "revision": "958614adefc8ac522c178af729a47591"
  },
  {
    "url": "assets/js/17.b37c01b5.js",
    "revision": "010cafc67326c624086b68a6e4f3aa9a"
  },
  {
    "url": "assets/js/18.6c494cdc.js",
    "revision": "019ead3507fe85d682f7ffbb4bf85cee"
  },
  {
    "url": "assets/js/19.43bde411.js",
    "revision": "a7f7e7734677032b1883dab2719c8490"
  },
  {
    "url": "assets/js/20.4c7126c7.js",
    "revision": "716a9b60244c5cd78a9a9627a76a958f"
  },
  {
    "url": "assets/js/21.33e69855.js",
    "revision": "e9f5a7249919cf3d3f135eae992c318e"
  },
  {
    "url": "assets/js/22.fba8dd4a.js",
    "revision": "6e724d3658292b5501b9e1d8eee7c14f"
  },
  {
    "url": "assets/js/23.6042e679.js",
    "revision": "d5db1333c10f38d8ef4fad2de6e013da"
  },
  {
    "url": "assets/js/24.d0bf8470.js",
    "revision": "7728e787c1c1bfd8807cb0b592c075bc"
  },
  {
    "url": "assets/js/25.e8e92a7e.js",
    "revision": "a3971e4afb3cb8580a904f5244a803ad"
  },
  {
    "url": "assets/js/26.e5790ebb.js",
    "revision": "827974403b19c01c53aad88ef462914b"
  },
  {
    "url": "assets/js/27.b634f832.js",
    "revision": "82ae1ee71b117a8d8eba953b27489739"
  },
  {
    "url": "assets/js/28.8d070a27.js",
    "revision": "d9b5dcd052a7798353792095a20b87d8"
  },
  {
    "url": "assets/js/29.446757cc.js",
    "revision": "84e36f81dd44b2fb2c8898bfa38017e9"
  },
  {
    "url": "assets/js/3.b8b24db4.js",
    "revision": "0a9a08fd89192a566033f74ac98a1366"
  },
  {
    "url": "assets/js/30.cd010047.js",
    "revision": "a1de0b36248f0e815f8b438e5a0f2119"
  },
  {
    "url": "assets/js/31.17a94e31.js",
    "revision": "919b7ccf2cb75ea3d542f32b9af910f1"
  },
  {
    "url": "assets/js/32.0dc54645.js",
    "revision": "e45e2f28a32663044e93414989ca5407"
  },
  {
    "url": "assets/js/33.0406d5c4.js",
    "revision": "1c89d007cddcfed173256e7071ca54db"
  },
  {
    "url": "assets/js/34.b43cd36f.js",
    "revision": "00957b4d4722250b316f3ef4bf8b6eb2"
  },
  {
    "url": "assets/js/35.3f4e731d.js",
    "revision": "32821fbe29779647a5842875b8f13553"
  },
  {
    "url": "assets/js/36.74c8e57f.js",
    "revision": "b8e10ff6291ab5c6ce1e8fa51b58c14c"
  },
  {
    "url": "assets/js/37.f057d7df.js",
    "revision": "b71fa2d72482d37dce6904c906865f9c"
  },
  {
    "url": "assets/js/38.446e4e03.js",
    "revision": "17a3a2513d243d53d453e740ea96cfff"
  },
  {
    "url": "assets/js/39.762c14d7.js",
    "revision": "46bccab52bed50798eb6231b27418a49"
  },
  {
    "url": "assets/js/4.589e4def.js",
    "revision": "aeab1867c783e8f9d3354f3a32c6fe76"
  },
  {
    "url": "assets/js/40.bbae1903.js",
    "revision": "d8d41fc582260cc1a390d12dc3ec5cf7"
  },
  {
    "url": "assets/js/41.62b1526f.js",
    "revision": "b16eebd374dc8ffb668afd9352a98b26"
  },
  {
    "url": "assets/js/42.d1b06392.js",
    "revision": "32b3e09903ca70d0464e1cce83f3ee66"
  },
  {
    "url": "assets/js/43.f2c40d5a.js",
    "revision": "83e62d1db96a0a9baf395f3fe11d3aa4"
  },
  {
    "url": "assets/js/44.9e44577f.js",
    "revision": "653164da54fbe286abe6c334542aed33"
  },
  {
    "url": "assets/js/45.ba8782bd.js",
    "revision": "f1cc0501b948e8f67cf6beb7f2b558d9"
  },
  {
    "url": "assets/js/46.eef4ea47.js",
    "revision": "fb63021a43d3be62e5674c846ee8e7c3"
  },
  {
    "url": "assets/js/47.60921f8b.js",
    "revision": "ef24239945b170a181d332b8278c629d"
  },
  {
    "url": "assets/js/48.8e8b2d62.js",
    "revision": "ae02ca615f272376708923822afd06ff"
  },
  {
    "url": "assets/js/49.9b46b490.js",
    "revision": "5c0a1b99011beb0d68f45392f39e7755"
  },
  {
    "url": "assets/js/5.5b8b26c9.js",
    "revision": "2d282e9efb7d90c21c99b93f27aad9c1"
  },
  {
    "url": "assets/js/50.0f046bce.js",
    "revision": "dbef3a1de34a12223f4fa3d812a1ded3"
  },
  {
    "url": "assets/js/51.bdc41575.js",
    "revision": "e49b10fd02b1d8d3de3d0ae93c11ef79"
  },
  {
    "url": "assets/js/52.9651b135.js",
    "revision": "82ffeb2ae2b1f7b1fc992cb12988b862"
  },
  {
    "url": "assets/js/53.ddfa2cb0.js",
    "revision": "257f6f69acf6c5fffef5a29aeba42215"
  },
  {
    "url": "assets/js/54.160d856a.js",
    "revision": "37d88fa2ec655ed40abab1993b17390b"
  },
  {
    "url": "assets/js/55.c2abbcbb.js",
    "revision": "158865ae9571454d76cb1842a1445853"
  },
  {
    "url": "assets/js/6.4698e5ff.js",
    "revision": "180d0c360ef9d77e2123456b67c6ba8e"
  },
  {
    "url": "assets/js/7.061ae6d0.js",
    "revision": "cd9722dc9b77c59359aeb4c849ab845a"
  },
  {
    "url": "assets/js/8.11dc68c0.js",
    "revision": "d8774c14110ff2d254358483f6ac9f91"
  },
  {
    "url": "assets/js/9.49959892.js",
    "revision": "eb31d14ebdaac88faf3c57592ff52fae"
  },
  {
    "url": "assets/js/app.a511ffe5.js",
    "revision": "ba49a82229570e85fe44ac867c8bb35e"
  },
  {
    "url": "blogImages/0.png",
    "revision": "7765e6ebfae2dd800f7554015eff0428"
  },
  {
    "url": "blogImages/1.png",
    "revision": "0e76b92f6f84b7c06330e536fedd2c9e"
  },
  {
    "url": "blogImages/10.png",
    "revision": "3d933d4420816ba3a03fcbae8121b779"
  },
  {
    "url": "blogImages/11.png",
    "revision": "1cd519a82f374792ad66314ef367f299"
  },
  {
    "url": "blogImages/12.png",
    "revision": "44823314515c8e0ee2be59d1d395b915"
  },
  {
    "url": "blogImages/13.png",
    "revision": "ed91e9c43c4bea93423b6a9cfe4e418a"
  },
  {
    "url": "blogImages/14.png",
    "revision": "5ae1fc8142a1222e083d3265c24a2414"
  },
  {
    "url": "blogImages/15.png",
    "revision": "795e44b5fc443dfb01ed2afe7e8933b3"
  },
  {
    "url": "blogImages/16.png",
    "revision": "6067f1e44cdf0c19f1e264cde08f0d2d"
  },
  {
    "url": "blogImages/2.png",
    "revision": "9d506458c50a3ffba01ed1021b85adb2"
  },
  {
    "url": "blogImages/3.png",
    "revision": "c2ba93e2d6c7c1db6203acecef35f659"
  },
  {
    "url": "blogImages/4.png",
    "revision": "70697bb43202017aa6baafe19700d47d"
  },
  {
    "url": "blogImages/5.png",
    "revision": "b1119b74f767be486ba4444c5d21bd55"
  },
  {
    "url": "blogImages/6.png",
    "revision": "dc449526437cb7eff15e28d81910376c"
  },
  {
    "url": "blogImages/7.png",
    "revision": "955781ac6a70c180c82b0ff34de3c320"
  },
  {
    "url": "blogImages/8.png",
    "revision": "a64ce7c8a0d616209a3819256d634559"
  },
  {
    "url": "blogImages/9.png",
    "revision": "29004117a86c9da7d9d5f34e3fdcf93c"
  },
  {
    "url": "categories/blog/index.html",
    "revision": "ac023198318c88210cb1b8c7c957055a"
  },
  {
    "url": "categories/index.html",
    "revision": "5e76d644f5fcc78e02139f2822d91dbb"
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
    "revision": "965bbf1b19fad5c09d044eaf81c78732"
  },
  {
    "url": "tag/index.html",
    "revision": "3492395899dc32a3dcc6ea33edb07717"
  },
  {
    "url": "timeline/index.html",
    "revision": "6d1ea7013e0f79cbe469974a3f398b1f"
  },
  {
    "url": "views/0.x/abstract.html",
    "revision": "7c53914617defea5b6e727647b99ab39"
  },
  {
    "url": "views/0.x/category.html",
    "revision": "5fe53b8e0525d4233f928ff43beddfc0"
  },
  {
    "url": "views/0.x/configJs.html",
    "revision": "dadc377424cfb343a599f75b1e068f9c"
  },
  {
    "url": "views/0.x/home.html",
    "revision": "cd21d4ded1208e3dfd98cdf968f19c18"
  },
  {
    "url": "views/0.x/index.html",
    "revision": "fdd33568307509d4f758d6c7382311e0"
  },
  {
    "url": "views/0.x/installUse.html",
    "revision": "d630a2ecf6acfb9c1eaf2ea08492d03f"
  },
  {
    "url": "views/0.x/password.html",
    "revision": "7282a74dc53954e9f726fb1124165a5e"
  },
  {
    "url": "views/0.x/tag.html",
    "revision": "5e399abac1638ed9773869732c5f6ef3"
  },
  {
    "url": "views/0.x/timeline.html",
    "revision": "e0346f9e60cd311af226f508ca2c143c"
  },
  {
    "url": "views/0.x/valine.html",
    "revision": "7c74236ea9d52b6cf0424e1d827ff591"
  },
  {
    "url": "views/1.x/0update1.html",
    "revision": "e809ee0d778f6c9ace6eee1d652ceda5"
  },
  {
    "url": "views/1.x/404.html",
    "revision": "03ec654b62150c43095df94c6aa18e86"
  },
  {
    "url": "views/1.x/abstract.html",
    "revision": "7c53914617defea5b6e727647b99ab39"
  },
  {
    "url": "views/1.x/blog.html",
    "revision": "a1f72ca6b49664d290d881e3d145f1f2"
  },
  {
    "url": "views/1.x/configJs.html",
    "revision": "dadc377424cfb343a599f75b1e068f9c"
  },
  {
    "url": "views/1.x/frontMatter.html",
    "revision": "a773328bf94d8b573aa962cacf66d24a"
  },
  {
    "url": "views/1.x/ga.html",
    "revision": "2e6b99372c105ac3a732e7efa76cffcd"
  },
  {
    "url": "views/1.x/home.html",
    "revision": "cd21d4ded1208e3dfd98cdf968f19c18"
  },
  {
    "url": "views/1.x/index.html",
    "revision": "fdd33568307509d4f758d6c7382311e0"
  },
  {
    "url": "views/1.x/installUse.html",
    "revision": "d630a2ecf6acfb9c1eaf2ea08492d03f"
  },
  {
    "url": "views/1.x/password.html",
    "revision": "7282a74dc53954e9f726fb1124165a5e"
  },
  {
    "url": "views/1.x/recommend.html",
    "revision": "3138eb0dcdaebee318852f96dbc61d61"
  },
  {
    "url": "views/1.x/themePicker.html",
    "revision": "c6dab6b09e594f15c06cfc0db6e3f883"
  },
  {
    "url": "views/1.x/timeline.html",
    "revision": "e0346f9e60cd311af226f508ca2c143c"
  },
  {
    "url": "views/1.x/valine.html",
    "revision": "1f47099b3dbd45e6761dfc1dfd3a4386"
  },
  {
    "url": "views/other/about.html",
    "revision": "8cad450ca7eed9f1d79bbb7ca4f3761c"
  },
  {
    "url": "views/other/deploy.html",
    "revision": "3745796cca6c9defe1d1a40b34b40b08"
  },
  {
    "url": "views/other/develop.html",
    "revision": "75e715e7bce3365b50945f68b24d0f9a"
  },
  {
    "url": "views/other/domain.html",
    "revision": "e4dd3655a2457e809494c7649834e2cf"
  },
  {
    "url": "views/other/notice.html",
    "revision": "6deac1abfeaf6e76f434604acf1982b0"
  },
  {
    "url": "views/other/one-year-old.html",
    "revision": "5ec0ebe40cad03b819a8135da97fa261"
  },
  {
    "url": "views/other/question.html",
    "revision": "e7c7f470dc97810faebcf44184f76945"
  },
  {
    "url": "views/other/theme-example.html",
    "revision": "3394d0d97b4f1b85e6c1bdfe37b53a23"
  },
  {
    "url": "views/plugins/backToTop.html",
    "revision": "dc155403bd721e4ca48b5a2a8d641b6a"
  },
  {
    "url": "views/plugins/comments.html",
    "revision": "864e25d676d999a39e255b880658fbf3"
  },
  {
    "url": "views/plugins/ga.html",
    "revision": "d7baebb07ae7484e4b0bebb9943d6fbf"
  },
  {
    "url": "views/plugins/index.html",
    "revision": "47afea6450152195ef76688bece77519"
  },
  {
    "url": "views/plugins/kanbanniang.html",
    "revision": "6aa14d9d082b6169801146ab28ff1069"
  },
  {
    "url": "views/plugins/loadingPage.html",
    "revision": "2700ba994fc99b83517dd7fdb2178d33"
  },
  {
    "url": "views/plugins/pagation.html",
    "revision": "ac48a7d42e7624d18b7cd4180095bba6"
  },
  {
    "url": "views/plugins/screenfull.html",
    "revision": "2b7162e01a5809848080a9842745087f"
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
