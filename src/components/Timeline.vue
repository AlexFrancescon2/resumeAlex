<template>
  <h3>My Path</h3>
  <h4 class="subtitle">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  </h4>
  <div id="timeline">
    <div class="timeline-item">
      <div class="timeline-icon">
        <img
          :src="require('@/assets/img/timeline/birth.png')"
          alt=""
          width="25"
        />
      </div>
      <div class="timeline-content left">
        <h4>Birth date</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
          facilis quo maiores magnam modi ab libero praesentium blanditiis.
        </p>
      </div>
    </div>

    <div class="timeline-item">
      <div class="timeline-icon">
        <img
          :src="require('@/assets/img/timeline/school.png')"
          alt=""
          width="25"
        />
      </div>
      <div class="timeline-content right">
        <h4>ITCG Primo Levi</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
          facilis quo. Maiores magnam modi ab libero praesentium blanditiis
          consequatur aspernatur accusantium maxime molestiae sunt ipsa.
        </p>
      </div>
    </div>

    <div class="timeline-item">
      <div class="timeline-icon">
        <img
          :src="require('@/assets/img/timeline/school.png')"
          alt=""
          width="25"
        />
      </div>
      <div class="timeline-content left">
        <h4>Università degli studi di milano</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
          facilis quo. Maiores magnam modi ab libero praesentium blanditiis
          consequatur aspernatur accusantium maxime molestiae sunt ipsa.
        </p>
      </div>
    </div>

    <div class="timeline-item">
      <div class="timeline-icon">
        <img
          :src="require('@/assets/img/timeline/work.png')"
          alt=""
          width="25"
        />
      </div>
      <div class="timeline-content right">
        <h4>Appennine</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
          facilis quo. Maiores magnam modi ab libero praesentium blanditiis
          consequatur aspernatur accusantium maxime molestiae sunt ipsa.
        </p>
      </div>
    </div>

    <div class="timeline-item">
      <div class="timeline-icon">
        <img
          :src="require('@/assets/img/timeline/graduation.png')"
          alt=""
          width="25"
        />
      </div>
      <div class="timeline-content left">
        <h4>Graduation</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
          facilis quo. Maiores magnam modi ab libero praesentium blanditiis
          consequatur aspernatur accusantium maxime molestiae sunt ipsa.
        </p>
      </div>
    </div>

    <div class="timeline-item">
      <div class="timeline-icon">
        <img
          :src="require('@/assets/img/timeline/plane.png')"
          alt=""
          width="25"
        />
      </div>
      <div class="timeline-content right">
        <h4>Amsterdam</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
          facilis quo. Maiores magnam modi ab libero praesentium blanditiis
          consequatur aspernatur accusantium maxime molestiae sunt ipsa.
        </p>
      </div>
    </div>

    <div class="timeline-item">
      <div class="timeline-icon">
        <img
          :src="require('@/assets/img/timeline/work.png')"
          alt=""
          width="25"
        />
      </div>
      <div class="timeline-content left">
        <h4>Capgemini</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
          facilis quo. Maiores magnam modi ab libero praesentium blanditiis
          consequatur aspernatur accusantium maxime molestiae sunt ipsa.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
h3 {
  color: var(--primary-color);
  margin-top: 0px;
  margin-bottom: 30px;
  font-size: 30px;
}

#timeline .timeline-item:after,
#timeline .timeline-item:before {
  content: "";
  display: block;
  width: 100%;
  clear: both;
}

#timeline {
  width: 100%;
  margin: 30px auto;
  position: relative;
  padding: 0 10px;
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -ms-transition: all 0.4s ease;
  transition: all 0.4s ease;
}
#timeline:before {
  content: "";
  width: 3px;
  height: 89%;
  background: var(--secondary-color);
  left: 50%;
  top: 0;
  position: absolute;
}
#timeline:after {
  content: "";
  clear: both;
  display: table;
  width: 100%;
}
#timeline .timeline-item {
  margin-bottom: 50px;
  position: relative;
}
#timeline .timeline-item .timeline-icon {
  background: var(--secondary-color);
  width: 50px;
  height: 50px;
  position: absolute;
  top: 0;
  left: 50%;
  overflow: hidden;
  margin-left: -23px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#timeline .timeline-item .timeline-icon svg {
  position: relative;
  top: 15px;
  left: 15px;
}
#timeline .timeline-item .timeline-content {
  position: relative;
  top: 0px;
  width: 45%;
  background: #fff;
  padding: 20px;
  -webkit-box-shadow: 0 3px 0 rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 3px 0 rgba(0, 0, 0, 0.1);
  -ms-box-shadow: 0 3px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 3px 0 rgba(0, 0, 0, 0.1);
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  border-radius: 5px;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
#timeline .timeline-item .timeline-content h4 {
  padding: 15px;
  background: linear-gradient(
    90deg,
    var(--secondary-color) 0%,
    var(--third-bg-darker) 100%
  );
  color: #fff;
  margin: -20px -20px 0 -20px;
  font-weight: 600;
  -webkit-border-radius: 3px 3px 0 0;
  -moz-border-radius: 3px 3px 0 0;
  -ms-border-radius: 3px 3px 0 0;
  border-radius: 3px 3px 0 0;
  text-transform: uppercase;
  letter-spacing: 1px;
}
#timeline .timeline-item .timeline-content:before {
  content: "";
  position: absolute;
  left: 100%;
  top: 20px;
  width: 0;
  height: 0;
  border-top: 7px solid transparent;
  border-bottom: 7px solid transparent;
  border-left: 7px solid var(--secondary-color);
}
#timeline .timeline-item .timeline-content.right {
  float: right;
}
#timeline .timeline-item .timeline-content.right:before {
  content: "";
  right: 100%;
  left: inherit;
  border-left: 0;
  border-right: 7px solid var(--secondary-color);
}

@media screen and (max-width: 768px) {
  #timeline {
    margin: 30px;
    padding: 0px;
    width: 90%;
  }
  #timeline:before {
    left: 0;
  }
  #timeline .timeline-item .timeline-content {
    width: 90%;
    float: right;
  }
  #timeline .timeline-item .timeline-content:before,
  #timeline .timeline-item .timeline-content.right:before {
    left: 10%;
    margin-left: -6px;
    border-left: 0;
    border-right: 7px solid var(--secondary-color);
  }
  #timeline .timeline-item .timeline-icon {
    left: 0;
  }
}
.timeline-content p {
  color: var(--dark-color);
  margin-bottom: 0px;
  font-size: 14px;
}

#timeline .timeline-item .timeline-content.left:before {
  border-left: 7px solid var(--third-bg-darker);
}

/**/
#timeline .timeline-item .timeline-content {
  height: 49px;
  transition: all 3s ease-out;
}

#timeline .timeline-item .timeline-content p {
  display: none;
}

.timeline-icon:hover {
  cursor: pointer;
}

.timeline-icon:hover + .timeline-content {
  height: inherit !important;
}
.timeline-icon:hover + .timeline-content p {
  display: block !important;
}
</style>
