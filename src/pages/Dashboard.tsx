import { Sorter } from "@/components/Sorter";
import Options from "../components/options/Options";
import ProfileAvatar from "../components/ProfileAvatar";
import BookmarkCard from "@/components/BookmarkCard";


const Dashboard = () => {
  return ( <div className="flex flex-col gap-12 justify-end mx-16">
    <ProfileAvatar />
    <Sorter />
    <BookmarkCard />
  </div> );
}
 
export default Dashboard;