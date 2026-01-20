import Link from 'next/link';

export default function Header() {
  return (
    <Link
      href="/"
      className="grow h-12 flex justify-center items-center xl:hidden text-2xl"
    >
      로아 시세
    </Link>
  );
}
