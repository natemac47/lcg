//Look for SproutAbout users on sys_user and set migration attributes
var tableName = 'sys_user'; 
var gr = new GlideRecord(tableName);
gr.addQuery('u_sa_contact_id', '!=', '');
gr.query();
var count = 0;
while (gr.next()) {
    gr.u_sproutabout_contact = true;
    gr.u_marked_for_deletion = true;
    gr.update();
    count++;
}

// Log the number of records updated
gs.log('Updated ' + count + ' records where u_sa_contact_id is not empty.');
