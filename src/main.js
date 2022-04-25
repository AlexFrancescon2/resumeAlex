import { createApp } from 'vue';

// Main
import App from './App.vue';

// components
import MainSection from './components/MainSection.vue';
import Header from './components/Header.vue';
import Timeline from './components/Timeline.vue';
import SkillsSection from './components/Skills.vue';

const app = createApp(App);
app.component('main-section', MainSection)
app.component('main-header', Header)
app.component('timeline-section', Timeline)
app.component('skills-section', SkillsSection)
app.mount('#app')
