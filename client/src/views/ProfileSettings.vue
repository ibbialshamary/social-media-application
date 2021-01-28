<template>
  <div class="profileSettingsHeading">
    <div class="settingsTitleHeading">
      <h1>Profile Settings</h1>
    </div>
    <div class="leftSection">

      <img :src="user.image">
      <p class="userNameParagraph"> {{ user.name }}</p>
      <div class="settingsOptions">
        <button @click="showSelectedPage('buttonHighlighter', 'aboutSection', 'sectionClass', 'rightAboutSection')"><div class="buttonHighlighter" id="aboutSection"></div><p>About</p></button>
      </div>
      <div class="settingsOptions">
        <button @click="showSelectedPage('buttonHighlighter', 'profileSection', 'sectionClass', 'rightProfileSection')"><div class="buttonHighlighter" id="profileSection"></div><p>Profile</p></button>
      </div>
      <div class="settingsOptions">
        <button @click="showSelectedPage('buttonHighlighter', 'preferencesSection', 'sectionClass', 'rightPreferencesSection')"><div class="buttonHighlighter" id="preferencesSection"></div><p>Preferences</p></button>
      </div>
      <div class="settingsOptions">
        <button @click="showSelectedPage('buttonHighlighter', 'notificationsSection', 'sectionClass', 'rightNotificationsSection')"><div class="buttonHighlighter" id="notificationsSection"></div><p>Notifications</p></button>
      </div>
      <div class="settingsOptions">
        <button @click="showSelectedPage('buttonHighlighter', 'securitySection', 'sectionClass', 'rightSecuritySection')"><div class="buttonHighlighter" id="securitySection"></div><p>Security</p></button>
      </div>
    </div>


    <div class="rightSection">
      <div id="sectionsContainer">
        <div id="rightAboutSection" class="sectionClass">
          <br><h2>About</h2><br>
          Name: <br><input type="text" v-model="user.name"><br><br>
          Biography: <br><input type="text" v-model="user.biography"><br><br>
          Location: <br><input type="text" v-model="user.location"><br><br>
          <button v-if="hasBeenUpdated" @click="patchProfileSettings(user._id)">Save changes</button><br><br>
          <p style="color: #2BAE66FF; text-align: left;">{{ statusMessage }}</p>
        </div>

        <div id="rightProfileSection" class="sectionClass">
          <br><h2>Profile</h2><br>
        </div>

        <div id="rightPreferencesSection" class="sectionClass">
          <br><h2>Preferences</h2><br>
        </div>

        <div id="rightNotificationsSection" class="sectionClass">
          <br><h2>Notifications</h2><br>
        </div>

        <div id="rightSecuritySection" class="sectionClass">
          <br><h2>Security</h2><br>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  data() {
    return {
      bio: "",
      loc: "",
      statusMessage: "",
    }
  },

  computed: {
    ...mapGetters({
      user: 'user',
    }),
    hasBeenUpdated() {
      return this.user.biography !== "" && this.user.location !== "";
    }

  },

  methods: {
    ...mapActions(['patchUser']),

    patchProfileSettings(userId) {
      let patchedUserSettings = {
        name: this.user.name,
        biography: this.user.biography,
        location: this.user.location,
      };

      this.patchUser([userId, patchedUserSettings]).then(res => {
        if (res.data) {
          console.log(res.data.status);
          this.statusMessage = res.data.status;
        }
      }).catch(() => {
        alert("Fail");
      });
    },

    showSelectedPage: function(elementClass, elementId, rightSectionClass, rightSectionContent) {
      // loop through the nodes for the classes with the same name
      const items = document.getElementsByClassName(elementClass);
      for (let i=0; i < items.length; i++) {
        // remove the selected marker/highlighter for every class
        items[i].style.visibility = "hidden";
      }
      // highlight the selected one with the provided id
      const selectedSettingsHighlighter = document.getElementById(elementId);
      selectedSettingsHighlighter.style.visibility = "visible";

      if (window.getComputedStyle(selectedSettingsHighlighter).visibility === "visible") {
        // loop through the nodes for the classes with the same name
        const rightSectionClassDefiner = document.getElementsByClassName(rightSectionClass);
        for (let a = 0; a < rightSectionClassDefiner.length; a++) {
          // remove the selected marker/highlighter for every class
          rightSectionClassDefiner[a].style.display = "none";
        }
      }
      const selectedSettingsContent = document.getElementById(rightSectionContent);
      selectedSettingsContent.style.display = "block";
    },

    ...mapActions(['getProfile']),

    goToProfileSettings: function() {
      this.$router.replace('/ProfileSettings');
    }
  },
  created() {
    // get the getProfile request
    this.getProfile();
  }
}
</script>