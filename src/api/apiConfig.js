const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/movie/550?api_key=c4a4cf638f5efdb7efddd8228a471a5d',
    apiKey: 'c4a4cf638f5efdb7efddd8228a471a5d',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;