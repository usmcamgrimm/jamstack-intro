import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './index.module.css'

export default () => {
  const [status, setStatus] = useState('loading')
  const [todos, setTodos] = useState(null)

  return (
    <main>
      <h1 className={styles.heading}>JAMStack Todos</h1>
      {todos ? (
        <p>Show Todos</p>
      ) : (
        <p className={styles.loading}>Loading Todos...</p>
      )}
      ;
    </main>
  )
}
