import {FC} from "react";
import {NavBarRequestModel} from "../../models";

export const NavBar:FC<{props:NavBarRequestModel}>=({props})=> {
    return (<>

        <ul>
            <li>Home</li>
            <li>My List</li>
        </ul>
        <nav>
            <div>
                <button>
                    <p>{props.userName}</p>
                </button>
                <div>
                    <a>Sign out</a>
                </div>
            </div>
        </nav>
    </>)
}