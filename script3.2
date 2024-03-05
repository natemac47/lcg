// Instantiate a GlideRecord object for the x_lecg_sproutabout_child_contact table
var childContactGr = new GlideRecord('x_lecg_sproutabout_child_contact');

// Query all records in the table
childContactGr.query();

// Loop through each record in the x_lecg_sproutabout_child_contact table
while (childContactGr.next()) {
    // Extract the u_sa_contact_id value from the contact_id reference field
    var saContactId = childContactGr.contact_id.u_sa_contact_id;

    if (saContactId) {
        // Instantiate a GlideRecord object for the x_lecg_sproutabout_contact table
        var contactGr = new GlideRecord('x_lecg_sproutabout_contact');
        
        // Add a query to find a record where the contact_id_string field matches the extracted u_sa_contact_id
        contactGr.addQuery('contact_id_string', saContactId);
        
        // Limit the query to return only the first matching record
        contactGr.setLimit(1);
        
        // Execute the query
        contactGr.query();

        // Check if a matching record is found
        if (contactGr.next()) {
            // If found, populate the contact_id_new field with the sys_id of the matching record
            childContactGr.contact_id_new = contactGr.sys_id;
            
            // Update the x_lecg_sproutabout_child_contact record with the new value
            childContactGr.update();
        }
    }
}
