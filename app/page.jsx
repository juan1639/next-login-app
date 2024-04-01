"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { FormularioLogin } from "./login/page";
import { Bienvenido } from './welcome/page'
import { useState } from 'react'

export default function Home()
{
  const [logeado, setLogeado] = useState(['', false])
  const [cargando, setCargando] = useState(false)

  return (
    <main className={styles.main}>
      <>
        <h1>Home Page</h1>

        {
          !logeado[1]
            ? <FormularioLogin setLogeado={setLogeado} cargando={cargando} setCargando={setCargando}/>
            : <Bienvenido logeado={logeado} setLogeado={setLogeado} cargando ={cargando} setCargando={setCargando}/>
            // <p>bienvenido</p>
        }
      </>

    </main>
  );
}
