<template>
  <div class="loader">
    <svg class="spinner">
      <circle cx="20" cy="20" fill="none" r="18" stroke-width="3"></circle>
    </svg>
  </div>
</template>

<style lang="scss" scoped>
@import "@/scss/colors.scss";
.loader {
  margin: 24px auto;
}

// 124.6 = calc(3.14 * 40);
circle {
  fill: transparent;
  stroke: $primary-500;
  stroke-linecap: round;
  stroke-dasharray: 124.6;
  stroke-dashoffset: 40;
  animation: spinner 3s linear infinite;
}

// 20px 20px 0 = calc(0.5px * 40) calc(0.5px * 40) 0;
.spinner {
  x: 0px;
  y: 0px;
  display: block;
  transform-origin: 20px 20px 0;
  animation: rotateSpinner 3s linear infinite;
  width: 40px;
  height: 40px;
}

@keyframes spinner {
  0% {
    stroke-dashoffset: 26.4;
  }
  50% {
    stroke-dashoffset: 124.6;
  }
  100% {
    stroke-dashoffset: 0.66;
  }
}

@keyframes rotateSpinner {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(720deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
</style>
