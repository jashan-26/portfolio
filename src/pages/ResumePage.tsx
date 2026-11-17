import React from 'react';
import { FileText, Download, ExternalLink } from 'lucide-react';
import { InnerPageWindow } from '../components/InnerPageWindow';
import { profile } from '../data/content';
import './ResumePage.css';

export const ResumePage: React.FC = () => {
  return (
    <InnerPageWindow
      title="Resume.exe"
      variant="mint"
      icon={<FileText size={15} strokeWidth={2.4} color="#27405A" />}
    >
      <div className="resume-page-inner">
        <div className="resume-header-row">
          <div>
            <h2 className="page-heading">Curriculum Vitae</h2>
            <p className="page-subheading">
              Official resume document for {profile.name} (B.Tech AIML).
            </p>
          </div>

          <div className="resume-actions-group">
            <a
              href={profile.resumeUrl}
              download="Jashanpreet_Kaur_Resume.pdf"
              className="resume-download-btn"
            >
              <Download size={15} />
              <span>Download PDF</span>
            </a>

            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-open-btn"
            >
              <ExternalLink size={15} />
              <span>Open in Tab</span>
            </a>
          </div>
        </div>

        {/* Embedded PDF Viewer Frame */}
        <div className="pdf-viewer-container">
          <iframe
            src={`${profile.resumeUrl}#toolbar=0`}
            title="Resume PDF Viewer"
            className="pdf-iframe"
          />
        </div>
      </div>
    </InnerPageWindow>
  );
};
