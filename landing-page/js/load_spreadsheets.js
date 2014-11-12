// Define spreadsheet URL.
var mySpreadsheet = 'https://docs.google.com/spreadsheet/ccc?key=1p7UlL9cXmI13TcUhRqrLghz9Wew4c4N2OAgtu2YpvkY#gid=0';
var mySpreadsheet = 'https://docs.google.com/spreadsheet/ccc?key=1W0x77n2intNke2c1LH2HnLdkUOLy-YWTmk5a8L8VLWs#gid=0';
// Load an entire sheet.
$('#statistics').sheetrock({
  url: mySpreadsheet,
  sql: "select B,C,D,G,I where J = 1 order by A desc ",
  chunksize:10
});


var mySpreadsheet = 'https://docs.google.com/spreadsheet/ccc?key=12niB33yNyOqsYb0xBwFjAJwKPLLcBUOxJkiHn5RL8V4#gid=0';
// Load an entire sheet.
$('#f_administration').sheetrock({
  url: mySpreadsheet,
  sql: "select C,D,E,F where C != 'Udostępnianie Danych Publicznych' and H != 1 ",
  chunksize:10,
  labels:['Etap procesu','Jako','chcę','aby']
});


//var mySpreadsheet = 'https://docs.google.com/spreadsheet/ccc?key=1jg3i5bZXOhJc8AVkKchgQn05V51iTSBrDPGrb_RT9go#gid=0';
// Load an entire sheet.
$('#f_public_data').sheetrock({
  url: mySpreadsheet,
  sql: "select C,D,E,F where C = 'Udostępnianie Danych Publicznych' and H != 1 ",
  chunksize:10,
  labels:['Etap procesu','Jako','chcę','aby']
});

