export default function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-red-950"></div>
      <div className="absolute w-[800px] h-[800px] rounded-full bg-red-600/30 blur-3xl animate-pulse -top-40 -left-40"></div>
      <div className="absolute w-[700px] h-[700px] rounded-full bg-red-800/20 blur-3xl animate-pulse-slow bottom-0 right-0"></div>
    </div>
  );
}
