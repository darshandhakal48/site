export default function Footer() {
  const links = [
    { name: "@dhk.darshu48", url: "https://www.instagram.com/dhk.darshu48/" },
    {
      name: "upwork",
      url: "https://www.upwork.com/freelancers/~01ed04de556584b999",
    },
    { name: "github", url: "https://github.com/darshandhakal48" },
  ];

  return (
    <footer className="mt-12 text-center">
      <div className="flex justify-center space-x-4 tracking-tight">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
}
