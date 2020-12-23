
import styles from "../styles/Home.module.css";
import { sanityClient, PortableText } from "../sanity";
export default function About(props) {
  console.log(props);
  return (
    <div className={styles.main}>
      <h1 className={styles.heading1}>{props.title}</h1>
      <PortableText blocks={props.body} />
      <a className={styles.link} href="/">
        Tilbake til forsiden
      </a>
    </div>
  );
}
export async function getStaticProps() {
  const data = await sanityClient.fetch("*[_id == 'about'][0]");
  console.log(data);
  return { props: data };
}
