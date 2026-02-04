import Image from "next/image";

const branches = [
  {
    title: "Georgia Batumi",
    image: "/branch-batum.png",
    founded: "2019",
    address: "To be shared",
    phone: "To be shared",
    manager: "To be shared",
    hours: "09:00 - 18:00",
    note: "Regional sales and service hub.",
  },
  {
    title: "Trabzon",
    image: "/branch-trabzon.png",
    founded: "2020",
    address: "To be shared",
    phone: "To be shared",
    manager: "To be shared",
    hours: "09:00 - 18:00",
    note: "Support for Black Sea region partners.",
  },
  {
    title: "Samsun",
    image: "/branch-samsun.png",
    founded: "2021",
    address: "To be shared",
    phone: "To be shared",
    manager: "To be shared",
    hours: "09:00 - 18:00",
    note: "Logistics-focused stock and distribution point.",
  },
  {
    title: "Erzurum Center",
    image: "/branch-erzurum.png",
    founded: "2018",
    address: "Yakutiye, Erzurum",
    phone: "+90 442 000 00 00",
    manager: "To be shared",
    hours: "09:00 - 18:00",
    note: "Head office and catalog operations.",
  },
];

export default function BranchesPageEn() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div>
            <span className="eyebrow">Branches</span>
            <h1>Our regional network for strong and fast service.</h1>
            <p>
              You can share branch contact details and we will update them here. Each
              branch is structured to support product search and supply continuity.
            </p>
          </div>
          <div className="page-hero-card">
            <div>
              <strong>4 Active Branches</strong>
              <p>Batumi, Trabzon, Samsun, Erzurum Center.</p>
            </div>
            <div>
              <strong>Regional Support</strong>
              <p>Fast response and stock access in each area.</p>
            </div>
            <div>
              <strong>Corporate Coordination</strong>
              <p>All branches follow the same catalog standard.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section branches-detail">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>Branch Details</h2>
              <p>Click the cards to see detailed information.</p>
            </div>
            <div className="section-badge">Branches</div>
          </div>
          <div className="accordion">
            {branches.map((branch) => (
              <details key={branch.title}>
                <summary>
                  <span>{branch.title}</span>
                  <span>Founded: {branch.founded}</span>
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
                      <span>Address: {branch.address}</span>
                      <span>Phone: {branch.phone}</span>
                      <span>Manager: {branch.manager}</span>
                      <span>Hours: {branch.hours}</span>
                    </div>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
