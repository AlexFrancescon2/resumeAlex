<template>
  <header :class="{ shown: headerIsVisible }">
    <div class="menuoptionwrapper">
      <ul :class="{ shown: headerIsVisible, menuoptions: true }">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Timeline</a>
        </li>
        <li>
          <a href="">Skills</a>
        </li>
        <li>
          <a href="">Quattro</a>
        </li>
        <li>
          <a href="">Cinque</a>
        </li>
      </ul>
    </div>
    <label class="menu" title="Menu">
      <input type="checkbox" checked />
      <div v-on:click="toggleHeader">
        <span></span>
        <span></span>
      </div>
    </label>
  </header>
</template>

<script>
export default {
  data() {
    return {
      headerIsVisible: false,
    };
  },
  methods: {
    toggleHeader() {
      this.headerIsVisible = !this.headerIsVisible;
      console.log(this.headerIsVisible);
    },
  },
};
</script>

<style>
header {
  position: fixed;
  background-color: transparent;
  width: 100%;
  display: flex;
  justify-content: end;
  padding: 15px;
  z-index: 100;
  transition: all 0.6s ease-in-out;
}

header:not(.shown) {
  background-color: transparent;
}

header:not(.shown) .menuoptions {
  display: none;
}

header.shown {
  background-color: var(--transparent-bg);
}

header.shown .menuoptions {
  display: flex;
  position: inherit;
}

.menuoptionwrapper {
  display: flex;
  align-items: center;
}

.menuoptions {
  position: absolute;
  align-items: center;
  margin: 0px;
  transition: all 0.6s ease-in-out;
  display: none;
}

.menuoptions.shown {
  display: flex;
}

.menuoptions li {
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 0px;
}

.menuoptions li a {
  transition: color 0.3s; /* transition is set to 'color 12s' !! */
}

.menuoptions li a::after {
  content: "";
  width: 0px;
  height: 1px;
  display: block;
  background: var(--secondary-color);
  transition: 300ms;
}

.menuoptions li a:hover {
  cursor: pointer;
  color: var(--secondary-color);
}

.menuoptions li a:hover::after {
  width: 100%;
}

.menuoptions li a {
  text-decoration: none;
  color: var(--primary-color);
}

.parrots-list li {
  margin-top: 20px;
  list-style-type: none;
  display: flex;
  align-items: center;
  background-size: 200% 100%;
  background-image: linear-gradient(to right, #101012 50%, #fff 50%);
  transition: color 0.8s, background-position 0.8s;
  border-radius: 50px;
}
.parrots-list li:hover {
  cursor: pointer;
  background-color: #fff;
  background-position: -100% 0;
  color: black;
  font-weight: bold;
}

.menu {
  --front: var(--third-bg);
  --back: var(--secondary-bg);
  --icon: var(--primary-color);
  perspective: 600px;
  width: 48px;
  height: 48px;
  position: relative;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  margin-left: 10px;
}

.menu input {
  display: none;
}
.menu input + div span {
  --rotateY: 0deg;
  --background: var(--front);
  transform: rotateY(var(--rotateY));
  transform-style: preserve-3d;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: var(--background);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transition: transform 0.6s cubic-bezier(0.2, 0.64, 0.48, 1.24);
}
.menu input + div span:before,
.menu input + div span:after {
  --rotate: 0deg;
  content: "";
  position: absolute;
  width: 16px;
  height: 2px;
  border-radius: 1px;
  top: 50%;
  left: 50%;
  background: var(--icon);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: translate(-50%, -50%) rotate(var(--rotate)) translateZ(6px);
}
.menu input + div span:first-child {
  --background: var(--back);
}
.menu input + div span:first-child:before {
  --rotate: -45deg;
}
.menu input + div span:first-child:after {
  --rotate: 45deg;
}
.menu input + div span:last-child {
  --rotateY: 180deg;
}
.menu input + div span:last-child:before {
  box-shadow: 0 -5px 0 var(--icon), 0 5px 0 var(--icon);
}
.menu input + div span:last-child:after {
  display: none;
}
.menu input:checked + div span:first-child {
  --rotateY: -180deg;
}
.menu input:checked + div span:last-child {
  --rotateY: 0deg;
}

html {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}

* {
  box-sizing: inherit;
}
*:before,
*:after {
  box-sizing: inherit;
}
</style>
