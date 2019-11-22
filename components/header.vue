<template>
  <div class="nav-header fixed">
    <div class="container h-100">
      <div
        class="nav-icon w-100"
        style="display:flex; justify-content: space-between;align-items:center"
      >
        <nuxt-link to="/" style="display:flex; align-items: center">
          <img
            style="height:55px;object-fit: contain;object-position: left;"
            src="~static/images/Untitled-1.png"
            alt="Lightweight UI components for Vue.js based on Bulma"
          />
          <p style="color: #f1be03; font-style: normal">Transformers Fitness Academy</p>
        </nuxt-link>
        <a @click="showMenu" class="hidelg"><i class="fa fa-bars"></i></a>
        <div class="nav-link hide-on-med-and-down">
          <nuxt-link class="link" to="/">HOME</nuxt-link>
          <nuxt-link class="link" to="/services">ABOUT</nuxt-link>
          <nuxt-link class="link" to="/ourwork">GALLERY</nuxt-link>
          <nuxt-link class="link" to="/about">SHOP</nuxt-link>
          <nuxt-link class="link" to="/contact">BLOG</nuxt-link>
          <nuxt-link class="link" to="/contact">CONTACT US</nuxt-link>
          <a style="cursor:pointer" class="link" @click="showLogin">LOGIN / SIGNUP</a>
        </div>
      </div>

      <div class="mobile-nav opacity-hide">
        <div class="nav">
          <a @click="closeMenu" style="cursor: pointer; margin-left: auto"><img src="~static/close.svg" style="width: 20px"></a>
          <nuxt-link class="link" to="/">HOME</nuxt-link>
          <nuxt-link class="link" to="/services">ABOUT</nuxt-link>
          <nuxt-link class="link" to="/ourwork">GALLERY</nuxt-link>
          <nuxt-link class="link" to="/about">SHOP</nuxt-link>
          <nuxt-link class="link" to="/contact">BLOG</nuxt-link>
          <nuxt-link class="link" to="/contact">CONTACT US</nuxt-link>
          <a style="cursor: pointer" class="link" @click="closeMenuShowLogin">LOGIN / SIGNUP</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nav-header {
  background-color: #141414ed;
  height: 75px;
  display: flex;
  align-items: center;
  transition: all 0.5s;
  font-style: italic;
}

.hide-up{

      top: -133px!important;

}

.darkHeader {
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.07);
}

.nav-header.white {
  background-color: #fff !important;
}

.nav-header.white a {
  color: black;
}

.nav-header.fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}

.nav-icon {
  height: 100%;
}

.nav-header a {
  color: white;
  text-decoration: none;
}

.nav-header .link {
  padding: 8px 16px;
  font-size: 13px;
}

.mobile-nav .link {
  font-size: 20px;
  color: #f1be03 !important;
}

.nav-link a {
  position: relative;
  transition: all 0.5s;
}

.nav-link a:hover {
  color: #f1be03;
}
.nav-link a:after {
  content: "";
  border-bottom: 2px solid white;
  position: absolute;
  width: 10px;
  bottom: 0;
  opacity: 0;
  left: 0;
  right: 0;
  margin: auto;
  transition: all 0.3s ease-in-out;
}

.nav-link a:hover:after {
  content: "";
  border-bottom: 2px solid white;
  position: absolute;
  width: 45px;
  bottom: 0;
  left: 0;
  opacity: 1;
  right: 0;
  margin: auto;
}

.nav-link a:hover:after {
  content: "";
  border-bottom: 2px solid #f1be03;
  position: absolute;
  width: 45px;
  bottom: 0;
  left: 0;
  opacity: 1;
  right: 0;
  margin: auto;
}

.mobile-nav {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  color: white;
  background-color: #232323;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.nav {
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  line-height: 40px;
  opacity: 0;
}

.nav .link {
  margin: 15px 0;
}

.menu {
  cursor: pointer;
}

.hamburger {
  position: fixed;
  top: 20px;
  right: 6.1%;
  cursor: pointer;
}

.animation {
  line-height: 19px;
  transition: all 0.4s ease;
  opacity: 1;
}

@media (min-width:1024px) {
  .hidelg {
    display: none;
  }
}
</style>


<script>

export default {
  
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn
    }
  },
  data() {
    return {
      isLoggedIn: false
    };
  },

  watch: {
    $route() {
      $(".mobile-nav").addClass("opacity-hide");
    }
  },

  mounted() {
    var lastScrollTop = 0;
    $(window).scroll(function(event) {
      var st = $(this).scrollTop();
      if (st > lastScrollTop && st > 200) {
        $(".nav-header").addClass("hide-up")
      } else {
        // upscroll code
        $(".nav-header").removeClass("hide-up")
      }
      lastScrollTop = st;
    });

    $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      //>=, not <=
      if (scroll <= 0) {
        //clearHeader, not clearheader - caps H
        $(".nav-header").removeClass("darkHeader");
      } else if (scroll > 0) {
        $(".nav-header").addClass("darkHeader");
      }
    }); //missing );
  },

  methods: {
    showMenu: function() {
      $(".mobile-nav").removeClass("opacity-hide");

      $(".nav").addClass("animation");
    },
    closeMenu: function() {
      $(".mobile-nav").addClass("opacity-hide");

      $(".nav").removeClass("animation");
    },
      showLogin: function(){

            // this.$store.state.showLogin = true
            this.$store.commit('showLogin', true)

    },
    closeMenuShowLogin: function() {
      $(".mobile-nav").addClass("opacity-hide");
      $(".nav").removeClass("animation");
      this.$store.commit('showLogin', true)
    }
  }
};
</script>