var gr = new GlideRecord('x_lecg_sproutabout_contact');

// No specific condition is needed to delete all records, so we do not add a query condition

gr.query(); // This will prepare all records in the table for the operation

gr.setWorkflow(false); // This will disable the running of business rules, etc., during the deletion

gr.deleteMultiple(); // This deletes all the queried records at once

gs.info('All records in x_lecg_sproutabout_contact have been deleted.');
