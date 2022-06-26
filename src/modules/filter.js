import { names } from "./fetch";
import { search } from "./variables";
const filter = () => {
  let filterValue = search.value.toUpperCase()
  for(let i = 0; i < names.length; i += 1){
    if(names[i].innerHTML.toUpperCase().indexOf(filterValue) > -1){
      names[i].style.display = ''
    } else {
      names[i].style.display = 'none'
    }
  }
}

export default filter;