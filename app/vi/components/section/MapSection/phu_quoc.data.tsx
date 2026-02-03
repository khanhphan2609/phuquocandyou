
/* ================= TYPES ================= */
export type Location = {
  id: string;
  name: string;
  desc: string;
  link: string;
  thumbnail: string;
};

export type RegionKey = "north" | "south";

export type RegionData = {
  id: RegionKey;
  title: string;
  desc: string;
  color: string;
  locations: Location[];
};

/* ================= DATA ================= */
export const REGIONS: Record<RegionKey, RegionData> = {
  north: {
    id: "north",
    title: "Bắc Đảo",
    color: "var(--blue-darker)",
    desc: "Bắc đảo Phú Quốc là vùng đất của thiên nhiên nguyên bản, nơi rừng nguyên sinh, bờ biển hoang sơ và không gian yên tĩnh vẫn được giữ gìn gần như trọn vẹn. Khu vực này bao gồm Gành Dầu, Cửa Cạn, Bãi Thơm và Cửa Dương – nổi bật với mật độ xây dựng thấp, cảnh quan xanh và hệ sinh thái đa dạng. Bắc đảo phù hợp cho các mô hình nghỉ dưỡng cao cấp, retreat sinh thái và những trải nghiệm sống chậm, riêng tư, gắn kết với thiên nhiên.",
    locations: [
      {
        id: "ganh-dau",
        name: "Gành Dầu",
        desc: "Vùng đất nơi rừng nguyên sinh chạm vào biển, nổi bật với bờ cát yên bình và tầm nhìn hướng Campuchia. Gành Dầu mang vẻ đẹp hoang sơ, phù hợp cho nghỉ dưỡng riêng tư và trải nghiệm thiên nhiên nguyên bản.",
        link: "/",
        thumbnail: "/images/thumnails/1.png",
      },
      {
        id: "cua-can",
        name: "Cửa Cạn",
        desc: "Dòng sông Cửa Cạn hiền hòa uốn mình ra biển, tạo nên khung cảnh giao thoa độc đáo giữa rừng, nước ngọt và đại dương. Khu vực lý tưởng cho du lịch sinh thái và không gian sống chậm, gần gũi tự nhiên.",
        link: "/",
        thumbnail: "/images/thumnails/2.png",
      },
      {
        id: "bai-thom",
        name: "Bãi Thơm",
        desc: "Bãi biển dài, vắng và trong xanh, được bao bọc bởi rừng và làng chài truyền thống. Bãi Thơm mang nét đẹp mộc mạc, tách biệt, thích hợp cho retreat và phát triển bền vững.",
        link: "/",
        thumbnail: "/images/thumnails/3.png",
      },
      {
        id: "cua-duong",
        name: "Cửa Dương",
        desc: "Khu vực chuyển tiếp giữa Bắc và trung tâm đảo, sở hữu quỹ đất rộng, cảnh quan xanh và khả năng kết nối thuận tiện. Cửa Dương phù hợp cho các mô hình nghỉ dưỡng sinh thái kết hợp cư trú lâu dài.",
        link: "/",
        thumbnail: "/images/thumnails/7.png",
      },
    ],
  },
  south: {
    id: "south",
    title: "Nam Đảo",
    color: "var(--blue-darker)",
    desc: "Nam đảo Phú Quốc là trung tâm phát triển sôi động của đảo, nơi hội tụ hạ tầng hiện đại, cảng biển, sân bay và các điểm du lịch trọng điểm. Khu vực này bao gồm Dương Đông, Dương Tơ, Hàm Ninh và An Thới – nổi tiếng với hoạt động du lịch biển đảo, lặn ngắm san hô và các tuyến kết nối quốc tế. Nam đảo mang nhịp sống năng động, giàu tiềm năng kinh tế, phù hợp cho đô thị du lịch, dịch vụ – thương mại và đầu tư dài hạn.",
    locations: [
      {
        id: "duong-dong",
        name: "Dương Đông",
        desc: "Trung tâm hành chính – thương mại của Phú Quốc, nơi hội tụ chợ đêm, cảng biển và nhịp sống sôi động. Dương Đông là trái tim của đảo, phù hợp cho dịch vụ, thương mại và lưu trú du lịch.",
        link: "/",
        thumbnail: "/images/thumnails/4.png",
      },
      {
        id: "duong-to",
        name: "Dương Tơ",
        desc: "Khu vực chiến lược gần sân bay quốc tế, nổi bật với các bãi biển đẹp và quỹ đất phát triển lớn. Dương Tơ là điểm giao thoa giữa nghỉ dưỡng cao cấp và hạ tầng đô thị hiện đại.",
        link: "/",
        thumbnail: "/images/thumnails/5.png",
      },
      {
        id: "ham-ninh",
        name: "Hàm Ninh",
        desc: "Làng chài cổ kính nằm ven biển phía Đông, nổi tiếng với bình minh, cầu gỗ và không gian yên bình. Hàm Ninh lưu giữ trọn vẹn nét văn hóa bản địa và nhịp sống biển đảo truyền thống.",
        link: "/",
        thumbnail: "/images/thumnails/6.png",
      },
      {
        id: "an-thoi",
        name: "An Thới",
        desc: "Cửa ngõ phía Nam Phú Quốc, kết nối quần đảo An Thới và các tuyến du lịch biển quốc tế. Khu vực năng động, giàu tiềm năng cho logistics, du lịch biển và phát triển đô thị mới.",
        link: "/",
        thumbnail: "/images/thumnails/8.png",
      },
    ],
  },
};
