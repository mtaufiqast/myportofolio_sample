
import {
    FaEnvelope,
    FaGithub,
    FaInstagram,
    FaLinkedinIn,
    FaWhatsapp,
} from "react-icons/fa6";

export const profile = {
    name: "Muhammad Taufiq A, S.T., Gr.",
    initials: "MTA",
    tagline: "Ketua Konsentrasi Keahlian PPLG | Guru Produktif & Backend Developer",
    role: "Ketua Konsentrasi Keahlian PPLG",
    tagline: "Tenaga pendidik dan profesional di bidang Rekayasa Perangkat Lunak (PPLG) serta Web & Backend Developer berpengalaman. Saat ini mengemban amanah sebagai Ketua Jurusan / Konsentrasi Keahlian PPLG di SMK Marhas Margahayu. Memiliki keahlian teknis mendalam dalam pemrograman web (PHP Backend, Laravel/Native, Database Relasional), administrasi jaringan, serta manajemen program keahlian vokasi berbasis kemitraan industri. Berkomitmen tinggi mendorong kecakapan teknologi, penyelarasan kurikulum DUDI, serta membimbing peserta didik menjadi lulusan yang kompeten.",
    cvUrl: "https://drive.google.com/file/d/1mxKYi-EuvH0Gv1AFBpaBF9d2rQDSRZJG/view?usp=sharing",
    photo: "/photo.jpg",
    about: [
        "Saya adalah seorang profesional di bidang Rekayasa Perangkat Lunak (PPLG) dengan pengalaman luas dalam pengembangan web dan backend. Saat ini, saya menjabat sebagai Ketua Konsentrasi Keahlian PPLG di SMK Marhas Margahayu, di mana saya bertanggung jawab untuk mengelola program keahlian vokasi berbasis kemitraan industri.",
        "Keahlian teknis saya mencakup pemrograman web menggunakan PHP (Laravel/Native), manajemen database relasional, serta administrasi jaringan. Saya berkomitmen untuk mendorong kecakapan teknologi di kalangan peserta didik dan memastikan kurikulum selaras dengan kebutuhan industri.",
        "Selain itu, saya juga aktif membimbing peserta didik untuk menjadi lulusan yang kompeten dan siap menghadapi tantangan dunia kerja. Dengan pengalaman dan dedikasi saya, saya berusaha memberikan kontribusi positif bagi pengembangan pendidikan vokasi di bidang teknologi.",
        "Saya percaya bahwa pendidikan vokasi yang berkualitas adalah kunci untuk mencetak generasi muda yang siap menghadapi tantangan industri. Oleh karena itu, saya terus berupaya meningkatkan kualitas pengajaran dan pembelajaran di bidang PPLG, serta menjalin kemitraan dengan berbagai pihak untuk mendukung pengembangan kompetensi peserta didik."
    ],
    stats: [
        { value: "10+", label: "Tahun Pengalaman" },
        { value: "100+", label: "Peserta Didik Dibimbing" },
        { value: "5+", label: "Sertifikasi Profesional" }
    ],
    focusAreas: [
        { title: "Pengembangan Web", description: "Membangun aplikasi web menggunakan PHP, Laravel, dan teknologi terkait." },
        { title: "Backend Development", description: "Merancang dan mengelola sistem backend yang efisien dan aman." },
        { title: "Database Management", description: "Mengelola database relasional untuk mendukung aplikasi dan sistem." },
        { title: "Network Administration", description: "Mengatur dan memelihara jaringan komputer untuk mendukung operasional." },
    ],
    domains: ["Web Development", "Backend Development", "Database Management", "Network Administration"]
}

export const skills = [
    {
        title: "Teaching",
        description: "A short sentence about this group of skills.",
        items: ["Skill One", "Skill Two", "Skill Three"],
    },
    {
        title: "Technology",
        description: "A short sentence about this group of skills.",
        items: ["HTML", "CSS", "JavaScript", "React", "Laravel"],
    },
    {
        title: "Tools",
        description: "A short sentence about this group of skills.",
        items: ["VS Code", "Git & GitHub", "Canva"],
    },
    {
        title: "Other",
        description: "A short sentence about this group of skills.",
        items: ["Communication", "Teamwork", "Problem Solving"]
    }
];

export const projects = [
    {
        id: 1,
        title: "Integrated STEM Program for Junior High",
        description:
            "A one-year STEM program for Grades 7–8 with 10 hands-on projects structured around the Engineering Design Process.",
        category: "Curriculum",
        tags: ["STEM", "Kurikulum Merdeka", "Grades 7–8"],
        link: "#",
        image: "/1.jpg",
        color: "from-blue-500 to-cyan-400",
    },
    {
        id: 2,
        title: "Integrated STEM Program for Senior High",
        description:
            "A one-year STEM program for Grades 9–12 with 10 hands-on projects structured around the Engineering Design Process.",
        category: "Curriculum",
        tags: ["STEM", "Kurikulum Merdeka", "Grades 9–12"],
        link: "#",
        image: "/2.jpg",
        color: "from-purple-500 to-pink-400",
    },
    {
        id: 3,
        title: "Online Learning Platform",
        description:
            "A comprehensive online learning platform for managing courses, assignments, and student progress.",
        category: "Technology",
        tags: ["Laravel", "React", "MySQL"],
        link: "#",
        image: "/3.jpg",
        color: "from-green-500 to-teal-400",
    }
]

// icon → KOMPONEN ikon, ditulis TANPA < />
export const socials = [
    {
        label: "LinkedIn", handle: "Your Name", url:
            "https://www.linkedin.com/in/username", icon: FaLinkedinIn, color: "grouphover:bg-sky-700"
    }, // GANTI
    {
        label: "Instagram", handle: "@username", url:
            "https://instagram.com/username", icon: FaInstagram, color: "group-hover:bgpink-600"
    }, // GANTI (url tanpa @)
    // wa.me: 62 + nomor TANPA angka 0 di depan dan tanpa tanda hubung (0812-3456 - 7890 → 6281234567890)
    {
        label: "WhatsApp", handle: "0812-3456-7890", url:
            "https://wa.me/6281234567890", icon: FaWhatsapp, color: "group-hover:bggreen-600"
    }, // GANTI
    {
        label: "GitHub", handle: "username", url: "https://github.com/username",
        icon: FaGithub, color: "group-hover:bg-slate-900"
    }, // GANTI
    // mailto: → membuka aplikasi email pengunjung
    {
        label: "Email", handle: "name@email.com", url: "mailto:name@email.com",
        icon: FaEnvelope, color: "group-hover:bg-brand"
    }, // GANTI
];
