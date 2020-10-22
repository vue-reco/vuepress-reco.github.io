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
    "revision": "8c4b389c33f3f2c5703ab71d6ddcd138"
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
    "url": "assets/js/106.346ecac4.js",
    "revision": "3533799ffa9a39b2bad304736146df5d"
  },
  {
    "url": "assets/js/107.6563f2ef.js",
    "revision": "c06218c48ec7169b9b464456f43e3909"
  },
  {
    "url": "assets/js/108.6dab9a74.js",
    "revision": "b889ee5b5535e28761492554037fa48b"
  },
  {
    "url": "assets/js/109.9624f3a0.js",
    "revision": "2c9ae463ecc7db2b6c1a8160464e9574"
  },
  {
    "url": "assets/js/11.71a76bbb.js",
    "revision": "68944761ccdd9f048d0a16430369c8a1"
  },
  {
    "url": "assets/js/110.d0851f90.js",
    "revision": "0533111a50f1d7e23638e8d7779fa5f9"
  },
  {
    "url": "assets/js/111.7da9040c.js",
    "revision": "58e3bfc3c3f955a0cb92f75f1eb154ee"
  },
  {
    "url": "assets/js/112.af62da21.js",
    "revision": "3f5ceacd7cbec389e67ef3d4f7e9d7ee"
  },
  {
    "url": "assets/js/113.61daa0a6.js",
    "revision": "f0c762b127d6eff01c2aac9331d7cdb5"
  },
  {
    "url": "assets/js/114.020db821.js",
    "revision": "f0f350d3bf1ddfaaa33435b4cc0c582e"
  },
  {
    "url": "assets/js/115.6c5948a4.js",
    "revision": "3c9df5038e03c3c1dc658743c942cdec"
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
    "url": "assets/js/14.9c255012.js",
    "revision": "65a775ccb6dd6ad58c2759179b23e704"
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
    "url": "assets/js/17.616b5552.js",
    "revision": "24dc528428a4523a0a41414b2e2732ce"
  },
  {
    "url": "assets/js/18.e3792bde.js",
    "revision": "9dcdd070e2f3ee4ce27f30f00486f680"
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
    "url": "assets/js/21.33854e3a.js",
    "revision": "a55bd2c1ca8b08f5a401135479c39564"
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
    "url": "assets/js/29.2b7933ca.js",
    "revision": "aab92354fc8102b6fb9c0ea9255d0a0b"
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
    "url": "assets/js/32.95ac1461.js",
    "revision": "c1c8b447578c3fd422c3cbc7c31e2acf"
  },
  {
    "url": "assets/js/33.1a62162a.js",
    "revision": "7367344d19842b049a650ee7ab6a45e2"
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
    "url": "assets/js/36.8f178890.js",
    "revision": "9d9ed2eb37f3a79ecebcbbe223948391"
  },
  {
    "url": "assets/js/37.47478bae.js",
    "revision": "7714b411b6cb95528e32b881bef59fc8"
  },
  {
    "url": "assets/js/38.2e58951f.js",
    "revision": "67b9ff5a9ecf961aea9291e636cca02b"
  },
  {
    "url": "assets/js/39.5e1d703a.js",
    "revision": "b5d59abf263b91f07c0034987c7c6b64"
  },
  {
    "url": "assets/js/40.d6a152a6.js",
    "revision": "8df847aff5437add49de1f5a6450b098"
  },
  {
    "url": "assets/js/41.31f6649a.js",
    "revision": "9bc5ab8e0d3545732ff0bd5b3439ccd5"
  },
  {
    "url": "assets/js/42.d4dac9b6.js",
    "revision": "f29a167a99451e880a4dbf54d83a43ea"
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
    "url": "assets/js/65.1adf9a35.js",
    "revision": "7182a723b8a47e3c94a43a75e62ef9c1"
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
    "url": "assets/js/79.1fcc1ae8.js",
    "revision": "9d0b6230f462924d42a580d11ee184a6"
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
    "url": "assets/js/93.7c1540be.js",
    "revision": "6f566c6377dc36dc692236e24a787e24"
  },
  {
    "url": "assets/js/94.fc30c204.js",
    "revision": "0810309cebcc639edcd91262c89cd9de"
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
    "url": "assets/js/app.1c90e911.js",
    "revision": "39cec04395d1d776ba6adb23519881f3"
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
    "revision": "cf5251070200be3bf91d6d20d4c8bb06"
  },
  {
    "url": "categories/index.html",
    "revision": "fa5f268a7435b06a099bd12f8e50c022"
  },
  {
    "url": "en/index.html",
    "revision": "76bd592071c57a1a4a9e888fa43e673e"
  },
  {
    "url": "en/views/1.x/abstract.html",
    "revision": "b30573f7cac9b25ae0a0ee63f81a7b47"
  },
  {
    "url": "en/views/1.x/blog.html",
    "revision": "c8a8a6452f80a74484b404fd6f4be2e3"
  },
  {
    "url": "en/views/1.x/codeTheme.html",
    "revision": "741b8fb8185e10541a619accc7e6d6ce"
  },
  {
    "url": "en/views/1.x/configJs.html",
    "revision": "fe6feaf295ddb3c137294689be694f20"
  },
  {
    "url": "en/views/1.x/customStyleAndScript.html",
    "revision": "c19029a66fce55f6c10c0fc05be6d867"
  },
  {
    "url": "en/views/1.x/frontMatter.html",
    "revision": "404ad9625cc7142df06e0f95a8a3e497"
  },
  {
    "url": "en/views/1.x/home.html",
    "revision": "c3c06a276e31c017be9da4110e064c80"
  },
  {
    "url": "en/views/1.x/index.html",
    "revision": "da5d5e26ba45182d1bd4f54104f62cfb"
  },
  {
    "url": "en/views/1.x/installUse.html",
    "revision": "0613c0f16ceff9faa3a0550048f24b52"
  },
  {
    "url": "en/views/1.x/local.html",
    "revision": "5fc8c891eaa9024e99279e69f7caf8ff"
  },
  {
    "url": "en/views/1.x/mode.html",
    "revision": "62fa89dc74941a12babbad13f4f9a621"
  },
  {
    "url": "en/views/1.x/notfound.html",
    "revision": "9da5e2ffa20e655544f4dc263b443978"
  },
  {
    "url": "en/views/1.x/password.html",
    "revision": "9b860430c9f301b558384de42a8206b4"
  },
  {
    "url": "en/views/1.x/recommend.html",
    "revision": "5a9c435e771bff83e544cd9b6e57fc09"
  },
  {
    "url": "en/views/1.x/sidebar.html",
    "revision": "9aa9d70eeae7532ceac867e24df7e52e"
  },
  {
    "url": "en/views/1.x/syntax.html",
    "revision": "a8651032f40961cdabb8f42de9b654c6"
  },
  {
    "url": "en/views/1.x/timeline.html",
    "revision": "d17982a4e29a48204fb1a0eeecc78e78"
  },
  {
    "url": "en/views/1.x/updatetoone.html",
    "revision": "847a9cbb9f0a9cce4da3c40f8bbcb884"
  },
  {
    "url": "en/views/1.x/valine.html",
    "revision": "2ba80c8bae0facb23bfa963bb8ae3b1c"
  },
  {
    "url": "en/views/other/about.html",
    "revision": "4c01cd4d46010bb0092ec056d6a249a2"
  },
  {
    "url": "en/views/other/question.html",
    "revision": "192f953e1038a7abbcd4d9ed2766b4d0"
  },
  {
    "url": "en/views/other/theme-example.html",
    "revision": "3c24edabc2f94e2363f61d733e12cb84"
  },
  {
    "url": "en/views/plugins/backToTop.html",
    "revision": "e6fe7436f8593b3cfe922ddf5c230a14"
  },
  {
    "url": "en/views/plugins/bgmPlayer.html",
    "revision": "727c106ca3a2f5d4ee4203c3765a9713"
  },
  {
    "url": "en/views/plugins/bulletinPopover.html",
    "revision": "958173b71808ddacf630bc1c511b307e"
  },
  {
    "url": "en/views/plugins/comments.html",
    "revision": "3d40cae6f690316e632e071fe9f9e821"
  },
  {
    "url": "en/views/plugins/extractCode.html",
    "revision": "1d1f425639bc0d2a5187ae7e11d1f03e"
  },
  {
    "url": "en/views/plugins/ga.html",
    "revision": "1325d61112e682d0b307e7ccfcfce29d"
  },
  {
    "url": "en/views/plugins/index.html",
    "revision": "db23765b535d77b6600882ca2a5ae91b"
  },
  {
    "url": "en/views/plugins/kanbanniang.html",
    "revision": "fd05e48261177517acdbab23a5899a51"
  },
  {
    "url": "en/views/plugins/loadingPage.html",
    "revision": "76e6d0f36cc3aa56449fa939d8a64b50"
  },
  {
    "url": "en/views/plugins/pagation.html",
    "revision": "86277ace5428ae8d36ab004b0511c472"
  },
  {
    "url": "en/views/plugins/rss.html",
    "revision": "7c2a7625a2a27d929d11a1e21f7c0082"
  },
  {
    "url": "en/views/plugins/screenfull.html",
    "revision": "3a59699fc6c1ca7cf761f12d6f21d882"
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
    "revision": "14be0fbe294b42f684ecab40a305b944"
  },
  {
    "url": "rvcode_qq.png",
    "revision": "e2cae62f60f6a125cacfca17298f2858"
  },
  {
    "url": "tag/Github Actions/index.html",
    "revision": "e1a2e587de59695329cb910ee54eb6f2"
  },
  {
    "url": "tag/index.html",
    "revision": "a09b4b090e3436a4ceac3e30610b551c"
  },
  {
    "url": "tag/Secret Key/index.html",
    "revision": "e5dc493f7d65a4e25729e7ddd40e4b72"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "73f6c742e37d977b2036dcb70c346167"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "05a09c511ace5055a2c2663e9067c5f3"
  },
  {
    "url": "timeline/index.html",
    "revision": "46ad2c0079ebed2ee8de6a4ee8f377d9"
  },
  {
    "url": "views/0.x/abstract.html",
    "revision": "0c650ba1c66cc24c234fc086f910b4b1"
  },
  {
    "url": "views/0.x/category.html",
    "revision": "6a1919d8d0d7713b287145d638231fd2"
  },
  {
    "url": "views/0.x/configJs.html",
    "revision": "ced51239321a384082c40b2ea5088e43"
  },
  {
    "url": "views/0.x/home.html",
    "revision": "8de7c788a51c73649209e351875b4452"
  },
  {
    "url": "views/0.x/index.html",
    "revision": "3113e7fd0b8a60506b880fcb8df4b512"
  },
  {
    "url": "views/0.x/installUse.html",
    "revision": "cd7c28bf3a041a6a94c31c87fd60bcc6"
  },
  {
    "url": "views/0.x/password.html",
    "revision": "e9ce094720c2ebac649cd9f9b653b20b"
  },
  {
    "url": "views/0.x/tag.html",
    "revision": "4fe1df137e554631523f4cab2d8488f6"
  },
  {
    "url": "views/0.x/timeline.html",
    "revision": "519ed2bff023819dbbbb589af9e83802"
  },
  {
    "url": "views/0.x/valine.html",
    "revision": "102996d9eae90f4d276764e32d649e35"
  },
  {
    "url": "views/1.x/abstract.html",
    "revision": "3e037879dc1a298c1ad9051e8b5383de"
  },
  {
    "url": "views/1.x/blog.html",
    "revision": "591d436cc475b8861cde10c6223addb7"
  },
  {
    "url": "views/1.x/codeTheme.html",
    "revision": "bf4ad80a2a146207a7228a8f794e177d"
  },
  {
    "url": "views/1.x/configJs.html",
    "revision": "7d1ab44fe9deec012f0aa760e7511146"
  },
  {
    "url": "views/1.x/customStyleAndScript.html",
    "revision": "8ab8345c8a4401c66b38e614581fbc29"
  },
  {
    "url": "views/1.x/frontMatter.html",
    "revision": "33d4532b52f8c3bf038ef3e2344d20a6"
  },
  {
    "url": "views/1.x/home.html",
    "revision": "402eede8caeb70cd733059caeb77aaaa"
  },
  {
    "url": "views/1.x/index.html",
    "revision": "1870b94474bc11bd93c84bd3fa1c51e7"
  },
  {
    "url": "views/1.x/installUse.html",
    "revision": "b7af6d22168fd9e05750b285e6c52b3f"
  },
  {
    "url": "views/1.x/local.html",
    "revision": "19804fa1de03213029d1b5935080ef38"
  },
  {
    "url": "views/1.x/mode.html",
    "revision": "89832c03757465308c91f665005710da"
  },
  {
    "url": "views/1.x/notfound.html",
    "revision": "23c77335f3da71c12be78d5c1e6fc0f6"
  },
  {
    "url": "views/1.x/password.html",
    "revision": "678cf60172fb5d9bd3a1478c4be386bc"
  },
  {
    "url": "views/1.x/recommend.html",
    "revision": "a6e9ed371c9117bd9c65117011ca7539"
  },
  {
    "url": "views/1.x/sidebar.html",
    "revision": "6cd90a37ba0a334e644b1fd3afc4ef45"
  },
  {
    "url": "views/1.x/syntax.html",
    "revision": "f617a8b46307319dfa8a5dd61fee1770"
  },
  {
    "url": "views/1.x/timeline.html",
    "revision": "4e466aebd30858ef93a485a566ef1017"
  },
  {
    "url": "views/1.x/updatetoone.html",
    "revision": "969652b12ba2617b0fa9fd0b4c2c58d7"
  },
  {
    "url": "views/1.x/valine.html",
    "revision": "a864b56ee6512d88eec624994f55229c"
  },
  {
    "url": "views/other/about.html",
    "revision": "88506e753876f9d325486625438e5adb"
  },
  {
    "url": "views/other/convention.html",
    "revision": "95735c9b0009da58a9a81159fe1980b3"
  },
  {
    "url": "views/other/deploy.html",
    "revision": "aa43d63e3f51915a194493047eda3069"
  },
  {
    "url": "views/other/develop.html",
    "revision": "616e9fc4b7b5e4f205f7c84e8244d438"
  },
  {
    "url": "views/other/donate.html",
    "revision": "e9b54f335da170d628749fa575ba4b0e"
  },
  {
    "url": "views/other/github-actions-secret-key.html",
    "revision": "5254876b373f21b76b697a549a7312ad"
  },
  {
    "url": "views/other/github-actions.html",
    "revision": "3a1b19310e0c3cbfea57c27b6d5b0739"
  },
  {
    "url": "views/other/lookroot.html",
    "revision": "2ac9e3342a7a98851e859cef3eb830d3"
  },
  {
    "url": "views/other/messageBoard.html",
    "revision": "5d8bab501584cc25925a875df10172b6"
  },
  {
    "url": "views/other/one-year-old.html",
    "revision": "20bb53b52a39eab5f6b441402048eea7"
  },
  {
    "url": "views/other/question.html",
    "revision": "c6f341eea4bc19ffa508056c0608693e"
  },
  {
    "url": "views/other/reco-optimization.html",
    "revision": "dee1d8ea132132f0a970306964651692"
  },
  {
    "url": "views/other/recommend.html",
    "revision": "33e743b9bb60553810b45179812654b9"
  },
  {
    "url": "views/other/sidebar.html",
    "revision": "5ea1336b308652aad274b452d398a1b3"
  },
  {
    "url": "views/other/theme-example.html",
    "revision": "dcf1ddd43fbbdcd54d909df0778f24cd"
  },
  {
    "url": "views/other/valine-admin.html",
    "revision": "7c40d32f87cdb7d35aa2a5b001e3df59"
  },
  {
    "url": "views/plugins/backToTop.html",
    "revision": "3a4b9b19a110d2312e01f73e1228ab94"
  },
  {
    "url": "views/plugins/bgmPlayer.html",
    "revision": "56fe2d8699712ecfc37b9efd3786b5e7"
  },
  {
    "url": "views/plugins/bulletinPopover.html",
    "revision": "9fa84cdb40bd151c11e9d5d0d4a40318"
  },
  {
    "url": "views/plugins/comments.html",
    "revision": "e9f97a8c7f79ab9bcffe7e5d9eb9594a"
  },
  {
    "url": "views/plugins/extractCode.html",
    "revision": "c102e4c34b20b27086507d79a88ee64a"
  },
  {
    "url": "views/plugins/ga.html",
    "revision": "bdd0f811b5c9783653fff66184f4bd07"
  },
  {
    "url": "views/plugins/index.html",
    "revision": "6d025c3db89948b5227c2e8d5aa4c8c5"
  },
  {
    "url": "views/plugins/kanbanniang.html",
    "revision": "d2813b77968789798fc47e959689234c"
  },
  {
    "url": "views/plugins/loadingPage.html",
    "revision": "72ebf23192356c3736e0e91adba2face"
  },
  {
    "url": "views/plugins/pagation.html",
    "revision": "82ab5598ede5ac1d0ca4e84ab38e8d9c"
  },
  {
    "url": "views/plugins/rss.html",
    "revision": "ac0eae1f645ea1462ea98667b9690153"
  },
  {
    "url": "views/plugins/screenfull.html",
    "revision": "ba1fb2c9c03c4d97616d8e9e5ee5584a"
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
