import Link from "next/link";

interface ButtonSecondaryProps {
  text: string;
  href: string;
  className?: string;
}

export default function ButtonSecondary({ text, href, className }: ButtonSecondaryProps) {
  const link = href ? href : "/";
  const buttonClass = `px-4 py-2 text-white font-bold bg-[#FEB700] rounded-3xl border-none hover:bg-green-600 transform hover:scale-100 transition-all duration-300 ease-in-out ${className}`;
  return (
    <Link
      className={buttonClass}
      href={link}
    >
      {text}
    </Link>
  );
}
