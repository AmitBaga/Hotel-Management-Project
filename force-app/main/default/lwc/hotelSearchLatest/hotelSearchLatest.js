import { LightningElement, track, wire} from 'lwc';
    import getAccounts from '@salesforce/apex/searchho.getAccounts';
    
    export default class HotelSearchLatest extends LightningElement {
         @track columns = [
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
         @track accountList;
    
         //Method 2
         @wire (getAccounts) wiredAccounts({data,error}){
              if (data) {
                   this.accountList = data;
              console.log(data); 
              } else if (error) {
              console.log(error);
              }
         }
    }




    
