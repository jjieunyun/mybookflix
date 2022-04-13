    import Vue from 'vue'
    import Vuex from 'vuex'

    Vue.use(Vuex)

    export default new Vuex.Store({
    state: {
        books1 : [
            { 
                link : "https://image.aladin.co.kr/product/29152/49/cover500/8936457101_1.jpg",
                name : "소리 높여 챌린지"
            },
            { 
                link : "https://image.aladin.co.kr/product/29154/89/cover500/8949102595_1.jpg",
                name : "내가 없는, 내가 있는"
            },
            { 
                link : "https://image.aladin.co.kr/product/29193/50/cover500/k872837288_1.jpg",
                name : "초월하는 세계의 사랑" 
            },
            { 
                link : "https://image.aladin.co.kr/product/29155/2/cover500/8962624214_1.jpg",
                name : "꼬리에 꼬리를 무는 그날 이야기2"
            
            },
            { 
                link : "https://image.aladin.co.kr/product/29185/70/cover500/e542539851_1.jpg",
                name : "페스트의 밤"
            },
            { 
                link : "https://image.aladin.co.kr/product/28465/73/cover500/k092835920_1.jpg",
                name : "물고기는 존재하지 않는다"
            },
            { 
                link : "https://image.aladin.co.kr/product/29084/68/cover500/k122836656_2.jpg",
                name : "저주토끼"
            },
            { 
                link : "https://image.aladin.co.kr/product/29181/79/cover500/k712837984_1.jpg",
                name : "꽃샘바람에 흔들린다면 너는 꽃 "

            },
            { 
                link : "https://image.aladin.co.kr/product/29132/83/cover500/8901259303_2.jpg",
                name : "운명을 바꾸는 부동산 투자 수업 : 기초편 "

            },
            { 
                link : "https://image.aladin.co.kr/product/29021/51/cover500/k982836731_1.jpg",
                name : "웰씽킹 WEALTHINKING"
            },
            { 
                link : "https://image.aladin.co.kr/product/28212/10/cover500/k762835176_2.jpg",
                name : "이어령의 마지막 수업"
            }
        ],
        books2 : [
            { 
                link : "https://image.aladin.co.kr/product/29088/56/cover500/k592837763_1.jpg",
                name : "너 누구니"
            },
            { 
                link : "https://image.aladin.co.kr/product/41/8/cover500/s872633314_1.jpg",
                name : "보도 섀퍼의 돈"
            },
            { 
                link : "https://image.aladin.co.kr/product/28289/53/cover500/k572835996_1.jpg",
                name : "구의 증명 (리커버 특별판)"
            },
            { 
                link : "https://image.aladin.co.kr/product/28157/1/cover500/k282835766_1.jpg",
                name : "천 개의 파랑 (리커버)" 
            },
            { 
                link : "https://image.aladin.co.kr/product/29021/51/cover500/k982836731_1.jpg",
                name : "웰씽킹 WEALTHINKING"
            },
            { 
                link : "https://image.aladin.co.kr/product/29155/2/cover500/8962624214_1.jpg",
                name : "꼬리에 꼬리를 무는 그날 이야기2"
            
            },
            { 
                link : "https://image.aladin.co.kr/product/28465/73/cover500/k092835920_1.jpg",
                name : "물고기는 존재하지 않는다"
            },
            { 
                link : "https://image.aladin.co.kr/product/29181/79/cover500/k712837984_1.jpg",
                name : "꽃샘바람에 흔들린다면 너는 꽃 "

            },
            { 
                link : "https://image.aladin.co.kr/product/5686/87/cover500/s702536164_1.jpg",
                name : "사피엔스"
            },
            { 
                link : "https://image.aladin.co.kr/product/29132/83/cover500/8901259303_2.jpg",
                name : "운명을 바꾸는 부동산 투자 수업 : 기초편 "

            },
            { 
                link : "https://image.aladin.co.kr/product/24512/70/cover500/k392630952_2.jpg",
                name : "달러구트 꿈 백화점"
            },
            { 
                link : "https://image.aladin.co.kr/product/29206/71/cover500/8954685889_1.jpg",
                name : "젊은작가상 수상작품집 "
            }
        ],
        bookTop10 : [
            
            { 
                link : "https://image.aladin.co.kr/product/29045/74/cover500/k192836746_2.jpg",
                name : "불편한 편의점"
            },
            { 
                link : "https://image.aladin.co.kr/product/17048/25/cover500/8932473900_1.jpg",
                name : "이기적 유전자 "
            },
            { 
                link : "https://image.aladin.co.kr/product/29247/76/cover500/k972837390_1.jpg",
                name : "아무튼, 노래" 
            },
            { 
                link : "https://image.aladin.co.kr/product/29137/3/cover500/8993178984_1.jpg",
                name : "지리의 힘 2"
            
            },
            { 
                link : "https://image.aladin.co.kr/product/29185/70/cover500/e542539851_1.jpg",
                name : "페스트의 밤"
            },
            { 
                link : "https://image.aladin.co.kr/product/29168/76/cover500/8960519146_1.jpg",
                name : "10배의 법칙"
            },
            
            { 
                link : "https://image.aladin.co.kr/product/49/16/cover500/893746103x_3.jpg",
                name : "인간 실격"
            },
            { 
                link : "https://image.aladin.co.kr/product/29250/65/cover500/k362837392_1.jpg",
                name : "안녕, 엄마" 
            },
            { 
                link : "https://image.aladin.co.kr/product/29247/55/cover500/8934944536_1.jpg",
                name : "고래 233마리"

            },
            
        ],
        books3 : [
            { 
                link : "https://image.aladin.co.kr/product/10565/12/cover500/8936434268_1.jpg",
                name : "아몬드"
            },
            { 
                link : "https://image.aladin.co.kr/product/13366/86/cover500/895465021x_1.jpg",
                name : "세계를 건너 너에게 갈게"
            },
            { 
                link : "https://image.aladin.co.kr/product/20945/79/cover500/s952638241_2.jpg",
                name : "데일 카네기 인간관계론 "

            },
            
            { 
                link : "https://image.aladin.co.kr/product/29250/64/cover500/8936438735_1.jpg",
                name : "마법소녀 은퇴합니다"
            },
            { 
                link : "https://image.aladin.co.kr/product/29250/63/cover500/k922837392_1.jpg",
                name : "사랑은 느림에 기대어"
            
            },
            { 
                link : "https://image.aladin.co.kr/product/29248/63/cover500/8937442604_1.jpg",
                name : "다시 말해 줄래요?"
            },
            { 
                link : "https://image.aladin.co.kr/product/19359/16/cover500/s152835852_1.jpg",
                name : "우리가 빛의 속도로 갈 수 없다면 "

            },
            
            { 
                link : "https://image.aladin.co.kr/product/29247/13/cover500/k952837399_1.jpg",
                name : "영국의 집"
            },
            { 
                link : "https://image.aladin.co.kr/product/29247/3/cover500/8976828453_1.jpg",
                name : "사랑의 현상학"

            },
            { 
                link : "https://image.aladin.co.kr/product/17048/25/cover500/8932473900_1.jpg",
                name : "이기적 유전자 "
            },
            { 
                link : "https://image.aladin.co.kr/product/5686/87/cover500/s702536164_1.jpg",
                name : "사피엔스"
            }
        ],
        books4 : [
            { 
                link : "https://image.aladin.co.kr/product/29229/10/cover500/8934921579_2.jpg",
                name : "씨앗을 뿌리는 사람의 우화"
            },
            { 
                link : "https://image.aladin.co.kr/product/29176/11/cover500/8954685641_1.jpg",
                name : "나보코프 단편전집"
            },
            { 
                link : "https://image.aladin.co.kr/product/29174/41/cover500/8932922047_1.jpg",
                name : "낯선 사람에게 말 걸기" 
            },
            { 
                link : "https://image.aladin.co.kr/product/29224/88/cover500/k102837999_1.jpg",
                name : "인종, 국민, 계급 "
            },
            { 
                link : "https://image.aladin.co.kr/product/29214/40/cover500/893744271x_1.jpg",
                name : "1000년"
            
            },
            { 
                link : "https://image.aladin.co.kr/product/29019/87/cover500/8967359446_1.jpg",
                name : "봄의 제전"
            },
            { 
                link : "https://image.aladin.co.kr/product/29174/50/cover500/k272837577_1.jpg",
                name : "언어가 삶이 될 때"
            },
            { 
                link : "https://image.aladin.co.kr/product/29225/65/cover500/k512837993_1.jpg",
                name : "정치철학"
            },
            { 
                link : "https://image.aladin.co.kr/product/29149/44/cover500/k732837272_1.jpg",
                name : "아무튼, 피아노"

            },
            { 
                link : "https://image.aladin.co.kr/product/28447/24/cover500/8932912750_1.jpg",
                name : "평범한 인생 "
            },
            { 
                link : "https://image.aladin.co.kr/product/29088/56/cover500/k592837763_1.jpg",
                name : "너 누구니"
            }
        ],
        books5 : [
            { 
                link : "https://image.aladin.co.kr/product/22899/50/cover500/8925568586_3.jpg",
                name : "작은 아씨들"
            },
            { 
                link : "https://image.aladin.co.kr/product/22952/9/cover500/k892637499_2.jpg",
                name : "하버드 상위 1퍼센트의 비밀"
            },
            { 
                link : "https://image.aladin.co.kr/product/23096/53/cover500/8954670636_1.jpg",
                name : "아직 멀었다는 말" 
            },
            { 
                link : "https://image.aladin.co.kr/product/22210/44/cover500/k392636511_1.jpg",
                name : "해빗 "
            },
            { 
                link : "https://image.aladin.co.kr/product/22869/54/cover500/k012636849_3.jpg",
                name : "1cm 다이빙"
            
            },
            { 
                link : "https://image.aladin.co.kr/product/23307/37/cover500/8965749875_1.jpg",
                name : "먼 바다"
            },
            { 
                link : "https://image.aladin.co.kr/product/22039/45/cover500/k662636816_1.jpg",
                name : "방구석 미술관"
            },
            { 
                link : "https://image.aladin.co.kr/product/19838/15/cover500/8933870830_2.jpg",
                name : "설민석의 삼국지 2"
            },
            { 
                link : "https://image.aladin.co.kr/product/8982/24/cover500/s242638443_1.jpg",
                name : "아내를 모자로 착각한 남자"

            },
            { 
                link : "https://image.aladin.co.kr/product/23419/60/cover500/8950986914_1.jpg",
                name : "이 한마디가 나를 살렸다"
            },
            { 
                link : "https://image.aladin.co.kr/product/22508/4/cover500/k182636731_2.jpg",
                name : "내가 원하는 것을 나도 모를 때"
            }
        ],
        myBook : [],
        
    },
    getters: {

    },
    mutations: {
        addBook(state,obj) {
            state.myBook.push(obj);
        }
    },
    actions: {
    },
    modules: {
    }
    })
