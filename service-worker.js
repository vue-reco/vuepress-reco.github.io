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
    "revision": "3fcd5dca05b568ad6216714d1aec8308"
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
    "url": "assets/js/107.8b473e87.js",
    "revision": "83d355f23031bb4e71907c5aeb81cbfd"
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
    "url": "assets/js/38.64fdfe62.js",
    "revision": "8b6a82c91fb5f8699c52db9c90b015af"
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
    "url": "assets/js/75.2d411ae0.js",
    "revision": "49fe9358b34bb60b1a844e75b157764e"
  },
  {
    "url": "assets/js/76.3890cdb7.js",
    "revision": "4c4bfdd0049eb6e27df0c0ea3460d89d"
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
    "url": "assets/js/79.8411a8a1.js",
    "revision": "d82a754e6759ae9d7aef0b4b5bcf9906"
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
    "url": "assets/js/82.848b9f2e.js",
    "revision": "dfbdbb16d12b1d93bca1e44a3e942b51"
  },
  {
    "url": "assets/js/83.d36b0a9d.js",
    "revision": "ca0cd915e57ff66fa35ae99c7ce7666d"
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
    "url": "assets/js/app.44c3d45a.js",
    "revision": "e1f0a786c3e0006f2801bf09f6dc22ce"
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
    "revision": "e82d5f432f846381369bc41b656e3be0"
  },
  {
    "url": "categories/index.html",
    "revision": "14a42634a9f9d2a2f52748c73c563063"
  },
  {
    "url": "en/index.html",
    "revision": "52feafdceb61b84dd1fd2b9ffb0b1aa2"
  },
  {
    "url": "en/views/1.x/0update1.html",
    "revision": "88d9e1bfac8be54122e4cbad101bc4de"
  },
  {
    "url": "en/views/1.x/404.html",
    "revision": "d4afbbb5a79201ad12b53f8b11e064f0"
  },
  {
    "url": "en/views/1.x/abstract.html",
    "revision": "ce82ff21d8889e761ecf25a871c9d9c2"
  },
  {
    "url": "en/views/1.x/blog.html",
    "revision": "43cd49126316431ea77bd7e3aae75d67"
  },
  {
    "url": "en/views/1.x/configJs.html",
    "revision": "87d59b5329d2de59adbf9139c0c013f6"
  },
  {
    "url": "en/views/1.x/customStyleAndScript.html",
    "revision": "78eb8a81219d7b6149ecb747d60cceb8"
  },
  {
    "url": "en/views/1.x/frontMatter.html",
    "revision": "ff54b9130c4addde97ed429ed426d690"
  },
  {
    "url": "en/views/1.x/ga.html",
    "revision": "1be28b48844df865ec259ead49c067a0"
  },
  {
    "url": "en/views/1.x/home.html",
    "revision": "78740e5010c2079637e022af0e735a44"
  },
  {
    "url": "en/views/1.x/index.html",
    "revision": "19be64bf7f39246583918e0878053fff"
  },
  {
    "url": "en/views/1.x/installUse.html",
    "revision": "4e09722ed1c70516b10c2e6b0e20071f"
  },
  {
    "url": "en/views/1.x/mode.html",
    "revision": "2d497f8dc1c4865e8619cf78d20ecfc8"
  },
  {
    "url": "en/views/1.x/password.html",
    "revision": "f9081241f9c30d03848b058921d1e80d"
  },
  {
    "url": "en/views/1.x/recommend.html",
    "revision": "fe34aeab9522b72ff4dfc4d6ac5ee881"
  },
  {
    "url": "en/views/1.x/sidebar.html",
    "revision": "22d49a210df496398e8034fb2b3c9453"
  },
  {
    "url": "en/views/1.x/syntax.html",
    "revision": "f77f2854d93c9cd7c2f18bf5183d3a65"
  },
  {
    "url": "en/views/1.x/themePicker.html",
    "revision": "f5d5715caca77a3bbf596da4f21440e8"
  },
  {
    "url": "en/views/1.x/timeline.html",
    "revision": "8a3c07ece13e562227f5ed97d0d1bb96"
  },
  {
    "url": "en/views/1.x/valine.html",
    "revision": "0b7c4c7bd773924dce5a9525e57d886d"
  },
  {
    "url": "en/views/other/about.html",
    "revision": "22bae2c8d5a280c64dd8921eafc573bd"
  },
  {
    "url": "en/views/other/notice.html",
    "revision": "ac3d11a371c381462f46af790593dee4"
  },
  {
    "url": "en/views/other/question.html",
    "revision": "44aa9a5750c2ef4a6f5c29910d44ebe3"
  },
  {
    "url": "en/views/other/theme-example.html",
    "revision": "630712de4b091f4d75a347e229f62e87"
  },
  {
    "url": "en/views/plugins/backToTop.html",
    "revision": "b71794eb02212062fd14627d98bc9ee9"
  },
  {
    "url": "en/views/plugins/bgmPlayer.html",
    "revision": "96c7d80eeba79e77aef5abc87351ab71"
  },
  {
    "url": "en/views/plugins/comments.html",
    "revision": "7ccd1775db995f0149012fe61f044d7c"
  },
  {
    "url": "en/views/plugins/extractCode.html",
    "revision": "9abdf17d505198a4cec317ad18a8ce46"
  },
  {
    "url": "en/views/plugins/ga.html",
    "revision": "3fc2db3b7623614cc6a0944d7d592b8c"
  },
  {
    "url": "en/views/plugins/index.html",
    "revision": "971bc7e0087ae13c39e9c844261272d1"
  },
  {
    "url": "en/views/plugins/kanbanniang.html",
    "revision": "10cb6da167c70d143ae3d972ddfc61e7"
  },
  {
    "url": "en/views/plugins/loadingPage.html",
    "revision": "3edc91b1a03bccdd04aae449f9030651"
  },
  {
    "url": "en/views/plugins/pagation.html",
    "revision": "3b99f23f9e6ee61d409cbf6fe2db9eab"
  },
  {
    "url": "en/views/plugins/rss.html",
    "revision": "e4bed2347823aec1f119d476dad0b6f8"
  },
  {
    "url": "en/views/plugins/screenfull.html",
    "revision": "1244a6b694f697835b5b95be15a50f8f"
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
    "revision": "3af19e22a3f9f0ae380bc3da23171189"
  },
  {
    "url": "tag/index.html",
    "revision": "5a5ca7d8be8f81a84ee3f06541882bb0"
  },
  {
    "url": "tags/Github Actions/index.html",
    "revision": "ec29f6ad9b46965e369bdfb172ebbefd"
  },
  {
    "url": "tags/VuePress/index.html",
    "revision": "8724177faf1828c7f16fd26b4df5ebd6"
  },
  {
    "url": "tags/博客/index.html",
    "revision": "0971b921a2b521d4600764b62b6a9a6b"
  },
  {
    "url": "timeline/index.html",
    "revision": "43ec6cef1b56df375ec9543486980b7b"
  },
  {
    "url": "views/0.x/abstract.html",
    "revision": "750d85cd7c5c6ab689e41aad6a4b50f6"
  },
  {
    "url": "views/0.x/category.html",
    "revision": "6d5ddd4c85900f35676d00329a1c7c6a"
  },
  {
    "url": "views/0.x/configJs.html",
    "revision": "565e2a405b75dee2e06425e39de776af"
  },
  {
    "url": "views/0.x/home.html",
    "revision": "24297604cefee94767250f09e6915357"
  },
  {
    "url": "views/0.x/index.html",
    "revision": "37ee455b4ac6ccff1c554eca102b7286"
  },
  {
    "url": "views/0.x/installUse.html",
    "revision": "2d7ac1c894bbca67df06ff7b9e82d06d"
  },
  {
    "url": "views/0.x/password.html",
    "revision": "58d59abf6c2c61f446af9a62c85eaccc"
  },
  {
    "url": "views/0.x/tag.html",
    "revision": "062cd2368b6315f8faaadf1a48f97f5b"
  },
  {
    "url": "views/0.x/timeline.html",
    "revision": "4d48886c95e8953944c499a080907b5e"
  },
  {
    "url": "views/0.x/valine.html",
    "revision": "60b2221f20e29bd90bfc4ed39518b78b"
  },
  {
    "url": "views/1.x/0update1.html",
    "revision": "2695d66f15f77620db96a710cfa16c99"
  },
  {
    "url": "views/1.x/404.html",
    "revision": "25f8ec13f563291e690fcd91b197cb80"
  },
  {
    "url": "views/1.x/abstract.html",
    "revision": "2be33fce8e3ea1aca06d7f2bcfcf3875"
  },
  {
    "url": "views/1.x/blog.html",
    "revision": "cc1e954e15c101884d50a26e54bd79b9"
  },
  {
    "url": "views/1.x/configJs.html",
    "revision": "d9f77cac86d4c68b02b104b7973d44bd"
  },
  {
    "url": "views/1.x/customStyleAndScript.html",
    "revision": "0e6ca45c7bfe1ffe67c43af7b618f0ed"
  },
  {
    "url": "views/1.x/frontMatter.html",
    "revision": "d96aaeaa7c258ba684f090439e086e87"
  },
  {
    "url": "views/1.x/ga.html",
    "revision": "da9590f8d7117b5da0b8ec2dc72a1c06"
  },
  {
    "url": "views/1.x/home.html",
    "revision": "84d30493ea843f307a464004eab189d6"
  },
  {
    "url": "views/1.x/index.html",
    "revision": "27330150242af13772a0e6fe417a54c8"
  },
  {
    "url": "views/1.x/installUse.html",
    "revision": "8fc97549911ce0abf7f165ea2266af36"
  },
  {
    "url": "views/1.x/mode.html",
    "revision": "07180e903fc9c754ffc5340733daf380"
  },
  {
    "url": "views/1.x/password.html",
    "revision": "d943177bec8fdbcd0afc6da72e708332"
  },
  {
    "url": "views/1.x/recommend.html",
    "revision": "f3973e5f9c0ce366c7f5b897956d8cdb"
  },
  {
    "url": "views/1.x/sidebar.html",
    "revision": "258312ac89faab4caff365ac7ad1e2ff"
  },
  {
    "url": "views/1.x/syntax.html",
    "revision": "3b2e5633422b9ac1c55ef024d8f42033"
  },
  {
    "url": "views/1.x/themePicker.html",
    "revision": "da05cce0e170ec0fea04d5baaf2ac378"
  },
  {
    "url": "views/1.x/timeline.html",
    "revision": "e8f60f3cd2314f421803dff47513867e"
  },
  {
    "url": "views/1.x/valine.html",
    "revision": "67ac4e324f86e70874c442a7bedeb5b6"
  },
  {
    "url": "views/other/about.html",
    "revision": "d582f8bfb67da9a73da9f37c2e93cd2b"
  },
  {
    "url": "views/other/deploy.html",
    "revision": "ba104f6439aafb4984c8b80d0ddb8684"
  },
  {
    "url": "views/other/develop.html",
    "revision": "4a36a188977b65a4f2a554d1c7c447e3"
  },
  {
    "url": "views/other/domain.html",
    "revision": "ac4f0129537dd62137afe9730979c42f"
  },
  {
    "url": "views/other/github-actions.html",
    "revision": "677ebe6ee5b7af20db66e30cf157fcef"
  },
  {
    "url": "views/other/notice.html",
    "revision": "a3945502b8adbc421990aab22ca36329"
  },
  {
    "url": "views/other/one-year-old.html",
    "revision": "ae1715e5364035ad9ee475b62dc7b3ca"
  },
  {
    "url": "views/other/question.html",
    "revision": "d942c81759c927c7ddcf74cc1daf2e6f"
  },
  {
    "url": "views/other/recommend.html",
    "revision": "69a127e428354e03609c3d4ba3128d1f"
  },
  {
    "url": "views/other/theme-example.html",
    "revision": "7914fa169fd2a9ed235224f873c3d0a2"
  },
  {
    "url": "views/other/valine-admin.html",
    "revision": "ba5da16652797a3db1fcedb2c4f12222"
  },
  {
    "url": "views/plugins/backToTop.html",
    "revision": "f7ebab90c148f5e84f5d20a0593082a7"
  },
  {
    "url": "views/plugins/bgmPlayer.html",
    "revision": "59a4b4c2f505c68b7656ed3416de5a14"
  },
  {
    "url": "views/plugins/comments.html",
    "revision": "39a79a3914932a6cfa8ec9666fd12614"
  },
  {
    "url": "views/plugins/extractCode.html",
    "revision": "1f7ff5397bf88e8eec93af7373446973"
  },
  {
    "url": "views/plugins/ga.html",
    "revision": "5f846cd130a9bbdeee18f3e890427df3"
  },
  {
    "url": "views/plugins/index.html",
    "revision": "555c92c04c36848374a12cd881653cc0"
  },
  {
    "url": "views/plugins/kanbanniang.html",
    "revision": "0dd968ea0fb12a7eea97afa1375a7ffe"
  },
  {
    "url": "views/plugins/loadingPage.html",
    "revision": "67741b229db90c260d37c914711c4671"
  },
  {
    "url": "views/plugins/pagation.html",
    "revision": "656a09852f813fe1ae894efe9c5f222e"
  },
  {
    "url": "views/plugins/rss.html",
    "revision": "383534d1eedbf041c8dbde15ce41d935"
  },
  {
    "url": "views/plugins/screenfull.html",
    "revision": "d27d06c82708dc51d864fcaca922aa3c"
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
