<template>
  <form @click.stop style="padding: 20px">
    <label>Username:</label><input type="text" placeholder="username" required autocomplete="off" v-model="username"><br>
    <label>Email:</label><input type="email" placeholder="email" required autocomplete="off" v-model="email"><br>
    <label>Firstname:</label><input type="text" placeholder="firstname" required autocomplete="off" v-model="firstname"><br>
    <label>Surname:</label><input type="text" placeholder="surname" required autocomplete="off" v-model="surname"><br>
    <label>Password:</label><input type="password" placeholder="password" required autocomplete="off" v-model="password">
    <button @click="$emit('register-clicked', 'register')">Register</button>
  </form>
</template>

<script>
export default {
  name: "register",
  emits: ["register-clicked"],

  data() {
    return {
      username: "",
      email: "",
      firstname: "",
      surname: "",
      password: "",
    }
  },
}
</script>

<style scoped>

</style>