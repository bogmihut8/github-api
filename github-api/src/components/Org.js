import React from 'react'

const Org = ({ avatar_url, login, description, url }) => {
  return (
    <li>
      <div className="org-info">
        <span><img src={avatar_url} alt="Avatar" />&nbsp;<span className="text">{login}</span></span>
        <span><a href={url} target="_blank">&#x1F517;&nbsp;Go to repo</a></span>
      </div>
      <div className="org-description">
        {description}
      </div>
    </li>
  );
};

export default Org;