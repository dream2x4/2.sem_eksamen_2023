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
     <!--    <button @click.prevent="firebaseAddSingleItem()" :disabled="addItemData.uploadBtnDisabled">Add item</button> -->
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
import { onMounted, ref as refVue, reactive } from "vue"; //reactive from image upload

import { 
  collection, onSnapshot, 
  addDoc, doc, deleteDoc, updateDoc,
  query, orderBy, limit
} from 'firebase/firestore';
import { db } from '@/firebase';

//image
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

//Firebase refs

const postsCollectionRef = collection(db, 'posts')
const postsCollectionQuery = query(postsCollectionRef, orderBy('date', 'desc'), limit(5))

//Posts

let posts = refVue('')
/*const posts = ref([
  {
    id: 'id1',
    content: 'Shave my butt',
    done: false
  },
  {
  id: 'id2',
    content: 'Wash my butt',
    done: true
  }
])*/

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

//add post

const newEventTitle = refVue ('')
const newEventAge = refVue ('')
const newEventPrice = refVue ('')
const newEventGenre = refVue ('')
const newEventPerformer = refVue ('')
const newEventTime = refVue ('')
const newEventVenue = refVue ('')
const newEventInfo = refVue ('')
const newEventUrl = refVue ('')

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
    imgURL: addItemData.imgURL
    
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

//Image script
/* const { 
  posts,
  getPostsData, 
} = usePosts()
 
onMounted(() => {
  getPostsData()
}) */

// Add item data: title, description, image URL and have the button disabled until image is uploaded
let addItemData = reactive({
  imgURL: '',
  uploadBtnDisabled: true
})

 // Add dynamic data to Firebase Firestore
 const firebaseAddSingleItem = async() => {
    await addDoc(collection(db, "posts"), {
      imgURL: addItemData.imgURL
    }
    ).then(() => {
      //  snackbar.value = true
    })
  }

const storage = getStorage();
 
// Firebase storage upload image + get download URL + enable button after image uploaded
const uploadImg = async(event) => {
  let file = event.target.files[0]; // get the file
  console.log("file", file)
// Create the file metadata
/** @type {any} */
const metadata = {
  contentType: 'image/jpeg'
};

// Upload file and metadata to the object 'images/mountains.jpg'
const storageRef = ref(storage, 'images/' + file.name);
const uploadTask = uploadBytesResumable(storageRef, file, metadata);

// Listen for state changes, errors, and completion of the upload.
uploadTask.on('state_changed',
  (snapshot) => {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');       
        break;
    }
  }, 
  (error) => {
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
      case 'storage/unauthorized':
        // User doesn't have permission to access the object
        break;
      case 'storage/canceled':
        // User canceled the upload
        break;

      // ...

      case 'storage/unknown':
        // Unknown error occurred, inspect error.serverResponse
        break;
    }
  }, 
  () => {
    // Upload completed successfully, now we can get the download URL
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);

      addItemData.imgURL = downloadURL // update variable imgURL and put the image URL link in it. 
      addItemData.uploadBtnDisabled = false // enable button after image uploaded is complete
    });
  }  
);
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