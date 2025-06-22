import type {ICharacter} from "../../type.ts";
import "./Card.css"

const Card = ({character}: { character: ICharacter }) => {

    return (
        <article className="card">
            <div className="card-img">
                <img src={character.image} alt={"Character - " + character.name} />
            </div>
            <div className="card-info">
                <div>
                    <h2>{character.name}</h2>
                    <div>{character.gender} - {character.species}</div>
                </div>
                <div><span className="grey">Status:</span> <span className={character.status.toLowerCase()}>{character.status}</span></div>
                <div><span className="grey">Last known location:</span> <br/> {character.location.name}</div>
            </div>
        </article>
    );
};

export default Card;