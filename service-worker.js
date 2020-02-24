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
    "revision": "04492bb1677d52d9b224a499c8cb8eb2"
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
    "url": "assets/js/100.3ede987b.js",
    "revision": "883227687dc12c4d035eac42e54a9411"
  },
  {
    "url": "assets/js/101.3def96cd.js",
    "revision": "eb881676073f54434cf5447d03e4fc49"
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
    "url": "assets/js/106.8c43fd8d.js",
    "revision": "c5c71ee34c266865cc6acadda40e88d3"
  },
  {
    "url": "assets/js/107.2ed1db22.js",
    "revision": "29286db2ae618e7e2b59f605fa83297b"
  },
  {
    "url": "assets/js/108.25903139.js",
    "revision": "664367d013869f2acbb736d00696bd66"
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
    "url": "assets/js/23.391aad99.js",
    "revision": "e41a6e8c05ba53025b18afc125efdce4"
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
    "url": "assets/js/29.5a1b7b98.js",
    "revision": "79649fc7a18f3cf4c0d0feda88248fa0"
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
    "url": "assets/js/31.174a26f1.js",
    "revision": "0ff1aa6aaacc7c93380b399d9a8e264a"
  },
  {
    "url": "assets/js/32.46aaeef2.js",
    "revision": "a1f5f2f46f208fd6f4faaacc5d6f29be"
  },
  {
    "url": "assets/js/33.4e8e500a.js",
    "revision": "4ea0524a8b052b3dabc3ad31681d63a6"
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
    "url": "assets/js/38.bad0d5e4.js",
    "revision": "203ee509d8261bb02e0111d93449aecb"
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
    "url": "assets/js/41.214f287d.js",
    "revision": "f27d385686bf151a110e2167b61a85eb"
  },
  {
    "url": "assets/js/42.b4ea2957.js",
    "revision": "fbbd9f24e98df809e27a60c8afa28140"
  },
  {
    "url": "assets/js/43.842728cf.js",
    "revision": "74ae9df52670913c7e28a91df4eec72e"
  },
  {
    "url": "assets/js/44.07237ac5.js",
    "revision": "a554b521ed36df9cee50b0761da12b2b"
  },
  {
    "url": "assets/js/45.878c67ff.js",
    "revision": "8d7b4630a3c4aa887a4888f134ec2c99"
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
    "url": "assets/js/59.de16eae5.js",
    "revision": "4077c50d336c5a3f08bbb6ef388f032b"
  },
  {
    "url": "assets/js/60.a52ae234.js",
    "revision": "355d0c48d04ed5e4f261945b2739fcee"
  },
  {
    "url": "assets/js/61.6cc45e8e.js",
    "revision": "7e2727c17dc8b68995ee50ff960fd720"
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
    "url": "assets/js/71.90266571.js",
    "revision": "7818764add2e65941769c1da0e512539"
  },
  {
    "url": "assets/js/72.69e39b50.js",
    "revision": "2d448fdb919ca380615b8995d8107e94"
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
    "url": "assets/js/78.182a3871.js",
    "revision": "51cffc19c68636740a4b71078c7f233e"
  },
  {
    "url": "assets/js/79.24ffd973.js",
    "revision": "449ed272667c115439dfb880907617a4"
  },
  {
    "url": "assets/js/8.b0f55ca2.js",
    "revision": "c239cde12785b36b3cdc09a26ca2bf92"
  },
  {
    "url": "assets/js/80.1b7cf96c.js",
    "revision": "48b24a6ccebd0d174db49862ea059c56"
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
    "url": "assets/js/83.19c0b3b2.js",
    "revision": "ae4c43dd6e99075ad589280383b0ba75"
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
    "url": "assets/js/app.10820c2d.js",
    "revision": "c6ad7cc140af895521bfb4cefac8a983"
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
    "revision": "78114fbcfd019beaa55289b69c449bf0"
  },
  {
    "url": "categories/index.html",
    "revision": "04b5a795e74030cd2c6f783f33e31af5"
  },
  {
    "url": "en/index.html",
    "revision": "8f593090dd7eff3f706f063614a7634d"
  },
  {
    "url": "en/views/1.x/0update1.html",
    "revision": "8ac4592ccb3f07a69ef93c9705538254"
  },
  {
    "url": "en/views/1.x/404.html",
    "revision": "24c70d9aacafd875b6830db37098c231"
  },
  {
    "url": "en/views/1.x/abstract.html",
    "revision": "bda4249d55b6b835794241a706552cb4"
  },
  {
    "url": "en/views/1.x/blog.html",
    "revision": "598b4f5ff2a76bdfdf6d28c8fae7e2f4"
  },
  {
    "url": "en/views/1.x/configJs.html",
    "revision": "039fd2baa724a2174b16a8ec664f1550"
  },
  {
    "url": "en/views/1.x/customStyleAndScript.html",
    "revision": "dfa5eb9f15f199d7a1079405201611af"
  },
  {
    "url": "en/views/1.x/frontMatter.html",
    "revision": "53f1fe0e3d61f42e127ee8a6a7e0e9db"
  },
  {
    "url": "en/views/1.x/ga.html",
    "revision": "2a865160237d450724d3e115ef9452fd"
  },
  {
    "url": "en/views/1.x/home.html",
    "revision": "345105611f82092b71181d265c761fad"
  },
  {
    "url": "en/views/1.x/index.html",
    "revision": "a30eb663771bcd8a75133c65d23386dd"
  },
  {
    "url": "en/views/1.x/installUse.html",
    "revision": "d209fb2fb1597bafa3c885fc50ee19d1"
  },
  {
    "url": "en/views/1.x/mode.html",
    "revision": "8f55d56e773db3dfa2354745a9b75957"
  },
  {
    "url": "en/views/1.x/password.html",
    "revision": "4ea0cdaefe00306dc2f2aab14a6cb612"
  },
  {
    "url": "en/views/1.x/recommend.html",
    "revision": "c4289bd1159661226aa3b5b499ba624f"
  },
  {
    "url": "en/views/1.x/sidebar.html",
    "revision": "ae841c47fa9112e8d43213e3e0e3b7bf"
  },
  {
    "url": "en/views/1.x/syntax.html",
    "revision": "ef80f99754ecffcc8cd2ba95acd45952"
  },
  {
    "url": "en/views/1.x/themePicker.html",
    "revision": "a207175655c254a29de9ad7ac9a84a09"
  },
  {
    "url": "en/views/1.x/timeline.html",
    "revision": "e19816c1c2def190f4cffc932b53bbd1"
  },
  {
    "url": "en/views/1.x/valine.html",
    "revision": "922c3a07ef1fa861b01a093110283573"
  },
  {
    "url": "en/views/other/about.html",
    "revision": "695485c24dbce7e35ca4444581657dea"
  },
  {
    "url": "en/views/other/notice.html",
    "revision": "7255337f04883165d3d9648872d4d693"
  },
  {
    "url": "en/views/other/question.html",
    "revision": "8d2e2249d8606ad2343c175873b373b3"
  },
  {
    "url": "en/views/other/theme-example.html",
    "revision": "a9695bbc900887f425812c2adb63d9f7"
  },
  {
    "url": "en/views/plugins/backToTop.html",
    "revision": "ef77736fda133bfc7ede629ca9538d6f"
  },
  {
    "url": "en/views/plugins/bgmPlayer.html",
    "revision": "d307dc3172742690ab997329232bc25d"
  },
  {
    "url": "en/views/plugins/comments.html",
    "revision": "28ad9754000bb98286ba499caafcc73e"
  },
  {
    "url": "en/views/plugins/extractCode.html",
    "revision": "9d8c4ff94e6f5e3c0b43c56dabdbfaf1"
  },
  {
    "url": "en/views/plugins/ga.html",
    "revision": "a41cbff20e0ba03b5b818e5e15348db3"
  },
  {
    "url": "en/views/plugins/index.html",
    "revision": "a4060442683b3e1c7589975eea6b1db3"
  },
  {
    "url": "en/views/plugins/kanbanniang.html",
    "revision": "0b84486e0c28f05eef9223bdc371f718"
  },
  {
    "url": "en/views/plugins/loadingPage.html",
    "revision": "38f07ad3547ad5fa23cf54aa3c57b62c"
  },
  {
    "url": "en/views/plugins/pagation.html",
    "revision": "e6439c71e716ac93d8af88fc36d7c534"
  },
  {
    "url": "en/views/plugins/rss.html",
    "revision": "9c13aa08d43e59f29dbe1855fcfc88a3"
  },
  {
    "url": "en/views/plugins/screenfull.html",
    "revision": "fdca9012ccc3ad3aa1906b4809a93b8c"
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
    "revision": "1a22e1eeeb8272b7d82c64d068309645"
  },
  {
    "url": "tag/index.html",
    "revision": "c2142eaffd59806e540838ae35c43e56"
  },
  {
    "url": "tags/Github Actions/index.html",
    "revision": "9967fe7aabc9172f802a46b5dd2ec57e"
  },
  {
    "url": "tags/VuePress/index.html",
    "revision": "ba498fd4457f0b1c79c5edfdaaa9234e"
  },
  {
    "url": "tags/博客/index.html",
    "revision": "c29e624d447074245dce27925e465064"
  },
  {
    "url": "timeline/index.html",
    "revision": "41a66881d23b6245eba8c7f8d245c2c0"
  },
  {
    "url": "views/0.x/abstract.html",
    "revision": "bd8b53d91f81c36966bac10fc7dc8526"
  },
  {
    "url": "views/0.x/category.html",
    "revision": "2a80e2af4c2a6f300808cc5897f5249b"
  },
  {
    "url": "views/0.x/configJs.html",
    "revision": "c2c7c2ebf6aa2e34a41f5129f258df7b"
  },
  {
    "url": "views/0.x/home.html",
    "revision": "a4daf8500cb5f19a31cba7ad57bab88e"
  },
  {
    "url": "views/0.x/index.html",
    "revision": "5f19f282dbb42465ae58566b1b516379"
  },
  {
    "url": "views/0.x/installUse.html",
    "revision": "f952cfa24e89c655069d2b7d4c0df08f"
  },
  {
    "url": "views/0.x/password.html",
    "revision": "2ffff4e9a6cc750c5a09f5f6a13352c8"
  },
  {
    "url": "views/0.x/tag.html",
    "revision": "da5bb10221124943e804f6078580bc4e"
  },
  {
    "url": "views/0.x/timeline.html",
    "revision": "9e8e31ef8627e7b4fe433e5e1a943fd9"
  },
  {
    "url": "views/0.x/valine.html",
    "revision": "7d00435927aff1a45b4ba0f19b225c21"
  },
  {
    "url": "views/1.x/0update1.html",
    "revision": "89d9960d81f3d5cedb2f0d9ab7455d0e"
  },
  {
    "url": "views/1.x/404.html",
    "revision": "53aad8fbb5379c6d4404edb08a4be7f5"
  },
  {
    "url": "views/1.x/abstract.html",
    "revision": "6f3e3bd78c2efb0ce70b58a6cb2dc90c"
  },
  {
    "url": "views/1.x/blog.html",
    "revision": "1069cfdc4ed11e6ad2c0de17c606b935"
  },
  {
    "url": "views/1.x/configJs.html",
    "revision": "27bf46294454c68a0f5eb31a89582014"
  },
  {
    "url": "views/1.x/customStyleAndScript.html",
    "revision": "aa5084ffe6768cc216522208976d2032"
  },
  {
    "url": "views/1.x/frontMatter.html",
    "revision": "274ab3b389aee09342fa34ff0d79426a"
  },
  {
    "url": "views/1.x/ga.html",
    "revision": "a13542cb9b006675d24a85e2642027dc"
  },
  {
    "url": "views/1.x/home.html",
    "revision": "e8cb80b8f65eec8ec1acc207e3d06753"
  },
  {
    "url": "views/1.x/index.html",
    "revision": "035ad43b9c3c8b6d8278798039d3e5a1"
  },
  {
    "url": "views/1.x/installUse.html",
    "revision": "8b80ca5a0f8d0012dcfc4844bfe11988"
  },
  {
    "url": "views/1.x/mode.html",
    "revision": "a7ab24070f46bcf92001ee812ff51afd"
  },
  {
    "url": "views/1.x/password.html",
    "revision": "0de3534f4c4419559922ac98ebd5f943"
  },
  {
    "url": "views/1.x/recommend.html",
    "revision": "587a429f3022c226bafc32ab1dfd6dea"
  },
  {
    "url": "views/1.x/sidebar.html",
    "revision": "525945c4512bb79ca9e3f187061ff3dc"
  },
  {
    "url": "views/1.x/syntax.html",
    "revision": "2501a47fbdaa44d348099a70c41429a6"
  },
  {
    "url": "views/1.x/themePicker.html",
    "revision": "7480e001256e0966d7aed9cc8d6217e7"
  },
  {
    "url": "views/1.x/timeline.html",
    "revision": "27f7426f604e72a3861bfc0d0f9a703e"
  },
  {
    "url": "views/1.x/valine.html",
    "revision": "e6e9aed670fd9662a63b28416359dd04"
  },
  {
    "url": "views/other/about.html",
    "revision": "1aa3a44fef335a4687b506aa12ea5824"
  },
  {
    "url": "views/other/deploy.html",
    "revision": "715d70d480b0ae427148dc6a99ae83a3"
  },
  {
    "url": "views/other/develop.html",
    "revision": "e674ecf76a988945862088ca39474328"
  },
  {
    "url": "views/other/domain.html",
    "revision": "a5cd03da3a6ea470c9aeb00dc9f1f1f0"
  },
  {
    "url": "views/other/github-actions.html",
    "revision": "3124f9a0d8ea9a3482c51fb07f5e24a2"
  },
  {
    "url": "views/other/notice.html",
    "revision": "bebcdd6c059a737c90f2e50143d1f77d"
  },
  {
    "url": "views/other/one-year-old.html",
    "revision": "ec89e5e41338eb43e8989e3ba174f3ce"
  },
  {
    "url": "views/other/question.html",
    "revision": "bb5a9c3c6ba47e782d47db3e94cfa1b2"
  },
  {
    "url": "views/other/recommend.html",
    "revision": "3e25afd7fa399ba1c6bae8d50cff21b8"
  },
  {
    "url": "views/other/theme-example.html",
    "revision": "cb6b6533005d633bc05cf7c2ddb6c431"
  },
  {
    "url": "views/other/valine-admin.html",
    "revision": "977493ee78412ac214cd37464280ae63"
  },
  {
    "url": "views/plugins/backToTop.html",
    "revision": "01071ce65e4812e082d9bb2417716a57"
  },
  {
    "url": "views/plugins/bgmPlayer.html",
    "revision": "c149c952d2645e79966ade5ccf4732fa"
  },
  {
    "url": "views/plugins/comments.html",
    "revision": "fcdf7dee69b97dc46b3878f685126e05"
  },
  {
    "url": "views/plugins/extractCode.html",
    "revision": "f38da93cf2bfa00ea8334e2663b7f48b"
  },
  {
    "url": "views/plugins/ga.html",
    "revision": "39b619c927451638bca95627286de6cb"
  },
  {
    "url": "views/plugins/index.html",
    "revision": "1161d0757940a116797f2add8cc48c93"
  },
  {
    "url": "views/plugins/kanbanniang.html",
    "revision": "5e191500a1dc6b551e415f81449be398"
  },
  {
    "url": "views/plugins/loadingPage.html",
    "revision": "4ba6a9455efaf93ddef07ea55324e351"
  },
  {
    "url": "views/plugins/pagation.html",
    "revision": "a988cc189d6a4db7470e37277433b522"
  },
  {
    "url": "views/plugins/rss.html",
    "revision": "d70ebaf6a3f5e6f91db75ca0de85a8c6"
  },
  {
    "url": "views/plugins/screenfull.html",
    "revision": "2fe0b1fdfc195a5bb0aded41c0b6ac54"
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
