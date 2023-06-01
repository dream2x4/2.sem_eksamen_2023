<template>
  <!-- Hero -->
  <div class="hero d-flex justify-content-center align-items-center">
    <video src="../assets/video/kanten_video.mp4" class="hero-video" autoplay loop muted plays-inline></video>
    <div class="hero-text-box col-10 d-flex flex-column">
      <h1 style="text-shadow: 0 0 1.6rem var(--vt-c-black-transparent);">KANTEN</h1>
      <p class="p-hero" style="text-align: end; text-shadow: 0 0 1.6rem var(--vt-c-black-transparent);">ESBJERGS NYE KULTURFÆLLESKAB</p>
      <div class="hero-btns">
        <RouterLink to="/events"><button class="hero-btn" style="box-shadow: 0 0 1.6rem var(--vt-c-black-transparent);">SE EVENTS</button></RouterLink>
        <RouterLink to="/volunteer"><button class="hero-btn" style="box-shadow: 0 0 1.6rem var(--vt-c-black-transparent);">BLIV FRIVILLIG</button></RouterLink>
      </div>
    </div>
  </div>

  <!-- Info -->

  <div class="box d-flex justify-content-center align-items-center">
    <div class="box-img col-10 col-sm-4">
      <img src="../assets/img/om_Kanten.png" alt="about" style="width: 90%;">
    </div>
    <div class="box-text col-10 col-sm-6">
      <h2 class="h2-box">OM KANTEN</h2>
      <p>Kanten Esbjerg er et inkluderende initiativ skabt af frivillige unge esbjergensere, som brænder for at skabe et nyt musikkultur tiltag, spillested og studie, der bidrager til et sikkert byliv.</p>
      <p class="p-box">Diversitet og mangfoldighed er vores kerneværdier og vores musikprogram er repræsentativt og bredt inkluderende.</p>
      <RouterLink to="/about"><button>LÆS MERE</button></RouterLink>
    </div>
  </div>

  <!-- Activities -->

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
    <RouterLink to="/events">
      <div class="carousel-item active">
        <img src="../assets/img/event_img.jpg" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block text-end">
          <h5>EVENTS</h5>
          <p>Se kommende events & køb billeter!</p>
        </div>
      </div>
    </RouterLink>
    <RouterLink to="/about">
      <div class="carousel-item">
        <img src="../assets/img/dj_img.jpg" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block text-end">
          <h5>BLIV DJ</h5>
          <p>Få mulighed for undervisning eller book en studie!</p>
        </div>
      </div>
    </RouterLink>
    <RouterLink to="/volunteer">
      <div class="carousel-item">
        <img src="../assets/img/volunteer_img.jpg" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block text-end">
          <h5>BLIV FRIVILLIG</h5>
          <p>Bliv frivillig og være med til at skabe uforglemmelige oplevelser!</p>
        </div>
      </div>
    </RouterLink>
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

  <!-- Membership -->

  <div class="box d-flex justify-content-center align-items-center">
    <div class="box-img col-10 col-sm-4">
      <img src="../assets/img/medlemskab.png" alt="membership" style="width: 90%;">
    </div>
    <div class="box-text col-10 col-sm-6">
      <h2 class="h2-box">MEDLEMSKAB</h2>
      <p class="p-box">Bliv medlem hos Kanten. Som medlem hos os sparer du penge på uforglemmelige musik events i Esbjerg. Vær med når vi fyrer en fest af med vores live djs, der spiller alt fra hiphop til house musik. Vær med behind the scene, og se hvordan Kanten Crew gør sig klar til Kantens events. Imens kan du nyde billigere drinks og øl, fra Kantens helt egen bar. Få muligheden for at være med til eksklusive events kun for medlemmer. Vær med til at bidrage til Kanten og tilslut dig vores unikke fællesskab, hvor der er plads til alle, for kun 90 kr. årligt.  </p>
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
    

    background-image: url(../assets/img/hero_img.jpg);
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }

  .hero-video {
    object-fit: cover;
    position: absolute;
    height: 100%;
    width:100%;
    margin: 0%;
    padding: 0%;
    overflow: hidden;
  }

  .hero-btns {
    text-align: end;
    margin-bottom: 1rem;
  }

  .hero-btn {
    margin-bottom: 0.4rem;
    margin-left: 1rem;
  }

  .hero-text-box {
    align-items: end;
  }

  .box {
    height: auto;
    padding: 8rem 0;
  }

  /* Carousel */
  .carousel-control-prev:hover {
    background-color: transparent;
  }

  .carousel-control-next:hover {
    background-color: transparent;
  }

  @media (max-width: 576px) {
    .box {
      flex-direction: column;
      gap: 2rem;
      padding: 4rem 0;
    }
    .box-img {
      display: flex;
      justify-content: center;
    }

    .hero-btn {
      margin-bottom: 0.4rem;
      margin-left: 1rem;
    }
  }

  @media (max-width: 310px) {
    .hero-btn {
      margin-left: 0;
    }
  }
</style>
