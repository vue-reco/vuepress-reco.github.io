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
    "revision": "e25cd39bcd3ff5aad9a964c125fbc98b"
  },
  {
    "url": "assets/css/0.styles.9f6abb14.css",
    "revision": "fb81e2cdb6b4d689ea2d11d93286b2a4"
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
    "url": "assets/js/1.0ab87cec.js",
    "revision": "0ba84905ffa180990903e9dd3eec9f28"
  },
  {
    "url": "assets/js/10.f0170d0b.js",
    "revision": "e68ca811859ff80dcd6f8fc4cfda6445"
  },
  {
    "url": "assets/js/11.cc634914.js",
    "revision": "667144368d2fbf071c0df3c5242a8f7b"
  },
  {
    "url": "assets/js/12.8f068565.js",
    "revision": "e061200c3c9f512299234c6752a70258"
  },
  {
    "url": "assets/js/13.ba491027.js",
    "revision": "39f3e371c57458aceda64455399e27cf"
  },
  {
    "url": "assets/js/14.b96f88d8.js",
    "revision": "463ce6763371f1d9cd41f2c3bc8d9379"
  },
  {
    "url": "assets/js/15.65a082c8.js",
    "revision": "1205496b5c1a8e8386ebdf8985788703"
  },
  {
    "url": "assets/js/16.8e1f08f0.js",
    "revision": "af564b86cfc31cfcf612482cd5535353"
  },
  {
    "url": "assets/js/17.8e9e5ba6.js",
    "revision": "529f83a53b42ee4cfbca7cc2b622fea7"
  },
  {
    "url": "assets/js/18.557a4e9b.js",
    "revision": "7e6f7845bd297bbe0d171a42559d34cd"
  },
  {
    "url": "assets/js/19.aa9ff4aa.js",
    "revision": "3078fc433f34f08f77d208f154ff91c7"
  },
  {
    "url": "assets/js/20.7d805b7b.js",
    "revision": "1061e9a3038894f9f326684ebcc5e244"
  },
  {
    "url": "assets/js/21.3481718a.js",
    "revision": "61903d5beb81085a0c14f9c338abfce4"
  },
  {
    "url": "assets/js/22.c5dc016a.js",
    "revision": "7090d8f3e785dbf25a49b2453dea083d"
  },
  {
    "url": "assets/js/23.3cedfe5f.js",
    "revision": "1c88d2a4f443e5a6f5b2988c8bc31ff0"
  },
  {
    "url": "assets/js/24.9e5d9edc.js",
    "revision": "d639ab17feb867ec8a94c3d8d5c52f78"
  },
  {
    "url": "assets/js/25.fcc70ecf.js",
    "revision": "5dacff099f69ee49854d63f9b93bdc9a"
  },
  {
    "url": "assets/js/26.178ed950.js",
    "revision": "d3451156d4b83b3a2909f614bc968d79"
  },
  {
    "url": "assets/js/27.9e3b9e5b.js",
    "revision": "c216da6caa631ef991b13ded914c48a5"
  },
  {
    "url": "assets/js/28.0af31f82.js",
    "revision": "9ba1c4396086a97289723ee12710a437"
  },
  {
    "url": "assets/js/29.ecae7a7f.js",
    "revision": "e7daa4915e75a86bffab42fd6421ab47"
  },
  {
    "url": "assets/js/3.ef010b36.js",
    "revision": "f4982455f0cc5756a0d3b0bb83e6e017"
  },
  {
    "url": "assets/js/30.f22b7769.js",
    "revision": "8c82c012ee26168f025cc128ecabb47d"
  },
  {
    "url": "assets/js/31.71abbaa5.js",
    "revision": "d93aca4a1a7694991012bb9ce65d149c"
  },
  {
    "url": "assets/js/32.185b3414.js",
    "revision": "a4a7c9c10a6330dd827541516daab794"
  },
  {
    "url": "assets/js/33.8ff320c3.js",
    "revision": "ff1773fc50d021be36bf395034e9f6a3"
  },
  {
    "url": "assets/js/34.68fb82c5.js",
    "revision": "88d53c761594a9d327ecb94b349faa3a"
  },
  {
    "url": "assets/js/35.9c3914df.js",
    "revision": "8372e4112d8c2e3433b24282922e6a98"
  },
  {
    "url": "assets/js/36.7a2cfdab.js",
    "revision": "9c01b44cad35565bde226cc1dc015253"
  },
  {
    "url": "assets/js/37.1401397d.js",
    "revision": "1616720f8dbc9dc0f44c06695ec391de"
  },
  {
    "url": "assets/js/38.90b354ca.js",
    "revision": "5271c9e5c9c6bababefc2fdb7c99efc7"
  },
  {
    "url": "assets/js/39.bac9888c.js",
    "revision": "721607983af695f41704685e901670b4"
  },
  {
    "url": "assets/js/4.984ec004.js",
    "revision": "f27adbf4008554f2a5a7ff99a41a2e7b"
  },
  {
    "url": "assets/js/40.dd8f9953.js",
    "revision": "dc0ccdd8a9fb959755e7b82576028ee3"
  },
  {
    "url": "assets/js/41.6da12c6f.js",
    "revision": "7de9dfb30bc65c05a9ff05075a515093"
  },
  {
    "url": "assets/js/42.62d61234.js",
    "revision": "0006a606d6fa029fb27a4b901791a744"
  },
  {
    "url": "assets/js/43.28dad428.js",
    "revision": "f80b07851f0f79cf707d65499b2c9695"
  },
  {
    "url": "assets/js/44.11be0210.js",
    "revision": "ffd800045b310341cab6207e2581d9ef"
  },
  {
    "url": "assets/js/45.9fc1a292.js",
    "revision": "d74d0f852e95d93241593522dbcd4029"
  },
  {
    "url": "assets/js/46.f24f6251.js",
    "revision": "97a13eb5918cf6cd041028777794966d"
  },
  {
    "url": "assets/js/47.5fee97d3.js",
    "revision": "e1ebc07de0602520b75328ea921b5d7a"
  },
  {
    "url": "assets/js/48.f29701ba.js",
    "revision": "d034517c3faba343d880234288b1ff45"
  },
  {
    "url": "assets/js/49.182ceeb6.js",
    "revision": "7f7b5c1b383e9a9b4ecfc95a6299bacb"
  },
  {
    "url": "assets/js/5.48bf07aa.js",
    "revision": "d56ca00741258c503cb9614e30dfdebd"
  },
  {
    "url": "assets/js/50.a87db554.js",
    "revision": "028ceaec4dc97c18705d402c32ad544d"
  },
  {
    "url": "assets/js/51.8b8a46be.js",
    "revision": "da71d15393b0f2916213b6a9c8793fb0"
  },
  {
    "url": "assets/js/52.35d759d2.js",
    "revision": "09a65b805028f09742d1276780a6f888"
  },
  {
    "url": "assets/js/53.9dbb3df4.js",
    "revision": "ebaa72e6aba721c32baaba912f219986"
  },
  {
    "url": "assets/js/54.9e912d22.js",
    "revision": "6cc836282a45cba049ceeda8865a1572"
  },
  {
    "url": "assets/js/55.c2abbcbb.js",
    "revision": "158865ae9571454d76cb1842a1445853"
  },
  {
    "url": "assets/js/6.450a3628.js",
    "revision": "e1c014b1c05b6fd49ee27d9a7ceb7afb"
  },
  {
    "url": "assets/js/7.940754c3.js",
    "revision": "c08f2d5099839756bc7de20027d72550"
  },
  {
    "url": "assets/js/8.30f3b29f.js",
    "revision": "9567e34daf5e605bc155e604d5c31a2f"
  },
  {
    "url": "assets/js/9.2e1773f7.js",
    "revision": "704cac4e6369c1270af9605576a6c0a3"
  },
  {
    "url": "assets/js/app.105bb5ba.js",
    "revision": "1aadd94c22bc03a13ed518bc5b712655"
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
    "revision": "b85b3578b68859a9df6cfa1a07c18f5f"
  },
  {
    "url": "categories/index.html",
    "revision": "3778ea5e2f3fd93e150fceca4b85edaf"
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
    "revision": "8702c1eb532bb6597e8101a86379bfbf"
  },
  {
    "url": "tag/index.html",
    "revision": "106f230c316a3d2bbbf24e3e314dd6fe"
  },
  {
    "url": "timeline/index.html",
    "revision": "4e712e4178a03210f896b743c4a484fa"
  },
  {
    "url": "views/0.x/abstract.html",
    "revision": "51e2b514f0e904d7d6ee27718bf5c7e9"
  },
  {
    "url": "views/0.x/category.html",
    "revision": "b8293d03d20245d5ca2ac521116e8b63"
  },
  {
    "url": "views/0.x/configJs.html",
    "revision": "354e558a3728f9891db31606039cf927"
  },
  {
    "url": "views/0.x/home.html",
    "revision": "1809b5c7def950a8eb31f56ab489fa26"
  },
  {
    "url": "views/0.x/index.html",
    "revision": "197a97c819a7286454c01cff506946fd"
  },
  {
    "url": "views/0.x/installUse.html",
    "revision": "36bcc2cb5d7966f94c93472cbfe47137"
  },
  {
    "url": "views/0.x/password.html",
    "revision": "ce71d61855bf1f34602f86f3ac239ed8"
  },
  {
    "url": "views/0.x/tag.html",
    "revision": "ccca92c4e36c6081461d1071985a6f47"
  },
  {
    "url": "views/0.x/timeline.html",
    "revision": "81f29489571933063e622b294ca8ca3c"
  },
  {
    "url": "views/0.x/valine.html",
    "revision": "6944154883ff9064839579572a401a6f"
  },
  {
    "url": "views/1.x/0update1.html",
    "revision": "0ac8d3882bd7a0a3caf93bec28d5e759"
  },
  {
    "url": "views/1.x/404.html",
    "revision": "aea1f2a6e4faae7a97d2e05f7799aa1a"
  },
  {
    "url": "views/1.x/abstract.html",
    "revision": "51e2b514f0e904d7d6ee27718bf5c7e9"
  },
  {
    "url": "views/1.x/blog.html",
    "revision": "2b423b6ff062dddc9755c1ab5dfbb1ff"
  },
  {
    "url": "views/1.x/configJs.html",
    "revision": "354e558a3728f9891db31606039cf927"
  },
  {
    "url": "views/1.x/frontMatter.html",
    "revision": "49ebec21112c054866477f5a1360b97d"
  },
  {
    "url": "views/1.x/ga.html",
    "revision": "056312d6ce0a4ac98fc815a1f285911e"
  },
  {
    "url": "views/1.x/home.html",
    "revision": "1809b5c7def950a8eb31f56ab489fa26"
  },
  {
    "url": "views/1.x/index.html",
    "revision": "197a97c819a7286454c01cff506946fd"
  },
  {
    "url": "views/1.x/installUse.html",
    "revision": "36bcc2cb5d7966f94c93472cbfe47137"
  },
  {
    "url": "views/1.x/password.html",
    "revision": "ce71d61855bf1f34602f86f3ac239ed8"
  },
  {
    "url": "views/1.x/recommend.html",
    "revision": "4ed5ee8b10b8e377d1b69426c818f854"
  },
  {
    "url": "views/1.x/themePicker.html",
    "revision": "7135b717fc3db5a538883e224d48d94a"
  },
  {
    "url": "views/1.x/timeline.html",
    "revision": "81f29489571933063e622b294ca8ca3c"
  },
  {
    "url": "views/1.x/valine.html",
    "revision": "4c74de4e9dcf414f3007651ed297d331"
  },
  {
    "url": "views/other/about.html",
    "revision": "5ced8d5593a4a290b8ca462c095cdbb0"
  },
  {
    "url": "views/other/deploy.html",
    "revision": "c0c74bb334804463fdc3c2f83dc73549"
  },
  {
    "url": "views/other/develop.html",
    "revision": "70053620740c6e6835591dd3432c3dc0"
  },
  {
    "url": "views/other/domain.html",
    "revision": "bc356f265d58222776dc27156f19449a"
  },
  {
    "url": "views/other/notice.html",
    "revision": "c4eac865386620a3833d2bdd43a032ca"
  },
  {
    "url": "views/other/one-year-old.html",
    "revision": "f3ccdff683e223025328df2305f7d045"
  },
  {
    "url": "views/other/question.html",
    "revision": "b3355c16ff7f20b97ff9768a4c438d5f"
  },
  {
    "url": "views/other/theme-example.html",
    "revision": "ce01d505a7d26eac6195df739898ca3a"
  },
  {
    "url": "views/plugins/backToTop.html",
    "revision": "6c4bf5615e8bdfbdbc30a44eb038014a"
  },
  {
    "url": "views/plugins/comments.html",
    "revision": "b3dd7fb132a73de0aaca79ab567822e5"
  },
  {
    "url": "views/plugins/ga.html",
    "revision": "cfeffaedba189b16f7b44a5ed50a9374"
  },
  {
    "url": "views/plugins/index.html",
    "revision": "476910f7c336a64deb51d24454d4dafb"
  },
  {
    "url": "views/plugins/kanbanniang.html",
    "revision": "35060148fc0e500d72ca2278c3b968c7"
  },
  {
    "url": "views/plugins/loadingPage.html",
    "revision": "297727117d13ef7855a456f394b40952"
  },
  {
    "url": "views/plugins/pagation.html",
    "revision": "6b819dc5db9aecaea36160f163f6a495"
  },
  {
    "url": "views/plugins/screenfull.html",
    "revision": "6298f32b330a99fb66d315e1b76713b9"
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
