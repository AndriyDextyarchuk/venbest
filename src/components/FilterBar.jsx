import React, { useState } from 'react'
import {useDispatch} from 'react-redux'

import {
    getUserByName,
    getUserByLastName,
    getUserByAge,
    getMaleUser,
    getFemaleUser
} from '../store/rootSlice'
import classes from './FilterBar.module.css'

export function FilterBar() {
    const dispatch = useDispatch()
    const [searchSettings, setSearchSettings] = useState({
        name: '',
        lastname: '',
        age: '',
        male: false,
        female: false,
    }) 

    function changeName(e) {
        setSearchSettings({
            name: e.target.value,
            lastname: '',
            age: '',
            male: false,
            female: false
        }); 
        dispatch(getUserByName(e.target.value))
    }

    function changeLastName(e) {
        setSearchSettings({
            name: '',
            lastname: e.target.value,
            age: '',
            male: false,
            female: false
        }); 
        dispatch(getUserByLastName(e.target.value))
    }

    function changeAge(e) {
        setSearchSettings({
            name: '',
            lastname: '',
            age: e.target.value,
            male: false,
            female: false
        }); 
        dispatch(getUserByAge(e.target.value))
    }

    function findMale() {
        setSearchSettings({
            name: '',
            lastname: '',
            age: '',
            male: !searchSettings.male,
            female: false
        }); 
        dispatch(getMaleUser(!searchSettings.male))
    }

    function findFemale() {
        setSearchSettings({
            name: '',
            lastname: '',
            age: '',
            male: false,
            female: !searchSettings.female
        }); 
        dispatch(getFemaleUser(!searchSettings.female))
    }

    return (
        <section className={classes.container}>
            <article className={classes.fild}>
                <label htmlFor='name' className={classes.label}>Имя</label>
                <input id='name' type="text" value={searchSettings.name}  onChange={changeName}/>
            </article>
            <article className={classes.fild}>
                <label htmlFor='lastname' className={classes.label}>Фамилия</label>
                <input id='lastname' value={searchSettings.lastname} type="text" onChange={changeLastName}/>
            </article>
            <article className={classes.fild}>
                <label htmlFor='age' className={classes.label}>Возраст</label>
                <input id='age' value={searchSettings.age} type="number" onChange={changeAge}/>
            </article>
            <article className={classes.fild}>
                <label htmlFor='sex' className={classes.label}>Пол</label>
                <div>
                    <input id='sex' type="checkbox" checked={searchSettings.male} onChange={findMale}/><span>м</span> 
                    <input type="checkbox" checked={searchSettings.female} onChange={findFemale}/><span>ж</span> 
                </div>
            </article>
        </section>
    )
}