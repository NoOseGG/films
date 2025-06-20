import { useGetFilmsQuery } from "../services/filmsApi";
import "./App.css";

function App() {
  const { data, error, isLoading } = useGetFilmsQuery();

  return (
    <div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.items[0].nameRu}</h3>
          <img src={data.items[0].posterUrl} alt='poster' className='poster' />
        </>
      ) : null}
    </div>
  );
}

export default App;
