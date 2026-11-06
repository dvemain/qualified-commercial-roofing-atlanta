import Logo, { Mark } from "./components/Logo.jsx";
import Icon from "./components/Icon.jsx";
import MobileMenu from "./components/MobileMenu.jsx";
import ContactForm from "./components/ContactForm.jsx";
import {
  brand, nav, hero, clients, risks, services, expertise, restoration, projects,
} from "./content.js";

const Btn = ({ href, kind = "accent", children, ...rest }) => (
  <a className={`btn btn-${kind}`} href={href} {...rest}>{children}</a>
);

function Header() {
  return (
    <>
      <div className="topbar">
        <div className="wrap">
          <div>Serving the Greater Atlanta area from {brand.city}</div>
          <div>Financing available · Free roof inspections · <span>Licensed &amp; insured</span></div>
        </div>
      </div>
      <header className="site">
        <div className="wrap">
          <MobileMenu links={nav} phone={brand.phone} phoneHref={brand.phoneHref} ctaHref="#contact" ctaLabel="Contact Us" />
          <Logo />
          <nav className="primary" aria-label="Primary">
            {nav.map((n) => (
              <a key={n.href} href={n.href} aria-current={n.current ? "page" : undefined}>{n.label}</a>
            ))}
          </nav>
          <div className="header-cta">
            <a className="phone" href={brand.phoneHref}>{brand.phone}</a>
            <Btn href="#contact">Contact Us</Btn>
          </div>
        </div>
      </header>
    </>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-media">
        <img src={hero.image.src} alt={hero.image.alt} fetchPriority="high" />
      </div>
      <div className="wrap">
        <p className="hero-tag">{hero.tag}</p>
        <h1>{hero.title} <span>{hero.titleAccent}</span></h1>
        <p className="lede">{hero.lede}</p>
        <div className="ctas">
          <Btn href="#contact">Get a Quick Estimate <Icon name="arrow" size={18} /></Btn>
          <Btn href="#restoration" kind="ghost">Restoration vs Replacement</Btn>
        </div>
      </div>
      <div className="ridge" aria-hidden="true" />
    </section>
  );
}

function Trusted() {
  return (
    <section className="trusted" aria-label="Clients and partners">
      <div className="wrap">
        <p className="trusted-label">Trusted by property managers, general contractors and municipalities</p>
        <ul className="logos">{clients.map((c) => <li key={c}>{c}</li>)}</ul>
      </div>
    </section>
  );
}

function Language() {
  return (
    <section className="band">
      <div className="wrap split">
        <div className="stack">
          <p className="eyebrow">Who we work with</p>
          <h2>From Property Managers to GC's and Architects, we speak your language.</h2>
          <p className="muted-lede">Mistakes in your roofing project can lead to:</p>
          <ul className="risks">
            {risks.map((r) => <li key={r}><Icon name="alert" size={28} />{r}</li>)}
          </ul>
        </div>
        <div className="photo">
          <img src="/img/roofer-drill.jpg" alt="Roofer fastening a roof panel with a power drill" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="services band" id="services">
      <div className="wrap">
        <p className="eyebrow">Commercial Services</p>
        <h2 className="h2-tight">Whatever Roofing Challenge Comes Up, <b>We Handle It for You</b></h2>
        <div className="svc-grid">
          {services.map((s) => (
            <article className="svc" key={s.title}>
              <div className="svc-img"><img src={s.img} alt={s.alt} loading="lazy" /></div>
              <Icon name={s.icon} size={42} />
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <a href="#contact">Learn more →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Expertise() {
  return (
    <section className="band expertise" id="expertise">
      <div className="wrap split">
        <div className="stack sticky">
          <p className="eyebrow">Certified Experience</p>
          <h2>{expertise.title}</h2>
          <div className="photo wide">
            <img src={expertise.image.src} alt={expertise.image.alt} loading="lazy" />
          </div>
        </div>
        <ol className="steps">
          {expertise.items.map((e) => (
            <li key={e.title}><div><h3>{e.title}</h3><p>{e.body}</p></div></li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Restoration() {
  return (
    <section className="restore band" id="restoration">
      <div className="wrap">
        <p className="eyebrow">Restoration vs Replacement</p>
        <h2 className="h2-tight">{restoration.title}</h2>
        <p className="muted-lede restore-lede">{restoration.lede}</p>
        <ul className="restore-grid">
          {restoration.points.map((p) => (
            <li key={p.title}>
              <Icon name="check" size={26} />
              <div><h3>{p.title}</h3><p>{p.body}</p></div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="done band" id="projects">
      <div className="wrap">
        <p className="eyebrow">Recent work</p>
        <h2 className="h2-tight">Know that your commercial roofing <b>project is being done right</b>.</h2>
        <p className="lede">Stop worrying about your roofing projects and work with a trusted team of experts you can rely on.</p>
        <div className="gallery">
          {projects.map((p) => (
            <figure key={p.img}><img src={p.img} alt="" loading="lazy" /><figcaption>{p.caption}</figcaption></figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="final band" id="contact">
      <div className="bg" aria-hidden="true"><img src="/img/cta-bg-skyline.jpg" alt="" loading="lazy" /></div>
      <div className="wrap contact-grid">
        <div className="contact-copy">
          <Mark size={72} ink="#fff" accent="var(--peach)" />
          <h2>Request your FREE Roof Inspection and Estimate</h2>
          <h3>We guarantee a quality product and excellent customer experience.</h3>
          <p className="contact-alt">Prefer to call? <a className="phone" href={brand.phoneHref}>{brand.phone}</a></p>
        </div>
        <ContactForm formName="commercial-contact" dark idPrefix="qc" />
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Trusted />
        <Language />
        <Services />
        <Expertise />
        <Restoration />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
