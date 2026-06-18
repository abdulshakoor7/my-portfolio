import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, Star, Code, ChevronDown, ArrowRight, Globe } from 'lucide-react';

export default function PremiumPortfolio() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
  const fetchRepos = async () => {
    try {
      const response = await fetch('https://api.github.com/users/abdulshakoor7/repos?sort=stars&per_page=20');
      const data = await response.json();
      if (Array.isArray(data)) {
        const filtered = data.filter(repo => !repo.fork).slice(0, 9);
        setRepos(filtered);
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };
  fetchRepos();
}, []);

  const getLanguageColor = (language) => {
    const colors = {
      Python: 'from-blue-500 to-blue-600',
      JavaScript: 'from-yellow-500 to-yellow-600',
      Dart: 'from-cyan-500 to-cyan-600',
      TypeScript: 'from-blue-500 to-purple-600',
      HTML: 'from-red-500 to-red-600',
      default: 'from-slate-500 to-slate-600'
    };
    return colors[language] || colors.default;
  };

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-black to-slate-950 z-0">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-lg animate-pulse">AS</div>
            <span className="font-bold text-xl hidden sm:block">Abdul Shakoor</span>
          </div>
          <div className="hidden md:flex gap-8">
            {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-slate-300 hover:text-white transition-colors duration-300 text-sm font-medium">
                {item}
              </a>
            ))}
          </div>
          <a href="#contact" className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-sm font-bold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50">
            Connect
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-5xl mx-auto text-center z-10">
          <div className="mb-8 inline-block animate-fade-in">
            <div className="px-4 py-2 bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-full text-sm text-cyan-400 font-medium">
              🚀 Full Stack Developer & AI Enthusiast
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 animate-fade-in leading-tight" style={{animationDelay: '0.2s'}}>
            Build the Future
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.4s'}}>
            I create intelligent, scalable, and beautifully designed digital solutions. Final-year IT student mastering <span className="text-blue-400 font-bold">Flutter</span>, <span className="text-purple-400 font-bold">Python</span>, and <span className="text-cyan-400 font-bold">AI</span>.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <a href="https://github.com/abdulshakoor7" target="_blank" rel="noopener noreferrer" className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              <Github size={24} /> View My Work
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
            </a>
            <a href="#contact" className="px-8 py-4 bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg font-bold text-lg hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105">
              Let's Talk
            </a>
          </div>

          <div className="animate-bounce mt-20" style={{animationDuration: '2s'}}>
            <ChevronDown className="mx-auto text-slate-500" size={32} />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 px-6 z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          {[
            { label: 'Projects Built', value: repos.length, icon: '📁' },
            { label: 'Certifications', value: '8+', icon: '🏆' },
            { label: 'Tech Stack', value: '10+', icon: '⚙️' },
            { label: 'Years Learning', value: '3+', icon: '📚' }
          ].map((stat, i) => (
            <div key={i} className="group relative p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-slate-700/50 rounded-2xl hover:border-blue-500/50 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300"></div>
              <div className="relative">
                <p className="text-4xl mb-2">{stat.icon}</p>
                <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-2">{stat.value}</p>
                <p className="text-slate-400">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-32 px-6 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-4">Featured Projects</h2>
            <p className="text-xl text-slate-400">Real-time data from GitHub • Live-updating portfolio</p>
          </div>

          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block">
                <div className="w-12 h-12 border-4 border-slate-600 border-t-blue-500 rounded-full animate-spin"></div>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {repos.map((repo, i) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHoveredProject(i)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${getLanguageColor(repo.language)} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  <div className="absolute inset-0 border border-slate-700/50 group-hover:border-blue-500/50 rounded-2xl transition-colors duration-300"></div>

                  <div className="relative h-full p-8 flex flex-col justify-between z-10">
                    <div>
                      <div className="mb-4 inline-block">
                        <Code className={`text-xl ${repo.language === 'Python' ? 'text-blue-400' : repo.language === 'Dart' ? 'text-cyan-400' : 'text-purple-400'}`} size={28} />
                      </div>
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                        {repo.name.replace(/-/g, ' ')}
                      </h3>
                      <p className="text-slate-400 line-clamp-3 text-sm">
                        {repo.description || 'Innovative project showcasing modern development practices'}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {repo.language && (
                          <span className={`px-3 py-1 bg-gradient-to-r ${getLanguageColor(repo.language)} text-white text-xs font-bold rounded-full`}>
                            {repo.language}
                          </span>
                        )}
                        {repo.topics?.slice(0, 1).map(topic => (
                          <span key={topic} className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full">
                            {topic}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                        <div className="flex items-center gap-2 text-slate-400 text-sm">
                          <Star size={16} fill="currentColor" />
                          <span>{repo.stargazers_count}</span>
                        </div>
                        <ExternalLink className="group-hover:text-blue-400 group-hover:translate-x-1 transition-all" size={20} />
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-32 px-6 z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-20">Skills & Expertise</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Frontend Development', skills: ['Flutter', 'React', 'JavaScript', 'Dart', 'Material Design', 'Responsive UI'], icon: '🎨' },
              { title: 'Backend & AI', skills: ['Python', 'Django/Flask', 'OpenAI API', 'LLMs', 'REST APIs', 'Firebase'], icon: '🤖' },
              { title: 'Tools & DevOps', skills: ['Git/GitHub', 'Linux', 'VS Code', 'SQL/PostgreSQL', 'Cybersecurity', 'System Design'], icon: '⚙️' }
            ].map((category, i) => (
              <div key={i} className="group p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-slate-700/50 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                <p className="text-4xl mb-4">{category.icon}</p>
                <h3 className="text-2xl font-bold mb-6">{category.title}</h3>
                <div className="space-y-3">
                  {category.skills.map((skill, j) => (
                    <div key={j} className="flex items-center gap-3 group/skill">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover/skill:scale-150 transition-transform"></div>
                      <span className="text-slate-300 group-hover/skill:text-white transition-colors">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="relative py-32 px-6 z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-20">Certifications</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-gradient-to-br from-blue-900/20 to-blue-950/20 backdrop-blur border border-blue-700/30 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
              <h3 className="text-2xl font-bold mb-6 text-blue-400">Google Career Certificates</h3>
              <div className="space-y-3">
                {['Foundations of Cybersecurity', 'IT Security: Defense Against Digital Dark Arts', 'Introduction to AI', 'Crash Course on Python', 'AI for App Building'].map((cert, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-slate-300">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 bg-gradient-to-br from-purple-900/20 to-purple-950/20 backdrop-blur border border-purple-700/30 rounded-2xl hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
              <h3 className="text-2xl font-bold mb-6 text-purple-400">Other Certifications</h3>
              <div className="space-y-3">
                {['CCNA Advanced (Packt)', 'Introduction to Cybersecurity (Cisco)', 'Network Technician Career Path (Cisco)', 'Mastercard Cybersecurity Virtual Experience', 'Advanced Security & Network Services'].map((cert, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-slate-300">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-6 z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">Let's Create Something Amazing</h2>
            <p className="text-xl text-slate-400">I'm always open to exciting opportunities and collaborations</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Mail, label: 'Email', value: 'shakoorb845@gmail.com', href: 'mailto:shakoorb845@gmail.com' },
              { icon: Phone, label: 'Phone', value: '+92 305 1547969', href: 'tel:+923051547969' },
              { icon: Globe, label: 'Location', value: 'Quetta, Pakistan', href: '#' }
            ].map((contact, i) => {
              const Icon = contact.icon;
              return (
                <a key={i} href={contact.href} className="group p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-slate-700/50 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                  <Icon className="text-blue-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
                  <p className="text-slate-400 text-sm mb-2">{contact.label}</p>
                  <p className="text-white font-bold group-hover:text-blue-400 transition-colors">{contact.value}</p>
                </a>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <a href="https://github.com/abdulshakoor7" target="_blank" rel="noopener noreferrer" className="group p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-slate-700/50 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
              <Github className="mb-4 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">GitHub</h3>
              <p className="text-slate-400">See all my projects and contributions</p>
            </a>

            <a href="https://linkedin.com/in/abdul-shakoor-28b441385" target="_blank" rel="noopener noreferrer" className="group p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-slate-700/50 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
              <Linkedin className="mb-4 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">LinkedIn</h3>
              <p className="text-slate-400">Connect and follow my journey</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-6 border-t border-slate-800/50 z-10">
        <div className="max-w-6xl mx-auto text-center text-slate-500 text-sm">
          <p>© 2026 Abdul Shakoor. Crafted with passion and precision. | Portfolio auto-updates from GitHub</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
