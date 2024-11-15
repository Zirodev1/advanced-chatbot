import Icon from "../../../../components/icon/icon";


// TODO: create actual func to sort items by there title
const Sorting = ({ title }) => {
  return (
    <button className="inline-flex items-center text-base-2 font-semibold text-n-4 transition-colors hover:text-n-7 dark:hover:text-n-1">
        {title}
        <Icon className="w-4 h-4 ml-2 fill-n-4" name="arrows-sorting" />
    </button>
  )
}

export default Sorting;