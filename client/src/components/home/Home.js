import React, { useEffect } from 'react';
import NavBar from '../navBar/NavBar';
import CardsContainer from '../cardsContainer/CardsContainer'
import styles from './Home.module.css'
import SideBar from '../sideBar/SideBar'
import { useDispatch } from 'react-redux';
import { getGames } from '../../redux/actions'

const Home = () => { 
    const dispatch = useDispatch()
    useEffect(() => {
        async function bringGames () {
            const response = await dispatch(getGames())
        }
        bringGames()
    }, []) 

    return (
        <div>
            <div className={styles.navbar}>
                <NavBar />
            </div>
            <div className={styles.container}>
                <div className={styles.cards}>
                    <CardsContainer />
                </div>
                <div className={styles.side}>
                    <SideBar />
                </div>
            </div>
        </div>
    );
}

export default Home;