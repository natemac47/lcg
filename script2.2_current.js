var childRecord = new GlideRecord('x_lecg_sproutabout_child_contact');
childRecord.query();
while (childRecord.next()) {
    var contactRef = childRecord.contact_id.getRefRecord();

    var newContact = new GlideRecord('x_lecg_sproutabout_contact');
    newContact.initialize();

    newContact.email = contactRef.getValue('email');
    newContact.first_name = contactRef.getValue('first_name');
    newContact.last_name = contactRef.getValue('last_name');
    newContact.name = contactRef.getValue('name');
    newContact.mobile_phone = contactRef.getValue('mobile_phone');
    newContact.guardian_id = contactRef.getValue('u_guardian_id');
    newContact.family_id = contactRef.getValue('u_family_id');
    newContact.contact_id_string = contactRef.getValue('u_sa_contact_id');
    newContact.contact_id = childRecord.sys_id;
    
    var newContactSysId = newContact.insert();
    
    if (newContactSysId) {
        // If the new contact was successfully inserted, update the childRecord with the newContact's sys_id
        childRecord.contact_id_new = newContactSysId;
        childRecord.update();
    }
}
