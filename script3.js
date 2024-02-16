// Initialize a GlideRecord instance for the support table
var supportGr = new GlideRecord('x_lecg_sproutabout_support');

// Query for records where caller_id's u_sproutabout_contact is true
supportGr.addQuery('caller_id.u_sproutabout_contact', true);

// Remove the setLimit line to process all matching records
supportGr.query();

while (supportGr.next()) {
    // Set the sproutabout_user field to true
    supportGr.setValue('sproutabout_user', true);

    if (supportGr.caller_id.u_sa_contact_id.nil()) {
        // If the u_sa_contact_id field is empty, skip to the next record
        continue;
    }

    // Initialize a GlideRecord instance for the contact table
    var contactGr = new GlideRecord('x_lecg_sproutabout_child_contact');

    // Adjust the query to match u_contact_id_string in the contact table with caller_id.u_sa_contact_id in the support table
    contactGr.addQuery('u_contact_id_string', supportGr.caller_id.u_sa_contact_id);
    contactGr.query();

    if (contactGr.next()) {
        // If a matching contact record is found, populate the sproutabout_caller field with its sys_id
        supportGr.setValue('sproutabout_caller', contactGr.sys_id.toString());
    }

    // Update the support record with the changes
    supportGr.update();
}
