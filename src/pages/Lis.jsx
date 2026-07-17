import React from 'react';
import { Link } from 'react-router-dom';
import ProductSidebar from '../components/ProductSidebar';

const Lis = () => {
    return (
        <>


    <div className="container-fluid sub-page-heading"> 
        <div className="container">
            <div className="row">

                <div className="col-md-12 col-lg-8">
                    <h4> Lab Information System </h4>
                    <p> <Link to="/"> Home </Link> / Healthcare Solutions / Lab Information System </p>
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

                  <h4 className="mb-15"> Lab Information System </h4>

                  <p> 
                    Laboratory Information System (LIS) allows you to effectively manage the flow of samples and patient data to improve lab efficiency. It improves access to quality diagnostic testing and provides accurate, timely information for patient care. Raster LIS helps in standardising workflows, tests and procedures while providing accurate controls of the process. Laboratory equipment (both unidirectional and bi-directional) may be integrated via Raster IoMT with Raster LIS to automate the collection of test data, ensuring they are properly calibrated. The fully integrated configuration tools help in adapting the software to end-user requirements without compromising on support or future upgrades. A key attribute of Raster LIS is the avoidance of platform dependencies.  <br /><br />
                  </p>

                  <h5> Salient features of Raster LIS </h5>

                  <div className="row">
                      <div className="col-md-12">
                          <ul>
                              <li> Automated laboratory administration </li>
                              <li> Reduced risk of error occurrence </li>
                              <li> Integration of instruments and equipment </li>
                              <li> Regulatory standards compliance </li>  
                              <li> Increase efficiency through better management </li>                     
                          </ul>
                      </div>
                  </div>
                  <img src="img/products/lis/laboratory-information-system.jpg" alt="Lab Information System" className="mb-15" />

                </div>
              </div>
            </div>

        </div>
    </div>

    
        </>
    );
};

export default Lis;
