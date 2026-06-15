import {
  Sparkles,
  Zap,
  Shield,
  Heart,
  Clock,
  Star,
  Check,
  ArrowRight,
  Menu,
  Info,
  Droplets,
  Building2,
  Building,
  Play,
  ChevronLeft,
  ChevronRight,
  Magnet,
  FlaskConical,
  ShieldCheck,
  Waves,
  HeartPulse,
  Wrench,
  Wallet,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  type LucideIcon,
} from 'lucide-react';

/* Registro central de íconos. Para usar uno nuevo: importalo arriba y sumalo al mapa. */
const registry = {
  sparkles: Sparkles,
  zap: Zap,
  shield: Shield,
  heart: Heart,
  clock: Clock,
  star: Star,
  check: Check,
  'arrow-right': ArrowRight,
  menu: Menu,
  info: Info,
  droplets: Droplets,
  building: Building2,
  'building-office': Building,
  play: Play,
  'chevron-left': ChevronLeft,
  'chevron-right': ChevronRight,
  magnet: Magnet,
  flask: FlaskConical,
  'shield-check': ShieldCheck,
  waves: Waves,
  'heart-pulse': HeartPulse,
  wrench: Wrench,
  wallet: Wallet,
  phone: Phone,
  mail: Mail,
  'map-pin': MapPin,
  instagram: Instagram,
  facebook: Facebook,
  twitter: Twitter,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof registry;

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
  strokeWidth?: number;
}

export function Icon({ name, size = 22, className, strokeWidth = 2 }: IconProps) {
  const Cmp = registry[name];
  return <Cmp size={size} className={className} strokeWidth={strokeWidth} />;
}
