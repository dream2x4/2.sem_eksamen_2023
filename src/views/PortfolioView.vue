<template>
    <div>
        Portfolio
        <!-- {{ state }} -->
        <div class="portfolio-item-container">
        <div v-for="item in state " :key="item" class="portfolio-item">
            <p class="p-category" :class="item.category">{{ item.category }}</p>
            <RouterLink :to ="{name: 'portfoliodetails', params:{id: item.id}}" >
                <h2>{{ item.title }}</h2>
            </RouterLink>
            <p>{{ item.description }}</p>
            <a href="https://www.google.com">LinkedIn</a>
            <a :href="item.link"></a>
            <img :src="item.image" alt="">
        </div>
        </div>
    </div>
</template>

<script setup>
import portfoliodb from '../modules/portfoliodb'

const { state } = portfoliodb()

</script>

<style scoped>
.portfolio-item-container {
    display: flex;
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