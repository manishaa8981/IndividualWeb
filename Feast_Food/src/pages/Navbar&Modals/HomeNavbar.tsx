import logo from "../../images/Feast logo 8small-PhotoRoom.png-PhotoRoom.png";
import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {FaCartArrowDown, FaRegWindowClose, FaUser} from "react-icons/fa";
// import {IoMdMail} from "react-icons/io";
import {RiLockPasswordFill} from "react-icons/ri";
import gsap from "gsap";
import "../../css/LoginPage.css"
import "../../css/RegistrationPage.css"
import "../../css/HomeNavbar.css"
import {useForm} from "react-hook-form";
import {useMutation} from "@tanstack/react-query";
import axios from "axios";
import {options} from "axios";
import {MdEmail} from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import {toast} from "react-toastify";
// import {RxHamburgerMenu} from "react-icons/rx";


interface HomeNavbarProps {
    activePage: string;
}

const HomeNavbar: React.FC<HomeNavbarProps> = ({ activePage }) => {

    // Login modal
    const [login_popup, setLModal] = useState(false);
    const toggleLoginModal = () => {
        setLModal(!login_popup);
        setRPopup(false); // Close the registration modal
    };

    // Registration modal
    const [register_popup, setRPopup] = useState(false);
    const toggleRegisterModal = () => {
        setRPopup(!register_popup);
        setLModal(false); // Close the login modal
    };

    if (login_popup || register_popup) {
        document.body.classList.add('active-modal');
    } else {
        document.body.classList.remove('active-modal');
    }

    useEffect(() => {
        const modalAnimation = (modalClass: string | null) => {
            if (modalClass) {
                gsap.from(`.${modalClass}`, {
                    duration: 0.3,
                    opacity: 0,
                    onComplete: () => {
                        // Callback when the animation is complete
                        if (login_popup) {
                            document.body.classList.add('active-login-modal');
                        } else if (register_popup) {
                            document.body.classList.add('active-register-modal');
                        }
                    },
                });
            }
        };
        modalAnimation(login_popup ? "login-modal" : (register_popup ? "register-modal" : null));

    }, [login_popup, register_popup]);


    //Register ko backend connection
    const {register,
        handleSubmit,
        reset}=useForm();

    // const {errors}=formState;

    const useApiCall=useMutation({
        mutationKey:["POST_USER_CREATE"],
        mutationFn:(payload:any)=>{
            console.log(payload)
            return axios.post("http://localhost:8080/register/register",payload)
        },
        onSuccess: () => {
            difftoast();
            reset();
        },

    })

    const onSubmit=(value:any)=>{
        useApiCall.mutate(value)
    }

    const difftoast =() => {
        toast.success("wow! you just register", {position: "top-center"})
    }


    return(
        <>
            <div className={"nav-bar"}>
                <div className={"feast-logo"}>
                    <img src={logo} width={"40px"} />
                </div>
                <div className={"home-options"}>
                    <ul>
                        <Link to={"/"}><li className={activePage === "/" ? "active" : ""}><a>Home</a></li></Link>
                        <Link to={"/OurMenu"}><li className={activePage === "/OurMenu" ? "active" : ""}><a>Our Menu</a></li></Link>
                        <Link to={"/Reservation"}><li className={activePage === "/Reservation" ? "active" : ""}><a>Reservation</a></li></Link>
                        <Link to={"/EventsPage"}><li className={activePage === "/EventsPage" ? "active" : ""}><a>Events</a></li></Link>
                        <Link to={"/ContactPage"}><li className={activePage === "/ContactPage" ? "active" : ""}><a>Contact</a></li></Link>
                    </ul>
                </div>

                <div className={"hp-navright"}>
                    <span  className={"icon-cart"}><FaCartArrowDown /></span>
                    <div className={"hp-sign-btn"}>
                        <h3 onClick={toggleLoginModal}>Sign in</h3>
                    </div>
                </div>

                {/*<div className={"nav-mobile"} onClick={()=> setNavMenuOpen(!navMenuOpen)}>*/}
                {/*    <span style={{fontSize:"1.7rem"}}><RxHamburgerMenu /></span>*/}
                {/*</div>*/}

            </div>


            {login_popup && (
                <div className="login-modal">
                    <div onClick={toggleLoginModal} className="login-overlay"></div>
                    <div className="login-modal-content">
                        <h2>Login</h2>
                        <button className="close-login-btn" onClick={toggleLoginModal}>
                            <FaRegWindowClose />
                        </button>

                        <div className={"input-box"}>
                            <span className={"iconmail"}> <FaUser /></span>
                            <div className={"username"}>
                                <input type={"email"} placeholder={"Username"}   />
                            </div>
                            <span className={"iconpassword"}><RiLockPasswordFill /></span>
                            <div className={"password"}>
                                <input type={"password"} placeholder={"Password"}/></div>
                        </div>
                        <div className={"Remember-forget"}>
                            <label><input type={"checkbox"}/>Remember me</label>
                            <a href={"#"} >Forget passsword</a>
                        </div>
                        <button type={"submit"} className={"btn-login10"} >Login</button>
                        <div className={"register-text"}>
                            <p> Don't have an account?
                                <a href={"#"} onClick={toggleRegisterModal}>Register</a></p>
                        </div>
                    </div>
                </div>
            )}

            {register_popup && (
                <div className="register-modal">
                    <div onClick={toggleRegisterModal} className="register-overlay"></div>
                    <div className="register-modal-content">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h2>Register</h2>
                            <button className="close-register-btn" onClick={toggleRegisterModal}>
                                <FaRegWindowClose />
                            </button>

                            <div className={"reg-input-box"}>
                                {/*<span className={"iconname"}> <FaUser /></span>*/}
                                <div className={"username"}>
                                    <input type={"fname"} placeholder={"First Name"} {...register("first_name",{
                                        required:"full name is required"
                                    })}/>
                                    <input type={"lname"} placeholder={"Last Name"} {...register("last_name")}/>
                                    <input type={"text"} placeholder={"Name"} {...register("fullName",{
                                        required:"FullName is required!!"
                                    })}
                                    />
                                    {errors.fullName && (
                                        <p className="error-message">{errors?.fullName?.message}
                                        </p>
                                    )}
                                </div>
                                <span className={"iconuser"}><FaUser /> </span>
                                <div className={"username"}>
                                    <input type={"username"} placeholder={"Username"}  {...register("username")}/>
                                </div>
                                <span className={"iconpassword"}><RiLockPasswordFill /></span>
                                <div className={"password"}>
                                    <input type={"password"} placeholder={"Password"} {...register("password")}/>
                                </div>
                                <span className={"iconpassword"}><RiLockPasswordFill /></span>
                                <div className={"password"}>
                                    <input type={"password"} placeholder={"Confirm Password"} {...register("confirm_password")}/>
                                    <input type={"email"} placeholder={"Email"}  {...register("email",
                                        {required:"Email is required!!"})}/>
                                    {errors.email && (
                                        <p className="error-message">{errors?.email?.message}
                                        </p>
                                    )}
                                </div>
                                <span className={"iconpassword"}><RiLockPasswordFill /></span>
                                <div className={"password"}>
                                    <input type={"password"} placeholder={"Password"}   {...register("password",
                                        {required:"Password is required!!"})}/>

                                    {errors.password && (
                                        <p className="error-message">{errors?.password?.message}
                                        </p>
                                    )}

                                </div>
                                <span className={"iconpassword"}><RiLockPasswordFill /></span>
                                <div className={"password"}>

                                    <input type={"password"} placeholder={"Confirm Password"}
                                           {...register("confirmPassword", {


                                            required: "Confirm Password is required",
                                            validate: {
                                                matchesPassword: (value) =>
                                                    value === watch("password") || "Confirm Password does not match Password",
                                            },
                                        })}
                                    />
                                    
                                    {errors.confirmPassword && (
                                        <p className="error-message">{errors?.confirmPassword?.message}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className={"security-question"}>
                                <div className={"header10"}>Security Question</div>
                                <div className={"answer"}>
                                    <input type={"answer"} placeholder={"Your first school name?"}  {...register("security_question")}/>
                                    <input type={"answer"} placeholder={"Your first school name?"}  {...register("securityQuestion",
                                        {required:"SecurityQuestion is required!!"})}/>
                                    {errors.securityQuestion && (
                                        <p className="error-message">{errors?.securityQuestion?.message}
                                        </p>
                                    )}
                                </div>

                            </div>
                            <button type={"submit"} className={"btn-signup10"}
                                    // onClick={difftoast}
                            >Sign Up</button>
                            <ToastContainer/>
                        </form>
                    </div>
                </div>
            )}

        </>
    )
}

export default HomeNavbar;