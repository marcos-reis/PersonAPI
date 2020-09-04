import { IPersonData } from "../data/PersonsData"

const calculateAge = (person: IPersonData) => {
  const [day, month, year] = person.birthDate.split("-");
  const BirthDateInstance = new Date(
    parseInt(year, 10),
    parseInt(month, 10),
    parseInt(day, 10)
  );
  const CurrentDate = new Date();
  return CurrentDate.getFullYear() - BirthDateInstance.getFullYear();
};

export default calculateAge;
