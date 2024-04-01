import { useState } from 'react'
import styles from "../page.module.css";

export const Bienvenido = ({logeado, setLogeado, cargando, setCargando}) => {

    const handleLogout = () => {

        if (cargando) return

        setCargando(true)
        console.log('cerrando la sesion...')

        setTimeout(() => {
            setCargando(false)
            console.log('sesion cerrada')
            setLogeado(['', false])
        }, 1800)
    }

    return (
        <>
            <div className={styles.formulario}>

                <h1>Sesion Iniciada</h1>
                <h1 className={styles.msgBienvenida}>Bienvenido {logeado}</h1>

                <span className={styles.avatar}>
                    <section className={styles.cara}>
                        <span className={styles.ojos}></span>
                        <span className={styles.ojos}></span>
                    </section>

                    <section className={styles.cara}>
                        <span className={styles.boca}></span>
                    </section>
                </span>

                {!cargando && <button className={styles.button} onClick={handleLogout}>Cerrar Sesión</button>}
                {cargando && <span className={styles.loader}></span>}
            </div>
        </>
    )
}
