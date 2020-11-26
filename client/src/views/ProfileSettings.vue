<template>
  <div class="profileSettingsHeading">
    <div class="settingsTitleHeading">
      <br><p>Profile Settings</p>
    </div>
    <div class="leftSection">
      <img src="../images/defaultAvatar.png">
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
          <br><h1>About</h1><br>
          Name: <br><input type="text" value="Ibrahim" readonly><br><br>
          Username: <br><input type="text" value="ibbialshamary" readonly><br><br>
          Email: <br><input type="text" value="ibbialshamary@gmail.com" readonly><br><br>
          Biography: <br><input type="text" value="No created biography" readonly><br><br>
          Location: <br><input type="text" value="Manchester" readonly><br>
        </div>

        <div id="rightProfileSection" class="sectionClass">
          <br><h1>Profile</h1><br>
        </div>

        <div id="rightPreferencesSection" class="sectionClass">
          <br><h1>Preferences</h1><br>
        </div>

        <div id="rightNotificationsSection" class="sectionClass">
          <br><h1>Notifications</h1><br>
        </div>

        <div id="rightSecuritySection" class="sectionClass">
          <br><h1>Security</h1><br>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  computed: mapGetters(['user']),
  data() {
    return {
    }
  },
  methods: {
    showSelectedPage: function(elementClass, elementId, rightSectionClass, rightSectionContent) {
      // loop through the nodes for the classes with the same name
      var items = document.getElementsByClassName(elementClass);
      for (var i=0; i < items.length; i++) {
        // remove the selected marker/highlighter for every class
        items[i].style.visibility = "hidden";
      }
      // highlight the selected one with the provided id
      var selectedSettingsHighlighter = document.getElementById(elementId);
      selectedSettingsHighlighter.style.visibility = "visible";

      if (window.getComputedStyle(selectedSettingsHighlighter).visibility === "visible") {
        // loop through the nodes for the classes with the same name
        var rightSectionClassDefiner = document.getElementsByClassName(rightSectionClass);
        for (var a = 0; a < rightSectionClassDefiner.length; a++) {
          // remove the selected marker/highlighter for every class
          rightSectionClassDefiner[a].style.display = "none";
        }
      }
      var selectedSettingsContent = document.getElementById(rightSectionContent);
      selectedSettingsContent.style.display = "block";
    },

    ...mapActions(['getProfile']),

    goToProfileSettings: function() {
      let url = window.location.href = "./profileSettings"
      window.location(url);
    }
  },
  created() {
    // get the getProfile request
    this.getProfile();
  }
}
</script>