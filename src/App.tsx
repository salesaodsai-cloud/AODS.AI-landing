import React from "react";

const features = [
{
number: "01",
title: "ICP Intelligence",
description:
"Evaluate your existing leads against your ideal customer profile. Prioritize the prospects most aligned with your offer.",
tag: "SMARTER TARGETING",
},
{
number: "02",
title: "Email Verification",
description:
"Assess email syntax, domain and mail-server signals to identify risky addresses before they enter your campaign.",
tag: "CLEANER INPUTS",
},
{
number: "03",
title: "AI Personalization",
description:
"Create relevant, individualized outreach using prospect details, company context and your actual value proposition.",
tag: "RELEVANT OUTREACH",
},
];

const workflow = [
{
step: "01",
title: "Bring your leads",
description:
"Upload your existing prospect list. Keep control of your data and your target market.",
},
{
step: "02",
title: "Qualify and verify",
description:
"Evaluate ICP fit, inspect email signals and prioritize the contacts worth pursuing.",
},
{
step: "03",
title: "Personalize your outreach",
description:
"Prepare tailored messaging and organize your outbound workflow around your campaign goals.",
},
];

function Brand() {
return (
<a className="brand" href="#home" aria-label="AODS.AI home">
<span className="brand-mark">A</span>
<span>
AODS<span className="brand-dot">.</span>AI
</span>
</a>
);
}

function ArrowIcon() {
return (
<svg
width="16"
height="16"
viewBox="0 0 24 24"
fill="none"
aria-hidden="true"
>
<path
d="M5 12h14m-6-6 6 6-6 6"
stroke="currentColor"
strokeWidth="1.8"
strokeLinecap="round"
strokeLinejoin="round"
/>
</svg>
);
}

function DashboardPreview() {
return (
<div className="dashboard-shell">
<div className="dashboard-topbar">
<div className="window-dots">
<span />
<span />
<span />
</div>
<span className="dashboard-label">AODS INTELLIGENCE / OVERVIEW</span>
<span className="live-indicator">
<i /> SYSTEM CONCEPT
</span>
</div>

  <div className="dashboard-body">
    <aside className="dashboard-sidebar">
      <div className="sidebar-logo">A.</div>
      <div className="sidebar-item active">
        <span>◫</span> Overview
      </div>
      <div className="sidebar-item">
        <span>◎</span> ICP ranking
      </div>
      <div className="sidebar-item">
        <span>✓</span> Verification
      </div>
      <div className="sidebar-item">
        <span>↗</span> Personalization
      </div>
      <div className="sidebar-item">
        <span>▤</span> Campaigns
      </div>
      <div className="sidebar-bottom">WORKSPACE</div>
    </aside>

    <div className="dashboard-content">
      <div className="preview-heading">
        <div>
          <div className="eyebrow">YOUR OUTBOUND WORKSPACE</div>
          <h3>Prospect intelligence</h3>
          <p>Understand your list before you reach out.</p>
        </div>
        <span className="preview-badge">PREVIEW</span>
      </div>

      <div className="metric-grid">
        <div className="metric-card">
          <span>ICP MATCH</span>
          <strong>Ranked</strong>
          <small>Fit-based prioritization</small>
        </div>
        <div className="metric-card">
          <span>EMAIL QUALITY</span>
          <strong>Checked</strong>
          <small>Syntax + DNS signals</small>
        </div>
        <div className="metric-card">
          <span>MESSAGING</span>
          <strong>Personalized</strong>
          <small>Prospect-level context</small>
        </div>
      </div>

      <div className="prospect-panel">
        <div className="panel-heading">
          <div>
            <span className="eyebrow">ILLUSTRATIVE EXAMPLE</span>
            <h4>Prospect prioritization</h4>
          </div>
          <span className="table-caption">SAMPLE DATA</span>
        </div>

        <div className="prospect-row table-header">
          <span>PROSPECT</span>
          <span>ICP FIT</span>
          <span>STATUS</span>
        </div>

        <div className="prospect-row">
          <div className="prospect-name">
            <span className="avatar avatar-one">N</span>
            <div>
              <b>Northstar Systems</b>
              <small>Technology</small>
            </div>
          </div>
          <div className="fit-cell">
            <div className="fit-track">
              <span style={{ width: "92%" }} />
            </div>
            <small>High fit</small>
          </div>
          <span className="status-pill">Priority</span>
        </div>

        <div className="prospect-row">
          <div className="prospect-name">
            <span className="avatar avatar-two">V</span>
            <div>
              <b>Vertex Digital</b>
              <small>Professional services</small>
            </div>
          </div>
          <div className="fit-cell">
            <div className="fit-track">
              <span style={{ width: "74%" }} />
            </div>
            <small>Potential fit</small>
          </div>
          <span className="status-pill status-review">Review</span>
        </div>

        <div className="prospect-row">
          <div className="prospect-name">
            <span className="avatar avatar-three">A</span>
            <div>
              <b>Atlas Operations</b>
              <small>Business services</small>
            </div>
          </div>
          <div className="fit-cell">
            <div className="fit-track">
              <span style={{ width: "48%" }} />
            </div>
            <small>Needs review</small>
          </div>
          <span className="status-pill status-muted">Evaluate</span>
        </div>
      </div>

      <div className="preview-footnote">
        <span className="footnote-check">✓</span>
        Example interface · Not live customer data
      </div>
    </div>
  </div>
</div>

);
}

export default function App() {
return (
<div className="site-wrapper" id="home">
<div className="announcement">
<span className="announcement-dot" />
OUTBOUND INTELLIGENCE, BUILT AROUND YOUR EXISTING LEADS
<a href="#how-it-works">
Discover the workflow <ArrowIcon />
</a>
</div>

  <header className="site-header">
    <div className="container nav-container">
      <Brand />

      <nav className="main-nav" aria-label="Main navigation">
        <a href="#platform">Platform</a>
        <a href="#how-it-works">How it works</a>
        <a href="#pricing">Pricing</a>
      </nav>

      <div className="nav-actions">
        <a className="login-link" href="mailto:hello@aods.ai?subject= AODS.AI Sign In">
          Sign in
        </a>
        <a className="button button-small button-primary" href="#pricing">
          Get started <ArrowIcon />
        </a>
      </div>
    </div>
  </header>

  <main>
    <section className="hero-section">
      <div className="hero-grid container">
        <div className="hero-copy">
          <div className="section-kicker">
            <span className="kicker-line" />
            INTELLIGENT OUTBOUND SYSTEMS
          </div>

          <h1>
            Your leads.
            <br />
            <span className="hero-highlight">Better qualified.</span>
            <br />
            More personal.
          </h1>

          <p className="hero-description">
            Turn your existing prospect lists into smarter outbound
            campaigns with ICP intelligence, email verification and
            AI-powered personalization.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#pricing">
              Explore the pilot <ArrowIcon />
            </a>
            <a className="button button-secondary" href="#platform">
              Explore the platform <span className="play-icon">↘</span>
            </a>
          </div>

          <div className="hero-proof">
            <div className="proof-icon">✳</div>
            <div>
              <strong>Bring your own leads.</strong>
              <span>We focus on qualification and personalization.</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-glow" />
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <DashboardPreview />
          <div className="floating-note note-top">
            <span className="floating-icon">↗</span>
            <div>
              <b>Know who to prioritize</b>
              <small>ICP-fit intelligence</small>
            </div>
          </div>
          <div className="floating-note note-bottom">
            <span className="floating-icon floating-icon-check">✓</span>
            <div>
              <b>Personalization first</b>
              <small>Context before contact</small>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-bottom container">
        <span>ONE WORKFLOW. THREE INTELLIGENCE LAYERS.</span>
        <div className="hero-bottom-items">
          <span>01 / QUALIFY</span>
          <span>02 / VERIFY</span>
          <span>03 / PERSONALIZE</span>
        </div>
      </div>
    </section>

    <section className="platform-section section-padding" id="platform">
      <div className="container">
        <div className="section-heading">
          <div>
            <div className="section-kicker">
              <span className="kicker-line" />
              THE PLATFORM
            </div>
            <h2>
              Less guesswork.
              <br />
              <span className="muted-heading">More intelligent outreach.</span>
            </h2>
          </div>
          <p className="section-intro">
            Outbound performance starts before the first email. AODS.AI
            helps you make better decisions about your list, your contacts
            and your message.
          </p>
        </div>

        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.number}>
              <div className="feature-card-top">
                <span className="feature-number">{feature.number}</span>
                <span className="feature-arrow">
                  <ArrowIcon />
                </span>
              </div>
              <div className="feature-visual">
                {feature.number === "01" && (
                  <div className="icp-visual">
                    <div className="icp-ring">
                      <div className="icp-ring-inner">
                        <span>ICP</span>
                        <strong>FIT</strong>
                      </div>
                    </div>
                    <div className="icp-lines">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                )}
                {feature.number === "02" && (
                  <div className="verification-visual">
                    <div className="verify-circle">✓</div>
                    <div className="verify-lines">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                )}
                {feature.number === "03" && (
                  <div className="message-visual">
                    <div className="message-line message-line-long" />
                    <div className="message-line" />
                    <div className="message-line message-line-short" />
                    <div className="message-highlight" />
                  </div>
                )}
              </div>
              <span className="feature-tag">{feature.tag}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="workflow-section section-padding" id="how-it-works">
      <div className="container workflow-layout">
        <div className="workflow-intro">
          <div className="section-kicker">
            <span className="kicker-line" />
            SIMPLE BY DESIGN
          </div>
          <h2>
            Your list in.
            <br />
            <span className="hero-highlight">A smarter process out.</span>
          </h2>
          <p>
            No new scraping platform to manage. Start with the prospects
            you already have and bring intelligence to the next step.
          </p>
          <a className="text-link" href="#pricing">
            Start with a pilot <ArrowIcon />
          </a>
        </div>

        <div className="workflow-steps">
          {workflow.map((item) => (
            <article className="workflow-step" key={item.step}>
              <div className="workflow-step-number">{item.step}</div>
              <div className="workflow-step-copy">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <span className="workflow-step-arrow">
                <ArrowIcon />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="pricing-section section-padding" id="pricing">
      <div className="container">
        <div className="pricing-card">
          <div className="pricing-content">
            <div className="section-kicker">
              <span className="kicker-line" />
              START WITH A PILOT
            </div>
            <h2>
              Make your next
              <br />
              outbound cycle count.
            </h2>
            <p>
              See how AODS.AI can improve your existing lead workflow
              before deciding what comes next.
            </p>
            <div className="pricing-includes">
              <span><i>✓</i> ICP-based lead prioritization</span>
              <span><i>✓</i> Email verification signals</span>
              <span><i>✓</i> AI-personalized messaging</span>
              <span><i>✓</i> Campaign workflow planning</span>
            </div>
          </div>

          <div className="pricing-offer">
            <span className="offer-label">AODS.AI PILOT</span>
            <div className="offer-price">
              <span className="currency">$</span>500
            </div>
            <span className="offer-detail">Initial pilot engagement</span>
            <div className="offer-divider" />
            <p>
              Scope and lead volume confirmed before work begins.
              Sending capacity depends on your mailbox setup.
            </p>
            <a
              className="button button-primary offer-button"
              href="mailto:hello@aods.ai?subject=AODS.AI%20Pilot%20Inquiry"
            >
              Discuss your pilot <ArrowIcon />
            </a>
            <span className="offer-footnote">
              No scraping package. Bring your own prospect list.
            </span>
          </div>
        </div>
      </div>
    </section>

    <section className="closing-section">
      <div className="container closing-inner">
        <div className="closing-mark">A.</div>
        <div>
          <div className="section-kicker">
            <span className="kicker-line" />
            BETTER OUTBOUND STARTS HERE
          </div>
          <h2>
            Stop treating every lead
            <br />
            <span className="hero-highlight">like the same opportunity.</span>
          </h2>
        </div>
        <a className="button button-primary" href="#pricing">
          Let's get started <ArrowIcon />
        </a>
      </div>
    </section>
  </main>

  <footer className="site-footer">
    <div className="container footer-inner">
      <Brand />
      <span>Intelligence for more thoughtful outbound.</span>
      <div className="footer-links">
        <a href="#platform">Platform</a>
        <a href="#how-it-works">Workflow</a>
        <a href="mailto:hello@aods.ai">Contact</a>
      </div>
      <span className="copyright">
        © {new Date().getFullYear()} AODS.AI
      </span>
    </div>
  </footer>
</div>

);
            }
