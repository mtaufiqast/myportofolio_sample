import SectionTitle from './SectionTitle';

function SocialLink({ label, handle, url, icon: Icon, color }) {
    const isExternal = /^https?:\/\//i.test(url);

    return (
        <a
            href={url}
            // Atribut bernilai undefined tidak ditulis ke HTML
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noreferrer' : undefined}
            aria-label={label}

            className='group flex flex-col items-center gap-3 rounded-2xl bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg'>
            {/* text-2xl → ukuran ikon mengikuti ukuran teks induknya */}
            <span className={`grid size-14 place-items-center rounded-full bgslate-100 text-2xl text-slate-700 transition group-hover:text-white ${color}`}>
                <Icon />
            </span>
            <span>
                <span className='block font-semibold'>{label}</span>
                {/* break-all → email panjang boleh turun baris */}
                <span className='block break-all text-sm text-muted'>{handle}</span>
            </span>
        </a>
    );

}

export default function Contact({ socials }) {
    return (
        <section id='contact' className='bg-slate-50 py-20 sm:py-28'>
            <div className='mx-auto max-w-6xl px-4 sm:px-6'>
                <SectionTitle eyebrow='Contact' title="Let's connect" subtitle='A short invitation for visitors to reach out.' />
                {/* lg:grid-cols-5 → samakan dengan jumlah kanalmu agar tidak ada kolom kosong */}
                <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols5'>
                    {/* {...social} → spread props */}
                    {socials.map((social) => (
                        <SocialLink key={social.label} {...social} />
                    ))}
                </div>
            </div>
        </section>
    );
}
