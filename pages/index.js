import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Player List | Home</title>
        <meta name="keywords" content="players"/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Welcome to the page used by the Head Coach of borregos Puebla. </p>
        <p className={styles.text}>Before game date, the Head Coach edit the player list to let his team know which players are required for the next match.</p>
        <Link href="/players/">
          <a className={styles.btn}>See Player Listing</a>
        </Link>
      </div>
    </>
  )
}
