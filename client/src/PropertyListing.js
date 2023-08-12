// import React from 'react'
// import './PropertyListing.css'

// const PropertyListing = () => {

// const handleSubmit = (e) => {
//   e.preventDefault();
//   const formData = new FormData(e.target);
//   console.log("Form Data:", formData);
// };
//   return (
//     <div>
//  <form onSubmit={handleSubmit}>
//        <div id="root">
//       <div className="box-shadow-aligment">
//         <section className="full-aligment">
//           <div className="post__box">
//             <h1 className="h1">Post Property</h1>
//             <span className="sr-spam dB"
//               >Sell/Rent your property in Simple Steps</span
//             >
//           </div>
//           <div className="post__box dashed">
//             <h3 className="font-size-weight h3__heading" id="js-about-property">
//               Tell us about your property
//             </h3>
//             <div className="list-property pR">
//               <span className="dB bt2">List property for*</span>
//               <div className="oH">
//                 <div className="property-padding">
//                   <label className="pR dIB"
//                     ><input type="radio" name="intent" value="SELL" className=
//                     "checked dN" /><span className="radio-button-full taC dIB cP"
//                       >Sell</span
//                     ></label
//                   ><label className="pR dIB"
//                     ><input type="radio" name="intent" value="RENT" className=
//                     "checked dN" /><span className="radio-button-full taC dIB cP">Rent</span></label>
//                 </div>
//               </div>
//             </div>
//             <div className="list-property pR">
//               <span className="dB bt2">Property Type*</span>
//               <div className="oH">
//                 <div className="property-padding">
//                   <label className="pR dIB"
//                     ><input type="radio" name="property_type" value="APARTMENT"
//                     className= "checked dN" /><span
//                       className="radio-button-full taC dIB cP"
//                       >Apartment</span
//                     ></label
//                   ><label className="pR dIB"
//                     ><input type="radio" name="property_type"
//                     value="BUILDER_FLOOR" className= "checked dN" /><span
//                       className="radio-button-full taC dIB cP"
//                       >Builder Floor</span
//                     ></label
//                   ><label className="pR dIB"
//                     ><input type="radio" name="property_type" value="PLOT"
//                     className= "checked dN" /><span
//                       className="radio-button-full taC dIB cP"
//                       >Plot</span
//                     ></label
//                   ><label className="pR dIB"
//                     ><input type="radio" name="property_type"
//                     value="HOUSE_VILLA" className= "checked dN" /><span
//                       className="radio-button-full taC dIB cP"
//                       >House/Villa</span
//                     ></label
//                   >
//                 </div>
//               </div>
//             </div>
//             <div className="max__width">
//               <div className="pR">
//                 <div className="pR">
//                   <div className="lH pR dFA w100">
//                     <input
//                       type="date"
//                       className="input-number-design w100 outN"
//                       min="2023-08-05"
//                       name="available_from"
//                       required=""
//                       rows="1"
//                     /><label className="label-design pA" for="available_from"
//                       >Available from</label
//                     >
//                   </div>
//                 </div>
//                 <span className="date-svg pA peN"
//                   ><svg width="20">
//                     <path
//                       d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"
//                     ></path>
//                     <path
//                       d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
//                     ></path></svg
//                 ></span>
//               </div>
//               <div className="property-details-design cP pR">Property Details*</div>
//             </div>
//           </div>
//           <div className="post__box">
//             <h3 className="font-size-weight h3__heading">
//               Add Photos of your property
//             </h3>
//             <div className="fwW dF">
//               <div className="image-view dIB jcC pR fdC oH dFA">
//                 <input type="file" className="cP pA o0" multiple /><svg
//                   width="32"
//                   viewBox="0 0 72 72"
//                   className="image-view-color"
//                 >
//                   <path
//                     d="M23.81,45.14c0,6.73,5.46,12.19,12.19,12.19s12.19-5.46,12.19-12.19S42.73,32.95,36, 32.95 C29.27,32.96,23.82,38.41,23.81,45.14z M36,37.02c4.49,0,8.12,3.64,8.12,8.12s-3.64, 8.13-8.12,8.13s-8.13-3.64-8.13-8.13 S31.51,37.02,36,37.02z M60.37, 28.89v4.06h-8.12v-4.06H60.37z M64.44,37.02h4.06v4.06h-4.06V37.02z M64.44, 45.14h4.06v4.06h-4.06 V45.14z M68.5, 20.77v12.19h-4.06v-8.13H46.6l-2.03-8.12H36v-4.06h11.74l2.03,8.13H68.5z M64.44,53.27h4.06v12.19h-65V34.98h4.06 v26.41h56.87V53.27z M11.63, 34.98h12.19v-8.12h8.13V14.67h-8.13V6.55H11.63v8.12H3.5v12.19h8.13V34.98z M7.56,22.8v-4.06h8.13v-8.12 h4.06v8.12h8.12v4.06h-8.12v8.13h-4.06V22.8H7.56z"
//                   ></path></svg
//                 ><span className="dB">Add Photos</span>
//               </div>
//             </div>
//             <p className="p-font p-color">
//               <b
//                 >Photos
//                 0/15</b
//               >
//               Increase your chances of getting genuine responses by adding
//               atleast 5 images. <br />
//               Hall, Bedroom, Kitchen, and Bathroom images will be ideal to add
//               for a home
//             </p>
//           </div>
//           <div className="dashed post__box">
//             <h3 className="font-size-weight h3__heading">Property Price</h3>
//             <div className="price-design dF fwW">
//               <div className="price-input">
//                 <div className="mG30">
//                   <div className="pR">
//                     <div className="lH48 pR dFA w100">
//                       <input
//                         type="number"
//                         className="input-number-design w100 outN"
//                         maxlength="11"
//                         name="price"
//                         required
//                         rows="1"
//                       /><label className="label-design pA" for="price"
//                         >Sale Price*</label
//                       >
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="price-design dF fwW">
//               <div className="price-check">
//                 <div>
//                   <label className="price-check-design pR dIB"
//                     ><input
//                       type="checkbox"
//                       className="check-box-design pA dB m0 br50 outN peN"
//                       name="is_negotiable"
//                     /><span className="full-check-design dF cP"
//                       >Price is negotiable</span
//                     ></label
//                   >
//                 </div>
//               </div>
//               <div>
//                 <label className="pR dIB"
//                   ><input
//                     type="checkbox"
//                     className="check-box-design pA dB m0 br50 outN peN"
//                     name="include_registration"
//                   /><span className="full-check-design full-check-design1 dF cP"
//                     >Price includes registration</span
//                   ></label
//                 >
//               </div>
//             </div>
//           </div>
//           <div className="post__box dashed">
//             <h3 className="font-size-weight h3__heading">
//               More Information of your property
//             </h3>
//             <div className="postad__boxrow">
//               <div className="pR">
//                 <div className="lH48 pR dFA w100">
//                   <textarea
//                     className="text-area-design w100 outN"
//                     type="text"
//                     name="description"
//                     required=""
//                     rows="4"
//                   ></textarea
//                   ><label className="label-design pA" for="description"
//                     >About property (Min 30 characters)*</label
//                   >
//                 </div>
//               </div>
//             </div>
//             <div className="max__width"></div>
//             <div className="list-property pR">
//               <span className="dB bt2">Furnishing*</span>
//               <div className="oH">
//                 <div className="property-padding">
//                   <label className="pR dIB"
//                     ><input type="radio" name="furnished" value="NOT" className=
//                     "checked dN" /><span className="radio-button-full taC dIB cP"
//                       >Unfurnished</span
//                     ></label
//                   ><label className="pR dIB"
//                     ><input type="radio" name="furnished" value="SEMI" className=
//                     "checked dN" /><span className="radio-button-full taC dIB cP"
//                       >Semi Furnished</span
//                     ></label
//                   ><label className="pR dIB"
//                     ><input type="radio" name="furnished" value="FULLY" className=
//                     "checked dN" /><span className="radio-button-full taC dIB cP"
//                       >Fully Furnished</span
//                     ></label
//                   >
//                 </div>
//               </div>
//             </div>
//             <div className="list-property pR">
//               <span className="dB bt2">No of Bathrooms*</span>
//               <div className="oH">
//                 <div className="property-padding">
//                   <label className="pR dIB"
//                     ><input type="radio" name="bathroom" value="1" className=
//                     "checked dN" /><span className="radio-button-full taC dIB cP"
//                       >1</span
//                     ></label
//                   ><label className="pR dIB"
//                     ><input type="radio" name="bathroom" value="2" className=
//                     "checked dN" /><span className="radio-button-full taC dIB cP"
//                       >2</span
//                     ></label
//                   ><label className="pR dIB"
//                     ><input type="radio" name="bathroom" value="3" className=
//                     "checked dN" /><span className="radio-button-full taC dIB cP"
//                       >3</span
//                     ></label
//                   ><label className="pR dIB"
//                     ><input type="radio" name="bathroom" value="4" className=
//                     "checked dN" /><span className="radio-button-full taC dIB cP"
//                       >4</span
//                     ></label
//                   ><label className="pR dIB"
//                     ><input type="radio" name="bathroom" value="5" className=
//                     "checked dN" /><span className="radio-button-full taC dIB cP"
//                       >4+</span
//                     ></label
//                   >
//                 </div>
//               </div>
//             </div>
//             <div className="max__width">
//               <div className="Add-detail cP pR">Additional Details</div>
//               <div>
//                 <div className="postad__boxrow">
//                   <div
//                     className="add-detail-all pR dF fdC outN"
//                     tabindex="-1"
//                     id="sD"
//                   >
//                      <input
//                   type="text"
//                   className="add-detail-design w100 boN outN pR"
//                   name="name"
//                   required=""
//                   rows="1"
//                 />
//                   <label className="add-detail-all-design" tabindex="-1"
//                       >No of Balconies</label
//                     >
//                   </div>
//                 </div>

//                 <div className="postad__boxrow">
//                   <div
//                     className="add-detail-all pR dF fdC outN"
//                     tabindex="-1"
//                     id="sD"
//                   >     <input
//                   type="text"
//                   className="sc-1dhts6c-2 add-detail-design w100 boN outN pR"
//                   name="name"
//                   required=""
//                   rows="1"
//                 />
//                   <label
//                       className="sc-1dhts6c-3 add-detail-all-design"
//                       tabindex="-1"
//                       >Direction</label
//                     >
//                   </div>
//                 </div>
//                 <div className="max__width">
//                   <div
//                     className="add-detail-all pR dF fdC outN"
//                     tabindex="-1"
//                     id="sD"
//                   >
//                     <input
//                       type="number"
//                       className="sc-1dhts6c-2 add-detail-design w100 boN outN pR"
//                       name="name"
//                   required=""
//                   rows="1"
//                     /><label
//                       className="sc-1dhts6c-3 add-detail-all-design"
//                       tabindex="-1"
//                       >Parking</label
//                     >
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="dashed post__box">
//             <h3 className="font-size-weight h3__heading">Your Details</h3>
//             <div className="list-property pR">
//               <span className="dB bt2">You Are*</span>
//               <div className="oH">
//                 <div className="property-padding">
//                   <label className="pR dIB"
//                     ><input type="radio" name="user_type" value="INDIVIDUAL"
//                     className= "checked dN" /><span
//                       className="radio-button-full taC dIB cP"
//                       >Owner</span
//                     ></label
//                   ><label className="pR dIB"
//                     ><input type="radio" name="user_type" value="BROKER" className="
//                     checked dN" /><span className="radio-button-full taC dIB cP"
//                       >Agent</span
//                     ></label
//                   ><label className="pR dIB"
//                     ><input type="radio" name="user_type" value="BUILDER" className=
//                     "checked dN" /><span className="radio-button-full taC dIB cP"
//                       >Builder</span
//                     ></label
//                   >
//                 </div>
//               </div>
//             </div>
//             <div className="pR postad__boxrow">
//               <div className="lH48 pR dFA w100">
//                 <input
//                   type="text"
//                   className="input-number-design w100 outN"
//                   name="name"
//                   required=""
//                   rows="1"
//                 /><label className="label-design pA" for="name"
//                   >Full Name*</label
//                 >
//               </div>
//             </div>
//             <div className="pR postad__boxrow" required="">
//               <div className="lH48 pR dFA w100">
//                 <input
//                   type="text"
//                   className="input-number-design w100 outN"
//                   name="email"
//                   required=""
//                   rows="1"
//                 /><label className="label-design pA" for="email"
//                   >Email Address*</label
//                 >
//               </div>
//             </div>
//             <div className="pR max__width" required="">
//               <div className="lH48 pR dFA w100">
//                 <span className="n91 pA peN">+91</span
//                 ><input
//                   type="number"
//                   className="phone w100 outN"
//                   maxlength="10"
//                   name="mobile"
//                   required=""
//                   autocomplete="tel"
//                   rows="1"
//                 /><label className="phone-place pA" for="mobile"
//                   >Mobile Number*</label
//                 >
//               </div>
//             </div>
//           </div>
//           <div className="post-button">
//             <div className="mB30">
//               <p className="fx07 plc29">
//                 You will recieve notifications via SMS, Whatsapp, Email. You can
//                 change your preference later.
//               </p>
//             </div>
//             <button type="submit" className="post-btn post-btn1 bt1">
//               Post Ad Now
//             </button>
//             <p className="post-p taC taL">
//               By proceeding, you agree to our
//               <a
//                 className="wsN"
//                 href="/terms-conditions"
//                 target="_blank"
//                 rel="noreferrer"
//                 >Terms of use</a
//               >
//               &amp;
//               <a
//                 className="wsN"
//                 href="/privacy-policy"
//                 target="_blank"
//                 rel="noreferrer"
//                 >Privacy Policy</a
//               >
//             </p>
//           </div>
//         </section>
//       </div>
//     </div>
// </form>
//     </div>
//   )
// }

// export default PropertyListing
