<template>

  <div class="yo">
    <div>
      <input style="display: block" type="file" accept="image/jpeg" @change=uploadImage>
      <img :src=previewImage class="uploading-image">
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      previewImage: null,
    }
  },
  methods: {
    uploadImage(e){
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = e => {
        this.previewImage = e.target.result;
        console.log(this.previewImage);
      };
    }
  },
}
</script>

<style>
.yo {
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
</style>