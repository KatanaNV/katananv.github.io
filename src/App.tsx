import React, { useState, useEffect, useRef } from 'react';
import { Github, Instagram, Mail, MessageSquare, Code2, FolderGit2, User, Terminal } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [scrollY, setScrollY] = useState(0);
  const introRef = useRef(null);

  const skills = [
    { name: 'Javascript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', invert: false },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', invert: true },
    { name: 'HTML/CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', invert: false },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', invert: true }
  ];

  const additionalSkills = [
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', invert: false },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', invert: false },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', invert: false }
  ];

  const projects = [
    {
      title: "Neverland",
      video: "https://i.imgur.com/6yQe9AD.mp4",
      link: "https://theneverland.xyz"
    },
    {
      title: "The Zero Day",
      video: "https://i.imgur.com/EyPDfoG.mp4",
      link: "https://exemplo1k.netlify.app"
    }
  ];

  const socials = [
    { icon: Github, link: 'https://github.com/KatanaNV', label: 'Github' },
    { icon: Instagram, link: 'https://www.instagram.com/katanaz70/', label: 'Instagram' },
    { icon: MessageSquare, link: 'https://t.me/katanaz70', label: 'Telegram' },
    { icon: Mail, link: 'mailto:katana@theneverland.xyz', label: 'Email' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const sections = ['about', 'skills', 'projects'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(section);
  };

  return (
    <div className="min-h-screen bg-black text-white font-mono flex flex-col crt">
      <div className="noise" />
      <header className={`fixed top-0 w-full bg-black/95 border-b border-white/5 z-50 backdrop-blur-sm transition-all duration-300 ${scrollY > 50 ? 'py-2' : 'py-4'}`}>
        <div className="container mx-auto px-4 flex justify-center items-center">
          <nav className="flex gap-8">
            {['about', 'skills', 'projects'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`uppercase text-sm tracking-[0.3em] hover:text-white transition-all nav-link
                  ${activeSection === section ? 'text-white vintage-glow active' : 'text-gray-600'}`}
              >
                {section}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-1 pt-20 scanline">
        <section ref={introRef} className="min-h-screen flex items-center justify-center py-16 px-4">
          <div className="container mx-auto max-w-3xl">
            <div className="flex flex-col items-center text-center space-y-10">
              <div className="relative w-44 h-44 animate-float-slow">
                <div className="absolute inset-0 rounded-full border border-white/5 animate-pulse"></div>
                <img
                  src="https://i.imgur.com/I5p2Zhd.png"
                  alt="Katana"
                  className="w-full h-full object-cover rounded-full border-2 border-white/5 retro-filter"
                />
              </div>
              
              <div className="space-y-6 animate-float">
                <div className="flex items-center justify-center gap-3 vintage-glow">
                  <h1 className="text-4xl font-bold tracking-[0.3em] uppercase">KATANA_</h1>
                </div>
                <p className="text-xl tracking-[0.2em] text-gray-300">
                  Investigador Digital & Desenvolvedor Front-end
                </p>
                <div className="inline-block vintage-border px-6 py-3 rounded-full bg-black/50">
                  <code className="text-gray-400">$ investigating cybercrime since 2018</code>
                </div>
              </div>

              <div className="flex gap-8 animate-float-fast">
                {socials.map(({ icon: Icon, link, label }) => (
                  <a
                    key={label}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-white transition-all transform hover:scale-110 hover:rotate-3 p-2"
                    aria-label={label}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="min-h-screen flex items-center justify-center py-16 px-4" id="about">
          <div className="container mx-auto max-w-3xl">
            <div className="flex items-center gap-3 mb-12 justify-center vintage-glow">
              <User className="w-6 h-6" />
              <h2 className="text-2xl font-bold tracking-[0.2em] uppercase">Sobre Mim</h2>
            </div>
            <div className="grid gap-8 text-base leading-relaxed">
              <div className="vintage-border rounded-lg p-8 animate-float bg-black/50">
                <p className="text-gray-300">
                  Meu nome é Katana. Sou programador, administrador da Neverland e fundador da Killsec, 
                  dois grupos voltados à investigação cibernética, tendo contribuído para diversas prisões 
                  de cibercriminosos sujos no Brasil. Comecei a investigar aos 12 anos, numa época em que 
                  plataformas como o Discord ainda estavam em crescimento.
                </p>
              </div>
              <div className="vintage-border rounded-lg p-8 animate-float-fast bg-black/50">
                <p className="text-gray-300">
                  Com o tempo, passei a estudar programação de forma intensa, buscando criar ferramentas 
                  que apoiassem o trabalho do meu grupo. Hoje continuo nessa missão, atuando tanto no 
                  back-end quanto, principalmente, no front-end. Neste ano, decidi começar a oferecer 
                  meus serviços como desenvolvedor, com foco na área que mais domino: o front-end.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="min-h-screen flex items-center justify-center py-16 px-4" id="skills">
          <div className="container mx-auto max-w-3xl">
            <div className="flex items-center gap-3 mb-12 justify-center vintage-glow">
              <Terminal className="w-6 h-6" />
              <h2 className="text-2xl font-bold tracking-[0.2em] uppercase">Habilidades</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center mb-12">
              {skills.map((skill) => (
                <div 
                  key={skill.name} 
                  className="flex flex-col items-center gap-4 p-6 animate-float-random vintage-border rounded-lg 
                          hover:border-white/10 transition-all bg-black/50 w-full hover:transform hover:scale-105"
                >
                  <img 
                    src={skill.icon} 
                    alt={skill.name}
                    className={`w-12 h-12 ${skill.invert ? 'invert brightness-0' : ''} retro-filter`}
                  />
                  <span className="font-mono text-sm tracking-wider text-gray-400">{skill.name}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-8">
              {additionalSkills.map((skill) => (
                <div 
                  key={skill.name} 
                  className="flex flex-col items-center gap-4 p-6 animate-float-random vintage-border rounded-lg 
                          hover:border-white/10 transition-all bg-black/50 w-[200px] hover:transform hover:scale-105"
                >
                  <img 
                    src={skill.icon} 
                    alt={skill.name}
                    className={`w-12 h-12 ${skill.invert ? 'invert brightness-0' : ''} retro-filter`}
                  />
                  <span className="font-mono text-sm tracking-wider text-gray-400">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="min-h-screen flex items-center justify-center py-16 px-4" id="projects">
          <div className="container mx-auto max-w-5xl">
            <div className="flex items-center gap-3 mb-12 justify-center vintage-glow">
              <FolderGit2 className="w-6 h-6" />
              <h2 className="text-2xl font-bold tracking-[0.2em] uppercase">Projetos</h2>
            </div>
            <div className="flex flex-col gap-16">
              {projects.map((project, index) => (
                <a
                  key={index}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vintage-border rounded-lg p-8 bg-black/50
                          transition-all duration-300 transform hover:scale-105 group"
                >
                  <div className="flex flex-col items-center gap-6">
                    <video
                      src={project.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full aspect-video object-contain rounded-lg vintage-border group-hover:border-white/20"
                    />
                    <h3 className="text-2xl font-semibold tracking-wider text-gray-300 group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 px-4 border-t border-white/5">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Katana. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;