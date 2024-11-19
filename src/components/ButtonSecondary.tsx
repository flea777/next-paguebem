import Link from "next/link";
interface ButtonSecondaryProps {
  text: string;
  href:string;
}

export default function ButtonSecondary({ text, href }: ButtonSecondaryProps) {
  const link = href ? href : "/";
  return (
    <Link
      className=" bg-[#FEB700] font-bold text-white px-4 py-2 rounded-full border-none hover:bg-green-600 transition duration-300"
      href={link}
    >
      {text}
    </Link>
  );
}
