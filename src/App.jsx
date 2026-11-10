import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { profile, skills, projects, socials } from './data/portofolio';
export default function App() {
  return (
    <>
      <Navbar initials={profile.initials} />
      <main>
        <Hero profile={profile} />
        <About profile={profile} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Contact socials={socials} />
      </main>
      {/* Footer di LUAR <main> karena bukan konten utama */}
      <Footer name={profile.name} />
    </>
  );
}
