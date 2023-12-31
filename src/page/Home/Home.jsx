import { NavLink } from "react-router-dom";
import style from "../../style/Home.module.css";
import { categoryData } from "../../utlity/categoryData";
import JobCategories from "../../component/JobCategories";

const Home = () => {
  return (
    <>
      <header className={`${style.bg}`}>
        <section className={`${style.innerHeader} container`}>
          <div className={`${style.hero} flex`}>
            <div className={style.heroText}>
              <h1>
                Keep hardworking, <br /> take patients and make yourself <br /> always ready for
                jobs
              </h1>
              <p>
                We curate the best digital jobs for those who are looking to start their career in
                designing.
              </p>
              <NavLink to="/jobs" className={style.heroBtn}>
                Exploer
              </NavLink>
            </div>
            <div className={style.herologo}>
              <img src="../../../public/img/image .png" alt="" />
            </div>
          </div>
        </section>
      </header>

      <section>
        {categoryData.map((data) => (
          <JobCategories key={data.id} data={data} />
        ))}
      </section>
    </>
  );
};

export default Home;
