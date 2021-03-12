import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'

import {UserList} from './components/UserList'
import {getUsers} from './store/rootSlice'
import {FilterBar} from './components/FilterBar'
import classes from './App.module.css';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  return (
    <main className={classes.container}>
      <FilterBar/>
      <UserList/>
    </main>
  );
}

export default App;
