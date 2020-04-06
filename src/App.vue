<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>

    export default {
        name: 'App',
        components: {},
        data() {
            return {
                prevScrollpos: window.pageYOffset,
            }
        },
        created () {
            window.addEventListener('scroll', this.handleScroll);
        },
        destroyed () {
            window.removeEventListener('scroll', this.handleScroll);
        },
        methods: {
            handleScroll () {
                let header = document.getElementById("header");
                let currentScrollPos = window.pageYOffset;
                if (this.prevScrollpos > currentScrollPos) {
                    header.style.top = "0";
                } else {
                    header.style.top = "-125px";
                }
                this.prevScrollpos = currentScrollPos;
            }
        }
    }
</script>
