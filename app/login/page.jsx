"use client"

import axios from "axios"
import { useState } from 'react'
import { useRouter } from "next/navigation"
import styles from "../page.module.css"

export default function FormularioLogin({setLogeado, cargando, setCargando})
{
    const [error, setError] = useState(false)

    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    });
    
    const router = useRouter();

    const handleSubmit = async (e) => {

        e.preventDefault()

        console.log('submit')

        setCargando(true)
        console.log('cargando...')

        try
        {
            const res = await axios.post("/api/auth/login", credentials);

            router.push("/dashboard");
            console.log(res)

            setLogeado([credentials.email, true])
            setCargando(false)
            setError(false)
            console.log('sesion iniciada!')
        }
        catch(error)
        {
            console.error(error)
            setError(true)
            setCargando(false)
            router.push("/")
        }

        /* if (res.status === 200)
        {
            router.push("/dashboard");
            console.log(res)
        }*/
    }

    return (
        <>
          <form className={styles.formulario} onSubmit={handleSubmit}>
            
            <h1 className={styles.h1}>Iniciar Sesión</h1>

            <input
                className={styles.input}
                type="email"
                name="email"
                placeholder="email"
                onChange={(e) => setCredentials({...credentials, email: e.target.value})}
            />
            
            <input
                className={styles.input}
                type="password"
                name="password"
                placeholder="password"
                onChange={(e) => setCredentials({...credentials, password: e.target.value,})}
            />

            {error && <span className={styles.msgError}>Error invalid user or password</span>}
            {!cargando && <button className={styles.button}>Iniciar Sesión</button>}
            {cargando && <span className={styles.loader}></span>}
          </form>
        </>
    )
}
