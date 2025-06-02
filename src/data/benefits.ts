import { Cpu, Users, MessageSquare, Euro, Clock, FileCheck } from 'lucide-react';
import { Benefit } from '../types';

export const benefits: Benefit[] = [
  {
    id: 'ai-powered',
    title: 'Développement IA',
    description: 'Exploitez des outils d\'IA de pointe pour améliorer la qualité du code, automatiser les tests et accélérer les cycles de développement.',
    icon: Cpu
  },
  {
    id: 'agile-teams',
    title: 'Équipes Agiles Offshore',
    description: 'Équipes flexibles de 3 à 8 membres, entièrement intégrées à vos processus et outils agiles.',
    icon: Users
  },
  {
    id: 'french-pm',
    title: 'Gestion Francophone',
    description: 'Communication claire avec des chefs de projet francophones dédiés qui comprennent votre contexte métier.',
    icon: MessageSquare
  },
  {
    id: 'transparent-pricing',
    title: 'Tarif Journalier Transparent',
    description: 'Tarification simple et tout compris, sans coûts cachés. Payez uniquement ce dont vous avez besoin.',
    icon: Euro
  },
  {
    id: 'quick-deployment',
    title: 'Déploiement Rapide',
    description: 'Démarrez votre équipe rapidement avec notre processus d\'intégration optimisé en 5-10 jours.',
    icon: Clock
  },
  {
    id: 'trial-sprint',
    title: 'Sprint d\'Essai',
    description: 'Testez nos capacités avec un sprint d\'essai sans risque avant de vous engager.',
    icon: FileCheck
  }
];