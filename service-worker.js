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
    "revision": "f9b11bb365210117335477fe977327f4"
  },
  {
    "url": "alipay.png",
    "revision": "bca77f7cad38ac92553faaab2b575147"
  },
  {
    "url": "assets/css/0.styles.7ddd739f.css",
    "revision": "0ab76fe0e354d24d096c5b6b87a2f242"
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
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/bg.a382c67a.svg",
    "revision": "a382c67ad2cb860076c270502b258bb1"
  },
  {
    "url": "assets/img/bgm.52ef496c.png",
    "revision": "52ef496c6da155ea78b35a6a56f0300c"
  },
  {
    "url": "assets/img/bulletin-popover.967ff934.png",
    "revision": "967ff93480c2b764959e862487f874de"
  },
  {
    "url": "assets/img/darkBgm.4b951b61.png",
    "revision": "4b951b614825b06b4f765a5bf615d499"
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
    "url": "assets/js/1.aceff842.js",
    "revision": "c89c6c7b5bb5e4871feb139c1555d7b0"
  },
  {
    "url": "assets/js/10.67f147fb.js",
    "revision": "7360dcddc772fdf401904b179ba946e0"
  },
  {
    "url": "assets/js/100.cf6266e9.js",
    "revision": "d78bffbb3195005c5a60053b4711a9f0"
  },
  {
    "url": "assets/js/101.b4188b19.js",
    "revision": "b097227b7b3948ba3521938ec4639f2c"
  },
  {
    "url": "assets/js/102.59353e85.js",
    "revision": "466c9a3523e431d09c080e22f9075e5d"
  },
  {
    "url": "assets/js/103.55e0f3ae.js",
    "revision": "a088039cf62b9b8d23abca565fe748f1"
  },
  {
    "url": "assets/js/104.6e96aef2.js",
    "revision": "41af8bc95899918d2a8063fcac2ca441"
  },
  {
    "url": "assets/js/105.e5f62f8a.js",
    "revision": "5b10f6f20dddd0e8ea54b40862f11a16"
  },
  {
    "url": "assets/js/106.cd72bd65.js",
    "revision": "510b6ac3e40a7f512a2ded7b7f692e43"
  },
  {
    "url": "assets/js/107.dc517f7c.js",
    "revision": "66aef9653e457eef81e99b709af8473c"
  },
  {
    "url": "assets/js/108.15b859dd.js",
    "revision": "b5350c361d47571ec95d680467356ab4"
  },
  {
    "url": "assets/js/109.6f84b571.js",
    "revision": "f3b12bf1eb9ec0a216b544771a31f9fe"
  },
  {
    "url": "assets/js/11.71a76bbb.js",
    "revision": "68944761ccdd9f048d0a16430369c8a1"
  },
  {
    "url": "assets/js/110.6b28e2e2.js",
    "revision": "849d0b0edbed05aee51bf65530af8bb3"
  },
  {
    "url": "assets/js/111.84ba488d.js",
    "revision": "d9c32fb5105395efd9a5435f75074e42"
  },
  {
    "url": "assets/js/112.7ac3aa2a.js",
    "revision": "6d4fa53b8cce03967a10d0176995e87e"
  },
  {
    "url": "assets/js/113.6300d610.js",
    "revision": "067c657cccbf21f9ceabe2243a79c11a"
  },
  {
    "url": "assets/js/114.c7291998.js",
    "revision": "04b9271017a1408ae9e582d01b9a607a"
  },
  {
    "url": "assets/js/12.76475ad5.js",
    "revision": "96b2e97640135aa2d8e9215f0451162c"
  },
  {
    "url": "assets/js/13.dabf7b34.js",
    "revision": "de29a6a43eaa5d4309ee821d60886096"
  },
  {
    "url": "assets/js/14.8c45881b.js",
    "revision": "7b8ed9d1243c0307bfa17d82e2b24e70"
  },
  {
    "url": "assets/js/15.cff6219b.js",
    "revision": "70052dedc75e6de162fa07f98a806728"
  },
  {
    "url": "assets/js/16.50a37d73.js",
    "revision": "da2b3f2b2932db617cf5ef8235d45b6f"
  },
  {
    "url": "assets/js/17.5a7f8b8c.js",
    "revision": "729b84d6b899f531f5ab733fae33790b"
  },
  {
    "url": "assets/js/18.4c03bd0f.js",
    "revision": "0d803398949b91deb5c62e32b87c06bf"
  },
  {
    "url": "assets/js/19.fce92168.js",
    "revision": "d964b82844938887e329a45aab7c80d1"
  },
  {
    "url": "assets/js/2.0425572a.js",
    "revision": "9d66b650f872fd062ba8bde44031c024"
  },
  {
    "url": "assets/js/20.d742e727.js",
    "revision": "930dca0738645f94b8e18ff024ac80fd"
  },
  {
    "url": "assets/js/21.756e824a.js",
    "revision": "e3094698e67be5b5209106a7a1fc91c2"
  },
  {
    "url": "assets/js/22.932311ac.js",
    "revision": "91c4193663d26e15dee2365a00a645ca"
  },
  {
    "url": "assets/js/23.9c13cb80.js",
    "revision": "4885c37b44914b6b5b294f9795a40012"
  },
  {
    "url": "assets/js/24.20a99b6b.js",
    "revision": "cb3754dae68f13e748231269cab50f4f"
  },
  {
    "url": "assets/js/25.3b731eef.js",
    "revision": "61e88d97e5fc3318d6f91527ee425f32"
  },
  {
    "url": "assets/js/26.a71a4704.js",
    "revision": "e5b82a8ff0c960184370889d8bc7a7ec"
  },
  {
    "url": "assets/js/27.56ee8267.js",
    "revision": "80e068d8d85e4810d2a1b0e4e1e11970"
  },
  {
    "url": "assets/js/28.660d7fc0.js",
    "revision": "fd13d7777fd44b0cc6ad790c7af632cf"
  },
  {
    "url": "assets/js/29.1ca5f226.js",
    "revision": "f2d5338ce98397e5c73acf90f38e670b"
  },
  {
    "url": "assets/js/30.348619f7.js",
    "revision": "d8a3e11243b3948cdc470be5039d14a0"
  },
  {
    "url": "assets/js/31.b4cf105b.js",
    "revision": "b19a7cf1637426acbb2820768a5b4716"
  },
  {
    "url": "assets/js/32.cceaf346.js",
    "revision": "363d86c5ee9515aef4e4e5e50572e57f"
  },
  {
    "url": "assets/js/33.4c1d0486.js",
    "revision": "63832fd407192b48acaebb4ef6e045c0"
  },
  {
    "url": "assets/js/34.d4259054.js",
    "revision": "54cb5d5be94ca4c705d9196a9f570883"
  },
  {
    "url": "assets/js/35.ab22dc9d.js",
    "revision": "e1de7b68e6a2f02c98834e0910f8bf68"
  },
  {
    "url": "assets/js/36.6b324351.js",
    "revision": "e3f63c2fd2c5aa7e773ce19f0b4e8a9d"
  },
  {
    "url": "assets/js/37.e20a1906.js",
    "revision": "d6367fe0b0bb60677b1036e4c87b02d4"
  },
  {
    "url": "assets/js/38.fe20925e.js",
    "revision": "653cd11b8b7ff0e7881ca5eee9f6caa0"
  },
  {
    "url": "assets/js/39.4bbdb338.js",
    "revision": "1a974abf0bd01f4ff2ae4f383f1d638f"
  },
  {
    "url": "assets/js/40.d6a152a6.js",
    "revision": "8df847aff5437add49de1f5a6450b098"
  },
  {
    "url": "assets/js/41.1dd979af.js",
    "revision": "52848636fcaf2383f28d92079d8aee5e"
  },
  {
    "url": "assets/js/42.963a9bbc.js",
    "revision": "5a482ff5bb4e4c224b4c1bdc92a78191"
  },
  {
    "url": "assets/js/43.984c8148.js",
    "revision": "2ecfa32afc8aaf3d3700191c8d65d3d7"
  },
  {
    "url": "assets/js/44.97612129.js",
    "revision": "ec29793ef81efbb381c5cf69785a8e03"
  },
  {
    "url": "assets/js/45.21439ddf.js",
    "revision": "b571ae56784ba6fbea2f20577aff8771"
  },
  {
    "url": "assets/js/46.ab370b34.js",
    "revision": "768579d3558a50192883ee30f7e29355"
  },
  {
    "url": "assets/js/47.e91562fc.js",
    "revision": "e70df88392274ea705adc6c61f102981"
  },
  {
    "url": "assets/js/48.f7a4ef72.js",
    "revision": "6e2fdeb28017ed2b59c0eafc8b14d88d"
  },
  {
    "url": "assets/js/49.3904d76e.js",
    "revision": "ad27b45c8566d0fa26d834c78388e300"
  },
  {
    "url": "assets/js/50.a4753fbe.js",
    "revision": "5068c50c64ca75a380b63eca261a7ca8"
  },
  {
    "url": "assets/js/51.c8c6fadf.js",
    "revision": "97b58ce79400ff30474cd157c8dc041b"
  },
  {
    "url": "assets/js/52.20f56297.js",
    "revision": "99db03fdc25892736f8ec8f6157081a2"
  },
  {
    "url": "assets/js/53.dbb08c30.js",
    "revision": "711cd8241d06207252b79ba3bf4b378c"
  },
  {
    "url": "assets/js/54.d6d37ccf.js",
    "revision": "cce8b98bf35c3b7c47a0c8142a697a5b"
  },
  {
    "url": "assets/js/55.d961f400.js",
    "revision": "5b4218eddc031945426a7d36542e9485"
  },
  {
    "url": "assets/js/56.99bb305a.js",
    "revision": "589b84afd1f8e13c5225481ec166eee3"
  },
  {
    "url": "assets/js/57.c16518fb.js",
    "revision": "a175c292528c7b9cad7507d1555cba30"
  },
  {
    "url": "assets/js/58.2e81a78b.js",
    "revision": "013ea755660ceb244543cedafbd89ddd"
  },
  {
    "url": "assets/js/59.27a500bf.js",
    "revision": "fc8083885175038f1127bb8ada585aa2"
  },
  {
    "url": "assets/js/6.8ffba7c4.js",
    "revision": "6979b362806417684248c5655aa74e5d"
  },
  {
    "url": "assets/js/60.356b9bda.js",
    "revision": "62bf4f5b55529e5483453472dcfdda62"
  },
  {
    "url": "assets/js/61.bf706d16.js",
    "revision": "b2ce7f7bd5f0e1f4c784a61fd6d2d55b"
  },
  {
    "url": "assets/js/62.6e6676f8.js",
    "revision": "76936a42f4d57b5f564865bf05cd2c99"
  },
  {
    "url": "assets/js/63.ff2d555e.js",
    "revision": "6dd8f95a84d7cb4e77fbd6f075c5ee4e"
  },
  {
    "url": "assets/js/64.e47c5cff.js",
    "revision": "7d7fceee91352bbdc052f2dc67a357cc"
  },
  {
    "url": "assets/js/65.a397039a.js",
    "revision": "e304a5e94081958aa52d5470642cc6ee"
  },
  {
    "url": "assets/js/66.3d52e46e.js",
    "revision": "80f57bf7c5cbbca02825abbb144421f7"
  },
  {
    "url": "assets/js/67.50375adf.js",
    "revision": "226a59de30b9a162cc69410f84f8835d"
  },
  {
    "url": "assets/js/68.a61a83e0.js",
    "revision": "b20a715d5cebddb8b4c90ba4fe19de58"
  },
  {
    "url": "assets/js/69.ea4545d8.js",
    "revision": "695c2232cb66fd625834d79334dab36e"
  },
  {
    "url": "assets/js/7.e5079e9f.js",
    "revision": "24b4085aa07966cd0ffae523f67401a5"
  },
  {
    "url": "assets/js/70.5b36d479.js",
    "revision": "024b861cf637704324e91118e366d204"
  },
  {
    "url": "assets/js/71.26eef622.js",
    "revision": "19cfe88e22e529acdd4ca0a0898dfda4"
  },
  {
    "url": "assets/js/72.99776d72.js",
    "revision": "950b77f796c12a90b4deede2000e59b4"
  },
  {
    "url": "assets/js/73.bb49fc31.js",
    "revision": "bcc65fc8967557a5f126adcdc7afbe11"
  },
  {
    "url": "assets/js/74.d62ce268.js",
    "revision": "fcf849ced2d29c3935267e725740d4eb"
  },
  {
    "url": "assets/js/75.40bea377.js",
    "revision": "8da34e7edb3d3924ff61fa218546b57d"
  },
  {
    "url": "assets/js/76.e929e274.js",
    "revision": "b8e38bd8fbdac9ffabb6445521002fb0"
  },
  {
    "url": "assets/js/77.db386ad5.js",
    "revision": "3c4e7f71ed6af828124c7ae9d5f90ad4"
  },
  {
    "url": "assets/js/78.780619fe.js",
    "revision": "23dc7a53d98ae4c5bf8bc9bf1c789023"
  },
  {
    "url": "assets/js/79.58dfcf82.js",
    "revision": "245166fe14fb3ac478e698a904cef963"
  },
  {
    "url": "assets/js/8.5a6e1c55.js",
    "revision": "a02c19e633cece22c11afbf6fe211ddf"
  },
  {
    "url": "assets/js/80.cf982d89.js",
    "revision": "553c9c3a9e415a58c093645eea5c8d7e"
  },
  {
    "url": "assets/js/81.1d66deb5.js",
    "revision": "bde3d7376d74991632e8a0e345e22c4f"
  },
  {
    "url": "assets/js/82.fe7b3aa0.js",
    "revision": "bdf028f0911ba33981d3e8ddde247fdf"
  },
  {
    "url": "assets/js/83.6e264f17.js",
    "revision": "4dce148fd5c16cc1ba4c74e86e5e1de0"
  },
  {
    "url": "assets/js/84.fb6b8b66.js",
    "revision": "120f71d304a2c8d7ec481f6490704b5f"
  },
  {
    "url": "assets/js/85.32291bf7.js",
    "revision": "eeece5f11d66afbc2b375d325c33f878"
  },
  {
    "url": "assets/js/86.11c6c2af.js",
    "revision": "82a01a4643525990a1a5ad337af7ed7b"
  },
  {
    "url": "assets/js/87.b8711a19.js",
    "revision": "ea9f28247e50fe081a389da426541607"
  },
  {
    "url": "assets/js/88.1f50576a.js",
    "revision": "73c672e96d374b3255046e626c0a23bb"
  },
  {
    "url": "assets/js/89.7d4ea986.js",
    "revision": "8a40989c702b3920ccb60239edcdc47e"
  },
  {
    "url": "assets/js/9.8f17af75.js",
    "revision": "ab0cb7f7b7756c44f77c717e6357e196"
  },
  {
    "url": "assets/js/90.7c61af29.js",
    "revision": "abe63fbf7f2696339a0b46706911452c"
  },
  {
    "url": "assets/js/91.2f041641.js",
    "revision": "f0687e1c980d48111bea7c2fbccdeeba"
  },
  {
    "url": "assets/js/92.77261311.js",
    "revision": "3525f1726d698a1da397961f3231d38d"
  },
  {
    "url": "assets/js/93.0796e38e.js",
    "revision": "57bdf5d1d50970144f85c1692fbc4b5b"
  },
  {
    "url": "assets/js/94.164c0546.js",
    "revision": "0892b9cf4f8308db60f175c2f5e6e332"
  },
  {
    "url": "assets/js/95.8c945b74.js",
    "revision": "cd65744f765a07ad1a6a162879d78f6b"
  },
  {
    "url": "assets/js/96.3b4b2f3b.js",
    "revision": "276c824d261f410880060cb65b4134d7"
  },
  {
    "url": "assets/js/97.47a804e9.js",
    "revision": "715c0bf88b0eb96b4d11d6de0f9a409c"
  },
  {
    "url": "assets/js/98.d24551c6.js",
    "revision": "a06dd20c40272cb086fb7b8d838379ea"
  },
  {
    "url": "assets/js/99.9693b316.js",
    "revision": "58bfbe874be1b978dbdfb57654f326bc"
  },
  {
    "url": "assets/js/app.009c84f0.js",
    "revision": "de194bc51a30f4dfe646be1783ceb06c"
  },
  {
    "url": "assets/js/vendors~docsearch.a5095413.js",
    "revision": "7907ccdec490a0404ffe94c1368475c3"
  },
  {
    "url": "assets/js/vendors~flowchart.150dd161.js",
    "revision": "70f1236d4db3f3520ef5a7a730c4ccc9"
  },
  {
    "url": "blogImages/Leecason.png",
    "revision": "7c60fbffa793a1cb7dd2aacb913050b6"
  },
  {
    "url": "categories/blog/index.html",
    "revision": "2f000d19ca5d5b9e3e277572b537da33"
  },
  {
    "url": "categories/index.html",
    "revision": "c0ec3a457f44c118f6771007e53ff913"
  },
  {
    "url": "en/index.html",
    "revision": "392d28ece419182ae2bf82a1616a86a4"
  },
  {
    "url": "en/views/1.x/abstract.html",
    "revision": "6976a2480fae814c952c5a4e71762a4b"
  },
  {
    "url": "en/views/1.x/blog.html",
    "revision": "a9560e268f1f3cdc7a2095c753635265"
  },
  {
    "url": "en/views/1.x/codeTheme.html",
    "revision": "cfb559b1d0e584d5fba0da2a20e3d7b3"
  },
  {
    "url": "en/views/1.x/configJs.html",
    "revision": "7b31f19e82a524d28ceb49898f272de4"
  },
  {
    "url": "en/views/1.x/customStyleAndScript.html",
    "revision": "c48f55d7a9363b39bb07cb895bccc17f"
  },
  {
    "url": "en/views/1.x/frontMatter.html",
    "revision": "4bd520445f2540a493e0bca203086149"
  },
  {
    "url": "en/views/1.x/home.html",
    "revision": "8d32b24c2ca23b1f16d6e5af84812dc8"
  },
  {
    "url": "en/views/1.x/index.html",
    "revision": "6ab31b93b0fded8ca21792764e700e56"
  },
  {
    "url": "en/views/1.x/installUse.html",
    "revision": "028b8ff4e391ac5489b1e4146d218eac"
  },
  {
    "url": "en/views/1.x/local.html",
    "revision": "d6cfa310153093609e5c446c2edb6d95"
  },
  {
    "url": "en/views/1.x/mode.html",
    "revision": "39c70e41e6838e19a18728d6858f0b70"
  },
  {
    "url": "en/views/1.x/notfound.html",
    "revision": "69122d26d2480c746a9de1116346f879"
  },
  {
    "url": "en/views/1.x/password.html",
    "revision": "334cf409c4512c10505aa0a7401d22ee"
  },
  {
    "url": "en/views/1.x/recommend.html",
    "revision": "a3b10477607244d5a8fe3d2863f08ffa"
  },
  {
    "url": "en/views/1.x/sidebar.html",
    "revision": "65429bcabf96e45e0f577858a1ecb798"
  },
  {
    "url": "en/views/1.x/syntax.html",
    "revision": "799bf6a331c22d1657d1f967f63a53a1"
  },
  {
    "url": "en/views/1.x/timeline.html",
    "revision": "62d19c7c0d80d6812f5f84e85a3a2e83"
  },
  {
    "url": "en/views/1.x/updatetoone.html",
    "revision": "8e6aef4df964422de0bb531763f23ec1"
  },
  {
    "url": "en/views/1.x/valine.html",
    "revision": "c068e26a9405401816ef03429a82e60b"
  },
  {
    "url": "en/views/other/about.html",
    "revision": "ad1b410a60e59d0cd783176ab1b5b9e9"
  },
  {
    "url": "en/views/other/question.html",
    "revision": "7418be1526e3942dfb002c2caa30a134"
  },
  {
    "url": "en/views/other/theme-example.html",
    "revision": "80713b29fa5629db40bbad4a21fbb619"
  },
  {
    "url": "en/views/plugins/backToTop.html",
    "revision": "a80a34376af160fb6e9071d088cf93fd"
  },
  {
    "url": "en/views/plugins/bgmPlayer.html",
    "revision": "4e57245bec780b796e55065463f45a68"
  },
  {
    "url": "en/views/plugins/bulletinPopover.html",
    "revision": "148d2d6e51bcd89bc06e7aa591b8679e"
  },
  {
    "url": "en/views/plugins/comments.html",
    "revision": "270981e04f549beae1d8b93bc424fd9b"
  },
  {
    "url": "en/views/plugins/extractCode.html",
    "revision": "f047d4e3bf9f9ed69ade02126972d0d9"
  },
  {
    "url": "en/views/plugins/ga.html",
    "revision": "dd99d8062258febe2cea84c839d60252"
  },
  {
    "url": "en/views/plugins/index.html",
    "revision": "ffad0632206310b3077db3df43744a8a"
  },
  {
    "url": "en/views/plugins/kanbanniang.html",
    "revision": "2502750963f971467012a660eb32e74f"
  },
  {
    "url": "en/views/plugins/loadingPage.html",
    "revision": "a497a02ff7070b65a199f646767516db"
  },
  {
    "url": "en/views/plugins/pagation.html",
    "revision": "500acc658d9339321a9ac6f28d9b7336"
  },
  {
    "url": "en/views/plugins/rss.html",
    "revision": "463927db21d07e63f6ac1c26c7fc89e6"
  },
  {
    "url": "en/views/plugins/screenfull.html",
    "revision": "8befe8d1caa4c98c069d3dee7f26ec51"
  },
  {
    "url": "googleea31ca71997d7a22.html",
    "revision": "e8e6adbd7e5aec4222f1e8f9ea95fdfe"
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
    "revision": "02ca511991d31d893f2c8339bce4ef58"
  },
  {
    "url": "rvcode_qq.png",
    "revision": "e2cae62f60f6a125cacfca17298f2858"
  },
  {
    "url": "tag/Github Actions/index.html",
    "revision": "036678152728a3f89a184b8f83b7132a"
  },
  {
    "url": "tag/index.html",
    "revision": "23e7326b03e324ebe99c229380ccff26"
  },
  {
    "url": "tag/Secret Key/index.html",
    "revision": "be7dcd221ad392ecca6d9f13ccd14d70"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "3f7e62e3a91ac23883f7365ccbfcf403"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "337a3a3ee092bdafc7ed98e73be03135"
  },
  {
    "url": "timeline/index.html",
    "revision": "a184af472e958bf13ad78cdaf2696753"
  },
  {
    "url": "views/0.x/abstract.html",
    "revision": "7cd3fcdd7a612023f89582da1d13e4b4"
  },
  {
    "url": "views/0.x/category.html",
    "revision": "8c6a41afbbd327cbdd85030f8c10af19"
  },
  {
    "url": "views/0.x/configJs.html",
    "revision": "07ec7de0753d8275986db3f005b311e3"
  },
  {
    "url": "views/0.x/home.html",
    "revision": "c6a3ffbcfe341dcec4f5548f09f84987"
  },
  {
    "url": "views/0.x/index.html",
    "revision": "7508144f594858883dc07a1036018e89"
  },
  {
    "url": "views/0.x/installUse.html",
    "revision": "8eeea01ea5a5e135521743b2f6d95af5"
  },
  {
    "url": "views/0.x/password.html",
    "revision": "1434ff8ff132d7ec1f7445529f6ac8d8"
  },
  {
    "url": "views/0.x/tag.html",
    "revision": "55a10112c4d15182dfd5bd28b86da649"
  },
  {
    "url": "views/0.x/timeline.html",
    "revision": "b50e73483e43d5333cc6ef8eb0d24e9c"
  },
  {
    "url": "views/0.x/valine.html",
    "revision": "4ed236ad9cbc40f39e1a014acd98b89c"
  },
  {
    "url": "views/1.x/abstract.html",
    "revision": "2d1907ed41e745ff1ac165a3aace005b"
  },
  {
    "url": "views/1.x/blog.html",
    "revision": "3b710349443c11dbb5fdbf5a522a899e"
  },
  {
    "url": "views/1.x/codeTheme.html",
    "revision": "e7d929b6994a15d2b31edd37dadadfff"
  },
  {
    "url": "views/1.x/configJs.html",
    "revision": "4dad502cc18d04d6d1e7beab78b4881d"
  },
  {
    "url": "views/1.x/customStyleAndScript.html",
    "revision": "46e6ff0e58ea809fa97ec564fa5b93f6"
  },
  {
    "url": "views/1.x/frontMatter.html",
    "revision": "558437346c3a176a9343aafd22716d26"
  },
  {
    "url": "views/1.x/home.html",
    "revision": "5790325679ca39e8a78057330c28b423"
  },
  {
    "url": "views/1.x/index.html",
    "revision": "88d116e20d788d4f912c6cb3c43f3713"
  },
  {
    "url": "views/1.x/installUse.html",
    "revision": "de1a500ff896fbe826a4c9805e4ccd57"
  },
  {
    "url": "views/1.x/local.html",
    "revision": "c3f5e2c5dbaed147c75f1ac65b881d55"
  },
  {
    "url": "views/1.x/mode.html",
    "revision": "9b0d40a9d036be787942389f8f8224c3"
  },
  {
    "url": "views/1.x/notfound.html",
    "revision": "2529104a102d1acd4f0c248003a30fcc"
  },
  {
    "url": "views/1.x/password.html",
    "revision": "a2b7b4b63e4bddf6a38eeb789ed0cb08"
  },
  {
    "url": "views/1.x/recommend.html",
    "revision": "9c1a11cfe1fd0d0241787da6c6f9b33d"
  },
  {
    "url": "views/1.x/sidebar.html",
    "revision": "2a598737176132f248161b5834fe0692"
  },
  {
    "url": "views/1.x/syntax.html",
    "revision": "af4f7136efb8e21d613fd2a69003bef9"
  },
  {
    "url": "views/1.x/timeline.html",
    "revision": "14ada0058613f463fdba241525dda1bf"
  },
  {
    "url": "views/1.x/updatetoone.html",
    "revision": "159ec4a2366baa495209fe9a95bb49af"
  },
  {
    "url": "views/1.x/valine.html",
    "revision": "bc92e75df391facb006ea01118e9655d"
  },
  {
    "url": "views/other/about.html",
    "revision": "c3c6982e191f5ca88a3ee3516fced7d8"
  },
  {
    "url": "views/other/convention.html",
    "revision": "954519ed8c06abe463a954e70478b0a2"
  },
  {
    "url": "views/other/deploy.html",
    "revision": "cba4049ec6479025c33fa415b174ba2a"
  },
  {
    "url": "views/other/develop.html",
    "revision": "b2701e8b5142547b290a8ae238a97b3e"
  },
  {
    "url": "views/other/donate.html",
    "revision": "9cd05ea9621a06d253fe9807c590bee4"
  },
  {
    "url": "views/other/github-actions-secret-key.html",
    "revision": "1c6efc988b474bd941f6c9d50b6c2c69"
  },
  {
    "url": "views/other/github-actions.html",
    "revision": "a6ddad4f5baf231a09058c84a5f02c34"
  },
  {
    "url": "views/other/lookroot.html",
    "revision": "43e41d8685aafe621fa758fc637f3b6c"
  },
  {
    "url": "views/other/messageBoard.html",
    "revision": "58b7060366342e8d9b3cf3ecb4cb91a3"
  },
  {
    "url": "views/other/one-year-old.html",
    "revision": "2d4a4820c467b8227a5cdce9786ad055"
  },
  {
    "url": "views/other/question.html",
    "revision": "0589f81e36138b94a703e3a98d0242c9"
  },
  {
    "url": "views/other/reco-optimization.html",
    "revision": "2b643b9c58475418566b1fb865b781df"
  },
  {
    "url": "views/other/recommend.html",
    "revision": "574deefe8398bd09d0b510b67b6e23d4"
  },
  {
    "url": "views/other/theme-example.html",
    "revision": "8baf8b053edac01165cde03c63ef62ad"
  },
  {
    "url": "views/other/valine-admin.html",
    "revision": "9588574ebbf87c2c99be125eb1e3de97"
  },
  {
    "url": "views/plugins/backToTop.html",
    "revision": "a9d8903d022cf0589c2b847a6183119d"
  },
  {
    "url": "views/plugins/bgmPlayer.html",
    "revision": "f6685bd65da8e35fd4d398a9a09e6c1e"
  },
  {
    "url": "views/plugins/bulletinPopover.html",
    "revision": "87e56ee67106ef37890100e53f2bb3f6"
  },
  {
    "url": "views/plugins/comments.html",
    "revision": "566a776bd483950fadcbdeb7b68ec117"
  },
  {
    "url": "views/plugins/extractCode.html",
    "revision": "db7557dfd6b231f381b86f8d4ca115a6"
  },
  {
    "url": "views/plugins/ga.html",
    "revision": "5f8e7854cf306a2f05ce3c37683bdc0c"
  },
  {
    "url": "views/plugins/index.html",
    "revision": "cfc171864b8e803e514c1aa6a14b46d5"
  },
  {
    "url": "views/plugins/kanbanniang.html",
    "revision": "e1678d1527be837ad20e29c429353194"
  },
  {
    "url": "views/plugins/loadingPage.html",
    "revision": "619095ba0f4a169591343ec6764e2d14"
  },
  {
    "url": "views/plugins/pagation.html",
    "revision": "83d01a5519acfc59f202a1301b2b81ad"
  },
  {
    "url": "views/plugins/rss.html",
    "revision": "30b423ecdf12943e7415a39694481906"
  },
  {
    "url": "views/plugins/screenfull.html",
    "revision": "dc5cf0c4107d009fb1ab3d6b8dde2cbc"
  },
  {
    "url": "wechat.png",
    "revision": "3a4c1b5c5c76322ce485dcac7e0e5cc8"
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
