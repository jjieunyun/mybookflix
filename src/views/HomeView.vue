<template>
<div>
    <SliderComponent class="container">
      <template v-slot:title>{{titles[0].title}}</template>
      <template v-slot:div>
            <!--데이터를 바꿔줄 부분 슬롯안에 넣음-->
                <div class="carousel-cell " v-for="(book,index) in $store.state.books1" :key="index">
                    <div class="image-box" >
                      <img :src="book.link">
                      <div class="text-box" >
                        <p class="book-name">{{book.name}}</p><br>
                        <a><button @click="inputMybook(book.name,book.link)">내서재에 담기</button></a>
                      </div>
                    </div>
                    
                </div>


        </template>
    </SliderComponent>


    <Top10Component class="top10_container">
      <template  v-slot:title><p style="position:absolute; top:40px">{{titles[1].title}}</p></template>
      <template v-slot:div>
            <!--데이터를 바꿔줄 부분 슬롯안에 넣음-->
                <div class="top10_carousel-cell " v-for="(book,index) in $store.state.bookTop10" :key="index">
                  <div>
                    <h1>{{(index)+1}}</h1>
                  </div>
                    <div class="top10_image-box">
                      <img :src="book.link">
                      <div class="top10_text-box">
                        <p>{{book.name}}</p><br>
                        <a><button @click="inputMybook(book.name,book.link)">내서재에 담기</button></a>
                      </div>
                    </div>
                    
                </div>
        </template>
    </Top10Component>

    <SliderComponent class="container">
      <template v-slot:title>{{titles[2].title}}</template>
      <template v-slot:div>
            <!--데이터를 바꿔줄 부분 슬롯안에 넣음-->
                <div class="carousel-cell " v-for="(book,index) in $store.state.books2" :key="index">
                    <div class="image-box" >
                      <img :src="book.link">
                      <div class="text-box">
                        <p class="book-name">{{book.name}}</p><br>
                        <a><button @click="inputMybook(book.name,book.link)">내서재에 담기</button></a>
                      </div>
                    </div>
                    
                </div>


        </template>
    </SliderComponent>

    <SliderComponent class="container">
      <template v-slot:title>{{titles[3].title}}</template>
      <template v-slot:div>
            <!--데이터를 바꿔줄 부분 슬롯안에 넣음-->
                <div class="carousel-cell " v-for="(book,index) in $store.state.books3" :key="index">
                    <div class="image-box" >
                      <img :src="book.link">
                      <div class="text-box">
                        <p class="book-name">{{book.name}}</p><br>
                        <a><button @click="inputMybook(book.name,book.link)">내서재에 담기</button></a>
                      </div>
                    </div>
                    
                </div>


        </template>
    </SliderComponent>

    <SliderComponent class="container">
      <template v-slot:title>{{titles[4].title}}</template>
      <template v-slot:div>
            <!--데이터를 바꿔줄 부분 슬롯안에 넣음-->
                <div class="carousel-cell " v-for="(book,index) in $store.state.books4" :key="index">
                    <div class="image-box" >
                      <img :src="book.link">
                      <div class="text-box">
                        <p class="book-name">{{book.name}}</p><br>
                        <a><button @click="inputMybook(book.name,book.link)">내서재에 담기</button></a>
                      </div>
                    </div>
                    
                </div>


        </template>
    </SliderComponent>

    <SliderComponent class="container">
      <template v-slot:title>{{titles[5].title}}</template>
      <template v-slot:div>
            <!--데이터를 바꿔줄 부분 슬롯안에 넣음-->
                <div class="carousel-cell " v-for="(book,index) in $store.state.books5" :key="index">
                    <div class="image-box" >
                      <img :src="book.link">
                      <div class="text-box">
                        <p class="book-name">{{book.name}}</p><br>
                        <a><button @click="inputMybook(book.name,book.link)">내서재에 담기</button></a>
                      </div>
                    </div>
                    
                </div>


        </template>
    </SliderComponent>




</div>
    
</template>

<script>
import SliderComponent from '@/components/SliderComponent.vue';
import Top10Component from '@/components/Top10Component.vue';


export default {
  name : 'HomeView',
  components : {
    SliderComponent,
    Top10Component
  },
  data () {
      return {
        titles : [
                    {title : '회원님이, 독서중인 책' },
                    {title : '지금, 서점 Best Top9' },
                    {title : '회원님을 위한 추천' },
                    {title : '곧 출간될 책' },
                    {title : '스테디 셀러' },
                    {title : '신간 베스트' },
                    {title : '이벤트 도서' },
          ],
          
      }
  },
  methods : {
    inputMybook(name,link) {
      let obj = {
        name : name,
        link : link
      }
      this.$store.commit('addBook',obj);
    }
  }
  
  
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@500&display=swap');

/*Top10*/ 
.top10_container {
  height: 300px;
  position: relative;
  top: 520px;
}

.top10_carousel-cell {
   width: 250px; /* half-width */
    height: 400px;
    padding: 90px 0;
    display: flex;
    
}


.top10_carousel-cell h1 {
  z-index: 15;
  font-size: 13em;
  position: absolute;
  top: 20%;
  left:-35%;
  text-shadow: -1px 0  gray, 0 1px gray, 1px 0 gray,  0 -1px gray;
  font-family: 'Arimo', sans-serif;
}

.top10_image-box {
  z-index: 10;
  
  color: aliceblue;
  
}

.top10_image-box:hover {
    -webkit-transition: all 200ms ease-in;
    -webkit-transform: scale(1.8);
    -ms-transition: all 200ms ease-in;
    -ms-transform: scale(1.8);   
    -moz-transition: all 200ms ease-in;
    -moz-transform: scale(1.8);
    transition: all 200ms ease-in;
    transform: scale(1.8);
    transition-delay: 0.2s;
    z-index: 20;
}

.top10_image-box img {
  width: 150px; /* half-width */
  height: 180px;
  padding-right: 30px;
  transition: 0.5s;
  
} 


.Top10_image-box:hover {
    -webkit-transition: all 200ms ease-in;
    -webkit-transform: scale(1.3);
    -ms-transition: all 200ms ease-in;
    -ms-transform: scale(1.3);   
    -moz-transition: all 200ms ease-in;
    -moz-transform: scale(1.3);
    transition: all 200ms ease-in;
    transform: scale(1.3);
    transition-delay: 0.2s;
} 

.top10_text-box {
  position: absolute;
  top: 0;
  width: 120px;
  height: 180px;
  background: linear-gradient(to top,#141414,transparent);
  display: none;
}

.top10_image-box:hover > .top10_text-box {
  display: block;


} 


.top10_text-box > p {
  color: white;
  position: absolute;
  top: 50%;
  left: 10%;
}

.top10_text-box  button {
  color: white;
  position: absolute;
  top: 75%;
  left: 10%;
  background-color: #000000;
  color: white;
  border: 1px solid gray;
  border-radius: 5px;
  cursor: grab;
}

.top10_text-box  button:hover {
  color: #ff0000;
}



/*components*/
.flickity-viewport {
  overflow: visible;
}

.container {
  height: 500px;
}

.carousel-cell  {
  width: 250px; /* half-width */
  height: 400px;
  margin-right: 5px;
  padding: 50px 0;
}


.image-box:hover {
    z-index: 2;
    -webkit-transition: all 200ms ease-in;
    -webkit-transform: scale(1.3);
    -ms-transition: all 200ms ease-in;
    -ms-transform: scale(1.3);   
    -moz-transition: all 200ms ease-in;
    -moz-transform: scale(1.3);
    transition: all 200ms ease-in;
    transform: scale(1.3);
    transition-delay: 0.2s;

} 

.image-box:hover > .text-box {
  display: block;

} 


  .image-box img {
  width: 250px; /* half-width */
  height: 300px;
  padding-right: 30px;
  transition: 0.5s
  } 

.text-box  {
  position: absolute;
  top: 0;
  color: white;
  bottom: 0;
  background: linear-gradient(to top,#141414,transparent);
  height: 100%;
  width: 88%;
  transition: all ease 2s 0s;
  display: none;
}



.text-box p {
  text-align: center;
  width: 85%;
  position: relative;
  top: 50%;
  left: 5%;
}

.text-box button {
  position: relative;
  top: 50%;
  left: 25%;
  background-color: #000000;
  color: white;
  cursor: grab;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 7px;
  outline: transparent;
}

.text-box button:hover {
  color: #ff0000;
}


</style>