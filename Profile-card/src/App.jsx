import ProfileCard from "./components/ProfileCard";
import profileImg from "../../Assets/128071278.jpeg";

function App() {
  return (
    <div className="app">
      <ProfileCard
        name="Sagheer Ahmed"
        role="Data Scientist"
        location="Chennai"
        image={profileImg}
        github="https://github.com/your-username"
        linkedin="https://www.linkedin.com/in/your-username"
      />
    </div>
    
  );
}

export default App;
