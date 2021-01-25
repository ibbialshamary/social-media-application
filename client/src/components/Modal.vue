<template>
  <div class="postModal" v-if="isModalVisible" @click="closeModal">
    <div class="modal">
      <slot></slot>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
    }
  },
  name: "modal",
  props: ["isModalVisible", "actionLoginOrRegister"],
  emits: ["close-modal"],

  methods: {
    closeModal() {
      this.$emit("close-modal");
    }
  },
}
</script>

<style>
.postModal {
  background-color: rgba(15, 15, 15, .95);
  width: 100%;
  height: 100vh;
  z-index: 1000;
  position: fixed;

  img {
    width: 30%;
    display: block;
    margin: auto auto 10px;
  }
}
.modal {
  background-color: #000000;
  left: 50%;
  top: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 50%;
  border-radius: 20px;
  border: solid 1px white;
}
</style>