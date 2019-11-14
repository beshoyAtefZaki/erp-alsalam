# -*- coding: utf-8 -*-
# Copyright (c) 2019, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
import datetime
from dateutil.relativedelta import relativedelta
from frappe.model.document import Document

class Employeecontract(Document):
	pass






@frappe.whitelist()
def get_contract_end_date(duration , start_date ):
	# date = datetime.datetime.strptime(start_date, "%y-%m-%d")
	date = datetime.datetime.strptime(start_date, "%Y-%m-%d")
	end_date = date + relativedelta(months =+ int(duration))
	return(end_date)
