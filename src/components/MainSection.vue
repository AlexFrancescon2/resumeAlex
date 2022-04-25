<template>
  <div class="container">
    <div class="left">
      <h1>Alex Francescon</h1>
      <h2>Front-end developer</h2>
      <ul>
        <li>
          <span
            class="img"
            :style="{
              'background-image':
                'url(' + require('@/assets/img/itaflag.gif') + ')',
            }"
          ></span>
          <span>Born in Milan</span>
        </li>
        <li>
          <span
            class="img"
            :style="{
              'background-image':
                'url(' + require('@/assets/img/windmill.svg') + ')',
            }"
          ></span>
          <span>Based in Amsterdam</span>
        </li>
      </ul>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
    <div class="right">
      <div
        class="first-card"
        :style="{
          'background-image':
            'url(' + require('@/assets/img/profile.jpeg') + ')',
        }"
      ></div>
      <div class="second-card"></div>
    </div>
  </div>
</template>

<script>
export default {
  // props: ["friend"],
  props: {
    // friend: {
    //   type: Object,
    //   required: true,
    //   // default: '...'
    //   // validator: () => {return true}'
    // },
  },
  // emits: ['toggle-favourite'],

  data() {
    return {};
  },
  methods: {},
};
</script>

<style>

.container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
}

.left {
  opacity: 1;
  visibility: visible;
  top: 0px;
  width: 50%;
  height: 50%;
  padding-right: 50px;
  position: relative;
  /* opacity: 0; */
  /* visibility: hidden; */
  top: 20px;
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -ms-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  transition: all 0.4s ease;
}
.right {
  opacity: 1;
  visibility: visible;
  top: 0px;
  width: 50%;
  text-align: right;
  padding-left: 200px;
  position: relative;
  /* opacity: 0; */
  /* visibility: hidden; */
  top: 20px;
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -ms-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  transition: all 0.4s ease;
}

.first-card {
  background-color: var(--secondary-bg);
  position: absolute;
  transform: rotate(7deg);
  top: -295px;
  bottom: 0px;
  left: 270px;
  right: 0px;
  width: 50%;
  height: 500px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  /* transform: rotate(
0deg); */
  z-index: 2;
  border-radius: 10px;
  transition: all 0.4s ease;
  -moz-box-shadow: var(--box-shadow);
  -webkit-box-shadow: var(--box-shadow);
  box-shadow: var(--box-shadow);
}

.second-card {
  background-color: var(--third-bg);
  transform: rotate(-6deg);
  position: absolute;
  top: -250px;
  bottom: 0px;
  left: 200px;
  right: 0px;
  width: 50%;
  height: 450px;
  /* transform: rotate(
0deg); */
  z-index: 1;
  border-radius: 10px;
  transition: all 0.4s ease;
  -moz-box-shadow: var(--box-shadow);
  -webkit-box-shadow: var(--box-shadow);
  box-shadow: var(--box-shadow);
}

h1 {
  color: var(--primary-color);
  font-size: 52px;
  margin-top: 0px;
  margin-bottom: 5px;
  text-transform: uppercase;
}

h2 {
  color: var(--secondary-color);
  font-size: 25px;
  margin-top: 0px;
  margin-bottom: 30px;
  text-transform: uppercase;
}

ul {
  list-style-type: none;
  padding: 0px;
}

ul li {
  color: var(--primary-color);
  margin-bottom: 10px;
  font-size: 18px;
  display: flex;
  align-items: center;
}
.img {
  display: block;
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-right: 15px;
}

p {
  color: var(--primary-color);
  font-style: italic;
}
</style>
