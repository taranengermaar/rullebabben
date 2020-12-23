import styles from "../styles/Home.module.css";
import { sanityClient, PortableText, urlFor } from "../sanity";
export default function About(props) {
  console.log(props);
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-black text-center text-gray-900 pb-12 p-12">
        Velkommen til Rullebabben
      </h1>
      <div className="flex items-center flex-wrap px-6">
        {props.posts.map(function (post) {
          return (
            <div className="w-full md:w-96 md:px-4 lg:px-6 py-5">
              <div className="bg-white rounded hover:shadow-xl">
                <a className={styles.link} href={`/${post.slug.current}`}>
                  <div>
                    <img
                      src={urlFor(post.mainImageUrl).width(300).url()}
                      alt=""
                      className="h-56 w-full object-contain border-white border-8 rounded hover:opacity-25"
                    />
                  </div>

                  <div class="px-4 py-4">{post.title}</div>
                </a>
              </div>
            </div>
          );
        })}
      </div>
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
