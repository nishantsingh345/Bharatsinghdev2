import React from "react";

type Props = {
  children: JSX.Element;
};
const Container = ({ children }: Props) => {
  return <div className="max-w-7xl mx-auto my-5">{children}</div>;
};

export default Container;
