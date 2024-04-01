"use client"

import Image from "next/image"
import './globals.css'
import styles from "./page.module.css"
import FormularioLogin from "./login/page"
import { useState } from 'react'

export default function Home()
{
  const [logeado, setLogeado] = useState(['', false])
  const [cargando, setCargando] = useState(false)

  return (
    <main className={styles.main}>
      <>
        <h1 className={styles.h1}>Home Page</h1>

        {
          !logeado[1]
            ? <FormularioLogin setLogeado={setLogeado} cargando={cargando} setCargando={setCargando}/>
            : <p>Iniciando sesión...</p>
        }
      </>
    </main>
  );
}
