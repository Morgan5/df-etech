import { PricingPackage } from '../types';

export const pricingPackages: PricingPackage[] = [
  {
    id: 'launch',
    name: 'Pack Lancement',
    focus: 'Orienté MVP/POC',
    team: '1 PO + 2 développeurs',
    price: '645€/jour',
    features: [
      'Développement MVP rapide',
      'Daily standups',
      'Qualité du code assistée par IA',
      'Démos hebdomadaires',
      'Accès client direct',
    ]
  },
  {
    id: 'growth',
    name: 'Pack Croissance',
    focus: 'Équipe feature complète',
    team: 'PO + Scrum/Tech + 3-4 développeurs',
    price: '1 075€/jour',
    features: [
      'Implémentation agile complète',
      'Scrum Master dédié',
      'Chaîne d\'outils IA avancée',
      'Direction technique',
      'Intégration CI/CD',
      'Tests de bout en bout',
    ],
    isPopular: true
  },
  {
    id: 'vision',
    name: 'Pack Vision',
    focus: 'Livraison long terme',
    team: 'PO + Scrum + 6-8 profils',
    price: '1 615€/jour',
    features: [
      'Livraison niveau entreprise',
      'Flux de travail multiples',
      'Planification architecture avancée',
      'Automatisation DevOps',
      'Équipe QA dédiée',
      'Recommandations d\'optimisation',
      'Support disponible 24/7',
    ]
  }
];