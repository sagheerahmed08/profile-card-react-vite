import Badge from "./Badge";
import SocialButton from "./SocialButton";

function ProfileCard({ name, role, location, image, github, linkedin }) {
  return (
    <div className="profile-card">
      <h2 className="card-title">Profile</h2>

      <img className="avatar" src={image} alt={name} />

      <h3 className="name">{name}</h3>
      <p className="role">{role}</p>

      <Badge text={`📍 ${location}`} />

      <div className="social-buttons">
        <SocialButton label="GitHub" url={github} />
        <SocialButton label="LinkedIn" url={linkedin} />
      </div>
    </div>
  );
}

export default ProfileCard;