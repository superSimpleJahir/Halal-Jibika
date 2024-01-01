/* eslint-disable react/prop-types */
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
// import { FaHeart } from "react-icons/fa";

import style from "../style/Jobs.module.css";

const Job = ({ jobData }) => {
  const { way, logo, title, salary, position, location } = jobData;

  return (
    <div className={style.innerJobcart}>
      <div className={style.jobCart}>
        <img className={style.companyLogo} src={logo} alt="" />
        <button className={style.loveBtn}>
          <FaRegHeart className={style.love} />
          {/* <FaHeart className={style.love1} /> */}
        </button>
      </div>

      <h4 className={style.workSite}>{way}</h4>
      <p className={style.position}>
        <MdOutlineWatchLater />
        {position}
      </p>
      <h3 className={style.title}>{title}</h3>
      <div className={style.jobSalary}>
        <h5 className={style.location}>
          <IoLocationOutline />
          {location}
        </h5>
        <h6 className={style.salary}>{salary}</h6>
      </div>

      <div className={style.buttons}>
        <button className={`${style.btn} ${style.apply}`}>Apply</button>
        <button className={`${style.btn} ${style.details}`}>Details</button>
      </div>
    </div>
  );
};

export default Job;
