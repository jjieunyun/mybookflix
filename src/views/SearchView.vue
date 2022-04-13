<template>
    <div class="search">

        <form class="searchBox" @submit.prevent="submitKeyword">
            <button>
                <font-awesome-icon class="icon" icon="fa-solid fa-magnifying-glass" />
            </button>
            <input type="text" placeholder="검색어를 입력하세요" class="textbox" v-model="inputText">
        </form>
        
            <div class="afterSearch">
                <ul v-for="(keyword,index) in keywords" :key="index">
                    <li><b>{{keyword.id}}.&nbsp;&nbsp;</b>{{keyword.list}}</li>
                </ul>
            </div>

        <h2>북플릭스 추천 검색어</h2>
        <div class="keywords-box">
            <ul class="keywords">
                <li style="cursor: grab;" v-for="(title,index) in refKeywords" class="" :key="index"><a class="">{{title.name}}</a></li>
        </ul>
        </div>
        
    </div>
    
</template>

<script>


export default {
    name : 'SearchViwe',
    data () {
        return {
            id : 1,
            keywords : [],
            inputText : "",
            refKeywords : [
                {name : '경매' },
                {name : '마블' },
                {name : '강아지' },
                {name : '초등수업' },
                {name : '텃밭' },
                {name : '요리' },
                {name : '데일리 연재' },
                {name : '웹툰' },
                {name : '종교' },
                {name : '행복' },
                {name : '여행' },
                {name : '매거진 베스트셀러' },
                {name : '오디오북' },
                {name : '지금 에디터가 읽고있는 책' },
                {name : 'NFT' },
                {name : '북플릭스 오리지널 종이책 정기구독' }

            ]
        }
    },
    methods : {
        submitKeyword() {
            this.keywords.push({id :this.id, list : this.inputText})
            this.id ++;
            this.inputText = "";
        }
    }
}
</script>

<style scoped>
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


.search{
    position: relative;
    top: 600px;
    text-align: center;
    padding-bottom: 100px;
}

.searchBox {
    border-bottom:#E50914 2px solid;
    width: 50vw;
    text-align: left;
    position: relative;
    left: 50%;
    transform: translate(-50%,-50%);

}

.afterSearch {
    color: #fff;
    text-align: left;
    width: 50vw;
    text-align: left;
    position: relative;
    left: 25%;
}

.afterSearch li {
    list-style: none;
    padding: 5px;
    font-family: 'Noto Sans', sans-serif;
}

button {
    color: #fff;
    background-color: transparent;
    border: transparent;
    font-size:1.5em;
    padding: 20px;
}

.textbox {
    background-color: transparent;
    outline: none;
    color: #fff;
    border: none;
    font-size: 1.2em;
    

}

h2 {
    color: #fff;
    margin-top: 40px;
    margin-bottom: 20px;
    font-family: 'Noto Sans', sans-serif;
}

.keywords-box {
    width: 60vw;
    position: relative;
    left: 18%;
}

.keywords li{
    color: #fff;
    list-style: none;
    display: flex;
    font-size: 1.1rem;
    border: var(--grey-dark-color) 1px solid;
    border-radius: 20px;
    display: inline-block;
    padding: 10px;
    margin: 10px;
}

.keywords li:hover {
    background-color: #E50914;
    border: #E50914;
    transition: 0.5s;
}


</style>