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
    "url": "assets/js/29.2ecf0bf8.js",
    "revision": "ade906b02bb633a1f724923fdc2f8bca"
  },
  {
    "url": "assets/js/30.7174a2e4.js",
    "revision": "550e430b39784a567053017c25820de9"
  },
  {
    "url": "assets/js/31.621b3a34.js",
    "revision": "a414147a107db0d08372ae2154d9c46e"
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
    "url": "assets/js/39.8d4d2ef0.js",
    "revision": "02e0338549c732398715ec778a1e29aa"
  },
  {
    "url": "assets/js/40.f0f70805.js",
    "revision": "973ffa59eb9d1b85c4585b998744ef9d"
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
    "url": "assets/js/63.e75b2787.js",
    "revision": "ec706bd813f7d835b6385d875d46c568"
  },
  {
    "url": "assets/js/64.a6b4f441.js",
    "revision": "a9c4d718b37b5556ddba78f24e9b6ee8"
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
    "url": "assets/js/77.a3bbf352.js",
    "revision": "10faee2d757dd212db4c9394a77ac750"
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
    "url": "assets/js/80.1064a33a.js",
    "revision": "5808ac15d62c32b5579f1b57016ac3f3"
  },
  {
    "url": "assets/js/81.a065caa8.js",
    "revision": "210235053f92a46a159edb7662f7aa45"
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
    "url": "assets/js/87.eced71af.js",
    "revision": "af8b1dd170b6bcd91930ce1ef918f7b3"
  },
  {
    "url": "assets/js/88.a7480692.js",
    "revision": "d6dee7c3065b684e1aa1a9274826afb1"
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
    "url": "assets/js/app.86854f74.js",
    "revision": "975689ca7a9071458b54833213200f59"
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
    "revision": "19f67d64797bf773d39207be3984ed74"
  },
  {
    "url": "categories/index.html",
    "revision": "fc874c04f0a6a30257c5e943e5e9fd1b"
  },
  {
    "url": "en/index.html",
    "revision": "725ee612946ffb5952254f2209321d93"
  },
  {
    "url": "en/views/1.x/abstract.html",
    "revision": "bd42e40160e75be1ef8131efaedb3ad2"
  },
  {
    "url": "en/views/1.x/blog.html",
    "revision": "342edfab8bf248184959602b19be937e"
  },
  {
    "url": "en/views/1.x/configJs.html",
    "revision": "5eb467d9cbfbd8fbf8d345d2e759aa8c"
  },
  {
    "url": "en/views/1.x/customStyleAndScript.html",
    "revision": "f4500a7fcf86cc0470d82d5ec0969566"
  },
  {
    "url": "en/views/1.x/frontMatter.html",
    "revision": "81fdac0e2a2797a288f064156e51074d"
  },
  {
    "url": "en/views/1.x/ga.html",
    "revision": "5209daa504fcde9d892ea1efa04ad2cb"
  },
  {
    "url": "en/views/1.x/home.html",
    "revision": "325ee5fca5b04a5dfd91017805d13c7d"
  },
  {
    "url": "en/views/1.x/index.html",
    "revision": "e367759bc7a26bb2a0434422e0b10c04"
  },
  {
    "url": "en/views/1.x/installUse.html",
    "revision": "1bf11015d1c8531789b55fe8dc831821"
  },
  {
    "url": "en/views/1.x/local.html",
    "revision": "460186be224f80d7ae68f4da95acae86"
  },
  {
    "url": "en/views/1.x/mode.html",
    "revision": "84b808e55b1a0f63833007ff13a91b0e"
  },
  {
    "url": "en/views/1.x/notfound.html",
    "revision": "5e18cb1022dc3d671bbdfea8b01d20c7"
  },
  {
    "url": "en/views/1.x/password.html",
    "revision": "de6ebb3aa311b5fb6ddfdca7df5843a5"
  },
  {
    "url": "en/views/1.x/recommend.html",
    "revision": "ec8d8ae09c5cc5edf1d0c35b733e8615"
  },
  {
    "url": "en/views/1.x/sidebar.html",
    "revision": "7541445e0d68cddc28526b1ea3036192"
  },
  {
    "url": "en/views/1.x/syntax.html",
    "revision": "f72ef64c342a9b55ca7b6fe6813f33a2"
  },
  {
    "url": "en/views/1.x/themePicker.html",
    "revision": "49235a04af2f5eae34218fa2d3f20820"
  },
  {
    "url": "en/views/1.x/timeline.html",
    "revision": "a8a307964b7917e6614c4ae05619bf92"
  },
  {
    "url": "en/views/1.x/updatetoone.html",
    "revision": "fa6b1d0fabdb459db4357515d3d07a64"
  },
  {
    "url": "en/views/1.x/valine.html",
    "revision": "2b8ce7d6325d685113a740e81269d906"
  },
  {
    "url": "en/views/other/about.html",
    "revision": "e9f83cab060687c7bb7ceca68586aef7"
  },
  {
    "url": "en/views/other/notice.html",
    "revision": "71c6901cf072ccd5fe8efab3f65917d7"
  },
  {
    "url": "en/views/other/question.html",
    "revision": "6cb898fedf73093f1fbd1ca0c08b80bd"
  },
  {
    "url": "en/views/other/theme-example.html",
    "revision": "a285abc41145708bc0e098e8fafd9164"
  },
  {
    "url": "en/views/plugins/backToTop.html",
    "revision": "3abd4635cbbcdb490f90bfc79e96fa71"
  },
  {
    "url": "en/views/plugins/bgmPlayer.html",
    "revision": "d4a59fac1b95cb79bed4085244007ee9"
  },
  {
    "url": "en/views/plugins/comments.html",
    "revision": "64dbf63046aad754934e5d3aceaa1c2f"
  },
  {
    "url": "en/views/plugins/extractCode.html",
    "revision": "d10ed296ceb5be85e5da6a28c15e9681"
  },
  {
    "url": "en/views/plugins/ga.html",
    "revision": "7e624ff8582f65b10ad95d46187d16ac"
  },
  {
    "url": "en/views/plugins/index.html",
    "revision": "824a9b6374d3e0dabe35d2aa402d6f66"
  },
  {
    "url": "en/views/plugins/kanbanniang.html",
    "revision": "b3921a75ca35f35449bb36f755344f8a"
  },
  {
    "url": "en/views/plugins/loadingPage.html",
    "revision": "844c3f73eb77b32c21c3ab0b6c5ef825"
  },
  {
    "url": "en/views/plugins/pagation.html",
    "revision": "f9b07b03be550bb316670ad9d8afe66a"
  },
  {
    "url": "en/views/plugins/rss.html",
    "revision": "a556a1cc996e7c1d5a05cc6cfcfd15f1"
  },
  {
    "url": "en/views/plugins/screenfull.html",
    "revision": "d9b574b9d9634147c6f56f08a5b5d1e6"
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
    "revision": "f6e3a23a0279c8a7c29b8a58cd2cd9f8"
  },
  {
    "url": "tag/index.html",
    "revision": "d244f272c4badbf82565d79c4cee021a"
  },
  {
    "url": "tags/Github Actions/index.html",
    "revision": "9bdf0b6f6ee809795adf4846712f89e5"
  },
  {
    "url": "tags/Secret Key/index.html",
    "revision": "62fba4ce73dc047b926e08d2d5445e98"
  },
  {
    "url": "tags/VuePress/index.html",
    "revision": "faad7f0f04d5fffb2ea2f539f7392e78"
  },
  {
    "url": "tags/博客/index.html",
    "revision": "a64b28e19bb65d8c9f836a9d708ea9f5"
  },
  {
    "url": "timeline/index.html",
    "revision": "fa71988c8c4fd8070c56f3b5fcf5f64a"
  },
  {
    "url": "views/0.x/abstract.html",
    "revision": "7543f6446771b85d288d2c80f4ccd119"
  },
  {
    "url": "views/0.x/category.html",
    "revision": "b50eb40f3e00d5b5725b641c5c52b9ba"
  },
  {
    "url": "views/0.x/configJs.html",
    "revision": "e7f34fd4298e45fd952df2789558a7b1"
  },
  {
    "url": "views/0.x/home.html",
    "revision": "6cb34abf004dcd672898dabac6d49cb2"
  },
  {
    "url": "views/0.x/index.html",
    "revision": "889273c3646812c8dc7252ef01d4d67f"
  },
  {
    "url": "views/0.x/installUse.html",
    "revision": "c1d2c8da9fddd8ab52ba15941e0afb6b"
  },
  {
    "url": "views/0.x/password.html",
    "revision": "548b4523dccd7cd56ed214270812cfe9"
  },
  {
    "url": "views/0.x/tag.html",
    "revision": "2b59e1ab9756bdb9148c73d30ea04d18"
  },
  {
    "url": "views/0.x/timeline.html",
    "revision": "c53aa469f1c17ed972aeae75e57c9bbd"
  },
  {
    "url": "views/0.x/valine.html",
    "revision": "6561b4a86114bec9664444a27f0d86c2"
  },
  {
    "url": "views/1.x/abstract.html",
    "revision": "f5f59e2e06e3297140f5ec14c058d7db"
  },
  {
    "url": "views/1.x/blog.html",
    "revision": "6a0cbf2c9ed4ebd530bcc3d542ed1eb1"
  },
  {
    "url": "views/1.x/configJs.html",
    "revision": "2164e16bfc9d439c92c19dde89191183"
  },
  {
    "url": "views/1.x/customStyleAndScript.html",
    "revision": "e3479f4d87e492ad138cdc4122e84dbf"
  },
  {
    "url": "views/1.x/frontMatter.html",
    "revision": "c379b88f8cf9f6e62c148440ac94edb1"
  },
  {
    "url": "views/1.x/ga.html",
    "revision": "cd9c893aa6684f9c9f2cf1af72703d43"
  },
  {
    "url": "views/1.x/home.html",
    "revision": "661c98d6e23f73e4e0391a4c793a585a"
  },
  {
    "url": "views/1.x/index.html",
    "revision": "0f51d03032fa3110d67ba9034879217e"
  },
  {
    "url": "views/1.x/installUse.html",
    "revision": "ea513bf752b55d7cd2d6e0932308aa04"
  },
  {
    "url": "views/1.x/local.html",
    "revision": "2b36100366ed6b63f029ef31bd3304d4"
  },
  {
    "url": "views/1.x/mode.html",
    "revision": "8bd7a3571ffaaace96a274bd0bf2e2b9"
  },
  {
    "url": "views/1.x/notfound.html",
    "revision": "e88185daf40702455adfcb93e9b036b9"
  },
  {
    "url": "views/1.x/password.html",
    "revision": "715d3e8d0a304a670ea2acd10dde821f"
  },
  {
    "url": "views/1.x/recommend.html",
    "revision": "5aa7946571feec8ae8a245944d6f70a7"
  },
  {
    "url": "views/1.x/sidebar.html",
    "revision": "90fb80a54644388339e6e82607fb4930"
  },
  {
    "url": "views/1.x/syntax.html",
    "revision": "bf610ee5af17f93afcb2b5d8f6c9f1b2"
  },
  {
    "url": "views/1.x/themePicker.html",
    "revision": "3a134249ecd99fdf1d99a3b409af939f"
  },
  {
    "url": "views/1.x/timeline.html",
    "revision": "1272904f9f429ece4ee6af34091facc2"
  },
  {
    "url": "views/1.x/updatetoone.html",
    "revision": "89a31ad26353baf16e18ca2a82bece65"
  },
  {
    "url": "views/1.x/valine.html",
    "revision": "768bbf1fdd89f12d0a14d796f70ac19b"
  },
  {
    "url": "views/other/about.html",
    "revision": "493d3adf4e3c3b56d5c8eaa9e1d0376c"
  },
  {
    "url": "views/other/deploy.html",
    "revision": "1b21ad8d7f9df8c090e65125658b20ee"
  },
  {
    "url": "views/other/develop.html",
    "revision": "4e231b94497b639bb9f3354895ca019f"
  },
  {
    "url": "views/other/domain.html",
    "revision": "cce183b0675b20832a74b78d20070d91"
  },
  {
    "url": "views/other/donate.html",
    "revision": "a231e68ac7dd7589f3030f802a6c05c8"
  },
  {
    "url": "views/other/github-actions-secret-key.html",
    "revision": "0ab0910d5c2ef53a08a8eb0c1ed877f5"
  },
  {
    "url": "views/other/github-actions.html",
    "revision": "787a087cc823beb63f676060143ba215"
  },
  {
    "url": "views/other/notice.html",
    "revision": "c544c49afd5d427c67c8d7469c5161ea"
  },
  {
    "url": "views/other/one-year-old.html",
    "revision": "b3bca31d8aa19d089c121d229dd70f87"
  },
  {
    "url": "views/other/question.html",
    "revision": "e8b6b85b390a850dabdc387176fa3cfa"
  },
  {
    "url": "views/other/recommend.html",
    "revision": "7deb3ce1156760bf97e6a8b8d1a42ffd"
  },
  {
    "url": "views/other/theme-example.html",
    "revision": "f4cda2834a2119d56bb246da0367bf8b"
  },
  {
    "url": "views/other/valine-admin.html",
    "revision": "f16caffc846bd7f8903e8fef6d702574"
  },
  {
    "url": "views/plugins/backToTop.html",
    "revision": "e198c090e4b9fe29cdffeb152da8f48d"
  },
  {
    "url": "views/plugins/bgmPlayer.html",
    "revision": "46a37e1d8547f94deb0ba9deee213680"
  },
  {
    "url": "views/plugins/comments.html",
    "revision": "15ebde4d41445ddfaab0e84f693b2f44"
  },
  {
    "url": "views/plugins/extractCode.html",
    "revision": "b023eb889d2e498e7dc67ff705c2337b"
  },
  {
    "url": "views/plugins/ga.html",
    "revision": "5f8a85af96cc415debb05523fbb916c3"
  },
  {
    "url": "views/plugins/index.html",
    "revision": "8a6c820e9f4e801a78e3b4adcd29a6c2"
  },
  {
    "url": "views/plugins/kanbanniang.html",
    "revision": "277c25c505f48cf04dbc2cdd8d7d4ccd"
  },
  {
    "url": "views/plugins/loadingPage.html",
    "revision": "e5adb2d4d7ae51d638b3b9da8b9dcd09"
  },
  {
    "url": "views/plugins/pagation.html",
    "revision": "1bb3f9fff83352b265052ab6af61d716"
  },
  {
    "url": "views/plugins/rss.html",
    "revision": "f39d01c34655bef165a56daa8b22f85c"
  },
  {
    "url": "views/plugins/screenfull.html",
    "revision": "de1cb1eb54f4f76fd7bbc15bb9dc11b6"
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
