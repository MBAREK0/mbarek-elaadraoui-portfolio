# M'barek El Aadraoui — Portfolio Data

All content currently used on the portfolio site (EN primary + FR).

---

## Profile

| Field | Value |
| --- | --- |
| Name | M'barek El Aadraoui |
| Role (EN) | Java Full-Stack Developer |
| Role (FR) | Développeur Full-Stack Java |
| Location | Casablanca, Morocco |
| Email | mbarekelaadraoui@gmail.com |
| Phone | +212 637 833 947 |
| LinkedIn | https://linkedin.com/in/mbarek-el-aadraoui |
| GitHub | https://github.com/MBAREK0 |
| Education | YouCode / UM6P |

### Hero

**EN**
- Eyebrow: Java full-stack · Morocco
- Title: Building reliable systems for *real* production.
- Bio: Java developer with hands-on experience on production Spring Boot systems - banking, trade finance, and IAM. Java 17, Spring Boot 3, OAuth2/Keycloak, JPA/PostgreSQL, and AI/LLM integrations in live apps.

**FR**
- Eyebrow: Full-stack Java · Maroc
- Title: Des systèmes fiables pour la *vraie* production.
- Bio: Développeur Java avec de l’expérience pratique sur des systèmes Spring Boot en production - banque, trade-finance et IAM. Java 17, Spring Boot 3, OAuth2/Keycloak, JPA/PostgreSQL, et intégration d’outils IA/LLM.

### About lead

**EN:** Full-stack Java specialist (YouCode / UM6P). Currently at Agilisys on production Spring Boot platforms spanning IAM, banking exchange, SI middleware, complaints, payroll deduction and travel. Previously web development at IndustriCom Group and a Symfony e-commerce internship at PC Halle.

**FR:** Spécialiste full-stack Java (YouCode / UM6P). Actuellement chez Agilisys sur des plateformes Spring Boot en production : IAM, échange bancaire, middleware SI, réclamations, prélèvement conventionné et travel. Avant : développement web chez IndustriCom Group et stage e-commerce Symfony chez PC Halle.

---

## Experience

| Role (EN) | Role (FR) | Company | Place | Period |
| --- | --- | --- | --- | --- |
| Java Full-Stack Developer | Développeur Full-Stack Java | Agilisys | Remote / Télétravail | Jul 2025 – Present |
| Web Developer | Développeur Web | IndustriCom Group | Casablanca | Apr – Jul 2025 |
| Full-Stack Intern | Stagiaire Full-Stack | PC Halle | Tangier / Tanger | May – Jul 2024 |

---

## Skills / Compétences

- Java
- Spring Boot
- Keycloak
- IAM
- RBAC
- Spring Security
- OAuth2
- OpenID Connect
- JWT
- Spring Integration
- Spring Batch
- Spring Cloud
- Microservices
- REST API
- OpenAPI
- Event-Driven Architecture
- RabbitMQ
- OpenFeign
- Resilience4j
- Camunda BPM
- PostgreSQL
- Liquibase
- Flyway
- Redis
- MinIO
- Active Directory
- LDAP
- EBICS
- SAGE
- Angular
- TypeScript
- React
- PrimeNG
- Docker
- Docker Compose
- Jenkins
- SonarQube
- JaCoCo
- Prometheus
- OpenTelemetry
- Grafana
- AWS
- n8n
- OCR
- LLM
- RAG
- MapStruct
- Quartz
- ShedLock
- Jasypt

---

## Certifications

- Oracle Certified Associate — Java SE 8 (2025)
- Oracle Certified Professional — Java SE 17 (in progress / en cours)

---

## Selected work — Agilisys (Jul 2025 – Present)

### 1. IAM / RBAC platform
**FR:** Plateforme IAM / RBAC

| | |
| --- | --- |
| Meta | WF RBAC · Spring Boot 3.2 · Java 17 · Angular 19 |
| Image | `/images/iam-rbac.jpg` |

**Description (EN):** Centralized entitlement platform covering the full access lifecycle: request, hierarchical approval, Keycloak or manual provisioning, revocation, and audit. Also acts as an HR identity hub syncing AgiRH CSV batches into Active Directory and Keycloak.

**Description (FR):** Plateforme centralisée de gestion des habilitations : demande, validation hiérarchique, provisionnement Keycloak ou manuel, révocation et audit. Hub d’identité RH synchronisant les lots CSV AgiRH vers Active Directory et Keycloak.

**Stack**
- Java 17
- Spring Boot 3.2
- Keycloak 23
- PostgreSQL
- Liquibase
- Spring Batch / Quartz
- LDAP / AD
- Angular 19
- PrimeNG
- MapStruct

**Highlights (EN)**
1. Multi-level workflow (N+1 / N+2) for profile and role requests
2. Multi-server / multi-realm Keycloak provisioning with sync retry
3. AgiRH batch import → AD + Keycloak + RBAC database
4. Auto-revocation, dérogations, AD rapprochement and Keycloak review
5. Manual operator tasks for non-integrated apps + full audit trail

**Highlights (FR)**
1. Workflow multi-niveaux (N+1 / N+2) pour profils et rôles
2. Provisionnement Keycloak multi-serveurs / multi-realms avec retry de sync
3. Import batch AgiRH → AD + Keycloak + base RBAC
4. Révocation automatique, dérogations, rapprochement AD et revue Keycloak
5. Tâches manuelles opérateurs pour apps non intégrées + audit trail complet

---

### 2. Banking exchange platform
**FR:** Plateforme d’échange bancaire

| | |
| --- | --- |
| Meta | Échange bancaire · Spring Boot 3.5 · Spring Integration |
| Image | `/images/banking-exchange.jpg` |

**Description (EN):** Multi-service platform for automatic debit exchange with Moroccan banks (SIMT): Appel ingestion, per-bank SIMT generation, SORT returns, CBS routing, and encaissement - with ops UI, KPI steering, and production observability.

**Description (FR):** Plateforme multi-services pour les prélèvements automatiques avec les banques marocaines (SIMT) : ingestion Appel, génération SIMT par banque, retours SORT, routage CBS et encaissement - avec UI ops, pilotage KPI et observabilité production.

**Stack**
- Java 17
- Spring Boot 3.5
- Spring Integration
- PostgreSQL
- ShedLock
- OpenCSV
- JWT / Jasypt
- Prometheus / OTEL
- Angular 19
- PrimeNG

**Highlights (EN)**
1. Five pipelines: Appel, SIMT out, SORT in, CBS routage, Encaissement
2. Bank-specific SIMT generators and SORT readers (ABB, AWB, BCP, BMCI, BOA, CDM, SGMA)
3. JDBC message store, archive/error folders, HA scheduling with ShedLock
4. Backend REST + Angular ops UI + dedicated KPI / steering service
5. Actuator, Prometheus, OpenTelemetry, structured logs, JaCoCo / Sonar

**Highlights (FR)**
1. Cinq pipelines : Appel, SIMT out, SORT in, routage CBS, Encaissement
2. Générateurs SIMT et lecteurs SORT par banque (ABB, AWB, BCP, BMCI, BOA, CDM, SGMA)
3. Message store JDBC, dossiers archive/erreur, scheduling HA avec ShedLock
4. API REST backend + UI Angular ops + service KPI / steering dédié
5. Actuator, Prometheus, OpenTelemetry, logs structurés, JaCoCo / Sonar

---

### 3. SI middleware — XLoan / Payment Hub
**FR:** Backend middleware SI — XLoan / Hub de paiement

| | |
| --- | --- |
| Meta | Async API Gateway · SAGE / EBICS · RabbitMQ · OpenFeign |
| Image | `/images/si-middleware.jpg` |

**Description (EN):** Event-driven Async API Gateway: sole consumer of XLoan RabbitMQ events, routing across dozens of interfaces and fluxes to downstream systems, with synchronous REST callbacks to XLoan and a plugin extension model. Also feeds the Payment Hub with client encaissements extracted from SAGE EBICS bank statements for reconciliation.

**Description (FR):** Async API Gateway événementiel : consommateur unique des événements RabbitMQ XLoan, routage vers des dizaines d’interfaces et de flux vers les systèmes aval, callbacks REST synchrones vers XLoan et modèle d’extensions plugin. Alimente aussi le Hub de paiement avec les encaissements clients extraits des relevés bancaires EBICS dans SAGE, pour la réconciliation.

**Stack**
- Java 21
- Spring Boot 3.5
- Spring Cloud
- RabbitMQ
- OpenFeign
- Resilience4j
- SAGE / EBICS
- PostgreSQL / Flyway
- Spring Batch
- Prometheus

**Highlights (EN)**
1. Declarative flux catalogue driving queues, DLQs, and inbound REST paths
2. Plugin JARs per interface without modifying the closed core
3. Standardized event handler pipeline: enrich → validate → process → notify
4. SAGE EBICS → RabbitMQ → Payment Hub: scheduled extraction, watermark, mapping, ACK
5. Format validation, error/archive files, idempotency, DLQ and functional journaling

**Highlights (FR)**
1. Catalogue de flux déclaratif (files, DLQ, APIs inbound)
2. JAR plugins par interface sans modifier le socle fermé
3. Pipeline de handlers standardisé : enrich → validate → process → notify
4. SAGE EBICS → RabbitMQ → Hub : extraction planifiée, watermark, mapping, ACK
5. Contrôle de format, fichiers erreurs/archives, idempotence, DLQ et journalisation fonctionnelle

---

### 4. Customer complaints API
**FR:** API réclamations clients

| | |
| --- | --- |
| Meta | Spring Boot 3.2 · Java 17 · PostgreSQL · Flyway |
| Image | `/images/complaints-api.jpg` |

**Description (EN):** REST API for customer request and complaint lifecycle in a credit-institution context: create, track, update status, attach references, and verify a tamper-evident audit trail.

**Description (FR):** API REST pour le cycle de vie des demandes et réclamations clients en contexte établissement de crédit : création, suivi, changement de statut, pièces jointes par référence et audit trail inviolable.

**Stack**
- Java 17
- Spring Boot 3.2
- Spring Security
- OAuth2 / API key
- PostgreSQL
- Flyway
- OpenAPI
- Jasypt
- JaCoCo / Sonar

**Highlights (EN)**
1. Full request lifecycle with filters, pagination and status transitions
2. Append-only audit events with SHA-256 hashing and hash chaining
3. Integrity verification endpoint for the event chain
4. Notification proxy (SMS / email) with local mock for development
5. Contract-driven API envelope, OpenAPI docs and automated tests

**Highlights (FR)**
1. Cycle de vie complet avec filtres, pagination et transitions de statut
2. Événements d’audit append-only avec hachage SHA-256 et chaînage
3. Endpoint de vérification d’intégrité de la chaîne d’événements
4. Proxy de notifications (SMS / email) avec mock local de développement
5. Contrat d’API unifié, documentation OpenAPI et tests automatisés

---

### 5. Partner payroll-deduction platform
**FR:** Plateforme prélèvement clients conventionnés

| | |
| --- | --- |
| Meta | Clients conventionnés · Camunda · Spring Batch · Angular |
| Image | `/images/payroll-deduction.jpg` |

**Description (EN):** Platform for partner-employer payroll deduction on consumer credit: ingest expected deductions and payment statements, reconcile gaps, run installment deferral workflows, detect salary-assignment clauses in PDFs, and steer treasury KPIs.

**Description (FR):** Plateforme de prélèvement sur salaire pour les organismes partenaires : ingestion des tombées et règlements, réconciliation des écarts, workflows de report d’échéances, détection OCR des clauses CDS et pilotage KPI trésorerie.

**Stack**
- Java 17
- Spring Boot
- Camunda BPM
- Spring Batch
- PostgreSQL
- JWT / OTP
- Tess4j / PDFBox
- Angular 17 / 19
- PrimeNG

**Highlights (EN)**
1. Tombée and règlement file intake with Spring Batch jobs
2. Reconciliation of expected vs paid amounts (écarts)
3. Camunda BPMN workflows for installment deferral requests
4. OCR batch to detect CDS clauses in scanned PDFs
5. Operations UI and dedicated treasury KPI dashboards

**Highlights (FR)**
1. Intégration des fichiers tombée et règlement via Spring Batch
2. Réconciliation attendu vs payé (écarts)
3. Workflows Camunda BPMN pour les demandes de report
4. Batch OCR pour détecter les clauses CDS dans les PDF scannés
5. UI opérationnelle et tableaux de bord KPI trésorerie dédiés

---

### 6. Travel agency platform
**FR:** Plateforme agence de voyage

| | |
| --- | --- |
| Meta | Travel agency · Angular 21 · Spring Boot 3.4 · Java 21 |
| Image | `/images/travel-agency.jpg` |

**Description (EN):** Full-stack travel platform: public booking site and staff admin for catalog, trips, purchases, CRM/marketing, newsletter, omnichannel messaging, social publishing, and AI-assisted content - integrated with CRM, marketing automation, WhatsApp and workflow tools.

**Description (FR):** Plateforme travel full-stack : site de réservation public et admin (catalogue, circuits, achats, CRM/marketing, newsletter, messagerie omnicanale, publication sociale et contenus assistés par IA) - intégrée CRM, automation marketing, WhatsApp et workflows.

**Stack**
- Java 21
- Spring Boot 3.4
- Angular 21
- PostgreSQL / Flyway
- RabbitMQ
- Redis / MinIO
- JWT
- Docker Compose
- n8n

**Highlights (EN)**
1. Public booking site + admin portal (catalog, trips, purchases, finance)
2. Booking lifecycle with domain events over RabbitMQ
3. CRM, marketing automation and newsletter integrations
4. WhatsApp / omnichannel inbox bridge and social OAuth publishing
5. Dockerized stack with AI content helpers and workflow automation

**Highlights (FR)**
1. Site public de réservation + portail admin (catalogue, circuits, achats, finance)
2. Cycle de vie des réservations avec événements métier sur RabbitMQ
3. Intégrations CRM, automation marketing et newsletter
4. Pont WhatsApp / inbox omnicanal et publication sociale OAuth
5. Stack Dockerisée avec assistants IA et automatisation de workflows

---

## Site meta

| Key | EN | FR |
| --- | --- | --- |
| Title | M'barek El Aadraoui - Java Full-Stack Developer | M'barek El Aadraoui - Développeur Full-Stack Java |
| Description | Portfolio of M'barek El Aadraoui - Java full-stack developer building production Spring Boot systems for banking, trade finance, and IAM. | Portfolio de M'barek El Aadraoui - développeur full-stack Java sur des systèmes Spring Boot en production (banque, trade-finance, IAM). |
| Footer | © 2026 M'barek El Aadraoui · Casablanca | © 2026 M'barek El Aadraoui · Casablanca |
