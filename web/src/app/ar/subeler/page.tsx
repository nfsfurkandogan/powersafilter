const branches = [
  {
    id: "batum",
    name: "باتومي، جورجيا",
    established: "2019",
    address: "العنوان: —",
    phone: "الهاتف: —",
    hours: "ساعات العمل: 09:00 - 18:00",
    notes: "يوفر دعم الموزع الإقليمي وشبكة تسليم سريعة.",
  },
  {
    id: "trabzon",
    name: "طرابزون",
    established: "2020",
    address: "العنوان: —",
    phone: "الهاتف: —",
    hours: "ساعات العمل: 09:00 - 18:00",
    notes: "يركز على مخزون سريع للتزويد في منطقة البحر الأسود.",
  },
  {
    id: "samsun",
    name: "سامسون",
    established: "2021",
    address: "العنوان: —",
    phone: "الهاتف: —",
    hours: "ساعات العمل: 09:00 - 18:00",
    notes: "فريق متخصص في المركبات التجارية والخدمة الشاقة.",
  },
  {
    id: "erzurum",
    name: "أرضروم المركز",
    established: "2016",
    address: "العنوان: —",
    phone: "الهاتف: —",
    hours: "ساعات العمل: 09:00 - 18:00",
    notes: "تُدار هنا عمليات المستودع المركزي والإدارة.",
  },
];

export default function BranchesPageAr() {
  return (
    <div className="rtl" dir="rtl">
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div>
            <span className="eyebrow">فروعنا</span>
            <h1>قوة إقليمية بمعيار مؤسسي واحد.</h1>
            <p>
              نقدم نفس الجودة والخدمة السريعة في جميع الفروع. افتح التفاصيل لعرض
              سنة التأسيس ومعلومات التواصل وساعات العمل.
            </p>
          </div>
          <div className="page-hero-card">
            <div>
              <strong>خدمة موحدة</strong>
              <p>نفس الإجراءات والجودة في جميع الفروع.</p>
            </div>
            <div>
              <strong>توريد سريع</strong>
              <p>تسليم سريع عبر إدارة المخزون الإقليمي.</p>
            </div>
            <div>
              <strong>دعم مؤسسي</strong>
              <p>أولوية لطلبات الفروع والوكلاء.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section branches-detail">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>تفاصيل الفروع</h2>
              <p>يمكننا إدارة المعلومات المحدثة لكل فرع من هنا.</p>
            </div>
            <div className="section-badge">الفروع</div>
          </div>

          <div className="accordion">
            {branches.map((branch) => (
              <details key={branch.id} className="accordion-item">
                <summary>
                  <div>
                    <strong>{branch.name}</strong>
                    <span>التأسيس: {branch.established}</span>
                  </div>
                  <span className="accordion-toggle">تفاصيل</span>
                </summary>
                <div className="accordion-content">
                  <p>{branch.address}</p>
                  <p>{branch.phone}</p>
                  <p>{branch.hours}</p>
                  <p>{branch.notes}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
