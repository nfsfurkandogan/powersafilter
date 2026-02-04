import Image from "next/image";

const branches = [
  {
    title: "გურჯისტანი ბათუმი",
    image: "/branch-batum.png",
    founded: "2019",
    address: "გადასაცემია",
    phone: "გადასაცემია",
    manager: "გადასაცემია",
    hours: "09:00 - 18:00",
    note: "რეგიონული გაყიდვები და სერვისი.",
  },
  {
    title: "ტრაბზონი",
    image: "/branch-trabzon.png",
    founded: "2020",
    address: "გადასაცემია",
    phone: "გადასაცემია",
    manager: "გადასაცემია",
    hours: "09:00 - 18:00",
    note: "შავი ზღვის რეგიონში პარტნიორული მხარდაჭერა.",
  },
  {
    title: "სამსუნი",
    image: "/branch-samsun.png",
    founded: "2021",
    address: "გადასაცემია",
    phone: "გადასაცემია",
    manager: "გადასაცემია",
    hours: "09:00 - 18:00",
    note: "ლოგისტიკური მარაგი და განაწილება.",
  },
  {
    title: "ერზრუმი ცენტრი",
    image: "/branch-erzurum.png",
    founded: "2018",
    address: "იაკუთიე, ერზრუმი",
    phone: "+90 442 000 00 00",
    manager: "გადასაცემია",
    hours: "09:00 - 18:00",
    note: "ცენტრალური ოფისი და კატალოგის ოპერაციები.",
  },
];

export default function BranchesPageKa() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div>
            <span className="eyebrow">ფილიალები</span>
            <h1>რეგიონული ქსელი ძლიერი და სწრაფი მომსახურებისთვის.</h1>
            <p>
              ფილიალების საკონტაქტო ინფორმაცია მოგვაწოდეთ და აქ განვაახლებთ.
              თითოეული ფილიალი ემსახურება სწრაფ ძიებას და მიწოდების უწყვეტობას.
            </p>
          </div>
          <div className="page-hero-card">
            <div>
              <strong>4 აქტიური ფილიალი</strong>
              <p>ბათუმი, ტრაბზონი, სამსუნი, ერზრუმი ცენტრი.</p>
            </div>
            <div>
              <strong>რეგიონული მხარდაჭერა</strong>
              <p>სწრაფი პასუხი და მარაგზე წვდომა.</p>
            </div>
            <div>
              <strong>კორპორატიული კოორდინაცია</strong>
              <p>ყველა ფილიალი მუშაობს ერთ სტანდარტზე.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section branches-detail">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>ფილიალის დეტალები</h2>
              <p>დააკლიკეთ ბარათს დეტალებისთვის.</p>
            </div>
            <div className="section-badge">ფილიალები</div>
          </div>
          <div className="accordion">
            {branches.map((branch) => (
              <details key={branch.title}>
                <summary>
                  <span>{branch.title}</span>
                  <span>დაარსდა: {branch.founded}</span>
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
                      <span>მისამართი: {branch.address}</span>
                      <span>ტელეფონი: {branch.phone}</span>
                      <span>მენეჯერი: {branch.manager}</span>
                      <span>საათები: {branch.hours}</span>
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
