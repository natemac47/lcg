var SUPPORT_TABLE = 'x_lecg_sproutabout_support';
var CONTACT_TABLE = 'x_lecg_sproutabout_contact';

var supportGr = new GlideRecord(SUPPORT_TABLE);
supportGr.query();

while (supportGr.next()) {
    if (supportGr.caller_id.u_sproutabout_contact == true) {
        supportGr.sproutabout_user = true;
        
        var saContactId = supportGr.caller_id.u_sa_contact_id;
        var contactGr = new GlideRecord(CONTACT_TABLE);
        contactGr.addQuery('contact_id_string', saContactId);
        contactGr.query();

        if (contactGr.next()) {
            supportGr.sproutabout_caller = contactGr.sys_id;
            supportGr.update();
        }
    }
}
