import api from "./api";


const ProjectsService = {
    getProjects: async () =>{
        try {
            const response  = await api.get('/projects/')
            return response
        } catch (error) {
            console.log(error)
            throw error
        }
    }
}


export default ProjectsService;