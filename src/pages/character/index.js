import { useSearchParams } from "react-router-dom";
import "./index.css";
import { useCharacter } from "../../hooks/useCharacter";

export default function Character() {
  const { loading, error, data } = useCharacter(2);

  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    console.log("error:", error);
    return <div>error</div>;
  }
  return (
    <div className="Character">
      <img src={data.character.image} width={750} height={750} />
      <div className="Character-content">
        <h2>{data.character.name}</h2>
        <p>{data.character.gender}</p>
        <div className="Character-episode">
          {data.character.episode.map((episode) => {
            return (
              <div>
                {episode.name} - <b>{episode.episode}</b>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
