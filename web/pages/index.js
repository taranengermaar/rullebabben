import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <h1 className={styles.heading1}>Rullebabben</h1>
      <h2 className={styles.heading2}>dette er undertekst</h2>
      <img src="/kebab1.jpeg" />
    </div>
  );
}
