$(document).ready(function(){
      $('#who').show();
      $('#mission1').hide();
      $('#vision1').hide();
      $("#who").addClass('active');
      $("#mission").click(function(){
        $('#who1').hide(1000);
        $('#mission1').show(1000);
        $('#vision1').hide(1000);
        $('#who').removeClass('active');
        $('#form1').removeClass('unactive');
        $("#mission").addClass('active');
    });
    $("#vision").click(function(){
        $('#who1').hide(1000);
        $('#mission1').hide(1000);
        $('#vision1').show(1000);
        $('#mission').removeClass('active');
        $('#form1').removeClass('unactive');
        $('#vision').removeClass('unactive');
        $("#vision").addClass('active');
    });
    $("#who").click(function(){
        $('#who1').show(1000);
        $('#mission1').hide(1000);
        $('#vision1').hide(1000);
        $('#mission').removeClass('active');
        $('#form1').removeClass('unactive');
        $('#vision').removeClass('active');
        $("#who").addClass('active');
    });
});