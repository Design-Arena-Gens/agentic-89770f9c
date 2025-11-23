'use client'

import { useState, useMemo } from 'react'

interface Job {
  id: number
  title: string
  company: string
  location: string
  type: string
  salary: string
  description: string
  skills: string[]
  postedDate: string
}

const jobsData: Job[] = [
  {
    id: 1,
    title: 'Responsable Comptabilité',
    company: 'Deloitte France',
    location: 'Paris',
    type: 'CDI',
    salary: '55 000 - 70 000 €',
    description: 'Nous recherchons un Responsable Comptabilité pour superviser l\'équipe comptable et assurer la qualité des états financiers.',
    skills: ['SAP', 'Consolidation', 'IFRS', 'Management'],
    postedDate: '2 jours'
  },
  {
    id: 2,
    title: 'Responsable Financier',
    company: 'BNP Paribas',
    location: 'Lyon',
    type: 'CDI',
    salary: '60 000 - 80 000 €',
    description: 'Pilotage de la performance financière, élaboration des budgets et reporting consolidé pour le groupe.',
    skills: ['Contrôle de gestion', 'Excel avancé', 'Power BI', 'Budget'],
    postedDate: '5 jours'
  },
  {
    id: 3,
    title: 'Responsable Consolidation',
    company: 'KPMG',
    location: 'Paris',
    type: 'CDI',
    salary: '65 000 - 85 000 €',
    description: 'Gestion de la consolidation des comptes du groupe, suivi des normes IFRS et coordination avec les filiales.',
    skills: ['IFRS', 'Consolidation', 'SAP FC', 'Anglais'],
    postedDate: '1 semaine'
  },
  {
    id: 4,
    title: 'Responsable Comptable et Fiscal',
    company: 'PwC',
    location: 'Marseille',
    type: 'CDI',
    salary: '50 000 - 65 000 €',
    description: 'Supervision de la comptabilité générale et fiscale, déclarations fiscales et relation avec l\'administration.',
    skills: ['Fiscalité', 'TVA', 'IS', 'Sage', 'Management'],
    postedDate: '3 jours'
  },
  {
    id: 5,
    title: 'Responsable Contrôle de Gestion',
    company: 'EY France',
    location: 'Paris',
    type: 'CDI',
    salary: '58 000 - 75 000 €',
    description: 'Analyse de la performance, élaboration des tableaux de bord et accompagnement stratégique des opérationnels.',
    skills: ['Contrôle de gestion', 'KPI', 'Tableau de bord', 'Business Partner'],
    postedDate: '4 jours'
  },
  {
    id: 6,
    title: 'Responsable Trésorerie',
    company: 'Société Générale',
    location: 'Paris',
    type: 'CDI',
    salary: '62 000 - 78 000 €',
    description: 'Gestion de la trésorerie groupe, optimisation des flux financiers et relation avec les banques.',
    skills: ['Trésorerie', 'Cash management', 'Swift', 'Gestion risques'],
    postedDate: '1 semaine'
  },
  {
    id: 7,
    title: 'Responsable Audit Interne',
    company: 'Mazars',
    location: 'Nantes',
    type: 'CDI',
    salary: '55 000 - 72 000 €',
    description: 'Pilotage des missions d\'audit, évaluation des contrôles internes et recommandations d\'amélioration.',
    skills: ['Audit', 'Risk management', 'SOX', 'Contrôle interne'],
    postedDate: '6 jours'
  },
  {
    id: 8,
    title: 'Responsable Comptabilité Analytique',
    company: 'L\'Oréal',
    location: 'Paris',
    type: 'CDI',
    salary: '57 000 - 73 000 €',
    description: 'Mise en place et pilotage de la comptabilité analytique, analyse des coûts et rentabilité par activité.',
    skills: ['Comptabilité analytique', 'SAP CO', 'Analyse coûts', 'Reporting'],
    postedDate: '2 jours'
  },
  {
    id: 9,
    title: 'Responsable Reporting Financier',
    company: 'Crédit Agricole',
    location: 'Toulouse',
    type: 'CDI',
    salary: '54 000 - 68 000 €',
    description: 'Production et analyse du reporting financier mensuel, trimestriel et annuel pour la direction générale.',
    skills: ['Reporting', 'Excel', 'Power BI', 'Communication'],
    postedDate: '5 jours'
  },
  {
    id: 10,
    title: 'Responsable Comptabilité Fournisseurs',
    company: 'Carrefour',
    location: 'Lille',
    type: 'CDI',
    salary: '48 000 - 60 000 €',
    description: 'Management de l\'équipe comptabilité fournisseurs, optimisation des processus et contrôle des paiements.',
    skills: ['Comptabilité fournisseurs', 'Processus P2P', 'Management', 'ERP'],
    postedDate: '1 semaine'
  },
  {
    id: 11,
    title: 'Responsable Comptabilité Clients',
    company: 'Auchan',
    location: 'Bordeaux',
    type: 'CDI',
    salary: '47 000 - 59 000 €',
    description: 'Supervision de la comptabilité clients, recouvrement et optimisation du BFR.',
    skills: ['Comptabilité clients', 'Recouvrement', 'BFR', 'Relation client'],
    postedDate: '8 jours'
  },
  {
    id: 12,
    title: 'Responsable Comptabilité Générale',
    company: 'Accor',
    location: 'Paris',
    type: 'CDI',
    salary: '56 000 - 71 000 €',
    description: 'Production des comptes sociaux et consolidés, coordination avec les CAC et gestion d\'équipe.',
    skills: ['Comptabilité générale', 'Normes françaises', 'IFRS', 'Leadership'],
    postedDate: '3 jours'
  },
  {
    id: 13,
    title: 'Responsable Finance et Budget',
    company: 'Veolia',
    location: 'Lyon',
    type: 'CDI',
    salary: '59 000 - 76 000 €',
    description: 'Construction budgétaire, suivi des écarts et accompagnement des managers opérationnels.',
    skills: ['Budget', 'Prévisions', 'Business Partner', 'Analyse variance'],
    postedDate: '4 jours'
  },
  {
    id: 14,
    title: 'Responsable Comptabilité Immobilisations',
    company: 'Bouygues Construction',
    location: 'Paris',
    type: 'CDI',
    salary: '52 000 - 66 000 €',
    description: 'Gestion du patrimoine immobilisé, amortissements et mise en conformité avec les normes.',
    skills: ['Immobilisations', 'Amortissements', 'IFRS 16', 'SAP'],
    postedDate: '6 jours'
  },
  {
    id: 15,
    title: 'Responsable Contrôle Budgétaire',
    company: 'Airbus',
    location: 'Toulouse',
    type: 'CDI',
    salary: '61 000 - 79 000 €',
    description: 'Contrôle et analyse budgétaire, élaboration des forecasts et support à la décision stratégique.',
    skills: ['Contrôle budgétaire', 'Forecast', 'SAP', 'Industrie'],
    postedDate: '2 jours'
  },
  {
    id: 16,
    title: 'Responsable Comptabilité Groupe',
    company: 'Danone',
    location: 'Paris',
    type: 'CDI',
    salary: '64 000 - 82 000 €',
    description: 'Coordination de la clôture groupe, élaboration des liasses de consolidation et support aux filiales.',
    skills: ['Consolidation', 'IFRS', 'Groupe', 'Coordination', 'Anglais'],
    postedDate: '5 jours'
  },
  {
    id: 17,
    title: 'Responsable Performance Financière',
    company: 'Schneider Electric',
    location: 'Grenoble',
    type: 'CDI',
    salary: '58 000 - 74 000 €',
    description: 'Analyse de la performance, pilotage des KPIs et amélioration continue des processus financiers.',
    skills: ['Performance', 'KPI', 'Lean finance', 'Transformation'],
    postedDate: '7 jours'
  },
  {
    id: 18,
    title: 'Responsable Comptabilité et Paie',
    company: 'Grant Thornton',
    location: 'Nice',
    type: 'CDI',
    salary: '49 000 - 62 000 €',
    description: 'Gestion de la comptabilité et supervision de la paie, conformité sociale et fiscale.',
    skills: ['Comptabilité', 'Paie', 'Social', 'Conformité'],
    postedDate: '9 jours'
  },
  {
    id: 19,
    title: 'Responsable Comptabilité Projets',
    company: 'Thales',
    location: 'Paris',
    type: 'CDI',
    salary: '60 000 - 77 000 €',
    description: 'Suivi comptable et financier des projets, analyse de marge et reconnaissance du revenu.',
    skills: ['Comptabilité projets', 'IFRS 15', 'Marge', 'Industrie'],
    postedDate: '4 jours'
  },
  {
    id: 20,
    title: 'Responsable Normes et Méthodes Comptables',
    company: 'Total Energies',
    location: 'Paris',
    type: 'CDI',
    salary: '66 000 - 84 000 €',
    description: 'Veille normative, rédaction de notes méthodologiques et formation des équipes comptables.',
    skills: ['Normes IFRS', 'US GAAP', 'Veille', 'Formation', 'Anglais'],
    postedDate: '1 semaine'
  }
]

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const [locationFilter, setLocationFilter] = useState('Toutes')
  const [typeFilter, setTypeFilter] = useState('Tous')

  const locations = ['Toutes', 'Paris', 'Lyon', 'Marseille', 'Toulouse', 'Bordeaux', 'Lille', 'Nantes', 'Nice', 'Grenoble']
  const types = ['Tous', 'CDI', 'CDD', 'Freelance']

  const filteredJobs = useMemo(() => {
    return jobsData.filter(job => {
      const matchesSearch = searchTerm === '' ||
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesLocation = locationFilter === 'Toutes' || job.location === locationFilter
      const matchesType = typeFilter === 'Tous' || job.type === typeFilter

      return matchesSearch && matchesLocation && matchesType
    })
  }, [searchTerm, locationFilter, typeFilter])

  const handleApply = (job: Job) => {
    alert(`Candidature pour le poste: ${job.title} chez ${job.company}\n\nCette fonctionnalité serait connectée à un système de candidature réel.`)
  }

  return (
    <div className="container">
      <header>
        <h1>🎯 Recherche d'Emploi</h1>
        <p className="subtitle">Comptabilité & Finance - Postes de Responsable</p>
      </header>

      <div className="stats">
        <div className="stat-card">
          <div className="stat-number">{filteredJobs.length}</div>
          <div className="stat-label">Offres disponibles</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{new Set(jobsData.map(j => j.company)).size}</div>
          <div className="stat-label">Entreprises</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{new Set(jobsData.map(j => j.location)).size}</div>
          <div className="stat-label">Villes</div>
        </div>
      </div>

      <div className="search-section">
        <div className="search-form">
          <input
            type="text"
            className="search-input"
            placeholder="Rechercher par titre, entreprise, compétences..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-btn">🔍 Rechercher</button>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <strong>📍 Localisation:</strong>
        </div>
        <div className="filters">
          {locations.map(loc => (
            <button
              key={loc}
              className={`filter-btn ${locationFilter === loc ? 'active' : ''}`}
              onClick={() => setLocationFilter(loc)}
            >
              {loc}
            </button>
          ))}
        </div>

        <div style={{ marginTop: '20px', marginBottom: '15px' }}>
          <strong>💼 Type de contrat:</strong>
        </div>
        <div className="filters">
          {types.map(type => (
            <button
              key={type}
              className={`filter-btn ${typeFilter === type ? 'active' : ''}`}
              onClick={() => setTypeFilter(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {filteredJobs.length > 0 ? (
        <div className="jobs-grid">
          {filteredJobs.map(job => (
            <div key={job.id} className="job-card">
              <div className="job-header">
                <div>
                  <h2 className="job-title">{job.title}</h2>
                  <div className="company">{job.company}</div>
                </div>
              </div>

              <div className="job-meta">
                <span className="meta-tag">📍 {job.location}</span>
                <span className="meta-tag">📋 {job.type}</span>
                <span className="meta-tag">🕒 {job.postedDate}</span>
              </div>

              <div className="salary">💰 {job.salary}</div>

              <p className="job-description">{job.description}</p>

              <div className="skills">
                {job.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>

              <button className="apply-btn" onClick={() => handleApply(job)}>
                Postuler maintenant
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-results">
          <div className="no-results-icon">🔍</div>
          <p className="no-results-text">Aucune offre trouvée pour votre recherche</p>
        </div>
      )}
    </div>
  )
}
