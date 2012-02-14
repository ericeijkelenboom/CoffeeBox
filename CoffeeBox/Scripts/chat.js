(function() {
  var Chat, Main,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  $(document).ready(function() {
    return new Main().init();
  });

  Main = (function() {

    function Main() {
      this.bindChatEvents = __bind(this.bindChatEvents, this);
    }

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
      this.sendMessage = __bind(this.sendMessage, this);      this.chatConnection = $.connection.chat;
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
