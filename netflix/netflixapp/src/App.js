
import './App.css';
import { Banner } from './Banner';
import requests from './Request';
import Row from './Row'

function App() {
  return (
    <div className="app">
      <Banner/>
      <Row title="NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflixOriginals} isLarge={true}/>
      <Row title="NETFLIX TRENDING" fetchUrl={requests.fetchTrending}/>
      <Row title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
      <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
      <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} />


      
    </div>
  );
}

export default App;
