class UsersController < ApiController
      before_action :require_login, except: [:create, :index]

      def index
        @users = User.all
        render json: @users
      end

      def create
        user = User.create!(user_params)
        render json: {token: user.auth_token}
      end

      def profile
        user = User.find_by_auth_token!(request.headers[:token])
        render json:{ user: {username: user.username, email: user.email, avatar: user.avatar, name: user.name}}
      end

      def edit

      end

      def update

      end

      def destroy
        user = User.find(params[:id])
        user.destroy
      end

      private

      def user_params
        params.require(:user).permit(:avatar, :username, :password, :name, :email)
      end

end
