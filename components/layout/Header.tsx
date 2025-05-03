"use client";


export default function Header() {
  return (
    <header className="h-17 w-full flex items-center justify-between px-6 border-b border-gray-200 bg-white">
      {/* Left: Logo + Title */}
      <div className="flex items-center gap-3">
        {/* <Image
          src="/images/logo.png"
          alt="Pump360 Logo"
          width={32}
          height={32}
          className="rounded-full"
        />
        <span className="text-lg font-semibold">Pump 360</span> */}
      </div>

      {/* Right: Reserved for future features */}
      <div className="flex items-center gap-4">
        {/* Add notification bell, avatar, etc. later */}
      </div>
    </header>
  );
}
