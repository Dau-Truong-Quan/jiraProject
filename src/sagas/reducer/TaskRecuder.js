import { GET_ALL_STATUS } from "../../util/constant/StatusConstant";
import { GET_ALL_TASKTYPE } from "../../util/constant/TaskTypeConstant";

const initialState = {
  taskDetailModel: {},
};

export const StatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_STATUS":
      return { ...state, taskDetailModel: action.taskDetailModel };

    default:
      return state;
  }
};
