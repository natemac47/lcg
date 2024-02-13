// Initialize an array to store the sys_ids of updated records for logging
var updatedSysIds = [];

// Query the x_lecg_sproutabout_child_contact table for records where child_id is not empty
var childContactGr = new GlideRecord('x_lecg_sproutabout_child_contact');
childContactGr.addNotNullQuery('child_id'); // Add condition for child_id to not be null
childContactGr.query(); // Execute the query

while (childContactGr.next()) {
    // Get the contact_id, which is a reference to a sys_user record
    var contactId = childContactGr.getValue('contact_id');

    if (contactId) {
        // Query the sys_user table for the specific user
        var userGr = new GlideRecord('sys_user');
        if (userGr.get(contactId)) { // Successfully retrieved the sys_user record
            // Update the x_lecg_sproutabout_child_contact record with fields from sys_user
            childContactGr.setValue('guardian_id', userGr.getValue('u_guardian_id'));
            childContactGr.setValue('u_contact_id_string', userGr.getValue('u_sa_contact_id'));
            childContactGr.setValue('family_id', userGr.getValue('u_family_id'));
            childContactGr.setValue('name', userGr.getValue('name'));

            // Update the record and add the sys_id to the array of updated records
            childContactGr.update();
            updatedSysIds.push(childContactGr.getUniqueValue());
        }
    }
}
