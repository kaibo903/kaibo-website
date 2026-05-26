import React, { useEffect } from 'react';
import { ArrowUpRight, ArrowRight, HardHat, Ruler, Building2, Map, Briefcase, Mail } from 'lucide-react';

const App = () => {
  // Reveal animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio">
      <div className="grid-bg"></div>

      {/* Navigation */}
      <nav style={{ padding: '2rem 5vw', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--grid-line)' }}>
        <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: '800', letterSpacing: '-0.05em' }}>
          J. DOE <span className="text-accent">©</span>
        </div>
        <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          <a href="#about" style={{ opacity: 0.8 }}>About</a>
          <a href="#experience" style={{ opacity: 0.8 }}>Experience</a>
          <a href="#projects" style={{ opacity: 0.8 }}>Projects</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header style={{ minHeight: '85vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 5vw', position: 'relative' }}>
        <div className="reveal">
          <p style={{ color: 'var(--accent)', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <HardHat size={20} />
            Construction Engineer & Project Manager
          </p>
          <h1 style={{ fontSize: 'clamp(4rem, 10vw, 12rem)', lineHeight: 0.9, marginBottom: '2rem', textTransform: 'uppercase' }}>
            Building<br />
            <span style={{ color: 'transparent', WebkitTextStroke: '1px var(--text-primary)' }}>The Future</span><br />
            Framework.
          </h1>
        </div>
        
        <div className="reveal delay-200" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', marginTop: '4rem', borderTop: '1px solid var(--grid-line)', paddingTop: '2rem' }}>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '500px' }}>
            專注於營建工程與專案管理。結合實務經驗與現代化管理技術，致力於打造高效、安全且具備永續發展潛力的工程項目。
          </p>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <div>
              <div style={{ fontSize: '3rem', fontFamily: 'var(--font-heading)', fontWeight: 800, color: 'var(--accent)' }}>03+</div>
              <div style={{ textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em', color: 'var(--text-secondary)' }}>Years Experience</div>
            </div>
            <div>
              <div style={{ fontSize: '3rem', fontFamily: 'var(--font-heading)', fontWeight: 800, color: 'var(--accent)' }}>12</div>
              <div style={{ textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em', color: 'var(--text-secondary)' }}>Projects Completed</div>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="section-border container">
        <h2 className="section-title reveal"><span>01</span> About Me</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div className="reveal" style={{ position: 'relative' }}>
            {/* Minimalist image frame with tech-vibe */}
            <div style={{ position: 'absolute', top: '-1rem', left: '-1rem', width: '3rem', height: '3rem', borderTop: '2px solid var(--accent)', borderLeft: '2px solid var(--accent)' }}></div>
            <div style={{ position: 'absolute', bottom: '-1rem', right: '-1rem', width: '3rem', height: '3rem', borderBottom: '2px solid var(--accent)', borderRight: '2px solid var(--accent)' }}></div>
            <img src="/S__41852945_0.jpg" alt="Profile" style={{ width: '100%', height: 'auto', filter: 'grayscale(100%) contrast(1.2)', objectFit: 'cover', aspectRatio: '4/5' }} />
          </div>
          <div className="reveal delay-200">
            <h3 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>專業與精確的執行力</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '2rem' }}>
              我是一名具備扎實營建工程背景的專業人員。在過去的學習與實習階段，我深入參與了多項指標性建案，從規劃、進度控管到現場監工，皆有豐富的實務經驗。
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '3rem' }}>
              我善於溝通協調，並能運用現代化工具（如BIM、專案排程軟體）來優化施工流程，確保工程品質與安全。
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <div>
                <Ruler className="text-accent" size={32} style={{ marginBottom: '1rem' }} />
                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>工程規劃</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>精準的數量計算與時程排程，確保資源最佳化分配。</p>
              </div>
              <div>
                <Building2 className="text-accent" size={32} style={{ marginBottom: '1rem' }} />
                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>現場監工</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>嚴格把關施工品質，落實勞工安全衛生管理。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience / Resume Section */}
      <section id="experience" className="section-border container">
        <h2 className="section-title reveal"><span>02</span> Experience</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {[
            {
              role: '現場監工實習生',
              company: '知名營造股份有限公司',
              date: '2023 - 2024',
              desc: '協助現場工程師進行進度控管、施工查驗及協力廠商協調。參與大型住宅建案，累積深厚的現場實務經驗。'
            },
            {
              role: 'BIM 模型建置助理',
              company: '工程顧問公司',
              date: '2022 - 2023',
              desc: '利用 Revit 建置建築與結構模型，協助進行碰撞檢查與數量計算，提升專案前期規劃的準確性。'
            },
            {
              role: '營建工程學系 學士',
              company: '國立科技大學',
              date: '2020 - 2024',
              desc: '主修營建管理、結構學、RC設計。曾擔任畢業專題組長，帶領團隊完成「智慧化營建排程系統」研究。'
            }
          ].map((exp, index) => (
            <div key={index} className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '2rem', padding: '3rem', background: 'var(--accent-dim)', border: '1px solid rgba(212, 255, 0, 0.2)', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(212, 255, 0, 0.1)'; e.currentTarget.style.transform = 'translateY(-5px)'; }} onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--accent-dim)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>{exp.date}</div>
                <div style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{exp.company}</div>
              </div>
              <div>
                <h3 style={{ fontSize: '2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  {exp.role}
                  <ArrowUpRight className="text-accent" />
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.8 }}>{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-border container">
        <h2 className="section-title reveal"><span>03</span> Featured Projects</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>
          {['S__41852946_0.jpg', 'S__41852947_0.jpg'].map((img, index) => (
            <div key={index} className="reveal delay-100" style={{ group: true, cursor: 'pointer' }}>
              <div style={{ overflow: 'hidden', position: 'relative', aspectRatio: '4/3', marginBottom: '1.5rem' }}>
                <img src={`/${img}`} alt={`Project ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(80%)', transition: 'all 0.5s ease' }} onMouseEnter={(e) => { e.currentTarget.style.filter = 'grayscale(0%)'; e.currentTarget.style.transform = 'scale(1.05)'; }} onMouseLeave={(e) => { e.currentTarget.style.filter = 'grayscale(80%)'; e.currentTarget.style.transform = 'scale(1)'; }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{index === 0 ? '都更住宅大樓新建工程' : '科技廠房鋼構工程'}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-heading)', letterSpacing: '0.05em', textTransform: 'uppercase', fontSize: '0.9rem' }}>現場監工 / 進度控管</p>
                </div>
                <div style={{ width: '3rem', height: '3rem', borderRadius: '50%', border: '1px solid var(--grid-line)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ArrowRight size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="section-border" style={{ paddingBottom: '2rem', borderTop: '1px solid var(--grid-line)', marginTop: '8rem' }}>
        <div className="container reveal" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(3rem, 8vw, 8rem)', marginBottom: '2rem' }}>LET'S BUILD.</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', marginBottom: '3rem' }}>
            正在尋找一位具備扎實工程背景與高度熱忱的夥伴？歡迎隨時與我聯繫。
          </p>
          <a href="mailto:hello@example.com" style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', fontSize: '1.5rem', fontWeight: 600, padding: '1.5rem 3rem', background: 'var(--accent)', color: '#000', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            <Mail /> 聯絡我
          </a>
        </div>
        <div style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8rem' }}>
          © 2026 Personal Portfolio. Designed for the Future.
        </div>
      </footer>
    </div>
  );
};

export default App;
