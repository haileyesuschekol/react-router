import { Link } from "react-router-dom"
const profiles = [1, 2, 3, 4, 5]
const Profile = () => {
  const pro = profiles.map((prof) => {
    return (
      <Link key={prof} to={`/Profile/${prof}`}>
        <br /> Profile {prof}
      </Link>
    )
  })
  return (
    <div>
      <h2>profile</h2>
      {pro}
    </div>
  )
}

export default Profile
