<template>
    <div id="aboutus-main">
        <Header></Header>

        <div class="aboutus-content">
            <sui-card class="card-content-ducain">
                <div class="img-box">
                    <sui-image :src="ducain.imgUrl" class="card-img"/>
                </div>
                <sui-card-content>
                    <sui-card-header>{{ducain.name}}</sui-card-header>
                    <sui-card-meta>{{ducain.joinDate}}</sui-card-meta>
                    <sui-card-description>{{ducain.description}}</sui-card-description>
                </sui-card-content>
            </sui-card>
            <div class="content-card">
                <sui-card-group :items-per-row="3">
                    <sui-card class="card-content" v-for="(newbie, index) in list" :key="index">
                        <div class="img-box">
                            <sui-image :src="newbie.imgUrl" class="card-img"/>
                        </div>
                        <sui-card-content>
                            <sui-card-header>{{newbie.name}}</sui-card-header>
                            <sui-card-meta>{{newbie.joinDate}}</sui-card-meta>
                            <sui-card-description>{{newbie.description}}</sui-card-description>
                        </sui-card-content>
                    </sui-card>
                </sui-card-group>
            </div>
        </div>

        <SideBanner></SideBanner>

        <div>
            <Footer></Footer>
        </div>
    </div>
</template>

<script>
    import Header from "../Header";
    import SideBanner from "../SideBanner";
    import Footer from "../Footer";

    export default {
        name: "AboutUs",
        components: {
            Header,
            SideBanner,
            Footer
        },
        data() {
            return {
                ducain: {
                    imgUrl: require('../../../assets/ducain.png'),
                    name: 'Ducain',
                    joinDate: 'Joined in ????.??.??',
                    description: 'Special Thanks to',
                },
                list: [

                    {
                        imgUrl: require('../../../assets/ssi.png'),
                        name: 'sae il. Song',
                        joinDate: 'Joined in 2020.01.22',
                        description: 'WishList, Shopping Cart',
                    },
                    {
                        imgUrl: require('../../../assets/lsk.png'),
                        name: 'sun kyung. Lee',
                        joinDate: 'Joined in 2020.01.22',
                        description: 'Goods, Category',
                    },
                    {
                        imgUrl: require('../../../assets/cdb.png'),
                        name: 'dan bi. Choi',
                        joinDate: 'Joined in 2020.01.22',
                        description: 'Auth, User',
                    },
                    {
                        imgUrl: require('../../../assets/jms.png'),
                        name: 'myung sub. Jang',
                        joinDate: 'Joined in 2020.01.22',
                        description: 'Order',
                    },
                    {
                        imgUrl: require('../../../assets/nyj.png'),
                        name: 'yoon joo. Na',
                        joinDate: 'Joined in 2020.01.22',
                        description: 'Comment',
                    },
                    {
                        imgUrl: require('../../../assets/jek.png'),
                        name: 'eun koo. Jeon',
                        joinDate: 'Joined in 2020.01.22',
                        description: 'Board',
                    }
                ]
            }
        }
    }
</script>

<style scoped>

    #aboutus-main {
        height: 300%;
        margin-top: 230px;
    }

    .aboutus-content {
        width: 1240px;
        max-width: 1600px;
        min-width: 1240px;
        margin: 0 auto;
    }

    .content-card {
        display: inline;
    }

    .card-content {
        display: inline-block;
        margin-bottom: 50px !important;
    }

    .card-content-ducain {
        margin: 0 auto 50px auto !important;
    }

    .img-box {
        width: auto;
        height: 300px;
        overflow: hidden;
    }

    .card-img {
        width: auto;
        height: 100%;
        margin: 0px auto;
    }
</style>