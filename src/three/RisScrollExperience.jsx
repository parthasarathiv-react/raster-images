import React from 'react';
import ProductScrollExperience from './ProductScrollExperience';
import { STACKS } from './scrollStacks';

/*
 * RisScrollExperience
 * Thin wrapper around the generic ProductScrollExperience engine, configured
 * with the RIS stack (see scrollStacks.js): HIS order -> RIS server ->
 * DICOM modalities -> reporting workstation & PACS archive.
 */
const RisScrollExperience = () => <ProductScrollExperience stack={STACKS.ris} />;

export default RisScrollExperience;
