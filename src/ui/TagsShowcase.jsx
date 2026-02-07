

const TagsShowcase = () => {
  const tags = ['CSS', 'Learning', 'Community']

  return (<div className="flex gap-3 items-center">
    {
      tags.map((tag) => (
        <div className="w-fit bg-gray-300/50 dark:bg-dark-border py-1 px-2 rounded-md text-sm ">
          <p className="text-gray-600 dark:text-gray-400 text-xs font-semibold"> {tag} </p>
        </div>
      ))
    }
  </div>);
}

export default TagsShowcase;