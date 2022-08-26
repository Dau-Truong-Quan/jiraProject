import { Editor } from "@tinymce/tinymce-react";
import React, { useEffect, useState } from "react";
import { Radio, Select, Slider } from "antd";
import * as Yup from "yup";
import { withFormik, Form } from "formik";
import { connect, useSelector, useDispatch } from "react-redux";
import { GET_ALL_PROJECT_SAGA } from "../../util/constant/ProjectConstant";
import { GET_ALL_TASKTYPE_SAGA } from "../../util/constant/TaskTypeConstant";
import { GET_ALL_PRIORITY_SAGA } from "../../util/constant/PriorityConstant";
const { Option } = Select;
const children = [];

for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

const FormCreateTask = (props) => {
  const dispatch = useDispatch();
  const arrProject = useSelector((state) => state.ProjectListRedux.arrProject);
  const arrTaskType = useSelector((state) => state.TaskTypeReducer.arrTaskType);
  const arrPriority = useSelector((state) => state.PriorityReducer.arrPriority);
  const userSearch = useSelector(
    (state) => state.UserCyberBugReducer.userSearch
  );
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
  } = props;
  const userOption = userSearch?.map((item, index) => {
    return { value: item.userId, label: item.name };
  });
  const handleEditorChange = (content, editor) => {
    console.log(content);
  };
  const [size, setSize] = useState("middle");
  const [timeTracking, setTimeTracking] = useState({
    timeTrackingSpent: 5,
    timeTrackingRemaining: 2,
  });
  useEffect(() => {
    dispatch({ type: GET_ALL_PROJECT_SAGA });
    dispatch({ type: GET_ALL_TASKTYPE_SAGA });
    dispatch({ type: GET_ALL_PRIORITY_SAGA });
    dispatch({ type: "GET_USER_API", keyword: "" });
  }, []);

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="form-group">
        <p>Project</p>
        <select
          name="projectId"
          className="form-control"
          onChange={handleChange}
        >
          {arrProject.map((project, index) => {
            return (
              <option key={index} value={project.id}>
                {project.projectName}
              </option>
            );
          })}
        </select>
      </div>
      <div className="form-group">
        <p>Task name</p>
        <input
          name="taskName"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <div className="row">
          <div className="col-6">
            <p>Project</p>
            <select
              name="priorityId"
              className="form-control"
              onSubmit={handleSubmit}
            >
              {arrPriority.map((priority, index) => {
                return (
                  <option key={index} value={priority.priorityId}>
                    {priority.priority}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-6">
            <p>Project</p>
            <select
              name="typeId"
              className="form-control"
              onSubmit={handleSubmit}
            >
              {arrTaskType.map((taskType, index) => {
                return (
                  <option key={index} value={taskType.id}>
                    {taskType.taskType}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
      <div className="form-group">
        <div className="row">
          <div className="col-6">
            <div className="form-group" style={{ height: "38px" }}>
              <Select
                mode="multiple"
                size={size}
                placeholder="Please select"
                options={userOption}
                onChange={(values) => {
                  setFieldValue("listUserAsign", values);
                }}
                optionFilterProp="label"
                onSearch={(value) => {
                  // dispatch({ type: "GET_USER_API", keyword: value });
                }}
                style={{
                  width: "100%",
                }}
              >
                {children}
              </Select>
            </div>
            <div className="row mt-5">
              <div className="col-12">
                <p>Original Estimate</p>
                <input
                  type="number"
                  min="0"
                  name="originalEstimate"
                  defaultValue={0}
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="col-6">
            <p>Time tracking</p>

            <Slider
              defaultValue={30}
              value={timeTracking.timeTrackingSpent}
              max={
                Number(timeTracking.timeTrackingSpent) +
                Number(timeTracking.timeTrackingRemaining)
              }
              tooltipVisible
            />
            <div className="row">
              <div className="col-6 text-left ">
                {timeTracking.timeTrackingSpent}H logged
              </div>
              <div className="col-6 text-right ">
                {timeTracking.timeTrackingRemaining}H Remaining
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <p>Time spent</p>
                <input
                  className="form-control"
                  type="number"
                  defaultValue={0}
                  name="timeTrackingSpent"
                  onChange={(e) => {
                    setTimeTracking({
                      ...timeTracking,
                      timeTrackingSpent: e.target.value,
                    });
                    setFieldValue("timeTrackingSpent", e.target.value);
                  }}
                />
              </div>
              <div className="col-6">
                <p>Time remaining</p>
                <input
                  className="form-control"
                  type="number"
                  defaultValue={0}
                  name="timeTrackingRemaining"
                  onChange={(e) => {
                    setTimeTracking({
                      ...timeTracking,
                      timeTrackingRemaining: e.target.value,
                    });
                    setFieldValue("timeTrackingRemaining", e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="form-group">
        <p>description</p>
        <Editor
          name="description"
          apiKey="your-api-key"
          // onInit={(evt, editor) => (editorRef.current = editor)}
          // initialValue={values.description}
          // value={values.description}
          init={{
            height: 500,
            menubar: false,
            plugins: [
              "advlist",
              "autolink",
              "lists",
              "link",
              "image",
              "charmap",
              "preview",
              "anchor",
              "searchreplace",
              "visualblocks",
              "code",
              "fullscreen",
              "insertdatetime",
              "media",
              "table",
              "code",
              "help",
              "wordcount",
            ],
            toolbar:
              "undo redo | blocks | " +
              "bold italic forecolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat | help",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
          onEditorChange={(content, editor) => {
            setFieldValue("description", content);
          }}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

const createTaskForm = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => {
    return {
      taskName: "",
      description: "",
      statusId: "",
      originalEstimate: 0,
      timeTrackingSpent: 0,
      timeTrackingRemaining: 0,
      projectId: 0,
      typeId: 0,
      priorityId: 0,
      listUserAsign: [],
    };
  },
  validationSchema: Yup.object().shape({
    // // Validate form field
    // projectName2: Yup.string()
    //   .required("projectName is required")
    //   .min(5, "projectName must have min 5 characters")
    //   .max(10, "projectName have max 10 characters"),
  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    // props.dispatch({
    //   type: "UPDATE_PROJECT_SAGA",
    //   projectUpdate: values,
    // });
    console.log(values);
  },
  displayName: "Create task form",
})(FormCreateTask);
// const mapStateToProps = (state) => {
//   return {
//     arrCategory: state.ProjectCategoryRedux.arrCategory,
//     projectEdit: state.DetailProject.projectEdit,
//   };
// };
export default connect()(createTaskForm);
