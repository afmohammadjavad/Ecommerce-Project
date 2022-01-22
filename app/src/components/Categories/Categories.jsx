import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoadingOutlined } from "@ant-design/icons";
import categoriesActions from "../../redux/categories/categoriesActions";
import { Col, Row } from "antd";
import { ProjectName } from 'baseUrl';
import './Categories.scss'

function Categories({ Link }) {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.categories);

  useEffect(() => {
    if (!data.length) dispatch(categoriesActions.getCategories());
  }, []);

  //=========================================================

  if (loading || !data.length) return <LoadingOutlined />;

  if (error) return <div>Something went wrong!!!</div>;

  if (data.length) {
    return (
        <div className="categories">
          {data.map((item, index) => (
              <span key={index}>
                <Link to={`/${ProjectName}/category/${item}`}>{item}</Link>
              </span>
          ))}
        </div>
    );
  }
}
export default Categories;


// if (data.length) {
//   return (
//     <div>
//       <Row gutter={[{xs:0, sm:0, md:0, lg:25, xl:25, xxl:25}, 0]} justify="center">
//         {data.map((item, index) => (
//           // <Col key={index} flex="auto">
//           <Col key={index} pull={1} xs={{span: 12}} sm={{span: 7}} md={{span: 5}} lg={{span: 6}}
//           xl={{span: 6}} xxl={{span: 6}}>
//             <span>
//               <Link to={`/${ProjectName}/category/${item}`}>{item}</Link>
//             </span>
//           </Col>
//         ))}
//       </Row>
//     </div>
//   );
// }