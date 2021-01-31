<template>
  <div class="section">
    <div class="container">
      <simple-upload/>
    </div>
  </div>
</template>

<script>
import SimpleUpload from '@/components/SimpleUpload.vue';
export default {
  components: { SimpleUpload },
  data() {
    return {
      previewImage: null,
    }
  },
  methods: {

  },
}
</script>

<style>
.section {
  text-align: center;
  margin-top: 5%;
  background-color: rgba(15, 15, 15, .95);
  z-index: 1000;
  position: fixed;
  padding: 1%;

  input {
    background-color: white
  }

  img {
    width: 30%;
    display: block;
    margin: auto auto 10px;
  }
}
</style>