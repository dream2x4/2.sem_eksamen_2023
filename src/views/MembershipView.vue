<template>
    <!-- Hero -->
    <div class="hero d-flex justify-content-center align-items-center">
    </div>
  
    <!-- Title -->

    <div class="d-flex flex-column justify-content-center align-items-center">
      <div class="box col-10 d-flex flex-column justify-content-center align-items-center">
        <h1>MEDLEMSKAB</h1>
        <p class="p-hero">UNGDOMSKULTUR. DIT FÆLLESKAB!</p>
      </div>
    </div>
  
    <!-- Info -->
  
    <div class="card-box d-flex flex-column justify-content-center align-items-center">
        
        <div class="box-card d-flex justify-content-center align-items-center">
            <div class="box-img col-10 col-sm-4">
              <img src="../assets/img/medlemskab.png" alt="membership" style="width: 90%;">
            </div>
            <div class="box-text col-10 col-sm-6">
                <h2 class="h2-box">OM MEDLEMSKAB</h2>
                <p class="p-box">Bliv medlem hos Kanten. Som medlem hos os sparer du penge på uforglemmelige musik events i Esbjerg. Vær med når vi fyrer en fest af med vores live djs, der spiller alt fra hiphop til house musik. Vær med behind the scene, og se hvordan Kanten Crew gør sig klar til Kantens events. Imens kan du nyde billigere drinks og øl, fra Kantens helt egen bar. Få muligheden for at være med til eksklusive events kun for medlemmer. Vær med til at bidrage til Kanten og tilslut dig vores unikke fællesskab, hvor der er plads til alle, for kun 90 kr. årligt.</p>
                <a href="https://discord.gg/fNadVHW8"><button>BLIV MEDLEM</button></a>
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
  
      background-image: url(../assets/img/membership_hero_img.jpg);
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
  