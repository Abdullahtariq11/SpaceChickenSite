import Image from "next/image";
import React from "react";

interface MenuItemOption {
  label: string;
  price: number;
}

interface MenuItemCardProps {
  name: string;
  price?: number;
  image: string;
  options?: MenuItemOption[];
  note?: string;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ name, price, image, options, note }) => {
  return (
    <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl shadow-xl hover:shadow-yellow-400/30 ring-1 ring-gray-700 hover:ring-yellow-400 transform hover:scale-105 transition-all duration-300">
      <div className="relative">
        <Image
          src={image}
          alt={name}
          width={400}
          height={300}
          className="rounded-t-2xl w-full h-56 object-cover"
        />
        <div className="absolute top-2 right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
          NEW
        </div>
      </div>

      <div className="p-4 space-y-2">
        <h3 className="text-yellow-400 font-extrabold text-lg md:text-xl tracking-wide">
          {name}
        </h3>

        {options && options.length > 0 ? (
          <ul className="text-white text-sm md:text-base space-y-1">
            {options.map((opt, idx) => (
              <li key={idx} className="flex justify-between">
                <span>{opt.label}</span>
                <span className="font-semibold">${opt.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        ) : price !== undefined ? (
          <p className="text-white text-base md:text-lg font-semibold">
            ${price.toFixed(2)}
          </p>
        ) : (
          <p className="text-white text-sm italic">Price varies</p>
        )}

        {note && (
          <p className="text-xs text-gray-300 italic mt-2 border-t border-gray-700 pt-2">
            {note}
          </p>
        )}
      </div>
    </div>
  );
};

export default MenuItemCard;