'use client';

import { useTranslations } from 'next-intl';
import styles from './About.module.css';

export default function AboutPage() {
  const t = useTranslations('About');

  const timeline = [
    { year: '2014', title: t('timeline.2014.title'), description: t('timeline.2014.desc') },
    { year: '2016', title: t('timeline.2016.title'), description: t('timeline.2016.desc') },
    { year: '2018', title: t('timeline.2018.title'), description: t('timeline.2018.desc') },
    { year: '2020', title: t('timeline.2020.title'), description: t('timeline.2020.desc') },
    { year: '2023', title: t('timeline.2023.title'), description: t('timeline.2023.desc') },
    { year: '2026', title: t('timeline.2026.title'), description: t('timeline.2026.desc') },
  ];

  const values = [
    { icon: '⭐', title: t('values.quality.title'), description: t('values.quality.desc') },
    { icon: '🤝', title: t('values.reliability.title'), description: t('values.reliability.desc') },
    { icon: '💡', title: t('values.innovation.title'), description: t('values.innovation.desc') },
    { icon: '🛡️', title: t('values.safety.title'), description: t('values.safety.desc') },
    { icon: '🎯', title: t('values.customerFocus.title'), description: t('values.customerFocus.desc') },
    { icon: '🌱', title: t('values.sustainability.title'), description: t('values.sustainability.desc') },
  ];

  const team = [
    { name: 'Ir. Hendra Wijaya', role: t('team.founderRole'), description: t('team.founderDesc'), initials: 'HW' },
    { name: 'Agus Purnomo', role: t('team.mfgRole'), description: t('team.mfgDesc'), initials: 'AP' },
    { name: 'Lisa Permata', role: t('team.designRole'), description: t('team.designDesc'), initials: 'LP' },
    { name: 'Rudi Hartono', role: t('team.installRole'), description: t('team.installDesc'), initials: 'RH' },
  ];

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.heroBadge}>{t('heroBadge')}</span>
          <h1>{t('heroTitle1')}<br />{t('heroTitle2')}</h1>
          <p>{t('heroSubtitle')}</p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className={`section ${styles.vmSection}`}>
        <div className="container">
          <div className={styles.vmGrid}>
            <div className={styles.vmCard}>
              <div className={styles.vmIcon}>🔭</div>
              <h2>{t('visionTitle')}</h2>
              <p>{t('visionDesc')}</p>
            </div>
            <div className={styles.vmCard}>
              <div className={styles.vmIcon}>🎯</div>
              <h2>{t('missionTitle')}</h2>
              <ul>
                <li>{t('missionList.1')}</li>
                <li>{t('missionList.2')}</li>
                <li>{t('missionList.3')}</li>
                <li>{t('missionList.4')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className={`section ${styles.timelineSection}`}>
        <div className="container">
          <div className="section-header">
            <h2>{t('journeyTitle')}</h2>
            <p>{t('journeySubtitle')}</p>
          </div>
          <div className={styles.timeline}>
            {timeline.map((item, idx) => (
              <div key={idx} className={`${styles.timelineItem} ${idx % 2 !== 0 ? styles.timelineRight : ''}`}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineCard}>
                  <span className={styles.timelineYear}>{item.year}</span>
                  <h3>{item.title}</h3>
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
            <h2>{t('coreValuesTitle')}</h2>
            <p>{t('coreValuesSubtitle')}</p>
          </div>
          <div className={styles.valuesGrid}>
            {values.map((value, idx) => (
              <div key={idx} className={styles.valueCard}>
                <span className={styles.valueIcon}>{value.icon}</span>
                <h3>{value.title}</h3>
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
            <h2>{t('teamTitle')}</h2>
            <p>{t('teamSubtitle')}</p>
          </div>
          <div className={styles.teamGrid}>
            {team.map((member, idx) => (
              <div key={idx} className={styles.teamCard}>
                <div className={styles.teamAvatar}>{member.initials}</div>
                <h3>{member.name}</h3>
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
