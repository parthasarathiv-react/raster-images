import React from 'react';
import { Link } from 'react-router-dom';
import ProductSidebar from '../components/ProductSidebar';
import RisScrollExperience from '../three/RisScrollExperience';

const Ris = () => {
    return (
        <>


    <div className="container-fluid sub-page-heading"> 
        <div className="container">
            <div className="row">

                <div className="col-md-12 col-lg-8">
                    <h4> RIS </h4>
                    <p> <Link to="/"> Home </Link> / Healthcare Solutions / Radiology / RIS </p>
                </div>

            </div>
        </div>
    </div>

    <div className="container-fluid xl:px-6">
        <div className="flex flex-col xl:flex-row xl:gap-6">

            <ProductSidebar colClassName="w-full max-w-[17rem] xl:w-auto xl:max-w-none xl:shrink-0" />

            <div className="min-w-0 flex-1">

                <RisScrollExperience />

                <div className="row product-desc">
                    <div className="col-md-12">

                        <h4 className="mb-15"> Radiology Information System </h4>

                        <p>
                            RIS has always been crucial to managing critical imaging business functions such as order entry; patient scheduling, tracking and billing; and inventory control. But an integrated RIS/PACS gives IT managers access to more complex data that can be used for advanced business planning, such as which modalities are most profitable, which referring physicians are most active, employee productivity levels, which periods are the busiest, and patient throughput rates. <br /><br />

                            Raster’s Radiological Information System (RIS) provides complete computerisation and modernisation of the work of the radiology department. RIS optimises the imaging process by integrating the various functions involved in managing patient information into one comprehensive system. Raster’s RIS facilitates patient management such as patient registration and scheduling. The time needed for patient registration and organising schedules is greatly reduced by eliminating the need for paper-based documentation. Booking appointments is made much simpler and much less time-consuming. <br /><br />

                            Another benefit that a system like Raster RIS provides is that it enables practices to focus more of their efforts around patient care. The time saved with reduced paperwork and the streamlining of several tasks can be devoted to offering a more comprehensive system of services for patients. <br /><br />
 
                        </p>

                    </div>
                </div>
            </div>

        </div>
    </div>

    
        </>
    );
};

export default Ris;
