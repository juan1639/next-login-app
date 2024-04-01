import { useState } from 'react'
import styles from "../page.module.css";

export const FormularioLogin = ({setLogeado, cargando, setCargando}) => {

    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {

        e.preventDefault()

        console.log('submit')

        if ([user, pass].includes('')) {
            setError(true)
            console.warn('error! campo vacio...')
            return
        }

        setError(false)
        setCargando(true)
        console.log('cargando...')

        setTimeout(() => {
            setLogeado([user, true])
            setCargando(false)
            console.log('sesion iniciada!')
        }, 2800)
    }

    return (
        <>
          <form
            className={styles.formulario}
            onSubmit={handleSubmit}
          >
    
            <h1>Iniciar Sesión</h1>
    
            <input 
                className={styles.input}
                type="text"
                name="usuario"
                placeholder='Usuario...'
                value={user}
                onChange={(e) => setUser(e.target.value)}
            />

            <input 
                className={styles.input}
                type="password"
                name="password"
                placeholder='Password...'
                value={pass}
                onChange={(e) => setPass(e.target.value)}
            />
    
            {error && <span className={styles.msgError}>Falta introducir usuario y/o pass</span>}
            {!cargando && <button className={styles.button}>Iniciar Sesión</button>}
            {cargando && <span className={styles.loader}></span>}
          </form>
        </>
    )
}
