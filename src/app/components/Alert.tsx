"use client";
import React from "react";
import Alert from "react-bootstrap/Alert";
import { useAppSelector } from "../store/hooks.ts";
import { useDispatch } from "react-redux";
import { fecharAlerta } from "../store/features/alerta/alerta-slice.ts";
import { PiCheckCircleBold } from "react-icons/pi";
import { PiWarningCircleBold } from "react-icons/pi";
import { PiBugBold } from "react-icons/pi";

const AlertaPadrao = () => {
  const dispatch = useDispatch();

  const alert = useAppSelector((state) => state.alerta);

  React.useEffect(() => {
    if (alert.show) {
      setTimeout(() => {
        dispatch(fecharAlerta());
      }, 4000);
    }
  }, [alert.show]);

  if (alert.show) {
    return (
      <Alert
        className="z-1 position-absolute rounded-4 col-5 mt-4 text-center"
        variant={alert.tipo}
        onClose={() => dispatch(fecharAlerta())}
        dismissible
      >
        <Alert.Heading className="row">
          <div className="col-auto mr-auto">
            {alert.tipo === "success"
              ? "Sucesso" && <PiCheckCircleBold />
              : alert.tipo === "warning"
              ? "Alerta" && <PiWarningCircleBold />
              : "Erro" && <PiBugBold />}
          </div>
          <div className="col-auto ms-1">
            {alert.tipo === "success"
              ? "Sucesso "
              : alert.tipo === "warning"
              ? "Alerta "
              : "Erro "}
          </div>
        </Alert.Heading>
        <p className="mb-0">{alert.mensagem}</p>
      </Alert>
    );
  }
  return null;
};

export default AlertaPadrao;
