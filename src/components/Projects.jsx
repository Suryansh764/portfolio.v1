import React from "react";
import anvaya from "../assets/anvaya.jpg"
const PROJECTS = [
  {
    title: "Anvaya",
    desc: "A collaborative project management tool inspired by Asana, featuring kanban boards, timeline views, and automated workflow",
    img: "https://fastly.picsum.photos/id/824/600/400.jpg?hmac=6WVwERdWTrB0Ve2ENg9QvzYnQj5jMzp97aA_3a8mmmA",
    tech: ["Next.js", "TypeScript", "Firebase", "React", "DnD"],
    link: "https://anvaya-frontend-sand.vercel.app/",
    repo: "https://github.com/Suryansh764/anvaya-frontend",
  },
  {
    title: "Picasso's Gallery",
    desc: "A modern e-commerce platform with real-time inventory management, secure payment processing, and personalized recommendations.",
    img: "https://fastly.picsum.photos/id/408/600/400.jpg?hmac=pXcyt403m2oK4DktzFXGJCOxDqZa7eChZyUOso6t6s8",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "https://ecommerce-frontend-steel-two.vercel.app/",
    repo: "https://github.com/Suryansh764/ecommerce-frontend",
  },
  {
    title: "Mitra",
    desc: "An intuitive CRM system designed for lead management with pipeline visualization, automated follow-ups, and detailed analytics.",
    img: "https://fastly.picsum.photos/id/911/600/400.jpg?hmac=oQrY_NxZMPraprOrHDBCc3ppsgoEyy3k5oWrPsOb_3w",
    tech: ["React Native", "GraphQL", "PostgreSQL", "Chart.js"],
    link: "#home",
    repo: "https://github.com/you/portfolio",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section" data-animate>
        <div class="section-header">
            <span class="section-badge">Projects</span>
            <h2 class="section-title">Featured Projects</h2>
            <p class="section-subtitle">
                Building solutions that solve real-world problems
            </p>
        </div>
      <div className="container">
         
        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <article className="project-card" key={p.title}>
              <div className="project-media">
                <img src={p.img} alt={`${p.title} preview`} loading="lazy" />
              </div>
              <div className="project-body">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="tags">
                  {p.tech.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
                <div className="actions">
                  <a
  className="btn small"
  href={p.link}
  target="_blank"
  rel="noreferrer"
  style={{ borderRadius: "100px", padding: "16px 16px" }}
>
  👁️‍🗨️ Demo
</a>
                  <a className="btn ghost small" href={p.repo}   style={{ borderRadius: "100px", padding: "16px 16px" }} target="_blank" rel="noreferrer"># Code</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
