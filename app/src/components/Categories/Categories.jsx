import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Skeleton } from "antd";
import categoriesActions from '../../redux/categories/categoriesActions'
import { Link } from "react-router-dom";

function Categories() {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(categoriesActions.getCategories());
  }, []);

  if (loading || !data.length) return <Skeleton />;

  if (error) return <div>Something went wrong!!!</div>;

  if (data.length) {
    return (
      <div>
        {
          data.map((item, index) => (
            <span key={index} style={{ color: "#fff", fontWeight: "bold", marginLeft: 20 }}><Link to={`category/${item}`}>{item}</Link></span>
          ))
        }
      </div>
    );
  }
}
export default Categories;
