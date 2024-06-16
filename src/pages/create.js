import FoodForm from "@/components/FoodForm";
import BaseLayout from "@/layouts/BaseLayout";
import axios from "axios";
import { useState } from "react";

export default function CreateFood() {
  //   const [formData, setFormData] = useState({ name: "", imageUrl: "" });
  //   const onSubmit = async (e) => {
  //     e.preventDefault();
  //     const resp = await axios.post(
  //       "https://api-bootcamp.do.dibimbing.id/api/v1/create-food",
  //       {
  //         name: formData.name,
  //         imageUrl: formData.imageUrl,
  //         description: "",
  //         ingredients: [],
  //       },
  //       {
  //         headers: {
  //           apiKey: "w05KkI9AWhKxzvPFtXotUva-",
  //           "Content-Type": "application/json",
  //           Authorization:
  //             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q",
  //         },
  //       }
  //     );
  //     if (resp.data.code === "200") alert("makanan berhasil dibuat");
  //     console.log(resp);
  //     // console.log(formData);
  //   };
  //   return (
  //     <form onSubmit={onSubmit} className="flex flex-col items-center">
  //       <h1>Create Food</h1>
  //       <input
  //         onChange={(e) =>
  //           setFormData((prev) => ({ ...prev, name: e.target.value }))
  //         }
  //         placeholder="masukkan nama makanan"
  //         className="block mt-2 text-black"
  //       />
  //       <input
  //         onChange={(e) =>
  //           setFormData((prev) => ({ ...prev, imageUrl: e.target.value }))
  //         }
  //         placeholder="masukkan url"
  //         className="block mt-2 text-black"
  //       />
  //       <button type="submit" className="p-2 text-white bg-blue-500 rounded">
  //         Tambah
  //       </button>
  //     </form>
  //   );

  return (
    <BaseLayout>
      <FoodForm />
    </BaseLayout>
  );
}
