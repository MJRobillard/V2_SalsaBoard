import React from "react";
import ReactPlayer from "react-player";

export const LeafDanceNode = ({ data }: { data: any }) => {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: 8,
      padding: 10,
      background: "#fffefc",
      width: 250
    }}>
      <strong>{data.label}</strong>
      <p style={{ fontSize: 12 }}>{data.description}</p>
      {data.video && (
        <div style={{ marginTop: 10 }}>
          <ReactPlayer url={data.video} width="100%" height="140px" controls />
        </div>
      )}
    </div>
  );
};