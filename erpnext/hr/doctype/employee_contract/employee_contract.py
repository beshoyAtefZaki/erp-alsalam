# -*- coding: utf-8 -*-
# Copyright (c) 2019, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from datetime import datetime , timedelta
from dateutil.relativedelta import *
from frappe.model.document import Document

class Employeecontract(Document):
	pass






@frappe.whitelist()
def get_contract_end_date(duration , start_date ):
	return("hello")
