
const FooterNewsletter = () => {
  return (
    <div className="section-3 w-full sm:w-2/6 h-full sm:px-4 sm:py-4 px-4 py-2">
      <h1 className="text-xl font-bold pb-4 pt-4">Our Newsletter</h1>
      <input
        type="text"
        placeholder="Subscribe to Our Newsletter"
        className="p-2 w-3/4 rounded-lg"
      />
      <button className="p-2 w-3/4 bg-yellow-400 mt-2 rounded-lg">
        Subscribe
      </button>
      <div className="social-icons">{/* Add social icons here */}</div>
    </div>
  );
};

export default FooterNewsletter;
