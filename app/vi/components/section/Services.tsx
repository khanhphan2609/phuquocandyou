import CardService from "../ui/CardService";

const SERVICES = [
  {
    title: "Cộng đồng Phú Quốc",
    href: "https://www.facebook.com/groups/1525487958740662",
    desc: "Nơi kết nối người dân, chia sẻ thông tin, hỏi đáp và đời sống tại Phú Quốc.",
  },
  {
    title: "Việc làm Phú Quốc",
    href: "/",
    desc: "Cập nhật việc làm mới mỗi ngày, tuyển dụng uy tín tại Phú Quốc.",
  },
  {
    title: "Tin tức Phú Quốc",
    href: "/",
    desc: "Tin tức địa phương, kinh tế, xã hội và sự kiện nổi bật tại Phú Quốc.",
  },
  {
    title: "Du lịch Phú Quốc",
    href: "/",
    desc: "Cẩm nang du lịch, địa điểm nổi bật, kinh nghiệm và dịch vụ tại Phú Quốc.",
  },
];

export default function Services() {
  return (
    <section id="Services" className="mb-20">
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
        Dịch vụ của chúng tôi
      </h1>

      <div className="mx-6">
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory no-scrollbar
                  sm:grid sm:grid-cols-2 
                  lg:grid-cols-4 sm:overflow-visible">

          {SERVICES.map((item, index) => (
            <div
              key={index}
              className="min-w-[280px] snap-start sm:min-w-0"
            >
              <CardService title={item.title} href={item.href}>
                <p className="text-sm opacity-80">{item.desc}</p>
              </CardService>
            </div>
          ))}

        </div>
      </div>

    </section>
  );
}
