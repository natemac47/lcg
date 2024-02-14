// Initialize a GlideRecord instance for the support table
var supportGr = new GlideRecord('x_lecg_sproutabout_support');

// Query for records where caller_id's u_sproutabout_contact is true
supportGr.addQuery('caller_id.u_sproutabout_contact', true);

// Limit the number of records to process to 10
supportGr.setLimit(10);

supportGr.query();

while (supportGr.next()) {
    // Set the sproutabout_user field to true
    supportGr.setValue('sproutabout_user', true);
    
    // Initialize a GlideRecord instance for the contact table
    var contactGr = new GlideRecord('x_lecg_sproutabout_child_contact');
    
    // Adjust the query to match contact_id in the contact table with caller_id in the support table
    contactGr.addQuery('contact_id', supportGr.caller_id.toString());
    contactGr.query();
    
    if (contactGr.next()) {
        // If a matching contact record is found, populate the sproutabout_caller field with its sys_id
        supportGr.setValue('sproutabout_caller', contactGr.sys_id.toString());
    }
    
    // Update the support record with the changes
    supportGr.update();
}
