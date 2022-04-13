<template>
    <div class="mybook">
        <div class="profile">
            <img src="https://occ-0-325-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABSDfl6WDSQG2Dbr75-WHIzCvEwFDfdowGJuwkLmp4TbauGzMw_XP0ZxcedJRHVy-2Ul6oi0d_TZ23nmroGbhj7CdGCVn.png?r=215" alt="">
            <h1>회원님의 서재</h1>
        </div>

        <div class="booksList">
            <p>지금 내가 읽고 있는 책은?</p><br>
            <p><span style="margin:2px; color:red; border:grey 1px solid; padding:5px; border-radius:5px ; : 10px">내서재에 담기</span>로 한눈에 관리 할 수있어요!</p>

            <div class="contents">
                <div class="book-box" v-for="(book,index) in $store.state.myBook" :key="index">
                    
                    <div class="image-box" >
                        <img :src="book.link"><br>
                    </div>
                    <div class="text-box">
                        <p class="book-name">{{book.name}}</p>
                        <a><button>바로 읽기</button></a>
                    </div>
                        
                </div>
            </div>

        </div>
        

    </div>
</template>

<script>


export default {
    name : 'MybookView',
    data () {
        return {

        }
    },
    methods : {
        
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@500&display=swap');


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

.mybook {
    position: relative;
    top: 600px;
    padding-left: 48px;
    color: #fff;
}

.profile {
    display: flex;
    align-items: center;
    
    margin-bottom: 50px;
}

.profile img {
   border-radius: 50%;
   width: 5rem;
}

.profile h1 {
    padding-left: 20px;
    font-family: 'Arimo', sans-serif;
}

.contents {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 150px;
}

.book-box {

    width: 15%;
    margin: 2vw;
}

.text-box {
    text-align: center;
    width: 100%;
}

.text-box p {
    font-size: 1em;
    margin-top: 1.2vh;
    font-family: 'Arimo', sans-serif;
}

.image-box img {
    position: relative;
    width: 80%;
    left: 15%;
}

.text-box button{

  background-color: #000000;
  color: white;
  cursor: grab;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 7px;
  outline: transparent;
  margin: 1vh;
}

.text-box button:hover {
    color: #ff0000;
}


</style>