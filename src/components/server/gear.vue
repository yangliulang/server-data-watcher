<template>
  <div class="gear">
    <div class="gear-group">
      <span>1</span>
      <span>2</span>
    </div>
    <div class="gear-group">
      <span></span>
      <span></span>
    </div>
    <div class="gear-group">
      <span></span>
      <span></span>
    </div>
    <!-- <div class="gear-group">
      <span></span>
      <span></span>
    </div>-->
  </div>
</template>

<script>
export default {}
</script>

<style scope>
.gear {
  position: relative;
  margin-top: 50px;
  margin-left: 50px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #000;
}
.gear-group {
  position: absolute;
  width: 100%;
  height: 100%;
}
.gear-group > span {
  position: absolute;
  display: block;
  width: 20px;
  height: 20px;
  border: 5px solid #000;
  border-radius: 50%;
  border-color: transparent transparent #000 #000;
}
.gear-group > span:nth-child(1) {
  transform: rotate(-135deg) translate(15px, -30px);
}
.gear-group > span:nth-child(2) {
  transform: rotate(45deg) translate(15px, -30px);
}
.gear-group:nth-child(2) {
  transform: rotate(-90deg);
}
.gear-group:nth-child(3) {
  transform: rotate(-120deg);
}
/* .gear-group:nth-child(4) {
  transform: rotate(-150deg);
} */
</style>
