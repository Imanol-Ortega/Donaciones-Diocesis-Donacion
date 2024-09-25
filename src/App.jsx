import { Routes, Route } from "react-router-dom";
import FormDonacion from "./modulos/Donacion/formulario/FormDonacion";
import NotFound from "./componentes/NotFound/NotFound";

function App() {
    return (
        <>
            <div className="h-full">
                <div className="mx-auto">
                    <Routes>
                        <Route path="*" element={<NotFound />} />
                        <Route path="/" element={<FormDonacion />} />
                    </Routes>
                </div>
            </div>
        </>
    );
}

export default App;
