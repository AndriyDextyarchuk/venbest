import React from 'react'
import {useSelector} from 'react-redux'

import classes from './UserList.module.css'

export function UserList() {
    const users = useSelector(state => state.searchUser)

    return (
        <section className={classes.container}>
            {users.map(user => 
                <article key={`${user.lastname}-${user.age}`} className={classes.card}>
                    <h4 className={classes.header}>{user.name} {user.lastname}</h4>
                    <hr/>
                    <div className={classes.info}>
                        <span>Возраст: {user.age}</span>
                        <span>Пол: {user.sex === 'f' ? 'Женский' : 'Мужской'}</span>
                    </div>
                </article>
            )}
        </section>
    )
}