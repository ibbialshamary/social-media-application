<template>
    <nav id="navigationBar">
        <router-link class="navigationBarLogo" to="/"><h1>Social Media Application</h1></router-link>
            <div @click="changeTheme">
                <i class="fas fa-lightbulb" id="lightBulb" ></i>
            </div>
            <div class="navigationLinks">
                <p v-if="isLoggedIn">
                    <router-link to="/Home">Home</router-link>
                </p>

<!--                <p v-if="isLoggedIn">-->
<!--                    <router-link to="/Explore">Explore</router-link>-->
<!--                </p>-->

                <p v-if="isLoggedIn">
                    <router-link to="/ProfileSettings">Settings</router-link>
                </p>

                <p v-if="isLoggedIn">
                    <router-link to="/CreatePost">Post</router-link>
                </p>

<!--                <p v-if="isLoggedIn">-->
<!--                    <router-link to="/CreateWhisper">Whisper</router-link>-->
<!--                </p>-->

<!--                <p v-if="isLoggedIn">-->
<!--                    <router-link to="/Chat">Chat</router-link>-->
<!--                </p>-->

                <p v-if="!isLoggedIn">
                    <router-link to="/Login">Login</router-link>
                </p>

                <p v-if="!isLoggedIn">
                    <router-link to="/Register">Register</router-link>
                </p>

                <p v-if="isLoggedIn">
                    <router-link to="/Profile">Profile</router-link>
                </p>

                <p v-if="isLoggedIn">
                    <a to="/Logout" @click.prevent="logoutUser">Logout</a>
                </p>
            </div>
    </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import fontawesome from "@fortawesome/fontawesome";
import brands from "@fortawesome/fontawesome-free-brands";
import solid from "@fortawesome/fontawesome-free-solid";

fontawesome.library.add(brands, solid);
export default {
    data() {
        return {
            lightModeEnabled: false,
        };
    },
    mounted: function () {
        // call the function under methods that gets saved theme from localstorage
        this.getThemeFromLocalStorage();
    },
    computed: {
        ...mapGetters(['isLoggedIn'])
    },
    methods: {
        clearErrorMessages() {
        let focusedElement = document.getElementById('errorMessages');
        focusedElement.innerHTML = '';
        },
        // all these mapActions and the above mapGetters can be found in UserREST.js under the warehouse folder in the client parent directory
        ...mapActions(['logout']),
        logoutUser() {
            this.logout();
        },

        getThemeFromLocalStorage: function() {
            // get the theme stored in the local storage
            const currentTheme = localStorage.getItem('theme');

            if (currentTheme) {
                document.documentElement.setAttribute('data-theme', currentTheme);
                this.lightModeEnabled = true;
                if (currentTheme === 'dark') {
                    document.documentElement.setAttribute('data-theme', currentTheme);
                    this.lightModeEnabled = false;
                }
            }
        },
        changeTheme: function() {
            if(this.lightModeEnabled) {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                this.lightModeEnabled = false;
            } else if(!this.lightModeEnabled) {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                this.lightModeEnabled = true;
            }
        },
    }
}
</script>

<style>

</style>
