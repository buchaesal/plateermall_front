<template>
    <div>
        <div class='option'>
            <sui-dropdown text="옵션전체" />
            <sui-dropdown text="전체보기" />        
        </div>
        <br>
        <div class='review-list'>
            <sui-item-group divided>
                <sui-item v-for='(review, index) in reviews' :key='index'>
                    <sui-item-content>
                    <sui-item-header><sui-rating id="starAvg" :rating="review.starCount" :max-rating="5" /> {{review.option}}</sui-item-header>
                    <sui-item-meta>
                        <p>{{review.content}}</p>
                        <img :src='review.photo' width='99' height='99'>
                        <p>{{review.id}} | {{review.date}}</p>
                    </sui-item-meta>
                <sui-item-description>
            </sui-item-description>
      </sui-item-content>
    </sui-item>
    
    </sui-item-group>
        </div>
    </div>


</template>

<script>

    export default {
        name: "Sample",
        data(){
            return{
                reviews:[
                    {
                        starCount: 5,
                        option: '사이즈선택:235',
                        content: '발 볼이 생각보다 좁아서 아프네요. 사이즈는 5mm정도 작게 나온 것 같아요.',
                        photo: require('./img/review.jpg'),
                        id: '선경',
                        date: '2020.03.16'
                    },
                    {
                        starCount: 3,
                        option: '사이즈선택:245',
                        content: '음 글쎄 잘 모르겠어요',
                        photo: '',
                        id: 'testreview',
                        date: '2020.03.16'
                    },
                ]
            }
        },
    }
</script>

<style scoped>

    .option{
        text-align: left;
        padding-left: 5%;
    }
    .review-list{
        text-align: left;
        padding-top: 3%;
        padding-left: 5%;
    }
</style>