
interface ButtonPrimaryProps {
  text: string;
  onClick?: () => void;
}

export default function ButtonPrimary({ text, onClick }: ButtonPrimaryProps) {
  return (
    <button
      className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition duration-300"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
