<template><div class="badass-todo">

    <div class="title has-text-centered">
      Add Event
    </div>

    <form
    @submit.prevent="addTodo"
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
    
    <div 
    v-for="todo in todos"
    class="card mb-5"
    :class="{ 'has-background-success-light' : todo.done}"
    >
    <div class="card-content">
      <div class="content">

        <div class="">
          <div
            class="column"
            :class ="{ 'has-text-success line-through' : todo.done }"
            >
            <h5>
              {{ todo.title }}
            </h5>
          </div>
          <div
            class="column"
            :class ="{ 'has-text-success line-through' : todo.done }"
            >
            {{ todo.age }}
          </div>
          <div
            class="column"
            :class ="{ 'has-text-success line-through' : todo.done }"
            >
            {{ todo.price }}
          </div>
          <div
            class="column"
            :class ="{ 'has-text-success line-through' : todo.done }"
            >
            {{ todo.genre }}
          </div>
          <div
            class="column"
            :class ="{ 'has-text-success line-through' : todo.done }"
            >
            {{ todo.performer }}
          </div>
          <div
            class="column"
            :class ="{ 'has-text-success line-through' : todo.done }"
            >
            {{ todo.time }}
          </div>
          <div
            class="column"
            :class ="{ 'has-text-success line-through' : todo.done }"
            >
            {{ todo.venue }}
          </div>
          <div
            class="column"
            :class ="{ 'has-text-success line-through' : todo.done }"
            >
            {{ todo.info }}
          </div>
          <div
            class="column"
            :class ="{ 'has-text-success line-through' : todo.done }"
            >
            {{ todo.url }}
          </div>
          <div class="has-text-right">
            <button
            @click="toggleDone(todo.id)"
            class="button"
            :class="todo.done ? 'is-success' : 'is-light'"
            >
              &check;
            </button>
            <button
              @click="deleteTodo(todo.id)"
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

import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router"; //import router

const router = useRouter(); //get a reference to our vue router
const isLoggedIn = ref(false);

let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/");
  });
};

//Firebase refs

const todosCollectionRef = collection(db, 'todos')
const todosCollectionQuery = query(todosCollectionRef, orderBy('date', 'desc'), limit(5))

//Todos

const todos = ref([
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

//get todos
onMounted(() => {
  onSnapshot(todosCollectionQuery, (querySnapshot) => {
    const fbTodos = []
    querySnapshot.forEach((doc) => {
      const todo = {
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
      fbTodos.push(todo)
    })
    todos.value = fbTodos
  })
})

//add todo

const newEventTitle = ref('')
const newEventAge = ref ('')
const newEventPrice = ref ('')
const newEventGenre = ref ('')
const newEventPerformer = ref ('')
const newEventTime = ref ('')
const newEventVenue = ref ('')
const newEventInfo = ref ('')
const newEventUrl = ref ('')

const addTodo = () => {
  addDoc(todosCollectionRef, {
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

//delete todo

const deleteTodo = id => {
  deleteDoc(doc(todosCollectionRef, id))
}

//toggle done

const toggleDone = id => {
  const index = todos.value.findIndex(todo => todo.id === id)

  updateDoc(doc(todosCollectionRef, id), {
    done: !todos.value[index].done
  })
}

</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
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