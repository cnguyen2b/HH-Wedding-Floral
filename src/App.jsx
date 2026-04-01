import { useState, useEffect, createContext, useContext } from "react";

/* ─── Language Context ─── */
const LangContext = createContext("en");
const useLang = () => useContext(LangContext);

/* ─── Translations ─── */
const T = {
  nav: { shop: { en: "Shop", vi: "Cửa Hàng" }, weddings: { en: "Weddings", vi: "Đám Cưới" }, story: { en: "Our Story", vi: "Câu Chuyện" }, contact: { en: "Contact", vi: "Liên Hệ" } },
  hero: {
    above: { en: "Florals & Wedding Day Management · Chicago", vi: "Hoa Cưới & Quản Lý Ngày Cưới · Chicago" },
    sub: { en: "Floral Design & Wedding Coordination", vi: "Thiết Kế Hoa & Điều Phối Đám Cưới" },
    body: { en: "Handcrafted arrangements designed with intention.\nWeddings managed with heart.", vi: "Hoa được tạo tác bằng cả tâm huyết.\nĐám cưới được quản lý bằng cả trái tim." },
    cta1: { en: "Shop Bouquets", vi: "Mua Hoa" }, cta2: { en: "Wedding Services", vi: "Dịch Vụ Cưới" },
    scroll: { en: "Scroll", vi: "Cuộn xuống" },
  },
  shop: {
    above: { en: "Build Your Bouquet", vi: "Tạo Bó Hoa Của Bạn" }, title: { en: "Choose Your Bloom", vi: "Chọn Loại Hoa" },
    body: { en: "Select your signature flower and color — we'll artfully arrange the seasonal filler flowers and greens.", vi: "Chọn loại hoa và màu sắc chủ đạo — chúng tôi sẽ sắp xếp các loại hoa phụ và lá theo mùa một cách nghệ thuật." },
    steps: { 1: { en: "Flower", vi: "Hoa" }, 2: { en: "Color", vi: "Màu" }, 3: { en: "Size", vi: "Kích cỡ" }, 4: { en: "Extras", vi: "Thêm" } },
    colorTitle: { en: "Choose Your Color", vi: "Chọn Màu Sắc" }, sizeTitle: { en: "Select Your Size", vi: "Chọn Kích Cỡ" },
    extrasTitle: { en: "Finishing Touches", vi: "Hoàn Thiện" }, summaryTitle: { en: "Your Arrangement", vi: "Bó Hoa Của Bạn" },
    total: { en: "Total", vi: "Tổng cộng" }, inquire: { en: "Inquire About This Bouquet", vi: "Hỏi Về Bó Hoa Này" },
    delivery: { en: "We'll confirm availability & arrange delivery within Chicago", vi: "Chúng tôi sẽ xác nhận và giao hoa trong khu vực Chicago" },
  },
  weddings: {
    above: { en: "Weddings & Events", vi: "Đám Cưới & Sự Kiện" }, title: { en: "Your Day, Our Heart", vi: "Ngày Của Bạn, Trái Tim Chúng Tôi" },
    body: { en: "From bridal bouquets to day-of coordination, we bring calm, beauty, and intention to every wedding we touch. Full services available in English & Vietnamese.", vi: "Từ hoa cô dâu đến quản lý ngày cưới, chúng tôi mang đến sự bình yên, vẻ đẹp và tâm huyết cho mỗi đám cưới. Dịch vụ đầy đủ bằng Tiếng Anh & Tiếng Việt." },
    cta: { en: "Schedule a Consultation", vi: "Đặt Lịch Tư Vấn" },
    galleryNote: { en: "Portfolio coming soon — follow our journey", vi: "Hình ảnh sắp ra mắt — hãy theo dõi hành trình của chúng tôi" },
  },
  story: {
    above: { en: "Our Story", vi: "Câu Chuyện Của Chúng Tôi" }, title: { en: "Rooted in Love", vi: "Bắt Nguồn Từ Tình Yêu" },
    p1: { en: "We're Christopher (Huân) and Julia (Hậu) — a husband and wife team bringing together our love of flowers, our Vietnamese heritage, and our deep belief that every celebration deserves intentional beauty.", vi: "Chúng tôi là Huân (Christopher) và Hậu (Julia) — một cặp vợ chồng kết hợp tình yêu hoa, di sản Việt Nam, và niềm tin rằng mỗi lễ kỷ niệm đều xứng đáng có vẻ đẹp trọn vẹn." },
    p2: { en: "Based in Chicago, HH Floral & Wedding started from our kitchen table, with Hậu's eye for floral design and Huân's knack for keeping things running smoothly. What began as arranging flowers for friends' weddings became something we couldn't stop — the joy of creating something beautiful for someone's most important day.", vi: "Tại Chicago, HH Floral & Wedding bắt đầu từ bàn bếp của chúng tôi, với con mắt thẩm mỹ về hoa của Hậu và khả năng quản lý mọi thứ suôn sẻ của Huân. Bắt đầu từ việc cắm hoa cho đám cưới bạn bè, niềm vui tạo nên vẻ đẹp cho ngày trọng đại của mọi người đã trở thành đam mê không thể dừng lại." },
    p3: { en: "We offer our services in both English and Vietnamese because we believe everyone deserves to feel understood and at ease, especially on their wedding day.", vi: "Chúng tôi phục vụ bằng cả Tiếng Anh và Tiếng Việt vì chúng tôi tin rằng mọi người đều xứng đáng được hiểu và thoải mái, đặc biệt trong ngày cưới." },
    quote: { en: "Every flower carries a story.", vi: "Mỗi bông hoa đều mang một câu chuyện." },
    values: {
      local: { title: { en: "Locally Sourced", vi: "Nguồn Gốc Địa Phương" }, desc: { en: "We partner with Midwest growers whenever possible.", vi: "Chúng tôi hợp tác với nông dân vùng Midwest khi có thể." } },
      sustainable: { title: { en: "Sustainable", vi: "Bền Vững" }, desc: { en: "Minimal waste, compostable wrapping, reusable vases.", vi: "Giảm thiểu lãng phí, giấy gói phân hủy được, bình hoa tái sử dụng." } },
      bilingual: { title: { en: "Bilingual", vi: "Song Ngữ" }, desc: { en: "Full services in English & Vietnamese.", vi: "Dịch vụ đầy đủ bằng Tiếng Anh & Tiếng Việt." } },
    },
  },
  contact: {
    above: { en: "Get in Touch", vi: "Liên Hệ" }, title: { en: "Let's Create Together", vi: "Hãy Cùng Tạo Nên Vẻ Đẹp" },
    body: { en: "Whether you're ordering a bouquet for someone special or planning your dream wedding — we'd love to hear from you.", vi: "Dù bạn đặt hoa cho người thân yêu hay lên kế hoạch cho đám cưới trong mơ — chúng tôi rất mong được nghe từ bạn." },
    name: { en: "Name", vi: "Họ Tên" }, namePh: { en: "Your name", vi: "Tên của bạn" }, email: { en: "Email", vi: "Email" },
    interest: { en: "I'm interested in...", vi: "Tôi quan tâm đến..." },
    types: { bouquet: { en: "Bouquet Order", vi: "Đặt Hoa" }, wedding: { en: "Wedding Services", vi: "Dịch Vụ Cưới" }, event: { en: "Event Florals", vi: "Hoa Sự Kiện" }, other: { en: "Something Else", vi: "Khác" } },
    message: { en: "Message", vi: "Lời Nhắn" }, messagePh: { en: "Tell us about your vision...", vi: "Hãy chia sẻ về ý tưởng của bạn..." },
    send: { en: "Send Message", vi: "Gửi Tin Nhắn" },
    location: { en: "Chicago, Illinois · Serving all Chicagoland", vi: "Chicago, Illinois · Phục vụ toàn khu vực Chicagoland" },
    copy: { en: "© 2026 HH Floral & Wedding · Huân & Hậu", vi: "© 2026 HH Floral & Wedding · Huân & Hậu" },
  },
};
const t = (obj, lang) => obj[lang] || obj["en"];

/* ─── Placeholder ─── */
function PlaceholderImage({ label, labelVi, height = 300, style = {} }) {
  const lang = useLang();
  return (
    <div style={{ width: "100%", height, background: "linear-gradient(135deg, #E8E0D8 0%, #D4C8BD 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", border: "2px dashed #C4B5A8", position: "relative", overflow: "hidden", ...style }}>
      <div style={{ width: 48, height: 48, borderRadius: "50%", border: "2px solid #A0826D", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12, background: "rgba(255,255,255,0.5)" }}>
        <span style={{ fontSize: 20 }}>📷</span>
      </div>
      <span style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: 12, fontWeight: 600, color: "#6B5B50", letterSpacing: "0.08em", textTransform: "uppercase", textAlign: "center", padding: "0 16px" }}>{lang === "vi" && labelVi ? labelVi : label}</span>
      <span style={{ fontFamily: "'Lora', serif", fontSize: 11, color: "#A0826D", fontStyle: "italic", marginTop: 4 }}>{lang === "vi" ? "Sẽ thay thế sau" : "To be replaced"}</span>
    </div>
  );
}

/* ─── Flower Data — verified Unsplash photo IDs ─── */
const FLOWERS = [
  {
    id: "rose", basePrice: 45,
    name: { en: "Garden Roses", vi: "Hoa Hồng Vườn" },
    description: { en: "Timeless romance, lush petals", vi: "Lãng mạn vượt thời gian, cánh hoa mượt mà" },
    emoji: "🌹",
    colors: [
      { en: "Blush Pink", vi: "Hồng Phấn", hex: "#E8B4B8" }, { en: "Ivory White", vi: "Trắng Ngà", hex: "#F5F0E8" },
      { en: "Deep Red", vi: "Đỏ Đậm", hex: "#8B2035" }, { en: "Dusty Mauve", vi: "Tím Nhạt", hex: "#C4A0A5" },
      { en: "Peach", vi: "Đào", hex: "#FADADD" },
    ],
  },
  {
    id: "peony", basePrice: 55,
    name: { en: "Peonies", vi: "Hoa Mẫu Đơn" },
    description: { en: "Full, romantic blooms", vi: "Nở rộ, lãng mạn" },
    emoji: "🌸",
    colors: [
      { en: "Soft Pink", vi: "Hồng Nhạt", hex: "#F4C2C2" }, { en: "Cream", vi: "Kem", hex: "#FFFDD0" },
      { en: "Coral", vi: "San Hô", hex: "#FF7F7F" }, { en: "White", vi: "Trắng", hex: "#FEFEFA" },
      { en: "Hot Pink", vi: "Hồng Đậm", hex: "#FF69B4" },
    ],
  },
  {
    id: "dahlia", basePrice: 50,
    name: { en: "Dahlias", vi: "Hoa Thược Dược" },
    description: { en: "Bold geometry, striking presence", vi: "Hình dáng táo bạo, nổi bật" },
    emoji: "🌼",
    colors: [
      { en: "Burgundy", vi: "Đỏ Rượu", hex: "#6B2037" }, { en: "Sunset Orange", vi: "Cam Hoàng Hôn", hex: "#E8734A" },
      { en: "Lavender", vi: "Oải Hương", hex: "#B4A7D6" }, { en: "White", vi: "Trắng", hex: "#FEFEFA" },
      { en: "Blush", vi: "Hồng Nhạt", hex: "#E8B4B8" },
    ],
  },
  {
    id: "ranunculus", basePrice: 48,
    name: { en: "Ranunculus", vi: "Hoa Mao Lương" },
    description: { en: "Paper-thin layers, pure elegance", vi: "Cánh mỏng như giấy, tinh tế" },
    emoji: "🏵️",
    colors: [
      { en: "White", vi: "Trắng", hex: "#FEFEFA" }, { en: "Pale Yellow", vi: "Vàng Nhạt", hex: "#FFF8DC" },
      { en: "Pink", vi: "Hồng", hex: "#FFB6C1" }, { en: "Orange", vi: "Cam", hex: "#FFB347" },
      { en: "Red", vi: "Đỏ", hex: "#CD5C5C" },
    ],
  },
  {
    id: "tulip", basePrice: 38,
    name: { en: "Tulips", vi: "Hoa Tulip" },
    description: { en: "Clean lines, modern charm", vi: "Thanh lịch, hiện đại" },
    emoji: "🌷",
    colors: [
      { en: "Purple", vi: "Tím", hex: "#7B5EA7" }, { en: "White", vi: "Trắng", hex: "#FEFEFA" },
      { en: "Pink", vi: "Hồng", hex: "#F8A4B8" }, { en: "Yellow", vi: "Vàng", hex: "#F7DC6F" },
      { en: "Red", vi: "Đỏ", hex: "#C0392B" },
    ],
  },
  {
    id: "lily", basePrice: 42,
    name: { en: "Lilies", vi: "Hoa Ly" },
    description: { en: "Graceful & fragrant", vi: "Duyên dáng & thơm ngát" },
    emoji: "💐",
    colors: [
      { en: "White", vi: "Trắng", hex: "#FEFEFA" }, { en: "Stargazer Pink", vi: "Hồng Ly", hex: "#DB7093" },
      { en: "Orange", vi: "Cam", hex: "#ED8B00" }, { en: "Yellow", vi: "Vàng", hex: "#F7DC6F" },
      { en: "Cream", vi: "Kem", hex: "#FFFDD0" },
    ],
  },
];

const SIZES = [
  { id: "petite", name: { en: "Petite", vi: "Nhỏ" }, stems: { en: "8–10 stems", vi: "8–10 cành" }, mult: 1, icon: "✿" },
  { id: "classic", name: { en: "Classic", vi: "Vừa" }, stems: { en: "15–18 stems", vi: "15–18 cành" }, mult: 1.6, icon: "✿✿" },
  { id: "lush", name: { en: "Lush", vi: "Lớn" }, stems: { en: "24–30 stems", vi: "24–30 cành" }, mult: 2.4, icon: "✿✿✿" },
  { id: "grand", name: { en: "Grand", vi: "Đặc Biệt" }, stems: { en: "36+ stems", vi: "36+ cành" }, mult: 3.2, icon: "✿✿✿✿" },
];

const ADDONS = [
  { id: "vase-ceramic", name: { en: "Ceramic Vase", vi: "Bình Gốm" }, price: 18 },
  { id: "vase-glass", name: { en: "Glass Vase", vi: "Bình Thủy Tinh" }, price: 14 },
  { id: "ribbon", name: { en: "Silk Ribbon Wrap", vi: "Ruy Băng Lụa" }, price: 6 },
  { id: "card", name: { en: "Handwritten Card", vi: "Thiệp Viết Tay" }, price: 4 },
];

const WEDDING_SERVICES = [
  { title: { en: "Day-Of Coordination", vi: "Quản Lý Ngày Cưới" }, description: { en: "We manage every detail on your wedding day so you can be fully present. From vendor coordination to timeline management, we ensure everything flows seamlessly.", vi: "Chúng tôi quản lý mọi chi tiết trong ngày cưới để bạn hoàn toàn tận hưởng. Từ điều phối nhà cung cấp đến quản lý lịch trình, chúng tôi đảm bảo mọi thứ diễn ra suôn sẻ." }, features: { en: ["Timeline management", "Vendor coordination", "Ceremony & reception oversight", "Emergency kit on hand"], vi: ["Quản lý lịch trình", "Điều phối nhà cung cấp", "Giám sát lễ cưới & tiệc", "Bộ dụng cụ khẩn cấp"] }, startingAt: { en: "Starting at $1,500", vi: "Từ $1,500" } },
  { title: { en: "Bridal Florals", vi: "Hoa Cô Dâu" }, description: { en: "Custom bridal bouquets, bridesmaid arrangements, boutonnieres, and ceremony florals designed around your vision and color palette.", vi: "Hoa cô dâu, hoa phù dâu, hoa cài áo và hoa lễ cưới được thiết kế theo ý tưởng và bảng màu của bạn." }, features: { en: ["Bridal bouquet", "Bridesmaid bouquets", "Boutonnieres & corsages", "Ceremony arrangements"], vi: ["Hoa cô dâu", "Hoa phù dâu", "Hoa cài áo", "Hoa lễ cưới"] }, startingAt: { en: "Starting at $800", vi: "Từ $800" } },
  { title: { en: "Full Floral Design", vi: "Thiết Kế Hoa Toàn Bộ" }, description: { en: "Complete floral design for your venue — centerpieces, installations, arches, aisle décor, and everything in between.", vi: "Thiết kế hoa toàn diện cho địa điểm — hoa bàn tiệc, cổng hoa, trang trí lối đi và tất cả mọi thứ." }, features: { en: ["Centerpieces", "Arch & altar florals", "Aisle décor", "Cocktail hour arrangements"], vi: ["Hoa bàn tiệc", "Cổng hoa & bàn thờ", "Trang trí lối đi", "Hoa tiệc cocktail"] }, startingAt: { en: "Starting at $2,500", vi: "Từ $2,500" } },
];

function scrollTo(id) { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); }

/* ─── Decorative SVG Elements ─── */
function FloralAccent({ style }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 200, height: 200, opacity: 0.12, ...style }}>
      <path d="M100 20C100 20 120 60 160 80C120 80 100 100 100 100C100 100 80 80 40 80C80 60 100 20 100 20Z" fill="#C4867A" />
      <path d="M100 100C100 100 120 140 160 160C120 160 100 180 100 180C100 180 80 160 40 160C80 140 100 100 100 100Z" fill="#C4867A" />
      <path d="M20 100C20 100 60 80 80 40C80 80 100 100 100 100C100 100 80 120 80 160C60 120 20 100 20 100Z" fill="#D4A373" />
      <path d="M180 100C180 100 140 80 120 40C120 80 100 100 100 100C100 100 120 120 120 160C140 120 180 100 180 100Z" fill="#D4A373" />
    </svg>
  );
}

function GoldLine({ style }) {
  return <div style={{ height: 1, background: "linear-gradient(90deg, transparent, #C4A87C, transparent)", ...style }} />;
}

/* ─── Components ─── */
function LangToggle({ lang, setLang }) {
  return (
    <div style={{ display: "flex", alignItems: "center", background: "rgba(61,43,31,0.06)", borderRadius: 20, padding: 3 }}>
      {["en", "vi"].map((l) => (
        <button key={l} onClick={() => setLang(l)} style={{ padding: "6px 14px", borderRadius: 18, border: "none", background: lang === l ? "#3D2B1F" : "transparent", color: lang === l ? "#FDF9F4" : "#6B5B50", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.04em", cursor: "pointer", transition: "all 0.25s ease" }}>{l === "en" ? "EN" : "VI"}</button>
      ))}
    </div>
  );
}

function Nav({ lang, setLang }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => { const h = () => setScrolled(window.scrollY > 40); window.addEventListener("scroll", h); return () => window.removeEventListener("scroll", h); }, []);
  const links = [[t(T.nav.shop, lang), "shop"], [t(T.nav.weddings, lang), "weddings"], [t(T.nav.story, lang), "story"], [t(T.nav.contact, lang), "contact"]];

  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: scrolled ? "10px 28px" : "18px 28px", background: scrolled ? "rgba(253,249,244,0.95)" : "transparent", backdropFilter: scrolled ? "blur(12px)" : "none", borderBottom: scrolled ? "1px solid rgba(180,140,110,0.12)" : "none", display: "flex", alignItems: "center", justifyContent: "space-between", transition: "all 0.4s ease" }}>
      <div style={{ cursor: "pointer", display: "flex", flexDirection: "column", lineHeight: 1.15 }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 19, fontWeight: 700, color: "#3D2B1F" }}>HH Floral <span style={{ fontWeight: 400, fontStyle: "italic", color: "#C4867A" }}>&</span> Wedding</span>
        <span style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: 9.5, color: "#C4867A", letterSpacing: "0.18em", textTransform: "uppercase" }}>Huân & Hậu · Chicago</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 28 }} className="nav-desktop">
        {links.map(([label, target]) => (
          <button key={target} onClick={() => scrollTo(target)} style={{ background: "none", border: "none", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: 12.5, fontWeight: 500, color: "#5C4033", letterSpacing: "0.06em", textTransform: "uppercase", cursor: "pointer", padding: "4px 0", borderBottom: "1.5px solid transparent", transition: "border-color 0.3s" }}
            onMouseEnter={(e) => (e.target.style.borderBottomColor = "#C4867A")} onMouseLeave={(e) => (e.target.style.borderBottomColor = "transparent")}>{label}</button>
        ))}
        <LangToggle lang={lang} setLang={setLang} />
      </div>
      <div style={{ display: "none", alignItems: "center", gap: 12 }} className="nav-mobile">
        <LangToggle lang={lang} setLang={setLang} />
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", fontSize: 22, color: "#3D2B1F", cursor: "pointer" }}>{menuOpen ? "✕" : "☰"}</button>
      </div>
      {menuOpen && (
        <div style={{ position: "absolute", top: "100%", left: 0, right: 0, background: "rgba(253,249,244,0.98)", backdropFilter: "blur(12px)", padding: "20px 28px", display: "flex", flexDirection: "column", gap: 14, borderBottom: "1px solid rgba(180,140,110,0.12)" }}>
          {links.map(([label, target]) => (
            <button key={target} onClick={() => { scrollTo(target); setMenuOpen(false); }} style={{ background: "none", border: "none", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: 14, fontWeight: 500, color: "#5C4033", letterSpacing: "0.06em", textTransform: "uppercase", cursor: "pointer", textAlign: "left", padding: "6px 0" }}>{label}</button>
          ))}
        </div>
      )}
    </nav>
  );
}

function Hero() {
  const lang = useLang();
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  return (
    <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "100px 24px 60px", position: "relative", overflow: "hidden" }}>
      {/* Rose/gold warm gradient blobs */}
      <div style={{ position: "absolute", top: "5%", left: "-8%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(196,134,122,0.18) 0%, transparent 70%)", filter: "blur(50px)" }} />
      <div style={{ position: "absolute", bottom: "10%", right: "-6%", width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle, rgba(196,168,124,0.15) 0%, transparent 70%)", filter: "blur(45px)" }} />
      <div style={{ position: "absolute", top: "40%", left: "50%", transform: "translate(-50%,-50%)", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(232,180,184,0.1) 0%, transparent 60%)", filter: "blur(60px)" }} />

      {/* Decorative floral SVGs */}
      <FloralAccent style={{ position: "absolute", top: "8%", left: "5%", transform: "rotate(-15deg)" }} />
      <FloralAccent style={{ position: "absolute", bottom: "12%", right: "5%", transform: "rotate(30deg)" }} />
      <FloralAccent style={{ position: "absolute", top: "15%", right: "12%", transform: "rotate(75deg) scale(0.7)" }} />

      {/* Gold decorative lines */}
      <div style={{ position: "absolute", top: "22%", left: 0, right: 0, opacity: 0.15 }}>
        <GoldLine />
      </div>
      <div style={{ position: "absolute", bottom: "18%", left: 0, right: 0, opacity: 0.1 }}>
        <GoldLine />
      </div>

      <div style={{ opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(30px)", transition: "all 1s cubic-bezier(0.23,1,0.32,1)", maxWidth: 900, width: "100%", position: "relative", zIndex: 2 }}>
        <p style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: "#C4867A", marginBottom: 24, fontWeight: 500 }}>{t(T.hero.above, lang)}</p>

        {/* Decorative gold diamond */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 20 }}>
          <div style={{ width: 60, height: 1, background: "linear-gradient(90deg, transparent, #C4A87C)" }} />
          <div style={{ width: 8, height: 8, background: "#C4A87C", transform: "rotate(45deg)" }} />
          <div style={{ width: 60, height: 1, background: "linear-gradient(90deg, #C4A87C, transparent)" }} />
        </div>

        {/* Hero image placeholder */}
        <div style={{ marginBottom: 36, maxWidth: 680, margin: "0 auto 36px" }}>
          <PlaceholderImage label="Hero Photo — Your Best Arrangement" labelVi="Ảnh Bìa — Bó Hoa Đẹp Nhất" height={340} style={{ borderRadius: 2, border: "2px dashed #C4A87C" }} />
        </div>

        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(48px, 8vw, 88px)", fontWeight: 700, color: "#3D2B1F", lineHeight: 1.0, marginBottom: 6, letterSpacing: "-0.03em" }}>
          Huân <span style={{ fontStyle: "italic", fontWeight: 400, color: "#C4867A" }}> & </span> Hậu
        </h1>

        <p style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: 12, letterSpacing: "0.22em", color: "#C4867A", marginBottom: 16, textTransform: "uppercase", fontWeight: 500 }}>{t(T.hero.sub, lang)}</p>

        {/* Gold accent line below subtitle */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 28 }}>
          <div style={{ width: 40, height: 1, background: "#C4A87C" }} />
          <span style={{ color: "#C4A87C", fontSize: 10 }}>✦</span>
          <div style={{ width: 40, height: 1, background: "#C4A87C" }} />
        </div>

        <p style={{ fontFamily: "'Lora', serif", fontSize: "clamp(16px, 2.2vw, 20px)", color: "#6B5B50", maxWidth: 560, margin: "0 auto 40px", lineHeight: 1.7, whiteSpace: "pre-line" }}>{t(T.hero.body, lang)}</p>

        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <button onClick={() => scrollTo("shop")} style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", padding: "16px 40px", background: "#3D2B1F", color: "#FDF9F4", border: "none", cursor: "pointer", transition: "all 0.3s" }}
            onMouseEnter={(e) => { e.target.style.background = "#5C4033"; e.target.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.target.style.background = "#3D2B1F"; e.target.style.transform = "translateY(0)"; }}>{t(T.hero.cta1, lang)}</button>
          <button onClick={() => scrollTo("weddings")} style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", padding: "16px 40px", background: "transparent", color: "#3D2B1F", border: "1.5px solid #C4867A", cursor: "pointer", transition: "all 0.3s" }}
            onMouseEnter={(e) => { e.target.style.background = "#C4867A"; e.target.style.color = "#FDF9F4"; e.target.style.borderColor = "#C4867A"; }}
            onMouseLeave={(e) => { e.target.style.background = "transparent"; e.target.style.color = "#3D2B1F"; e.target.style.borderColor = "#C4867A"; }}>{t(T.hero.cta2, lang)}</button>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 32, display: "flex", flexDirection: "column", alignItems: "center", gap: 8, opacity: loaded ? 0.5 : 0, transition: "opacity 1.5s ease 0.8s", animation: "floatUp 2s ease-in-out infinite" }}>
        <span style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4867A" }}>{t(T.hero.scroll, lang)}</span>
        <span style={{ color: "#C4867A", fontSize: 18 }}>↓</span>
      </div>
    </section>
  );
}

function FlowerBuilder() {
  const lang = useLang();
  const [selFlower, setSelFlower] = useState(null);
  const [selColor, setSelColor] = useState(null);
  const [selSize, setSelSize] = useState("classic");
  const [selAddons, setSelAddons] = useState([]);
  const [step, setStep] = useState(1);
  const flower = FLOWERS.find((f) => f.id === selFlower);
  const size = SIZES.find((s) => s.id === selSize);
  const sizePrice = size && flower ? Math.round(flower.basePrice * size.mult) : 0;
  const addonsPrice = selAddons.reduce((sum, aId) => { const a = ADDONS.find((x) => x.id === aId); return sum + (a ? a.price : 0); }, 0);
  const totalPrice = sizePrice + addonsPrice;
  const toggleAddon = (id) => setSelAddons((p) => p.includes(id) ? p.filter((x) => x !== id) : [...p, id]);

  return (
    <section id="shop" style={{ padding: "100px 24px", maxWidth: 1100, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <p style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: "#C4867A", marginBottom: 16 }}>{t(T.shop.above, lang)}</p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px,5vw,48px)", color: "#3D2B1F", fontWeight: 700, marginBottom: 12 }}>{t(T.shop.title, lang)}</h2>
        <p style={{ fontFamily: "'Lora', serif", fontSize: 16, color: "#6B5B50", maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>{t(T.shop.body, lang)}</p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginTop: 20 }}>
          <div style={{ width: 40, height: 1, background: "#C4A87C" }} /><span style={{ color: "#C4A87C", fontSize: 10 }}>✦</span><div style={{ width: 40, height: 1, background: "#C4A87C" }} />
        </div>
      </div>

      {/* Steps */}
      <div style={{ display: "flex", justifyContent: "center", gap: 48, marginBottom: 48, flexWrap: "wrap" }}>
        {[1,2,3,4].map((num) => (
          <div key={num} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, opacity: num <= step ? 1 : 0.35, transition: "opacity 0.3s", cursor: num <= step ? "pointer" : "default" }}
            onClick={() => { if (num === 1) setStep(1); if (num === 2 && selFlower) setStep(2); if (num === 3 && selColor !== null) setStep(3); if (num === 4 && selSize) setStep(4); }}>
            <div style={{ width: 36, height: 36, borderRadius: "50%", background: step >= num ? "#3D2B1F" : "transparent", border: `1.5px solid ${step >= num ? "#3D2B1F" : "#C4B5A8"}`, color: step >= num ? "#FDF9F4" : "#6B5B50", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: 13, fontWeight: 600, transition: "all 0.3s" }}>{num}</div>
            <span style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: step >= num ? "#3D2B1F" : "#A0826D" }}>{t(T.shop.steps[num], lang)}</span>
          </div>
        ))}
      </div>

      {/* Step 1: Flowers — 3×2 grid */}
      {step >= 1 && (
        <div style={{ marginBottom: 48 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, maxWidth: 720, margin: "0 auto" }} className="flower-grid">
            {FLOWERS.map((f) => (
              <button key={f.id} onClick={() => { setSelFlower(f.id); setSelColor(null); setStep(2); }} style={{
                background: selFlower === f.id ? "#3D2B1F" : "#FFFFFF",
                border: selFlower === f.id ? "1.5px solid #3D2B1F" : "1.5px solid #E8E0D8",
                padding: "24px 14px 20px", cursor: "pointer", textAlign: "center",
                transition: "all 0.3s", borderRadius: 2,
              }}
                onMouseEnter={(e) => { if (selFlower !== f.id) e.currentTarget.style.borderColor = "#C4867A"; }}
                onMouseLeave={(e) => { if (selFlower !== f.id) e.currentTarget.style.borderColor = "#E8E0D8"; }}>
                <div style={{ fontSize: 36, marginBottom: 10 }}>{f.emoji}</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, fontWeight: 600, color: selFlower === f.id ? "#FDF9F4" : "#3D2B1F", marginBottom: 4 }}>{t(f.name, lang)}</div>
                <div style={{ fontFamily: "'Lora', serif", fontSize: 12, color: selFlower === f.id ? "rgba(253,249,244,0.6)" : "#8A7A6D", marginBottom: 8 }}>{t(f.description, lang)}</div>
                <div style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: 13, fontWeight: 700, color: selFlower === f.id ? "#C4A87C" : "#C4867A", marginBottom: 6 }}>from ${f.basePrice}</div>
                <div style={{ fontFamily: "'Lora', serif", fontSize: 10, color: selFlower === f.id ? "rgba(253,249,244,0.35)" : "#C4B5A8", fontStyle: "italic" }}>{lang === "vi" ? "ảnh sẽ thay thế" : "photo to be replaced"}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Colors */}
      {step >= 2 && flower && (
        <div style={{ marginBottom: 48, animation: "fadeInUp 0.4s ease" }}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, color: "#3D2B1F", marginBottom: 20, textAlign: "center" }}>{t(T.shop.colorTitle, lang)}</h3>
          <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
            {flower.colors.map((c, idx) => (
              <button key={idx} onClick={() => { setSelColor(idx); setStep(3); }} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, padding: "14px 18px", background: selColor === idx ? "#FAF5F0" : "transparent", border: selColor === idx ? "1.5px solid #3D2B1F" : "1.5px solid #E8E0D8", cursor: "pointer", transition: "all 0.3s", borderRadius: 2, minWidth: 85 }}>
                <div style={{ width: 38, height: 38, borderRadius: "50%", background: c.hex, border: "2px solid rgba(61,43,31,0.1)", boxShadow: selColor === idx ? `0 0 0 3px #FDF9F4, 0 0 0 5px ${c.hex}` : "none", transition: "box-shadow 0.3s" }} />
                <span style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: 11, color: "#5C4033", textAlign: "center" }}>{t(c, lang)}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 3: Size */}
      {step >= 3 && (
        <div style={{ marginBottom: 48, animation: "fadeInUp 0.4s ease" }}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, color: "#3D2B1F", marginBottom: 20, textAlign: "center" }}>{t(T.shop.sizeTitle, lang)}</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 14, maxWidth: 850, margin: "0 auto" }}>
            {SIZES.map((s) => (
              <button key={s.id} onClick={() => { setSelSize(s.id); setStep(4); }} style={{ padding: "22px 18px", background: selSize === s.id ? "#3D2B1F" : "#FFFFFF", border: selSize === s.id ? "1.5px solid #3D2B1F" : "1.5px solid #E8E0D8", cursor: "pointer", textAlign: "center", transition: "all 0.3s", borderRadius: 2 }}>
                <div style={{ fontSize: 15, marginBottom: 6, letterSpacing: 4, color: selSize === s.id ? "#C4A87C" : "#C4867A" }}>{s.icon}</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 600, color: selSize === s.id ? "#FDF9F4" : "#3D2B1F", marginBottom: 4 }}>{t(s.name, lang)}</div>
                <div style={{ fontFamily: "'Lora', serif", fontSize: 13, color: selSize === s.id ? "rgba(253,249,244,0.6)" : "#8A7A6D", marginBottom: 8 }}>{t(s.stems, lang)}</div>
                <div style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: 18, fontWeight: 700, color: selSize === s.id ? "#FDF9F4" : "#3D2B1F" }}>${flower ? Math.round(flower.basePrice * s.mult) : "—"}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 4: Addons + Summary */}
      {step >= 4 && (
        <div style={{ animation: "fadeInUp 0.4s ease" }}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, color: "#3D2B1F", marginBottom: 20, textAlign: "center" }}>{t(T.shop.extrasTitle, lang)}</h3>
          <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap", marginBottom: 48 }}>
            {ADDONS.map((a) => (
              <button key={a.id} onClick={() => toggleAddon(a.id)} style={{ padding: "14px 22px", background: selAddons.includes(a.id) ? "#FAF5F0" : "#FFFFFF", border: selAddons.includes(a.id) ? "1.5px solid #3D2B1F" : "1.5px solid #E8E0D8", cursor: "pointer", transition: "all 0.3s", borderRadius: 2, display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 20, height: 20, border: selAddons.includes(a.id) ? "1.5px solid #3D2B1F" : "1.5px solid #C4B5A8", background: selAddons.includes(a.id) ? "#3D2B1F" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", color: "#FDF9F4", fontSize: 12, borderRadius: 2 }}>{selAddons.includes(a.id) && "✓"}</div>
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: 13, fontWeight: 500, color: "#3D2B1F" }}>{t(a.name, lang)}</div>
                  <div style={{ fontFamily: "'Lora', serif", fontSize: 12, color: "#8A7A6D" }}>+${a.price}</div>
                </div>
              </button>
            ))}
          </div>
          {flower && (
            <div style={{ maxWidth: 520, margin: "0 auto", background: "#FFFFFF", border: "1.5px solid #E8E0D8", overflow: "hidden" }}>
              <div style={{ width: "100%", height: 100, background: "linear-gradient(135deg, #F5EDE6, #EDE3D9)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 48 }}>
                {flower.emoji}
              </div>
              <div style={{ padding: 32 }}>
                <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, color: "#3D2B1F", marginBottom: 20, textAlign: "center" }}>{t(T.shop.summaryTitle, lang)}</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "'Lora', serif", fontSize: 14, color: "#5C4033" }}>
                    <span>{t(flower.name, lang)} — {selColor !== null ? t(flower.colors[selColor], lang) : ""}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "'Lora', serif", fontSize: 14, color: "#5C4033" }}>
                    <span>{t(size.name, lang)} ({t(size.stems, lang)})</span><span>${sizePrice}</span>
                  </div>
                  {selAddons.map((aId) => { const a = ADDONS.find((x) => x.id === aId); return (
                    <div key={aId} style={{ display: "flex", justifyContent: "space-between", fontFamily: "'Lora', serif", fontSize: 14, color: "#8A7A6D" }}><span>{t(a.name, lang)}</span><span>+${a.price}</span></div>
                  ); })}
                  <div style={{ borderTop: "1px solid #E8E0D8", paddingTop: 12, marginTop: 8, display: "flex", justifyContent: "space-between", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: 18, fontWeight: 700, color: "#3D2B1F" }}>
                    <span>{t(T.shop.total, lang)}</span><span>${totalPrice}</span>
                  </div>
                </div>
                <button style={{ width: "100%", marginTop: 24, padding: 16, background: "#3D2B1F", color: "#FDF9F4", border: "none", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer", transition: "background 0.3s" }}
                  onMouseEnter={(e) => (e.target.style.background = "#5C4033")} onMouseLeave={(e) => (e.target.style.background = "#3D2B1F")}
                  onClick={() => alert(lang === "en" ? "Thank you! We'll be in touch about your bouquet. 💐" : "Cảm ơn bạn! Chúng tôi sẽ liên hệ về bó hoa của bạn. 💐")}>{t(T.shop.inquire, lang)}</button>
                <p style={{ textAlign: "center", fontFamily: "'Lora', serif", fontSize: 12, color: "#A0826D", marginTop: 12, fontStyle: "italic" }}>{t(T.shop.delivery, lang)}</p>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}

function WeddingSection() {
  const lang = useLang();
  return (
    <section id="weddings" style={{ padding: "100px 24px", background: "linear-gradient(180deg, #F5EDE6 0%, #F0E4DA 100%)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: "#C4867A", marginBottom: 16 }}>{t(T.weddings.above, lang)}</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px,5vw,48px)", color: "#3D2B1F", fontWeight: 700, marginBottom: 12 }}>{t(T.weddings.title, lang)}</h2>
          <p style={{ fontFamily: "'Lora', serif", fontSize: 16, color: "#6B5B50", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>{t(T.weddings.body, lang)}</p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginTop: 20 }}>
            <div style={{ width: 40, height: 1, background: "#C4A87C" }} /><span style={{ color: "#C4A87C", fontSize: 10 }}>✦</span><div style={{ width: 40, height: 1, background: "#C4A87C" }} />
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16, marginBottom: 32 }}>
          <PlaceholderImage label="Bridal Bouquet" labelVi="Hoa Cô Dâu" height={240} />
          <PlaceholderImage label="Ceremony Setup" labelVi="Trang Trí Lễ Cưới" height={240} />
          <PlaceholderImage label="Centerpieces" labelVi="Hoa Bàn Tiệc" height={240} />
        </div>
        <p style={{ textAlign: "center", fontFamily: "'Lora', serif", fontSize: 14, color: "#A0826D", fontStyle: "italic", marginBottom: 48 }}>{t(T.weddings.galleryNote, lang)}</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24 }}>
          {WEDDING_SERVICES.map((svc, i) => (
            <div key={i} style={{ background: "#FFFFFF", padding: 36, border: "1.5px solid #E8E0D8", transition: "transform 0.3s, box-shadow 0.3s" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(61,43,31,0.08)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, color: "#3D2B1F", fontWeight: 700, marginBottom: 16 }}>{t(svc.title, lang)}</h3>
              <p style={{ fontFamily: "'Lora', serif", fontSize: 14, color: "#6B5B50", lineHeight: 1.7, marginBottom: 20 }}>{t(svc.description, lang)}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
                {t(svc.features, lang).map((feat, j) => (
                  <div key={j} style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: 12, color: "#5C4033" }}>
                    <span style={{ color: "#C4867A", fontSize: 10 }}>✦</span>{feat}
                  </div>
                ))}
              </div>
              <p style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: 14, fontWeight: 700, color: "#C4867A" }}>{t(svc.startingAt, lang)}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <button onClick={() => scrollTo("contact")} style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", padding: "16px 48px", background: "#3D2B1F", color: "#FDF9F4", border: "none", cursor: "pointer", transition: "all 0.3s" }}
            onMouseEnter={(e) => (e.target.style.background = "#5C4033")} onMouseLeave={(e) => (e.target.style.background = "#3D2B1F")}>{t(T.weddings.cta, lang)}</button>
        </div>
      </div>
    </section>
  );
}

function StorySection() {
  const lang = useLang();
  return (
    <section id="story" style={{ padding: "100px 24px", maxWidth: 900, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <p style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: "#C4867A", marginBottom: 16 }}>{t(T.story.above, lang)}</p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px,5vw,48px)", color: "#3D2B1F", fontWeight: 700, marginBottom: 16 }}>{t(T.story.title, lang)}</h2>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
          <div style={{ width: 40, height: 1, background: "#C4A87C" }} /><span style={{ color: "#C4A87C", fontSize: 10 }}>✦</span><div style={{ width: 40, height: 1, background: "#C4A87C" }} />
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center", marginBottom: 48 }} className="story-grid">
        <PlaceholderImage label="Photo of Huân & Hậu" labelVi="Ảnh Huân & Hậu" height={400} style={{ borderRadius: 2 }} />
        <div style={{ fontFamily: "'Lora', serif", fontSize: 15.5, color: "#5C4033", lineHeight: 1.8, display: "flex", flexDirection: "column", gap: 20 }}>
          <p>{t(T.story.p1, lang)}</p>
          <p>{t(T.story.p2, lang)}</p>
        </div>
      </div>
      <div style={{ textAlign: "center", maxWidth: 650, margin: "0 auto", marginBottom: 48 }}>
        <p style={{ fontFamily: "'Lora', serif", fontSize: 15.5, color: "#5C4033", lineHeight: 1.8, marginBottom: 24 }}>{t(T.story.p3, lang)}</p>
        <p style={{ fontStyle: "italic", color: "#C4867A", fontFamily: "'Playfair Display', serif", fontSize: 20 }}>"{t(T.story.quote, lang)}"</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 24, marginTop: 48 }}>
        {["local", "sustainable", "bilingual"].map((key) => (
          <div key={key} style={{ textAlign: "center", padding: 24 }}>
            <h4 style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.06em", color: "#3D2B1F", marginBottom: 8, textTransform: "uppercase" }}>{t(T.story.values[key].title, lang)}</h4>
            <p style={{ fontFamily: "'Lora', serif", fontSize: 14, color: "#6B5B50", lineHeight: 1.6 }}>{t(T.story.values[key].desc, lang)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  const lang = useLang();
  const [form, setForm] = useState({ name: "", email: "", type: "bouquet", message: "" });
  return (
    <section id="contact" style={{ padding: "100px 24px", background: "#3D2B1F", color: "#FDF9F4" }}>
      <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
        <p style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: "#C4A87C", marginBottom: 16 }}>{t(T.contact.above, lang)}</p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px,5vw,42px)", fontWeight: 700, marginBottom: 12 }}>{t(T.contact.title, lang)}</h2>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 16 }}>
          <div style={{ width: 40, height: 1, background: "#C4A87C" }} /><span style={{ color: "#C4A87C", fontSize: 10 }}>✦</span><div style={{ width: 40, height: 1, background: "#C4A87C" }} />
        </div>
        <p style={{ fontFamily: "'Lora', serif", fontSize: 15, color: "rgba(253,249,244,0.7)", marginBottom: 48, lineHeight: 1.7 }}>{t(T.contact.body, lang)}</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 20, textAlign: "left" }}>
          <div>
            <label style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "#C4A87C", marginBottom: 8, display: "block" }}>{t(T.contact.name, lang)}</label>
            <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder={t(T.contact.namePh, lang)} style={{ width: "100%", padding: "14px 16px", background: "rgba(253,249,244,0.08)", border: "1px solid rgba(196,168,124,0.3)", color: "#FDF9F4", fontFamily: "'Lora', serif", fontSize: 15, borderRadius: 2, outline: "none", boxSizing: "border-box" }} />
          </div>
          <div>
            <label style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "#C4A87C", marginBottom: 8, display: "block" }}>{t(T.contact.email, lang)}</label>
            <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" style={{ width: "100%", padding: "14px 16px", background: "rgba(253,249,244,0.08)", border: "1px solid rgba(196,168,124,0.3)", color: "#FDF9F4", fontFamily: "'Lora', serif", fontSize: 15, borderRadius: 2, outline: "none", boxSizing: "border-box" }} />
          </div>
          <div>
            <label style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "#C4A87C", marginBottom: 8, display: "block" }}>{t(T.contact.interest, lang)}</label>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {["bouquet", "wedding", "event", "other"].map((val) => (
                <button key={val} onClick={() => setForm({ ...form, type: val })} style={{ padding: "10px 18px", background: form.type === val ? "rgba(196,168,124,0.2)" : "transparent", border: form.type === val ? "1px solid #C4A87C" : "1px solid rgba(253,249,244,0.15)", color: "#FDF9F4", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: 12, cursor: "pointer", transition: "all 0.3s", borderRadius: 2 }}>{t(T.contact.types[val], lang)}</button>
              ))}
            </div>
          </div>
          <div>
            <label style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "#C4A87C", marginBottom: 8, display: "block" }}>{t(T.contact.message, lang)}</label>
            <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder={t(T.contact.messagePh, lang)} rows={5} style={{ width: "100%", padding: "14px 16px", background: "rgba(253,249,244,0.08)", border: "1px solid rgba(196,168,124,0.3)", color: "#FDF9F4", fontFamily: "'Lora', serif", fontSize: 15, borderRadius: 2, outline: "none", resize: "vertical", boxSizing: "border-box" }} />
          </div>
          <button onClick={() => alert(lang === "en" ? "Thank you for reaching out! We'll be in touch soon. 🌸" : "Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm. 🌸")} style={{ padding: 16, background: "#C4A87C", color: "#3D2B1F", border: "none", fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer", transition: "all 0.3s", borderRadius: 2 }}
            onMouseEnter={(e) => (e.target.style.background = "#D4B88C")} onMouseLeave={(e) => (e.target.style.background = "#C4A87C")}>{t(T.contact.send, lang)}</button>
        </div>
        <div style={{ marginTop: 64, paddingTop: 32, borderTop: "1px solid rgba(196,168,124,0.2)", display: "flex", flexDirection: "column", gap: 8, alignItems: "center" }}>
          <p style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: 12, color: "rgba(253,249,244,0.5)" }}>{t(T.contact.location, lang)}</p>
          <p style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: 12, color: "rgba(253,249,244,0.5)" }}>hello@hhfloralwedding.com · (312) 555-0187</p>
          <p style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontSize: 11, color: "rgba(253,249,244,0.3)", marginTop: 16 }}>{t(T.contact.copy, lang)}</p>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [lang, setLang] = useState("en");
  return (
    <LangContext.Provider value={lang}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Lora:ital,wght@0,400;0,500;1,400&family=Be+Vietnam+Pro:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #FDF9F4; color: #3D2B1F; -webkit-font-smoothing: antialiased; }
        ::placeholder { color: rgba(253,249,244,0.35); }
        ::selection { background: rgba(196,134,122,0.3); }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes floatUp { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #FDF9F4; }
        ::-webkit-scrollbar-thumb { background: #C4B5A8; border-radius: 3px; }
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile { display: flex !important; }
          .story-grid { grid-template-columns: 1fr !important; }
          .flower-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (min-width: 769px) { .nav-mobile { display: none !important; } }
      `}</style>
      <div style={{ minHeight: "100vh" }}>
        <Nav lang={lang} setLang={setLang} />
        <Hero />
        <FlowerBuilder />
        <WeddingSection />
        <StorySection />
        <ContactSection />
      </div>
    </LangContext.Provider>
  );
}
