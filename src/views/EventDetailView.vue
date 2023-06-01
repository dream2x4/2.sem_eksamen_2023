<template>
    <!-- Hero -->
    <div class="hero d-flex justify-content-center align-items-center">
    </div>
    
    <!-- Event Detail -->
    <div class="card-box d-flex flex-column justify-content-center align-items-center">
        <div class="col-10">
            <div
            v-for="post in posts"
            class="event-title"
            :class="{ 'has-background-success-light' : post.done}"
            >
            <div
                class="column"
                :class ="{ 'has-text-success line-through' : post.done }"
                >
                <p class="p-date">{{ post.time }}</p>
                </div>
            <div
                class="column event-title"
                :class ="{ 'has-text-success line-through' : post.done }"
                >
                <h3 class="mb-0">
                {{ post.title }}
                </h3>
            </div>
            </div>
        </div>
        <div class="event-info-box col-10 d-flex">
            <div class="box-card-main">
                <div
                v-for="post in posts"
                class="event-card"
                :class="{ 'has-background-success-light' : post.done}"
                >
                    <div class="event-img" style="margin-bottom: 1rem;">
                        <img :src="post.imgURL" class="post-img" alt="post image">
                    </div>

                    <div
                        class="column"
                        :class ="{ 'has-text-success line-through' : post.done }"
                        >
                        <p class="p-bold">Beskrivelse</p>
                        <p>{{ post.info }}</p>
                    </div>
                </div>
            </div>
            <div class="box-card-info">
                <div
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
                        <p class="p-bold">Aldersgrænse</p>
                        <p>
                            {{ post.age }}
                        </p>
                    </div>
                    <div
                        class="column"
                        :class ="{ 'has-text-success line-through' : post.done }"
                        >
                        <p class="p-bold">Pris</p>
                        <p>{{ post.price }}</p>
                    </div>
                    <div
                        class="column"
                        :class ="{ 'has-text-success line-through' : post.done }"
                        >
                        <p class="p-bold">Kategori</p>
                        <p>{{ post.genre }}</p>
                    </div>
                    <div
                        class="column"
                        :class ="{ 'has-text-success line-through' : post.done }"
                        >
                        <p class="p-bold">Kunstner</p>
                        <p>{{ post.performer }}</p>
                    </div>
                    <div
                        class="column"
                        :class ="{ 'has-text-success line-through' : post.done }"
                        >
                        <p class="p-bold">Sted</p>
                        <p>{{ post.venue }}</p>
                    </div>
                    <div
                        class="column"
                        :class ="{ 'has-text-success line-through' : post.done }"
                        >
                        <a :href="post.url" target="_blanc" >
                            <button>KØB BILLET</button>
                        </a>
                        
                    </div>
                    </div>
                </div>
                </div>
            </div>

            </div>

        </div>

        <!-- Go Back Botton -->
        <div class="col-10">
            <button class="button" @click="goBack()">
                <!-- <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="15.rem" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                </svg>  -->
                ◀ Go back
            </button>
        </div>

    </div>
</template>


<script setup>
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from 'vue-router';

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
const route = useRoute()

const id = route.params.id

const redirect = (id) => {
  router.push("/eventdetail/" + id)
}

const goBack = () => {
    router.push("/events")
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
        if(doc.id == id){
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
})

</script>

<style scoped>

.event-title {
    margin-bottom: 1rem;
}

.hero {
    height: 50vh;
  
    background-image: url(../assets/img/membership_hero_img.jpg);
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
}

.card-box {
    height: auto;
    padding: 8rem 0;
    box-shadow: none;
}

.event-card {
    margin-bottom: 6rem;
}

.event-title {
    width: 60%;
}

.event-info-box {
    gap: 2rem;
}

.box-card-main {
    width: 60%;
}

.box-card-info {
    width: 40%;
}

@media (max-width: 576px) {

    .event-title {
        width: 100%;
    }
    .card-box {
        padding: 4rem 0;
    }

    .event-info-box {
        flex-direction: column;
        gap: 0;
        margin-bottom: 2rem;
    }

    .event-card {
        margin: 0;
    }

    .box-card-main {
        width: 100%;
    }

    .box-card-info {
        width: 100%;
    }
  }
</style>

