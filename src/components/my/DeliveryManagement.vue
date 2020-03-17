<template>
  <div>
    <p class="action_info-large">
      엘롯데에서 상품구매 시 배송되는 주소록입니다. 배송지를 추가/수정/삭제하여 관리할 수 있습니다.
      <button
        class="btn_normal"
        id="btn_dlvAdd"
        title="배송지 추가 열기"
      >배송지 추가</button>
    </p>

    <sui-table celled textAlign="center">
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell></sui-table-header-cell>
        <sui-table-header-cell>배송지 이름</sui-table-header-cell>
        <sui-table-header-cell>배송지</sui-table-header-cell>
        <sui-table-header-cell>관리</sui-table-header-cell>
      </sui-table-row>

      <sui-table-row>
        <sui-table-cell class="no-delivery-spot" colspan="4">
            <br>
            <br>
            <p>기본 배송지를 등록해주세요.</p>
            <br>
            <br>
        </sui-table-cell>
      </sui-table-row>
    </sui-table-header>

    </sui-table>
  </div>
</template>

<script>
export default {
  name: "Sample"
};
</script>

<style scoped>
.action_info-large {
  margin: 20px 0;
  padding-top: 20px;
  color: #666;
  font-size: 14px;
  font-weight: bold;
}
.btn_normal {
  float: right;
  margin-bottom: 30px;
  width: 160px;
  border: 1px solid #b3b3b3;
  background-color: #fff;
  color: #000;
  display: inline-block;
  text-align: center;
  padding: 11px 24px 9px;
  vertical-align: middle;
  font-size: 14px;
}
.no-delivery-spot {
    
    color: #666;
  font-size: 14px;
  font-weight: bold;
}
</style>