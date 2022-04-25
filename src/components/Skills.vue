<template>
  <div class="skillswrapper">
    <h3>Programming skills</h3>
    <h4 class="subtitle">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </h4>
    <div class="skillsblock" v-for="(item, index) in skills" :key="index">
      <div
        class="progress_inner"
        v-for="skill in item"
        :key="skill.message"
        :data-value="skill.percentage"
      >
        <span class="skills_infowrapper">
          <span class="label">
            <span class="programmingicon">
              <img :src="skill.icon" :alt="skill.name" />
            </span>
            <span class="programminglanguage">
              {{ skill.name }}
            </span>
          </span>
          <span class="number">{{ skill.percentage }} %</span></span
        >
        <div class="background">
          <div class="bar open">
            <div
              class="bar_in"
              :style="{ width: skill.percentage + '%' }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        [
          {
            name: "HTML5",
            icon: require("@/assets/img/programmingicons/html.png"),
            percentage: 95,
          },
          {
            name: "CSS3/SCSS",
            icon: require("@/assets/img/programmingicons/css.png"),
            percentage: 90,
          },
          {
            name: "Javascript",
            icon: require("@/assets/img/programmingicons/js.png"),
            percentage: 90,
          },
        ],
        [
          {
            name: "Angular JS",
            icon: require("@/assets/img/programmingicons/angular.png"),
            percentage: 40,
          },
          {
            name: "Vue JS",
            icon: require("@/assets/img/programmingicons/vue.png"),
            percentage: 55,
          },
          {
            name: "React JS",
            icon: require("@/assets/img/programmingicons/react.png"),
            percentage: 60,
          },
        ],
        [
          {
            name: "TypeScript",
            icon: require("@/assets/img/programmingicons/ts.png"),
            percentage: 40,
          },
          {
            name: "MySql",
            icon: require("@/assets/img/programmingicons/mysql.jpg"),
            percentage: 75,
          },
          {
            name: "PHP",
            icon: require("@/assets/img/programmingicons/php.png"),
            percentage: 40,
          },
        ],
      ],
    };
  },
};
</script>

<style>
.skillswrapper {
  width: 100%;
  height: 100%;
  float: left;
  clear: both;
  position: relative;
  z-index: 3;
}

.skillsblock {
  display: flex !important;
  margin-bottom: 80px;
}
.skills_infowrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.skills_infowrapper .label {
  display: flex;
  align-items: center;
}

.progress_inner {
  width: 32%;
  margin-right: 4%;
  margin-left: 4%;
  margin-bottom: 25px;
}
.progress_inner:last-child {
  margin-bottom: 0px;
}
.progress_inner > span {
  margin: 0px 0px 8px 0px;
  width: 100%;
  text-align: left;
  color: #fff;
}
.progress_inner span.number {
  float: right;
}
.progress_inner .background {
  background: rgba(255, 255, 255, 0.09);
  width: 100%;
  min-width: 100%;
  position: relative;
  height: 8px;
  border-radius: 8px;
}
.progress_inner .background .bar_in {
  height: 100%;
  background: var(--third-bg);
  width: 0px;
  overflow: hidden;
  border-radius: 8px;
}
.progress_inner .background .bar {
  width: 0px;
  height: 100%;
  border-radius: 8px;
}
.progress_inner .background .bar.open {
  -webkit-animation: wow 2s cubic-bezier(0.165, 0.84, 0.44, 1); /* Safari 4+ */
  -moz-animation: wow 2s cubic-bezier(0.165, 0.84, 0.44, 1); /* Fx 5+ */
  animation: wow 2s cubic-bezier(0.165, 0.84, 0.44, 1); /* IE 10+ */
  width: 100%;
}

.programmingicon img {
  max-width: 22px;
  max-height: 22px;
  margin-right: 10px;
}

.programminglanguage {
  margin-bottom: 2px;
}
</style>
