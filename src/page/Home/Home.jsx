import style from "../../style/Home.module.css";
const Home = () => {
  return (
    <header className="container">
      <section className={style.innerHeader}>
        <div className={`${style.hero} flex`}>
          <div className={style.heroText}>
            <h1>Keep hardworking, take patients and make yourself always ready for jobs</h1>
            <p>
              We curate the best digital jobs for those who are looking to start their career in
              designing.
            </p>
            <button>Exploer</button>
          </div>
          <div className={style.herologo}>
            <img src="../../../public/img/image.png" alt="" />
          </div>
        </div>
      </section>
    </header>
  );
};

export default Home;
