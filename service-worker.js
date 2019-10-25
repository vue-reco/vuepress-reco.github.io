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
    "revision": "e907ed8f903745b5298fc652eb1d4a0b"
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
    "url": "assets/js/13.345f43e0.js",
    "revision": "f7e0ae251e07b7947825e578dcde829f"
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
    "url": "assets/js/16.11285944.js",
    "revision": "a143544347fe34235d22c2765ce21dfb"
  },
  {
    "url": "assets/js/17.8e9e5ba6.js",
    "revision": "529f83a53b42ee4cfbca7cc2b622fea7"
  },
  {
    "url": "assets/js/18.9ff1b2d2.js",
    "revision": "fb9c784f2d0f76a659050843c2cc2b15"
  },
  {
    "url": "assets/js/19.a5b7e601.js",
    "revision": "2bfe0b0f5cb06c71461b7cb11aeb8d36"
  },
  {
    "url": "assets/js/20.4c91cb84.js",
    "revision": "3c74d2e5c17dd657d1fadc00923dcdac"
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
    "url": "assets/js/47.b5915a12.js",
    "revision": "a5630f55fb7f80200eb9c4d5ee25b359"
  },
  {
    "url": "assets/js/48.7b7ae88b.js",
    "revision": "558bb9ca3fb8cc49c60b2187c23d8527"
  },
  {
    "url": "assets/js/49.cfd3fc0a.js",
    "revision": "5fb42dae07b38d8b7e700eaf30361412"
  },
  {
    "url": "assets/js/5.48bf07aa.js",
    "revision": "d56ca00741258c503cb9614e30dfdebd"
  },
  {
    "url": "assets/js/50.5217d70d.js",
    "revision": "812dc95f5718dbecbb72382290203e75"
  },
  {
    "url": "assets/js/51.f2067969.js",
    "revision": "795677374a53da4ba00bc4f01b382059"
  },
  {
    "url": "assets/js/52.5659ca2e.js",
    "revision": "eed9fb1a5d392a91766e30d7af042c34"
  },
  {
    "url": "assets/js/53.101bfb22.js",
    "revision": "b32a6676da23aac005c602c50d348158"
  },
  {
    "url": "assets/js/54.2c76bec1.js",
    "revision": "6c6cfda4c07903736948e59a3514b641"
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
    "url": "assets/js/app.1f0af691.js",
    "revision": "87bdf87ffa6a7cc4270613e93261191e"
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
    "revision": "d3873f2d64c2f7da637b1e8b115e4d66"
  },
  {
    "url": "blogImages/16.png",
    "revision": "57f7d7defbefc174bb6cbbfa793a552c"
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
    "revision": "a9fb0d6b130316a8cd6d94824cd3b8c5"
  },
  {
    "url": "categories/index.html",
    "revision": "1ec6ca3e51681b5bf891b88a602931e1"
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
    "revision": "ad277eb5e583fa9a04b6d0a2c9a9ce8a"
  },
  {
    "url": "tag/index.html",
    "revision": "78bfce730184d1adc00bf4a60d2027b6"
  },
  {
    "url": "timeline/index.html",
    "revision": "4a50be4557f1b0a78781c15a4760fae8"
  },
  {
    "url": "views/0.x/abstract.html",
    "revision": "cefc77aabd240f83ea365311d5da4865"
  },
  {
    "url": "views/0.x/category.html",
    "revision": "0eac9fb192fc6c80e5e44161308fb6a1"
  },
  {
    "url": "views/0.x/configJs.html",
    "revision": "c96827d468d540fbc115365a699cc15c"
  },
  {
    "url": "views/0.x/home.html",
    "revision": "67d181553ca158b097418533408a036f"
  },
  {
    "url": "views/0.x/index.html",
    "revision": "0a39f0d4ff951fc4a24be5c5a0494ca4"
  },
  {
    "url": "views/0.x/installUse.html",
    "revision": "be1166b9951fd7c46e65bd08f55b3245"
  },
  {
    "url": "views/0.x/password.html",
    "revision": "28a92b21c9659288c9260f7d60602dc8"
  },
  {
    "url": "views/0.x/tag.html",
    "revision": "4873fe023c313a2896e2c6e927cf81ae"
  },
  {
    "url": "views/0.x/timeline.html",
    "revision": "146b23cd8cfa45da55c6109152e03fce"
  },
  {
    "url": "views/0.x/valine.html",
    "revision": "2c29930186845f4f674b9782bf3c22f6"
  },
  {
    "url": "views/1.x/0update1.html",
    "revision": "5218f49b7f67fe8688feaa1c9aabdb4b"
  },
  {
    "url": "views/1.x/404.html",
    "revision": "d2421f59f7232e07f23000f7ee19c665"
  },
  {
    "url": "views/1.x/abstract.html",
    "revision": "cefc77aabd240f83ea365311d5da4865"
  },
  {
    "url": "views/1.x/blog.html",
    "revision": "55f743beddd5371b9e393fb4a5a3020b"
  },
  {
    "url": "views/1.x/configJs.html",
    "revision": "c96827d468d540fbc115365a699cc15c"
  },
  {
    "url": "views/1.x/frontMatter.html",
    "revision": "288c787d95cdfc98b800290da379ea25"
  },
  {
    "url": "views/1.x/ga.html",
    "revision": "0323254780f7fcf9d1d763a24b69b159"
  },
  {
    "url": "views/1.x/home.html",
    "revision": "67d181553ca158b097418533408a036f"
  },
  {
    "url": "views/1.x/index.html",
    "revision": "0a39f0d4ff951fc4a24be5c5a0494ca4"
  },
  {
    "url": "views/1.x/installUse.html",
    "revision": "be1166b9951fd7c46e65bd08f55b3245"
  },
  {
    "url": "views/1.x/password.html",
    "revision": "28a92b21c9659288c9260f7d60602dc8"
  },
  {
    "url": "views/1.x/recommend.html",
    "revision": "9a6c9816fda474af84f09faea4c26627"
  },
  {
    "url": "views/1.x/themePicker.html",
    "revision": "eb1dd45b90fd094d4b76914852a82eed"
  },
  {
    "url": "views/1.x/timeline.html",
    "revision": "146b23cd8cfa45da55c6109152e03fce"
  },
  {
    "url": "views/1.x/valine.html",
    "revision": "ee454cd132c8241ea60dd20eb5269fb2"
  },
  {
    "url": "views/other/about.html",
    "revision": "4e290c2bf9f924e2a55364451bc01c1e"
  },
  {
    "url": "views/other/deploy.html",
    "revision": "0df8b2bd762bfc89c191805cea634da1"
  },
  {
    "url": "views/other/develop.html",
    "revision": "5ae3b2c3ffed4d1553e84193641ce0f1"
  },
  {
    "url": "views/other/domain.html",
    "revision": "9e2406be3ee321ae2de6cb6210510abd"
  },
  {
    "url": "views/other/notice.html",
    "revision": "626144568598fe3e033304f71b30a21f"
  },
  {
    "url": "views/other/question.html",
    "revision": "7e53abab60be3cd17b08064330bc9ec3"
  },
  {
    "url": "views/other/theme-example.html",
    "revision": "9e19b7231b22422fe26d18e63e2e6a27"
  },
  {
    "url": "views/plugins/backToTop.html",
    "revision": "7e52cc8fae82f6f3af8f9b5445aa91e2"
  },
  {
    "url": "views/plugins/comments.html",
    "revision": "a560c479dbbad6dc6d4788ec7858e928"
  },
  {
    "url": "views/plugins/ga.html",
    "revision": "06fdbefd2e88502ae50de54a103d0e1f"
  },
  {
    "url": "views/plugins/index.html",
    "revision": "5019fd08b1b3e7f113441bf169aada36"
  },
  {
    "url": "views/plugins/kanbanniang.html",
    "revision": "b306a31483db265f8b02cdd2e4eafc26"
  },
  {
    "url": "views/plugins/loadingPage.html",
    "revision": "76196e9702b01fd3f52f53f4d7c652e4"
  },
  {
    "url": "views/plugins/pagation.html",
    "revision": "a5c9bc35b8874360375365351ad4260b"
  },
  {
    "url": "views/plugins/screenfull.html",
    "revision": "8fcc5d04accd4e30d66063b5700f1d41"
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
