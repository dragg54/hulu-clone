const API_KEY= '04c35731a5ee918f014970082a0088b1';

export  default{
    fetchTrending:{
        title:'Trending',
        url:`/trending/all/week?api_key=${API_KEY}&language=en-us`
    },
    fetchActionMovies:{
        title:"Action",
        url:`/discover/movie?api_keys=${API_KEY}&with_genres=35`
    },
    fetchHorrorMovies:{
        title:"Horror",
        url:`/discover/movie?api_keys=${API_KEY}&with_genres=27`
    },
    fetchRomanceMovies:{
        title:"Romance",
        url:`/discover/movie?api_keys=${API_KEY}&with_genres=10749`
    },
    fetchMysteryMovies:{
        title:"Mystery",
        url:`/discover/movie?api_keys=${API_KEY}&with_genres=9648`
    },
    fetchActionSciFi:{
        title:"Sci-Fi",
        url:`/discover/movie?api_keys=${API_KEY}&with_genres=37`
    },
    fetchAnimations:{
        title:"Animation",
        url:`/discover/movie?api_keys=${API_KEY}&with_genres=16`
    },
    fetchTv:{
        title:"Tv Movies",
        url:`/discover/movie?api_keys=${API_KEY}&with_genres=10770`
    }

}