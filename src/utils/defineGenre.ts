import { IPersonData } from "../data/PersonsData";

const defineGenre = (person: IPersonData) => {
  const genreIndex = person.genre;

  return genreIndex == 0 ? "male" : "female";
};

export default defineGenre;
