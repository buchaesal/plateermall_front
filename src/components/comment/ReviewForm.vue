<template>
    <div id="review-modal">
        <header><h3 id='write-review'>상품평 작성</h3></header>
    
        <ul>
            <li>고객님께서 작성해주신 상품평은 등록 즉시 바로 사이트에 게재되며, 모두 공개를 원칙으로 합니다.</li>
            <li>- 상품평에 적합하지 않으 내용, 미풍양속을 해치는 글, 상품기능 및 효과에 대한 오해의 소지가 있는 내용은 통보 없이 삭제될 수 있으며,</li>
            <li> L.POINT는 지급되지 않습니다.</li>
            <li>- 단순상품문의, 교환/반품 요청, 제품이상 등 불편사항은 1:1 E-mail 상담을 이용해주세요.</li>
        </ul>

        <div id="selected-item">
            <sui-item-group divided>
                <sui-item>
                    <sui-item-image size="tiny" :src='myGoods.photo'/>
                    <sui-item-content class='review'>                        
                    <sui-item-header>{{myGoods.brand}}</sui-item-header>
                        <sui-item-meta>
                            <p class="goodsName">{{myGoods.itemName}}</p>
                            <p class="goodsOption">{{myGoods.option}}</p>
                        </sui-item-meta>

                    </sui-item-content>
                </sui-item>
            </sui-item-group> 
        </div>

        <div>
            <sui-table definition id='review-table'>
                <sui-table-body>
                    <sui-table-row>
                        <sui-table-cell>별점</sui-table-cell>
                        <sui-table-cell>
                            <sui-rating :rating="myGrade" :max-rating="5" @rate="handleRate" />
                        </sui-table-cell>
                    </sui-table-row>
      
                    <sui-table-row>
                        <sui-table-cell>고객 만족도 선택</sui-table-cell>
                        <sui-table-cell>
                            <sui-form>
                                <sui-form-fields inline>
                                    <label>배송</label>
                                    <sui-form-field>
                                        <sui-checkbox label="적당해요" radio value="1" v-model="deleveryValue" />
                                    </sui-form-field>
                                    <sui-form-field>
                                    <sui-checkbox label="생각보다 빨라요" radio value="2" v-model="deleveryValue"/>
                                    </sui-form-field>
                                    <sui-form-field>
                                        <sui-checkbox label="생각보다 느려요" radio value="3" v-model="deleveryValue" />
                                    </sui-form-field>
                                </sui-form-fields>
                               
                                <sui-form-fields inline>
                                    <label>디자인</label>
                                    <sui-form-field>
                                        <sui-checkbox label="적당해요" radio value="1" v-model="designValue" />
                                    </sui-form-field>
                                    <sui-form-field>
                                    <sui-checkbox label="생각보다 예뻐요" radio value="2" v-model="designValue"/>
                                    </sui-form-field>
                                    <sui-form-field>
                                        <sui-checkbox label="생각보다 별로에요" radio value="3" v-model="designValue" />
                                    </sui-form-field>
                                </sui-form-fields>

                                <sui-form-fields inline>
                                    <label>사이즈</label>
                                    <sui-form-field>
                                        <sui-checkbox label="적당해요" radio value="1" v-model="sizeValue" />
                                    </sui-form-field>
                                    <sui-form-field>
                                    <sui-checkbox label="생각보다 커요" radio value="2" v-model="sizeValue"/>
                                    </sui-form-field>
                                    <sui-form-field>
                                        <sui-checkbox label="생각보다 작아요" radio value="3" v-model="sizeValue" />
                                    </sui-form-field>
                                </sui-form-fields>
                                
                            </sui-form>
                        
                        </sui-table-cell>
                    </sui-table-row>

                    <sui-table-row>
                        <sui-table-cell>사진 올리기</sui-table-cell>
                        <sui-table-cell>
                            <sui-button size="massive" icon="plus"></sui-button>
                            <sui-button size="massive" icon="plus"></sui-button>
                            <sui-button size="massive" icon="plus"></sui-button>
                            <br><br>
                            <p>- 매월 우수상품평 작성자 50명에게 L.POINT 2000점을 적립해 드립니다.</p>
                            <p>- 첨부가능 파일형식: JPG, JPEG, GIF, PNG</p>
                            <p>- 파일명: 영문파일명만 가능</p>
                            <p>- 용량: 10Mb 미만 파일만 업로드 가능</p>
                        </sui-table-cell>
                    </sui-table-row>

                    <sui-table-row>
                        <sui-table-cell>상품평 작성</sui-table-cell>
                        <sui-table-cell><textarea id="review-textarea"></textarea></sui-table-cell>
                    </sui-table-row>
                </sui-table-body>
            </sui-table>
        </div>
       
    </div>
</template>

<script>
    export default {
        name: "Sample",
        data(){
            return{
                myGoods:{
                        brand: '나이키',
                        itemName: 'W 에어 맥스 97 트리플 화이트 921733-100',
                        option: '사이즈 선택: 235',
                        photo: require('./img/review.jpg'),
                        purchaseDate: '2020-03-11',
                        dueDate: '2020-06-10',
                    },
                myGrade: 0,
                payload: {},
                deleveryValue:'',
                designValue:'',
                sizeValue:'',
            }
        },
        computed: {
            formattedPayload() {
                    return JSON.stringify(this.payload, null, 2);
            },
        },
        methods: {
            handleRate(evt, props) {
                this.myGrade = props.rating;
                this.payload = props;
            },
  },
    }
</script>

<style scoped>
    #write-review{
        padding: 2% 2% 3% 2%;
        margin-left: 2%;
        margin-right: 2%;
        text-align: left;
        border-bottom: 3px solid;
    }

    ul{
        list-style:none;
        font-size: 12px;
        text-align: left;
        margin-bottom: 5%;
    }

    #selected-item{
        padding: 3%;
        margin-left: 2%;
        margin-right: 2%;
        margin-bottom: 5%;
        border-bottom: 3px solid;
    }

    #review-table{
        padding-right: 2%;
    }

    #review-textarea{
        width: 95%;
        height: 100px;
    }

</style>