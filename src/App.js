import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import { FaAngleDoubleRight, FaLeaf } from "react-icons/fa";
const url = "https://course-api.com/react-tabs-project";

function App() {
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true);
  const getFetch = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setJobs(data);
    console.log(data);
    setLoading(false);
  };
  useEffect(() => {
    getFetch();
  }, []);
  if (loading) {
    return <Loading />;
  }
  const { title, id, order, dates, duties, company } = jobs[value];
  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-dates">{dates}</p>
          {duties.map((duty) => {
            return (
              <div className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>

                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default App;
