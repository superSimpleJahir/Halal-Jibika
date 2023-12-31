/* eslint-disable react/prop-types */

const JobCategories = ({ data }) => {
  const { title, image, jobNums } = data;
  return (
    <div>
      <img src={image} alt="" />
      <h2>{title}</h2>
      <h4>{jobNums}</h4>
    </div>
  );
};

export default JobCategories;
