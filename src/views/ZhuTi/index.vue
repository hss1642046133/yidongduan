<template>
  <div class="content">
    <section id="section">
      <router-view></router-view>
    </section>
    <Footer id="footer"></Footer>
  </div>
</template>

<script>
import Footer from "../../components/Footer";
export default {
  name: "zhuti",
  components: {
    Footer
  }
};
</script>

<style scoped>
#section {
  margin-bottom: 95px;
}
</style>