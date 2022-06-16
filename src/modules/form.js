import { Data } from "./api";
import refresh from "./refresh";
import getUser from "./user";
import { name, score } from "./variables";

const handleSubmit = (e) => {
  e.preventDefault();
  const userData = new Data;
  userData.add(getUser())
  refresh(name, score)
}

export default handleSubmit;