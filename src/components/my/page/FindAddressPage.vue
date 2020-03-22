<template>
    <div>
        <vue-daum-postcode @complete="complete"/>
    </div>
</template>

<script>
    export default {
        name: "FindAddressPage",
        methods: {
            complete(result) {
                this.$store.commit('setAddress', {roadAddress: result.roadAddress, zipcodeAddress: result.jibunAddress});
                this.$emit('complete');
            }
        }
    }
</script>

<style scoped>

</style>