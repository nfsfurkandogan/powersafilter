import Image from "next/image";

const branches = [
  {
    title: "باتومي، جورجيا",
    image: "/branch-batum.png",
    founded: "2019",
    address: "سيتم تزويده لاحقاً",
    phone: "سيتم تزويده لاحقاً",
    manager: "سيتم تزويده لاحقاً",
    hours: "09:00 - 18:00",
    note: "مركز مبيعات وخدمة إقليمي.",
  },
  {
    title: "طرابزون",
    image: "/branch-trabzon.png",
    founded: "2020",
    address: "سيتم تزويده لاحقاً",
    phone: "سيتم تزويده لاحقاً",
    manager: "سيتم تزويده لاحقاً",
    hours: "09:00 - 18:00",
    note: "دعم لشركاء منطقة البحر الأسود.",
  },
  {
    title: "سامسون",
    image: "/branch-samsun.png",
    founded: "2021",
    address: "سيتم تزويده لاحقاً",
    phone: "سيتم تزويده لاحقاً",
    manager: "سيتم تزويده لاحقاً",
    hours: "09:00 - 18:00",
    note: "نقطة مخزون وتوزيع لوجستية.",
  },
  {
    title: "أرضروم المركز",
    image: "/branch-erzurum.png",
    founded: "2018",
    address: "ياكوتية، أرضروم",
    phone: "+90 442 000 00 00",
    manager: "سيتم تزويده لاحقاً",
    hours: "09:00 - 18:00",
    note: "المكتب الرئيسي وعمليات الكتالوج.",
  },
];

export default function BranchesPageAr() {
  return (
    <div className="rtl" dir="rtl">
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div>
            <span className="eyebrow">الفروع</span>
            <h1>شبكة إقليمية لخدمة قوية وسريعة.</h1>
            <p>
              يمكنك مشاركة بيانات التواصل للفروع وسنقوم بتحديثها هنا. كل فرع يدعم
              البحث عن المنتجات واستمرارية الإمداد.
            </p>
          </div>
          <div className="page-hero-card">
            <div>
              <strong>4 فروع نشطة</strong>
              <p>باتومي، طرابزون، سامسون، أرضروم المركز.</p>
            </div>
            <div>
              <strong>دعم إقليمي</strong>
              <p>استجابة سريعة ووصول للمخزون في كل منطقة.</p>
            </div>
            <div>
              <strong>تنسيق مؤسسي</strong>
              <p>كل الفروع تتبع نفس معيار الكتالوج.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section branches-detail">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>تفاصيل الفروع</h2>
              <p>اضغط على البطاقة لعرض التفاصيل.</p>
            </div>
            <div className="section-badge">الفروع</div>
          </div>
          <div className="accordion">
            {branches.map((branch) => (
              <details key={branch.title}>
                <summary>
                  <span>{branch.title}</span>
                  <span>تأسس: {branch.founded}</span>
                </summary>
                <div className="accordion-body">
                  <div className="branch-photo">
                    <Image
                      src={branch.image}
                      alt={branch.title}
                      width={1600}
                      height={1000}
                      quality={90}
                      sizes="(max-width: 1024px) 90vw, 520px"
                    />
                  </div>
                  <div className="branch-details">
                    <p>{branch.note}</p>
                    <div className="branch-meta">
                      <span>العنوان: {branch.address}</span>
                      <span>الهاتف: {branch.phone}</span>
                      <span>المدير: {branch.manager}</span>
                      <span>الساعات: {branch.hours}</span>
                    </div>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
