(function(){"use strict";var t={704:function(t,n,e){var a=e(144),o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("header",{attrs:{id:"header"}},[t._m(0),e("div",{staticClass:"icons"},[e("div",{staticClass:"innder_header_noti",on:{mouseleave:function(n){t.notiDisplay=!1}}},[e("span",{on:{mouseover:function(n){t.notiDisplay=!0}}},[e("font-awesome-icon",{staticStyle:{cursor:"grabbing"},attrs:{icon:"fa-solid fa-bell"}})],1),e("div",{directives:[{name:"show",rawName:"v-show",value:t.notiDisplay,expression:"notiDisplay"}],staticClass:"notificationMenu"},t._l(t.dataNotifications,(function(n,a){return e("div",{key:a},t._l(n,(function(n,a){return e("div",{key:a,staticClass:"notificationMenu_content"},[e("img",{staticClass:"notificationMenu_img",attrs:{src:n.link}}),e("div",[e("p",{staticClass:"notificationMenu_name"},[t._v(t._s(n.name))]),e("p",{staticClass:"notificationMenu_days"},[t._v(t._s(n.days))])])])})),0)})),0)]),e("div",{staticClass:"inner_header_profile",on:{mouseleave:function(n){t.profileDisplay=!1}}},[e("span",{on:{mouseover:function(n){t.profileDisplay=!0}}},[e("font-awesome-icon",{staticStyle:{cursor:"grabbing","padding-left":"10px"},attrs:{icon:"fa-solid fa-user"}})],1),e("div",{directives:[{name:"show",rawName:"v-show",value:t.profileDisplay,expression:"profileDisplay"}],staticClass:"profileMenu"},[t._l(t.dataPrifiles,(function(n,a){return e("div",{key:a},t._l(n,(function(n,a){return e("div",{key:a,staticClass:"profileMenu_content",attrs:{src:n.link}},[e("img",{staticClass:"profileMenu_img",attrs:{src:n.link}}),e("p",{staticClass:"profileMenu_name"},[t._v(t._s(n.name))])])})),0)})),e("div",{staticClass:"profileMenu_box",staticStyle:{"border-top":"#787A7C 1px solid","padding-top":"15px"}},[e("font-awesome-icon",{staticClass:"profileIcons",attrs:{icon:"fa-solid fa-pencil"}}),e("span",[t._v("프로필관리")])],1),e("div",{staticClass:"profileMenu_box"},[e("font-awesome-icon",{staticClass:"profileIcons",attrs:{icon:"fa-solid fa-circle-user"}}),e("span",[t._v("계정")])],1),e("div",{staticClass:"profileMenu_box"},[e("font-awesome-icon",{staticClass:"profileIcons",attrs:{icon:"fa-solid fa-circle-question"}}),e("span",[t._v("고객센터")])],1),t._m(1)],2)])])]),e("section",{staticClass:"banner"},[e("div",{staticClass:"bannerText"},[e("h1",[t._v("Read What's Next")]),e("br"),t._m(2),t._m(3),e("div",{staticClass:"buttons"},[e("button",{staticClass:"buttonOne",attrs:{"cursor:":"","grabbing;":""}},[e("font-awesome-icon",{staticStyle:{"padding-right":"5px"},attrs:{icon:"fa-solid fa-bookmark"}}),e("span",[t._v("바로읽기")])],1),e("button",{staticClass:"buttonTwo"},[e("font-awesome-icon",{staticStyle:{"padding-right":"5px"},attrs:{icon:"fa-solid fa-circle-question"}}),e("span",[t._v("상세정보")])],1)])])]),e("router-view"),e("BottomNaviComponent"),e("FooterComponent")],1)},i=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("span",{staticClass:"logo"},[a("img",{attrs:{src:e(949),alt:"Bookflix Logo"}})])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"profileMenu_box",staticStyle:{"border-top":"#787A7C 1px solid","padding-top":"15px"}},[e("p",[t._v("북플릭스에서 로그아웃")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("h3",[t._v("전자책 정기구독"),e("br"),t._v(" 매주 새로운 책 공개")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[t._v("인생의 재미를 찾아줄 "),e("span",{staticClass:"text1"},[t._v("BookFlix")]),t._v(" Original")])}],r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("section",{staticClass:"bottomNavi"},[e("div",{staticClass:"home"},[e("button",{staticClass:"button",on:{click:function(n){return t.$router.push("/")}}},[e("font-awesome-icon",{attrs:{icon:"fa-solid fa-house"}}),e("p",[t._v("홈")])],1)]),e("div",{staticClass:"search",on:{click:function(n){return t.$router.push("/search")}}},[e("button",{staticClass:"button"},[e("font-awesome-icon",{attrs:{icon:"fa-solid fa-magnifying-glass"}}),e("p",[t._v("검색")])],1)]),e("div",{staticClass:"books",on:{click:function(n){return t.$router.push("/mybook")}}},[e("button",{staticClass:"button"},[e("font-awesome-icon",{attrs:{icon:"fa-solid fa-book"}}),e("p",[t._v("내서재")])],1)]),e("div",{staticClass:"more"},[e("button",{staticClass:"button"},[e("font-awesome-icon",{attrs:{icon:"fa-solid fa-bars"}}),e("p",[t._v("더보기")])],1)])])])},c=[],s={name:"BottomNaviComponent"},l=s,p=e(1),d=(0,p.Z)(l,r,c,!1,null,"713a9fbe",null),u=d.exports,m=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("footer",[e("div",{staticClass:"scialLinks"},[e("a",{staticClass:"scialLink"},[e("font-awesome-icon",{attrs:{icon:"fa-brands fa-youtube"}})],1),e("a",{staticClass:"scialLink"},[e("font-awesome-icon",{attrs:{icon:"fa-brands fa-instagram"}})],1),e("a",{staticClass:"scialLink"},[e("font-awesome-icon",{attrs:{icon:"fa-brands fa-twitter"}})],1),e("a",{staticClass:"scialLink"},[e("font-awesome-icon",{attrs:{icon:"fa-brands fa-youtube"}})],1)]),e("ul",{staticClass:"footerLinks"},t._l(t.footers,(function(n,a){return e("li",{key:a,staticClass:"footerLinkLi"},[e("a",{staticClass:"footerLink"},[t._v(t._s(n.name))])])})),0),t._m(0)])])},k=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"copyRight"},[e("p",[t._v("넷플릭스서비시스코리아 유한회사 통신판매업신고번호: 제2018-서울종로-0426호 전화번호: 080-001-9587")]),e("p",[t._v("대표: 레지널드 숀 톰프슨")]),e("p",[t._v("이메일 주소: korea@netflix.com")]),e("p",[t._v("주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층 우편번호 03161")])])}],f={name:"FooterComponent",data(){return{footers:[{name:"자막 및 음성"},{name:"음성지원"},{name:"고객센터"},{name:"기프트카드"},{name:"개인정보"},{name:"문의하기"},{name:"미디어센터"},{name:"입사정보"},{name:"이용 약관"},{name:"회사 정보"},{name:"법적 고지"},{name:"미디어 센터"},{name:"쿠키 설정"}]}}},g=f,v=(0,p.Z)(g,m,k,!1,null,null,null),h=v.exports,_=JSON.parse('{"dataPrifile":[{"link":"https://occ-0-325-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABSDfl6WDSQG2Dbr75-WHIzCvEwFDfdowGJuwkLmp4TbauGzMw_XP0ZxcedJRHVy-2Ul6oi0d_TZ23nmroGbhj7CdGCVn.png?r=215","name":"엄마"},{"link":"https://occ-0-325-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbS4ubc3DiaHZdT2ky3Hvg8ZsuDz2yTtnTuXwNNq84zuMrk1x96LiL8JwkgeMKS8yyknLhz6M4ZSJOmkKDIxoDo3yvka.png?r=f16","name":"아빠"},{"link":"https://occ-0-325-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbtJj_v0V-og1tsUH0W6cLj7elQFCbLUdkDI7YyvdC5ixHsLWxjuXzGErh21Tg4Ol-4AFjQdG7EtULnkRGXPFR1VP-qs.png?r=6ab","name":"나"},{"link":"https://occ-0-325-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABWnznKM5ffOdce_QsDnOrUIg7FSCSzSoMA_PCuYlspXuvKKhWz5ELIy9Wr6-vkHG2GyiA70erFMd-lAZMTa0lYtqCiKp.png?r=e7f","name":"동생"}]}'),b=JSON.parse('{"dataNotification":[{"link":"https://image.aladin.co.kr/img/bn/book/2022/01/220401_vote_layer.jpg","name":"2022 이 분야 최고의 책!","days":"3일전"},{"link":"https://image.aladin.co.kr/img/bn/book/2022/02/2022_author_03_gs.jpg","name":"소년이온다 한정판 굿즈 출시","days":"5일전"},{"link":"https://image.aladin.co.kr/img/events/book/2022/01/120220301_bookpleplus_t4_1.png","name":"독보적 챌린지+","days":"7일전"},{"link":"https://image.aladin.co.kr/product/28558/86/cover500/k682835142_1.jpg","name":"합격의 길!","days":"2주전"},{"link":"https://image.aladin.co.kr/img/wonlymain/2022/02/goods_makers_0630.png","name":"4월 생활용품","days":"2주전"},{"link":"https://image.aladin.co.kr/img/events/ebook/2022/01/220401_ebookday_tanimation.gif","name":"책을 멈춘 문장들","days":"1개월 전"}]}'),j={name:"app",components:{BottomNaviComponent:u,FooterComponent:h},data:function(){return{index:0,notiDisplay:!1,profileDisplay:!1,titles:[{title:"000님이, 독서중인 책"},{title:"지금, 서점 Best Top10"},{title:"000님을 위한 추천"},{title:"곧 출간될 책"},{title:"내가 찜한 도서"}],dataNotifications:b,dataPrifiles:_}},mounted(){this.$headerScroll()}},y=j,C=(0,p.Z)(y,o,i,!1,null,null,null),w=C.exports,x=e(345);a.Z.use(x.Z);const A=[{path:"/",name:"home",component:function(){return e.e(728).then(e.bind(e,728))}},{path:"/search",name:"SearchViwe",component:function(){return e.e(937).then(e.bind(e,937))}},{path:"/mybook",name:"mybook",component:function(){return e.e(390).then(e.bind(e,390))}}],S=new x.Z({mode:"history",base:"/bookflix/",routes:A});var L=S,E=e(629);a.Z.use(E.ZP);var N=new E.ZP.Store({state:{books1:[{link:"https://image.aladin.co.kr/product/29152/49/cover500/8936457101_1.jpg",name:"소리 높여 챌린지"},{link:"https://image.aladin.co.kr/product/29154/89/cover500/8949102595_1.jpg",name:"내가 없는, 내가 있는"},{link:"https://image.aladin.co.kr/product/29193/50/cover500/k872837288_1.jpg",name:"초월하는 세계의 사랑"},{link:"https://image.aladin.co.kr/product/29155/2/cover500/8962624214_1.jpg",name:"꼬리에 꼬리를 무는 그날 이야기2"},{link:"https://image.aladin.co.kr/product/29185/70/cover500/e542539851_1.jpg",name:"페스트의 밤"},{link:"https://image.aladin.co.kr/product/28465/73/cover500/k092835920_1.jpg",name:"물고기는 존재하지 않는다"},{link:"https://image.aladin.co.kr/product/29084/68/cover500/k122836656_2.jpg",name:"저주토끼"},{link:"https://image.aladin.co.kr/product/29181/79/cover500/k712837984_1.jpg",name:"꽃샘바람에 흔들린다면 너는 꽃 "},{link:"https://image.aladin.co.kr/product/29132/83/cover500/8901259303_2.jpg",name:"운명을 바꾸는 부동산 투자 수업 : 기초편 "},{link:"https://image.aladin.co.kr/product/29021/51/cover500/k982836731_1.jpg",name:"웰씽킹 WEALTHINKING"},{link:"https://image.aladin.co.kr/product/28212/10/cover500/k762835176_2.jpg",name:"이어령의 마지막 수업"}],books2:[{link:"https://image.aladin.co.kr/product/29088/56/cover500/k592837763_1.jpg",name:"너 누구니"},{link:"https://image.aladin.co.kr/product/41/8/cover500/s872633314_1.jpg",name:"보도 섀퍼의 돈"},{link:"https://image.aladin.co.kr/product/28289/53/cover500/k572835996_1.jpg",name:"구의 증명 (리커버 특별판)"},{link:"https://image.aladin.co.kr/product/28157/1/cover500/k282835766_1.jpg",name:"천 개의 파랑 (리커버)"},{link:"https://image.aladin.co.kr/product/29021/51/cover500/k982836731_1.jpg",name:"웰씽킹 WEALTHINKING"},{link:"https://image.aladin.co.kr/product/29155/2/cover500/8962624214_1.jpg",name:"꼬리에 꼬리를 무는 그날 이야기2"},{link:"https://image.aladin.co.kr/product/28465/73/cover500/k092835920_1.jpg",name:"물고기는 존재하지 않는다"},{link:"https://image.aladin.co.kr/product/29181/79/cover500/k712837984_1.jpg",name:"꽃샘바람에 흔들린다면 너는 꽃 "},{link:"https://image.aladin.co.kr/product/5686/87/cover500/s702536164_1.jpg",name:"사피엔스"},{link:"https://image.aladin.co.kr/product/29132/83/cover500/8901259303_2.jpg",name:"운명을 바꾸는 부동산 투자 수업 : 기초편 "},{link:"https://image.aladin.co.kr/product/24512/70/cover500/k392630952_2.jpg",name:"달러구트 꿈 백화점"},{link:"https://image.aladin.co.kr/product/29206/71/cover500/8954685889_1.jpg",name:"젊은작가상 수상작품집 "}],bookTop10:[{link:"https://image.aladin.co.kr/product/29045/74/cover500/k192836746_2.jpg",name:"불편한 편의점"},{link:"https://image.aladin.co.kr/product/17048/25/cover500/8932473900_1.jpg",name:"이기적 유전자 "},{link:"https://image.aladin.co.kr/product/29247/76/cover500/k972837390_1.jpg",name:"아무튼, 노래"},{link:"https://image.aladin.co.kr/product/29137/3/cover500/8993178984_1.jpg",name:"지리의 힘 2"},{link:"https://image.aladin.co.kr/product/29185/70/cover500/e542539851_1.jpg",name:"페스트의 밤"},{link:"https://image.aladin.co.kr/product/29168/76/cover500/8960519146_1.jpg",name:"10배의 법칙"},{link:"https://image.aladin.co.kr/product/49/16/cover500/893746103x_3.jpg",name:"인간 실격"},{link:"https://image.aladin.co.kr/product/29250/65/cover500/k362837392_1.jpg",name:"안녕, 엄마"},{link:"https://image.aladin.co.kr/product/29247/55/cover500/8934944536_1.jpg",name:"고래 233마리"}],books3:[{link:"https://image.aladin.co.kr/product/10565/12/cover500/8936434268_1.jpg",name:"아몬드"},{link:"https://image.aladin.co.kr/product/13366/86/cover500/895465021x_1.jpg",name:"세계를 건너 너에게 갈게"},{link:"https://image.aladin.co.kr/product/20945/79/cover500/s952638241_2.jpg",name:"데일 카네기 인간관계론 "},{link:"https://image.aladin.co.kr/product/29250/64/cover500/8936438735_1.jpg",name:"마법소녀 은퇴합니다"},{link:"https://image.aladin.co.kr/product/29250/63/cover500/k922837392_1.jpg",name:"사랑은 느림에 기대어"},{link:"https://image.aladin.co.kr/product/29248/63/cover500/8937442604_1.jpg",name:"다시 말해 줄래요?"},{link:"https://image.aladin.co.kr/product/19359/16/cover500/s152835852_1.jpg",name:"우리가 빛의 속도로 갈 수 없다면 "},{link:"https://image.aladin.co.kr/product/29247/13/cover500/k952837399_1.jpg",name:"영국의 집"},{link:"https://image.aladin.co.kr/product/29247/3/cover500/8976828453_1.jpg",name:"사랑의 현상학"},{link:"https://image.aladin.co.kr/product/17048/25/cover500/8932473900_1.jpg",name:"이기적 유전자 "},{link:"https://image.aladin.co.kr/product/5686/87/cover500/s702536164_1.jpg",name:"사피엔스"}],books4:[{link:"https://image.aladin.co.kr/product/29229/10/cover500/8934921579_2.jpg",name:"씨앗을 뿌리는 사람의 우화"},{link:"https://image.aladin.co.kr/product/29176/11/cover500/8954685641_1.jpg",name:"나보코프 단편전집"},{link:"https://image.aladin.co.kr/product/29174/41/cover500/8932922047_1.jpg",name:"낯선 사람에게 말 걸기"},{link:"https://image.aladin.co.kr/product/29224/88/cover500/k102837999_1.jpg",name:"인종, 국민, 계급 "},{link:"https://image.aladin.co.kr/product/29214/40/cover500/893744271x_1.jpg",name:"1000년"},{link:"https://image.aladin.co.kr/product/29019/87/cover500/8967359446_1.jpg",name:"봄의 제전"},{link:"https://image.aladin.co.kr/product/29174/50/cover500/k272837577_1.jpg",name:"언어가 삶이 될 때"},{link:"https://image.aladin.co.kr/product/29225/65/cover500/k512837993_1.jpg",name:"정치철학"},{link:"https://image.aladin.co.kr/product/29149/44/cover500/k732837272_1.jpg",name:"아무튼, 피아노"},{link:"https://image.aladin.co.kr/product/28447/24/cover500/8932912750_1.jpg",name:"평범한 인생 "},{link:"https://image.aladin.co.kr/product/29088/56/cover500/k592837763_1.jpg",name:"너 누구니"}],books5:[{link:"https://image.aladin.co.kr/product/22899/50/cover500/8925568586_3.jpg",name:"작은 아씨들"},{link:"https://image.aladin.co.kr/product/22952/9/cover500/k892637499_2.jpg",name:"하버드 상위 1퍼센트의 비밀"},{link:"https://image.aladin.co.kr/product/23096/53/cover500/8954670636_1.jpg",name:"아직 멀었다는 말"},{link:"https://image.aladin.co.kr/product/22210/44/cover500/k392636511_1.jpg",name:"해빗 "},{link:"https://image.aladin.co.kr/product/22869/54/cover500/k012636849_3.jpg",name:"1cm 다이빙"},{link:"https://image.aladin.co.kr/product/23307/37/cover500/8965749875_1.jpg",name:"먼 바다"},{link:"https://image.aladin.co.kr/product/22039/45/cover500/k662636816_1.jpg",name:"방구석 미술관"},{link:"https://image.aladin.co.kr/product/19838/15/cover500/8933870830_2.jpg",name:"설민석의 삼국지 2"},{link:"https://image.aladin.co.kr/product/8982/24/cover500/s242638443_1.jpg",name:"아내를 모자로 착각한 남자"},{link:"https://image.aladin.co.kr/product/23419/60/cover500/8950986914_1.jpg",name:"이 한마디가 나를 살렸다"},{link:"https://image.aladin.co.kr/product/22508/4/cover500/k182636731_2.jpg",name:"내가 원하는 것을 나도 모를 때"}],myBook:[]},getters:{},mutations:{addBook(t,n){t.myBook.push(n)}},actions:{},modules:{}}),P=e(947),T=e(810),M=e(436),O=e(24),D=e(417);const Z={headerScroll(){const t=document.querySelector("#header"),n=t.getBoundingClientRect().height;window.addEventListener("scroll",(()=>{window.scrollY>n?t.setAttribute("style","background: #121212; transition: 0.5s;"):t.setAttribute("style","background: transparent; transition: 0.5s")}))}};var B={install(t){t.prototype.$headerScroll=Z.headerScroll}};P.vI.add(M.mRB,O.NCV,D.vnX),a.Z.component("font-awesome-icon",T.GN),a.Z.component("font-awesome-icon",T.GN),a.Z.config.productionTip=!1,a.Z.use(B),a.Z.config.productionTip=!1,new a.Z({router:L,store:N,render:t=>t(w)}).$mount("#app")},949:function(t,n,e){t.exports=e.p+"img/logo.79eec1fa.png"}},n={};function e(a){var o=n[a];if(void 0!==o)return o.exports;var i=n[a]={exports:{}};return t[a].call(i.exports,i,i.exports,e),i.exports}e.m=t,function(){var t=[];e.O=function(n,a,o,i){if(!a){var r=1/0;for(p=0;p<t.length;p++){a=t[p][0],o=t[p][1],i=t[p][2];for(var c=!0,s=0;s<a.length;s++)(!1&i||r>=i)&&Object.keys(e.O).every((function(t){return e.O[t](a[s])}))?a.splice(s--,1):(c=!1,i<r&&(r=i));if(c){t.splice(p--,1);var l=o();void 0!==l&&(n=l)}}return n}i=i||0;for(var p=t.length;p>0&&t[p-1][2]>i;p--)t[p]=t[p-1];t[p]=[a,o,i]}}(),function(){e.d=function(t,n){for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})}}(),function(){e.f={},e.e=function(t){return Promise.all(Object.keys(e.f).reduce((function(n,a){return e.f[a](t,n),n}),[]))}}(),function(){e.u=function(t){return"js/"+t+"."+{390:"7d8dbeec",728:"928f77bd",937:"2300995c"}[t]+".js"}}(),function(){e.miniCssF=function(t){return"css/"+t+"."+{390:"02e7d889",728:"89b8ee9e",937:"ece09c72"}[t]+".css"}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={},n="bookflix:";e.l=function(a,o,i,r){if(t[a])t[a].push(o);else{var c,s;if(void 0!==i)for(var l=document.getElementsByTagName("script"),p=0;p<l.length;p++){var d=l[p];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==n+i){c=d;break}}c||(s=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,e.nc&&c.setAttribute("nonce",e.nc),c.setAttribute("data-webpack",n+i),c.src=a),t[a]=[o];var u=function(n,e){c.onerror=c.onload=null,clearTimeout(m);var o=t[a];if(delete t[a],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(t){return t(e)})),n)return n(e)},m=setTimeout(u.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=u.bind(null,c.onerror),c.onload=u.bind(null,c.onload),s&&document.head.appendChild(c)}}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){e.p="/bookflix/"}(),function(){var t=function(t,n,e,a){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)e();else{var r=i&&("load"===i.type?"missing":i.type),c=i&&i.target&&i.target.href||n,s=new Error("Loading CSS chunk "+t+" failed.\n("+c+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=r,s.request=c,o.parentNode.removeChild(o),a(s)}};return o.onerror=o.onload=i,o.href=n,document.head.appendChild(o),o},n=function(t,n){for(var e=document.getElementsByTagName("link"),a=0;a<e.length;a++){var o=e[a],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===t||i===n))return o}var r=document.getElementsByTagName("style");for(a=0;a<r.length;a++){o=r[a],i=o.getAttribute("data-href");if(i===t||i===n)return o}},a=function(a){return new Promise((function(o,i){var r=e.miniCssF(a),c=e.p+r;if(n(r,c))return o();t(a,c,o,i)}))},o={143:0};e.f.miniCss=function(t,n){var e={390:1,728:1,937:1};o[t]?n.push(o[t]):0!==o[t]&&e[t]&&n.push(o[t]=a(t).then((function(){o[t]=0}),(function(n){throw delete o[t],n})))}}(),function(){var t={143:0};e.f.j=function(n,a){var o=e.o(t,n)?t[n]:void 0;if(0!==o)if(o)a.push(o[2]);else{var i=new Promise((function(e,a){o=t[n]=[e,a]}));a.push(o[2]=i);var r=e.p+e.u(n),c=new Error,s=function(a){if(e.o(t,n)&&(o=t[n],0!==o&&(t[n]=void 0),o)){var i=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;c.message="Loading chunk "+n+" failed.\n("+i+": "+r+")",c.name="ChunkLoadError",c.type=i,c.request=r,o[1](c)}};e.l(r,s,"chunk-"+n,n)}},e.O.j=function(n){return 0===t[n]};var n=function(n,a){var o,i,r=a[0],c=a[1],s=a[2],l=0;if(r.some((function(n){return 0!==t[n]}))){for(o in c)e.o(c,o)&&(e.m[o]=c[o]);if(s)var p=s(e)}for(n&&n(a);l<r.length;l++)i=r[l],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(p)},a=self["webpackChunkbookflix"]=self["webpackChunkbookflix"]||[];a.forEach(n.bind(null,0)),a.push=n.bind(null,a.push.bind(a))}();var a=e.O(void 0,[998],(function(){return e(704)}));a=e.O(a)})();
//# sourceMappingURL=app.8ad75a0b.js.map