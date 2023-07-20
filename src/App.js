import logo from "./logo.svg";
import "./App.css";
import { gql, useQuery } from "@apollo/client";
import LaunchCard from "./LaunchCard";

const FILMS_QUERY = gql`
  query getProductsByAttributeType {
    getProductsByAttributeType(attribute_type: "best_seller", category_id: 3) {
      product_id
      product_name
      category_id
      sku
      created_at
      updated_at
      category_name
      product_price
      short_description
      image
      thumbnail
      small_image
    }
  }
`;

function App() {
  const { data, loading, error } = useQuery(FILMS_QUERY);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;

  console.log(error);
  console.log(data.getProductsByAttributeType);

  return (
    <div>
      <h1>SpaceX Launches</h1>
      <p>test</p>
      <div>
        {data.getProductsByAttributeType.map((prod) => (
          <LaunchCard
            key={prod.product_id}
            name={prod.product_name}
            date={prod.created_at}
            links={prod.image}
            rocket_name={prod.category_name}
            description={prod.short_description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;