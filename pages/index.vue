<template>
  <div>
    <!-- <div class="bg-image" style="height: 100vh;min-height: 300px; max-height: 979px">
      <div class="container" style="padding-top: 75px;">
        <div class="row">
          <div class="col-4">
            <calc />
          </div>
        </div>
      </div>
    </div> -->
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner" role="listbox">
          <div class="carousel-item active">
            <img class="d-block iheight w-100" src="~static/images/logo.png">
          </div>
          <div class="carousel-item">
            <img class="d-block iheight w-100" src="~static/images/body1.jpg">
          </div>
          <div class="carousel-item">
            <img class="d-block iheight w-100" src="~static/images/body2.jpg">
          </div>
          <div class="carousel-item">
            <img class="d-block iheight w-100" src="~static/images/body3.jpg">
          </div>
          <div class="carousel-item">
            <img class="d-block iheight w-100" src="~static/images/body4.jpg">
          </div>
        </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
      </div>
    <div class="container mt-5" style="margin-bottom: 80px">
      <div class="text-center" style="margin-bottom: 80px">
        <p class="fontp">
          START
          <span class="yellow-text">YOUR TRAINING</span> TODAY
        </p>
      </div>
      <div class="row mb-5">
        <div class="col-lg-4">
          <div class="d-flex flex-column">
            <div class="text-center">
              <div class="rotated-image">
                <img
                  style="height: 100px;object-fit: contain;object-position: left;padding: 20px;"
                  src="~static/images/Untitled-1.png"
                  alt="Lightweight UI components for Vue.js based on Bulma"
                />
              </div>

              <h5 class="underline">WHO WE TRAIN</h5>
            </div>
            <div class="text-center" style="padding-top: 15px">
              <p
                style="font-size:12px;color: rgb(133, 133, 133);max-width: 240px;margin:auto"
              >We welcome anyone and everyone looking to shed some pounds or to pack on some muscle. Meet your fitness goals with certified personal trainers. Take your fitness aspirations to new heights.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="d-flex flex-column">
            <div class="text-center">
              <div class="rotated-image">
                <img
                  style="height: 100px;object-fit: contain;object-position: left;padding: 20px;"
                  src="~static/images/Untitled-1.png"
                  alt="Lightweight UI components for Vue.js based on Bulma"
                />
              </div>
              <h5 class="underline">SCHEDULE & PRICING</h5>
            </div>
            <div class="text-center" style="padding-top: 15px">
              <p
                style="font-size:12px;color: rgb(133, 133, 133);max-width: 240px;margin:auto"
              >Get access to a custom training regimen to suit your BMR/ BMI needs, Schedule, and your Budget. Flexible & Hassle free Scheduling to offer you a great workout experience.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="d-flex flex-column">
            <div class="text-center">
              <div class="rotated-image">
                <img
                  style="height: 100px;object-fit: contain;object-position: left;padding: 20px;"
                  src="~static/images/Untitled-1.png"
                  alt="Lightweight UI components for Vue.js based on Bulma"
                />
              </div>
              <h5 class="underline">NUTRITION</h5>
            </div>
            <div class="text-center" style="padding-top: 15px">
              <p
                style="font-size:12px;color: rgb(133, 133, 133);max-width: 240px;margin:auto"
              >Maximize your workout efforts with our wide selection of supplements including protein powder, pre workout, vitamins, BCAAs, and more. Choose good nutrition for the best results.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-5 container">
      <div class="text-center" style="margin-bottom: 80px;">
        <p class="fontp">
          PERSONAL
          <span class="yellow-text">TRAINING</span> MEMBERSHIP
        </p>
      </div>
      <div class="row w-100">
        <div class="col-lg-4">
          <div class="pad black text-center">
            <div>
              <p class="font" style="font-size:32px">Basic</p>
              <p class="font" style="font-size:32px">₹ 5000</p>
            </div>
            <div style="text-center">
              <p
                class="font"
                style="font-weight:bold;font-size:25px;font-style:italic"
              >3 MONTHS TRAINING</p>
              <!-- <p class="font">Classes 2x/week</p> -->
              <p class="font">Open Gym Monday-Friday</p>
              <p class="font">Custom Diet</p>
              <p class="font">Online Workout</p>
              <!-- <p class="font">Yoga Relax Classes</p>
              <p class="font">Adventure racing</p>
              <p class="font">Olympic Weightlifting</p> -->
            </div>
            <div class="w-100 padrl">
              <button type="button" class="btn btn-lg w-100" style="margin-top:20px ">BUY NOW</button>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="pad black text-center">
            <div>
              <p class="font" style="font-size:32px">Standard</p>
              <p class="font" style="font-size:32px">₹ 8000</p>
            </div>
            <div style="text-center">
              <p class="font" style="font-style:bold;font-size:25px">6 MONTHS TRAINING</p>
              <!-- <p class="font">Classes 2x/week</p>
              <p class="font">Open Gym Monday-Friday</p>
              <p class="font">Yoga Relax Classes</p>
              <p class="font">Adventure racing</p>
              <p class="font">Olympic Weightlifting</p> -->
              <p class="font">Basic Plan Included</p>
              <p class="font">Workout Videos</p>
              <p class="font">Dynamic Plans</p>
            </div>
            <div class="w-100 padrl">
              <button type="button" class="btn btn-lg w-100" style="margin-top:20px ">BUY NOW</button>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="pad black text-center">
            <div>
              <p class="font" style="font-size:32px">Premium</p>
              <p class="font" style="font-size:32px">₹ 10000</p>
            </div>
            <div style="text-center">
              <p class="font" style="font-style:bold;font-size:25px">12 MONTHS TRAINING</p>
              <!-- <p class="font">Unlimited Cross-fit Classes</p>
              <p class="font">Open Gym Monday-Friday</p>
              <p class="font">Personal Trainer</p>
              <p class="font">Yoga Relax Classes</p>
              <p class="font">Adventure racing</p>
              <p class="font">Olympic Weightlifting</p> -->
              <p class="font">Standard Plan Included</p>
              <p class="font">One to One Sessions</p>
              <p class="font">Dedicated Trainer</p>
            </div>
            <div class="w-100 padrl">
              <button type="button" class="btn btn-lg w-100" style="margin-top:20px ">BUY NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-5">
      <div class="text-center">
        <p class="fontp">
          FROM
          <span class="yellow-text">OUR</span> STORE
        </p>
        <p class="fontp">
          <span class="yellow-text">NUTRITION</span> FOR BETTER RESULTS
        </p>
      </div>
      <div class="mt-5 container">
        <div class="row">
          <div v-for="p in 8" :key="p" class="col-lg-3" style="height:330px">
            <div>
              <div class="product2">
                <img class="product" src="~static/images/protien1.png" />
                <div class="text-center product-name">
                  <p class="font">100% Casein</p>
                  <p class="font m-0">₹1000</p>
                </div>
                <div class="buybtn m-2">
                  <button type="button" class="btn btn-lg w-100">BUY NOW</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-5" style="background:url('~static/images/blogbg.png')">
      <p class="text-center fontp">
        BLOG AND
        <span class="yellow-text">LATEST</span> NEWS
      </p>
    </div>
    <div class="mt-5">
      <div class="row">
        <div class="col-lg-3 p-0">
          <div class="background-image relative">
            <img
              src="https://source.unsplash.com/1600x900/?gym"
              style="width: 100%;height:100%;    object-fit: cover;"
            />
            <div class="blog-images">
              <h5 class="text-center font">Group WOD</h5>
              <p
                style="font-size:12px;color: rgb(255, 255, 255);max-width: 240px;text-align:center"
              >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum exercitationem consectetur, nobis ut quas quaerat nihil, voluptatum accusantium aut a cumque aspernatur.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 p-0">
          <div class="background-image relative">
            <img
              src="https://source.unsplash.com/1600x900/?rain"
              style="width: 100%;height:100%;    object-fit: cover;"
            />
            <div class="blog-images">
              <h5 class="text-center font">Group WOD</h5>
              <p
                style="font-size:12px;color: rgb(255, 255, 255);max-width: 240px;text-align:center"
              >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum exercitationem consectetur, nobis ut quas quaerat nihil, voluptatum accusantium aut a cumque aspernatur.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 p-0">
          <div class="background-image relative">
            <img
              src="https://source.unsplash.com/1600x900/?mountain"
              style="width: 100%;height:100%;    object-fit: cover;"
            />
            <div class="blog-images">
              <h5 class="text-center font">Group WOD</h5>
              <p
                style="font-size:12px;color: rgb(255, 255, 255);max-width: 240px;text-align:center"
              >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum exercitationem consectetur, nobis ut quas quaerat nihil, voluptatum accusantium aut a cumque aspernatur.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 p-0">
          <div class="background-image relative">
            <img
              src="https://source.unsplash.com/1600x900/?body"
              style="width: 100%;height:100%;    object-fit: cover;"
            />
            <div class="blog-images">
              <h5 class="text-center font">Group WOD</h5>
              <p
                style="font-size:12px;color: rgb(255, 255, 255);max-width: 240px;text-align:center"
              >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum exercitationem consectetur, nobis ut quas quaerat nihil, voluptatum accusantium aut a cumque aspernatur.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Login v-if="showLogin" />
  </div>
</template>
<!-- <div v-for='(item,i) in allImages' :key='{i}'>
  <img :src="item.img" />
</div> -->


<script>
import axios from 'axios';
import calc from '@/components/calc.vue'
import Login from '@/components/Login.vue'

export default {
  data() {
    return {
      allImages: []
    }
  },

  components: {
    calc,
    Login,
  },

  computed: {
    showLogin: {
      get: function() {
        return this.$store.state.showLogin
      },
      set: function(newName) {
        // this.$store.dispatch('addName',newName);
      }
    }
  },

  mounted() {
    this.getImages()
  },

  async asyncData() {
    const {data} = await axios.get('http://localhost:8000/carousel_image')
    return {imgs: data}
  },

  methods: {

    checkBMR: function() {
      this.showLogin = true
    },

    getImages: function() {
      this.$store.dispatch("getImages").then(res => {
        this.allImages = res.data
      });
    },

  }
}
</script>




<style scoped>
h6 {
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
}
.black-background {
  background-color: black;
}

.black p {
  line-height: 41px;
  color: #dfdfdf;
  font-size: 13px;
}
.pad {
  padding: 13px 0;
}
.black {
  background-color: black;
  padding: 30px 40px;
}
.font {
  color: #ffffff;
}
.btn {
  background-color: #f1be03;
  color: black;
}
.padrl {
  padding: 0 10px 0 10px;
}
.bg-image {
  background: url('~static/images/logo.png');
  background-color: black;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
}
.product {
  background: url('~static/images/yelloeproductbackground.png');
  height: 150px;
  width: 100%;
  object-fit: contain;
}
.product2 {
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
}
.product-name {
  background-color: #353535;
  height: 120px;
}
.btn2 {
  background-color: #f1be03;
  color: #ffffff;
}
.buybtn {
  margin-top: -29px !important;
}
.fontp {
  font-size: 25px;
  font-style: italic;
  font-weight: 900;
  background-color: #242424;
}

p,
h4,
h5 {
  color: white;
}

.underline {
  position: relative;
  padding: 15px 0;
}
.underline:after {
  content: '';
  border-bottom: 2px solid #f1be03;
  position: absolute;
  width: 45px;
  bottom: 0;
  left: 0;
  opacity: 1;
  right: 0;
  margin: auto;
}

.rotated-image {
  position: relative;
  margin-bottom: 35px;
}

.rotated-image:after {
  content: '';
  border: 2px solid #f1be03;
  position: absolute;
  width: 100px;
  height: 100px;
  bottom: 0;
  left: 0;
  opacity: 1;
  right: 0;
  transform: rotate(45deg);
  margin: auto;
}

.yellow-text {
  color: #f1be03;
}

.background-image img {
  opacity: 0.4;
}
.background-image {
  height: 270px;
}

.background-image:after {
  content: '';
  background-color: red;
}

.relative {
  position: relative;
}

.blog-images {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
</style>