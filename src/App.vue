<template>

  <div>
  <Header id="h"></Header>
  <router-view id="r"></router-view>
  <Footer v-show="$route.meta.show" id="f"></Footer>
<jd id="j"></jd>
  </div>
  
</template>

<script>
import Header from'./components/Header'
import Footer from'./components/Footer'
import jd from './components/jdd'
export default {
  name:'app',
  components:{
    Header,
    Footer,
    jd
  },
  mounted(){
    this.$store.dispatch("categoryList");
   
  }
  
}
</script>

<style scoped>
@media screen and (max-width:769px){
  #h {
    display: none;
  }
  #r {
    display: none;
  }
  #f{
    display: none;
  }
    #j {
      display: block;
    }
}
@media screen and (min-width: 655px){
  #j{
    display: none;
  }
  #h {
    display: block;
  }
  #r {
    display: block;
  }
  #f{
    display: block;
  }
}
</style>