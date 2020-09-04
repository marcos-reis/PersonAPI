import { calculateAge } from ".";
import { IPersonData } from "../data/PersonsData";

const bindDescription = (person: IPersonData) => {
  const Descriptions = [
    {
      description: `Olá eu sou o ${person.name} tenho ${calculateAge(
        person
      )} anos de idade, nasci em ${person.birthDate}, sou de ${person.city} - ${
        person.state
      }, tenho formação em ${person.academy}, sou entusiasta de ${
        person.interest
      }.`,
    },
    {
      description: `Olá eu sou a ${person.name} tenho ${calculateAge(
        person
      )} anos de idade, nasci em ${person.birthDate}, sou de ${person.city} - ${
        person.state
      }, tenho formação em ${person.academy}, sou intusiasta de ${
        person.interest
      }.`,
    },
  ];

  if (person.genre === 0) {
    return Descriptions[0].description;
  }
  return Descriptions[1].description;
};

export default bindDescription;
