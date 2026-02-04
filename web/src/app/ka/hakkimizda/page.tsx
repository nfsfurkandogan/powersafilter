import Image from "next/image";

export default function AboutPageKa() {
  const base = "/ka";
  const link = (path: string) => `${base}${path}`;

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div>
            <span className="eyebrow">ჩვენ შესახებ</span>
            <h1>Powersa Filter გთავაზობთ სწორ ფილტრს სწრაფად და საიმედოდ.</h1>
            <p>
              ავტომობილებისა და მძიმე ტექნიკისთვის Powersa Filter უზრუნველყოფს
              ძიების გამოცდილებას, ძლიერ საწყობ ინფორმაციას და მკაფიო კატეგორიებს,
              რაც მომხმარებლებს დროს უზოგავს.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={link("/urun-ara")}>
                დაწყება ძიება
              </a>
              <a className="btn btn-ghost" href={link("/hizmetler")}>
                სერვისების ნახვა
              </a>
            </div>
          </div>
          <div className="page-hero-card">
            <div>
              <strong>ფართო პროდუქტის პორტფელი</strong>
              <p>გადაწყვეტილებები სხვადასხვა ტიპის ავტომობილებისთვის.</p>
            </div>
            <div>
              <strong>სწრაფი და მკაფიო არჩევანი</strong>
              <p>კოდის და კატეგორიის სწრაფი ძიება.</p>
            </div>
            <div>
              <strong>კორპორატიული ნდობა</strong>
              <p>გრძელვადიანი პარტნიორობის მიდგომა.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-visuals">
        <div className="container about-visuals-inner">
          <div className="about-visual-main">
            <Image
              src="/featured-2.png"
              alt="Powersa პროდუქტი სერვისში"
              width={2048}
              height={1536}
              quality={90}
              sizes="(max-width: 1024px) 90vw, 620px"
            />
            <div className="about-visual-badge">ძლიერი გადაწყვეტილებები ადგილზე</div>
          </div>
          <div className="about-visual-stack">
            <div className="about-visual-card">
              <Image
                src="/featured-1.png"
                alt="Powersa თარო"
                width={2048}
                height={1536}
                quality={90}
                sizes="(max-width: 1024px) 90vw, 420px"
              />
            </div>
            <div className="about-visual-card">
              <Image
                src="/from-you-3.png"
                alt="Powersa შეფუთვა"
                width={1536}
                height={1024}
                quality={90}
                sizes="(max-width: 1024px) 90vw, 420px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section about-stats">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>კორპორატიული შეჯამება</h2>
              <p>ძლიერი პორტფელი და სწრაფი წვდომა.</p>
            </div>
            <div className="section-badge">Powersa</div>
          </div>
          <div className="stat-grid">
            <div className="stat-card">
              <strong>18.000+</strong>
              <span>პროდუქტი</span>
            </div>
            <div className="stat-card">
              <strong>5</strong>
              <span>ფილტრების ჯგუფი</span>
            </div>
            <div className="stat-card">
              <strong>4</strong>
              <span>აქტიური ფილიალი</span>
            </div>
            <div className="stat-card">
              <strong>24 საათი</strong>
              <span>სწრაფი პასუხის მიზანი</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-split">
        <div className="container about-split-inner">
          <div className="about-split-copy">
            <span className="eyebrow">ოპერაციული ძალა</span>
            <h2>ინფრასტრუქტურა სწრაფი დამთხვევისთვის.</h2>
            <p>
              კატალოგის ძიება და მწარმოებელზე დაფუძნებული ფილტრაცია აჩქარებს
              საწყობ კოდის შემოწმებას და გუნდებს სწორ პროდუქტამდე აყვანას.
            </p>
            <ul>
              <li>საწყობი და მწარმოებლის კოდის დამთხვევა</li>
              <li>მკაფიო კატეგორიული სტრუქტურა</li>
              <li>სწრაფი რეაგირება საველე საჭიროებებზე</li>
            </ul>
          </div>
          <div className="about-split-visual">
            <Image
              src="/from-you-1.png"
              alt="Powersa მიწოდების პროცესი"
              width={2048}
              height={1536}
              quality={90}
              sizes="(max-width: 1024px) 90vw, 520px"
            />
          </div>
        </div>
      </section>

      <section className="section about-section">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>ვინ ვართ ჩვენ</h2>
              <p>Powersa Filter ქმნის ფილტრაციის გადაწყვეტილებებს ინდუსტრიული საჭიროებებისთვის.</p>
            </div>
            <div className="section-badge">Powersa</div>
          </div>
          <div className="info-grid">
            <div className="info-card">
              <p>
                ძლიერი ძიების სისტემა და მკაფიო კატეგორიები მიზნად ისახავს სწორ
                პროდუქტზე სწრაფ წვდომას. ჩვენი მიზანია ყველა ფილტრის საჭიროების
                ერთი ცენტრიდან მართვა.
              </p>
            </div>
            <div className="info-card">
              <p>
                ზეთის, ჰაერის, საწვავის, კაბინის და ჰიდრავლიკის ფილტრების ფართო
                ასორტიმენტით ვთავაზობთ სტაბილურ შესრულებას ყოველდღიურ და მძიმე პირობებში.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section mission-section">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>მისია და ხედვა</h2>
              <p>ხარისხი, სისწრაფე და ნდობა ჩვენს საფუძვლად.</p>
            </div>
            <div className="section-badge">კორპორატიული</div>
          </div>
          <div className="info-grid">
            <div className="info-card">
              <h3>მისია</h3>
              <p>
                სწორი ფილტრის სწრაფი მიწოდება და მომხმარებლების ოპერაციების უწყვეტობის უზრუნველყოფა.
              </p>
            </div>
            <div className="info-card">
              <h3>ხედვა</h3>
              <p>
                ვიყოთ საიმედო და ხელმისაწვდომი ბრენდი ფილტრაციის გადაწყვეტილებებში.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>ჩვენი ღირებულებები</h2>
              <p>ძირითადი პრინციპები, რომლებიც გვმართავს.</p>
            </div>
            <div className="section-badge">ღირებულებები</div>
          </div>
          <div className="value-grid">
            <div className="value-card">
              <h3>საიმედოობა</h3>
              <p>სტანდარტიზებული ხარისხი და მდგრადი გადაწყვეტილებები.</p>
            </div>
            <div className="value-card">
              <h3>სისწრაფე</h3>
              <p>სწორი პროდუქტზე სწრაფი წვდომისთვის პროცესების ოპტიმიზაცია.</p>
            </div>
            <div className="value-card">
              <h3>გამჭვირვალობა</h3>
              <p>პროდუქტის ინფორმაცია ყოველთვის ნათელი და ხელმისაწვდომია.</p>
            </div>
            <div className="value-card">
              <h3>პარტნიორობა</h3>
              <p>ვაშენებთ გრძელვადიან და ძლიერ ურთიერთობებს.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section scope-section">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>პროდუქტის სპექტრი</h2>
              <p>საჭირო ფილტრების ჯგუფები ერთ ადგილზე.</p>
            </div>
            <div className="section-badge">სპექტრი</div>
          </div>
          <div className="scope-grid">
            <span>ზეთის ფილტრი</span>
            <span>ჰაერის ფილტრი</span>
            <span>საწვავის ფილტრი</span>
            <span>კაბინის ფილტრი</span>
            <span>ჰიდრავლიკის ფილტრი</span>
            <span>სპეციალური ფილტრის გადაწყვეტილებები</span>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-card">
            <div>
              <h2>იპოვეთ სწორი პროდუქტი ახლა</h2>
              <p>
                პროდუქტის ძიების სისტემით სწრაფად მიაღწიეთ სწორ პროდუქტს კოდის ან კატეგორიის მიხედვით.
              </p>
            </div>
            <a className="btn btn-primary" href={link("/urun-ara")}>
              პროდუქტის ძიება
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
