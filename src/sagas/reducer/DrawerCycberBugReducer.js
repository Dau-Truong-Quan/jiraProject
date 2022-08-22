const initialState = {
  visible: false,
  ComponentDrawer: <p>default</p>,
  CallbackSubmit: () => {
    alert("alter");
  },
};

export const DrawerCycberbugReducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_DRAWER": {
      return { ...state, visible: true };
    }
    case "CLOSE_DRAWER": {
      return { ...state, visible: false };
    }
    case "OPEN_FORM_EDIT_DRAWER": {
      console.log(action.Component);
      return { ...state, visible: true, ComponentDrawer: action.Component };
    }
    case "SUBMIT_EDIT_DRAWER": {
      console.log(action);
      return { ...state, CallbackSubmit: action.Submition };
    }

    default:
      return { ...state };
  }
};
