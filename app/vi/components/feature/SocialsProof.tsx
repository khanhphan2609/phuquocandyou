
import CardSocialsProof from "../ui/CardSocialsProof";

const SOCIALS_PROOF = [
  {
    image: "/images/thumnails/feedback_profile_img/cat-roblox-man-face-matching.png",
    name: "Nguyễn Thị A",
    feedback: "Dịch vụ tuyệt vời, đội ngũ rất chuyên nghiệp và tận tâm.",
    date: "JAN",
    dateNum: "15",
  },
  {

    image: "/images/thumnails/feedback_profile_img/KhanhPhan.png",
    name: "Phan Văn Khánh",
    feedback: "Rất hài lòng với chất lượng dịch vụ, sẽ tiếp tục sử dụng.",
    date: "FEB",
    dateNum: "22",
  },
  {
    image: "/images/avatar3.jpg",
    name: "Phạm Văn C",
    feedback: "Đội ngũ hỗ trợ khách hàng rất nhanh và hiệu quả.",
    date: "MAR",
    dateNum: "10",
  },
  {
    image: "/images/avatar4.jpg",
    name: "Lê Thị D",
    feedback: "Trải nghiệm tuyệt vời, giá cả hợp lý và dịch vụ chu đáo.",
    date: "APR",
    dateNum: "28",
  },
];

export default function SocialsProof() {
  return (
    <section className="py-20">
      <div className="container mx-auto text-center">
        <h1
          className="
  text-center
  text-2xl md:text-3xl
  font-extrabold
  uppercase
  tracking-widest
  mb-10
  text-[var(--primary)]
"
        >
          Feedback
        </h1>

        <div className="flex justify-center gap-4 px-10">
          {SOCIALS_PROOF.map((item, index) => (
            <CardSocialsProof
              key={index}
              image={item.image}
              name={item.name}
              feedback={item.feedback}
              month={item.date}
              date={item.dateNum}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
