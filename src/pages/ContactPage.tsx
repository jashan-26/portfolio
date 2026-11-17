import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Heart } from 'lucide-react';
import { InnerPageWindow } from '../components/InnerPageWindow';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import { profile } from '../data/content';
import './ContactPage.css';

export const ContactPage: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sentNotice, setSentNotice] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${profile.email}?subject=Message from ${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSentNotice(true);
    setTimeout(() => setSentNotice(false), 4000);
  };

  return (
    <InnerPageWindow
      title="Contact.exe"
      variant="mint"
      icon={<Mail size={15} strokeWidth={2.4} color="#E8559A" />}
    >
      <div className="contact-page-inner">
        <div className="page-header-block">
          <h2 className="page-heading">
            Get In Touch <span className="pink-heart">♡</span>
          </h2>
          <p className="page-subheading">
            Have a project, research collaboration, or hackathon idea? Send a transmission!
          </p>
        </div>

        <div className="contact-grid">
          {/* Direct Email Card */}
          <div className="contact-direct-card">
            <h3 className="contact-card-title">
              <Mail size={18} color="#E8559A" />
              <span>Direct Transmission</span>
            </h3>

            <p className="contact-info-text">
              Feel free to drop a direct email anytime. I usually reply within 24 hours.
            </p>

            <div className="email-copy-bar">
              <span className="email-display">{profile.email}</span>
              <button
                className="btn-copy-email"
                onClick={handleCopy}
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check size={14} color="#6FC4A9" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Link Slots */}
            <div className="social-links-section">
              <span className="social-label">Connect & Socials:</span>
              <div className="social-buttons-row">
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  title="GitHub Profile"
                >
                  <GithubIcon size={16} />
                  <span>GitHub (TODO)</span>
                </a>
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon size={16} color="#0A66C2" />
                  <span>LinkedIn (TODO)</span>
                </a>
              </div>
            </div>

            <div className="cat-note-card">
              <Heart size={16} fill="#F7B3CF" color="#E8559A" />
              <span>Looking forward to connecting with fellow builders and innovators!</span>
            </div>
          </div>

          {/* Mailto Contact Form */}
          <div className="contact-form-card">
            <h3 className="contact-card-title">
              <Send size={18} color="#6FC4A9" />
              <span>Send a Message</span>
            </h3>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name-input">Your Name</label>
                <input
                  id="name-input"
                  type="text"
                  required
                  placeholder="e.g. Alex Turing"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email-input">Your Email</label>
                <input
                  id="email-input"
                  type="email"
                  required
                  placeholder="e.g. alex@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message-input">Message</label>
                <textarea
                  id="message-input"
                  rows={4}
                  required
                  placeholder="Hi Jashan, I loved your portfolio..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button type="submit" className="form-submit-btn">
                <Send size={15} />
                <span>Launch Message →</span>
              </button>

              {sentNotice && (
                <p className="sent-success-notice">
                  Opening your default mail client with prefilled transmission!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </InnerPageWindow>
  );
};
