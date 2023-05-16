<template><div class="badass-todo">

    <div class="title has-text-centered">
      Add Event
    </div>

    <form
    @submit.prevent="addPost"
    >
      <div class="event-adder mb-5">
        <p class="control is-expanded mb-2">
          <input
            v-model="newEventTitle"
            class="input" 
            type="text" 
            placeholder="Add event title"
            >
        </p>
        <p class="control is-expanded mb-2">
          <input
            v-model="newEventAge"
            class="input" 
            type="text" 
            placeholder="Add event age restriction"
            >
        </p>
        <p class="control is-expanded mb-2">
          <input
            v-model="newEventPrice"
            class="input" 
            type="text" 
            placeholder="Add event price"
            >
        </p>
        <p class="control is-expanded mb-2">
          <input
            v-model="newEventGenre"
            class="input" 
            type="text" 
            placeholder="Add event genre"
            >
        </p>
        <p class="control is-expanded mb-2">
          <input
            v-model="newEventPerformer"
            class="input" 
            type="text" 
            placeholder="Add event performer"
            >
        </p>
        <p class="control is-expanded mb-2">
          <input
            v-model="newEventTime"
            class="input" 
            type="text"
            placeholder="Add event date"
            >
        </p>
        <p class="control is-expanded mb-2">
          <input
            v-model="newEventVenue"
            class="input" 
            type="text" 
            placeholder="Add event venue"
            >
        </p>
        <p class="control is-expanded mb-2">
          <input
            v-model="newEventInfo"
            class="input" 
            type="text" 
            placeholder="Add event info"
            >
        </p>
        <p class="control is-expanded mb-2">
          <input
            v-model="newEventUrl"
            class="input" 
            type="text" 
            placeholder="Add event sale url"
            >
        </p>
        <!-- Image upload-->
        <input class="mb-2" type="file" label="File input" @change="uploadImg">
        <!-- Control -->
        <p class="control">
          <button
          :disabled="!newEventTitle + !newEventAge + !newEventPrice + !newEventGenre + !newEventPerformer + !newEventTime + !newEventVenue + !newEventInfo + !newEventUrl"
          class="button is-info"
          >
            Add
          </button>
        </p>
      </div>
    </form>
    
    <!-- Card -->
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
          <!-- Check & delete btn -->
          <div class="has-text-right">
            <button
            @click="toggleDone(post.id)"
            class="button"
            :class="post.done ? 'is-success' : 'is-light'"
            >
              &check;
            </button>
            <button
              @click="deletePost(post.id)"
              class="button is-danger ml-2"
            >
              &cross;
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  </div>

  <RouterView />
</template>

<script setup>
import { onMounted, ref } from "vue";

import { 
  collection, onSnapshot, 
  addDoc, doc, deleteDoc, updateDoc,
  query, orderBy, limit
} from 'firebase/firestore';
import { db } from '@/firebase';

//Firebase refs

const postsCollectionRef = collection(db, 'posts')
const postsCollectionQuery = query(postsCollectionRef, orderBy('date', 'desc'), limit(5))

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
      }
      fbPosts.push(post)
    })
    posts.value = fbPosts
  })
})

//add post

const newEventTitle = ref('')
const newEventAge = ref ('')
const newEventPrice = ref ('')
const newEventGenre = ref ('')
const newEventPerformer = ref ('')
const newEventTime = ref ('')
const newEventVenue = ref ('')
const newEventInfo = ref ('')
const newEventUrl = ref ('')

const addPost = () => {
  addDoc(postsCollectionRef, {
    title: newEventTitle.value,
    done: false,
    date: Date.now(),
    age: newEventAge.value,
    price: newEventPrice.value,
    genre: newEventGenre.value,
    performer: newEventPerformer.value,
    time: newEventTime.value,
    venue: newEventVenue.value,
    info: newEventInfo.value,
    url: newEventUrl.value,
  })

  newEventTitle.value = ''
  newEventAge.value = ''
  newEventPrice.value = ''
  newEventGenre.value = ''
  newEventPerformer.value = ''
  newEventTime.value = ''
  newEventVenue.value = ''
  newEventInfo.value = ''
  newEventUrl.value = ''
}

//delete post

const deletePost = id => {
  deleteDoc(doc(postsCollectionRef, id))
}

//toggle done

const toggleDone = id => {
  const index = posts.value.findIndex(post => post.id === id)

  updateDoc(doc(postsCollectionRef, id), {
    done: !posts.value[index].done
  })
}

</script>

<style scoped>

</style>

<style>
  @import 'bulma\css\bulma.min.css';

  .badass-todo {
    /*max-width: 400px;*/
    padding: 20px;
    margin: 0 auto;
  }

  .line-through {
    text-decoration: line-through;
  }
</style>