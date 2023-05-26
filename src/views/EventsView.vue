<template>
  <!-- Hero -->
  <div class="hero d-flex justify-content-center align-items-center">
    <div class="hero-text-box col-10 d-flex flex-column align-items-center">
      <h1>EVENTS</h1>
      <p class="p-hero">OPLEV MUSIK UD OVER KANTEN!</p>
    </div>
  </div>

  <div class="box d-flex justify-content-center align-items-center">
    <div class="box-img col-4"></div>
    <div class="box-text col-6">
      <h2 class="h2-box">EVENTS</h2>
      <p class="p-box">Kanten bliver Esbjergs nye kulturfællesskab drevet af foreningen Kanten. Vores vision er at skabe en platform for det kreative vækstlag, som mangler en synlig plads i Esbjergs kulturliv. Gennem denne platform ønsker vi at støtte de fællesskaber der opstår af spirende kreative miljøer. Kanten vil give det underrepræsenterede vækstlag en scene at stå på – dette gør vi gennem en bred vifte af projekter der bl.a. indeholder events, klubaftener, øvelokaler og et lydstudie.</p>
      <button>SE EVENTS ▼</button>
    </div>
  </div>

  <div class="card-box d-flex justify-content-center align-items-center">
    <div class="col-10">
      <div @click="redirect(post.id)" style="cursor: pointer"
      v-for="post in posts"
      class="event-card"
      :class="{ 'has-background-success-light' : post.done}"
      >
      <div class="card-content">
        <div class="content">

          <div class="">
            <div
              class="column"
              :class ="{ 'has-text-success line-through' : post.done }"
              >
              <h5 class="mb-0">
                {{ post.title }}
              </h5>
            </div>
            <div
              class="column"
              :class ="{ 'has-text-success line-through' : post.done }"
              >
              {{ post.age }}
            </div>
            <div
              class="column"
              :class ="{ 'has-text-success line-through' : post.done }"
              >
              {{ post.price }}
            </div>
            <div
              class="column"
              :class ="{ 'has-text-success line-through' : post.done }"
              >
              {{ post.genre }}
            </div>
            <div
              class="column"
              :class ="{ 'has-text-success line-through' : post.done }"
              >
              {{ post.performer }}
            </div>
            <div
              class="column"
              :class ="{ 'has-text-success line-through' : post.done }"
              >
              {{ post.time }}
            </div>
            <div
              class="column"
              :class ="{ 'has-text-success line-through' : post.done }"
              >
              {{ post.venue }}
            </div>
            <div
              class="column"
              :class ="{ 'has-text-success line-through' : post.done }"
              >
              {{ post.info }}
            </div>
            <div
              class="column"
              :class ="{ 'has-text-success line-through' : post.done }"
              >
              {{ post.url }}
            </div>
            <!-- Image -->
            <div>
              <img :src="post.imgURL" alt="post image" width="200" height="200">
            </div>
            <div class="has-text-right">
            </div>
          </div>
        </div>
      </div>
    </div>

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
onMounted(() => {
  onSnapshot(postsCollectionQuery, (querySnapshot) => {
    const fbPosts = []
    querySnapshot.forEach((doc) => {
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
    })
    posts.value = fbPosts
  })
})

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
</style>