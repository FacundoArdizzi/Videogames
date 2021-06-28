import React, { useState } from 'react';
import styles from './Create.module.css';
import axios from 'axios'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'

const Create = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
/* ---------------------------------------------- PLATFORMS ---------------------------------------------- */
    const [selectedPlatforms, setSelectedPlatforms] = useState([])
    const handlePlatforms = (e) => {
        let data = e.target.value.split(' ')
        setSelectedPlatforms([...selectedPlatforms, {name: data[0], id: data[1]}])
    }
    const filterPlatforms = (name) => {
        setSelectedPlatforms(
            selectedPlatforms.filter(c => c.name !== name)
        )
    }
    const platforms = [
        {name: 'PlayStation', id: 1},
        {name: 'xBox', id: 2},
        {name: 'PC', id: 3},
        {name: 'iOS', id: 4},
        {name: 'Android', id: 5},
        {name: 'macOS', id: 6},
    ]
/* ---------------------------------------------- GENDERS ---------------------------------------------- */
    const [selectedGenders, setSelectedGenders] = useState([])
    const handleGenders = (e) => {
        let data = e.target.value.split(' ')
        setSelectedGenders([...selectedGenders, {name: data[0], id: data[1]}])
    }
    const filterGenders = (name) => {
        setSelectedGenders(
            selectedGenders.filter(c => c.name !== name)
        )
    }
    const genders = [
        {name: 'Action', id: 4},
        {name: 'Adventure', id: 3},
        {name: 'RPG', id: 5},
        {name: 'Strategy', id: 10},
        {name: 'Shooter', id: 2},
        {name: 'Arcade', id: 11},
        {name: 'Racing', id: 1},
        {name: 'Sports', id: 15},
        {name: 'Fighting', id: 6},
    ]
/* ---------------------------------------------- SUBMIT ---------------------------------------------- */
    const handleSubmit = async(e) => {
        let gamePlatforms = selectedPlatforms.map(c => c.name)
        let gameGenders = selectedGenders.map(c => c.id)
        const payload = [{
            name,
            description, 
            platforms: gamePlatforms.join(' '),
        }, gameGenders]
        let post = await axios.post('http://localhost:3001/videogames', payload)
        alert(post.data)
        /* if(post.data === 'Your game has been created successfuly!') e.preventDefault() */ 
    }

    const ulStyles = {
        background: 'white'
    }

    return (
        <div className={styles.form}>
            <Link to='/videogames' style={{
                color: 'whitesmoke',
                fontSize: '5rem',
                position: 'absolute',
                top: '.25rem',
                left: '1rem',
            }}>
                <FontAwesomeIcon icon={ faLongArrowAltLeft } className={styles.icon}/>
            </Link>
            <h2>Create Your Own Game</h2>
            <form>
                <h5>Name: </h5>
                <input type='text' size='50' required onChange={e=>setName(e.target.value)}/>
                <h5>Description: </h5>
                <textarea max-size='40' rows='5' col='50' required onChange={e=>setDescription(e.target.value)} />
                <div className={styles.div}>
                    <div className={styles.select}>
                        <h5>Platforms: </h5>
                        <select multiple onChange={handlePlatforms} required >
                            {platforms.map(c => <option key={c.id} value={c.name+' '+c.id}>{c.name}</option>)}
                        </select>
                    </div>
                    <ul className={styles.ul}>
                        {selectedPlatforms ? selectedPlatforms.map((c,i) => <li key={i}>{c.name}
                            <button onClick={(e) => filterPlatforms(c.name)}>x</button>
                        </li>) : null}
                    </ul>
                    <div className={styles.select}>
                        <h5>Genders: </h5>
                        <select multiple onChange={handleGenders} required >
                            {genders.map(c => <option key={c.id} value={c.name+' '+c.id}>{c.name}</option>)}
                        </select>
                    </div>
                    <ul className={styles.ul}>
                        {selectedGenders ? selectedGenders.map((c,i) => <li key={i}>{c.name}
                            <button onClick={(e) => filterGenders(c.name)}>x</button>
                        </li>) : null}
                    </ul>
                </div>
                <div className={styles.btns}>    
                    <button onClick={handleSubmit} className={styles.btnCreate}>Create</button>
                    <button type='reset' className={styles.btnReset}>Reset</button>
                </div>
            </form>
        </div>
    );
}

export default Create;