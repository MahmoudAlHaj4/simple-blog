import FooterLinkGroup from "./footerLinkGroup";

const FooterLinks = () => {
  return (
    <div className="section-2 w-full sm:w-2/6 h-full flex flex-col sm:flex-row sm:px-4 sm:py-4 p-2">
      <FooterLinkGroup
        title="Company"
        links={[
          "About Us",
          "Freebies",
          "Premium",
          "Blog",
          "Affiliate Program",
          "Get coupon",
        ]}
      />
      <FooterLinkGroup
        title="Help and Support"
        links={[
          "Knowledge Center",
          "Contact Us",
          "Premium Support",
          "Sponsorship",
          "Custom Development",
        ]}
      />
    </div>
  );
};

export default FooterLinks;
