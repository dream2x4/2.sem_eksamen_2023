import { ref } from 'vue'

const getPortfolio = () => {
    const state = ref ([
        {
            id: 1,
            title: 'Portfolio 1',
            description: 'Ting',
            image: 'https://picsum.photos/200/300',
            link: 'https://www.google.com',
            category: 'Web',
            tech: 'Vue, Tailwind, Firebase',
            teammembers: ["d", "d"]
        },
        {
            id: 2,
            title: 'Portfolio 2',
            description: 'Ting',
            image: 'https://picsum.photos/200/300',
            link: 'https://www.google.com',
            category: 'Video',
            tech: 'Adobe AfterEffects, PremierePro'
        },
    ])

    return {
        state
    }
}

export default getPortfolio