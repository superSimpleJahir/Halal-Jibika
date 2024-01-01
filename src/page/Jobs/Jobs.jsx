import { useEffect, useState } from "react";
import style from "../../style/Jobs.module.css";
import axios from "axios";

const Jobs = () => {
  const [data, setData] = useState(null);

  const fratchData = async (url) => {
    const data = (await axios.get(url)).data;
    setData(data);
  };

  useEffect(() => {
    fratchData("../../../public/Jobs.json");
  }, []);

  console.log(data);

  return <div>Jobs</div>;
};

export default Jobs;
