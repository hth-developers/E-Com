import React, { Component } from 'react';
import { MDBInput } from "mdbreact";
class About extends Component {

    render() { 
        return (
            <div >
           
           <h2 class="mb-5 font-weight-bold text-center mt-5">Contact us</h2>
           <div class="row">

                    {/* <!--Grid column--> */}
                    <div class="col-lg-5 col-md-12">
                        {/* <!-- Form contact --> */}
                        <form class="p-5 grey-text">
                            <div class="md-form form-sm"><MDBInput label="Your Name :" outline />
                            </div>
                            <div class="md-form form-sm"><MDBInput label="Your Email:" outline />
                            </div>
                            <div class="md-form form-sm"> <MDBInput label="Example label" outline />
                            </div>
                            <div class="md-form form-sm"> <MDBInput type="textarea" label="Your Massage" outline />
                            </div>
                            <div class="text-center mt-4">
                                <button class="btn btn-primary">Send <i class="fa fa-paper-plane-o ml-1"></i></button>
                            </div>
                        </form>
                        {/* <!-- Form contact --> */}
                    </div>
                    {/* <!--Grid column--> */}

                    {/* <!--Grid column--> */}
                    <div class="col-lg-7 col-md-12">

                        {/* <!--Grid row--> */}
                        <div class="row text-center">

                            {/* <!--Grid column--> */}
                            <div class="col-lg-4 col-md-12 mb-3">

                                <p><i class="fa fa-map fa-1x mr-2 grey-text"></i>F-Block Vehari</p>

                            </div>
                            {/* <!--Grid column--> */}

                            {/* <!--Grid column--> */}
                            <div class="col-lg-4 col-md-6 mb-3">

                                <p><i class="fa fa-building fa-1x mr-2 grey-text"></i>Mon - Fri, 8:00-22:00</p>

                            </div>
                            {/* <!--Grid column--> */}

                            {/* <!--Grid column--> */}
                            <div class="col-lg-4 col-md-6 mb-3">

                                <p><i class="fa fa-phone fa-1x mr-2 grey-text"></i>0303-9509454</p>

                            </div>
                            {/* <!--Grid column--> */}

                        </div>
                        
                        </div>
                        </div>
                        </div>
                
           
          );
    }
}
 
export default About;