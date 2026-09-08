import api from "./api";

const ExperincesServices = {

    getExperiences: async () => {
        try {
            const results = await api.get('/experience/')
            return results
        } catch (error) {
            console.log(error)
            throw (error)
        }
    }

}

export default ExperincesServices;