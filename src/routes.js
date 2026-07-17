/*
 * Route → dynamic-import map.
 *
 * Single source of truth for both the router (App.jsx builds a lazy <Route> per
 * entry) and the hover-prefetcher (Layout.jsx warms a chunk the moment you hover
 * a link to it). Keeping them on one map is what makes code-splitting invisible:
 * by the time a click lands, the chunk is already in memory, so no loading state
 * appears. Keys are pathnames without the leading slash; '' is the index route.
 */
export const pageLoaders = {
  '': () => import('./pages/Home'),
  'about': () => import('./pages/About'),
  'pacs': () => import('./pages/Pacs'),
  'asset-management': () => import('./pages/AssetManagement'),
  'blood-bank-management': () => import('./pages/BloodBankManagement'),
  'cancellation-and-refund-policy': () => import('./pages/CancellationAndRefundPolicy'),
  'careers': () => import('./pages/Careers'),
  'careers_bkup_27_12_2023': () => import('./pages/Careers_bkup_27_12_2023'),
  'clients': () => import('./pages/Clients'),
  'contact-us': () => import('./pages/ContactUs'),
  'dc-privacy-policy': () => import('./pages/DcPrivacyPolicy'),
  'dc-terms-and-conditions': () => import('./pages/DcTermsAndConditions'),
  'dicom-burner': () => import('./pages/DicomBurner'),
  'dicom-camera': () => import('./pages/DicomCamera'),
  'downloads': () => import('./pages/Downloads'),
  'electronic-charting': () => import('./pages/ElectronicCharting'),
  'emr': () => import('./pages/Emr'),
  'hardware-products': () => import('./pages/HardwareProducts'),
  'ihms': () => import('./pages/Ihms'),
  'iomt-interfacing': () => import('./pages/IomtInterfacing'),
  'kiosk-privacy-policy': () => import('./pages/KioskPrivacyPolicy'),
  'lab-equipment-interfacing': () => import('./pages/LabEquipmentInterfacing'),
  'lis': () => import('./pages/Lis'),
  'neopead-emr': () => import('./pages/NeopeadEmr'),
  'news-and-events': () => import('./pages/NewsAndEvents'),
  'ot-video-broadcasting': () => import('./pages/OtVideoBroadcasting'),
  'our-team': () => import('./pages/OurTeam'),
  'partners': () => import('./pages/Partners'),
  'patient-id-wristbands': () => import('./pages/PatientIdWristbands'),
  'pharmacy-management': () => import('./pages/PharmacyManagement'),
  'privacy-policy': () => import('./pages/PrivacyPolicy'),
  'ris': () => import('./pages/Ris'),
  'shipping-and-delivery-policy': () => import('./pages/ShippingAndDeliveryPolicy'),
  'telemedicine': () => import('./pages/Telemedicine'),
  'teleradiology': () => import('./pages/Teleradiology'),
  'terms-and-conditions': () => import('./pages/TermsAndConditions'),
};

// Warm a route's chunk ahead of the click. Dynamic imports are cached by the
// runtime, so calling this repeatedly (e.g. on every pointerover) is free.
export const prefetchRoute = (path) => {
  const load = pageLoaders[String(path).replace(/^\/+|\/+$/g, '')];
  if (load) load().catch(() => {});   // a failed prefetch must never surface
};
