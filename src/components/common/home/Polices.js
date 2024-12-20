import React from "react";
import { policies } from "../data/Data";

import CommonHeading from "../common/CommonHeading";
export default function Policies() {
    return (
        <>

            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <h6 className="section-title text-start text-primary text-uppercase">
                                <CommonHeading
                                    heading="MAID HIRING"
                                    title="Policies"
                                />
                            </h6>
                            <p className="mb-4">
                                <h2>Service Agreement and Terms of Use</h2>
                                <p><strong>Service Quality Standards:</strong> Our platform requires that all service providers meet minimum standards...</p>
                                <p><strong>Liability:</strong> In cases of property damage, accidents, or other service failures...</p>
                                <p><strong>Compliance with Local Laws:</strong> We adhere to all employment laws and regulations...</p>

                                <h2>Theft and Incident Policy</h2>
                                <p><strong>Reporting Incidents:</strong> Clients must report any incidents of theft or suspicious activity immediately through our official support channels.</p>
                                <p><strong>Investigation Process:</strong> Once a report is filed, we will conduct a thorough investigation in collaboration with local authorities if necessary. All parties involved are expected to cooperate fully.</p>
                                <p><strong>Liability and Accountability:</strong> If a worker is found guilty of theft, they will be permanently removed from the platform, and any relevant information may be shared with law enforcement. We also encourage clients to take appropriate legal actions if necessary.</p>
                                <p><strong>Prevention Measures:</strong> We conduct rigorous background checks for all workers, and we strive to provide reliable and trustworthy services. However, clients are advised to take their own security precautions as well.</p>
                            </p>
                            <div className="row g-3 pb-4">
                                {policies.map((item, key) => (
                                    <div className="col-sm-4 wow fadeIn" data-wow-delay="0.1s">
                                        <div className="border rounded p-1">
                                            <div className="border rounded text-center p-4">
                                                {item.icon}
                                                <h2 className="mb-1" data-toggle="counter-up">
                                                    {item.count}
                                                </h2>
                                                <p className="mb-0">{item.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                        <div className="col-lg-6">
                            <div className="row g-3">
                                <div className="col-6 text-end">
                                    <img
                                        className="img-fluid rounded w-75 wow zoomIn"
                                        data-wow-delay="0.1s"
                                        src="/assets/img/about-1.jpg"
                                        style={{ marginTop: "25%" }}
                                    />
                                </div>
                                <div className="col-6 text-start">
                                    <img
                                        className="img-fluid rounded w-100 wow zoomIn"
                                        data-wow-delay="0.2s"
                                        src="/assets/img/about-2.jpg"
                                    />
                                </div>
                                <div className="col-6 text-end">
                                    <img
                                        className="img-fluid rounded w-50 wow zoomIn"
                                        data-wow-delay="0.1s"
                                        src="/assets/img/about-3.jpg"
                                    />
                                </div>
                                <div className="col-6 text-start">
                                    <img
                                        className="img-fluid rounded w-75 wow zoomIn"
                                        data-wow-delay="0.7s"
                                        src="/assets/img/about-4.jpg"
                                    />
                                </div>
                            </div></div>
                    </div>
                </div>
            </div>
        </>
    );
}
