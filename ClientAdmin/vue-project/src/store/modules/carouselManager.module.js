import {updateCarouselApi} from "@/api/carouselApi"

const updateCarousel = {
    state: {
        carousel: null
    },
    mutations: {
        SET_CAROUSEL(state, payload) {
            state.carousel = payload
        }
    },
    actions: {
        async updateCarousel({commit}, payload) {
            try {
                const response = await updateCarouselApi(payload)
                commit('SET_CAROUSEL', response.data)
            } catch (error) {
                console.error(error);
                
            }
        }
    },
    getters: {
        getCarousel:(state) => state.carousel
    }
}

export default updateCarousel;