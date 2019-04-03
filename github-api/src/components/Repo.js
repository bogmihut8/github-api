import React from 'react'

const Repo = ({ name, html_url, created_at, language, watchers }) => {
  return (
    <li>
      <div className="repos-title">
        <span>{name}</span>
        <span><a href={html_url} target="_blank">&#x1F517;&nbsp;Go to repo</a></span>
      </div>
      <div className="repos-info">
        <span>Created at: {new Date(created_at).toLocaleDateString()}</span>
        <span>Language: {language}</span>
        <span>Watchers: {watchers}</span>
      </div>
    </li>
  );
};

export default Repo;