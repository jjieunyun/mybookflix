<template>
  <div id="app">

<header id="header">
        <span class="logo">
            <img src="./assets/logo.png" alt="Bookflix Logo">
        </span>
        <div class="icons">

            <!--header noti + icon-->
            <div class="innder_header_noti" @mouseleave="notiDisplay=false">
                <span @mouseover="notiDisplay=true" >
                    <font-awesome-icon style="cursor: grab;" icon="fa-solid fa-bell" />
                </span>
                <!--notifications-->
                <div class="notificationMenu" v-show="notiDisplay" >
                    <div v-for="(dataNotification,index) in dataNotifications" :key="index"> 
                        <div class="notificationMenu_content" :key="index" v-for="(data,index) in dataNotification">
                                <img class="notificationMenu_img" :src="data.link">
                            <div>
                                <p class="notificationMenu_name">{{data.name}}</p>
                                <p class="notificationMenu_days">{{data.days}}</p>
                            </div>
                        </div>      
                    </div>
                </div>
            </div>



            
            <!--header profile + icon-->
            <div class="inner_header_profile" @mouseleave="profileDisplay=false" >
                <span @mouseover="profileDisplay=true">
                    <font-awesome-icon  style=" cursor: grab; padding-left:10px" icon="fa-solid fa-user" />
                </span>

                <!--profile contents-->
                <div class="profileMenu" v-show="profileDisplay" >
                    <div v-for="(dataPrifile,index) in dataPrifiles" :key="index">
                        <div class="profileMenu_content" v-for="(data,index) in dataPrifile" :key="index" :src="data.link">
                                <img class="profileMenu_img" 
                                :src="data.link">
                                <p class="profileMenu_name">{{data.name}}</p>   
                        </div>
                    </div>
                    <div style="border-top : #787A7C 1px solid; padding-top: 15px;" class="profileMenu_box">
                        <font-awesome-icon class="profileIcons" icon="fa-solid fa-pencil" />
                    <span>프로필관리</span>
                    </div>
                    <div class="profileMenu_box">
                        <font-awesome-icon  class="profileIcons" icon="fa-solid fa-circle-user" />
                        <span>계정</span>
                    </div>
                    <div class="profileMenu_box">
                        <font-awesome-icon class="profileIcons" icon="fa-solid fa-circle-question" />
                        <span>고객센터</span>
                    </div>
                    <div class="profileMenu_box" style="border-top : #787A7C 1px solid; padding-top: 15px;">
                        <p>북플릭스에서 로그아웃</p>
                    </div>
                </div>
            </div>
            
        </div>
    </header>

    <!--main이미지 slider사용으로 이미지가 변경됨-->
    <section class="banner">
            <div class="bannerText">
                <h1>Read What's Next</h1>
                <br>
                <h3>전자책 정기구독<br>
                매주 새로운 책 공개</h3>
                <p>인생의 재미를 찾아줄 <span class="text1">BookFlix</span> Original</p>
                <div class="buttons" >
                    <button class="buttonOne" style=" cursor: grab;">
                        <font-awesome-icon style=" padding-right: 5px;"  icon="fa-solid fa-bookmark" />
                        <span>바로읽기</span>
                    </button>
                    <button class="buttonTwo">
                        <font-awesome-icon style=" padding-right: 5px;"  icon="fa-solid fa-circle-question" />
                        <span>상세정보</span>
                    </button>
                </div>
                
            </div>
            
    </section>

    <!--contents : books list-->
    <router-view></router-view>

    
    


    <!--bottom-navi-->
    <BottomNaviComponent></BottomNaviComponent>

    <!--footer-->
    <FooterComponent></FooterComponent>


  </div>
</template>

<script>
//컴포넌트
import BottomNaviComponent from './components/BottomNaviComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

//json file
import dataPrifile from './assets/data_profile.json'
import dataNotification from './assets/data_notification.json'


export default {
  name : 'app',
  components : {
    BottomNaviComponent,
    FooterComponent
  },
  data : function()  {
    return {
      index : 0,
                notiDisplay : false,
                profileDisplay : false,
                titles : [
                    {title : '000님이, 독서중인 책' },
                    {title : '지금, 서점 Best Top10' },
                    {title : '000님을 위한 추천' },
                    {title : '곧 출간될 책' },
                    {title : '내가 찜한 도서' },
                ],
                dataNotifications : dataNotification,
                dataPrifiles : dataPrifile
                
    }
  },
    mounted () {
        this.$headerScroll();  
    }
}
</script>

<!--CSS-->
<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&family=Source+Sans+Pro:wght@400;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Display&family=Noto+Sans+KR:wght@300;400&family=Noto+Sans:wght@300&display=swap');


:root {
    /*color*/
    --white-color : #fff;
    --black-color : #141414;
    --dark-black-color : #0A0A0A;
    --red-color: #E50914;
    --grey-dark-color : #787A7C;


    /*size*/
    --padding : 12px;
    --padding-medium : 24px;
    --padding-large : 48px;


    /*Font size*/
    --font-large : 18px;
    --font-medium : 14px;
    --font-small: 12px;
    --font-micro: 10px;
}

* {
    margin: 0;
    box-sizing: border-box;
    
}

body {
    background-color: var(--black-color);
}

header {
    position: sticky;
    
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center; 
    background: transparent;
    z-index: 250;
    height: 70px;
    height: 65px;
    padding-top: 8px;
}

header:before {
    background: linear-gradient(to bottom,#141414,transparent);
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
}




header .logo img {
    height: 40px;
    padding-bottom: 0;
    padding-left: var(--padding-large);
}

.icons {
    padding-right: var(--padding);
    
}

header .icons span {
    background:none;
    border: none;
    color: var(--white-color);
    text-align: center;
}

.fa-bell {
    margin-right: 20px;
    font-size: 25px;
}

.fa-user {
    margin-right:3px;
    font-size: 25px;
    padding-right: var(--padding-large);

}



/*  프로필옆 아이콘
.clicked {
    style : transform: rotate(180deg); 
    transition: transform 300ms ease-in-out;
}
*/

.banner {
    background-image: url('./assets/main_book.jpg');
    height: 90vh;
    width: 100%;
    background-position: center center;
    background-size: cover;
    position: absolute;
    top: 0;
    z-index: -1;
}


.banner:before {
    content: '';
    background: linear-gradient(to top,#141414,transparent);
    position: absolute;
    left: 0;
    height: 100%;
    width: 100%;
}

.banner .bannerText {
    color: var(--white-color);
    font-family: Roboto;
    position: absolute;
    top: 200px;
    left: var(--padding-large);
    
}


.banner .bannerText h1 {
    font-size: 3em;
    
}

.banner .bannerText h3 {
    font-size: 2em;
}

.banner .bannerText p {
    font-size: 0.8em;
}

.banner .bannerText .text1 {
    font-size: 2em;
    color: red;
    font-weight: bold;
    text-shadow: 1px 2px 1px var(--black-color);
}
.banner .bannerText .buttons {
    cursor:grab;
    font-weight: bold;
}


.buttons button{
    padding: 10px;
    font-size: 1.1em;
    margin-top: 20px;
    margin-right: 10px;
    border-radius: 3px;
    border: none;
    padding-top: 8px;
    padding-bottom: 8px;
    font-weight: bold;

}

.buttonOne:hover {
    background-color: rgb(255,255,255,0.5);
    cursor: grab;
}

.buttons .buttonTwo {
    background-color: rgba(113, 113, 113, 0.708);
    cursor: grab;
    color:#fff;
}





/*모달창*/
.notificationMenu {
    position:fixed;
    display: inline;
    top: 66px;
    border: #787A7C 1px solid;
    background-color: rgba(0, 0, 0, 0.6);
    width: 400px;
    height: 500px;
    right: 105px;
    z-index: 240;
    bottom: 0px;
    overflow: auto;
    overflow-x: hidden;
}

.notificationMenu_content {
    box-sizing: border-box;
    border-bottom:#787A7C 1px solid;
    top: 66px;
    width: 400px;
    height: 120px;
    display: flex;
    align-items: center;
    background-color: transparent;
    font-family: 'Noto Sans', sans-serif;
}

.innder_header_noti {
    position: fixed;
    top: 25px;
    right: 105px;
    width: 40px;
    height: 300px;
    
}

.notificationMenu_content:hover {
    background-color: rgb(5,5,5);
}

.notificationMenu_content img {
    height: 80px;
    width: 150px;
    object-fit: contain;
    padding-left: 15px;
    padding-right: 15px;
}

.notificationMenu_name {
    color: #fff;
}

.notificationMenu_days {
    color: var(--grey-dark-color);
    font-size: 12px;
}

/*profile hover*/
.profileMenu {
    position:fixed;
    display: inline;
    top: 66px;
    border: rgb(61, 61, 61) 1px solid;
    background-color: rgba(0, 0, 0, 0.8);
    width: 250px;
    height: 445px;
    right: 58px;
    z-index: 240;
    bottom: 0px;
    color: #fff;
    font-family: 'Noto Sans', sans-serif;
}

.profileMenu_content {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    background-color: transparent;
}

.inner_header_profile {
    position: fixed;
    top: 25px;
    right: 60px;
    width: 40px;
    height: 300px;
    margin: 0;
}

.profileMenu_box {
    padding: 13px;
}

.profileMenu_box .profileIcons {

    margin-left: 20px;
    font-size: 20px;
    margin-right: 25px;
    
}

.profileMenu_box p {
    text-align: center;

}

.profileMenu_content img {
    height: 40px;
    margin: 10px;
    border-radius: 20%;
    margin-right: 20px;
}

.profileMenu_name {
    color: #fff;
}




    /*contexnts text*/
.contentsText {
    color: #fff;
    padding-left:45px;
    padding-top: 10px;
}

/*footer 영역*/
footer {
    position: relative;
    top: 680px;
    display: flex;
    flex-direction: column;
    max-width: 980px;
    margin: 20px auto 0;
    padding: 0 4%;
    font-family: 'Noto Sans', sans-serif;
}

.scialLinks {
    width: 50%;
    display: flex;
    margin-bottom: 1em;
}

.scialLinks a {
    padding-right: var(--padding-medium);
    color: var(--white-color);
    font-size: var(--padding-medium);
    margin-right: 15px;
    cursor: pointer;
}

.footerLinks {
    padding: 0;
    display: flex;
    flex-wrap: wrap;
}

.footerLinks ul {
    padding: 0;
    flex-direction: row;
    margin: 0 0 14px 0;
    align-items: flex-start;
}

.footerLinks li {
    list-style: none;
    margin-bottom: 16px;
    flex: 0 0 50%;
    display: list-item;
    text-align: -webkit-match-parent;
    max-width: 25%;
    margin-right: 0;
    
}

.footerLinks a {
    color: var(--grey-dark-color);
    font-size: 13px;
    cursor: pointer;
    text-decoration-line:none;
}

.copyRight {
    color: grey;
    font-size: 11px;
    margin-bottom: 100px;
}


/*bottom Navi영역*/
.bottomNavi {
    display: flex;
    justify-content: space-evenly;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    background-color:#141414;
    padding-top: 3px ;
    color: var(--white-color);
    z-index: 200;
    font-family: 'Noto Sans', sans-serif;
}

.bottomNavi button {
    background:none;
    border: none;
    color: var(--white-color);
    font-size: 15px;
    margin: 0 auto;
}

.bottomNavi p {
    padding-top: 5px;
    font-size: 10px;
    font-family: 'Noto Sans', sans-serif;
}



</style>
