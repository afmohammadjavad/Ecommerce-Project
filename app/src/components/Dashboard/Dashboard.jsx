import { useSelector } from "react-redux";
import {Table} from 'antd'

function Dashboard() {
  const { data } = useSelector(state => state.products)
  
  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: image => <img src={image} width={60} height={80} alt="" />
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
  ];

  return (
    <div>
      <Table
        dataSource={data}
        columns={columns}
        // pagination={{ current: page, onChange: (val) => setPage(val) }}
      />
    </div>
  );
}

export default Dashboard;