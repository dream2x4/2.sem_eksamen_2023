<template>
    <!-- Card -->
    <div class="card-box col-10 col-sm-6 col-md-4 flex-column d-flex justify-content-center" style="height: fit-content; padding: 2rem;">
        <div class="col-3 flex-column d-flex justify-content-center">
            <h2>REGISTER</h2>
            <p><input type="text" placeholder="Email" v-model="email"/></p>
            <p style="margin-bottom: 2rem;"><input type="password" placeholder="Password" v-model="password"/></p>
            <p class="mb-0"><button @click="register">OPRET</button></p>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

//Register

import { 
    getAuth,
    createUserWithEmailAndPassword
} from "firebase/auth";
import { useRouter } from 'vue-router' //import router
const email = ref("");
const password = ref("");
const router = useRouter() //get a reference to our vue router

const register = () => {
    //need .value because ref()
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) => {
            console.log("Sucessfully registered!");
            router.push('/admin') // redirect to the feed
        })
        .catch((error) => {
            console.log(error.code);
            alert(error.message);
        });
};
</script>