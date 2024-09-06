$(document).ready(function() {
    $('#projectID').focus();
  
    $('#projectID').on('blur', function() {
      const projectID = $(this).val();
      if (projectID) {
        $.get(`/api/projects/${projectID}`, function(data) {
          if (data.projectID) {
            // Project exists
            $('#projectName').val(data.projectName).prop('disabled', false);
            $('#assignedTo').val(data.assignedTo).prop('disabled', false);
            $('#assignmentDate').val(data.assignmentDate.substring(0, 10)).prop('disabled', false);
            $('#deadline').val(data.deadline.substring(0, 10)).prop('disabled', false);
            $('#updateBtn').prop('disabled', false);
          } else {
            // Project does not exist
            $('#projectName, #assignedTo, #assignmentDate, #deadline').prop('disabled', false);
            $('#saveBtn').prop('disabled', false);
          }
        });
      }
    });
  
    $('#resetBtn').click(function() {
      $('form')[0].reset();
      $('input').prop('disabled', true);
      $('#projectID').prop('disabled', false).focus();
      $('#saveBtn, #updateBtn').prop('disabled', true);
    });
  });
  