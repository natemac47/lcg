// Define the table names for easier reference
var SUPPORT_TABLE = 'x_lecg_sproutabout_support';
var CONTACT_TABLE = 'x_lecg_sproutabout_contact';

// Create a new GlideRecord instance for the support table
var supportGr = new GlideRecord(SUPPORT_TABLE);
supportGr.query();

// Iterate over each support record found
while (supportGr.next()) {
    // Check if the caller's related contact field is set to true
    if (supportGr.caller_id.u_sproutabout_contact == true) {
        // Set the sproutabout_user field to true
        supportGr.sproutabout_user = true;
        
        // Retrieve the sa_contact_id from the caller_id
        var saContactId = supportGr.caller_id.u_sa_contact_id;

        // Create a new GlideRecord instance for the contact table
        var contactGr = new GlideRecord(CONTACT_TABLE);
        contactGr.addQuery('contact_id_string', saContactId);
        contactGr.query();

        if (contactGr.next()) {
            // If a matching contact record is found, set the sproutabout_caller reference field
            supportGr.sproutabout_caller = contactGr.sys_id;
            
            // Save the changes to the support record
            supportGr.update();
        }
    }
}
