import { IPersonData } from "../data/PersonsData";

const generateEmail = (person: IPersonData) => {
  const name = person.name.replace(" ", "").toLowerCase();
  const domain = "personapi.com";
  return `${name}@${domain}`;
};

export default generateEmail;
