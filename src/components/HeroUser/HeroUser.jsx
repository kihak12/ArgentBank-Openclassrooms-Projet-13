import {useState} from "react";
import {updateUserFirstAndLastName} from "../../api/backendCaller.jsx";
import {useNavigate} from "react-router";
import {clearUser, setUser} from "../../store/UserStore.js";
import {useDispatch, useSelector} from "react-redux";

export const HeroUser = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector((state) => state.user);

    const [edit, setEdit] = useState(false);


    const toggleEdit = () => {
        setEdit(!edit);
    }

    let inputFirstName = user.firstName;
    let inputLastName = user.lastName;

    const update = () => {
        const userToken = localStorage.getItem("token") || sessionStorage.getItem("token");
        if (!userToken) {
            navigate("/sign-in");
            dispatch(clearUser());
        }
        updateUserFirstAndLastName(userToken, {firstName: inputFirstName, lastName: inputLastName}).then(data => {
            console.log("response", data);
            dispatch(setUser(data));
            setEdit(false);
        }).catch(error => {
            console.error(error);
        })
    }

    const username = `${user.firstName} ${user.lastName}`;
    return <>
        <div className={`flex flex-col items-center ${edit ? "mb-5" : "mb-8"}`}>
            {
                edit ?
                    <div className={"flex items-center flex-col justify-center my-4.5"}>
                        <div className={"text-white text-2xl md:text-3xl font-bold text-center"}>
                            <span>Welcome back<br /></span>
                            <div className={"flex flex-col md:flex-row gap-3"}>
                                <input id="firstName" onInput={e => inputFirstName = e.target.value} className={"border-white rounded-lg border-2 focus-visible:outline-0 text-xl md:text-2xl w-full md:w-52 px-2 py-1"} type="text" defaultValue={user.firstName}/>
                                <input id="lastName" onInput={e => inputLastName = e.target.value} className={"border-white rounded-lg border-2 focus-visible:outline-0 text-xl md:text-2xl w-full md:w-52 px-2 py-1"} type="text" defaultValue={user.lastName}/>
                            </div>
                        </div>
                        <div className={"inline-flex w-full gap-1 md:gap-3 mt-3"}>
                            <div className="flex-1 md:w-52 flex justify-end">
                                <button onClick={update} className={"w-2/3 bg-main text-white px-2.5 py-2 text-sm active:bg-main-darken transition-colors"}>Save</button>
                            </div>
                            <div className="flex-1 md:w-52 flex justify-start">
                                <button onClick={toggleEdit} className={"w-2/3 bg-main text-white px-2.5 py-2 text-sm active:bg-main-darken transition-colors"}>Cancel</button>
                            </div>
                        </div>
                    </div>
                    :
                    user.firstName &&
                    <div className={"flex items-center flex-col justify-center my-4.5"}>
                        <span className={"text-white text-2xl md:text-3xl font-bold text-center"}>Welcome back<br />{username}!</span>
                        <button onClick={toggleEdit} className={`bg-main text-white px-2.5 py-2 text-sm active:bg-main-darken transition-colors ${!edit && "mt-1.5"}`}>Edit Name</button>
                    </div>
            }
        </div>
    </>
}
