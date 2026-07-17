import React from 'react';
import { Link } from 'react-router-dom';
import ProductSidebar from '../components/ProductSidebar';

const AssetManagement = () => {
    return (
        <>
            <style>{`.pl-asset-management { background-color: #00A87B !important; color: #ffffff !important; }`}</style>
            
            <div className="container-fluid sub-page-heading"> 
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-8">
                            <h4> Asset Management </h4>
                            <p> <Link to="/"> Home </Link> / Healthcare Solutions / Asset Management </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid xl:px-6">
                <div className="flex flex-col xl:flex-row xl:gap-6">
                    <ProductSidebar colClassName="w-full max-w-[17rem] xl:w-auto xl:max-w-none xl:shrink-0" />

                    <div className="min-w-0 flex-1 under-maintenance">
                        {/* Placeholder for actual content */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AssetManagement;
