import { LINK_GROUPS } from "./data";
import { ICONS } from "./Icons";
import Defs from "./Defs";
import Garland from "./Garland";
import Confetti from "./Confetti";
import Medallion from "./Medallion";
import Ribbon from "./Ribbon";
import skull from "./assets/calavera.webp";
import altar from "./assets/altar.webp";
import "./App.css";

export default function App() {
  return (
    <div className="page">
      <Defs />
      <main className="frame">
        <div className="panel">
          <Garland />
          <Confetti />

          <div className="inner">
            <Medallion skull={skull} />
            <Ribbon />

            <p className="sub">¡No te rajes!</p>
            <p className="pill">Gastro Bar</p>

            {LINK_GROUPS.map((group) => (
              <section key={group.label} className="group">
                <h2 className="group-label">{group.label}</h2>
                <ul className="links">
                  {group.links.map((link) => {
                    const { Icon, className } = ICONS[link.icon];
                    return (
                      <li key={link.title}>
                        <a className="btn" href={link.url} target="_blank" rel="noopener noreferrer">
                          <span className={className} aria-hidden="true">
                            <Icon />
                          </span>
                          <span className="btn-label">{link.title}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </section>
            ))}
          </div>

          <img className="altar" src={altar} alt="Altar de ofrenda con cempasúchil, velas y comida" />
        </div>
      </main>
    </div>
  );
}
