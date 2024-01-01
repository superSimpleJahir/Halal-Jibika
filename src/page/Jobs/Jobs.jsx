import { useEffect, useState } from "react";
import style from "../../style/Jobs.module.css";
import axios from "axios";
import Job from "../../component/Job";

const Jobs = () => {
  const [data, setData] = useState([]);

  const fratchData = async (url) => {
    const data = (await axios.get(url)).data;
    setData(data);
  };

  useEffect(() => {
    fratchData("../../../public/Jobs.json");
  }, []);

  console.log(data);

  return (
    <section className={`${style.jobSection} container`}>
      <div className={style.innrejobs}>
      {data && data.map((jobData) => <Job key={jobData.id} jobData={jobData} />)}
      </div>
    </section>
  );
};

export default Jobs;
