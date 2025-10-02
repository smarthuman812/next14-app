export default function Logo() {
  return (
    <div className="flex items-center gap-2 cursor-pointer group">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        className="w-12 h-12"
      >
        <defs>
          {/* Огненный градиент */}
          <radialGradient id="fire" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="#ff0000">
              <animate
                attributeName="stop-color"
                values="#ff0000;#ff6600;#ff0000"
                dur="4s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#330000">
              <animate
                attributeName="stop-color"
                values="#330000;#660000;#330000"
                dur="6s"
                repeatCount="indefinite"
              />
            </stop>
          </radialGradient>
        </defs>

        {/* Голова с градиентом */}
        <circle cx="100" cy="100" r="60" fill="url(#fire)" stroke="#e11d48" strokeWidth="4" />

        {/* Рожки */}
        <path
          d="M40 40 Q50 10 70 40"
          stroke="#e11d48"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M130 40 Q150 10 160 40"
          stroke="#e11d48"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />

        {/* Глаза */}
        <ellipse cx="75" cy="105" rx="10" ry="6" fill="#fff">
          <animate
            attributeName="ry"
            values="6;1;6"
            dur="3s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="fill"
            values="#ff0000;#ff6666;#ff0000"
            dur="2s"
            repeatCount="indefinite"
          />
        </ellipse>
        <ellipse cx="125" cy="105" rx="10" ry="6" fill="#fff">
          <animate
            attributeName="ry"
            values="6;1;6"
            dur="3s"
            begin="1.5s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="fill"
            values="#ff0000;#ff6666;#ff0000"
            dur="2s"
            begin="1.5s"
            repeatCount="indefinite"
          />
        </ellipse>

        {/* Улыбка */}
        <path
          d="M75 135 Q100 150 125 135"
          stroke="#e11d48"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />

        {/* Хвост */}
        <path
          d="M160 160 Q190 180 160 200"
          stroke="#e11d48"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      <span className="text-red-500 font-bold text-xl group-hover:tracking-wider transition-all">
        EVILS
      </span>
    </div>
  );
}
