import instance from "./index";

const getPets = async () => {
  const pets = await instance.get("pets");
  return pets;
};

const addPet = async (name, image, type, adopted) => {
  const res = await instance.post("pets", {
    name: name,
    image: image,
    type: type,
    adopted: adopted,
  });
  return res;
};

const updatePet = async (petid, name, image, type, adopted) => {
  await instance.put(`pets/${petid}`, {
    name: name,
    image: image,
    type: type,
    adopted: 1,
  });
};

const getPetById = async (id) => {
  const res = await instance.get(`pets/${id}`);
  return res.data;
};

const deletePet = async (id) => {
  const res = await instance.delete(`pets/${id}`);
  return res;
};

export { getPets, addPet, updatePet, getPetById, deletePet };
