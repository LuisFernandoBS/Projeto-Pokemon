"use client";
import React from "react";
import Alert from "react-bootstrap/Alert";
import { useAppSelector } from "../store/hooks.ts";
import { useDispatch } from "react-redux";
import { fecharAlerta } from "../store/features/alerta/alerta-slice.ts";

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
        variant={alert.tipo}
        onClose={() => dispatch(fecharAlerta())}
        dismissible
      >
        <Alert.Heading>{alert.tipo}</Alert.Heading>
        <p>{alert.mensagem}</p>
      </Alert>
    );
  }
  return null;
};

export default AlertaPadrao;
