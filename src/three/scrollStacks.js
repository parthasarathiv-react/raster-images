/*
 * scrollStacks
 * Data-only config for every ProductScrollExperience "schematic build"
 * diagram. Each stack describes: eyebrow copy, the centre-hub label, the
 * scroll STAGES (tag/title/desc panel copy), the NODES (key, label, stage,
 * world position, which icon to use, optional texture), the EDGES between
 * them ('center' is always the hub at [0,0,0]), an optional texture map,
 * and a `camera` framing block so the diagram fits its canvas without any
 * node sitting under the bottom-left content panel.
 *
 * Node/edge shape:
 *   node: { key, label, stage, pos: [x,y,z], icon: <ICONS key>, tex?: <textures key> }
 *   edge: [fromKey, toKey]  // fromKey/toKey may be 'center'
 *
 * camera shape:
 *   {
 *     initialPosition: [x,y,z], fov,
 *     xOffset,                     // added to the orbiting x term
 *     zoomRange: [start, end],     // orbit radius, lerped by scroll progress
 *     azimuth: { base, swing },    // az = base + sin(p*PI) * swing
 *     elevationRange: [start, end],
 *     lookAt: [x,y,z],
 *   }
 */

const PACS_SCANS = {
    ct: '/img/products/pacs/scans/ct-brain.jpg',
    mri: '/img/products/pacs/scans/mri-head.jpg',
    xray: '/img/products/pacs/scans/chest-xray.jpg',
};

/* ---------------------------------------------------------------------- */
/* PACS — moved verbatim from the original PacsScrollExperience           */
/* ---------------------------------------------------------------------- */
const pacs = {
    eyebrow: 'Schematic Diagram · scroll to build the PACS network',
    centerLabel: 'PACS / RIS Server',
    textures: PACS_SCANS,
    stages: [
        {
            key: 'acquire',
            tag: '01 — Acquisition',
            title: 'Modalities feed the PACS/RIS server',
            desc: 'CT, MRI, ultrasound and other DICOM modalities push studies straight into the central PACS / RIS server — vendor-agnostic and standards-first.',
        },
        {
            key: 'archive',
            tag: '02 — Vendor Neutral Archive',
            title: 'Stored once, copied off-site',
            desc: 'Every study lands in a scalable Vendor Neutral Archive on Linux, with off-site archive copies for disaster recovery and long-term retention.',
        },
        {
            key: 'consume',
            tag: '03 — Reading & Output',
            title: 'Read, burn and print',
            desc: 'Radiologists read on zero-footprint workstations, while the server drives CD/DVD burning and DICOM film printing for local delivery.',
        },
        {
            key: 'distribute',
            tag: '04 — Distribution',
            title: 'Firewall, internet & remote sites',
            desc: 'Through a firewall and the internet, studies reach offsite archives, remote workstations and routed hospital sites — full teleradiology reach.',
        },
    ],
    nodes: [
        { key: 'modalities', label: 'DICOM Modalities', stage: 0, pos: [-2.9, 2.6, 0.4], icon: 'modalities' },
        { key: 'workstation', label: 'DICOM Workstation', stage: 2, pos: [-3.2, 0.4, 0], icon: 'workstation', tex: 'ct' },
        { key: 'cddvd', label: 'CD / DVD Burner', stage: 2, pos: [-1.1, 3.6, -0.2], icon: 'disc' },
        { key: 'printer', label: 'DICOM Printer', stage: 2, pos: [1.5, 3.5, -0.2], icon: 'printer' },
        { key: 'vna', label: 'Vendor Neutral Archive', stage: 1, pos: [3.4, -1.3, 0], icon: 'diskStack' },
        { key: 'firewall', label: 'Firewall', stage: 3, pos: [3.3, 1.1, 0.2], icon: 'firewall' },
        { key: 'internet', label: 'Internet', stage: 3, pos: [5.3, 1.5, 0], icon: 'cloud' },
        { key: 'offsite', label: 'Offsite Archive', stage: 3, pos: [6.3, 3.3, -0.2], icon: 'diskStack' },
        { key: 'remotews', label: 'Remote Workstation', stage: 3, pos: [6.4, -0.6, -0.2], icon: 'workstation', tex: 'mri' },
        { key: 'router', label: 'DICOM Router', stage: 3, pos: [4.1, -1.8, 0.2], icon: 'router' },
        { key: 'hospital', label: 'Remote Hospital', stage: 3, pos: [5.4, -2.9, -0.2], icon: 'house' },
    ],
    edges: [
        ['center', 'modalities'],
        ['center', 'vna'],
        ['center', 'workstation'],
        ['center', 'cddvd'],
        ['center', 'printer'],
        ['center', 'firewall'],
        ['firewall', 'internet'],
        ['internet', 'offsite'],
        ['internet', 'remotews'],
        ['center', 'router'],
        ['router', 'hospital'],
    ],
    camera: {
        initialPosition: [-4.5, 1.6, 15],
        fov: 40,
        xOffset: 1.3,
        zoomRange: [16.5, 14.8],
        azimuth: { base: -0.26, swing: 0.24 },
        elevationRange: [2.4, 3.4],
        lookAt: [1.7, 1.15, 0],
    },
};

/* ---------------------------------------------------------------------- */
/* RIS — Hospital Information System -> RIS server -> modalities -> report */
/* ---------------------------------------------------------------------- */
const ris = {
    eyebrow: 'Schematic Diagram · scroll to build the RIS workflow',
    centerLabel: 'Radiology Information System',
    stages: [
        {
            key: 'order',
            tag: '01 — Order',
            title: 'HIS places the order',
            desc: 'The Hospital Information System sends the order — the "HIS order" — straight into the RIS, so scheduling starts the moment a study is requested.',
        },
        {
            key: 'hub',
            tag: '02 — Radiology Information System',
            title: 'One server schedules and tracks every study',
            desc: 'The RIS server sits at the centre of the department, scheduling, tracking and billing every study from order to report.',
        },
        {
            key: 'acquire',
            tag: '03 — Acquisition',
            title: 'DICOM modalities acquire and push',
            desc: 'CT, MRI, ultrasound and other DICOM modalities acquire the study and push it straight back to the RIS.',
        },
        {
            key: 'report',
            tag: '04 — Reporting & Archive',
            title: 'Reported, then archived to PACS',
            desc: 'The radiologist reads and reports on the reporting workstation, with the finished report and images archived to PACS.',
        },
    ],
    nodes: [
        { key: 'his', label: 'Hospital Information System', stage: 0, pos: [-3.0, 2.6, 0.3], icon: 'workstation' },
        { key: 'modalities', label: 'DICOM Modalities', stage: 2, pos: [-3.6, 0.4, -0.3], icon: 'modalities' },
        { key: 'reporting', label: 'Reporting Workstation', stage: 3, pos: [3.8, 1.3, -0.2], icon: 'workstation' },
        { key: 'pacs', label: 'PACS', stage: 3, pos: [1.6, -2.2, 0.2], icon: 'diskStack' },
    ],
    edges: [
        ['center', 'his'],
        ['center', 'modalities'],
        ['center', 'reporting'],
        ['center', 'pacs'],
    ],
    camera: {
        initialPosition: [-4, 1.4, 12],
        fov: 40,
        xOffset: 1.0,
        zoomRange: [13, 11.5],
        azimuth: { base: -0.24, swing: 0.22 },
        elevationRange: [2.0, 2.8],
        lookAt: [1.0, 0.7, 0],
    },
};

/* ---------------------------------------------------------------------- */
/* Teleradiology — 3 hospitals -> routers -> internet -> central server,   */
/* firewalled reporting loop out to a DICOM workstation, VNA archive       */
/* ---------------------------------------------------------------------- */
const teleradiology = {
    eyebrow: 'Schematic Diagram · scroll to build the teleradiology network',
    centerLabel: 'PACS / RIS Server',
    stages: [
        {
            key: 'acquire',
            tag: '01 — Acquisition',
            title: 'Image acquisition at each centre',
            desc: 'Each hospital acquires studies locally and pushes them out through a DICOM router onto the internet.',
        },
        {
            key: 'upload',
            tag: '02 — Central Upload',
            title: 'Uploaded to the central PACS / RIS server',
            desc: 'Studies travel over the internet and land on the central PACS / RIS server, ready for reporting.',
        },
        {
            key: 'report',
            tag: '03 — Reporting',
            title: 'Read over the internet, behind a firewall',
            desc: 'Through a firewall and back out over the internet, the radiologist reads and reports on a DICOM workstation from anywhere.',
        },
        {
            key: 'archive',
            tag: '04 — Archive',
            title: 'Reports & images written to the VNA',
            desc: 'Completed reports and images are written to the Vendor Neutral Archive for long-term, vendor-agnostic storage.',
        },
        {
            key: 'distribute',
            tag: '05 — Distribution',
            title: 'Referring doctors view results at each hospital',
            desc: 'Referring doctors back at Hospital A, B and C securely view the images and the finished report.',
        },
    ],
    nodes: [
        { key: 'hospitalA', label: 'Hospital A', stage: 0, pos: [-7.2, 4.4, 0.3], icon: 'house' },
        { key: 'routerA', label: 'DICOM Router', stage: 0, pos: [-5.3, 4.0, 0.1], icon: 'router' },
        { key: 'hospitalB', label: 'Hospital B', stage: 0, pos: [-7.2, 2.7, 0], icon: 'house' },
        { key: 'routerB', label: 'DICOM Router', stage: 0, pos: [-5.3, 2.4, -0.1], icon: 'router' },
        { key: 'hospitalC', label: 'Hospital C', stage: 0, pos: [-7.2, 1.1, 0.2], icon: 'house' },
        { key: 'routerC', label: 'DICOM Router', stage: 0, pos: [-5.3, 0.8, -0.2], icon: 'router' },
        { key: 'internetL', label: 'Internet', stage: 1, pos: [-3.0, 2.4, 0], icon: 'cloud' },
        { key: 'firewall', label: 'Firewall', stage: 2, pos: [2.6, 1.3, 0.2], icon: 'firewall' },
        { key: 'internetR', label: 'Internet', stage: 2, pos: [4.6, 1.7, 0], icon: 'cloud' },
        { key: 'workstation', label: 'DICOM Workstation', stage: 2, pos: [6.6, -0.5, -0.2], icon: 'workstation' },
        { key: 'vna', label: 'Vendor Neutral Archive', stage: 3, pos: [1.4, -2.7, 0], icon: 'diskStack' },
    ],
    edges: [
        ['hospitalA', 'routerA'],
        ['routerA', 'internetL'],
        ['hospitalB', 'routerB'],
        ['routerB', 'internetL'],
        ['hospitalC', 'routerC'],
        ['routerC', 'internetL'],
        ['internetL', 'center'],
        ['center', 'firewall'],
        ['firewall', 'internetR'],
        ['internetR', 'workstation'],
        ['center', 'vna'],
    ],
    camera: {
        initialPosition: [-7, 2.2, 24],
        fov: 38,
        xOffset: 0.3,
        zoomRange: [24, 21],
        azimuth: { base: -0.2, swing: 0.22 },
        elevationRange: [3.4, 4.4],
        lookAt: [0.3, 1.1, 0],
    },
};

export const STACKS = { pacs, ris, teleradiology };

export default STACKS;
