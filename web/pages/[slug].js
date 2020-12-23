import styles from "../styles/Home.module.css";
import { sanityClient, PortableText } from "../sanity";
export default function BlogPost(props) {
  console.log(props);
  return (
    <div className={styles.main}>
      <h1 className={styles.heading1}>{props?.post?.title}</h1>
      <ul>
        {props.post.authors.map(function (author) {
          return (
            <li>
              {author.name}
              <img src={author.photo.asset.url} width={50} />
            </li>
          );
        })}
      </ul>
      <ul>
        {props.post.kebabreference.map(function (kebab) {
          return (
            <li>
              <a
                className={styles.link}
                href={`/anmeldelser/${kebab?.slug?.current}`}
              >
                {" "}
                {kebab.title}
              </a>
            </li>
          );
        })}
      </ul>
      <PortableText blocks={props?.post?.body} />
      <pre>{JSON.stringify(props, null, 2)}</pre>
      <a className={styles.link} href="/blogg">
        Se alle poster
      </a>
    </div>
  );
}
export async function getServerSideProps(props) {
  const slug = props.query.slug;
  const post = await sanityClient.fetch(
    `*[_type == 'post'&& slug.current == $slug][0]{
title, body, kebabreference[]->, ..., authors[]->{name, photo{asset->{url}}}
    }`,
    { slug }
  );
  //console.log(data);
  return { props: { post } };
}
