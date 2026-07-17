import React from 'react';
import ProductScrollExperience from './ProductScrollExperience';
import { STACKS } from './scrollStacks';

/*
 * TeleradiologyScrollExperience
 * Thin wrapper around the generic ProductScrollExperience engine, configured
 * with the Teleradiology stack (see scrollStacks.js): hospitals -> DICOM
 * routers -> internet -> central PACS/RIS server -> firewalled reporting
 * loop -> VNA archive.
 */
const TeleradiologyScrollExperience = () => <ProductScrollExperience stack={STACKS.teleradiology} />;

export default TeleradiologyScrollExperience;
