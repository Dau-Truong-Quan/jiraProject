const initialState = {
  projectList: [],
};

export const ProjectListRedux = (state = initialState, action) => {
  switch (action.type) {
    case "GET_LIST_PROJECT": {
      state.projectList = action.data;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
