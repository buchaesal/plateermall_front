<template>

    <div id="review-modal">
        <header><h2 id='write-review'>상품평 작성</h2></header>
        <ul>
            <li>고객님께서 작성해주신 상품평은 등록 즉시 바로 사이트에 게재되며, 모두 공개를 원칙으로 합니다.</li>
            <li>- 상품평에 적합하지 않은 내용, 미풍양속을 해치는 글, 상품기능 및 효과에 대한 오해의 소지가 있는 내용은 통보 없이 삭제될 수 있으며,</li>
            <li> P.POINT는 지급되지 않습니다.</li>
            <li>- 단순상품문의, 교환/반품 요청, 제품이상 등 불편사항은 1:1 E-mail 상담을 이용해주세요.</li>
        </ul>
        <div id="selected-item">
            <sui-item-group divided>
                <sui-item>
                    <img :src='goodsInfo.imgUrl' width='99' height='99'/>
                    <sui-item-content class='review'>                        
                    <sui-item-header>{{goodsInfo.seller}}</sui-item-header>
                        <sui-item-meta>
                            <p class="goodsName">{{goodsInfo.title}}</p>
                            <p class="goodsOption">{{orderInfo.selectedOptions}}</p>
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
                            <sui-rating :rating="currentReview.starPoint" :max-rating="5" @rate="handleRate" @change="changeValue"/>
                        </sui-table-cell>
                    </sui-table-row>
      
                    <sui-table-row>
                        <sui-table-cell>고객 만족도 선택</sui-table-cell>
                        <sui-table-cell>
                            <sui-form>
                                <sui-form-fields inline>
                                    <label>배송</label>
                                    <sui-form-field>
                                        <sui-checkbox radio label="적당해요" value="1" @change="changeValue" v-model="currentReview.deliveryValue" />
                                    </sui-form-field>
                                    <sui-form-field>
                                    <sui-checkbox radio label="생각보다 빨라요" value="2" @change="changeValue" v-model="currentReview.deliveryValue"/>
                                    </sui-form-field>
                                    <sui-form-field>
                                        <sui-checkbox radio label="생각보다 느려요" value="3" @change="changeValue" v-model="currentReview.deliveryValue" />
                                    </sui-form-field>
                                </sui-form-fields>
                               
                                <sui-form-fields inline>
                                    <label>디자인</label>
                                    <sui-form-field>
                                        <sui-checkbox label="적당해요" radio value="1" @change="changeValue" v-model="currentReview.designValue" />
                                    </sui-form-field>
                                    <sui-form-field>
                                    <sui-checkbox label="생각보다 예뻐요" radio value="2" @change="changeValue" v-model="currentReview.designValue"/>
                                    </sui-form-field>
                                    <sui-form-field>
                                        <sui-checkbox label="생각보다 별로에요" radio value="3" @change="changeValue" v-model="currentReview.designValue" />
                                    </sui-form-field>
                                </sui-form-fields>

                                <sui-form-fields inline>
                                    <label>사이즈</label>
                                    <sui-form-field>
                                        <sui-checkbox label="적당해요" radio value="1" @change="changeValue" v-model="currentReview.sizeValue" />
                                    </sui-form-field>
                                    <sui-form-field>
                                    <sui-checkbox label="생각보다 커요" radio value="2" @change="changeValue" v-model="currentReview.sizeValue"/>
                                    </sui-form-field>
                                    <sui-form-field>
                                        <sui-checkbox label="생각보다 작아요" radio value="3" @change="changeValue" v-model="currentReview.sizeValue" />
                                    </sui-form-field>
                                </sui-form-fields>
                                
                            </sui-form>
                        
                        </sui-table-cell>
                    </sui-table-row>

                    <sui-table-row>
                        <sui-table-cell>사진 올리기</sui-table-cell>
                        <sui-table-cell>
                            <div id='img-group'>
                            <img class="image" @change="changeValue" @click="cancelUpload(0)" v-if="currentReview.myPhoto != ''" :src='currentReview.myPhoto' style="width: 100px; height: 100px; margin-right: 3%; float: left;"/>
                            <img class="image" @change="changeValue" v-if="currentReview.myPhoto == ''" :src="require('../../assets/frame.png')" style="width: 100px; height: 100px; margin-right: 3%; float: left;"/>
                            
                            <img class="image" @change="changeValue" @click="cancelUpload(1)" v-if="currentReview.myPhoto2 != ''" :src='currentReview.myPhoto2' style="width: 100px; height: 100px; margin-right: 3%; float: left;"/>
                            <img class="image" @change="changeValue" v-if="currentReview.myPhoto2 == ''" :src="require('../../assets/frame.png')" style="width: 100px; height: 100px; margin-right: 3%; float: left;"/>

                            <img class="image" @change="changeValue" @click="cancelUpload(2)" v-if="currentReview.myPhoto3 != ''" :src='currentReview.myPhoto3' style="width: 100px; height: 100px; margin-right: 3%; float: left;"/>
                            <img class="image" @change="changeValue" v-if="currentReview.myPhoto3 == ''" :src="require('../../assets/frame.png')" style="width: 100px; height: 100px; margin-right: 3%; float: left;"/>
                            
                            <input id="image-input" v-on:change='fileSelect(currentReview)' name="files" ref="commentimage" accept=".jpg,.jpeg,.png,.gif" type="file" text="" multiple="multiple" style="margin-top: 2%; margin-bottom: 2%; color: transparent;"/>
                            </div>
                            <button @click="send">보내기</button>
                            <p>- 매월 우수상품평 작성자 50명에게 P.POINT 2000점을 적립해 드립니다.</p>
                            <p>- 첨부가능 파일형식: JPG, JPEG, GIF, PNG</p>
                            <p>- 용량: 10Mb 미만 파일만 업로드 가능</p>
                        </sui-table-cell>
                    </sui-table-row>

                    <sui-table-row>
                        <sui-table-cell>상품평 작성</sui-table-cell>
                        <sui-table-cell><textarea @change="changeValue" v-model="currentReview.reviewContent" id="review-textarea" placeholder="* 배송, 상품교환 등의 민원 사항은 고객센터 1:1 e-mail을 이용해주세요.
이 곳에 작성하시면 답변을 받지 못합니다.">
                        </textarea></sui-table-cell>
                    </sui-table-row>
                </sui-table-body>
            </sui-table>
        </div>
    </div>
    
</template>

<script>
import {loadFile} from "../../api/CommentApi.js";

    export default {
        props:['orderInfo', 'goodsInfo', 'currentReview'],
        name: "ReviewForm",
        data(){
            return{
                fileList:[],
            }
        },
        computed: {
            formattedPayload() {
                return JSON.stringify(this.currentReview.payload, null, 2);
            },
        },
        methods: {
            async send(){
                await loadFile(this.fileList);
            },

            handleRate(evt, props) {
                this.currentReview.starPoint = props.rating;
                this.currentReview.payload = props;
            },
            changeValue(){
                this.$store.commit('updateComment', this.currentReview);
            },
            fileSelect(review){

                if (this.$refs.commentimage.files && this.$refs.commentimage.files[0]) {
                    let reader = new FileReader();
                    
                    for(let index in this.$refs.commentimage.files){
                        this.fileList.push(this.$refs.commentimage.files[index]);
                    }

                    reader.onload = function(event){
                        review.myPhoto = event.target.result;
                    }
                    
                    this.changeValue();
                    reader.readAsDataURL(this.$refs.commentimage.files[0]);
                }

                // if(this.$refs.commentimage.files && this.$refs.commentimage.files[1]){
                //     let reader = new FileReader();

                //     reader.onload = function(event){
                //         review.myPhoto2 = event.target.result;
                //     }
                    
                //     this.changeValue();
                //     reader.readAsDataURL(this.$refs.commentimage.files[1]);
                // }

                // if(this.$refs.commentimage.files && this.$refs.commentimage.files[2]){
                //     let reader = new FileReader();
                    
                //     reader.onload = function(event){
                //         review.myPhoto3 = event.target.result;
                //     }
                    
                //     this.changeValue();
                //     reader.readAsDataURL(this.$refs.commentimage.files[2]);
                // }
            },
            cancelUpload(index){
                if(confirm("사진을 삭제하시겠습니까?")) {
                    
                    if(index == 0){
                        if(this.currentReview.myPhoto2 == ''){
                            this.currentReview.myPhoto = '';
                            
                        }else{
                            this.currentReview.myPhoto = this.currentReview.myPhoto2;                        
                        }

                        this.currentReview.myPhoto2 = this.currentReview.myPhoto3;
                        this.currentReview.myPhoto3 = '';
                    }
                    else if(index == 1){
                        this.currentReview.myPhoto2 = this.currentReview.myPhoto3;
                        this.currentReview.myPhoto3 = '';
                    }else{
                        this.currentReview.myPhoto3 = '';
                    }

                    this.changeValue();
                }
                
                alert("삭제되었습니다.");
            }
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
        resize: none;
    }

    img{
        margin-right: 2%;
    }

    image{
        width: 100px; 
        height: 100px; 
        margin-right: 3%; 
        float: left;
    }

</style>