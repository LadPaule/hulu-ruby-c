
function HeaderItems({ title, Icon }) {
  return (
    <div className="flex flex-col items-center cursor-pointer group w-12 group sm:w-20 hover:text-white">
      <Icon className="h-8 mb-1 hover:animate-ping"/>
      <p className="tracking-widest opacity-0 group-hover:opacity-100 ">{title}</p>
    </div>
  )
}

export default HeaderItems;
