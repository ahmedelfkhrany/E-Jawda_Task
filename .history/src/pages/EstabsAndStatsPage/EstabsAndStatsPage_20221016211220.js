import EstabsAndStats from "../../components/EstabsAndStats/EstabsAndStats";
import SideNav from "../../layout/SideNav/SideNav";
const EstabsAndStatsPage = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-3 p-0">
                    <SideNav />
                </div>
                <div className="col-9 px-10">
                    <main className="mt-40">
                        <EstabsAndStats   ></EstabsAndStats>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default EstabsAndStatsPage;
