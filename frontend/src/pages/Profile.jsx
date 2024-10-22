import React, { useState, useEffect } from "react";
import AuthService from "../services/auth.service";
import "bootstrap/dist/css/bootstrap.min.css"; 

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await AuthService.getProfile();
        setProfile(response.data);
      } catch (error) {
        console.error("Failed to fetch profile:", error);
      }
    };

    fetchProfile();
  }, []);

  if (!profile) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">Profile</h2>
              <div className="list-group">
                <div className="list-group-item">
                  <strong>Username:</strong> {profile.username}
                </div>
                <div className="list-group-item">
                  <strong>Email:</strong> {profile.email}
                </div>
                <div className="list-group-item">
                  <strong>Birthdate:</strong> {profile.birthdate}
                </div>
                <div className="list-group-item">
                  <strong>Roles:</strong> {profile.roles.join(", ")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
