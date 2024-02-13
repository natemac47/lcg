//SETS USER RECORDS ON SYS_USER WHERE CONTACT_ID IS FILLED IN TO SPROUTABOUT CONTACT = TRUE. TAKES APPROX. 8-10 HRS
// Define the table you want to update
var tableName = 'sys_user'; // Replace 'example_table' with your actual table name

// Create a GlideRecord instance for the specified table
var gr = new GlideRecord(tableName);

// Add a query to find records where u_sa_contact_id is not null or not empty
gr.addQuery('u_sa_contact_id', '!=', '');

// Query the database
gr.query();

// Initialize a counter for updated records
var count = 0;

// Loop through the returned records
while (gr.next()) {
    // Set u_sproutabout_contact to true
    gr.u_sproutabout_contact = true;
    
    // Update the record
    gr.update();
    
    // Increment the counter
    count++;
}

// Log the number of records updated
gs.log('Updated ' + count + ' records where u_sa_contact_id is not empty.');
