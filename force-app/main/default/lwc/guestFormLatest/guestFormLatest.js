import { LightningElement , track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'; 

import GUEST_OBJECT from '@salesforce/schema/Guest_Master__c';
import HOTEL_OBJECT from '@salesforce/schema/Hotel_Master__c';


import GUEST_FIRSTNAME from '@salesforce/schema/Guest_Master__c.Guest_First_Name__c';
import GUEST_LASTNAME from '@salesforce/schema/Guest_Master__c.Guest_Last_Name__c';
import GUEST_PHONE from '@salesforce/schema/Guest_Master__c.Phone__c';
import GUEST_EMAIL from '@salesforce/schema/Guest_Master__c.Email__c';


import HOTEL_CITY from '@salesforce/schema/Hotel_Master__c.Hotel_City__c';
import HOTEL_TYPE from '@salesforce/schema/Hotel_Master__c.Hotel__c';

import serachAccs from '@salesforce/apex/searchho.retriveAccs';
 // datatable columns
 const columns = [
    {
        label: 'Hotel Code',
        fieldName: 'Name',
        type: 'text',
        
    },
    {
        label: 'Hotel City',
        fieldName: 'Hotel_City__c',
        type: 'text',
        
    }, {
        label: 'Hotel Type',
        fieldName: 'Hotel__c',
        type: 'text',
    },
    {
        label: 'WIFI Availability',
        fieldName: 'WIFI_Availability__c',
        type: 'text',
        
    },
    {
        label: 'Per Day Cost',
        fieldName: 'Per_Day_Cost__c',
        type: 'text',
        
    }
];



export default class GuestFormLatest extends LightningElement {


              ObjectApiName1 = HOTEL_OBJECT ; 
        
                hotelcity=HOTEL_CITY;
                hoteltype=HOTEL_TYPE;



               ObjectApiName2 = GUEST_OBJECT ;
        
                    firstnameField = GUEST_FIRSTNAME;
                    lastnameField = GUEST_LASTNAME;
                    phoneField = GUEST_PHONE;
                    emailField = GUEST_EMAIL;  
       

       
       

        handleSuccess(event){
            this.Id = event.detail.id;
            const events = new ShowToastEvent({
                title:"Successful",
                message: "Record Created",
                variant: 'success'
            });
    
            this.dispatchEvent(events);
             
        }
        @track searchData;
        @track columns = columns;
        @track errorMsg = '';
        strSearchAccName = '';
        
        ObjectApiName = HOTEL_OBJECT ; 
        
        hotelcity=HOTEL_CITY;
        hoteltype=HOTEL_TYPE;

        handleAccountName(event) {
            this.strSearchAccName = event.detail.value;
        }
    
        handleSearch() {
            if(!this.strSearchAccName) {
                this.errorMsg = 'Please enter account name to search.';
                this.searchData = undefined;
                return;
            }
    
            serachAccs({strAccName : this.strSearchAccName})
.then(result => {
this.searchData = result;

})
.catch(error => {
this.searchData = undefined;
window.console.log('error =====> '+JSON.stringify(error));
if(error) {
this.errorMsg = error.body.message;
}
})
        }
      
    }
