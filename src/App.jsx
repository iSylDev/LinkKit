import Avatar from "./ui/Avatar"
import Options from "./components/options/Options"
import StatsShowcase from "./ui/StatsShowcase"
import TagsShowcase from "./ui/TagsShowcase"

function App() {

  return (
    <>
      <div className="container flex items-center justify-center mx-auto">

      <Avatar />
      <StatsShowcase />
      {/* <TagsShowcase /> */}
      <Options />
      </div>
    </>
  )
}

export default App
