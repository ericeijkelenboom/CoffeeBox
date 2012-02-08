(function() {
  var Chat, Main;

  $(document).ready(function() {
    return new Main().init();
  });

  Main = (function() {

    function Main() {}

    Main.prototype.init = function() {
      var chat;
      chat = new Chat();
      this.bindChatEvents(chat);
      return $.connection.hub.start();
    };

    Main.prototype.bindChatEvents = function(chat) {
      return $('#broadcast').bind('click', function() {
        return chat.sendMessage({
          value: $('#msg').val()
        });
      });
    };

    return Main;

  })();

  Chat = (function() {

    function Chat() {
      this.chatConnection = $.connection.chat;
      this.chatConnection.addMessage = function(message) {
        return $('#messages').append('<li>' + message.Value + '</li>');
      };
    }

    Chat.prototype.sendMessage = function(message) {
      return this.chatConnection.send(message);
    };

    return Chat;

  })();

}).call(this);
