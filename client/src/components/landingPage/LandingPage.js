import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { getGames } from '../../redux/actions'
import first from '../../img/1.jpg'
import second from '../../img/2.jpg'
import third from '../../img/3.jpg'
import quarter from '../../img/4.jpg'
import fifth from '../../img/5.jpg'
import sixth from '../../img/6.jpg'
import styles from './LandingPage.module.css'

const LandingPage = ({getGames}) => {
    return (
        <div>
            <div className={styles.slider}>
                <ul>
                    <li>
                        <img src={first} alt='League of Legendes' />
                        <Link to='/videogames' className={styles.link}><span>Enter</span></Link>
                    </li>
                    <li>
                        <img src={second} alt='Call of Duty' />
                        <Link to='/videogames' className={styles.link}><span>Enter</span></Link>
                    </li>
                    <li>
                        <img src={third} alt='Grand Theft Auto' />
                        <Link to='/videogames' className={styles.link}><span>Enter</span></Link>
                    </li>
                    <li>
                        <img src={quarter} alt='UFC 3' />
                        <Link to='/videogames' className={styles.link}><span>Enter</span></Link>
                    </li>
                    <li>
                        <img src={fifth} alt='Skyrim' />
                        <Link to='/videogames' className={styles.link}><span>Enter</span></Link>
                    </li>
                    <li>
                        <img src={sixth} alt='Counter Strike' />
                        <Link to='/videogames' className={styles.link}><span>Enter</span></Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default connect(
    null,
    {getGames}
)(LandingPage);