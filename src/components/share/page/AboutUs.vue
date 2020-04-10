<template>
    <div id="aboutus-main">
        <Header></Header>

        <div class="aboutus-content">

            <h3 class="section_title"> About Us</h3>

            <hr class="divider">

            <sui-card class="card-content-ducain">
                <div class="img-box">
                    <sui-image :src="ducain.imgUrl" class="card-img"/>
                </div>
                <sui-card-content>
                    <sui-card-header>{{ducain.name}}</sui-card-header>
                    <sui-card-meta>{{ducain.email}}</sui-card-meta>
                    <sui-card-description>{{ducain.description}}</sui-card-description>
                </sui-card-content>
            </sui-card>
            <div class="content-card">
                <sui-card-group :items-per-row="3">
                    <sui-card class="card-content" v-for="(newbie, index) in newbieList" :key="index">
                        <div class="img-box">
                            <sui-image :src="newbie.imgUrl" class="card-img"/>
                        </div>
                        <sui-card-content>
                            <sui-card-header>{{newbie.name}}</sui-card-header>
                            <sui-card-meta>{{newbie.email}}</sui-card-meta>
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
                    email: 'sonsk87@plateer.com',
                    description: 'Project Leader',
                },
                newbieList: [

                    {
                        imgUrl: require('../../../assets/ssi.png'),
                        name: 'Song Sea Il',
                        email: 'songseail@plateer.com',
                        description: 'Cart',
                    },
                    {
                        imgUrl: require('../../../assets/lsk.png'),
                        name: 'Lee Sun Kyung',
                        email: 'leesk@plateer.com',
                        description: 'Goods',
                    },
                    {
                        imgUrl: require('../../../assets/cdb.png'),
                        name: 'Choi Dan Bi',
                        email: 'danbi07@plateer.com',
                        description: 'User',
                    },
                    {
                        imgUrl: require('../../../assets/jms.png'),
                        name: 'Jang Myung Sub',
                        email: 'msubjang@plateer.com',
                        description: 'Order',
                    },
                    {
                        imgUrl: require('../../../assets/nyj.png'),
                        name: 'Na Yun Joo',
                        email: 'nayj124@plateer.com',
                        description: 'Comment',
                    },
                    {
                        imgUrl: require('../../../assets/jek.png'),
                        name: 'Jeon Eun Koo',
                        email: 'jeonek@plateer.com',
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

    .section_title {
        position: relative;
        margin-bottom: 40px;
        font-size: 32px;
        line-height: 44px;
        font-weight: 400;
        text-align: center;
    }

    .divider {
        margin-bottom: 40px;
    }
</style>