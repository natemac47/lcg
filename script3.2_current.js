var childContactGr = new GlideRecord('x_lecg_sproutabout_child_contact');
childContactGr.query();
while (childContactGr.next()) {
    var saContactId = childContactGr.contact_id.u_sa_contact_id;
    if (saContactId) {
        var contactGr = new GlideRecord('x_lecg_sproutabout_contact');
        contactGr.addQuery('contact_id_string', saContactId);
        contactGr.setLimit(1);
        contactGr.query();
        if (contactGr.next()) {
            childContactGr.contact_id_new = contactGr.sys_id;
            childContactGr.update();
        }
    }
}
