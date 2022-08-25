import { Editor } from "@tinymce/tinymce-react";
import React, { useState } from "react";
import { Radio, Select, Slider } from "antd";

const { Option } = Select;
const children = [];

for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}
const handleChange = (value) => {
  console.log(`Selected: ${value}`);
};
const FormCreateTask = () => {
  const handleEditorChange = (content, editor) => {
    console.log(content);
  };
  const [size, setSize] = useState("middle");

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };
  return (
    <div className="container">
      <div className="form-group">
        <p>Project</p>
        <select name="projectId" className="form-control">
          <option value={"54"}>Project A</option>
          <option value={"55"}>Project B</option>
        </select>
      </div>
      <div className="form-group">
        <div className="row">
          <div className="col-6">
            <p>Project</p>
            <select name="priorityId" className="form-control">
              <option value={"54"}>High</option>
              <option value={"55"}>Bugs</option>
            </select>
          </div>
          <div className="col-6">
            <p>Project</p>
            <select name="typeId" className="form-control">
              <option value={"54"}>New task</option>
              <option value={"55"}>Bug</option>
            </select>
          </div>
        </div>
      </div>
      <div className="form-group">
        <div className="row">
          <div className="col-6">
            <p>Project</p>
            <select name="priorityId" className="form-control">
              <option value={"54"}>High</option>
              <option value={"55"}>Bugs</option>
            </select>
          </div>
          <div className="col-6">
            <Slider defaultValue={30} tooltipVisible />
          </div>
        </div>
      </div>
      <div className="form-group">
        <Select
          mode="multiple"
          size={size}
          placeholder="Please select"
          options={[]}
          defaultValue={["a10", "c12"]}
          onChange={handleChange}
          style={{
            width: "100%",
          }}
        >
          {children}
        </Select>
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
          onEditorChange={handleEditorChange}
        />
      </div>
    </div>
  );
};

export default FormCreateTask;
