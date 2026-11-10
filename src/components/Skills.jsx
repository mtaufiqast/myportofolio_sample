import SectionTitle from './SectionTitle';
function SkillGroup({ title, description, items }) {
    return (
        <div className='flex flex-col rounded-2xl bg-white p-6 shadow-sm'>
            <h3 className='text-lg font-bold'>{title}</h3>
            <p className='mt-2 text-sm leading-relaxed text-muted'>{description}
            </p>
            <hr className='my-5 border-slate-100' />
            {/* flex-wrap → label otomatis turun baris jika penuh */}
            <ul className='flex flex-wrap gap-2'>
                {items.map((item) => (
                    <li key={item} className='rounded-lg border border-slate-200 bgwhite px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:borderbrand hover:text-brand'>{item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function Skills({ skills }) {
    return (
        <section id='skills' className='bg-slate-50 py-20 sm:py-28'>
            <div className='mx-auto max-w-6xl px-4 sm:px-6'>
                <SectionTitle
                    eyebrow='Skills'
                    title='What I bring to the table'
                    subtitle='A short sentence that summarizes your skills.'
                />
                <div className='grid gap-6 md:grid-cols-3'>
                    {/* {...group} → SPREAD PROPS: sama dengan title={group.title} description={group.description} items={group.items} */}
                    {skills.map((group) => (
                        <SkillGroup key={group.title} {...group} />
                    ))}
                </div>
            </div>
        </section>
    );
}
