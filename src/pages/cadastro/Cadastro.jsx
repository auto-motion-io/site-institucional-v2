import React from "react";
import styles from "./Cadastro.module.css";
import images from "./../../utils/imagesExports"
import Passos from "./../../components/passos/Passos"
import FormularioResponsavel from "./../../components/formulario/FormularioResponsavel"
import FormularioEmpresa from "./../../components/formulario/FormularioEmpresa"
import FormularioPlanos from "./../../components/formulario/FormularioPlanos"
import FormularioConcluido from "./../../components/formulario/FormularioConcluido"
import { useLocation, useNavigate } from "react-router-dom";
import FormularioConfirmaEmail from "../../components/formulario/FormularioConfirmaEmail";

const Cadastro = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { form, qtdConcluido, data } = location.state || {};
    var novoForm = <FormularioResponsavel/>;
    switch(form){
        case 1:{
            novoForm = <FormularioEmpresa data={data} oldData={data}/>
            break;
        }
        case 2:{
            novoForm = <FormularioPlanos data={data}/>
            break;
        }
        case 3:{
            novoForm = <FormularioConfirmaEmail/>
            break;
        }
        case 4:{
            novoForm = <FormularioConcluido/>
            break;
        }
        case 5:{
            novoForm = <FormularioResponsavel oldData={data}/>;
        }
    }

    function voltarPitstop(){
        navigate("/pitstop");
    }

    return (
        <div className={styles["body"]}>
            <div className={styles["background"]}>
                <img src={images.listraBg} alt="Background de Listras" />
            </div>

            <div className={styles["header"]}>
                <a onClick={voltarPitstop} style={{cursor:"auto"}}><img className={styles["img-pitstop"]} src={images.logoPitstopColorido} alt="Logo Pitstop" /></a>
            </div>

            <div id={styles["sections"]}>
                <div className={styles["container"]}>
                    <Passos qtdConcluido={qtdConcluido} data={data}/>
                    {novoForm}
                </div>
            </div>
        </div>
    );
};
export default Cadastro;