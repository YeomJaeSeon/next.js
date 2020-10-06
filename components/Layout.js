import styled from "styled-components";

const LayoutStyle = styled.div`
  border: 1px solid gray;
  padding: 20px;
`;

const Layout = (props) => {
  return (
    <>
      <LayoutStyle>{props.children}</LayoutStyle>
    </>
  );
};

export default Layout;
