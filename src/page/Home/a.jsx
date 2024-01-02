const [favoriteJobs, setFavoriteJobs] = useState([]);
const toggleHeart = (job) => {
  const isAlreadyFavorite = favoriteJobs.some((favJob) => favJob.id === job.id);
  if (isAlreadyFavorite) {
    setFavoriteJobs((prevFavorites) => prevFavorites.filter((favJob) => favJob.id !== job.id));
  } else {
    setFavoriteJobs((prevFavorites) => [...prevFavorites, job]);
  }
};
const isJobFavorite = (id) => favoriteJobs.some((favJob) => favJob.id === id);
