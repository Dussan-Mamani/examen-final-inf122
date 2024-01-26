"use client"
import Image from "next/image";
import style from "./pokemon.module.css";
import { useEffect,useState } from "react";

function Pokemon (){
    const [pokemon,setpokemon]=useState("/vercel.svg");
    const [estado, setEstado]=useState("esperando");
    const [habilidad, setHabilidad] = useState("habilidad");
    const url="https://pokeapi.co/api/v2/pokemon/pikachu";
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setpokemon(data.sprites.front_default),
            setEstado(data.species.name),
            setHabilidad(data.moves[0].move.name)
            });
    },[]);
    return(
        <div className={style.contenedor}>
            <h1 className="a">My Pokemon</h1>
            <h1>{estado}</h1>
            <Image src={pokemon} height={300} width={300}/>
            <h1>{habilidad}</h1>
        </div>
    )
}

export default Pokemon;