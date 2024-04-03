export const addAdoptor = (text) => ({
    type: "ADD_ADOPTOR",
    payload: {
      id: Math.random(),
      text: text,
      isCompleted: false,
    },
  });
  
  export const editAdoptor = (id) => ({
    type: "DELETE_ADOPTOR",
    payload: {
      id,
    },
  });

  export const deleteAdoptor = (id) => ({
    type: "DELETE_ADOPTOR",
    payload: {
      id,
    },
  });
  
  