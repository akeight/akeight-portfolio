import type { ComponentType } from 'react';
import { useParams } from 'react-router-dom';
import NotFound from './NotFound';
import ScoutSociety from '../case-studies/scout-society';
import CareerCatalyst from '../case-studies/careercatalyst';
import MovaGraph from '../case-studies/mova-graph';
import HackHQ from '../case-studies/hackhq';

/** Tier 1 and Tier 2 case studies — everything else links out from the mosaic. */
const caseStudies: Record<string, ComponentType> = {
  'scout-society': ScoutSociety,
  careercatalyst: CareerCatalyst,
  'mova-graph': MovaGraph,
  hackhq: HackHQ,
};

const CaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const Study = slug ? caseStudies[slug] : undefined;
  if (!Study) return <NotFound />;
  return <Study />;
};

export default CaseStudy;
