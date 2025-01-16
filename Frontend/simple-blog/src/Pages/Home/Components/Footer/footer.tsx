import FooterBranding from "./Components/footerBranding";
import FooterLinks from "./Components/footerLinks";
import FooterNewsletter from "./Components/footerNewsletter";

const FooterSection = () => {
  return (
    <div className="footer-container w-full min-h-[300px] flex flex-col sm:flex-row text-white">
      <FooterBranding />
      <FooterLinks />
      <FooterNewsletter />
    </div>
  );
};

export default FooterSection;
