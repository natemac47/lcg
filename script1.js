//SETS USER RECORDS ON SYS_USER WHERE CONTACT_ID IS FILLED IN TO SPROUTABOUT CONTACT = TRUE. TAKES APPROX. 8-10 HRS
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
