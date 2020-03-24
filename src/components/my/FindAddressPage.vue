<template>
    <div>
        <vue-daum-postcode @complete="complete"/>
    </div>
</template>

<script>
    export default {
        name: "FindAddressPage",
        props: {
          targetShippingSpot : Object,
        },
        methods: {
            complete(result) {
                // this.$store.commit('setAddress', {roadAddress: result.roadAddress, zipcodeAddress: result.jibunAddress});
                this.targetShippingSpot.roadAddress = result.roadAddress;
                this.targetShippingSpot.zipcodeAddress = result.jibunAddress;
                this.$emit('complete');
            }
        }
    }
</script>

<style scoped>

</style>