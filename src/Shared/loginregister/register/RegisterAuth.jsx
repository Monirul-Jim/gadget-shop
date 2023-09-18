
import LoginSvg from '../Login/LoginSvg';
import Register from './Register';

const RegisterAuth = () => {
    return (
        <div className="hero login-auth bg-base-200 mt-20 mb-10">
            <div className="hero-content flex flex-col lg:flex-row justify-center">
                <div className="text-center p-10 lg:text-left lg:w-1/2">
                    <h1 className="text-5xl font-bold text-center">
                        Login Now!
                    </h1>
                    <p className="pt-6 text-center">
                        Login now to connect with us.
                    </p>
                    <LoginSvg />
                </div>
                <div className="card px-8 pt-36 flex-shrink-0 w-full max-w-lg lg:w-1/2">
                    <Register />
                </div>
            </div>
        </div>
    );
};

export default RegisterAuth;