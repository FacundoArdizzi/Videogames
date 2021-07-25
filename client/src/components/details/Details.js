import React from 'react';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import DetailDB from './DetailDB';
import DetailAPI from './DetailAPI'
import Loader from '../loader/Loader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'


const DetailedCard = () => {
    const detailedGame = useSelector(state => state.detailedGame)
    console.log(detailedGame)
    return (
        <div>
            <div>
                <div>
                    <Link to='/videogames' style={{
                        color: 'whitesmoke',
                        fontSize: '5rem',
                        position: 'absolute',
                        top: '.25rem',
                        left: '1rem',
                    }}>
                        <FontAwesomeIcon icon={ faLongArrowAltLeft } />
                    </Link>
                </div>
                {
                !detailedGame.id ? <Loader /> : detailedGame.id.length > 8 ? <DetailDB game={detailedGame} /> : 
                <DetailAPI game={detailedGame} />
                }
            </div>
        </div>
    );
}

export default DetailedCard;