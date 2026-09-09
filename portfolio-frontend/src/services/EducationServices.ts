import api from "./api";

const EducationServices = {
    getEducation: async() =>{
        try {
            const result = await api.get('/education/')
            return result
        } catch (error) {
            console.log(error)
            throw error
        }
    }

}

export default EducationServices;