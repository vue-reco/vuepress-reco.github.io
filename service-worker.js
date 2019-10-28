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
    "revision": "b3f2e7c4ebea93843f594b469d406b83"
  },
  {
    "url": "assets/css/0.styles.81232af6.css",
    "revision": "f0de4e3af87a5cb8aa132dcd23622712"
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
    "url": "assets/img/kanbanniang_2.7ccb19c9.png",
    "revision": "7ccb19c90325d4daae5df43e2920bdc1"
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
    "url": "assets/js/11.700eba9c.js",
    "revision": "827175f8fd20aefa6b7cd37a7fec4c3b"
  },
  {
    "url": "assets/js/12.ec7b2a51.js",
    "revision": "83d7ef23a43f3671cae7cd9c7ce4ecd4"
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
    "url": "assets/js/15.0543a0e4.js",
    "revision": "80f176e4b8856832671a7b93dcc65d62"
  },
  {
    "url": "assets/js/16.b8959e2b.js",
    "revision": "f67dc6df45ba907738d0e849996b0fd5"
  },
  {
    "url": "assets/js/17.d8c27017.js",
    "revision": "c65e0dfe55d3d2e142c9c5718890bc47"
  },
  {
    "url": "assets/js/18.435e6f2f.js",
    "revision": "240e82dd9aa3ac09a4f042e8b7b87046"
  },
  {
    "url": "assets/js/19.8883a068.js",
    "revision": "29bc7b50256036841ec359c592d3ac7e"
  },
  {
    "url": "assets/js/2.b9a8b0e4.js",
    "revision": "7e9abb2f9f0c6fa8c040f8499da1c6e1"
  },
  {
    "url": "assets/js/20.cf0e4791.js",
    "revision": "7f9964b7db1c0ba9ff85b28bc733dfdf"
  },
  {
    "url": "assets/js/21.74ae25b9.js",
    "revision": "9cae4b22b89c756e391f4132b722465f"
  },
  {
    "url": "assets/js/22.cc26537f.js",
    "revision": "4ec640f7840666e43bc163b5a7712299"
  },
  {
    "url": "assets/js/23.8ad3cc58.js",
    "revision": "fd0b3b8d207e4fcebf25ea35a71312b9"
  },
  {
    "url": "assets/js/24.ef09398d.js",
    "revision": "6160eb3e13a91d2feff52dec5eba8985"
  },
  {
    "url": "assets/js/25.2c4af813.js",
    "revision": "0f845dca072cac59ebf97c821a07753b"
  },
  {
    "url": "assets/js/26.1b0a8894.js",
    "revision": "a8577e0e60868c576e271940038eea8a"
  },
  {
    "url": "assets/js/27.faddeb34.js",
    "revision": "cd10bb306ee2400d8efec01b8add5dbf"
  },
  {
    "url": "assets/js/28.b340e176.js",
    "revision": "77f6eacdba5b6358312c748738479f28"
  },
  {
    "url": "assets/js/29.1108a3ea.js",
    "revision": "18dfda56efa9d846d46301be7ddda3c8"
  },
  {
    "url": "assets/js/30.3f71990f.js",
    "revision": "1359db99befd2fe4a815e0c5a72174c2"
  },
  {
    "url": "assets/js/31.40dd4846.js",
    "revision": "8857d58691b15fa5f8d1a767c5a30023"
  },
  {
    "url": "assets/js/32.eaa1fff5.js",
    "revision": "581a9bac942679469b25f1ae1d3b77eb"
  },
  {
    "url": "assets/js/33.5688d88c.js",
    "revision": "72b707ca7d585a4399b842fc54961274"
  },
  {
    "url": "assets/js/34.81807b05.js",
    "revision": "9b9dd0c22ef93dfec4b45b69797735a6"
  },
  {
    "url": "assets/js/35.b296816c.js",
    "revision": "eb65f91225284f02afba9fe572cc730c"
  },
  {
    "url": "assets/js/36.7318c4b1.js",
    "revision": "19c6b74c71f29150077bc9dec4862429"
  },
  {
    "url": "assets/js/37.7947d09d.js",
    "revision": "11b982f7b920dfb3aabe84992ac36425"
  },
  {
    "url": "assets/js/38.e31e62a3.js",
    "revision": "350b841f30e2190abb6657a42f6ace8d"
  },
  {
    "url": "assets/js/39.6e5a7d5b.js",
    "revision": "f5e1dfa91f6adea6be62921a32cd1408"
  },
  {
    "url": "assets/js/4.9b3ee280.js",
    "revision": "5f20bab6bccaaabc596384d1123e926a"
  },
  {
    "url": "assets/js/40.ec6e8e90.js",
    "revision": "9b8c71112b65851257c544b3ca660b3e"
  },
  {
    "url": "assets/js/41.3dcb9ae1.js",
    "revision": "210e78226640834f1e5fe6783fafc4a3"
  },
  {
    "url": "assets/js/42.919e8ae9.js",
    "revision": "d1efb6366ccacef3238d0e0253b86ebe"
  },
  {
    "url": "assets/js/43.de4e553f.js",
    "revision": "88d26f7bd4811be5a704460613b9328f"
  },
  {
    "url": "assets/js/44.0810dc87.js",
    "revision": "8200f12eab8e6ca16af1dd91a13d236e"
  },
  {
    "url": "assets/js/45.7372868c.js",
    "revision": "8fa839ab08d93494cc39f7523557da4e"
  },
  {
    "url": "assets/js/46.047010b3.js",
    "revision": "59e013952907e3a8e49ddbc386f127e5"
  },
  {
    "url": "assets/js/47.1dcbf599.js",
    "revision": "a53f2a977f439078bac7dce3b4b5b429"
  },
  {
    "url": "assets/js/48.05e43fae.js",
    "revision": "03c6955580986ca5275af94c8a779a39"
  },
  {
    "url": "assets/js/49.9ee577de.js",
    "revision": "d0cd3cf832b75cceee93f8e12f46a0da"
  },
  {
    "url": "assets/js/5.6c047095.js",
    "revision": "dfcd9f854001039abbee22f7a2f016de"
  },
  {
    "url": "assets/js/50.c40b54be.js",
    "revision": "a414f2eb51fdf55d49105cf1e916297e"
  },
  {
    "url": "assets/js/51.266f920c.js",
    "revision": "c694c9d01cabfd19b092374ee2bc4d83"
  },
  {
    "url": "assets/js/52.812f5871.js",
    "revision": "90bdd4d54858439684c87114d74fea5a"
  },
  {
    "url": "assets/js/53.058e23ae.js",
    "revision": "4693c51c0b76709ced259fa68a53dede"
  },
  {
    "url": "assets/js/54.3c979fea.js",
    "revision": "8444dca6cd8f76194725fb9b7c63e88c"
  },
  {
    "url": "assets/js/55.8e8298c5.js",
    "revision": "1be34745d703319d2264da7f88ae029b"
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
    "url": "assets/js/7.328f6014.js",
    "revision": "6b758f4ad7f4a82bdd5912fb4a7711f9"
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
    "url": "assets/js/app.f80ffd3f.js",
    "revision": "eb25471709c29dc7aca93434d49b4b64"
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
    "revision": "8cc169dfbfd4837ff627d5747c3610f9"
  },
  {
    "url": "categories/index.html",
    "revision": "99043e9fafb017bea217689f49ec7794"
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
    "revision": "a0e482058d4d1d5f3a4934dfee8f4c48"
  },
  {
    "url": "tag/index.html",
    "revision": "ee82b832057e1c3c2edef14e42343197"
  },
  {
    "url": "timeline/index.html",
    "revision": "7a1ecadac2b7dd94cf5c50f6fac1e81e"
  },
  {
    "url": "views/0.x/abstract.html",
    "revision": "1a8e63b1d96853a4fa8202995f191cb6"
  },
  {
    "url": "views/0.x/category.html",
    "revision": "73e158ead7fe5598158d908772454667"
  },
  {
    "url": "views/0.x/configJs.html",
    "revision": "64d7f9ed3a949db1aa365d2a728099ec"
  },
  {
    "url": "views/0.x/home.html",
    "revision": "5deb809148727685a463c89e6276917b"
  },
  {
    "url": "views/0.x/index.html",
    "revision": "67b16da72cc4b1ba39cfa99a68f655d2"
  },
  {
    "url": "views/0.x/installUse.html",
    "revision": "2102b7ea0039d4406213346269c96576"
  },
  {
    "url": "views/0.x/password.html",
    "revision": "6da01acb47a46f3b12fe869952e79430"
  },
  {
    "url": "views/0.x/tag.html",
    "revision": "1d333b3a5cddef51d4e926a1222814df"
  },
  {
    "url": "views/0.x/timeline.html",
    "revision": "1dd25df740cf45768104584d12dd1e5a"
  },
  {
    "url": "views/0.x/valine.html",
    "revision": "983f3ae5bf8b0947a8e9cf2039881729"
  },
  {
    "url": "views/1.x/0update1.html",
    "revision": "958c1897d6bd165fcf7a79e02a7e08e9"
  },
  {
    "url": "views/1.x/404.html",
    "revision": "2922f7f9f327955256e9828a9eefbe04"
  },
  {
    "url": "views/1.x/abstract.html",
    "revision": "1a8e63b1d96853a4fa8202995f191cb6"
  },
  {
    "url": "views/1.x/blog.html",
    "revision": "bf72b1a22f602cc1a36d56bb0fe07eaf"
  },
  {
    "url": "views/1.x/configJs.html",
    "revision": "64d7f9ed3a949db1aa365d2a728099ec"
  },
  {
    "url": "views/1.x/frontMatter.html",
    "revision": "3d4038e202751ae8db0f57c29505e608"
  },
  {
    "url": "views/1.x/ga.html",
    "revision": "8eb4abf847d9244f76e1874b10e28b10"
  },
  {
    "url": "views/1.x/home.html",
    "revision": "5deb809148727685a463c89e6276917b"
  },
  {
    "url": "views/1.x/index.html",
    "revision": "67b16da72cc4b1ba39cfa99a68f655d2"
  },
  {
    "url": "views/1.x/installUse.html",
    "revision": "2102b7ea0039d4406213346269c96576"
  },
  {
    "url": "views/1.x/password.html",
    "revision": "6da01acb47a46f3b12fe869952e79430"
  },
  {
    "url": "views/1.x/recommend.html",
    "revision": "ee17655745949361419e07ef3204171f"
  },
  {
    "url": "views/1.x/themePicker.html",
    "revision": "302dec778a6b51f01c66ec9630325a42"
  },
  {
    "url": "views/1.x/timeline.html",
    "revision": "1dd25df740cf45768104584d12dd1e5a"
  },
  {
    "url": "views/1.x/valine.html",
    "revision": "f0cd97a56ad27777dd6ef176e103d14a"
  },
  {
    "url": "views/other/about.html",
    "revision": "95ae969ecf45fbb8c77c61f9a8bc4735"
  },
  {
    "url": "views/other/deploy.html",
    "revision": "7f687b3474ed5e88245be9e73121969a"
  },
  {
    "url": "views/other/develop.html",
    "revision": "d9f2d654421ab45ec2c2e8bff3bf59f4"
  },
  {
    "url": "views/other/domain.html",
    "revision": "430f5f18a449a441b1d49048e8d4883d"
  },
  {
    "url": "views/other/notice.html",
    "revision": "c9bca9cab6b98bc0c526417c057f82f3"
  },
  {
    "url": "views/other/one-year-old.html",
    "revision": "f540e3d6986437b091db0ea9cb95e7d4"
  },
  {
    "url": "views/other/question.html",
    "revision": "5d7d5a78042b5f693e69155db3152bba"
  },
  {
    "url": "views/other/theme-example.html",
    "revision": "560b57eefd5e124dd58c8c6620cd5b53"
  },
  {
    "url": "views/plugins/backToTop.html",
    "revision": "ae4ccb7ba20d4e782c94bec895bda891"
  },
  {
    "url": "views/plugins/comments.html",
    "revision": "b6f8e9f33543dd59261ff4f6c3e70ce2"
  },
  {
    "url": "views/plugins/ga.html",
    "revision": "711450cb627b5ee4efa9e6d0a4452fe7"
  },
  {
    "url": "views/plugins/index.html",
    "revision": "ec84b2b2a3658cac1e8c79c8b543f32f"
  },
  {
    "url": "views/plugins/kanbanniang.html",
    "revision": "e327650b04744390a4dc4ae49ebcb4c4"
  },
  {
    "url": "views/plugins/loadingPage.html",
    "revision": "153566a902a9fa625eff5b10c466f361"
  },
  {
    "url": "views/plugins/pagation.html",
    "revision": "615cf99dc221e1485f1b72fbbb29a8fc"
  },
  {
    "url": "views/plugins/screenfull.html",
    "revision": "e3ad11a4a35e1fe539bf5173c8812a6f"
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
