class MessagesController < ApplicationController
      def index
        @messages = Message.all
        render json: @messages
      end

      def show
        message = Message.find(params[:id])

        message_json = {
          id: message.id,
          name: message.name,
          avatar: message.avatar
        }

        render json: user_json
      end

      def create
        @conversation = Conversation.includes(:recipient).find(params[:conversation_id])
        @message = @conversation.messages.create(message_params)

        respond_to do |format|
          format.js
        end
      end

      private

      def message_params
        params.require(:message).permit(:user_id, :body)
      end
end
