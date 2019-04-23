class GetMovies {
    static getAllMovies() {
        return fetch('https://reactjs-cdp.herokuapp.com/movies').then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
}

export default GetMovies;