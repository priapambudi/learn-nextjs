import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

export default function FoodForm({ defaultFormData, isEdit }) {
  const router = useRouter();
  const [formData, setFormData] = useState(
    defaultFormData || { name: "", imageUrl: "" }
  );
  const onSubmit = async (e) => {
    e.preventDefault();
    const urlEdit = `https://api-bootcamp.do.dibimbing.id/api/v1/update-food/${router.query.id}`;
    const urlCreate = "https://api-bootcamp.do.dibimbing.id/api/v1/create-food";
    const resp = await axios.post(
      isEdit ? urlEdit : urlCreate,
      {
        name: formData.name,
        imageUrl: formData.imageUrl,
        description: " ",
        ingredients: [],
      },
      {
        headers: {
          apiKey: "w05KkI9AWhKxzvPFtXotUva-",
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q",
        },
      }
    );
    if (resp.data.code === "200") router.push("/");
    // console.log(resp);
    // console.log(formData);
  };
  return (
    <form onSubmit={onSubmit} className="">
      {isEdit ? null : <h1>Buat Makanan Baru</h1>}
      <input
        value={formData.name}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, name: e.target.value }))
        }
        placeholder="masukkan nama makanan"
        className="block mt-2 text-black"
      />
      <input
        value={formData.imageUrl}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, imageUrl: e.target.value }))
        }
        placeholder="masukkan url"
        className="block mt-2 text-black"
      />
      <button type="submit" className="p-2 text-white bg-blue-500 rounded">
        {isEdit ? "Update Makanan" : "Buat Makanan"}
      </button>
    </form>
  );
}
