import React from 'react';
import { Link } from 'react-router-dom';
import ProductSidebar from '../components/ProductSidebar';

const LabEquipmentInterfacing = () => {
    return (
        <>


    <div className="container-fluid sub-page-heading"> 
        <div className="container">
            <div className="row">

                <div className="col-md-12 col-lg-8">
                    <h4> Lab Equipment Interfacing </h4>
                    <p> <Link to="/"> Home </Link> / Healthcare Solutions / Lab Equipment Interfacing </p>
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

                  <h4 className="mb-15"> Lab Equipment Interfacing <a href="#labEquipments" className="smooth float-right" > List of Lab Equipments </a> </h4>

                  <p> 
                    Effective integration of laboratory equipment is crucial to improving the productivity and efficiency in a hospital's laboratory environment. Integration of laboratory equipment with LIS was once a daunting task, until recent years with the development of laboratory equipment. With Raster’s advanced Lab Link application, equipment integration is very reasonable and doable undertaking. The bottom line is that the LIS implementation project should include a prioritised plan to integrate as many laboratory equipments with the system. <br /><br />
                  </p>

                  <h5 className="mb-15"> Uni-Directional Equipment </h5>

                  <img src="img/products/lei/uni-directional-equipment-interface.jpg" alt="Uni-Directional Equipment Interface" className="mb-15" />

                  <p> 
                    These equipment are able to output a data report and results file but do not have a facility to import information. Interfacing these equipment is done by the Lab Interface software picking up the data and updating the information/results into the LIS. <br /><br />
                  </p>

                  <h5 className="mb-15"> Bi-Directional Equipment </h5>

                  <img src="img/products/lei/bi-directional-equipment-interface.jpg" alt="Bi-Directional Equipment Interface" className="mb-15" />

                  <p> 
                  These equipment are able to both output data reports and results files. They can import data, information, worklists, commands/function calls, etc by reading the information on the barcode. The results are updated in the LIS without any human intervention. <br /><br />
                  </p>


                  <h5 className="mb-15"> Reasons To Interface Your Equipment To LIS </h5>

                  <div className="row">
                      <div className="col-md-12">
                          <ul>
                              <li id="labEquipments">
                                <strong> Increase Productivity &amp; Effectiveness: </strong> One of the best reasons to interface your instruments to your LIS is the increase in lab productivity and effectiveness it yields. Removing the manual entering of data, from the instrument to the LIS, saves a ton of time and effort. With bi-directional equipment, users will also eliminate the time required to enter the test information (Worklist), parameters, etc. into the equipment. Thus increasing productivity and sample throughput which play a key role in all quality controls and testing labs.
                              </li>
                              <li>
                                <strong> Better Data Quality &amp; Integrity: </strong> Another key reason to interface your instruments to your LIS is the increase in data quality and integrity that it yields. By removing the “human element” from the data transfer and entry equation, a huge source of error is removed. This removes transcription errors and will significantly increase the quality of your data. <br /><br />
                              </li>
                          </ul>



                          <h4 className="mb-15" > Portfolio of intefaced Lab Equipments </h4>
                          <p> This is a non-exhaustive list and we are constantly adding new equipment. Talk to us if you cannot find your make and model bellow. </p>

                            <table className="table table-bordered mt-15">
                              <thead>
                                <tr>
                                  <th> # </th>
                                  <th scope="col">Make / Manufacturer / Supplier</th>
                                  <th scope="col">Analysers</th>
                                  <th scope="col">Department</th>
                                </tr>
                              </thead>
                              <tbody>

                                <tr>
                                  <th> 1 </th>
                                  <td> 77 ELEKTRONIKA </td>
                                  <td> Doc U Reader 2 </td>
                                  <td> Urine Analyser </td>
                                </tr>

                                <tr>
                                  <th> 2 </th>
                                  <td> 77 ELEKTRONIKA </td>
                                  <td> Doc U Reader 2 Pro </td>
                                  <td> Urine Analyser </td>
                                </tr>

                                <tr>
                                  <th> 3 </th>
                                  <td> 77 ELEKTRONIKA </td>
                                  <td> Lab U Reader Plus 2 </td>
                                  <td> Urine Analyser </td>
                                </tr>

                                <tr>
                                  <th> 4 </th>
                                  <td> 77 ELEKTRONIKA </td>
                                  <td> Urised mini </td>
                                  <td> Urine Analyser </td>
                                </tr>

                                <tr>
                                  <th> 5 </th>
                                  <td> Abbott </td>
                                  <td> Abbott i1000 </td>
                                  <td> Biochemistry </td>
                                </tr>

                                <tr>
                                  <th> 6 </th>
                                  <td> Abbott </td>
                                  <td> Abbott i2000 </td>
                                  <td> Biochemistry </td>
                                </tr>

                                <tr>
                                  <th> 7 </th>
                                  <td> Abbott </td>
                                  <td> Abbott i4000 </td>
                                  <td> Biochemistry </td>
                                </tr>

                                <tr>
                                  <th> 8 </th>
                                  <td> Abbott </td>
                                  <td> Abbott Ci 8200 </td>
                                  <td> Biochemistry </td>
                                </tr>

                                <tr>
                                  <th> 9 </th>
                                  <td> Abbott </td>
                                  <td> Abott iSTAT </td>
                                  <td> Biochemistry </td>
                                </tr>

                                <tr>
                                  <th> 10 </th>
                                  <td> Abbott </td>
                                  <td> Cell Dyn Ruby </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 11 </th>
                                  <td> Accurex Biomedical </td>
                                  <td> AccuLab Enlite </td>
                                  <td> Electrolyte Analyzer </td>
                                </tr>

                                <tr>
                                  <th> 12 </th>
                                  <td> Adaltis </td>
                                  <td> Personal Lab  </td>
                                  <td> Micro Biology </td>
                                </tr>

                                <tr>
                                  <th> 13 </th>
                                  <td> Agappe </td>
                                  <td> BioLIS 30i </td>
                                  <td> Biochemistry </td>
                                </tr>

                                <tr>
                                  <th> 14 </th>
                                  <td> Agappe </td>
                                  <td> BioLIS 50i </td>
                                  <td> Biochemistry </td>
                                </tr>

                                <tr>
                                  <th> 15 </th>
                                  <td> Agappe </td>
                                  <td> Mispa Nano </td>
                                  <td> Biochemistry </td>
                                </tr>

                                <tr>
                                  <th> 16 </th>
                                  <td> Agappe </td>
                                  <td> Mispa Nano Plus </td>
                                  <td> Biochemistry </td>
                                </tr>

                                <tr>
                                  <th> 17 </th>
                                  <td> Agappe </td>
                                  <td> Mispa i2 </td>
                                  <td> Protein Analyzers </td>
                                </tr>
                                
                                <tr>
                                  <th> 18 </th>
                                  <td> Agappe </td>
                                  <td> Mispa i3 </td>
                                  <td> Protein Analyzers </td>
                                </tr>

                                <tr>
                                  <th> 19 </th>
                                  <td> AliFax </td>
                                  <td> Rolle Test 1 </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 20 </th>
                                  <td> AliFax </td>
                                  <td> Roller 20 </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 21 </th>
                                  <td> AliFax </td>
                                  <td> Roller 20 LC </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 22 </th>
                                  <td> AliFax </td>
                                  <td> Roller 20 MC </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 23 </th>
                                  <td> ARK Diagnostics </td>
                                  <td> Ckk24 </td>
                                  <td> Biochemistry </td>
                                </tr>

                                <tr>
                                  <th> 24 </th>
                                  <td> Arkray </td>
                                  <td> Arkray HA-8180V </td>
                                  <td> Glycohemoglobin </td>
                                </tr>

                                <tr>
                                  <th> 25 </th>
                                  <td> Assel s.r.l </td>
                                  <td> Assel AS830 </td>
                                  <td> Biochemistry </td>
                                </tr>

                                <tr>
                                  <th> 26 </th>
                                  <td> Avantor </td>
                                  <td> BeneSphera H-31 </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 27 </th>
                                  <td> Beckman Coulter </td>
                                  <td> Beckman Coulter Access2 </td>
                                  <td> Biochemistry </td>
                                </tr>

                                <tr>
                                  <th> 28 </th>
                                  <td> Beckman Coulter </td>
                                  <td> Beckman Coulter AU480 </td>
                                  <td> Biochemistry </td>
                                </tr>

                                <tr>
                                  <th> 29 </th>
                                  <td> Beckman Coulter </td>
                                  <td> Beckman Coulter AU5800 </td>
                                  <td> Biochemistry </td>
                                </tr>

                                <tr>
                                  <th> 30 </th>
                                  <td> Beckman Coulter </td>
                                  <td> Beckman Coulter AU680 </td>
                                  <td> Biochemistry </td>
                                </tr>

                                <tr>
                                  <th> 31 </th>
                                  <td> Beckman Coulter </td>
                                  <td> Beckman Coulter DxC 800 </td>
                                  <td> Biochemistry </td>
                                </tr>

                                <tr>
                                  <th> 32 </th>
                                  <td> Beckman Coulter </td>
                                  <td> Beckman Coulter Olympus AU 400 </td>
                                  <td> Biochemistry </td>
                                </tr>

                                <tr>
                                  <th> 33 </th>
                                  <td> Beckman Coulter </td>
                                  <td> Beckman Coulter DxC 700 AU </td>
                                  <td> Clinical Chemistry </td>
                                </tr>

                                <tr>
                                  <th> 34 </th>
                                  <td> Beckman Coulter </td>
                                  <td> Ac.t 5Diff CP(Cap Pierce) </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 35 </th>
                                  <td> Beckman Coulter </td>
                                  <td> Beckman Coulter AcT3 </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 36 </th>
                                  <td> Beckman Coulter </td>
                                  <td> Beckman Coulter AcT5 </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 37 </th>
                                  <td> Beckman Coulter </td>
                                  <td> Beckman Coulter DxH 560 </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 38 </th>
                                  <td> Beckman Coulter </td>
                                  <td> Beckman Coulter LH 750 </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 39 </th>
                                  <td> Beckman Coulter </td>
                                  <td> Beckmen Coulter DxH 500 </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 40 </th>
                                  <td> Beckman Coulter </td>
                                  <td> Beckmen Coulter DxH 800 </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 41 </th>
                                  <td> Beckmen Coulter </td>
                                  <td> Beckmen Coulter iChemVELOCITY </td>
                                  <td> Urine Analyser </td>
                                </tr>

                                <tr>
                                  <th> 42 </th>
                                  <td> Beckman Coulter </td>
                                  <td> Beckman Coulter Unicel DxI 600 </td>
                                  <td> Immunoassay </td>
                                </tr>

                                <tr>
                                  <th> 43 </th>
                                  <td> Bio-Rad </td>
                                  <td> Saxo ID-Reader </td>
                                  <td> Blood Bank Analyser </td>
                                </tr>

                                <tr>
                                  <th> 44 </th>
                                  <td> Biomerieux </td>
                                  <td> Vidas </td>
                                  <td> Immunoassay </td>
                                </tr>

                                <tr>
                                  <th> 45 </th>
                                  <td> Biomerieux </td>
                                  <td> Vidas KUBE </td>
                                  <td> Immunoassay </td>
                                </tr>

                                <tr>
                                  <th> 46 </th>
                                  <td> Biomerieux </td>
                                  <td> BacT Alert 3D </td>
                                  <td> Micro Biology </td>
                                </tr>

                                <tr>
                                  <th> 47 </th>
                                  <td> Biomerieux </td>
                                  <td> Mini Vidas </td>
                                  <td> Micro Biology </td>
                                </tr>

                                <tr>
                                  <th> 48 </th>
                                  <td> Biomerieux </td>
                                  <td> Vitek 2 </td>
                                  <td> Micro Biology </td>
                                </tr>

                                <tr>
                                  <th> 49 </th>
                                  <td> BioRad </td>
                                  <td> BioRad D10 </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 50 </th>
                                  <td> BioRad </td>
                                  <td> BioRad D100 </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 51 </th>
                                  <td> BioRad </td>
                                  <td> Biorad Variant Turbo </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 52 </th>
                                  <td> BioSystem </td>
                                  <td> BioSystem A15 </td>
                                  <td> Biochemistry </td>
                                </tr>

                                <tr>
                                  <th> 53 </th>
                                  <td> BioSystem </td>
                                  <td> BioSystem A25 </td>
                                  <td> Biochemistry </td>
                                </tr>

                                <tr>
                                  <th> 54 </th>
                                  <td> BioSystem </td>
                                  <td> BioSystem BA200 </td>
                                  <td> Biochemistry </td>
                                </tr>

                                <tr>
                                  <th> 55 </th>
                                  <td> BioSystem </td>
                                  <td> BioSystem Coax </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 56 </th>
                                  <td> Boditech </td>
                                  <td> ichroma II </td>
                                  <td> Immunoassay </td>
                                </tr>

                                <tr>
                                  <th> 57 </th>
                                  <td> Boule </td>
                                  <td> Swelab Alfa </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 58 </th>
                                  <td> Caretium </td>
                                  <td> Caretium XI-921 Series A,B,C,D,E,F </td>
                                  <td> Electrolyte Analyzer </td>
                                </tr>

                                <tr>
                                  <th> 59 </th>
                                  <td> Cepheid </td>
                                  <td> Gene Xpert </td>
                                  <td> Molecular diagnostics </td>
                                </tr>

                                <tr>
                                  <th> 60 </th>
                                  <td> Concepta </td>
                                  <td> Concepta HA1 </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 61 </th>
                                  <td> Cormay Diagnostics </td>
                                  <td> Mythic 18 CellCounter </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 62 </th>
                                  <td> CPC Diagnostics </td>
                                  <td> Turbo Chem 100 </td>
                                  <td> Biochemistry </td>
                                </tr>

                                <tr>
                                  <th> 63 </th>
                                  <td> CPC Diagnostics </td>
                                  <td> Turbo Chem 240 </td>
                                  <td> Biochemistry </td>
                                </tr>

                                <tr>
                                  <th> 64 </th>
                                  <td> CPC Diagnostics </td>
                                  <td> Turbo Chem Magna </td>
                                  <td> Biochemistry </td>
                                </tr>

                                <tr>
                                  <th> 65 </th>
                                  <td> CPC Diagnostics </td>
                                  <td> Turbo Chem Prime </td>
                                  <td> Biochemistry </td>
                                </tr>

                                <tr>
                                  <th> 66 </th>
                                  <td> Diagast </td>
                                  <td> Qwalys 3 EVO </td>
                                  <td> Blood Bank Analyser </td>
                                </tr>

                                <tr>
                                  <th> 67 </th>
                                  <td> DIALAB </td>
                                  <td> DIALAB Autolyser </td>
                                  <td> Biochemistry </td>
                                </tr>

                                <tr>
                                  <th> 68 </th>
                                  <td> Diasorin </td>
                                  <td> Diasorin Liaison </td>
                                  <td> Immunoassay </td>
                                </tr>

                                <tr>
                                  <th> 69 </th>
                                  <td> Diasorin </td>
                                  <td> Diasorin Liaison XL </td>
                                  <td> Immunoassay </td>
                                </tr>

                                <tr>
                                  <th> 70 </th>
                                  <td> DiaSys </td>
                                  <td> DiaSys Response 910 </td>
                                  <td> Biochemistry </td>
                                </tr>

                                <tr>
                                  <th> 71 </th>
                                  <td> DiaSys </td>
                                  <td> DiaSys Sys 400 </td>
                                  <td> Biochemistry </td>
                                </tr>

                                <tr>
                                  <th> 72 </th>
                                  <td> DiaSys </td>
                                  <td> DiaSys Sys 400Pro </td>
                                  <td> Biochemistry </td>
                                </tr>

                                <tr>
                                  <th> 73 </th>
                                  <td> Diatron </td>
                                  <td> Abacus380 </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 74 </th>
                                  <td> DIESSE Diagnostica Senese </td>
                                  <td> Vesmatic 20 </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 75 </th>
                                  <td> DIESSE Diagnostica Senese </td>
                                  <td> Vesmatic 60 </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 76 </th>
                                  <td> DIESSE Diagnostica Senese </td>
                                  <td> VesMatic Easy </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 77 </th>
                                  <td> DIRUI </td>
                                  <td> DIRUI CS300B </td>
                                  <td> Biochemistry </td>
                                </tr>

                                <tr>
                                  <th> 78 </th>
                                  <td> Elite Touch Group </td>
                                  <td> Selectra Touch Pro </td>
                                  <td> Biochemistry </td>
                                </tr>

                                <tr>
                                  <th> 79 </th>
                                  <td> Elite Touch Group </td>
                                  <td> Selectra Touch Pro 2 </td>
                                  <td> Biochemistry </td>
                                </tr>

                                <tr>
                                  <th> 80 </th>
                                  <td> Eschweiler </td>
                                  <td> Combiline </td>
                                  <td> Blood-Gas-Electrolyte-Metabolite Analyser </td>
                                </tr>

                                <tr>
                                  <th> 81 </th>
                                  <td> Gen Store </td>
                                  <td> Auto Chem Xpert </td>
                                  <td> Biochemistry </td>
                                </tr>

                                <tr>
                                  <th> 82 </th>
                                  <td> Getein Biotech </td>
                                  <td> Getein 1100 </td>
                                  <td> Immunofluorescence Quantitative Analyzer </td>
                                </tr>

                                <tr>
                                  <th> 83 </th>
                                  <td> GS </td>
                                  <td> Biomic </td>
                                  <td> Micro Biology </td>
                                </tr>

                                <tr>
                                  <th> 84 </th>
                                  <td> High Technology Inc </td>
                                  <td> HTI CL-50 PLUS </td>
                                  <td> Urine Analyser </td>
                                </tr>

                                <tr>
                                  <th> 85 </th>
                                  <td> Hitachi </td>
                                  <td> Elecsys 2010 </td>
                                  <td> Immunoassay </td>
                                </tr>

                                <tr>
                                  <th> 86 </th>
                                  <td> Horiba Medical </td>
                                  <td> Yumizen G800 </td>
                                  <td> Coagulation Analyzer </td>
                                </tr>


                                <tr>
                                  <th> 87 </th>
                                  <td> Horiba Medical </td>
                                  <td> Horiba APX Pentra XL80 </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 88 </th>
                                  <td> Horiba Medical </td>
                                  <td> Horiba Pentra MS CRP </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 89 </th>
                                  <td> Horiba Medical </td>
                                  <td> Horiba Pentra XLR </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 90 </th>
                                  <td> Horiba Medical </td>
                                  <td> Micros 60 </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 91 </th>
                                  <td> Horiba Medical </td>
                                  <td> Micros 60 ABX </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 92 </th>
                                  <td> Horiba Medical </td>
                                  <td> Pentra ES 60 </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 93 </th>
                                  <td> Horiba Medical </td>
                                  <td> Yumizen H500 </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 94 </th>
                                  <td> Horiba Medical </td>
                                  <td> Yumizen H550 </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 95 </th>
                                  <td> Human </td>
                                  <td> HumaStar 200 </td>
                                  <td> Biochemistry </td>
                                </tr>

                                <tr>
                                  <th> 96 </th>
                                  <td> Humasis </td>
                                  <td> Humasis UAQSmart </td>
                                  <td> Urine Analyser </td>
                                </tr>

                                <tr>
                                  <th> 97 </th>
                                  <td> Immucor </td>
                                  <td> Immucor Galileo Echo </td>
                                  <td> Blood Bank Analyser </td>
                                </tr>

                                <tr>
                                  <th> 98 </th>
                                  <td> Immucor </td>
                                  <td> Immucor Galileo Neo </td>
                                  <td> Blood Bank Analyser </td>
                                </tr>

                                <tr>
                                  <th> 99 </th>
                                  <td> Ions </td>
                                  <td> Ions </td>
                                  <td> Electrolyte Analyzer </td>
                                </tr>

                                <tr>
                                  <th> 100 </th>
                                  <td> Iris </td>
                                  <td> Iris iCount3 </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 101 </th>
                                  <td> Lab Life </td>
                                  <td> Noble III </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 102 </th>
                                  <td> LifeLab Foundation </td>
                                  <td> Erba EC90 </td>
                                  <td> Electrolyte Analyzer </td>
                                </tr>

                                <tr>
                                  <th> 103 </th>
                                  <td> Medica </td>
                                  <td> EasyLyte </td>
                                  <td> Electrolyte Analyzer </td>
                                </tr>

                                <tr>
                                  <th> 104 </th>
                                  <td> Medica </td>
                                  <td> EasyLyte Plus </td>
                                  <td> Electrolyte Analyzer </td>
                                </tr>

                                <tr>
                                  <th> 105 </th>
                                  <td> Medica Corporation </td>
                                  <td> Medica EasyRA </td>
                                  <td> Clinical Chemistry </td>
                                </tr>

                                <tr>
                                  <th> 106 </th>
                                  <td> Medical Electronics Systems </td>
                                  <td> SQA Vision </td>
                                  <td> Semen Analyzer </td>
                                </tr>

                                <tr>
                                  <th> 107 </th>
                                  <td> Melet Schloesing </td>
                                  <td> MS-4s </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 108 </th>
                                  <td> Melet Schloesing </td>
                                  <td> MS9-5s </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 109 </th>
                                  <td> Meril Life </td>
                                  <td> Merilyzer Auto Quant 200 </td>
                                  <td> Biochemistry </td>
                                </tr>

                                <tr>
                                  <th> 110 </th>
                                  <td> Meril Life </td>
                                  <td> Merilyzer Gluquant A1C </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 111 </th>
                                  <td> Mindray </td>
                                  <td> Mindray BS-200E </td>
                                  <td> Biochemistry </td>
                                </tr>

                                <tr>
                                  <th> 112 </th>
                                  <td> Mindray </td>
                                  <td> Mindray BS-240 </td>
                                  <td> Biochemistry </td>
                                </tr>

                                <tr>
                                  <th> 113 </th>
                                  <td> Mindray </td>
                                  <td> Mindray BS-380 </td>
                                  <td> Biochemistry </td>
                                </tr>

                                <tr>
                                  <th> 114 </th>
                                  <td> Mindray </td>
                                  <td> Mindray BC-5000 5-part diff </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 115 </th>
                                  <td> Mindray </td>
                                  <td> Mindray BC-5100 5-part diff </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 116 </th>
                                  <td> Mindray </td>
                                  <td> Mindray BC-5130 5-part diff </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 117 </th>
                                  <td> Mindray </td>
                                  <td> Mindray BC-5150 5-part diff </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 118 </th>
                                  <td> Mindray </td>
                                  <td> Mindray BC-5300 5-part diff </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 119 </th>
                                  <td> Mindray </td>
                                  <td> Mindray BC-5380 5-part diff </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 120 </th>
                                  <td> Mindray </td>
                                  <td> Mindray BC-6200 5-part diff </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 121 </th>
                                  <td> Mindray </td>
                                  <td> Mindray BC-760  5-part diff </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 122 </th>
                                  <td> Mindray </td>
                                  <td> Mindray CL 1000i </td>
                                  <td> Immunoassay </td>
                                </tr>

                                <tr>
                                  <th> 123 </th>
                                  <td> Mindray </td>
                                  <td> Mindray CL 900i </td>
                                  <td> Immunoassay </td>
                                </tr>

                                <tr>
                                  <th> 124 </th>
                                  <td> Neo Medica </td>
                                  <td> Neo Medica Phoenix NCC-51 AL </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 125 </th>
                                  <td> Neo Medica </td>
                                  <td> Neo Medica Naissa </td>
                                  <td> Immunoassay </td>
                                </tr>

                                <tr>
                                  <th> 126 </th>
                                  <td> Neo Medica </td>
                                  <td> Neo Medica NUA 150 </td>
                                  <td> Urine Analyser </td>
                                </tr>

                                <tr>
                                  <th> 127 </th>
                                  <td> Nihon Kohden </td>
                                  <td> Nihon Kohden MEK6510 Cell Counter </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 128 </th>
                                  <td> Olympus </td>
                                  <td> Olympus AU400 </td>
                                  <td> Biochemistry </td>
                                </tr>

                                <tr>
                                  <th> 129 </th>
                                  <td> Ortho Clinical Diagnostics </td>
                                  <td> Vitros 250 </td>
                                  <td> Clinical Chemistry </td>
                                </tr>

                                <tr>
                                  <th> 130 </th>
                                  <td> Ortho Clinical Diagnostics </td>
                                  <td> Vitros 350 </td>
                                  <td> Clinical Chemistry </td>
                                </tr>

                                <tr>
                                  <th> 131 </th>
                                  <td> Ortho Clinical Diagnostics </td>
                                  <td> Vitros 3600 </td>
                                  <td> Clinical Chemistry </td>
                                </tr>

                                <tr>
                                  <th> 132 </th>
                                  <td> Ortho Clinical Diagnostics </td>
                                  <td> Vitros 4600 </td>
                                  <td> Clinical Chemistry </td>
                                </tr>

                                <tr>
                                  <th> 133 </th>
                                  <td> Ortho Clinical Diagnostics </td>
                                  <td> Vitros 5_1FS </td>
                                  <td> Clinical Chemistry </td>
                                </tr>

                                <tr>
                                  <th> 134 </th>
                                  <td> Ortho Clinical Diagnostics </td>
                                  <td> Vitros5600 </td>
                                  <td> Clinical Chemistry </td>
                                </tr>

                                <tr>
                                  <th> 135 </th>
                                  <td> Ortho Clinical Diagnostics </td>
                                  <td> Vitros EciQ </td>
                                  <td> Immunoassay </td>
                                </tr>

                                <tr>
                                  <th> 136 </th>
                                  <td> R &amp; R Mechataronics </td>
                                  <td> Starrsed ESR </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 137 </th>
                                  <td> Radiometer </td>
                                  <td> ABL 80 Flex </td>
                                  <td> Blood Gas Analyser </td>
                                </tr>


                                <tr>
                                  <th> 138 </th>
                                  <td> Radiometer </td>
                                  <td> ABL 800 </td>
                                  <td> Blood Gas Analyser </td>
                                </tr>

                                <tr>
                                  <th> 139 </th>
                                  <td> Radiometer </td>
                                  <td> ABL 9 </td>
                                  <td> Blood Gas Analyser </td>
                                </tr>

                                <tr>
                                  <th> 140 </th>
                                  <td> Radiometer </td>
                                  <td> ABL 90 </td>
                                  <td> Blood Gas Analyser </td>
                                </tr>

                                <tr>
                                  <th> 141 </th>
                                  <td> Radiometer </td>
                                  <td> ABL 90 Flex </td>
                                  <td> Blood Gas Analyser </td>
                                </tr>

                                <tr>
                                  <th> 142 </th>
                                  <td> Radiometer </td>
                                  <td> ABL80 </td>
                                  <td> Blood Gas Analyser </td>
                                </tr>

                                <tr>
                                  <th> 143 </th>
                                  <td> Radiometer </td>
                                  <td> AQT90 </td>
                                  <td> Blood Gas Analyser </td>
                                </tr>

                                <tr>
                                  <th> 144 </th>
                                  <td> Radiometer </td>
                                  <td> AQT90 Flex </td>
                                  <td> Blood Gas Analyser </td>
                                </tr>

                                <tr>
                                  <th> 145 </th>
                                  <td> Randox </td>
                                  <td> Randox Dayatona </td>
                                  <td> Biochemistry </td>
                                </tr>

                                <tr>
                                  <th> 146 </th>
                                  <td> Randox </td>
                                  <td> Randox Daytona Plus </td>
                                  <td> Biochemistry </td>
                                </tr>

                                <tr>
                                  <th> 147 </th>
                                  <td> Randox </td>
                                  <td> Randox Rx Monaco </td>
                                  <td> Biochemistry </td>
                                </tr>

                                <tr>
                                  <th> 148 </th>
                                  <td> Randox </td>
                                  <td> Randox Imola </td>
                                  <td> Clinical Chemistry </td>
                                </tr>

                                <tr>
                                  <th> 149 </th>
                                  <td> Rapid Diagnostics </td>
                                  <td> UriPlus 600 </td>
                                  <td> Urine Analyser </td>
                                </tr>

                                <tr>
                                  <th> 150 </th>
                                  <td> Roche </td>
                                  <td> Cobas 6000i </td>
                                  <td> Biochemistry </td>
                                </tr>

                                <tr>
                                  <th> 151 </th>
                                  <td> Roche </td>
                                  <td> Cobas C111 </td>
                                  <td> Biochemistry </td>
                                </tr>

                                <tr>
                                  <th> 152 </th>
                                  <td> Roche </td>
                                  <td> Cobas C311 </td>
                                  <td> Biochemistry </td>
                                </tr>

                                <tr>
                                  <th> 153 </th>
                                  <td> Roche </td>
                                  <td> Cobas E411 </td>
                                  <td> Biochemistry </td>
                                </tr>

                                <tr>
                                  <th> 154 </th>
                                  <td> Roche </td>
                                  <td> Cobas Integra 400 Plus </td>
                                  <td> Biochemistry </td>
                                </tr>

                                <tr>
                                  <th> 155 </th>
                                  <td> Roche </td>
                                  <td> Cobas Pure </td>
                                  <td> Biochemistry </td>
                                </tr>

                                <tr>
                                  <th> 156 </th>
                                  <td> Roche </td>
                                  <td> Cobas B121 </td>
                                  <td> Blood Gas Analyser </td>
                                </tr>

                                <tr>
                                  <th> 157 </th>
                                  <td> Roche </td>
                                  <td> Cobas B221 </td>
                                  <td> Blood Gas Analyser </td>
                                </tr>

                                <tr>
                                  <th> 158 </th>
                                  <td> Roche </td>
                                  <td> Cobas C501 </td>
                                  <td> Clinical Chemistry </td>
                                </tr>

                                <tr>
                                  <th> 159 </th>
                                  <td> Roche </td>
                                  <td> Hitachi 902 </td>
                                  <td> Clinical Chemistry </td>
                                </tr>

                                <tr>
                                  <th> 160 </th>
                                  <td> Roche </td>
                                  <td> Hitachi Modular P800 </td>
                                  <td> Clinical Chemistry </td>
                                </tr>

                                <tr>
                                  <th> 161 </th>
                                  <td> Roche </td>
                                  <td> AVL 9180 </td>
                                  <td> Electrolyte Analyzer </td>
                                </tr>

                                <tr>
                                  <th> 162 </th>
                                  <td> Roche </td>
                                  <td> Cobas U411 </td>
                                  <td> Urine Analyser </td>
                                </tr>

                                <tr>
                                  <th> 163 </th>
                                  <td> Sebia </td>
                                  <td> Minicap </td>
                                  <td> Capillary electrophoresis system </td>
                                </tr>

                                <tr>
                                  <th> 164 </th>
                                  <td> Sensa Core </td>
                                  <td> ST Aqua 200 </td>
                                  <td> Electrolyte Analyzer </td>
                                </tr>

                                <tr>
                                  <th> 165 </th>
                                  <td> Siemens </td>
                                  <td> Siemens Dimension ExL 200 </td>
                                  <td> Biochemistry </td>
                                </tr>

                                <tr>
                                  <th> 166 </th>
                                  <td> Siemens </td>
                                  <td> Siemens Dimension RxL </td>
                                  <td> Biochemistry </td>
                                </tr>

                                <tr>
                                  <th> 167 </th>
                                  <td> Siemens </td>
                                  <td> RapidLab 348 EX </td>
                                  <td> Blood Bank Analyser </td>
                                </tr>

                                <tr>
                                  <th> 168 </th>
                                  <td> Siemens </td>
                                  <td> RapidPoint 500 </td>
                                  <td> Blood Gas Analyser </td>
                                </tr>

                                <tr>
                                  <th> 169 </th>
                                  <td> Siemens </td>
                                  <td> Auto PAK 300 </td>
                                  <td> Clinical Chemistry </td>
                                </tr>

                                <tr>
                                  <th> 170 </th>
                                  <td> Siemens </td>
                                  <td> Dimension Xpand Plus </td>
                                  <td> Clinical Chemistry </td>
                                </tr>

                                <tr>
                                  <th> 171 </th>
                                  <td> Siemens </td>
                                  <td> Siemens Advia 560 </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 172 </th>
                                  <td> Siemens </td>
                                  <td> Simense Advia 2120i </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 173 </th>
                                  <td> Siemens </td>
                                  <td> Advia Centaur CP </td>
                                  <td> Immunoassay </td>
                                </tr>

                                <tr>
                                  <th> 174 </th>
                                  <td> Siemens </td>
                                  <td> Advia Centaur XP </td>
                                  <td> Immunoassay </td>
                                </tr>

                                <tr>
                                  <th> 175 </th>
                                  <td> Siemens </td>
                                  <td> Immulite 1000 </td>
                                  <td> Immunoassay </td>
                                </tr>

                                <tr>
                                  <th> 176 </th>
                                  <td> Siemens </td>
                                  <td> Siemens Atellica  </td>
                                  <td> Immunoassay </td>
                                </tr>

                                <tr>
                                  <th> 177 </th>
                                  <td> Siemens </td>
                                  <td> Siemens Clinitek Status </td>
                                  <td> Urine Chemistry </td>
                                </tr>

                                <tr>
                                  <th> 178 </th>
                                  <td> Siemens </td>
                                  <td> Siemens Clinitek Status Plus </td>
                                  <td> Urine Chemistry </td>
                                </tr>

                                <tr>
                                  <th> 179 </th>
                                  <td> Siemens </td>
                                  <td> Siemens Clinitek Advantus </td>
                                  <td> Urine Chemistry </td>
                                </tr>

                                <tr>
                                  <th> 180 </th>
                                  <td> Snibe </td>
                                  <td> Maglumi 600 </td>
                                  <td> Immunoassay </td>
                                </tr>

                                <tr>
                                  <th> 181 </th>
                                  <td> Snibe </td>
                                  <td> Maglumi 800 </td>
                                  <td> Immunoassay </td>
                                </tr>

                                <tr>
                                  <th> 182 </th>
                                  <td> Sperogenx Biosciences </td>
                                  <td> Qualcyte 10 </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 183 </th>
                                  <td> Stago </td>
                                  <td> STA Compact </td>
                                  <td> Coagulation Analyzer </td>
                                </tr>

                                <tr>
                                  <th> 184 </th>
                                  <td> Stago </td>
                                  <td> STACompact Max </td>
                                  <td> Coagulation Analyzer </td>
                                </tr>

                                <tr>
                                  <th> 185 </th>
                                  <td> Sysmex </td>
                                  <td> Sysmex BX 3010 </td>
                                  <td> Clinical Chemistry </td>
                                </tr>

                                <tr>
                                  <th> 186 </th>
                                  <td> Sysmex </td>
                                  <td> Sysmex CA 1500 </td>
                                  <td> Coagulation Analyzer </td>
                                </tr>

                                <tr>
                                  <th> 187 </th>
                                  <td> Sysmex </td>
                                  <td> Sysmex CA 500 </td>
                                  <td> Coagulation Analyzer </td>
                                </tr>

                                <tr>
                                  <th> 188 </th>
                                  <td> Sysmex </td>
                                  <td> Sysmex CA 600 </td>
                                  <td> Coagulation Analyzer </td>
                                </tr>

                                <tr>
                                  <th> 189 </th>
                                  <td> Sysmex </td>
                                  <td> Sysmex CA 620 </td>
                                  <td> Coagulation Analyzer </td>
                                </tr>

                                <tr>
                                  <th> 190 </th>
                                  <td> Sysmex </td>
                                  <td> Sysmex CA 660 </td>
                                  <td> Coagulation Analyzer </td>
                                </tr>

                                <tr>
                                  <th> 191 </th>
                                  <td> Sysmex </td>
                                  <td> Sysmex CA50 </td>
                                  <td> Coagulation Analyzer </td>
                                </tr>

                                <tr>
                                  <th> 192 </th>
                                  <td> Sysmex </td>
                                  <td> Sysmex CS 2000i </td>
                                  <td> Coagulation Analyzer </td>
                                </tr>

                                <tr>
                                  <th> 193 </th>
                                  <td> Sysmex </td>
                                  <td> Sysmex KX21 </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 194 </th>
                                  <td> Sysmex </td>
                                  <td> Sysmex XE 2100 </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 195 </th>
                                  <td> Sysmex </td>
                                  <td> Sysmex XN 1000 </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 196 </th>
                                  <td> Sysmex </td>
                                  <td> Sysmex XN 2000 </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 197 </th>
                                  <td> Sysmex </td>
                                  <td> Sysmex XN 550 </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 198 </th>
                                  <td> Sysmex </td>
                                  <td> Sysmex XN 9000 </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 199 </th>
                                  <td> Sysmex </td>
                                  <td> Sysmex XN330 </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 200 </th>
                                  <td> Sysmex </td>
                                  <td> Sysmex XN350 </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 201 </th>
                                  <td> Sysmex </td>
                                  <td> Sysmex XP 100 </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 202 </th>
                                  <td> Sysmex </td>
                                  <td> Sysmex XP 300 </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 203 </th>
                                  <td> Sysmex </td>
                                  <td> Sysmex XS 1000i </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 204 </th>
                                  <td> Sysmex </td>
                                  <td> Sysmex XS-800i </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 205 </th>
                                  <td> Sysmex </td>
                                  <td> Sysmex XT 1800i </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 206 </th>
                                  <td> Sysmex </td>
                                  <td> Sysmex UC 3500 </td>
                                  <td> Urine Analyser </td>
                                </tr>

                                <tr>
                                  <th> 207 </th>
                                  <td> Thermo Fisher Scientific </td>
                                  <td> Phadia 100 </td>
                                  <td> Allergy and autoimmunity </td>
                                </tr>

                                <tr>
                                  <th> 208 </th>
                                  <td> Thermo Fisher Scientific </td>
                                  <td> Phadia 250 </td>
                                  <td> Allergy and autoimmunity </td>
                                </tr>

                                <tr>
                                  <th> 209 </th>
                                  <td> Thermo Fisher Scientific </td>
                                  <td> Indiko </td>
                                  <td> Clinical Chemistry </td>
                                </tr>

                                <tr>
                                  <th> 210 </th>
                                  <td> Tosoh Bioscience </td>
                                  <td> Tosoh G8 </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 211 </th>
                                  <td> Tosoh Bioscience </td>
                                  <td> AIA 360 </td>
                                  <td> Immunoassay </td>
                                </tr>

                                <tr>
                                  <th> 212 </th>
                                  <td> Transasia Bio-Medicals Ltd </td>
                                  <td> Erba LisaScan EM </td>
                                  <td> Automated ELISA microplate reader </td>
                                </tr>

                                <tr>
                                  <th> 213 </th>
                                  <td> Transasia Bio-Medicals Ltd </td>
                                  <td> Erba EM200 </td>
                                  <td> Biochemistry </td>
                                </tr>

                                <tr>
                                  <th> 214 </th>
                                  <td> Transasia Bio-Medicals Ltd </td>
                                  <td> Erba XL1000 </td>
                                  <td> Biochemistry </td>
                                </tr>

                                <tr>
                                  <th> 215 </th>
                                  <td> Transasia Bio-Medicals Ltd </td>
                                  <td> Erba XL640 </td>
                                  <td> Biochemistry </td>
                                </tr>

                                <tr>
                                  <th> 216 </th>
                                  <td> Transasia Bio-Medicals Ltd </td>
                                  <td> Erba Em360 </td>
                                  <td> Clinical Chemistry </td>
                                </tr>

                                <tr>
                                  <th> 217 </th>
                                  <td> Transasia Bio-Medicals Ltd </td>
                                  <td> Erba ECL105 </td>
                                  <td> Coagulation Analyzer </td>
                                </tr>

                                <tr>
                                  <th> 218 </th>
                                  <td> Transasia Bio-Medicals Ltd </td>
                                  <td> Erba EC90 </td>
                                  <td> Electrolyte Analyzer </td>
                                </tr>

                                <tr>
                                  <th> 219 </th>
                                  <td> Transasia Bio-Medicals Ltd </td>
                                  <td> Erba Elite560 </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 220 </th>
                                  <td> Transasia Bio-Medicals Ltd </td>
                                  <td> Erba Elite580 </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 221 </th>
                                  <td> Transasia Bio-Medicals Ltd </td>
                                  <td> Laura SMART </td>
                                  <td> Urine Analyser </td>
                                </tr>

                                <tr>
                                  <th> 222 </th>
                                  <td> Trivitron </td>
                                  <td> Nano H5 </td>
                                  <td> Biochemistry </td>
                                </tr>

                                <tr>
                                  <th> 223 </th>
                                  <td> Trivitron </td>
                                  <td> Nano Lab 200 </td>
                                  <td> Clinical Chemistry </td>
                                </tr>


                                <tr>
                                  <th> 224 </th>
                                  <td> Trivitron </td>
                                  <td> Trivitron Elite </td>
                                  <td> Electrolyte Analyzer </td>
                                </tr>

                                <tr>
                                  <th> 225 </th>
                                  <td> Tulip Diagnostics </td>
                                  <td> Turbodyne SC </td>
                                  <td> Biochemistry </td>
                                </tr>


                                <tr>
                                  <th> 226 </th>
                                  <td> Tulip Diagnostics </td>
                                  <td> Tulip Matrix Gel System </td>
                                  <td> Blood Bank Analyser </td>
                                </tr>

                                <tr>
                                  <th> 227 </th>
                                  <td> Tulip Diagnostics </td>
                                  <td> Hemostar XF2 </td>
                                  <td> Coagulation Analyzer </td>
                                </tr>

                                <tr>
                                  <th> 228 </th>
                                  <td> Werfen </td>
                                  <td> GEM Premier 3000 </td>
                                  <td> Blood Gas Analyser </td>
                                </tr>

                                <tr>
                                  <th> 229 </th>
                                  <td> Werfen </td>
                                  <td> GEM Premier 3500 </td>
                                  <td> Blood Gas Analyser </td>
                                </tr>

                                <tr>
                                  <th> 230 </th>
                                  <td> Werfen </td>
                                  <td> GEM Premier 4000 </td>
                                  <td> Blood Gas Analyser </td>
                                </tr>

                                <tr>
                                  <th> 231 </th>
                                  <td> Werfen </td>
                                  <td> Acl Elite </td>
                                  <td> Coagulation Analyzer </td>
                                </tr>

                                <tr>
                                  <th> 232 </th>
                                  <td> Werfen </td>
                                  <td> Acl Elite Pro </td>
                                  <td> Coagulation Analyzer </td>
                                </tr>

                                <tr>
                                  <th> 233 </th>
                                  <td> Werfen </td>
                                  <td> Acl Top </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 234 </th>
                                  <td> Werfen </td>
                                  <td> Acl Top 550 </td>
                                  <td> Hematology </td>
                                </tr>

                                <tr>
                                  <th> 235 </th>
                                  <td> Wondfo </td>
                                  <td> Finecare III Plus </td>
                                  <td> Biochemistry </td>
                                </tr>

                              </tbody>
                            </table>

                      </div>
                  </div>



                </div>
              </div>
            </div>

        </div>
    </div>

    
        </>
    );
};

export default LabEquipmentInterfacing;
