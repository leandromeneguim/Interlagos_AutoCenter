import { SiWhatsapp, SiFacebook, SiInstagram } from "react-icons/si";

export default function SocialButtons() {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
      <a
        href="https://wa.me/553432310679"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:bg-[#128C7E] text-white p-3 rounded-full transition-colors"
      >
        <SiWhatsapp className="w-6 h-6" />
      </a>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#1877F2] hover:bg-[#166FE5] text-white p-3 rounded-full transition-colors"
      >
        <SiFacebook className="w-6 h-6" />
      </a>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#E4405F] hover:bg-[#D93250] text-white p-3 rounded-full transition-colors"
      >
        <SiInstagram className="w-6 h-6" />
      </a>
    </div>
  );
}
