import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  DatePicker,
  Drawer,
  Form,
  Input,
  Row,
  Select,
  Space,
} from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const { Option } = Select;
const DrawerCycberbug = () => {
  const dispatch = useDispatch();
  const { visible, ComponentDrawer, CallbackSubmit } = useSelector(
    (state) => state.DrawerCycberbugReducer
  );
  const showDrawer = () => {
    dispatch({ type: "OPEN_DRAWER" });
  };

  const onClose = () => {
    dispatch({ type: "CLOSE_DRAWER" });
  };

  return (
    <>
      <Drawer
        title="Create a new account"
        width={720}
        visible={visible}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={CallbackSubmit} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        {ComponentDrawer}
      </Drawer>
    </>
  );
};

export default DrawerCycberbug;
