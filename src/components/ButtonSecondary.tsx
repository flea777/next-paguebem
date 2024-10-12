
interface ButtonSecondaryProps {
  text: string;
  onClick?: () => void;
}

export default function ButtonSecondary({ text, onClick }: ButtonSecondaryProps) {
  return (
    <button
      className="border border-black text-black px-4 py-2 rounded-full hover:bg-gray-200 transition duration-300"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
