import React from "react";
import "./style.css";

function App() {
  const user = {
    name: "Jeff Bezos",
    city: "Albuquerque",
    born: 1964,
    likes: "Being rich",
    twitterLink: "https://twitter.com/jeffbezos",
    img: "https://img-cdn.inc.com/image/upload/w_1920,h_1080,c_fill/images/panoramic/getty_1032942302_dkawzr.jpg",
    twitterName: "JeffBezos",
    companies: [
      "Amazon",
      "The Washington Post",
      "Google share holder",
      "IMBD",
      "Alexa",
      "Blue Origin",
      "Twitch",
      "Zappos",
      "Whole food market",
      "Amazon robotics",
      "Goodreads",
    ],
  };

  return (
    <div className="App">
      <img src={user.img} alt="" style={{width:"16rem"}} />
      <h1>{user.name}</h1>
      <h2>Place of birth</h2>
      <p>{user.city}</p>
      <h2>Age of birth</h2>
      <p>{user.born}</p>
      <h2>Owns</h2>
      <p>{user.companies.map((n)=> <li>{n}</li>)}</p>
      <h2>Likes</h2>
      <p>{user.likes}</p>
      <h2>Twitter</h2>
      <a href={user.twitterLink}>@{user.twitterName}</a>
    </div>
  );
}

export default App;
