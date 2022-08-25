import {
  DeleteOutlined,
  EditOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { AutoComplete, Avatar, Button, Popover, Space, Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import FormEditProject from "../../../component/Form/FormEditProject";
import { message, Popconfirm } from "antd";
import { NavLink } from "react-router-dom";

const ProjectManager = () => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "GET_LIST_PROJECT_SAGA" });
  }, []);
  const arr = useSelector((state) => state.ProjectListRedux.projectList);
  const { userSearch } = useSelector((state) => state.UserCyberBugReducer);

  const handleChange = (pagination, filters, sorter) => {
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
      render: (text, record, index) => {
        return <NavLink to={`/projectManager/${record.id}`}>{text}</NavLink>;
      },
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
      title: "members",
      key: "members",
      render: (text, record, index) => {
        return (
          <div>
            {record.members?.slice(0, 3).map((item, index) => {
              return (
                <Popover
                  key={index}
                  placement="topLeft"
                  title={"Member"}
                  content={() => {
                    return (
                      <table className="table">
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Avata</th>
                            <th>Name</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {record.members?.map((item, index) => {
                            return (
                              <tr key={index}>
                                <td>{item.userId}</td>
                                <td>
                                  <img
                                    src={item.avatar}
                                    height="50"
                                    width="50"
                                    style={{ borderRadius: "15px" }}
                                  />
                                </td>
                                <td>{item.name}</td>
                                <td>
                                  <button
                                    className="btn btn-danger"
                                    onClick={() => {
                                      dispatch({
                                        type: "REMOVE_USER_PROJECT_SAGA",
                                        userProject: {
                                          projectId: record.id,
                                          userId: item.userId,
                                        },
                                      });
                                    }}
                                  >
                                    X
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    );
                  }}
                >
                  <Avatar key={index} src={item.avatar} />
                </Popover>
              );
            })}
            {record.members?.length > 3 ? <Avatar>...</Avatar> : ""}
            <Popover
              placement="topLeft"
              title={"Add user"}
              content={() => {
                return (
                  <AutoComplete
                    style={{ width: 200 }}
                    placeholder="input here"
                    onSearch={(value) => {
                      dispatch({
                        type: "GET_USER_API",
                        keyword: value,
                      });
                    }}
                    value={value}
                    onChange={(text) => {
                      setValue(text);
                    }}
                    options={userSearch?.map((user, index) => {
                      return {
                        label: user.name,
                        value: user.userId.toString(),
                      };
                    })}
                    onSelect={(valueSelect, option) => {
                      setValue(option.label);
                      dispatch({
                        type: "ADD_USER_PROJECT_SAGA",
                        userProject: {
                          projectId: record.id,
                          userId: valueSelect,
                        },
                      });
                    }}
                  />
                );
              }}
              trigger="click"
            >
              <Button>+</Button>
            </Popover>
          </div>
        );
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
                title: "Edit project",
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
