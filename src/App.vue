<template>
  <header>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid p-0 d-flex align-items-start">
        <RouterLink class="logo" to="/"><img alt="" src="@/assets/img/kanten_logo.png" class="logo-img" /></RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span><img alt="" src="@/assets/img/nav-toggler-icon.png" width="30" height="30"/></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink to="/">HJEM</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/about">OM OS</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/events">EVENTS</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/volunteer">FRIVILLIG</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/membership">MEDLEMSKAB</RouterLink>
            </li>
            <li class="nav-item">
              <button class="log-out-btn" @click="handleSignOut" v-if="isLoggedIn">LOG UD</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <RouterView />

<!--footer -->

<div class="footer d-flex flex-column align-items-center">
  <div class="col-10">

    <div class="d-flex" style="gap: 1rem;">
      <div style="width: 25%;">
        <h3>KANTEN</h3>
        <p class="p-footer">Gl Novrupvej 14. 6705 Esbjerg Ø</p>
        <p class="p-footer">Tlf. +45 28 97 11 85</p>
        <p class="p-footer">E-mail: musikforeningenkanten@gmail.com</p>
      </div>

      <div class="d-flex flex-column" style="width: 25%;">
        <h3>ASSOCIEREDE</h3>
        <a href="https://www.esbjerg.dk/" class="footer-link">Esbjerg Kommune</a>
        <a href="https://www.kuuf.dk/" class="footer-link">KUUF</a>
        <a href="https://www.husetesbjerg.dk/" class="footer-link">Huset Esbjerg</a>
      </div>

      <div style="width: 25%;" class="d-flex flex-column">
        <h3>LINKS</h3>
        <RouterLink to="/" class="footer-link">Hjem</RouterLink>
        <RouterLink to="/about" class="footer-link">Om os</RouterLink>
        <RouterLink to="/events" class="footer-link">Events</RouterLink>
        <RouterLink to="/volunteer" class="footer-link">Frivillig</RouterLink>
        <RouterLink to="/membership" class="footer-link">Medlemskab</RouterLink>
      </div>

      <!-- Begin Mailchimp Signup Form -->
      <div id="mc_embed_signup" style="width: 25%;">
          <form action="https://gmail.us11.list-manage.com/subscribe/post?u=123d7e5a3eab6ce581403b28d&amp;id=be82a48b18&amp;f_id=002eb8e0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_self">
              <div id="mc_embed_signup_scroll">
              <h3>TILMELD NYHEDSBREV</h3>
              <div class="indicates-required mailchimp-text d-none"><span class="asterisk">*</span> indicates required</div>
      <div class="mc-field-group">
        <label class="mailchimp-text" for="mce-EMAIL">E-mail adresse  <span class="asterisk">*</span>
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
                      <input type="submit" value="TILMELD" name="subscribe" id="mc-embedded-subscribe" class="mailchimp-btn">
                  </div>
              </div>
          </div>
      </form>
      </div>

      <!--End mc_embed_signup-->
    </div>
    <div class="d-flex flex-column justify-content-center" style="margin: 2rem 0 1rem 0;">
      <p class="text-center p-footer" style="margin-top: 1rem;">Copyright ©Kanten 2022</p>
    </div>
  </div>

</div>

</template>

<script setup>
import { onMounted, ref } from "vue";

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

</script>

<style scoped>
header {
  width: 100%;

  position: absolute;
  z-index: 1;
}

.logo {
  display: block;
}

.logo-img {
  width: auto;
  height: 90px;
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
  color: var(--vt-c-grey);
  background-color: var(--vt-c-white-soft);
}

nav a.router-link-exact-active.logo {
  color: var(--vt-c-grey);
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 2rem;
}

nav a:first-of-type {
  border: 0;
}

.navbar-toggler {
  margin-right: 2rem;
  outline: none;
  border: none;
  color: transparent;
}

.navbar-toggler:hover {
  border: none;
  background-color: transparent;
}

.navbar-collapse {
  justify-content: end;
}

/*@media (min-width: 1024px) {

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

}*/

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

.p-footer {
  font-size: 1rem;
  margin-bottom: 0.4rem;
}

.footer {
  padding: 4rem 0 0 0;
  background-color: var(--vt-c-black);
}

.footer-link {
  font-size: 1rem;
  margin-bottom: 0.4rem;
  color: var(--vt-c-grey-light);
  width: fit-content;
}

.footer-links:hover {
  color: var(--vt-c-white-soft);
}

.mailchimp-text {
  color: var(--vt-c-grey-light);
}

.required {
  background-color: var(--vt-c-white-soft);
  border: none;
  margin-bottom: 0.4rem;
}

.required:focus, .input:focus {
  outline: none;

  color: var(--vt-c-white-grey);
}

.mailchimp-btn {
  background-color: var(--vt-c-purple);
  color: var(--vt-c-white-soft);
  font-weight: 700;
  border: none;
}

@media (max-width: 768px) {
  nav a {
    font-size: 1.2rem;
  }
}

@media (max-width: 540px) {
  
}

</style>