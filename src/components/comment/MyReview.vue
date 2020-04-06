<template>
    <section>
        <header><h3 id='review-header'>상품평</h3></header>

        <article>
            <sui-menu pointing secondary>
                <a @click="selectItem(item)" class='review-menu' is="sui-menu-item" v-for="(item, index) in items" :key="index" :active="isActive(item)" :content="item"/>
            </sui-menu>
            <div v-if="active=='상품평 작성'">
                <UnWrittenReview/>
            </div>
            <div v-if="active!='상품평 작성'">
                <MyReviewList/>
            </div>
            <br>

            <div class='review-faq'>
                <h3 id='review-faq-header'>자주 찾는 질문</h3>
                <ul>
                    <li><strong>※상품평 리워드 개편을 위해 P.POINT 지급이 잠정 중단됩니다.</strong></li>
                    <li>①상품평 작성(일반/포토/첫글) 및 상품평 추천: 3/29(일)부터 포인트 지급 중단</li>
                    <li>②우수/추천 상품평: 3월 작성건부터 지급 중단(2월 작성건 3/10 지급예정)</li>
                    <li>③불량 상품평 신고: 3월 신고건부터 포인트 지급 중단</li>
                </ul>
                <ul>
                    <li>- 고객님께서 작성해주신 상품평은 등록 즉시 바로 사이트에 게재되며, 모두 공개를 원칙으로 합니다.</li>
                    <li>- 구매고객께서 첫 상품평, 사진 상품평을 작성해주시면 P.POINT 200점, 글 상품평을 작성해주시면 P.POINT 100점을 적립해드립니다.</li>
                    <li>- P.POINT 적립은 익일 오전 10시에 이뤄집니다. (주말/공휴일 제외)</li>
                    <li>&nbsp;&nbsp;매월 10일 '우수상품평'을 선정하여, 50분께 P.POINT 2,000점을 적립해 드립니다.</li>
                    <li>- 식품, 건강용품 등 일부 카테고리의 상품은 상품 기능 및 효과에 대한 오해의 소지가 있어 고객만족도만 전시하며, 상품평 P.POINT는 동일하게 지급됩니다.</li>
                    <li>- 상품평에 적합하지 않은 내용, 미풍양속을 해치는 글, 상품기능 및 효과에 대한 오해의 소지가 있는 내용은 통보 없이 삭제될 수 있습니다.</li>
                    <li>- P.POINT 는 P.POINT 통합회원에 한해 지급 가능합니다. (간편회원 적립 불가)</li>
                </ul>

                <ul>
                    <li><strong>다음의 경우 상품평 작성 권한이 제한되므로, 유의하시기 바랍니다.</strong></li>
                    <li>- 불량 상품평으로 3개월 동안 3회 신고 접수 된 경우</li>
                    <li>- 작성하신 상품평을 최근 1개월 동안 3회 삭제하신 경우</li>
                </ul>

                <ul>
                    <li><strong>불량 상품평으로 신고되는 경우는 다음과 같습니다.</strong></li>
                    <li>- 업체 및 상품에 대한 비방내용, 음란, 욕설 등 부적절한 내용, 상업성, 홍보성 목적의 광고 내용</li>
                    <li>- 타 쇼핑몰과의 비교, 지나친 주관적 견해 / 상품평의 취지와 어긋난다고 판단되는 내용</li>
                </ul>

                <ul>
                    <li><strong>다음과 같이 상품평의 취지와 어긋난다고 판단되는 상품평 이미지는 통보없이 임의로 비전시 처리될 수 있습니다.</strong></li>
                    <li>- 상품과 관련없는 이미지 / 사이트의 상품대표 이미지</li>
                    <li>- 다른 웹사이트 상의 이미지 등 직접 촬영하지 않았다고 판단되는 이미지</li>
                </ul>

                <ul>
                    <li>- 같은 고객의 여러 건의 상품평은 너무 한 의견에 치우쳐지는 결과를 초래할 수 있기에 1회 작성으로 제한함을 양해 부탁 드립니다.</li>
                    <li>- 게시된 상품평의 저작권은 (주) 플래티어몰에 귀속됩니다.</li>
                </ul>
            </div>
        </article>
    </section>
</template>

<script>
    import MyReviewList from './MyReviewList.vue'
    import UnWrittenReview from './UnWrittenReview.vue'

    export default {
        name: "MyReview",
        data() {
            return {
                items: ['상품평 작성', '작성한 상품평'],
                active: '상품평 작성',
            };
        },
        methods: {
            isActive(activeName) {
                return this.active === activeName;
            },
            selectItem(activeName) {
                this.active = activeName;
            },
        },
        components:{
            MyReviewList,
            UnWrittenReview,
        },
    }
</script>

<style scoped>
    #review-header{
        padding: 1% 1% 1% 2%;
        text-align: left;
    }

    #review-faq-header{
        padding: 1% 1% 1% 2%;
        border-top: 3px solid;
        border-bottom: 1px solid #ededed;
    }

    .review-faq{
        text-align: left;
    }

    .review-menu{
        width: 50%;
        font-size: 15px;
    }

    ul{
        list-style:none;
        font-size: 10px;
    }
</style>