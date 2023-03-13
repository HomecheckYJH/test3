<template>
  <div class="d-f hck-logo-component">
    <!-- <img class="hck-logo" src="../assets/img/logo_lg.png"> -->
    <img :src="ImageData" alt="image">
    
      
    <div class="logo-text">
      <h2 style="margin: 0">HOMECHECK</h2>
      <b>Cloud Platform</b>
    </div>
  </div>
</template>
<script>

export default {
  name: "Logo",
  props: {
    image: {
      type: String,
      required: true,
    },
  },
  computed: {
    ImageData() {
      const binaryString = window.atob(this.image);
      const binaryLen = binaryString.length;
      const bytes = new Uint8Array(binaryLen);
      for (let i = 0; i < binaryLen; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      const blob = new Blob([bytes], { type: "../assets/img/logo_lg.png" });
      return URL.createObjectURL(blob);
    },
  },
};



</script>
<style scoped>
.hck-logo-component{
    user-select: none;
    transition: all 0.22s ease-in-out;
    border-radius: var(--radius);
}
.logo-text{
    display: flex;
    flex-direction: column;
}

.hck-logo-component .hck-logo{
    max-height: 54px;
}
.hck-logo-component .logo-text h2{
    font-size: 1em;
}
.hck-logo-component .logo-text b{
    font-size: 1.5em;
}


.hck-logo-component.sm .hck-logo{
    max-height: 32px;
    margin-right: 10px;
}
.hck-logo-component.sm .logo-text h2{
    font-size: 0.65em;
}
.hck-logo-component.sm .logo-text b{
    font-size: 0.85em;
}


.hck-logo-component.xs .hck-logo{
    max-height: 22px;
    margin-right: 10px;
}
.hck-logo-component.xs .logo-text h2{
    font-size: 0.3em;
}
.hck-logo-component.xs .logo-text b{
    font-size: 0.5em;
}
</style>