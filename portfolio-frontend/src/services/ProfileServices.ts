import api from "./api";

export const ProfileServices = {
    getProfile: async () => {
        try {
            const result = await api.get('/profile/')
            return result
        } catch (error) {
            console.log(error)
            throw error
        }
    }
}
