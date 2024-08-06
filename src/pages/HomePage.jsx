import Hero from "../Components/Hero.jsx";
import HomeCards from "../Components/HomeCards.jsx";
import JobListing from "../Components/JobListing.jsx";
import ViewAllJobs from "../Components/ViewAllJobs.jsx";

const HomePage = () =>
{
  return (<div >

    <Hero />
    <HomeCards />
    <JobListing isHome={true} />
    <ViewAllJobs />
  </div>
  )
}

export default HomePage