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
    copy: 'I came into cybersecurity from civil and structural engineering, where I studied how structures fail under load. Now I study how systems fail under attack, with a focus on SOC detection, application security testing, and threat intelligence. I learn by building: a Wazuh and Sysmon detection lab with custom rules mapped to MITRE ATT&CK, a vulnerability assessment of OWASP Juice Shop, and phishing investigations. I write up what I learn on my security blog, and I\'m currently a cybersecurity architecture research intern.',
    facts: [
      ['Background', 'Civil and Structural Engineering (B.Tech, M.Tech)'],
      ['Current', 'Cybersecurity Architecture Research Intern'],
      ['Focus', 'SOC detection, AppSec / VAPT, threat intelligence'],
      ['Writes', 'Personal security blog'],
      ['Learning by', 'Hands-on labs, workshops, certifications'],
    ],
  },
  experience: [
    {
      role: 'Cybersecurity Architecture Research Intern',
      company: 'iTelematics Software Pvt Ltd (EV.ENGINEER™)',
      period: 'July 2026 – Present',
      details: [
        'Built the backend, database, and simulation logic for a Cyber Attack Simulator using AI-assisted development, modeling attacks like telemetry spoofing, replay attacks, and BMS intrusion.',
        'Performed static and advanced static analysis on .apk malware files.',
      ],
    },
    {
      role: 'Cybersecurity Intern',
      company: 'Redynox Cybersecurity Solutions',
      period: 'February 2026 (1 Month)',
      details: [
        'Tested OWASP WebGoat for SQLi, XSS, and CSRF; documented findings with PoC and remediation steps.',
        'Built a network lab (Ubuntu + Kali); analysed traffic in Wireshark and configured firewall rules.',
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
      details: 'Built a hands-on SOC detection lab using Wazuh, Sysmon, and a Windows 11 endpoint; developed custom detection rules mapped to MITRE ATT&CK.',
      tags: ['Wazuh', 'Sysmon', 'Windows 11', 'MITRE ATT&CK'],
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
  links: {
    email: 'bhavyanagasai@gmail.com',
    github: 'https://github.com/Bhavyacyber',
    blog: 'https://bhavyacyber.github.io/blog/',
      cv: '/Bhavya_Parvathi_Resume.pdf',
      linkedin: 'https://www.linkedin.com/in/bhavya-naga-sai-parvathi-kshatri-3140251a2',
  },
} as const
