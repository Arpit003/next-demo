"use client";
import React, { useEffect } from "react";

// Components
import CenterDiv from "./CenterDiv/page";
import Table from "./Table/page";
import TableWithDetails from "./Javascript/page";

// Styles
import "./style.css";
import NotFound from "../not-found";

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
      case SLUGS.TABLE:
        return <Table />;
      case SLUGS.JAVASCRIPT:
        return <TableWithDetails />;
      default:
        return <NotFound />;
    }
  };

  return <React.Fragment>{DynamicRoutes()}</React.Fragment>;
};

export default Task;
