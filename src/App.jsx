import Logo, { Mark } from "./components/Logo.jsx";
import Icon from "./components/Icon.jsx";
import MobileMenu from "./components/MobileMenu.jsx";
import {
  brand, nav, hero, clients, risks, services, expertise, badges, products, projects,
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
          <MobileMenu links={nav} phone={brand.phone} phoneHref={brand.phoneHref} ctaHref="#estimate" ctaLabel="Get a Free Inspection" />
          <Logo />
          <nav className="primary" aria-label="Primary">
            {nav.map((n) => (
              <a key={n.href} href={n.href} aria-current={n.current ? "page" : undefined}>{n.label}</a>
            ))}
          </nav>
          <div className="header-cta">
            <a className="phone" href={brand.phoneHref}>{brand.phone}</a>
            <Btn href="#estimate">Get a Free Inspection</Btn>
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
          <Btn href="#estimate">Get a Quick Estimate <Icon name="arrow" size={18} /></Btn>
          <Btn href="#projects" kind="ghost"><Icon name="play" size={18} /> View a Construction Plan</Btn>
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
              <a href="#estimate">Learn more →</a>
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
          <p className="eyebrow">Certified Expertise</p>
          <h2>{brand.short} is certified in the following commercial roofing projects:</h2>
          <div className="photo wide">
            <img src="/img/expertise-metal-roof.jpg" alt="Rooftop ventilation units on a corrugated metal commercial roof" loading="lazy" />
          </div>
        </div>
        <ol className="steps">
          {expertise.map((e) => (
            <li key={e.title}><div><h3>{e.title}</h3><p>{e.body}</p></div></li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Badges() {
  return (
    <section className="badges band" id="certified">
      <div className="bg" aria-hidden="true"><img src="/img/certified-bg-aerial.jpg" alt="" loading="lazy" /></div>
      <div className="wrap">
        <p className="eyebrow">Manufacturer certifications</p>
        <h2 className="h2-tight">{brand.short} is certified in the following commercial roofing products:</h2>
        <div className="badge-grid">
          {badges.map((b) => (
            <div className="badge" key={b.label}><div className="seal">{b.seal}</div><b>{b.label}</b></div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section className="band">
      <div className="wrap products">
        {products.map((p) => (
          <article className="prod" key={p.title}>
            <div className="photo"><img src={p.img} alt={p.alt} loading="lazy" /></div>
            <div className="copy">
              <p className="eyebrow">{p.eyebrow}</p>
              <h3>{p.title}</h3>
              {p.paras.map((t, i) => <p key={i}>{t}</p>)}
              {p.link && <p><a href={p.link.href} target="_blank" rel="noopener">{p.link.label}</a></p>}
            </div>
          </article>
        ))}
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
        <div className="ctas">
          <Btn href="#estimate">Get a Quick Estimate <Icon name="arrow" size={18} /></Btn>
          <Btn href="#projects" kind="ghost"><Icon name="play" size={18} /> View a Construction Plan</Btn>
        </div>
        <div className="gallery">
          {projects.map((p) => (
            <figure key={p.img}><img src={p.img} alt="" loading="lazy" /><figcaption>{p.caption}</figcaption></figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="final band" id="estimate">
      <div className="bg" aria-hidden="true"><img src="/img/cta-bg-skyline.jpg" alt="" loading="lazy" /></div>
      <div className="wrap">
        <Mark size={72} ink="#fff" accent="var(--peach)" />
        <h2>Give us a call today to request your FREE Roof Inspection and Estimate!</h2>
        <h3>We guarantee a quality product and excellent customer experience.</h3>
        <a className="phone big" href={brand.phoneHref}>{brand.phone}</a>
        <Btn href={brand.phoneHref} kind="ink">Get a Quote <Icon name="arrow" size={18} /></Btn>
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
        <Badges />
        <Products />
        <Projects />
        <FinalCTA />
      </main>
    </>
  );
}
