import {useEffect, useState} from "react";
import type {ICharacter} from "../../type.ts";
import {useLocation} from "react-router";
import "./Character.css"

const Character = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [character, setCharacter] = useState<ICharacter | null>(null)
    const location = useLocation()
    const characterID = location.pathname.split("/")[2]

    useEffect(() => {
        setIsLoading(true)
        fetch(`https://rickandmortyapi.com/api/character/${characterID}`)
            .then((res) => res.json())
            .then((data: ICharacter) => {
                setCharacter(data)
            })
            .catch((err) => console.log(err))
            .finally(() => setIsLoading(false))
    }, [])

    return (
        <div className="character-wrapper">
            {isLoading ? <div>Loading...</div> :
            !character ? <div>Not found</div> :
                <div className="character">
                    <div className="character-img">
                        <img src={character.image} alt={"Character - " + character.name} />
                    </div>
                    <div className="character-info">
                        <div>
                            <h2>{character.name}</h2>
                            <div>{character.gender} - {character.species}</div>
                        </div>
                        <div><span className="grey">Status:</span> <span className={character.status.toLowerCase()}>{character.status}</span></div>
                        <div><span className="grey">Last known location:</span><br/> {character.location.name}</div>
                    </div>
                </div>
        }
        </div>
    );
};

export default Character;