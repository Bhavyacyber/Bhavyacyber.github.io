export const portfolioData = {
  identity: {
    name: 'Bhavya Parvathi',
    displayName: 'Bhavya',
    title: 'AI Application Security Analyst (entry-level)',
    focusAreas: ['AI Application Security', 'LLM Security', 'Application Security Research'],
    status: 'Open to entry-level AI application security roles',
    availability: ['Open to AI application security roles', 'Open to security research', 'Open to open source collaborations'],
    location: 'India / open to remote',
  },
  about: {
    copy: 'I explore security at the intersection of AI and cybersecurity. My hands-on work includes testing prompt-injection scenarios in a sandbox, examining security considerations for AI-assisted SOC systems, and contributing to an AI cyber-safety prototype. I also bring application-security and Android APK analysis experience, and I\'m currently a cybersecurity research architect intern.',
    facts: [
      ['Current', 'Cybersecurity Research Architect Intern'],
      ['Focus', 'AI application security, LLM security, prompt injection'],
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
        'Performed static and advanced static analysis of Android APK files to investigate application behavior and potential security risks.',
        'Worked on cyber-attack and detection-rule simulators, contributing to simulator integration, API testing, and workflow validation.',
        'Guided a student intern group working on offline mesh cybersecurity, supporting their research and coordination.',
        'Applied management and leadership skills to coordinate work, support collaboration, and help keep project tasks moving.',
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
  tutorials: [
    {
      category: 'APPLICATION SECURITY',
      title: 'Practice a safe web application assessment',
      summary: 'Use an intentionally vulnerable app to learn how to test, document, and explain common web security issues.',
      steps: [
        'Run OWASP Juice Shop locally or in another authorized lab.',
        'Use Burp Suite or OWASP ZAP to examine authentication, access control, and input handling.',
        'Record reproducible findings, impact, and remediation with OWASP Top 10 context.',
      ],
      tags: ['OWASP Juice Shop', 'Burp Suite', 'OWASP Top 10'],
    },
    {
      category: 'THREAT INTELLIGENCE',
      title: 'Triage a suspicious email',
      summary: 'Follow a repeatable process to inspect email evidence and organize indicators for investigation.',
      steps: [
        'Review sender details and SPF/DKIM authentication results in the message headers.',
        'Extract suspicious domains, URLs, and other indicators without opening them.',
        'Document evidence and a clear triage rationale for follow-up.',
      ],
      tags: ['Phishing', 'Email headers', 'IOCs'],
    },
  ],
  technicalAreas: [
    { name: 'AI Application Security', tags: ['LLM Security', 'Prompt Injection', 'AI Threat Explanation', 'AI-Assisted SOC', 'AI Security Research'] },
    { name: 'Application & Web Security', tags: ['Burp Suite', 'OWASP ZAP', 'OWASP Top 10', 'WebGoat', 'VAPT', 'Web Security', 'Android APK Analysis'] },
    { name: 'Network Security', tags: ['Wireshark', 'Nmap', 'TCP/IP', 'DNS', 'ICMP', 'Firewalls', 'UFW', 'iptables', 'Network Traffic Analysis'] },
    { name: 'Security Engineering', tags: ['Python', 'Bash', 'FastAPI', 'React', 'PostgreSQL', 'Docker', 'GitHub', 'Pytest', 'Streamlit'] },
    { name: 'Security Research', tags: ['Cyber-Attack Simulation'] },
  ],
  links: {
    email: 'bhavyanagasai@gmail.com',
    github: 'https://github.com/Bhavyacyber',
    blog: 'https://bhavyacyber.github.io/blog/',
      cv: '/Bhavya_Parvathi_Resume.pdf',
      linkedin: 'https://www.linkedin.com/in/bhavya-naga-sai-parvathi-kshatri-3140251a2',
  },
} as const
