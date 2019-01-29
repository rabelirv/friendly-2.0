class ConversationsController < ApplicationController
      def index
        @conversations = Conversation.all
        render json: @conversations
      end

      def create
        @conversation = Conversation.get(User.find_by_auth_token!(request.headers[:token]))

        add_to_conversations unless conversated?

        respond_to do |format|
          format.js
        end
      end

      private

      def add_to_conversations
        session[:conversations] ||= []
        session[:conversations] << @conversation.id
      end

      def conversated?
        session[:conversations].include?(@conversation.id)
      end
end
