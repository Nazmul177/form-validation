function validation(msg ,  type = 'danger'){
  return ` <p class= "alert alert-${type}"><b>${msg}</b></p> `;
}