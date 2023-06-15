import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Grid from '@/components/Grid'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [username, setUserName] = useState<string>('valeriopinsone');
  const [year, setYear] = useState<string>(String(new Date().getFullYear()));
  const [partUsername, setPartUsername] = useState<string>('valeriopinsone');
  const [partYear, setPartYear] = useState<string>(String(new Date().getFullYear()));
  const [button, setButton] = useState<boolean>(false);

  useEffect(() => {
    setUserName(partUsername);
    setYear(partYear);
  }, []);
  useEffect(() => {
    if (button) {
      console.log('button clicked');
    }
  }, [button]);

  const handleButtonClick = () => {
    setButton(!button);
    setUserName(partUsername);
    setYear(partYear);
  };

  return (
    <>
      <Head>
        <title>GitHub Contributions Wall</title>
        <meta name="description" content="github contribution wall" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.inputBox}>
        <input
          className={styles.userInput}
          type="text"
          value={partUsername}
          onChange={(e) => setPartUsername(e.target.value)}
        />
        <input
          className={styles.yearInput}
          type="text"
          value={partYear}
          onChange={(e) => setPartYear(e.target.value)}
        />
        <button className={styles.refreshButton} onClick={handleButtonClick}>
          Aggiorna
        </button>
      </div>

      <main className={styles.main}>
        <Grid username={username} year={year} />
      </main>
    </>
  )
}
