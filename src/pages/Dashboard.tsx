import { Sorter } from "@/components/Sorter";
import Options from "../components/options/Options";
import ProfileAvatar from "../components/ProfileAvatar";


const Dashboard = () => {
  return ( <div className="flex justify-end mx-25">
    <ProfileAvatar />
    <Sorter />
  </div> );
}
 
export default Dashboard;