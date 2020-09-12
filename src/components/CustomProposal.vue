<template>
    <div class="custom-proposal-wrapper">
        <section v-if="step == 1">
            <div class="large_heading_group">
                <div class="large_heading">Project Estimator</div>
                <div class="large_description">An estimator for SVNCRWNS Projects that helps us get a quick snapshot of how to rate if we're interested in working with a potential client.  Run it up!<br/><br/>Complete all the fields in the following screens.</div>
            </div>
        </section>
        
        <section v-if="step == 2">
            <div class="large_heading_group">
                <div class="large_heading">Project Information</div>
                <div class="large_description">Gathering details about the project to help us make an estimate that’s mutually beneficial.</div>
            </div>
            
            <div class="info_wrapper">
                <div class="frow justify-between">
                    <div class="info_single">
                        <div class="info_group">
                            <div class="heading_group">
                                <div class="heading">Client Information</div>
                            </div>
                            
                            <div class="group">
                                <div class="frow justify-start">
                                    <div class="group-copy">What's the client's name?</div>
                                    <input 
                                    v-model="form.client_name"
                                    type="text" placeholder="Nasir Jones" class="form-control form-control-lg" >
                                </div>
                            </div>
                            <div class="group">
                                <div class="frow justify-start">
                                    <div class="group-copy">What's the business name?</div>
                                    <input 
                                    v-model="form.business_name"
                                    type="text" placeholder="Mass Appeal" class="form-control form-control-lg" >
                                </div>
                            </div>
                            <div class="group">
                                
                                    <div class="group-copy">What's the business opportunity?</div>
                                    <textarea 
                                    v-model="form.business_opportunity"
                                    type="text" placeholder="What's the project description" class="textbox" ></textarea>
                                
                            </div>
                
                            <div class="group">
                                <div class="frow justify-start">
                                    <div class="group-copy">Has client been in business 2 - 5 years?</div>
                                    <select v-model="established">
                                        <option disabled value="">Established?</option>
                                        <option>Yes</option>
                                        <option>No</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="info_single">
                        <div class="info_group">
                            <div class="heading_group">
                                <div class="heading">Business Industry</div>
                            </div>
                            
                            <div class="group">
                                <div class="frow justify-start">
                                    <select v-model="business_industry" class="long_select">
                                        <option disabled value="">Business Industry</option>
                                        <option>Retail Brand</option>
                                        <option>Wellness Brand</option>
                                        <option>Media Brand</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        
                        <div class="info_group">
                            <div class="heading_group">
                                <div class="heading">Agency Rate</div>
                            </div>
                            
                            <div class="group">
                                
                                <div class="group-copy longer">Our agency rate is typically $75 because we understand the value that our team brings to any business.  We have a sliding scale of $50 - $150.  What agency rate do we want to use for this project?</div>
                                <input 
                                v-model="form.rate"
                                type="number" placeholder="$75" class="form-control form-control-lg" >
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>

        <section v-if="step == 3">
            <div class="large_heading_group">
                <div class="large_heading">Platform Planning</div>
                <div class="large_description">Estimates for Design, Development, Testing and Deployment phases of the project.  Print and Save as PDF before moving forward.</div>
            </div>
            
            <div class="info_wrapper">
                <div class="frow justify-between">
                    <div class="info_single">
                
                        

                        <div class="info_group">
                            <div class="heading_group">
                                <div class="heading">Pages</div>
                            </div>

                            <div class="page_group">
                                <div class="frow justify-start">
                                    <label for="brand_design" class="platform_control_label">Home</label>
                                    <input 
                                    v-model="platform.home_design"
                                    type="number" placeholder="20" class="form-control form-control-lg platform-control">
                                    <input 
                                    v-model="platform.home_dev"
                                    type="number" placeholder="20" class="form-control form-control-lg platform-control">
                                </div>
                            </div>

                            <div class="page_group">
                                <div class="frow justify-start">
                                    <label for="brand_design" class="platform_control_label">Our Story</label>
                                    <input 
                                    v-model="platform.about_design"
                                    type="number" placeholder="20" class="form-control form-control-lg platform-control">
                                    <input 
                                    v-model="platform.about_dev"
                                    type="number" placeholder="20" class="form-control form-control-lg platform-control">
                                </div>
                            </div>

                            <div class="page_group">
                                <div class="frow justify-start">
                                    <label for="brand_design" class="platform_control_label">Shop (All Products)</label>
                                    <input 
                                    v-model="platform.shop_allprod_design"
                                    type="number" placeholder="20" class="form-control form-control-lg platform-control">
                                    <input 
                                    v-model="platform.shop_allprod_dev"
                                    type="number" placeholder="20" class="form-control form-control-lg platform-control">
                                </div>
                            </div>

                            <div class="page_group">
                                <div class="frow justify-start">
                                    <label for="brand_design" class="platform_control_label">Shop (All Collections)</label>
                                    <input 
                                    v-model="platform.shop_allcoll_design"
                                    type="number" placeholder="20" class="form-control form-control-lg platform-control">
                                    <input 
                                    v-model="platform.shop_allcoll_dev"
                                    type="number" placeholder="20" class="form-control form-control-lg platform-control">
                                </div>
                            </div>

                            <div class="page_group">
                                <div class="frow justify-start">
                                    <label for="brand_design" class="platform_control_label">Shop (Single Collection)</label>
                                    <input 
                                    v-model="platform.shop_singlecoll_design"
                                    type="number" placeholder="20" class="form-control form-control-lg platform-control">
                                    <input 
                                    v-model="platform.shop_singlecoll_dev"
                                    type="number" placeholder="20" class="form-control form-control-lg platform-control">
                                </div>
                            </div>

                            <div class="page_group">
                                <div class="frow justify-start">
                                    <label for="brand_design" class="platform_control_label">Product - Single</label>
                                    <input 
                                    v-model="platform.product_single_design"
                                    type="number" placeholder="20" class="form-control form-control-lg platform-control">
                                    <input 
                                    v-model="platform.product_single_dev"
                                    type="number" placeholder="20" class="form-control form-control-lg platform-control">
                                </div>
                            </div>

                            <div class="page_group">
                                <div class="frow justify-start">
                                    <label for="brand_design" class="platform_control_label">Customer Service</label>
                                    <input 
                                    v-model="platform.cust_serv_design"
                                    type="number" placeholder="20" class="form-control form-control-lg platform-control">
                                    <input 
                                    v-model="platform.cust_serv_dev"
                                    type="number" placeholder="20" class="form-control form-control-lg platform-control">
                                </div>
                            </div>

                            <div class="page_group">
                                <div class="frow justify-start">
                                    <label for="brand_design" class="platform_control_label">Policies</label>
                                    <input 
                                    v-model="platform.policies_design"
                                    type="number" placeholder="20" class="form-control form-control-lg platform-control">
                                    <input 
                                    v-model="platform.policies_dev"
                                    type="number" placeholder="20" class="form-control form-control-lg platform-control">
                                </div>
                            </div>

                            <div class="page_group">
                                <div class="frow justify-start">
                                    <label for="brand_design" class="platform_control_label">Contact</label>
                                    <input 
                                    v-model="platform.contact_design"
                                    type="number" placeholder="20" class="form-control form-control-lg platform-control">
                                    <input 
                                    v-model="platform.contact_dev"
                                    type="number" placeholder="20" class="form-control form-control-lg platform-control">
                                </div>
                            </div>

                            <div class="page_group">
                                <div class="frow justify-start">
                                    <label for="brand_design" class="platform_control_label">Services</label>
                                    <input 
                                    v-model="platform.services_design"
                                    type="number" placeholder="20" class="form-control form-control-lg platform-control">
                                    <input 
                                    v-model="platform.services_dev"
                                    type="number" placeholder="20" class="form-control form-control-lg platform-control">
                                </div>
                            </div>

                            <div class="page_group">
                                <div class="frow justify-start">
                                    <label for="brand_design" class="platform_control_label">Work</label>
                                    <input 
                                    v-model="platform.work_design"
                                    type="number" placeholder="20" class="form-control form-control-lg platform-control">
                                    <input 
                                    v-model="platform.work_dev"
                                    type="number" placeholder="20" class="form-control form-control-lg platform-control">
                                </div>
                            </div>

                            <div class="page_group">
                                <div class="frow justify-start">
                                    <label for="brand_design" class="platform_control_label">Work - Single</label>
                                    <input 
                                    v-model="platform.work_single_design"
                                    type="number" placeholder="20" class="form-control form-control-lg platform-control">
                                    <input 
                                    v-model="platform.work_single_dev"
                                    type="number" placeholder="20" class="form-control form-control-lg platform-control">
                                </div>
                            </div>

                            <div class="page_group">
                                <div class="frow justify-start">
                                    <label for="brand_design" class="platform_control_label">FAQs</label>
                                    <input 
                                    v-model="platform.faqs_design"
                                    type="number" placeholder="20" class="form-control form-control-lg platform-control">
                                    <input 
                                    v-model="platform.faqs_dev"
                                    type="number" placeholder="20" class="form-control form-control-lg platform-control">
                                </div>
                            </div>

                            <div class="page_group">
                                <div class="frow justify-start">
                                    <label for="brand_design" class="platform_control_label">Shopping Cart</label>
                                    <input 
                                    v-model="platform.cart_design"
                                    type="number" placeholder="20" class="form-control form-control-lg platform-control">
                                    <input 
                                    v-model="platform.cart_dev"
                                    type="number" placeholder="20" class="form-control form-control-lg platform-control">
                                </div>
                            </div>

                            <div class="page_group">
                                <div class="frow justify-start">
                                    <label for="brand_design" class="platform_control_label">Newsletter</label>
                                    <input 
                                    v-model="platform.newsletter_design"
                                    type="number" placeholder="20" class="form-control form-control-lg platform-control">
                                    <input 
                                    v-model="platform.newsletter_dev"
                                    type="number" placeholder="20" class="form-control form-control-lg platform-control">
                                </div>
                            </div>

                            <div class="page_group">
                                <div class="frow justify-start">
                                    <label for="brand_design" class="platform_control_label">Blog</label>
                                    <input 
                                    v-model="platform.blog_design"
                                    type="number" placeholder="20" class="form-control form-control-lg platform-control">
                                    <input 
                                    v-model="platform.blog_dev"
                                    type="number" placeholder="20" class="form-control form-control-lg platform-control">
                                </div>
                            </div>

                            <div class="page_group">
                                <div class="frow justify-start">
                                    <label for="brand_design" class="platform_control_label">Stockists</label>
                                    <input 
                                    v-model="platform.stockist_design"
                                    type="number" placeholder="20" class="form-control form-control-lg platform-control">
                                    <input 
                                    v-model="platform.stockist_dev"
                                    type="number" placeholder="20" class="form-control form-control-lg platform-control">
                                </div>
                            </div>

                            <div class="page_group">
                                <div class="frow justify-start">
                                    <label for="brand_design" class="platform_control_label">Lookbook</label>
                                    <input 
                                    v-model="platform.lookbook_design"
                                    type="number" placeholder="20" class="form-control form-control-lg platform-control">
                                    <input 
                                    v-model="platform.lookbook_dev"
                                    type="number" placeholder="20" class="form-control form-control-lg platform-control">
                                </div>
                            </div>

                            <div class="page_group">
                                <div class="frow justify-start">
                                    <label for="brand_design" class="platform_control_label">Custom Feature #1</label>
                                    <input 
                                    v-model="platform.custom_1_design"
                                    type="number" placeholder="20" class="form-control form-control-lg platform-control">
                                    <input 
                                    v-model="platform.custom_1_dev"
                                    type="number" placeholder="20" class="form-control form-control-lg platform-control">
                                </div>
                            </div>

                            <div class="page_group">
                                <div class="frow justify-start">
                                    <label for="brand_design" class="platform_control_label">Custom Feature #2</label>
                                    <input 
                                    v-model="platform.custom_2_design"
                                    type="number" placeholder="20" class="form-control form-control-lg platform-control">
                                    <input 
                                    v-model="platform.custom_2_dev"
                                    type="number" placeholder="20" class="form-control form-control-lg platform-control">
                                </div>
                            </div>

                            <div class="page_group">
                                <div class="frow justify-start">
                                    <label for="brand_design" class="platform_control_label">Custom Feature #3</label>
                                    <input 
                                    v-model="platform.custom_3_design"
                                    type="number" placeholder="20" class="form-control form-control-lg platform-control">
                                    <input 
                                    v-model="platform.custom_3_dev"
                                    type="number" placeholder="20" class="form-control form-control-lg platform-control">
                                </div>
                            </div>
                        </div>
                        <div class="info_group">
                            <div class="heading_group">
                                <div class="heading">Other</div>
                            </div>
                        
                            <div class="page_group">
                                <div class="frow justify-start">
                                    <label for="brand_design" class="platform_control_label">Testing & Deployment</label>
                                    <input 
                                    v-model="platform.deploy"
                                    type="number" placeholder="20" class="form-control form-control-lg platform-control">
                                </div>
                            </div>

                            <div class="page_group">
                                <div class="frow justify-start">
                                    <label for="brand_design" class="platform_control_label">Meetings</label>
                                    <input 
                                    v-model="platform.meetings"
                                    type="number" placeholder="20" class="form-control form-control-lg platform-control">
                                </div>
                            </div>

                            <div class="page_group">
                                <div class="frow justify-start">
                                    <label for="brand_design" class="platform_control_label">Project Setup</label>
                                    <input 
                                    v-model="platform.project_setup"
                                    type="number" placeholder="20" class="form-control form-control-lg platform-control">
                                </div>
                            </div>

                            <div class="page_group">
                                <div class="frow justify-start">
                                    <label for="brand_design" class="platform_control_label">Accounts Setup</label>
                                    <input 
                                    v-model="platform.accts_setup"
                                    type="number" placeholder="20" class="form-control form-control-lg platform-control">
                                </div>
                            </div>

                            <div class="page_group">
                                <div class="frow justify-start">
                                    <label for="brand_design" class="platform_control_label">Product Uploads</label>
                                    <input 
                                    v-model="platform.product_uploads"
                                    type="number" placeholder="20" class="form-control form-control-lg platform-control">
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="info_single pages">
                        <div class="info_group">
                            <div class="heading_group">
                                <div class="heading">Type of Platform</div>
                            </div>
                            
                            <select v-model="type_platform" class="long_select">
                                <option disabled value="">Platform?</option>
                                <option>One Page Website</option>
                                <option>Portfolio Website</option>
                                <option>Business Website</option>
                                <option>E-commerce Website</option>
                                <option>Custom Website</option>
                                <option>E-mail List</option>
                            </select>
                        </div>

                        <div class="info_group">
                            <div class="heading_group">
                                <div class="heading">Estimates</div>
                            </div>
                            
                            <div class="">
                                <div class="group-copy"><span class="bold">Design:</span> {{ design_total }}</div>
                                <div class="group-copy"><span class="bold">Development:</span> {{ dev_total }}</div>
                                <div class="group-copy"><span class="bold">Testing & Deployment:</span> {{ platform.deploy }}</div>
                                <div class="group-copy"><span class="bold">Other Considerations:</span> {{ options_total }}</div>
                            </div>
                        </div>

                        <div class="end_group">
                            <div class="heading_group">
                                <div class="heading">Platform Total: {{ platform_total }}</div>
                                <div class="heading">Baseline Rate: ${{ platform_rate }}</div>
                            </div>

                            <div class="info_group">
                                <div class="description">We are developing a <span class="bold">{{ type_platform}}</span> platform.  Does this estimate make sense for the work our team has to complete?</div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section v-if="step == 4">
            <div class="large_heading_group">
                <div class="large_heading">What type of project or service?</div>
                <div class="large_description">We provide a la carte services and project tracks.  Estimates for each are available in the input placeholders.</div>
            </div>
            
            <div class="info_wrapper">
                <div class="frow justify-between">
                    <div class="info_single">
                        <div class="heading_group">
                            <div class="heading">A la carte services</div>
                        </div>
                        
                        <div class="service_group">
                            <div class="frow justify-start">
                                <label for="brand_design">Brand Design</label>
                                <input 
                                v-model="form.brand_design"
                                type="number" placeholder="20" class="form-control form-control-lg">
                            </div>
                        </div>

                        <div class="service_group">
                            <div class="frow justify-start">
                                <label for="content_strategy">Content Strategy</label>
                                <input 
                                v-model="form.content_strategy"
                                type="number" placeholder="20" class="form-control form-control-lg">
                            </div>
                        </div>

                        <div class="service_group">
                            <div class="frow justify-start">
                                <label for="research_insights">Research Insights</label>
                                <input 
                                v-model="form.research_insights"
                                type="number" placeholder="20" class="form-control form-control-lg">
                            </div>
                        </div>

                        <div class="service_group">
                            <div class="frow justify-start">
                                <label for="platforms">E-commerce Platforms</label>
                                {{ platform_total }}
                            </div>
                        </div>

                        <div class="service_group">
                            <div class="frow justify-start">
                                <label for="activations">Brand Activations</label>
                                <input 
                                v-model="form.activations"
                                type="number" placeholder="125" class="form-control form-control-lg">
                            </div>
                            
                        </div>

                        <div class="service_group">
                            <div class="frow justify-start">
                                <label for="activations">Marketing Campaigns</label>
                                <input 
                                v-model="form.campaigns"
                                type="number" placeholder="80" class="form-control form-control-lg">
                            </div>
                            
                        </div>

                        <div class="service_group">
                            <div class="frow justify-start">
                                <label for="consulting">Consulting</label>
                                <input 
                                v-model="form.consulting"
                                type="number" placeholder="25" class="form-control form-control-lg">
                            </div>
                        </div>
                    </div>
                    <div class="info_single">
                        <div class="heading_group">
                            <div class="heading">Tracks</div>
                        </div>
                        
                        <div class="service_group">
                            <div class="frow justify-start">
                                <label for="brand_foundation">Brand Foundation</label>
                                <input 
                                v-model="form.brand_foundation"
                                type="number" placeholder="220" class="form-control form-control-lg">
                            </div>
                            
                        </div>

                        <div class="service_group">
                            <div class="frow justify-start">
                                <label for="brand_mgmt">Brand Management</label>
                                <input 
                                v-model="form.brand_mgmt"
                                type="number" placeholder="120" class="form-control form-control-lg">
                            </div>
                        </div>

                        <div class="service_group">
                            <div class="frow justify-start">
                                <label for="brand_operations">Brand Operations</label>
                                <input 
                                v-model="form.brand_operations"
                                type="number" placeholder="120" class="form-control form-control-lg">
                            </div>
                        </div>

                        <div class="service_group">
                            <div class="frow justify-start">
                                <label for="brand_transitions">Brand Transitions</label>
                                <input 
                                v-model="form.brand_transitions"
                                type="number" placeholder="220" class="form-control form-control-lg">
                            </div>
                        </div>

                        <div class="end_group">
                            <div class="heading">Total Value: {{ service_total }}</div>
                            <div class="heading">Baseline Rate: ${{ rate_service }}</div>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>

        <section v-if="step == 5">
            <div class="large_heading_group">
                <div class="large_heading">Decision Factors</div>
                <div class="large_description">These two factors help us determine if this project is right for our team.  Our goal is to do impactful work and not put too much demand on our team.  Innovation is important, we can’t compromise that.  Does this project make sense for us?</div>
            </div>
        
            <div class="info_wrapper">
                <div class="frow justify-start">
                    <div class="info_single">
                        <div class="heading_group">
                            <div class="heading">Impact Rate</div>
                            <div class="description">The impact value determines how much this work will impact the brand's ability to make money.</div>
                        </div>
                        
                        <select class="form_select" v-model="impact_rate">
                            <option disabled value="">Please select one</option>
                            <option v-bind:value="0">Lightly Impacts</option>
                            <option v-bind:value="5">Moderately Impacts</option>
                            <option v-bind:value="10">Heavily Impacts</option>
                        </select>
                    </div>
                    <div class="info_single">
                        <div class="heading_group">
                            <div class="heading">Timeline Rate</div>
                            <div class="description">Based on our suggested timelines for our service offerings, does the client want to honor our timeline estimates?</div>
                        </div>
                        
                        <div class="radio_group">
                            <div class="frow justify-start">
                                <input type="radio" name="radio" id="one" value="0" v-model="timeline_rate"><label for="one">Not Expedited</label>
                            </div>
                            
                            <div class="frow justify-start">
                                <input type="radio" name="radio" id="two" value="5" v-model="timeline_rate"><label for="two">Two Weeks Expedited</label>
                            </div>
    
                            <div class="frow justify-start">
                                <input type="radio" name="radio" id="three" value="10" v-model="timeline_rate"><label for="three">30 Days Expedited</label>
                            </div>
                        </div>
                        
                        <div class="end_group">
                            <div class="heading">Impact Rate: {{ impact_rate }}</div>
                            <div class="heading">Timeline Rate: {{ timeline_rate }}</div>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
        
        <section v-if="step == 6">
            <div class="large_heading_group">
                <div class="large_heading">The Estimate is in!</div>
                <div class="large_description">We have looked at all factors, now it's time to figure out if this project is right for us.  Here is what we know so far:</div>
            </div>
            
            <div class="info_wrapper">
                <div class="frow justify-start">
                    <div class="info_single">
                        <div class="info_group">
                            <div class="heading_group">
                                <div class="heading">Project Information</div>
                            </div>
                            
                            <div class="group-copy">
                                <span class="bold">Business Name:</span> {{ form.business_name }}
                            </div>
                            <div class="group-copy">
                                <span class="bold">Agency Rate:</span> ${{ form.rate }}
                            </div>
                            <div class="group-copy">
                                <span class="bold">Established Business:</span> {{ established }}
                            </div>
                            <div class="group-copy">
                                <span class="bold">Industry:</span> {{ business_industry }}
                            </div>
                            <div class="group-copy">
                                <span class="bold">Business Impact:</span> {{ impact_rate }}
                            </div>
                            <div class="group-copy">
                                <span class="bold">Timeline Impact:</span> {{ timeline_rate }}
                            </div>
                        </div>
                        <div class="info_group">
                            <div class="heading_group">
                                <div class="heading">Interested Services:</div>
                            </div>
                            
                            <div class="group_copy" v-if="form.brand_design != null">Brand Design: {{ form.brand_design }}</div>
                            <div class="group_copy" v-if="form.research_insights != null">Research & Insights: {{ form.research_insights }}</div>
                            <div class="group_copy" v-if="form.content_strategy != null">Content Strategy: {{ form.content_strategy }}</div>
                            <div class="group_copy" v-if="platform_total != 0">Platforms: {{ platform_total }}</div>
                            <div class="group_copy" v-if="form.campaigns != null">Marketing Campaign: {{ form.campaigns }}</div>
                            <div class="group_copy" v-if="form.activations != null">Activations: {{ form.activations }}</div>
                            <div class="group_copy" v-if="form.consulting != null">Consulting: {{ form.consulting }}</div>
                            <div class="group_copy" v-if="form.brand_foundation != null">Brand Foundation: {{ form.brand_foundation }}</div>
                            <div class="group_copy" v-if="form.brand_mgmt != null">Brand Management: {{ form.brand_mgmt }}</div>
                            <div class="group_copy" v-if="form.brand_operations != null">Brand Operations: {{ form.brand_operations }}</div>
                            <div class="group_copy" v-if="form.brand_transitions != null">Brand Transitions: {{ form.brand_transitions }}</div>
                        </div>
                    </div>
                    <div class="info_single">
                        <div class="info_group">
                            <div class="heading_group">
                                <div class="heading">Project Estimates</div>
                                <div class="description">We have three estimates below that gives us a full landscape of this opportunity.  Choose wisely.</div>
                            </div>
                            
                            <div class="group_copy">
                                Low Estimate: ${{ low_estimate }}
                            </div>
                            <div class="group_copy">
                                Median Estimate: ${{ median_estimate }}
                            </div>
                            <div class="group_copy">
                                High Estimate: ${{ high_estimate }}
                            </div>
                        </div>
                        <div class="info_group">
                            <div class="heading_group">
                                <div class="heading">Payment Options</div>
                                <div class="description">The payment options are listed below.  The options cover the range of low to high rates.</div>
                            </div>
                            
                            <div class="group_small">
                                <div class="group_copy_small">
                                    Suggested Monthly Payment: ${{ deposit_monthly_low }} &ndash; ${{ deposit_monthly_high }}
                                </div>
                                <div class="group_copy_small">
                                    Suggested 50% Deposit: ${{ deposit_half_low }} &ndash; ${{ deposit_half_high }}
                                </div>
                                <div class="group_copy_small">
                                    Suggested 25% Deposit: ${{ deposit_quarter_low }} &ndash; ${{ deposit_quarter_high }}
                                </div>
                            </div>
                        </div>
                        <div class="end_group">
                            <div class="heading_group">
                                <div class="heading">Other Notes:</div>
                                <div class="description">Miscellaneous information for Account Manager. Suggested profit is based on median estimate.</div>
                            </div>
            
                            <div class="group_small">
                                <div class="group_copy_small">Total Value: {{ service_total }}</div>
                                <div class="group_copy_small">Ultra Value: {{ ultra_value }}</div>
                                <div class="group_copy_small">Suggested Profit Margin: 65%</div>
                                <div class="group_copy_small">Suggested Profit: ${{ profit }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section v-if="step == 7">
            <div class="large_heading_group">
                <div class="large_heading">Preparing the Proposal</div>
                <div class="large_description">A few more questions to help us gather our project estimate for our client.  Once the next page loads, print and save as PDF.</div>
            </div>
            
            <div class="info_wrapper">
                <div class="frow justify-start">
                    <div class="info_single">
                        <div class="info_group">
                            <div class="heading_group">
                                <div class="heading">Reminder of Estimates</div>
                                <div class="description">
                                    We have three estimates below that gives us a full landscape of this opportunity.  Choose wisely.
                                </div>
                            </div>
                            
                            <div class="group_copy">
                                Low Estimate: ${{ low_estimate }}
                            </div>
                            <div class="group_copy">
                                Median Estimate: ${{ median_estimate }}
                            </div>
                            <div class="group_copy">
                                High Estimate: ${{ high_estimate }}
                            </div>
                            <div class="group_small">
                                <div class="group_copy_small">
                                    Suggested Monthly Payment: ${{ deposit_monthly_low }} &ndash; ${{ deposit_monthly_high }}
                                </div>
                                <div class="group_copy_small">
                                    Suggested 50% Deposit: ${{ deposit_half_low }} &ndash; ${{ deposit_half_high }}
                                </div>
                                <div class="group_copy_small">
                                    Suggested 25% Deposit: ${{ deposit_quarter_low }} &ndash; ${{ deposit_quarter_high }}
                                </div>
                            </div>
                        </div>

                        <div class="info_group">
                            <div class="heading_group">
                                <div class="heading">Project Estimate</div>
                            </div>
                            
                            <div class="group">
                                <div class="frow justify-start">
                                    <label class="project_estimate_label">Our Estimate</label>
                                    <input 
                                    v-model="project_estimate"
                                    type="number" placeholder="20" class="form-control form-control-lg">
                                </div>
                                <div class="frow justify-start">
                                    <label class="project_estimate_label">Projected Timeline</label>
                                    <input 
                                    v-model="project_timeline"
                                    type="text" placeholder="2 weeks" class="form-control form-control-lg">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="info_single">
                        <div class="info_group">
                            <div class="heading_group">
                                <div class="heading">Payment Options</div>
                                <div class="description">Select a payment option for this project.</div>
                            </div>
                            
                            <div class="group">
                                <div class="frow justify-start">
                                    <select v-model="payment_option" class="long_select">
                                        <option disabled value="">Select Payment Option</option>
                                        <option>50% Deposit</option>
                                        <option>25% Deposit</option>
                                        <option>First Month's Deposit</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="info_group">
                            <div class="heading_group">
                                <div class="heading">Account Manager</div>
                                <div class="description">Who will be working with the client into the onboarding process.</div>
                            </div>
                            
                            <div class="group">
                                <div class="frow justify-start">
                                    <select v-model="account_manager" class="long_select">
                                        <option disabled value="">Select Account Manager</option>
                                        <option>Montier Kess</option>
                                        <option>Chavon Henderson</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>

        <section v-if="step == 8">
            <div class="large_heading_group">
                <div class="large_heading">SVNCRWNS Project Proposal</div>
                <div class="large_description">Thank you for selecting our team to work with you in this phase of your business journey.  Please review our proposal details below.</div>
                <div class="group_copy_small">Proposal Issued: {{ timestamp }}</div>
            </div>
            
            <div class="info_wrapper">
                <div class="frow justify-start">
                    <div class="info_single">
                        <div class="info_group">
                            <div class="heading_group">
                                <div class="heading">Client Information</div>
                            </div>
                            
                            <div class="group-copy">
                                Client Name: {{ form.client_name }}
                            </div>
                            <div class="group-copy">
                                Business Name: {{ form.business_name }}
                            </div>
                        </div>
                        <div class="info_group">
                            <div class="heading_group">
                                <div class="heading">Contact Information</div>
                            </div>
                            <div class="group-copy">
                                Account Manager: 
                                
                                <div class="bold">
                                    {{ account_manager }}
                                </div>
                            </div>
                            <br/>
                            <div class="group-copy">
                                {{ business_email }}
                            </div>
                            <div class="group-copy">
                                {{ business_website }}
                            </div>
                            
                            
                        </div>
                    </div>
                    <div class="info_single">
                        <div class="info_group">
                            <div class="heading_group">
                                <div class="heading">Project Information</div>
                                <div class="description">{{ form.business_opportunity}}</div>
                            </div>
                        </div>
                        <div class="info_group">
                            <div class="heading_group">
                                <div class="heading">Services</div>
                            </div>
                            
                            <div class="group_copy" v-if="form.brand_design != null">Brand Design: {{ form.brand_design }}</div>
                            <div class="group_copy" v-if="form.research_insights != null">Research & Insights: {{ form.research_insights }}</div>
                            <div class="group_copy" v-if="form.content_strategy != null">Content Strategy: {{ form.content_strategy }}</div>
                            <div class="group_copy" v-if="platform_total != 0">Platforms: {{ platform_total }}</div>
                            <div class="group_copy" v-if="form.campaigns != null">Marketing Campaign: {{ form.campaigns }}</div>
                            <div class="group_copy" v-if="form.activations != null">Activations: {{ form.activations }}</div>
                            <div class="group_copy" v-if="form.consulting != null">Consulting: {{ form.consulting }}</div>
                            <div class="group_copy" v-if="form.brand_foundation != null">Brand Foundation: {{ form.brand_foundation }}</div>
                            <div class="group_copy" v-if="form.brand_mgmt != null">Brand Management: {{ form.brand_mgmt }}</div>
                            <div class="group_copy" v-if="form.brand_operations != null">Brand Operations: {{ form.brand_operations }}</div>
                            <div class="group_copy" v-if="form.brand_transitions != null">Brand Transitions: {{ form.brand_transitions }}</div>
                            
                            <div class="group">
                                Project Timeline: {{ project_timeline }}
                            </div>
                        </div>
                        <div class="info_group">
                            <div class="heading_group">
                                <div class="heading">Project Estimate</div>
                            </div>
                            
                            <div class="group_small">
                                ${{ project_estimate }}
                            </div>
                        </div>
                        <div class="info_group">
                            <div class="heading_group">
                                <div class="heading">Payment Information</div>
                                <div class="description">Please submit your project deposit to begin work.</div>
                            </div>
                            
                            <div class="group_small">
                                <div v-if="payment_option === 'estimate_deposit_half'">
                                    ${{ estimate_deposit_half }}
                                </div>
                                <div v-else-if="payment_option === 'estimate_deposit_quarter'">
                                    ${{ estimate_deposit_quarter}}
                                </div>
                                <div v-else-if="payment_option === 'estimate_deposit_monthly'">
                                    ${{ estimate_deposit_monthly }}
                                </div>
                                <div v-else>
                                    A payment option was not selected.
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="button_wrapper">
            <div class="frow justify-start">
                <button 
                v-if="step != 1"
                @click.prevent="prevStep"
                class="prev_button">Previous Step</button>

                <button 
                v-if="step != totalsteps"
                @click.prevent="nextStep"
                class="next_button">Next Step</button>

                <button v-if="step != 1"
                class="button is-warning reset_button" @click="resetForm()">Reset Form</button>

                <button v-if="step == 3"
                class="button is-warning print_button" @click.prevent="printWindow">Print Form</button>

                <button v-if="step == 8"
                class="button is-warning print_button" @click.prevent="printWindow">Print Form</button>

                <!-- <button v-if="step == 1"
                class="button is-warning" @click.prevent="nextStep">Get Started</button> -->
            </div>
            
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CustomProposal',
        data() {
            return {
                step: 1,
                totalsteps: 8,
                impact_rate: '',
                timeline_rate: '',
                business_industry: '',
                established: '',
                type_platform: '',
                project_timeline: '',
                project_estimate: '',
                account_manager: '',
                timestamp: '',
                business_email: 'studio@svncrwns.com',
                business_website: 'www.svncrwns.com',
                project_deposit: '',
                payment_option: '',

                form: {
                    brand_design: null,
                    research_insights: null,
                    content_strategy: null,
                    campaigns: null,
                    activations: null,
                    consulting: null,
                    brand_foundation: null,
                    brand_mgmt: null,
                    brand_operations: null,
                    brand_transitions: null,
                    rate: null,
                    client_name: null,
                    business_name: null,
                    business_opportunity: null
                },

                platform: {
                    home_design: null,
                    home_dev: null,
                    about_design: null,
                    about_dev: null,
                    shop_allprod_design: null,
                    shop_allprod_dev: null,
                    shop_allcoll_design: null,
                    shop_allcoll_dev: null,
                    shop_singlecoll_design: null,
                    shop_singlecoll_dev: null,
                    product_single_design: null,
                    product_single_dev: null,
                    cust_serv_design: null,
                    cust_serv_dev: null,
                    policies_design: null,
                    policies_dev: null,
                    contact_design: null,
                    contact_dev: null,
                    services_design: null,
                    services_dev: null,
                    work_design: null,
                    work_dev: null,
                    work_single_design: null,
                    work_single_dev: null,
                    faqs_design: null,
                    faqs_dev: null,
                    cart_design: null,
                    cart_dev: null,
                    newsletter_design: null,
                    newsletter_dev: null,
                    blog_design: null,
                    blog_dev: null,
                    stockist_design: null,
                    stockist_dev: null,
                    lookbook_design: null,
                    lookbook_dev: null,
                    custom_1_design: null,
                    custom_1_dev: null,
                    custom_2_design: null,
                    custom_2_dev: null,
                    custom_3_design: null,
                    custom_3_dev: null,
                    deploy: null,
                    meetings: null,
                    project_setup: null,
                    accts_setup: null,
                    product_uploads: null
                }

            }   
        },
        created() {
            setInterval(this.getNow, 1000);
        },

        computed: {
            
            service_total() {
                return Number(this.form.brand_design) + Number(this.form.research_insights) + Number(this.form.content_strategy) + Number(this.platform_total) + Number(this.form.campaigns) + Number(this.form.activations) + Number(this.form.consulting) + Number(this.form.brand_foundation) + Number(this.form.brand_mgmt) + Number(this.form.brand_operations) + Number(this.form.brand_transitions);

                // return false;
            },

            rate_service() {
                return this.service_total * Number(this.form.rate);                    
            },

            ultra_value() {
                return Number(this.impact_rate) + Number(this.timeline_rate) + this.service_total;
            },

            low_estimate() {
                return this.ultra_value * Number(this.form.rate) * 0.75;
            },

            median_estimate() {
                return this.ultra_value * Number(this.form.rate) * 1;
            },

            high_estimate() {
                return this.ultra_value * Number(this.form.rate) * 1.25;
            },
            deposit_monthly_low() {
                return this.low_estimate / 12;
            },
            deposit_monthly_high() {
                return this.high_estimate / 12;
            },
            deposit_half_low() {
                return this.low_estimate * 0.5;
            },
            deposit_half_high() {
                return this.high_estimate * 0.5;
            },
            deposit_quarter_low() {
                return this.low_estimate * 0.25;
            },
            deposit_quarter_high() {
                return this.high_estimate * 0.25;
            },
            profit() {
                return this.median_estimate * 0.65;
            },
            platform_total() {
                return Number(this.platform.home_design) + Number(this.platform.home_dev) + Number(this.platform.about_design) + Number(this.platform.about_dev) + Number(this.platform.shop_allprod_design) + Number(this.platform.shop_allprod_dev) + Number(this.platform.shop_allcoll_design) + Number(this.platform.shop_allcoll_dev) + Number(this.platform.shop_singlecoll_design) + Number(this.platform.shop_singlecoll_dev) + Number(this.platform.product_single_design) + Number(this.platform.product_single_dev) + Number(this.platform.cust_serv_design) + Number(this.platform.cust_serv_dev) + Number(this.platform.policies_design) + Number(this.platform.policies_dev) + Number(this.platform.contact_design) + Number(this.platform.contact_dev) + Number(this.platform.services_design) + Number(this.platform.services_dev) + Number(this.platform.work_design) + Number(this.platform.work_dev) + Number(this.platform.work_single_design) + Number(this.platform.work_single_dev) + Number(this.platform.faqs_design) + Number(this.platform.faqs_dev) + Number(this.platform.cart_design) + Number(this.platform.cart_dev) + Number(this.platform.newsletter_design) + Number(this.platform.newsletter_dev) + Number(this.platform.blog_design) + Number(this.platform.blog_dev) + Number(this.platform.stockist_design) + Number(this.platform.stockist_dev) + Number(this.platform.lookbook_design) + Number(this.platform.lookbook_dev) + Number(this.platform.custom_1_design) + Number(this.platform.custom_1_dev) + Number(this.platform.custom_2_design) + Number(this.platform.custom_2_dev) + Number(this.platform.custom_3_design) + Number(this.platform.custom_3_dev) + Number(this.platform.deploy) + Number(this.platform.meetings) + Number(this.platform.project_setup) + Number(this.platform.accts_setup) + Number(this.platform.product_uploads);
            },
            platform_rate() {
                return this.platform_total * this.form.rate;
            },
            design_total() {
                return Number(this.platform.home_design) + Number(this.platform.about_design) + Number(this.platform.shop_allprod_design) + Number(this.platform.shop_allcoll_design) + Number(this.platform.shop_singlecoll_design) + Number(this.platform.product_single_design) + Number(this.platform.cust_serv_design) + Number(this.platform.policies_design) + Number(this.platform.contact_design) + Number(this.platform.services_design) + Number(this.platform.work_design) + Number(this.platform.work_single_design) + Number(this.platform.faqs_design) + Number(this.platform.cart_design) + Number(this.platform.newsletter_design) + Number(this.platform.blog_design) + Number(this.platform.stockist_design) + Number(this.platform.lookbook_design) + Number(this.platform.custom_1_design) + Number(this.platform.custom_2_design) + Number(this.platform.custom_3_design);
            },
            dev_total() {
                return Number(this.platform.home_dev) + Number(this.platform.about_dev) + Number(this.platform.shop_allcoll_dev) + Number(this.platform.shop_allprod_dev) + Number(this.platform.shop_singlecoll_dev) + Number(this.platform.product_single_dev) + Number(this.platform.cust_serv_dev) + Number(this.platform.policies_dev) + Number(this.platform.contact_dev) + Number(this.platform.services_dev) + Number(this.platform.work_dev) + Number(this.platform.work_single_dev) + Number(this.platform.faqs_dev) + Number(this.platform.cart_dev) + Number(this.platform.newsletter_dev) + Number(this.platform.blog_dev) + Number(this.platform.stockist_dev) + Number(this.platform.lookbook_dev) + Number(this.platform.custom_1_dev) + Number(this.platform.custom_2_dev) + Number(this.platform.custom_3_dev);
            },
            options_total() {
                return Number(this.platform.meetings) + Number(this.platform.project_setup) + Number(this.platform.accts_setup) + Number(this.platform.product_uploads);
            },
            estimate_deposit_monthly() {
                return Number(this.project_estimate) / 12;
            },
            estimate_deposit_half() {
                return Number(this.project_estimate) * 0.5;
            },
            estimate_deposit_quarter() {
                return Number(this.project_estimate) * 0.25;
            }
        },

        methods: {

            prevStep: function()
            {
                this.step--;
            },
            nextStep: function()
            {
                
                this.step++;
            },
            sendInquiry: function()
            {
                alert('this has been sent!');
            },
            resetForm() {
                console.log('Reseting the form')
                var self = this; //you need this because *this* will refer to Object.keys below`

                //Iterate through each object field, key is name of the object field`
                Object.keys(this.data.form).forEach(function(key) {
                self.data.form[key] = '';
                });
            },
            printWindow: function () {		
                window.print();
            },
            getNow: function() {
                const today = new Date();
                const date = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();
                this.timestamp = date;
            }

        },
        mounted(){}
    }
</script>

<style lang="scss">
@import "../scss/_variables.scss";
@import "../scss/_layout.scss";
@import "../scss/_components.scss";
</style>