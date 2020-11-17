import styles from "../../styles/Home.module.css";
import { sanityClient, PortableText } from "../../sanity";
export default function About(props) {
  console.log(props);
  return (
    <div className={styles.main}>
      <h1 className={styles.heading1}>Poster</h1>
      <ul>
        {props.posts.map(function (post) {
          return (
            <li>
              <a className={styles.link} href={`/blogg/${post.slug.current}`}>
                {" "}
                {post.title}
              </a>
            </li>
          );
        })}
      </ul>
      <a className={styles.link} href="/">
        Tilbake til forsiden
      </a>
    </div>
  );
}
export async function getStaticProps() {
  const data = await sanityClient.fetch("*[_type == 'post']");
  console.log(data);
  return { props: { posts: data } };
}
