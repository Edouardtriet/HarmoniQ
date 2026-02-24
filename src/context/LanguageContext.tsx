import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "id";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations for English and Indonesian
const translations = {
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.customer_portal": "Customer Portal",
    "nav.innovation": "Innovation",
    "nav.support": "Support",
    "nav.login": "Login",
    
    // Hero Section
    "hero.tagline": "Powering Indonesia's Future",
    "hero.title": "Clean Sustainable Energy for the Nation",
    "hero.description": "Providing reliable electricity for over 75 million customers across the Indonesian archipelago through innovative and sustainable energy solutions.",
    "hero.cta_primary": "Customer Portal",
    "hero.cta_secondary": "Learn About Our Services",
    "hero.uptime": "100% Uptime",
    "hero.network_status": "Network Status",
    "hero.support": "24/7 Support",
    "hero.always_available": "Always Available",
    
    // Features Section
    "features.title": "Our Services",
    "features.heading": "Modern Energy Solutions for Modern Indonesia",
    "features.description": "PLN provides a comprehensive suite of services designed to meet the diverse energy needs of homes, businesses, and industries across the Indonesian archipelago.",
    
    "features.smart_grid.title": "Smart Grid Technology",
    "features.smart_grid.description": "Advanced monitoring and distribution systems that optimize electricity delivery across Indonesia's varied geography.",
    
    "features.energy_storage.title": "Energy Storage Solutions",
    "features.energy_storage.description": "Cutting-edge battery systems to store surplus energy and ensure continuous power supply during peak demand.",
    
    "features.renewable.title": "Renewable Integration",
    "features.renewable.description": "Expanding our renewable energy portfolio including solar, hydro, geothermal, and wind power throughout the archipelago.",
    
    "features.monitoring.title": "Usage Monitoring",
    "features.monitoring.description": "Real-time consumption tracking and analytics to help customers optimize their energy usage and reduce costs.",
    
    "features.security.title": "Infrastructure Security",
    "features.security.description": "Protected energy grid with advanced cybersecurity measures to ensure reliable service for all Indonesians.",
    
    "features.coverage.title": "National Coverage",
    "features.coverage.description": "Expansive network reaching remote islands and rural areas, connecting all of Indonesia to reliable power.",
    
    "features.reliability.title": "24/7 Service Reliability",
    "features.reliability.description": "Continuous monitoring and maintenance to prevent outages and ensure consistent electricity supply.",
    
    "features.ev.title": "Electric Vehicle Support",
    "features.ev.description": "Growing network of charging stations to support Indonesia's transition to electric transportation.",
    
    "features.insights.title": "Energy Insights",
    "features.connections.heading": "Powering 75+ Million Connections",
    "features.connections.description": "As Indonesia's national electricity company, PLN serves over 75 million customers across the archipelago, delivering essential energy for homes, businesses, and industries.",
    
    "features.electrification": "Electrification Rate",
    "features.capacity": "Installed Capacity",
    "features.renewable_energy": "Renewable Energy",
    
    "features.green_initiative": "Green Initiative",
    "features.growth": "+15% YoY Growth",
    "features.grid_reliability": "Grid Reliability",
    "features.uptime": "99.7% Uptime",
    
    // Pricing Section (Customer Portal)
    "portal.title": "Customer Portals",
    "portal.heading": "Tailored Solutions for All Customer Types",
    "portal.description": "Access specialized services through our customer portals designed for your specific needs, whether you're a homeowner, business operator, or industrial facility manager.",
    
    "portal.residential.name": "Residential",
    "portal.residential.description": "For homes and residential electricity needs",
    "portal.residential.features": [
      "Online bill payment",
      "Usage monitoring",
      "Outage reporting",
      "Connection requests",
      "Energy-saving tips"
    ],
    "portal.residential.cta": "Access Portal",
    
    "portal.business.name": "Business",
    "portal.business.description": "For small to medium businesses",
    "portal.business.badge": "Most Popular",
    "portal.business.features": [
      "Business account management",
      "Priority customer service",
      "Energy efficiency consultation",
      "Peak demand management",
      "Multiple location monitoring",
      "Detailed usage analytics"
    ],
    "portal.business.cta": "Access Portal",
    
    "portal.industrial.name": "Industrial",
    "portal.industrial.description": "For large industrial operations",
    "portal.industrial.features": [
      "High-voltage service management",
      "Custom infrastructure solutions",
      "Load balancing tools",
      "Redundancy planning",
      "Dedicated account representative",
      "Emergency response priority",
      "Custom tariff options"
    ],
    "portal.industrial.cta": "Contact Industrial Team",
    
    "portal.new_connection.title": "New Connections",
    "portal.new_connection.heading": "Need a New Electric Connection?",
    "portal.new_connection.description": "Whether you're building a new home, opening a business location, or expanding industrial operations, PLN provides streamlined services for establishing new electrical connections.",
    "portal.new_connection.cta": "Apply Online",
    
    "portal.steps.apply": "Apply",
    "portal.steps.apply.desc": "Submit application through our online portal",
    "portal.steps.assessment": "Assessment",
    "portal.steps.assessment.desc": "Technical evaluation of your location",
    "portal.steps.installation": "Installation",
    "portal.steps.installation.desc": "Professional setup by PLN technicians",
    "portal.steps.activation": "Activation",
    "portal.steps.activation.desc": "Final inspection and power activation",
    
    // Innovation Section
    "innovation.title": "Innovation",
    "innovation.heading": "Pioneering Sustainable Energy for Indonesia",
    "innovation.description": "Discover PLN's innovative projects that are transforming Indonesia's energy landscape and leading the way toward a greener, more sustainable future.",
    
    "innovation.solar.title": "Solar Archipelago Initiative",
    "innovation.solar.description": "Harnessing the abundant sunshine across Indonesia's islands with advanced solar farms and distributed rooftop systems.",
    "innovation.solar.capacity": "Capacity",
    "innovation.solar.locations": "Locations",
    
    "innovation.geothermal.title": "Geothermal Expansion Project",
    "innovation.geothermal.description": "Utilizing Indonesia's position on the Ring of Fire to expand clean geothermal energy generation across volcanic regions.",
    "innovation.geothermal.capacity": "Capacity",
    "innovation.geothermal.projects": "Projects",
    
    "innovation.grid.title": "Smart Grid Implementation",
    "innovation.grid.description": "Deploying intelligent grid technology to optimize power distribution and reduce losses across our national network.",
    "innovation.grid.efficiency": "Efficiency",
    "innovation.grid.coverage": "Coverage",
    
    "innovation.wind.title": "Wind Power Corridors",
    "innovation.wind.description": "Building strategic wind farms in Indonesia's high-wind coastal areas and mountain passes to diversify renewable sources.",
    "innovation.wind.capacity": "Capacity",
    "innovation.wind.turbines": "Turbines",
    
    "innovation.learn_more": "Learn More",
    
    "innovation.sustainability.title": "Sustainability Commitment",
    "innovation.sustainability.heading": "Net Zero Carbon Emissions by 2060",
    "innovation.sustainability.description": "PLN is committed to Indonesia's clean energy transition, with ambitious targets to reduce carbon emissions while ensuring reliable electricity for all citizens.",
    
    "innovation.renewable_mix.title": "50% Renewable Energy Mix by 2040",
    "innovation.renewable_mix.description": "Aggressive expansion of solar, wind, geothermal, and hydro capacity",
    
    "innovation.coal.title": "Phase Out Coal Plants by 2050",
    "innovation.coal.description": "Gradual decommissioning of coal power plants and transition to cleaner alternatives",
    
    "innovation.carbon.title": "Carbon Capture Implementation",
    "innovation.carbon.description": "Investing in carbon capture technology for existing thermal plants",
    
    "innovation.progress.title": "Renewable Progress",
    "innovation.progress.current": "Current: 23.5%",
    "innovation.progress.target": "Target: 50%",
    
    "innovation.reduction.title": "Carbon Reduction",
    "innovation.reduction.current": "Current: 18%",
    "innovation.reduction.target": "Target: 100%",
    
    // FAQ Section
    "faq.title": "Support",
    "faq.heading": "Frequently Asked Questions",
    "faq.description": "Find answers to common questions about PLN services, billing, connections, and more.",
    
    "faq.outage.question": "How do I report a power outage?",
    "faq.outage.answer": "You can report a power outage through our 24/7 contact center at 123, through the PLN Mobile app, or via the Customer Portal on our website. Please provide your customer ID and location details for faster resolution.",
    
    "faq.bill.question": "How can I check my electricity bill?",
    "faq.bill.answer": "You can check your electricity bill through multiple channels: the PLN Mobile app, our Customer Portal website, by visiting the nearest PLN office, or by calling our contact center at 123. Bills are typically issued monthly.",
    
    "faq.payment.question": "What payment methods are accepted for electricity bills?",
    "faq.payment.answer": "PLN accepts various payment methods including online banking, mobile banking, credit/debit cards, e-wallets (GoPay, OVO, DANA, LinkAja), ATMs, minimarkets (Indomaret, Alfamart), post offices, and direct payment at PLN offices.",
    
    "faq.application.question": "How do I apply for a new electricity connection?",
    "faq.application.answer": "New connections can be requested through our online Customer Portal, the PLN Mobile app, or by visiting the nearest PLN office. You'll need to provide identification, property ownership documents, and details about your required power capacity.",
    
    "faq.renewable.question": "What is PLN's renewable energy program?",
    "faq.renewable.answer": "PLN is committed to increasing renewable energy in our generation mix, with programs including solar panel installation, geothermal development, hydroelectric expansion, and wind farm construction. Customers can participate through net metering programs for rooftop solar installations.",
    
    "faq.upgrade.question": "How do I upgrade my power capacity?",
    "faq.upgrade.answer": "Power capacity upgrades can be requested through the Customer Portal, PLN Mobile app, or at PLN offices. After submitting your request, a technical team will assess feasibility, provide a quote, and schedule the upgrade upon payment.",
    
    "contact.title": "Contact Us",
    "contact.heading": "Get in Touch with PLN",
    "contact.description": "Our customer service team is available 24/7 to assist you with any questions or concerns.",
    
    "contact.phone.title": "Phone Support",
    "contact.phone.description": "Call our 24/7 customer service line for immediate assistance.",
    "contact.phone.number": "123",
    "contact.phone.note": "(toll-free from any phone in Indonesia)",
    
    "contact.email.title": "Email Support",
    "contact.email.description": "Send us an email and we'll respond within 24 hours.",
    "contact.email.address": "pln123@pln.co.id",
    "contact.email.note": "(for general inquiries)",
    
    "contact.office.title": "Head Office",
    "contact.office.description": "Visit our head office in Jakarta for in-person assistance.",
    "contact.office.name": "PLN Head Office",
    "contact.office.address": "Jl. Trunojoyo Blok M I No.135, Kebayoran Baru, Jakarta Selatan, DKI Jakarta 12160, Indonesia",
    
    "contact.form.title": "Have a Specific Question?",
    "contact.form.name": "Full Name",
    "contact.form.name.placeholder": "Your name",
    "contact.form.email": "Email Address",
    "contact.form.email.placeholder": "Your email",
    "contact.form.subject": "Subject",
    "contact.form.subject.placeholder": "How can we help you?",
    "contact.form.message": "Message",
    "contact.form.message.placeholder": "Please describe your question or issue in detail",
    "contact.form.submit": "Send Message",
    
    // Mobile App Section
    "app.title": "Mobile App",
    "app.heading": "Manage Your Electricity Anywhere, Anytime",
    "app.description": "Download the PLN Mobile app to manage your electricity account, monitor usage, pay bills, report outages, and access a range of services from your smartphone.",
    
    "app.features.bill.title": "Bill Management",
    "app.features.bill.description": "View and pay your electricity bills directly through the app",
    "app.features.usage.title": "Usage Monitoring",
    "app.features.usage.description": "Track your electricity consumption in real-time",
    "app.features.outage.title": "Outage Reporting",
    "app.features.outage.description": "Report and check the status of power outages in your area",
    "app.features.payment.title": "Multiple Payment Options",
    "app.features.payment.description": "Pay using various payment methods including e-wallets and credit cards",
    
    "app.download.ios": "Download on the App Store",
    "app.download.android": "GET IT ON Google Play",
    "app.scan": "Scan to download",
    "app.tips": "Energy Saving Tips",
    
    // Footer
    "footer.description": "PT PLN (Persero) is Indonesia's state-owned electricity company, providing power generation, transmission, and distribution services throughout the archipelago.",
    "footer.address": "Jl. Trunojoyo Blok M I No.135, Jakarta 12160, Indonesia",
    "footer.callcenter": "123 (Call Center)",
    "footer.email": "pln123@pln.co.id",
    
    "footer.customer.title": "Customer Services",
    "footer.customer.pay": "Pay Bills",
    "footer.customer.report": "Report Outage",
    "footer.customer.connection": "New Connection",
    "footer.customer.change": "Service Change",
    
    "footer.about.title": "About PLN",
    "footer.about.profile": "Company Profile",
    "footer.about.history": "History",
    "footer.about.leadership": "Leadership",
    "footer.about.sustainability": "Sustainability",
    
    "footer.resources.title": "Resources",
    "footer.resources.calculator": "Energy Calculator",
    "footer.resources.map": "Outage Map",
    "footer.resources.tips": "Energy Saving Tips",
    "footer.resources.faq": "FAQ",
    
    "footer.legal.title": "Legal",
    "footer.legal.terms": "Terms of Service",
    "footer.legal.privacy": "Privacy Policy",
    "footer.legal.standards": "Service Standards",
    "footer.legal.regulatory": "Regulatory Compliance",
    
    "footer.stats.employees": "Employees Nationwide",
    "footer.stats.customers": "Customers Served",
    "footer.stats.reliability": "Service Reliability",
    
    "footer.copyright": "© 2025 PT PLN (Persero). All rights reserved.",
    "footer.links.privacy": "Privacy Policy",
    "footer.links.terms": "Terms of Service",
    "footer.links.whistleblower": "Whistleblower System",
    "footer.links.sitemap": "Site Map",
    
    // Language
    "language.select": "Select Language",
    "language.en": "English",
    "language.id": "Bahasa Indonesia"
  },
  id: {
    // Navbar
    "nav.home": "Beranda",
    "nav.services": "Layanan",
    "nav.customer_portal": "Portal Pelanggan",
    "nav.innovation": "Inovasi",
    "nav.support": "Dukungan",
    "nav.login": "Masuk",
    
    // Hero Section
    "hero.tagline": "Mengalirkan Listrik untuk Masa Depan Indonesia",
    "hero.title": "Energi Berkelanjutan dan Bersih untuk Negeri",
    "hero.description": "Menyediakan listrik handal bagi lebih dari 75 juta pelanggan di seluruh kepulauan Indonesia melalui solusi energi yang inovatif dan berkelanjutan.",
    "hero.cta_primary": "Portal Pelanggan",
    "hero.cta_secondary": "Pelajari Layanan Kami",
    "hero.uptime": "100% Waktu Aktif",
    "hero.network_status": "Status Jaringan",
    "hero.support": "Dukungan 24/7",
    "hero.always_available": "Selalu Tersedia",
    
    // Features Section
    "features.title": "Layanan Kami",
    "features.heading": "Solusi Energi Modern untuk Indonesia Modern",
    "features.description": "PLN menyediakan rangkaian layanan komprehensif yang dirancang untuk memenuhi kebutuhan energi beragam rumah, bisnis, dan industri di seluruh kepulauan Indonesia.",
    
    "features.smart_grid.title": "Teknologi Smart Grid",
    "features.smart_grid.description": "Sistem pemantauan dan distribusi canggih yang mengoptimalkan pengiriman listrik di seluruh geografi Indonesia yang beragam.",
    
    "features.energy_storage.title": "Solusi Penyimpanan Energi",
    "features.energy_storage.description": "Sistem baterai mutakhir untuk menyimpan kelebihan energi dan memastikan pasokan listrik terus menerus selama permintaan puncak.",
    
    "features.renewable.title": "Integrasi Energi Terbarukan",
    "features.renewable.description": "Memperluas portofolio energi terbarukan kami termasuk tenaga surya, hidro, panas bumi, dan angin di seluruh kepulauan.",
    
    "features.monitoring.title": "Pemantauan Penggunaan",
    "features.monitoring.description": "Pelacakan konsumsi real-time dan analitik untuk membantu pelanggan mengoptimalkan penggunaan energi dan mengurangi biaya.",
    
    "features.security.title": "Keamanan Infrastruktur",
    "features.security.description": "Jaringan listrik yang dilindungi dengan langkah-langkah keamanan siber canggih untuk memastikan layanan yang andal bagi seluruh masyarakat Indonesia.",
    
    "features.coverage.title": "Jangkauan Nasional",
    "features.coverage.description": "Jaringan luas yang menjangkau pulau-pulau terpencil dan daerah pedesaan, menghubungkan seluruh Indonesia dengan tenaga listrik yang andal.",
    
    "features.reliability.title": "Keandalan Layanan 24/7",
    "features.reliability.description": "Pemantauan dan pemeliharaan terus-menerus untuk mencegah pemadaman dan memastikan pasokan listrik yang konsisten.",
    
    "features.ev.title": "Dukungan Kendaraan Listrik",
    "features.ev.description": "Jaringan stasiun pengisian yang terus berkembang untuk mendukung transisi Indonesia ke transportasi listrik.",
    
    "features.insights.title": "Wawasan Energi",
    "features.connections.heading": "Mengalirkan Listrik ke 75+ Juta Sambungan",
    "features.connections.description": "Sebagai perusahaan listrik nasional Indonesia, PLN melayani lebih dari 75 juta pelanggan di seluruh kepulauan, memberikan energi penting untuk rumah tangga, bisnis, dan industri.",
    
    "features.electrification": "Tingkat Elektrifikasi",
    "features.capacity": "Kapasitas Terpasang",
    "features.renewable_energy": "Energi Terbarukan",
    
    "features.green_initiative": "Inisiatif Hijau",
    "features.growth": "+15% Pertumbuhan YoY",
    "features.grid_reliability": "Keandalan Jaringan",
    "features.uptime": "99,7% Waktu Aktif",
    
    // Pricing Section (Customer Portal)
    "portal.title": "Portal Pelanggan",
    "portal.heading": "Solusi yang Disesuaikan untuk Semua Jenis Pelanggan",
    "portal.description": "Akses layanan khusus melalui portal pelanggan kami yang dirancang untuk kebutuhan spesifik Anda, baik Anda seorang pemilik rumah, operator bisnis, atau manajer fasilitas industri.",
    
    "portal.residential.name": "Residensial",
    "portal.residential.description": "Untuk rumah dan kebutuhan listrik perumahan",
    "portal.residential.features": [
      "Pembayaran tagihan online",
      "Pemantauan penggunaan",
      "Pelaporan pemadaman",
      "Permintaan sambungan",
      "Tips hemat energi"
    ],
    "portal.residential.cta": "Akses Portal",
    
    "portal.business.name": "Bisnis",
    "portal.business.description": "Untuk bisnis kecil hingga menengah",
    "portal.business.badge": "Paling Populer",
    "portal.business.features": [
      "Pengelolaan akun bisnis",
      "Layanan pelanggan prioritas",
      "Konsultasi efisiensi energi",
      "Manajemen permintaan puncak",
      "Pemantauan multi lokasi",
      "Analitik penggunaan terperinci"
    ],
    "portal.business.cta": "Akses Portal",
    
    "portal.industrial.name": "Industri",
    "portal.industrial.description": "Untuk operasi industri besar",
    "portal.industrial.features": [
      "Pengelolaan layanan tegangan tinggi",
      "Solusi infrastruktur khusus",
      "Alat penyeimbang beban",
      "Perencanaan redundansi",
      "Perwakilan akun khusus",
      "Prioritas respons darurat",
      "Opsi tarif khusus"
    ],
    "portal.industrial.cta": "Hubungi Tim Industri",
    
    "portal.new_connection.title": "Sambungan Baru",
    "portal.new_connection.heading": "Butuh Sambungan Listrik Baru?",
    "portal.new_connection.description": "Baik Anda sedang membangun rumah baru, membuka lokasi bisnis, atau memperluas operasi industri, PLN menyediakan layanan yang efisien untuk membangun sambungan listrik baru.",
    "portal.new_connection.cta": "Ajukan Online",
    
    "portal.steps.apply": "Ajukan",
    "portal.steps.apply.desc": "Kirim aplikasi melalui portal online kami",
    "portal.steps.assessment": "Penilaian",
    "portal.steps.assessment.desc": "Evaluasi teknis lokasi Anda",
    "portal.steps.installation": "Pemasangan",
    "portal.steps.installation.desc": "Pemasangan profesional oleh teknisi PLN",
    "portal.steps.activation": "Aktivasi",
    "portal.steps.activation.desc": "Inspeksi akhir dan aktivasi daya",
    
    // Innovation Section
    "innovation.title": "Inovasi",
    "innovation.heading": "Mempelopori Energi Berkelanjutan untuk Indonesia",
    "innovation.description": "Temukan proyek-proyek inovatif PLN yang mengubah lanskap energi Indonesia dan memimpin jalan menuju masa depan yang lebih hijau dan berkelanjutan.",
    
    "innovation.solar.title": "Inisiatif Surya Nusantara",
    "innovation.solar.description": "Memanfaatkan sinar matahari yang melimpah di pulau-pulau Indonesia dengan pembangkit surya canggih dan sistem atap terdistribusi.",
    "innovation.solar.capacity": "Kapasitas",
    "innovation.solar.locations": "Lokasi",
    
    "innovation.geothermal.title": "Proyek Ekspansi Panas Bumi",
    "innovation.geothermal.description": "Memanfaatkan posisi Indonesia di Ring of Fire untuk memperluas pembangkitan energi panas bumi bersih di seluruh wilayah vulkanik.",
    "innovation.geothermal.capacity": "Kapasitas",
    "innovation.geothermal.projects": "Proyek",
    
    "innovation.grid.title": "Implementasi Smart Grid",
    "innovation.grid.description": "Menerapkan teknologi jaringan cerdas untuk mengoptimalkan distribusi daya dan mengurangi kerugian di jaringan nasional kami.",
    "innovation.grid.efficiency": "Efisiensi",
    "innovation.grid.coverage": "Cakupan",
    
    "innovation.wind.title": "Koridor Tenaga Angin",
    "innovation.wind.description": "Membangun ladang angin strategis di daerah pesisir berangin tinggi dan lembah pegunungan Indonesia untuk mendiversifikasi sumber terbarukan.",
    "innovation.wind.capacity": "Kapasitas",
    "innovation.wind.turbines": "Turbin",
    
    "innovation.learn_more": "Pelajari Lebih Lanjut",
    
    "innovation.sustainability.title": "Komitmen Keberlanjutan",
    "innovation.sustainability.heading": "Emisi Karbon Net Zero pada 2060",
    "innovation.sustainability.description": "PLN berkomitmen pada transisi energi bersih Indonesia, dengan target ambisius untuk mengurangi emisi karbon sambil memastikan listrik yang andal bagi semua warga.",
    
    "innovation.renewable_mix.title": "50% Bauran Energi Terbarukan pada 2040",
    "innovation.renewable_mix.description": "Ekspansi agresif kapasitas surya, angin, panas bumi, dan hidro",
    
    "innovation.coal.title": "Penghapusan Pembangkit Batubara pada 2050",
    "innovation.coal.description": "Penonaktifan bertahap pembangkit listrik tenaga batubara dan transisi ke alternatif yang lebih bersih",
    
    "innovation.carbon.title": "Implementasi Penangkapan Karbon",
    "innovation.carbon.description": "Berinvestasi dalam teknologi penangkapan karbon untuk pembangkit termal yang ada",
    
    "innovation.progress.title": "Kemajuan Terbarukan",
    "innovation.progress.current": "Saat ini: 23,5%",
    "innovation.progress.target": "Target: 50%",
    
    "innovation.reduction.title": "Pengurangan Karbon",
    "innovation.reduction.current": "Saat ini: 18%",
    "innovation.reduction.target": "Target: 100%",
    
    // FAQ Section
    "faq.title": "Dukungan",
    "faq.heading": "Pertanyaan yang Sering Diajukan",
    "faq.description": "Temukan jawaban untuk pertanyaan umum tentang layanan PLN, penagihan, sambungan, dan lainnya.",
    
    "faq.outage.question": "Bagaimana cara melaporkan pemadaman listrik?",
    "faq.outage.answer": "Anda dapat melaporkan pemadaman listrik melalui pusat kontak 24/7 kami di 123, melalui aplikasi PLN Mobile, atau melalui Portal Pelanggan di situs web kami. Harap berikan ID pelanggan dan detail lokasi Anda untuk resolusi yang lebih cepat.",
    
    "faq.bill.question": "Bagaimana cara memeriksa tagihan listrik saya?",
    "faq.bill.answer": "Anda dapat memeriksa tagihan listrik Anda melalui beberapa saluran: aplikasi PLN Mobile, situs web Portal Pelanggan kami, dengan mengunjungi kantor PLN terdekat, atau dengan menelepon pusat kontak kami di 123. Tagihan biasanya diterbitkan bulanan.",
    
    "faq.payment.question": "Metode pembayaran apa yang diterima untuk tagihan listrik?",
    "faq.payment.answer": "PLN menerima berbagai metode pembayaran termasuk perbankan online, mobile banking, kartu kredit/debit, e-wallet (GoPay, OVO, DANA, LinkAja), ATM, minimarket (Indomaret, Alfamart), kantor pos, dan pembayaran langsung di kantor PLN.",
    
    "faq.application.question": "Bagaimana cara mengajukan sambungan listrik baru?",
    "faq.application.answer": "Sambungan baru dapat diminta melalui Portal Pelanggan online kami, aplikasi PLN Mobile, atau dengan mengunjungi kantor PLN terdekat. Anda perlu menyediakan identifikasi, dokumen kepemilikan properti, dan detail tentang kapasitas daya yang Anda butuhkan.",
    
    "faq.renewable.question": "Apa program energi terbarukan PLN?",
    "faq.renewable.answer": "PLN berkomitmen untuk meningkatkan energi terbarukan dalam bauran pembangkitan kami, dengan program yang mencakup pemasangan panel surya, pengembangan panas bumi, ekspansi hidroelektrik, dan pembangunan ladang angin. Pelanggan dapat berpartisipasi melalui program net metering untuk instalasi panel surya atap.",
    
    "faq.upgrade.question": "Bagaimana cara meningkatkan kapasitas daya saya?",
    "faq.upgrade.answer": "Peningkatan kapasitas daya dapat diminta melalui Portal Pelanggan, aplikasi PLN Mobile, atau di kantor PLN. Setelah mengirimkan permintaan Anda, tim teknis akan menilai kelayakan, memberikan penawaran, dan menjadwalkan peningkatan setelah pembayaran.",
    
    "contact.title": "Hubungi Kami",
    "contact.heading": "Terhubung dengan PLN",
    "contact.description": "Tim layanan pelanggan kami tersedia 24/7 untuk membantu Anda dengan pertanyaan atau masalah apa pun.",
    
    "contact.phone.title": "Dukungan Telepon",
    "contact.phone.description": "Hubungi layanan pelanggan 24/7 kami untuk bantuan segera.",
    "contact.phone.number": "123",
    "contact.phone.note": "(bebas pulsa dari telepon mana pun di Indonesia)",
    
    "contact.email.title": "Dukungan Email",
    "contact.email.description": "Kirimkan email kepada kami dan kami akan merespons dalam waktu 24 jam.",
    "contact.email.address": "pln123@pln.co.id",
    "contact.email.note": "(untuk pertanyaan umum)",
    
    "contact.office.title": "Kantor Pusat",
    "contact.office.description": "Kunjungi kantor pusat kami di Jakarta untuk bantuan langsung.",
    "contact.office.name": "Kantor Pusat PLN",
    "contact.office.address": "Jl. Trunojoyo Blok M I No.135, Kebayoran Baru, Jakarta Selatan, DKI Jakarta 12160, Indonesia",
    
    "contact.form.title": "Punya Pertanyaan Spesifik?",
    "contact.form.name": "Nama Lengkap",
    "contact.form.name.placeholder": "Nama Anda",
    "contact.form.email": "Alamat Email",
    "contact.form.email.placeholder": "Email Anda",
    "contact.form.subject": "Subjek",
    "contact.form.subject.placeholder": "Bagaimana kami dapat membantu Anda?",
    "contact.form.message": "Pesan",
    "contact.form.message.placeholder": "Silakan jelaskan pertanyaan atau masalah Anda secara detail",
    "contact.form.submit": "Kirim Pesan",
    
    // Mobile App Section
    "app.title": "Aplikasi Mobile",
    "app.heading": "Kelola Listrik Anda di Mana Saja, Kapan Saja",
    "app.description": "Unduh aplikasi PLN Mobile untuk mengelola akun listrik Anda, memantau penggunaan, membayar tagihan, melaporkan pemadaman, dan mengakses berbagai layanan dari smartphone Anda.",
    
    "app.features.bill.title": "Manajemen Tagihan",
    "app.features.bill.description": "Lihat dan bayar tagihan listrik Anda langsung melalui aplikasi",
    "app.features.usage.title": "Pemantauan Penggunaan",
    "app.features.usage.description": "Lacak konsumsi listrik Anda secara real-time",
    "app.features.outage.title": "Pelaporan Pemadaman",
    "app.features.outage.description": "Laporkan dan periksa status pemadaman listrik di area Anda",
    "app.features.payment.title": "Beragam Opsi Pembayaran",
    "app.features.payment.description": "Bayar menggunakan berbagai metode pembayaran termasuk e-wallet dan kartu kredit",
    
    "app.download.ios": "Unduh di App Store",
    "app.download.android": "DAPATKAN DI Google Play",
    "app.scan": "Pindai untuk mengunduh",
    "app.tips": "Tips Hemat Energi",
    
    // Footer
    "footer.description": "PT PLN (Persero) adalah perusahaan listrik milik negara Indonesia, yang menyediakan layanan pembangkitan, transmisi, dan distribusi tenaga listrik di seluruh kepulauan.",
    "footer.address": "Jl. Trunojoyo Blok M I No.135, Jakarta 12160, Indonesia",
    "footer.callcenter": "123 (Call Center)",
    "footer.email": "pln123@pln.co.id",
    
    "footer.customer.title": "Layanan Pelanggan",
    "footer.customer.pay": "Bayar Tagihan",
    "footer.customer.report": "Laporkan Pemadaman",
    "footer.customer.connection": "Sambungan Baru",
    "footer.customer.change": "Perubahan Layanan",
    
    "footer.about.title": "Tentang PLN",
    "footer.about.profile": "Profil Perusahaan",
    "footer.about.history": "Sejarah",
    "footer.about.leadership": "Kepemimpinan",
    "footer.about.sustainability": "Keberlanjutan",
    
    "footer.resources.title": "Sumber Daya",
    "footer.resources.calculator": "Kalkulator Energi",
    "footer.resources.map": "Peta Pemadaman",
    "footer.resources.tips": "Tips Hemat Energi",
    "footer.resources.faq": "FAQ",
    
    "footer.legal.title": "Legal",
    "footer.legal.terms": "Syarat Layanan",
    "footer.legal.privacy": "Kebijakan Privasi",
    "footer.legal.standards": "Standar Layanan",
    "footer.legal.regulatory": "Kepatuhan Regulasi",
    
    "footer.stats.employees": "Karyawan di Seluruh Negeri",
    "footer.stats.customers": "Pelanggan Dilayani",
    "footer.stats.reliability": "Keandalan Layanan",
    
    "footer.copyright": "© 2025 PT PLN (Persero). Seluruh hak cipta dilindungi undang-undang.",
    "footer.links.privacy": "Kebijakan Privasi",
    "footer.links.terms": "Syarat Layanan",
    "footer.links.whistleblower": "Sistem Whistleblower",
    "footer.links.sitemap": "Peta Situs",
    
    // Language
    "language.select": "Pilih Bahasa",
    "language.en": "English",
    "language.id": "Bahasa Indonesia"
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  // Get stored language preference or default to browser language
  const getBrowserLanguage = (): Language => {
    const browserLang = navigator.language.split('-')[0];
    return browserLang === 'id' ? 'id' : 'en';
  };

  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const storedLanguage = localStorage.getItem('pln-language');
      return (storedLanguage as Language) || getBrowserLanguage();
    }
    return 'en';
  });

  // Set language and store in localStorage
  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    if (typeof window !== 'undefined') {
      localStorage.setItem('pln-language', newLanguage);
    }
  };

  // Translation function
  const t = (key: string): string => {
    const langData = translations[language];
    return langData[key] || key;
  };

  // Update document language attribute
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
    }
  }, [language]);

  const contextValue = {
    language,
    setLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};