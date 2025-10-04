export default function Footer() {
  return (
    <footer className="mt-auto py-8 border-t border-[var(--border)] bg-[var(--panel)]/70 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <span className="text-sm text-gray-400">
          © 2025 EVILS Project. All rights reserved.
        </span>
        <div className="flex space-x-4">
          <a href="#" className="text-sm hover:underline">Privacy</a>
          <a href="#" className="text-sm hover:underline">Terms</a>
        </div>
      </div>
    </footer>
  );
}
