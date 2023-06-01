<template>
  <header>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid p-0 d-flex align-items-start">
        <RouterLink class="logo" to="/"><img alt="kanten_logo" src="@/assets/img/kanten_logo.png" class="logo-img" /></RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span><img alt="navbar-toggler-icon" src="@/assets/img/nav-toggler-icon.png" width="30" height="30"/></span>
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

    <div class="footer-box d-flex" style="gap: 1rem;">
      <div class="inner-footer-box">
        <h3>KANTEN</h3>
        <p class="p-footer">Gl Novrupvej 14. 6705 Esbjerg Ø</p>
        <p class="p-footer">Tlf. +45 28 97 11 85</p>
        <p class="p-footer">E-mail: musikforeningenkanten@gmail.com</p>
      </div>

      <div class="inner-footer-box d-flex flex-column">
        <h3>ASSOCIEREDE</h3>
        <a href="https://www.esbjerg.dk/" class="footer-link">Esbjerg Kommune</a>
        <a href="https://www.kuuf.dk/" class="footer-link">KUUF</a>
        <a href="https://www.husetesbjerg.dk/" class="footer-link">Huset Esbjerg</a>
      </div>

      <div class="inner-footer-box  d-flex flex-column">
        <h3>LINKS</h3>
        <RouterLink to="/" class="footer-link">Hjem</RouterLink>
        <RouterLink to="/about" class="footer-link">Om os</RouterLink>
        <RouterLink to="/events" class="footer-link">Events</RouterLink>
        <RouterLink to="/volunteer" class="footer-link">Frivillig</RouterLink>
        <RouterLink to="/membership" class="footer-link">Medlemskab</RouterLink>
      </div>

      <!-- Begin Mailchimp Signup Form -->
      <div class="inner-footer-box" id="mc_embed_signup">
          <form action="https://gmail.us11.list-manage.com/subscribe/post?u=123d7e5a3eab6ce581403b28d&amp;id=be82a48b18&amp;f_id=002eb8e0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate mailchimp" target="_self">
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
      
      <!-- Social Media Links -->
      <div>
        <h3>FØLG OS</h3>
        <div>
          <a href="https://www.facebook.com/kanten.esbjerg/" style="margin: 0 0.6rem 0.4rem 0;">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/kanten_esbjerg/" style="margin: 0 0.6rem 0.4rem 0;">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/company/kanten-esbjerg/" style="margin: 0 0.6rem 0.4rem 0;">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
            </svg>
          </a>
          <a href="https://discord.gg/fNadVHW8" style="margin-bottom: 0.4rem;">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-discord" viewBox="0 0 16 16">
              <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
            </svg>
          </a>
        </div>  
      </div>
      
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

/* Navbar */

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

/* Footer */

.p-footer {
  font-size: 1rem;
  margin-bottom: 0.4rem;
}

.footer {
  padding: 4rem 0 0 0;
  background-color: var(--vt-c-black);
}

.footer-box {
  flex-wrap: wrap;
  justify-content: space-between;
}

.inner-footer-box {
  width: 23%;
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

/* Mailchimp */

.mailchimp {
  margin-bottom: 2rem;
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

  color: var(--vt-c-black);
}

.mailchimp-btn {
  background-color: var(--vt-c-purple);
  color: var(--vt-c-white-soft);
  font-weight: 700;
  border: none;
}

/* Scale */

@media (max-width: 992px) {

  .inner-footer-box {
    width: 48%;
  }
}

@media (max-width: 768px) {
  nav a {
    font-size: 1.2rem;
  }

  .log-out-btn {
    font-size: 1.2rem;
  }

  .logo-img {
    height: 72px;
  }
}

@media (max-width: 540px) {
  .logo-img {
    height: 54px;
  }
  .footer-box {
    flex-direction: column-reverse;
  }
}

</style>