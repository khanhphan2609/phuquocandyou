import "./CardSocialsProof.css";
import { Button } from "./../Button/Button";

interface CardSocialsProofProps {
  image: string;
  name: string;
  feedback: string;
  month: string;
  date: string;
}

export default function CardSocialsProof({
  image,
  name,
  feedback,
  month,
  date,
}: CardSocialsProofProps) {
  return (
    <article className="cardSocialsProof">
      <div className="parent">
        <div className="card">
          <div className="content-box">
            <img src={image} alt={name} className="card-avatar" />
            <span className="card-title">{name}</span>
            <p className="card-content">{feedback}</p>
               <Button
               variant="primary"
               size="sm"
               className="
             relative overflow-hidden
             mt-4
    !bg-[var(--white)]
    !text-[var(--blue-normal)]
    !border !border-[var(--blue-normal)]
    !rounded-full
    shadow-md
    transition-all duration-300 ease-out

    before:absolute
    before:inset-0
    before:bg-[var(--blue-normal)]
    before:translate-x-[-100%]
    before:transition-transform
    before:duration-500
    before:ease-out
    before:z-0

    hover:before:translate-x-0
    hover:!text-[var(--white)]
    hover:shadow-lg

    active:scale-95
  "
>
  <span className="relative z-10">See More</span>
</Button>

          </div>

          <div className="date-box">
            <span className="month">{month}</span>
            <span className="date">{date}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
