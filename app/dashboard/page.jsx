"use client"

import axios from "axios"
import { useState } from "react"
import { useRouter } from "next/navigation"
import styles from "../page.module.css"

function Dashboard()
{
  const [user, setUser] = useState({
    email: "",
    username: ""
  });

  const router = useRouter()

  const getProfile = async () =>
  {
    const profile = await axios.get("/api/profile")
    setUser(profile.data)
  }

  const logout = async () =>
  {
    try
    {
        const res = await axios.get("/api/auth/logout")
        console.log(res)
    }
    catch (error)
    {
        console.error(error.message)
    }

    router.push("/")
  }

  return (
    <>
        <main className={styles.main}>
        <div className={styles.formulario}>

            <h1 className={styles.h1}>Sesion Iniciada</h1>
            <h1 className={styles.msgBienvenida}>Bienvenido {user.email}</h1>

            {/* <span className={styles.avatar}>
                <section className={styles.cara}>
                    <span className={styles.ojos}></span>
                    <span className={styles.ojos}></span>
                </section>

                <section className={styles.cara}>
                    <span className={styles.boca}></span>
                </section>
            </span> */}
            
            <span className={styles.msgBienvenida}>{JSON.stringify(user.username)}</span>
            <div className={styles.containerButtonsProfileLogout}>
                <button className={styles.button} onClick={() => getProfile()}>Profile</button>
                <button className={styles.button} onClick={() => logout()}>Logout</button>
            </div>
        </div>
        </main>
    </>
  )
}

export default Dashboard
