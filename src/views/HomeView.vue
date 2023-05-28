<template>
  <!-- Hero -->
  <div class="hero d-flex justify-content-center align-items-center">
    <div class="hero-text-box col-10 d-flex flex-column align-items-end">
      <h1>KANTEN</h1>
      <p class="p-hero">ESBJERGS NYE KULTURFÆLLESKAB</p>
      <div class="hero-btn-container">
        <RouterLink to="/events"><button class="hero-btn">SE EVENTS</button></RouterLink>
        <RouterLink to="/volunteer"><button class="hero-btn">BLIV FRIVILLIG</button></RouterLink>
      </div>
    </div>
  </div>

  <!-- Box -->

  <div class="box d-flex justify-content-center align-items-center">
    <div class="box-img col-4"></div>
    <div class="box-text col-6">
      <h2 class="h2-box">OM KANTEN</h2>
      <p>Kanten Esbjerg er et inkluderende initiativ skabt af frivillige unge esbjergensere, som brænder for at skabe et nyt musikkultur tiltag, spillested og studie, der bidrager til et sikkert byliv.</p>
      <p class="p-box">Diversitet og mangfoldighed er vores kerneværdier og vores musikprogram er repræsentativt og bredt inkluderende.</p>
      <RouterLink to="/about"><button>LÆS MERE</button></RouterLink>
    </div>
  </div>

  <!-- Card-box -->

  <div class="card-box d-flex flex-column justify-content-center align-items-center">
    
    <div class="activity-box col-10">

      <h2 class="h2-box">AKTIVITETER</h2>
      
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/img/event_img.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

    </div>

  </div>

  <!-- Box -->

  <div class="box d-flex justify-content-center align-items-center">
    <div class="box-img col-4"></div>
    <div class="box-text col-6">
      <h2 class="h2-box">MEDLEMSKAB</h2>
      <p class="p-box">Kanten bliver Esbjergs nye kulturfællesskab drevet af foreningen Kanten. Vores vision er at skabe en platform for det kreative vækstlag, som mangler en synlig plads i Esbjergs kulturliv. Gennem denne platform ønsker vi at støtte de fællesskaber der opstår af spirende kreative miljøer. Kanten vil give det underrepræsenterede vækstlag en scene at stå på – dette gør vi gennem en bred vifte af projekter der bl.a. indeholder events, klubaftener, øvelokaler og et lydstudie.</p>
      <RouterLink to="/membership"><button>BLIV MEDLEM</button></RouterLink>
    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue'

const isActive = ref(true)

</script>

<style scoped>
  .hero {
    height: 100vh;
    background-color: aqua;

    background-image: url(../assets/img/hero_img.jpg);
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }

  .hero-btn:first-of-type {
    margin-right: 1rem;
  }

  .box {
    height: auto;
    padding: 8rem 0;
  }
</style>
