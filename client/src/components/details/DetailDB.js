import React from 'react';
import defaultImg from '../../img/default.jpg'
import styles from './DetailDB.module.css'

const DetailDB = ({game}) => {
    return (
        <div>
            <div className={styles.card}>
                <img src={defaultImg} alt={game.name}/>
                <h2>{game.name}</h2>
                <p>This game is too new to have a valoration</p>   
                <p>Released: {game.released}</p>
                <p className={styles.description}>{game.description}</p>
                <div className={styles.platforms}>
                    {game.platforms.split(' ').map((c,i) => {
                        return <p key={i}>{c}</p>
                    })}
                </div>
            </div>
        </div>
    );
}

export default DetailDB;