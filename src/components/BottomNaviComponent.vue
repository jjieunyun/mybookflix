<template>
    <div>
        <section class="bottomNavi">
            <div class="home">
                <button class="button" @click="$router.push('/')">
                    <font-awesome-icon icon="fa-solid fa-house" />
                    <p>홈</p>
                </button>
                
            </div>

            <div class="search" @click="$router.push('/search')">
                <button class="button">
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                    <p>검색</p>
                </button>
            </div>

            <div class="books" @click="$router.push('/mybook')">
                <button class="button">
                    <font-awesome-icon icon="fa-solid fa-book" />
                    <p>내서재</p>
                </button>
            </div>

            <div class="more">
                <button class="button">
                    <font-awesome-icon icon="fa-solid fa-bars" />
                    <p>더보기</p>
                </button>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name : 'BottomNaviComponent' ,
}
</script>

<style scoped>
.bottomNavi {
    height: 60px;
    padding-top: 10px;
}

button {
    cursor: grab;
}

.button:hover {
    color: #ff0000;
}
</style>