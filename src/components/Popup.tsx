const Popup = () => {
    return (
        <div className="absolute bg-white max-w-[300px] right-0 top-[100px] text-center p-5 flex flex-col items-center">
            <h2 className="uppercase font-bold">Register form</h2>
            <div className="max-w-[80%]">
                <label>Enter your login:
                    <input type="text" className="border-2"/>
                </label>
                <label>Enter your password:
                    <input type="text" className="border-2"/>
                </label>
            </div>
        </div>
    );
}

export default Popup
