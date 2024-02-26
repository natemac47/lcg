// Cleanup of Sproutabout records
function updateSproutaboutSupportRecords() {
    // Query the x_lecg_sproutabout_support table for records with sproutabout_user=true and sproutabout_caller is empty
    var supportGr = new GlideRecord('x_lecg_sproutabout_support');
    supportGr.addQuery('sproutabout_user', true);
    supportGr.addNullQuery('sproutabout_caller');
    supportGr.query();

    while (supportGr.next()) {
        // For each record, get the caller_id.name
        var callerName = supportGr.caller_id.name.toString();

        // Now, search the x_lecg_sproutabout_child_contact table for a record with the same name
        var contactGr = new GlideRecord('x_lecg_sproutabout_child_contact');
        contactGr.addQuery('name', callerName);
        contactGr.query();

        if (contactGr.next()) {
            // If a matching record is found, update the sproutabout_caller field on the original support record
            supportGr.sproutabout_caller = contactGr.sys_id;
            supportGr.update();
            gs.info('Updated sproutabout_support record ' + supportGr.sys_id + ' with sproutabout_caller ' + contactGr.sys_id);
        }
    }
}

// Call the function to start the process
updateSproutaboutSupportRecords();
