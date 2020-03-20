<template>
    <div>
        <div class="no-order">
            <sui-icon name="info" size="huge" circular color="grey"/>
            <p class="no-order-msg">데이터가 없습니다.</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NoItem"
    }
</script>

<style scoped>
    .no-order {
        width: 100%;
        text-align: center;
        margin-top: 100px;
    }

    .no-order-msg {
        margin-top: 50px;
        font-weight: bold;
        color: gray;
    }
</style>