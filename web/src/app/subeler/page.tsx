const branches = [
  {
    id: "batum",
    name: "Gürcistan Batum",
    established: "2019",
    address: "Adres: —",
    phone: "Telefon: —",
    hours: "Çalışma saatleri: 09:00 - 18:00",
    notes:
      "Bölgesel distribütör desteği ve hızlı teslimat ağıyla hizmet verir.",
  },
  {
    id: "trabzon",
    name: "Trabzon",
    established: "2020",
    address: "Adres: —",
    phone: "Telefon: —",
    hours: "Çalışma saatleri: 09:00 - 18:00",
    notes: "Karadeniz bölgesi için stoklu ve hızlı tedarik odaklıdır.",
  },
  {
    id: "samsun",
    name: "Samsun",
    established: "2021",
    address: "Adres: —",
    phone: "Telefon: —",
    hours: "Çalışma saatleri: 09:00 - 18:00",
    notes: "Ticari araç ve ağır hizmet gruplarında uzman ekip.",
  },
  {
    id: "erzurum",
    name: "Merkez Erzurum",
    established: "2016",
    address: "Adres: —",
    phone: "Telefon: —",
    hours: "Çalışma saatleri: 09:00 - 18:00",
    notes: "Merkez depo ve yönetim operasyonları burada yürütülür.",
  },
];

export default function BranchesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div>
            <span className="eyebrow">Şubelerimiz</span>
            <h1>Bölgesel güç, tek kurumsal standart.</h1>
            <p>
              Tüm şubelerimizde aynı kalite ve hızlı hizmet anlayışını sunuyoruz.
              Detayları açarak kuruluş yılı, iletişim ve çalışma bilgilerini görebilirsiniz.
            </p>
          </div>
          <div className="page-hero-card">
            <div>
              <strong>Standart Hizmet</strong>
              <p>Tüm şubelerde aynı süreç ve kalite.</p>
            </div>
            <div>
              <strong>Hızlı Tedarik</strong>
              <p>Bölgesel stok yönetimi ile hızlı teslim.</p>
            </div>
            <div>
              <strong>Kurumsal Destek</strong>
              <p>Şube ve bayi taleplerine öncelik.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section branches-detail">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>Şube Detayları</h2>
              <p>Her şube için güncel bilgileri buradan yönetebiliriz.</p>
            </div>
            <div className="section-badge">Şubeler</div>
          </div>

          <div className="accordion">
            {branches.map((branch) => (
              <details key={branch.id} className="accordion-item">
                <summary>
                  <div>
                    <strong>{branch.name}</strong>
                    <span>Kuruluş: {branch.established}</span>
                  </div>
                  <span className="accordion-toggle">Detay</span>
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
    </>
  );
}
