import { useParams } from "react-router"

const ProfilePage = () => {
  const params = useParams()
  return <div>Profile Page{params.profileId}</div>
}

export default ProfilePage
