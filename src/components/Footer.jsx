import { portfolioData } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="px-6 pb-10 pt-4 text-center text-sm text-muted">
      <p>
        © {new Date().getFullYear()} {portfolioData.profile.name}
      </p>
    </footer>
  );
}
