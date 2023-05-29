<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
  $("#checkoutForm").on("submit", function(event){
    event.preventDefault();

    $.ajax({
      url: "submit-order.php",
      type: "POST",
      data: $(this).serialize(),
      success: function(data){
        alert(data);
      }
    });
  });
});
</script>
