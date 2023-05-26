import axiosInstance from "./axiosInstance";

//get all agents
export function getAllAgents() {
    axiosInstance.get('/getAllAgents');
}

//get agent by its ID
export function getAgentById(id){
    axiosInstance.get(`/getAgent/${id}`);
}

//add an agent by its ID
export function addAgent(){
    axiosInstance.post('/addAgent');
}

//delete an agent by id
export function deleteAgent(id) {
    axiosInstance.delete(`/deleteAgent/${id}`);
}

//update an agent by its id
export function updateAgent(id){
    axiosInstance.put(`/updateAgent/${id}`);
}