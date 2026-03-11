import styles from './About.module.css';

const timeline = [
  { year: '2014', title: 'Company Founded', description: 'PT. Limars Teknik Indonesia established in Jakarta, starting with stainless steel kitchen fabrication.' },
  { year: '2016', title: 'Expanded Product Line', description: 'Added traditional stoves, regional ovens, and modern commercial oven manufacturing.' },
  { year: '2018', title: 'Service Expansion', description: 'Launched ducting, gas installation, well drilling, and electrical services divisions.' },
  { year: '2020', title: '300+ Projects Milestone', description: 'Completed over 300 projects across Indonesia, serving major hotel chains and restaurant groups.' },
  { year: '2023', title: 'Modern Facility', description: 'Opened new manufacturing facility with advanced fabrication equipment and expanded capacity.' },
  { year: '2026', title: 'Leading Manufacturer', description: 'Recognized as one of Indonesia\'s leading kitchen equipment manufacturers with nationwide coverage.' },
];

const values = [
  { icon: '⭐', title: 'Quality', description: 'We use only premium materials and maintain strict quality control throughout our manufacturing process.' },
  { icon: '🤝', title: 'Reliability', description: 'We deliver on our promises — on time, within budget, and to specification.' },
  { icon: '💡', title: 'Innovation', description: 'We continuously improve our products and processes to meet evolving industry needs.' },
  { icon: '🛡️', title: 'Safety', description: 'Safety is non-negotiable. All our products and installations meet the highest safety standards.' },
  { icon: '🎯', title: 'Customer Focus', description: 'Every project starts with understanding our client\'s unique needs and delivering tailored solutions.' },
  { icon: '🌱', title: 'Sustainability', description: 'We are committed to environmentally responsible manufacturing and energy-efficient solutions.' },
];

const team = [
  { name: 'Ir. Hendra Wijaya', role: 'Founder & CEO', description: 'Over 20 years of experience in mechanical engineering and commercial kitchen design.', initials: 'HW' },
  { name: 'Agus Purnomo', role: 'Head of Manufacturing', description: 'Expert in stainless steel fabrication with 15 years in the industry.', initials: 'AP' },
  { name: 'Lisa Permata', role: 'Head of Design', description: 'Specializes in commercial kitchen layout and ergonomic workspace design.', initials: 'LP' },
  { name: 'Rudi Hartono', role: 'Head of Installation', description: 'Leads our field operations team with expertise in kitchen systems integration.', initials: 'RH' },
];

export const metadata = {
  title: 'About Us | PT. Limars Teknik Indonesia',
  description: 'Learn about PT. Limars Teknik Indonesia — our history, vision, mission, core values, and the experienced team behind your kitchen solutions.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.heroBadge}>About Us</span>
          <h1>Building Kitchen Excellence<br />Since 2014</h1>
          <p>We are PT. Limars Teknik Indonesia — your trusted partner in kitchen equipment manufacturing and engineering solutions across Indonesia.</p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className={`section ${styles.vmSection}`}>
        <div className="container">
          <div className={styles.vmGrid}>
            <div className={styles.vmCard}>
              <div className={styles.vmIcon}>🔭</div>
              <h3>Our Vision</h3>
              <p>To be Indonesia&apos;s most trusted and innovative kitchen equipment manufacturer, setting the standard for quality, safety, and service excellence in the food service industry.</p>
            </div>
            <div className={styles.vmCard}>
              <div className={styles.vmIcon}>🎯</div>
              <h3>Our Mission</h3>
              <ul>
                <li>Manufacture world-class kitchen equipment using premium materials</li>
                <li>Provide end-to-end engineering services for commercial and residential projects</li>
                <li>Continuously innovate to meet evolving industry demands</li>
                <li>Deliver exceptional service and build lasting client relationships</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className={`section ${styles.timelineSection}`}>
        <div className="container">
          <div className="section-header">
            <h2>Our Journey</h2>
            <p>A decade of growth, innovation, and excellence in kitchen engineering.</p>
          </div>
          <div className={styles.timeline}>
            {timeline.map((item, idx) => (
              <div key={idx} className={`${styles.timelineItem} ${idx % 2 !== 0 ? styles.timelineRight : ''}`}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineCard}>
                  <span className={styles.timelineYear}>{item.year}</span>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className={`section ${styles.valuesSection}`}>
        <div className="container">
          <div className="section-header">
            <h2>Our Core Values</h2>
            <p>The principles that guide everything we do.</p>
          </div>
          <div className={styles.valuesGrid}>
            {values.map((value, idx) => (
              <div key={idx} className={styles.valueCard}>
                <span className={styles.valueIcon}>{value.icon}</span>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className={`section ${styles.teamSection}`}>
        <div className="container">
          <div className="section-header">
            <h2>Our Leadership</h2>
            <p>Meet the experienced professionals behind Limars Teknik.</p>
          </div>
          <div className={styles.teamGrid}>
            {team.map((member, idx) => (
              <div key={idx} className={styles.teamCard}>
                <div className={styles.teamAvatar}>{member.initials}</div>
                <h4>{member.name}</h4>
                <span className={styles.teamRole}>{member.role}</span>
                <p>{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
