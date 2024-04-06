"use client";
import React, { useEffect } from "react";
import CenterDiv from "./CenterDiv/page";

const SLUGS = {
  CENTER_A_DIV: "center-a-div",
  TABLE: "table",
  JAVASCRIPT: "javascript",
};

interface Props {
  params: { slug: string };
}

const Task: React.FC<Props> = ({ params: { slug } }) => {
  useEffect(() => {}, []);

  const DynamicRoutes: Function = () => {
    switch (slug) {
      case SLUGS.CENTER_A_DIV:
        return <CenterDiv />;
    }
  };

  return <React.Fragment>{DynamicRoutes()}</React.Fragment>;
};

export default Task;
