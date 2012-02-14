$(document).ready -> 
    new Main().init()

class Main
    init: -> 
        chat = new Chat() 

        @bindChatEvents chat

        $.connection.hub.start()

    bindChatEvents: (chat) => 
        $('#broadcast').bind 'click', () -> 
            chat.sendMessage { value: $('#msg').val() }


class Chat
    constructor: ->
        @chatConnection =  $.connection.chat

        @chatConnection.addMessage = (message) -> 
            $('#messages').append '<li>' + message.Value + '</li>'
                
    sendMessage: (message) => 
        @chatConnection.send message
