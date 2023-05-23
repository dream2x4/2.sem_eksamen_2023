<template>
    <!-- Hero -->
    <div class="hero d-flex justify-content-center align-items-center">
    </div>
  
    <!-- Box -->
  
    <div class="box d-flex flex-column justify-content-center align-items-center">
        <h1>OM OS</h1>
        <p class="p-hero">UNGDOMSKULTUR. DIT FÆLLESKAB!</p>
    </div>
  
    <!-- Card-box -->
  
    <div class="card-box d-flex flex-column justify-content-center align-items-center">
        
        <div class="d-flex justify-content-center align-items-center">
            <div class="col-6">
                <h2 class="h2-box">KRÆFTVÆRKET</h2>
                <p class="p-box">Esbjerg har i flere år manglet gængse øvelokaler med mulighed for indspilning, og her vil Kanten give muligheden for at benytte sig af et lydstudie samt et øvelokale af høj kvalitet. I kraft af Kantens vision om at hjælpe det musikalske vækstlag med at skabe musik, så vil der tilbydes en lydtekniker som ifølge aftale kan undervise i lydstudieteknik - alt efter behov. Med Kraftværkets placering i Østerbyen vil vi løfte interessen for musik, særligt for de lokale unge. Det vil vi f.eks. gøre med undervisning i øjenhøjde og med kendskab til unge i området. Kraftværket kan benyttes af alle der spiller, eller gerne vil spille musik.</p>

                <h2 class="h2-box">PRISER PÅ MEDLEMSKAB</h2>
                <div class="d-flex justify-content-between align-items-center">
                    <p class="p-box">Adgang til øvelokalet  i 3 md.</p>
                    <p class="p-box">300 kr.</p>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <p class="p-box">Adgang til studiet 3 md.</p>
                    <p class="p-box">350 kr.</p>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <p class="p-box">Opstart kursus i studiet (kan være krav)</p>
                    <p class="p-box">100 kr.</p>
                </div>

                <h2 class="h2-box">KONTAKT KANTEN</h2>
                <p class="p-box">Telefon: 28 97 11 85</p>
                <p class="p-box">Email: musikforeningenkanten@gmail.com</p>
                <p class="p-box">Adresse: GL Novrupvej 14, 6705 Esbjerg Ø</p>
            </div>
            <div class="col-4"></div>
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
    
    .card-box {
        height: auto;
        padding: 8rem 0;
    }
  </style>
  