const initialState = {
  projectEdit: {
    id: 0,
    projectName: "string",
    creator: 0,
    description: "string",
    categoryId: "2",
  },
};

export const DetailProject = (state = initialState, action) => {
  switch (action.type) {
    case "EDIT_PROJECT": {
      state.projectEdit = action.projectEdit;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
