import React from "react";
import {ExtendedButton,SmallButton} from "./Buttons";
import "./Navbar.css";

// shadow p-3 mb-5 bg-white rounded
// style={{visibility:"hidden"}}

function Navbar(prop)
{
    if(prop.screen !== 0)
        return (
					<div class="navbox">
						<div class="navbar-title">
							{prop.title}

							<span class="navBar-btn-grp">
								<div class="nav-button-1" style={{ visibility: "hidden" }}>
									<ExtendedButton content="Monitor Upload Status" />
								</div>

								<div class="nav-button-2">
									<SmallButton
										content="Set Up"
										Id="navbar-set-btn"
										dataTar={prop.dataTarget}
									/>
									{/* <div
										class="modal fade bd-example-modal-lg"
										id="mI-modal-Setup"
										tabindex="-1"
										role="dialog"
										aria-labelledby="myLargeModalLabel"
										aria-hidden="true"
									>
										<div class="modal-dialog modal-lg">
											<div class="modal-content">...</div>
										</div>
									</div>   */}
								</div>
							</span>
						</div>
					</div>
				);
    
    else
        return (
            <div class="shadow p-3 mb-5 bg-white rounded">
                <div class="navbar-title">
                    {prop.title}
                    
                        <span class = "nav-button-1">
                            <ExtendedButton content="Monitor Upload Status"/>
                        </span>

                        <span class = "nav-button-2">
                            <SmallButton content="SetUp" Id="navbar-set-btn" data-toggle="modal" data-target={prop.dataTarget}/>
                        </span>
                    
                </div>
            </div>
        );
}

export default Navbar;