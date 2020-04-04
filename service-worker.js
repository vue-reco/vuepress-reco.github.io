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
    "url": "assets/js/100.cc71fda3.js",
    "revision": "c84e0123c002fdfb473b06123496d03c"
  },
  {
    "url": "assets/js/101.3ae6f9d8.js",
    "revision": "5bf8daa07cb21a1ea343f54aa480e593"
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
    "url": "assets/js/106.7964fac1.js",
    "revision": "230f307b50f51d6b12bbf324cd1755ed"
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
    "url": "assets/js/26.fe17db53.js",
    "revision": "901bc48741589a04f690ed63c1f7c93b"
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
    "url": "assets/js/32.538de7a8.js",
    "revision": "93bd86291ebb46fe8dce16431aa229e2"
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
    "url": "assets/js/36.c88d2a10.js",
    "revision": "a7262b219e6931172a204f9c8b12f954"
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
    "url": "assets/js/39.83241603.js",
    "revision": "a1507f722fb7915e179c6411e21ef688"
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
    "url": "assets/js/46.d89f7963.js",
    "revision": "cd55f4e6bdfe56644e77e9a708c2d1dc"
  },
  {
    "url": "assets/js/47.da0286f0.js",
    "revision": "893d2912ad8740d341334ff2992651e3"
  },
  {
    "url": "assets/js/48.be8e86d9.js",
    "revision": "04b44e14da8ab861b24208b20e1a7d74"
  },
  {
    "url": "assets/js/49.a7468d44.js",
    "revision": "3bd60d8d346e92a851c6c76bfafb5ed1"
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
    "url": "assets/js/6.751ddf64.js",
    "revision": "512d2c2b8178195b111682f3eb5d99e2"
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
    "url": "assets/js/66.1602fadd.js",
    "revision": "eb6e8f5ca077a1de9bd57f94efa47a45"
  },
  {
    "url": "assets/js/67.d17a46db.js",
    "revision": "86d0731eaa4dd102b4f025bcba6a3014"
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
    "url": "assets/js/72.8a87da74.js",
    "revision": "2dc306397467b34c53d7ad3525642cda"
  },
  {
    "url": "assets/js/73.06fe3eb2.js",
    "revision": "35cbd0800eb81703abce60ddcf351650"
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
    "url": "assets/js/78.f471ba31.js",
    "revision": "f7d41b3adc237cda5665890ab6ea3984"
  },
  {
    "url": "assets/js/79.58db2981.js",
    "revision": "2a1ec6a76071b4c2aebd9dd177d0e035"
  },
  {
    "url": "assets/js/8.a54a47b8.js",
    "revision": "2270efa70fdf3d6c11e27efafdac5529"
  },
  {
    "url": "assets/js/80.1064a33a.js",
    "revision": "5808ac15d62c32b5579f1b57016ac3f3"
  },
  {
    "url": "assets/js/81.d6cb9143.js",
    "revision": "47390aa22a71dc01184d50375a79feb8"
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
    "url": "assets/js/94.00948108.js",
    "revision": "522cff13998af30e63b83d88a7038752"
  },
  {
    "url": "assets/js/95.23c6a091.js",
    "revision": "3cc2b42cb616a65f7944f732e3763ad7"
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
    "url": "assets/js/app.34dfbb0d.js",
    "revision": "8845ecdf8059ac16e2ad39ba5de75718"
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
    "revision": "08ce098d084604b0d2199451979f482e"
  },
  {
    "url": "categories/index.html",
    "revision": "4d9876a175da52d24f1f746471dcacad"
  },
  {
    "url": "en/index.html",
    "revision": "97a57fa54c987398965a54755ca1c8df"
  },
  {
    "url": "en/views/1.x/abstract.html",
    "revision": "41e7f109287a147e984889fcfe93c830"
  },
  {
    "url": "en/views/1.x/blog.html",
    "revision": "81055e8d1dddd916f9ad54c8d05bb065"
  },
  {
    "url": "en/views/1.x/configJs.html",
    "revision": "83aff8631a6699da2d882799f1eb43cf"
  },
  {
    "url": "en/views/1.x/customStyleAndScript.html",
    "revision": "37b1cc647f31fdbf70e13abf789645b8"
  },
  {
    "url": "en/views/1.x/frontMatter.html",
    "revision": "8b379f92f0f9e5061217bfc0d6493193"
  },
  {
    "url": "en/views/1.x/ga.html",
    "revision": "0e8ca73940a5b0db5003f94f23dfdace"
  },
  {
    "url": "en/views/1.x/home.html",
    "revision": "cd991a56b305c9460d00b81b48787439"
  },
  {
    "url": "en/views/1.x/index.html",
    "revision": "e326c711bacd7fba18baf43b3c797616"
  },
  {
    "url": "en/views/1.x/installUse.html",
    "revision": "a752fbb2aa7d365d7e92e42ff11ea2ba"
  },
  {
    "url": "en/views/1.x/local.html",
    "revision": "9d40d856d2364581dbd1e6947973456c"
  },
  {
    "url": "en/views/1.x/mode.html",
    "revision": "3d2a487bc5be2ed28923c476ed4117ae"
  },
  {
    "url": "en/views/1.x/notfound.html",
    "revision": "28251d6d99385eb0c773621d6276d184"
  },
  {
    "url": "en/views/1.x/password.html",
    "revision": "113972fdb52665f0e1448eaa71eff9e3"
  },
  {
    "url": "en/views/1.x/recommend.html",
    "revision": "23e2137dd2c6aeae565bcfa1541cc90e"
  },
  {
    "url": "en/views/1.x/sidebar.html",
    "revision": "0a6643206468b48bf0b96fa3907f7fb1"
  },
  {
    "url": "en/views/1.x/syntax.html",
    "revision": "17c0cfbe6c54b2dc061aa992de93574f"
  },
  {
    "url": "en/views/1.x/themePicker.html",
    "revision": "f7503f07b495ecf036ab3e629c7aa044"
  },
  {
    "url": "en/views/1.x/timeline.html",
    "revision": "cc9976d1370048803b3744d040a1001f"
  },
  {
    "url": "en/views/1.x/updatetoone.html",
    "revision": "eb1aa5ea21bc644d53879687992a906d"
  },
  {
    "url": "en/views/1.x/valine.html",
    "revision": "5bd93c8675c34e9db0fcc84f3f3b9f08"
  },
  {
    "url": "en/views/other/about.html",
    "revision": "373a6484512b9761f1446e58b460a106"
  },
  {
    "url": "en/views/other/notice.html",
    "revision": "ad1bf349818416461dd2b5754f56e6fc"
  },
  {
    "url": "en/views/other/question.html",
    "revision": "e7a038b0ef3b83135cee80194967e5ad"
  },
  {
    "url": "en/views/other/theme-example.html",
    "revision": "4e3169dc1e10c97c5fcbbfc06498dc00"
  },
  {
    "url": "en/views/plugins/backToTop.html",
    "revision": "0ed1770fbc215041d163609b12c0d29c"
  },
  {
    "url": "en/views/plugins/bgmPlayer.html",
    "revision": "0499f480080c662d11277aba9eb67e1f"
  },
  {
    "url": "en/views/plugins/comments.html",
    "revision": "4fc879c87a8464140ab04c5dfdcb68be"
  },
  {
    "url": "en/views/plugins/extractCode.html",
    "revision": "ed09762a51cc12ff8d17cd25de52172c"
  },
  {
    "url": "en/views/plugins/ga.html",
    "revision": "041777ab7fde5fad4274950e789b0850"
  },
  {
    "url": "en/views/plugins/index.html",
    "revision": "5e3722a628468d2ffe1e5a5c40e18fe7"
  },
  {
    "url": "en/views/plugins/kanbanniang.html",
    "revision": "b201c8723117a093a66a4a49d0e9719b"
  },
  {
    "url": "en/views/plugins/loadingPage.html",
    "revision": "6328fbfb97ccce1efcfc4ab229f9339a"
  },
  {
    "url": "en/views/plugins/pagation.html",
    "revision": "f7b59f691511456c35559483da256f6e"
  },
  {
    "url": "en/views/plugins/rss.html",
    "revision": "0b381b6d532762017ea3c71de4ce00ca"
  },
  {
    "url": "en/views/plugins/screenfull.html",
    "revision": "2b9330110f5ff7235cb1cee6a37812a8"
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
    "revision": "fbc4acd98c6485e0528d5fc2cee92b28"
  },
  {
    "url": "tag/index.html",
    "revision": "af132ef597ba68789f3d06cd68443130"
  },
  {
    "url": "tags/Github Actions/index.html",
    "revision": "788e71018ebe6c09c0a238663646b07f"
  },
  {
    "url": "tags/Secret Key/index.html",
    "revision": "7d133d897472e601ed4c10c4bf3c318f"
  },
  {
    "url": "tags/VuePress/index.html",
    "revision": "df0b0850f6fb62779fc07da49c589e03"
  },
  {
    "url": "tags/博客/index.html",
    "revision": "6b7337a12e2ec39b73d231cb2b8c4524"
  },
  {
    "url": "timeline/index.html",
    "revision": "63ca520fa193eca6b04f0eed3ed20ee0"
  },
  {
    "url": "views/0.x/abstract.html",
    "revision": "3352873855918d79b8c797ba5f1fd5f7"
  },
  {
    "url": "views/0.x/category.html",
    "revision": "f85031998e78d487722cb0b1dcbc4c49"
  },
  {
    "url": "views/0.x/configJs.html",
    "revision": "36e883f6fe4392e7d2860f3538944bcb"
  },
  {
    "url": "views/0.x/home.html",
    "revision": "60b514b85e0ee24fd8a158ec464b16d9"
  },
  {
    "url": "views/0.x/index.html",
    "revision": "d8415b6e41c6aa58ac7d482e81d55502"
  },
  {
    "url": "views/0.x/installUse.html",
    "revision": "be2503ab4aafa7f206de91c7e82d1bbc"
  },
  {
    "url": "views/0.x/password.html",
    "revision": "0d40ebacc382ae708dcfb8e958d3db09"
  },
  {
    "url": "views/0.x/tag.html",
    "revision": "a369dc383f083274d9a1e2950f3711d4"
  },
  {
    "url": "views/0.x/timeline.html",
    "revision": "1ec265b4b985ed05760bda99bc6f4747"
  },
  {
    "url": "views/0.x/valine.html",
    "revision": "7d32b8fb6f435360cc1adb43e1a5ebd7"
  },
  {
    "url": "views/1.x/abstract.html",
    "revision": "e22cc69a37948a2f377ebb59df3e5188"
  },
  {
    "url": "views/1.x/blog.html",
    "revision": "2af17048b86a809bac937bcf64c75117"
  },
  {
    "url": "views/1.x/configJs.html",
    "revision": "3e596b2c6a75eea80df2e80cd485d0f2"
  },
  {
    "url": "views/1.x/customStyleAndScript.html",
    "revision": "8819fbb6b4f3c93db020409bebf9e4d7"
  },
  {
    "url": "views/1.x/frontMatter.html",
    "revision": "16603d327d0bd1b58ded81844d25f087"
  },
  {
    "url": "views/1.x/ga.html",
    "revision": "348c12f8cff811c81942dccd6215dcec"
  },
  {
    "url": "views/1.x/home.html",
    "revision": "8bda537bb5b316c219294f4b90038e33"
  },
  {
    "url": "views/1.x/index.html",
    "revision": "3fb993d18b6efc7e42e063c9fcc38364"
  },
  {
    "url": "views/1.x/installUse.html",
    "revision": "12083405c8263b54d91580a548989b6f"
  },
  {
    "url": "views/1.x/local.html",
    "revision": "28d8165944a123a8f114b47ddf45c805"
  },
  {
    "url": "views/1.x/mode.html",
    "revision": "421feb7a51ed87abdeb2515f47848fcd"
  },
  {
    "url": "views/1.x/notfound.html",
    "revision": "f4a3750e6e2371f74c591de46d44ff74"
  },
  {
    "url": "views/1.x/password.html",
    "revision": "0b35f8dc127f490039024ee4ecfeb4aa"
  },
  {
    "url": "views/1.x/recommend.html",
    "revision": "5d21b6df1fc72c0687ddbfb5a4270c63"
  },
  {
    "url": "views/1.x/sidebar.html",
    "revision": "3ca35a54db92f85c2483249b4cea8132"
  },
  {
    "url": "views/1.x/syntax.html",
    "revision": "bdff2348e56c6ca0a669bb25e5679968"
  },
  {
    "url": "views/1.x/themePicker.html",
    "revision": "fbd8ea4c4dcb84b34df385b4885872c6"
  },
  {
    "url": "views/1.x/timeline.html",
    "revision": "c51fbc6966b8e3d1ae6df55696fc15ad"
  },
  {
    "url": "views/1.x/updatetoone.html",
    "revision": "fe77a769e3a86a0b8b16df100adc020b"
  },
  {
    "url": "views/1.x/valine.html",
    "revision": "350405d1ebb6bba9d36f642fc3e9cd7c"
  },
  {
    "url": "views/other/about.html",
    "revision": "3ece38bfe62ae618d97048d498a79a02"
  },
  {
    "url": "views/other/deploy.html",
    "revision": "6db745da5682ab862ed01ef9604982b1"
  },
  {
    "url": "views/other/develop.html",
    "revision": "57b47dd5876e7d638a3a583ec239ce61"
  },
  {
    "url": "views/other/domain.html",
    "revision": "04c90ba2d98f5b50fa5f3d1dbbcdf7d4"
  },
  {
    "url": "views/other/donate.html",
    "revision": "62ef73bf54ef432b1e404fb639032af3"
  },
  {
    "url": "views/other/github-actions-secret-key.html",
    "revision": "f91661f8275ffb61dbc15a375f01ace2"
  },
  {
    "url": "views/other/github-actions.html",
    "revision": "077ba3afc6953f3802b3101fb1fafc7a"
  },
  {
    "url": "views/other/notice.html",
    "revision": "5e70bd8bc7c489fccffca8f7431de227"
  },
  {
    "url": "views/other/one-year-old.html",
    "revision": "a7cdc0678188ae2c468bb47f4f1aa62d"
  },
  {
    "url": "views/other/question.html",
    "revision": "c9be5bb94a3815d2c6dcf38ee5f43b0d"
  },
  {
    "url": "views/other/recommend.html",
    "revision": "307f6fe6f71478398a00250e539f7c53"
  },
  {
    "url": "views/other/theme-example.html",
    "revision": "5def42d43ba6e61730644d5845bd4415"
  },
  {
    "url": "views/other/valine-admin.html",
    "revision": "c47059298277e8843a5c50228f6a1df5"
  },
  {
    "url": "views/plugins/backToTop.html",
    "revision": "f03f80d81cd766a25714c867044cb2a4"
  },
  {
    "url": "views/plugins/bgmPlayer.html",
    "revision": "5ff94077d4f18d91c2d7bcd940d29ab0"
  },
  {
    "url": "views/plugins/comments.html",
    "revision": "86496b0eda271c500a53426b33bc6a43"
  },
  {
    "url": "views/plugins/extractCode.html",
    "revision": "e271c5a07a01e17d43e65d474571dc9f"
  },
  {
    "url": "views/plugins/ga.html",
    "revision": "d541ccf7ac5c4b02d99514888fe004bb"
  },
  {
    "url": "views/plugins/index.html",
    "revision": "fa7374a72b36caa8801c6f13b80e3b7a"
  },
  {
    "url": "views/plugins/kanbanniang.html",
    "revision": "1967f235b5ff6ad8d303c2712e426b24"
  },
  {
    "url": "views/plugins/loadingPage.html",
    "revision": "090b19b6f43877703a945d9843a7b5f3"
  },
  {
    "url": "views/plugins/pagation.html",
    "revision": "3d4333ea3cef4745ef39b60fa84d9504"
  },
  {
    "url": "views/plugins/rss.html",
    "revision": "99d21815447af0b72740d527fa1e2df5"
  },
  {
    "url": "views/plugins/screenfull.html",
    "revision": "39294166b57c359dcaf0f97479ebc874"
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
