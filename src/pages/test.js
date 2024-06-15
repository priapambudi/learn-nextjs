import axios from "axios";
import { useEffect, useState } from "react";

const HalamanUtama = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://api-bootcamp.do.dibimbing.id/api/v1/foods/",
        {
          headers: {
            apiKey: "w05KkI9AWhKxzvPFtXotUva-",
          },
        }
      );
      //   console.log(response);
      setData(response.data.data);
      setLoading(false);
    };

    getData();
  }, []);
  if (loading) return <div>Loading...</div>;
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">List Makanan</h1>
      {data.map((item) => {
        return (
          <div className="" key={item.id}>
            <div className="border rounded-md w-1/2 mx-20">
              <img className="" src={item.imageUrl} alt="makanan" />
              <p className="text-xl mb-2 text-center">{item.name}</p>
              <p className="mb-2 text-center">{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HalamanUtama;
