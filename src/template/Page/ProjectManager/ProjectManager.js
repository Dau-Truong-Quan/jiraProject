import {
  DeleteOutlined,
  EditOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { Button, Space, Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import FormEditProject from "../../../component/Form/FormEditProject";
import { message, Popconfirm } from "antd";

const ProjectManager = () => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "GET_LIST_PROJECT_SAGA" });
  }, []);
  const arr = useSelector((state) => state.ProjectListRedux.projectList);

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const clearFilters = () => {
    setFilteredInfo({});
  };

  const clearAll = () => {
    setFilteredInfo({});
    setSortedInfo({});
  };

  const setAgeSort = () => {
    setSortedInfo({
      order: "descend",
      columnKey: "age",
    });
  };

  const columns = [
    {
      title: "projectName",
      dataIndex: "projectName",
      key: "projectName",
      sorter: (item1, item2) => {
        let projectname1 = item1.projectName?.trim().toLowerCase();
        let projectname2 = item2.projectName?.trim().toLowerCase();
        if (item1.projectName < item2.projectName) {
          return -1;
        }
        return 1;
      },
    },
    {
      title: "categoryName",
      dataIndex: "categoryName",
      key: "categoryName",
      sorter: (a, b) => a.age - b.age,
      sortOrder: sortedInfo.columnKey === "age" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "description",
      dataIndex: "description",
      key: "description",
      render: (text, record, index) => {
        return <div dangerouslySetInnerHTML={{ __html: text }} />;
      },
    },

    {
      title: "description",
      dataIndex: "description",
      key: "description",
      render: (text, record, index) => {
        return <Tag color="cyan">{record.creator.name}</Tag>;
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <EditOutlined
            onClick={() => {
              const action = {
                type: "OPEN_FORM_EDIT_DRAWER",
                Component: <FormEditProject />,
              };

              dispatch(action);

              dispatch({
                type: "EDIT_PROJECT",
                projectEdit: record,
              });
            }}
          />

          <Popconfirm
            title="Are you sure to delete this task?"
            onConfirm={() => {
              const action = {
                type: "DELETE_PROJECT_SAGA",
                idProject: record.id,
              };

              dispatch(action);
            }}
            okText="Yes"
            cancelText="No"
          >
            <DeleteOutlined />
          </Popconfirm>
        </Space>
      ),
    },
  ];
  return (
    <div className="container">
      <div>Project Manager</div>
      <Space
        style={{
          marginBottom: 16,
        }}
      >
        <Button onClick={setAgeSort}>Sort age</Button>
        <Button onClick={clearFilters}>Clear filters</Button>
        <Button onClick={clearAll}>Clear filters and sorters</Button>
      </Space>
      <Table columns={columns} dataSource={arr} onChange={handleChange} />
    </div>
  );
};

export default ProjectManager;
