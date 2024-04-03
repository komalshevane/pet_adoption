export const addPet = (text) => ({
    type: "ADD_PET",
    payload: {
      id: Math.random(),
      text: text
    },
  });
  
  export const editPet = (id) => ({
    type: "DELETE_PET",
    payload: {
      id,
    },
  });

  export const deletePet = (id) => ({
    type: "DELETE_PET",
    payload: {
      id,
    },
  });
  
  