<template>
  <main-header></main-header>
  <section class="first-section">
    <main-section></main-section>
  </section>
  <section class="second-section">
    <timeline-section></timeline-section>
  </section>
  <section class="third-section">
    <skills-section></skills-section>
  </section>
</template>

<script>
// Imports
import MainSection from "./components/MainSection.vue";
import MainHeader from "./components/Header.vue";
import TimelineSection from "./components/Timeline.vue";
import SkillsSection from "./components/Skills.vue";

export default {
  components: { MainSection, MainHeader, TimelineSection, SkillsSection },
  data() {
    return {};
  },
  methods: {
    toggleFavouriteStatus(friendId) {
      const identifiedFriend = this.friends.find(
        (friend) => friend.id === friendId
      );
      identifiedFriend.isFavourite = !identifiedFriend.isFavourite;
      console.log(identifiedFriend);
      console.log(identifiedFriend.isFavourite);
    },
  },
  computed: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500&display=swap");
@import "./assets/css/variables.css";

* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

h3 {
  margin-bottom: 15px;
}

section {
  width: 100%;
  padding-left: 10%;
  padding-right: 10%;
  height: auto;
  /* padding: 0px 40px; */
  position: relative;
  clear: both;
  min-height: 100vh;
}

.first-section {
  background-color: var(--primary-bg);
}
.second-section {
  background-color: var(--secondary-bg);
  padding-top: 40px;
  padding-bottom: 40px;
}
.third-section {
  padding-top: 40px;
  padding-bottom: 40px;
}
.third-section:before {
  position: absolute;
  content: "";
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-image: url("./assets/img/bg/white-texture.png");
  background-repeat: repeat;
  opacity: 0.6;
  z-index: 2;
}
.third-section:after {
  position: absolute;
  content: "";
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-color: #000;
  z-index: 1;
}

.primaryText {
  color: var(--primary-color);
}
.secondaryText {
  color: var(--secondary-color);
}

.subtitle {
  font-size: 16px;
  text-transform: uppercase;
  margin-top: 0px;
  color: var(--primary-color);
  margin-bottom: 80px;
  letter-spacing: 1px;
}
</style>
