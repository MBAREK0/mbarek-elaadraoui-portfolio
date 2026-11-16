export type Locale = 'en' | 'fr';

const STORAGE_KEY = 'portfolio:lang';

type Dict = Record<string, string>;

const en: Dict = {
  'meta.title': "M'barek El Aadraoui — Java Full-Stack Developer",
  'meta.description':
    "Portfolio of M'barek El Aadraoui — Java full-stack developer building production Spring Boot systems for banking, trade finance, and IAM.",

  'nav.skip': 'Skip to content',
  'nav.home': "M'barek, home",
  'nav.work': 'Work',
  'nav.about': 'About',
  'nav.contact': 'Contact',
  'nav.lang': 'Language',
  'theme.dark': 'Dark mode',
  'theme.toggle': 'Toggle dark mode (T)',

  'hero.eyebrow': 'Java full-stack · Morocco',
  'hero.title': 'Building reliable systems<br /> for <em>real</em> production.',
  'hero.bio':
    'Java developer with hands-on experience on production Spring Boot systems — banking, trade finance, and IAM. Java 17, Spring Boot 3, OAuth2/Keycloak, JPA/PostgreSQL, and AI/LLM integrations in live apps.',
  'hero.cta': 'See selected work',

  'work.title': 'Selected work',
  'work.meta': 'Agilisys · Jul 2025 – Present',
  'work.stack': 'Stack',
  'work.highlights': 'Highlights',

  'work.iam.meta': 'WF RBAC · Spring Boot 3.2 · Java 17 · Angular 19',
  'work.iam.title': 'IAM / RBAC platform',
  'work.iam.desc':
    'Centralized entitlement platform covering the full access lifecycle: request, hierarchical approval, Keycloak or manual provisioning, revocation, and audit. Also acts as an HR identity hub syncing AgiRH CSV batches into Active Directory and Keycloak.',
  'work.iam.f1': 'Multi-level workflow (N+1 / N+2) for profile and role requests',
  'work.iam.f2': 'Multi-server / multi-realm Keycloak provisioning with sync retry',
  'work.iam.f3': 'AgiRH batch import → AD + Keycloak + RBAC database',
  'work.iam.f4': 'Auto-revocation, dérogations, AD rapprochement and Keycloak review',
  'work.iam.f5': 'Manual operator tasks for non-integrated apps + full audit trail',

  'work.bank.meta': 'Échange bancaire · Spring Boot 3.5 · Spring Integration',
  'work.bank.title': 'Banking exchange platform',
  'work.bank.desc':
    'Multi-service platform for automatic debit exchange with Moroccan banks (SIMT): Appel ingestion, per-bank SIMT generation, SORT returns, CBS routing, and encaissement — with ops UI, KPI steering, and production observability.',
  'work.bank.f1': 'Five pipelines: Appel, SIMT out, SORT in, CBS routage, Encaissement',
  'work.bank.f2': 'Bank-specific SIMT generators and SORT readers (ABB, AWB, BCP, BMCI, BOA, CDM, SGMA)',
  'work.bank.f3': 'JDBC message store, archive/error folders, HA scheduling with ShedLock',
  'work.bank.f4': 'Backend REST + Angular ops UI + dedicated KPI / steering service',
  'work.bank.f5': 'Actuator, Prometheus, OpenTelemetry, structured logs, JaCoCo / Sonar',

  'work.si.meta': 'Async API Gateway · SAGE / EBICS · RabbitMQ · OpenFeign',
  'work.si.title': 'SI middleware — XLoan / Payment Hub',
  'work.si.desc':
    'Event-driven Async API Gateway: sole consumer of XLoan RabbitMQ events, routing across dozens of interfaces and fluxes to downstream systems, with synchronous REST callbacks to XLoan and a plugin extension model. Also feeds the Payment Hub with client encaissements extracted from SAGE EBICS bank statements for reconciliation.',
  'work.si.f1': 'Declarative flux catalogue driving queues, DLQs, and inbound REST paths',
  'work.si.f2': 'Plugin JARs per interface without modifying the closed core',
  'work.si.f3': 'Standardized event handler pipeline: enrich → validate → process → notify',
  'work.si.f4': 'SAGE EBICS → RabbitMQ → Payment Hub: scheduled extraction, watermark, mapping, ACK',
  'work.si.f5': 'Format validation, error/archive files, idempotency, DLQ and functional journaling',

  'work.reclam.meta': 'Spring Boot 3.2 · Java 17 · PostgreSQL · Flyway',
  'work.reclam.title': 'Customer complaints API',
  'work.reclam.desc':
    'REST API for customer request and complaint lifecycle in a credit-institution context: create, track, update status, attach references, and verify a tamper-evident audit trail.',
  'work.reclam.f1': 'Full request lifecycle with filters, pagination and status transitions',
  'work.reclam.f2': 'Append-only audit events with SHA-256 hashing and hash chaining',
  'work.reclam.f3': 'Integrity verification endpoint for the event chain',
  'work.reclam.f4': 'Notification proxy (SMS / email) with local mock for development',
  'work.reclam.f5': 'Contract-driven API envelope, OpenAPI docs and automated tests',

  'work.cliconv.meta': 'Clients conventionnés · Camunda · Spring Batch · Angular',
  'work.cliconv.title': 'Partner payroll-deduction platform',
  'work.cliconv.desc':
    'Platform for partner-employer payroll deduction on consumer credit: ingest expected deductions and payment statements, reconcile gaps, run installment deferral workflows, detect salary-assignment clauses in PDFs, and steer treasury KPIs.',
  'work.cliconv.f1': 'Tombée and règlement file intake with Spring Batch jobs',
  'work.cliconv.f2': 'Reconciliation of expected vs paid amounts (écarts)',
  'work.cliconv.f3': 'Camunda BPMN workflows for installment deferral requests',
  'work.cliconv.f4': 'OCR batch to detect CDS clauses in scanned PDFs',
  'work.cliconv.f5': 'Operations UI and dedicated treasury KPI dashboards',

  'work.assfar.meta': 'Travel agency · Angular 21 · Spring Boot 3.4 · Java 21',
  'work.assfar.title': 'Travel agency platform',
  'work.assfar.desc':
    'Full-stack travel platform: public booking site and staff admin for catalog, trips, purchases, CRM/marketing, newsletter, omnichannel messaging, social publishing, and AI-assisted content — integrated with CRM, marketing automation, WhatsApp and workflow tools.',
  'work.assfar.f1': 'Public booking site + admin portal (catalog, trips, purchases, finance)',
  'work.assfar.f2': 'Booking lifecycle with domain events over RabbitMQ',
  'work.assfar.f3': 'CRM, marketing automation and newsletter integrations',
  'work.assfar.f4': 'WhatsApp / omnichannel inbox bridge and social OAuth publishing',
  'work.assfar.f5': 'Dockerized stack with AI content helpers and workflow automation',

  'about.title': 'About',
  'about.meta': 'Profile',
  'about.lead':
    'Full-stack Java specialist (YouCode / UM6P). Currently at Agilisys on production Spring Boot platforms spanning IAM, banking exchange, SI middleware, complaints, payroll deduction and travel. Previously web development at IndustriCom Group and a Symfony e-commerce internship at PC Halle.',

  'about.exp.title': 'Experience',
  'about.exp.agilisys.role': 'Java Full-Stack Developer',
  'about.exp.agilisys.meta': 'Agilisys · Remote · Jul 2025 – Present',
  'about.exp.industri.role': 'Web Developer',
  'about.exp.industri.meta': 'IndustriCom Group · Casablanca · Apr – Jul 2025',
  'about.exp.pchalle.role': 'Full-Stack Intern',
  'about.exp.pchalle.meta': 'PC Halle · Tangier · May – Jul 2024',

  'about.skills.title': 'Skills',
  'about.cert.title': 'Certifications',
  'about.cert.oca': 'Oracle Certified Associate — Java SE 8 (2025)',
  'about.cert.ocp': 'Oracle Certified Professional — Java SE 17 (in progress)',

  'footer.cta': 'Building something that needs a solid backend? ',
  'footer.talk': "Let's talk.",
  'footer.copy': "© 2026 M'barek El Aadraoui",
  'footer.city': 'Casablanca',
};

const fr: Dict = {
  'meta.title': "M'barek El Aadraoui — Développeur Full-Stack Java",
  'meta.description':
    "Portfolio de M'barek El Aadraoui — développeur full-stack Java sur des systèmes Spring Boot en production (banque, trade-finance, IAM).",

  'nav.skip': 'Aller au contenu',
  'nav.home': "M'barek, accueil",
  'nav.work': 'Projets',
  'nav.about': 'À propos',
  'nav.contact': 'Contact',
  'nav.lang': 'Langue',
  'theme.dark': 'Mode sombre',
  'theme.toggle': 'Basculer le mode sombre (T)',

  'hero.eyebrow': 'Full-stack Java · Maroc',
  'hero.title': 'Des systèmes fiables<br /> pour la <em>vraie</em> production.',
  'hero.bio':
    'Développeur Java avec de l’expérience pratique sur des systèmes Spring Boot en production — banque, trade-finance et IAM. Java 17, Spring Boot 3, OAuth2/Keycloak, JPA/PostgreSQL, et intégration d’outils IA/LLM.',
  'hero.cta': 'Voir les projets',

  'work.title': 'Projets sélectionnés',
  'work.meta': 'Agilisys · Juil. 2025 – Présent',
  'work.stack': 'Stack',
  'work.highlights': 'Points clés',

  'work.iam.meta': 'WF RBAC · Spring Boot 3.2 · Java 17 · Angular 19',
  'work.iam.title': 'Plateforme IAM / RBAC',
  'work.iam.desc':
    'Plateforme centralisée de gestion des habilitations : demande, validation hiérarchique, provisionnement Keycloak ou manuel, révocation et audit. Hub d’identité RH synchronisant les lots CSV AgiRH vers Active Directory et Keycloak.',
  'work.iam.f1': 'Workflow multi-niveaux (N+1 / N+2) pour profils et rôles',
  'work.iam.f2': 'Provisionnement Keycloak multi-serveurs / multi-realms avec retry de sync',
  'work.iam.f3': 'Import batch AgiRH → AD + Keycloak + base RBAC',
  'work.iam.f4': 'Révocation automatique, dérogations, rapprochement AD et revue Keycloak',
  'work.iam.f5': 'Tâches manuelles opérateurs pour apps non intégrées + audit trail complet',

  'work.bank.meta': 'Échange bancaire · Spring Boot 3.5 · Spring Integration',
  'work.bank.title': 'Plateforme d’échange bancaire',
  'work.bank.desc':
    'Plateforme multi-services pour les prélèvements automatiques avec les banques marocaines (SIMT) : ingestion Appel, génération SIMT par banque, retours SORT, routage CBS et encaissement — avec UI ops, pilotage KPI et observabilité production.',
  'work.bank.f1': 'Cinq pipelines : Appel, SIMT out, SORT in, routage CBS, Encaissement',
  'work.bank.f2': 'Générateurs SIMT et lecteurs SORT par banque (ABB, AWB, BCP, BMCI, BOA, CDM, SGMA)',
  'work.bank.f3': 'Message store JDBC, dossiers archive/erreur, scheduling HA avec ShedLock',
  'work.bank.f4': 'API REST backend + UI Angular ops + service KPI / steering dédié',
  'work.bank.f5': 'Actuator, Prometheus, OpenTelemetry, logs structurés, JaCoCo / Sonar',

  'work.si.meta': 'Async API Gateway · SAGE / EBICS · RabbitMQ · OpenFeign',
  'work.si.title': 'Backend middleware SI — XLoan / Hub de paiement',
  'work.si.desc':
    'Async API Gateway événementiel : consommateur unique des événements RabbitMQ XLoan, routage vers des dizaines d’interfaces et de flux vers les systèmes aval, callbacks REST synchrones vers XLoan et modèle d’extensions plugin. Alimente aussi le Hub de paiement avec les encaissements clients extraits des relevés bancaires EBICS dans SAGE, pour la réconciliation.',
  'work.si.f1': 'Catalogue de flux déclaratif (files, DLQ, APIs inbound)',
  'work.si.f2': 'JAR plugins par interface sans modifier le socle fermé',
  'work.si.f3': 'Pipeline de handlers standardisé : enrich → validate → process → notify',
  'work.si.f4': 'SAGE EBICS → RabbitMQ → Hub : extraction planifiée, watermark, mapping, ACK',
  'work.si.f5': 'Contrôle de format, fichiers erreurs/archives, idempotence, DLQ et journalisation fonctionnelle',

  'work.reclam.meta': 'Spring Boot 3.2 · Java 17 · PostgreSQL · Flyway',
  'work.reclam.title': 'API réclamations clients',
  'work.reclam.desc':
    'API REST pour le cycle de vie des demandes et réclamations clients en contexte établissement de crédit : création, suivi, changement de statut, pièces jointes par référence et audit trail inviolable.',
  'work.reclam.f1': 'Cycle de vie complet avec filtres, pagination et transitions de statut',
  'work.reclam.f2': 'Événements d’audit append-only avec hachage SHA-256 et chaînage',
  'work.reclam.f3': 'Endpoint de vérification d’intégrité de la chaîne d’événements',
  'work.reclam.f4': 'Proxy de notifications (SMS / email) avec mock local de développement',
  'work.reclam.f5': 'Contrat d’API unifié, documentation OpenAPI et tests automatisés',

  'work.cliconv.meta': 'Clients conventionnés · Camunda · Spring Batch · Angular',
  'work.cliconv.title': 'Plateforme prélèvement clients conventionnés',
  'work.cliconv.desc':
    'Plateforme de prélèvement sur salaire pour les organismes partenaires : ingestion des tombées et règlements, réconciliation des écarts, workflows de report d’échéances, détection OCR des clauses CDS et pilotage KPI trésorerie.',
  'work.cliconv.f1': 'Intégration des fichiers tombée et règlement via Spring Batch',
  'work.cliconv.f2': 'Réconciliation attendu vs payé (écarts)',
  'work.cliconv.f3': 'Workflows Camunda BPMN pour les demandes de report',
  'work.cliconv.f4': 'Batch OCR pour détecter les clauses CDS dans les PDF scannés',
  'work.cliconv.f5': 'UI opérationnelle et tableaux de bord KPI trésorerie dédiés',

  'work.assfar.meta': 'Agence de voyage · Angular 21 · Spring Boot 3.4 · Java 21',
  'work.assfar.title': 'Plateforme agence de voyage',
  'work.assfar.desc':
    'Plateforme travel full-stack : site de réservation public et admin (catalogue, circuits, achats, CRM/marketing, newsletter, messagerie omnicanale, publication sociale et contenus assistés par IA) — intégrée CRM, automation marketing, WhatsApp et workflows.',
  'work.assfar.f1': 'Site public de réservation + portail admin (catalogue, circuits, achats, finance)',
  'work.assfar.f2': 'Cycle de vie des réservations avec événements métier sur RabbitMQ',
  'work.assfar.f3': 'Intégrations CRM, automation marketing et newsletter',
  'work.assfar.f4': 'Pont WhatsApp / inbox omnicanal et publication sociale OAuth',
  'work.assfar.f5': 'Stack Dockerisée avec assistants IA et automatisation de workflows',

  'about.title': 'À propos',
  'about.meta': 'Profil',
  'about.lead':
    'Spécialiste full-stack Java (YouCode / UM6P). Actuellement chez Agilisys sur des plateformes Spring Boot en production : IAM, échange bancaire, middleware SI, réclamations, prélèvement conventionné et travel. Avant : développement web chez IndustriCom Group et stage e-commerce Symfony chez PC Halle.',

  'about.exp.title': 'Expérience',
  'about.exp.agilisys.role': 'Développeur Full-Stack Java',
  'about.exp.agilisys.meta': 'Agilisys · Télétravail · Juil. 2025 – Présent',
  'about.exp.industri.role': 'Développeur Web',
  'about.exp.industri.meta': 'IndustriCom Group · Casablanca · Avr. – Juil. 2025',
  'about.exp.pchalle.role': 'Stagiaire Full-Stack',
  'about.exp.pchalle.meta': 'PC Halle · Tanger · Mai – Juil. 2024',

  'about.skills.title': 'Compétences',
  'about.cert.title': 'Certifications',
  'about.cert.oca': 'Oracle Certified Associate — Java SE 8 (2025)',
  'about.cert.ocp': 'Oracle Certified Professional — Java SE 17 (en cours)',

  'footer.cta': 'Un backend solide à construire ? ',
  'footer.talk': 'Parlons-en.',
  'footer.copy': "© 2026 M'barek El Aadraoui",
  'footer.city': 'Casablanca',
};

const dictionaries: Record<Locale, Dict> = { en, fr };

let current: Locale = 'en';

export function getLocale(): Locale {
  return current;
}

export function readStoredLocale(): Locale {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === 'en' || raw === 'fr') return raw;
  } catch {
    /* ignore */
  }
  return 'en';
}

function t(locale: Locale, key: string): string {
  return dictionaries[locale][key] ?? dictionaries.en[key] ?? key;
}

/** Apply locale strings to `[data-i18n]`, `[data-i18n-html]`, and `[data-i18n-aria]` nodes. */
export function applyLanguage(locale: Locale, root: ParentNode = document): void {
  current = locale;
  try {
    localStorage.setItem(STORAGE_KEY, locale);
  } catch {
    /* ignore */
  }

  const html = document.documentElement;
  html.lang = locale;
  // Use data-locale on <html> so it never collides with EN/FR button [data-lang].
  html.dataset.locale = locale;
  delete html.dataset.lang;

  root.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (key) el.textContent = t(locale, key);
  });

  root.querySelectorAll<HTMLElement>('[data-i18n-html]').forEach((el) => {
    const key = el.dataset.i18nHtml;
    if (key) el.innerHTML = t(locale, key);
  });

  root.querySelectorAll<HTMLElement>('[data-i18n-aria]').forEach((el) => {
    const key = el.dataset.i18nAria;
    if (key) el.setAttribute('aria-label', t(locale, key));
  });

  root.querySelectorAll<HTMLElement>('[data-i18n-title]').forEach((el) => {
    const key = el.dataset.i18nTitle;
    if (key) el.setAttribute('title', t(locale, key));
  });

  document.title = t(locale, 'meta.title');
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute('content', t(locale, 'meta.description'));

  root.querySelectorAll<HTMLButtonElement>('.lang-toggle__btn[data-lang]').forEach((btn) => {
    const active = btn.dataset.lang === locale;
    btn.setAttribute('aria-pressed', active ? 'true' : 'false');
  });
}
