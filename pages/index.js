import Head from "next/head";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Main from "../components/Main";
import ProjectPage from "../components/ProjectPage";
import Projects from "../components/Projects";
export default function Home() {
  return (
    <div className="snap-y snap-mandatory h-screen w-full overflow-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-gray-800 scrollbar-thin">
      <Head>
        <title>Website</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="snap-start" id="main">
        <Header />
        <Main />
      </section>
      <section id="projects" className="snap-start">
        <Projects/>
      </section>
      <section id="contact" className="snap-start">
        <Contact />
      </section>
    </div>
  );
}

