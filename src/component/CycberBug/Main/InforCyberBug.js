import React from "react";

const InforCyberBug = (props) => {
  const { projectDetail } = props;
  const renderAvatar = () => {
    return projectDetail.members?.map((user, index) => {
      return (
        <div className="avatar" key={index}>
          <img src={user.avatar} alt={user.avatar} />
        </div>
      );
    });
  };

  return (
    <div className="info" style={{ display: "flex" }}>
      <section style={{ display: "block" }}>
        <div dangerouslySetInnerHTML={{ __html: projectDetail.description }} />;
      </section>
      <div className="search-block">
        <input className="search" />
        <i className="fa fa-search" />
      </div>

      <div className="avatar-group" style={{ display: "flex" }}>
        {renderAvatar()}
      </div>
      <div style={{ marginLeft: 20 }} className="text">
        Only My Issues
      </div>
      <div style={{ marginLeft: 20 }} className="text">
        Recently Updated
      </div>
    </div>
  );
};

export default InforCyberBug;
