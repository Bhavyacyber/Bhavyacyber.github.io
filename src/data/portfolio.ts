export const portfolioData = {
  identity: {
    name: 'Bhavya Parvathi',
    displayName: 'Bhavya',
    title: 'Cybersecurity Analyst (entry-level)',
    focusAreas: ['SOC Analyst', 'Application Security / VAPT', 'Threat Intelligence'],
    status: 'Open to entry-level security roles',
    availability: ['Open to entry-level security roles', 'Open to open source collaborations', 'Open to security research'],
    location: 'India / open to remote',
  },
  about: {
    copy: 'I study how systems fail under attack, with a focus on SOC detection, application security testing, and threat intelligence. I learn by building: a Wazuh and Sysmon detection lab with custom rules mapped to MITRE ATT&CK, a vulnerability assessment of OWASP Juice Shop, and phishing investigations. I write up what I learn on my security blog, and I\'m currently a cybersecurity architecture research intern.',
    facts: [
      ['Current', 'Cybersecurity Architecture Research Intern'],
      ['Focus', 'SOC detection, AppSec / VAPT, threat intelligence'],
      ['Writes', 'Personal security blog'],
      ['Learning by', 'Hands-on labs, workshops, certifications'],
    ],
  },
  experience: [
    {
      role: 'Cybersecurity Research Architect Intern',
      company: 'iTelematics',
      period: '2026',
      details: [
        'Contributed to a Cyber Attack Simulation Platform using React, FastAPI, PostgreSQL, JWT, Docker, and GitHub, including simulator integration, SIM-005 development, API testing, and workflow validation.',
        'Built detection-simulation tooling with mock_generator.py, ai_explainer.py, and streamlit_app.py for synthetic security events, anomaly evaluation, and plain-English AI threat reporting.',
        'Expanded unit and end-to-end pytest coverage across UI, API, and engine pipelines above 70%, while performing hands-on Android APK malware analysis.',
      ],
    },
    {
      role: 'Cybersecurity Intern',
      company: 'Redynox Cybersecurity Solutions',
      period: 'February 2026 (1 Month)',
      details: [
        'Used Burp Suite, OWASP ZAP, and WebGoat for web-security testing, including SQL Injection, XSS, and CSRF scenarios mapped to the OWASP Top 10.',
        'Used Wireshark for DNS, ICMP, and TCP traffic analysis.',
        'Configured UFW/iptables and Linux network routing/NAT using Kali Linux and Ubuntu.',
      ],
    },
  ],
  projects: [
    {
      title: 'Cybersecurity Literacy — AI-SEC Hackathon',
      meta: 'AI-SEC Community, Manipal Academy of Higher Education · September 2026',
      category: 'AI SECURITY',
      details: 'Participated in a team hackathon focused on AI & security, building a basic working prototype of a cyber-safety layer to demystify security concepts and promote proactive, AI-aware security habits for non-technical users.',
      tags: ['AI & security', 'Cyber-safety', 'Hackathon'],
    },
    {
      title: 'SOC Detection Lab — Wazuh & Sysmon',
      meta: 'Independent Research',
      category: 'SOC / DETECTION',
      details: 'Built a practical Security Operations Center detection environment using Wazuh, Windows 11, Sysmon, PowerShell, Windows Firewall, and Kali Linux. Configured telemetry collection, developed custom detection rules, mapped detections to MITRE ATT&CK, and investigated Windows and firewall telemetry.',
      tags: ['Wazuh', 'Sysmon', 'PowerShell', 'Windows Firewall', 'MITRE ATT&CK'],
    },
    {
      title: 'OWASP Juice Shop — Vulnerability Assessment (VAPT)',
      meta: 'February 2026',
      category: 'APPLICATION SECURITY',
      details: 'Exploited Auth Bypass, IDOR, and XSS; produced a formal VAPT report with OWASP Top 10 mapping and impact analysis.',
      tags: ['Auth Bypass', 'IDOR', 'XSS', 'OWASP Top 10'],
    },
    {
      title: 'Network Recon & Phishing Investigation',
      meta: 'December 2025',
      category: 'THREAT INTELLIGENCE',
      details: 'Footprinted open services and vulnerabilities using Nmap and Recon-ng; analysed 10+ phishing emails for spoofed domains, DKIM/SPF failures, and IOCs.',
      tags: ['Nmap', 'Recon-ng', 'DKIM/SPF', 'IOCs'],
    },
  ],
  workshops: [
    {
      title: 'AI SOC Analyst — LLM Injection Lab',
      meta: 'CyBe AI Summit 2026 · September 2026',
      details: [
        'Participated in a hands-on workshop focused on LLM security and prompt injection.',
        'Performed prompt-injection testing in a sandboxed environment and used Linux/Bash commands during practical exercises.',
        'Explored security considerations surrounding AI-assisted SOC systems and LLM applications.',
      ],
    },
    {
      title: 'Cyber Ninjas: Master the Art of Ethical Hacking',
      meta: 'Techobytes Technologies · IISc Bengaluru, Rhapsody 4.0 · August 2026',
      details: [
        'Participated in a 2-day hands-on ethical-hacking workshop covering OSINT, network scanning, Metasploit, exploitation techniques, web application security, mobile application security, OWASP Top 10, SIEM fundamentals, and incident response fundamentals.',
      ],
    },
  ],
  technicalAreas: [
    { name: 'Application & Web Security', tags: ['Burp Suite', 'OWASP ZAP', 'OWASP Top 10', 'WebGoat', 'VAPT', 'Web Security'] },
    { name: 'SOC & Detection Engineering', tags: ['Wazuh', 'Sysmon', 'SIEM', 'Windows Security', 'Detection Rules', 'MITRE ATT&CK', 'Security Telemetry'] },
    { name: 'Network Security', tags: ['Wireshark', 'Nmap', 'TCP/IP', 'DNS', 'ICMP', 'Firewalls', 'UFW', 'iptables', 'Network Traffic Analysis'] },
    { name: 'Security Engineering', tags: ['Python', 'Bash', 'FastAPI', 'React', 'PostgreSQL', 'Docker', 'GitHub', 'Pytest', 'Streamlit'] },
    { name: 'AI & Security', tags: ['LLM Security', 'Prompt Injection', 'AI Threat Explanation', 'AI-Assisted SOC', 'AI Security Research'] },
    { name: 'Malware & Security Research', tags: ['Android APK Malware Analysis', 'Cyber-Attack Simulation'] },
  ],
  links: {
    email: 'bhavyanagasai@gmail.com',
    github: 'https://github.com/Bhavyacyber',
    blog: 'https://bhavyacyber.github.io/blog/',
      cv: '/Bhavya_Parvathi_Resume.pdf',
      linkedin: 'https://www.linkedin.com/in/bhavya-naga-sai-parvathi-kshatri-3140251a2',
  },
} as const
