<template>
    <div id="aboutus-main">
        <Header></Header>

        <div class="aboutus-content">
            <div class="content-card">
                <sui-card v-for="(newbie, index) in list" :key="index">
                    <sui-image :src="newbie.imgUrl"/>
                    <sui-card-content>
                        <sui-card-header>{{newbie.name}}</sui-card-header>
                        <sui-card-meta>{{newbie.joinDate}}</sui-card-meta>
                        <sui-card-description>{{newbie.description}}</sui-card-description>
                    </sui-card-content>
                </sui-card>
            </div>
        </div>

        <SideBanner></SideBanner>
        <Footer></Footer>
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
        data(){
            return{
                list:[
                    {
                        imgUrl:'../../../assets/ssi.png',
                        name:'sae il. Song',
                        joinDate:'Joined in 2020.01.22',
                        description:'WishList, Shopping Cart',
                    },
                    {
                        imgUrl:'../../../assets/lsk.png',
                        name:'sun kyung. Lee',
                        joinDate:'Joined in 2020.01.22',
                        description:'WishList, Shopping Cart',
                    },
                    {
                        imgUrl:'../../../assets/cdb.jpg',
                        name:'dan bi. Choi',
                        joinDate:'Joined in 2020.01.22',
                        description:'WishList, Shopping Cart',
                    }
                ]
            }
        }
    }
</script>

<style scoped>

    #aboutus-main {
        height: 300%;
    }

    .aboutus-content {
        margin-top: 230px;
    }

    .content-card {
        margin: 100px 0;
        display: inline;
    }
</style>