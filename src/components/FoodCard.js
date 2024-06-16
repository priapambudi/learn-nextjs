import { useRouter } from "next/router";
export default function FoodCard({ food, clickable }) {
  const router = useRouter();
  const onClick = () => {
    router.push(`food/${food.id}`);
  };
  return (
    <li
      className="w-1/4 h-auto p-8 bg-green-800 border rounded cursor-pointer"
      onClick={onClick}
    >
      <img
        className="object-contain w-32 h-auto rounded aspect-square"
        src={food.imageUrl}
        alt={food.name}
      />
      <div>{food.name}</div>
    </li>
  );
}
