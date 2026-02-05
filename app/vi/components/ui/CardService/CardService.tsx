import Link from "next/link";
import "./CardService.css";

type CardServiceProps = {
  href?: string;
  title?: string;
  children?: React.ReactNode;
};

export default function CardService({
  href = "/services",
  title,
  children,
}: CardServiceProps) {
  return (
    <article id="cardService">
      <Link href={href} className="block">
        <div
          className={`
            card
            w-full
            h-[350px]
          `}
        >
          <div className="card-info flex flex-col gap-2 text-center px-4">
            {title && (
              <h3 className="title text-lg font-semibold">
                {title}
              </h3>
            )}
            {children}
          </div>
        </div>
      </Link>
    </article>
  );
}
