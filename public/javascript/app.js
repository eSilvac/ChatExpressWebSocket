const socket = io();
const template = Handlebars.compile($("#message-template").html());

$("#btn-send").on("click", () => {
  const msg = $("#message-input").val();
  socket.emit("chat", msg);  
  
  $("#message-input").val("");
});

socket.on("chat", (data) => {
  data.createdAt = moment(data.createdAt).format("MMMM Do YYYY, h:mm:ss a")
  $(".chat-body").prepend(template(data));
});
