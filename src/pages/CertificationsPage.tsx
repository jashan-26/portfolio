import React from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { InnerPageWindow } from '../components/InnerPageWindow';
import { certifications } from '../data/content';
import './CertificationsPage.css';

export const CertificationsPage: React.FC = () => {
  return (
    <InnerPageWindow
      title="Certifications.exe"
      variant="mint"
      icon={<Award size={15} strokeWidth={2.4} color="#E8559A" />}
    >
      <div className="certs-page-inner">
        <div className="page-header-block">
          <h2 className="page-heading">Certifications & Credentials</h2>
          <p className="page-subheading">
            Verified fellowships, deep learning specializations, and professional courses.
          </p>
        </div>

        <div className="certs-grid">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className={`cert-card ${cert.isPlaceholder ? 'is-placeholder-card' : ''}`}
            >
              <div className="cert-badge-row">
                <div className="cert-icon-circle">
                  <Award size={20} color="#E8559A" />
                </div>
                {cert.isPlaceholder && (
                  <span className="cert-todo-badge">TODO / PLACEHOLDER</span>
                )}
              </div>

              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>

              <div className="cert-footer-row">
                <span className="cert-date">
                  <Calendar size={13} />
                  <span>{cert.date}</span>
                </span>

                {cert.credentialUrl && cert.credentialUrl !== '#' && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-link-btn"
                  >
                    <span>Verify</span>
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </InnerPageWindow>
  );
};
