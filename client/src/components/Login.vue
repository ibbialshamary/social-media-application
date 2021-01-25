<template>
  <form @click.stop style="padding: 20px">
    <label>Email:</label><input type="email" placeholder="email" required autocomplete="off" v-model="email"><br>
    <label>Password:</label><input type="password" placeholder="password" required autocomplete="off" v-model="password">
    <button>Login</button>
  </form>
</template>

<script>
export default {
name: "login",

  data() {
    return {
      name: "login",
      emits: ["login-clicked"],

      email: "",
      password: "",

    }
  }
}


</script>

<style scoped>

</style>