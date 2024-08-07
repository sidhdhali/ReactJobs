import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFound from './pages/NotFound';
import SingleJobPage, { jobLoader } from './pages/SingleJobPage';
import AddJobPage from './pages/AddJobPage';


const App = () =>
{


  // ADD NEW JOB
  const addJob = async (newJob) =>
  {
    const res = await fetch(`/api/jobs`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newJob)
    });
    return;
  }

  //DELETE JOB
  const deleteJob = async (id) =>
  {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });
    return;
  }


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
        <Route path='/jobs/:id' element={<SingleJobPage />} deleteJob={deleteJob} loader={jobLoader} />
        <Route path='*' element={<NotFound />} />
      </Route >
    )
  )

  return (
    <RouterProvider router={router} />

  )
}

export default App
