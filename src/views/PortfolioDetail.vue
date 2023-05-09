<template>
    <div>
        Details
        test : {{ id }}
        <button @click="goBack()">Back</button>

        <div class="portfolio-item-container">
        <div v-if="portfolioDetails" class="portfolio-item">
            <p class="p-category" :class="portfolioDetails.category">{{ portfolioDetails.category }}</p>
            <h2>{{ portfolioDetails.title }}</h2>
            <p>{{ portfolioDetails.description }}</p>
            <a href="https://www.google.com">LinkedIn</a>
            <a :href="portfolioDetails.link"></a>
            <img :src="portfolioDetails.image" alt="">
            <span>{{ portfolioDetails.teammembers}}</span>
        </div>

        <div v-else>...loading</div>

        </div>

    </div>
</template>

<script setup>
import { toRefs, computed } from 'vue'
import portfoliodb from '../modules/portfoliodb'
import { useRouter } from 'vue-router';

const router = useRouter()

const goBack = () => {
    router.go(-1)
}

const { state } = portfoliodb()

const props = defineProps({
    id: String
})

const { id } = toRefs(props)

const portfolioDetails = computed(
    () => {
       return state.value.find(item => item.id == id.value)
    }
)

</script>


<style scoped>
.portfolio-item-container {
    display: flex;
    justify-content: center;
}

.portfolio-item {
    margin: 12px;
    padding: 12px;
    border:2px solid #ededed;
    display: flex;
    flex-direction: column;
}

.p-category {
    font-weight: 700;
    text-transform: uppercase;
}

.Web {
    color: #e17821;
    border-left: 1px solid #e17821;
}

.Video {
    color: #3fc914;
    border-left: 1px solid #3fc914;
}
</style>