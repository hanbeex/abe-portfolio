export default function About() {
  return <section id="about" className="section-space border-t border-white/15"><div className="container-site grid items-center gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
    <div className="reveal mx-auto w-full max-w-[450px] overflow-hidden rounded-[24px] bg-blush/30"><img src="/aku2.jpg" alt="Portrait of Abe Hersubagyo" loading="lazy" className="aspect-[4/5] w-full object-cover"/></div>
    <div className="reveal"><p className="section-label">About me</p><h2 className="section-title">Building systems people can count on.</h2><p className="body-copy mt-7">I'm a Backend and DevOps engineer focused on reliable APIs and smooth delivery. I work with Gin, NestJS, PostgreSQL, and real-time communication with WebSockets.</p><p className="body-copy mt-5">I also build CI/CD pipelines and deploy applications with Kubernetes, helping teams move from development to production with confidence.</p></div>
  </div></section>;
}
