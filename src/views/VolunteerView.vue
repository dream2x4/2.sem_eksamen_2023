<template>
    <!-- Hero -->
    <div class="hero d-flex justify-content-center align-items-center">
    </div>
  
    <!-- Box -->

    <div class="d-flex flex-column justify-content-center align-items-center">
      <div class="box col-10 d-flex flex-column justify-content-center align-items-center">
          <h1>FRIVILLIG</h1>
          <p class="p-hero">FOR UNGE DREVET AF UNGE!</p>
      </div>
    </div>
  
    <!-- Card-box -->
  
    <div class="card-box d-flex flex-column justify-content-center align-items-center">
        
        <div class="box-card d-flex justify-content-center align-items-center">
            <div class="box-img col-10 col-sm-4">
              <img src="../assets/img/frivillig.png" alt="volunteer" style="width: 90%;">
            </div>
            <div class="box-text col-10 col-sm-6">
                <h2 class="h2-box">OM FRIVILLIG</h2>
                <p class="p-box">Kanten bliver Esbjergs nye kulturfællesskab drevet af foreningen Kanten. Vores vision er at skabe en platform for det kreative vækstlag, som mangler en synlig plads i Esbjergs kulturliv. Gennem denne platform ønsker vi at støtte de fællesskaber der opstår af spirende kreative miljøer. Kanten vil give det underrepræsenterede vækstlag en scene at stå på – dette gør vi gennem en bred vifte af projekter der bl.a. indeholder events, klubaftener, øvelokaler og et lydstudie.</p>
                <a href="https://discord.gg/fNadVHW8"><button>BLIV FRIVILLIG</button></a>
            </div>
        </div>

    </div>
  
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const isActive = ref(true)
  
  </script>
  
  <style scoped>
    .hero {
      height: 50vh;
      background-color: var(--vt-c-black);
  
      background-image: url(../assets/img/volunteer_hero_img.jpg);
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
    }
  
    button:first-of-type {
      margin-right: 2rem;
    }

    .box {
        height: 50vh;
    }

    .card-box {
      height: auto;
      padding: 8rem 0;      
    }
    
    @media (max-width: 576px) {
      .p-hero {
        text-align: center;
      }

      .card-box {
        padding: 4rem 0;
      }

      .box-card {
        flex-direction: column;
        gap: 2rem;
      }

      .box-img {
        display: flex;
        justify-content: center;
      }
    }
  </style>
  