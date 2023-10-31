import MovieList from "./MovieList";
import MovieSearch from "./navigation/search";
import Navigation from "./navigation/navbar";

const App = () => {
  return(
<div>
<Navigation/>
<MovieSearch/>

 <MovieList />


</div>

  )
}

export default App;