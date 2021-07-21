import Homepage from "./Homepage";
/** Wrap homepage with user from local storage */
const HomepageWrapper = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return (
        <Homepage user={user} />
    )
}

export default HomepageWrapper;