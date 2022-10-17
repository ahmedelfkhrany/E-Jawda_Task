import EstablishmentCard from "../../components/EstablishmentCard/EstablishmentCard";
import SideNav from "../../layout/SideNav/SideNav";

const CommercialRecords = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-3 p-0">
                    <SideNav />
                </div>
                <div className="col-9 px-10">
                    <main className="mt-40">
                        <EstablishmentCard   ></EstablishmentCard>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default CommercialRecords;
