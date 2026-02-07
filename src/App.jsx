import Avatar from "./ui/Avatar"
import Options from "./components/options/Options"
import StatsShowcase from "./ui/StatsShowcase"
import TagsShowcase from "./ui/TagsShowcase"
import Sorter from "./components/sorter/Sorter"
import Card from "./components/Card"
import TagSelector from "./components/TagSelector"

function App() {

  return (
    <>
      <div className="container flex items-center gap-15 mx-auto">


      <TagSelector />
      <Avatar />

      </div>
    </>
  )
}

export default App
