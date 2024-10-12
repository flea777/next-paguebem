import ButtonPrimary from "./ButtonPrimary";


export default function Home() {
  return (
    <div className="bg-gray-100 p-8 mt-10 mb-20 rounded-md w-full max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Quem é a Pague Bem Brasil?</h2>
      <p className="text-gray-600 mb-6">
        Lorem ipsum, dolor sit amet consectetur adipiscing elit. Optio distinctio deserunt qui officiis. Explicabo, velit?
      </p>
      {/* <button className="bg-gray-800 text-white py-2 px-4 rounded-full hover:bg-gray-700">
        Button
      </button> */}
      <ButtonPrimary text="Criar conta" />
    </div>
  );
}
