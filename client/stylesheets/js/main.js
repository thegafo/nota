        $(document).ready(function() {
            $(".button-collapse").sideNav();
			$('.modal-trigger').leanModal();


        });
        
        

	function toggleLogin() {
		Materialize.toast("Toggle Login", 1000);
		$(".dropdown-toggle").click();
	};
	
