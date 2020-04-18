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
    "url": "assets/css/0.styles.b41e45aa.css",
    "revision": "f6439fc7a6308057a8a274093173d15e"
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
    "url": "assets/img/bgm.52ef496c.png",
    "revision": "52ef496c6da155ea78b35a6a56f0300c"
  },
  {
    "url": "assets/img/blog.3e05c04a.svg",
    "revision": "3e05c04a69a1437e95c640102feca339"
  },
  {
    "url": "assets/img/bushu.7d8ab006.png",
    "revision": "7d8ab006a2d68c68f588166e972f7b37"
  },
  {
    "url": "assets/img/darkBgm.4b951b61.png",
    "revision": "4b951b614825b06b4f765a5bf615d499"
  },
  {
    "url": "assets/img/default.081119b7.png",
    "revision": "081119b755f2691b4d949a8f2708c9b3"
  },
  {
    "url": "assets/img/git.ed1b27e2.png",
    "revision": "ed1b27e2436975c5e100187d353dceb7"
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
    "url": "assets/img/kanbannaing_1.9d4605aa.png",
    "revision": "9d4605aa2583bf47e34fd44310d28da7"
  },
  {
    "url": "assets/img/kanbanniang_2.ef1f6e5b.png",
    "revision": "ef1f6e5bd64755096091089e16cd6baa"
  },
  {
    "url": "assets/img/log.21d903cb.png",
    "revision": "21d903cb410d4267131ca273e3e849b2"
  },
  {
    "url": "assets/img/new_us.2d9e091d.png",
    "revision": "2d9e091d43fbd1e4009c425163e1e4a6"
  },
  {
    "url": "assets/img/new.d0fd418c.png",
    "revision": "d0fd418ce5a764c7814ad69696862657"
  },
  {
    "url": "assets/img/resend.c5b493be.png",
    "revision": "c5b493becde3617241e3b6c5dd635034"
  },
  {
    "url": "assets/img/rvcode_qq.e2cae62f.png",
    "revision": "e2cae62f60f6a125cacfca17298f2858"
  },
  {
    "url": "assets/img/self_work.c28ec026.png",
    "revision": "c28ec026880fc6cee275dd944266eb89"
  },
  {
    "url": "assets/img/setLogin.8b86a266.png",
    "revision": "8b86a266c09a9ed34c5bf0043b96307a"
  },
  {
    "url": "assets/img/setRule.59a883c3.png",
    "revision": "59a883c3d75dceb6170e80ed43dccf26"
  },
  {
    "url": "assets/img/today.484a4d22.svg",
    "revision": "484a4d22a4aa9be93c18433c5ff3903f"
  },
  {
    "url": "assets/img/tomorrow.81f0b143.svg",
    "revision": "81f0b143cf6df495fb5f1ba4b32da0a4"
  },
  {
    "url": "assets/img/yesterday.8e49f298.svg",
    "revision": "8e49f298844ce8a7235c197d5d12e4c4"
  },
  {
    "url": "assets/js/1.0d151a4a.js",
    "revision": "56986e34c09eb53574b92a10c86962b9"
  },
  {
    "url": "assets/js/10.207df6f2.js",
    "revision": "7f1727f853e7e68a87666a70ed1aea02"
  },
  {
    "url": "assets/js/100.c7c0fcbb.js",
    "revision": "525179a759d14010590cd930df43fa6f"
  },
  {
    "url": "assets/js/101.4edabf3c.js",
    "revision": "c99ad9c01149898a017908a84f6e6bea"
  },
  {
    "url": "assets/js/102.b52209a0.js",
    "revision": "dbcbd33ab36e8fa2b2bac10f81f8edab"
  },
  {
    "url": "assets/js/103.9d822167.js",
    "revision": "6c448992fd0210d8a33f119301bfc981"
  },
  {
    "url": "assets/js/104.6eb46d1a.js",
    "revision": "d35aff460c728ad0be8ffe1254840a8a"
  },
  {
    "url": "assets/js/105.0cfe07bd.js",
    "revision": "b49195a85a8903384cbc7f34d4fa3870"
  },
  {
    "url": "assets/js/106.22077a82.js",
    "revision": "252e65570a31b821773a2d6111abe80d"
  },
  {
    "url": "assets/js/107.f9620144.js",
    "revision": "968cb6c0152959eb7318250230b61ebd"
  },
  {
    "url": "assets/js/108.c4e8c901.js",
    "revision": "6e8cfa15fc21eec50b746eab6820ba0a"
  },
  {
    "url": "assets/js/109.42b83b16.js",
    "revision": "6dbf9736328700d53e744cbf749fb1da"
  },
  {
    "url": "assets/js/11.f7ede489.js",
    "revision": "b64d79fd08b751c114ccbc3575c057dc"
  },
  {
    "url": "assets/js/110.81267d0a.js",
    "revision": "b75649aa2e3cc1cf7005674882955a7d"
  },
  {
    "url": "assets/js/111.4635afeb.js",
    "revision": "741182f24680120598802541f74dc465"
  },
  {
    "url": "assets/js/112.5d7dc28d.js",
    "revision": "92e01ecfe8d4d32fb35a04d64e0653fd"
  },
  {
    "url": "assets/js/113.b532b932.js",
    "revision": "79861c53d9bbe1a2446a7f41e3b09a76"
  },
  {
    "url": "assets/js/12.06b7f82e.js",
    "revision": "37b842344398ae87239bff715c4a2841"
  },
  {
    "url": "assets/js/13.c1648fd0.js",
    "revision": "ea82f531cd13652e2b68d2c2b2f5a25d"
  },
  {
    "url": "assets/js/14.2623a5b9.js",
    "revision": "2fd7524302f58f444760c339253c7f52"
  },
  {
    "url": "assets/js/15.432ee289.js",
    "revision": "e7a4914c5923a90c4b67b15a30a9554b"
  },
  {
    "url": "assets/js/16.717e0fef.js",
    "revision": "fb15db83859eb73415604616763b93b3"
  },
  {
    "url": "assets/js/17.20049db7.js",
    "revision": "bc7fa1328dbfa58467ada11714349f0f"
  },
  {
    "url": "assets/js/18.7e08b011.js",
    "revision": "99589a5c38d3635503f85d43fda886b9"
  },
  {
    "url": "assets/js/19.5289ae5e.js",
    "revision": "22e421b1247799da312e75b48d062b03"
  },
  {
    "url": "assets/js/2.40a5c958.js",
    "revision": "c647eb780ef500408d1dd638a482f557"
  },
  {
    "url": "assets/js/20.d679fe4f.js",
    "revision": "29ebfd107e07ab26e997853e4e8edc8b"
  },
  {
    "url": "assets/js/21.b353215b.js",
    "revision": "9e4214f3f339dd12fb8c03113f4752da"
  },
  {
    "url": "assets/js/22.f79e0154.js",
    "revision": "54e0006464ebb708108328624de7cf50"
  },
  {
    "url": "assets/js/23.168e40a8.js",
    "revision": "ee4d9c930bdee4c0887fe642385c347c"
  },
  {
    "url": "assets/js/24.c26ae569.js",
    "revision": "1cc1de46731c2390e6b4d5560cd894eb"
  },
  {
    "url": "assets/js/25.8ce64af6.js",
    "revision": "5c1cf5bb21c1efd10345731ce3ba32e6"
  },
  {
    "url": "assets/js/26.1c487be7.js",
    "revision": "2b80783c9b46ddd93cbd8326016310b1"
  },
  {
    "url": "assets/js/27.0fa9841b.js",
    "revision": "35e7a5af6c232ef71d1841f504de407c"
  },
  {
    "url": "assets/js/28.22d35027.js",
    "revision": "1f67183925b4f48e59735c411f020e4f"
  },
  {
    "url": "assets/js/29.4be2ebf1.js",
    "revision": "3a9dc2cbaf53ce026cea923bebbdec1b"
  },
  {
    "url": "assets/js/30.7174a2e4.js",
    "revision": "550e430b39784a567053017c25820de9"
  },
  {
    "url": "assets/js/31.a4c3d911.js",
    "revision": "e78da9176bd64253fbb47d91ad18d74d"
  },
  {
    "url": "assets/js/32.0a19ae37.js",
    "revision": "1a7221c1f9656a8a25a731ddb2bea690"
  },
  {
    "url": "assets/js/33.5289cae4.js",
    "revision": "4bf85e5d43dfa54d0d668e51bc128c48"
  },
  {
    "url": "assets/js/34.220b112b.js",
    "revision": "47527ad69f2ea3e0a0f156230e2cf122"
  },
  {
    "url": "assets/js/35.7c97aab8.js",
    "revision": "bafd433cabbcdb92129a80c22b666723"
  },
  {
    "url": "assets/js/36.7ded3f67.js",
    "revision": "069f561b2bf586b5456cff180e3b189f"
  },
  {
    "url": "assets/js/37.488e1869.js",
    "revision": "b37a80130feeab88b5981f1edc166ecd"
  },
  {
    "url": "assets/js/38.e01be72f.js",
    "revision": "76c0859d9613dc4022392c52a3bf946d"
  },
  {
    "url": "assets/js/39.6eac50ef.js",
    "revision": "8cfc07a2cef8f14614d6a79706e87f6a"
  },
  {
    "url": "assets/js/40.88a1c2d9.js",
    "revision": "4e4560a93e2dbfdd6eae8109f9ea5968"
  },
  {
    "url": "assets/js/41.f5eb248a.js",
    "revision": "c7347d7d2e7a6ffaf64279879022a9ca"
  },
  {
    "url": "assets/js/42.1075f0f3.js",
    "revision": "9489fca0cd65ac9a67d1733b07b8a151"
  },
  {
    "url": "assets/js/43.04d0ca35.js",
    "revision": "74b1181eafbe1b6701df0e8338afaeac"
  },
  {
    "url": "assets/js/44.7b799298.js",
    "revision": "fda0cc8955d1538ad1c7cb258e28f702"
  },
  {
    "url": "assets/js/45.be971e8a.js",
    "revision": "6ebd1f0ab288154abaacf7dd2ab1e9a7"
  },
  {
    "url": "assets/js/46.94215ab5.js",
    "revision": "30b27912cbc235562ebfc5cd8f5f2c26"
  },
  {
    "url": "assets/js/47.bb2ef224.js",
    "revision": "f47b5532aecdd2c6903f687b100c9237"
  },
  {
    "url": "assets/js/48.dc71d941.js",
    "revision": "0d6e50cae490d0748174e07487e88da6"
  },
  {
    "url": "assets/js/49.3a782714.js",
    "revision": "e818f165db0eb972bb5c92504184e046"
  },
  {
    "url": "assets/js/50.c029c1af.js",
    "revision": "fb38ad5ffc899b713c9cc61d5e3de2c7"
  },
  {
    "url": "assets/js/51.261710ea.js",
    "revision": "8c8e1db9707b773026672e878f6718f9"
  },
  {
    "url": "assets/js/52.d2bc15ac.js",
    "revision": "ac4517ac96357b06c2d9fb953c6901bb"
  },
  {
    "url": "assets/js/53.8d548316.js",
    "revision": "12851db7159e16580a23d08d9edbace4"
  },
  {
    "url": "assets/js/54.356c22ac.js",
    "revision": "11730ea570ec6337ab0c17103c991ba2"
  },
  {
    "url": "assets/js/55.c0b3bd10.js",
    "revision": "9703ae57a80399f8a9c7deae4aa51497"
  },
  {
    "url": "assets/js/56.73713933.js",
    "revision": "d1783896e623466e4c00ad382ad5825f"
  },
  {
    "url": "assets/js/57.4aab1c10.js",
    "revision": "af8fa04b4abc39f221794597422082d9"
  },
  {
    "url": "assets/js/58.3ca81d33.js",
    "revision": "df7d9576b24dde5fb1eb188289b1221c"
  },
  {
    "url": "assets/js/59.b46452ac.js",
    "revision": "bdfacd67f468b477c3e51bfd7f6143da"
  },
  {
    "url": "assets/js/6.9cd6e063.js",
    "revision": "c396b41cf2e4426b5c626ff041422b21"
  },
  {
    "url": "assets/js/60.c955d826.js",
    "revision": "d873f2871ce424ec7eb7227fcb4152df"
  },
  {
    "url": "assets/js/61.a3224341.js",
    "revision": "9f5e67982acc879a8c818741f2850de9"
  },
  {
    "url": "assets/js/62.7ad51287.js",
    "revision": "1e17d36ebbd3006b2b4fa4df0a9e61f6"
  },
  {
    "url": "assets/js/63.bc96804a.js",
    "revision": "d1f75a0993e8c730c0567de1e80080a8"
  },
  {
    "url": "assets/js/64.f8a05ceb.js",
    "revision": "425a2f3feb208a8ffaca5db73504a1cc"
  },
  {
    "url": "assets/js/65.12752a6d.js",
    "revision": "08e0a975a4f5b9b610bc24aa2d742dac"
  },
  {
    "url": "assets/js/66.89866c67.js",
    "revision": "dfe8951981e08772c645d8afb05e1b52"
  },
  {
    "url": "assets/js/67.34f78abc.js",
    "revision": "f0848ef371714d1a0d964d1032a91970"
  },
  {
    "url": "assets/js/68.0d40996c.js",
    "revision": "ac305574ce7c9862a1beb3f568be22a4"
  },
  {
    "url": "assets/js/69.52ce2bae.js",
    "revision": "2486d8c57c606ad5df426b0793378771"
  },
  {
    "url": "assets/js/7.d79948cc.js",
    "revision": "51b929fc8076f7e9ec09a5a2cd90840c"
  },
  {
    "url": "assets/js/70.31390ac0.js",
    "revision": "d3e435417d07874e7641fab2115b39e4"
  },
  {
    "url": "assets/js/71.51033202.js",
    "revision": "8a4cedb5a231e7a4498d000893879c23"
  },
  {
    "url": "assets/js/72.3a45b7cb.js",
    "revision": "1db92257f476f4b4d639585e2b15f187"
  },
  {
    "url": "assets/js/73.43be0440.js",
    "revision": "83728b7bdec2a03905fd1ff25948c3e6"
  },
  {
    "url": "assets/js/74.42eb1a8b.js",
    "revision": "9498e45d7a5031afb52003b9274f11f5"
  },
  {
    "url": "assets/js/75.8270aeee.js",
    "revision": "c22012cb8d5272c3f04d4f7d08caa0fc"
  },
  {
    "url": "assets/js/76.6ff48893.js",
    "revision": "5f3c42664c66eb801b516648a0ee94f9"
  },
  {
    "url": "assets/js/77.d7322e1c.js",
    "revision": "156e4b241f422b457b240bd98560dd61"
  },
  {
    "url": "assets/js/78.3ed4db21.js",
    "revision": "0caa4be84fd748544839cef7ccccba85"
  },
  {
    "url": "assets/js/79.98b172b9.js",
    "revision": "306ab4badc84482c47a1aee143e77a57"
  },
  {
    "url": "assets/js/8.a54a47b8.js",
    "revision": "2270efa70fdf3d6c11e27efafdac5529"
  },
  {
    "url": "assets/js/80.8a8381e7.js",
    "revision": "0fccd27995c4832872a3c95c884ae856"
  },
  {
    "url": "assets/js/81.f3a214ec.js",
    "revision": "f5e04cb68124e0ea55479a6289e76e29"
  },
  {
    "url": "assets/js/82.701a18bf.js",
    "revision": "bb039c39bca1a400b913b5a62b688b68"
  },
  {
    "url": "assets/js/83.82200581.js",
    "revision": "0e2b365ed82d2eafadd143848073d9f9"
  },
  {
    "url": "assets/js/84.211e8ba9.js",
    "revision": "2c1cac03809829922d1f043736527be2"
  },
  {
    "url": "assets/js/85.4c04c75b.js",
    "revision": "f10aa2583a9c7e587d46e72a47173586"
  },
  {
    "url": "assets/js/86.a622200c.js",
    "revision": "dd7bf689e6318d05ad6103fe7444fa62"
  },
  {
    "url": "assets/js/87.29febfea.js",
    "revision": "24419a70b010d8677e522fe10b8befa1"
  },
  {
    "url": "assets/js/88.dbb2dc66.js",
    "revision": "94809914e60f002b57a4ba667ff054c3"
  },
  {
    "url": "assets/js/89.3d15ed45.js",
    "revision": "cc435e49117f8d8675dd9b60b75f0fd3"
  },
  {
    "url": "assets/js/9.91ac48fb.js",
    "revision": "f86fa05967a6f0e2b5b529b9c579ec35"
  },
  {
    "url": "assets/js/90.fee82919.js",
    "revision": "430854355e635b4df3756b298fd3dc29"
  },
  {
    "url": "assets/js/91.4c51a972.js",
    "revision": "a7327023791268fda937b9f3048fbf6d"
  },
  {
    "url": "assets/js/92.f80b5326.js",
    "revision": "a3adeb61358248cc0ae1f5e3ed1fbdb8"
  },
  {
    "url": "assets/js/93.c6a9b69e.js",
    "revision": "2f8cc2ecf0b14a4b478f2d1db99fc551"
  },
  {
    "url": "assets/js/94.cf6dcde3.js",
    "revision": "ac7b926768eec535fc61e80bc9c018ba"
  },
  {
    "url": "assets/js/95.cf533ce5.js",
    "revision": "c5ce454abf98bc05bf0a4bbd6347fd6c"
  },
  {
    "url": "assets/js/96.be8bb032.js",
    "revision": "a4c4072dad98957ebe3fe0469ca32643"
  },
  {
    "url": "assets/js/97.edbd8b72.js",
    "revision": "6f25b831005baa031e955ab02e4a5c54"
  },
  {
    "url": "assets/js/98.26be2649.js",
    "revision": "a57892ef1a3078c5b9cb0e44ee658491"
  },
  {
    "url": "assets/js/99.e1f307eb.js",
    "revision": "47b7461e333eef4642e0e072261e5e71"
  },
  {
    "url": "assets/js/app.9a7f95f2.js",
    "revision": "6aa0992cf6032f520361d9321ce23709"
  },
  {
    "url": "assets/js/vendors~docsearch.6aa5a3ed.js",
    "revision": "bdc33dc886de6a397bda8f203b650d00"
  },
  {
    "url": "assets/js/vendors~flowchart.5c2a134b.js",
    "revision": "8c7cf80295752088795c784691d3f28e"
  },
  {
    "url": "categories/blog/index.html",
    "revision": "82b6fe684da11b60f43748da730da5ec"
  },
  {
    "url": "categories/index.html",
    "revision": "7989bf9dd5172e9c94d9ef5cadfe5fed"
  },
  {
    "url": "en/index.html",
    "revision": "b0a7ec914ed0a747326c089c1742938e"
  },
  {
    "url": "en/views/1.x/abstract.html",
    "revision": "1b87c04d717fabcec9d1fcf415d9284d"
  },
  {
    "url": "en/views/1.x/blog.html",
    "revision": "26cb1a312bb9f90a948dc8b71d8819be"
  },
  {
    "url": "en/views/1.x/configJs.html",
    "revision": "a1ca7e77cfe5bd4ccd3a3c23d7702b42"
  },
  {
    "url": "en/views/1.x/customStyleAndScript.html",
    "revision": "053fe404212a4e7c67a83f0a693534fc"
  },
  {
    "url": "en/views/1.x/frontMatter.html",
    "revision": "eb64384851bed8a4c8d9e91cd93f8d84"
  },
  {
    "url": "en/views/1.x/ga.html",
    "revision": "2874f8b2521e24783baabc69e4e06618"
  },
  {
    "url": "en/views/1.x/home.html",
    "revision": "f2f6c674aa37a2dc0717d8f6779928ee"
  },
  {
    "url": "en/views/1.x/index.html",
    "revision": "50a2766d04e4722982042f59901b7d4a"
  },
  {
    "url": "en/views/1.x/installUse.html",
    "revision": "47f4b76bacabb6f881c0db5da9a47191"
  },
  {
    "url": "en/views/1.x/local.html",
    "revision": "79fe025f1afe91560f45b44c21f18b70"
  },
  {
    "url": "en/views/1.x/mode.html",
    "revision": "4bc0d8ea80e68250df10e1f0cf497e5e"
  },
  {
    "url": "en/views/1.x/notfound.html",
    "revision": "b6496178c5e4752a298830af8bfc2a1b"
  },
  {
    "url": "en/views/1.x/password.html",
    "revision": "98dc78eb2e21b25fcd9ba71a5d6de39a"
  },
  {
    "url": "en/views/1.x/recommend.html",
    "revision": "1fdb3a06924a5a57bafac73e15a042c0"
  },
  {
    "url": "en/views/1.x/sidebar.html",
    "revision": "285b8fb55dcc2d6411a33744dda8ccaf"
  },
  {
    "url": "en/views/1.x/syntax.html",
    "revision": "ae3249191c9c6905e76f745eea8aa60e"
  },
  {
    "url": "en/views/1.x/themePicker.html",
    "revision": "b52feba5fb02e50240320b777c415d8d"
  },
  {
    "url": "en/views/1.x/timeline.html",
    "revision": "5987137906ca0696ae945b980de3a180"
  },
  {
    "url": "en/views/1.x/updatetoone.html",
    "revision": "f56643f5f36ae4cbc26cba1fd5685808"
  },
  {
    "url": "en/views/1.x/valine.html",
    "revision": "ba279d3312c1ff48c6d6e6f3ca332420"
  },
  {
    "url": "en/views/other/about.html",
    "revision": "66ec32447daee57fd80579d51575b0f0"
  },
  {
    "url": "en/views/other/notice.html",
    "revision": "41b302b334dcb1289b74eaaa74219c95"
  },
  {
    "url": "en/views/other/question.html",
    "revision": "42c040991fdd234183eb08a9495fab91"
  },
  {
    "url": "en/views/other/theme-example.html",
    "revision": "5f79c456a064afc235753ac776851d5b"
  },
  {
    "url": "en/views/plugins/backToTop.html",
    "revision": "ddc8ec4eb358c85fd21b028584d8d0dd"
  },
  {
    "url": "en/views/plugins/bgmPlayer.html",
    "revision": "493995fcd795e909bd77e471a82110cf"
  },
  {
    "url": "en/views/plugins/comments.html",
    "revision": "8e5e27bc48a756875896243750b8d2a0"
  },
  {
    "url": "en/views/plugins/extractCode.html",
    "revision": "b990fec39031dc302bd6ee8b3d154dbf"
  },
  {
    "url": "en/views/plugins/ga.html",
    "revision": "9e783fc3a90c101825d11ea64b146368"
  },
  {
    "url": "en/views/plugins/index.html",
    "revision": "1c6f08665075543c6463a1f2b985df80"
  },
  {
    "url": "en/views/plugins/kanbanniang.html",
    "revision": "79b82dabd6e6d1d6deb035a1f64a649f"
  },
  {
    "url": "en/views/plugins/loadingPage.html",
    "revision": "471c4dfa2d763d53721e2bebf15826ad"
  },
  {
    "url": "en/views/plugins/pagation.html",
    "revision": "bfd91f698e6e586cc7d35fd1a5aeeee5"
  },
  {
    "url": "en/views/plugins/rss.html",
    "revision": "fc3b004f8efb0db2e8eb5376307a3ffd"
  },
  {
    "url": "en/views/plugins/screenfull.html",
    "revision": "6801ca5291c245666abc9f51d03678a9"
  },
  {
    "url": "head.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
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
    "revision": "12c7217b7132077add4ffad5b79d960a"
  },
  {
    "url": "tag/index.html",
    "revision": "4191a6ed552db5413adc37d77454c052"
  },
  {
    "url": "tags/Github Actions/index.html",
    "revision": "9b0091b8ad7264a9242094b1a3d84d20"
  },
  {
    "url": "tags/Secret Key/index.html",
    "revision": "4bc872823f294fdcda02330a58a80e52"
  },
  {
    "url": "tags/VuePress/index.html",
    "revision": "ee915461cabe9cf1c0d01b5e67da47c3"
  },
  {
    "url": "tags/博客/index.html",
    "revision": "a8a7de66a544811e62935bd83b6074c5"
  },
  {
    "url": "timeline/index.html",
    "revision": "57e01675b0b116c7f4d6b9ef399287b4"
  },
  {
    "url": "views/0.x/abstract.html",
    "revision": "9453f685ca4541b5507ce91d53c7953d"
  },
  {
    "url": "views/0.x/category.html",
    "revision": "9d6c0cbca24da61c1cc14d55a0c2b11d"
  },
  {
    "url": "views/0.x/configJs.html",
    "revision": "336fbbe0fd41897998c5aff03b847ebe"
  },
  {
    "url": "views/0.x/home.html",
    "revision": "dc82228f44baaf7f69c2d040288711d8"
  },
  {
    "url": "views/0.x/index.html",
    "revision": "04fc617ab2b01e732643e785c22f8ad5"
  },
  {
    "url": "views/0.x/installUse.html",
    "revision": "0dab8ff64ef9e2a43fcb5f76d4f533a6"
  },
  {
    "url": "views/0.x/password.html",
    "revision": "a57c136bfeb2769ac5212a6974238882"
  },
  {
    "url": "views/0.x/tag.html",
    "revision": "96cf4f2e80a889962aa3f27082fd8fcf"
  },
  {
    "url": "views/0.x/timeline.html",
    "revision": "b20dd37b77a5493dac0d3cd7825bca3a"
  },
  {
    "url": "views/0.x/valine.html",
    "revision": "843a86ab8ad94db56ac890efaa62e145"
  },
  {
    "url": "views/1.x/abstract.html",
    "revision": "9db97b937e5e2f6072e2e22cb0f6101f"
  },
  {
    "url": "views/1.x/blog.html",
    "revision": "c1f596ef6a4478fb387ed07ffb7b8e57"
  },
  {
    "url": "views/1.x/configJs.html",
    "revision": "dad65e378b7b2d968941a4564cc8bb26"
  },
  {
    "url": "views/1.x/customStyleAndScript.html",
    "revision": "e2ce70b4ef160b50a58d92dd7b4adb26"
  },
  {
    "url": "views/1.x/frontMatter.html",
    "revision": "b8891655a08437fcac6a5441fe8bc5e8"
  },
  {
    "url": "views/1.x/ga.html",
    "revision": "c63433092a13e52fd52a6bdcacaf9e48"
  },
  {
    "url": "views/1.x/home.html",
    "revision": "16a2baa389c839e58b6706f5dd3d9b31"
  },
  {
    "url": "views/1.x/index.html",
    "revision": "8dacbd3f8dc9b46cc5c1f9e55e4349ca"
  },
  {
    "url": "views/1.x/installUse.html",
    "revision": "4d805970f9f0bd25a55340b1ea469f59"
  },
  {
    "url": "views/1.x/local.html",
    "revision": "8fe36f1d7a403e7503829509ce5a65af"
  },
  {
    "url": "views/1.x/mode.html",
    "revision": "5b64e25585e467393f53fada211bb287"
  },
  {
    "url": "views/1.x/notfound.html",
    "revision": "1f4677b887beb6e0894de48bf4238389"
  },
  {
    "url": "views/1.x/password.html",
    "revision": "5d8bf486da9d9d4018f05cde3e7ead25"
  },
  {
    "url": "views/1.x/recommend.html",
    "revision": "ef6358c17ed67748553153bfa17adf91"
  },
  {
    "url": "views/1.x/sidebar.html",
    "revision": "2e577b75c896ebf31c9a0ace99308d6e"
  },
  {
    "url": "views/1.x/syntax.html",
    "revision": "0389527a8ff3cef9ca9f6ccaf0db0eb9"
  },
  {
    "url": "views/1.x/themePicker.html",
    "revision": "cac928d76d883d394109357013055a9d"
  },
  {
    "url": "views/1.x/timeline.html",
    "revision": "c9fd81db97a0d296f7fbf2ccfa06c705"
  },
  {
    "url": "views/1.x/updatetoone.html",
    "revision": "2fede8f7be6a466c471ca4e90cea23b6"
  },
  {
    "url": "views/1.x/valine.html",
    "revision": "9693120940693a5a496429678080e7c3"
  },
  {
    "url": "views/other/about.html",
    "revision": "e1c14def8d87fb96a5bcfb409fd55535"
  },
  {
    "url": "views/other/deploy.html",
    "revision": "793ce143d190fd74802c48100ff7dbc2"
  },
  {
    "url": "views/other/develop.html",
    "revision": "bfd11670827ca1f84a0732682e7e7e10"
  },
  {
    "url": "views/other/domain.html",
    "revision": "2acd5d27547eaa610ed9399a26d89ff9"
  },
  {
    "url": "views/other/donate.html",
    "revision": "f0852b51953e2bcf99a6d81c55b4b1f1"
  },
  {
    "url": "views/other/github-actions-secret-key.html",
    "revision": "d87443185eecfca4cedd80d1ca72dfcb"
  },
  {
    "url": "views/other/github-actions.html",
    "revision": "75bc68cd8dc130055071b27808724dd0"
  },
  {
    "url": "views/other/notice.html",
    "revision": "4709559bc5fd322937acf9970828f474"
  },
  {
    "url": "views/other/one-year-old.html",
    "revision": "1b9ad17d080ad6eb3f0b441562172a3e"
  },
  {
    "url": "views/other/question.html",
    "revision": "b8ce6deb0c36215e024293854323fc5b"
  },
  {
    "url": "views/other/recommend.html",
    "revision": "0c5cf54676ee9201a339c5b70af443df"
  },
  {
    "url": "views/other/theme-example.html",
    "revision": "dc9ff1e3895956f2f7d6f639916a3c65"
  },
  {
    "url": "views/other/valine-admin.html",
    "revision": "a76e15a551397c228b4cb7701c6731de"
  },
  {
    "url": "views/plugins/backToTop.html",
    "revision": "95fc13ab3232448f5eee5f658f307819"
  },
  {
    "url": "views/plugins/bgmPlayer.html",
    "revision": "3cee8c38b22544a05f6baa4635a25adb"
  },
  {
    "url": "views/plugins/comments.html",
    "revision": "336379851b9ff958cca7c9720ae32ff2"
  },
  {
    "url": "views/plugins/extractCode.html",
    "revision": "c4f3e68cf01c13501043f9063d054133"
  },
  {
    "url": "views/plugins/ga.html",
    "revision": "5f3a896818d7bf746658700ed811215c"
  },
  {
    "url": "views/plugins/index.html",
    "revision": "bd99fc15417c032979a36a5bcd61a5c4"
  },
  {
    "url": "views/plugins/kanbanniang.html",
    "revision": "82fb232c08e926e8064788a9cd0b69a1"
  },
  {
    "url": "views/plugins/loadingPage.html",
    "revision": "eb19496ca6eb067d7d70e3e03a9733d9"
  },
  {
    "url": "views/plugins/pagation.html",
    "revision": "463f389001c39e3ff3894b5ac66f8646"
  },
  {
    "url": "views/plugins/rss.html",
    "revision": "7a601298fccdb8dba6d32d1f5d71a1f2"
  },
  {
    "url": "views/plugins/screenfull.html",
    "revision": "7de2b5d7d98a3c8a088de71feb7a90ed"
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
