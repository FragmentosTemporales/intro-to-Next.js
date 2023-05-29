import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hola, mi nombre es Cristian Rivera. Soy un programador Fullstack, Mis
          herramientas favoritas son: React, Python y Next.js. Puedes ver mi
          perfil de Github <a href="https://github.com/FragmentosTemporales">aquí.</a>
        </p>
      </section>
      <Link href="/posts/first-post">First Post</Link>
    </Layout>
  );
}
