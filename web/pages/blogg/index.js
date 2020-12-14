import styles from "../../styles/Home.module.css";
import { sanityClient, PortableText } from "../../sanity";
export default function About(props) {
  console.log(props);
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-black text-gray-900 pb-6 px-6 md:px-12">
        Poster
      </h1>
      <div className="flex flex-wrap px-6">
        {props.posts.map(function (post) {
          return (
            <div className="w-full  md:w-1/2   md:px-4 lg:px-6 py-5">
              <div className="bg-white rounded hover:shadow-xl">
                <a className={styles.link} href={`/blogg/${post.slug.current}`}>
                  <div>
                    <img
                      src={post.mainImageUrl}
                      alt=""
                      className="h-56 w-full border-white border-8 rounded hover:opacity-25"
                    />
                  </div>

                  <div class="px-4 py-4">{post.title}</div>
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <a className={styles.link} href="/">
        Tilbake til forsiden
      </a>
    </div>
  );
}
export async function getStaticProps() {
  const data = await sanityClient.fetch(
    "*[_type == 'post'] {title, slug, 'mainImageUrl':mainimage.asset->url}"
  );
  console.log(data);
  return { props: { posts: data } };
}
