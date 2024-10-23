
interface ButtonSecondaryProps {
  text: string;
  onClick?: () => void;
}

export default function ButtonSecondary({ text, onClick }: ButtonSecondaryProps) {
  return (
    <button
      className=" bg-[#FEB700] font-bold text-white px-4 py-2 rounded-full border-none hover:bg-green-600 transition duration-300"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
