<template>
  <header>
    <RouterLink class="logo" to="/">
      <img alt="" src="@/assets/img/kanten_logo.png" width="104.83" height="90" />
    </RouterLink>

    <div class="wrapper ">

      <nav>
        <div class="nav-container">
          <RouterLink to="/">HJEM</RouterLink>
          <RouterLink to="/about">OM OS</RouterLink>
          <RouterLink to="/events">EVENTS</RouterLink>
          <RouterLink to="/volunteer">FRIVILLIG</RouterLink>
          <RouterLink to="/membership">MEDLEMSKAB</RouterLink>
          <!--<RouterLink to="/admin">ADMIN</RouterLink>-->
          <!--<RouterLink to="/register">REGISTER</RouterLink>-->
          <!--<RouterLink to="/sign-in">LOGIN</RouterLink>-->
          <button class="log-out-btn" @click="handleSignOut" v-if="isLoggedIn">LOG UD</button>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />

<!--footer -->

<div class="footer d-flex flex-column align-items-center">
  <div class="col-10">
    <div>
      <!-- Begin Mailchimp Signup Form -->
      <div id="mc_embed_signup" class="">
          <form action="https://gmail.us11.list-manage.com/subscribe/post?u=123d7e5a3eab6ce581403b28d&amp;id=be82a48b18&amp;f_id=002eb8e0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_self">
              <div id="mc_embed_signup_scroll">
              <h3>Tilmeld Nyhedsbrev</h3>
              <div class="indicates-required mailchimp-text"><span class="asterisk">*</span> indicates required</div>
      <div class="mc-field-group">
        <label class="mailchimp-text" for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
      </label>
        <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" required>
        <span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>
      </div>
        <div id="mce-responses" class="clear foot">
          <div class="response" id="mce-error-response" style="display:none"></div>
          <div class="response" id="mce-success-response" style="display:none"></div>
        </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
          <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_123d7e5a3eab6ce581403b28d_be82a48b18" tabindex="-1" value=""></div>
              <div class="optionalParent">
                  <div class="clear foot">
                      <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="mailchimp-btn">
                  </div>
              </div>
          </div>
      </form>
      </div>

      <!--End mc_embed_signup-->
    </div>
    <div class="d-flex flex-column justify-content-center">
      <p class="text-center" style="margin-top: 1rem;">COPYRIGHT ©KANTEN 2022</p>
    </div>
  </div>

</div>

</template>

<script setup>
import { onMounted, ref } from "vue";

import { 
  collection, onSnapshot, 
  addDoc, doc, deleteDoc, updateDoc,
  query, orderBy, limit
} from 'firebase/firestore';
import { db } from '@/firebase';

//Log-in

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

</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  justify-content: space-between;
  padding: 0;

  position: absolute;
  z-index: 1;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: auto;
  font-size: 12px;
  text-align: center;

  font-family: "brother-1816", sans-serif;
  font-weight: 900;
  font-style: normal;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a {
  display: inline-block;
  padding: 0 1rem;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    width: 100%;
    font-size: 16px;
    display: flex;
    place-items: center;
  }

  .logo {
    margin: 1rem 2rem 0 2rem;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: flex-end;
    font-size: 1rem;
  }

  nav a {
    display: inline-block;
    padding: 0 2rem;
  }

  nav a.router-link-exact-active {
  color: var(--vt-c-grey);
  background-color: var(--vt-c-white-soft);
}


}

.log-out-btn {
  width: auto;
  font-size: 1.4rem;
  text-align: center;

  display: inline-block;
  padding: 0 2rem;
  background-color: transparent;
  color: var(--vt-c-white-soft);
}

.log-out-btn:hover{
  color: var(--vt-c-purple);
}

.footer {
  background-color: var(--vt-c-purple);
}

.mailchimp-text {
  color: var(--vt-c-white-soft);
}

.required {
  background-color: var(--vt-c-white-soft);
}

.mailchimp-btn {
  background-color: var(--vt-c-white-soft);
  color: var(--vt-c-black);
}

</style>