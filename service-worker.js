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
    "revision": "1cb387c543b1f0e566b54217c417c470"
  },
  {
    "url": "assets/css/0.styles.65130eaf.css",
    "revision": "fe3312d86d496571fab1f304c9a261ac"
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
    "url": "assets/img/bushu.7d8ab006.png",
    "revision": "7d8ab006a2d68c68f588166e972f7b37"
  },
  {
    "url": "assets/img/content.8aca8a4d.svg",
    "revision": "8aca8a4d6abc1b965a1babeade4ec3ce"
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
    "url": "assets/img/mobilelife.ec57bfb4.svg",
    "revision": "ec57bfb4b584c1727dbd7d5398a5a0e0"
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
    "url": "assets/img/newyear.1c8d747b.svg",
    "revision": "1c8d747b797b36bfa330adaa5da1997a"
  },
  {
    "url": "assets/img/resend.c5b493be.png",
    "revision": "c5b493becde3617241e3b6c5dd635034"
  },
  {
    "url": "assets/img/rvcode.d51fbb78.png",
    "revision": "d51fbb780b6e92bd40ac3aa0754eb739"
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
    "url": "assets/img/snowman.5264ec66.svg",
    "revision": "5264ec6673f0a0565209fbdf4bd7eca1"
  },
  {
    "url": "assets/js/1.530df74d.js",
    "revision": "a8967a87d870be9bf3ca053438157307"
  },
  {
    "url": "assets/js/10.ca57608c.js",
    "revision": "347ca63d8d55e6b4a6af0f443c134876"
  },
  {
    "url": "assets/js/100.0b15d9c0.js",
    "revision": "17acc83b8505f96be0d1b7c0572a9f0d"
  },
  {
    "url": "assets/js/101.a58afef8.js",
    "revision": "8d38af2ac73ef3381d453b95b949b60f"
  },
  {
    "url": "assets/js/102.e5de800e.js",
    "revision": "f824c9473c48f3d3032a4379aa57ae15"
  },
  {
    "url": "assets/js/103.80cc102a.js",
    "revision": "addf63dde31ac04309861a345b0232ee"
  },
  {
    "url": "assets/js/104.7f283d0f.js",
    "revision": "d7d4b27ed5aa99f6a77ac1b6fc3964e8"
  },
  {
    "url": "assets/js/105.4c84b0df.js",
    "revision": "b54046b1ff38398a5f04866475288a0b"
  },
  {
    "url": "assets/js/106.5d6daf5a.js",
    "revision": "4f46711c05c7fb6cb3c13b1729ff6d31"
  },
  {
    "url": "assets/js/107.b33fbd80.js",
    "revision": "88d68a31cd35ada5231fc1d02a53bf85"
  },
  {
    "url": "assets/js/108.2fd0ac7f.js",
    "revision": "e358c401aed2bd5aa7ffd67a04468849"
  },
  {
    "url": "assets/js/109.3878bec3.js",
    "revision": "bc1ebc7b58e8b90f354076ec92f66688"
  },
  {
    "url": "assets/js/11.96389db6.js",
    "revision": "326b8c181c439b17da10773c4f65ea45"
  },
  {
    "url": "assets/js/12.c48da8f8.js",
    "revision": "3fc8ce0f47a3d8f5bba0ffa527f2d3a4"
  },
  {
    "url": "assets/js/13.098b262a.js",
    "revision": "95a5170d4a554891f17fb9e4f5727515"
  },
  {
    "url": "assets/js/14.b6325b2d.js",
    "revision": "628e91139b368d13ffbaed4286d27f6d"
  },
  {
    "url": "assets/js/15.981604c9.js",
    "revision": "029994376c7a4ac7a231b7aad4bca4e7"
  },
  {
    "url": "assets/js/16.724ded6f.js",
    "revision": "f6464eb0dab25bfe1751c641a8ae44be"
  },
  {
    "url": "assets/js/17.307c9f85.js",
    "revision": "8de17dbf449d2ef4ccdb83ef0e5d5840"
  },
  {
    "url": "assets/js/18.c4df8015.js",
    "revision": "fd768007b7ef7b6d637fc3583907b121"
  },
  {
    "url": "assets/js/19.99f4d331.js",
    "revision": "32aeb0cf4b45c6980512e29fb8831a18"
  },
  {
    "url": "assets/js/2.c2362104.js",
    "revision": "84fa1292af74354dbfb25d49cdaa96a6"
  },
  {
    "url": "assets/js/20.b6f01d99.js",
    "revision": "a7dc324a0d859b23dbd0ea9d301c20de"
  },
  {
    "url": "assets/js/21.0389e7d7.js",
    "revision": "a892a7182c280a1ba6cb632c8b84f96f"
  },
  {
    "url": "assets/js/22.3a7fe541.js",
    "revision": "336f24708211e6e68242d5ce8f1db526"
  },
  {
    "url": "assets/js/23.0d6cc572.js",
    "revision": "07228a3f02b65448ceda506a1739b100"
  },
  {
    "url": "assets/js/24.3196b7ed.js",
    "revision": "2f7fd20c17a846a7b0f0c88c32bf92eb"
  },
  {
    "url": "assets/js/25.e1993113.js",
    "revision": "372d360a7d3610137d20a22bf1a0e20a"
  },
  {
    "url": "assets/js/26.c02f09e7.js",
    "revision": "9732b21419e865bb7d014846f1f183bf"
  },
  {
    "url": "assets/js/27.d17320a4.js",
    "revision": "96f563a9c254e668d61e5e120c76dcc3"
  },
  {
    "url": "assets/js/28.2a9f45b1.js",
    "revision": "885e9ae674644793d39c72506d28c67b"
  },
  {
    "url": "assets/js/29.8282ac07.js",
    "revision": "ae0b4c94a38246af7a3c55b50ed310b3"
  },
  {
    "url": "assets/js/3.6d001cf7.js",
    "revision": "0bdf337d8055f804fc256fc3406f46b7"
  },
  {
    "url": "assets/js/30.156bbe02.js",
    "revision": "ebd0ea7b45aab71c9e6788844e3e7f71"
  },
  {
    "url": "assets/js/31.e0386921.js",
    "revision": "32f968126f218e9c402dca7acdace984"
  },
  {
    "url": "assets/js/32.46aaeef2.js",
    "revision": "a1f5f2f46f208fd6f4faaacc5d6f29be"
  },
  {
    "url": "assets/js/33.3df87407.js",
    "revision": "461d7f6e3022fca3501f8efe12947414"
  },
  {
    "url": "assets/js/34.bd26c6e9.js",
    "revision": "bba75ada177c34fa8ec1fcf8bdf582bd"
  },
  {
    "url": "assets/js/35.350249b3.js",
    "revision": "f13660e4062024f794dbe37d481a3fa3"
  },
  {
    "url": "assets/js/36.992d4690.js",
    "revision": "e003fff774d162851da423e1d425000b"
  },
  {
    "url": "assets/js/37.4c47920d.js",
    "revision": "e7afa4386cd4e44a56c188a3388a5f02"
  },
  {
    "url": "assets/js/38.bc8b5608.js",
    "revision": "1e95f568fe049e8b324fba91d39eb433"
  },
  {
    "url": "assets/js/39.273de180.js",
    "revision": "585630b592a78aa66982ea7b0b524ec8"
  },
  {
    "url": "assets/js/40.7e427bf0.js",
    "revision": "b18ad619142f7fb45ef5f5e708cf9928"
  },
  {
    "url": "assets/js/41.758424f2.js",
    "revision": "cb22c2ee7abe7672e78f1900c8e4a7ea"
  },
  {
    "url": "assets/js/42.918b4fc0.js",
    "revision": "23c9cb1025a92b5bbcc3c95bb68cb0b7"
  },
  {
    "url": "assets/js/43.536c8be5.js",
    "revision": "8768f138b403b492f1d0e543a31c5385"
  },
  {
    "url": "assets/js/44.826f14c8.js",
    "revision": "ebb2fcf47b4884d31381ced3ead650b4"
  },
  {
    "url": "assets/js/45.f734e395.js",
    "revision": "c426379e5c2bdc87fb530c16415a8000"
  },
  {
    "url": "assets/js/46.4003d4f0.js",
    "revision": "756593786a4611a7b487fcab7fa0b4cc"
  },
  {
    "url": "assets/js/47.9092523c.js",
    "revision": "21056727d28f4bf219dbd2d56c90935a"
  },
  {
    "url": "assets/js/48.447cb2d3.js",
    "revision": "6d10198cf1a79b9f36b7a56f2e540b3e"
  },
  {
    "url": "assets/js/49.63f30436.js",
    "revision": "f5bab1567a42df3bba168381bce0a88e"
  },
  {
    "url": "assets/js/50.8d36864b.js",
    "revision": "ad856ca257ccca44f07afe603a085859"
  },
  {
    "url": "assets/js/51.ab64361f.js",
    "revision": "88c58f47656d585f5b4eae686a5a18fd"
  },
  {
    "url": "assets/js/52.8fcb2daa.js",
    "revision": "2bd020fcf38c6e1a6db49abcc918ebb2"
  },
  {
    "url": "assets/js/53.ac001ac1.js",
    "revision": "9cc33065d45d22efcd9e78135fa3fdba"
  },
  {
    "url": "assets/js/54.a7fa3c46.js",
    "revision": "0912c7f10d3c99de04cec2e83b2d948c"
  },
  {
    "url": "assets/js/55.4739ef92.js",
    "revision": "7e530bc095e75ef773d84cbc421b8d1f"
  },
  {
    "url": "assets/js/56.5cac5436.js",
    "revision": "475e714a8b83cc38bdcebbf9e009ba4a"
  },
  {
    "url": "assets/js/57.82aac805.js",
    "revision": "44ebcc351024bc537521658a78fa9fb2"
  },
  {
    "url": "assets/js/58.15f4955e.js",
    "revision": "792984aa4d63153afd65e89730fa296c"
  },
  {
    "url": "assets/js/59.7ef48436.js",
    "revision": "6a9f098025d4344238fb041ebbdbf066"
  },
  {
    "url": "assets/js/60.a52ae234.js",
    "revision": "355d0c48d04ed5e4f261945b2739fcee"
  },
  {
    "url": "assets/js/61.b920171e.js",
    "revision": "8b3640c8695a09360ff9e96dbd28900c"
  },
  {
    "url": "assets/js/62.5288a759.js",
    "revision": "42086484cb0b6ee1598a9f3595f9b6e3"
  },
  {
    "url": "assets/js/63.ebd05b59.js",
    "revision": "7fc48e43f3824fe55f7787d7c00973b4"
  },
  {
    "url": "assets/js/64.10080cfd.js",
    "revision": "1e2ae112c3378c5aacba84012fa66339"
  },
  {
    "url": "assets/js/65.e40eb8f4.js",
    "revision": "419098992da7652dad5faaf9afd9f9d6"
  },
  {
    "url": "assets/js/66.04356e47.js",
    "revision": "5b92fb13e6e34e342047df42abad5971"
  },
  {
    "url": "assets/js/67.9452b64c.js",
    "revision": "ed2e5bf5cdeef6fb1e9b45afd891166f"
  },
  {
    "url": "assets/js/68.8236b127.js",
    "revision": "c7223d70d7d8e9197039f70c2ccf0cbe"
  },
  {
    "url": "assets/js/69.28bb99fa.js",
    "revision": "0f4df2ca0ed71480f5caa61cd22084ff"
  },
  {
    "url": "assets/js/7.d890ce0a.js",
    "revision": "f331d9d9b261bcaf148b281ee8ff4399"
  },
  {
    "url": "assets/js/70.9a24b429.js",
    "revision": "0a0c520fe172fb61906ff2dd1a754e32"
  },
  {
    "url": "assets/js/71.d54e82d7.js",
    "revision": "90eea03ddc0129f3ca8bed4507780067"
  },
  {
    "url": "assets/js/72.6a7847a8.js",
    "revision": "c479c4547880bfa2399076b3ce342e18"
  },
  {
    "url": "assets/js/73.70a21ef9.js",
    "revision": "48751b0cbb1e7ab7d38525da4885b288"
  },
  {
    "url": "assets/js/74.906ee4e7.js",
    "revision": "30b24d54522c0373b8da6b65753b2185"
  },
  {
    "url": "assets/js/75.6af51e0c.js",
    "revision": "5ee12c1bb53c524ebab8969dcefe1a9d"
  },
  {
    "url": "assets/js/76.8158ca8f.js",
    "revision": "9da2c693748d8a64bff7979481c9d7c0"
  },
  {
    "url": "assets/js/77.23d5978c.js",
    "revision": "db3b41266b04a8ca4b06cd8c7b188d38"
  },
  {
    "url": "assets/js/78.983f074f.js",
    "revision": "3694f7d1d4a558c700144c18f2e9bde8"
  },
  {
    "url": "assets/js/79.b10998a3.js",
    "revision": "e35e214cafd3777f5d047c0286cec04d"
  },
  {
    "url": "assets/js/8.b0f55ca2.js",
    "revision": "c239cde12785b36b3cdc09a26ca2bf92"
  },
  {
    "url": "assets/js/80.3d27a4c4.js",
    "revision": "19b36ec7910a6a8458170535558e7f7b"
  },
  {
    "url": "assets/js/81.01122ede.js",
    "revision": "cb6838b544a7fb0fa153b6b5aed5b850"
  },
  {
    "url": "assets/js/82.a1ba8ce6.js",
    "revision": "26b512ef0659388d835560d7fd11e843"
  },
  {
    "url": "assets/js/83.ab57606c.js",
    "revision": "0a37bb2cdc2df0a9c8a3bdbe5210239e"
  },
  {
    "url": "assets/js/84.66907f1a.js",
    "revision": "fe961ecda4c323578d1783e3a64eed88"
  },
  {
    "url": "assets/js/85.b5e684ba.js",
    "revision": "5f333d017855813fcc4c1f67c0afc002"
  },
  {
    "url": "assets/js/86.1cb7d60a.js",
    "revision": "10825fea7633b47e9133bd317f73aa6a"
  },
  {
    "url": "assets/js/87.af9140b4.js",
    "revision": "f66ccdf3499e8855459f8ac799668cb0"
  },
  {
    "url": "assets/js/88.524b7449.js",
    "revision": "e8e6e445165d4a6f6cce2d9e5d47c4ee"
  },
  {
    "url": "assets/js/89.e437e289.js",
    "revision": "9e31409cc6189c1ca8c1c2cddbb11709"
  },
  {
    "url": "assets/js/9.034bbbbc.js",
    "revision": "ee891b1655b612c01cb54f9948f7a477"
  },
  {
    "url": "assets/js/90.0d0502f4.js",
    "revision": "c7eeccdc18b2384d87ee59b410b847c5"
  },
  {
    "url": "assets/js/91.3dfd0074.js",
    "revision": "b3ce01f88a502b3b481b18d49e279f04"
  },
  {
    "url": "assets/js/92.5a8e757b.js",
    "revision": "cdf29a5d16daa92fc648fd8412429e0f"
  },
  {
    "url": "assets/js/93.6b3dc1ac.js",
    "revision": "9083be1f0e6b898ca9b5d731a6f0dd80"
  },
  {
    "url": "assets/js/94.7bcbd274.js",
    "revision": "cec7e023c731e659760803e69a8389f3"
  },
  {
    "url": "assets/js/95.dd4253f8.js",
    "revision": "55a7361055b617a31c23825ca79161e5"
  },
  {
    "url": "assets/js/96.6201b230.js",
    "revision": "3629c31d9a57b53e55f771ba6714969b"
  },
  {
    "url": "assets/js/97.81d9af0d.js",
    "revision": "5e66c3a842ee5a7cc8c8668e71e7d65d"
  },
  {
    "url": "assets/js/98.98e75649.js",
    "revision": "07734f98fc8182799d67da5cc8b31dce"
  },
  {
    "url": "assets/js/99.85e43413.js",
    "revision": "972d90a38ea8210a2c89b1ff6032b9e6"
  },
  {
    "url": "assets/js/app.6f91ff34.js",
    "revision": "81668968b4a83673be490f24d1d12fc9"
  },
  {
    "url": "assets/js/vendors~docsearch.39519ef2.js",
    "revision": "2481105b9883655dd66103fc98c3e784"
  },
  {
    "url": "assets/js/vendors~flowchart.af355b75.js",
    "revision": "31b382161862ddfd6ee2edd788ed95ab"
  },
  {
    "url": "blogImages/404notfound.png",
    "revision": "4a390bb01939f3ca6230c68bebce36ea"
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
    "url": "blogImages/vmblog.png",
    "revision": "34b7b836f256da4556c682b65b67ffa5"
  },
  {
    "url": "blogImages/xm.png",
    "revision": "3f28adbb4db2f27cf87fe137f8f55659"
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
    "url": "blogImages/凝狐.png",
    "revision": "27d9c9645e5ef38addea47027c83ea79"
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
    "url": "blogImages/山水有轻音.png",
    "revision": "09c58fa9ba359cb0504be98ef96a8c43"
  },
  {
    "url": "blogImages/月上秦少.png",
    "revision": "636680da3f5835024fbd99e34aaf43f2"
  },
  {
    "url": "blogImages/有梦想的咸鱼.png",
    "revision": "735849b1474859f1927a957ea71693ff"
  },
  {
    "url": "blogImages/烟雨江畔.png",
    "revision": "d4c953a7579bf670ada719602069edd8"
  },
  {
    "url": "categories/blog/index.html",
    "revision": "f4420fe60ce854401f508adfdda267c0"
  },
  {
    "url": "categories/index.html",
    "revision": "a8d6e2636d7683abfb634740649a17c0"
  },
  {
    "url": "en/index.html",
    "revision": "6d252467718c649eabeba4d6ac9c1433"
  },
  {
    "url": "en/views/1.x/0update1.html",
    "revision": "0c09f293ebdb8c8a6b9590fbfce912f7"
  },
  {
    "url": "en/views/1.x/404.html",
    "revision": "9852de9ba5b867e66d3d82c8e36f61b2"
  },
  {
    "url": "en/views/1.x/abstract.html",
    "revision": "f8d9a1d8e90dac68316a64c9e7266064"
  },
  {
    "url": "en/views/1.x/blog.html",
    "revision": "cd7494c16a989dfc8617259409dc8aac"
  },
  {
    "url": "en/views/1.x/configJs.html",
    "revision": "d023aea769f03ffb12bc6e36132b4dbf"
  },
  {
    "url": "en/views/1.x/customStyleAndScript.html",
    "revision": "26c5d32d5fadf78a3820a39fb77618b4"
  },
  {
    "url": "en/views/1.x/frontMatter.html",
    "revision": "4b9932880edb4bb9d24cafa8af9eb249"
  },
  {
    "url": "en/views/1.x/ga.html",
    "revision": "348d3a5b9cdacc28056a125453183e32"
  },
  {
    "url": "en/views/1.x/home.html",
    "revision": "04118cbd7163adadb3b2ee3f5122dfb4"
  },
  {
    "url": "en/views/1.x/index.html",
    "revision": "45c188d55debeec69f47de9856e63caa"
  },
  {
    "url": "en/views/1.x/installUse.html",
    "revision": "74eca043b7a7429a1e313c2257c83f6a"
  },
  {
    "url": "en/views/1.x/mode.html",
    "revision": "9bd050c6bebf2a413f2653c61dd29841"
  },
  {
    "url": "en/views/1.x/password.html",
    "revision": "68b42aa643d1fc4fd3bcf17d5a9001de"
  },
  {
    "url": "en/views/1.x/recommend.html",
    "revision": "d8e5e2aec412e63509a84fbe461cc31d"
  },
  {
    "url": "en/views/1.x/sidebar.html",
    "revision": "48ab5b0f67788fd6a3f3befa67962837"
  },
  {
    "url": "en/views/1.x/syntax.html",
    "revision": "a6bd5b79376f38d900f7a75e6074cdd1"
  },
  {
    "url": "en/views/1.x/themePicker.html",
    "revision": "6a73a8fefb5c61753ce81e96c833633c"
  },
  {
    "url": "en/views/1.x/timeline.html",
    "revision": "7543acefb25cef04a4e81933a1ca252f"
  },
  {
    "url": "en/views/1.x/valine.html",
    "revision": "22b6d83cf29e5cda8292b52485a0791b"
  },
  {
    "url": "en/views/other/about.html",
    "revision": "98640293c5d4db73b1c8ee166ea56731"
  },
  {
    "url": "en/views/other/notice.html",
    "revision": "de20f6b9916b1b2ca1a5d900cc1ae009"
  },
  {
    "url": "en/views/other/question.html",
    "revision": "2094712a16ed4db285635318703bfb10"
  },
  {
    "url": "en/views/other/theme-example.html",
    "revision": "672cb432ee6a7a4144e682ff8f16e0cf"
  },
  {
    "url": "en/views/plugins/backToTop.html",
    "revision": "d6fe713cd703f1fb2f2e32cf1e63cc04"
  },
  {
    "url": "en/views/plugins/bgmPlayer.html",
    "revision": "6bca2c0dc60eaafd807f4f704856d896"
  },
  {
    "url": "en/views/plugins/comments.html",
    "revision": "bdf5f2b64ea7abeabb1f4c44df1572d6"
  },
  {
    "url": "en/views/plugins/extractCode.html",
    "revision": "ba340ca5300f1bf106fcdfd712e7f37c"
  },
  {
    "url": "en/views/plugins/ga.html",
    "revision": "d4dd4f2c26816cc80ae85771e4eb6706"
  },
  {
    "url": "en/views/plugins/index.html",
    "revision": "092291c29005bd5c5602ea59a7e1ff85"
  },
  {
    "url": "en/views/plugins/kanbanniang.html",
    "revision": "f39cec984ede111e4fbd54e8da92be89"
  },
  {
    "url": "en/views/plugins/loadingPage.html",
    "revision": "6ef6c7aa08dd5de893745fc36a269411"
  },
  {
    "url": "en/views/plugins/pagation.html",
    "revision": "e60e981d6f0258b124d7562cef02b89c"
  },
  {
    "url": "en/views/plugins/rss.html",
    "revision": "9eaca89eb3a158ded6af407ed3b388a0"
  },
  {
    "url": "en/views/plugins/screenfull.html",
    "revision": "24ee49a0bca398c09d68ce1252436827"
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
    "revision": "12711519b9d078a4769668576014da0c"
  },
  {
    "url": "tag/index.html",
    "revision": "3e7a94d84e296bb46f1497048b81ab95"
  },
  {
    "url": "tags/Github Actions/index.html",
    "revision": "3857fcd1b50097c65e636a84b90d58f3"
  },
  {
    "url": "tags/VuePress/index.html",
    "revision": "bb0cdf42b6632a04eac9123d07701bda"
  },
  {
    "url": "tags/博客/index.html",
    "revision": "3fa957f5dbed977d931016c9352c5043"
  },
  {
    "url": "timeline/index.html",
    "revision": "42c7314807e04132d5bafa50f6de01ea"
  },
  {
    "url": "views/0.x/abstract.html",
    "revision": "08ca1fbaa1fa2000019fd864f0ac66e7"
  },
  {
    "url": "views/0.x/category.html",
    "revision": "a6f5ec604af7291139321c44377ff6b8"
  },
  {
    "url": "views/0.x/configJs.html",
    "revision": "b674a6af412d4170152449d076d75c95"
  },
  {
    "url": "views/0.x/home.html",
    "revision": "af8e889a839812ce39796d14aedb138c"
  },
  {
    "url": "views/0.x/index.html",
    "revision": "a1ba59a5ce792d0def9b1456f3d5a83b"
  },
  {
    "url": "views/0.x/installUse.html",
    "revision": "c778215bf0669f711f53806404aae104"
  },
  {
    "url": "views/0.x/password.html",
    "revision": "1cfa39d5ba6c9ed169c878e8ecf2c50d"
  },
  {
    "url": "views/0.x/tag.html",
    "revision": "11864b7e3ed6234de71df1effa3fd6fb"
  },
  {
    "url": "views/0.x/timeline.html",
    "revision": "e3857471276545af555514b1102d5031"
  },
  {
    "url": "views/0.x/valine.html",
    "revision": "51e3033a2157748bf1e9873ddea1f326"
  },
  {
    "url": "views/1.x/0update1.html",
    "revision": "d21f4b0bac825e318ea93988369f8966"
  },
  {
    "url": "views/1.x/404.html",
    "revision": "2dd42a63a4f312c6476786212185bb85"
  },
  {
    "url": "views/1.x/abstract.html",
    "revision": "bc47fe825b2a9d9e729802d26f70631e"
  },
  {
    "url": "views/1.x/blog.html",
    "revision": "5fdaef14741888c529e14b9797cbd864"
  },
  {
    "url": "views/1.x/configJs.html",
    "revision": "d6306e179daafb6f59861d5ed512355f"
  },
  {
    "url": "views/1.x/customStyleAndScript.html",
    "revision": "7caa4c4436652ad5b668614032590fc3"
  },
  {
    "url": "views/1.x/frontMatter.html",
    "revision": "520c1e79602ce033312ebc07d887b925"
  },
  {
    "url": "views/1.x/ga.html",
    "revision": "a6950c4e2c4d7b3e5016ca93c918029a"
  },
  {
    "url": "views/1.x/home.html",
    "revision": "567fa0851f29b746acb4a2443ee3d4ce"
  },
  {
    "url": "views/1.x/index.html",
    "revision": "c5658537c7193c1ec3b01ae084dffe3e"
  },
  {
    "url": "views/1.x/installUse.html",
    "revision": "1792517895eb96111c18bff337ac620a"
  },
  {
    "url": "views/1.x/mode.html",
    "revision": "4cf5db23179b7ce935dba248daebadee"
  },
  {
    "url": "views/1.x/password.html",
    "revision": "c11ef69d1d6a65564945cd3c17611c57"
  },
  {
    "url": "views/1.x/recommend.html",
    "revision": "aef2d261ca462bb3be29711f94f8b533"
  },
  {
    "url": "views/1.x/sidebar.html",
    "revision": "95608dfdd08d13e7613f409d912730ba"
  },
  {
    "url": "views/1.x/syntax.html",
    "revision": "3dc6c997a3baa053b3e1fb3dfcba3038"
  },
  {
    "url": "views/1.x/themePicker.html",
    "revision": "37f19c01e318099f15be4f826d6e29c4"
  },
  {
    "url": "views/1.x/timeline.html",
    "revision": "dda03b358325de7946ab4b8e34ca5e28"
  },
  {
    "url": "views/1.x/valine.html",
    "revision": "45b9e51e81a9911af482cbc608c72bd3"
  },
  {
    "url": "views/other/about.html",
    "revision": "7ee0904ae6702cf7837dbd56ac7d867e"
  },
  {
    "url": "views/other/deploy.html",
    "revision": "f6d429f695f23af404be8fb4ae160e18"
  },
  {
    "url": "views/other/develop.html",
    "revision": "5f02cbeea8853ee816f450e786fb10f0"
  },
  {
    "url": "views/other/domain.html",
    "revision": "a307db7dd5570e5bb97d37fd29da1c88"
  },
  {
    "url": "views/other/github-actions.html",
    "revision": "4c643f45ac8374569b05cc7463de7755"
  },
  {
    "url": "views/other/notice.html",
    "revision": "b28c0df8f620b5edadcc1457fff9d9bc"
  },
  {
    "url": "views/other/one-year-old.html",
    "revision": "9d6630c668c75a3b58c83d2d862ed941"
  },
  {
    "url": "views/other/question.html",
    "revision": "468af49590c0a7dd1b8ec061baa3a939"
  },
  {
    "url": "views/other/recommend.html",
    "revision": "386e6d934c31e8ded1fa53f96457cf7f"
  },
  {
    "url": "views/other/theme-example.html",
    "revision": "8ea5e496e86554d65bc53a646f8a0987"
  },
  {
    "url": "views/other/valine-admin.html",
    "revision": "e63f1683e9c236386bad483ba0f97f33"
  },
  {
    "url": "views/plugins/backToTop.html",
    "revision": "0f38e56feba4a7593f340db8ecf8b12d"
  },
  {
    "url": "views/plugins/bgmPlayer.html",
    "revision": "c462645f9cb93dc4ce4867e62270dbb1"
  },
  {
    "url": "views/plugins/comments.html",
    "revision": "2c52b28a1a0f82b704c123a7e0196abf"
  },
  {
    "url": "views/plugins/extractCode.html",
    "revision": "b13d45b953001ce0a1e58366af65fea6"
  },
  {
    "url": "views/plugins/ga.html",
    "revision": "0c6ea0647e0909bf6e955ffc667b4fbb"
  },
  {
    "url": "views/plugins/index.html",
    "revision": "95a2ffb1493e26a7668f933e3ce8f8a4"
  },
  {
    "url": "views/plugins/kanbanniang.html",
    "revision": "181d1bea4d128bd187d5b98aaafe41bf"
  },
  {
    "url": "views/plugins/loadingPage.html",
    "revision": "d2762b8ece096530be6fde4c42aebfd8"
  },
  {
    "url": "views/plugins/pagation.html",
    "revision": "ad6acfbd1004943ac4ca350f0888d87d"
  },
  {
    "url": "views/plugins/rss.html",
    "revision": "61c3cc0a6896650671c512221c5c077d"
  },
  {
    "url": "views/plugins/screenfull.html",
    "revision": "b50ff1fc9d2bb0899341d231de5d2500"
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
