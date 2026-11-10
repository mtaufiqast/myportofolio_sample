import SectionTitle from "./SectionTitle";

function StatsCard({ value, label }) {
    return (
        <div className="rounded-2xl border border-slate-100 bg-slate-50 p-3 text-center sm:p-5">
            <p className="text-2xl font-extrabold text-brand sm:text-3xl">{value}</p>
            <p className="mt-1 text-xs text-muted sm:text-sm">{label}</p>
        </div>
    );
}

function FocusItem({ number, title, description }) {
    return (
        <li className="flex gap-4">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-soft text-sm font-bold text-brand">
                {String(number).padStart(2, "0")}
            </span>
            <div>
                <h4 className="font-semibold">{title}</h4>
                <p className="mt-1 text-sm leading-relaxed text-muted">{description}</p>
            </div>
        </li>
    )
}

export default function About({ profile }) {
    return (
        <section id='about' className='py-20 sm:py-28'>
            <div className='mx-auto max-w-6xl px-4 sm:px-6'>
                {/* GANTI judul sesuai dirimu */}
                <SectionTitle eyebrow='About Me' title='A short headline about you' />
                <div className='grid gap-10 md:grid-cols-2 md:items-start'>
                    {/* KIRI: paragraf; key={index} aman karena urutan tidak berubah*/}
                    <div className='space-y-4 text-justify text-lg leading-relaxed text-muted'>
                        {
                            profile.about.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                    </div>
                    {/* KANAN: statistik, What I Do, Domains */}
                    <div className='space-y-6'>
                        <div className='grid grid-cols-3 gap-4'>
                            {profile.stats.map((stat) => (
                                <StatsCard key={stat.label} value={stat.value} label={stat.label} />
                            ))}
                        </div>
                        <div className='rounded-2xl border border-slate-100 bg-white p-6 shadow-sm'>
                            <h3 className='text-lg font-bold'>What I Do</h3>
                            <ul className='mt-5 space-y-5'>
                                {/* index + 1 → nomor dimulai dari 1 */}
                                {profile.focusAreas.map((area, index) => (
                                    <FocusItem key={area.title} number={index + 1} title=
                                        {area.title} description={area.description} />
                                ))}
                            </ul>
                        </div>
                        <div className='rounded-2xl border border-slate-100 bg-white p-6 shadow-sm'>
                            <h3 className='text-lg font-bold'>Domains</h3>
                            <ul className='mt-4 flex flex-wrap gap-2'>
                                {profile.domains.map((domain) => (
                                    <li key={domain} className='rounded-full bg-brand-soft px-3 py-1.5 text-sm font-medium text-brand'>{domain}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );


}