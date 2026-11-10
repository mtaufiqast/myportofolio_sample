const year = new Date().getFullYear();
export default function Footer({ name }) {
    return (
        <footer className='border-t border-slate-100 py-8'>
            <div className='mx-auto flex max-w-6xl flex-col items-center justifybetween gap-2 px-4 text-sm text-muted sm:flex-row sm:px-6'>
                <p>© {year} {name}. Built with React & Tailwind CSS.</p>
                <a href='#home' className='font-medium transition-colors hover:textbrand'>Back to top ↑</a>
            </div>
        </footer>
    );
}
