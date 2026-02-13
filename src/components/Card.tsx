import Options from "./options/Options.js";
import Divider from '../ui/Divider.jsx'
import TagsShowcase from "../ui/TagsShowcase.jsx";
import StatsShowcase from "../ui/StatsShowcase.jsx";


const Card = () => {
  return (<div className="bg-white dark:bg-light-green border border-gray-300 dark:border-0 w-83 rounded-xl shadow-md pt-3 pb-2">
    <div className="flex justify-between items-center px-4 ">
      <div className="flex items-center">
        <img src="/image1.jpg" alt="" className="w-11 rounded-xl mr-3" />
        <div>
          <h3 className=" dark:text-white font-semibold ">Frontend Mentor</h3>
          <p className="text-xs dark:text-gray-300 font-semibold">frontendmentor.io</p>
        </div>
      </div>
      <Options />
    </div>

    <div className="px-4">
      <Divider />
    </div>

    <div className="px-4 flex flex-col gap-3">
      <p className="text-sm text-gray-600 leading-6 font-medium dark:text-gray-300">
        Improve your front-end coding skills by building real projects. Solve real-world HTML, CSS and JavaScript challenges whilst working to professional designs.
      </p>

      <TagsShowcase />
    </div>
    <Divider />

    <div className="px-4">
      <StatsShowcase />
    </div>

  </div>);
}

export default Card; <div>
</div>