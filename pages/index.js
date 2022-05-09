import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results';
import request from '../utils/request';

export default function Home({ results }) {
  return (
    <>
      <Header />
      <Nav />
      <Results results={results.results}/>
    </>
  );
}

export async function getServerSideProps(context){
  const { query } = context
  const  genre  = context.query.genre
  const response = await fetch(`https://api.themoviedb.org/3/${request.fetchTrending.url}`)
  const data = await response.json()

  return{
    props:{
      results: data
    }
  }
}
