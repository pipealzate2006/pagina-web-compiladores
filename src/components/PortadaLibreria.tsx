const PORTADAS: Record<string, { color: string; importacion: string }> = {
  tkinter: { color: "#7cc7d6", importacion: "import tkinter as tk" },
  customtkinter: {
    color: "#a78bfa",
    importacion: "import customtkinter as ctk",
  },
  pyqt: { color: "#7ee08a", importacion: "from PyQt6 import QtWidgets" },
  pyside: { color: "#6ee7b7", importacion: "from PySide6 import QtWidgets" },
  pygtk: { color: "#f0c265", importacion: "import gtk" },
  flet: { color: "#f472b6", importacion: "import flet as ft" },
  kivy: { color: "#ff9466", importacion: "from kivy.app import App" },
  pandas: { color: "#8b9dff", importacion: "import pandas as pd" },
  openpyxl: { color: "#9fd36b", importacion: "import openpyxl" },
  tensorflow: { color: "#ffb05c", importacion: "import tensorflow as tf" },
  flask: { color: "#e2e2de", importacion: "from flask import Flask" },
};

type PortadaLibreriaProps = {
  id: string;
  nombre: string;
  className?: string;
};

export default function PortadaLibreria({
  id,
  nombre,
  className = "",
}: PortadaLibreriaProps) {
  const portada = PORTADAS[id];
  console.log(id);

  return (
    <div
      className={`flex h-full w-full flex-col justify-between p-6 ${className}`}
      style={{ backgroundColor: `${portada.color}1a` }}
    >
      <code className="text-sm" style={{ color: portada.color }}>
        {portada.importacion}
      </code>
      <p className="text-3xl font-semibold">{nombre}</p>
    </div>
  );
}
