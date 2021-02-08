<template>
  <div class="LodingS" v-if="show">
    <div class="ring">
      <atom-spinner :animation-duration="1000" :size="400" :color="'#f44941'" />
    </div>
  </div>
</template>

<script>
import {
  FulfillingBouncingCircleSpinner,
  FlowerSpinner,
  AtomSpinner,
} from "epic-spinners";
export default {
  name: "LodingS",
  components: {
    FlowerSpinner,
    FulfillingBouncingCircleSpinner,
    AtomSpinner,
  },
  data() {
    return {
      show: true,
    };
  },
  mounted() {
    this.showToogle();
  },
  methods: {
    showToogle() {
      setTimeout(() => {
        this.show = false;
      }, 500);
    },
  },
};
</script>

<style>
.LodingS {
  width: 100%;
  height: 100%;
  z-index: 999;
  position: fixed;
  background-color: #212529;
}
.ring {
  position: absolute;
  top: 4em;
  left: 40em;
  right: 40em;
  margin: 0 auto;
  height: 100%;
}
</style>
