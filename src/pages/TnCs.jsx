import './TnCs.css';
import { Link } from "react-router-dom";
import { BGWLogo } from '../components/Global/BGWLogo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

const TnCs = () => {
  return (
    <div className='tncs-ctn'>
      <Link to="/"><BGWLogo /></Link>
      <div className="tncs-heading">
        <h1>Terms and Conditions</h1>
      </div>

      <div className="tncs-body">
        <h2>General</h2>
        <p>
          These Standard Terms and Conditions of sale (“the Conditions”) apply to any sale of items, equipment or services of the BGW Group of Companies (“BGW”) or, where a quotation is made, shall form part of that quotation.
        </p>
        <p>
          BGW may vary the Conditions from time to time, and the Conditions as varied shall be published on the BGW website. The purchaser agrees that the ordering of any goods or services after the publication of the variation of the Conditions on the website will be an acceptance by the purchaser of the varied Conditions.
        </p>

        <p>
          No variation or cancellation of any of the Conditions shall be binding on BGW unless agreed by a responsible officer of BGW in writing. No agent or representative has the authority to waive or alter the Conditions.
        </p>

        <p>
          The purchaser or anyone purporting to act on behalf of the purchaser may place orders for goods or services with BGW by telephone, email, in writing or by facsimile transmission.
        </p>

        <h2>Precedence</h2>
        <p>
          In the event of a conflict between the Conditions and those which may be included in, or implied by, any document forming part of any enquiry, specification, order or contract then the Conditions shall prevail unless they are expressly varied by BGW in writing. If any Condition is contrary to or excluded by law then the Conditions shall be modified but only to the extent of excluding that part of the Conditions so affected.
        </p>

        <h2>Acceptance</h2>  
        <p>
          A quotation is not to be construed as an offer or obligation to sell and BGW reserves the right to decline any order for goods or services (either wholly or partially) at any time prior to the delivery of the goods or services, in which case BGW shall be under no obligation in respect of such order.
        </p>  

        <h2>Prices</h2>
        <p>
          All prices are subject to change without notice and orders are accepted by BGW on the condition that they will be invoiced at the prices ruling at the date of dispatch, but every endeavour will be made to give 30 days’ notice of any increase.
        </p>  

        <p>
          All prices shown in the published catalogues or price lists are recommended selling prices only and there is no obligation on the part of any reseller to maintain such prices.
        </p>

        <p>
          A quotation includes only such goods as are specified therein. BGW reserves the right to cancel any sale where goods offered ex stock have been previously sold or otherwise committed.
        </p>

        <p>
          A $20 surcharge may apply at the discretion of BGW if an order value is less than $100.
        </p>

        <h2>
          Terms Of Payment
        </h2>
        <p>
          The purchaser agrees to comply with the Conditions and payment for goods and services shall be made by the purchaser to BGW thirty (30) days from the end of the month of purchase, unless otherwise agreed in writing by BGW.
        </p>

        <h2>
          Delivery
        </h2>
        <p>
          BGW will endeavour to comply with the time of delivery of goods and services requested by the purchaser but delivery time is not guaranteed nor is time of the essence of the contract of sale of the goods and services. BGW will not be liable for any loss or damage of whatsoever nature arising out of a delay in delivery of goods or services. The delivery period quoted commences from the date BGW receives sufficient information to proceed with the supply or from the date BGW receives the purchaser’s written order, whichever is the later. Quoted delivery dates are subject to confirmation when placing the order.
        </p>

        <h2>
          Goods Returned For Credit
        </h2>

        <p>
          Goods will not be accepted for credit without prior approval of personnel at BGW’s nearest sales office.
        </p>

        <p>
          In the case of the return of buy-ins against the purchaser’s order, credit will only be allowed if the original manufacturer/supplier also accepts the return.
        </p>

        <p>
          All goods returned should be in their original containers and should not be shop soiled, obsolete or shop damaged. All such goods may be rejected or credited at a reduced rate.
        </p>

        <p>
          Cut lengths of cable will not be accepted for return under any circumstances.
        </p>

        <p>
          No claim will be recognized unless such claim is made within seven (7) days of delivery and in every case the original invoice number and date must be quoted.
        </p>

        <p>
          All goods approved for return shall be returned freight pre-paid and may be subject to a 15% restocking charge.
        </p>

        <h2>Cancellation</h2>
        <p>
          Any order may, at the option of BGW, be terminated in the event of insolvency of the purchaser or of execution being levied against any of the goods of the purchaser or the purchaser being placed into administration or liquidation, whether voluntary or otherwise, or of a mortgagee entering into possession of any assets of the purchaser or the purchaser’s credit worthiness or credit standing alters, in the opinion of BGW, from that disclosed in its application for credit.
        </p>

        <h2>Variation</h2>
        <p>
          A variation or cancellation of any order by the purchaser is subject to acceptance by BGW of such variation or cancellation and in the event of such agreement the purchaser hereby indemnifies BGW against any loss or damage as a result of such variation or cancellation.
        </p>

        <h2>Warranties Limited</h2>
        <p>
          BGW warrants that the goods it supplies shall be of good and merchantable quality and its liability shall be limited only to the repair or replacement of any faulty or defective goods in terms of the manufacturer’s warranty and BGW does not, unless specifically required by law, give any warranty beyond the manufacturer’s warranty, and in no event shall BGW be liable either under statute, in equity, in contract or tort (including in negligence) or otherwise for any direct or indirect special consequential or punitive loss or damages (including loss of income, profits or business, loss of goodwill or reputation or loss of value of intellectual property) to persons or property, whether foreseeable or unforeseeable, arising from or caused in any way by such goods.
        </p>

        <h2>Inspection</h2>
        <p>
          The purchaser has seven (7) days from the date of delivery of the goods within which to provide BGW with written noticed of any claim for alleged failure to comply with an order whether due to a shortfall, defect, incorrect delivery or otherwise. Should the purchaser fail to provide such written notice within the stipulated time period then BGW shall be deemed to have complied the purchaser’s order in all respects including delivery, quality and quantity.
        </p>

        <h2>Packing, Damage or Loss in Transit</h2>
        <p>
          BGW uses every care in packing but, unless otherwise agreed, shall not be liable for any loss or damage in transit, and any claim in relation to such loss or damage shall not be accepted by BGW and shall be a matter between the purchaser and the railway, shipping company or carrier. The purchaser shall inspect and check all goods received as soon as practicable upon unloading. No claim for shortage of goods shall be made to BGW after forty eight (48) hours of such inspection, and while BGW shall endeavour to rectify any shortage as soon as practicable after receipt of any claim, it shall not be liable in respect of such rectification.
        </p>

        <h2>
          Purchaser's Specifications
        </h2>
        <p>
          BGW shall be under no obligation to comply with any specification or drawings referred to in any order unless such specifications or drawings have been produced to BGW prior to delivery of goods and signed by BGW. Otherwise BGW does not warrant nor represent that the goods are fit for a particular purpose and the purchaser agrees that it does not rely on the skill and judgment of BGW in relation to the suitability of the goods for a particular purpose. All such warranties are hereby excluded to the maximum extent permitted by law.
        </p>

        <h2>Risk</h2>
        <p>
          All goods sold shall be at the risk of the purchaser from the time of dispatch of the goods by BGW for delivery to the purchaser and the purchaser shall be solely responsible for insuring the goods in transit.
        </p>

        <h2>Credit</h2>
        <p>
          BGW may at any time suspend or vary any credit extended to the purchaser or withhold the delivery of goods or services already ordered as BGW in its sole and absolute discretion determines.
        </p>

        <h2>Default of Purchaser</h2>
        <p>
          The purchaser expressly agrees that if the purchaser fails to pay BGW the invoiced price of any goods and services by the due date for payment, then BGW:shall have the immediate right to bring an action against the purchaser for payment of the invoice price of the said goods and services, notwithstanding that ownership and property in the said goods and services shall not have passed to the customer;may refuse to supply any other goods and services to the purchaser; may claim the return of any goods in the possession of the purchaser where title in such goods has not passed to the purchaser;may determine the contract and/or suspend manufacture or delivery, installation, commissioning or testing of any goods then outstanding; may retain any security given or money paid by the purchaser or available through enforcement of guarantee or security bonds lodged and may apply such security or money against the loss and damages incurred by the failure of the purchaser to pay; may withdraw or vary any credit extended to the purchaser without notice to the purchaser;may without notice make all moneys owing by the purchaser to BGW on any account immediately due and payable;may take such steps as it deems necessary to mitigate any damage suffered including the putting to use, hiring out, sale or disposal of any goods in its possession supplied or to be supplied to the purchaser; andmay charge interest on overdue accounts at the rate not exceeding the standard overdraft rate offered by the Commonwealth bank of Australia on the day of calculation.
        </p>

        <h2>Retention Of Title</h2>
        <p>
          (i) The legal and equitable title in the goods will only pass to the purchaser when all moneys owing by the purchaser to BGW on any account whatsoever have been paid in full. Pursuant to the terms of and as defined by the Personal Property Securities Act 2009 (Cwth,)(“PPSA”) the purchaser grants to BGW a security interest in the goods to secure payment of the moneys owing which is a purchase money security interest to the extent to which it secures payment of such moneys owing and consents to BGW registering this security interest under the PPSA and waives any right to receive notice of such registration. The purchaser must not do or permit anything to be done which may result in the purchase money security interest granted to BGW ranking in priority behind any other security interest. (ii) Until such payment in full, the purchaser acknowledges that the goods are held by the purchaser as bailee for BGW and that a fiduciary relationship exists between BGW and the purchaser in relation to the goods, which must be stored separately as a fiduciary of BGW in good condition and in such a way which clearly indicates the ownership of BGW in the goods. (iii) While BGW retains title in the goods the purchaser shall not bail, pledge, mortgage, charge, obtain or grant a lien over, lease or assign by any other way the goods or any security in the goods. (iv) The purchaser irrevocably authorises BGW by its servants or agents to enter to enter upon any site where the goods are located to take possession of the goods without any prior notice or for any purpose connected with or in relation to the protection or enforcement of the rights of BGW to the goods. (v) The purchaser shall be liable for the payment of all costs, charges and expenses incurred by BGW on a full indemnity basis (including legal costs, repossession costs and the cost of any mercantile agent) in the recovery or attempted recovery of the goods or of payment of any moneys owing by the purchaser to BGW or in the protection or enforcement of its rights in relation to the goods. (vi) To secure payment of all moneys which may become payable by the purchaser to BGW on any account whatsoever the purchaser hereby charges with the due payment of all moneys payable by the purchaser to BGW all of the purchaser’s beneficial interests in freehold or leasehold property held by it now or in the future as security for payment of all and any moneys payable by the purchaser to BGW and consents to BGW lodging a caveat or caveats noting its interest in such property, and upon demand by BGW the purchaser agrees to immediately execute a mortgage or other instrument in terms satisfactory to BGW to further secure payment of such moneys. The purchaser hereby and by way of security irrevocably appoints every officer and legal practitioner of BGW jointly and each of them severally as the purchaser’s lawful attorney with the power and for the purpose of executing (including as a deed) a mortgage or other instrument of security in any form as determined by such attorney over any real property of the purchaser to secure such moneys.
        </p>

        <h2>Disputes</h2>
        <p>
          If the purchaser disputes any charge appearing on an invoice then the purchaser shall give written notice of such dispute to BGW immediately upon receipt of invoice and shall pay all other charges not in dispute on the invoice pending an investigation of the dispute.
        </p>
      </div>
       
      <div className="return-btn">
          <Link to="/">
            <FontAwesomeIcon icon={faXmark} color="#f6f6f9" size="lg"/>
          </Link>
      </div>
    </div>
  )
}

export default TnCs;