export default function ProjectCard({ project }) {
    return (
        // group → induk untuk efek group-hover di dalamnya
        <article className='group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg'>
            {/* aspect-video → rasio 16:9 agar semua kartu seragam */}
            <div className='aspect-video overflow-hidden'>
                {project.image ? (
                    // loading="lazy" → dimuat saat mendekati layar; object-cover → tidak gepeng
                    <img src={project.image} alt={project.title} loading='lazy'
                        className='size-full object-cover transition duration-500 group-hover:scale105' />
                ) : (
                    <div className={`grid size-full place-items-center bg-linear-to-br ${project.color}`}>
                        <span className='text-5xl font-extrabold text-white/90'>
                            {project.title.charAt(0)}</span>
                    </div>
                )}
            </div>
            {/* flex-1 → semua kartu sama tinggi */}
            <div className='flex flex-1 flex-col p-6'>
                <p className='text-xs font-semibold uppercase tracking-wide textbrand'>{project.category}</p>
                <h3 className='mt-2 text-lg font-bold'>{project.title}</h3>
                <p className='mt-2 flex-1 text-sm leading-relaxed text-muted'>
                    {project.description}</p>
                <ul className='mt-4 flex flex-wrap gap-2'>
                    {project.tags.map((tag) => (
                        <li key={tag} className='rounded-md bg-slate-100 px-2 py-1 textxs font-medium text-slate-600'>{tag}</li>
                    ))}
                </ul>
                {/* Tab baru hanya jika link sudah berisi alamat sungguhan */}
                <a
                    href={project.link}
                    target={project.link !== '#' ? '_blank' : undefined}
                    rel={project.link !== '#' ? 'noreferrer' : undefined}
                    className='mt-5 inline-flex items-center gap-1 text-sm fontsemibold text-brand'>
                    View details
                    <span className='transition-transform group-hover:translate-x1'>→</span>
                </a>
            </div>
        </article>
    );

}