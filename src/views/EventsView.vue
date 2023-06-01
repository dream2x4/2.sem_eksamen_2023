<template>
  <!-- Hero -->
  <div class="hero d-flex justify-content-center align-items-center">
    <div class="hero-text-box col-10 d-flex flex-column align-items-center">
      <h1 style="text-shadow: 0 0 1.6rem var(--vt-c-black-transparent);">EVENTS</h1>

      <!-- Filter -->
      <div class="filter-box d-flex justify-content-center" style="margin: 2rem 0;">
        <button type="button" class="filter-btn All" @click="$event => changeCategory(false)"><img class="filter-img" src="../assets/img/SeAlle_logo.png" alt="" style="width: 100%;" data-id="all"></button>
        <button type="button" class="filter-btn Mana" @click="$event => changeCategory('Deft')" value="Deft"><img class="filter-img" src="../assets/img/Deft_logo.png" alt="" style="width: 100%;" data-id="deft"></button>
        <button type="button" class="filter-btn Vertex" @click="$event => changeCategory('Xmas')" value="Xmas"><img class="filter-img" src="../assets/img/Xmassive_logo.png" alt="" style="width: 100%;" data-id="x-mas"></button>
        <button type="button" class="filter-btn Guest" @click="$event => changeCategory('Mana')" value="Mana"><img class="filter-img" src="../assets/img/Manaclub_logo.png" alt="" style="width: 100%;" data-id="mana"></button>
        <button type="button" class="filter-btn Xmas" @click="$event => changeCategory('Vertex')" value="Vertex"><img class="filter-img" src="../assets/img/Vertex_logo.png" alt="" style="width: 100%;" data-id="vertex"></button>
        <button type="button" class="filter-btn Guest" @click="$event => changeCategory('Gæst')" value="Guest"><img class="filter-img" src="../assets/img/Guest_logo.png" alt="" style="width: 100%;" data-id="guest"></button>
      </div>

      <p class="p-hero" style="text-shadow: 0 0 1.6rem var(--vt-c-black-transparent);">OPLEV MUSIK UD OVER KANTEN!</p>
    </div>
  </div>

  <!-- Info -->
  <article class="box d-flex justify-content-center align-items-center">
    <div class="box-img col-10 col-sm-4">
      <img class="event-png active" src="../assets/img/event_all.png" alt="all" style="width: 90%;" id="all">
      <img class="event-png" src="../assets/img/event_deft.png" alt="deft" style="width: 90%;" id="deft">
      <img class="event-png" src="../assets/img/event_xmas.png" alt="x-mas" style="width: 90%;" id="x-mas">
      <img class="event-png" src="../assets/img/event_mana.png" alt="mana" style="width: 90%;" id="mana">
      <img class="event-png" src="../assets/img/event_vertex.png" alt="vertex" style="width: 90%;" id="vertex">
      <img class="event-png" src="../assets/img/event_guest.png" alt="gæst" style="width: 90%;" id="guest">
    </div>
    <div class="box-text col-10 col-sm-6">
      <div class="event-content">
        <!-- single item -->
        <div class="content active" id="all" >
          <h2 class="h2-box">EVENTS</h2>
          <p class="p-box">Kanten afholder flere forskellige live musik events årligt, spredt over mange forskellige genre. Til vores events kan du opleve et mix af Esbjergs egen dj-scene og gæste kunstnere. Få en uforglemmelig aften hos Kanten, drik Esbjergs billigste fadøl mens du oplever hvad Danmarks musik undergrund har at byde på. Når du er klar til at svinge hofterne eller luftet din bas-arm, er der rigelig med plads til at opnå dette også. Alle er velkomne, køn, seksualitet, race etc. Er underordnet.</p>
        </div>
        <!-- end of single item -->
        <!-- single item -->
        
        <div class="content" id="deft" >
          <h2 class="h2-box">DEFT</h2>
          <p>Deft er et dj kollektiv bestående af Jacob Mørch og Dmdu. Deft fokusere primært på genren hiphop. </p>
          <p class="p-box">Mærk ægte gade kultur, når Deft rammer dj pulten. Så find din sneakers frem og vis dine bedste dansetrin på Kantens dansegulv. Vi garanterer at stemningen er i top og fadøllene billige.</p>
        </div>
        <!-- end of single item -->
        <!-- single item -->
        <div class="content" id="x-mas" >
          <h2 class="h2-box">X-MASSIVE DUB</h2>
          <p class="p-box">X-Massive Dub er et dj kollektiv bestående af Mike Pinto, Jalix og Selekta Pupa Ihrhamm. X-Massive Dub er kendt for at spille dancehall, reggae og dub. Tag en tur til Jamaica for en aften, skål i Pina Coladas og dans til X-Massives beats.</p>
        </div>
        <!-- end of single item -->
        <!-- single item -->
        <div class="content" id="mana" >
          <h2 class="h2-box">MANA CLUB</h2>
          <p class="p-box">Mana Club er et dj kollektiv bestående af AK75, Alva Alva, Sign of weakness, Vestjysk Våbenhandel, Draco Malboi og Krilladen. Manaclub er inspireret af rave kulturen, og spiller primært techno, electronisk, rowdy bass og deconstructed club. Mana Club levere altid et vildt lysshow med et højt energiniveau.</p>
          <p class="p-box">Følg med her eller på deres Instagram _manaclub_, for at se hvornår de optræder.</p>
        </div>
        <!-- end of single item -->
        <!-- single item -->
        <div class="content" id="vertex">
          <h2 class="h2-box">VERTEX</h2>
          <p>Vertex er et dj kollektiv bestående Boom Juice og Dransfeldt. Vertex fokusere på musikgenren House. House musikken kommer fra genren Disco, men med et mere mekanisk og elektronisk beat. Vertex pumper stemningen i top, så gør klar til at ramme dansegulvet.</p>
          <p class="p-box">Følg med her eller på deres Instagram vertex_collective, for at se hvornår de optræder.</p>
        </div>
        <!-- end of single item -->
        <!-- single item -->
        <div class="content" id="guest" >
          <h2 class="h2-box">GÆST</h2>
          <p class="p-box">Kanten er ikke kun hjem til vores resident dj’s, men vi åbner også ofte vores døre for talentfulde kunstnere fra resten af Danmark. Så kom og oplev kunstnere der normalt ikke kommer på disse kanter.</p>
        </div>
        <!-- end of single item -->
      </div>
      <a href="#events">
        <button class="event-btn" style="margin-right: 1rem;" >SE EVENTS ▼</button>
      </a>
      <a href="#gallery">
        <button class="event-btn" >SE GALLERI ▼</button>
      </a>
    </div>
  </article>

  <!-- Event Cards -->
  <div class="card-box d-flex justify-content-center align-items-center" id="events">
    <div class="col-10">
      <div @click="redirect(post.id)" style="cursor: pointer"
      v-for="post in posts"
      class="event-card"
      :class="{ 'has-background-success-light' : post.done}"
      >
      <div class="card-content">
        <div class="event-content">

          <div>
            <p class="p-date">
              {{ post.time }}
            </p>
            <h3>
              {{ post.title }}
              </h3>
            <!-- Image -->
            <div>
              <img :src="post.imgURL" class="post-img" alt="post image">
            </div>
            <div class="has-text-right">
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  </div>

  <!-- Gallery -->

  <div class="box d-flex justify-content-center align-items-center" id="gallery">
    <div class="box-img col-10">
      <h2 class="h2-box">GALLERI</h2>
    </div>

    

  </div>

  

</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from 'vue-router'

import { 
  collection, onSnapshot, 
  addDoc, doc, deleteDoc, updateDoc,
  query, orderBy, limit
} from 'firebase/firestore';
import { db } from '@/firebase';

//Firebase refs

const postsCollectionRef = collection(db, 'posts')
const postsCollectionQuery = query(postsCollectionRef, orderBy('date', 'desc'), limit(5))

const router = useRouter()

const redirect = (id) => {
  router.push("/eventdetail/" + id)
}

onMounted(() => {
    const isActive = ref(true)
    
  //Tags
    
  //const about = document.querySelector('.about');
  const btns = document.querySelectorAll('.filter-btn');
  const articles = document.querySelectorAll('.event-png');
  const contents = document.querySelectorAll('.content');
      
  let selected = 0;
  let btn = 0;

  for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener("click", () => {
    changeSelected(i)
    })
  }

  const changeSelected = (newSelected) => {
    articles[selected].classList.remove("active")
    articles[newSelected].classList.add("active")
    
    contents[selected].classList.remove("active")
    contents[newSelected].classList.add("active")
    selected = newSelected
  }  
})

//Posts

const posts = ref([
  /*{
    id: 'id1',
    content: 'Shave my butt',
    done: false
  },
  {
  id: 'id2',
    content: 'Wash my butt',
    done: true
  }*/
])



//get posts
const loadData = (genre = false) => {
  onSnapshot(postsCollectionQuery, (querySnapshot) => {
    const fbPosts = []
    querySnapshot.forEach((doc) => {

      console.log(doc.data().genre == genre || genre == false)
      console.log("online", doc.data().genre)
      console.log("local", genre)
      /* Genre */
      if(doc.data().genre == genre || genre == false){
        const post = {
          id: doc.id,
          title: doc.data().title,
          done: doc.data().done,
          age: doc.data().age,
          price: doc.data().price,
          genre: doc.data().genre,
          performer: doc.data().performer,
          time: doc.data().time,
          venue: doc.data().venue,
          info: doc.data().info,
          url: doc.data().url,
          imgURL:doc.data().imgURL
        }
        fbPosts.push(post)
      }
    })
    posts.value = fbPosts
  })
}

onMounted(() => {
  loadData()
})

//filter
const changeCategory = (genre) => {
  console.log("Dis one", genre)
  loadData(genre)
}

</script>

<style scoped>
.hero {
    height: 100vh;

    background-image: url(../assets/img/events_hero_img.jpg);
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }

  .p-hero {
      text-align: center;
  }

  .event-btn {
    margin-bottom: 0.4rem;
  }

  /* Filter */

  .filter-box {
    flex-wrap: wrap;
    gap: 1rem;
  }

  .filter-btn {
    padding: 0;
    background-color: transparent;
    width: 14%;
  }

  .filter-btn:hover {
    background-color: transparent;
  }

  .filter-img {
    transition: 0.25s;
  }

  .filter-img:hover {
    transform: scale(1.05);
  }

  /* hide content */
  .event-png {
    display: none;
  }
  .event-png.active {
    display: block;
  }

  .content {
    display: none;
  }
  .content.active {
    display: block;
  }

  /* Card */

  .box {
    height: auto;
    padding: 8rem 0;
  }

  .card-box {
    height: auto;
    padding: 8rem 0;
  }

  .event-card {
    margin-bottom: 5rem;
  }

  .event-card:last-of-type {
    margin-bottom: 0;
  }

  /* Gallery */

  .event-gallery {
    height: auto;
    padding: 8rem 0;
  }

  @media (max-width: 768px) {
    .filter-btn {
      width: 31%;
    }
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

    @media (max-width: 310px) {
      .event-btn {
        margin-left: 0;
      }
    }
  }
</style>