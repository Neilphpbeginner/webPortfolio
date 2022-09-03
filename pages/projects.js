import React from "react";
import NavBar from "../src/components/NavBar";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import RepoCard from "../src/components/RepoCard";
import axios from "axios";

export default function Projects() {
  const [gitHubRepositories, setgitHubRepositories] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/Neilphpbeginner/repos`
      );
      setgitHubRepositories(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []),
    console.log(gitHubRepositories);

  return (
    <div>
      <Helmet>
        <title> Neil Lemmer || Projects</title>
        <meta name="description" content="Neil Lemmer Project's Page" />
      </Helmet>
      <NavBar />

      {gitHubRepositories.map((data, i, language) => (
        <RepoCard repo={data} key={i} language={language} />
      ))}
    </div>
  );
}
