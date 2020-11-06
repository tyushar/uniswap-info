import React from "react";
import { withRouter } from 'react-router-dom'
import './StationList.css';

export function AdvanceTablesWidget9({ className }) {
    return (
        <>
            {/* begin::Advance Table Widget 9 */}
            <div className={`card card-custom ${className}`}>
                {/* begin::Header */}
                <div className="card-header border-0 py-5">
                    <h3 className="card-title align-items-start flex-column">
                        <span className="card-label font-weight-bolder text-dark">
                            Active Stations
            </span>
                        <span className="text-muted mt-3 font-weight-bold font-size-sm">
                            More than 100+ station
            </span>
                    </h3>

                </div>
                {/* end::Header */}

                {/* begin::Body */}
                <div className="card-body pt-0 pb-3">
                    <div className="tab-content">
                        {/* begin::Table */}
                        <div className="table-responsive">
                            <table className="table table-head-custom table-vertical-center table-head-bg table-borderless">
                                <thead>
                                    <tr className="text-left">
                                        <th style={{ minWidth: "250px" }} className="pl-7">
                                            <span className="text-dark-75">pool</span>
                                        </th>
                                        <th style={{ minWidth: "100px" }}>staked</th>
                                        <th style={{ minWidth: "100px" }}>underlying tokens</th>
                                        <th style={{ minWidth: "100px" }}>total locked values</th>
                                        <th style={{ minWidth: "100px" }}>yield per $1000</th>
                                        <th style={{ minWidth: "100px" }}>roi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="pl-0 py-8">
                                            <div className="d-flex align-items-center">
                                                <div className="symbol symbol-50 symbol-light mr-4">
                                                    <span className="symbol-label">
                                                        <div className="h-75 align-self-end">
                                                            🦘
                                                            </div>

                                                    </span>
                                                </div>
                                                <div>
                                                    <a
                                                        href="#"
                                                        className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                                                    >
                                                        London Trams
                          </a>
                                                    <span className="text-muted font-weight-bold d-block">
                                                        Trams DAI/WETH
                          </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                                970,387.178
                      </span>
                                            <span className="text-muted font-weight-bold">
                                                TRAMS -ETH TLP
                      </span>
                                        </td>
                                        <td>
                                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                                10,231,118 TRAMS
                      </span>
                                            <span className="text-muted font-weight-bold">48,401 WETH</span>
                                        </td>
                                        <td>
                                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                                $28,270,273
                      </span>
                                            <span className="text-muted font-weight-bold">
                                                +28%
                      </span>
                                        </td>
                                        <td>
                                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                                5.76
                      </span>
                                            <span className="text-muted font-weight-bold d-block">
                                                Trams/day
                      </span>
                                        </td>
                                        <td>
                                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                                0.25% daily
                      </span>
                                            <span className="text-muted font-weight-bold d-block">
                                                90.87% yearly
                      </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="pl-0 py-0">
                                            <div className="d-flex align-items-center">
                                                <div className="symbol symbol-50 symbol-light mr-4">
                                                    <span className="symbol-label">
                                                        <div className="h-75 align-self-end">
                                                            🦃
                                                            </div>
                                                    </span>
                                                </div>
                                                <div>
                                                    <a
                                                        href="#"
                                                        className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                                                    >
                                                        Seoul trams
                          </a>
                                                    <span className="text-muted font-weight-bold d-block">
                                                        TRAMS USDC/WETH

                          </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                                23,000.138
                      </span>
                                            <span className="text-muted font-weight-bold">
                                                TRAMS -ETH TLP
                      </span>
                                        </td>
                                        <td>
                                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                                231,118 TRAMS
                      </span>
                                            <span className="text-muted font-weight-bold">
                                                400.12 WETH
                      </span>
                                        </td>
                                        <td>
                                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                                $13,270,273
                      </span>
                                            <span className="text-muted font-weight-bold">
                                                -5%
                      </span>
                                        </td>
                                        <td>
                                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                                10.2
                      </span>
                                            <span className="text-muted font-weight-bold d-block">
                                                Trams/day
                      </span>
                                        </td>
                                        <td>
                                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                                0.08% daily
                      </span>
                                            <span className="text-muted font-weight-bold d-block">
                                                0.26% yearly
                      </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="pl-0 py-8">
                                            <div className="d-flex align-items-center">
                                                <div className="symbol symbol-50 symbol-light mr-4">
                                                    <span className="symbol-label">
                                                        <div className="h-75 align-self-end">
                                                            🦅
                                                            </div>
                                                    </span>
                                                </div>
                                                <div>
                                                    <a
                                                        href="#"
                                                        className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                                                    >
                                                        Singapore Trams
                          </a>
                                                    <span className="text-muted font-weight-bold d-block">
                                                        TRAMS USDC/WETH

                          </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                                1,408,367

                      </span>
                                            <span className="text-muted font-weight-bold">USDT-ETH LTP</span>
                                        </td>
                                        <td>
                                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                                5,678,890 WETH
                      </span>
                                            <span className="text-muted font-weight-bold">19,086,76 USDT</span>
                                        </td>
                                        <td>
                                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                                $47,732,78
                      </span>
                                            <span className="text-muted font-weight-bold">
                                                +10%
                      </span>
                                        </td>
                                        <td>
                                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                                1.320
                      </span>
                                            <span className="text-muted font-weight-bold d-block">
                                                Trams/day
                      </span>
                                        </td>
                                        <td>
                                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                                0.07% daily
                      </span>
                                            <span className="text-muted font-weight-bold d-block">
                                                0.30% yearly
                      </span>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="pl-0 py-0">
                                            <div className="d-flex align-items-center">
                                                <div className="symbol symbol-50 symbol-light mr-4">
                                                    <span className="symbol-label">
                                                        <div className="h-75 align-self-end">
                                                            🐴
                                                            </div>
                                                    </span>
                                                </div>
                                                <div>
                                                    <a
                                                        href="#"
                                                        className="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg"
                                                    >
                                                        Kolkata Trams
                          </a>
                                                    <span className="text-muted font-weight-bold d-block">
                                                        TRAMS WETH/TRAMS
                          </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                                0.87

                      </span>
                                            <span className="text-muted font-weight-bold">USDT-ETH LTP</span>
                                        </td>
                                        <td>
                                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                                7,890 WETH
                      </span>
                                            <span className="text-muted font-weight-bold">
                                                786,76 USDT
                      </span>
                                        </td>
                                        <td>
                                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                                $13,768,17
                      </span>
                                            <span className="text-muted font-weight-bold">
                                                -12%
                      </span>
                                        </td>
                                        <td>
                                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                                2.36
                      </span>
                                            <span className="text-muted font-weight-bold d-block">
                                                Trams/day
                      </span>
                                        </td>
                                        <td>
                                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                                0.5% daily
                      </span>
                                            <span className="text-muted font-weight-bold d-block">
                                                0.15% yearly
                      </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {/* end::Table */}
                    </div>
                </div>
                {/* end::Body */}
            </div>
            {/* end::Advance Table Widget 9 */}
        </>
    );
}
export default withRouter(AdvanceTablesWidget9)