import React from 'react';
import Card from './Card';

export default function Cards({ fotos, styles }) {
  return (
    <ul className={styles.galeria__cards}>
      {fotos.map((foto) => {
        return <Card key={fotos.id} fotos={fotos} styles={styles} />
      })}
    </ul>
  )
}
