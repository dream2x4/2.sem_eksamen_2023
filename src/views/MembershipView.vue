<template>
    <!-- Hero -->
    <div class="hero d-flex justify-content-center align-items-center">
    </div>
  
    <!-- Box -->
  
    <div class="box d-flex flex-column justify-content-center align-items-center">
        <h1>MEDLEMSKAB</h1>
        <p class="p-hero">UNGDOMSKULTUR. DIT FÆLLESKAB!</p>
    </div>
  
    <!-- Card-box -->
  
    <div class="card-box d-flex flex-column justify-content-center align-items-center">
        
        <div class="box d-flex justify-content-center align-items-center">
            <div class="box-img col-4"></div>
            <div class="box-text col-6">
                <h2 class="h2-box">EKSLUSIVE EVENTS & ANDRE FORDELE!</h2>
                <p class="p-box">Kanten bliver Esbjergs nye kulturfællesskab drevet af foreningen Kanten. Vores vision er at skabe en platform for det kreative vækstlag, som mangler en synlig plads i Esbjergs kulturliv. Gennem denne platform ønsker vi at støtte de fællesskaber der opstår af spirende kreative miljøer. Kanten vil give det underrepræsenterede vækstlag en scene at stå på – dette gør vi gennem en bred vifte af projekter der bl.a. indeholder events, klubaftener, øvelokaler og et lydstudie.</p>
                <button>BLIV MEDLEM</button>
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
      background-color: aqua;
  
      background-image: url(../assets/img/hero_img.jpg);
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
    
  </style>
  