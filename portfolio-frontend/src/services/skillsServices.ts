import api from "./api";


const skillsServices = {

    getSkills: async() => {
        try {
            const result = await api.get('/skills/')
            return result
        } catch (error) {
            console.log(error)
            throw error   
        }

    },
}

export default skillsServices;