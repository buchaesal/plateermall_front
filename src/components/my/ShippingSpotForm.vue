<template>
    <div class="input-address">
        <p>
            <span class="spot-properties">받으시는 분 </span>
            <input type="text">
        </p>
       <span class="spot-properties">배송지명 </span><input type="text">
    </div>
</template>

<script>
    export default {
        name: "ShippingSpotForm"
    }
</script>

<style scoped>
input[type="text"]{
    height: 40px;
    padding: 4px 12px 5px;
    border: 1px solid #D9D9D9;
    background-color: #FFF;
    color: #000;
    font-size: 14px;
}
.spot-properties{
    min-width: 78px;
    margin-right: 5px;
}
</style>