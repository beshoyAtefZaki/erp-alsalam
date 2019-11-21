// Copyright (c) 2019, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on('Employee benefits', {
	// refresh: function(frm) {
  //
	// },
  contract: function(frm){
    var contract = frm.doc.contract
    var employee_data = frappe.get_doc('Employee contract',contract ) ;
    // var employee_data = frappe.get_doc('Employee contract',contract )
    console.log(employee_data);
    frappe.call({
          method:'frappe.client.get' ,
          args:{
            'doctype' : 'Employee contract'  ,
            'name' : contract   ,

          },
            callback: function(r){
              console.log(r.messgae)
              frm.set_value("employee_full_name", r.message.employee_name)
            }


      })


  } ,
  onload: function(frm){
   	if(frm.doc.contract){
      var contract = frm.doc.contract ;
      var employee_data = frappe.get_doc('Employee contract',contract ) ;

    }

  }
});
