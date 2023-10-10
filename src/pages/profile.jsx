import React, { useEffect, useState } from "react";
import Alternates from "../components/Layout/Boost";
import { Link } from "react-router-dom";
import Edit from "../components/Profile/EditProfile";

const Profile = () => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState("Your Name");
  const [email, setEmail] = useState("abc@gmail.com");
  const [githubLink, setGithubLink] = useState(
    "https://github.com/yourusername"
  );
  const [profileImage, setProfileImage] = useState(
    "https://safesiren.vercel.app/static/media/login.665ff9176f5ac11ac2e6.png"
  );

  useEffect(() => {
    const githubUsername = "adityashah7867";
    fetch(
      `https://api.github.com/users/${githubUsername}/repos?sort=created&direction=desc`
    )
      .then((response) => response.json())
      .then((data) => {
        const firstThreeRepos = data.slice(0, 3); // Changed to get the first three repos
        setRepositories(firstThreeRepos);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching repositories:", error));
  }, []);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setProfileImage(reader.result);
      }
    };

    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    setEditMode(false);
    // Add logic to save the updated data (name, email, githubLink) if needed
  };

  useEffect(() => {
    const githubUsername = "adityashah7867";
    fetch(
      `https://api.github.com/users/${githubUsername}/repos?sort=created&direction=desc`
    )
      .then((response) => response.json())
      .then((data) => {
        const firstThreeRepos = data.slice(0, 1);
        setRepositories(firstThreeRepos);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching repositories:", error));
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Alternates className="w-full">
        <div className="bg-white w-full flex flex-col md:flex-row items-center transform rotate-x-2 mt-5">
          

          {editMode ? (
                <input type="file" accept="image/*" onChange={handleImageUpload} />
              ) : (
                <img
            src={profileImage}
            style={{ width: "20%" }}
            className="w-15 mb-4 md:mb-0"
            alt=""
          />
              )}

          
          {/* ... existing code ... */}
          <div className="flex-grow p-4 text-center md:text-left ml-5">
            <h2 className="text-xl font-bold mb-2 text-right">
              {editMode ? (
                <button onClick={handleSave}>Save</button>
              ) : (
                <button onClick={handleEdit}>Edit</button>
              )}
            </h2>
            <h2 className="text-xl font-bold mb-2">User Name</h2>
            <p>
              {editMode ? (
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              ) : (
                name
              )}
            </p>
            <h2 className="text-xl font-bold mt-4 mb-2">Email</h2>
            <p>
              {editMode ? (
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              ) : (
                email
              )}
            </p>
            <h2 className="text-xl font-bold mt-4 mb-2">Github</h2>
            <p>
              {editMode ? (
                <input
                  type="text"
                  value={githubLink}
                  onChange={(e) => setGithubLink(e.target.value)}
                />
              ) : (
                <a href={githubLink} className="text-blue-500">
                  {githubLink}
                </a>
              )}
            </p>
          </div>
        </div>

        <hr />

        <hr />

        <div className="bg-white w-full h-screen p-8 text-center transform rotate-x-2">
          <h2 className="text-xl font-bold mb-4">Your Github Repositories</h2>

          {repositories.map((repo) => (
            <div
              key={repo.id}
              className="bg-blue-100 p-2 mb-2 rounded-md flex items-start"
            >
              <img
                src={repo.owner.avatar_url}
                alt={repo.owner.login}
                className="w-16 h-16 mx-auto mb-4 rounded-full"
              />
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-2">{repo.name}</h3>
                <p className="mb-5">{repo.description}</p>
                <a href={repo.html_url} className="text-blue-500">
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
          <br />

          <center>
            <button class="cursor-pointer  items-end rounded-full px-9 py-3 text-xl font-mono font-semibold text-rose-600 hover:text-white border-2 border-rose-600 hover:bg-rose-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-75 duration-300 focus:bg-transparent focus:text-rose-600">
              Button
            </button>
          </center>
        </div>
      </Alternates>
    </>
  );
};

export default Profile;
