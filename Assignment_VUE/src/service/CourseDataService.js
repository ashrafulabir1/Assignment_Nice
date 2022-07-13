import http from "@/http-common";

const CourseDataService =  {
    // retrieveAllCourse() {
    //     return axios.get('http://localhost:3000/courses');
    // }
    // createCourse(data) {
    //     return axios.post('http://localhost:3000/courses', data);
    // }
    // deleteCourse(id) {
    //     return axios.delete(`http://localhost:3000/courses/${id}`);
    // }
    // updateCourse(id, data) {
    //     return axios.put(`http://localhost:3030/courses/${id}`, data);
    // }



    retrieveAllCourse() {
        return http.get("/courses");
    },
    createCourse(data){
        return http.post("/courses", data);
    },

    updateCourse(id, data) {
        return http.put(`/courses/${id}`, data);
    },

    deleteCourse(id) {
        return http.delete(`/courses/${id}`);
    }
}

export default CourseDataService;