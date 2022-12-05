import { Row, Col } from "antd";
import ContentWrapper from "../Component/wrapper";
import Content from "./components/Content";
import Header from "./components/Header";
import Sidebar from "./components/sidebar";

function MainLayout() {
  return (
    <ContentWrapper>
      <Col span={24}>
        <Row>
          <Header />
        </Row>
        <Row>
          <Sidebar />
          <Content/>
        </Row>
      </Col>
    </ContentWrapper>
  );
}

export default MainLayout;
