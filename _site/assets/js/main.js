var CMT = CMT || {};
CMT.ui = CMT.nav || {};

CMT.ui = {
	init: function() {
		$('input[name=includeRecipient]').change(function(){
			$(this).parent().parent().toggleClass('selected');
		})
	}
};

$(document).ready(function() {
	CMT.ui.init();
});
