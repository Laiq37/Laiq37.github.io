'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "ec7d9303f96792f0465782ecea09089c",
"/": "ec7d9303f96792f0465782ecea09089c",
"main.dart.js": "d6bd1288750908741140ef1434676632",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "e3ba0936cce0ed61f1884210da59afbc",
"icons/Icon-192.png": "45ccc3c17e417eb1ae5cf520c65d3f90",
"icons/Icon-maskable-192.png": "45ccc3c17e417eb1ae5cf520c65d3f90",
"icons/Icon-maskable-512.png": "8e7d731479c8e7407e6cc7a4038518fb",
"icons/Icon-512.png": "8e7d731479c8e7407e6cc7a4038518fb",
"manifest.json": "0c0602d92bc8610c22c66e8af68489f1",
".git/config": "8a01bf707a1ece0f9d876747a2b6d02d",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/69/c731084c4740a2b0d897a1defb08e78331db96": "19529b4181cbeec66e89726d906f3454",
".git/objects/51/662b0b3081f79a823a60d18097b06f970d95c6": "8b9e0f3becd68bd441d8d10f25c58b38",
".git/objects/3d/7f881c1d12455637bd5b34ed3ae9a6ba838700": "d3fd74a75a9554481ac326c576e16123",
".git/objects/0b/75db1f09050b202ad4c4aeffa8b8dccf833013": "e784605697ead22e349be9f3e5e1780e",
".git/objects/93/bd55ee2ce4e1f6f04a579604ac20ee1e67f609": "980d14f4d8b91b987c964a7eda2aacb5",
".git/objects/93/e4bb8933f3038a004c9f144ec82b1e2f959d62": "885b5627e39d0802d39d9e6adb50fe7b",
".git/objects/93/32533fdda89672676b3f975f1eb38147c07e51": "c04f3acc716d78a68e064730a34e207d",
".git/objects/60/b9ca469c2aa99e821bca9e230dbd1d1d0d5498": "cfb00d09f084adb724bd5b1648c99c61",
".git/objects/5f/2ae38a4b83759f476d6c7feb1896ce93ed17ad": "01d1355b494e9354cb4be7d56cc4f7f8",
".git/objects/9c/16deb6d24b44a0349b035f144dd335eadb6ab3": "0d683c7a437fbdffcc6a84dd0eff95ac",
".git/objects/02/0b52cfd861457ad4e474e9d34b3583a8cdad99": "f716c19f0c78bff71cae0f468b7c569f",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d0/089055d8c35c80fed73e2e6ec840d737a561db": "5c34cce922e71ee111bcce7179508d6d",
".git/objects/a5/2931742edc4ffbb8634774e5a51d12af1beab1": "4a5d64ec4e12136d0d80b20b4cee431a",
".git/objects/ab/60e6047c20d6ab3f80c92169b994d5c3c0bb3b": "84e159a13fa1566631136756ed95ec43",
".git/objects/e2/4a14cb3c5adf2a8819681bf2d88f2e23032744": "3d2ec7184007cff3c5657472cccdb60d",
".git/objects/e2/c6ce4ef6870040bfe624ede3d415ecae720f59": "c1d07c4425bb7b5e341e5b8c385aae91",
".git/objects/f4/fab32f2cbf88efdd244dc9079f23f0c6556c40": "a8e4f77851d3b453af7d16c0b8c66d48",
".git/objects/c7/fd7d86e171aa5a14bf2d5c21c1253b883bef89": "fe5a7e2c0c97b32cee59c0cfd5678d59",
".git/objects/c9/efbbb6c97f0077b4febe9f3f68e1cc3653e8d0": "7462a6b182199a4df1943dce30f6c02c",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fc/77dff05e4ef44907fa79a9985e6a7b1489a402": "b8d637499f5df956feee45992f6cbe9e",
".git/objects/fd/9adfeb4b397c34c7cf4ceb675619c1d4c6a38e": "07c0bf82f019e6aafa79b975915ba421",
".git/objects/f2/8dad4247b54876629c86555da9e47d58a16288": "5ded76010ea999efb2cde7b71283137c",
".git/objects/ca/2435107dd7b4bb20aa1e0e940f37a30bc70266": "f45a269fdf3219f8d4ec2e9643b0fc16",
".git/objects/fe/839daff5c73ecdcc1f280f087aabf07544e3e5": "d2d3d8551d1e5cf3cc61cb0a028c2c91",
".git/objects/ec/0d30503d7cbf1d7dcc26b12318a1fa6bb0bedc": "888f65b2ae7646044c9a76d641ab979e",
".git/objects/27/ba249725adc637a1d26e7b483ef371ebb8d1b1": "613213ea04397434b7c34d04859ceea3",
".git/objects/11/de5fafd119704e5d1995753bda73425657b4e1": "9726318ecfd37a2a0031687514142372",
".git/objects/29/b77afa18386856b065f5396b04d38cebed5a77": "0ee08c43a539268ddecbcd498e08038d",
".git/objects/16/4a218a7ef6309d18f56b6fbc042bf8a8995cdc": "7b78469664b6f3dfdd96cbef0feb2c1d",
".git/objects/45/ea75fbe34ccc52d997dbd6aeb22f57e4134707": "e64b1fdc91fa0112904798cc6e6474f9",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/1a/c7fed18a58963392314028c4140cf1d5677b5c": "863298d7e1301ab81f956fb0ea29798a",
".git/objects/17/58116030d57acfc02c0f56f02b56684c273d49": "22bb84cecabc1ca5cae127da64d7e0f9",
".git/objects/10/89bdbdf035eb95acd0a652ab1c75cd027ccb0e": "4e386bdc5c14456d0005ec80c6e96049",
".git/objects/10/e57ffdbcabcca10f738af1b93cc81ea4138128": "fb95ebde8241ad1dd9980b2bc8450aa6",
".git/objects/19/e2713e444b7cd6080e7273012f98b0aafd2342": "dcf1a04b0f84e46a14c20a4c31973e5d",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/26/48e6a04b3e751604194c2b5a5f31838087df0b": "f78f31bfd8db86b1258245822773e414",
".git/objects/26/74559adda7733087ff496c98f6d339d912bb07": "e589fc1c5f77ffeeb08b1833d2aa6948",
".git/objects/4d/bea51e91c7dfecb760e6a68d391b5fa413f9bb": "2eaa3d40e743447637771fe260fac922",
".git/objects/86/2cb37e406218bb6ce81693378cdf14d0194e83": "59a9a7818911d070aed2876cf3d413f2",
".git/objects/88/6444a58ff5703cdcfb585855b176ed7eff42fd": "74661b01c019167aa43f63ce4d6e0bbc",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/9f/b6861409df9022c02b12e2f94bdf33f0c2d2c6": "814d16b8c0eb8eb74721be19c7cf5d0f",
".git/objects/6b/f87c28949fe16ce8152a5028ea7f168de1f7ef": "ed99d110585a56a42a689308f578abec",
".git/objects/07/f965a6769f0618c2a166e57b9197d9633e4ae4": "62b1d20e4db36a16a907b7d4b6d8b441",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/91/34b6be20786a3dcdf0f1c7c1d3891c5faac50f": "a5398a315fb114e9c6255196b4b2c3a9",
".git/objects/96/dcd9913d2de0e9465cde30f2c2c8edc0c9482a": "d0b3ed3f1516bbe4d0aff726acc1f46a",
".git/objects/98/7e187e092c1bb4d6cd1d9aad92df0e73a3cf63": "46f7a7255d97c5ba3355f9b9675207e3",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/629968182b614d8121a0d6befae08e3d859312": "25d0e0e37b9d50df9a451ded6eb71528",
".git/objects/3f/ca02490daf34cfca1b4238c9535153bec6dbd6": "088e9cb92524b4ea9b6906bd1f99c726",
".git/objects/5b/2c242d3c7ff508d01b704bce1bcda55197c3eb": "98da71ddc80ffbcdc1b58e8732341f74",
".git/objects/5b/6d58d30f713dd6d4bfed623e5159110ae0ae16": "ccf6e9450f20a1938a69381580c782be",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/01/4a41db1d173b7dd236100450bac7cc397227c9": "2ed6f33baac711d9dfe03fee9bb9cb7a",
".git/objects/6c/98bf9eaa14601589157a8ec3b9e0d7661352d0": "23cd740d6fc5626b0573bc5d04a0f9ba",
".git/objects/39/8c95e374947191448bb673325541676e21ba66": "cbfff2a4990c507d2cf795065812ad4e",
".git/objects/39/66fc69d569f87c22b7523eb377403ce33b328a": "3118b6e8cef70e42f2c26ebb5ecc8fca",
".git/objects/52/21cc3fee7d32820f79bbbdd8dd00e7a48d99d3": "7441347b321414790439d63a2f259272",
".git/objects/97/477864eba4063fec9e96b0d6a872d54b3fc5eb": "7b7c634cb145c0206c5b074bd98964e0",
".git/objects/63/0fa9d1c799e47493c39729ef96a6d294834279": "509e8a1360d0c6839cb46493b72e44e7",
".git/objects/63/ccdd4f1df84de2232dc528f0da5dee7eac96c1": "a2249e88d382736ef0910508d91bea3c",
".git/objects/64/d89483a750c19e653ad5e32ea4f205a76753b6": "01577873efdcbd856e3fcf411c19d28a",
".git/objects/90/0ca91972a7c7ac20070f592f2acc72ee6f1f7b": "cb04de4401007dd300184ba39f58aef2",
".git/objects/bf/2c2d3db3736584752c2c65636882edb48a4be7": "1327713fcbf9ff0fa9da5dd8fcc2c34f",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/a0/dbb3c52de45974a99d87a3e16c35d270bf0f7c": "4575ee7f08a56387d00809aec8c4fc73",
".git/objects/b6/51d01126f2bc928303d45e8002abad1e345acf": "4cc5421dc2fa76616129294cf9d30bf4",
".git/objects/b6/980db8d2903970990a178915eb34510ffd9612": "2229f4edc654bf1dabe752129074ff03",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/aa/99fbd20fc9a6a09fc62958e674ece6aee53306": "296c52562f4370c5db319b0bee096538",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/a6/1284ce5f3bf5184bdad3699de54d4bc8cc8241": "89da62d38e68cef7ad772ad619746d45",
".git/objects/ef/5fd6a52f05e2968ad1a2a45568479227bc9f4e": "e04f8eba75d7fb5132aa0939c5ff93ff",
".git/objects/c3/0a52ec307942a39e588560b526256b1b50ec44": "07cde0ebb9b30cc7fb372159b048160f",
".git/objects/ea/76d0990245e6e44143424f672136f1f9f0df21": "ae3322b3f15d258b8944d0fdc33d0541",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e6/5c55a5b595e20e25bd59a1c8bd161d5b13e8a3": "a790fab1222de456f3faf3ebd3e8b99d",
".git/objects/f9/c235f44bdd360f5a462bb1bf51cd0552f4b29d": "72a15957bb578d30af6705ec6df877be",
".git/objects/f0/3889dcf5b972b9ec87b38d689e191693c2de3b": "892c190744e1b5fbec2390328bb884ef",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/ff/67036c8fe024cfcd53bd9a386ffec28060d117": "6542d641f07d50bc213b2710240938cb",
".git/objects/ff/8c8ae3a68dd1f84630cf492c3c8de0827053b0": "7abcd05e6076a89d2d41f79dfc643499",
".git/objects/ce/8a0407af949b72ec28bc97f6e702c47be0e22b": "741c0973cfb90f73ec84b9b587b2014c",
".git/objects/46/d55d1440b2b2db85c0c9cdfe32b6488d11a773": "49e04db10a0622a32b0079b6d4bfaf34",
".git/objects/79/f35d7ec877a215739c4bd5d1a8f2804f6cd195": "feeca902d8178af57015efc5628273ac",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/48/61a58da16248ec7c443cf87e24b6b8e7046190": "7006a0a13be8c387f78c2487fa67df1e",
".git/objects/1e/9e807200dab78dee246f1c3652aa258ec45904": "34044ff646a37f09acdab9b3e44d4d88",
".git/objects/84/019b6480bb359ce7406cd4ad30182fa24d0e15": "0a42ac72de92d79855276e41e17b705f",
".git/objects/4a/fc7386ce20fc801d3c3453eaaf1601894f67fa": "4d6384e5b47501c1fa6e2670871ac8cb",
".git/objects/49/50bb0c7051366c73fad1da84859ee3f499b6da": "d95a346652b2096eacb0e2601e1b93bb",
".git/objects/40/ddea80c3189bbdbee1f21dd3e5ba721268b70e": "75dc30d3102b65a8af48cfb285276026",
".git/objects/2e/086ba4df618a94747fd7460b91e25a8108597b": "79fb6c8269d901f5114b03ac67355947",
".git/objects/8b/e529d2cff23d4274471a4b2e6ccd52feeb56aa": "b208f3e04793a9c8c3a1bca40239b8a9",
".git/objects/7f/46fe2b234e634b5898866e28a78a3891bda36d": "c97856a272faba165c51cfd6682425aa",
".git/objects/22/e8b99318980bab9e780fa842e3237e9182298a": "f8f1559c337ea3203f3c7f6df1869faf",
".git/objects/22/2198e5b658e52b1e8392fa85f81b5b0ad89699": "e183403d82efb1b3e5005d5a49e3526b",
".git/objects/25/255f56c79a36a319af2a12928e9b2445cc1369": "088373de5b4b7b0f5487ad6b8acc3e95",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e2d8ad5c59cc4193cd37c60ade9eaba5",
".git/logs/refs/heads/main": "ecaf5731dff2568a55ba20444f391edb",
".git/logs/refs/remotes/origin/main": "69d7b686f5ced2deebcc91268367c1f7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "df7406e187b6e3ea5a4823d9a47f0356",
".git/refs/remotes/origin/main": "df7406e187b6e3ea5a4823d9a47f0356",
".git/index": "6e9b52056fd309fe20bb8288448e472d",
".git/COMMIT_EDITMSG": "62368ac57a95f44369f849d44f903b74",
"assets/AssetManifest.json": "9f95496bd120a1603720a11542259186",
"assets/loading.gif": "602efadf1bcfb2d6b7ac7bf3c91430a2",
"assets/NOTICES": "2e3bd4e322a72530961314283987cd1a",
"assets/FontManifest.json": "9079600dd6cc1457502d9273b45170aa",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "efc6c90b58d765987f922c95c2031dd2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0db203e8632f03baae0184700f3bda48",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "dce51c8e3a85f75d528d477ffc4c4325",
"assets/fonts/MaterialIcons-Regular.otf": "7d159b8f34a21dd489d2ce1390713373",
"assets/assets/images/android.svg": "0a04451ad3b5886234ef80268c803e46",
"assets/assets/images/dev_img.png": "b8209b3b50bbd0e8c651f3a6ee700464",
"assets/assets/images/mahsa_app_mockup.png": "ac43b944e30502f18127c72fb530c525",
"assets/assets/images/portfolio_icon.png": "7cb8fcd768c7538bd9c9efd457a0df18",
"assets/assets/images/nutriwest_app_mockup.png": "9dc49508d5d2106d305ab8c5ce976d76",
"assets/assets/images/ruler.svg": "4791ae452335f1ba68a2787f872f3e5f",
"assets/assets/images/web_development.svg": "b92b8e1d565f0d31418dd617e62d37b0",
"assets/assets/images/football_universe_app_mockup.png": "034311c7fce5573b8d02e07042ffaaee",
"assets/assets/images/slider.svg": "a4fc3ee8b34de4bfab375880f4297c49",
"assets/assets/images/ethread_app_mockup.png": "49a9be564eb34c2ce008988707a957c7",
"assets/assets/images/quran_app_logo.png": "3a147fffed35985ac6e9993b2c421497",
"assets/assets/images/blink_logo.png": "b8ccaa78e1fa9cc65620dcf7e40ef874",
"assets/assets/images/football_universe_logo.png": "742b701cf5f044538c5f098dbb668b02",
"assets/assets/images/ethread_logo.png": "82c2e6d6d8df17dc5424f53df2af83d3",
"assets/assets/images/mahsa_logo.png": "73ddde665cae445b9b4997f9e4cf1d9b",
"assets/assets/images/quran_app_mockup.png": "750ffb0a46b7e7dd08e1b7fcca19f7ec",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
