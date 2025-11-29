import Link from "next/link";
import { useState } from "react";

const accommodationTypes = ["Rooms", "Villa", "Mansion", "Countryside", "Apartment", "Ski Chalet"];

export default function Header() {
    const [query, setQuery] = useState("");

    return (
        <header className="w-full bg-white shadow-md">
            <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <Link href="/" className="font-extrabold text-xl text-green-700">ALX<span className="text-gray-600">Listing</span>
                    </Link>
                </div>

                <div className="flex-1 mx-6 hidden md:flex items-center">
                    <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search location, property or keywords"
                        className="w-full border rounded-full px-4 py-2 shadow-sm focus:ring-2 focus:ring-green-200"
                    />
                    <button className="ml-3 px-4 py-2 bg-green-600 text-white rounded-full">Search</button>
                </div>

                <div className="flex items-center gap-3">
                    <Link href="/signin" className="px-3 py-1 text-sm">Sign In</Link>
                    <Link href="/signup" className="px-3 py-1 bg-green-600 text-white rounded-md text-sm">Sign Up</Link>
                </div>
            </div>

            <div className="bg-green-50">
                <div className="max-w-6xl mx-auto px-4 py-2 flex gap-3 overflow-auto">
                    {accommodationTypes.map((t) => (
                        <button key={t} className="whitespace-nowrap px-3 py-1 rounded-full border text-sm bg-white/70 hover:bg-green-100">
                            {t}
                        </button>
                    ))}
                </div>
            </div>
        </header>
    );
}
