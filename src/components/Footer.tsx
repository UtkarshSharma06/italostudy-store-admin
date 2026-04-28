import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="py-8 bg-slate-50 border-t border-slate-200 relative z-10 text-center">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center gap-4">
                    <img
                        src="/logo.webp"
                        alt="Italostudy Logo"
                        className="h-6 w-auto grayscale opacity-50"
                    />
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        © {new Date().getFullYear()} ITALOSTUDY STORE ADMINISTRATION.
                    </p>
                    <div className="flex gap-6">
                        <Link to="/privacy" className="text-[9px] font-bold text-slate-400 hover:text-indigo-600 transition-colors uppercase tracking-widest">Privacy</Link>
                        <Link to="/terms" className="text-[9px] font-bold text-slate-400 hover:text-indigo-600 transition-colors uppercase tracking-widest">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
