import Phone from "../../Phone/Phone";


const Phones = ({phones}) => {
    console.log(phones);
    return (
        <div>
            <h1 className="text-2xl text-center py-10">All Categories Phone</h1>
            <div className="grid md:grid-cols-3 grid-cols-1 py-10 gap-6 ">
                {
                    phones?.map(phone => <Phone key={phone.id} phone={phone}></Phone>)
                }
            </div>
        </div>
    );
};

export default Phones;

