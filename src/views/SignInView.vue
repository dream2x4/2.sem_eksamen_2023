<template>
    <!-- Card -->
    <div class="d-flex justify-content-center align-items-center" style="height: 100vh;">
        <div class="card-box col-10 col-sm-6 col-md-4 flex-column d-flex justify-content-center" style="height: fit-content; padding: 2rem;">
            <h2>ADMIN</h2>
            <p><input type="text" placeholder="Email" v-model="email"/></p>
            <p style="margin-bottom: 2rem;"><input type="password" placeholder="Password" v-model="password"/></p>
            <p v-if="errMsg">{{  errMsg }}</p>
            <p class="mb-0"><button @click="register">LOG IND</button></p>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

//Sign In

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router' //import router
const email = ref("");
const password = ref("");
const errMsg = ref() //ERROR MESSAGE
const router = useRouter() //get a reference to our vue router

const register = () => {
    //need .value because ref()
    const auth = getAuth() //from firebase/auth
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((data) => {
            console.log("Sucessfully signed in!");
            router.push('/admin') // redirect to the admin
        })
        .catch((error) => {
            console.log(error.code);
            switch (error.code) {
                case "auth/invalid-email":
                    errMsg.value = "Invalid email";
                    break;
                case "auth/user-not-found":
                    errMsg.value = "No account with that email was found";
                    break;
                case "auth/wrong-password":
                    errMsg.value = "Incorrect password";
                    break;
                default:
                    errMsg.value = "Email or password was incorrect";
                    break;
            }
        });
};
</script>