import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ProductSidebar from '../components/ProductSidebar'
import useDragScroll from '../hooks/useDragScroll'
import { cn } from '@/lib/utils'

const SCREENSHOTS = {
  iphone: {
    label: 'iPhone',
    dir: 'img/products/dicom-camera/screenshot/iphone',
    file: (n) => `${n}.230x0w.webp`,
    images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  ipad: {
    label: 'iPad',
    dir: 'img/products/dicom-camera/screenshot/ipad',
    file: (n) => `${n}.313x0w.webp`,
    images: [1, 2, 3, 4, 5, 6],
  },
  android: {
    label: 'Android',
    dir: 'img/products/dicom-camera/screenshot/android',
    file: (n) => `${n}.webp`,
    images: [1, 2, 3, 4, 5],
  },
}

const KEY_FEATURES = [
  'DICOM-Enabled Imaging: Capture medical images directly in DICOM format, ensuring compatibility with various Picture Archiving and Communication Systems (PACS) used in hospitals and clinics. Capture medical images directly from your iOS device, ensuring they adhere to the DICOM standard.',
  "High-Quality Imaging: Utilise your smartphone's advanced camera capabilities to produce crystal-clear medical images.",
  'Patient Data Integration: Seamlessly link patient information to each captured image, including patient ID, name, date of birth, and other relevant metadata, making it easier to manage and identify images in the medical records.',
  'Annotation and Markup: Annotate images with markers, and text to highlight specific areas of interest or provide additional information for diagnosis and treatment planning.',
  'Offline Mode: Capture DICOM images even in areas with limited internet connectivity. The app will sync and upload the data once the connection is restored.',
  'Customised Workflows: Multiple ways to fit your specific medical workflow. Query patient ID and upload images or capture images and upload against patient ID or upload from photos to patient ID.',
  'Advanced Image Processing: Enhance and optimise the images using built-in image processing tools, allowing you to adjust brightness, contrast, and other parameters for better visualisation.',
  'Multi-Platform Compatibility: DICOM Camera seamlessly integrates with existing medical systems, including Electronic Health Record (EHR) systems and radiology information systems (RIS), ensuring a smooth transition and enhanced productivity.',
]

const DicomCamera = () => {
  const [activeTab, setActiveTab] = useState('iphone')
  const tab = SCREENSHOTS[activeTab]
  const railRef = useDragScroll()

  return (
    <>
      <div className="container-fluid sub-page-heading">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <h4> DICOM Camera </h4>
              <p> <Link to="/"> Home </Link> / Healthcare Solutions / Radiology / DICOM Camera </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid xl:px-6">
        <div className="flex flex-col xl:flex-row xl:gap-6">
          <ProductSidebar colClassName="w-full max-w-[17rem] xl:w-auto xl:max-w-none xl:shrink-0" />

          <div className="min-w-0 flex-1">
            <div className="row product-desc">
              <div className="col-md-12 mb-20">
                <h4 className="mb-15"> DICOM Camera </h4>

                <div className="flex flex-col gap-6 md:flex-row md:items-center">
                  <p className="md:w-2/3">
                    Introducing DICOM Camera — your advanced medical imaging solution right in your pocket. This
                    innovative app seamlessly integrates with medical imaging systems, allowing healthcare
                    professionals to capture, store, and share high-quality DICOM-compliant images using their iOS
                    devices. DICOM Camera transforms your smartphone into a powerful DICOM-compatible camera,
                    bringing convenience and efficiency to healthcare professionals and patients alike.
                  </p>
                  <div className="flex flex-col items-center gap-3 md:w-1/3">
                    <a href="https://apps.apple.com/in/app/dicom-camera/id6459410698" target="_blank" rel="noreferrer" className="transition-transform hover:-translate-y-0.5">
                      <img src="/img/Download_on_the_App_Store_Badge.svg" alt="Download on the App Store" className="h-12 w-auto" />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.raster.dicomcamera" target="_blank" rel="noreferrer" className="transition-transform hover:-translate-y-0.5">
                      <img src="/img/Google-Play.svg" alt="Get it on Google Play" className="h-12 w-auto" />
                    </a>
                  </div>
                </div>

                <h6 className="mb-3 mt-8 text-base font-bold text-foreground"> Screenshots </h6>

                {/* tabs */}
                <div className="mb-5 inline-flex rounded-full bg-white/[0.05] p-1">
                  {Object.entries(SCREENSHOTS).map(([key, { label }]) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setActiveTab(key)}
                      className={cn(
                        'rounded-full px-5 py-2 text-sm font-semibold transition-all',
                        activeTab === key
                          ? 'bg-accent-grad text-primary-foreground shadow-glow'
                          : 'text-muted-foreground hover:text-foreground'
                      )}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                {/* screenshot rail — drag to scroll (see useDragScroll) */}
                <div
                  ref={railRef}
                  className="drag-surface drag-rail -mx-1 flex cursor-grab gap-3 overflow-x-auto pb-3"
                >
                  {tab.images.map((n) => (
                    <a
                      key={n}
                      href={`/${tab.dir}/large/${tab.file(n)}`}
                      target="_blank"
                      rel="noreferrer"
                      draggable={false}
                      className="group shrink-0 overflow-hidden rounded-xl bg-white/[0.04] shadow-[0_18px_50px_-26px_rgba(0,0,0,0.8)] transition-all hover:-translate-y-1 hover:shadow-glow"
                    >
                      <img
                        src={`/${tab.dir}/${tab.file(n)}`}
                        alt={`${tab.label} screenshot ${n}`}
                        loading="lazy"
                        draggable={false}
                        className="h-56 w-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </a>
                  ))}
                </div>

                <img src="/img/products/dicom-camera/DICOM-Camera-worklist.jpg" className="mb-15 mt-6" alt="DICOM Camera worklist" />

                <h5> Key Features </h5>
                <ul>
                  {KEY_FEATURES.map((f, i) => <li key={i}>{f}</li>)}
                </ul>

                <p className="mt-4">
                  With DICOM Camera, medical professionals can rely on a versatile and user-friendly solution to
                  capture and manage medical images efficiently, improving patient care and enhancing the overall
                  healthcare experience. Empower healthcare providers with a portable, efficient, and secure
                  solution for capturing and managing medical images, fostering collaboration, and improving
                  patient care.
                </p>

                <div className="mt-8 text-center">
                  <a href="https://apps.apple.com/in/app/dicom-camera/id6459410698" target="_blank" rel="noreferrer" className="inline-block transition-transform hover:-translate-y-0.5">
                    <img src="/img/Download_on_the_App_Store_Badge.svg" alt="Download on the App Store" className="mx-auto h-12 w-auto" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DicomCamera
