<template>
  <form @submit.prevent="sendFile" enctype="multipart/form-data">
    <div v-if="message" :class="`message ${error ? 'is-danger' : 'is-success'}`">
      {{ message }}
    </div>
    <div class="field">
      <label for="file" class="label">Upload File</label>
      <input type="file" id="file" ref="file" @change="selectFile">
      <span v-if="file" class="file-name">{{ file.name }}</span>
    </div>

    <div class="field">
      <button class="button is-info">Send</button>
    </div>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "SimpleUpload",

  data() {
    return {
      file: "",
      message: "",
      error: false,
    }
  },

  methods: {
    selectFile() {
      const file = this.$refs.file.files[0];

      const type = file.type.split("/")[1];
      console.log(type);

      const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
      const MAX_SIZE = 20000000;
      const tooLarge = file.size > MAX_SIZE;

      if (allowedTypes.includes(file.type) && !tooLarge) {
        this.file = file;
        this.error = false;
        this.message = "";
      } else {
        this.error = true;
        this.message = tooLarge ? `Too large. Max size is ${MAX_SIZE / 1000}KB` : "Only images are allowed";
      }
    },

    async sendFile() {
      const formData = new FormData();
      formData.append("file", this.file, `${ Date.now() }-${ this.file.name.toLowerCase() }`);
      console.log(formData);

      try {
        await axios.post("http://localhost:5000/upload", formData);
        this.message = "File has been uploaded";
        this.file = "";
        this.error = false;
      } catch(err) {
        console.log(err);
        this.message = err.response.data.error;
        this.error = true;
      }
    },
  }
}
</script>

<style>
label {
  background: white !important;
  color: black;
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 5%;
  width: 100%;
  cursor: pointer;
}
</style>