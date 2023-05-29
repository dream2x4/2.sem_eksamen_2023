<template>
  <!-- Hero -->
  <div class="hero d-flex justify-content-center align-items-center">
    <div class="hero-text-box col-10 d-flex flex-column align-items-center">
      <h1>EVENTS</h1>

      <!-- Filter -->
      <div class="filter-box d-flex justify-content-center" style="margin: 2rem 0;">
        <button type="button" class="filter-btn All" @click="$event => changeCategory('False')"><img class="filter-img" src="../assets/img/SeAlle_logo.png" alt="" style="width: 100%;" data-id="all"></button>
        <button type="button" class="filter-btn Mana" @click="$event => changeCategory('Mana')" value="Mana"><img class="filter-img" src="../assets/img/Deft_logo.png" alt="" style="width: 100%;" data-id="deft"></button>
        <button type="button" class="filter-btn Vertex" @click="$event => changeCategory('Vertex')" value="Vertex"><img class="filter-img" src="../assets/img/Xmassive_logo.png" alt="" style="width: 100%;" data-id="x-mas"></button>
        <button type="button" class="filter-btn Guest" @click="$event => changeCategory('Gæst')" value="Guest"><img class="filter-img" src="../assets/img/Manaclub_logo.png" alt="" style="width: 100%;" data-id="mana"></button>
        <button type="button" class="filter-btn Xmas" @click="$event => changeCategory('Xmas')" value="Web"><img class="filter-img" src="../assets/img/Vertex_logo.png" alt="" style="width: 100%;" data-id="vertex"></button>
        <button type="button" class="filter-btn Deft" @click="$event => changeCategory('Deft')" value="Deft"><img class="filter-img" src="../assets/img/Gaest_logo.png" alt="" style="width: 100%;" data-id="guest"></button>
      </div>

      <p class="p-hero">OPLEV MUSIK UD OVER KANTEN!</p>
    </div>
  </div>

  <!-- Info -->
  <article class="box d-flex justify-content-center align-items-center">
    <div class="box-img col-10 col-sm-4">
      <img src="../assets/img/om_Kanten.png" alt="" style="width: 90%;">
    </div>
    <div class="box-text col-10 col-sm-6">
      <div class="event-content">
        <!-- single item -->
        <div class="content active" id="all" >
          <h2 class="h2-box">EVENTS</h2>
          <p class="p-box">Kanten bliver Esbjergs nye kulturfællesskab drevet af foreningen Kanten. Vores vision er at skabe en platform for det kreative vækstlag, som mangler en synlig plads i Esbjergs kulturliv. Gennem denne platform ønsker vi at støtte de fællesskaber der opstår af spirende kreative miljøer. Kanten vil give det underrepræsenterede vækstlag en scene at stå på – dette gør vi gennem en bred vifte af projekter der bl.a. indeholder events, klubaftener, øvelokaler og et lydstudie.</p>
        </div>
        <!-- end of single item -->
        <!-- single item -->
        <div class="content" id="deft" >
          <h2 class="h2-box">DEFT</h2>
          <p class="p-box">Kanten bliver Esbjergs nye kulturfællesskab drevet af foreningen Kanten. Vores vision er at skabe en platform for det kreative vækstlag, som mangler en synlig plads i Esbjergs kulturliv. Gennem denne platform ønsker vi at støtte de fællesskaber der opstår af spirende kreative miljøer. Kanten vil give det underrepræsenterede vækstlag en scene at stå på – dette gør vi gennem en bred vifte af projekter der bl.a. indeholder events, klubaftener, øvelokaler og et lydstudie.</p>
        </div>
        <!-- end of single item -->
        <!-- single item -->
        <div class="content" id="x-mas" >
          <h2 class="h2-box">X-MASSIVE DUB</h2>
          <p class="p-box">Kanten bliver Esbjergs nye kulturfællesskab drevet af foreningen Kanten. Vores vision er at skabe en platform for det kreative vækstlag, som mangler en synlig plads i Esbjergs kulturliv. Gennem denne platform ønsker vi at støtte de fællesskaber der opstår af spirende kreative miljøer. Kanten vil give det underrepræsenterede vækstlag en scene at stå på – dette gør vi gennem en bred vifte af projekter der bl.a. indeholder events, klubaftener, øvelokaler og et lydstudie.</p>
        </div>
        <!-- end of single item -->
        <!-- single item -->
        <div class="content" id="mana" >
          <h2 class="h2-box">MANA CLUB</h2>
          <p class="p-box">Kanten bliver Esbjergs nye kulturfællesskab drevet af foreningen Kanten. Vores vision er at skabe en platform for det kreative vækstlag, som mangler en synlig plads i Esbjergs kulturliv. Gennem denne platform ønsker vi at støtte de fællesskaber der opstår af spirende kreative miljøer. Kanten vil give det underrepræsenterede vækstlag en scene at stå på – dette gør vi gennem en bred vifte af projekter der bl.a. indeholder events, klubaftener, øvelokaler og et lydstudie.</p>
        </div>
        <!-- end of single item -->
        <!-- single item -->
        <div class="content" id="vertex">
          <h2 class="h2-box">VERTEX</h2>
          <p class="p-box">Kanten bliver Esbjergs nye kulturfællesskab drevet af foreningen Kanten. Vores vision er at skabe en platform for det kreative vækstlag, som mangler en synlig plads i Esbjergs kulturliv. Gennem denne platform ønsker vi at støtte de fællesskaber der opstår af spirende kreative miljøer. Kanten vil give det underrepræsenterede vækstlag en scene at stå på – dette gør vi gennem en bred vifte af projekter der bl.a. indeholder events, klubaftener, øvelokaler og et lydstudie.</p>
        </div>
        <!-- end of single item -->
        <!-- single item -->
        <div class="content" id="guest" >
          <h2 class="h2-box">GÆST</h2>
          <p class="p-box">Kanten bliver Esbjergs nye kulturfællesskab drevet af foreningen Kanten. Vores vision er at skabe en platform for det kreative vækstlag, som mangler en synlig plads i Esbjergs kulturliv. Gennem denne platform ønsker vi at støtte de fællesskaber der opstår af spirende kreative miljøer. Kanten vil give det underrepræsenterede vækstlag en scene at stå på – dette gør vi gennem en bred vifte af projekter der bl.a. indeholder events, klubaftener, øvelokaler og et lydstudie.</p>
        </div>
        <!-- end of single item -->
      </div>
      <a href="#events">
        <button class="event-btn" >SE EVENTS ▼</button>
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
  const articles = document.querySelectorAll('.content');
      
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
    background-color: aqua;

    background-image: url(../assets/img/hero_img.jpg);
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }

  .p-hero {
      text-align: center;
  }

  .event-btn {
    margin-bottom: 0.4rem;
    margin-left: 1rem;
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

  .event-btn:first-of-type {
    margin-right: 1rem;
  }

  /* hide content */
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