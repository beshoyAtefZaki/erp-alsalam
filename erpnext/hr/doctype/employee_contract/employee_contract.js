// Copyright (c) 2019, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on('Employee contract', {
	// employee: function(frm) {
  //   console.log("work")
  //
	// },
  onload: function(frm){
    var emp = frm.doc.employee ;
    var employee = frappe.get_doc('Employee',emp)
    frm.set_value("employee_full_name", employee.employee_name)

    if (employee.citizen_or_resident == "Citizen") {
        frm.set_value("contract_type", "عقد عمل سعودى")
    }else{
      frm.set_value("contract_type" ,"عقد عمل أجنبي")
      // employee_nationality
      frm.set_value("employee_nationality" , employee.nationality )
    }




  },



  data_7: function(frm) {
    var duration = frm.doc.data_7 ;

      if(frm.doc.contract_start_date)  {
      var start = frm.doc.contract_start_date

        frappe.call({
            method:'erpnext.hr.doctype.employee_contract.employee_contract.get_contract_end_date',
            args: {
              'duration'  : duration ,
              'start_date': start
            } ,
            callback: function(r){
              frm.set_value("contratc_end_date" ,r.message)
            }


        })
                            }
            },
  contract_start_date: function(frm) {
    var duration = frm.doc.data_7 ;
    var start = frm.doc.contract_start_date

      frappe.call({
          method:'erpnext.hr.doctype.employee_contract.employee_contract.get_contract_end_date',
          args: {
            'duration'  : duration ,
            'start_date': start
          } ,
          callback: function(r){
            frm.set_value("contratc_end_date" ,r.message)
          }


      })






  }

})
