import React from 'react'

export default function Publication({donnee, liker, suppression}) {
  return (
    <div className={ donnee.liker ? 'post' : 'pub'}>
        <div>
          <h3>{donnee.titre}</h3>
          <p>{donnee.description}</p>
        </div>
        <div>
          <button onClick={()=>liker(donnee)}>{(donnee.liker) ? "Déjà Liker" : "Liker" }</button>
          <button onClick={()=>suppression(donnee.id)} className='btnDelete'>Effacé</button>
        </div>
      </div>
  )
}
