import React, { useState } from 'react'
import './main.css'
import Publication from './Publication'
import Navbar from './Navbar';

export default function App() {
  const [post, setPost] = useState([
    {
      id: 1,
      titre: "Amani Kaso",
      description: "Voici un exemple de texte qui vient remplacer ce texte ici.",
      liker: false
    },
    {
      id: 2,
      titre: "Amani Kaso",
      description: "Voici un exemple de texte qui vient remplacer ce texte ici.",
      liker: false
    },
    {
      id: 3,
      titre: "Audy mbuyu",
      description: "Voici un exemple de texte qui vient remplacer ce texte ici.",
      liker: false
    },
    {
      id: 4,
      titre: "Jean Julien",
      description: "Voici un exemple de texte qui vient remplacer ce texte ici.",
      liker: false
    },
    {
      id: 5,
      titre: "Pierre Simon",
      description: "Voici un exemple de texte qui vient remplacer ce texte ici.",
      liker: false
    }
  ]);
  const liker = (donnee) => {
    const donneCopie = [...post];
    const index = donneCopie.indexOf(donnee);
    donneCopie[index] = {...post[index], liker: !post[index].liker};
    setPost(donneCopie);
  }
  const deletePub = (id)=>{
    const donneeNew = post.filter(p=>p.id != id);
    setPost(donneeNew);
  }
  const nombreLike = post.filter((p)=> p.liker);
  return <div className='javas'>
      <Navbar nombreLiker={nombreLike.length} />
      {
        post.map(p=> <Publication donnee={p} liker={liker} suppression={deletePub} key={p.id}/>)
      }
    </div>
}
