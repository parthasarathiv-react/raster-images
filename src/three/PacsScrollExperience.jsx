import React from 'react';
import ProductScrollExperience from './ProductScrollExperience';
import { STACKS } from './scrollStacks';

/*
 * PacsScrollExperience
 * Thin wrapper around the generic ProductScrollExperience engine, configured
 * with the PACS stack (see scrollStacks.js). See ProductScrollExperience.jsx
 * for the full scroll-driven R3F hub-and-spoke implementation.
 */
const PacsScrollExperience = () => <ProductScrollExperience stack={STACKS.pacs} />;

export default PacsScrollExperience;
