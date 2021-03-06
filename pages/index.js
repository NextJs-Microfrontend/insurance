import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ul>
          <li>
            <Link href="/miniapp1">miniapp1</Link>
          </li>
          <li>
            <Link href="/miniapp2">miniapp2</Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
