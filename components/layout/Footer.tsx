const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t mt-12">
            <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                    <div className="font-bold text-lg text-green-700">ALXListing</div>
                    <div className="text-sm text-gray-600">© {new Date().getFullYear()} ALX Listing. All rights reserved.</div>
                </div>

                <div className="flex gap-4 text-sm">
                    <a className="hover:underline">About</a>
                    <a className="hover:underline">Privacy</a>
                    <a className="hover:underline">Contact</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;