import { Link } from "react-router-dom";
import useFetchApi from "../../API/useFetchApi";
import "./Genres.css";

const GenresContainer = () => {
  const { genres } = useFetchApi();

  return (
    <>
      <div>
        <div>
          <h1>Música por Género</h1>
        </div>

        <div className="Btn_container">
          {genres.map((genre) => (
            <div key={genre.id}>
              <Link to={"/GenresPage"}>
                <button className="Btn-genre">{genre.name}</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GenresContainer;
