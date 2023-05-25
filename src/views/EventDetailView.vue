<template>
    <div class="displayStuff" style="color: pink">
      {{ data }}
      <div v-for="it in data">
        {{ it }}

      </div>
    </div>
    <div
    v-for="post in posts"
    class="card mb-5"
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
    <button class="button" @click="goBack()">
          <!-- <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="15.rem" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
          </svg>  -->
          Go back
        </button>
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

