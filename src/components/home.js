import './sass/home.scss';
function Home() {
  return (
    <section className="home">
      <div className="hs1 mt-5">
        <h1>Hi, my name is</h1>
      </div>
      <div className="hs2">
        <h2 className="big-heading">Christian Lopez.</h2>
      </div>
      <div className="hs3">
        <h3 className="big-heading">Web Developer</h3>
      </div>
      <div className="hs4">
        <p>
          I like building things for the web. This is the only thing that keeps
          me going. I currently work at Deloitte. as an ABAP Developer.
        </p>
        <a href="#about" className="more mt-5">
          More
        </a>
      </div>
    </section>
  );
}
export default Home;
