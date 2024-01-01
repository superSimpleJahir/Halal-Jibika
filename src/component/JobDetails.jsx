import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const detailsJob = useLoaderData();
  const { id } = useParams();
  const idNum = parseInt(id);
  const jobs = detailsJob.find((job) => job.id === idNum);

  console.log(detailsJob);
  return <div>details</div>;
};

export default JobDetails;
