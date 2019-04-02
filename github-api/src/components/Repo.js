import React from 'react'

const Repo = ({ name, html_url, created_at, language, watchers }) => {
  return (
    <li>
      <div className="repos-title">
        <span className="name">{name}</span>
        <span className="name"><a href={html_url}>&#x1F517;&nbsp;Go to repo</a></span>
      </div>
      <div className="repos-info">
        <span className="name">Created at: {new Date(created_at).toLocaleDateString()}</span>
        <span className="name">Language: {language}</span>
        <span className="name">Watchers: {watchers}</span>
      </div>
    </li>
  );
};

export default Repo;