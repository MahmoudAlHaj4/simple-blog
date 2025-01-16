

type FooterLinkGroupProps  = {
  title: string;
  links: string[];
}

const FooterLinkGroup= ({ title, links } : FooterLinkGroupProps) => {
  return (
    <div className="flex flex-col w-full sm:w-3/6">
      <h1 className="text-xl font-bold pb-4 pt-4">{title}</h1>
      <ul className="flex flex-col">
        {links.map((link, index) => (
          <li
            key={index}
            className="text-lg font-light text-gray-400 leading-relaxed pb-2"
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinkGroup;
