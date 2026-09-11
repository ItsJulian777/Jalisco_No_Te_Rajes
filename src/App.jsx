import { LINK_GROUPS } from "./data";
import { ICONS } from "./Icons";
import Sombrero from "./Sombrero";
import { BuntingTop, BuntingBottom } from "./Bunting";
import "./App.css";

export default function App() {
  return (
    <div className="page">
      <main className="card">
        <BuntingTop />

        <div className="content">
          <Sombrero />

          <p className="logo">
            <span className="jalisco">Jalisco</span>
            <span className="gastro">Gastro Bar</span>
          </p>

          <p className="motto">¡No te rajes!</p>

          {LINK_GROUPS.map((group) => (
            <section key={group.label}>
              <h2 className="group-label">{group.label}</h2>
              <ul className="links">
                {group.links.map((link) => {
                  const { Icon, className } = ICONS[link.icon];
                  return (
                    <li key={link.title}>
                      <a
                        className="btn"
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
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

          <p className="footer">Jalisco Gastro Bar</p>
        </div>

        <BuntingBottom />
      </main>
    </div>
  );
}
